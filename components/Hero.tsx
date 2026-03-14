"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

import {
  ArrowRight,
  Users,
  BookOpen,
  Award,
  MessageSquare,
  ChevronDown,
  Sparkles,
  Rocket,
  Star,
  Zap,
  Target,
  TrendingUp,
} from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [counts, setCounts] = useState({
    members: 0,
    courses: 0,
    placements: 0,
  });
  const [particles, setParticles] = useState<Array<{ x: number; y: number }>>(
    []
  );
  const [isMounted, setIsMounted] = useState(false);
  const [currentBadgeIndex, setCurrentBadgeIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [dynamicStats, setDynamicStats] = useState({
    onlineUsers: 0,
    coursesCompleted: 0,
    successStories: 0,
  });

  const heroRef = useRef<HTMLElement>(null);
  const fullText = "TechRedy IT Training";

  const logos = [
  "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg",     // React
  "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg",  // Node.js
  "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg",     // Docker
  "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg",     // GitHub
  "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg", // JavaScript
  "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg",     // Python
];


  // Dynamic badge messages
  const badgeMessages = [
    { text: "Empowering Future Technologists", icon: Sparkles },
    { text: "Industry-Leading Curriculum", icon: Star },
    { text: "Real-World Projects", icon: Target },
    { text: "Career Growth Guaranteed", icon: TrendingUp },
    { text: "AI-Powered Learning", icon: Zap },
  ];

  // Initialize particles and mounted state
  useEffect(() => {
    setIsMounted(true);
    // Generate fixed particles to avoid hydration mismatch
    const generatedParticles = Array.from({ length: 50 }, (_, i) => ({
      x: (i * 7.3) % 100, // Use deterministic positioning
      y: (i * 11.7) % 100,
    }));
    setParticles(generatedParticles);
  }, []);

  // Mouse tracking for interactive effects
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    }
  }, []);

  useEffect(() => {
    const current = heroRef.current;
    if (current) {
      current.addEventListener("mousemove", handleMouseMove);
      current.addEventListener("mouseenter", () => setIsHovering(true));
      current.addEventListener("mouseleave", () => setIsHovering(false));
    }

    return () => {
      if (current) {
        current.removeEventListener("mousemove", handleMouseMove);
        current.removeEventListener("mouseenter", () => setIsHovering(true));
        current.removeEventListener("mouseleave", () => setIsHovering(false));
      }
    };
  }, [handleMouseMove]);

  // Dynamic badge rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBadgeIndex((prev) => (prev + 1) % badgeMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [badgeMessages.length]);

  // Dynamic stats simulation
  useEffect(() => {
    const updateStats = () => {
      setDynamicStats({
        onlineUsers: Math.floor(Math.random() * 50) + 150,
        coursesCompleted: Math.floor(Math.random() * 10) + 890,
        successStories: Math.floor(Math.random() * 5) + 45,
      });
    };

    updateStats(); // Initial call
    const interval = setInterval(updateStats, 5000);
    return () => clearInterval(interval);
  }, []);

  // Typing animation effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  // Counter animation
  useEffect(() => {
    if (isTypingComplete) {
      const animateCounts = () => {
        const targetCounts = { members: 2500, courses: 150, placements: 85 };
        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;

        let step = 0;
        const timer = setInterval(() => {
          step++;
          const progress = step / steps;
          setCounts({
            members: Math.floor(targetCounts.members * progress),
            courses: Math.floor(targetCounts.courses * progress),
            placements: Math.floor(targetCounts.placements * progress),
          });

          if (step >= steps) {
            setCounts(targetCounts);
            clearInterval(timer);
          }
        }, stepDuration);

        return () => clearInterval(timer);
      };

      setTimeout(animateCounts, 500);
    }
  }, [isTypingComplete]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-us");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white "
    >
      {/* Animated Background Particles */}
      {/* <div className="absolute inset-0 overflow-hidden">
        {isMounted &&
          particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20"
              animate={{
                x: [0, Math.sin(i) * 30],
                y: [0, Math.cos(i) * 30],
                opacity: [0.2, 0.8, 0.2],
                scale: isHovering ? [1, 1.5, 1] : [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
              }}
            />
          ))}
      </div> */}


      <div className="absolute inset-0 overflow-hidden">
  {isMounted &&
    particles.map((particle, i) => {
      const logo = logos[i % logos.length];

      return (
        <motion.div
          key={i}
          animate={{
            x: [0, Math.sin(i) * 40],
            y: [0, Math.cos(i) * 40],
            rotate: [0, 360],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 6 + (i % 4),
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            position: "absolute",
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
        >
          <Image
            src={logo}
            alt="tech logo"
            width={40}
            height={40}
            className="opacity-20"
          />
        </motion.div>
      );
    })}
</div>

      {/* Interactive cursor follow effect */}
      {/* {isHovering && (
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl pointer-events-none"
          animate={{
            x: `${mousePosition.x}%`,
            y: `${mousePosition.y}%`,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 200,
          }}
          style={{
            transform: "translate(-50%, -50%)",
          }}
        />
      )} */}

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentBadgeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-4 py-2 text-sm">
                {React.createElement(badgeMessages[currentBadgeIndex].icon, {
                  className: "w-4 h-4 mr-2",
                })}
                {badgeMessages[currentBadgeIndex].text}
              </Badge>
            </motion.div>
          </AnimatePresence>
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center gap-4 mb-6"
        >
          {/* <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          > */}
            <Image
              src="/techredylogo.png" // Path relative to the public folder
              alt="TechRedy Logo"
              width={100} // Adjust width
              height={100} // Adjust height
              
            />
          {/* </motion.div> */}
        </motion.div>
        {/* Logo and Main Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <motion.h1
            className="text-2xl md:text-4xl font-bold text-white mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-[#F09526]">
             {displayText}
            </span>
            {!isTypingComplete && <span className="animate-pulse">|</span>}
          </motion.h1>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <p className="text-xl md:text-2xl text-[#3665AA] max-w-4xl mx-auto leading-relaxed">
            Transform your tech career with{" "}
            <span className="text-blue-300 font-semibold">Advanced resources , expert mentorship , comprehensive training</span>
            
            . Join our community of passionate learners and industry
            professionals.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#3665AA] to-[#F09526] hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Join Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Internship Program
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-8 h-8 text-blue-400 mr-2" />
              <span className="text-4xl font-bold text-white">
                {counts.members.toLocaleString()}+
              </span>
            </div>
            <p className="text-blue-200 font-medium">Active Members</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <BookOpen className="w-8 h-8 text-purple-400 mr-2" />
              <span className="text-4xl font-bold text-white">
                {counts.courses}+
              </span>
            </div>
            <p className="text-blue-200 font-medium">Free Courses</p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Award className="w-8 h-8 text-pink-400 mr-2" />
              <span className="text-4xl font-bold text-white">
                {counts.placements}%
              </span>
            </div>
            <p className="text-blue-200 font-medium">Success Rate</p>
          </div>
        </motion.div> */}

        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-blue-200 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm mb-2">Discover More</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </button>
        </motion.div> */}
      </div> 

     
    </section>
  );
}
