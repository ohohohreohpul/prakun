# IndexNow – nach jedem Deploy ausführen
# Meldet alle URLs aus der Live-Sitemap sofort an Bing/Yandex (speist auch ChatGPT- & Copilot-Suche).

```bash
URLS=$(curl -s https://www.prakunthaimassage.de/sitemap-0.xml | grep -o '<loc>[^<]*' | sed 's/<loc>//' | python3 -c "import sys,json;print(json.dumps([l.strip() for l in sys.stdin if l.strip()]))")
curl -s -o /dev/null -w "IndexNow HTTP %{http_code}\n" -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "{\"host\":\"www.prakunthaimassage.de\",\"key\":\"48939c7b7cee4349a793369b8e3e4dc3\",\"keyLocation\":\"https://www.prakunthaimassage.de/48939c7b7cee4349a793369b8e3e4dc3.txt\",\"urlList\":$URLS}"
```

HTTP 200 or 202 = accepted.
