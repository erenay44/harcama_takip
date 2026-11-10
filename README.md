# 💰 Harcama Takip

Günlük harcamaları kaydetmeye, kategorilere göre takip etmeye ve toplam tutarı görmeye yarayan basit bir web uygulaması. Veriler tarayıcının **LocalStorage** alanında saklanır, sayfa yenilense de kaybolmaz.

🔗 **Canlı link:** (Netlify/Vercel linkini buraya yapıştır)
📂 **GitHub:** (depo linkini buraya yapıştır)

![Ekran görüntüsü](docs/ekran-goruntusu.png)

## Özellikler
- Açıklama, tutar, tarih ve kategori ile harcama ekleme (boş veya hatalı girişte uyarı)
- Kategoriye göre renkli rozetler
- Üstte toplam tutarı ve kategori bazlı dağılımı gösteren özet kartı
- Kategoriye göre filtreleme
- Harcama silme
- LocalStorage ile kalıcı kayıt
- Mobil uyumlu (responsive) tasarım

## Kullanılan Teknolojiler
- React 18 (Vite ile)
- Saf CSS
- LocalStorage (özel `useLocalStorage` hook'u)
- Yayın: Netlify / Vercel

## Kurulum
```bash
git clone <depo-linki>
cd harcama-takip
npm install
npm run dev      # geliştirme sunucusu (http://localhost:5173)
npm run build    # yayın için derleme (dist/ klasörü)
```

## Proje Yapısı
```
src/
├── App.jsx                 # ana bileşen, state yönetimi
├── components/
│   ├── ExpenseForm.jsx     # harcama ekleme formu
│   ├── ExpenseTable.jsx    # tablo ve filtre
│   └── SummaryCard.jsx     # toplam ve kategori özeti
├── hooks/useLocalStorage.js
├── data/categories.js      # kategoriler, renkler, TL biçimlendirme
└── styles.css
```

## Yapay Zekanın Kullanımı
Bu projede **Claude** (Anthropic) yapay zeka asistanı kullanıldı.

| Aşama | Yapay zekadan alınan yardım |
|---|---|
| Planlama | Uygulama fikri, ekranlar ve veri modeli (`{id, title, amount, category, date}`) birlikte planlandı |
| Geliştirme | Bileşenlerin (form, tablo, özet kartı) ve `useLocalStorage` hook'unun ilk taslağı üretildi |
| Test ve hata ayıklama | Eksik girişte uyarı, sayfa yenileme sonrası veri kalıcılığı ve filtre davranışı kontrol edildi |
| Dokümantasyon | Bu README taslağı hazırlandı |

**Örnek istem:** "React (Vite) ile harcama ekleme formu ve altında harcama tablosu tasarla. Kategorilere renkli rozetler ver, üstte toplam tutarı gösteren bir özet kartı olsun. Veriler LocalStorage'da saklansın."

Üretilen kod okunup anlaşıldı, çalıştırılarak test edildi.

## Olası Geliştirmeler
- Harcama düzenleme
- Aylık grafik
- Dışa aktarma (CSV)
