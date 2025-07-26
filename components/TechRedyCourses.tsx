"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "./ScrollAnimation";
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Users,
  MapPin,
  Monitor,
  Clock,
  Star,
  ArrowRight,
  Calendar,
  Target,
  Award,
  TrendingUp,
  BookOpen,
} from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Full Stack Development",
    description:
      "Master both frontend and backend technologies with hands-on projects",
    duration: "6 months",
    level: "Beginner to Advanced",
    type: "Featured",
    price: "₹45,000",
    originalPrice: "₹60,000",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    skills: ["React", "Node.js", "MongoDB", "Express"],
    highlights: ["Live Projects", "Job Assistance", "Industry Mentors"],
    rating: 4.9,
    enrolled: 1200,
  },
  {
    id: 2,
    title: "Data Science & Analytics",
    description:
      "Learn Python, ML, AI and data visualization for modern analytics",
    duration: "5 months",
    level: "Intermediate",
    type: "Popular",
    price: "₹40,000",
    originalPrice: "₹55,000",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    skills: ["Python", "Machine Learning", "Pandas", "TensorFlow"],
    highlights: ["Real Datasets", "Kaggle Projects", "Industry Case Studies"],
    rating: 4.8,
    enrolled: 950,
  },
  {
    id: 3,
    title: "Digital Marketing Mastery",
    description:
      "Complete digital marketing with SEO, SEM, social media & analytics",
    duration: "4 months",
    level: "All Levels",
    type: "In-Demand",
    price: "₹25,000",
    originalPrice: "₹35,000",
    icon: Globe,
    color: "from-green-500 to-teal-500",
    skills: ["SEO", "Google Ads", "Social Media", "Analytics"],
    highlights: [
      "Live Campaigns",
      "Google Certification",
      "Portfolio Building",
    ],
    rating: 4.7,
    enrolled: 800,
  },
  {
    id: 4,
    title: "Mobile App Development",
    description:
      "Build native and cross-platform mobile apps for iOS and Android",
    duration: "5 months",
    level: "Intermediate",
    type: "Trending",
    price: "₹42,000",
    originalPrice: "₹58,000",
    icon: Smartphone,
    color: "from-orange-500 to-red-500",
    skills: ["React Native", "Flutter", "iOS", "Android"],
    highlights: ["App Store Deploy", "Real Apps", "UI/UX Focused"],
    rating: 4.8,
    enrolled: 650,
  },
];

const benefits = [
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry professionals with 10+ years experience",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description:
      "Weekend and evening batches available for working professionals",
  },
  {
    icon: Award,
    title: "Industry Certification",
    description: "Get recognized certificates valued by top companies",
  },
  {
    icon: Target,
    title: "Job Placement",
    description: "100% job assistance with our 500+ hiring partner network",
  },
  {
    icon: BookOpen,
    title: "Lifetime Access",
    description: "Access course materials and updates forever",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Average 180% salary increase within 6 months",
  },
];

const TechRedyCourses: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation direction="up" className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
            TechRedy Courses
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Career Path
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join thousands of professionals who&apos;ve accelerated their
            careers with our industry-focused training programs designed by
            experts.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center text-gray-700">
              <Monitor className="w-5 h-5 mr-2 text-blue-600" />
              Online Available
            </div>
            <div className="flex items-center text-gray-700">
              <MapPin className="w-5 h-5 mr-2 text-green-600" />
              Offline Available
            </div>
            <div className="flex items-center text-gray-700">
              <Users className="w-5 h-5 mr-2 text-purple-600" />
              Limited Seats
            </div>
          </div>
        </ScrollAnimation>

        {/* Courses Grid */}
        <ScrollAnimation
          direction="up"
          duration={0.8}
          delay={0.2}
          stagger={0.3}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {courses.map((course) => {
              const IconComponent = course.icon;
              return (
                <Card
                  key={course.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <Badge
                        className={`${
                          course.type === "Featured"
                            ? "bg-orange-100 text-orange-800"
                            : course.type === "Popular"
                            ? "bg-blue-100 text-blue-800"
                            : course.type === "In-Demand"
                            ? "bg-green-100 text-green-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {course.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2">
                      {course.title}
                    </CardTitle>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-gray-500" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-500" />
                          <span>{course.rating}</span>
                          <span className="text-gray-500 ml-1">
                            ({course.enrolled}+ enrolled)
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-green-600">
                            {course.price}
                          </span>
                          <span className="text-lg text-gray-500 line-through">
                            {course.originalPrice}
                          </span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {course.level}
                        </Badge>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-gray-900">
                          Skills You&apos;ll Learn:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {course.skills.map((skill, idx) => (
                            <Badge
                              key={idx}
                              variant="secondary"
                              className="text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-gray-900">
                          Course Highlights:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {course.highlights.map((highlight, idx) => (
                            <Badge
                              key={idx}
                              className="text-xs bg-green-100 text-green-800"
                            >
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </ScrollAnimation>

        {/* Benefits Section */}
        <ScrollAnimation direction="up" duration={0.8} delay={0.4}>
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose TechRedy Courses?
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience the TechRedy difference with our comprehensive
                approach to skill development and career advancement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Call to Action */}
        <ScrollAnimation direction="up" duration={0.8} delay={0.6}>
          <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Learning?
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Join over 10,000+ successful graduates who transformed their
              careers with TechRedy. Your journey to tech excellence starts
              here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                Explore All Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Demo
              </Button>
            </div>
            <div className="mt-6 text-blue-100 text-sm">
              <p>📞 Call us: +91-8179191999 | 📧 Email: courses@techready.in</p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default TechRedyCourses;
