# 🚀 Portfolio Website - Resume Builder

สวัสดี! นี่คือ Portfolio Website ที่สร้างด้วย **React** + **Tailwind CSS** สำหรับสมัครงาน

## 📋 Features

✅ **Home Page** - ชื่อ, Avatar, Tagline, CTA Buttons  
✅ **About Me** - ประวัติ, จุดเด่น, เป้าหมาย  
✅ **Skills** - แบ่ง Frontend/Backend/Tools พร้อม Rating ⭐  
✅ **Projects** - Gallery ผลงานพร้อม Links (GitHub, Live Demo)  
✅ **Experience & Education** - Timeline ประสบการณ์การศึกษา  
✅ **Contact** - ฟอร์มติดต่อ, Social Links, Download Resume  
✅ **Responsive Design** - Mobile Friendly  
✅ **SEO Optimized** - Meta Tags สำหรับ Search Engine  

## 🛠️ Tech Stack

- **Frontend**: React 19+
- **Styling**: Tailwind CSS 3+
- **Build**: React Scripts / Webpack

## 🚀 Quick Start

```bash
npm install
npm start
```

App จะเปิดที่ http://localhost:3000

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.js       # Navigation Bar
│   ├── Home.js         # Home Section
│   ├── About.js        # About Me
│   ├── Skills.js       # Skills Display
│   ├── Projects.js     # Projects Gallery
│   ├── Experience.js   # Experience & Education
│   ├── Contact.js      # Contact Form
│   └── Footer.js       # Footer
├── App.js              # Main App
└── App.css             # Styles
```

## 🎨 How to Customize

### 1. Update Your Info
Edit `Home.js` ให้ใส่ชื่อและตำแหน่งของคุณ

### 2. Add Your Skills
Edit `Skills.js` ให้เพิ่มทักษะของคุณ

### 3. Add Your Projects
Edit `Projects.js` ให้เพิ่มโปรเจกต์ของคุณ

### 4. Update Experience
Edit `Experience.js` ให้เพิ่มประสบการณ์ของคุณ

### 5. Add Social Links
Update links ใน `Contact.js` และ `Footer.js`

## 🌐 Deployment

### Deploy to Vercel (ง่ายที่สุด)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Build: `npm run build`
2. Drag `build` folder ขึ้นไป Netlify

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```

## 💡 Tips

- ใช้ Real Projects จากที่ทำมาจริง
- ให้ Live Demo Links เพื่อ HR ทดลองใช้
- ใส่ GitHub Links เพื่อแสดง Code
- ใช้รูปที่สวยงาม
- ทดสอบบน Mobile
- Update ผลงานใหม่ๆ ตามเวลา

Happy Coding! 💻✨
