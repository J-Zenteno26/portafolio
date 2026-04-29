"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 w-full z-50 px-4">
      <div className="flex justify-between items-center px-5 md:px-6 py-3 max-w-6xl mx-auto rounded-full border border-white/60 bg-white/55 backdrop-blur-xl shadow-lg shadow-black/[0.04]">

        {/* LOGO / NOMBRE */}
        <h2 className="font-semibold text-[var(--primary)] tracking-tight text-lg">
           Jeanette <span className="text-[var(--secondary)]">Zenteno</span>
        </h2>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-1 text-sm text-gray-700">
          {[
            { href: "#about", label: "Sobre mí" },
            { href: "#impact", label: "Impacto" },
            { href: "#proyectos", label: "Proyectos" },
            { href: "#experience", label: "Experiencia" },
            { href: "#education", label: "Educación" },
            { href: "#skills", label: "Skills" },
            { href: "#contact", label: "Contacto" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm hover:bg-[var(--light)] hover:text-[var(--primary)] transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-full border border-[var(--accent)]/20 bg-[var(--light)]/70 px-4 py-2 text-sm font-medium text-[var(--primary)]"
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
            className="md:hidden px-1 pt-3"
          >
            <div className="mx-auto max-w-6xl rounded-3xl border border-white/70 bg-white/85 p-4 shadow-xl shadow-black/[0.06] backdrop-blur-xl flex flex-col gap-2 text-sm">
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
                  className="rounded-2xl px-4 py-3 text-[var(--primary)] hover:bg-[var(--light)] transition-colors duration-200"
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