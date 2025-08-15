// Base de datos de invitados
const invitados = [
  {
    "codigo": "UAC-001",
    "destinatario": "Dr. Herbert Gallegos Vargas",
    "universidad": "Universidad Católica de Santa María",
    "cargo": "Defensor Universitario"
  },
  {
    "codigo": "UAC-002",
    "destinatario": "Dr. José Luis Ramos Salinas",
    "universidad": "Universidad Nacional de San Agustín de Arequipa",
    "cargo": "Defensor Universitario"
  },
  {
    "codigo": "UAC-003",
    "destinatario": "Dra. Victoria Nora Vela De Córdova",
    "universidad": "Universidad Nacional Jorge Basadre Grohmann de Tacna",
    "cargo": "Defensor Universitario"
  },
  {
    "codigo": "UAC-004",
    "destinatario": "Dr. Alexander Huayta Vilca",
    "universidad": "Universidad Nacional de Moquegua",
    "cargo": "Defensor Universitario"
  },
  {
    "codigo": "UAC-005",
    "destinatario": "Dra. Vivian Valderrama Zea",
    "universidad": "Universidad Nacional del Altiplano de Puno",
    "cargo": "Defensor Universitario"
  },
  {
    "codigo": "UAC-006",
    "destinatario": "Mvz. Victor Raul Cano Fuentes",
    "universidad": "Universidad Nacional Micaela Bastidas de Apurímac",
    "cargo": "Defensor Universitario"
  },
  {
    "codigo": "UAC-007",
    "destinatario": "Mag. Pedro Emiliano Sevillano Mendoza",
    "universidad": "Universidad Tecnológica de los Andes",
    "cargo": "Defensor Universitario"
  },
  {
    "codigo": "UAC-008",
    "destinatario": "Teodoro Gutiérrez Remón",
    "universidad": "Universidad Nacional San Cristóbal de Huamanga",
    "cargo": "Defensor Universitario"
  },
  {
    "codigo": "UAC-009",
    "destinatario": "Mgt David Szczcpansky Grobas",
    "universidad": "Universidad Nacional Amazónica de Madre de Dios",
    "cargo": "Defensor Universitario"
  },
  {
    "codigo": "UAC-010",
    "destinatario": "Dr. Javier Antonio La Rosa Calle",
    "universidad": "Pontificia Universidad Católica del Perú",
    "cargo": "Defensor Universitario"
  },
  {
    "codigo": "UAC-011",
    "destinatario": "Mg. Hector Manuel Hernandez Valz",
    "universidad": "Universidad Nacional Mayor de San Marcos",
    "cargo": "Defensor Universitario"
  },
  {
    "codigo": "UAC-012",
    "destinatario": "Dr. Oscar Becerra Tresierra",
    "universidad": "Universidad San Martín de Porres",
    "cargo": "Defensor Universitario"
  },
  {
    "codigo": "UAC-013",
    "destinatario": "Mag. Walter Castro Ríos",
    "universidad": "Universidad Nacional San Luis Gonzaga",
    "cargo": "Defensor Universitario"
  },
  {
    "codigo": "UAC-014",
    "destinatario": "Dra. Silvia Elena Aguirre Abarca",
    "universidad": "Universidad Nacional de San Antonio Abad del Cusco",
    "cargo": "Defensor Universitario"
  },
  {
    "codigo": "UAC-015",
    "destinatario": "Mg. Claudia María Rivera Távara",
    "universidad": "Universidad de Piura",
    "cargo": "Defensor Universitario"
  },
  {
    "codigo": "UAC-016",
    "destinatario": "M.Cs. Victor Ayma Giraldo",
    "universidad": "Universidad Nacional de Arte Diego Quispe Tito del Cusco",
    "cargo": "Defensor Universitario"
  },
  {
    "codigo": "UAC-017",
    "destinatario": "Abg. Henry Richard Jihuallanca Soncco",
    "universidad": "Universidad Nacional de Juliaca",
    "cargo": "Defensor Universitario"
  },
  {
    "codigo": "UAC-018",
    "destinatario": "Dra. Gabriela Isabel Heredia Álvarez",
    "universidad": "Universidad Privada de Tacna",
    "cargo": "Defensor Universitario"
  },
  {
    "codigo": "UAC-019",
    "destinatario": "Maria Cecilia Aramayo Vargas",
    "universidad": "Universidad La Salle",
    "cargo": "Defensor Universitario"
  },
  {
    "codigo": "UAC-020",
    "destinatario": "Dr. Edgard Aníbal Cárdenas Ayala",
    "universidad": "Universidad Nacional del Centro del Perú",
    "cargo": "Defensor Universitario"
  },
  {
    "codigo": "UAC-021",
    "destinatario": "Augusto Benjamín Gutiérrez Pérez",
    "universidad": "Universidad Peruana los Andes",
    "cargo": "Defensor Universitario"
  },
  {
    "codigo": "UAC-022",
    "destinatario": "Abg. Juan Javier Solis Privat",
    "universidad": "Universidad Peruana los Andes - Filial Chanchamayo",
    "cargo": "Defensor Universitario"
  },

  // NO DEFENSORES
  {
    "codigo": "UAC-023",
    "destinatario": "Josué Manuel Gutiérrez Cóndor",
    "universidad": "",
    "cargo": "Defensor del pueblo"
  },
  {
    "codigo": "UAC-024",
    "destinatario": "General de Brigada Nicola Quiroz Castillo",
    "universidad": "",
    "cargo": "Comandante General de la 5a Brig Mtn"
  },
  {
    "codigo": "UAC-025",
    "destinatario": "Sami Emperatriz Venero Salas",
    "universidad": "",
    "cargo": "Gerente Regional de Inclusión Social, Mujer y Poblaciones Vulnerables"
  },
   {
    "codigo": "UAC-026",
    "destinatario": "Magistrada Elcira Farfán Quispe",
    "universidad": "",
    "cargo": "Presidenta de la Corte Superior de Justicia de Cusco"
  },
   {
    "codigo": "UAC-027",
    "destinatario": "Werner Máximo Salcedo Álvarez",
    "universidad": "",
    "cargo": "Gobernador Regional del Cusco"
  },
   {
    "codigo": "UAC-028",
    "destinatario": "Luis Beltrán Pantoja Calvo",
    "universidad": "",
    "cargo": "Alcalde de la Municipalidad Provincial de Cusco"
  },
   {
    "codigo": "UAC-029",
    "destinatario": "Prof. Máximo Rimachi Morales",
    "universidad": "",
    "cargo": "Alcalde de la Municipalidad Distrital de San Jerónimo "
  },
   {
    "codigo": "UAC-030",
    "destinatario": "José Manuel Mayorga Zárate",
    "universidad": "",
    "cargo": "Presidente de la Junta de Fiscales Superiores del Distrito Fiscal de Cusco"
  },
   {
    "codigo": "UAC-028",
    "destinatario": "General PNP Julio César Becerra Cámara",
    "universidad": "",
    "cargo": "Jefe de la VII MACREPOL CUSCO"
  },
];

// Lista de canciones
const songs = [
  "musica/Inspiracion.mp3",
  "musica/CarnavalArequipeno.mp3",
  "musica/El_condor_pasa.mp3",
  "musica/Valicha.mp3"
];