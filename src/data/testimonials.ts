interface Testimonial {
  name: string;
  text: string;
  location?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Andreea M.",
    text: "Machiajul a rezistat perfect toată ziua și arăta superb în poze! Exact ce îmi doream pentru ziua cea mare.",
    location: "București",
  },
  {
    name: "Raluca M.",
    text: "Foarte atentă la detalii, a înțeles exact ce îmi doresc și a adus plus valoare cu sugestiile ei profesionale.",
    location: "Cluj-Napoca",
  },
  {
    name: "Ioana M.",
    text: "Recomand cu drag! Experiență de 10/10. Am primit complimente non-stop pentru machiajul meu.",
    location: "Timișoara",
  },
  {
    name: "Elena P.",
    text: "Am fost impresionată de tehnica și produsele de calitate folosite. Machiajul a ținut perfect până dimineața următoare.",
    location: "Iași",
  },
  {
    name: "Mihaela D.",
    text: "Cea mai bună experiență de machiaj pe care am avut-o vreodată! Voi reveni cu siguranță.",
    location: "Constanța",
  },
  {
    name: "Alexandra C.",
    text: "A făcut minuni! Am arătat impecabil în pozele de la eveniment și am primit numeroase complimente.",
  },
];

export default testimonials;
