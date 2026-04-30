============================================
HOME KHAATA v6 — GitHub Upload Guide
گھر کا حساب — PWA Deploy Instructions
============================================

YEH FILES UPLOAD KAREIN:
─────────────────────────
1. index.html       ← home_khaata_v6.html ko RENAME karein index.html
2. manifest.json    ← PWA manifest
3. sw.js            ← Service Worker (offline support)
4. icon-192.png     ← App icon (192x192)
5. icon-512.png     ← App icon (512x512)

GITHUB STEPS (Roman Urdu):
─────────────────────────
1. GitHub.com pe apna account khulein
2. Apni repository mein jaaein (jaise: qaiisar-maker.github.io)
3. "Add file" → "Upload files" pe click karein
4. Upar wali 5 files drag & drop karein
5. "Commit changes" button dabayein
6. 2-3 minute wait karein
7. Apna URL khulein: https://[aapka-username].github.io

PEHLI DAFA SETUP (naya repo):
─────────────────────────────
1. GitHub → "New repository"
2. Name: [username].github.io
3. Public select karein
4. "Create repository"
5. Upar wali files upload karein
6. Settings → Pages → Source: "Deploy from branch" → main → Save

PASSWORD:
─────────────────────────
• Pehli dafa app khulne par "Password Set Karein" pe click karein
• Apna password set karein (kam az kam 4 characters)
• Yeh password yaad rakhein — reset option nahi hai

FEATURES (v6):
─────────────────────────
✅ Password lock screen
✅ Date range report mein payments bhi show hongi
✅ Kharcha + Paid + Baqi — teeno numbers ek jagah
✅ Data Export (JSON backup)
✅ Data Import (restore backup)
✅ PWA — phone mein install ho sakta hai
✅ Offline kaam karta hai (Service Worker)
✅ dd/mm/yy date format
✅ Partial payment support
✅ Canvas receipt download
✅ Settings tab

IMPORTANT NOTES:
─────────────────────────
• Purana data safe rahega — localStorage same rehta hai
• Import se pehle EXPORT zaroor karein (backup)
• Service Worker sirf HTTPS pe kaam karta hai (GitHub Pages = HTTPS ✅)
• Agar localhost pe test karein toh SW kaam nahi karega — yeh normal hai

Powered by: FGI — Faisal Goraya Industry, Ali Pur Chattha
============================================
