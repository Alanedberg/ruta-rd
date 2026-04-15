// ============================================================
// data.js — Datos simulados de rutas de transporte público RD
// RutaRD © 2026
// ============================================================

const rutasData = [
  {
    id: 1,
    nombre: "Los Mina → Zona Colonial",
    origen: "Los Mina",
    destino: "Zona Colonial",
    tipo: "guagua",
    precio: "RD$25",
    duracion: "35–50 min",
    horario: "5:30 AM – 10:00 PM, cada 10–15 min",
    recorrido: [
      "Salida desde Parada Los Mina (Av. San Vicente de Paul)",
      "Av. Las Américas en dirección este–oeste",
      "Puente Duarte → entrada a Santo Domingo Este",
      "Av. Ozama → cruce con Av. España",
      "Llega a Parque Independencia, Zona Colonial"
    ],
    comentarios: [
      { usuario: "Juan P.", avatar: "bi-person-circle", texto: "Ruta confiable en la mañana, pero en la tarde puede tardar mucho por el tapón del puente.", estrellas: 4 },
      { usuario: "María G.", avatar: "bi-person-circle", texto: "Siempre pasa llena, mejor tomar desde la parada inicial.", estrellas: 3 },
      { usuario: "Carlos R.", avatar: "bi-person-circle", texto: "Precio justo y los choferes son respetuosos. Recomendada.", estrellas: 5 }
    ],
    valoracion: 4.0,
    popular: true
  },
  {
    id: 2,
    nombre: "Santiago Centro → UASD Santiago",
    origen: "Santiago Centro",
    destino: "UASD Santiago",
    tipo: "carro_publico",
    precio: "RD$20",
    duracion: "20–30 min",
    horario: "6:00 AM – 9:00 PM, cada 5–10 min",
    recorrido: [
      "Salida desde el Monumento a los Héroes de la Restauración",
      "Av. Las Carreras dirección norte",
      "Cruce con Av. Juan Pablo Duarte",
      "Av. Estrella Sadhalá",
      "Llega al Campus UASD Santiago"
    ],
    comentarios: [
      { usuario: "Ana M.", avatar: "bi-person-circle", texto: "Perfecta para ir a clases. Sale muy seguido.", estrellas: 5 },
      { usuario: "Pedro L.", avatar: "bi-person-circle", texto: "A veces el chofer hace desvíos por las callecitas. Pero llega.", estrellas: 3 },
      { usuario: "Rosa T.", avatar: "bi-person-circle", texto: "Muy accesible, siempre encuentro lugar.", estrellas: 4 }
    ],
    valoracion: 4.2,
    popular: true
  },
  {
    id: 3,
    nombre: "Centro de los Héroes → Villa Mella",
    origen: "Centro de los Héroes",
    destino: "Villa Mella",
    tipo: "guagua",
    precio: "RD$30",
    duracion: "45–60 min",
    horario: "5:00 AM – 11:00 PM, cada 15–20 min",
    recorrido: [
      "Salida desde Centro de los Héroes",
      "Av. Máximo Gómez dirección norte",
      "Cruce con Av. John F. Kennedy",
      "Autopista Duarte",
      "Llega a Villa Mella, parada principal"
    ],
    comentarios: [
      { usuario: "Luis F.", avatar: "bi-person-circle", texto: "Buen servicio pero tarde en la noche escasean las guaguas.", estrellas: 3 },
      { usuario: "Carmen S.", avatar: "bi-person-circle", texto: "Ruta necesaria para cruzar la ciudad de norte a sur.", estrellas: 4 },
      { usuario: "Wilton D.", avatar: "bi-person-circle", texto: "Siempre a tiempo en la mañana. En la tarde hay que esperar más.", estrellas: 4 }
    ],
    valoracion: 3.7,
    popular: false
  },
  {
    id: 4,
    nombre: "Estación INTRANT → Estación La Feria (Metro)",
    origen: "Centro Ciudad (Av. Máximo Gómez)",
    destino: "La Feria",
    tipo: "metro",
    precio: "RD$20",
    duracion: "12–18 min",
    horario: "6:00 AM – 10:00 PM, cada 4–6 min",
    recorrido: [
      "Estación Centro de los Héroes (Línea 1)",
      "Estación Máximo Gómez",
      "Estación Casandra Damiron",
      "Estación La Feria (destino)"
    ],
    comentarios: [
      { usuario: "Nathaly V.", avatar: "bi-person-circle", texto: "El metro es lo mejor del transporte de SD. Puntual y limpio.", estrellas: 5 },
      { usuario: "Ramón B.", avatar: "bi-person-circle", texto: "Vale cada centavo. Rápido, seguro y sin tapón.", estrellas: 5 },
      { usuario: "Iris M.", avatar: "bi-person-circle", texto: "A veces hay mucha gente en hora pico pero el servicio es excelente.", estrellas: 4 }
    ],
    valoracion: 4.7,
    popular: true
  },
  {
    id: 5,
    nombre: "Duarte (Santiago) → La Sirena Bella Terra",
    origen: "Av. Duarte, Santiago",
    destino: "La Sirena Bella Terra",
    tipo: "carro_publico",
    precio: "RD$25",
    duracion: "25–35 min",
    horario: "7:00 AM – 8:00 PM, cada 10 min",
    recorrido: [
      "Salida desde Av. Duarte (parque central)",
      "Dirección circunvalación de Santiago",
      "Cruce con Av. Imbert",
      "Entrada a Bella Terra Mall",
      "Parada frente a La Sirena"
    ],
    comentarios: [
      { usuario: "Graciela P.", avatar: "bi-person-circle", texto: "Muy cómodo para ir de compras sin usar carro.", estrellas: 4 },
      { usuario: "Freddy A.", avatar: "bi-person-circle", texto: "Confiable y económico.", estrellas: 5 },
      { usuario: "Lourdes M.", avatar: "bi-person-circle", texto: "Me encanta que pasa seguido.", estrellas: 4 }
    ],
    valoracion: 4.3,
    popular: false
  },
  {
    id: 6,
    nombre: "Hato Mayor → Av. 30 de Mayo (Santo Domingo)",
    origen: "Hato Mayor",
    destino: "Av. 30 de Mayo, Santo Domingo",
    tipo: "guagua",
    precio: "RD$150",
    duracion: "1h 45min – 2h",
    horario: "5:00 AM – 7:00 PM, cada 30–40 min",
    recorrido: [
      "Salida terminal Hato Mayor",
      "Autopista del Este",
      "San Pedro de Macorís (breve parada)",
      "Boca Chica → acceso Autopista Las Américas",
      "Av. 30 de Mayo, terminal Santo Domingo"
    ],
    comentarios: [
      { usuario: "Tomás E.", avatar: "bi-person-circle", texto: "Larga pero cómoda. Llega puntual generalmente.", estrellas: 4 },
      { usuario: "Paola C.", avatar: "bi-person-circle", texto: "Pro tip: sale bien temprano para evitar tapones en entrada a SD.", estrellas: 5 },
      { usuario: "Roberto S.", avatar: "bi-person-circle", texto: "Precio razonable para la distancia.", estrellas: 4 }
    ],
    valoracion: 4.1,
    popular: false
  },
  {
    id: 7,
    nombre: "Cristo Rey → Gazcue",
    origen: "Cristo Rey",
    destino: "Gazcue",
    tipo: "carro_publico",
    precio: "RD$25",
    duracion: "20–30 min",
    horario: "6:00 AM – 9:30 PM, cada 5–8 min",
    recorrido: [
      "Salida parada Cristo Rey (Av. Tiradentes)",
      "Av. Winston Churchill",
      "Av. Independencia",
      "Av. Bolívar → entrada a Gazcue",
      "Parada final frente al Parque Eugenio M. de Hostos"
    ],
    comentarios: [
      { usuario: "Jacqueline R.", avatar: "bi-person-circle", texto: "Ruta muy transitada, siempre hay disponibilidad.", estrellas: 4 },
      { usuario: "Ernesto L.", avatar: "bi-person-circle", texto: "Chofer pone música bonita jaja. Buen servicio.", estrellas: 5 },
      { usuario: "Silvia M.", avatar: "bi-person-circle", texto: "A veces se llenan rápido en hora pico.", estrellas: 3 }
    ],
    valoracion: 4.0,
    popular: true
  },
  {
    id: 8,
    nombre: "La Romana → San Pedro de Macorís",
    origen: "La Romana",
    destino: "San Pedro de Macorís",
    tipo: "guagua",
    precio: "RD$80",
    duracion: "50 min – 1h",
    horario: "5:30 AM – 8:00 PM, cada 20 min",
    recorrido: [
      "Terminal La Romana",
      "Autopista del Este dirección oeste",
      "Parada San Pedro (Av. Circunvalación)",
      "Terminal San Pedro de Macorís"
    ],
    comentarios: [
      { usuario: "Miriam A.", avatar: "bi-person-circle", texto: "Excelente para viajeros de trabajo entre ambas ciudades.", estrellas: 4 },
      { usuario: "David V.", avatar: "bi-person-circle", texto: "La guagua está en buenas condiciones, viaje cómodo.", estrellas: 5 },
      { usuario: "Kelvin T.", avatar: "bi-person-circle", texto: "Sale muy seguido, nunca me he quedado esperando mucho.", estrellas: 4 }
    ],
    valoracion: 4.3,
    popular: false
  },
  {
    id: 9,
    nombre: "Ensanche Ozama → Mercado Nuevo",
    origen: "Ensanche Ozama",
    destino: "Mercado Nuevo (Santo Domingo)",
    tipo: "carro_publico",
    precio: "RD$25",
    duracion: "30–40 min",
    horario: "6:00 AM – 9:00 PM, cada 8 min",
    recorrido: [
      "Parada Ensanche Ozama (Av. Venezuela)",
      "Puente Juan Bosch",
      "Av. Expreso V Centenario",
      "Bajada hacia Mercado Nuevo",
      "Parada frente al Mercado"
    ],
    comentarios: [
      { usuario: "Yaniris F.", avatar: "bi-person-circle", texto: "Indispensable para los del este que van al mercado.", estrellas: 4 },
      { usuario: "Samuel G.", avatar: "bi-person-circle", texto: "Ruta directa, pocos semáforos en el recorrido.", estrellas: 4 },
      { usuario: "Maricel B.", avatar: "bi-person-circle", texto: "Muy práctica para ir a hacer las compras del mes.", estrellas: 5 }
    ],
    valoracion: 4.2,
    popular: false
  },
  {
    id: 10,
    nombre: "Sabana Perdida → Estación Metro (Concepción de la Vega)",
    origen: "Sabana Perdida",
    destino: "Estación INTRANT Norte",
    tipo: "metro",
    precio: "RD$20",
    duracion: "10–15 min",
    horario: "6:00 AM – 10:00 PM, cada 5 min",
    recorrido: [
      "Estación Sabana Perdida (Línea 2)",
      "Estación Mamá Tingó",
      "Estación Los Ríos",
      "Destino: Estación INTRANT (conexión Línea 1)"
    ],
    comentarios: [
      { usuario: "Fabiana R.", avatar: "bi-person-circle", texto: "La Línea 2 ha cambiado la vida en el norte. Rapidísima.", estrellas: 5 },
      { usuario: "Omar N.", avatar: "bi-person-circle", texto: "Moderno, seguro. Ojalá extiendan más la red pronto.", estrellas: 5 },
      { usuario: "Angelina C.", avatar: "bi-person-circle", texto: "Perfecto para conectar con la Línea 1.", estrellas: 4 }
    ],
    valoracion: 4.8,
    popular: true
  },
  {
    id: 11,
    nombre: "Moca → Santiago",
    origen: "Moca",
    destino: "Santiago",
    tipo: "guagua",
    precio: "RD$75",
    duracion: "45 min – 1h",
    horario: "5:00 AM – 7:30 PM, cada 25 min",
    recorrido: [
      "Terminal de Moca",
      "Carretera Moca–Santiago",
      "Cruce Pontezuela",
      "Entrada Santiago por Av. Imbert",
      "Terminal de Santiago (Av. Las Carreras)"
    ],
    comentarios: [
      { usuario: "Ramona O.", avatar: "bi-person-circle", texto: "Servicio puntual. Muy buena para ir a trabajar a Santiago.", estrellas: 4 },
      { usuario: "Ignacio P.", avatar: "bi-person-circle", texto: "La guagua está limpia y el chofer maneja bien.", estrellas: 5 },
      { usuario: "Yanira S.", avatar: "bi-person-circle", texto: "A veces espero un poco más de la cuenta pero llega.", estrellas: 3 }
    ],
    valoracion: 4.0,
    popular: false
  },
  {
    id: 12,
    nombre: "Naco → Piantini (Santo Domingo)",
    origen: "Naco",
    destino: "Piantini",
    tipo: "carro_publico",
    precio: "RD$25",
    duracion: "10–20 min",
    horario: "7:00 AM – 10:00 PM, cada 5 min",
    recorrido: [
      "Parada Naco (Av. Tiradentes)",
      "Av. Lope de Vega",
      "Cruce con Calle El Recodo",
      "Av. Abraham Lincoln",
      "Piantini (frente a Acropolis)"
    ],
    comentarios: [
      { usuario: "Héctor M.", avatar: "bi-person-circle", texto: "Ruta corta pero conveniente en la zona business.", estrellas: 4 },
      { usuario: "Vanessa R.", avatar: "bi-person-circle", texto: "Sale todo el tiempo. Ideal para moverse en la ciudad.", estrellas: 5 },
      { usuario: "Claudia P.", avatar: "bi-person-circle", texto: "Sin problemas, siempre puntual.", estrellas: 4 }
    ],
    valoracion: 4.3,
    popular: true
  }
];
