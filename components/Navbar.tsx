"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[var(--bg)]/70 border-b border-black/5">

      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">

        {/* LOGO / NOMBRE */}
        <h2 className="font-semibold text-[var(--primary)] tracking-tight text-lg">
            Jeanette
        </h2>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          {[
            { href: "#about", label: "Sobre mí" },
            { href: "#impact", label: "Impacto" },
            { href: "#experience", label: "Experiencia" },
            { href: "#education", label: "Educación" },
            { href: "#skills", label: "Skills" },
            { href: "#contact", label: "Contacto" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="relative hover:text-[var(--primary)] transition-colors duration-300"
            >
              {item.label}

              {/* underline animado */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[var(--primary)] transition-all duration-300 hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-sm text-[var(--primary)]"
        >
          {open ? "Cerrar" : "Menu"}
        </button>
      </div>

      {/* MOBILE MENU ANIMADO */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden px-6 pb-6"
          >
            <div className="bg-white/90 backdrop-blur-lg rounded-xl shadow-lg border p-4 flex flex-col gap-4 text-sm">

              {[
                { href: "#about", label: "Sobre mí" },
                { href: "#impact", label: "Impacto" },
                { href: "#experience", label: "Experiencia" },
                { href: "#education", label: "Educación" },
                { href: "#skills", label: "Skills" },
                { href: "#contact", label: "Contacto" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-[var(--primary)] transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}