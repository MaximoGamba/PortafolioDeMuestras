export const CATEGORIES = {
  ALL: 'ALL',
  FULLSTACK: 'FULLSTACK',
  BACKEND: 'BACKEND',
  FRONTEND: 'FRONTEND',
}

export const PROJECT_STATUS = {
  LIVE: 'LIVE',
  IN_PROGRESS: 'IN_PROGRESS',
  PLANNED: 'PLANNED',
}

/** Orden de aparición en la grilla: primero lo que ya se puede probar. */
export const STATUS_ORDER = {
  [PROJECT_STATUS.LIVE]: 0,
  [PROJECT_STATUS.IN_PROGRESS]: 1,
  [PROJECT_STATUS.PLANNED]: 2,
}

/**
 * Catálogo de proyectos. Para sumar uno nuevo alcanza con copiar este bloque:
 *
 * {
 *   id: 'slug-unico',
 *   category: CATEGORIES.FULLSTACK,   // FULLSTACK | BACKEND | FRONTEND
 *   industry: 'retail',               // clave de industries.items en los locales, o null
 *   status: PROJECT_STATUS.LIVE,      // LIVE | IN_PROGRESS | PLANNED
 *   tags: ['Java', 'Spring Boot'],
 *   githubUrl: 'https://github.com/...',   // null si todavía no es público
 *   liveUrl: 'https://...',                // null si todavía no hay demo
 *   image: '/proyectos/mi-captura.png',    // null muestra un marcador
 *   imageAlt: 'Descripción de la captura',
 *   title: { es: '', en: '', pt: '' },
 *   description: { es: '', en: '', pt: '' },
 *   scope: { es: [], en: [], pt: [] },
 * }
 *
 * Los textos se resuelven con el idioma activo (src/i18n/localize.js),
 * así que un proyecto queda autocontenido en este archivo.
 */
