"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Brain,
  TrendingUp,
  Clock,
  Target,
  Lightbulb,
  ArrowRight,
  Star,
  BookOpen,
  Users,
  Award,
  ChevronRight,
  Sparkles,
} from "lucide-react";

interface Skill {
  id: string;
  name: string;
  category: "frontend" | "backend" | "mobile" | "ai" | "security";
  level: "beginner" | "intermediate" | "advanced";
}

interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  skills: string[];
  estimatedTime: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  category: string;
  priority: "high" | "medium" | "low";
  prerequisites: string[];
  resources: {
    type: "course" | "project" | "certification" | "practice";
    title: string;
    description: string;
    estimatedHours: number;
  }[];
}

interface AIRoadmapGeneratorProps {
  droppedSkills: { [key: string]: string[] };
  allSkills: Skill[];
}

// Advanced AI-like analysis engine for learning paths
class LearningPathAI {
  private skillCategories = {
    frontend: ["react", "nextjs", "typescript", "javascript", "vue", "angular"],
    backend: [
      "nodejs",
      "python",
      "java",
      "golang",
      "rust",
      "mongodb",
      "postgresql",
    ],
    mobile: ["reactnative", "flutter", "swift", "kotlin", "ionic"],
    ai: ["python", "tensorflow", "pytorch", "machinelearning", "deeplearning"],
    security: ["cybersec", "pentesting", "encryption", "networkSecurity"],
    devops: ["docker", "kubernetes", "aws", "azure", "cicd"],
    fullstack: ["frontend", "backend", "database", "deployment"],
  };

  private careerPaths = {
    "Java Full Stack Developer": {
      requiredSkills: ["java", "spring-boot", "mongodb", "react"],
      recommendedSkills: ["docker", "aws", "api-testing", "github"],
      timeToMaster: "6-8 months",
      salaryRange: "₹6L-₹15L",
      demandLevel: "very high",
      batchInfo: "TechRedy Java Full Stack Batch - 19+ Modules",
    },
    "Digital Marketing Specialist": {
      requiredSkills: ["seo", "social-media", "analytics", "content-marketing"],
      recommendedSkills: ["canva", "figma", "google-ads", "linkedin"],
      timeToMaster: "4-6 months",
      salaryRange: "₹4L-₹10L",
      demandLevel: "high",
      batchInfo: "TechRedy Digital Marketing Course",
    },
    "Cloud Engineer": {
      requiredSkills: ["aws", "docker", "kubernetes", "linux"],
      recommendedSkills: ["terraform", "monitoring", "security", "networking"],
      timeToMaster: "6-10 months",
      salaryRange: "₹8L-₹18L",
      demandLevel: "very high",
      batchInfo: "TechRedy Cloud Computing Course",
    },
    "Salesforce Developer": {
      requiredSkills: ["salesforce", "apex", "lightning", "soql"],
      recommendedSkills: ["integration", "deployment", "testing", "crm"],
      timeToMaster: "4-7 months",
      salaryRange: "₹7L-₹16L",
      demandLevel: "high",
      batchInfo: "TechRedy Salesforce Certification Course",
    },
  };

  analyzeSkillGaps(currentSkills: string[], targetPath: string): string[] {
    const pathRequirements =
      this.careerPaths[targetPath as keyof typeof this.careerPaths];
    if (!pathRequirements) return [];

    const allRequired = [
      ...pathRequirements.requiredSkills,
      ...pathRequirements.recommendedSkills,
    ];
    return allRequired.filter((skill) => !currentSkills.includes(skill));
  }

