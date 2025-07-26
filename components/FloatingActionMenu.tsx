"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Phone,
  Mail,
  BookOpen,
  Users,
  X,
  Plus,
  HelpCircle,
} from "lucide-react";

interface FloatingAction {
  id: string;
  icon: React.ElementType;
  label: string;
  color: string;
  action: () => void;
}

export default function FloatingActionMenu() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainButtonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const actions: FloatingAction[] = [
    {
      id: "chat",
      icon: MessageSquare,
      label: "Live Chat",
      color: "bg-blue-500 hover:bg-blue-600",
      action: () => console.log("Opening chat..."),
    },
    {
      id: "call",
      icon: Phone,
      label: "Schedule Call",
      color: "bg-green-500 hover:bg-green-600",
      action: () => console.log("Scheduling call..."),
    },
    {
      id: "email",
      icon: Mail,
      label: "Send Email",
      color: "bg-purple-500 hover:bg-purple-600",
      action: () => console.log("Opening email..."),
    },
    {
      id: "resources",
      icon: BookOpen,
      label: "Free Resources",
      color: "bg-orange-500 hover:bg-orange-600",
      action: () => console.log("Opening resources..."),
    },
    {
      id: "community",
      icon: Users,
      label: "Join Community",
      color: "bg-pink-500 hover:bg-pink-600",
      action: () => console.log("Joining community..."),
    },
    {
      id: "help",
      icon: HelpCircle,
      label: "Get Help",
      color: "bg-red-500 hover:bg-red-600",
      action: () => console.log("Getting help..."),
    },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mainButton = mainButtonRef.current;
    const actionButtons = containerRef.current?.querySelectorAll(
      ".floating-action-item"
    );

    if (!mainButton || !actionButtons) return;

    // Initial animations
    gsap.set(actionButtons, {
      scale: 0,
      opacity: 0,
      rotation: 180,
      transformOrigin: "center center",
    });

    // Floating animation for main button
    gsap.to(mainButton, {
      y: -5,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });

    // Pulse effect
    gsap.to(mainButton, {
      scale: 1.05,
      duration: 1.5,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  const toggleMenu = () => {
    const actionButtons = containerRef.current?.querySelectorAll(
      ".floating-action-item"
    );
    const mainButton = mainButtonRef.current;

    if (!actionButtons || !mainButton) return;

    const tl = gsap.timeline();

    if (!isOpen) {
      // Opening animation
      tl.to(mainButton, {
        rotation: 45,
        scale: 1.1,
        duration: 0.3,
        ease: "back.out(1.7)",
      });

      actionButtons.forEach((button, index) => {
        const angle = index * 60 - 150; // Spread actions in an arc
        const distance = 80;
        const x = Math.cos((angle * Math.PI) / 180) * distance;
        const y = Math.sin((angle * Math.PI) / 180) * distance;

        tl.to(
          button,
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            x: x,
            y: y,
            duration: 0.4,
            ease: "back.out(1.7)",
          },
          0.1 + index * 0.05
        );
      });

      // Stagger show labels
      tl.to(
        ".action-label",
        {
          opacity: 1,
          x: 0,
          duration: 0.3,
          stagger: 0.05,
        },
        0.3
      );
    } else {
      // Closing animation
      tl.to(".action-label", {
        opacity: 0,
        x: 20,
        duration: 0.2,
        stagger: 0.02,
      });

      tl.to(
        actionButtons,
        {
          scale: 0,
          opacity: 0,
          rotation: 180,
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "back.in(1.7)",
          stagger: 0.03,
        },
        0.1
      );

      tl.to(
        mainButton,
        {
          rotation: 0,
          scale: 1,
          duration: 0.3,
          ease: "back.out(1.7)",
        },
        0.2
      );
    }

    setIsOpen(!isOpen);
  };

  const handleActionClick = (action: FloatingAction) => {
    const actionButton = containerRef.current?.querySelector(
      `[data-action-id="${action.id}"]`
    );

    if (actionButton) {
      // Success animation
      gsap.to(actionButton, {
        scale: 1.3,
        rotation: 360,
        duration: 0.6,
        ease: "back.out(1.7)",
        onComplete: () => {
          gsap.to(actionButton, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
          });
        },
      });
    }

    action.action();

    // Close menu after action
    setTimeout(() => {
      if (isOpen) toggleMenu();
    }, 800);
  };

  const handleMainButtonHover = (isHovering: boolean) => {
    const mainButton = mainButtonRef.current;
    if (!mainButton) return;

    setIsHovered(isHovering);

    if (isHovering) {
      gsap.to(mainButton, {
        scale: 1.15,
        boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)",
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(mainButton, {
        scale: 1.05,
        boxShadow: "0 5px 20px rgba(59, 130, 246, 0.3)",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleActionHover = (actionId: string, isHovering: boolean) => {
    const actionButton = containerRef.current?.querySelector(
      `[data-action-id="${actionId}"]`
    );
    const label = containerRef.current?.querySelector(
      `[data-label-id="${actionId}"]`
    );

    if (!actionButton) return;

    if (isHovering) {
      gsap.to(actionButton, {
        scale: 1.2,
        y: -5,
        duration: 0.3,
        ease: "power2.out",
      });

      if (label) {
        gsap.to(label, {
          scale: 1.05,
          x: -5,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    } else {
      gsap.to(actionButton, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      if (label) {
        gsap.to(label, {
          scale: 1,
          x: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    }
  };

  return (
    <div ref={containerRef} className="fixed bottom-8 right-8 z-50">
      {/* Action Items */}
      {actions.map((action) => {
        const IconComponent = action.icon;

        return (
          <div key={action.id} className="absolute bottom-0 right-0">
            {/* Action Button */}
            <button
              className={`floating-action-item w-12 h-12 rounded-full ${action.color} text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-xl`}
              data-action-id={action.id}
              onClick={() => handleActionClick(action)}
              onMouseEnter={() => handleActionHover(action.id, true)}
              onMouseLeave={() => handleActionHover(action.id, false)}
            >
              <IconComponent className="w-5 h-5" />
            </button>

            {/* Action Label */}
            <div
              className="action-label absolute right-16 top-1/2 transform -translate-y-1/2 opacity-0 pointer-events-none"
              data-label-id={action.id}
            >
              <div className="bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
                {action.label}
                <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Main Action Button */}
      <Button
        ref={mainButtonRef}
        onClick={toggleMenu}
        onMouseEnter={() => handleMainButtonHover(true)}
        onMouseLeave={() => handleMainButtonHover(false)}
        className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Plus className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
        )}
      </Button>

      {/* Help Text */}
      {!isOpen && isHovered && (
        <div className="absolute bottom-20 right-0 opacity-0 animate-fade-in">
          <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
            Need help? Click for options
            <div className="absolute -bottom-1 right-6 w-2 h-2 bg-gray-900 rotate-45"></div>
          </div>
        </div>
      )}

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 -z-10"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
}
