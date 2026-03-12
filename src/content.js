export const defaultLanguage = 'es';

export const languageOptions = [
  { code: 'es', label: 'ES', flag: 'ES', name: 'Español' },
  { code: 'en', label: 'EN', flag: 'EN', name: 'English' },
  { code: 'it', label: 'IT', flag: 'IT', name: 'Italiano' },
  { code: 'ca', label: 'CA', flag: 'CA', name: 'Catala' }
];

const sharedTape = ['C#', '.NET', 'Azure', 'DevOps', 'Kubernetes', 'gRPC', 'SOA', 'Clean Architecture'];

const sharedSkillItems = {
  backend: ['C#', '.NET Core', '.NET Framework 4.x', 'ASP.NET MVC', 'WCF', 'gRPC / gRPC-Web', 'SOA', 'TDD'],
  frontend: ['JavaScript', 'TypeScript', 'React', 'Angular', 'Node.js', 'HTML', 'CSS', 'JSON'],
  cloud: [
    'Azure (PaaS, SaaS, IaaS)',
    'Azure DevOps',
    'Azure Functions',
    'Azure Cosmos DB',
    'IaC (Bicep, ARM)',
    'Docker',
    'Kubernetes',
    '12-Factor App'
  ],
  data: [
    'SQL Server',
    'ADO.NET',
    'N-Tier Architecture',
    'Unit of Work',
    'Repository Pattern',
    'Dependency Injection',
    'SOLID',
    'Observability'
  ]
};

