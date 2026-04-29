"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      category: "Software Engineering",
      items: [
        "PHP · C# · ASP.NET · JavaScript",
        "Next.js· HTML · CSS",
        "APIs",
        "Refactorización",
        "Escalabilidad ",
        "Mantenibilidad",
        "Optimización y eficiencia del sistema"

      ],
    },
    {
      category: "Data & Analytics",
      items: [
        "Análisis exploratorio (EDA)",
        "ETL",
        "Data Wrangling",
        "Estadística aplicada",
        "Visualización de datos",
        "Interpretación de datos"
      ],
    },
    {
      category: "Bases de Datos",
      items: [
        "SQL Avanzado",
        "Diseño relacional",
        "Stored Procedures",
        "Triggers",
        "Optimización de funciones con SQL",
      ],
    },
    {
      category: "Machine Learning & Models",
      items: [
        "Python",
        "Modelos de regresión y clasificación",
        "Evaluación de modelos",
        "Scikit-learn",
        "Preprocesamiento de datos",
        "Feature engineering",
      ],
    },
     {
      category: "Deep Learning",
      items: [
        "Redes Neuronales (ANN)",
        "Convolutional Neural Networks (CNN)",
        "Clasificación de imágenes"
      ],
    },
    {
      category: "Herramientas & Procesos",
      items: [
        "GitHub",
        "Vercel",
        "AWS",
        "Bizagi",
        "Jira",
        "Trello",
        "Google Sheets API",
      ],
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {skills.map((group, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: i * 0.06 }}
          className="rounded-3xl border border-[var(--accent)]/20 bg-white/65 p-5 shadow-sm shadow-black/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-[var(--accent)]/40 hover:shadow-lg hover:shadow-black/[0.06]"
        >
          {/* TITULO CATEGORIA */}
          <h3 className="mb-4 text-sm font-semibold text-[var(--primary)]">
            {group.category}
          </h3>

          {/* SKILLS */}
          <div className="flex flex-wrap gap-2">
            {group.items.map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -2 }}
                className="rounded-full border border-[var(--accent)]/20 bg-[var(--light)]/60 px-3.5 py-1.5 text-xs md:text-sm text-[var(--primary)] transition-all duration-300 hover:bg-white hover:shadow-sm cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}