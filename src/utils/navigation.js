import { useState } from "react";

// Mobile menu toggling logic
export const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return { isOpen, toggleMenu, closeMenu };
};
