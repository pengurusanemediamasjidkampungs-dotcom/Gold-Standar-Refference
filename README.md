# Define the content for README.md
readme_content = """# 🚀 Gold Standard Sovereign IDE

[![Status](https://img.shields.io/badge/Status-Development-yellow.svg)]()
[![AI-Backend](https://img.shields.io/badge/AI-Ollama%20Offline-blue.svg)]()
[![License](https://img.shields.io/badge/License-MIT-green.svg)]()

**Gold Standard Sovereign IDE** adalah persekitaran pembangunan (IDE) berasaskan web yang modular, ultra-ringan, dan berdaulat. Direka khas untuk pembangun yang mementingkan privasi, estetika Cyber-Minimalist, dan integrasi AI lokal sepenuhnya.

---

## 🌟 Ciri Utama

- **Offline-First AI:** Integrasi terus dengan Ollama (DeepSeek-Coder/CodeLlama) melalui WSL2 tanpa memerlukan sambungan internet.
- **Cyber-Minimalist Design:** Antaramuka berasaskan *Glassmorphism* dan estetika Apple-inspired untuk fokus coding yang maksimum.
- **Ultra-Lightweight:** Dibina menggunakan Vanilla JS dan CSS Grid murni—tanpa framework berat, menjimatkan penggunaan RAM (Sesuai untuk peranti 8GB RAM).
- **Hot-Reload Preview:** Lihat perubahan kod secara instan melalui peranti simulasi (Desktop & Mobile).

---

## 🏗️ Senibina Sistem (Architecture)

Sistem ini dibahagikan kepada 5 komponen utama:
1. **The Brain (Metadata):** Pengurusan sekuriti dan kelajuan render.
2. **Command Center (Utility Bar):** Pusat kawalan fail dan enjin.
3. **The Engine Room (Workspace):** Editor modular dengan sistem tab.
4. **The Intelligence Hub (Status Bar):** Metrik prestasi dan status AI.
5. **Sovereign Engine (AI Layer):** Jambatan komunikasi asinkronus ke LLM lokal.

---

## 🛠️ Pemasangan (Setup)

### Prasyarat
- **Windows Subsystem for Linux (WSL2)** dengan Ubuntu.
- **Ollama** terpasang di dalam Ubuntu.
- **PowerShell 7** untuk automasi skrip.

### Langkah-langkah
1. **Clone Repositori:**
   ```bash
   git clone [https://github.com/username/Gold-Standar-Refference.git](https://github.com/username/Gold-Standar-Refference.git)
   ```
2. **Mulakan AI Backend (Ubuntu):**
   ```bash
   ollama serve
   ```
3. **Konfigurasi CORS (Penting):**
   Pastikan pembolehubah persekitaran `OLLAMA_ORIGINS` di-set kepada `"*"` untuk membolehkan komunikasi API.

---

## 📂 Struktur Folder

```text
/project-root
├── index.html          # Struktur Utama
├── /css
│   └── style.css       # Visual & Glassmorphism
├── /js
│   └── script.js       # Logik & AI Bridge
├── DESIGN.md           # Codex Senibina
└── SKILL.md            # Roadmap Pembangunan
```

---

## 🎯 Strategi "Iterative Polish"
Sistem ini menggunakan teknik *Contextual Prompting* di mana segmen kod kecil dihantar ke AI lokal untuk dipolish mengikut standard industri (SOLID/Clean Code), memastikan hasil kerja setanding Senior Developer walaupun menggunakan hardware yang terhad.

---

## 🤝 Sumbangan
Projek ini dibangunkan oleh **Muhammad Aiman bin Mohamad Rafee**. Sebarang cadangan penambahbaikan untuk meningkatkan efisiensi dan estetika amat dialu-alukan.

---

## 📄 Lesen
Projek ini dilesenkan di bawah [MIT License](LICENSE).
"""

# Save to file
with open("README.md", "w", encoding="utf-8") as f:
    f.write(readme_content)



Adakah anda mahu saya bantu buatkan fail **LICENSE** atau fail **.gitignore** supaya repositori anda nampak lebih lengkap dan "Sovereign"?
