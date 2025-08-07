import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Video,
  Zap,
  Globe,
  Download,
  Clock,
  Sparkles,
  ArrowRight,
  Check,
  Play,
  Users,
  Star,
  TrendingUp,
  Shield,
  Cpu,
  Wand2,
  Target
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const LandingPage: React.FC = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (currentUser) {
      navigate('/upload');
    } else {
      navigate('/auth');
    }
  };

  const handleViewPricing = () => {
    navigate('/pricing');
  };

  const features = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Multi-Platform Precision",
      description:
        "Automatically optimize videos for Instagram Reels (9:16), YouTube Shorts (16:9), and Facebook (4:5) with pixel-perfect formatting",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Wand2 className="h-8 w-8" />,
      title: "AI-Powered Captions",
      description:
        "Advanced Whisper AI extracts crystal-clear audio while Gemini AI crafts engaging, platform-specific captions and trending hashtags",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Permanent Archive",
      description:
        "Never lose your content again. Access all processed videos, metadata, and analytics through your secure, persistent dashboard",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Lightning Downloads",
      description:
        "Preview any processed video instantly and download with enterprise-grade speed and reliability. Your content, always ready",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const benefits = [
    "Transform one upload into multiple platform-ready videos",
    "AI-generated captions with 99.5% accuracy using Whisper technology",
    "Smart hashtag recommendations tailored to each platform's algorithm",
    "Unlimited storage with instant access to your entire video library",
    "Professional-grade processing powered by FFmpeg technology",
    "Bank-level security with encrypted storage and authenticated access",
  ];

  const stats = [
    { number: "50K+", label: "Videos Transformed", icon: <Video className="h-5 w-5" /> },
    { number: "2.5K+", label: "Active Creators", icon: <Users className="h-5 w-5" /> },
    { number: "3", label: "Platforms Supported", icon: <Globe className="h-5 w-5" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <TrendingUp className="h-5 w-5" /> },
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Content Creator • 2.1M followers",
      content:
        "CrossPost AI revolutionized my workflow. What used to take 4 hours now takes 4 minutes. The AI captions are incredibly accurate and engaging!",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=400&h=400&fit=crop",
    },
    {
      name: "Marcus Chen",
      role: "Social Media Manager • Tech Startup",
      content:
        "Managing content for 15+ client accounts became effortless. The platform-specific optimizations are spot-on, and our engagement rates increased by 340%.",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=400&h=400&fit=crop",
    },
    {
      name: "Emma Rodriguez",
      role: "YouTuber • 850K subscribers",
      content:
        "The AI understands context better than I expected. Every caption feels natural and authentic. My audience loves the consistent quality across all platforms!",
      rating: 5,
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=400&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-slate-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <Video className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tight">
                One Video,
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                  Infinite Reach
                </span>
              </h1>
            </div>

            <div className="animate-fade-in-up animation-delay-200">
              <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed font-light">
                Revolutionary AI transforms your content into platform-perfect videos with intelligent captions,
                optimal formatting, and viral hashtags—all in seconds.
              </p>
            </div>

            <div className="animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button
                onClick={handleGetStarted}
                className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3 animate-pulse-subtle"
              >
                <span>Start Creating Magic</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </button>
              <button
                onClick={handleViewPricing}
                className="border-2 border-white/20 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:border-white/40 hover:bg-white/5 transition-all transform hover:scale-105 backdrop-blur-sm"
              >
                Explore Pricing
              </button>
            </div>

            {/* Stats */}
            <div className="animate-fade-in-up animation-delay-600 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all"
                >
                  <div className="flex justify-center mb-3 text-blue-400 group-hover:text-purple-400 transition-colors">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-black text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Engineered for
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Creative Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light">
              Every feature crafted with obsessive attention to detail, powered by cutting-edge AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow border-t-4"
                style={{ borderColor: `var(--tw-gradient-stops)` }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
