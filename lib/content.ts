export type Language = "en" | "fr" | "ar"

export interface TestimonialStudent {
  name: string
  role: string
  quote: string
  videoUrl?: string
}

export const content = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      curriculum: "Curriculum",
      campuses: "Campuses",
      admissions: "Admissions",
      testimonials: "Testimonials",
    },

    // Hero Section
    hero: {
      badge: "Free • Innovative • Future-Ready",
      title: "Code Your",
      titleHighlight: "Future",
      subtitle:
        "Join Morocco's most innovative coding school. No fees, no prerequisites, just pure peer-to-peer learning and limitless possibilities.",
      ctaPrimary: "Start Your Journey",
      ctaSecondary: "Explore Campuses",
      stats: {
        campuses: "Campuses",
        access: "Access",
        free: "Free",
      },
      features: {
        peerLearning: {
          title: "Peer Learning",
          description: "Learn through collaboration and peer evaluation",
        },
        projectBased: {
          title: "Project-Based",
          description: "Build real projects from day one",
        },
        globalNetwork: {
          title: "Global Network",
          description: "Connected to 42 Paris international network",
        },
      },
    },

    // Stats Section
    stats: {
      title: "By The Numbers",
      subtitle: "Discover what makes 1337 the premier coding school in Morocco",
      items: {
        imacs: {
          number: "810",
          label: "iMacs Available",
          description: "State-of-the-art equipment across all campuses",
        },
        access: {
          number: "24/7",
          label: "Campus Access",
          description: "Learn at your own pace, any time",
        },
        skills: {
          number: "17",
          label: "Skill Sets",
          description: "Comprehensive curriculum across 3 pillars",
        },
        locations: {
          number: "4",
          label: "Campuses",
          description: "Khouribga, Ben Guerir, Rbat, and Tetouan",
        },
      },
    },

    // Project Grid
    projects: {
      title: "Featured Projects",
      subtitle: "Explore the innovative projects our students build across our comprehensive curriculum",
      filters: {
        all: "All Projects",
        programming: "Programming",
        innovation: "Innovation",
        infrastructure: "Infrastructure",
      },
      viewAll: "View All Projects",
      items: {
        rushArkanoid: {
          title: "Rush Arkanoid",
          description: "Recreate the classic 1980s brick-breaker game using imperative programming principles",
          tech: ["C", "Graphics", "Game Logic"],
        },
        amazing: {
          title: "A-maze-ing",
          description: "Solve complex mazes using functional programming languages and algorithms",
          tech: ["Functional", "Algorithms", "Problem Solving"],
        },
        redTetris: {
          title: "Red Tetris",
          description: "Modern web implementation of Tetris with real-time multiplayer capabilities",
          tech: ["React", "WebSocket", "Node.js"],
        },
        run1337: {
          title: "1337run",
          description: "OpenGL-based endless runner game inspired by Temple Run with custom graphics",
          tech: ["OpenGL", "C++", "3D Graphics"],
        },
        virusProtection: {
          title: "Virus Protection",
          description: "Implement virus detection and protection techniques for system security",
          tech: ["Security", "C", "System Programming"],
        },
        bigData: {
          title: "BigData Challenge",
          description: "Analyze and process large datasets using modern big data technologies",
          tech: ["Python", "Spark", "Data Analysis"],
        },
      },
    },

    // Curriculum
    curriculum: {
      title: "Interactive Skill Tree",
      subtitle:
        "Explore our comprehensive curriculum across 17 skill sets organized into 3 core pillars. Each skill builds upon the previous, creating a structured learning path.",
      pillars: {
        programming: {
          title: "Computer Programming",
          skills: {
            imperative: {
              name: "Imperative Programming",
              project: "Rush Arkanoid",
              description: "Recreate the classic 1980s brick-breaker game",
            },
            functional: {
              name: "Functional Programming",
              project: "A-maze-ing",
              description: "Solve mazes using functional languages",
            },
            oop: {
              name: "Object-Oriented Programming",
              project: "Pool C++",
              description: "2-week immersion in OOP concepts",
            },
            algorithms: {
              name: "Algorithms & AI",
              project: "Gomoku",
              description: "Game theory and AI implementation",
            },
            graphics: {
              name: "Graphics Programming",
              project: "1337run",
              description: "OpenGL game inspired by Temple Run",
            },
          },
        },
        innovation: {
          title: "Innovation",
          skills: {
            creativity: {
              name: "Adaptation & Creativity",
              project: "Open Project",
              description: "Student-chosen creative project",
            },
            web: {
              name: "Web Development",
              project: "Red Tetris",
              description: "Modern web trends implementation",
            },
            integration: {
              name: "Tech Integration",
              project: "Docker Project",
              description: "Virtualization and containerization",
            },
          },
        },
        infrastructure: {
          title: "Infrastructure",
          skills: {
            system: {
              name: "System Programming",
              project: "42sh",
              description: "Rebuild a Unix shell from scratch",
            },
            network: {
              name: "Network Administration",
              project: "Virtual Network",
              description: "Corporate network setup",
            },
            security: {
              name: "Security",
              project: "Virus Implementation",
              description: "Security and protection techniques",
            },
            bigData: {
              name: "Big Data",
              project: "BigData Challenge",
              description: "Large dataset analysis",
            },
            parallel: {
              name: "Parallel Computing",
              project: "Plazza",
              description: "Pizzeria management simulation",
            },
          },
        },
      },
      internships: {
        title: "Mandatory Internships",
        description:
          "Complete 10-12 months of hands-on industry experience to apply your skills in real-world scenarios and build professional networks.",
        badge: "10-12 Months • Industry Partners • Real Projects",
      },
      prerequisites: "Prerequisites:",
    },

    // Campuses
    campuses: {
      title: "Our Campuses",
      subtitle:
        "Explore our three state-of-the-art campuses across Morocco, each offering 24/7 access and cutting-edge facilities for our students.",
      locations: {
        khouribga: {
          name: "Khouribga",
          description:
            "Our first campus, located in Khouribga, is equipped with 300 iMacs and state-of-the-art facilities. It's situated near Casablanca, making it easily accessible.",
          address: "Khouribga, Morocco",
          equipment: "300 iMacs",
          features: ["24/7 Access", "Gaming Areas", "Cafeteria", "Meeting Rooms"],
        },
        benguerir: {
          name: "Ben Guerir",
          description:
            "Located at Mohammed VI Polytechnic University in Ben Guerir, this campus offers a unique learning environment with modern facilities and a vibrant community.",
          address: "Mohammed VI Polytechnic University, Ben Guerir, Morocco",
          equipment: "300 iMacs",
          features: ["24/7 Access", "University Integration", "Research Facilities", "Innovation Hub"],
        },
        tetouan: {
          name: "Tétouan (Med)",
          description:
            "Our newest campus in Tétouan (Med) features 210 iMacs and is strategically located near offshoring companies, providing excellent industry connections.",
          address: "Tétouan, Morocco",
          equipment: "210 iMacs",
          features: ["24/7 Access", "Industry Proximity", "Collaborative Spaces", "Modern Infrastructure"],
        },
        rabat: {
          name: "Rabat",
          description: "Our newest campus in Rabat features 210 iMacs and is strategically located near offshoring companies, providing excellent industry connections.",
          address: "Rabat, Morocco",
          equipment: "260 iMacs",
          features: ["24/7 Access", "Industry Proximity", "Collaborative Spaces", "Modern Infrastructure"],
        },
      },
      gallery: {
        title: "Facility Gallery",
        subtitle: "Take a virtual tour of our state-of-the-art facilities across all three campuses",
        campusLabels: {
          khouribga: "Khouribga Campus",
          benguerir: "Ben Guerir Campus",
          tetouan: "Tétouan Campus",
          rabat: "Rabat Campus",
        },
      },
      overview: {
        alwaysOpen: {
          title: "Always Open",
          description:
            "All our campuses are open 24 hours a day, 7 days a week, allowing students to learn at their own pace and schedule.",
        },
        equipment: {
          title: "Modern Equipment",
          description:
            "Our campuses are equipped with hundreds of iMacs, providing students with the tools they need to learn and create.",
        },
        collaboration: {
          title: "Collaborative Spaces",
          description:
            "Open floor workstations, meeting rooms, and common areas designed to foster peer-to-peer learning and collaboration.",
        },
        amenities: {
          title: "Additional Amenities",
          description:
            "Gaming areas, cafeterias, and recreational spaces to help students relax and recharge between coding sessions.",
        },
        strategic: {
          title: "Strategic Locations",
          description:
            "Campuses strategically located across Morocco in Khouribga, Ben Guerir, Tétouan, and Rabat, providing accessibility to students nationwide.",
        },
      },
      accessNote: "All campuses are open 24/7",
    },

    // Admissions
    admissions: {
      title: "Admissions Process",
      subtitle:
        "Your journey to becoming a 1337 student follows a unique path designed to identify problem-solvers and creative thinkers, regardless of prior coding experience.",
      steps: {
        register: {
          title: "Register Online",
          description:
            "Create an account on the 1337 platform and complete your profile with personal information and background.",
          details: [
            "No prior coding experience required",
            "Open to ages 18-30",
            "Valid ID and email required",
            "Complete basic information form",
          ],
        },
        tests: {
          title: "Online Tests",
          description:
            "Complete a series of logic and memory assessments designed to evaluate your problem-solving abilities.",
          details: [
            "Logic puzzles and pattern recognition",
            "Memory and attention tests",
            "No technical knowledge required",
            "Timed assessments",
          ],
        },
        checkin: {
          title: "Campus Check-in",
          description:
            "Visit one of our campuses in person to verify your identity and confirm your interest in the program.",
          details: [
            "Mandatory in-person visit",
            "Bring valid ID",
            "Tour the campus facilities",
            "Meet current students and staff",
          ],
        },
        pool: {
          title: "The Pool",
          description:
            "A 4-week intensive coding immersion where you'll learn the basics of programming through peer-to-peer learning.",
          details: [
            "4 weeks of intensive learning",
            "Daily projects and challenges",
            "Peer evaluations and feedback",
            "Weekly exams to track progress",
          ],
        },
        admission: {
          title: "Final Selection",
          description:
            "Based on your performance during The Pool, you'll receive a decision on your admission to the full program.",
          details: [
            "Performance-based selection",
            "Evaluation of technical skills",
            "Assessment of peer collaboration",
            "Consideration of progress and growth",
          ],
        },
      },
      timeline: {
        registrationPeriod: "Registration Period",
        registrationDesc:
          "Registration is open year-round. Check the website for upcoming Pool dates and plan your application accordingly.",
        eligibility: "Eligibility",
        eligibilityDesc:
          "Open to ages 18-30, with exceptions for high school seniors. No prior IT knowledge or specific educational background required.",
        testFormat: "Test Format",
        testFormatDesc:
          "Online assessments focus on logical reasoning, pattern recognition, and problem-solving skills, not technical knowledge.",
        preparation: "Preparation",
        preparationDesc:
          "No specific preparation is needed. Tests are designed to assess natural aptitude and thinking processes rather than learned skills.",
        campusOptions: "Campus Options",
        campusOptionsDesc:
          "You can check in at any of our three campuses: Khouribga, Ben Guerir, or Tétouan. Choose the one most convenient for you.",
        scheduling: "Scheduling",
        schedulingDesc:
          "Check-in dates are announced on the website. You must complete this step before being eligible for The Pool.",
        poolStructure: "Pool Structure",
        poolStructureDesc:
          "The Pool is a 4-week coding bootcamp with daily projects, peer evaluations, and weekly exams. You'll learn the basics of programming through hands-on practice.",
        accommodation: "Accommodation",
        accommodationDesc:
          "Summer-camp style accommodation is available (gender-separated) or you can rent nearby. In Ben Guerir, monthly rent averages around 1500 MAD.",
        selectionCriteria: "Selection Criteria",
        selectionCriteriaDesc:
          "Selection is based on your performance during The Pool, including project completion, peer evaluations, and exam results.",
        nextSteps: "Next Steps",
        nextStepsDesc:
          "If selected, you'll begin the full program immediately. The curriculum is project-based and self-paced, with mandatory internships later in the program.",
      },
      keyPoints: "Key Points:",
      keyInfo: {
        tuition: {
          title: "Tuition Fees",
          description:
            "1337 is completely free. Students only need to cover their social security and living expenses.",
        },
        age: {
          title: "Age Range",
          description: "Open to applicants between 18 and 30 years old, with exceptions for high school seniors.",
        },
        duration: {
          title: "Pool Weeks",
          description: "The Pool is a 4-week intensive coding immersion that serves as the final selection process.",
        },
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "Find answers to common questions about our admissions process and program",
        contactCta: "Still have questions about the admissions process?",
        contactButton: "Contact Admissions",
        items: [
          {
            question: "Do I need prior coding experience to apply?",
            answer:
              "No, 1337 is designed for beginners with no prior IT background. Our selection process focuses on your problem-solving abilities and learning potential, not existing technical knowledge.",
          },
          {
            question: "Is there an age requirement?",
            answer:
              "Yes, applicants must be between 18 and 30 years old. There are exceptions for high school seniors who can provide appropriate documentation.",
          },
          {
            question: "How much does it cost to attend 1337?",
            answer:
              "1337 is completely free. There are no tuition fees or hidden costs. Students only need to cover their social security and living expenses.",
          },
          {
            question: "What is The Pool and how does it work?",
            answer:
              "The Pool is a 4-week intensive coding immersion that serves as the final selection process. During this period, you'll work on daily projects, participate in peer evaluations, and take weekly exams to demonstrate your aptitude for the program.",
          },
          {
            question: "Where are the campuses located?",
            answer:
              "We have three campuses across Morocco: Khouribga (near Casablanca), Ben Guerir (at Mohammed VI Polytechnic University), and Tétouan (Med campus).",
          },
          {
            question: "Is accommodation provided during The Pool?",
            answer:
              "Summer-camp style accommodation is available (gender-separated) during The Pool. Alternatively, you can rent nearby. In Ben Guerir, monthly rent averages around 1500 MAD.",
          },
          {
            question: "What kind of certificate will I receive upon graduation?",
            answer:
              "Graduates receive an international certificate recognized by the 42 network, rather than a traditional diploma. This certificate is valued by employers for its focus on practical skills and problem-solving abilities.",
          },
          {
            question: "Are there internship opportunities?",
            answer:
              "Yes, the curriculum includes 10-12 months of mandatory internships to provide real-world experience and industry connections.",
          },
        ],
      },
    },

    // Testimonials
    testimonials: {
      title: "Student Voices",
      subtitle:
        "Hear from our students and graduates about their transformative journey at 1337 and how it shaped their careers in technology.",
      students: [
        {
          name: "Chaimae",
          role: "Student, Khouribga Campus",
          quote:
            "Coding means freedom to me. 1337 doesn't just teach solutions, it teaches the tools to solve any problem. The peer learning model pushed me to grow in ways traditional education never could.",
          videoUrl: "/Aymane-HAMDI.mp4"
        },
        {
          name: "Amine",
          role: "Graduate, Ben Guerir Campus",
          quote:
            "The flexible program at 1337 helped me discover my passion for cybersecurity. Now I'm building my own startup in the field. The project-based curriculum prepared me for real-world challenges.",
        },
        {
          name: "Fatima",
          role: "Student, Tétouan Campus",
          quote:
            "I had zero coding experience before 1337. The supportive community and 24/7 access to facilities allowed me to learn at my own pace. Now I'm collaborating on projects I never thought possible.",
        },
        {
          name: "Youssef",
          role: "Graduate, Khouribga Campus",
          quote:
            "The internship opportunities through 1337 connected me directly to the industry. I secured a position at a major tech company before even completing the program. The practical skills made all the difference.",
          videoUrl: "",
        },
      ],
      successStories: {
        title: "Success Stories",
        subtitle:
          "Discover how 1337 graduates are making their mark in the tech industry, from major corporations to innovative startups",
        categories: {
          all: "All Stories",
          career: "Career Success",
          startup: "Entrepreneurship",
          research: "Research",
        },
        keyAchievement: "Key Achievement",
        skillsUsed: "Skills Used:",
        cta: {
          title: "Ready to Write Your Success Story?",
          description:
            "Join the next generation of 1337 graduates who are shaping the future of technology in Morocco and beyond.",
          button: "Start Your Journey",
        },
      },
    },

    // Footer
    footer: {
      description:
        "Morocco's premier free coding school. Peer-to-peer learning, project-based curriculum, and 24/7 access to innovation.",
      quickLinks: "Quick Links",
      campuses: "Our Campuses",
      contact: "Get In Touch",
      copyright: "made by AyoubDev, Mohammed Amine, Yssin.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      systemStatus: "> system.status: online",
    },

    // Common
    common: {
      readMore: "Read More",
      learnMore: "Learn More",
      getStarted: "Get Started",
      viewAll: "View All",
      loading: "Loading...",
      error: "Error occurred",
      success: "Success",
    },
  },

  fr: {
    // Navigation
    nav: {
      home: "Accueil",
      curriculum: "Curriculum",
      campuses: "Campus",
      admissions: "Admissions",
      testimonials: "Témoignages",
    },

    // Hero Section
    hero: {
      badge: "Gratuit • Innovant • Orienté Futur",
      title: "Codez Votre",
      titleHighlight: "Avenir",
      subtitle:
        "Rejoignez l'école de programmation la plus innovante du Maroc. Aucun frais, aucun prérequis, juste un apprentissage pur entre pairs et des possibilités illimitées.",
      ctaPrimary: "Commencez Votre Parcours",
      ctaSecondary: "Explorer les Campus",
      stats: {
        campuses: "Campus",
        access: "Accès",
        free: "Gratuit",
      },
      features: {
        peerLearning: {
          title: "Apprentissage Entre Pairs",
          description: "Apprenez grâce à la collaboration et l'évaluation par les pairs",
        },
        projectBased: {
          title: "Basé sur des Projets",
          description: "Construisez de vrais projets dès le premier jour",
        },
        globalNetwork: {
          title: "Réseau Mondial",
          description: "Connecté au réseau international 42 Paris",
        },
      },
    },

    // Stats Section
    stats: {
      title: "En Chiffres",
      subtitle: "Découvrez ce qui fait de 1337 l'école de programmation de référence au Maroc",
      items: {
        imacs: {
          number: "810",
          label: "iMacs Disponibles",
          description: "Équipement de pointe sur tous les campus",
        },
        access: {
          number: "24/7",
          label: "Accès Campus",
          description: "Apprenez à votre rythme, à tout moment",
        },
        skills: {
          number: "17",
          label: "Compétences",
          description: "Curriculum complet sur 3 piliers",
        },
        locations: {
          number: "4",
          label: "Campus",
          description: "Khouribga, Ben Guerir, Rabat, et Tétouan",
        },
      },
    },

    // Project Grid
    projects: {
      title: "Projets Phares",
      subtitle: "Explorez les projets innovants que nos étudiants construisent à travers notre curriculum complet",
      filters: {
        all: "Tous les Projets",
        programming: "Programmation",
        innovation: "Innovation",
        infrastructure: "Infrastructure",
      },
      viewAll: "Voir Tous les Projets",
      items: {
        rushArkanoid: {
          title: "Rush Arkanoid",
          description:
            "Recréez le jeu classique de casse-briques des années 1980 en utilisant les principes de programmation impérative",
          tech: ["C", "Graphiques", "Logique de Jeu"],
        },
        amazing: {
          title: "A-maze-ing",
          description:
            "Résolvez des labyrinthes complexes en utilisant des langages de programmation fonctionnelle et des algorithmes",
          tech: ["Fonctionnel", "Algorithmes", "Résolution de Problèmes"],
        },
        redTetris: {
          title: "Red Tetris",
          description: "Implémentation web moderne de Tetris avec des capacités multijoueur en temps réel",
          tech: ["React", "WebSocket", "Node.js"],
        },
        run1337: {
          title: "1337run",
          description: "Jeu de course sans fin basé sur OpenGL inspiré de Temple Run avec des graphiques personnalisés",
          tech: ["OpenGL", "C++", "Graphiques 3D"],
        },
        virusProtection: {
          title: "Protection Antivirus",
          description:
            "Implémentez des techniques de détection et de protection contre les virus pour la sécurité système",
          tech: ["Sécurité", "C", "Programmation Système"],
        },
        bigData: {
          title: "Défi BigData",
          description:
            "Analysez et traitez de grands ensembles de données en utilisant des technologies big data modernes",
          tech: ["Python", "Spark", "Analyse de Données"],
        },
      },
    },

    // Curriculum
    curriculum: {
      title: "Arbre de Compétences Interactif",
      subtitle:
        "Explorez notre curriculum complet à travers 17 compétences organisées en 3 piliers fondamentaux. Chaque compétence s'appuie sur la précédente, créant un parcours d'apprentissage structuré.",
      pillars: {
        programming: {
          title: "Programmation Informatique",
          skills: {
            imperative: {
              name: "Programmation Impérative",
              project: "Rush Arkanoid",
              description: "Recréez le jeu classique de casse-briques des années 1980",
            },
            functional: {
              name: "Programmation Fonctionnelle",
              project: "A-maze-ing",
              description: "Résolvez des labyrinthes en utilisant des langages fonctionnels",
            },
            oop: {
              name: "Programmation Orientée Objet",
              project: "Pool C++",
              description: "Immersion de 2 semaines dans les concepts POO",
            },
            algorithms: {
              name: "Algorithmes & IA",
              project: "Gomoku",
              description: "Implémentation de théorie des jeux et IA",
            },
            graphics: {
              name: "Programmation Graphique",
              project: "1337run",
              description: "Jeu OpenGL inspiré de Temple Run",
            },
          },
        },
        innovation: {
          title: "Innovation",
          skills: {
            creativity: {
              name: "Adaptation & Créativité",
              project: "Projet Libre",
              description: "Projet créatif choisi par l'étudiant",
            },
            web: {
              name: "Développement Web",
              project: "Red Tetris",
              description: "Implémentation des tendances web modernes",
            },
            integration: {
              name: "Intégration Technologique",
              project: "Projet Docker",
              description: "Virtualisation et conteneurisation",
            },
          },
        },
        infrastructure: {
          title: "Infrastructure",
          skills: {
            system: {
              name: "Programmation Système",
              project: "42sh",
              description: "Reconstruire un shell Unix à partir de zéro",
            },
            network: {
              name: "Administration Réseau",
              project: "Réseau Virtuel",
              description: "Configuration de réseau d'entreprise",
            },
            security: {
              name: "Sécurité",
              project: "Implémentation de Virus",
              description: "Techniques de sécurité et de protection",
            },
            bigData: {
              name: "Big Data",
              project: "Défi BigData",
              description: "Analyse de grands ensembles de données",
            },
            parallel: {
              name: "Calcul Parallèle",
              project: "Plazza",
              description: "Simulation de gestion de pizzeria",
            },
          },
        },
      },
      internships: {
        title: "Stages Obligatoires",
        description:
          "Complétez 10-12 mois d'expérience pratique en industrie pour appliquer vos compétences dans des scénarios réels et construire des réseaux professionnels.",
        badge: "10-12 Mois • Partenaires Industriels • Projets Réels",
      },
      prerequisites: "Prérequis :",
    },

    // Campuses
    campuses: {
      title: "Nos Campus",
      subtitle:
        "Explorez nos trois campus de pointe à travers le Maroc, chacun offrant un accès 24/7 et des installations de pointe pour nos étudiants.",
      locations: {
        khouribga: {
          name: "Khouribga",
          description:
            "Notre premier campus, situé à Khouribga, est équipé de 300 iMacs et d'installations de pointe. Il est situé près de Casablanca, le rendant facilement accessible.",
          address: "Khouribga, Maroc",
          equipment: "300 iMacs",
          features: ["Accès 24/7", "Espaces de Jeu", "Cafétéria", "Salles de Réunion"],
        },
        benguerir: {
          name: "Ben Guerir",
          description:
            "Situé à l'Université Polytechnique Mohammed VI à Ben Guerir, ce campus offre un environnement d'apprentissage unique avec des installations modernes et une communauté dynamique.",
          address: "Université Polytechnique Mohammed VI, Ben Guerir, Maroc",
          equipment: "Plusieurs iMacs",
          features: ["Accès 24/7", "Intégration Universitaire", "Installations de Recherche", "Hub d'Innovation"],
        },
        tetouan: {
          name: "Tétouan (Med)",
          description:
            "Notre campus le plus récent à Tétouan (Med) dispose de 210 iMacs et est stratégiquement situé près des entreprises d'offshoring, offrant d'excellentes connexions industrielles.",
          address: "Tétouan, Maroc",
          equipment: "210 iMacs",
          features: ["Accès 24/7", "Proximité Industrielle", "Espaces Collaboratifs", "Infrastructure Moderne"],
        },
        rabat: {
          name: "Rabat",
          description: "Notre campus le plus récent à Rabat dispose de 210 iMacs et est stratégiquement situé près des entreprises d'offshoring, offrant d'excellentes connexions industrielles.",
          address: "Rabat, Maroc",
          equipment: "210 iMacs",
          features: ["Accès 24/7", "Proximité Industrielle", "Espaces Collaboratifs", "Infrastructure Moderne"],
        },
      },
      gallery: {
        title: "Galerie des Installations",
        subtitle: "Faites une visite virtuelle de nos installations de pointe sur les trois campus",
        campusLabels: {
          khouribga: "Campus Khouribga",
          benguerir: "Campus Ben Guerir",
          tetouan: "Campus Tétouan",
          rabat: "Campus Rabat",
        },
      },
      overview: {
        alwaysOpen: {
          title: "Toujours Ouvert",
          description:
            "Tous nos campus sont ouverts 24 heures sur 24, 7 jours sur 7, permettant aux étudiants d'apprendre à leur propre rythme et horaire.",
        },
        equipment: {
          title: "Équipement Moderne",
          description:
            "Nos campus sont équipés de centaines d'iMacs, fournissant aux étudiants les outils dont ils ont besoin pour apprendre et créer.",
        },
        collaboration: {
          title: "Espaces Collaboratifs",
          description:
            "Postes de travail en open space, salles de réunion et espaces communs conçus pour favoriser l'apprentissage entre pairs et la collaboration.",
        },
        amenities: {
          title: "Commodités Supplémentaires",
          description:
            "Espaces de jeu, cafétérias et espaces de loisirs pour aider les étudiants à se détendre et se ressourcer entre les sessions de codage.",
        },
        strategic: {
          title: "Emplacements Stratégiques",
          description:
            "Campus stratégiquement situés à travers le Maroc à Khouribga, Ben Guerir, Tétouan et Rabat, offrant une accessibilité aux étudiants de tout le pays.",
        },
      },
      accessNote: "Tous les campus sont ouverts 24/7",
    },

    // Admissions
    admissions: {
      title: "Processus d'Admission",
      subtitle:
        "Votre parcours pour devenir étudiant 1337 suit un chemin unique conçu pour identifier les résolveurs de problèmes et les penseurs créatifs, indépendamment de l'expérience préalable en programmation.",
      steps: {
        register: {
          title: "Inscription en Ligne",
          description:
            "Créez un compte sur la plateforme 1337 et complétez votre profil avec vos informations personnelles et votre parcours.",
          details: [
            "Aucune expérience préalable en programmation requise",
            "Ouvert aux âges 18-30",
            "Pièce d'identité valide et email requis",
            "Compléter le formulaire d'informations de base",
          ],
        },
        tests: {
          title: "Tests en Ligne",
          description:
            "Complétez une série d'évaluations de logique et de mémoire conçues pour évaluer vos capacités de résolution de problèmes.",
          details: [
            "Puzzles de logique et reconnaissance de motifs",
            "Tests de mémoire et d'attention",
            "Aucune connaissance technique requise",
            "Évaluations chronométrées",
          ],
        },
        checkin: {
          title: "Check-in Campus",
          description:
            "Visitez l'un de nos campus en personne pour vérifier votre identité et confirmer votre intérêt pour le programme.",
          details: [
            "Visite en personne obligatoire",
            "Apportez une pièce d'identité valide",
            "Visitez les installations du campus",
            "Rencontrez les étudiants actuels et le personnel",
          ],
        },
        pool: {
          title: "La Piscine",
          description:
            "Une immersion intensive de 4 semaines en programmation où vous apprendrez les bases de la programmation grâce à l'apprentissage entre pairs.",
          details: [
            "4 semaines d'apprentissage intensif",
            "Projets et défis quotidiens",
            "Évaluations par les pairs et retours",
            "Examens hebdomadaires pour suivre les progrès",
          ],
        },
        admission: {
          title: "Sélection Finale",
          description:
            "Basé sur votre performance pendant La Piscine, vous recevrez une décision sur votre admission au programme complet.",
          details: [
            "Sélection basée sur la performance",
            "Évaluation des compétences techniques",
            "Évaluation de la collaboration entre pairs",
            "Considération des progrès et de la croissance",
          ],
        },
      },
      timeline: {
        registrationPeriod: "Période d'Inscription",
        registrationDesc:
          "L'inscription est ouverte toute l'année. Consultez le site web pour les dates de Piscine à venir et planifiez votre candidature en conséquence.",
        eligibility: "Éligibilité",
        eligibilityDesc:
          "Ouvert aux âges 18-30, avec des exceptions pour les lycéens. Aucune connaissance informatique préalable ou formation éducative spécifique requise.",
        testFormat: "Format de Test",
        testFormatDesc:
          "Les évaluations en ligne se concentrent sur le raisonnement logique, la reconnaissance de motifs et les compétences de résolution de problèmes, pas sur les connaissances techniques.",
        preparation: "Préparation",
        preparationDesc:
          "Aucune préparation spécifique n'est nécessaire. Les tests sont conçus pour évaluer l'aptitude naturelle et les processus de pensée plutôt que les compétences apprises.",
        campusOptions: "Options de Campus",
        campusOptionsDesc:
          "Vous pouvez vous enregistrer dans l'un de nos trois campus : Khouribga, Ben Guerir ou Tétouan. Choisissez celui qui vous convient le mieux.",
        scheduling: "Planification",
        schedulingDesc:
          "Les dates d'enregistrement sont annoncées sur le site web. Vous devez compléter cette étape avant d'être éligible pour La Piscine.",
        poolStructure: "Structure de la Piscine",
        poolStructureDesc:
          "La Piscine est un bootcamp de programmation de 4 semaines avec des projets quotidiens, des évaluations par les pairs et des examens hebdomadaires. Vous apprendrez les bases de la programmation par la pratique.",
        accommodation: "Hébergement",
        accommodationDesc:
          "Un hébergement de style camp d'été est disponible (séparé par sexe) ou vous pouvez louer à proximité. À Ben Guerir, le loyer mensuel est en moyenne d'environ 1500 MAD.",
        selectionCriteria: "Critères de Sélection",
        selectionCriteriaDesc:
          "La sélection est basée sur votre performance pendant La Piscine, y compris l'achèvement des projets, les évaluations par les pairs et les résultats d'examens.",
        nextSteps: "Prochaines Étapes",
        nextStepsDesc:
          "Si sélectionné, vous commencerez le programme complet immédiatement. Le curriculum est basé sur des projets et auto-rythmé, avec des stages obligatoires plus tard dans le programme.",
      },
      keyPoints: "Points Clés :",
      keyInfo: {
        tuition: {
          title: "Frais de Scolarité",
          description:
            "1337 est complètement gratuit. Les étudiants n'ont qu'à couvrir leur sécurité sociale et leurs frais de subsistance.",
        },
        age: {
          title: "Tranche d'Âge",
          description: "Ouvert aux candidats entre 18 et 30 ans, avec des exceptions pour les lycéens.",
        },
        duration: {
          title: "Semaines de Piscine",
          description:
            "La Piscine est une immersion intensive de 4 semaines en programmation qui sert de processus de sélection finale.",
        },
      },
      faq: {
        title: "Questions Fréquemment Posées",
        subtitle: "Trouvez des réponses aux questions courantes sur notre processus d'admission et notre programme",
        contactCta: "Vous avez encore des questions sur le processus d'admission ?",
        contactButton: "Contacter les Admissions",
        items: [
          {
            question: "Ai-je besoin d'une expérience préalable en programmation pour postuler ?",
            answer:
              "Non, 1337 est conçu pour les débutants sans formation informatique préalable. Notre processus de sélection se concentre sur vos capacités de résolution de problèmes et votre potentiel d'apprentissage, pas sur les connaissances techniques existantes.",
          },
          {
            question: "Y a-t-il une exigence d'âge ?",
            answer:
              "Oui, les candidats doivent être âgés de 18 à 30 ans. Il y a des exceptions pour les lycéens qui peuvent fournir une documentation appropriée.",
          },
          {
            question: "Combien coûte la fréquentation de 1337 ?",
            answer:
              "1337 est complètement gratuit. Il n'y a pas de frais de scolarité ou de coûts cachés. Les étudiants n'ont qu'à couvrir leur sécurité sociale et leurs frais de subsistance.",
          },
          {
            question: "Qu'est-ce que La Piscine et comment ça marche ?",
            answer:
              "La Piscine est une immersion intensive de 4 semaines en programmation qui sert de processus de sélection finale. Pendant cette période, vous travaillerez sur des projets quotidiens, participerez à des évaluations par les pairs et passerez des examens hebdomadaires pour démontrer votre aptitude pour le programme.",
          },
          {
            question: "Où sont situés les campus ?",
            answer:
              "Nous avons trois campus à travers le Maroc : Khouribga (près de Casablanca), Ben Guerir (à l'Université Polytechnique Mohammed VI), et Tétouan (campus Med).",
          },
          {
            question: "Un hébergement est-il fourni pendant La Piscine ?",
            answer:
              "Un hébergement de style camp d'été est disponible (séparé par sexe) pendant La Piscine. Alternativement, vous pouvez louer à proximité. À Ben Guerir, le loyer mensuel est en moyenne d'environ 1500 MAD.",
          },
          {
            question: "Quel type de certificat vais-je recevoir à l'obtention du diplôme ?",
            answer:
              "Les diplômés reçoivent un certificat international reconnu par le réseau 42, plutôt qu'un diplôme traditionnel. Ce certificat est valorisé par les employeurs pour son accent sur les compétences pratiques et les capacités de résolution de problèmes.",
          },
          {
            question: "Y a-t-il des opportunités de stage ?",
            answer:
              "Oui, le curriculum comprend 10-12 mois de stages obligatoires pour fournir une expérience du monde réel et des connexions industrielles.",
          },
        ],
      },
    },

    // Testimonials
    testimonials: {
      title: "Voix des Étudiants",
      subtitle:
        "Écoutez nos étudiants et diplômés parler de leur parcours transformateur à 1337 et comment cela a façonné leurs carrières en technologie.",
      students: [
        {
          name: "Chaimae",
          role: "Étudiante, Campus Khouribga",
          quote:
            "La programmation signifie la liberté pour moi. 1337 n'enseigne pas seulement des solutions, elle enseigne les outils pour résoudre n'importe quel problème. Le modèle d'apprentissage entre pairs m'a poussée à grandir d'une manière que l'éducation traditionnelle n'aurait jamais pu.",
        },
        {
          name: "Amine",
          role: "Diplômé, Campus Ben Guerir",
          quote:
            "Le programme flexible de 1337 m'a aidé à découvrir ma passion pour la cybersécurité. Maintenant je construis ma propre startup dans le domaine. Le curriculum basé sur des projets m'a préparé aux défis du monde réel.",
        },
        {
          name: "Fatima",
          role: "Étudiante, Campus Tétouan",
          quote:
            "Je n'avais aucune expérience en programmation avant 1337. La communauté de soutien et l'accès 24/7 aux installations m'ont permis d'apprendre à mon propre rythme. Maintenant je collabore sur des projets que je n'aurais jamais cru possibles.",
        },
        {
          name: "Youssef",
          role: "Diplômé, Campus Khouribga",
          quote:
            "Les opportunités de stage à travers 1337 m'ont connecté directement à l'industrie. J'ai décroché un poste dans une grande entreprise technologique avant même de terminer le programme. Les compétences pratiques ont fait toute la différence.",
        },
      ],
      successStories: {
        title: "Histoires de Succès",
        subtitle:
          "Découvrez comment les diplômés de 1337 marquent leur empreinte dans l'industrie technologique, des grandes entreprises aux startups innovantes",
        categories: {
          all: "Toutes les Histoires",
          career: "Succès de Carrière",
          startup: "Entrepreneuriat",
          research: "Recherche",
        },
        keyAchievement: "Réalisation Clé",
        skillsUsed: "Compétences Utilisées :",
        cta: {
          title: "Prêt à Écrire Votre Histoire de Succès ?",
          description:
            "Rejoignez la prochaine génération de diplômés 1337 qui façonnent l'avenir de la technologie au Maroc et au-delà.",
          button: "Commencez Votre Parcours",
        },
      },
    },

    // Footer
    footer: {
      description:
        "École de programmation gratuite de premier plan au Maroc. Apprentissage entre pairs, curriculum basé sur des projets, et accès 24/7 à l'innovation.",
      quickLinks: "Liens Rapides",
      campuses: "Nos Campus",
      contact: "Nous Contacter",
      copyright: "École de Programmation 1337. Tous droits réservés.",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation",
      systemStatus: "> system.status: en ligne",
    },

    // Common
    common: {
      readMore: "Lire Plus",
      learnMore: "En Savoir Plus",
      getStarted: "Commencer",
      viewAll: "Voir Tout",
      loading: "Chargement...",
      error: "Erreur survenue",
      success: "Succès",
    },
  },

  ar: {
    // Navigation
    nav: {
      home: "الرئيسية",
      curriculum: "المنهج",
      campuses: "الحرم الجامعي",
      admissions: "القبول",
      testimonials: "الشهادات",
    },

    // Hero Section
    hero: {
      badge: "مجاني • مبتكر • موجه للمستقبل",
      title: "اكتب",
      titleHighlight: "مستقبلك",
      subtitle:
        "انضم إلى أكثر مدارس البرمجة ابتكاراً في المغرب. بدون رسوم، بدون متطلبات مسبقة، فقط تعلم نقي بين الأقران وإمكانيات لا محدودة.",
      ctaPrimary: "ابدأ رحلتك",
      ctaSecondary: "استكشف الحرم الجامعي",
      stats: {
        campuses: "حرم جامعي",
        access: "وصول",
        free: "مجاني",
      },
      features: {
        peerLearning: {
          title: "التعلم بين الأقران",
          description: "تعلم من خلال التعاون والتقييم بين الأقران",
        },
        projectBased: {
          title: "قائم على المشاريع",
          description: "ابني مشاريع حقيقية من اليوم الأول",
        },
        globalNetwork: {
          title: "شبكة عالمية",
          description: "متصل بالشبكة الدولية 42 باريس",
        },
      },
    },

    // Stats Section
    stats: {
      title: "بالأرقام",
      subtitle: "اكتشف ما يجعل 1337 مدرسة البرمجة الرائدة في المغرب",
      items: {
        imacs: {
          number: "810",
          label: "أجهزة iMac متاحة",
          description: "معدات حديثة عبر جميع الحرم الجامعي",
        },
        access: {
          number: "24/7",
          label: "وصول للحرم الجامعي",
          description: "تعلم بوتيرتك الخاصة، في أي وقت",
        },
        skills: {
          number: "17",
          label: "مجموعة مهارات",
          description: "منهج شامل عبر 3 أعمدة",
        },
        locations: {
          number: "4",
          label: "حرم جامعي",
          description: "خريبكة، بن جرير، الرباط، وتطوان",
        },
      },
    },

    // Project Grid
    projects: {
      title: "المشاريع المميزة",
      subtitle: "استكشف المشاريع المبتكرة التي يبنيها طلابنا عبر منهجنا الشامل",
      filters: {
        all: "جميع المشاريع",
        programming: "البرمجة",
        innovation: "الابتكار",
        infrastructure: "البنية التحتية",
      },
      viewAll: "عرض جميع المشاريع",
      items: {
        rushArkanoid: {
          title: "Rush Arkanoid",
          description: "أعد إنشاء لعبة كسر الطوب الكلاسيكية من الثمانينيات باستخدام مبادئ البرمجة الحتمية",
          tech: ["C", "الرسوميات", "منطق اللعبة"],
        },
        amazing: {
          title: "A-maze-ing",
          description: "حل المتاهات المعقدة باستخدام لغات البرمجة الوظيفية والخوارزميات",
          tech: ["وظيفي", "خوارزميات", "حل المشاكل"],
        },
        redTetris: {
          title: "Red Tetris",
          description: "تنفيذ ويب حديث لتتريس مع قدرات متعددة اللاعبين في الوقت الفعلي",
          tech: ["React", "WebSocket", "Node.js"],
        },
        run1337: {
          title: "1337run",
          description: "لعبة جري لا نهائية قائمة على OpenGL مستوحاة من Temple Run مع رسوميات مخصصة",
          tech: ["OpenGL", "C++", "رسوميات ثلاثية الأبعاد"],
        },
        virusProtection: {
          title: "حماية من الفيروسات",
          description: "تنفيذ تقنيات اكتشاف الفيروسات والحماية لأمان النظام",
          tech: ["الأمان", "C", "برمجة النظام"],
        },
        bigData: {
          title: "تحدي البيانات الضخمة",
          description: "تحليل ومعالجة مجموعات البيانات الكبيرة باستخدام تقنيات البيانات الضخمة الحديثة",
          tech: ["Python", "Spark", "تحليل البيانات"],
        },
      },
    },

    // Curriculum
    curriculum: {
      title: "شجرة المهارات التفاعلية",
      subtitle:
        "استكشف منهجنا الشامل عبر 17 مجموعة مهارات منظمة في 3 أعمدة أساسية. كل مهارة تبني على السابقة، مما يخلق مسار تعلم منظم.",
      pillars: {
        programming: {
          title: "البرمجة الحاسوبية",
          skills: {
            imperative: {
              name: "البرمجة الحتمية",
              project: "Rush Arkanoid",
              description: "أعد إنشاء لعبة كسر الطوب الكلاسيكية من الثمانينيات",
            },
            functional: {
              name: "البرمجة الوظيفية",
              project: "A-maze-ing",
              description: "حل المتاهات باستخدام اللغات الوظيفية",
            },
            oop: {
              name: "البرمجة الكائنية التوجه",
              project: "Pool C++",
              description: "غمر لمدة أسبوعين في مفاهيم البرمجة الكائنية",
            },
            algorithms: {
              name: "الخوارزميات والذكاء الاصطناعي",
              project: "Gomoku",
              description: "تنفيذ نظرية الألعاب والذكاء الاصطناعي",
            },
            graphics: {
              name: "برمجة الرسوميات",
              project: "1337run",
              description: "لعبة OpenGL مستوحاة من Temple Run",
            },
          },
        },
        innovation: {
          title: "الابتكار",
          skills: {
            creativity: {
              name: "التكيف والإبداع",
              project: "مشروع مفتوح",
              description: "مشروع إبداعي يختاره الطالب",
            },
            web: {
              name: "تطوير الويب",
              project: "Red Tetris",
              description: "تنفيذ اتجاهات الويب الحديثة",
            },
            integration: {
              name: "التكامل التقني",
              project: "مشروع Docker",
              description: "المحاكاة الافتراضية والحاويات",
            },
          },
        },
        infrastructure: {
          title: "البنية التحتية",
          skills: {
            system: {
              name: "برمجة النظام",
              project: "42sh",
              description: "إعادة بناء shell Unix من الصفر",
            },
            network: {
              name: "إدارة الشبكة",
              project: "شبكة افتراضية",
              description: "إعداد شبكة الشركة",
            },
            security: {
              name: "الأمان",
              project: "تنفيذ الفيروس",
              description: "تقنيات الأمان والحماية",
            },
            bigData: {
              name: "البيانات الضخمة",
              project: "تحدي البيانات الضخمة",
              description: "تحليل مجموعات البيانات الكبيرة",
            },
            parallel: {
              name: "الحوسبة المتوازية",
              project: "Plazza",
              description: "محاكاة إدارة البيتزا",
            },
          },
        },
      },
      internships: {
        title: "التدريب الإجباري",
        description:
          "أكمل 10-12 شهراً من الخبرة العملية في الصناعة لتطبيق مهاراتك في سيناريوهات العالم الحقيقي وبناء الشبكات المهنية.",
        badge: "10-12 شهر • شركاء الصناعة • مشاريع حقيقية",
      },
      prerequisites: "المتطلبات المسبقة:",
    },

    // Campuses
    campuses: {
      title: "حرمنا الجامعي",
      subtitle:
        "استكشف حرمنا الجامعي الثلاثة الحديثة عبر المغرب، كل منها يوفر وصولاً على مدار الساعة ومرافق متطورة لطلابنا.",
      locations: {
        khouribga: {
          name: "خريبكة",
          description:
            "حرمنا الجامعي الأول، الواقع في خريبكة، مجهز بـ 300 جهاز iMac ومرافق حديثة. يقع بالقرب من الدار البيضاء، مما يجعله سهل الوصول إليه.",
          address: "خريبكة، المغرب",
          equipment: "300 جهاز iMac",
          features: ["وصول 24/7", "مناطق الألعاب", "كافتيريا", "غرف الاجتماعات"],
        },
        benguerir: {
          name: "بن جرير",
          description:
            "يقع في جامعة محمد السادس متعددة التخصصات التقنية في بن جرير، يوفر هذا الحرم الجامعي بيئة تعلم فريدة مع مرافق حديثة ومجتمع نابض بالحياة.",
          address: "جامعة محمد السادس متعددة التخصصات التقنية، بن جرير، المغرب",
          equipment: "عدة أجهزة iMac",
          features: ["وصول 24/7", "التكامل الجامعي", "مرافق البحث", "مركز الابتكار"],
        },
        tetouan: {
          name: "تطوان (المتوسط)",
          description:
            "حرمنا الجامعي الأحدث في تطوان (المتوسط) يضم 210 جهاز iMac ويقع استراتيجياً بالقرب من شركات الاستعانة بمصادر خارجية، مما يوفر اتصالات صناعية ممتازة.",
          address: "تطوان، المغرب",
          equipment: "210 جهاز iMac",
          features: ["وصول 24/7", "قرب صناعي", "مساحات تعاونية", "بنية تحتية حديثة"],
        },
        rabat: {
          name: "الرباط",
          description: "حرمنا الجامعي الأول، الواقع في خريبكة، مجهز بـ 300 جهاز iMac ومرافق حديثة. يقع بالقرب من الدار البيضاء، مما يجعله سهل الوصول إليه.",
          address: "الرباط، المغرب",
          equipment: "300 جهاز iMac",
          features: ["وصول 24/7", "مناطق الألعاب", "كافتيريا", "غرف الاجتماعات"],
        },
      },
      gallery: {
        title: "معرض المرافق",
        subtitle: "قم بجولة افتراضية في مرافقنا الحديثة عبر الحرم الجامعي الثلاثة",
        campusLabels: {
          khouribga: "حرم خريبكة",
          benguerir: "حرم بن جرير",
          tetouan: "حرم تطوان",
          rabat: "حرم الرباط",
        },
      },
      overview: {
        alwaysOpen: {
          title: "مفتوح دائماً",
          description:
            "جميع حرمنا الجامعي مفتوح 24 ساعة في اليوم، 7 أيام في الأسبوع، مما يسمح للطلاب بالتعلم بوتيرتهم الخاصة وجدولهم الزمني.",
        },
        equipment: {
          title: "معدات حديثة",
          description: "حرمنا الجامعي مجهز بمئات أجهزة iMac، مما يوفر للطلاب الأدوات التي يحتاجونها للتعلم والإبداع.",
        },
        collaboration: {
          title: "مساحات تعاونية",
          description: "محطات عمل مفتوحة، غرف اجتماعات، ومناطق مشتركة مصممة لتعزيز التعلم بين الأقران والتعاون.",
        },
        amenities: {
          title: "وسائل راحة إضافية",
          description:
            "مناطق الألعاب، الكافتيريات، ومساحات الترفيه لمساعدة الطلاب على الاسترخاء وإعادة الشحن بين جلسات البرمجة.",
        },
        strategic: {
          title: "مواقع استراتيجية",
          description:
            "حرم جامعي موضوع استراتيجياً عبر المغرب في خريبكة، بن جرير، وتطوان، مما يوفر إمكانية الوصول للطلاب على مستوى البلاد.",
        },
      },
      accessNote: "جميع الحرم الجامعي مفتوح 24/7",
    },

    // Admissions
    admissions: {
      title: "عملية القبول",
      subtitle:
        "رحلتك لتصبح طالباً في 1337 تتبع مساراً فريداً مصمماً لتحديد حلالي المشاكل والمفكرين المبدعين، بغض النظر عن الخبرة السابقة في البرمجة.",
      steps: {
        register: {
          title: "التسجيل عبر الإنترنت",
          description: "أنشئ حساباً على منصة 1337 وأكمل ملفك الشخصي بالمعلومات الشخصية والخلفية.",
          details: [
            "لا توجد خبرة سابقة في البرمجة مطلوبة",
            "مفتوح للأعمار 18-30",
            "هوية صالحة وبريد إلكتروني مطلوب",
            "إكمال نموذج المعلومات الأساسية",
          ],
        },
        tests: {
          title: "اختبارات عبر الإنترنت",
          description: "أكمل سلسلة من تقييمات المنطق والذاكرة المصممة لتقييم قدراتك على حل المشاكل.",
          details: [
            "ألغاز منطقية والتعرف على الأنماط",
            "اختبارات الذاكرة والانتباه",
            "لا توجد معرفة تقنية مطلوبة",
            "تقييمات موقوتة",
          ],
        },
        checkin: {
          title: "تسجيل الوصول للحرم الجامعي",
          description: "قم بزيارة أحد حرمنا الجامعي شخصياً للتحقق من هويتك وتأكيد اهتمامك بالبرنامج.",
          details: [
            "زيارة شخصية إجبارية",
            "أحضر هوية صالحة",
            "جولة في مرافق الحرم الجامعي",
            "التقي بالطلاب الحاليين والموظفين",
          ],
        },
        pool: {
          title: "المسبح",
          description: "غمر مكثف لمدة 4 أسابيع في البرمجة حيث ستتعلم أساسيات البرمجة من خلال التعلم بين الأقران.",
          details: [
            "4 أسابيع من التعلم المكثف",
            "مشاريع وتحديات يومية",
            "تقييمات الأقران والتغذية الراجعة",
            "امتحانات أسبوعية لتتبع التقدم",
          ],
        },
        admission: {
          title: "الاختيار النهائي",
          description: "بناءً على أدائك خلال المسبح، ستتلقى قراراً بشأن قبولك في البرنامج الكامل.",
          details: [
            "اختيار قائم على الأداء",
            "تقييم المهارات التقنية",
            "تقييم التعاون بين الأقران",
            "اعتبار التقدم والنمو",
          ],
        },
      },
      timeline: {
        registrationPeriod: "فترة التسجيل",
        registrationDesc:
          "التسجيل مفتوح على مدار السنة. تحقق من الموقع الإلكتروني لتواريخ المسبح القادمة وخطط لطلبك وفقاً لذلك.",
        eligibility: "الأهلية",
        eligibilityDesc:
          "مفتوح للأعمار 18-30، مع استثناءات لطلاب المدارس الثانوية. لا توجد معرفة تقنية مسبقة أو خلفية تعليمية محددة مطلوبة.",
        testFormat: "تنسيق الاختبار",
        testFormatDesc:
          "تركز التقييمات عبر الإنترنت على التفكير المنطقي والتعرف على الأنماط ومهارات حل المشاكل، وليس على المعرفة التقنية.",
        preparation: "التحضير",
        preparationDesc:
          "لا حاجة لتحضير محدد. الاختبارات مصممة لتقييم القدرة الطبيعية وعمليات التفكير بدلاً من المهارات المكتسبة.",
        campusOptions: "خيارات الحرم الجامعي",
        campusOptionsDesc:
          "يمكنك تسجيل الوصول في أي من حرمنا الجامعي الثلاثة: خريبكة، بن جرير، أو تطوان. اختر الأنسب لك.",
        scheduling: "الجدولة",
        schedulingDesc:
          "يتم الإعلان عن تواريخ تسجيل الوصول على الموقع الإلكتروني. يجب إكمال هذه الخطوة قبل أن تكون مؤهلاً للمسبح.",
        poolStructure: "هيكل المسبح",
        poolStructureDesc:
          "المسبح هو معسكر تدريبي للبرمجة لمدة 4 أسابيع مع مشاريع يومية وتقييمات الأقران وامتحانات أسبوعية. ستتعلم أساسيات البرمجة من خلال الممارسة العملية.",
        accommodation: "السكن",
        accommodationDesc:
          "السكن على طراز المخيم الصيفي متاح (منفصل حسب الجنس) أو يمكنك الاستئجار في مكان قريب. في بن جرير، متوسط الإيجار الشهري حوالي 1500 درهم.",
        selectionCriteria: "معايير الاختيار",
        selectionCriteriaDesc:
          "الاختيار يعتمد على أدائك أثناء المسبح، بما في ذلك إكمال المشاريع وتقييمات الأقران ونتائج الامتحانات.",
        nextSteps: "الخطوات التالية",
        nextStepsDesc:
          "إذا تم اختيارك، ستبدأ البرنامج الكامل فوراً. المنهج قائم على المشاريع وذاتي الوتيرة، مع تدريب إجباري لاحقاً في البرنامج.",
      },
      keyPoints: "النقاط الرئيسية:",
      keyInfo: {
        tuition: {
          title: "رسوم التعليم",
          description: "1337 مجاني تماماً. الطلاب يحتاجون فقط لتغطية الضمان الاجتماعي ونفقات المعيشة.",
        },
        age: {
          title: "الفئة العمرية",
          description: "مفتوح للمتقدمين بين 18 و 30 عاماً، مع استثناءات لطلاب المدارس الثانوية.",
        },
        duration: {
          title: "أسابيع المسبح",
          description: "المسبح هو غمر مكثف لمدة 4 أسابيع في البرمجة يعمل كعملية اختيار نهائية.",
        },
      },
      faq: {
        title: "الأسئلة الشائعة",
        subtitle: "اعثر على إجابات للأسئلة الشائعة حول عملية القبول وبرنامجنا",
        contactCta: "لا تزال لديك أسئلة حول عملية القبول؟",
        contactButton: "اتصل بالقبول",
        items: [
          {
            question: "هل أحتاج إلى خبرة سابقة في البرمجة للتقديم؟",
            answer:
              "لا، 1337 مصمم للمبتدئين بدون خلفية تقنية سابقة. عملية الاختيار لدينا تركز على قدراتك في حل المشاكل وإمكانية التعلم، وليس على المعرفة التقنية الموجودة.",
          },
          {
            question: "هل هناك متطلب عمري؟",
            answer:
              "نعم، يجب أن يكون المتقدمون بين 18 و 30 عاماً. هناك استثناءات لطلاب المدارس الثانوية الذين يمكنهم تقديم الوثائق المناسبة.",
          },
          {
            question: "كم تكلف الدراسة في 1337؟",
            answer:
              "1337 مجاني تماماً. لا توجد رسوم دراسية أو تكاليف مخفية. الطلاب يحتاجون فقط لتغطية الضمان الاجتماعي ونفقات المعيشة.",
          },
          {
            question: "ما هو المسبح وكيف يعمل؟",
            answer:
              "المسبح هو غمر مكثف لمدة 4 أسابيع في البرمجة يعمل كعملية اختيار نهائية. خلال هذه الفترة، ستعمل على مشاريع يومية، وتشارك في تقييمات الأقران، وتأخذ امتحانات أسبوعية لإثبات قدرتك على البرنامج.",
          },
          {
            question: "أين تقع الحرم الجامعي؟",
            answer:
              "لدينا ثلاثة حرم جامعي عبر المغرب: خريبكة (بالقرب من الدار البيضاء)، بن جرير (في جامعة محمد السادس متعددة التخصصات)، وتطوان (حرم المتوسط).",
          },
          {
            question: "هل يتم توفير السكن أثناء المسبح؟",
            answer:
              "السكن على طراز المخيم الصيفي متاح (منفصل حسب الجنس) أثناء المسبح. بدلاً من ذلك، يمكنك الاستئجار في مكان قريب. في بن جرير، متوسط الإيجار الشهري حوالي 1500 درهم.",
          },
          {
            question: "ما نوع الشهادة التي سأحصل عليها عند التخرج؟",
            answer:
              "الخريجون يحصلون على شهادة دولية معترف بها من شبكة 42، بدلاً من دبلوم تقليدي. هذه الشهادة مقدرة من قبل أصحاب العمل لتركيزها على المهارات العملية وقدرات حل المشاكل.",
          },
          {
            question: "هل هناك فرص تدريب؟",
            answer: "نعم، المنهج يتضمن 10-12 شهراً من التدريب الإجباري لتوفير خبرة العالم الحقيقي والاتصالات الصناعية.",
          },
        ],
      },
    },

    // Testimonials
    testimonials: {
      title: "أصوات الطلاب",
      subtitle:
        "استمع إلى طلابنا وخريجينا يتحدثون عن رحلتهم التحويلية في 1337 وكيف شكلت مسيراتهم المهنية في التكنولوجيا.",
      students: [
        {
          name: "شيماء",
          role: "طالبة، حرم خريبكة",
          quote:
            "البرمجة تعني الحرية بالنسبة لي. 1337 لا تعلم الحلول فقط، بل تعلم الأدوات لحل أي مشكلة. نموذج التعلم بين الأقران دفعني للنمو بطرق لم يكن بإمكان التعليم التقليدي تحقيقها.",
        },
        {
          name: "أمين",
          role: "خريج، حرم بن جرير",
          quote:
            "البرنامج المرن في 1337 ساعدني في اكتشاف شغفي بالأمن السيبراني. الآن أبني شركتي الناشئة في هذا المجال. المنهج القائم على المشاريع أعدني لتحديات العالم الحقيقي.",
        },
        {
          name: "فاطمة",
          role: "طالبة، حرم تطوان",
          quote:
            "لم تكن لدي أي خبرة في البرمجة قبل 1337. المجتمع الداعم والوصول على مدار الساعة للمرافق سمح لي بالتعلم بوتيرتي الخاصة. الآن أتعاون في مشاريع لم أكن أعتقد أنها ممكنة.",
        },
        {
          name: "يوسف",
          role: "خريج، حرم خريبكة",
          quote:
            "فرص التدريب من خلال 1337 ربطتني مباشرة بالصناعة. حصلت على منصب في شركة تقنية كبرى قبل حتى إكمال البرنامج. المهارات العملية صنعت كل الفرق.",
        },
      ],
      successStories: {
        title: "قصص النجاح",
        subtitle:
          "اكتشف كيف يترك خريجو 1337 بصمتهم في صناعة التكنولوجيا، من الشركات الكبرى إلى الشركات الناشئة المبتكرة",
        categories: {
          all: "جميع القصص",
          career: "نجاح المهنة",
          startup: "ريادة الأعمال",
          research: "البحث",
        },
        keyAchievement: "الإنجاز الرئيسي",
        skillsUsed: "المهارات المستخدمة:",
        cta: {
          title: "مستعد لكتابة قصة نجاحك؟",
          description: "انضم إلى الجيل القادم من خريجي 1337 الذين يشكلون مستقبل التكنولوجيا في المغرب وما وراءه.",
          button: "ابدأ رحلتك",
        },
      },
    },

    // Footer
    footer: {
      description:
        "مدرسة البرمجة المجانية الرائدة في المغرب. التعلم بين الأقران، منهج قائم على المشاريع، ووصول على مدار الساعة للابتكار.",
      quickLinks: "روابط سريعة",
      campuses: "حرمنا الجامعي",
      contact: "تواصل معنا",
      copyright: "مدرسة البرمجة 1337. جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      systemStatus: "> system.status: متصل",
    },

    // Common
    common: {
      readMore: "اقرأ المزيد",
      learnMore: "تعلم المزيد",
      getStarted: "ابدأ",
      viewAll: "عرض الكل",
      loading: "جاري التحميل...",
      error: "حدث خطأ",
      success: "نجح",
    },
  },
}

export const imacsCount = +parseInt(content.en.campuses.locations.khouribga.equipment.split(" ")[0]) + parseInt(content.en.campuses.locations.benguerir.equipment.split(" ")[0]) + parseInt(content.en.campuses.locations.tetouan.equipment.split(" ")[0]) + parseInt(content.en.campuses.locations.rabat.equipment.split(" ")[0])

export function getContent(lang: Language) {
  return content[lang] || content.en
}

