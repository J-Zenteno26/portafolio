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
    <div className="space-y-6">
      {data.map((card, i) => (
        <motion.div
          key={i}
          onClick={() => setActive(active === i ? null : i)}
          whileHover={{ y: -5 }}
          className="group border p-6 rounded-xl bg-white/40 backdrop-blur-sm transition-all duration-300 hover:shadow-lg cursor-pointer"
        >
          <h3 className="font-semibold text-lg group-hover:text-[var(--primary)] transition">
            {card.title}
          </h3>

          <p className="text-sm mt-2 text-gray-600">
            {card.desc}
          </p>

          {/* LISTA */}
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {card.items.map((item, idx) => (
              <li
                key={idx}
                className="relative pl-4 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--secondary)]"
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
            <p className="mt-4 text-sm text-gray-700 border-t pt-4">
              {card.details}
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