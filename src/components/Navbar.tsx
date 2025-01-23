import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-bold text-primary text-xl">
            Майстер Водолій
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#why-us" className="text-gray-600 hover:text-primary">
              Чому ми
            </a>
            <a href="#services" className="text-gray-600 hover:text-primary">
              Послуги
            </a>
            <a href="#shop" className="text-gray-600 hover:text-primary">
              Магазин
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary">
              Контакти
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pb-4">
              <a
                href="#why-us"
                className="text-gray-600 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Чому ми
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Послуги
              </a>
              <a
                href="#shop"
                className="text-gray-600 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Магазин
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Контакти
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};