  generatePersonalizedRoadmap(droppedSkills: {
    [key: string]: string[];
  }): RoadmapItem[] {
    const currentSkills = droppedSkills.learning || [];
    const masteredSkills = droppedSkills.mastered || [];
    // const plannedSkills = droppedSkills.planning || [];

    const allUserSkills = [...currentSkills, ...masteredSkills];
    const roadmapItems: RoadmapItem[] = [];

    // Analyze current skill distribution
    const skillDistribution = this.analyzeSkillDistribution(allUserSkills);
    const suggestedPaths = this.suggestCareerPaths(allUserSkills);

    // Generate immediate next steps
    roadmapItems.push(...this.generateImmediateSteps(currentSkills));

    // Generate skill consolidation recommendations
    roadmapItems.push(...this.generateConsolidationSteps(skillDistribution));

    // Generate career path recommendations
    roadmapItems.push(
      ...this.generateCareerPathSteps(suggestedPaths, allUserSkills)
    );

    // Generate advanced learning opportunities
    roadmapItems.push(...this.generateAdvancedSteps(masteredSkills));

    return roadmapItems.sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
  }

  private analyzeSkillDistribution(skills: string[]) {
    const distribution: { [key: string]: number } = {};
    Object.keys(this.skillCategories).forEach((category) => {
      distribution[category] = skills.filter((skill) =>
        this.skillCategories[
          category as keyof typeof this.skillCategories
        ].includes(skill)
      ).length;
    });
    return distribution;
  }

  private suggestCareerPaths(skills: string[]): string[] {
    const pathScores: { [key: string]: number } = {};

    Object.entries(this.careerPaths).forEach(([path, requirements]) => {
      const matchingSkills = requirements.requiredSkills.filter((skill) =>
        skills.includes(skill)
      );
      pathScores[path] =
        matchingSkills.length / requirements.requiredSkills.length;
    });

    return Object.entries(pathScores)
      .filter(([, score]) => score > 0.3)
      .sort(([, a], [, b]) => b - a)
      .map(([path]) => path);
  }

  private generateImmediateSteps(
    currentSkills: string[]
    // masteredSkills: string[]
  ): RoadmapItem[] {
    const steps: RoadmapItem[] = [];

    if (currentSkills.length > 0) {
      steps.push({
        id: "consolidate-current",
        title: "Master Your Current Focus",
        description:
          "Deepen your understanding of the skills you&apos;re currently learning",
        skills: currentSkills,
        estimatedTime: "2-4 weeks",
        difficulty: "intermediate",
        category: "immediate",
        priority: "high",
        prerequisites: [],
        resources: [
          {
            type: "practice",
            title: "Build Projects with Current Skills",
            description: "Create 2-3 projects using your learning skills",
            estimatedHours: 40,
          },
          {
            type: "course",
            title: "Advanced Concepts Deep Dive",
            description: "Take advanced courses in your current focus areas",
            estimatedHours: 20,
          },
        ],
      });
    }

    return steps;
  }

  private generateConsolidationSteps(distribution: {
    [key: string]: number;
  }): RoadmapItem[] {
    const steps: RoadmapItem[] = [];
    const strongestCategory = Object.entries(distribution).sort(
      ([, a], [, b]) => b - a
    )[0];

    if (strongestCategory && strongestCategory[1] >= 2) {
      steps.push({
        id: "specialize-strength",
        title: `Specialize in ${
          strongestCategory[0].charAt(0).toUpperCase() +
          strongestCategory[0].slice(1)
        }`,
        description: `You show strong interest in ${strongestCategory[0]}. Consider specializing further.`,
        skills: [],
        estimatedTime: "3-6 months",
        difficulty: "advanced",
        category: "specialization",
        priority: "medium",
        prerequisites: [],
        resources: [
          {
            type: "certification",
            title: `Professional ${strongestCategory[0]} Certification`,
            description: "Earn industry-recognized certification",
            estimatedHours: 60,
          },
          {
            type: "project",
            title: "Portfolio Project",
            description: "Build a comprehensive project showcasing expertise",
            estimatedHours: 80,
          },
        ],
      });
    }

    return steps;
  }

