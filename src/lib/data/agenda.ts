export type ActividadTipo =
  | "institucional"
  | "innovate"
  | "give"
  | "break"
  | "misa";

export type Actividad = {
  horario: string;
  modulo: string;
  tema?: string;
  responsables?: string[];
  lugar?: string;
  tipo: ActividadTipo;
  materialUrl?: string;
  objetivos?: string[];
};

export type DiaAgenda = {
  fecha: string;
  dia: string;
  teamUrl?: string;
  actividades: Actividad[];
};

// --- CONSTANTES DE OBJETIVOS ---

const OBJETIVOS_DP = [
  "Establecer vínculos y relaciones de respeto mutuo en nuestras aulas incorporando el enfoque de la Disciplina Positiva.",
  "Revisar y profundizar los conceptos centrales de la Disciplina Positiva.",
  "Traducir los principios en herramientas concretas aplicables a la realidad de cada nivel.",
  "Elaborar materiales de apoyo que faciliten la implementación sostenida."
];

const OBJETIVOS_PAS = [
  "Diseñar e implementar como metodología activa prioritaria Proyectos de Aprendizaje-Servicio.",
  "Profundizar en los fundamentos pedagógicos del Aprendizaje-Basado en Proyectos (ABP) y su articulación con el Aprendizaje-Servicio.",
  "Fomentar la vinculación con instituciones y fundaciones para la planificación de nuevos proyectos.",
  "Elaborar o actualizar los proyectos de PAS de nuestros colegios."
];

const OBJETIVOS_ESTILO = [
  "Profundizar en el estilo educativo APDES, reconociendo a la familia como primera educadora y aliada fundamental del colegio, para fortalecer una cultura de corresponsabilidad, confianza y trabajo en equipo en el acompañamiento integral de los alumnos.",
  "Reconocer el rol protagónico de la familia y valorar la corresponsabilidad y la confianza mutua.",
  "Profundizar en el plan de mejora de nuestros alumnos a través de las entrevistas con los padres."
];

const OBJETIVOS_FEEDBACK = [
  "Promover una cultura institucional de feedback que impulse el desempeño, favorezca el aprendizaje continuo y fortalezca las relaciones interpersonales, entendiendo el feedback como información clave para el crecimiento personal, profesional y comunitario.",
  "Entender el feedback como información para mejorar, y no como juicio.",
  "Adoptar una actitud proactiva frente al feedback, y reconocerlo como herramienta de proyección futura, integrándolo a procesos de evaluación del desempeño, acompañamiento y crecimiento personal alineados a las expectativas institucionales.",
  "Asumir un compromiso personal y concreto para fortalecer la cultura del feedback en la vida cotidiana de la institución, contribuyendo a un clima de trabajo más colaborativo, exigente y esperanzador."
];

// --- AGENDA ---

