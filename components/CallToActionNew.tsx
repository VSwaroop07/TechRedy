"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, MessageSquare, Users, Rocket } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation direction="up" duration={0.8}>
          <div className="text-center">
            {/* Main CTA Content */}
            <div className="mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Ready to Transform Your
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}
                  Tech Career?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-12">
                Join thousands of successful technologists who started their
                journey with TechRedy. Your future in tech begins with a single
                decision.
              </p>

              <ScrollAnimation direction="scale" duration={0.6} delay={0.3}>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                  >
                    Start Your Journey
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <MessageSquare className="mr-2 w-5 h-5" />
                    Book Free Consultation
                  </Button>
                </div>
              </ScrollAnimation>
            </div>

            {/* Stats Cards */}
            <ScrollAnimation
              direction="up"
              duration={0.8}
              delay={0.4}
              stagger={0.2}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2">2500+</h3>
                    <p className="text-blue-100">Students Placed</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2">95%</h3>
                    <p className="text-blue-100">Success Rate</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <MessageSquare className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2">24/7</h3>
                    <p className="text-blue-100">Support Available</p>
                  </CardContent>
                </Card>
              </div>
            </ScrollAnimation>

            {/* Final Message */}
            <ScrollAnimation direction="fade" duration={0.8} delay={0.6}>
              <div className="mt-16">
                <p className="text-lg text-blue-200 max-w-2xl mx-auto">
                  Don&apos;t let another day pass wondering &quot;what if&quot;. Take the first
                  step towards your dream tech career today. Your future self
                  will thank you.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
