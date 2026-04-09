"use client";

import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";
import Problemas from "@/components/Problemas";
import Experiencia from "@/components/Experiencia";
import Educacion from "@/components/Educacion";
import Skills from "@/components/Skills";
import Proyectos from "@/components/Proyectos";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center px-6 overflow-hidden">

        {/* IMAGEN */}
        <div className="absolute inset-0 -z-20">
          <img
            src="/fondo.jpg"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* OVERLAY OSCURO PARA CONTRASTE */}
        <div className="absolute inset-0 bg-black/40 -z-10" />

        {/* CONTENIDO */}
        <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 items-center">

          <div className="text-left">

            {/* NOMBRE */}
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-semibold text-white leading-tight drop-shadow-md"
            >
              Jeanette Zenteno
            </motion.h1>

            {/* SUBTÍTULO */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-base md:text-lg text-white/85 font-light tracking-wide flex flex-wrap items-center gap-2"
            >
              <span className="font-medium text-white">Ingeniera de Software y Datos</span>

              <span className="opacity-50">·</span>

              <span>Data Science</span>

              <span className="opacity-50">·</span>

              <span>Software Developer</span>
            </motion.p>

            {/* DESCRIPCIÓN */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 max-w-xl text-white/85 text-lg md:text-xl leading-relaxed font-light"
            >
              Desarrollo soluciones backend y de datos enfocadas en eficiencia,
              automatización y escalabilidad. Especializada en resolver problemas
              reales mediante ingeniería aplicada.
            </motion.p>

            {/* BOTONES */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex gap-4"
            >
              <a
                href="#Proyectos"
                className="inline-flex items-center gap-2 px-6 py-3  bg-[var(--primary)] text-white rounded-lg shadow-md  hover:scale-[1.05] hover:shadow-lg transition-all duration-300"
              >
                Ver proyectos
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a
                href="/Jeanette_Zenteno_Software_Data_Engineer.pdf.pdf"
                target="_blank"
                className="px-6 py-3 border border-white/70 text-white rounded-lg hover:bg-white hover:text-[var(--primary)] transition"
              >
                Ver CV resumido
              </a>
            </motion.div>

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

              {/* TOOLTIP SOLO DESKTOP */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-full mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1 pointer-events-none">
                <div className="bg-[var(--primary)] text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap">
                  {item.tooltip}
                </div>
                <div className="w-2 h-2 bg-[var(--primary)] rotate-45 mx-auto -mt-1"></div>
              </div>

              {/* TEXTO MOBILE */}
              <p className="text-xs text-gray-500 mt-2 md:hidden">
                {item.tooltip}
              </p>
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

      {/* PROYECTOS */}
      <section id="Proyectos" className="px-10 py-20 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 relative inline-block">
          Proyectos destacados
          <span className="block h-[2px] w-12 bg-[var(--secondary)] mt-2"></span>
        </h2>
        <Proyectos />
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
      <section className="px-10 py-20 max-w-4xl mx-auto">
        <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-sm">

          <h2 className="text-xl font-semibold mb-4 text-[var(--primary)]">
            Más allá del código
          </h2>

          <p className="text-base text-gray-600 leading-relaxed font-light">
            Fuera del código, disfruto pintar en acrílico y crear pastelería,
            explorando procesos creativos que también aplico en el desarrollo de soluciones.
          </p>

        </div>
      </section>

      {/* CONTACTO */}
      <Reveal>
        <section id="contact" className="px-10 py-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Contacto</h2>

          <div className="space-y-4 text-lg">

            {/* EMAIL */}
            <p>
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:zentenoestefania6@gmail.com"
                className="hover:text-[var(--primary)] transition-colors underline underline-offset-4"
              >
                zentenoestefania6@gmail.com
              </a>
            </p>

            {/* LINKEDIN */}
            <p>
              <span className="font-medium">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/jeanette-zenteno"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--primary)] transition-colors underline underline-offset-4"
              >
                www.linkedin.com/in/jeanette-zenteno
              </a>
            </p>

          </div>
        </section>
      </Reveal>

      {/* FOOTER */}
      <footer className="mt-20 bg-[var(--primary)] text-white py-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm tracking-wide opacity-90">
          Built by Jeanette Zenteno
        </div>
      </footer>
    </main>
  );
}