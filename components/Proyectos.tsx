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
      title: "Spotify Music Clustering",
      subtitle: "Data Science · Machine Learning · Python",
      desc: "Segmentación no supervisada de canciones de Spotify usando características de audio, clustering y reducción dimensional.",
      image: "/projects/generosdominantes_porcluster.png",
      link: "https://github.com/J-Zenteno26/SpotifyMusicClustering",
      details:
        "Proyecto de ciencia de datos enfocado en aprendizaje no supervisado. Se aplicó análisis exploratorio, limpieza de datos, escalamiento de variables, K-Means Clustering, evaluación con método del codo y Silhouette Score, además de visualización con PCA y t-SNE. Los clústeres fueron interpretados según características musicales como energía, bailabilidad, acousticness, valence, liveness y speechiness.",
    },
    {
      title: "Netflix Content Classification",
      subtitle: "Data Science · Machine Learning · Python",
      desc: "Clasificación de contenido de Netflix aplicando análisis de datos y modelos de Machine Learning.",
      image: "/projects/proporcion_donut.png",
      link: "https://github.com/J-Zenteno26/NetflixClasificadorML",   
      details:
        "Proyecto de ciencia de datos enfocado en el análisis, visualización y clasificación de contenido de Netflix. Incluye limpieza de datos, análisis exploratorio, preparación de variables, entrenamiento de modelos y evaluación de desempeño con métricas de clasificación.",
    },
    {
      title: "Fraud Detection",
      subtitle: "Data Science · Machine Learning · Python",
      desc: "Proyecto de Machine Learning orientado a la detección de fraude.",
      image: "/projects/FraudDetection.png",
      link: "https://github.com/J-Zenteno26/FraudDetection",
      details:
        "Detectar transacciones fraudulentas con el menor número de falsos positivos.",
    },

    {
      title: "EDA - Comportamiento de clientes",
      subtitle: "Data Analysis · Python",
      desc: "Exploración de datos para identificar patrones de compra.",
      image: "/projects/eda.png",
      link: "https://github.com/J-Zenteno26/AnalisisExploratoriodeDatos",
      details:
        "Análisis exploratorio de datos enfocado en detectar patrones de compra, correlaciones y comportamiento de clientes mediante visualizaciones y estadísticas.",
    },
    {
      title: "Modelo predictivo de compras en clientes",
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
    <div className="relative px-8 md:px-10">
      {/* IZQUIERDA */}
      <button
        onClick={() => scroll("left")}
       className="absolute left-1 md:-left-5 top-1/2 -translate-y-1/2 z-10 h-9 w-9 md:h-11 md:w-11 flex items-center justify-center rounded-full border border-[var(--accent)]/20 bg-white/70 text-sm md:text-base text-[var(--primary)] shadow-md backdrop-blur-md hover:bg-[var(--light)] hover:-translate-y-1/2 hover:scale-105 transition"
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
            className="group min-w-[300px] max-w-[300px] snap-start flex-shrink-0 flex flex-col overflow-hidden rounded-3xl border border-white/70 bg-white/70 p-4 shadow-lg shadow-black/[0.04] backdrop-blur-sm transition-all duration-300 hover:border-[var(--accent)]/40 hover:shadow-xl hover:shadow-black/[0.08]"
          >
            {/* IMAGEN */}
            <div className="overflow-hidden rounded-2xl border border-black/5 bg-[var(--light)]">
              <img
                src={proj.image}
                alt={proj.title}
                className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* TITULO */}
            <h3 className="mt-5 font-semibold text-lg leading-snug text-[var(--primary)]">
              {proj.title}
            </h3>

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
              className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-[var(--primary)] px-4 py-2.5 text-sm font-medium text-white shadow-md shadow-black/10 hover:bg-[var(--secondary)] transition"
            >
              Ver proyecto →
            </a>
          </motion.div>
        ))}
      </div>

      {/* DERECHA */}
      <button
        onClick={() => scroll("right")}
       className="absolute right-1 md:-right-8 top-1/2 -translate-y-1/2 z-10 h-9 w-9 md:h-11 md:w-11 flex items-center justify-center rounded-full border border-[var(--accent)]/20 bg-white/70 text-sm md:text-base text-[var(--primary)] shadow-md backdrop-blur-md hover:bg-[var(--light)] hover:-translate-y-1/2 hover:scale-105 transition"
      >
        →
      </button>
    </div>
  );
}