  private generateCareerPathSteps(
    suggestedPaths: string[],
    currentSkills: string[]
  ): RoadmapItem[] {
    const steps: RoadmapItem[] = [];

    suggestedPaths.slice(0, 2).forEach((path, index) => {
      const pathData = this.careerPaths[path as keyof typeof this.careerPaths];
      const missingSkills = this.analyzeSkillGaps(currentSkills, path);

      if (path === "Java Full Stack Developer") {
        steps.push({
          id: `career-path-${index}`,
          title: `TechRedy Java Full Stack Development Program`,
          description: `Complete 19+ module industry-ready course starting 1st September`,
          skills: missingSkills,
          estimatedTime: pathData.timeToMaster,
          difficulty: "advanced",
          category: "career-path",
          priority: index === 0 ? "high" : "medium",
          prerequisites: ["Basic Computer Knowledge"],
          resources: [
            {
              type: "course",
              title: "TechRedy Full Stack Bootcamp",
              description:
                "19+ modules: GitHub, Java, Spring Boot, MongoDB, React, Cloud Deployment",
              estimatedHours: 480,
            },
            {
              type: "practice",
              title: "Industrial Web-Based Project",
              description: "Build real-world projects with mentor guidance",
              estimatedHours: 120,
            },
            {
              type: "certification",
              title: "Resume Building & Mock Interviews",
              description: "Industry resume preparation and interview training",
              estimatedHours: 40,
            },
          ],
        });
      } else {
        steps.push({
          id: `career-path-${index}`,
          title: `Path to ${path}`,
          description: `Follow TechRedy&apos;s structured path to become a ${path}`,
          skills: missingSkills,
          estimatedTime: pathData.timeToMaster,
          difficulty: "advanced",
          category: "career-path",
          priority: index === 0 ? "high" : "medium",
          prerequisites: pathData.requiredSkills,
          resources: [
            {
              type: "course",
              title: `TechRedy ${path} Course`,
              description: "Industry-based training with 1-on-1 doubt solving",
              estimatedHours: 200,
            },
            {
              type: "practice",
              title: "Real Projects & Portfolio",
              description:
                "Build industry-ready projects with assigned mentors",
              estimatedHours: 120,
            },
            {
              type: "certification",
              title: "Interview Preparation",
              description: "Mock interviews and resume building support",
              estimatedHours: 40,
            },
          ],
        });
      }
    });

    return steps;
  }

  private generateAdvancedSteps(masteredSkills: string[]): RoadmapItem[] {
    const steps: RoadmapItem[] = [];

    if (masteredSkills.length >= 3) {
      steps.push({
        id: "mentor-others",
        title: "Share Your Knowledge",
        description: "Start mentoring others and contributing to the community",
        skills: masteredSkills,
        estimatedTime: "Ongoing",
        difficulty: "advanced",
        category: "community",
        priority: "low",
        prerequisites: masteredSkills,
        resources: [
          {
            type: "practice",
            title: "Tech Blog Writing",
            description: "Share your learning journey and insights",
            estimatedHours: 10,
          },
          {
            type: "practice",
            title: "Open Source Contributions",
            description: "Contribute to projects in your expertise areas",
            estimatedHours: 20,
          },
        ],
      });
    }

    return steps;
  }
}