export const siteContent = {
  es: {
    metaTitle: 'drpinocode.com | Senior .NET & Cloud Engineer',
    logoTagline: 'DESARROLLO DE SOLUCIONES DE NEGOCIO',
    profile: {
      name: 'Daniel Pino Panepinto',
      role: 'Senior .NET & Cloud Engineer',
      claim: 'Arquitectura cloud, DevOps y desarrollo .NET para producto crítico.',
      summary:
        'Ingeniero de software especializado en .NET, Azure y prácticas DevOps. Construyo soluciones robustas con foco en escalabilidad, mantenimiento y velocidad de entrega sostenible.',
      email: 'ceo@drpinocode.com',
      linkedin: 'https://www.linkedin.com/in/daniel-pino-panepinto-19aa728a/'
    },
    labels: {
      skipToMain: 'Saltar al contenido',
      stack: 'Stack',
      role: 'Rol',
      result: 'Resultado',
      linkedin: 'LinkedIn',
      footer: '(c) 2026 drpinocode.com',
      services: 'Servicios',
      approach: 'Enfoque',
      delivery: 'Entrega'
    },
    cta: {
      projects: 'Ver proyectos',
      contact: 'Contactar'
    },
    navItems: [
      { href: '#about', label: 'Perfil' },
      { href: '#skills', label: 'Stack' },
      { href: '#experience', label: 'Trayectoria' },
      { href: '#projects', label: 'Proyectos' },
      { href: '#contact', label: 'Contacto' }
    ],
    heroTape: sharedTape,
    heroMetrics: [
      { value: '15+', label: 'años de experiencia' },
      { value: '4', label: 'roles clave enterprise' },
      { value: '100%', label: 'foco en calidad técnica' }
    ],
    heroServices: [
      {
        title: 'Arquitectura .NET de alto nivel',
        text: 'Diseño backend y soluciones cloud para sistemas que tienen que durar y crecer.'
      },
      {
        title: 'Azure y DevOps con foco real',
        text: 'Pipelines, despliegues y observabilidad para reducir fricción operativa.'
      },
      {
        title: 'Modernización de plataformas',
        text: 'Refactor, evolución y mejora de producto sin romper el negocio.'
      }
    ],
    about: {
      label: 'Perfil',
      title: 'Ejecución sobria, decisiones técnicas fuertes y detalle en cada capa',
      text: 'Mi trabajo combina visión de producto con una base de ingeniería sólida para construir sistemas fiables y fáciles de evolucionar.',
      points: [
        'Combino ingeniería backend sólida con prácticas cloud y automatización para entornos de alta exigencia.',
        'Trabajo con visión de producto y enfoque técnico: decisiones claras, deuda controlada y software durable.',
        'Experiencia construyendo y evolucionando plataformas en sectores con operación crítica.'
      ]
    },
    skills: {
      label: 'Stack',
      title: 'Tecnología seleccionada para rendimiento, escala y mantenibilidad',
      groups: [
        { title: 'Backend Engineering', items: sharedSkillItems.backend },
        { title: 'Frontend', items: sharedSkillItems.frontend },
        { title: 'Cloud & DevOps', items: sharedSkillItems.cloud },
        { title: 'Data & Architecture', items: sharedSkillItems.data }
      ]
    },
    experience: {
      label: 'Trayectoria',
      title: 'Recorrido técnico orientado a impacto',
      text: 'Experiencia en ingeniería .NET y arquitectura cloud aplicada a productos y operaciones críticas.',
      items: [
        {
          period: 'Jun 2020 - Actualidad',
          title: 'Software Engineer .NET / Azure Cloud Solutions (AXA)',
          company: 'UST Global - Barcelona, España',
          impact:
            'Diseño y evolución de soluciones .NET sobre Azure para entorno enterprise, con foco en escalabilidad, integración de servicios y prácticas DevOps.',
          tags: ['.NET', 'Azure', 'Cloud Architecture']
        },
        {
          period: 'Feb 2017 - Jun 2020',
          title: 'Software Architect / Software Engineer .NET',
          company: 'Necsia IT Consulting - Barcelona, España',
          impact:
            'Definición de arquitectura y desarrollo de soluciones empresariales en ecosistemas .NET, reforzando calidad técnica y mantenibilidad.',
          tags: ['Arquitectura', 'Consultoría', 'Entrega técnica']
        },
        {
          period: 'Ene 2016 - Feb 2017',
          title: 'Software Engineer .NET (Vueling Airlines)',
          company: 'IN2 - Barcelona, España',
          impact:
            'Desarrollo de componentes orientados a servicios y aplicaciones web con patrones de arquitectura y acceso a datos en SQL Server.',
          tags: ['SOA', 'ASP.NET MVC', 'SQL Server']
        },
        {
          period: 'Sep 2012 - Dic 2015',
          title: 'Software Engineer Full Stack / DevOps Engineer',
          company: 'Amagi Services - Caracas, Venezuela',
          impact:
            'Construcción de soluciones full stack con .NET, Angular/Node.js y prácticas de automatización; administración de Team Foundation Server.',
          tags: ['Full Stack', 'DevOps', 'Integraciones']
        }
      ]
    },
    projects: {
      label: 'Proyectos',
      title: 'Bloques destacados',
      text: 'Casos representativos basados en experiencia en cloud, arquitectura .NET y sistemas enterprise.',
      items: [
        {
          name: 'Plataforma Cloud para Seguros (AXA)',
          description:
            'Evolución de soluciones empresariales en Azure con arquitectura orientada a servicios y despliegue continuo.',
          stack: '.NET, Azure, Azure DevOps, SQL/Cosmos DB',
          role: 'Software Engineer .NET / Azure Cloud Solutions',
          result: 'Mejora de escalabilidad operativa y mayor confiabilidad en producción.'
        },
        {
          name: 'Arquitectura .NET para Sistemas Corporativos',
          description:
            'Definición y ejecución de arquitectura técnica en proyectos enterprise, aplicando patrones de diseño y principios SOLID.',
          stack: 'C#, .NET Framework/Core, DI, TDD, N-Tier',
          role: 'Software Architect / Software Engineer',
          result: 'Código más mantenible y reducción de fricción en evolución funcional.'
        },
        {
          name: 'Ecosistema de Servicios para Operación Aérea',
          description:
            'Desarrollo de servicios y aplicaciones web en entorno airline, con integración de datos y capa de presentación orientada a negocio.',
          stack: 'ASP.NET MVC, WCF, SQL Server, JavaScript',
          role: 'Software Engineer .NET',
          result: 'Procesos más consistentes y mejor soporte a operaciones críticas.'
        }
      ]
    },
    workStyle: {
      label: 'Forma de trabajar',
      title: 'Claridad, performance y código mantenible',
      items: [
        {
          title: 'Arquitectura con criterio',
          text: 'Diseño soluciones que escalan sin comprometer simplicidad ni mantenibilidad.'
        },
        {
          title: 'DevOps aplicado',
          text: 'Automatizo pipelines y despliegues para reducir riesgo y acelerar valor.'
        },
        {
          title: 'Calidad técnica',
          text: 'Patrones sólidos, buenas prácticas y enfoque constante en deuda técnica.'
        },
        {
          title: 'Orientación a producto',
          text: 'Cada decisión técnica se alinea con impacto real en negocio y operación.'
        }
      ]
    },
    contact: {
      label: 'Contacto',
      title: '¿Construimos algo de alto nivel?',
      text: 'Disponible para nuevos retos en producto digital, arquitectura y desarrollo full stack.'
    }
  },
  en: {
    metaTitle: 'drpinocode.com | Senior .NET & Cloud Engineer',
    logoTagline: 'BUSINESS SOLUTIONS DEVELOPMENT',
    profile: {
      name: 'Daniel Pino Panepinto',
      role: 'Senior .NET & Cloud Engineer',
      claim: 'Cloud architecture, DevOps and .NET engineering for critical products.',
      summary:
        'Software engineer specialized in .NET, Azure and DevOps practices. I build robust solutions focused on scalability, maintainability and sustainable delivery speed.',
      email: 'ceo@drpinocode.com',
      linkedin: 'https://www.linkedin.com/in/daniel-pino-panepinto-19aa728a/'
    },
    labels: {
      skipToMain: 'Skip to main content',
      stack: 'Stack',
      role: 'Role',
      result: 'Result',
      linkedin: 'LinkedIn',
      footer: '(c) 2026 drpinocode.com',
      services: 'Services',
      approach: 'Approach',
      delivery: 'Delivery'
    },
    cta: {
      projects: 'View projects',
      contact: 'Contact'
    },
    navItems: [
      { href: '#about', label: 'Profile' },
      { href: '#skills', label: 'Stack' },
      { href: '#experience', label: 'Experience' },
      { href: '#projects', label: 'Projects' },
      { href: '#contact', label: 'Contact' }
    ],
    heroTape: sharedTape,
    heroMetrics: [
      { value: '15+', label: 'years of experience' },
      { value: '4', label: 'key enterprise roles' },
      { value: '100%', label: 'focus on technical quality' }
    ],
    heroServices: [
      {
        title: 'High-level .NET architecture',
        text: 'Backend and cloud solution design for systems that need to last and scale.'
      },
      {
        title: 'Azure and DevOps that matter',
        text: 'Pipelines, deployments and observability to reduce operational friction.'
      },
      {
        title: 'Platform modernization',
        text: 'Refactor, evolve and improve product without disrupting the business.'
      }
    ],
    about: {
      label: 'Profile',
      title: 'Focused execution, strong technical decisions and detail in every layer',
      text: 'My work combines product vision with solid engineering fundamentals to build reliable systems that are easy to evolve.',
      points: [
        'I combine strong backend engineering with cloud and automation practices for high-demand environments.',
        'I work with product vision and technical focus: clear decisions, controlled debt and durable software.',
        'Experience building and evolving platforms in mission-critical sectors.'
      ]
    },
    skills: {
      label: 'Stack',
      title: 'Technology chosen for performance, scale and maintainability',
      groups: [
        { title: 'Backend Engineering', items: sharedSkillItems.backend },
        { title: 'Frontend', items: sharedSkillItems.frontend },
        { title: 'Cloud & DevOps', items: sharedSkillItems.cloud },
        { title: 'Data & Architecture', items: sharedSkillItems.data }
      ]
    },
    experience: {
      label: 'Experience',
      title: 'Technical path oriented to impact',
      text: 'Experience in .NET engineering and cloud architecture applied to products and critical operations.',
      items: [
        {
          period: 'Jun 2020 - Present',
          title: 'Software Engineer .NET / Azure Cloud Solutions (AXA)',
          company: 'UST Global - Barcelona, Spain',
          impact:
            'Design and evolution of .NET solutions on Azure for enterprise environments, focused on scalability, service integration and DevOps practices.',
          tags: ['.NET', 'Azure', 'Cloud Architecture']
        },
        {
          period: 'Feb 2017 - Jun 2020',
          title: 'Software Architect / Software Engineer .NET',
          company: 'Necsia IT Consulting - Barcelona, Spain',
          impact:
            'Architecture definition and development of enterprise solutions in .NET ecosystems, improving technical quality and maintainability.',
          tags: ['Architecture', 'Consulting', 'Technical Delivery']
        },
        {
          period: 'Jan 2016 - Feb 2017',
          title: 'Software Engineer .NET (Vueling Airlines)',
          company: 'IN2 - Barcelona, Spain',
          impact:
            'Development of service-oriented components and web applications using architecture patterns and SQL Server data access.',
          tags: ['SOA', 'ASP.NET MVC', 'SQL Server']
        },
        {
          period: 'Sep 2012 - Dec 2015',
          title: 'Software Engineer Full Stack / DevOps Engineer',
          company: 'Amagi Services - Caracas, Venezuela',
          impact:
            'Built full stack solutions with .NET, Angular/Node.js and automation practices; managed Team Foundation Server administration.',
          tags: ['Full Stack', 'DevOps', 'Integrations']
        }
      ]
    },
    projects: {
      label: 'Projects',
      title: 'Featured blocks',
      text: 'Representative cases based on cloud, .NET architecture and enterprise systems experience.',
      items: [
        {
          name: 'Cloud Insurance Platform (AXA)',
          description:
            'Evolution of enterprise Azure solutions with service-oriented architecture and continuous deployment.',
          stack: '.NET, Azure, Azure DevOps, SQL/Cosmos DB',
          role: 'Software Engineer .NET / Azure Cloud Solutions',
          result: 'Improved operational scalability and higher production reliability.'
        },
        {
          name: '.NET Architecture for Corporate Systems',
          description:
            'Definition and execution of technical architecture in enterprise projects, applying design patterns and SOLID principles.',
          stack: 'C#, .NET Framework/Core, DI, TDD, N-Tier',
          role: 'Software Architect / Software Engineer',
          result: 'More maintainable code and reduced friction for functional evolution.'
        },
        {
          name: 'Service Ecosystem for Airline Operations',
          description:
            'Development of services and web applications in the airline domain, with data integration and business-focused presentation layer.',
          stack: 'ASP.NET MVC, WCF, SQL Server, JavaScript',
          role: 'Software Engineer .NET',
          result: 'More consistent processes and better support for critical operations.'
        }
      ]
    },
    workStyle: {
      label: 'How I work',
      title: 'Clarity, performance and maintainable code',
      items: [
        {
          title: 'Architecture with intent',
          text: 'I design solutions that scale without sacrificing simplicity or maintainability.'
        },
        {
          title: 'Applied DevOps',
          text: 'I automate pipelines and deployments to reduce risk and accelerate value.'
        },
        {
          title: 'Technical quality',
          text: 'Strong patterns, solid practices and constant attention to technical debt.'
        },
        {
          title: 'Product mindset',
          text: 'Every technical decision is aligned with real business and operational impact.'
        }
      ]
    },
    contact: {
      label: 'Contact',
      title: 'Building something high-level?',
      text: 'Available for new challenges in digital product, architecture and full stack development.'
    }
  },
  it: {
    metaTitle: 'drpinocode.com | Senior .NET & Cloud Engineer',
    logoTagline: 'SVILUPPO DI SOLUZIONI BUSINESS',
    profile: {
      name: 'Daniel Pino Panepinto',
      role: 'Senior .NET & Cloud Engineer',
      claim: 'Architettura cloud, DevOps e sviluppo .NET per prodotti critici.',
      summary:
        'Ingegnere software specializzato in .NET, Azure e pratiche DevOps. Realizzo soluzioni robuste con focus su scalabilita, manutenibilita e velocita di delivery sostenibile.',
      email: 'ceo@drpinocode.com',
      linkedin: 'https://www.linkedin.com/in/daniel-pino-panepinto-19aa728a/'
    },
    labels: {
      skipToMain: 'Vai al contenuto principale',
      stack: 'Stack',
      role: 'Ruolo',
      result: 'Risultato',
      linkedin: 'LinkedIn',
      footer: '(c) 2026 drpinocode.com',
      services: 'Servizi',
      approach: 'Approccio',
      delivery: 'Consegna'
    },
    cta: {
      projects: 'Vedi progetti',
      contact: 'Contatto'
    },
    navItems: [
      { href: '#about', label: 'Profilo' },
      { href: '#skills', label: 'Stack' },
      { href: '#experience', label: 'Esperienza' },
      { href: '#projects', label: 'Progetti' },
      { href: '#contact', label: 'Contatto' }
    ],
    heroTape: sharedTape,
    heroMetrics: [
      { value: '15+', label: 'anni di esperienza' },
      { value: '4', label: 'ruoli enterprise chiave' },
      { value: '100%', label: 'focus su qualita tecnica' }
    ],
    heroServices: [
      {
        title: 'Architettura .NET di alto livello',
        text: 'Progetto backend e soluzioni cloud per sistemi destinati a durare e crescere.'
      },
      {
        title: 'Azure e DevOps concreti',
        text: 'Pipeline, deploy e osservabilita per ridurre la frizione operativa.'
      },
      {
        title: 'Modernizzazione delle piattaforme',
        text: 'Refactor ed evoluzione del prodotto senza interrompere il business.'
      }
    ],
    about: {
      label: 'Profilo',
      title: 'Esecuzione solida, decisioni tecniche forti e cura in ogni livello',
      text: 'Il mio lavoro unisce visione di prodotto e basi ingegneristiche solide per costruire sistemi affidabili e facili da evolvere.',
      points: [
        'Unisco ingegneria backend solida con pratiche cloud e automazione per contesti ad alta esigenza.',
        'Lavoro con visione di prodotto e rigore tecnico: decisioni chiare, debito controllato e software duraturo.',
        'Esperienza nella costruzione ed evoluzione di piattaforme in settori critici.'
      ]
    },
    skills: {
      label: 'Stack',
      title: 'Tecnologie selezionate per performance, scala e manutenibilita',
      groups: [
        { title: 'Backend Engineering', items: sharedSkillItems.backend },
        { title: 'Frontend', items: sharedSkillItems.frontend },
        { title: 'Cloud & DevOps', items: sharedSkillItems.cloud },
        { title: 'Data & Architecture', items: sharedSkillItems.data }
      ]
    },
    experience: {
      label: 'Esperienza',
      title: 'Percorso tecnico orientato all impatto',
      text: 'Esperienza in ingegneria .NET e architettura cloud applicata a prodotti e operazioni critiche.',
      items: [
        {
          period: 'Giu 2020 - Presente',
          title: 'Software Engineer .NET / Azure Cloud Solutions (AXA)',
          company: 'UST Global - Barcellona, Spagna',
          impact:
            'Progettazione ed evoluzione di soluzioni .NET su Azure per contesti enterprise, con focus su scalabilita, integrazione servizi e pratiche DevOps.',
          tags: ['.NET', 'Azure', 'Cloud Architecture']
        },
        {
          period: 'Feb 2017 - Giu 2020',
          title: 'Software Architect / Software Engineer .NET',
          company: 'Necsia IT Consulting - Barcellona, Spagna',
          impact:
            'Definizione dell architettura e sviluppo di soluzioni enterprise in ecosistemi .NET, migliorando qualita tecnica e manutenibilita.',
          tags: ['Architettura', 'Consulenza', 'Consegna tecnica']
        },
        {
          period: 'Gen 2016 - Feb 2017',
          title: 'Software Engineer .NET (Vueling Airlines)',
          company: 'IN2 - Barcellona, Spagna',
          impact:
            'Sviluppo di componenti orientati ai servizi e applicazioni web con pattern architetturali e accesso dati SQL Server.',
          tags: ['SOA', 'ASP.NET MVC', 'SQL Server']
        },
        {
          period: 'Set 2012 - Dic 2015',
          title: 'Software Engineer Full Stack / DevOps Engineer',
          company: 'Amagi Services - Caracas, Venezuela',
          impact:
            'Realizzazione di soluzioni full stack con .NET, Angular/Node.js e pratiche di automazione; gestione Team Foundation Server.',
          tags: ['Full Stack', 'DevOps', 'Integrazioni']
        }
      ]
    },
    projects: {
      label: 'Progetti',
      title: 'Blocchi in evidenza',
      text: 'Casi rappresentativi basati su esperienza in cloud, architettura .NET e sistemi enterprise.',
      items: [
        {
          name: 'Piattaforma Cloud per Assicurazioni (AXA)',
          description:
            'Evoluzione di soluzioni enterprise su Azure con architettura orientata ai servizi e rilascio continuo.',
          stack: '.NET, Azure, Azure DevOps, SQL/Cosmos DB',
          role: 'Software Engineer .NET / Azure Cloud Solutions',
          result: 'Migliore scalabilita operativa e maggiore affidabilita in produzione.'
        },
        {
          name: 'Architettura .NET per Sistemi Corporate',
          description:
            'Definizione ed esecuzione di architettura tecnica in progetti enterprise, applicando design pattern e principi SOLID.',
          stack: 'C#, .NET Framework/Core, DI, TDD, N-Tier',
          role: 'Software Architect / Software Engineer',
          result: 'Codice piu manutenibile e minore frizione nell evoluzione funzionale.'
        },
        {
          name: 'Ecosistema di Servizi per Operazioni Aeree',
          description:
            'Sviluppo di servizi e applicazioni web in ambito airline, con integrazione dati e livello di presentazione orientato al business.',
          stack: 'ASP.NET MVC, WCF, SQL Server, JavaScript',
          role: 'Software Engineer .NET',
          result: 'Processi piu coerenti e miglior supporto alle operazioni critiche.'
        }
      ]
    },
    workStyle: {
      label: 'Metodo di lavoro',
      title: 'Chiarezza, performance e codice manutenibile',
      items: [
        {
          title: 'Architettura con criterio',
          text: 'Progetto soluzioni che scalano senza compromettere semplicita e manutenibilita.'
        },
        {
          title: 'DevOps applicato',
          text: 'Automatizzo pipeline e deploy per ridurre rischio e accelerare valore.'
        },
        {
          title: 'Qualita tecnica',
          text: 'Pattern solidi, buone pratiche e attenzione costante al debito tecnico.'
        },
        {
          title: 'Mentalita di prodotto',
          text: 'Ogni decisione tecnica e allineata a impatto reale su business e operazioni.'
        }
      ]
    },
    contact: {
      label: 'Contatto',
      title: 'Costruiamo qualcosa di alto livello?',
      text: 'Disponibile per nuove sfide su prodotto digitale, architettura e sviluppo full stack.'
    }
  },
  ca: {
    metaTitle: 'drpinocode.com | Senior .NET & Cloud Engineer',
    logoTagline: 'DESENVOLUPAMENT DE SOLUCIONS DE NEGOCI',
    profile: {
      name: 'Daniel Pino Panepinto',
      role: 'Senior .NET & Cloud Engineer',
      claim: 'Arquitectura cloud, DevOps i desenvolupament .NET per a producte critic.',
      summary:
        'Enginyer de software especialitzat en .NET, Azure i practiques DevOps. Construeixo solucions robustes amb focus en escalabilitat, mantenibilitat i velocitat de lliurament sostenible.',
      email: 'ceo@drpinocode.com',
      linkedin: 'https://www.linkedin.com/in/daniel-pino-panepinto-19aa728a/'
    },
    labels: {
      skipToMain: 'Ves al contingut principal',
      stack: 'Stack',
      role: 'Rol',
      result: 'Resultat',
      linkedin: 'LinkedIn',
      footer: '(c) 2026 drpinocode.com',
      services: 'Serveis',
      approach: 'Enfocament',
      delivery: 'Entrega'
    },
    cta: {
      projects: 'Veure projectes',
      contact: 'Contactar'
    },
    navItems: [
      { href: '#about', label: 'Perfil' },
      { href: '#skills', label: 'Stack' },
      { href: '#experience', label: 'Trajectoria' },
      { href: '#projects', label: 'Projectes' },
      { href: '#contact', label: 'Contacte' }
    ],
    heroTape: sharedTape,
    heroMetrics: [
      { value: '15+', label: 'anys d experiencia' },
      { value: '4', label: 'rols clau enterprise' },
      { value: '100%', label: 'focus en qualitat tecnica' }
    ],
    heroServices: [
      {
        title: 'Arquitectura .NET d alt nivell',
        text: 'Disseny backend i solucions cloud per a sistemes que han de durar i escalar.'
      },
      {
        title: 'Azure i DevOps aplicats',
        text: 'Pipelines, desplegaments i observabilitat per reduir friccio operativa.'
      },
      {
        title: 'Modernitzacio de plataformes',
        text: 'Refactor i evolucio de producte sense trencar el negoci.'
      }
    ],
    about: {
      label: 'Perfil',
      title: 'Execucio solida, decisions tecniques fortes i detall a cada capa',
      text: 'La meva feina combina visio de producte amb una base d enginyeria solida per construir sistemes fiables i facils d evolucionar.',
      points: [
        'Combino enginyeria backend solida amb practiques cloud i automatitzacio per a entorns d alta exigencia.',
        'Treballo amb visio de producte i enfocament tecnic: decisions clares, deute controlat i software durable.',
        'Experiencia construint i evolucionant plataformes en sectors d operacio critica.'
      ]
    },
    skills: {
      label: 'Stack',
      title: 'Tecnologia seleccionada per a rendiment, escala i mantenibilitat',
      groups: [
        { title: 'Backend Engineering', items: sharedSkillItems.backend },
        { title: 'Frontend', items: sharedSkillItems.frontend },
        { title: 'Cloud & DevOps', items: sharedSkillItems.cloud },
        { title: 'Data & Architecture', items: sharedSkillItems.data }
      ]
    },
    experience: {
      label: 'Trajectoria',
      title: 'Recorregut tecnic orientat a impacte',
      text: 'Experiencia en enginyeria .NET i arquitectura cloud aplicada a productes i operacions critiques.',
      items: [
        {
          period: 'Jun 2020 - Actualitat',
          title: 'Software Engineer .NET / Azure Cloud Solutions (AXA)',
          company: 'UST Global - Barcelona, Espanya',
          impact:
            'Disseny i evolucio de solucions .NET sobre Azure per a entorn enterprise, amb focus en escalabilitat, integracio de serveis i practiques DevOps.',
          tags: ['.NET', 'Azure', 'Cloud Architecture']
        },
        {
          period: 'Feb 2017 - Jun 2020',
          title: 'Software Architect / Software Engineer .NET',
          company: 'Necsia IT Consulting - Barcelona, Espanya',
          impact:
            'Definicio d arquitectura i desenvolupament de solucions empresarials en ecosistemes .NET, reforcant qualitat tecnica i mantenibilitat.',
          tags: ['Arquitectura', 'Consultoria', 'Entrega tecnica']
        },
        {
          period: 'Gen 2016 - Feb 2017',
          title: 'Software Engineer .NET (Vueling Airlines)',
          company: 'IN2 - Barcelona, Espanya',
          impact:
            'Desenvolupament de components orientats a serveis i aplicacions web amb patrons d arquitectura i acces a dades en SQL Server.',
          tags: ['SOA', 'ASP.NET MVC', 'SQL Server']
        },
        {
          period: 'Set 2012 - Des 2015',
          title: 'Software Engineer Full Stack / DevOps Engineer',
          company: 'Amagi Services - Caracas, Venezuela',
          impact:
            'Construccio de solucions full stack amb .NET, Angular/Node.js i practiques d automatitzacio; administracio de Team Foundation Server.',
          tags: ['Full Stack', 'DevOps', 'Integracions']
        }
      ]
    },
    projects: {
      label: 'Projectes',
      title: 'Blocs destacats',
      text: 'Casos representatius basats en experiencia en cloud, arquitectura .NET i sistemes enterprise.',
      items: [
        {
          name: 'Plataforma Cloud per Assegurances (AXA)',
          description:
            'Evolucio de solucions empresarials en Azure amb arquitectura orientada a serveis i desplegament continu.',
          stack: '.NET, Azure, Azure DevOps, SQL/Cosmos DB',
          role: 'Software Engineer .NET / Azure Cloud Solutions',
          result: 'Millora d escalabilitat operativa i major confiabilitat en produccio.'
        },
        {
          name: 'Arquitectura .NET per a Sistemes Corporatius',
          description:
            'Definicio i execucio d arquitectura tecnica en projectes enterprise, aplicant patrons de disseny i principis SOLID.',
          stack: 'C#, .NET Framework/Core, DI, TDD, N-Tier',
          role: 'Software Architect / Software Engineer',
          result: 'Codi mes mantenible i reduccio de friccio en l evolucio funcional.'
        },
        {
          name: 'Ecosistema de Serveis per a Operacio Aeria',
          description:
            'Desenvolupament de serveis i aplicacions web en entorn airline, amb integracio de dades i capa de presentacio orientada a negoci.',
          stack: 'ASP.NET MVC, WCF, SQL Server, JavaScript',
          role: 'Software Engineer .NET',
          result: 'Processos mes consistents i millor suport a operacions critiques.'
        }
      ]
    },
    workStyle: {
      label: 'Forma de treballar',
      title: 'Claredat, performance i codi mantenible',
      items: [
        {
          title: 'Arquitectura amb criteri',
          text: 'Dissenyo solucions que escalen sense comprometre simplicitat ni mantenibilitat.'
        },
        {
          title: 'DevOps aplicat',
          text: 'Automatitzo pipelines i desplegaments per reduir risc i accelerar valor.'
        },
        {
          title: 'Qualitat tecnica',
          text: 'Patrons solids, bones practiques i focus constant en deute tecnic.'
        },
        {
          title: 'Mentalitat de producte',
          text: 'Cada decisio tecnica s alinea amb impacte real en negoci i operacio.'
        }
      ]
    },
    contact: {
      label: 'Contacte',
      title: 'Construim alguna cosa d alt nivell?',
      text: 'Disponible per a nous reptes en producte digital, arquitectura i desenvolupament full stack.'
    }
  }
};
