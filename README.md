# Sahil Sachan's Personal Portfolio

A modern, highly interactive, and responsive personal portfolio built to showcase my projects, skills, and professional journey. The design emphasizes a premium glassmorphic aesthetic ("Olive + Sage" theme) with smooth animations and dynamic components.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and Tailwind CSS 4.
- **Interactive UI**: Engaging micro-interactions, smooth scrolling (Lenis), and dynamic animations using Framer Motion and GSAP.
- **Project Showcase**: An interactive project section featuring a custom following pointer effect.
- **Skills & Education**: Animated visual representations of technical proficiency and academic background.
- **GitHub Insights**: Integration to showcase open-source contributions and coding activity.
- **Contact Form**: Functional contact system powered by EmailJS.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.

## 🌟 Featured Projects

### Attendify – AI-Powered Smart Attendance System
*Jan 2026 – Present*
- Engineered a facial recognition-based attendance system using Python, OpenCV, and DeepFace (ArcFace model), achieving ~95% recognition accuracy across 100+ registered users.
- Built a full-stack solution with React (Vite), Flask, and MongoDB Atlas with JWT authentication, Cloudinary image storage, and real-time attendance logging.
- Deployed as Android APK via Capacitor with camera access and GPS geo-fencing, cutting manual attendance time by ~80%.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **Library**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/), [GSAP](https://gsap.com/)
- **Icons**: [Tabler Icons](https://tabler.io/icons), [Lucide React](https://lucide.dev/)
- **3D & WebGL**: [OGL](https://github.com/oframe/ogl)

### Integrations
- **Email Service**: [EmailJS](https://www.emailjs.com/)

## 📂 Project Structure

```bash
├── src/
│   ├── app/           # Next.js App Router (Pages, Layout, globals.css)
│   ├── components/    # Reusable React components (UI, Hero, Contact, etc.)
│   └── lib/           # Utility functions and configurations
├── public/            # Static assets (images, icons)
├── package.json       # Project dependencies and scripts
└── tailwind.config.js # Tailwind CSS configuration
```

## 💻 Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sahilsachan27/Sahil-portfolio.git
   cd Sahil-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory and add any required API keys (e.g., EmailJS credentials).
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the Development Server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio in action.

## 🤝 Contact

**Sahil Sachan**  
- GitHub: [@Sahilsachan27](https://github.com/Sahilsachan27)
- LinkedIn: [Sahil Sachan](https://www.linkedin.com/in/sahil-sachan-2303/)

---
*Designed and built by Sahil Sachan.*
