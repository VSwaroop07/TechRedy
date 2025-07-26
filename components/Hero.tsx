"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { IMAGES } from "@/lib/constants/images";
import {
  ArrowRight,
  Users,
  BookOpen,
  Award,
  MessageSquare,
  ChevronDown,
  Sparkles,
  Rocket,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
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

  const heroRef = useRef<HTMLElement>(null);
  const fullText = "TechRedy";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {isMounted &&
          particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20"
              animate={{
                x: [0, Math.sin(i) * 30],
                y: [0, Math.cos(i) * 30],
                opacity: [0.2, 0.8, 0.2],
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
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 px-4 py-2 text-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            Empowering Future Technologists
          </Badge>
        </motion.div>

        {/* Logo and Main Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-2xl">
              <OptimizedImage
                src={IMAGES.logos.techRedy}
                alt="TechRedy Logo"
                width={64}
                height={64}
                className="object-contain"
                priority
              />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {displayText}
            </span>
            {!isTypingComplete && <span className="animate-pulse">|</span>}
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Transform your tech career with{" "}
            <span className="text-blue-300 font-semibold">free resources</span>,
            <span className="text-purple-300 font-semibold">
              {" "}
              expert mentorship
            </span>
            , and
            <span className="text-pink-300 font-semibold">
              {" "}
              comprehensive training
            </span>
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
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Join Community
            </Button>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
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
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
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
        </motion.div>
      </div>

      {/* Decorative Elements */}
      {isMounted && (
        <>
          <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-float"></div>
          <div
            className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-br from-pink-400 to-blue-500 rounded-full opacity-20 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </>
      )}
    </section>
  );
}
