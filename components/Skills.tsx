"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    {
      category: "Backend & Desarrollo",
      items: ["Python", "JavaScript", "ASP.NET", "Flask"],
    },
    {
      category: "Data & Bases de Datos",
      items: [
        "SQL Avanzado",
        "Data Modeling",
        "ETL",
        "Procesamiento de Datos",
      ],
    },
    {
      category: "Arquitectura & Optimización",
      items: [
        "Refactorización",
        "Automatización",
        "Escalabilidad",
        "Optimización de procesos",
      ],
    },
    {
      category: "Herramientas & Integración",
      items: ["Bizagi", "GitHub", "APIs", "Google Sheets API"],
    },
  ];

  return (
    <div className="space-y-8">
      {skills.map((group, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          {/* TITULO CATEGORIA */}
          <h3 className="text-sm font-semibold text-[var(--secondary)] mb-3 relative inline-block">
            {group.category}
            <span className="block h-[2px] w-10 bg-[var(--secondary)] mt-1"></span>
          </h3>

          {/* SKILLS */}
          <div className="flex flex-wrap gap-3">
            {group.items.map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, scale: 1.03 }}
                className="px-4 py-2 border border-gray-200 rounded-xl bg-white/50 backdrop-blur-sm text-sm transition-all duration-300 hover:shadow-md cursor-default"
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