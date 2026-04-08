export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">

  <h2 className="font-semibold text-[var(--primary)]">
    Jeanette
  </h2>

  <div className="space-x-6 text-sm">
    <a href="#about">Sobre mí</a>
    <a href="#impact">Impacto</a>
    <a href="#experience">Experiencia</a>
    <a href="#education">Educación</a>
    <a href="#skills">Skills</a>
    <a href="#contact">Contacto</a>
  </div>
</nav>
  );
}