export const agenda: DiaAgenda[] = [
  {
    fecha: "Martes 10/02",
    dia: "Martes",
    teamUrl: "https://drive.google.com/",
    actividades: [
      {
        horario: "08:00 a 09:00",
        modulo: "APDES institucional",
        tema: "Bienvenida",
        // Éstos se verán con comas (horizontal)
        responsables: ["Juan Manuel Romano", "Teresita Molina", "Adriana Lozano"],
        lugar: "Los Cerros",
        tipo: "institucional",
        materialUrl: "https://drive.google.com/drive/folders/1dTHRUF804dA7y4LMTZbHI5oMjRRboJo6",
      },
      {
        horario: "09:00 a 09:30",
        modulo: "Break",
        tipo: "break",
        lugar: "Los Cerros",
      },
      {
        horario: "09:30 a 12:00",
        modulo: "INNOVATE",
        tema: "Proyecto Aprendizaje y Servicio",
        responsables: ["Gisela De Lafuente", "Rosario Ávila Gallo", "Cynthia Nieva", "Pablo Díaz Sorbello"],
        lugar: "Los Cerros",
        tipo: "innovate",
        materialUrl: "https://drive.google.com/drive/folders/1CyX7ujsrAZNCGijZM2DoiFDSGOOc8FF9?usp=drive_link",
        objetivos: OBJETIVOS_PAS,
      },
      {
        horario: "12:00 a 12:30",
        modulo: "Santa Misa",
        tipo: "misa",
        lugar: "Los Cerros",
      },
    ],
  },

  {
    fecha: "Miércoles 11/02",
    dia: "Miércoles",
    teamUrl: "https://drive.google.com/",
    actividades: [
      {
        horario: "08:30",
        modulo: "Santa Misa",
        tipo: "misa",
        lugar: "Los Cerros",
      },
      {
        horario: "09:00 a 11:00",
        modulo: "INNOVATE",
        tema: "Proyecto Aprendizaje y Servicio",
        responsables: ["Gisela De Lafuente", "Rosario Ávila Gallo", "Cynthia Nieva", "Pablo Díaz Sorbello"],
        lugar: "Los Cerros",
        tipo: "innovate",
        materialUrl: "https://drive.google.com/drive/folders/1CyX7ujsrAZNCGijZM2DoiFDSGOOc8FF9?usp=drive_link",
        objetivos: OBJETIVOS_PAS,
      },
      {
        horario: "11:00 a 11:30",
        modulo: "Break",
        tipo: "break",
      },
      {
        horario: "11:30 a 12:00",
        modulo: "APDES institucional",
        tema: "Logros alcanzados y objetivos 2026 en el Polo",
        responsables: ["Juan Manuel Romano", "Teresita Molina"],
        lugar: "Los Cerros",
        tipo: "institucional",
        materialUrl: "https://drive.google.com/", 
      },
      {
        horario: "12:00 a 13:00",
        modulo: "GIVE",
        tema: "Comunicación interna",
        responsables: ["Omar Rodríguez", "Sofía Cinto"],
        lugar: "Los Cerros",
        tipo: "give",
        materialUrl: "https://drive.google.com/drive/folders/1Kdl3G2B_SharXW4nAOjIkiZw5tF68wIt?usp=drive_link",
      },
    ],
  },

  {
    fecha: "Jueves 12/02",
    dia: "Jueves",
    teamUrl: "https://drive.google.com/",
    actividades: [
      {
        horario: "08:00 a 10:00",
        modulo: "GIVE",
        tema: "Cultura del feedback",
        // Éstos tienen ":" así que el código los pondrá UNO ABAJO DEL OTRO automáticamente
        responsables: ["Docentes Pucará: Omar Rodríguez", "Docentes Los Cerros y Los Cerritos: Sofía Cinto"],
        lugar: "Los Cerritos / Los Cerros",
        tipo: "give",
        materialUrl: "https://drive.google.com/drive/folders/16Tex0W01O-HvSuiFqBM24t_AfnWTpPLA?usp=drive_link",
        objetivos: OBJETIVOS_FEEDBACK,
      },
      {
        horario: "10:00 a 10:30",
        modulo: "Break",
        tipo: "break",
        lugar: "Los Cerros",
      },
      {
        horario: "10:30 a 12:00",
        modulo: "Estilo educativo",
        tema: "Familias aliadas",
        responsables: ["María Elena Caballero"],
        lugar: "Los Cerros",
        tipo: "institucional",
        materialUrl: "https://drive.google.com/drive/folders/18_ab-V7esKFaHDpVHKgXYwT7nR5iUH8a?usp=drive_link",
        objetivos: OBJETIVOS_ESTILO,
      },
      {
        horario: "12:00 a 12:30",
        modulo: "Santa Misa",
        tipo: "misa",
      },
    ],
  },

  {
    fecha: "Viernes 13/02",
    dia: "Viernes",
    teamUrl: "https://drive.google.com/",
    actividades: [
      {
        horario: "08:00 a 12:00",
        modulo: "INNOVATE",
        tema: "Aprendizaje basado en proyectos",
        responsables: ["Marisol Mañá"],
        lugar: "Los Cerros",
        tipo: "innovate",
        materialUrl: "https://drive.google.com/drive/folders/1v3uoXjIfbM6GFUG6Bmy7Ub-uSazDuliD?usp=drive_link",
        objetivos: OBJETIVOS_PAS,
      },
      {
        horario: "12:00 a 12:30",
        modulo: "Santa Misa",
        tipo: "misa",
        lugar: "Los Cerros",
      },
    ],
  },

  {
    fecha: "Miércoles 18/02",
    dia: "Miércoles",
    teamUrl: "https://drive.google.com/",
    actividades: [
      {
        horario: "08:00",
        modulo: "Santa Misa",
        tema: "Miércoles de ceniza",
        tipo: "misa",
      },
      // --- BLOQUE 1: JARDÍN Y PRIMARIA ---
      {
        horario: "09:00 a 12:00",
        modulo: "INNOVATE",
        tema: "Disciplina positiva (Jardín y Primaria)",
        responsables: [
          "Jardín: Gabriela Ortega y equipo",
          "Primaria Los Cerros: Pilar Hernández · María Trejo",
          "Primaria Pucará: Elisa Agüero · Manuel Páez",
        ],
        lugar: "Los Cerritos (Pucará) / Los Cerros (Primaria)",
        tipo: "innovate",
        materialUrl: "https://drive.google.com/drive/folders/1c9b93IzyXzOjn4bIv6S8vNaDFs8c8m0m?usp=drive_link",
        objetivos: OBJETIVOS_DP,
      },
      // --- BLOQUE 2: SECUNDARIA ---
      {
        horario: "10:00 a 12:00",
        modulo: "INNOVATE",
        tema: "Disciplina positiva (Secundaria)",
        responsables: [
          "Secundaria: Virginia Eroles · Evangelina Mohamad",
        ],
        lugar: "Los Cerros (Secundaria)",
        tipo: "innovate",
        materialUrl: "https://drive.google.com/drive/folders/1c9b93IzyXzOjn4bIv6S8vNaDFs8c8m0m?usp=drive_link",
        objetivos: OBJETIVOS_DP,
      },
      // --- CIERRE: ENCUESTA FINAL ---
      {
        horario: "12:00 a 12:30",
        modulo: "Encuesta Final",
        tema: "Evaluación de la Jornada",
        tipo: "give",
        materialUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfck33huW36yeuB4Hnyute8oey_XKChvFK98OTUMsazhEZQAQ/viewform",
      },
    ],
  },
];