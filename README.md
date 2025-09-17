# Blurt - AI-Driven News Storytelling Platform

An AI-driven storytelling platform that transforms news into a WhatsApp-style group chat, where characters with rich backstories debate weekly headlines. Built end-to-end with Google sign-in, animated onboarding, real-time chat UI, and AI-generated conversations—focusing on engagement, scalability, and clean UX. The goal is to make news consumption interactive and addictive by blending narrative design with modern full-stack development.

## 🌟 Features

### Core Functionality
- **AI-Generated News Storytelling**: Transforms weekly headlines into WhatsApp-style group chats
- **Character-Driven Narratives**: Rich backstories for AI personas (Ruhi, Kunal, Harshit, Bhumika) who debate news
- **Interactive Chat Interface**: Real-time WhatsApp-like experience with typing animations
- **News-to-Chat Transformation**: Converts traditional news consumption into engaging conversations
- **Weekly Content Updates**: Fresh AI-generated debates around current headlines

### User Experience
- **Google OAuth Authentication**: Seamless sign-in experience
- **Animated Onboarding**: Smooth user introduction flow
- **User Personalization**: Custom avatars, colors, and display preferences
- **Dark/Light Mode**: Toggle between themes for better user experience
- **Responsive Design**: Optimized for desktop and mobile devices

### Content Features
- **Weekly Blurts**: Fresh AI-generated conversations around current headlines
- **News Integration**: Debates based on real trending topics and sources
- **Export Functionality**: Download conversations as PDF (in chat app)
- **Interactive UI**: Smooth animations and transitions using GSAP and Framer Motion
- **Addictive UX Design**: Engineered for engagement and repeat visits

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - Modern UI library with hooks
- **Vite 6.0.5** - Fast build tool and dev server
- **React Router DOM 7.1.5** - Client-side routing
- **Framer Motion 12.4.5** - Smooth animations and transitions
- **GSAP 3.12.7** - Advanced animations
- **FontAwesome** - Icon library
- **HTML2Canvas & HTML-to-Image** - Screenshot and export functionality

### Backend
- **Node.js** - JavaScript runtime
- **Express 4.21.2** - Web application framework
- **MongoDB 6.12.0** - NoSQL database
- **Mongoose 8.9.3** - MongoDB object modeling

### Authentication & Security
- **Passport.js 0.7.0** - Authentication middleware
- **Passport Google OAuth20 2.0.0** - Google authentication strategy
- **JWT (jsonwebtoken 9.0.2)** - Token-based authentication
- **Express Session 1.18.1** - Session management
- **Connect-Mongo 5.1.0** - MongoDB session store

### Development & Deployment
- **Vercel** - Serverless deployment platform
- **ESLint** - Code linting and formatting
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
blurtpfft/
├── client/                    # Frontend React application
│   ├── src/
│   │   ├── components/
│   │   │   ├── blurts/       # Chat and blurt-related components
│   │   │   ├── styles/       # Component-specific styles
│   │   │   └── ...           # Other UI components
│   │   ├── App.jsx           # Main application component
│   │   └── main.jsx          # Application entry point
│   ├── public/               # Static assets
│   ├── vercel.json           # Vercel deployment config
│   └── package.json          # Frontend dependencies
│
├── server/                    # Backend Node.js application
│   ├── controllers/          # Route handlers and business logic
│   ├── models/               # MongoDB/Mongoose schemas
│   ├── routes/               # API route definitions
│   ├── config/               # Configuration files
│   ├── middlewares/          # Custom middleware
│   ├── app.js                # Express server setup
│   ├── vercel.json           # Vercel serverless config
│   └── package.json          # Backend dependencies
│
└── chatappforblurt/          # Standalone chat export utility
    └── src/components/       # Chat rendering and PDF export
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB database
- Google OAuth credentials

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/cjaradhye/blurtpfft.git
   cd blurtpfft
   ```

2. **Install client dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install server dependencies**
   ```bash
   cd ../server
   npm install
   ```

4. **Environment Setup**
   Create `.env` file in the server directory:
   ```env
   MONGOURL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

5. **Development Setup**
   
   Start the backend server:
   ```bash
   cd server
   npm start
   ```
   
   Start the frontend development server:
   ```bash
   cd client
   npm run dev
   ```

### Production Deployment

The application is configured for Vercel deployment:

- **Frontend**: Deployed as a static site with SPA routing
- **Backend**: Deployed as serverless functions
- **Database**: MongoDB Atlas for production data storage

## 📊 Database Schema

### User Model
```javascript
{
  googleId: String,      // Google OAuth ID
  name: String,          // Real name from Google
  nickname: String,      // Custom display name
  email: String,         // User email
  picture: String,       // Profile picture URL
  color: String,         // User's chosen color theme
  mode: Boolean,         // Dark/light mode preference
  settings: Object       // User preferences
}
```

### Blurt Model
```javascript
{
  blurt_name: String,    // Unique identifier (e.g., "blurt_2025_02_21")
  content: Array,        // JSON chat conversation data
  createdAt: Date,       // Creation timestamp
  newsSources: String,   // Source of the news topic
  link: String          // Reference link to original news
}
```

## 🔒 Security Features

- **OAuth 2.0 Authentication** via Google
- **JWT Token Management** for secure sessions
- **CORS Configuration** for cross-origin security
- **Session Storage** in MongoDB for scalability
- **Environment Variable Protection** for sensitive data

## 🎨 UI/UX Features

- **Responsive Design** that works on all devices
- **Smooth Animations** using Framer Motion and GSAP
- **Custom Color Themes** for user personalization
- **Dark/Light Mode Toggle** for accessibility
- **Chat-like Interface** with realistic typing animations
- **Mobile-Optimized** touch interactions

## 📈 Performance Optimizations

- **Vite Build System** for fast development and optimized production builds
- **React 18 Features** including concurrent rendering
- **MongoDB Indexing** for fast database queries
- **Serverless Architecture** for automatic scaling
- **CDN Delivery** via Vercel's global edge network

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Live Demo**: [https://www.nahneedpfft.com](https://www.nahneedpfft.com)
- **API Base URL**: [https://blurtpfft.vercel.app](https://blurtpfft.vercel.app)

## 👥 Team

- **Developer**: [cjaradhye](https://github.com/cjaradhye)

---

*Built with ❤️ using React, Node.js, and MongoDB*