export const initialProjects = [
  {
    id: 'stock-y-ventas',
    category: CATEGORIES.FULLSTACK,
    industry: 'retail',
    status: PROJECT_STATUS.IN_PROGRESS,
    tags: ['Java', 'Spring Boot', 'React', 'MySQL'],
    // Cuando publiques el repo: 'https://github.com/MaximoGamba/stock-y-ventas'
    githubUrl: null,
    liveUrl: null,
    image: null,
    imageAlt: null,
    title: {
      es: 'Control de stock y ventas',
      en: 'Stock and sales control',
      pt: 'Controle de estoque e vendas',
    },
    description: {
      es: 'Para negocios con productos: saber qué hay en depósito, qué se vendió hoy y cuánto se facturó, sin planillas.',
      en: 'For product-based businesses: know what is in the warehouse, what sold today and how much was invoiced, without spreadsheets.',
      pt: 'Para negócios com produtos: saber o que há no depósito, o que foi vendido hoje e quanto foi faturado, sem planilhas.',
    },
    scope: {
      es: [
        'Aviso cuando un producto está por agotarse',
        'Registro de ventas y pedidos a proveedores',
        'Resumen del mes listo para descargar',
      ],
      en: [
        'Alerts when a product is running out',
        'Sales log and supplier orders',
        'Monthly summary ready to download',
      ],
      pt: [
        'Aviso quando um produto está acabando',
        'Registro de vendas e pedidos a fornecedores',
        'Resumo do mês pronto para baixar',
      ],
    },
  },
  {
    id: 'acceso-seguro',
    category: CATEGORIES.BACKEND,
    industry: null,
    status: PROJECT_STATUS.IN_PROGRESS,
    tags: ['Java', 'Spring Boot', 'Spring Security', 'MySQL'],
    // Cuando publiques el repo: 'https://github.com/MaximoGamba/acceso-seguro'
    githubUrl: null,
    liveUrl: null,
    image: null,
    imageAlt: null,
    title: {
      es: 'Acceso seguro para tu sistema',
      en: 'Secure access for your system',
      pt: 'Acesso seguro para o seu sistema',
    },
    description: {
      es: 'La parte que protege tu información: quién entra al sistema, con qué contraseña y qué puede ver o modificar cada persona.',
      en: 'The part that protects your information: who logs in, with which password, and what each person can see or change.',
      pt: 'A parte que protege a sua informação: quem entra no sistema, com qual senha e o que cada pessoa pode ver ou alterar.',
    },
    scope: {
      es: [
        'Ingreso con usuario y contraseña protegidos',
        'Permisos distintos para dueños y empleados',
        'Recuperación de contraseña por email',
      ],
      en: [
        'Login with protected user and password',
        'Different permissions for owners and staff',
        'Password recovery by email',
      ],
      pt: [
        'Entrada com usuário e senha protegidos',
        'Permissões diferentes para donos e funcionários',
        'Recuperação de senha por email',
      ],
    },
  },
  {
    id: 'turnos-online',
    category: CATEGORIES.FULLSTACK,
    industry: 'health',
    status: PROJECT_STATUS.PLANNED,
    tags: ['Java', 'Spring Boot', 'React', 'MySQL'],
    githubUrl: null,
    liveUrl: null,
    image: null,
    imageAlt: null,
    title: {
      es: 'Turnos online',
      en: 'Online bookings',
      pt: 'Agendamentos online',
    },
    description: {
      es: 'Tus clientes o pacientes sacan turno desde el celular, cada profesional ve su agenda del día y los recordatorios salen solos.',
      en: 'Your clients or patients book from their phone, each professional sees their daily calendar and reminders go out automatically.',
      pt: 'Seus clientes ou pacientes agendam pelo celular, cada profissional vê a agenda do dia e os lembretes saem sozinhos.',
    },
    scope: {
      es: [
        'Reserva de turnos desde el celular',
        'Agenda separada por profesional',
        'Recordatorios automáticos para evitar ausencias',
      ],
      en: [
        'Booking from a mobile phone',
        'Separate calendar per professional',
        'Automatic reminders to avoid no-shows',
      ],
      pt: [
        'Agendamento pelo celular',
        'Agenda separada por profissional',
        'Lembretes automáticos para evitar faltas',
      ],
    },
  },
  {
    id: 'seguimiento-envios',
    category: CATEGORIES.FULLSTACK,
    industry: 'logistics',
    status: PROJECT_STATUS.PLANNED,
    tags: ['Java', 'Spring Boot', 'React', 'MySQL'],
    githubUrl: null,
    liveUrl: null,
    image: null,
    imageAlt: null,
    title: {
      es: 'Seguimiento de envíos',
      en: 'Delivery tracking',
      pt: 'Acompanhamento de entregas',
    },
    description: {
      es: 'Un tablero donde ves en qué estado está cada envío, quién lo está llevando y qué se entregó a tiempo.',
      en: 'A board where you see the status of every delivery, who is carrying it and what arrived on time.',
      pt: 'Um painel onde você vê o status de cada entrega, quem está levando e o que chegou no prazo.',
    },
    scope: {
      es: [
        'Estado de cada envío en tiempo real',
        'Reparto asignado a cada chofer',
        'Aviso al cliente cuando el pedido sale',
      ],
      en: [
        'Real-time status of every delivery',
        'Routes assigned to each driver',
        'Notification to the client when the order leaves',
      ],
      pt: [
        'Status de cada entrega em tempo real',
        'Rotas atribuídas a cada motorista',
        'Aviso ao cliente quando o pedido sai',
      ],
    },
  },
  {
    id: 'clientes-y-cobros',
    category: CATEGORIES.BACKEND,
    industry: 'professional',
    status: PROJECT_STATUS.PLANNED,
    tags: ['Java', 'Spring Boot', 'MySQL'],
    githubUrl: null,
    liveUrl: null,
    image: null,
    imageAlt: null,
    title: {
      es: 'Clientes y cobros',
      en: 'Clients and payments',
      pt: 'Clientes e cobranças',
    },
    description: {
      es: 'Cada cliente, los trabajos que le hiciste y lo que te debe, ordenado en un solo lugar y conectado con el resto de tus herramientas.',
      en: 'Every client, the work you did for them and what they owe you, tidy in one place and connected to the rest of your tools.',
      pt: 'Cada cliente, os trabalhos feitos e o que ele deve, organizados em um só lugar e conectados às suas outras ferramentas.',
    },
    scope: {
      es: [
        'Ficha de cada cliente con su historial',
        'Estado de pagos y deudas pendientes',
        'Se conecta con tu facturación actual',
      ],
      en: [
        'A record for each client with their history',
        'Payment status and outstanding balances',
        'Connects to your current invoicing',
      ],
      pt: [
        'Ficha de cada cliente com o histórico',
        'Status de pagamentos e dívidas pendentes',
        'Conecta com o seu faturamento atual',
      ],
    },
  },
  {
    id: 'tablero-resultados',
    category: CATEGORIES.FRONTEND,
    industry: null,
    status: PROJECT_STATUS.PLANNED,
    tags: ['React', 'Redux Toolkit', 'Tailwind CSS'],
    githubUrl: null,
    liveUrl: null,
    image: null,
    imageAlt: null,
    title: {
      es: 'Tablero de resultados',
      en: 'Results dashboard',
      pt: 'Painel de resultados',
    },
    description: {
      es: 'Ver de un vistazo cómo va el negocio: ventas, clientes nuevos y lo que necesites medir, en gráficos simples de leer.',
      en: 'See at a glance how the business is doing: sales, new clients and whatever you need to measure, in charts that are easy to read.',
      pt: 'Ver rapidamente como vai o negócio: vendas, novos clientes e o que precisar medir, em gráficos fáceis de ler.',
    },
    scope: {
      es: [
        'Gráficos de ventas por día, mes o año',
        'Comparación con el período anterior',
        'Se ve bien en la computadora y en el celular',
      ],
      en: [
        'Sales charts by day, month or year',
        'Comparison with the previous period',
        'Looks good on both desktop and mobile',
      ],
      pt: [
        'Gráficos de vendas por dia, mês ou ano',
        'Comparação com o período anterior',
        'Fica bom no computador e no celular',
      ],
    },
  },
]
