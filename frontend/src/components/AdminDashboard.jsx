import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Upload, Trash2, LogOut, Image, Settings, ChevronDown, ChevronRight, 
  Save, RefreshCw, Check, X, Phone, Mail, MapPin
} from 'lucide-react';

const AdminDashboard = () => {
  const [categories, setCategories] = useState({});
  const [images, setImages] = useState([]);
  const [settings, setSettings] = useState({});
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState({});
  const [message, setMessage] = useState({ type: '', text: '' });
  const [activeTab, setActiveTab] = useState('images');
  const navigate = useNavigate();

  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

  const getAuthHeaders = useCallback(() => {
    const token = localStorage.getItem('admin_token');
    return {
      'Authorization': `Bearer ${token}`
    };
  }, []);

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: '', text: '' }), 3000);
  };

  const fetchData = useCallback(async () => {
    try {
      const [categoriesRes, imagesRes, settingsRes] = await Promise.all([
        fetch(`${BACKEND_URL}/api/admin/image-categories`, { headers: getAuthHeaders() }),
        fetch(`${BACKEND_URL}/api/images`),
        fetch(`${BACKEND_URL}/api/settings`)
      ]);

      if (categoriesRes.status === 401) {
        localStorage.removeItem('admin_token');
        navigate('/admin');
        return;
      }

      setCategories(await categoriesRes.json());
      setImages(await imagesRes.json());
      setSettings(await settingsRes.json());
    } catch (err) {
      showMessage('error', 'Fehler beim Laden der Daten');
    } finally {
      setLoading(false);
    }
  }, [BACKEND_URL, getAuthHeaders, navigate]);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      navigate('/admin');
      return;
    }
    fetchData();
  }, [fetchData, navigate]);

  const getImageUrl = (category, itemId, imageType) => {
    const imageId = `${category}_${itemId}_${imageType}`;
    const found = images.find(img => img.id === imageId);
    return found?.image_url || null;
  };

  const handleUpload = async (e, category, itemId, imageType) => {
    const file = e.target.files[0];
    if (!file) return;

    const uploadKey = `${category}_${itemId}_${imageType}`;
    setUploading(prev => ({ ...prev, [uploadKey]: true }));

    const formData = new FormData();
    formData.append('file', file);
    formData.append('category', category);
    formData.append('item_id', itemId);
    formData.append('image_type', imageType);

    try {
      const response = await fetch(`${BACKEND_URL}/api/admin/upload`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: formData
      });

      if (!response.ok) throw new Error('Upload fehlgeschlagen');

      await fetchData();
      showMessage('success', 'Bild erfolgreich hochgeladen');
    } catch (err) {
      showMessage('error', err.message);
    } finally {
      setUploading(prev => ({ ...prev, [uploadKey]: false }));
    }
  };

  const handleDelete = async (imageId) => {
    if (!window.confirm('Bild wirklich löschen?')) return;

    try {
      const response = await fetch(`${BACKEND_URL}/api/admin/images/${imageId}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
      });

      if (!response.ok) throw new Error('Löschen fehlgeschlagen');

      await fetchData();
      showMessage('success', 'Bild gelöscht');
    } catch (err) {
      showMessage('error', err.message);
    }
  };

  const handleSettingsUpdate = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/admin/settings`, {
        method: 'PUT',
        headers: {
          ...getAuthHeaders(),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(settings)
      });

      if (!response.ok) throw new Error('Speichern fehlgeschlagen');
      showMessage('success', 'Einstellungen gespeichert');
    } catch (err) {
      showMessage('error', err.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    navigate('/admin');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <RefreshCw className="w-8 h-8 animate-spin text-emerald-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Abmelden
          </button>
        </div>
      </header>

      {/* Message */}
      {message.text && (
        <div className={`fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg flex items-center gap-2 ${
          message.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`}>
          {message.type === 'success' ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
          {message.text}
        </div>
      )}

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('images')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'images' 
                ? 'bg-emerald-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Image className="w-4 h-4 inline mr-2" />
            Bilder
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'settings' 
                ? 'bg-emerald-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Settings className="w-4 h-4 inline mr-2" />
            Einstellungen
          </button>
        </div>

        {/* Images Tab */}
        {activeTab === 'images' && (
          <div className="space-y-4">
            {Object.entries(categories).map(([categoryKey, category]) => (
              <div key={categoryKey} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => setExpandedCategory(expandedCategory === categoryKey ? null : categoryKey)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800">{category.label}</span>
                  {expandedCategory === categoryKey ? (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </button>

                {expandedCategory === categoryKey && (
                  <div className="border-t border-gray-100 p-6">
                    <div className="grid gap-6">
                      {category.items.map((item) => (
                        <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                          <h4 className="font-medium text-gray-700 mb-4">{item.label}</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {item.types.map((imageType) => {
                              const uploadKey = `${categoryKey}_${item.id}_${imageType}`;
                              const currentUrl = getImageUrl(categoryKey, item.id, imageType);
                              const isUploading = uploading[uploadKey];

                              return (
                                <div key={imageType} className="border border-gray-100 rounded-lg p-3">
                                  <p className="text-sm text-gray-500 mb-2 capitalize">
                                    {imageType.replace(/([A-Z])/g, ' $1').trim()}
                                  </p>
                                  
                                  {currentUrl ? (
                                    <div className="relative group">
                                      <img
                                        src={currentUrl.startsWith('/api') ? `${BACKEND_URL}${currentUrl}` : currentUrl}
                                        alt={item.label}
                                        className="w-full h-32 object-cover rounded-lg"
                                      />
                                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                                        <label className="p-2 bg-white rounded-full cursor-pointer hover:bg-gray-100">
                                          <Upload className="w-4 h-4 text-gray-700" />
                                          <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={(e) => handleUpload(e, categoryKey, item.id, imageType)}
                                          />
                                        </label>
                                        <button
                                          onClick={() => handleDelete(`${categoryKey}_${item.id}_${imageType}`)}
                                          className="p-2 bg-red-500 rounded-full hover:bg-red-600"
                                        >
                                          <Trash2 className="w-4 h-4 text-white" />
                                        </button>
                                      </div>
                                    </div>
                                  ) : (
                                    <label className={`
                                      w-full h-32 border-2 border-dashed border-gray-300 rounded-lg
                                      flex flex-col items-center justify-center cursor-pointer
                                      hover:border-emerald-500 hover:bg-emerald-50 transition-colors
                                      ${isUploading ? 'opacity-50 pointer-events-none' : ''}
                                    `}>
                                      {isUploading ? (
                                        <RefreshCw className="w-6 h-6 animate-spin text-emerald-600" />
                                      ) : (
                                        <>
                                          <Upload className="w-6 h-6 text-gray-400 mb-2" />
                                          <span className="text-sm text-gray-500">Bild hochladen</span>
                                        </>
                                      )}
                                      <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) => handleUpload(e, categoryKey, item.id, imageType)}
                                        disabled={isUploading}
                                      />
                                    </label>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">Website Einstellungen</h3>
            
            <div className="space-y-4 max-w-lg">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Telefonnummer
                </label>
                <input
                  type="text"
                  value={settings.phone || ''}
                  onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  E-Mail
                </label>
                <input
                  type="email"
                  value={settings.email || ''}
                  onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-2" />
                  Adresse
                </label>
                <input
                  type="text"
                  value={settings.address || ''}
                  onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Stadt / PLZ
                </label>
                <input
                  type="text"
                  value={settings.city || ''}
                  onChange={(e) => setSettings({ ...settings, city: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <button
                onClick={handleSettingsUpdate}
                className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
              >
                <Save className="w-4 h-4" />
                Speichern
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
