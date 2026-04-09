"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Proyectos() {
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
      title: "Sistema de gestión de pedidos",
      subtitle: "Web App · React",
      desc: "Aplicación para gestionar pedidos, clientes e ítems en un negocio real.",
      image: "/projects/pedidos.png",
      link: "https://github.com/J-Zenteno26/recep_app",
      details:
        "Aplicación desarrollada en React que permite gestionar pedidos, clientes e ítems mediante operaciones CRUD, optimizando la gestión de un negocio real.",
    },
    {
      title: "Análisis de comportamiento de clientes",
      subtitle: "Data Analysis · Python",
      desc: "Exploración de datos para identificar patrones de compra.",
      image: "/projects/eda.png",
      link: "https://github.com/J-Zenteno26/AnalisisExploratoriodeDatos",
      details:
        "Análisis exploratorio de datos enfocado en detectar patrones de compra, correlaciones y comportamiento de clientes mediante visualizaciones y estadísticas.",
    },
    {
      title: "Modelo de predicción de clientes",
      subtitle: "Machine Learning · Python",
      desc: "Modelo predictivo para estimar comportamiento de clientes.",
      image: "/projects/ml.png",
      link: "https://github.com/J-Zenteno26/ModeloPredictivo",
      details:
        "Modelo de machine learning que utiliza regresión para predecir comportamiento de clientes, incluyendo preprocesamiento, entrenamiento y evaluación.",
    },
    {
      title: "Clasificador de prendas con Deep Learning",
      subtitle: "Computer Vision · CNN",
      desc: "Clasificación de imágenes mediante redes neuronales.",
      image: "/projects/cnn.png",
      link: "https://github.com/J-Zenteno26/ClasificadorInteligente",
      details:
        "Modelo de deep learning basado en CNN para clasificación de prendas utilizando imágenes, con evaluación mediante métricas y visualización de resultados.",
    },
  ];

  return (
    <div className="relative px-10">
      {/* IZQUIERDA */}
      <button
        onClick={() => scroll("left")}
        className="absolute -left-8 top-1/2 -translate-y-1/2 z-10 
        bg-white/80 backdrop-blur-md p-3 rounded-full shadow-md 
        hover:scale-110 transition"
      >
        ←
      </button>

      {/* SCROLL */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-6 py-4"
      >
        {data.map((proj, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="group min-w-[300px] max-w-[300px] snap-start bg-white/40 backdrop-blur-sm border rounded-xl shadow-md p-4 flex-shrink-0 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            {/* IMAGEN */}
            <img
              src={proj.image}
              alt={proj.title}
              className="rounded-lg mb-4 h-40 w-full object-cover group-hover:scale-[1.03] transition"
            />

            {/* TITULO */}
            <h3 className="font-semibold text-lg">
              {proj.title}
            </h3>

            <span className="text-xs text-gray-400">
              {proj.subtitle}
            </span>

            {/* DESCRIPCIÓN */}
            <p className="text-sm mt-2 text-gray-600">
              {proj.desc}
            </p>

            {/* VER MÁS */}
            <button
              onClick={() => setActive(active === i ? null : i)}
              className="text-sm mt-2 text-[var(--primary)] hover:underline"
            >
              {active === i ? "Ver menos" : "Ver más"}
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
              <p className="text-sm mt-2 text-gray-600">
                {proj.details}
              </p>
            </motion.div>

            {/* LINK */}
            <a
              href={proj.link}
              target="_blank"
              className="inline-block mt-4 text-sm text-[var(--primary)] hover:underline"
            >
              Ver proyecto →
            </a>
          </motion.div>
        ))}
      </div>

      {/* DERECHA */}
      <button
        onClick={() => scroll("right")}
        className="absolute -right-8 top-1/2 -translate-y-1/2 z-10 
        bg-white/80 backdrop-blur-md p-3 rounded-full shadow-md 
        hover:scale-110 transition"
      >
        →
      </button>
    </div>
  );
}