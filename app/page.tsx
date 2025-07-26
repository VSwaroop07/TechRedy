"use client";

import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import WhyChooseTechRedy from "@/components/WhyChooseTechRedy";
import TechRedyCourses from "@/components/TechRedyCourses";
import InteractiveSkillBoard from "@/components/InteractiveSkillBoard";
import AnimatedProgressTracker from "@/components/AnimatedProgressTracker";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import FloatingActionMenu from "@/components/FloatingActionMenu";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section - Main landing area */}
      <Hero />

      {/* Interactive Skill Board - Drag & Drop */}
      <InteractiveSkillBoard />

      {/* About Us Section */}
      <AboutUs />

      {/* Why Choose TechRedy Section */}
      <WhyChooseTechRedy />

      {/* TechRedy Courses & Offerings */}
      <TechRedyCourses />

      {/* Animated Progress Tracker */}
      <AnimatedProgressTracker />

      {/* Call to Action Section */}
      <CallToAction />

      {/* Footer Section */}
      <Footer />

      {/* Floating Action Menu */}
      <FloatingActionMenu />
    </div>
  );
}
