// Proyectos reales desarrollados por Francisco Joel Cruz Fernández.
// "contribution" indica explícitamente si el proyecto fue individual o
// grupal, y qué parte específica se desarrolló.

export const projects = [
  {
    slug: "sgdc-gestion-documental-catastro",
    title: "SGDC — Sistema de Gestión Documental de Catastro",
    summary:
      "Sistema para digitalizar y organizar los expedientes del catastro de una municipalidad, desarrollado en Laravel.",
    description:
      "Sistema de gestión documental para el catastro municipal, construido en Laravel para digitalizar el manejo de expedientes, documentos y trámites de la oficina de catastro de una municipalidad, reemplazando procesos que antes eran mayormente en papel.",
    contributionType: "Grupal",
    contribution:
      "Proyecto en equipo sin división estricta de tareas: todos los integrantes trabajaron sobre distintas partes del sistema. Mi aporte principal fue el diseño de la lógica del sistema, el desarrollo del backend y el modelado y administración de la base de datos.",
    tech: ["Laravel", "PHP", "MySQL"],
    context: "Proyecto de universidad",
    links: { github: "https://github.com/Fran-cruz" },
    featured: true,
  },
  {
    slug: "gestionaulas",
    title: "GestionAulas",
    summary: "Prototipo de sistema para la gestión de aulas de la UNICAH, Campus San Isidro.",
    description:
      "Prototipo de sistema web para la gestión de aulas, diseñado para la Universidad Católica de Honduras (UNICAH), Campus San Isidro, como proyecto de la clase de Portales Web I. Busca ordenar la administración y disponibilidad de las aulas del campus.",
    contributionType: "Grupal",
    contribution:
      "Proyecto grupal desarrollado para la clase de Portales Web I. Formé parte del equipo de frontend, construido con React y JavaScript.",
    tech: ["React", "JavaScript"],
    context: "Proyecto de clase — Portales Web I",
    links: { github: "https://github.com/Fran-cruz" },
    featured: true,
  },
  {
    slug: "conmutacion-electroenergetica",
    title: "Módulo de Conmutación Electroenergética",
    summary:
      "Circuito con PIC16F628A para el encendido automatizado de aires acondicionados por detección óptica.",
    description:
      "Módulo para la gestión automatizada del suministro eléctrico de sistemas de climatización, basado en detección optoelectrónica con aislamiento galvánico. Un pequeño circuito diseñado alrededor de un microcontrolador PIC16F628A, un sensor óptico de barrera y un relé de estado sólido (SSR) de 25A, pensado para el encendido automático de los aires acondicionados en las aulas del Campus San Isidro.",
    contributionType: "Individual",
    contribution:
      "Proyecto individual — diseño y construcción completos del circuito: programación del microcontrolador PIC16F628A, integración del sensor óptico de barrera, el relé SSR 25DA y el aislamiento galvánico para la conmutación segura de la carga eléctrica.",
    tech: ["PIC16F628A", "Sensor óptico de barrera", "Relé SSR 25DA", "Aislamiento galvánico", "Electrónica embebida"],
    context: "Proyecto personal / hardware",
    links: { github: "https://github.com/Fran-cruz" },
    featured: true,
  },
  {
    slug: "servidor-domestico-proxmox",
    title: "Servidor Doméstico con Proxmox VE",
    summary: "Infraestructura de servidor doméstico multi-servicio: Pi-hole, Jellyfin, TrueNAS y VPN sobre Proxmox VE.",
    description:
      "Diseño e implementación de una infraestructura de servidor doméstico multi-servicio usando Proxmox VE. Incluye contenedores LXC sin privilegios para Pi-hole (bloqueo de anuncios a nivel de red y DNS local) y Jellyfin (streaming de medios con transcodificación por hardware usando la iGPU de Intel). Se aprovisionó además una VM dedicada de TrueNAS con passthrough directo de disco por PCIe/SATA para una gestión de almacenamiento segura con ZFS. Se implementaron redes virtuales, reglas de firewall, estrategias de respaldo automatizado con Proxmox Backup Server, y acceso remoto seguro mediante VPN (Tailscale).",
    contributionType: "Individual",
    contribution:
      "Proyecto personal — diseño, aprovisionamiento y administración completos de toda la infraestructura: virtualización, contenedores, almacenamiento, redes, respaldos y acceso remoto.",
    tech: ["Proxmox VE", "LXC", "TrueNAS", "ZFS", "Pi-hole", "Jellyfin", "Tailscale", "Redes / Firewall"],
    context: "Proyecto personal / infraestructura",
    links: { github: "https://github.com/Fran-cruz" },
    featured: true,
  },
  {
    slug: "plataforma-cuestionarios-laravel",
    title: "Plataforma de Cuestionarios en Laravel",
    summary: "Plataforma completa de cuestionarios y evaluaciones con calificación automática, construida en Laravel.",
    description:
      "Plataforma completa de cuestionarios y evaluaciones construida con Laravel. El sistema se enfoca en la evaluación automática, el manejo seguro de datos, la gestión dinámica de la base de datos y una arquitectura escalable.",
    contributionType: "Individual",
    contribution:
      "Proyecto individual — diseño y desarrollo completos: backend, base de datos, lógica de calificación automática y manejo seguro de la información.",
    tech: ["Laravel", "PHP", "MySQL"],
    context: "Proyecto de universidad",
    links: { github: "https://github.com/Fran-cruz" },
  },
  {
    slug: "sistema-gestion-clinica",
    title: "Sistema de Gestión para Clínica",
    summary: "Plataforma en Laravel para la gestión de pacientes, citas y flujos operativos de una clínica.",
    description:
      "Plataforma basada en Laravel para la administración de una clínica: gestión de pacientes, citas médicas, flujos operativos y administración de la base de datos.",
    contributionType: "Grupal",
    contribution:
      "Trabajo en equipo — desarrollé personalmente el backend completo, la base de datos y la lógica de negocio del sistema, mientras el resto del equipo trabajó en otras áreas del proyecto.",
    tech: ["Laravel", "PHP", "MySQL"],
    context: "Proyecto de universidad",
    links: { github: "https://github.com/Fran-cruz" },
  },
  {
    slug: "bitacora-construccion",
    title: "Sistema de Bitácora de Construcción",
    summary: "Sistema digital para el seguimiento de obras, reportes y documentación de proyectos de construcción.",
    description:
      "Sistema digital de seguimiento de obras para la gestión de bitácoras de trabajo, reportes y documentación de proyectos de construcción.",
    contributionType: "Individual",
    contribution: "Proyecto personal, no académico — diseño y desarrollo completos del sistema.",
    tech: ["Laravel", "PHP", "MySQL"],
    context: "Proyecto personal (no académico)",
    links: { github: "https://github.com/Fran-cruz" },
  },
  {
    slug: "brazo-robotico",
    title: "Brazo Robótico",
    summary: "Brazo robótico con control manual y ejecución autónoma mediante sensores y motores.",
    description:
      "Brazo robótico capaz de operar tanto con control manual como con ejecución autónoma, usando sensores, algoritmos de movimiento e integración de hardware embebido.",
    contributionType: "Individual",
    contribution:
      "Proyecto individual — diseño, ensamblaje y programación completos: control manual, rutinas autónomas, lectura de sensores e integración del hardware embebido.",
    tech: ["Arduino", "Electrónica embebida", "Robótica"],
    context: "Proyecto de universidad / feria de robótica",
    links: { github: "https://github.com/Fran-cruz" },
  },
  {
    slug: "vehiculo-combate-robotico",
    title: "Vehículo de Combate Robótico",
    summary: "Robot de combate diseñado y ensamblado para durabilidad, agilidad y eficiencia de motores.",
    description:
      "Robot de combate diseñado y ensamblado para demostraciones competitivas, optimizado para durabilidad, agilidad y eficiencia de motores.",
    contributionType: "Individual",
    contribution: "Proyecto individual — diseño y ensamblaje completos del vehículo, incluyendo selección de motores, estructura y control.",
    tech: ["Robótica", "Electrónica", "Diseño mecánico"],
    context: "Proyecto de universidad / demostración competitiva",
    links: { github: "https://github.com/Fran-cruz" },
  },
  {
    slug: "asistente-ia-local",
    title: "Asistente de IA Local",
    summary: "Asistente de automatización multiplataforma con integración de un chatbot local basado en LLMs ligeros.",
    description:
      "Asistente de automatización multiplataforma capaz de realizar búsquedas web, controlar reproducción multimedia, abrir aplicaciones e integrar un chatbot local usando modelos de lenguaje (LLMs) ligeros.",
    contributionType: "Individual",
    contribution: "Proyecto personal, no académico — desarrollo completo del asistente y su integración con LLMs locales.",
    tech: ["Python", "LLMs locales", "Automatización"],
    context: "Proyecto personal (no académico)",
    links: { github: "https://github.com/Fran-cruz" },
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
