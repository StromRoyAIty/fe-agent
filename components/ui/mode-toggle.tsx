"use client";

import { Moon, Laptop, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./button";

export function ModeToggle() {
  const { setTheme } = useTheme();
  const handleThemeToggle = (theme: string) => {
    setTheme(theme);
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => handleThemeToggle("light")}
      >
        <Sun />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => handleThemeToggle("dark")}
      >
        <Moon className="" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => handleThemeToggle("system")}
      >
        <Laptop />
      </Button>
    </div>
  );
}
