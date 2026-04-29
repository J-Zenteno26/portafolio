"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Problemas() {
  const [active, setActive] = useState<number | null>(null);

  const data = [
    {
      title: "Eliminación de duplicados en sistema crítico",
      desc: "Problema histórico que generaba alta carga de soporte manual.",
      details:
        "Identifiqué que la causa raíz estaba en la lógica de creación de documentos. Implementé una solución que no solo eliminaba duplicados, sino que prevenía su generación desde origen mediante control estructurado del flujo de datos.",
      items: [
        "Automatización de limpieza de datos",
        "Corrección desde el código de origen",
        "Eliminación definitiva del problema",
      ],
    },
    {
      title: "Migración de contratistas",
      desc: "Reingreso manual completo al cambiar de empresa.",
      details:
        "Diseñé una herramienta de migración que replicaba estructuras completas de datos, incluyendo trabajadores y documentos, utilizando SQL avanzado y lógica de mapeo entre identificadores.",
      items: [
        "Migración automática completa",
        "Estructura de datos jerárquica",
        "Reducción de errores operativos",
      ],
    },
    {
      title: "Sistema de costos",
      desc: "Errores en cálculo de producción.",
      details:
        "Desarrollé un sistema que automatiza el cálculo de ingredientes y costos en base a proporciones variables, eliminando errores manuales y mejorando la precisión en producción.",
      items: [
        "Cálculo automático de ingredientes",
        "Optimización de costos",
        "Gestión de pedidos",
      ],
    },
    {
      title: "Bitácora de datos",
      desc: "Sistema limitado basado en Google Sheets.",
      details:
        "Migré un sistema fragmentado hacia una solución más estructurada, integrando APIs, dashboards y rediseñando el flujo de almacenamiento de imágenes para superar limitaciones técnicas.",
      items: [
        "Dashboards y métricas",
        "Integración API",
        "Rediseño de almacenamiento",
      ],
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {data.map((card, i) => (
        <motion.div
          key={i}
          onClick={() => setActive(active === i ? null : i)}
          whileHover={{ y: -4 }}
          className="group cursor-pointer rounded-2xl border border-[var(--accent)]/20 bg-white/65 p-4 md:p-5 shadow-sm shadow-black/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-[var(--accent)]/40 hover:shadow-lg hover:shadow-black/[0.06]"
        >
          <h3 className="text-base font-semibold leading-snug text-[var(--primary)] transition group-hover:text-[var(--secondary)]">
            {card.title}
          </h3>

          <p className="mt-2 text-xs md:text-sm leading-relaxed text-gray-600">
            {card.desc}
          </p>

          {/* LISTA */}
          <ul className="mt-3 space-y-1.5 text-xs md:text-sm text-gray-700">
            {card.items.map((item, idx) => (
              <li
                key={idx}
                className="relative pl-4 leading-relaxed before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--secondary)]"
              >
                {item}
              </li>
            ))}
          </ul>

          {/* DETALLE EXPANDIBLE */}
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={
              active === i
                ? { opacity: 1, height: "auto" }
                : { opacity: 0, height: 0 }
            }
            className="overflow-hidden"
          >
            <p className="mt-4 border-t border-black/10 pt-4 text-xs md:text-sm leading-relaxed text-gray-700">
              {card.details}
            </p>
          </motion.div>

          <p className="mt-4 text-[11px] text-gray-400">
            {active === i ? "Click para cerrar" : "Click para ver más"}
          </p>
        </motion.div>
      ))}
    </div>
  );
}