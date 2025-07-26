"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Brain,
  Shield,
  Target,
  CheckCircle,
  X,
} from "lucide-react";
import AIRoadmapGenerator from "./AIRoadmapGenerator";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable);
}

interface Skill {
  id: string;
  name: string;
  icon: React.ElementType;
  category: "frontend" | "backend" | "mobile" | "ai" | "security";
  level: "beginner" | "intermediate" | "advanced";
  color: string;
}

interface DropZone {
  id: string;
  title: string;
  description: string;
  acceptedCategories: string[];
  color: string;
}

const skills: Skill[] = [
  {
    id: "java",
    name: "Core Java",
    icon: Code2,
    category: "backend",
    level: "intermediate",
    color: "bg-orange-500",
  },
  {
    id: "spring-boot",
    name: "Spring Boot",
    icon: Database,
    category: "backend",
    level: "advanced",
    color: "bg-green-600",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    icon: Database,
    category: "backend",
    level: "intermediate",
    color: "bg-green-700",
  },
  {
    id: "react",
    name: "React",
    icon: Code2,
    category: "frontend",
    level: "intermediate",
    color: "bg-blue-500",
  },
  {
    id: "github",
    name: "GitHub",
    icon: Globe,
    category: "frontend",
    level: "beginner",
    color: "bg-gray-800",
  },
  {
    id: "canva",
    name: "Canva",
    icon: Brain,
    category: "ai",
    level: "beginner",
    color: "bg-purple-500",
  },
  {
    id: "figma",
    name: "Figma",
    icon: Smartphone,
    category: "frontend",
    level: "intermediate",
    color: "bg-pink-500",
  },
  {
    id: "sql",
    name: "SQL Database",
    icon: Database,
    category: "backend",
    level: "intermediate",
    color: "bg-blue-600",
  },
  {
    id: "cpp",
    name: "C++",
    icon: Code2,
    category: "backend",
    level: "advanced",
    color: "bg-red-500",
  },
  {
    id: "aws",
    name: "AWS Cloud",
    icon: Globe,
    category: "backend",
    level: "advanced",
    color: "bg-yellow-600",
  },
  {
    id: "api-testing",
    name: "API Testing",
    icon: Shield,
    category: "security",
    level: "intermediate",
    color: "bg-teal-500",
  },
  {
    id: "salesforce",
    name: "Salesforce",
    icon: Brain,
    category: "ai",
    level: "advanced",
    color: "bg-indigo-600",
  },
];

const dropZones: DropZone[] = [
  {
    id: "learning",
    title: "Currently Learning",
    description: "Skills you want to focus on right now",
    acceptedCategories: ["frontend", "backend", "mobile", "ai", "security"],
    color: "border-blue-300 bg-blue-50",
  },
  {
    id: "mastered",
    title: "Mastered Skills",
    description: "Skills you have completed successfully",
    acceptedCategories: ["frontend", "backend", "mobile", "ai", "security"],
    color: "border-green-300 bg-green-50",
  },
  {
    id: "planning",
    title: "Future Goals",
    description: "Skills for your career roadmap",
    acceptedCategories: ["frontend", "backend", "mobile", "ai", "security"],
    color: "border-purple-300 bg-purple-50",
  },
];

