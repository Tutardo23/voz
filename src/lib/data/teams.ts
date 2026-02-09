export type TeamColor = "Amarilla" | "Verde" | "Roja";

export interface Team {
  id: number;
  categoria: string;
  color: TeamColor;
  integrantes: string[];
}

export const teams: Team[] = [
  // 🟡 JARDÍN (Mesa Amarilla)
  {
    id: 1,
    categoria: "Jardín",
    color: "Amarilla",
    integrantes: [
      "Lopez Alurralde Pia",
      "Arce Soledad Mariana",
      "Cosentino Laura",
      "Escalante Constanza",
      "Ferreyra Micaela",
      "Graneros Ignacio Miguel",
      "Juez Perez Valentina Maria",
      "Martina Lobo Juliana",
      "Ortega Gabriela",
      "Prado Clara Ester",
      "Robles Guerineau Magdalena",
      "Ruiz Carolina Del Valle",
      "Torres Eugenia"
    ]
  },
  {
    id: 2,
    categoria: "Jardín",
    color: "Amarilla",
    integrantes: [
      "Rueda Lorena Ines",
      "Audi Falu Susana Maria",
      "Cruz Luciana",
      "Escobar Gabriela",
      "Filgueira Juliana Maria",
      "Haddad Maria Pia",
      "Lobo Vallejo Victoria Maria",
      "Neville Sassi Maria Candelaria",
      "Pepe Maria Alejandra",
      "Rearte Maria Jimena",
      "Romero Ludwig Adriana",
      "Tomassoni Sofia",
      "Valdivieso Sassi Sofia"
    ]
  },

  // 🟢 SECUNDARIA (Mesas Verdes)
  {
    id: 3,
    categoria: "Secundaria",
    color: "Verde",
    integrantes: [
      "Avila Gallo Maria Del Rosario",
      "Cruzado Magali",
      "Cazon Maria Agustina",
      "Perez Maria Laura",
      "Gallardo Juan Carlos",
      "Galvan Javier",
      "Lord Figueroa Marcos",
      "Pinto Marcos",
      "Ruiz Demetrio",
      "Sierra Rodolfo",
      "Torino Enrique",
      "Torres Matias"
    ]
  },
  {
    id: 4,
    categoria: "Secundaria",
    color: "Verde",
    integrantes: [
      "Arena Paola",
      "Arias Pamela",
      "Colombres Martina",
      "Barrientos Maria Eugenia",
      "Gioia Natalia",
      "Casiva Fernando",
      "Costas Carlos",
      "Jimenez German",
      "Mena Maximo",
      "Miglio Raul",
      "Parrado Emmanuel",
      "Guerrero Carina"
    ]
  },
  {
    id: 5,
    categoria: "Secundaria",
    color: "Verde",
    integrantes: [
      "Auad Lucia",
      "Mendez Teran Maria De La Paz",
      "Migliavacca Paula",
      "Reynoso Bascary Ana Belen",
      "Salas Ercilia",
      "Villagra Maria Silvina",
      "Veron Hernan",
      "Prieto Ariel",
      "Silva Santiago",
      "Teran Emma",
      "Sosa Reto Rodolfo"
    ]
  },
  {
    id: 6,
    categoria: "Secundaria",
    color: "Verde",
    integrantes: [
      "Berno Norma Ana Lia",
      "Coggan Florencia",
      "Gomez Bettina",
      "Marengo Carla",
      "Nieva Cynthia",
      "Toffoletti Silvana Lorena",
      "Cisneros Matias",
      "Di Risio",
      "Guerrero Milagro",
      "Pacheco Nicolas",
      "Zamora Belen"
    ]
  },
  {
    id: 7,
    categoria: "Secundaria",
    color: "Verde",
    integrantes: [
      "Bravo Antezana Maria Florencia",
      "Costas Maria Carolina",
      "De Lafuente Gisela",
      "Mohamad Maria Silvina",
      "Puig Maria Jose",
      "Quiroga Medina Andrea",
      "Camandona Carlos",
      "Salica Martin",
      "Soruco Guillermo",
      "Tumini Gerardo"
    ]
  },
  {
    id: 8,
    categoria: "Secundaria",
    color: "Verde",
    integrantes: [
      "Cravero Ana",
      "Cruz Prats Griet Lucia",
      "Eroles Maria Virginia",
      "Mohamad Evangelina",
      "Natale Constanza",
      "Teran Maria Jose",
      "Arnedo Daniel",
      "Cordoba Martin",
      "Corvalan Claudio",
      "Gonzalez Florentina",
      "Barrios Lucas"
    ]
  },
  {
    id: 9,
    categoria: "Secundaria",
    color: "Verde",
    integrantes: [
      "Aid Maria Eugenia",
      "Garcia Gonzalez Maria Josefina",
      "Molinelli Lucia",
      "Teran Florencia",
      "Ale Franco",
      "Diaz Sorbello Pablo",
      "Fernandez Mercedes",
      "Lazarte Laura",
      "Nuñez Tadeo",
      "Perkins Pedro",
      "Salcedo Cattaneo Ignacio"
    ]
  },

  // 🔴 OTRAS CATEGORÍAS (Mesas Rojas)
  {
    id: 10,
    categoria: "Otras Categorías",
    color: "Roja",
    integrantes: [
      "Camandona Rodolfo",
      "Rojas Maria Marta",
      "Aguero Turbati Laura",
      "Lopez Alurralde Lucia",
      "Lix Klett Ana Cristina",
      "Navarro Lucia",
      "Bettolli Mercedes",
      "Rojas Agustina",
      "Rant Andrej",
      "Zelaya Gustavo"
    ]
  },
  {
    id: 11,
    categoria: "Otras Categorías",
    color: "Roja",
    integrantes: [
      "Franchini Maria Emilia",
      "Aguilar Frias Silva Josefina",
      "Rigazzio Ana Carolina",
      "Gomez Fabiana",
      "Laudadio Josefina",
      "Rivarola Lucia",
      "Aguero Turbati Elisa",
      "Clua Lourdes",
      "Cordoba Martin",
      "Lastra Lobo Estela"
    ]
  },
  {
    id: 12,
    categoria: "Otras Categorías",
    color: "Roja",
    integrantes: [
      "Fuentes Ortiz Lourdes",
      "Alonso Maria Paula",
      "Ponce De Leon Marta Maria",
      "Trejo Maria",
      "Brizuela Fabian",
      "Juarez Cesar",
      "Maurell Cristian",
      "Orquera Franco",
      "Lozano Adriana",
      "Teran Nougues Consuelo"
    ]
  },
  {
    id: 13,
    categoria: "Otras Categorías",
    color: "Roja",
    integrantes: [
      "Fernandez Cyntia",
      "Rovarini Maria Pia",
      "Colombres Garmendia Carolina",
      "Diaz Carlos",
      "Juarez Roldan Romina",
      "Lopez Cristian",
      "Mittelmann Priscilla",
      "Salas Florencia",
      "Russo Lucia Maria Eugenia"
    ]
  },
  {
    id: 14,
    categoria: "Otras Categorías",
    color: "Roja",
    integrantes: [
      "Berdu Natalia Alejandra",
      "Del Rio Fatima",
      "Torino Ana Ines",
      "Correa Karina",
      "Medina Ariel",
      "Sanchez Marcelo",
      "Suarez Villafane Carlos",
      "Torres Nicolas",
      "Borkosky Mariana"
    ]
  },
  {
    id: 15,
    categoria: "Otras Categorías",
    color: "Roja",
    integrantes: [
      "Fioretti Maria",
      "Hernandez Maria Del Pilar",
      "Molina Teresita Maria",
      "Salas Maria Jose",
      "Guzman Gabriela",
      "Carrio Sebastian",
      "Gonzalez Romano David",
      "Lencina Rodrigo",
      "Sosa Matias"
    ]
  },
  {
    id: 16,
    categoria: "Otras Categorías",
    color: "Roja",
    integrantes: [
      "Valdez Viviana",
      "Juarez Claudia",
      "Sanchez Josefina",
      "Vega Luciana",
      "Chavez Fernando",
      "Gutierrez Marcelo",
      "Paez Manuel",
      "Romano Juan Manuel",
      "Torres Jose Maria"
    ]
  },
];