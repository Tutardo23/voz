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
  materialUrl?: string; // SOLO para institucional / innovate / give
};

export type DiaAgenda = {
  fecha: string;
  dia: string;
  teamUrl?: string; // botón "Este es tu team" (por día)
  actividades: Actividad[];
};

export const agenda: DiaAgenda[] = [
  {
    fecha: "Martes 10/02",
    dia: "Martes",
    teamUrl: "https://drive.google.com/", // después lo ajustás
    actividades: [
      {
        horario: "08:00 a 09:00",
        modulo: "APDES institucional",
        tema: "Bienvenida",
        responsables: [
          "Juan Manuel Romano",
          "Teresita Molina",
          "Adriana Lozano",
        ],
        lugar: "Los Cerros",
        tipo: "institucional",
        materialUrl: "https://drive.google.com/",
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
        responsables: [
          "Gisela De Lafuente",
          "Rosario Ávila Gallo",
          "Cynthia Nieva",
          "Pablo Díaz Sorbello",
        ],
        lugar: "Los Cerros",
        tipo: "innovate",
        materialUrl: "https://drive.google.com/",
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
        responsables: [
          "Gisela De Lafuente",
          "Rosario Ávila Gallo",
          "Cynthia Nieva",
          "Pablo Díaz Sorbello",
        ],
        lugar: "Los Cerros",
        tipo: "innovate",
        materialUrl: "https://drive.google.com/",
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
        responsables: [
          "Juan Manuel Romano",
          "Teresita Molina",
        ],
        lugar: "Los Cerros",
        tipo: "institucional",
        materialUrl: "https://drive.google.com/",
      },
      {
        horario: "12:00 a 13:00",
        modulo: "GIVE",
        tema: "Comunicación interna",
        responsables: [
          "Omar Rodríguez",
          "Sofía Cinto",
        ],
        lugar: "Los Cerros",
        tipo: "give",
        materialUrl: "https://drive.google.com/",
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
        responsables: [
          "Docentes Pucará: Omar Rodríguez",
          "Docentes Los Cerros y Los Cerritos: Sofía Cinto",
        ],
        lugar: "Los Cerritos / Los Cerros",
        tipo: "give",
        materialUrl: "https://drive.google.com/",
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
        materialUrl: "https://drive.google.com/",
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
        materialUrl: "https://drive.google.com/",
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
      {
        horario: "09:00 a 12:00",
        modulo: "INNOVATE",
        tema: "Disciplina positiva",
        responsables: [
          "Jardín: Gabriela Ortega y equipo",
          "Primaria Los Cerros: Pilar Hernández · María Trejo",
          "Primaria Pucará: Elisa Agüero · Manuel Páez",
          "Secundaria: Virginia Eroles · Evangelina Mohamad",
        ],
        lugar: "Pucará / Los Cerros / Los Cerritos",
        tipo: "innovate",
        materialUrl: "https://drive.google.com/",
      },
    ],
  },
];
