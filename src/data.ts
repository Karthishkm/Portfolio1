import { Skill, Achievement, Education, Project } from './types';
import {
  Code2, Server, Database, Brain, Cloud, Terminal, GitBranch,
  TestTube, Layout, Trophy, Globe, Cpu, Shield, Palette
} from 'lucide-react';

export const skills: Skill[] = [
  {
    name: "Frontend Development",
    icon: "layout",
    category: "Web Development",
    proficiency: 90,
    projects: [
      {
        title: "AI-Enhanced Personal Finance Dashboard",
        description: "Interactive dashboard with dynamic visualizations for finance tracking",
        techStack: ["React.js", "Recharts.js", "Zustand", "Tailwind CSS", "Framer Motion"],
        features: [
          "Dashboard with interactive graphs",
          "Transaction Management",
          "Data Visualization",
          "Budget Tracking",
          "Dark Mode",
          "Persistent Storage"
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        demoLink: "https://finance-dashboard.demo",
        githubLink: "https://github.com/Karthishkm/PersonalFinancetracker.git"
      }
    ]
  },
  {
    name: "Backend Development",
    icon: "server",
    category: "Web Development",
    proficiency: 85,
    projects: [
      {
        title: "E-Commerce Platform",
        description: "Full-stack MERN application with complete shopping features",
        techStack: ["Node.js", "Express.js", "MongoDB", "React.js"],
        features: [
          "User Authentication",
          "Product Management",
          "Shopping Cart",
          "Order Processing",
          "Admin Dashboard"
        ],
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
        githubLink: "https://github.com/Karthishkm/AI-Powerd-ecommerce.git"
      }
    ]
  },
  {
    name: "Machine Learning & AI",
    icon: "brain",
    category: "Artificial Intelligence",
    proficiency: 80,
    projects: [
      {
        title: "AI-Based Crop Prediction System",
        description: "Agricultural assistance system with ML-powered predictions",
        techStack: ["Python", "Flask", "Python-AIML", "scikit-learn"],
        features: [
          "Crop Prediction",
          "Weather Analysis",
          "Chatbot Support",
          "Soil Analysis"
        ],
        image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800",
        githubLink: "https://github.com/Karthishkm/Crop-Predection-using-AIML.git"
      }
    ]
  },
  {
    name: "DevOps & Cloud",
    icon: "cloud",
    category: "Infrastructure",
    proficiency: 75,
    projects: [
      {
        title: "Automated CI/CD Pipeline",
        description: "Containerized application deployment with automated testing",
        techStack: ["Docker", "Jenkins", "AWS", "Kubernetes"],
        features: [
          "Automated Deployments",
          "Container Orchestration",
          "Monitoring",
          "Auto-scaling"
        ],
        image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800",
        githubLink: "https://github.com/Karthishkm/cicd-pipeline"
      }
    ]
  }
];

export const stats = [
  { label: "Projects Completed", value: "15+" },
  { label: "Technologies", value: "20+" },
  { label: "Certifications", value: "5+" },
  { label: "Research Papers", value: "2+" }
];

export const socialLinks = {
  github: "https://github.com/Karthishkm",
  linkedin: "https://www.linkedin.com/in/karthish-sd/",
  email: "karthishkm@gmail.com",
  phone: "8088252957",
  location: "Bangalore, India"
};

export const education: Education[] = [
  {
    degree: "BE in Information Science",
    institution: "AMC Engineering College, Bangalore",
    duration: "2021 - 2025",
    description: "Focused on computer science fundamentals, software engineering, and artificial intelligence",
    achievements: [
      "Runner-up in district-level Kabaddi (12th grade)",
      "Active member of the college coding club",
      "Led team projects in AI and web development",
      "Participated in multiple hackathons"
    ]
  }
];

export const achievements: Achievement[] = [
  {
    title: "Best Project Award - AI Mock Interview Bot",
    date: "2024",
    description: "First place in ISE department project showcase for innovative use of AI in interview preparation",
    organization: "ISE Department, AMC Engineering College",
    icon: "trophy"
  },
  {
    title: "Research Paper Publication",
    date: "2023",
    description: "Published paper on 'AI-Driven Agricultural Solutions' in International Journal of Advanced Research",
    organization: "IJAR",
    icon: "scroll"
  },
  {
    title: "Google Cloud Certification",
    date: "2023",
    description: "Completed Google Cloud Professional Developer certification",
    organization: "Google Cloud",
    icon: "cloud"
  },
  {
    title: "Hackathon Winner",
    date: "2023",
    description: "Won first place in ISE department hackathon for AI-powered E-commerce solution",
    organization: "ISE Department, AMC Engineering College",
    icon: "award"
  }
];

export const projects: Project[] = [
  {
    title: "AI-Enhanced Personal Finance Dashboard",
    description: "Interactive dashboard with dynamic visualizations for finance tracking and budget management. Features real-time data analysis and AI-powered insights.",
    techStack: ["React.js", "Recharts.js", "Zustand", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    githubLink: "https://github.com/Karthishkm/PersonalFinancetracker.git",
    category: "Web Development",
    features: [
      "Real-time expense tracking",
      "Interactive data visualizations",
      "Budget planning tools",
      "AI-powered insights",
      "Dark mode support"
    ]
  },
  {
    title: "Placement Portal",
    description: "Comprehensive college placement management system with student profiles, job postings, and automated interview scheduling.",
    techStack: ["Django", "PostgreSQL", "React", "Redux", "Material-UI"],
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800",
    githubLink: "https://github.com/Karthishkm/placement-portal",
    category: "Web Development",
    features: [
      "Student profile management",
      "Company job postings",
      "Interview scheduling",
      "Resume builder",
      "Analytics dashboard"
    ]
  },
  {
    title: "AI-Powered E-Commerce Platform",
    description: "Full-stack e-commerce platform with AI chatbot integration for customer support and personalized recommendations.",
    techStack: ["MERN Stack", "Socket.io", "Redis", "Docker", "TensorFlow"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
    githubLink: "https://github.com/Karthishkm/AI-Powerd-ecommerce.git",
    category: "Web Development",
    features: [
      "AI-powered chatbot",
      "Real-time inventory management",
      "Payment gateway integration",
      "Admin dashboard",
      "Analytics and reporting"
    ]
  },
  {
    title: "AI Mock Interview Bot",
    description: "AI-powered system for resume analysis and automated interview preparation using the Gemini API.",
    techStack: ["Python", "React", "Google Gemini API", "NLP", "MongoDB"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800",
    githubLink: "https://github.com/Karthishkm/AI-Powerd-mock-interview-Bot.git",
    category: "Machine Learning",
    features: [
      "Resume scoring",
      "Interview question generation",
      "Skill gap analysis",
      "Performance analytics",
      "Personalized feedback"
    ]
  },
  {
    title: "Railway Ticket Reservation System",
    description: "Comprehensive railway booking system with real-time seat availability and smart booking suggestions.",
    techStack: ["Java", "Spring Boot", "MySQL", "React", "Redux"],
    image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800",
    githubLink: "https://github.com/Karthishkm/Railway-online-ticket-reservation-.git",
    category: "Web Development",
    features: [
      "Real-time seat tracking",
      "Smart booking system",
      "Payment integration",
      "Ticket management",
      "User notifications"
    ]
  },
  {
    title: "Hotel Management System",
    description: "Modern hotel booking and management system with real-time availability checking and automated booking confirmation.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    githubLink: "https://github.com/Karthishkm/hotel-management",
    category: "Web Development",
    features: [
      "Room booking system",
      "Payment processing",
      "Availability calendar",
      "Review system",
      "Admin dashboard"
    ]
  },
  {
    title: "AI-Based Crop Prediction System",
    description: "Agricultural assistance system with ML-powered crop predictions and an intelligent chatbot for farmer support.",
    techStack: ["Python", "Flask", "Python-AIML", "TensorFlow", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1631279644130-f9618f5b4e44?w=800",
    githubLink: "https://github.com/Karthishkm/Crop-Predection-using-AIML.git",
    category: "Machine Learning",
    features: [
      "Crop yield prediction",
      "Weather analysis",
      "Disease detection",
      "Chatbot support",
      "Soil analysis"
    ]
  },
  {
    title: "Automated Testing Framework",
    description: "Comprehensive Selenium-based testing framework for e-commerce platforms with detailed reporting.",
    techStack: ["Selenium", "Python", "TestNG", "Jenkins", "Docker"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800",
    githubLink: "https://github.com/Karthishkm/testing-framework",
    category: "DevOps",
    features: [
      "Automated test cases",
      "CI/CD integration",
      "Performance testing",
      "Report generation",
      "Cross-browser testing"
    ]
  },
  {
    title: "AI-Powered Blog Platform",
    description: "MERN stack blog platform with AI-powered content generation and SEO optimization features.",
    techStack: ["MERN Stack", "OpenAI API", "Redux", "MongoDB", "AWS"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800",
    githubLink: "https://github.com/Karthishkm/blog-platform",
    category: "Web Development",
    features: [
      "AI content generation",
      "SEO optimization",
      "Rich text editor",
      "Analytics dashboard",
      "Social sharing"
    ]
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with detailed forecasts and interactive maps using OpenWeather API.",
    techStack: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS", "Redux"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800",
    githubLink: "https://github.com/Karthishkm/weather-app",
    category: "Web Development",
    features: [
      "Real-time updates",
      "5-day forecast",
      "Interactive maps",
      "Location search",
      "Weather alerts"
    ]
  },
  {
    title: "Movie Recommendation System",
    description: "ML-based movie recommendation system using collaborative and content-based filtering techniques.",
    techStack: ["Python", "scikit-learn", "Flask", "React", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800",
    githubLink: "https://github.com/Karthishkm/movie-recommender",
    category: "Machine Learning",
    features: [
      "Personalized recommendations",
      "Rating system",
      "Watch history",
      "Genre analysis",
      "Similar movie suggestions"
    ]
  },
  {
    title: "Real-time Chat Application",
    description: "Feature-rich chat application with real-time messaging and Firebase authentication.",
    techStack: ["React", "Firebase", "Socket.io", "Material-UI", "Redux"],
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800",
    githubLink: "https://github.com/Karthishkm/chat-app",
    category: "Web Development",
    features: [
      "Real-time messaging",
      "User authentication",
      "File sharing",
      "Group chats",
      "Message encryption"
    ]
  }
];