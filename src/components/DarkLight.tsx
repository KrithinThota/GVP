"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function DarkLight() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="theme-toggle" className="sr-only">
        Toggle theme
      </Label>

      <Sun
        className={`h-[1.2rem] w-[1.2rem] ${
          !isDark ? "text-yellow-500" : "text-gray-400"
        }`}
      />
      <Switch
        id="theme-toggle"
        checked={isDark}
        onCheckedChange={handleToggle}
      />
      <Moon
        className={`h-[1.2rem] w-[1.2rem] ${
          isDark ? "text-blue-500" : "text-gray-400"
        }`}
      />
    </div>
  );
}
