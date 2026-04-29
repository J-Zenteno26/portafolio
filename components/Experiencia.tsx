"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Experiencia() {
  const [active, setActive] = useState<number | null>(null);

  const data = [
    {
      title: "Ingeniera de Software Freelance",
      subtitle: "2024 – Actualidad",
      desc: "Desarrollo de soluciones web y sistemas orientados a gestión, automatización y análisis de datos.",
      details:
        "Diseño y desarrollo sistemas completos, abordando desde la toma de requerimientos y estructuración de datos hasta la implementación backend y frontend. Trabajo en proyectos propios y con clientes, con foco en eficiencia operativa, mantenibilidad y escalabilidad.",
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
      title: "Ingeniera de Software – INNTEK",
      subtitle: "2023 – 2024",
      desc: "Participación en la modernización de un sistema de gestión de contratistas, incorporando mejoras en arquitectura, datos y procesos internos.",
      details:
        "Trabajé en la evolución de un sistema legacy hacia una solución más mantenible, participando en refactorización, optimización de consultas SQL y desarrollo de herramientas internas orientadas a mejorar la eficiencia operativa del sistema.",
      items: [
        "Refactorización de sistema ASP → ASP.NET",
        "Optimización de consultas SQL y procesos internos",
        "Desarrollo de herramientas internas para gestión operativa",
        "Integración de mejoras en arquitectura de datos",
      ],
      highlights: [
        "Reconocimiento como mejor nuevo talento",
        "Evaluación destacada por desempeño",
      ],
    },

    {
      title: "Digitadora – Mutual de Seguridad",
      subtitle: "2014 – 2017",
      desc: "Gestión, validación y procesamiento de datos operacionales en contextos de alta demanda.",
      details:
        "Fui responsable del registro, validación y procesamiento de información en terreno, trabajando con altos volúmenes de datos operacionales. Esta experiencia fortaleció mi precisión, criterio en manejo de información y comprensión de procesos estructurados.",
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
    <div className="relative space-y-5">
      {data.map((exp, i) => (
        <motion.div
          key={i}
          onClick={() => setActive(active === i ? null : i)}
          whileHover={{ y: -4 }}
          className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/70 backdrop-blur-sm p-6 md:p-7 shadow-lg shadow-black/[0.04] cursor-pointer transition-all duration-300 hover:border-[var(--accent)]/40 hover:shadow-xl hover:shadow-black/[0.07]"
        >
          {/* línea lateral */}
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[var(--accent)] to-[var(--primary)] opacity-70" />

          {/* header */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
            <div>
              <span className="inline-flex mb-3 rounded-full bg-[var(--light)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--secondary)]">
                Experiencia
              </span>

              <h3 className="font-semibold text-lg md:text-xl text-[var(--primary)] group-hover:text-[var(--secondary)] transition">
                {exp.title}
              </h3>
            </div>

            <span className="text-xs md:text-sm text-gray-500 bg-[#f5f1e9] border border-black/5 px-3 py-1.5 rounded-full whitespace-nowrap">
              {exp.subtitle}
            </span>
          </div>

          {/* descripción */}
          <p className="text-sm md:text-base mt-4 text-gray-600 leading-relaxed">
            {exp.desc}
          </p>

          {/* items */}
          <ul className="mt-5 flex flex-wrap gap-2 text-sm text-gray-700">
            {exp.items.map((item, idx) => (
              <li
                key={idx}
                className="rounded-full border border-[var(--accent)]/20 bg-[var(--light)]/70 px-3 py-1.5 text-[var(--primary)]"
              >
                {item}
              </li>
            ))}
          </ul>
          {exp.highlights && (
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.highlights.map((h, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1.5 rounded-full bg-[var(--primary)] text-white shadow-md shadow-black/10"
                >
                  {h}
                </span>
              ))}
            </div>
          )}
          {/* expandible */}
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
              {exp.details}
            </p>
          </motion.div>

          {/* footer */}
          <div className="mt-5 flex items-center justify-between">
            <p className="text-xs text-gray-400">
              {active === i ? "Click para cerrar" : "Click para ver más"}
            </p>

            <span
              className={`w-8 h-8 rounded-full border border-[var(--accent)]/30 flex items-center justify-center text-[var(--primary)] transition ${active === i ? "rotate-45 bg-[var(--light)]" : ""
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