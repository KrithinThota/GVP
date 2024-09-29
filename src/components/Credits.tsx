"use client"; // Ensure this is a client component

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Mock theme hook (replace with your actual logic)
const useTheme = () => {
  return "black"; // or "white"
};

const Credits = () => {
  const [isVisible, setIsVisible] = useState(true); // Start visible
  const theme = useTheme(); // Get the current theme

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0 }} // Start fully transparent
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 100 }}
      transition={{ duration: 0.5 }}
      className={`fixed bottom-0 left-0 right-0 p-2 border-t border-gray-500 
        bg-white bg-opacity-10 backdrop-blur-sm text-gray-500`} // Tailwind glass effect
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-xs">© 2024 ZOIR University. All rights reserved.</p>
        <p className="text-xs mt-1">
          Powered by <strong>ZOIR™</strong> — Revolutionizing Web Design
        </p>
        <div className="flex justify-center space-x-4 mt-2"></div>
      </div>
    </motion.footer>
  );
};

export default Credits;
