
```markdown
# 🔒 Cybersecurity Dashboard


A responsive dashboard for monitoring security threats with user authentication, built with React, Vite, and Firebase.

🌐 **Live Demo:** [https://cybersecurity-dashboard-red.vercel.app/](https://cybersecurity-dashboard-red.vercel.app/)

## ✨ Features

- **Secure Authentication**: Firebase-powered login system
- **Real-time Monitoring**: Live threat activity visualization
- **Responsive Design**: Works on all device sizes
- **Security Overview**: Status cards with key metrics
- **Attack Analysis**: Interactive threat distribution charts

## 🛠️ Tech Stack

- ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
- ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
- ![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
- ![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)
- ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## 🚀 Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cybersecurity-dashboard.git
   ```

2. Set up Firebase:
   - Create a project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Email/Password and Google authentication

3. Add your Firebase config:
   ```bash
   cp .env.example .env
   ```
   Fill in your Firebase credentials:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-bucket.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. Install dependencies and run:
   ```bash
   npm install
   npm run dev
   ```