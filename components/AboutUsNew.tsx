"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, BookOpen, Award, Target, Lightbulb } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

export default function AboutUs() {
  const values = [
    {
      icon: Heart,
      title: "Passion for Learning",
      description:
        "We believe in the transformative power of education and continuous learning.",
      color: "text-red-500",
    },
    {
      icon: Users,
      title: "Community First",
      description:
        "Building a supportive ecosystem where everyone grows together.",
      color: "text-blue-500",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description:
        "Focused on practical skills that lead to real career opportunities.",
      color: "text-green-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Embracing cutting-edge technologies and modern teaching methods.",
      color: "text-yellow-500",
    },
  ];

  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation direction="up" duration={0.8}>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
              About TechRedy
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Empowering the Next Generation of
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Technologists
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TechRedy is more than just a learning platform—we're a community
              dedicated to democratizing technology education and creating
              pathways to successful tech careers.
            </p>
          </div>
        </ScrollAnimation>

        {/* Story Section */}
        <ScrollAnimation direction="left" duration={0.8} delay={0.2}>
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Story
                </h3>
                <div className="space-y-4 text-lg text-gray-700">
                  <p>
                    Founded with a vision to bridge the gap between academic
                    learning and industry requirements, TechRedy began as a
                    small initiative to empower aspiring technologists.
                  </p>
                  <p>
                    Today, we've grown into a comprehensive learning ecosystem
                    that combines cutting-edge curriculum, personalized
                    mentorship, and real-world project experience.
                  </p>
                  <p>
                    Our mission remains unchanged: to make quality tech
                    education accessible to everyone, regardless of their
                    background or location.
                  </p>
                </div>
              </div>
              <ScrollAnimation direction="scale" duration={0.8} delay={0.4}>
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                  <h4 className="text-2xl font-bold mb-6">Our Impact</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">2500+</div>
                      <div className="text-blue-100">Community Members</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">150+</div>
                      <div className="text-blue-100">Free Resources</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">85%</div>
                      <div className="text-blue-100">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">24/7</div>
                      <div className="text-blue-100">Community Support</div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>

        {/* Values Section */}
        <ScrollAnimation direction="up" duration={0.8} delay={0.4}>
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do and shape our approach
                to education and community building.
              </p>
            </div>
            <ScrollAnimation direction="up" duration={0.6} stagger={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <Card
                      key={index}
                      className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                    >
                      <CardHeader>
                        <div className="flex justify-center mb-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                            <IconComponent
                              className={`w-8 h-8 ${value.color}`}
                            />
                          </div>
                        </div>
                        <CardTitle className="text-xl">{value.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{value.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>

        {/* Call to Action */}
        <ScrollAnimation direction="scale" duration={0.8} delay={0.6}>
          <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Career?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of learners who have successfully transitioned into
              tech careers with TechRedy's comprehensive programs and supportive
              community.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Badge className="bg-blue-100 text-blue-700 border-blue-200 px-4 py-2">
                <BookOpen className="w-4 h-4 mr-2" />
                Continuous Learning
              </Badge>
              <Badge className="bg-purple-100 text-purple-700 border-purple-200 px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                Global Community
              </Badge>
              <Badge className="bg-green-100 text-green-700 border-green-200 px-4 py-2">
                <Target className="w-4 h-4 mr-2" />
                Career Success
              </Badge>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
