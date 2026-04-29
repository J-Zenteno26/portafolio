"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Proyectos2() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

 const data = [
    {
      title: "Recepapp",
        subtitle: "Web App · React · Typescript",
        desc: "Aplicación para gestionar pedidos, clientes e ítems en un negocio real.",
        image: "/projects/pedidos.png",
        link: "https://github.com/J-Zenteno26/recep_app",
        details:
            "Aplicación desarrollada en React que permite gestionar pedidos, clientes e ítems mediante operaciones CRUD, optimizando la gestión de un negocio real.",
    },
    {
        title: "DigiPyme",
        subtitle: "Web App · PHP · AWS (EC2 · RDS)",
        desc: "MVP en desarrollo para automatizar el cálculo de costos y precios de venta basados en recetas.",
        image: "/projects/version4.png",
        link: "https://github.com/J-Zenteno26/recep_app",
        details: "Permite modelar recetas, calcular costos unitarios, márgenes y apoyar la toma de decisiones en negocios gastronómicos.",
    },
    {
        title: "Complet.in",
        subtitle: "Web App · JavaScript · Frontend",
        desc: "Sistema de cálculo dinámico de insumos basado en reglas de consumo y distribución de productos.",
        image: "/projects/bitacora_registro.png",
        link: "TU_LINK_AQUI",
        details: "Permite definir escenarios de consumo, distribuir tipos de completos y obtener automáticamente el cálculo de insumos necesarios para eventos o producción.",
      },
      {
          title: "Bitácora Botánica",
          subtitle: "Web App · JavaScript · Google Sheets API",
          desc: "Sistema de captura y análisis de datos ambientales para monitoreo de cultivos.",
          image: "/projects/bitacora.png",
          link: "bitacora_registro",
          details: "Integra registro estructurado de variables (T°, humedad, riego) y visualización de datos históricos para análisis y toma de decisiones.",
      }
  ];

  return (
    <div className="relative px-8 md:px-10">
      {/* IZQUIERDA */}
      <button
        onClick={() => scroll("left")}
        className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-10 h-11 w-11 flex items-center justify-center rounded-full border border-[var(--accent)]/25 bg-white/80 text-[var(--primary)] shadow-lg shadow-black/[0.06] backdrop-blur-md hover:bg-[var(--light)] hover:scale-105 transition"
      >
        ←
      </button>

      {/* SCROLL */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 md:px-6 py-5 scrollbar-hide"
      >
        {data.map((proj, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="group min-w-[320px] max-w-[320px] snap-start flex-shrink-0 overflow-hidden rounded-3xl border border-[var(--accent)]/20 bg-white/70 p-5 shadow-lg shadow-black/[0.04] backdrop-blur-sm transition-all duration-300 hover:border-[var(--accent)]/40 hover:shadow-xl hover:shadow-black/[0.08]"
          >
            {/* IMAGEN */}
            <div className="overflow-hidden rounded-2xl border border-black/5 bg-[var(--light)]">
              <img
                src={proj.image}
                alt={proj.title}
                className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* TITULO */}
            <h3 className="mt-5 font-semibold text-lg leading-snug text-[var(--primary)]">
              {proj.title}
            </h3>

            {/* SUBTITULO */}
            <span className="mt-2 inline-flex rounded-full bg-[var(--light)] px-3 py-1 text-[11px] font-medium text-[var(--secondary)]">
              {proj.subtitle}
            </span>

            {/* DESCRIPCIÓN */}
            <p className="text-sm mt-4 text-gray-600 leading-relaxed">
              {proj.desc}
            </p>

            {/* VER MÁS */}
            <button
              onClick={() => setActive(active === i ? null : i)}
              className="mt-4 text-sm font-medium text-[var(--primary)] hover:text-[var(--secondary)] transition"
            >
              {active === i ? "Ver menos ↑" : "Ver más ↓"}
            </button>

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
              <p className="text-sm mt-4 text-gray-700 border-t border-black/10 pt-4 leading-relaxed">
                {proj.details}
              </p>
            </motion.div>

            {/* LINK */}
            <a
              href={proj.link}
              target="_blank"
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[var(--secondary)] px-4 py-2.5 text-sm font-medium text-white shadow-md shadow-black/10 hover:bg-[var(--primary)] transition"
            >
              Ver sistema →
            </a>
          </motion.div>
        ))}
      </div>

      {/* DERECHA */}
      <button
        onClick={() => scroll("right")}
        className="absolute -right-3 md:-right-8 top-1/2 -translate-y-1/2 z-10 h-11 w-11 flex items-center justify-center rounded-full border border-[var(--accent)]/25 bg-white/80 text-[var(--primary)] shadow-lg shadow-black/[0.06] backdrop-blur-md hover:bg-[var(--light)] hover:scale-105 transition"
      >
        →
      </button>
    </div>
  );
}