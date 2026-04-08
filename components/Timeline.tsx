"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Timeline() {
  const [active, setActive] = useState<number | null>(null);

  const data = [
    {
      title: "Ingeniera de Software Freelance",
      date: "2024 – Actualidad",
      desc: "Desarrollo de soluciones web y sistemas orientados a datos.",
      details:
        "Diseño e implementación de sistemas completos, abordando estructuración de datos, automatización y desarrollo backend enfocado en eficiencia operativa.",
    },
    {
      title: "Desarrolladora de Software – INNTEK",
      date: "2023 – 2024",
      desc: "Modernización de sistema de gestión y optimización de procesos.",
      details:
        "Participación en refactorización de sistema legacy, optimización SQL y desarrollo de herramientas que redujeron errores operativos y mejoraron la escalabilidad.",
    },
    {
      title: "Digitadora – Mutual de Seguridad",
      date: "2014 – 2017",
      desc: "Procesamiento de datos en contexto operativo.",
      details:
        "Gestión y validación de grandes volúmenes de datos, asegurando precisión y consistencia en entornos de alta demanda.",
    },
  ];

  return (
    <div className="relative max-w-4xl mx-auto">

      {/* Línea vertical */}
      <div className="absolute left-1/2 top-0 h-full w-[2px] bg-[var(--secondary)] opacity-30" />

      <div className="space-y-16">
        {data.map((item, i) => {
          const isLeft = i % 2 === 0;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`relative flex ${
                isLeft ? "justify-start" : "justify-end"
              }`}
            >
              {/* CONTENIDO */}
              <div
                onClick={() => setActive(active === i ? null : i)}
                className={`w-full md:w-[45%] p-6 rounded-xl border bg-white/40 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:shadow-lg`}
              >
                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-400 mt-1">
                  {item.date}
                </p>

                <p className="text-sm mt-2 text-gray-600">
                  {item.desc}
                </p>

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
                    {item.details}
                  </p>
                </motion.div>

                <p className="text-xs mt-4 text-gray-400">
                  {active === i ? "Cerrar" : "Ver más"}
                </p>
              </div>

              {/* PUNTO CENTRAL */}
              <div className="absolute left-1/2 -translate-x-1/2 top-6">
                <div className="w-4 h-4 rounded-full bg-[var(--primary)] border-4 border-white shadow-md" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}