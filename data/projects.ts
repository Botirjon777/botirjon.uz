import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "006",
    name: "Real-time Chat Platform",
    shortDescription: "Scalable WebSocket-based chat service with Redis and Nest.js",
    description:
      "A fast and robust real-time chat application built for e-commerce environments. It leverages Socket.io for bidirectional communication, Redis for pub/sub messaging and session storage, and Nest.js for a structured backend. Features include real-time room creation, operator dashboards, and offline message handling.",
    technologies: [
      "Nest.js",
      "Next.js",
      "Socket.io",
      "Redis",
      "Zustand",
      "TypeScript",
    ],
    features: [
      "Real-time messaging with Socket.io",
      "Scalable pub/sub architecture using Redis",
      "Client-Operator room management",
      "State management with Zustand for fluid UI",
    ],
    githubUrl: "https://github.com/Botirjon777/realtime-chat",
  },
  {
    id: "007",
    name: "Dadi Media",
    shortDescription: "High-performance landing page for a modern media agency",
    description:
      "A fully responsive and SEO-optimized landing page designed for Dadi Media Company. Built with Next.js to ensure lightning-fast load times and excellent Core Web Vitals, it features smooth animations and a premium dark-themed aesthetic.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Server-side rendering for optimal SEO",
      "Fluid animations and transitions",
      "Responsive design across all device types",
      "Optimized asset delivery for speed",
    ],
    liveUrl: "https://dadi.uz",
    githubUrl: "https://github.com/Botirjon777/dadi-uz",
  },
  {
    id: "008",
    name: "Fajka Bar Management",
    shortDescription: "Full-stack bar management system with MongoDB and Next.js",
    description:
      "A comprehensive solution for bar operations, featuring a multi-user admin panel for managing menus, orders, and inventory. The system uses MongoDB for flexible data storage and Next.js server actions for secure, high-performance operations.",
    technologies: ["Next.js", "MongoDB", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    features: [
      "Robust Admin Panel for inventory management",
      "Real-time order tracking and status updates",
      "Secure authentication and role-based access",
      "Bilingual menu support (UZ/RU)",
    ],
    githubUrl: "https://github.com/Botirjon777/fajka-bar-next",
  },
  {
    id: "009",
    name: "Art Lavka 3D",
    shortDescription: "Interactive 3D e-commerce with Telegram bot integration",
    description:
      "A cutting-edge e-commerce platform for personalized T-shirt printing. It features an interactive 3D viewer built with Three.js, allowing users to preview prints in real-time. The system is tightly integrated with Telegram via webhooks for instant order notifications to channels and groups.",
    technologies: ["Next.js", "Three.js", "Telegram Bot API", "Webhooks", "TypeScript"],
    features: [
      "Interactive 3D T-shirt print configurator",
      "Automated order notifications via Telegram",
      "Real-time updates using Telegram Webhooks",
      "Integrated payment gateway support",
    ],
    githubUrl: "https://github.com/Botirjon777/art-lavka-uz",
  },
  {
    id: "010",
    name: "Yashil Yol",
    shortDescription: "Ride-sharing platform connecting drivers and passengers",
    description:
      "Inspired by services like BlaBlaCar, Yashil Yol is a modern ride-sharing platform for Uzbekistan. It allows drivers to post their travel routes and passengers to find affordable rides, reducing travel costs and environmental impact.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Google Maps API"],
    features: [
      "Trip searching and filtering by date/location",
      "User profiles and rating system",
      "Interactive map integration for routes",
      "Dynamic pricing and booking management",
    ],
    githubUrl: "https://github.com/Botirjon777/yashil-yol",
  },
  {
    id: "001",
    name: "Face Recognition & Anti-Spoofing System",
    shortDescription: "Secure facial recognition with spoofing protection",
    description:
      "A backend system built with Node.js for facial recognition using face-api.js, integrated with Python's DeepFace to detect spoofing attempts like printed photos or screen displays.",
    technologies: ["Node.js", "face-api.js", "Python", "DeepFace"],
    features: [
      "Facial feature extraction and comparison using Euclidean distance",
      "Spoofing detection to prevent attacks using photos or screens",
      "Secure API service for facial authentication",
    ],
    githubUrl: "https://github.com/botirjonshokirov03/face-recognition",
    challenges:
      "Finding reliable spoof detection methods in Node.js was challenging. Solved by integrating a Python service using DeepFace, increasing spoof detection accuracy by over 85%.",
  },
  {
    id: "002",
    name: "AI-Powered Telegram Bot",
    shortDescription: "Smart chatbot with user context memory",
    description:
      "A Telegram bot architecture split into API, Bot, and NLP services. It uses FastAPI, SQLite, and OpenAI API to manage user interactions and provide context-aware AI responses.",
    technologies: [
      "Python",
      "FastAPI",
      "SQLite",
      "OpenAI API",
      "Telegram Bot API",
    ],
    features: [
      "User registration and interaction tracking",
      "Context-aware AI responses using OpenAI",
      "Modular architecture: API, Bot, and NLP services",
      "Persistent storage of user queries",
    ],
    githubUrl: "https://github.com/botirjonshokirov03/tg_bot",
    challenges:
      "Maintaining conversation context was complex. Solved by storing user queries in a database, improving response relevance by over 60%.",
  },
  {
    id: "003",
    name: "Cross-Platform Content Poster Bot",
    shortDescription: "Post to Telegram, Instagram, and Facebook via bot",
    description:
      "A Telegram bot that allows users to upload posts with a title, description, and up to 10 images, simultaneously publishing them to Telegram channels, Instagram profiles, and Facebook pages using Facebook Graph API.",
    technologies: ["Node.js", "Telegram Bot API", "Facebook Graph API"],
    features: [
      "Multi-platform post publishing (Telegram, Instagram, Facebook)",
      "Support for post title, description, and multiple images",
      "Automatic long-lived access token management",
    ],
    githubUrl:
      "https://github.com/botirjonshokirov03/tg_bot_instagram_facebook_nodejs",
    challenges:
      "Managing expiring Facebook access tokens was challenging. Implemented a background system to auto-renew tokens, reducing manual intervention by 100% and ensuring continuous bot operation.",
  },
  {
    id: "004",
    name: "Face Recognition and Liveness Detection API",
    shortDescription: "Face anti-spoofing system with custom-trained model",
    description:
      "A Python-based API for face recognition and spoofing detection. Trained a custom liveness detection model using MobileNetV2 on a Kaggle dataset, achieving over 80% validation accuracy. The model was exported to ONNX for production use.",
    technologies: ["Python", "PyTorch", "FastAPI", "ONNX", "MobileNetV2"],
    features: [
      "Custom-trained liveness detection model",
      "Face recognition and spoofing prevention",
      "Model export to ONNX format for efficient deployment",
      "Real-time validation with 80%+ accuracy",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/botirjonshokirov03/face-recognition-api",
    challenges:
      "Training an accurate liveness model required extensive tuning and early stopping techniques. After multiple iterations, achieved a stable validation accuracy of 80%, ensuring robust spoofing detection.",
  },
  {
    id: "005",
    name: "3D Configurator",
    shortDescription:
      "Interactive 3D e-commerce platform for custom PC components",
    description:
      "A full-stack e-commerce platform featuring an interactive 3D configurator for custom PC cables. Integrated with OpenSearch for semantic discovery and an AI assistant for personalized recommendations.",
    technologies: [
      "Next.js",
      "Three.js",
      "SQL Server",
      "Prisma",
      "OpenSearch",
      "OpenAI",
    ],
    features: [
      "Real-time 3D product customization using Three.js",
      "Semantic search and AI-powered product discovery",
      "Full e-commerce suite including cart, checkout, and order tracking",
      "AI assistant for customer support and product guidance",
    ],
    githubUrl: "", // Assuming private or hidden as requested not to mention original name
    challenges:
      "Optimizing 3D rendering for complex geometries and synchronizing real-time configuration state with a robust e-commerce backend.",
  },
];
