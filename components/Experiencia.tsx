"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Experiencia() {
  const [active, setActive] = useState<number | null>(null);

  const data = [
    {
      title: "Desarrolladora de Software – INNTEK",
      subtitle: "2023 – 2024",
      desc: "Participación en modernización de sistema de gestión de contratistas y optimización de procesos internos.",
      details:
        "Trabajé en la evolución de un sistema legacy hacia una arquitectura más mantenible, participando activamente en refactorización, optimización de consultas SQL y desarrollo de herramientas que mejoraron la eficiencia operativa del sistema.",
      items: [
        "Refactorización sistema ASP → ASP.NET",
        "Optimización de consultas SQL y procesos",
        "Desarrollo de herramientas internas para gestión operativa",
        "Integración de mejoras en arquitectura de datos",
      ],
      highlights: [
        "Reconocimiento como mejor nuevo talento",
        "Evaluación destacada por desempeño",
      ],
    },
    {
      title: "Ingeniera de Software Freelance",
      subtitle: "2024 – Actualidad",
      desc: "Desarrollo de soluciones web y sistemas orientados a gestión y análisis de datos.",
      details:
        "Diseño y desarrollo de sistemas completos, abordando desde la estructuración de datos hasta la implementación de soluciones backend. Trabajo con clientes y proyectos propios, enfocados en eficiencia operativa y automatización.",
      items: [
        "Desarrollo de sistemas web de gestión",
        "Modelamiento y estructuración de datos",
        "Automatización de procesos",
        "Gestión completa del ciclo de desarrollo",
      ],
      highlights: [
        "Desarrollo end-to-end de soluciones",
        "Enfoque en eficiencia y escalabilidad",
      ],
    },
    {
      title: "Digitadora – Mutual de Seguridad",
      subtitle: "2014 – 2017",
      desc: "Gestión y procesamiento de datos operacionales en contexto de alta demanda.",
      details:
        "Responsable del registro, validación y procesamiento de datos en terreno, trabajando con grandes volúmenes de información. Esta experiencia fortaleció mi base en manejo de datos, precisión y procesos estructurados.",
      items: [
        "Ingreso y validación de datos críticos",
        "Procesamiento de información en contexto operativo",
        "Elaboración de reportes",
        "Trabajo en equipo en terreno",
      ],
      highlights: [
        "Alta precisión en manejo de datos",
        "Experiencia en contextos de alta carga operativa",
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {data.map((job, i) => (
        <motion.div
          key={i}
          onClick={() => setActive(active === i ? null : i)}
          whileHover={{ y: -5 }}
          className="group border p-6 rounded-xl bg-white/40 backdrop-blur-sm transition-all duration-300 hover:shadow-lg cursor-pointer"
        >
          {/* TITULO */}
          <div className="flex justify-between items-start">
            <h3 className="font-semibold text-lg group-hover:text-[var(--primary)] transition">
              {job.title}
            </h3>
            <span className="text-xs text-gray-400">{job.subtitle}</span>
          </div>

          {/* DESCRIPCIÓN */}
          <p className="text-sm mt-2 text-gray-600">
            {job.desc}
          </p>

          {/* LOGROS */}
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {job.items.map((item, idx) => (
              <li
                key={idx}
                className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--secondary)]"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* HIGHLIGHTS */}
          <div className="mt-4 flex flex-wrap gap-2">
            {job.highlights.map((h, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 rounded-md bg-[var(--bg)] border"
              >
                {h}
              </span>
            ))}
          </div>

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
              {job.details}
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