"use client";

import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";
import Problemas from "@/components/Problemas";
import Experiencia from "@/components/Experiencia";
import Educacion from "@/components/Educacion";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">

        {/* IMAGEN DE FONDO */}
        <div className="absolute inset-0 -z-10">
          <img
            src="fondo.jpg"
            alt="background"
            className="w-full h-full object-cover opacity-100"
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[var(--bg)]/80 -z-10 backdrop-blur-sm" />

        {/* CONTENIDO */}
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-[var(--primary)]">
          Jeanette Zenteno
        </h1>

        <p className="mt-3 text-lg font-medium text-[var(--secondary)]">
          Ingeniera de Software y Datos · Data Science · Developer
        </p>

        <p className="mt-8 max-w-xl text-[0.95rem] text-gray-600 leading-relaxed">
          Desarrollo soluciones backend y de datos enfocadas en eficiencia,
          automatización y escalabilidad. Especializada en resolver problemas
          reales mediante ingeniería aplicada.
        </p>

        {/* BOTONES */}
        <div className="mt-8 flex gap-6">
          <div className="relative group inline-block">
            <a
              href="#impact"
              className="px-5 py-2.5 text-sm font-medium bg-[var(--primary)] text-white rounded-lg hover:opacity-90 transition"
            >
              Ver proyectos
            </a>
          </div>

          <div className="relative group inline-block">

            <a
              href="/cv-jeanette-zenteno.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-medium border border-[var(--primary)] text-[var(--primary)] rounded-lg hover:bg-[var(--primary)] hover:text-white transition"
            >
              Ver CV resumido
            </a>

            {/* TOOLTIP */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 
              opacity-0 group-hover:opacity-100 
              transition-all duration-300 group-hover:-translate-y-1 pointer-events-none">

              <div className="bg-[var(--primary)] text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                Ve y descarga mi CV resumido
              </div>

              <div className="w-2 h-2 bg-[var(--primary)] rotate-45 mx-auto -mt-1"></div>
            </div>
          </div>

        </div>
      </section>

      {/* SOBRE MI */}
      <section id="about" className="px-10 py-20 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 relative inline-block">
          Sobre mí
          <span className="block h-[2px] w-12 bg-[var(--secondary)] mt-2"></span>
        </h2>

        <p className="leading-relaxed">
          Ingeniera en Software y Datos con experiencia en modernización de
          sistemas, optimización de procesos y desarrollo de herramientas
          automatizadas. He trabajado en sistemas legacy (heredados), migraciones de datos
          y diseño de soluciones que reducen errores operativos y mejoran la
          eficiencia.
        </p>
      </section>

      {/* MÉTRICAS */}
      <Reveal>
        <section className="px-10 py-10 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              value: "-80%",
              label: "Soporte por errores",
              tooltip: "Reducción de solicitudes mediante automatización y corrección de lógica",
            },
            {
              value: "+50%",
              label: "Escalabilidad del sistema",
              tooltip: "Refactorización a lógica modular y reutilización de componentes",
            },
            {
              value: "+10.000",
              label: "Registros procesados",
              tooltip: "Migraciones automatizadas de datos entre entidades",
            },
            {
              value: "99%",
              label: "Eliminación duplicados",
              tooltip: "Detección y limpieza automática de inconsistencias",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative group text-center p-4 rounded-xl bg-white/40 backdrop-blur-sm shadow-sm cursor-default"
            >
              <p className="text-3xl font-semibold text-[var(--primary)]">
                {item.value}
              </p>

              <p className="text-base text-gray-600 mt-2">
                {item.label}
              </p>

              {/* TOOLTIP */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 
                opacity-0 group-hover:opacity-100 
                transition-all duration-300 group-hover:-translate-y-1 pointer-events-none">

                <div className="bg-[var(--primary)] text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                  {item.tooltip}
                </div>

                <div className="w-2 h-2 bg-[var(--primary)] rotate-45 mx-auto -mt-1"></div>
              </div>
            </motion.div>
          ))}
        </section>
      </Reveal>

      {/* PROBLEMAS */}
      <section id="impact" className="px-10 py-20 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 relative inline-block">
          Problemas que resolví
          <span className="block h-[2px] w-12 bg-[var(--secondary)] mt-2"></span>
        </h2>

        <Problemas />
      </section>

      {/* EXPERIENCIA */}
      <section id="experience" className="px-10 py-20 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 relative inline-block">
          Experiencia
          <span className="block h-[2px] w-12 bg-[var(--secondary)] mt-2"></span>
        </h2>

        <Experiencia />
      </section>

      {/* SKILLS */}
      <Reveal>
        <section id="skills" className="px-10 py-20 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 relative inline-block">
            Skills
            <span className="block h-[2px] w-12 bg-[var(--secondary)] mt-2"></span>
          </h2>

          <Skills />
        </section>
      </Reveal>

      {/* EDUCACIÓN */}
      <section id="education" className="px-10 py-20 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 relative inline-block">
          Educación
          <span className="block h-[2px] w-12 bg-[var(--secondary)] mt-2"></span>
        </h2>

        <Educacion />
      </section>

      {/* PERSONAL */}
      <section className="px-10 py-16 max-w-4xl mx-auto text-center">
        <p className="text-[0.95rem] text-gray-500 leading-relaxed">
          Fuera del código, disfruto pintar en acrílico y crear pastelería,
          explorando procesos creativos que también aplico en el desarrollo de soluciones.
        </p>
      </section>

      {/* CONTACTO */}
      <Reveal>
        <section id="contact" className="px-10 py-20 text-center">
          <h2 className="text-2xl font-semibold mb-6">Contacto</h2>
          <p className="text-base">zentenoestefania6@gmail.com</p>
          <p className="text-base">LinkedIn: jeanette-zenteno</p>
        </section>
      </Reveal>
    </main>
  );
}