export default function InteractiveSkillBoard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const draggableInstancesRef = useRef<Draggable[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [droppedSkills, setDroppedSkills] = useState<{
    [key: string]: string[];
  }>({
    learning: [],
    mastered: [],
    planning: [],
  });
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  // Ensure component only renders interactive features on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Initialize GSAP only once and handle updates properly
  useEffect(() => {
    if (!isMounted || typeof window === "undefined") return;

    const initializeDragAndDrop = () => {
      const skillElements =
        containerRef.current?.querySelectorAll(".draggable-skill");
      const dropZoneElements =
        containerRef.current?.querySelectorAll(".drop-zone");

      if (!skillElements || !dropZoneElements || skillElements.length === 0) {
        console.log("Missing elements for drag and drop initialization");
        return;
      }

      console.log(
        "Initializing drag and drop with:",
        skillElements.length,
        "skills and",
        dropZoneElements.length,
        "zones"
      );

      // Clear any existing instances
      draggableInstancesRef.current.forEach((instance) => {
        if (instance && instance.kill) {
          instance.kill();
        }
      });
      draggableInstancesRef.current = [];

      // Animate skill cards on mount
      gsap.fromTo(
        skillElements,
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
        }
      );

      // Animate drop zones
      gsap.fromTo(
        dropZoneElements,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          delay: 0.3,
          ease: "power2.out",
        }
      );

      // Setup draggable functionality
      skillElements.forEach((element) => {
        const skillElement = element as HTMLElement;
        const skillId = skillElement.dataset.skillId;

        if (!skillId) {
          console.log("Skill element missing skillId");
          return;
        }

        console.log("Setting up draggable for skill:", skillId);

        const draggableInstance = Draggable.create(skillElement, {
          type: "x,y",
          bounds: containerRef.current,
          edgeResistance: 0.65,
          onDragStart: function () {
            console.log("Drag started for:", skillId);
            // setDraggedItem(skillId);

            // Scale up and add shadow
            gsap.to(skillElement, {
              scale: 1.15,
              boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
              zIndex: 1000,
              duration: 0.2,
            });

            // Highlight compatible drop zones
            dropZoneElements.forEach((zone) => {
              const zoneElement = zone as HTMLElement;
              gsap.to(zoneElement, {
                scale: 1.03,
                borderWidth: "4px",
                borderColor: "#3b82f6",
                backgroundColor: "rgba(59, 130, 246, 0.05)",
                duration: 0.3,
              });
            });
          },
          onDrag: function () {
            // Add subtle rotation based on drag velocity
            const rotation = Math.min(Math.max(this.deltaX * 0.08, -12), 12);
            gsap.set(skillElement, { rotation: rotation });

            // Real-time collision feedback
            // let hovering = false;
            dropZoneElements.forEach((zone) => {
              const zoneElement = zone as HTMLElement;
              const zoneRect = zoneElement.getBoundingClientRect();
              const skillRect = skillElement.getBoundingClientRect();

              const centerX = skillRect.left + skillRect.width / 2;
              const centerY = skillRect.top + skillRect.height / 2;

              const isHovering =
                centerX >= zoneRect.left &&
                centerX <= zoneRect.right &&
                centerY >= zoneRect.top &&
                centerY <= zoneRect.bottom;

              if (isHovering) {
                // hovering = true;
                gsap.to(zoneElement, {
                  backgroundColor: "rgba(59, 130, 246, 0.15)",
                  borderColor: "#1d4ed8",
                  duration: 0.2,
                });
              } else {
                gsap.to(zoneElement, {
                  backgroundColor: "rgba(59, 130, 246, 0.05)",
                  borderColor: "#3b82f6",
                  duration: 0.2,
                });
              }
            });
          },
          onDragEnd: function () {
            console.log("Drag ended for skill:", skillId);
            let dropped = false;

            // Check if dropped on any zone using center point collision
            dropZoneElements.forEach((zone) => {
              if (dropped) return; // Already dropped

              const zoneElement = zone as HTMLElement;
              const zoneRect = zoneElement.getBoundingClientRect();
              const skillRect = skillElement.getBoundingClientRect();

              // Use center point of the dragged element
              const centerX = skillRect.left + skillRect.width / 2;
              const centerY = skillRect.top + skillRect.height / 2;

              const isInZone =
                centerX >= zoneRect.left &&
                centerX <= zoneRect.right &&
                centerY >= zoneRect.top &&
                centerY <= zoneRect.bottom;

              console.log("Checking drop zone:", {
                zoneId: zoneElement.dataset.zoneId,
                isInZone,
                centerX,
                centerY,
                zoneRect,
              });

              if (isInZone) {
                const zoneId = zoneElement.dataset.zoneId;
                if (zoneId && skillId) {
                  console.log(
                    "Successfully dropping skill",
                    skillId,
                    "in zone",
                    zoneId
                  );
                  dropped = true;

                  // Success animation - animate to zone center
                  const zoneCenterX =
                    zoneRect.left + zoneRect.width / 2 - skillRect.width / 2;
                  const zoneCenterY =
                    zoneRect.top + zoneRect.height / 2 - skillRect.height / 2;

                  gsap.to(skillElement, {
                    x: zoneCenterX - skillRect.left,
                    y: zoneCenterY - skillRect.top,
                    scale: 0.9,
                    opacity: 0.4,
                    rotation: 0,
                    duration: 0.5,
                    ease: "power2.out",
                    onComplete: () => {
                      console.log("Drop animation complete, updating state");
                      // Update state after animation
                      setDroppedSkills((prev) => {
                        const newState = { ...prev };
                        // Remove from other zones first
                        Object.keys(newState).forEach((key) => {
                          newState[key] = newState[key].filter(
                            (id) => id !== skillId
                          );
                        });
                        // Add to target zone
                        if (!newState[zoneId].includes(skillId)) {
                          newState[zoneId] = [...newState[zoneId], skillId];
                        }
                        console.log("State updated:", newState);
                        return newState;
                      });

                      // Reset position and disable dragging temporarily
                      gsap.set(skillElement, { x: 0, y: 0 });
                    },
                  });
                }
              }
            });

            if (!dropped) {
              console.log("No drop detected, snapping back");
              // Snap back animation
              gsap.to(skillElement, {
                x: 0,
                y: 0,
                scale: 1,
                rotation: 0,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                duration: 0.6,
                ease: "elastic.out(1, 0.4)",
              });
            }

            // Reset drop zones
            gsap.to(Array.from(dropZoneElements), {
              scale: 1,
              borderWidth: "2px",
              borderColor: "",
              backgroundColor: "",
              duration: 0.3,
            });

            // setDraggedItem(null);
          },
        })[0];

        if (draggableInstance) {
          draggableInstancesRef.current.push(draggableInstance);
          console.log("Draggable instance created for:", skillId);
        }
      });
    };

    // Delay initialization to ensure DOM is ready
    const timer = setTimeout(initializeDragAndDrop, 200);

    return () => {
      clearTimeout(timer);
      // Cleanup instances
      draggableInstancesRef.current.forEach((instance) => {
        if (instance && instance.kill) {
          instance.kill();
        }
      });
      draggableInstancesRef.current = [];
    };
  }, [isMounted]); // Only depend on isMounted

  const removeSkillFromZone = (skillId: string, zoneId: string) => {
    console.log("Removing skill", skillId, "from zone", zoneId);

    // Update state to remove skill from zone
    setDroppedSkills((prev) => ({
      ...prev,
      [zoneId]: prev[zoneId].filter((id) => id !== skillId),
    }));

    // Re-enable the skill card for dragging
    const skillElement = containerRef.current?.querySelector(
      `[data-skill-id="${skillId}"]`
    ) as HTMLElement;
    if (skillElement) {
      console.log("Re-enabling skill element:", skillId);

      // Reset visual state
      gsap.to(skillElement, {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        rotation: 0,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        pointerEvents: "auto",
        duration: 0.5,
        ease: "back.out(1.7)",
        onComplete: () => {
          // Re-enable existing draggable instance
          const existingInstance = Draggable.get(skillElement);
          if (existingInstance) {
            existingInstance.enable();
            console.log("Re-enabled existing draggable instance for:", skillId);
          }
        },
      });
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "beginner":
        return "bg-yellow-100 text-yellow-800";
      case "intermediate":
        return "bg-blue-100 text-blue-800";
      case "advanced":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      suppressHydrationWarning
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
            Interactive Learning
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Build Your Tech
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}
              Skill Path
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Drag and drop skills to create your personalized learning journey
            with TechRedy&apos;s industry-based training. Organize what
            you&apos;re learning, what you&apos;ve mastered, and your future
            career goals.
          </p>
        </div>

        <div ref={containerRef} className="space-y-12" suppressHydrationWarning>
          {!isMounted && (
            <div className="text-center py-8">
              <div className="animate-spin w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600">Loading interactive features...</p>
            </div>
          )}

          {isMounted && (
            <>
              {/* Available Skills */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Target className="w-6 h-6 mr-3 text-purple-600" />
                  Available Skills
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                  {skills.map((skill) => {
                    const IconComponent = skill.icon;
                    const isDropped = Object.values(droppedSkills)
                      .flat()
                      .includes(skill.id);

                    return (
                      <Card
                        key={skill.id}
                        className={`draggable-skill ${
                          isMounted && !isDropped
                            ? "cursor-grab active:cursor-grabbing"
                            : ""
                        } transition-all duration-300 hover:shadow-lg`}
                        data-skill-id={skill.id}
                        style={{
                          opacity: isDropped ? 0.3 : 1,
                          pointerEvents: isDropped ? "none" : "auto",
                          transform: isDropped ? "scale(0.8)" : "scale(1)",
                        }}
                        suppressHydrationWarning
                      >
                        <CardContent className="p-4 text-center">
                          <div
                            className={`w-12 h-12 rounded-xl ${skill.color} flex items-center justify-center mx-auto mb-3`}
                          >
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <h4 className="font-semibold text-sm mb-2">
                            {skill.name}
                          </h4>
                          <Badge
                            className={`text-xs ${getLevelColor(skill.level)}`}
                          >
                            {skill.level}
                          </Badge>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Drop Zones */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {dropZones.map((zone) => (
                  <Card
                    key={zone.id}
                    className={`drop-zone min-h-[300px] border-2 border-dashed ${zone.color} transition-all duration-300`}
                    data-zone-id={zone.id}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        {zone.title}
                      </CardTitle>
                      <p className="text-gray-600 text-sm">
                        {zone.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {droppedSkills[zone.id].map((skillId) => {
                        const skill = skills.find((s) => s.id === skillId);
                        if (!skill) return null;

                        const IconComponent = skill.icon;

                        return (
                          <div
                            key={skillId}
                            className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border animate-bounce-in"
                          >
                            <div className="flex items-center">
                              <div
                                className={`w-8 h-8 rounded-lg ${skill.color} flex items-center justify-center mr-3`}
                              >
                                <IconComponent className="w-4 h-4 text-white" />
                              </div>
                              <span className="font-medium">{skill.name}</span>
                            </div>
                            <button
                              onClick={() =>
                                removeSkillFromZone(skillId, zone.id)
                              }
                              className="p-1 hover:bg-gray-100 rounded transition-colors"
                            >
                              <X className="w-4 h-4 text-gray-400 hover:text-red-500" />
                            </button>
                          </div>
                        );
                      })}

                      {droppedSkills[zone.id].length === 0 && (
                        <div className="text-center py-8 text-gray-400">
                          <Target className="w-12 h-12 mx-auto mb-3 opacity-50" />
                          <p>Drag skills here</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>

        {/* AI Roadmap Generator */}
        <AIRoadmapGenerator droppedSkills={droppedSkills} allSkills={skills} />
      </div>
    </section>
  );
}
