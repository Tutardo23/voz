export type TeamMember = {
  nombre: string;
  colegio: string;
  nivel: string;
  equipo: string;
};

export const teams: TeamMember[] = [
  {
    nombre: "María Pérez",
    colegio: "Pucará",
    nivel: "Primaria",
    equipo: "Equipo A · Innovate",
  },
  {
    nombre: "Juan Gómez",
    colegio: "Pucará",
    nivel: "Primaria",
    equipo: "Equipo A · Innovate",
  },
  {
    nombre: "Lucía Fernández",
    colegio: "Los Cerros",
    nivel: "Primaria",
    equipo: "Equipo A · Innovate",
  },
  {
    nombre: "Carlos López",
    colegio: "Los Cerros",
    nivel: "Secundaria",
    equipo: "Equipo B · Give",
  },
];
