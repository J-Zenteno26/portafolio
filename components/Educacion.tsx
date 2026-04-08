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
      title: "(Curso) Fundamentos del Análisis de Datos",
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
      title: "(Curso) Análisis de Datos",
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
      title: "(Curso) Fundamentos de Ciencia de Datos",
      subtitle: "SENCE · 2025 – 2026",
      desc: "Especialización en modelos de datos y análisis avanzado.",
      details:
        "Actualmente profundizando en ciencia de datos, integrando conocimientos de análisis, modelamiento y procesamiento para construir soluciones basadas en datos.",
      items: [
        "Modelamiento de datos",
        "Procesamiento de datos",
        "Enfoque en machine learning",
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {data.map((edu, i) => (
        <motion.div
          key={i}
          onClick={() => setActive(active === i ? null : i)}
          whileHover={{ y: -5 }}
          className="group border p-6 rounded-xl bg-white/40 backdrop-blur-sm transition-all duration-300 hover:shadow-lg cursor-pointer"
        >
          {/* TITULO */}
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg group-hover:text-[var(--primary)] transition">
              {edu.title}
            </h3>
            <span className="text-xs text-gray-400">{edu.subtitle}</span>
          </div>

          {/* DESCRIPCIÓN */}
          <p className="text-sm mt-2 text-gray-600">
            {edu.desc}
          </p>

          {/* ITEMS */}
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {edu.items.map((item, idx) => (
              <li
                key={idx}
                className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--secondary)]"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* DETALLE */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={
              active === i
                ? { opacity: 1, height: "auto" }
                : { opacity: 0, height: 0 }
            }
            className="overflow-hidden"
          >
            <p className="mt-4 text-sm text-gray-700 border-t pt-4">
              {edu.details}
            </p>
          </motion.div>

          <p className="text-xs mt-4 text-gray-400">
            {active === i ? "Click para cerrar" : "Click para ver más"}
          </p>
        </motion.div>
      ))}
    </div>
  );
}