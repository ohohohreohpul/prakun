# IndexNow – nach jedem Deploy ausführen
# Meldet alle URLs sofort an Bing/Yandex (speist auch ChatGPT & Copilot Suche)

curl -s -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d '{
    "host": "www.prakunthaimassage.de",
    "key": "48939c7b7cee4349a793369b8e3e4dc3",
    "keyLocation": "https://www.prakunthaimassage.de/48939c7b7cee4349a793369b8e3e4dc3.txt",
    "urlList": [
      "https://www.prakunthaimassage.de/",
      "https://www.prakunthaimassage.de/leistungen",
      "https://www.prakunthaimassage.de/buchen",
      "https://www.prakunthaimassage.de/gutscheine",
      "https://www.prakunthaimassage.de/kontakt",
      "https://www.prakunthaimassage.de/ueber-uns",
      "https://www.prakunthaimassage.de/thai-massage",
      "https://www.prakunthaimassage.de/impressum",
      "https://www.prakunthaimassage.de/datenschutz",
      "https://www.prakunthaimassage.de/agb",
      "https://www.prakunthaimassage.de/massage/teilkoerpermassage",
      "https://www.prakunthaimassage.de/massage/ganzkoerpermassage",
      "https://www.prakunthaimassage.de/massage/aromaoel-massage",
      "https://www.prakunthaimassage.de/massage/hot-stone-massage",
      "https://www.prakunthaimassage.de/massage/lomi-lomi-massage",
      "https://www.prakunthaimassage.de/massage/schwangerschaftsmassage",
      "https://www.prakunthaimassage.de/thai-massage-winterhude",
      "https://www.prakunthaimassage.de/thai-massage-barmbek",
      "https://www.prakunthaimassage.de/thai-massage-eppendorf",
      "https://www.prakunthaimassage.de/thai-massage-uhlenhorst",
      "https://www.prakunthaimassage.de/thai-massage-alsterdorf",
      "https://www.prakunthaimassage.de/thai-massage-eilbek",
      "https://www.prakunthaimassage.de/thai-massage-wandsbek"
    ]
  }'
