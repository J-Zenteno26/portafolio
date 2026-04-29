"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Educacion() {
  const [active, setActive] = useState<number | null>(null);

  const data = [
    {
      title: "Ingeniería en Informática",
      subtitle: "Santo Tomás · 2017 – 2023",
      desc: "Formación en desarrollo de software, bases de datos y arquitectura de sistemas.",
      details:
        "Durante mi formación participé en el Laboratorio de Ingeniería Aplicada, donde trabajé en proyectos prácticos enfocados en desarrollo de soluciones reales, fortaleciendo mis bases en programación, análisis de datos y pensamiento estructurado.",
      items: [
        "Miembro del Laboratorio de Ingeniería Aplicada",
        "Formación en desarrollo de software",
        "Base en modelamiento de datos",
      ],
    },
    {
      title: "[Curso] Fundamentos del Análisis de Datos",
      subtitle: "Microsoft & LinkedIn · 2023",
      desc: "Introducción a análisis de datos y toma de decisiones basada en información.",
      details:
        "Adquirí fundamentos en análisis de datos, interpretación de información y uso de herramientas orientadas a la toma de decisiones basada en datos.",
      items: [
        "Análisis de datos",
        "Interpretación de información",
        "Bases de toma de decisiones",
      ],
    },
    {
      title: "[Curso] Análisis de Datos",
      subtitle: "Google · Coursera · 2024",
      desc: "Profundización en herramientas y procesos de análisis de datos.",
      details:
        "Desarrollo de habilidades en limpieza de datos, visualización y análisis estructurado, utilizando herramientas modernas del ecosistema de datos.",
      items: [
        "Limpieza y transformación de datos",
        "Visualización",
        "Análisis estructurado",
      ],
    },
    {
      title: "[Curso] Fundamentos de Ciencia de Datos",
      subtitle: "Alkemy - Pixelab · 2025 – 2026",
      desc: "Formación orientada al análisis, procesamiento y modelamiento de datos, aplicando herramientas de Python, estadística y machine learning para transformar información en soluciones útiles.",
      details:
        "Programa enfocado en el ciclo completo de trabajo con datos: exploración, limpieza, transformación, análisis estadístico, visualización y construcción de modelos predictivos. La formación integra fundamentos de ciencia de datos, aprendizaje automático y pensamiento analítico para abordar problemas reales desde una perspectiva técnica y estratégica.",
      items: [
        "Python para análisis de datos",
        "Pandas, NumPy y visualización",
        "Estadística aplicada",
        "EDA y data wrangling",
        "Modelos de regresión y clasificación",
        "Machine learning supervisado",
        "Procesamiento y análisis de datos",
      ],
    },
  ];

  return (
    <div className="relative space-y-5">
      {data.map((edu, i) => (
        <motion.div
          key={i}
          onClick={() => setActive(active === i ? null : i)}
          whileHover={{ y: -4 }}
          className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/70 backdrop-blur-sm p-6 md:p-7 shadow-lg shadow-black/[0.04] cursor-pointer transition-all duration-300 hover:border-[var(--accent)]/40 hover:shadow-xl hover:shadow-black/[0.07]"
        >
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[var(--accent)] to-[var(--primary)] opacity-70" />

          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
            <div>
              <span className="inline-flex mb-3 rounded-full bg-[var(--light)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--secondary)]">
                Formación
              </span>

              <h3 className="font-semibold text-lg md:text-xl text-[var(--primary)] group-hover:text-[var(--secondary)] transition">
                {edu.title}
              </h3>
            </div>

            <span className="text-xs md:text-sm text-gray-500 bg-[#f5f1e9] border border-black/5 px-3 py-1.5 rounded-full whitespace-nowrap">
              {edu.subtitle}
            </span>
          </div>

          <p className="text-sm md:text-base mt-4 text-gray-600 leading-relaxed">
            {edu.desc}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2 text-sm text-gray-700">
            {edu.items.map((item, idx) => (
              <li
                key={idx}
                className="rounded-full border border-[var(--accent)]/20 bg-[var(--light)]/70 px-3 py-1.5 text-[var(--primary)]"
              >
                {item}
              </li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={
              active === i
                ? { opacity: 1, height: "auto" }
                : { opacity: 0, height: 0 }
            }
            className="overflow-hidden"
          >
            <p className="mt-5 text-sm md:text-base text-gray-700 border-t border-black/10 pt-5 leading-relaxed">
              {edu.details}
            </p>
          </motion.div>

          <div className="mt-5 flex items-center justify-between">
            <p className="text-xs text-gray-400">
              {active === i ? "Click para cerrar" : "Click para ver más"}
            </p>

            <span
              className={`w-8 h-8 rounded-full border border-[var(--accent)]/30 flex items-center justify-center text-[var(--primary)] transition ${
                active === i ? "rotate-45 bg-[var(--light)]" : ""
              }`}
            >
              +
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}