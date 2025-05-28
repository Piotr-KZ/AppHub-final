# 🧪 AppHub v3.1 – DEV START

---

## 🔧 Jak uruchomić projekt

1. **Zainstaluj zależności**
   ```bash
   npm install
   ```

2. **Dodaj swój klucz OpenAI**
   Utwórz plik `.env.local`:
   ```
   OPENAI_API_KEY=sk-xxxxxxx
   ```

3. **Uruchom lokalny serwer**
   ```bash
   npm run dev
   ```

---

## 📂 Struktura projektu (skrócona)

- `/pages/api/` — endpointy backendowe
- `/ai/` — logika AI: PR, retry, strateg
- `/utils/` — snapshoty, storage, changelog
- `/data/` — stan projektu: plan, h2, valid
- `/tmp/` — eksport ZIP

---

## 🌐 Dostępne endpointy testowe

| Endpoint | Opis |
|----------|------|
| `POST /api/import-plan` | Wgraj plan.json |
| `POST /api/atom-ai` | Wygeneruj `h2` przez AI dla atomu |
| `POST /api/update-atom` | Ręczna aktualizacja statusu |
| `GET /api/get-project` | Pobierz plan + stan |
| `POST /api/release` | Stwórz release |
| `POST /api/rollback` | Przywróć ostatni backup |
| `GET /api/zip-export` | Pobierz ZIP projektu |
| `POST /api/sign` | Podpisz obiekt hash-em |

---

📌 Wszystkie dane są trzymane w folderze `/data/`.  
Zarządzaj nimi przez API lub ręcznie.

📎 Pełna dokumentacja w `README.md`
