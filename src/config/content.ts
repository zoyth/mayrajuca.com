// ABOUTME: Site content configuration with all text in Portuguese, English, French and Spanish.
// ABOUTME: Defines metadata, hero, about sections, and portfolio data.

export type Locale = 'pt' | 'en' | 'fr' | 'es';

export const locales: Locale[] = ['pt', 'en', 'fr', 'es'];
export const defaultLocale: Locale = 'pt';

export const siteContent = {
  metadata: {
    siteName: 'Mayra Jucá — Plural MJ',
    siteUrl: 'https://www.mayrajuca.com',
    description: {
      pt: 'Portfólio de Mayra Jucá — jornalista, cineasta e pesquisadora. Projetos de memória, produção audiovisual e ações formativas.',
      en: 'Portfolio of Mayra Jucá — journalist, filmmaker and researcher. Memory projects, audiovisual production and training initiatives.',
      fr: 'Portfolio de Mayra Jucá — journaliste, cinéaste et chercheuse. Projets de mémoire, production audiovisuelle et actions de formation.',
      es: 'Portafolio de Mayra Jucá — periodista, cineasta e investigadora. Proyectos de memoria, producción audiovisual e iniciativas de formación.',
    },
  },
  hero: {
    headline: {
      pt: 'Plural MJ',
      en: 'Plural MJ',
      fr: 'Plural MJ',
      es: 'Plural MJ',
    },
    subheadline: {
      pt: 'Memória · Audiovisual · Formação',
      en: 'Memory · Audiovisual · Training',
      fr: 'Mémoire · Audiovisuel · Formation',
      es: 'Memoria · Audiovisual · Formación',
    },
  },
  about: {
    company: {
      pt: 'Fundada em 2023, a Plural MJ é uma produtora dedicada à gestão de projetos de memória, ações formativas e produção audiovisual.',
      en: 'Founded in 2023, Plural MJ is a production company dedicated to memory projects, training initiatives and audiovisual production.',
      fr: 'Fondée en 2023, Plural MJ est une société de production dédiée aux projets de mémoire, aux actions de formation et à la production audiovisuelle.',
      es: 'Fundada en 2023, Plural MJ es una productora dedicada a proyectos de memoria, iniciativas de formación y producción audiovisual.',
    },
    companyExtended: {
      pt: 'À frente da empresa está a jornalista, cineasta e pesquisadora Mayra Jucá, cuja carreira no terceiro setor e no campo da comunicação e cultura, com foco em audiovisual e memória, completou 30 anos em 2024.',
      en: 'The company is led by journalist, filmmaker and researcher Mayra Jucá, whose career in the nonprofit sector and in the field of communication and culture, with a focus on audiovisual and memory, reached 30 years in 2024.',
      fr: 'L\'entreprise est dirigée par la journaliste, cinéaste et chercheuse Mayra Jucá, dont la carrière dans le secteur associatif et dans le domaine de la communication et de la culture, avec un accent sur l\'audiovisuel et la mémoire, a atteint 30 ans en 2024.',
      es: 'La empresa está liderada por la periodista, cineasta e investigadora Mayra Jucá, cuya carrera en el tercer sector y en el campo de la comunicación y la cultura, con enfoque en audiovisual y memoria, cumplió 30 años en 2024.',
    },
    bio: {
      pt: 'Mayra Jucá é doutora e mestre em História, Política e Bens Culturais pelo CPDOC/FGV, e em 2026 iniciou o Pós-doutorado no Programa de Pós-Graduação em Cinema e Audiovisual da UFF (Universidade Federal Fluminense), com foco em cinema experimental, história do cinema não canônico brasileiro e filmografia do movimento Superoitista no Rio de Janeiro.',
      en: 'Mayra Jucá holds a PhD and a Master\'s degree in History, Politics and Cultural Heritage from CPDOC/FGV. In 2026, she began her Post-Doctoral research at the Graduate Program in Film and Audiovisual at UFF (Universidade Federal Fluminense), focusing on experimental cinema, the history of non-canonical Brazilian cinema and the filmography of the Super-8 movement in Rio de Janeiro.',
      fr: 'Mayra Jucá est docteure et titulaire d\'un master en Histoire, Politique et Biens culturels du CPDOC/FGV. En 2026, elle a entamé son post-doctorat au Programme de troisième cycle en Cinéma et Audiovisuel de l\'UFF (Universidade Federal Fluminense), avec un accent sur le cinéma expérimental, l\'histoire du cinéma brésilien non canonique et la filmographie du mouvement Superoitista à Rio de Janeiro.',
      es: 'Mayra Jucá es doctora y magíster en Historia, Política y Bienes Culturales por el CPDOC/FGV. En 2026, inició su investigación posdoctoral en el Programa de Posgrado en Cine y Audiovisual de la UFF (Universidade Federal Fluminense), con enfoque en cine experimental, historia del cine brasileño no canónico y filmografía del movimiento Superoitista en Río de Janeiro.',
    },
    bioExtended: {
      pt: 'Entre 2021 e 2022, foi bolsista CAPES Print no Centre for Oral History and Digital Storytelling na Concordia University, em Montreal, onde permanece como pesquisadora afiliada. É integrante do Laboratório de Estudos da Cultura Visual do CPDOC/FGV e membro da rede de pesquisa BUG 404 sobre narrativas interativas. Sua atuação é marcada por uma abordagem multidisciplinar e pelo uso da história oral e do audiovisual a serviço de causas sociais e pesquisas nos campos da cultura e da política.',
      en: 'Between 2021 and 2022, she was a CAPES Print fellow at the Centre for Oral History and Digital Storytelling at Concordia University in Montreal, where she remains an affiliated researcher. She is a member of the Visual Culture Studies Lab at CPDOC/FGV and of the BUG 404 research network on interactive narratives. Her work is characterized by a multidisciplinary approach and the use of oral history and audiovisual media in service of social causes and research in the fields of culture and politics.',
      fr: 'Entre 2021 et 2022, elle a été boursière CAPES Print au Centre for Oral History and Digital Storytelling de Concordia University à Montréal, où elle reste chercheuse affiliée. Elle est membre du Laboratoire d\'études de la culture visuelle du CPDOC/FGV et du réseau de recherche BUG 404 sur les narratives interactives. Son travail se caractérise par une approche multidisciplinaire et l\'utilisation de l\'histoire orale et de l\'audiovisuel au service de causes sociales et de recherches dans les domaines de la culture et de la politique.',
      es: 'Entre 2021 y 2022, fue becaria CAPES Print en el Centre for Oral History and Digital Storytelling de Concordia University en Montreal, donde continúa como investigadora afiliada. Es integrante del Laboratorio de Estudios de Cultura Visual del CPDOC/FGV y miembro de la red de investigación BUG 404 sobre narrativas interactivas. Su trabajo se caracteriza por un enfoque multidisciplinario y el uso de la historia oral y el audiovisual al servicio de causas sociales e investigaciones en los campos de la cultura y la política.',
    },
    education: [
      {
        degree: { pt: 'Doutorado em História, Política e Bens Culturais', en: 'PhD in History, Politics and Cultural Heritage', fr: 'Doctorat en Histoire, Politique et Biens culturels', es: 'Doctorado en Historia, Política y Bienes Culturales' },
        institution: 'CPDOC / Fundação Getúlio Vargas',
        year: '2024',
        thesis: {
          pt: 'Tomadas da cidade em pleno AI-5: "Pira" e o superoitismo experimental urbano',
          en: 'City takes under AI-5: "Pira" and experimental urban Super-8 filmmaking',
          fr: 'Prises de vue de la ville en plein AI-5 : "Pira" et le superoitisme expérimental urbain',
          es: 'Tomas de la ciudad en pleno AI-5: "Pira" y el superoitismo experimental urbano',
        },
      },
      {
        degree: { pt: 'Mestrado em Bens Culturais e Projetos Sociais', en: 'Master\'s in Cultural Heritage and Social Projects', fr: 'Master en Biens culturels et Projets sociaux', es: 'Maestría en Bienes Culturales y Proyectos Sociales' },
        institution: 'CPDOC / Fundação Getúlio Vargas',
        year: '2014',
        thesis: {
          pt: 'Vozes ativas das favelas 2.0: autorrepresentações midiáticas numa rede de comunicadores periféricos',
          en: 'Active voices from the favelas 2.0: media self-representations in a network of peripheral communicators',
          fr: 'Voix actives des favelas 2.0 : auto-représentations médiatiques dans un réseau de communicateurs périphériques',
          es: 'Voces activas de las favelas 2.0: autorrepresentaciones mediáticas en una red de comunicadores periféricos',
        },
      },
      {
        degree: { pt: 'Bacharelado em Comunicação Social (Rádio e TV)', en: 'Bachelor\'s in Social Communication (Radio & TV)', fr: 'Licence en Communication sociale (Radio et TV)', es: 'Licenciatura en Comunicación Social (Radio y TV)' },
        institution: { pt: 'Escola de Comunicação da UFRJ', en: 'UFRJ School of Communication', fr: 'École de Communication de l\'UFRJ', es: 'Escuela de Comunicación de la UFRJ' },
        year: '1997',
      },
    ],
    languages: [
      { lang: { pt: 'Português', en: 'Portuguese', fr: 'Portugais', es: 'Portugués' }, level: { pt: 'Nativo', en: 'Native', fr: 'Langue maternelle', es: 'Nativo' } },
      { lang: { pt: 'Inglês', en: 'English', fr: 'Anglais', es: 'Inglés' }, level: { pt: 'Fluente (IELTS Academic)', en: 'Fluent (IELTS Academic)', fr: 'Courant (IELTS Academic)', es: 'Fluido (IELTS Academic)' } },
      { lang: { pt: 'Espanhol', en: 'Spanish', fr: 'Espagnol', es: 'Español' }, level: { pt: 'Avançado', en: 'Advanced', fr: 'Avancé', es: 'Avanzado' } },
      { lang: { pt: 'Francês', en: 'French', fr: 'Français', es: 'Francés' }, level: { pt: 'Intermediário', en: 'Intermediate', fr: 'Intermédiaire', es: 'Intermedio' } },
    ],
    educationTitle: { pt: 'Formação Acadêmica', en: 'Education', fr: 'Formation académique', es: 'Formación académica' },
    languagesTitle: { pt: 'Idiomas', en: 'Languages', fr: 'Langues', es: 'Idiomas' },
  },
  nav: {
    home: { pt: 'Início', en: 'Home', fr: 'Accueil', es: 'Inicio' },
    sobre: { pt: 'Sobre', en: 'About', fr: 'À propos', es: 'Acerca de' },
    editorial: { pt: 'Editorial', en: 'Editorial', fr: 'Éditorial', es: 'Editorial' },
    audiovisual: { pt: 'Audiovisual', en: 'Audiovisual', fr: 'Audiovisuel', es: 'Audiovisual' },
    eventos: { pt: 'Eventos', en: 'Events', fr: 'Événements', es: 'Eventos' },
    formacao: { pt: 'Formação', en: 'Teaching', fr: 'Formation', es: 'Formación' },
    trajetoria: { pt: 'Trajetória', en: 'Career', fr: 'Parcours', es: 'Trayectoria' },
    contato: { pt: 'Contato', en: 'Contact', fr: 'Contact', es: 'Contacto' },
  },
  areasTitle: {
    pt: 'Áreas de Atuação',
    en: 'Areas of Expertise',
    fr: 'Domaines d\'activité',
    es: 'Áreas de actuación',
  },
  seeMore: {
    pt: 'Ver mais →',
    en: 'See more →',
    fr: 'Voir plus →',
    es: 'Ver más →',
  },
  featured: {
    label: { pt: 'Destaque', en: 'Featured', fr: 'En vedette', es: 'Destacado' },
  },
  article: {
    title: {
      pt: 'Sobre compartilhar histórias e o desafio criativo de mantê-las vivas',
      en: 'On sharing stories and the creative challenge of keeping them alive',
      fr: 'Sur le partage des histoires et le défi créatif de les maintenir vivantes',
      es: 'Sobre compartir historias y el desafío creativo de mantenerlas vivas',
    },
    subtitle: {
      pt: 'Entrevista com Steven High, fundador do Centre for Oral History and Digital Storytelling na Concordia University, em Montreal',
      en: 'Interview with Steven High, founder of the Centre for Oral History and Digital Storytelling at Concordia University, Montreal',
      fr: 'Entretien avec Steven High, fondateur du Centre for Oral History and Digital Storytelling à Concordia University, Montréal',
      es: 'Entrevista con Steven High, fundador del Centre for Oral History and Digital Storytelling en Concordia University, Montreal',
    },
    author: 'Mayra Coelho Jucá dos Santos',
    authorAffiliation: 'Fundação Getúlio Vargas / CPDOC',
    journal: 'História Oral',
    volume: '25',
    issue: '2',
    year: '2022',
    pages: '223–238',
    section: { pt: 'Entrevistas', en: 'Interviews', fr: 'Entretiens', es: 'Entrevistas' },
    publishedDate: { pt: '15 de dezembro de 2022', en: 'December 15, 2022', fr: '15 décembre 2022', es: '15 de diciembre de 2022' },
    doi: '10.51880/ho.v25i2.1300',
    issn: '2358-1654',
    license: 'Creative Commons BY-NC-ND 4.0',
    keywords: {
      pt: ['Steven High', 'COHDS', 'Montreal Life Stories', 'Pesquisa-criação', 'Narrativas digitais', 'Autoridade compartilhada'],
      en: ['Steven High', 'COHDS', 'Montreal Life Stories', 'Research-creation', 'Digital narratives', 'Shared authority'],
      fr: ['Steven High', 'COHDS', 'Montreal Life Stories', 'Recherche-création', 'Narratives numériques', 'Autorité partagée'],
      es: ['Steven High', 'COHDS', 'Montreal Life Stories', 'Investigación-creación', 'Narrativas digitales', 'Autoridad compartida'],
    },
    abstract: {
      pt: 'Entrevista com o historiador oral canadense Steven High, autor de diversos livros premiados e fundador do Centre for Oral History and Digital Storytelling (COHDS) na Concordia University, criado em 2006. A discussão aborda a abordagem de High à história oral, a metodologia de "pesquisa-criação" desenvolvida ao longo de 15 anos, e sua perspectiva sobre história oral como "uma prática interdisciplinar e criativa" em vez de metodologia disciplinar.',
      en: 'Interview with Canadian oral historian Steven High, author of numerous award-winning books and founder of the Centre for Oral History and Digital Storytelling (COHDS) at Concordia University, established in 2006. The discussion addresses High\'s approach to oral history, the "research-creation" methodology developed over 15 years, and his perspective on oral history as "an interdisciplinary and creative practice" rather than a disciplinary methodology.',
      fr: 'Entretien avec l\'historien oral canadien Steven High, auteur de nombreux livres primés et fondateur du Centre for Oral History and Digital Storytelling (COHDS) à Concordia University, créé en 2006. La discussion porte sur l\'approche de High en matière d\'histoire orale, la méthodologie de « recherche-création » développée sur 15 ans, et sa perspective sur l\'histoire orale comme « une pratique interdisciplinaire et créative » plutôt qu\'une méthodologie disciplinaire.',
      es: 'Entrevista con el historiador oral canadiense Steven High, autor de numerosos libros premiados y fundador del Centre for Oral History and Digital Storytelling (COHDS) en Concordia University, creado en 2006. La discusión aborda el enfoque de High sobre la historia oral, la metodología de "investigación-creación" desarrollada a lo largo de 15 años, y su perspectiva sobre la historia oral como "una práctica interdisciplinaria y creativa" en lugar de una metodología disciplinaria.',
    },
    aboutInterviewee: {
      pt: 'Steven High é historiador oral canadense, autor de diversos livros premiados e fundador do Centre for Oral History and Digital Storytelling (COHDS) na Concordia University, criado em 2006.',
      en: 'Steven High is a Canadian oral historian, author of numerous award-winning books and founder of the Centre for Oral History and Digital Storytelling (COHDS) at Concordia University, established in 2006.',
      fr: 'Steven High est un historien oral canadien, auteur de nombreux livres primés et fondateur du Centre for Oral History and Digital Storytelling (COHDS) à Concordia University, créé en 2006.',
      es: 'Steven High es un historiador oral canadiense, autor de numerosos libros premiados y fundador del Centre for Oral History and Digital Storytelling (COHDS) en Concordia University, creado en 2006.',
    },
  },
  book: {
    title: 'O Super-8 no AI-5',
    subtitle: {
      pt: 'Memórias de cinema e juventude na década de 1970',
      en: 'Memories of cinema and youth in the 1970s',
      fr: 'Mémoires de cinéma et de jeunesse dans les années 1970',
      es: 'Memorias de cine y juventud en la década de 1970',
    },
    author: 'Mayra Jucá',
    publisher: 'Letra Capital',
    description: {
      pt: 'O trabalho combina pesquisa fílmica, análise documental, bibliografia e entrevistas. A autora utiliza conteúdo audiovisual como ferramenta de ativação de memória das experiências juvenis durante os anos da ditadura militar no Brasil.',
      en: 'The work combines film research, documentary analysis, bibliography and interviews. The author uses audiovisual content as a memory activation tool for youth experiences during Brazil\'s military dictatorship years.',
      fr: 'Ce travail combine recherche filmique, analyse documentaire, bibliographie et entretiens. L\'auteure utilise le contenu audiovisuel comme outil d\'activation de la mémoire des expériences de la jeunesse pendant les années de la dictature militaire au Brésil.',
      es: 'El trabajo combina investigación fílmica, análisis documental, bibliografía y entrevistas. La autora utiliza contenido audiovisual como herramienta de activación de la memoria de las experiencias juveniles durante los años de la dictadura militar en Brasil.',
    },
    quote: {
      pt: '"Referências a câmeras como armas aparecem em depoimentos de superoitistas e em diversos textos dos anos 1970, incluindo o trabalho do cineasta Sérgio Péo: o equipamento funcionava como instrumento decolonizador..."',
      en: '"Camera references as weapons appear in statements from Super-8 filmmakers and various 1970s texts, including filmmaker Sérgio Péo\'s work: equipment functioned as a decolonizing instrument..."',
      fr: '« Les références aux caméras comme armes apparaissent dans les témoignages des superoitistes et dans divers textes des années 1970, y compris le travail du cinéaste Sérgio Péo : l\'équipement fonctionnait comme un instrument décolonisateur... »',
      es: '"Las referencias a las cámaras como armas aparecen en testimonios de superoitistas y en diversos textos de los años 1970, incluyendo el trabajo del cineasta Sérgio Péo: el equipo funcionaba como instrumento decolonizador..."',
    },
    launches: [
      {
        date: { pt: '15 de junho de 2025', en: 'June 15, 2025', fr: '15 juin 2025', es: '15 de junio de 2025' },
        location: { pt: 'Bienal do Livro do Rio de Janeiro', en: 'Rio de Janeiro Book Biennial', fr: 'Biennale du livre de Rio de Janeiro', es: 'Bienal del Libro de Río de Janeiro' },
      },
      {
        date: { pt: '8 de agosto de 2025', en: 'August 8, 2025', fr: '8 août 2025', es: '8 de agosto de 2025' },
        location: { pt: 'Estação Net Rio, Botafogo — sessão de autógrafos', en: 'Estação Net Rio cinema, Botafogo — book signing', fr: 'Estação Net Rio, Botafogo — séance de dédicaces', es: 'Estação Net Rio, Botafogo — sesión de autógrafos' },
      },
      {
        date: { pt: '16 de agosto de 2025', en: 'August 16, 2025', fr: '16 août 2025', es: '16 de agosto de 2025' },
        location: { pt: 'Soberano Bar-museu, São Paulo — 12º Festival Super-OFF', en: 'Soberano Bar-museu, São Paulo — 12th Festival Super-OFF', fr: 'Soberano Bar-museu, São Paulo — 12e Festival Super-OFF', es: 'Soberano Bar-museu, São Paulo — 12.º Festival Super-OFF' },
      },
      {
        date: { pt: '30 de setembro a 3 de outubro de 2025', en: 'September 30 – October 3, 2025', fr: '30 septembre – 3 octobre 2025', es: '30 de septiembre – 3 de octubre de 2025' },
        location: { pt: 'XXVIII Encontro SOCINE, Universidade Federal do Pará, Belém', en: 'XXVIII SOCINE Conference, Federal University of Pará, Belém', fr: 'XXVIIIe Conférence SOCINE, Universidade Federal do Pará, Belém', es: 'XXVIII Encuentro SOCINE, Universidade Federal do Pará, Belém' },
      },
      {
        date: { pt: '6 de novembro de 2025', en: 'November 6, 2025', fr: '6 novembre 2025', es: '6 de noviembre de 2025' },
        location: { pt: 'IESP-UERJ, Rio de Janeiro — palestra e debate', en: 'IESP-UERJ, Rio de Janeiro — talk and debate', fr: 'IESP-UERJ, Rio de Janeiro — conférence et débat', es: 'IESP-UERJ, Río de Janeiro — charla y debate' },
      },
    ],
    press: [
      { outlet: 'O Globo', author: 'Ancelmo Góis', title: { pt: 'Bienal: Jornalista lança livro sobre a importância das câmeras Super-8 para retratar a juventude dos anos 1970', en: 'Biennial: Journalist launches book on the importance of Super-8 cameras for portraying 1970s youth', fr: 'Biennale : une journaliste publie un livre sur l\'importance des caméras Super-8 pour dépeindre la jeunesse des années 1970', es: 'Bienal: Periodista lanza libro sobre la importancia de las cámaras Super-8 para retratar a la juventud de los años 1970' } },
      { outlet: 'Associação Brasileira de Imprensa', title: { pt: 'Bienal: Jornalista lança livro sobre a importância das câmeras Super-8 para retratar a juventude dos anos 1970', en: 'Biennial: Journalist launches book on the importance of Super-8 cameras for portraying 1970s youth', fr: 'Biennale : une journaliste publie un livre sur l\'importance des caméras Super-8 pour dépeindre la jeunesse des années 1970', es: 'Bienal: Periodista lanza libro sobre la importancia de las cámaras Super-8 para retratar a la juventud de los años 1970' } },
      { outlet: 'Rádio Roquette Pinto', title: { pt: 'Mayra Jucá lança livro sobre cinema e juventude nos anos 1970', en: 'Mayra Jucá launches book on cinema and youth in the 1970s', fr: 'Mayra Jucá publie un livre sur le cinéma et la jeunesse dans les années 1970', es: 'Mayra Jucá lanza libro sobre cine y juventud en los años 1970' } },
      { outlet: 'Jornal do Commercio', title: { pt: 'Cinema e juventude contra a ditadura', en: 'Cinema and youth against the dictatorship', fr: 'Cinéma et jeunesse contre la dictature', es: 'Cine y juventud contra la dictadura' } },
      { outlet: 'TV Liberal (Bom Dia Pará)', title: { pt: 'Entrevista ao vivo — Encontro SOCINE, Belém', en: 'Live interview — SOCINE Conference, Belém', fr: 'Entretien en direct — Conférence SOCINE, Belém', es: 'Entrevista en vivo — Encuentro SOCINE, Belém' } },
    ],
    pressTitle: { pt: 'Na Imprensa', en: 'Press Coverage', fr: 'Dans la presse', es: 'En la prensa' },
    endorsements: [
      { name: 'Rubens Machado Jr.', affiliation: 'ECA-USP' },
      { name: 'Mariana Cavalcanti', affiliation: 'IESP-UERJ' },
      { name: 'Thaís Blank', affiliation: 'FGV-CPDOC' },
      { name: 'Patrícia Machado', affiliation: 'PUC-Rio' },
    ],
    purchase: {
      email: 'livrosuper8@gmail.com',
      store: { pt: 'Lojinha Cavídeo na Estação Net Rio, Rio de Janeiro', en: 'Lojinha Cavídeo at Estação Net Rio cinema, Rio de Janeiro', fr: 'Lojinha Cavídeo à l\'Estação Net Rio, Rio de Janeiro', es: 'Lojinha Cavídeo en Estação Net Rio, Río de Janeiro' },
    },
    launchesTitle: { pt: 'Lançamentos', en: 'Launch Events', fr: 'Lancements', es: 'Lanzamientos' },
    endorsementsTitle: { pt: 'Endossos', en: 'Endorsements', fr: 'Recommandations', es: 'Avales' },
    purchaseTitle: { pt: 'Onde Adquirir', en: 'Where to Buy', fr: 'Où acheter', es: 'Dónde adquirir' },
    publisherNote: { pt: 'Letra Capital — +28 anos como editora acadêmica.', en: 'Letra Capital — 28+ years as an academic publisher.', fr: 'Letra Capital — plus de 28 ans en tant qu\'éditeur académique.', es: 'Letra Capital — más de 28 años como editorial académica.' },
  },
  sections: {
    editorial: {
      title: { pt: 'Editorial', en: 'Editorial', fr: 'Éditorial', es: 'Editorial' },
      subtitle: {
        pt: '+20 anos de experiência na coordenação de projetos de livros de memórias, biografias e livros de autoria coletiva.',
        en: '20+ years of experience coordinating memoir, biography and collective authorship book projects.',
        fr: 'Plus de 20 ans d\'expérience dans la coordination de projets de livres de mémoires, de biographies et d\'ouvrages collectifs.',
        es: 'Más de 20 años de experiencia en la coordinación de proyectos de libros de memorias, biografías y libros de autoría colectiva.',
      },
      items: [
        { year: '2025', title: { pt: 'O Super-8 no AI-5', en: 'O Super-8 no AI-5', fr: 'O Super-8 no AI-5', es: 'O Super-8 no AI-5' }, description: { pt: 'Autora do livro O Super-8 no AI-5: memórias de cinema e juventude na década de 1970, pela editora Letra Capital.', en: 'Author of O Super-8 no AI-5: memories of cinema and youth in the 1970s, published by Letra Capital.', fr: 'Auteure du livre O Super-8 no AI-5 : mémoires de cinéma et de jeunesse dans les années 1970, publié par Letra Capital.', es: 'Autora del libro O Super-8 no AI-5: memorias de cine y juventud en la década de 1970, publicado por Letra Capital.' }, link: '/o-super-8-no-ai-5' },
        { year: '2022', title: { pt: 'Revista História Oral', en: 'Revista História Oral', fr: 'Revista História Oral', es: 'Revista História Oral' }, description: { pt: 'Publicação em Revista História Oral - entrevista bilingue. Sobre compartilhar histórias e o desafio criativo de mantê-las vivas: entrevista com Steven High, fundador do Centre for Oral History and Digital Storytelling na Concordia University, em Montreal.', en: 'Publication in Revista História Oral — bilingual interview. On sharing stories and the creative challenge of keeping them alive: interview with Steven High, founder of the Centre for Oral History and Digital Storytelling at Concordia University, Montreal.', fr: 'Publication dans Revista História Oral — entretien bilingue. Sur le partage des histoires et le défi créatif de les maintenir vivantes : entretien avec Steven High, fondateur du Centre for Oral History and Digital Storytelling à Concordia University, Montréal.', es: 'Publicación en Revista História Oral — entrevista bilingüe. Sobre compartir historias y el desafío creativo de mantenerlas vivas: entrevista con Steven High, fundador del Centre for Oral History and Digital Storytelling en Concordia University, Montreal.' }, link: '/historia-oral-steven-high' },
        { year: '2021–2025', title: { pt: 'Livros de Samuel Aarão Reis', en: 'Books by Samuel Aarão Reis', fr: 'Livres de Samuel Aarão Reis', es: 'Libros de Samuel Aarão Reis' }, description: { pt: 'Coordenadora editorial dos livros do historiador Samuel Aarão Reis: Memória guerreira não se apaga nunca (2021); Conversas à beira-mar (2021); Escrevendo torto por linhas tortas e outras histórias (2024); e Longe do mar, quem eu sou? (2025).', en: 'Editorial coordinator for historian Samuel Aarão Reis\' books: Memória guerreira não se apaga nunca (2021); Conversas à beira-mar (2021); Escrevendo torto por linhas tortas e outras histórias (2024); and Longe do mar, quem eu sou? (2025).', fr: 'Coordinatrice éditoriale des livres de l\'historien Samuel Aarão Reis : Memória guerreira não se apaga nunca (2021) ; Conversas à beira-mar (2021) ; Escrevendo torto por linhas tortas e outras histórias (2024) ; et Longe do mar, quem eu sou? (2025).', es: 'Coordinadora editorial de los libros del historiador Samuel Aarão Reis: Memória guerreira não se apaga nunca (2021); Conversas à beira-mar (2021); Escrevendo torto por linhas tortas e outras histórias (2024); y Longe do mar, quem eu sou? (2025).' } },
        { year: '2018', title: { pt: 'BUG Narrativas Interativas e Imersivas', en: 'BUG Interactive and Immersive Narratives', fr: 'BUG Narratives interactives et immersives', es: 'BUG Narrativas Interactivas e Inmersivas' }, description: { pt: 'Coautora e coordenadora editorial do livro BUG Narrativas Interativas e Imersivas — contribuição teórica em publicação coletiva bilingue, Oi Futuro.', en: 'Co-author and editorial coordinator of BUG Interactive and Immersive Narratives — theoretical contribution to a bilingual collective publication, Oi Futuro.', fr: 'Co-auteure et coordinatrice éditoriale du livre BUG Narratives interactives et immersives — contribution théorique à une publication collective bilingue, Oi Futuro.', es: 'Coautora y coordinadora editorial del libro BUG Narrativas Interactivas e Inmersivas — contribución teórica en publicación colectiva bilingüe, Oi Futuro.' } },
        { year: '2009', title: { pt: 'Viva Favela', en: 'Viva Favela', fr: 'Viva Favela', es: 'Viva Favela' }, description: { pt: 'Coordenadora editorial do livro Viva Favela — curadoria de ensaios de fotógrafos periféricos.', en: 'Editorial coordinator of the book Viva Favela — curating photo essays by peripheral community photographers.', fr: 'Coordinatrice éditoriale du livre Viva Favela — curation d\'essais photographiques de photographes de communautés périphériques.', es: 'Coordinadora editorial del libro Viva Favela — curaduría de ensayos fotográficos de fotógrafos de comunidades periféricas.' } },
        { year: '2006', title: { pt: 'Maria Muniz, A Sherazade do Rádio', en: 'Maria Muniz, The Scheherazade of Radio', fr: 'Maria Muniz, la Shéhérazade de la radio', es: 'Maria Muniz, la Sherezade de la radio' }, description: { pt: 'Coautora do livro Maria Muniz, A Sherazade do Rádio — pesquisa biográfica e narrativa histórica.', en: 'Co-author of Maria Muniz, The Scheherazade of Radio — biographical research and historical narrative.', fr: 'Co-auteure du livre Maria Muniz, la Shéhérazade de la radio — recherche biographique et récit historique.', es: 'Coautora del libro Maria Muniz, la Sherezade de la radio — investigación biográfica y narrativa histórica.' } },
      ],
    },
    audiovisual: {
      title: { pt: 'Audiovisual', en: 'Audiovisual', fr: 'Audiovisuel', es: 'Audiovisual' },
      subtitle: {
        pt: '+30 anos de carreira como produtora e pesquisadora de audiovisual, como roteirista e diretora e coordenadora de projetos de narrativas interativas e audiovisual expandido.',
        en: '30+ years as an audiovisual producer and researcher, screenwriter and director, and coordinator of interactive narrative and expanded audiovisual projects.',
        fr: 'Plus de 30 ans de carrière comme productrice et chercheuse en audiovisuel, scénariste et réalisatrice, et coordinatrice de projets de narratives interactives et d\'audiovisuel élargi.',
        es: 'Más de 30 años de carrera como productora e investigadora audiovisual, guionista y directora, y coordinadora de proyectos de narrativas interactivas y audiovisual expandido.',
      },
      items: [
        { year: '2020–2021', title: { pt: 'Elizabeth Bishop From Brazil, With Love', en: 'Elizabeth Bishop From Brazil, With Love', fr: 'Elizabeth Bishop From Brazil, With Love', es: 'Elizabeth Bishop From Brazil, With Love' }, description: { pt: 'Pesquisa histórica e iconográfica para Vivian Ostrovsky — suporte a obra audiovisual experimental.', en: 'Historical and iconographic research for Vivian Ostrovsky — supporting an experimental audiovisual work.', fr: 'Recherche historique et iconographique pour Vivian Ostrovsky — soutien à une œuvre audiovisuelle expérimentale.', es: 'Investigación histórica e iconográfica para Vivian Ostrovsky — apoyo a una obra audiovisual experimental.' } },
        { year: '2018', title: { pt: 'Para Virar o Jogo', en: 'Para Virar o Jogo (Turning the Tide)', fr: 'Para Virar o Jogo (Renverser la situation)', es: 'Para Virar o Jogo (Cambiar el rumbo)' }, description: { pt: 'Direção do vídeo clipe Para virar o jogo, campanha contra a violência armada, pelo controle das armas de fogo, para Instituto Igarapé.', en: 'Directed the music video Para virar o jogo, a campaign against gun violence and for firearms control, for Instituto Igarapé.', fr: 'Réalisation du clip vidéo Para virar o jogo, campagne contre la violence armée et pour le contrôle des armes à feu, pour l\'Instituto Igarapé.', es: 'Dirección del videoclip Para virar o jogo, campaña contra la violencia armada y por el control de armas de fuego, para el Instituto Igarapé.' }, video: 'https://www.youtube.com/watch?v=ekLmLA3yvQc' },
        { year: '2016', title: { pt: 'Meu Rio Vale um Webdoc', en: 'Meu Rio Vale um Webdoc', fr: 'Meu Rio Vale um Webdoc', es: 'Meu Rio Vale um Webdoc' }, description: { pt: 'Co-direção do webdoc Meu Rio Vale um Webdoc — projeto formativo e colaborativo das Naves do Conhecimento, Secretaria Municipal de Ciência e Tecnologia do Rio de Janeiro.', en: 'Co-directed the webdoc Meu Rio Vale um Webdoc — a collaborative training project by Naves do Conhecimento, Rio de Janeiro Municipal Science and Technology Department.', fr: 'Co-réalisation du webdoc Meu Rio Vale um Webdoc — projet de formation collaboratif des Naves do Conhecimento, Secrétariat municipal des Sciences et Technologies de Rio de Janeiro.', es: 'Co-dirección del webdoc Meu Rio Vale um Webdoc — proyecto formativo y colaborativo de las Naves do Conhecimento, Secretaría Municipal de Ciencia y Tecnología de Río de Janeiro.' } },
        { year: '2011', title: { pt: 'PeriFeras Musicais', en: 'PeriFeras Musicais (Musical Peripheries)', fr: 'PeriFeras Musicais (Périphéries musicales)', es: 'PeriFeras Musicais (Periferias musicales)' }, description: { pt: 'Coordenação de criação coletiva do webdoc PeriFeras Musicais — projeto interativo sobre música periférica.', en: 'Coordinated collective creation of the webdoc PeriFeras Musicais — an interactive project on peripheral music.', fr: 'Coordination de la création collective du webdoc PeriFeras Musicais — projet interactif sur la musique périphérique.', es: 'Coordinación de creación colectiva del webdoc PeriFeras Musicais — proyecto interactivo sobre música periférica.' } },
        { year: '2009', title: { pt: 'Pelos Cantos do Planeta Olinda', en: 'Pelos Cantos do Planeta Olinda', fr: 'Pelos Cantos do Planeta Olinda', es: 'Pelos Cantos do Planeta Olinda' }, description: { pt: 'Roteirista e diretora do Documentário Pelos Cantos do Planeta Olinda — exibição em circuito do programa Cinema na Praça da Prefeitura Municipal de Olinda.', en: 'Screenwriter and director of the documentary Pelos Cantos do Planeta Olinda — screened in the Cinema na Praça circuit by the Municipality of Olinda.', fr: 'Scénariste et réalisatrice du documentaire Pelos Cantos do Planeta Olinda — diffusé dans le circuit Cinema na Praça de la municipalité d\'Olinda.', es: 'Guionista y directora del documental Pelos Cantos do Planeta Olinda — exhibido en el circuito Cinema na Praça de la Municipalidad de Olinda.' }, video: 'https://www.youtube.com/watch?v=G1ZuVVJvE4s' },
        { year: '2009', title: { pt: 'Carne de Carnaval', en: 'Carne de Carnaval (Carnival Flesh)', fr: 'Carne de Carnaval (Chair de carnaval)', es: 'Carne de Carnaval (Carne de carnaval)' }, description: { pt: 'Roteirista e diretora do Curta documentário Carne de Carnaval — Festival Cinesul e plataforma Porta Curtas.', en: 'Screenwriter and director of the short documentary Carne de Carnaval — Cinesul Festival and Porta Curtas platform.', fr: 'Scénariste et réalisatrice du court-métrage documentaire Carne de Carnaval — Festival Cinesul et plateforme Porta Curtas.', es: 'Guionista y directora del cortometraje documental Carne de Carnaval — Festival Cinesul y plataforma Porta Curtas.' }, video: 'https://www.youtube.com/watch?v=XdlrdEBLr1U' },
        { year: '2004', title: { pt: 'Viva Favela, um Documentário em Construção', en: 'Viva Favela, a Documentary in Progress', fr: 'Viva Favela, un documentaire en construction', es: 'Viva Favela, un documental en construcción' }, description: { pt: 'Coordenadora de produção coletiva - Viva Favela, um Documentário em Construção - Festival Films from the South, Oslo.', en: 'Collective production coordinator — Viva Favela, a Documentary in Progress — Films from the South Festival, Oslo.', fr: 'Coordinatrice de production collective — Viva Favela, un documentaire en construction — Festival Films from the South, Oslo.', es: 'Coordinadora de producción colectiva — Viva Favela, un documental en construcción — Festival Films from the South, Oslo.' } },
        { year: '', title: { pt: 'Um Outro Brasil', en: 'Um Outro Brasil (Another Brazil)', fr: 'Um Outro Brasil (Un autre Brésil)', es: 'Um Outro Brasil (Otro Brasil)' }, description: { pt: 'Assistente de direção do documentário Um Outro Brasil, dirigido por Sérgio Goldenberg no Centro de Criação de Imagem Popular (CECIP).', en: 'Assistant director on the documentary Um Outro Brasil, directed by Sérgio Goldenberg at the Centro de Criação de Imagem Popular (CECIP).', fr: 'Assistante de réalisation du documentaire Um Outro Brasil, réalisé par Sérgio Goldenberg au Centro de Criação de Imagem Popular (CECIP).', es: 'Asistente de dirección del documental Um Outro Brasil, dirigido por Sérgio Goldenberg en el Centro de Criação de Imagem Popular (CECIP).' } },
        { year: '1994', title: { pt: 'Túnel', en: 'Túnel (Tunnel)', fr: 'Túnel (Tunnel)', es: 'Túnel (Túnel)' }, description: { pt: 'Roteirista e diretora do Curta de ficção Túnel — roteiro e filme premiados no Festival Núcleo Atlantic de vídeo. Adquirido pela plataforma Porta Curtas.', en: 'Screenwriter and director of the fiction short Túnel — script and film awarded at the Núcleo Atlantic Video Festival. Acquired by Porta Curtas platform.', fr: 'Scénariste et réalisatrice du court-métrage de fiction Túnel — scénario et film primés au Festival Núcleo Atlantic de vidéo. Acquis par la plateforme Porta Curtas.', es: 'Guionista y directora del cortometraje de ficción Túnel — guion y película premiados en el Festival Núcleo Atlantic de video. Adquirido por la plataforma Porta Curtas.' }, video: 'https://www.youtube.com/watch?v=jDpSArZ7t7k' },
      ],
    },
    eventos: {
      title: { pt: 'Eventos', en: 'Events', fr: 'Événements', es: 'Eventos' },
      subtitle: {
        pt: 'Exposições, conferências, palestras, festivais e seminários — +20 anos de participação em eventos culturais, acadêmicos e audiovisuais.',
        en: 'Exhibitions, conferences, talks, festivals and seminars — 20+ years of participation in cultural, academic and audiovisual events.',
        fr: 'Expositions, conférences, conférences, festivals et séminaires — plus de 20 ans de participation à des événements culturels, académiques et audiovisuels.',
        es: 'Exposiciones, conferencias, charlas, festivales y seminarios — más de 20 años de participación en eventos culturales, académicos y audiovisuales.',
      },
      items: [
        { year: '2026', title: { pt: 'Cine Enseada, FGV', en: 'Cine Enseada, FGV', fr: 'Cine Enseada, FGV', es: 'Cine Enseada, FGV' }, description: { pt: 'Comentarista convidada.', en: 'Guest commentator.', fr: 'Commentatrice invitée.', es: 'Comentarista invitada.' } },
        { year: '2025', title: { pt: 'Olhares Negros, Museu de Arte do Rio', en: 'Olhares Negros, Rio Art Museum', fr: 'Olhares Negros, Musée d\'art de Rio', es: 'Olhares Negros, Museo de Arte de Río' }, description: { pt: 'Coordenação de Comunicação e Marketing / ONG Luta pela Paz.', en: 'Communications and Marketing Coordination / Fight for Peace NGO.', fr: 'Coordination de la communication et du marketing / ONG Luta pela Paz.', es: 'Coordinación de comunicación y marketing / ONG Luta pela Paz.' }, video: 'https://www.youtube.com/watch?v=w3zsL4vVmjM' },
        { year: '2025', title: { pt: 'XXVIII Encontro SOCINE, Belém', en: 'XXVIII SOCINE Conference, Belém', fr: 'XXVIIIe Conférence SOCINE, Belém', es: 'XXVIII Encuentro SOCINE, Belém' }, description: { pt: 'Palestra e debate no XXVIII Encontro SOCINE na Universidade Federal do Pará (30 de setembro a 3 de outubro). Lançamento do livro O Super-8 no AI-5. Entrevista ao vivo para TV Liberal, programa Bom Dia Pará (3 de outubro).', en: 'Talk and debate at the XXVIII SOCINE Conference at the Federal University of Pará (September 30 – October 3). Book launch of O Super-8 no AI-5. Live interview on TV Liberal, Bom Dia Pará program (October 3).', fr: 'Conférence et débat au XXVIIIe Conférence SOCINE à l\'Universidade Federal do Pará (30 septembre – 3 octobre). Lancement du livre O Super-8 no AI-5. Entretien en direct sur TV Liberal, programme Bom Dia Pará (3 octobre).', es: 'Charla y debate en el XXVIII Encuentro SOCINE en la Universidade Federal do Pará (30 de septiembre – 3 de octubre). Lanzamiento del libro O Super-8 no AI-5. Entrevista en vivo en TV Liberal, programa Bom Dia Pará (3 de octubre).' } },
        { year: '2025', title: { pt: 'IESP-UERJ, Rio de Janeiro', en: 'IESP-UERJ, Rio de Janeiro', fr: 'IESP-UERJ, Rio de Janeiro', es: 'IESP-UERJ, Río de Janeiro' }, description: { pt: 'Palestra e debate sobre o livro O Super-8 no AI-5 no IESP-UERJ (6 de novembro), durante aula aberta da disciplina "Imagens e Pesquisas em Ciências Sociais", coordenada por Mariana Cavalcanti.', en: 'Talk and debate on the book O Super-8 no AI-5 at IESP-UERJ (November 6), during an open class of "Images and Research in Social Sciences", coordinated by Mariana Cavalcanti.', fr: 'Conférence et débat sur le livre O Super-8 no AI-5 à l\'IESP-UERJ (6 novembre), lors d\'un cours ouvert du module « Images et recherches en sciences sociales », coordonné par Mariana Cavalcanti.', es: 'Charla y debate sobre el libro O Super-8 no AI-5 en el IESP-UERJ (6 de noviembre), durante clase abierta de la asignatura "Imágenes e investigaciones en ciencias sociales", coordinada por Mariana Cavalcanti.' } },
        { year: '2025', title: { pt: '12º Festival Super-OFF, São Paulo', en: '12th Festival Super-OFF, São Paulo', fr: '12e Festival Super-OFF, São Paulo', es: '12.º Festival Super-OFF, São Paulo' }, description: { pt: 'Palestra e debate no 12º Festival Internacional de Cinema Super 8, com lançamento do livro O Super-8 no AI-5 no Soberano Bar-museu (16 de agosto).', en: 'Talk and debate at the 12th International Super 8 Film Festival, with book launch of O Super-8 no AI-5 at Soberano Bar-museu (August 16).', fr: 'Conférence et débat au 12e Festival international du cinéma Super 8, avec lancement du livre O Super-8 no AI-5 au Soberano Bar-museu (16 août).', es: 'Charla y debate en el 12.º Festival Internacional de Cine Super 8, con lanzamiento del libro O Super-8 no AI-5 en el Soberano Bar-museu (16 de agosto).' } },
        { year: '2025', title: { pt: 'Mostra Cavídeo 28 anos, Estação Net Rio', en: 'Mostra Cavídeo 28th Anniversary, Estação Net Rio', fr: 'Mostra Cavídeo 28e anniversaire, Estação Net Rio', es: 'Mostra Cavídeo 28 años, Estação Net Rio' }, description: { pt: 'Sessão de autógrafos do livro O Super-8 no AI-5 na Lojinha Cavídeo, Estação Net Rio, Rua Voluntários da Pátria 35, Botafogo (8 de agosto).', en: 'Book signing of O Super-8 no AI-5 at Lojinha Cavídeo, Estação Net Rio, Rua Voluntários da Pátria 35, Botafogo (August 8).', fr: 'Séance de dédicaces du livre O Super-8 no AI-5 à la Lojinha Cavídeo, Estação Net Rio, Rua Voluntários da Pátria 35, Botafogo (8 août).', es: 'Sesión de autógrafos del libro O Super-8 no AI-5 en la Lojinha Cavídeo, Estação Net Rio, Rua Voluntários da Pátria 35, Botafogo (8 de agosto).' } },
        { year: '2023', title: { pt: 'XXII Conferência da IOHA', en: 'XXII IOHA Conference', fr: 'XXIIe Conférence de l\'IOHA', es: 'XXII Conferencia de la IOHA' }, description: { pt: 'Oral History in a Digital and Audiovisual World, Fundação Getúlio Vargas - Rio de Janeiro. Organizadora, painelista e mediadora na Conferência Internacional.', en: 'Oral History in a Digital and Audiovisual World, Fundação Getúlio Vargas — Rio de Janeiro. Organizer, panelist and moderator at the International Conference.', fr: 'Oral History in a Digital and Audiovisual World, Fundação Getúlio Vargas — Rio de Janeiro. Organisatrice, panéliste et modératrice à la conférence internationale.', es: 'Oral History in a Digital and Audiovisual World, Fundação Getúlio Vargas — Río de Janeiro. Organizadora, panelista y moderadora en la conferencia internacional.' } },
        { year: '2022', title: { pt: 'Concordia University, Montreal', en: 'Concordia University, Montreal', fr: 'Concordia University, Montréal', es: 'Concordia University, Montreal' }, description: { pt: 'Emerging Scholars Seminar — Painelista na Concordia.', en: 'Emerging Scholars Seminar — Panelist at Concordia.', fr: 'Emerging Scholars Seminar — Panéliste à Concordia.', es: 'Emerging Scholars Seminar — Panelista en Concordia.' } },
        { year: '2022', title: { pt: 'Retrospectiva Sérgio Péo', en: 'Sérgio Péo Retrospective', fr: 'Rétrospective Sérgio Péo', es: 'Retrospectiva Sérgio Péo' }, description: { pt: 'Comentadora da sessão Retrospectiva Sérgio Péo, Mostra Curtametralha, Belo Horizonte.', en: 'Session commentator at the Sérgio Péo Retrospective, Curtametralha Festival, Belo Horizonte.', fr: 'Commentatrice de la séance Rétrospective Sérgio Péo, Festival Curtametralha, Belo Horizonte.', es: 'Comentarista de la sesión Retrospectiva Sérgio Péo, Festival Curtametralha, Belo Horizonte.' } },
        { year: '2021', title: { pt: 'Galeria Heterotopias', en: 'Galeria Heterotopias', fr: 'Galeria Heterotopias', es: 'Galeria Heterotopias' }, description: { pt: 'Expositora convidada, Escola de Comunicação da UFRJ.', en: 'Guest exhibitor, UFRJ School of Communication.', fr: 'Exposante invitée, École de Communication de l\'UFRJ.', es: 'Expositora invitada, Escuela de Comunicación de la UFRJ.' } },
        { year: '2019', title: { pt: 'ANPUH — Simpósio Nacional de História, Recife', en: 'ANPUH — National History Symposium, Recife', fr: 'ANPUH — Symposium national d\'histoire, Recife', es: 'ANPUH — Simposio Nacional de Historia, Recife' }, description: { pt: 'Comunicação no Simpósio Temático "Arte e Cultura na Ditadura Militar". Tema: "Pira e o Super 8 como prática de resistência política".', en: 'Presentation at the thematic symposium "Art and Culture during the Military Dictatorship". Topic: "Pira and Super 8 as a practice of political resistance".', fr: 'Communication au symposium thématique « Art et culture sous la dictature militaire ». Sujet : « Pira et le Super 8 comme pratique de résistance politique ».', es: 'Ponencia en el simposio temático "Arte y cultura en la dictadura militar". Tema: "Pira y el Super 8 como práctica de resistencia política".' } },
        { year: '2019', title: { pt: 'CPDOC-FGV e IED-Rio', en: 'CPDOC-FGV and IED-Rio', fr: 'CPDOC-FGV et IED-Rio', es: 'CPDOC-FGV e IED-Rio' }, description: { pt: 'Palestras sobre mídias digitais e o documentário interativo (CPDOC-FGV, dezembro) e documentários interativos (IED-Rio, setembro).', en: 'Lectures on digital media and interactive documentary (CPDOC-FGV, December) and interactive documentaries (IED-Rio, September).', fr: 'Conférences sur les médias numériques et le documentaire interactif (CPDOC-FGV, décembre) et les documentaires interactifs (IED-Rio, septembre).', es: 'Conferencias sobre medios digitales y el documental interactivo (CPDOC-FGV, diciembre) y documentales interactivos (IED-Rio, septiembre).' } },
        { year: '2011', title: { pt: 'Films from the South, Oslo', en: 'Films from the South, Oslo', fr: 'Films from the South, Oslo', es: 'Films from the South, Oslo' }, description: { pt: 'Debatedora no The Critical Room, festival de cinema Films from the South, Oslo, Noruega.', en: 'Debater at The Critical Room, Films from the South film festival, Oslo, Norway.', fr: 'Débatteuse au The Critical Room, festival de cinéma Films from the South, Oslo, Norvège.', es: 'Debatiente en The Critical Room, festival de cine Films from the South, Oslo, Noruega.' } },
        { year: '2003', title: { pt: 'Festival CinePE, Recife', en: 'CinePE Festival, Recife', fr: 'Festival CinePE, Recife', es: 'Festival CinePE, Recife' }, description: { pt: 'Membro do júri de curtas-metragens do Festival de Cinema CinePE.', en: 'Short film jury member at the CinePE Film Festival.', fr: 'Membre du jury des courts-métrages du Festival de cinéma CinePE.', es: 'Miembro del jurado de cortometrajes del Festival de Cine CinePE.' } },
      ],
    },
    formacao: {
      title: { pt: 'Formação', en: 'Teaching', fr: 'Formation', es: 'Formación' },
      subtitle: {
        pt: '+20 anos como professora e gestora de cursos e oficinas de audiovisual, roteiro para audiovisual expandido, produções colaborativas, interativas e imersivas.',
        en: '20+ years as instructor and manager of audiovisual courses and workshops, screenwriting for expanded audiovisual, collaborative, interactive and immersive productions.',
        fr: 'Plus de 20 ans comme enseignante et gestionnaire de cours et ateliers audiovisuels, écriture de scénario pour l\'audiovisuel élargi, productions collaboratives, interactives et immersives.',
        es: 'Más de 20 años como profesora y gestora de cursos y talleres audiovisuales, guion para audiovisual expandido, producciones colaborativas, interactivas e inmersivas.',
      },
      items: [
        { year: '2019–', title: { pt: 'Pós-Graduação em Cinema Documentário (FGV)', en: 'Graduate Program in Documentary Film (FGV)', fr: 'Programme de troisième cycle en cinéma documentaire (FGV)', es: 'Posgrado en Cine Documental (FGV)' }, description: { pt: 'Professora da Pós-Graduação em Cinema Documentário (FGV) — disciplina "Mídias Digitais e Novas Janelas do Documentário".', en: 'Professor at the Graduate Program in Documentary Film (FGV) — course "Digital Media and New Windows for Documentary".', fr: 'Professeure au Programme de troisième cycle en cinéma documentaire (FGV) — cours « Médias numériques et nouvelles fenêtres du documentaire ».', es: 'Profesora del Posgrado en Cine Documental (FGV) — asignatura "Medios digitales y nuevas ventanas del documental".' } },
        { year: '2018', title: { pt: 'MBA em Gestão Cultural (FGV)', en: 'MBA in Cultural Management (FGV)', fr: 'MBA en gestion culturelle (FGV)', es: 'MBA en Gestión Cultural (FGV)' }, description: { pt: 'Professora do MBA em Gestão Cultural da FGV — disciplina "Metodologia de pesquisa qualitativa aplicada a projetos culturais".', en: 'Professor at the FGV MBA in Cultural Management — course "Qualitative research methodology applied to cultural projects".', fr: 'Professeure au MBA en gestion culturelle de la FGV — cours « Méthodologie de recherche qualitative appliquée aux projets culturels ».', es: 'Profesora del MBA en Gestión Cultural de la FGV — asignatura "Metodología de investigación cualitativa aplicada a proyectos culturales".' } },
        { year: '2016', title: { pt: 'Naves do Conhecimento', en: 'Naves do Conhecimento', fr: 'Naves do Conhecimento', es: 'Naves do Conhecimento' }, description: { pt: 'Curso de audiovisual nas Naves do Conhecimento — roteiro e interatividade.', en: 'Audiovisual course at Naves do Conhecimento — screenwriting and interactivity.', fr: 'Cours d\'audiovisuel aux Naves do Conhecimento — écriture de scénario et interactivité.', es: 'Curso de audiovisual en las Naves do Conhecimento — guion e interactividad.' } },
        { year: '2014–2016', title: { pt: 'Workshops GIZ', en: 'GIZ Workshops', fr: 'Ateliers GIZ', es: 'Talleres GIZ' }, description: { pt: 'Consultoria workshops em comunidades periféricas (GIZ) — educação e engajamento social.', en: 'Workshop consulting in peripheral communities (GIZ) — education and social engagement.', fr: 'Conseil en ateliers dans les communautés périphériques (GIZ) — éducation et engagement social.', es: 'Consultoría de talleres en comunidades periféricas (GIZ) — educación y compromiso social.' } },
        { year: '2003–2013', title: { pt: 'Viva Rio — Comunicadores Comunitários', en: 'Viva Rio — Community Communicators', fr: 'Viva Rio — Communicateurs communautaires', es: 'Viva Rio — Comunicadores comunitarios' }, description: { pt: 'Formação de comunicadores comunitários no Viva Rio — coordenação de projeto e desenvolvimento de metodologias e produtos colaborativos (Viva Favela 2.0).', en: 'Training community communicators at Viva Rio — project coordination and development of collaborative methodologies and products (Viva Favela 2.0).', fr: 'Formation de communicateurs communautaires à Viva Rio — coordination de projet et développement de méthodologies et produits collaboratifs (Viva Favela 2.0).', es: 'Formación de comunicadores comunitarios en Viva Rio — coordinación de proyecto y desarrollo de metodologías y productos colaborativos (Viva Favela 2.0).' } },
      ],
    },
    trajetoria: {
      title: { pt: 'Trajetória', en: 'Career', fr: 'Parcours', es: 'Trayectoria' },
      subtitle: {
        pt: '+30 anos de atuação profissional em comunicação, cultura e terceiro setor.',
        en: '30+ years of professional experience in communication, culture and the nonprofit sector.',
        fr: 'Plus de 30 ans d\'expérience professionnelle en communication, culture et secteur associatif.',
        es: 'Más de 30 años de experiencia profesional en comunicación, cultura y tercer sector.',
      },
      items: [
        { year: '2024–', title: { pt: 'Plural MJ', en: 'Plural MJ', fr: 'Plural MJ', es: 'Plural MJ' }, description: { pt: 'Fundadora. Consultoria e treinamentos em comunicação estratégica, gestão de projetos de pesquisa e produção audiovisual e editorial.', en: 'Founder. Consulting and training in strategic communication, research project management and audiovisual/editorial production.', fr: 'Fondatrice. Conseil et formation en communication stratégique, gestion de projets de recherche et production audiovisuelle et éditoriale.', es: 'Fundadora. Consultoría y capacitación en comunicación estratégica, gestión de proyectos de investigación y producción audiovisual y editorial.' } },
        { year: '2021–', title: { pt: 'ONG Luta pela Paz', en: 'Fight for Peace NGO', fr: 'ONG Luta pela Paz', es: 'ONG Luta pela Paz' }, description: { pt: 'Consultora (2021–2022) e gerente (2023–) de comunicação e marketing.', en: 'Consultant (2021–2022) and manager (2023–) of communications and marketing.', fr: 'Consultante (2021–2022) et responsable (2023–) de la communication et du marketing.', es: 'Consultora (2021–2022) y gerente (2023–) de comunicación y marketing.' }, video: 'https://www.youtube.com/watch?v=n7a8qfQ-_S4' },
        { year: '2021–2022', title: { pt: 'CAPES Print — Concordia University, Montreal', en: 'CAPES Print Fellowship — Concordia University, Montreal', fr: 'Bourse CAPES Print — Concordia University, Montréal', es: 'Beca CAPES Print — Concordia University, Montreal' }, description: { pt: 'Bolsista CAPES Print no Centre for Oral History and Digital Storytelling na Concordia University — pesquisa em história oral e narrativas digitais.', en: 'CAPES Print fellow at the Centre for Oral History and Digital Storytelling at Concordia University — research in oral history and digital narratives.', fr: 'Boursière CAPES Print au Centre for Oral History and Digital Storytelling de Concordia University — recherche en histoire orale et narratives numériques.', es: 'Becaria CAPES Print en el Centre for Oral History and Digital Storytelling de Concordia University — investigación en historia oral y narrativas digitales.' } },
        { year: '2013–2021', title: { pt: 'Cria Media Lab', en: 'Cria Media Lab', fr: 'Cria Media Lab', es: 'Cria Media Lab' }, description: { pt: 'Sócia fundadora e diretora de projetos de pesquisa, formação e audiovisual.', en: 'Co-founder and director of research, training and audiovisual projects.', fr: 'Co-fondatrice et directrice de projets de recherche, de formation et audiovisuels.', es: 'Cofundadora y directora de proyectos de investigación, formación y audiovisual.' } },
        { year: '2013–2019', title: { pt: 'Instituto Igarapé', en: 'Igarapé Institute', fr: 'Instituto Igarapé', es: 'Instituto Igarapé' }, description: { pt: 'Consultora sênior de comunicação e mídias digitais.', en: 'Senior consultant in communications and digital media.', fr: 'Consultante senior en communication et médias numériques.', es: 'Consultora senior de comunicación y medios digitales.' }, video: 'https://www.youtube.com/watch?v=582q4sKnyVo' },
        { year: '2003–2013', title: { pt: 'Viva Rio', en: 'Viva Rio', fr: 'Viva Rio', es: 'Viva Rio' }, description: { pt: 'Coordenadora de projetos de mídia digital e audiovisual, com destaque para o Viva Favela 2.0.', en: 'Digital media and audiovisual project coordinator, notably Viva Favela 2.0.', fr: 'Coordinatrice de projets de médias numériques et audiovisuels, notamment Viva Favela 2.0.', es: 'Coordinadora de proyectos de medios digitales y audiovisual, destacando Viva Favela 2.0.' } },
        { year: '1998–1999', title: { pt: 'Infoglobo (O Globo)', en: 'Infoglobo (O Globo)', fr: 'Infoglobo (O Globo)', es: 'Infoglobo (O Globo)' }, description: { pt: 'Repórter e produtora de conteúdo na Infoglobo (O Globo e Globo Online).', en: 'Reporter and content producer at Infoglobo (O Globo and Globo Online).', fr: 'Journaliste et productrice de contenu chez Infoglobo (O Globo et Globo Online).', es: 'Reportera y productora de contenido en Infoglobo (O Globo y Globo Online).' } },
        { year: '1994–1995', title: { pt: 'Circo Voador — TVCV', en: 'Circo Voador — TVCV', fr: 'Circo Voador — TVCV', es: 'Circo Voador — TVCV' }, description: { pt: 'Produtora no Circo Voador, diretora de episódios da "zine eletrônica" TVCV exibida no telão antes dos shows.', en: 'Producer at Circo Voador, director of episodes of the "electronic zine" TVCV screened before live shows.', fr: 'Productrice au Circo Voador, réalisatrice d\'épisodes du « zine électronique » TVCV diffusé sur grand écran avant les spectacles.', es: 'Productora en el Circo Voador, directora de episodios del "zine electrónico" TVCV exhibido en pantalla antes de los espectáculos.' }, video: 'https://www.youtube.com/watch?v=2lv2D16qG1U' },
      ],
    },
  },
  contact: {
    title: { pt: 'Contato', en: 'Contact', fr: 'Contact', es: 'Contacto' },
    email: 'mayrajuca@gmail.com',
    youtube: 'https://www.youtube.com/@mayrajuca_Plural',
    instagram: '@Mayra_Juca',
    linkedin: 'mayrajuca',
    phone: '21 98186-1010',
    website: 'www.mayrajuca.com/plural',
  },
  footer: {
    tagline: { pt: 'Memória · Audiovisual · Formação', en: 'Memory · Audiovisual · Training', fr: 'Mémoire · Audiovisuel · Formation', es: 'Memoria · Audiovisual · Formación' },
    links: { pt: 'Links', en: 'Links', fr: 'Liens', es: 'Enlaces' },
    contact: { pt: 'Contato', en: 'Contact', fr: 'Contact', es: 'Contacto' },
    copyright: {
      pt: 'Plural MJ LTDA. Todos os direitos reservados.',
      en: 'Plural MJ LTDA. All rights reserved.',
      fr: 'Plural MJ LTDA. Tous droits réservés.',
      es: 'Plural MJ LTDA. Todos los derechos reservados.',
    },
  },
};

export function t(obj: Record<string, string>, locale: Locale): string {
  return obj[locale] || obj.pt || '';
}
