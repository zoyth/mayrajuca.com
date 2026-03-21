// ABOUTME: Site content configuration with all text in Portuguese and English.
// ABOUTME: Defines metadata, hero, about sections, and portfolio data.

export type Locale = 'pt' | 'en';

export const locales: Locale[] = ['pt', 'en'];
export const defaultLocale: Locale = 'pt';

export const siteContent = {
  metadata: {
    siteName: 'Mayra Jucá — Plural MJ',
    siteUrl: 'https://www.mayrajuca.com',
    description: {
      pt: 'Portfólio de Mayra Jucá — jornalista, cineasta e pesquisadora. Projetos de memória, produção audiovisual e ações formativas.',
      en: 'Portfolio of Mayra Jucá — journalist, filmmaker and researcher. Memory projects, audiovisual production and training initiatives.',
    },
  },
  hero: {
    headline: {
      pt: 'Plural MJ',
      en: 'Plural MJ',
    },
    subheadline: {
      pt: 'Memória · Audiovisual · Formação',
      en: 'Memory · Audiovisual · Training',
    },
  },
  about: {
    company: {
      pt: 'Fundada em 2023, a Plural MJ é uma produtora dedicada à gestão de projetos de memória, ações formativas e produção audiovisual.',
      en: 'Founded in 2023, Plural MJ is a production company dedicated to memory projects, training initiatives and audiovisual production.',
    },
    companyExtended: {
      pt: 'À frente da empresa está a jornalista, cineasta e pesquisadora Mayra Jucá, cuja carreira no terceiro setor e no campo da comunicação e cultura, com foco em audiovisual e memória, completou 30 anos em 2024.',
      en: 'The company is led by journalist, filmmaker and researcher Mayra Jucá, whose career in the nonprofit sector and in the field of communication and culture, with a focus on audiovisual and memory, reached 30 years in 2024.',
    },
    bio: {
      pt: 'Mayra Jucá é doutora e mestre em História, Política e Bens Culturais pelo CPDOC/FGV, e em 2026 iniciou o Pós-doutorado no Programa de Pós-Graduação em Cinema e Audiovisual da UFF (Universidade Federal Fluminense), com foco em cinema experimental, história do cinema não canônico brasileiro e filmografia do movimento Superoitista no Rio de Janeiro.',
      en: 'Mayra Jucá holds a PhD and a Master\'s degree in History, Politics and Cultural Heritage from CPDOC/FGV. In 2026, she began her Post-Doctoral research at the Graduate Program in Film and Audiovisual at UFF (Universidade Federal Fluminense), focusing on experimental cinema, the history of non-canonical Brazilian cinema and the filmography of the Super-8 movement in Rio de Janeiro.',
    },
    bioExtended: {
      pt: 'Entre 2021 e 2022, foi bolsista CAPES Print no Centre for Oral History and Digital Storytelling na Concordia University, em Montreal. Sua atuação é marcada por uma abordagem multidisciplinar e pelo uso da história oral e do audiovisual a serviço de causas sociais e pesquisas nos campos da cultura e da política.',
      en: 'Between 2021 and 2022, she was a CAPES Print fellow at the Centre for Oral History and Digital Storytelling at Concordia University in Montreal. Her work is characterized by a multidisciplinary approach and the use of oral history and audiovisual media in service of social causes and research in the fields of culture and politics.',
    },
  },
  nav: {
    home: { pt: 'Início', en: 'Home' },
    editorial: { pt: 'Editorial', en: 'Editorial' },
    exposicoes: { pt: 'Exposições e Eventos', en: 'Exhibitions & Events' },
    audiovisual: { pt: 'Audiovisual', en: 'Audiovisual' },
    mostras: { pt: 'Mostras e Seminários', en: 'Screenings & Seminars' },
    formativas: { pt: 'Ações Formativas', en: 'Training' },
    contato: { pt: 'Contato', en: 'Contact' },
  },
  areasTitle: {
    pt: 'Áreas de Atuação',
    en: 'Areas of Expertise',
  },
  seeMore: {
    pt: 'Ver mais →',
    en: 'See more →',
  },
  article: {
    title: {
      pt: 'Sobre compartilhar histórias e o desafio criativo de mantê-las vivas',
      en: 'On sharing stories and the creative challenge of keeping them alive',
    },
    subtitle: {
      pt: 'Entrevista com Steven High, fundador do Centre for Oral History and Digital Storytelling na Concordia University, em Montreal',
      en: 'Interview with Steven High, founder of the Centre for Oral History and Digital Storytelling at Concordia University, Montreal',
    },
    author: 'Mayra Coelho Jucá dos Santos',
    authorAffiliation: 'Fundação Getúlio Vargas / CPDOC',
    journal: 'História Oral',
    volume: '25',
    issue: '2',
    year: '2022',
    pages: '223–238',
    section: { pt: 'Entrevistas', en: 'Interviews' },
    publishedDate: { pt: '15 de dezembro de 2022', en: 'December 15, 2022' },
    doi: '10.51880/ho.v25i2.1300',
    issn: '2358-1654',
    license: 'Creative Commons BY-NC-ND 4.0',
    keywords: {
      pt: ['Steven High', 'COHDS', 'Montreal Life Stories', 'Pesquisa-criação', 'Narrativas digitais', 'Autoridade compartilhada'],
      en: ['Steven High', 'COHDS', 'Montreal Life Stories', 'Research-creation', 'Digital narratives', 'Shared authority'],
    },
    abstract: {
      pt: 'Entrevista com o historiador oral canadense Steven High, autor de diversos livros premiados e fundador do Centre for Oral History and Digital Storytelling (COHDS) na Concordia University, criado em 2006. A discussão aborda a abordagem de High à história oral, a metodologia de "pesquisa-criação" desenvolvida ao longo de 15 anos, e sua perspectiva sobre história oral como "uma prática interdisciplinar e criativa" em vez de metodologia disciplinar.',
      en: 'Interview with Canadian oral historian Steven High, author of numerous award-winning books and founder of the Centre for Oral History and Digital Storytelling (COHDS) at Concordia University, established in 2006. The discussion addresses High\'s approach to oral history, the "research-creation" methodology developed over 15 years, and his perspective on oral history as "an interdisciplinary and creative practice" rather than a disciplinary methodology.',
    },
    aboutInterviewee: {
      pt: 'Steven High é historiador oral canadense, autor de diversos livros premiados e fundador do Centre for Oral History and Digital Storytelling (COHDS) na Concordia University, criado em 2006.',
      en: 'Steven High is a Canadian oral historian, author of numerous award-winning books and founder of the Centre for Oral History and Digital Storytelling (COHDS) at Concordia University, established in 2006.',
    },
  },
  book: {
    title: 'O Super-8 no AI-5',
    subtitle: {
      pt: 'Memórias de cinema e juventude na década de 1970',
      en: 'Memories of cinema and youth in the 1970s',
    },
    author: 'Mayra Jucá',
    publisher: 'Letra Capital',
    description: {
      pt: 'O trabalho combina pesquisa fílmica, análise documental, bibliografia e entrevistas. A autora utiliza conteúdo audiovisual como ferramenta de ativação de memória das experiências juvenis durante os anos da ditadura militar no Brasil.',
      en: 'The work combines film research, documentary analysis, bibliography and interviews. The author uses audiovisual content as a memory activation tool for youth experiences during Brazil\'s military dictatorship years.',
    },
    quote: {
      pt: '"Referências a câmeras como armas aparecem em depoimentos de superoitistas e em diversos textos dos anos 1970, incluindo o trabalho do cineasta Sérgio Péo: o equipamento funcionava como instrumento decolonizador..."',
      en: '"Camera references as weapons appear in statements from Super-8 filmmakers and various 1970s texts, including filmmaker Sérgio Péo\'s work: equipment functioned as a decolonizing instrument..."',
    },
    launches: [
      {
        date: { pt: '15 de junho de 2025', en: 'June 15, 2025' },
        location: { pt: 'Bienal do Livro do Rio de Janeiro', en: 'Rio de Janeiro Book Biennial' },
      },
      {
        date: { pt: '8 de agosto de 2025', en: 'August 8, 2025' },
        location: { pt: 'Estação Net Rio, Botafogo — sessão de autógrafos', en: 'Estação Net Rio cinema, Botafogo — book signing' },
      },
      {
        date: { pt: '16 de agosto de 2025', en: 'August 16, 2025' },
        location: { pt: 'Soberano Bar-museu, São Paulo — Festival Super-OFF', en: 'Soberano Bar-museu, São Paulo — Festival Super-OFF' },
      },
    ],
    endorsements: [
      {
        name: 'Rubens Machado Jr.',
        affiliation: 'ECA-USP',
      },
      {
        name: 'Mariana Cavalcanti',
        affiliation: 'IESP-UERJ',
      },
      {
        name: 'Thaís Blank',
        affiliation: 'FGV-CPDOC',
      },
      {
        name: 'Patrícia Machado',
        affiliation: 'PUC-Rio',
      },
    ],
    purchase: {
      email: 'livrosuper8@gmail.com',
      store: {
        pt: 'Lojinha Cavídeo na Estação Net Rio, Rio de Janeiro',
        en: 'Lojinha Cavídeo at Estação Net Rio cinema, Rio de Janeiro',
      },
    },
    launchesTitle: { pt: 'Lançamentos', en: 'Launch Events' },
    endorsementsTitle: { pt: 'Endossos', en: 'Endorsements' },
    purchaseTitle: { pt: 'Onde Adquirir', en: 'Where to Buy' },
    publisherNote: {
      pt: 'Letra Capital — +28 anos como editora acadêmica.',
      en: 'Letra Capital — 28+ years as an academic publisher.',
    },
  },
  sections: {
    editorial: {
      title: { pt: 'Editorial', en: 'Editorial' },
      subtitle: {
        pt: '+20 anos de experiência na coordenação de projetos de livros de memórias, biografias e livros de autoria coletiva.',
        en: '20+ years of experience coordinating memoir, biography and collective authorship book projects.',
      },
      items: [
        {
          year: '2025',
          title: { pt: 'O Super-8 no AI-5', en: 'O Super-8 no AI-5' },
          description: {
            pt: 'Autora do livro O Super-8 no AI-5: memórias de cinema e juventude na década de 1970, pela editora Letra Capital.',
            en: 'Author of O Super-8 no AI-5: memories of cinema and youth in the 1970s, published by Letra Capital.',
          },
          link: '/o-super-8-no-ai-5',
        },
        {
          year: '2022',
          title: { pt: 'Revista História Oral', en: 'Revista História Oral' },
          description: {
            pt: 'Publicação em Revista História Oral - entrevista bilingue. Sobre compartilhar histórias e o desafio criativo de mantê-las vivas: entrevista com Steven High, fundador do Centre for Oral History and Digital Storytelling na Concordia University, em Montreal.',
            en: 'Publication in Revista História Oral — bilingual interview. On sharing stories and the creative challenge of keeping them alive: interview with Steven High, founder of the Centre for Oral History and Digital Storytelling at Concordia University, Montreal.',
          },
          link: '/historia-oral-steven-high',
        },
        {
          year: '2021–2025',
          title: { pt: 'Livros de Samuel Aarão Reis', en: 'Books by Samuel Aarão Reis' },
          description: {
            pt: 'Coordenadora editorial dos livros do historiador Samuel Aarão Reis: Memória guerreira não se apaga nunca (2021); Conversas à beira-mar (2021); Escrevendo torto por linhas tortas e outras histórias (2024); e Longe do mar, quem eu sou? (2025).',
            en: 'Editorial coordinator for historian Samuel Aarão Reis\' books: Memória guerreira não se apaga nunca (2021); Conversas à beira-mar (2021); Escrevendo torto por linhas tortas e outras histórias (2024); and Longe do mar, quem eu sou? (2025).',
          },
        },
        {
          year: '2018',
          title: { pt: 'BUG Narrativas Interativas e Imersivas', en: 'BUG Interactive and Immersive Narratives' },
          description: {
            pt: 'Coautora e coordenadora editorial do livro BUG Narrativas Interativas e Imersivas — contribuição teórica em publicação coletiva bilingue, Oi Futuro.',
            en: 'Co-author and editorial coordinator of BUG Interactive and Immersive Narratives — theoretical contribution to a bilingual collective publication, Oi Futuro.',
          },
        },
        {
          year: '2009',
          title: { pt: 'Viva Favela', en: 'Viva Favela' },
          description: {
            pt: 'Coordenadora editorial do livro Viva Favela — curadoria de ensaios de fotógrafos periféricos.',
            en: 'Editorial coordinator of the book Viva Favela — curating photo essays by peripheral community photographers.',
          },
        },
        {
          year: '2006',
          title: { pt: 'Maria Muniz, A Sherazade do Rádio', en: 'Maria Muniz, The Scheherazade of Radio' },
          description: {
            pt: 'Coautora do livro Maria Muniz, A Sherazade do Rádio — pesquisa biográfica e narrativa histórica.',
            en: 'Co-author of Maria Muniz, The Scheherazade of Radio — biographical research and historical narrative.',
          },
        },
      ],
    },
    exposicoes: {
      title: { pt: 'Exposições e Eventos', en: 'Exhibitions & Events' },
      subtitle: {
        pt: '+20 anos atuando na concepção de projetos e eventos audiovisuais, culturais e, mais recentemente, de pesquisa para instituições de ensino e organizações do terceiro setor.',
        en: '20+ years designing audiovisual, cultural and research projects and events for educational institutions and nonprofit organizations.',
      },
      items: [
        {
          year: '2025',
          title: { pt: 'Lançamentos do livro O Super-8 no AI-5', en: 'Book launches: O Super-8 no AI-5' },
          description: {
            pt: 'Lançamento na Bienal do Livro do Rio de Janeiro (15 de junho); sessão de autógrafos na Estação Net Rio, Botafogo (8 de agosto); lançamento em São Paulo no Soberano Bar-museu durante o Festival Super-OFF (16 de agosto).',
            en: 'Launch at the Rio de Janeiro Book Biennial (June 15); book signing at Estação Net Rio cinema, Botafogo (August 8); São Paulo launch at Soberano Bar-museu during Festival Super-OFF (August 16).',
          },
        },
        {
          year: '2025',
          title: { pt: 'Olhares Negros, Museu de Arte do Rio', en: 'Olhares Negros, Rio Art Museum' },
          description: {
            pt: 'Coordenação de Comunicação e Marketing / ONG Luta pela Paz.',
            en: 'Communications and Marketing Coordination / Fight for Peace NGO.',
          },
        },
        {
          year: '2023',
          title: { pt: 'XXII Conferência da IOHA', en: 'XXII IOHA Conference' },
          description: {
            pt: 'Oral History in a Digital and Audiovisual World, Fundação Getúlio Vargas - Rio de Janeiro. Organizadora, painelista e mediadora na Conferência Internacional.',
            en: 'Oral History in a Digital and Audiovisual World, Fundação Getúlio Vargas — Rio de Janeiro. Organizer, panelist and moderator at the International Conference.',
          },
        },
      ],
    },
    audiovisual: {
      title: { pt: 'Audiovisual', en: 'Audiovisual' },
      subtitle: {
        pt: '+30 anos de carreira como produtora e pesquisadora de audiovisual, como roteirista e diretora e coordenadora de projetos de narrativas interativas e audiovisual expandido.',
        en: '30+ years as an audiovisual producer and researcher, screenwriter and director, and coordinator of interactive narrative and expanded audiovisual projects.',
      },
      items: [
        {
          year: '2020–2021',
          title: { pt: 'Elizabeth Bishop From Brazil, With Love', en: 'Elizabeth Bishop From Brazil, With Love' },
          description: {
            pt: 'Pesquisa histórica e iconográfica para Vivian Ostrovsky — suporte a obra audiovisual experimental.',
            en: 'Historical and iconographic research for Vivian Ostrovsky — supporting an experimental audiovisual work.',
          },
        },
        {
          year: '2018',
          title: { pt: 'Para Virar o Jogo', en: 'Para Virar o Jogo (Turning the Tide)' },
          description: {
            pt: 'Direção do vídeo clipe Para virar o jogo, campanha contra a violência armada, pelo controle das armas de fogo, para Instituto Igarapé.',
            en: 'Directed the music video Para virar o jogo, a campaign against gun violence and for firearms control, for Instituto Igarapé.',
          },
        },
        {
          year: '2016',
          title: { pt: 'Meu Rio Vale um Webdoc', en: 'Meu Rio Vale um Webdoc' },
          description: {
            pt: 'Co-direção do webdoc Meu Rio Vale um Webdoc — projeto formativo e colaborativo das Naves do Conhecimento, Secretaria Municipal de Ciência e Tecnologia do Rio de Janeiro.',
            en: 'Co-directed the webdoc Meu Rio Vale um Webdoc — a collaborative training project by Naves do Conhecimento, Rio de Janeiro Municipal Science and Technology Department.',
          },
        },
        {
          year: '2011',
          title: { pt: 'PeriFeras Musicais', en: 'PeriFeras Musicais (Musical Peripheries)' },
          description: {
            pt: 'Coordenação de criação coletiva do webdoc PeriFeras Musicais — projeto interativo sobre música periférica.',
            en: 'Coordinated collective creation of the webdoc PeriFeras Musicais — an interactive project on peripheral music.',
          },
        },
        {
          year: '2009',
          title: { pt: 'Pelos Cantos do Planeta Olinda', en: 'Pelos Cantos do Planeta Olinda' },
          description: {
            pt: 'Roteirista e diretora do Documentário Pelos Cantos do Planeta Olinda — exibição em circuito do programa Cinema na Praça da Prefeitura Municipal de Olinda.',
            en: 'Screenwriter and director of the documentary Pelos Cantos do Planeta Olinda — screened in the Cinema na Praça circuit by the Municipality of Olinda.',
          },
        },
        {
          year: '2009',
          title: { pt: 'Carne de Carnaval', en: 'Carne de Carnaval (Carnival Flesh)' },
          description: {
            pt: 'Roteirista e diretora do Curta documentário Carne de Carnaval — Festival Cinesul e plataforma Porta Curtas.',
            en: 'Screenwriter and director of the short documentary Carne de Carnaval — Cinesul Festival and Porta Curtas platform.',
          },
        },
        {
          year: '2004',
          title: { pt: 'Viva Favela, um Documentário em Construção', en: 'Viva Favela, a Documentary in Progress' },
          description: {
            pt: 'Coordenadora de produção coletiva - Viva Favela, um Documentário em Construção - Festival Films from the South, Oslo.',
            en: 'Collective production coordinator — Viva Favela, a Documentary in Progress — Films from the South Festival, Oslo.',
          },
        },
        {
          year: '1994',
          title: { pt: 'Túnel', en: 'Túnel (Tunnel)' },
          description: {
            pt: 'Roteirista e diretora do Curta de ficção Túnel — roteiro e filme premiados no Festival Núcleo Atlantic de vídeo. Adquirido pela plataforma Porta Curtas.',
            en: 'Screenwriter and director of the fiction short Túnel — script and film awarded at the Núcleo Atlantic Video Festival. Acquired by Porta Curtas platform.',
          },
        },
      ],
    },
    mostras: {
      title: { pt: 'Mostras, Festivais e Seminários', en: 'Screenings, Festivals & Seminars' },
      subtitle: {
        pt: 'Participações como apresentadora, comentadora, debatedora, mediadora e palestrante/painelista em dezenas de eventos para difusão e pesquisa do audiovisual.',
        en: 'Appearances as presenter, commentator, debater, moderator and speaker/panelist at dozens of audiovisual dissemination and research events.',
      },
      items: [
        {
          year: '2026',
          title: { pt: 'Cine Enseada, FGV', en: 'Cine Enseada, FGV' },
          description: {
            pt: 'Comentarista convidada.',
            en: 'Guest commentator.',
          },
        },
        {
          year: '2022',
          title: { pt: 'Concordia University, Montreal', en: 'Concordia University, Montreal' },
          description: {
            pt: 'Emerging Scholars Seminar — Painelista na Concordia.',
            en: 'Emerging Scholars Seminar — Panelist at Concordia.',
          },
        },
        {
          year: '2022',
          title: { pt: 'Retrospectiva Sérgio Péo', en: 'Sérgio Péo Retrospective' },
          description: {
            pt: 'Comentadora da sessão Retrospectiva Sérgio Péo, Mostra Curtametralha, Belo Horizonte.',
            en: 'Session commentator at the Sérgio Péo Retrospective, Curtametralha Festival, Belo Horizonte.',
          },
        },
        {
          year: '2021',
          title: { pt: 'Galeria Heterotopias', en: 'Galeria Heterotopias' },
          description: {
            pt: 'Expositora convidada, Escola de Comunicação da UFRJ.',
            en: 'Guest exhibitor, UFRJ School of Communication.',
          },
        },
      ],
    },
    formativas: {
      title: { pt: 'Ações Formativas', en: 'Training & Education' },
      subtitle: {
        pt: '+20 anos de atuação em projetos de cursos e oficinas de audiovisual, em especial de roteiro para audiovisual expandido, produções colaborativas, interativas e imersivas - como professora e/ou gestora.',
        en: '20+ years in audiovisual courses and workshops, especially screenwriting for expanded audiovisual, collaborative, interactive and immersive productions — as instructor and/or manager.',
      },
      items: [
        {
          year: '2024–',
          title: { pt: 'Plural MJ — Comunicação Estratégica', en: 'Plural MJ — Strategic Communication' },
          description: {
            pt: 'Desenvolvimento de treinamentos, projetos e consultorias pela Plural MJ — comunicação estratégica e storytelling.',
            en: 'Training, project development and consulting through Plural MJ — strategic communication and storytelling.',
          },
        },
        {
          year: '2021–',
          title: { pt: 'ONG Luta pela Paz', en: 'Fight for Peace NGO' },
          description: {
            pt: 'Gestão em comunicação e audiovisual na ONG Luta pela Paz.',
            en: 'Communications and audiovisual management at Fight for Peace NGO.',
          },
        },
        {
          year: '2021–2022',
          title: { pt: 'CAPES Print — Concordia University, Montreal', en: 'CAPES Print Fellowship — Concordia University, Montreal' },
          description: {
            pt: 'Bolsista CAPES Print no Centre for Oral History and Digital Storytelling na Concordia University — pesquisa em história oral e narrativas digitais.',
            en: 'CAPES Print fellow at the Centre for Oral History and Digital Storytelling at Concordia University — research in oral history and digital narratives.',
          },
        },
        {
          year: '2019–',
          title: { pt: 'Pós-Graduação em Cinema Documentário (FGV)', en: 'Graduate Program in Documentary Film (FGV)' },
          description: {
            pt: 'Professora da Pós-Graduação em Cinema Documentário (FGV) — mídias digitais e inovação.',
            en: 'Professor at the Graduate Program in Documentary Film (FGV) — digital media and innovation.',
          },
        },
        {
          year: '2016',
          title: { pt: 'Naves do Conhecimento', en: 'Naves do Conhecimento' },
          description: {
            pt: 'Curso de audiovisual nas Naves do Conhecimento — roteiro e interatividade.',
            en: 'Audiovisual course at Naves do Conhecimento — screenwriting and interactivity.',
          },
        },
        {
          year: '2014–2016',
          title: { pt: 'Workshops GIZ', en: 'GIZ Workshops' },
          description: {
            pt: 'Consultoria workshops em comunidades periféricas (GIZ) — educação e engajamento social.',
            en: 'Workshop consulting in peripheral communities (GIZ) — education and social engagement.',
          },
        },
        {
          year: '2003–2013',
          title: { pt: 'Viva Rio — Comunicadores Comunitários', en: 'Viva Rio — Community Communicators' },
          description: {
            pt: 'Formação de comunicadores comunitários no Viva Rio — coordenação de projeto e desenvolvimento de metodologias e produtos colaborativos (Viva Favela 2.0).',
            en: 'Training community communicators at Viva Rio — project coordination and development of collaborative methodologies and products (Viva Favela 2.0).',
          },
        },
      ],
    },
  },
  contact: {
    title: { pt: 'Contato', en: 'Contact' },
    email: 'mayrajuca@gmail.com',
    youtube: 'https://www.youtube.com/@mayrajuca_Plural',
    instagram: '@Mayra_Juca',
    linkedin: 'mayrajuca',
    phone: '21 98186-1010',
    website: 'www.mayrajuca.com/plural',
  },
  footer: {
    tagline: { pt: 'Memória · Audiovisual · Formação', en: 'Memory · Audiovisual · Training' },
    links: { pt: 'Links', en: 'Links' },
    contact: { pt: 'Contato', en: 'Contact' },
    copyright: {
      pt: 'Plural MJ LTDA. Todos os direitos reservados.',
      en: 'Plural MJ LTDA. All rights reserved.',
    },
  },
  photoPlaceholder: {
    pt: 'Foto de Mayra Jucá',
    en: 'Photo of Mayra Jucá',
  },
};

export function t(obj: Record<string, string>, locale: Locale): string {
  return obj[locale] || obj.pt || '';
}
