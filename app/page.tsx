"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";
import Problemas from "@/components/Problemas";
import Experiencia from "@/components/Experiencia";
import Educacion from "@/components/Educacion";
import Skills from "@/components/Skills";
import Proyectos from "@/components/Proyectos";
import Proyectos2 from "@/components/Proyectos2";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    "/images/foto1.jpg",
    "/images/foto2.jpg",
    "/images/foto4.jpg",
    "/images/torta1.jpg",
    "/images/torta2.jpg",
    "/images/torta5.jpg",
  ];

  return (
    <main className="relative overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center px-6 overflow-hidden">
        {/* IMAGEN */}
        <div className="absolute inset-0 -z-20">
          <img
            src="/fondo.jpg"
            alt="background"
            className="w-full h-full object-cover scale-105"
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10 -z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f5f1e9] -z-10" />

        {/* CONTENIDO */}
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 items-center">
          <div className="text-left rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-[3px] p-6 md:p-10 shadow-2xl shadow-black/20">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs md:text-sm tracking-[0.25em] uppercase text-white/80"
            >
              Portfolio profesional
            </motion.p>

            {/* NOMBRE */}
            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-semibold text-white leading-[0.95] drop-shadow-xl"
            >
              Jeanette Zenteno
            </motion.h1>

            {/* SUBTÍTULO */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-base md:text-lg text-white/90 font-light tracking-wide flex flex-wrap items-center gap-2"
            >
              <span className="font-medium text-white">
                Ingeniera de Software y Datos
              </span>
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
              automatización y escalabilidad. Combino ingeniería de software y
              análisis de datos, incorporando modelamiento y machine learning
              para resolver problemas reales con impacto.
            </motion.p>

            {/* BOTONES */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-9 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#Proyectos"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--primary)] text-white rounded-full shadow-lg shadow-black/20 hover:bg-[var(--secondary)] hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                Ver proyectos
                <span className="transition group-hover:translate-x-1">→</span>
              </a>

              <a
                href="/Jeanette_Zenteno_Software_Data_Engineer.pdf.pdf"
                target="_blank"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/60 text-white rounded-full bg-white/5 hover:bg-white hover:text-[var(--primary)] transition-all duration-300"
              >
                Ver CV resumido
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOBRE MI */}
      <section id="about" className="px-6 md:px-10 py-24 max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-white/70 bg-white/60 backdrop-blur-md shadow-xl shadow-black/[0.05] p-8 md:p-12">

          {/* DETALLE DECORATIVO */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] opacity-70" />

          {/* HEADER */}
          <div className="mb-8">
            <span className="inline-flex mb-3 rounded-full bg-[var(--light)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--secondary)]">
              Perfil profesional
            </span>

            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--primary)] leading-tight">
              Sobre mí
            </h2>

            <span className="block h-[3px] w-14 bg-[var(--accent)] mt-4 rounded-full"></span>
          </div>

          {/* TEXTO */}
          <p className="leading-relaxed text-gray-700 text-base md:text-lg font-light max-w-3xl tracking-[0.01em]">
            Ingeniera de Software con enfoque en datos, con experiencia en modernización de sistemas, optimización de procesos y desarrollo de soluciones automatizadas.
            He trabajado con sistemas legacy, migraciones de datos y diseño de herramientas orientadas a reducir errores operativos y mejorar la eficiencia.
            Recientemente finalicé mi formación en Data Science, desarrollando análisis y modelos predictivos mediante técnicas de machine learning.
          </p>

        </div>
      </section>

      {/* MÉTRICAS */}
      <Reveal>
        <section className="px-6 md:px-10 py-8 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            {
              value: "-80%",
              label: "Soporte por errores",
              tooltip:
                "Reducción de solicitudes mediante automatización y corrección de lógica",
            },
            {
              value: "+50%",
              label: "Escalabilidad del sistema",
              badge: "Reconocido",
              tooltip:
                "Refactorización a lógica modular y reutilización de componentes",
            },
            {
              value: "+10.000",
              label: "Registros procesados",
              tooltip: "Migraciones automatizadas de datos entre entidades",
            },
            {
              value: "99%",
              label: "Eliminación duplicados",
              badge: "Reconocido",
              tooltip: "Detección y limpieza automática de inconsistencias",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="relative group text-center p-5 md:p-6 rounded-3xl bg-white/70 backdrop-blur-sm border border-white/70 shadow-lg shadow-black/[0.04] cursor-default"
            >
              {/* BADGE */}
              {item.badge && (
                <span className="absolute top-3 right-3 text-[10px] px-2.5 py-1 bg-[var(--primary)] text-white rounded-full">
                  {item.badge}
                </span>
              )}

              <p className="text-3xl md:text-4xl font-semibold text-[var(--primary)]">
                {item.value}
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-3 leading-snug">
                {item.label}
              </p>

              {/* TOOLTIP SOLO DESKTOP */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-full mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1 pointer-events-none">
                <div className="bg-[var(--primary)] text-white text-xs px-3 py-2 rounded-xl shadow-lg whitespace-nowrap">
                  {item.tooltip}
                </div>
                <div className="w-2 h-2 bg-[var(--primary)] rotate-45 mx-auto -mt-1"></div>
              </div>

              {/* TEXTO MOBILE */}
              <p className="text-xs text-gray-500 mt-3 md:hidden leading-relaxed">
                {item.tooltip}
              </p>
            </motion.div>
          ))}
        </section>
      </Reveal>


      {/* PROBLEMAS */}
      <section id="impact" className="px-6 md:px-10 py-24 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 relative inline-block text-[var(--primary)]">
          Problemas que resolví
          <span className="block h-[3px] w-16 bg-[var(--accent)] mt-3 rounded-full"></span>
        </h2>
        <Problemas />
      </section>

      {/* Reconocimiento*/}
      <section className="px-6 md:px-10 py-24 max-w-6xl mx-auto">

        <div className="relative rounded-[2.2rem] border border-[var(--accent)]/20 bg-[var(--light)]/40 backdrop-blur-sm p-8 md:p-12 shadow-xl shadow-black/[0.05]">

          {/* DETALLE SUPERIOR */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] opacity-70 rounded-t-[2.2rem]" />

          {/* HEADER */}
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.25em] text-[var(--secondary)] mb-2">
              Reconocimiento profesional
            </p>

            <h3 className="text-2xl md:text-3xl font-semibold text-[var(--primary)]">
              Reconocimientos que respaldan resultados obtenidos
            </h3>

            <span className="block h-[3px] w-16 bg-[var(--accent)] mt-3 rounded-full"></span>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-6">

            <img
              src="/images/premio1.jpg"
              alt="Premio excelencia"
              onClick={() => setSelectedImage("/images/premio1.jpg")}
              className="rounded-3xl object-cover w-full h-[240px] cursor-pointer shadow-lg shadow-black/[0.06] border border-white/70 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            />

            <img
              src="/images/premio2.jpg"
              alt="Premio mejor talento"
              onClick={() => setSelectedImage("/images/premio2.jpg")}
              className="rounded-3xl object-cover w-full h-[240px] cursor-pointer shadow-lg shadow-black/[0.06] border border-white/70 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="px-6 md:px-10 py-24 max-w-[1500px] mx-auto">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.25em] text-[var(--secondary)] mb-2">
            Portfolio técnico
          </p>
          <h2 className="text-3xl font-semibold relative inline-block text-[var(--primary)]">
            Data Science Projects
            <span className="block h-[3px] w-16 bg-[var(--accent)] mt-3 rounded-full"></span>
          </h2>
        </div>
        <Proyectos />
      </section>

      {/* PROYECTOS */}
      <section id="Proyectos" className="px-6 md:px-10 py-24 max-w-[1500px] mx-auto">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.25em] text-[var(--secondary)] mb-2">
            Desarrollo de software
          </p>
          <h2 className="text-3xl font-semibold relative inline-block text-[var(--primary)]">
            Software | Fullstack Projects
            <span className="block h-[3px] w-16 bg-[var(--accent)] mt-3 rounded-full"></span>
          </h2>
        </div>
        <Proyectos2 />
      </section>

      {/* EXPERIENCIA */}
      <section id="experience" className="px-6 md:px-10 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 relative inline-block text-[var(--primary)]">
          Experiencia
          <span className="block h-[3px] w-16 bg-[var(--accent)] mt-3 rounded-full"></span>
        </h2>
        <Experiencia />
      </section>

      {/* SKILLS */}
      <Reveal>
        <section id="skills" className="px-6 md:px-10 py-24 max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 relative inline-block text-[var(--primary)]">
            Skills
            <span className="block h-[3px] w-16 bg-[var(--accent)] mt-3 rounded-full"></span>
          </h2>

          <Skills />
        </section>
      </Reveal>

      {/* EDUCACIÓN */}
      <section id="education" className="px-6 md:px-10 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 relative inline-block text-[var(--primary)]">
          Educación
          <span className="block h-[3px] w-16 bg-[var(--accent)] mt-3 rounded-full"></span>
        </h2>

        <Educacion />
      </section>

      {/* CONTACTO */}
      <Reveal>
        <section id="contact" className="px-6 md:px-10 py-24 max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-[2.2rem] border border-[var(--accent)]/20 bg-[var(--primary)] p-8 md:p-12 shadow-2xl shadow-black/[0.08]">
            {/* DETALLE SUPERIOR */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--accent)] via-white/60 to-[var(--secondary)] opacity-80" />

            {/* DECORATIVO */}
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-[var(--accent)]/20 blur-3xl" />

            <div className="relative z-10">
              <span className="inline-flex mb-3 rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/75">
                Trabajemos juntos
              </span>

              <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">
                Contacto
              </h2>

              <p className="mb-8 max-w-2xl text-sm md:text-base leading-relaxed text-white/70">
                Disponible para oportunidades relacionadas con desarrollo de software,
                datos y soluciones tecnológicas orientadas a eficiencia operativa.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                {/* EMAIL */}
                <a
                  href="mailto:zentenoestefania6@gmail.com"
                  className="group rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <span className="block text-xs uppercase tracking-[0.18em] text-white/55 group-hover:text-[var(--secondary)]">
                    Email
                  </span>

                  <span className="mt-2 block break-all text-sm md:text-base font-medium text-white group-hover:text-[var(--primary)]">
                    zentenoestefania6@gmail.com
                  </span>
                </a>

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/jeanette-zenteno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                >
                  <span className="block text-xs uppercase tracking-[0.18em] text-white/55 group-hover:text-[var(--secondary)]">
                    LinkedIn
                  </span>

                  <span className="mt-2 block break-all text-sm md:text-base font-medium text-white group-hover:text-[var(--primary)]">
                    www.linkedin.com/in/jeanette-zenteno
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* FOOTER */}
      <footer className="mt-20 bg-[var(--primary)] text-white py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm tracking-wide opacity-90">
          Built by Jeanette Zenteno
        </div>
      </footer>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="preview"
            className="max-w-[92%] max-h-[90%] rounded-2xl shadow-2xl"
          />
        </div>
      )}

      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          {/* flecha izquierda */}
          <button
            onClick={() =>
              setSelectedIndex((prev) =>
                prev === 0 ? images.length - 1 : prev! - 1
              )
            }
            className="absolute left-5 md:left-8 text-white text-5xl hover:scale-110 transition"
          >
            ‹
          </button>

          {/* imagen */}
          <img
            src={images[selectedIndex]}
            className="max-w-[90%] max-h-[85%] rounded-2xl shadow-2xl"
          />

          {/* flecha derecha */}
          <button
            onClick={() =>
              setSelectedIndex((prev) =>
                prev === images.length - 1 ? 0 : prev! + 1
              )
            }
            className="absolute right-5 md:right-8 text-white text-5xl hover:scale-110 transition"
          >
            ›
          </button>

          {/* cerrar */}
          <div
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-white text-xl cursor-pointer rounded-full border border-white/30 w-10 h-10 flex items-center justify-center hover:bg-white hover:text-black transition"
          >
            ✕
          </div>
        </div>
      )}
    </main>
  );
}