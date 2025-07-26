"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "./ScrollAnimation";
import {
  BookOpen,
  Users,
  TrendingUp,
  Laptop,
  MessageSquare,
  Award,
  Target,
  Clock,
  Star,
  Zap,
  Shield,
  Globe,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function WhyChooseTechRedy() {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Free Resources",
      description:
        "Access to premium quality courses, tutorials, and documentation without any cost barriers.",
      highlights: ["150+ Free Courses", "Updated Weekly", "Industry Standards"],
      color: "blue",
    },
    {
      icon: Users,
      title: "Expert Mentorship Network",
      description:
        "Get guidance from experienced professionals working at top tech companies worldwide.",
      highlights: ["1-on-1 Mentoring", "Industry Experts", "Career Guidance"],
      color: "teal",
    },
    {
      icon: TrendingUp,
      title: "Proven Success Track Record",
      description:
        "Join thousands who have successfully transitioned to fulfilling tech careers through our platform.",
      highlights: ["85% Success Rate", "2500+ Alumni", "Real Results"],
      color: "green",
    },
    {
      icon: Laptop,
      title: "Hands-On Technical Training",
      description:
        "Learn through practical projects using the latest technologies and industry best practices.",
      highlights: ["Real Projects", "Latest Tech Stack", "Portfolio Building"],
      color: "purple",
    },
    {
      icon: MessageSquare,
      title: "24/7 Community Support",
      description:
        "Never learn alone with our active community of peers, mentors, and industry professionals.",
      highlights: ["Active Discord", "Peer Learning", "Instant Help"],
      color: "orange",
    },
    {
      icon: Target,
      title: "Personalized Learning Paths",
      description:
        "Customized roadmaps based on your goals, experience level, and preferred technologies.",
      highlights: ["Custom Roadmaps", "Skill Assessment", "Progress Tracking"],
      color: "pink",
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Learn at Your Own Pace",
      description: "Flexible learning that fits your schedule and lifestyle.",
    },
    {
      icon: Shield,
      title: "Industry-Relevant Curriculum",
      description:
        "Skills that employers actually want and need in today's market.",
    },
    {
      icon: Globe,
      title: "Global Community",
      description:
        "Connect with learners and professionals from around the world.",
    },
    {
      icon: Zap,
      title: "Fast-Track Your Career",
      description: "Accelerate your journey from beginner to professional.",
    },
  ];

  const getColorClass = (color: string) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600",
      teal: "from-teal-500 to-teal-600",
      green: "from-green-500 to-green-600",
      purple: "from-purple-500 to-purple-600",
      orange: "from-orange-500 to-orange-600",
      pink: "from-pink-500 to-pink-600",
    };
    return (
      colorMap[color as keyof typeof colorMap] || "from-gray-500 to-gray-600"
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation direction="up" className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
            Why Choose TechRedy?
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Gateway to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Tech Success
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes TechRedy the preferred choice for aspiring
            technologists worldwide. Join a platform that&apos;s designed for
            your success.
          </p>
        </ScrollAnimation>

        {/* Main Features Grid */}
        <ScrollAnimation direction="up" stagger={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${getColorClass(
                        feature.color
                      )} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{feature.description}</p>
                    <div className="space-y-2">
                      {feature.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </ScrollAnimation>

        {/* Additional Benefits */}
        <ScrollAnimation direction="up" className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Benefits
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Even more reasons why TechRedy stands out in the crowded field of
              tech education.
            </p>
          </div>

          <ScrollAnimation direction="up" stagger={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </ScrollAnimation>

        {/* Success Stories Section */}
        <ScrollAnimation
          direction="up"
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Join Our Success Stories
              </h3>
              <p className="text-blue-100 text-lg mb-6">
                Every day, TechRedy members are landing their dream jobs,
                starting their own companies, and making meaningful
                contributions to the tech industry. Your success story could be
                next.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-3" />
                  <span>Average salary increase: 180%</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-yellow-400 mr-3" />
                  <span>95% report career satisfaction improvement</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-yellow-400 mr-3" />
                  <span>85% get job offers within 6 months</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">2500+</div>
                <div className="text-blue-100">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Partner Companies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">150+</div>
                <div className="text-blue-100">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Support Available</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Start Your Success Story
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