export default function AIRoadmapGenerator({
  droppedSkills,
}: // allSkills,
AIRoadmapGeneratorProps) {
  const [roadmap, setRoadmap] = useState<RoadmapItem[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showDetails, setShowDetails] = useState<{ [key: string]: boolean }>(
    {}
  );

  const learningAI = new LearningPathAI();

  const generateRoadmap = async () => {
    setIsGenerating(true);

    // Simulate AI processing time
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const generatedRoadmap =
      learningAI.generatePersonalizedRoadmap(droppedSkills);
    setRoadmap(generatedRoadmap);
    setIsGenerating(false);
  };

  const toggleDetails = (itemId: string) => {
    setShowDetails((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return <Star className="w-4 h-4" />;
      case "intermediate":
        return <TrendingUp className="w-4 h-4" />;
      case "advanced":
        return <Award className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "immediate":
        return <Target className="w-5 h-5" />;
      case "specialization":
        return <Lightbulb className="w-5 h-5" />;
      case "career-path":
        return <TrendingUp className="w-5 h-5" />;
      case "community":
        return <Users className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  const hasSkillsToAnalyze = Object.values(droppedSkills).some(
    (skills) => skills.length > 0
  );

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white border-0">
            <Brain className="w-4 h-4 mr-2" />
            AI-Powered Learning
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Personalized
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}
              Learning Roadmap
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our AI analyzes your skill selections to create a personalized
            learning path tailored to your goals and TechRedy&apos;s
            industry-based training programs.
          </p>

          {!hasSkillsToAnalyze ? (
            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-8 max-w-2xl mx-auto">
              <Sparkles className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Start Building Your Path
              </h3>
              <p className="text-gray-600">
                Drag and drop some skills above to get your personalized
                AI-generated roadmap!
              </p>
            </div>
          ) : (
            <Button
              onClick={generateRoadmap}
              disabled={isGenerating}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"></div>
                  Analyzing Your Skills...
                </>
              ) : (
                <>
                  <Brain className="w-5 h-5 mr-3" />
                  Generate My Roadmap
                </>
              )}
            </Button>
          )}
        </div>

        {roadmap.length > 0 && (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Your Learning Journey
              </h3>
              <p className="text-gray-600">
                Based on your skill selection, here&apos;s your personalized
                roadmap
              </p>
            </div>

            <div className="grid gap-6">
              {roadmap.map((item, index) => (
                <Card
                  key={item.id}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader
                    className="cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => toggleDetails(item.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center space-x-3 mb-2">
                            {getCategoryIcon(item.category)}
                            <CardTitle className="text-xl">
                              {item.title}
                            </CardTitle>
                          </div>
                          <p className="text-gray-600 mb-3">
                            {item.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge
                              className={`${getPriorityColor(
                                item.priority
                              )} border`}
                            >
                              {item.priority} priority
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-800 border border-blue-200">
                              <Clock className="w-3 h-3 mr-1" />
                              {item.estimatedTime}
                            </Badge>
                            <Badge className="bg-purple-100 text-purple-800 border border-purple-200">
                              {getDifficultyIcon(item.difficulty)}
                              <span className="ml-1">{item.difficulty}</span>
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-5 h-5 text-gray-400 transform transition-transform ${
                          showDetails[item.id] ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                  </CardHeader>

                  {showDetails[item.id] && (
                    <CardContent className="pt-0 border-t bg-gray-50">
                      <div className="space-y-6">
                        {item.skills.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                              <Target className="w-4 h-4 mr-2" />
                              Skills to Learn
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {item.skills.map((skill) => (
                                <Badge
                                  key={skill}
                                  className="bg-white text-gray-700 border border-gray-300"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {item.prerequisites.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                              <ArrowRight className="w-4 h-4 mr-2" />
                              Prerequisites
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {item.prerequisites.map((prereq) => (
                                <Badge
                                  key={prereq}
                                  className="bg-yellow-100 text-yellow-800 border border-yellow-300"
                                >
                                  {prereq}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Recommended Resources
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {item.resources.map((resource, resIndex) => (
                              <div
                                key={resIndex}
                                className="bg-white p-4 rounded-lg border border-gray-200"
                              >
                                <div className="flex items-center justify-between mb-2">
                                  <h5 className="font-medium text-gray-900">
                                    {resource.title}
                                  </h5>
                                  <Badge className="text-xs bg-indigo-100 text-indigo-800">
                                    {resource.estimatedHours}h
                                  </Badge>
                                </div>
                                <p className="text-sm text-gray-600 mb-2">
                                  {resource.description}
                                </p>
                                <Badge className="text-xs" variant="outline">
                                  {resource.type}
                                </Badge>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>

            <div className="text-center pt-8">
              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-6 max-w-2xl mx-auto">
                <Lightbulb className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">
                  Ready to Start Your Journey?
                </h4>
                <p className="text-gray-600 mb-4">
                  Focus on completing one roadmap item at a time. Join
                  TechRedy&apos;s industry-based training for personalized
                  guidance!
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>📞 Contact: +91 7447462275 | +91 9579624375</p>
                  <p>📧 Email: techredyitsolutions@gmail.com</p>
                  <p>📅 New Batch Starts: 1st September</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
