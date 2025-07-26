"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  CheckCircle,
  Clock,
  Award,
  BookOpen,
  Users,
  Target,
  Zap,
  TrendingUp,
} from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface LearningStep {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed: boolean;
  current: boolean;
  icon: React.ElementType;
  color: string;
  progress: number;
}

const learningSteps: LearningStep[] = [
  {
    id: "basics",
    title: "Programming Fundamentals",
    description:
      "Master the core concepts of programming with hands-on exercises",
    duration: "4 weeks",
    completed: true,
    current: false,
    icon: BookOpen,
    color: "from-green-400 to-green-600",
    progress: 100,
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Build beautiful user interfaces with React and modern CSS",
    duration: "6 weeks",
    completed: false,
    current: true,
    icon: Play,
    color: "from-blue-400 to-blue-600",
    progress: 65,
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Create robust APIs and database systems",
    duration: "8 weeks",
    completed: false,
    current: false,
    icon: Clock,
    color: "from-purple-400 to-purple-600",
    progress: 0,
  },
  {
    id: "fullstack",
    title: "Full-Stack Projects",
    description: "Build complete applications from front to back",
    duration: "10 weeks",
    completed: false,
    current: false,
    icon: Target,
    color: "from-orange-400 to-orange-600",
    progress: 0,
  },
  {
    id: "deployment",
    title: "Deployment & DevOps",
    description: "Launch your applications to production",
    duration: "4 weeks",
    completed: false,
    current: false,
    icon: Zap,
    color: "from-pink-400 to-pink-600",
    progress: 0,
  },
  {
    id: "career",
    title: "Career Preparation",
    description: "Interview prep, portfolio building, and job search",
    duration: "6 weeks",
    completed: false,
    current: false,
    icon: Award,
    color: "from-yellow-400 to-yellow-600",
    progress: 0,
  },
];

export default function AnimatedProgressTracker() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(1);
  // const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const cards = containerRef.current?.querySelectorAll(".progress-card");
    const timeline = timelineRef.current;

    if (!cards || !timeline) return;

    // Animate cards on scroll
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
          rotation: 5,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.1,
        }
      );
    });

    // Animate timeline on scroll
    gsap.fromTo(
      timeline,
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: timeline,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleStepClick = (stepIndex: number, stepId: string) => {
    const card = containerRef.current?.querySelector(
      `[data-step-id="${stepId}"]`
    );

    if (card) {
      // Pulse animation
      gsap.to(card, {
        scale: 1.05,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      });

      // Progress bar animation
      const progressBar = card.querySelector(".progress-bar");
      if (progressBar) {
        gsap.fromTo(
          progressBar,
          { width: "0%" },
          {
            width: `${learningSteps[stepIndex].progress}%`,
            duration: 1.5,
            ease: "power2.out",
            delay: 0.2,
          }
        );
      }
    }

    setActiveStep(stepIndex);
  };

  const handleStepHover = (stepId: string, isHovering: boolean) => {
    const card = containerRef.current?.querySelector(
      `[data-step-id="${stepId}"]`
    );

    if (card) {
      if (isHovering) {
        gsap.to(card, {
          y: -10,
          scale: 1.02,
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
          duration: 0.3,
          ease: "power2.out",
        });
        // setHoveredStep(stepId);
      } else {
        gsap.to(card, {
          y: 0,
          scale: 1,
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          duration: 0.3,
          ease: "power2.out",
        });
        // setHoveredStep(null);
      }
    }
  };

  const getStepStatus = (step: LearningStep) => {
    if (step.completed) return "completed";
    if (step.current) return "current";
    return "upcoming";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-100";
      case "current":
        return "text-blue-600 bg-blue-100";
      case "upcoming":
        return "text-gray-600 bg-gray-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusIcon = (step: LearningStep) => {
    if (step.completed) return CheckCircle;
    if (step.current) return Play;
    return Clock;
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
            Your Learning Journey
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Track Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Progress
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow a structured learning path designed by industry experts. Each
            step builds upon the previous one to ensure comprehensive skill
            development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline */}
          <div
            ref={timelineRef}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"
            style={{ height: "calc(100% - 100px)", top: "50px" }}
          ></div>

          {/* Progress Steps */}
          <div ref={containerRef} className="space-y-8">
            {learningSteps.map((step, index) => {
              const IconComponent = step.icon;
              const StatusIcon = getStatusIcon(step);
              const status = getStepStatus(step);
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={step.id}
                  className={`flex items-center ${
                    isLeft ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div className={`w-5/12 ${isLeft ? "pr-8" : "pl-8"}`}>
                    <Card
                      className={`progress-card cursor-pointer transition-all duration-300 hover:shadow-xl ${
                        activeStep === index ? "ring-2 ring-blue-500" : ""
                      }`}
                      data-step-id={step.id}
                      onClick={() => handleStepClick(index, step.id)}
                      onMouseEnter={() => handleStepHover(step.id, true)}
                      onMouseLeave={() => handleStepHover(step.id, false)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}
                          >
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <Badge
                            className={`${getStatusColor(status)} capitalize`}
                          >
                            {status}
                          </Badge>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{step.description}</p>

                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm text-gray-500 flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {step.duration}
                          </span>
                          <span className="text-sm font-semibold text-gray-700">
                            {step.progress}% Complete
                          </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                          <div
                            className={`progress-bar h-2 bg-gradient-to-r ${step.color} rounded-full transition-all duration-1000`}
                            style={{ width: `${step.progress}%` }}
                          ></div>
                        </div>

                        {status === "current" && (
                          <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                            Continue Learning
                            <Play className="w-4 h-4 ml-2" />
                          </Button>
                        )}

                        {status === "upcoming" && (
                          <Button variant="outline" className="w-full">
                            Coming Soon
                            <Clock className="w-4 h-4 ml-2" />
                          </Button>
                        )}

                        {status === "completed" && (
                          <div className="flex items-center justify-center text-green-600 font-semibold">
                            <CheckCircle className="w-5 h-5 mr-2" />
                            Completed
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg border-4 border-white`}
                    >
                      <StatusIcon className="w-8 h-8 text-white" />
                    </div>

                    {/* Step Number */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                      <span className="bg-white px-3 py-1 rounded-full text-sm font-bold text-gray-700 shadow-md border">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Empty Space */}
                  <div className="w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <TrendingUp className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {learningSteps.filter((s) => s.completed).length}/
                {learningSteps.length}
              </h3>
              <p className="text-gray-600">Steps Completed</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">2,500+</h3>
              <p className="text-gray-600">Students Following This Path</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <Award className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">85%</h3>
              <p className="text-gray-600">Success Rate</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
