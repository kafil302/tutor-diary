# 📒 টিউটর ডায়েরি — PWA

হোম টিউটরদের জন্য অফলাইন সেশন ট্র্যাকার।  
GitHub Pages-এ হোস্ট করে মোবাইলে অ্যাপ হিসেবে ইনস্টল করা যায়।

---

## ✅ ফিচার
- ছাত্র যোগ/মুছো, বেতন ও শ্রেণী সেভ
- প্রতিটি সেশনে তারিখ, সময়, **কী পড়ালাম**, নোট রেকর্ড
- মাস শুরুর তারিখ ট্র্যাক
- মাসিক রিপোর্ট — ছাত্র ভিত্তিক সেশন ও সময়
- সম্পূর্ণ অফলাইন (PWA)
- ডেটা ফোনেই থাকে (localStorage)

---

## 🚀 GitHub Pages-এ পাবলিশ করার নির্দেশনা

### ধাপ ১ — GitHub অ্যাকাউন্ট
[github.com](https://github.com) এ অ্যাকাউন্ট না থাকলে তৈরি করো।

### ধাপ ২ — নতুন Repository তৈরি
1. GitHub-এ লগইন করো
2. উপরে ডানে **"+"** বাটন → **"New repository"** ক্লিক করো
3. Repository name দাও: `tutor-diary`
4. **Public** সিলেক্ট করো
5. **"Create repository"** চাপো

### ধাপ ৩ — ফাইল আপলোড
নতুন repository তৈরির পর **"uploading an existing file"** লিংকে ক্লিক করো।

এই ৪টি ফাইল আপলোড করো:
```
index.html
manifest.json
sw.js
icon-192.png
icon-512.png
```

তারপর নিচে **"Commit changes"** চাপো।

### ধাপ ৪ — GitHub Pages চালু করো
1. Repository-তে **Settings** ট্যাবে যাও
2. বাম মেনুতে **Pages** ক্লিক করো
3. **Source** এর নিচে **"Deploy from a branch"** সিলেক্ট করো
4. Branch: **main**, Folder: **/ (root)** সিলেক্ট করো
5. **Save** চাপো

৩-৫ মিনিট পর তোমার অ্যাপের লিংক পাবে:
```
https://তোমার-username.github.io/tutor-diary/
```

---

## 📱 মোবাইলে অ্যাপ হিসেবে ইনস্টল করো

### Android (Chrome):
1. উপরের লিংক Chrome-এ খোলো
2. কিছুক্ষণ পর নিচে **"Add to Home screen"** পপআপ আসবে
3. অথবা: মেনু (⋮) → **"Add to Home screen"**
4. **"Install"** চাপো

### iPhone (Safari):
1. Safari-তে লিংক খোলো
2. নিচে **Share** বাটন (□↑) চাপো
3. **"Add to Home Screen"** চাপো
4. **"Add"** চাপো

---

## ⚠️ গুরুত্বপূর্ণ নোট
- ডেটা ব্রাউজারের **localStorage**-এ সেভ থাকে
- **"Clear browsing data"** করলে ডেটা মুছে যাবে
- প্রতি মাসে Summary-র স্ক্রিনশট রেখে দেওয়া ভালো
