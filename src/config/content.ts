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
      pt: 'Entre 2021 e 2022, foi bolsista CAPES Print no Centre for Oral History and Digital Storytelling na Concordia University, em Montreal, onde permanece como pesquisadora afiliada. É integrante do Laboratório de Estudos da Cultura Visual do CPDOC/FGV e membro da rede de pesquisa BUG 404 sobre narrativas interativas. Sua atuação é marcada por uma abordagem multidisciplinar e pelo uso da história oral e do audiovisual a serviço de causas sociais e pesquisas nos campos da cultura e da política.',
      en: 'Between 2021 and 2022, she was a CAPES Print fellow at the Centre for Oral History and Digital Storytelling at Concordia University in Montreal, where she remains an affiliated researcher. She is a member of the Visual Culture Studies Lab at CPDOC/FGV and of the BUG 404 research network on interactive narratives. Her work is characterized by a multidisciplinary approach and the use of oral history and audiovisual media in service of social causes and research in the fields of culture and politics.',
    },
    education: [
      {
        degree: { pt: 'Doutorado em História, Política e Bens Culturais', en: 'PhD in History, Politics and Cultural Heritage' },
        institution: 'CPDOC / Fundação Getúlio Vargas',
        year: '2024',
        thesis: {
          pt: 'Tomadas da cidade em pleno AI-5: "Pira" e o superoitismo experimental urbano',
          en: 'City takes under AI-5: "Pira" and experimental urban Super-8 filmmaking',
        },
      },
      {
        degree: { pt: 'Mestrado em Bens Culturais e Projetos Sociais', en: 'Master\'s in Cultural Heritage and Social Projects' },
        institution: 'CPDOC / Fundação Getúlio Vargas',
        year: '2014',
        thesis: {
          pt: 'Vozes ativas das favelas 2.0: autorrepresentações midiáticas numa rede de comunicadores periféricos',
          en: 'Active voices from the favelas 2.0: media self-representations in a network of peripheral communicators',
        },
      },
      {
        degree: { pt: 'Bacharelado em Comunicação Social (Rádio e TV)', en: 'Bachelor\'s in Social Communication (Radio & TV)' },
        institution: { pt: 'Escola de Comunicação da UFRJ', en: 'UFRJ School of Communication' },
        year: '1997',
      },
    ],
    languages: [
      { lang: { pt: 'Português', en: 'Portuguese' }, level: { pt: 'Nativo', en: 'Native' } },
      { lang: { pt: 'Inglês', en: 'English' }, level: { pt: 'Fluente (IELTS Academic)', en: 'Fluent (IELTS Academic)' } },
      { lang: { pt: 'Espanhol', en: 'Spanish' }, level: { pt: 'Avançado', en: 'Advanced' } },
      { lang: { pt: 'Francês', en: 'French' }, level: { pt: 'Intermediário', en: 'Intermediate' } },
    ],
    educationTitle: { pt: 'Formação Acadêmica', en: 'Education' },
    languagesTitle: { pt: 'Idiomas', en: 'Languages' },
  },
  nav: {
    home: { pt: 'Início', en: 'Home' },
    sobre: { pt: 'Sobre', en: 'About' },
    editorial: { pt: 'Editorial', en: 'Editorial' },
    audiovisual: { pt: 'Audiovisual', en: 'Audiovisual' },
    eventos: { pt: 'Eventos', en: 'Events' },
    formacao: { pt: 'Formação', en: 'Teaching' },
    trajetoria: { pt: 'Trajetória', en: 'Career' },
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
  featured: {
    label: { pt: 'Destaque', en: 'Featured' },
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
        location: { pt: 'Soberano Bar-museu, São Paulo — 12º Festival Super-OFF', en: 'Soberano Bar-museu, São Paulo — 12th Festival Super-OFF' },
      },
      {
        date: { pt: '30 de setembro a 3 de outubro de 2025', en: 'September 30 – October 3, 2025' },
        location: { pt: 'XXVIII Encontro SOCINE, Universidade Federal do Pará, Belém', en: 'XXVIII SOCINE Conference, Federal University of Pará, Belém' },
      },
      {
        date: { pt: '6 de novembro de 2025', en: 'November 6, 2025' },
        location: { pt: 'IESP-UERJ, Rio de Janeiro — palestra e debate', en: 'IESP-UERJ, Rio de Janeiro — talk and debate' },
      },
    ],
    press: [
      { outlet: 'O Globo', author: 'Ancelmo Góis', title: { pt: 'Bienal: Jornalista lança livro sobre a importância das câmeras Super-8 para retratar a juventude dos anos 1970', en: 'Biennial: Journalist launches book on the importance of Super-8 cameras for portraying 1970s youth' } },
      { outlet: 'Associação Brasileira de Imprensa', title: { pt: 'Bienal: Jornalista lança livro sobre a importância das câmeras Super-8 para retratar a juventude dos anos 1970', en: 'Biennial: Journalist launches book on the importance of Super-8 cameras for portraying 1970s youth' } },
      { outlet: 'Rádio Roquette Pinto', title: { pt: 'Mayra Jucá lança livro sobre cinema e juventude nos anos 1970', en: 'Mayra Jucá launches book on cinema and youth in the 1970s' } },
      { outlet: 'Jornal do Commercio', title: { pt: 'Cinema e juventude contra a ditadura', en: 'Cinema and youth against the dictatorship' } },
      { outlet: 'TV Liberal (Bom Dia Pará)', title: { pt: 'Entrevista ao vivo — Encontro SOCINE, Belém', en: 'Live interview — SOCINE Conference, Belém' } },
    ],
    pressTitle: { pt: 'Na Imprensa', en: 'Press Coverage' },
    endorsements: [
      { name: 'Rubens Machado Jr.', affiliation: 'ECA-USP' },
      { name: 'Mariana Cavalcanti', affiliation: 'IESP-UERJ' },
      { name: 'Thaís Blank', affiliation: 'FGV-CPDOC' },
      { name: 'Patrícia Machado', affiliation: 'PUC-Rio' },
    ],
    purchase: {
      email: 'livrosuper8@gmail.com',
      store: { pt: 'Lojinha Cavídeo na Estação Net Rio, Rio de Janeiro', en: 'Lojinha Cavídeo at Estação Net Rio cinema, Rio de Janeiro' },
    },
    launchesTitle: { pt: 'Lançamentos', en: 'Launch Events' },
    endorsementsTitle: { pt: 'Endossos', en: 'Endorsements' },
    purchaseTitle: { pt: 'Onde Adquirir', en: 'Where to Buy' },
    publisherNote: { pt: 'Letra Capital — +28 anos como editora acadêmica.', en: 'Letra Capital — 28+ years as an academic publisher.' },
  },
  sections: {
    editorial: {
      title: { pt: 'Editorial', en: 'Editorial' },
      subtitle: {
        pt: '+20 anos de experiência na coordenação de projetos de livros de memórias, biografias e livros de autoria coletiva.',
        en: '20+ years of experience coordinating memoir, biography and collective authorship book projects.',
      },
      items: [
        { year: '2025', title: { pt: 'O Super-8 no AI-5', en: 'O Super-8 no AI-5' }, description: { pt: 'Autora do livro O Super-8 no AI-5: memórias de cinema e juventude na década de 1970, pela editora Letra Capital.', en: 'Author of O Super-8 no AI-5: memories of cinema and youth in the 1970s, published by Letra Capital.' }, link: '/o-super-8-no-ai-5' },
        { year: '2022', title: { pt: 'Revista História Oral', en: 'Revista História Oral' }, description: { pt: 'Publicação em Revista História Oral - entrevista bilingue. Sobre compartilhar histórias e o desafio criativo de mantê-las vivas: entrevista com Steven High, fundador do Centre for Oral History and Digital Storytelling na Concordia University, em Montreal.', en: 'Publication in Revista História Oral — bilingual interview. On sharing stories and the creative challenge of keeping them alive: interview with Steven High, founder of the Centre for Oral History and Digital Storytelling at Concordia University, Montreal.' }, link: '/historia-oral-steven-high' },
        { year: '2021–2025', title: { pt: 'Livros de Samuel Aarão Reis', en: 'Books by Samuel Aarão Reis' }, description: { pt: 'Coordenadora editorial dos livros do historiador Samuel Aarão Reis: Memória guerreira não se apaga nunca (2021); Conversas à beira-mar (2021); Escrevendo torto por linhas tortas e outras histórias (2024); e Longe do mar, quem eu sou? (2025).', en: 'Editorial coordinator for historian Samuel Aarão Reis\' books: Memória guerreira não se apaga nunca (2021); Conversas à beira-mar (2021); Escrevendo torto por linhas tortas e outras histórias (2024); and Longe do mar, quem eu sou? (2025).' } },
        { year: '2018', title: { pt: 'BUG Narrativas Interativas e Imersivas', en: 'BUG Interactive and Immersive Narratives' }, description: { pt: 'Coautora e coordenadora editorial do livro BUG Narrativas Interativas e Imersivas — contribuição teórica em publicação coletiva bilingue, Oi Futuro.', en: 'Co-author and editorial coordinator of BUG Interactive and Immersive Narratives — theoretical contribution to a bilingual collective publication, Oi Futuro.' } },
        { year: '2009', title: { pt: 'Viva Favela', en: 'Viva Favela' }, description: { pt: 'Coordenadora editorial do livro Viva Favela — curadoria de ensaios de fotógrafos periféricos.', en: 'Editorial coordinator of the book Viva Favela — curating photo essays by peripheral community photographers.' } },
        { year: '2006', title: { pt: 'Maria Muniz, A Sherazade do Rádio', en: 'Maria Muniz, The Scheherazade of Radio' }, description: { pt: 'Coautora do livro Maria Muniz, A Sherazade do Rádio — pesquisa biográfica e narrativa histórica.', en: 'Co-author of Maria Muniz, The Scheherazade of Radio — biographical research and historical narrative.' } },
      ],
    },
    audiovisual: {
      title: { pt: 'Audiovisual', en: 'Audiovisual' },
      subtitle: {
        pt: '+30 anos de carreira como produtora e pesquisadora de audiovisual, como roteirista e diretora e coordenadora de projetos de narrativas interativas e audiovisual expandido.',
        en: '30+ years as an audiovisual producer and researcher, screenwriter and director, and coordinator of interactive narrative and expanded audiovisual projects.',
      },
      items: [
        { year: '2020–2021', title: { pt: 'Elizabeth Bishop From Brazil, With Love', en: 'Elizabeth Bishop From Brazil, With Love' }, description: { pt: 'Pesquisa histórica e iconográfica para Vivian Ostrovsky — suporte a obra audiovisual experimental.', en: 'Historical and iconographic research for Vivian Ostrovsky — supporting an experimental audiovisual work.' } },
        { year: '2018', title: { pt: 'Para Virar o Jogo', en: 'Para Virar o Jogo (Turning the Tide)' }, description: { pt: 'Direção do vídeo clipe Para virar o jogo, campanha contra a violência armada, pelo controle das armas de fogo, para Instituto Igarapé.', en: 'Directed the music video Para virar o jogo, a campaign against gun violence and for firearms control, for Instituto Igarapé.' }, video: 'https://www.youtube.com/watch?v=ekLmLA3yvQc' },
        { year: '2016', title: { pt: 'Meu Rio Vale um Webdoc', en: 'Meu Rio Vale um Webdoc' }, description: { pt: 'Co-direção do webdoc Meu Rio Vale um Webdoc — projeto formativo e colaborativo das Naves do Conhecimento, Secretaria Municipal de Ciência e Tecnologia do Rio de Janeiro.', en: 'Co-directed the webdoc Meu Rio Vale um Webdoc — a collaborative training project by Naves do Conhecimento, Rio de Janeiro Municipal Science and Technology Department.' } },
        { year: '2011', title: { pt: 'PeriFeras Musicais', en: 'PeriFeras Musicais (Musical Peripheries)' }, description: { pt: 'Coordenação de criação coletiva do webdoc PeriFeras Musicais — projeto interativo sobre música periférica.', en: 'Coordinated collective creation of the webdoc PeriFeras Musicais — an interactive project on peripheral music.' } },
        { year: '2009', title: { pt: 'Pelos Cantos do Planeta Olinda', en: 'Pelos Cantos do Planeta Olinda' }, description: { pt: 'Roteirista e diretora do Documentário Pelos Cantos do Planeta Olinda — exibição em circuito do programa Cinema na Praça da Prefeitura Municipal de Olinda.', en: 'Screenwriter and director of the documentary Pelos Cantos do Planeta Olinda — screened in the Cinema na Praça circuit by the Municipality of Olinda.' }, video: 'https://www.youtube.com/watch?v=G1ZuVVJvE4s' },
        { year: '2009', title: { pt: 'Carne de Carnaval', en: 'Carne de Carnaval (Carnival Flesh)' }, description: { pt: 'Roteirista e diretora do Curta documentário Carne de Carnaval — Festival Cinesul e plataforma Porta Curtas.', en: 'Screenwriter and director of the short documentary Carne de Carnaval — Cinesul Festival and Porta Curtas platform.' }, video: 'https://www.youtube.com/watch?v=XdlrdEBLr1U' },
        { year: '2004', title: { pt: 'Viva Favela, um Documentário em Construção', en: 'Viva Favela, a Documentary in Progress' }, description: { pt: 'Coordenadora de produção coletiva - Viva Favela, um Documentário em Construção - Festival Films from the South, Oslo.', en: 'Collective production coordinator — Viva Favela, a Documentary in Progress — Films from the South Festival, Oslo.' } },
        { year: '', title: { pt: 'Um Outro Brasil', en: 'Um Outro Brasil (Another Brazil)' }, description: { pt: 'Assistente de direção do documentário Um Outro Brasil, dirigido por Sérgio Goldenberg no Centro de Criação de Imagem Popular (CECIP).', en: 'Assistant director on the documentary Um Outro Brasil, directed by Sérgio Goldenberg at the Centro de Criação de Imagem Popular (CECIP).' } },
        { year: '1994', title: { pt: 'Túnel', en: 'Túnel (Tunnel)' }, description: { pt: 'Roteirista e diretora do Curta de ficção Túnel — roteiro e filme premiados no Festival Núcleo Atlantic de vídeo. Adquirido pela plataforma Porta Curtas.', en: 'Screenwriter and director of the fiction short Túnel — script and film awarded at the Núcleo Atlantic Video Festival. Acquired by Porta Curtas platform.' }, video: 'https://www.youtube.com/watch?v=jDpSArZ7t7k' },
      ],
    },
    eventos: {
      title: { pt: 'Eventos', en: 'Events' },
      subtitle: {
        pt: 'Exposições, conferências, palestras, festivais e seminários — +20 anos de participação em eventos culturais, acadêmicos e audiovisuais.',
        en: 'Exhibitions, conferences, talks, festivals and seminars — 20+ years of participation in cultural, academic and audiovisual events.',
      },
      items: [
        { year: '2026', title: { pt: 'Cine Enseada, FGV', en: 'Cine Enseada, FGV' }, description: { pt: 'Comentarista convidada.', en: 'Guest commentator.' } },
        { year: '2025', title: { pt: 'Olhares Negros, Museu de Arte do Rio', en: 'Olhares Negros, Rio Art Museum' }, description: { pt: 'Coordenação de Comunicação e Marketing / ONG Luta pela Paz.', en: 'Communications and Marketing Coordination / Fight for Peace NGO.' }, video: 'https://www.youtube.com/watch?v=w3zsL4vVmjM' },
        { year: '2025', title: { pt: 'XXVIII Encontro SOCINE, Belém', en: 'XXVIII SOCINE Conference, Belém' }, description: { pt: 'Palestra e debate no XXVIII Encontro SOCINE na Universidade Federal do Pará (30 de setembro a 3 de outubro). Lançamento do livro O Super-8 no AI-5. Entrevista ao vivo para TV Liberal, programa Bom Dia Pará (3 de outubro).', en: 'Talk and debate at the XXVIII SOCINE Conference at the Federal University of Pará (September 30 – October 3). Book launch of O Super-8 no AI-5. Live interview on TV Liberal, Bom Dia Pará program (October 3).' } },
        { year: '2025', title: { pt: 'IESP-UERJ, Rio de Janeiro', en: 'IESP-UERJ, Rio de Janeiro' }, description: { pt: 'Palestra e debate sobre o livro O Super-8 no AI-5 no IESP-UERJ (6 de novembro), durante aula aberta da disciplina "Imagens e Pesquisas em Ciências Sociais", coordenada por Mariana Cavalcanti.', en: 'Talk and debate on the book O Super-8 no AI-5 at IESP-UERJ (November 6), during an open class of "Images and Research in Social Sciences", coordinated by Mariana Cavalcanti.' } },
        { year: '2025', title: { pt: '12º Festival Super-OFF, São Paulo', en: '12th Festival Super-OFF, São Paulo' }, description: { pt: 'Palestra e debate no 12º Festival Internacional de Cinema Super 8, com lançamento do livro O Super-8 no AI-5 no Soberano Bar-museu (16 de agosto).', en: 'Talk and debate at the 12th International Super 8 Film Festival, with book launch of O Super-8 no AI-5 at Soberano Bar-museu (August 16).' } },
        { year: '2025', title: { pt: 'Mostra Cavídeo 28 anos, Estação Net Rio', en: 'Mostra Cavídeo 28th Anniversary, Estação Net Rio' }, description: { pt: 'Sessão de autógrafos do livro O Super-8 no AI-5 na Lojinha Cavídeo, Estação Net Rio, Rua Voluntários da Pátria 35, Botafogo (8 de agosto).', en: 'Book signing of O Super-8 no AI-5 at Lojinha Cavídeo, Estação Net Rio, Rua Voluntários da Pátria 35, Botafogo (August 8).' } },
        { year: '2023', title: { pt: 'XXII Conferência da IOHA', en: 'XXII IOHA Conference' }, description: { pt: 'Oral History in a Digital and Audiovisual World, Fundação Getúlio Vargas - Rio de Janeiro. Organizadora, painelista e mediadora na Conferência Internacional.', en: 'Oral History in a Digital and Audiovisual World, Fundação Getúlio Vargas — Rio de Janeiro. Organizer, panelist and moderator at the International Conference.' } },
        { year: '2022', title: { pt: 'Concordia University, Montreal', en: 'Concordia University, Montreal' }, description: { pt: 'Emerging Scholars Seminar — Painelista na Concordia.', en: 'Emerging Scholars Seminar — Panelist at Concordia.' } },
        { year: '2022', title: { pt: 'Retrospectiva Sérgio Péo', en: 'Sérgio Péo Retrospective' }, description: { pt: 'Comentadora da sessão Retrospectiva Sérgio Péo, Mostra Curtametralha, Belo Horizonte.', en: 'Session commentator at the Sérgio Péo Retrospective, Curtametralha Festival, Belo Horizonte.' } },
        { year: '2021', title: { pt: 'Galeria Heterotopias', en: 'Galeria Heterotopias' }, description: { pt: 'Expositora convidada, Escola de Comunicação da UFRJ.', en: 'Guest exhibitor, UFRJ School of Communication.' } },
        { year: '2019', title: { pt: 'ANPUH — Simpósio Nacional de História, Recife', en: 'ANPUH — National History Symposium, Recife' }, description: { pt: 'Comunicação no Simpósio Temático "Arte e Cultura na Ditadura Militar". Tema: "Pira e o Super 8 como prática de resistência política".', en: 'Presentation at the thematic symposium "Art and Culture during the Military Dictatorship". Topic: "Pira and Super 8 as a practice of political resistance".' } },
        { year: '2019', title: { pt: 'CPDOC-FGV e IED-Rio', en: 'CPDOC-FGV and IED-Rio' }, description: { pt: 'Palestras sobre mídias digitais e o documentário interativo (CPDOC-FGV, dezembro) e documentários interativos (IED-Rio, setembro).', en: 'Lectures on digital media and interactive documentary (CPDOC-FGV, December) and interactive documentaries (IED-Rio, September).' } },
        { year: '2011', title: { pt: 'Films from the South, Oslo', en: 'Films from the South, Oslo' }, description: { pt: 'Debatedora no The Critical Room, festival de cinema Films from the South, Oslo, Noruega.', en: 'Debater at The Critical Room, Films from the South film festival, Oslo, Norway.' } },
        { year: '2003', title: { pt: 'Festival CinePE, Recife', en: 'CinePE Festival, Recife' }, description: { pt: 'Membro do júri de curtas-metragens do Festival de Cinema CinePE.', en: 'Short film jury member at the CinePE Film Festival.' } },
      ],
    },
    formacao: {
      title: { pt: 'Formação', en: 'Teaching' },
      subtitle: {
        pt: '+20 anos como professora e gestora de cursos e oficinas de audiovisual, roteiro para audiovisual expandido, produções colaborativas, interativas e imersivas.',
        en: '20+ years as instructor and manager of audiovisual courses and workshops, screenwriting for expanded audiovisual, collaborative, interactive and immersive productions.',
      },
      items: [
        { year: '2019–', title: { pt: 'Pós-Graduação em Cinema Documentário (FGV)', en: 'Graduate Program in Documentary Film (FGV)' }, description: { pt: 'Professora da Pós-Graduação em Cinema Documentário (FGV) — disciplina "Mídias Digitais e Novas Janelas do Documentário".', en: 'Professor at the Graduate Program in Documentary Film (FGV) — course "Digital Media and New Windows for Documentary".' } },
        { year: '2018', title: { pt: 'MBA em Gestão Cultural (FGV)', en: 'MBA in Cultural Management (FGV)' }, description: { pt: 'Professora do MBA em Gestão Cultural da FGV — disciplina "Metodologia de pesquisa qualitativa aplicada a projetos culturais".', en: 'Professor at the FGV MBA in Cultural Management — course "Qualitative research methodology applied to cultural projects".' } },
        { year: '2016', title: { pt: 'Naves do Conhecimento', en: 'Naves do Conhecimento' }, description: { pt: 'Curso de audiovisual nas Naves do Conhecimento — roteiro e interatividade.', en: 'Audiovisual course at Naves do Conhecimento — screenwriting and interactivity.' } },
        { year: '2014–2016', title: { pt: 'Workshops GIZ', en: 'GIZ Workshops' }, description: { pt: 'Consultoria workshops em comunidades periféricas (GIZ) — educação e engajamento social.', en: 'Workshop consulting in peripheral communities (GIZ) — education and social engagement.' } },
        { year: '2003–2013', title: { pt: 'Viva Rio — Comunicadores Comunitários', en: 'Viva Rio — Community Communicators' }, description: { pt: 'Formação de comunicadores comunitários no Viva Rio — coordenação de projeto e desenvolvimento de metodologias e produtos colaborativos (Viva Favela 2.0).', en: 'Training community communicators at Viva Rio — project coordination and development of collaborative methodologies and products (Viva Favela 2.0).' } },
      ],
    },
    trajetoria: {
      title: { pt: 'Trajetória', en: 'Career' },
      subtitle: {
        pt: '+30 anos de atuação profissional em comunicação, cultura e terceiro setor.',
        en: '30+ years of professional experience in communication, culture and the nonprofit sector.',
      },
      items: [
        { year: '2024–', title: { pt: 'Plural MJ', en: 'Plural MJ' }, description: { pt: 'Fundadora. Consultoria e treinamentos em comunicação estratégica, gestão de projetos de pesquisa e produção audiovisual e editorial.', en: 'Founder. Consulting and training in strategic communication, research project management and audiovisual/editorial production.' } },
        { year: '2021–', title: { pt: 'ONG Luta pela Paz', en: 'Fight for Peace NGO' }, description: { pt: 'Consultora (2021–2022) e gerente (2023–) de comunicação e marketing.', en: 'Consultant (2021–2022) and manager (2023–) of communications and marketing.' }, video: 'https://www.youtube.com/watch?v=n7a8qfQ-_S4' },
        { year: '2021–2022', title: { pt: 'CAPES Print — Concordia University, Montreal', en: 'CAPES Print Fellowship — Concordia University, Montreal' }, description: { pt: 'Bolsista CAPES Print no Centre for Oral History and Digital Storytelling na Concordia University — pesquisa em história oral e narrativas digitais.', en: 'CAPES Print fellow at the Centre for Oral History and Digital Storytelling at Concordia University — research in oral history and digital narratives.' } },
        { year: '2013–2021', title: { pt: 'Cria Media Lab', en: 'Cria Media Lab' }, description: { pt: 'Sócia fundadora e diretora de projetos de pesquisa, formação e audiovisual.', en: 'Co-founder and director of research, training and audiovisual projects.' } },
        { year: '2013–2019', title: { pt: 'Instituto Igarapé', en: 'Igarapé Institute' }, description: { pt: 'Consultora sênior de comunicação e mídias digitais.', en: 'Senior consultant in communications and digital media.' }, video: 'https://www.youtube.com/watch?v=582q4sKnyVo' },
        { year: '2003–2013', title: { pt: 'Viva Rio', en: 'Viva Rio' }, description: { pt: 'Coordenadora de projetos de mídia digital e audiovisual, com destaque para o Viva Favela 2.0.', en: 'Digital media and audiovisual project coordinator, notably Viva Favela 2.0.' } },
        { year: '1998–1999', title: { pt: 'Infoglobo (O Globo)', en: 'Infoglobo (O Globo)' }, description: { pt: 'Repórter e produtora de conteúdo na Infoglobo (O Globo e Globo Online).', en: 'Reporter and content producer at Infoglobo (O Globo and Globo Online).' } },
        { year: '1994–1995', title: { pt: 'Circo Voador — TVCV', en: 'Circo Voador — TVCV' }, description: { pt: 'Produtora no Circo Voador, diretora de episódios da "zine eletrônica" TVCV exibida no telão antes dos shows.', en: 'Producer at Circo Voador, director of episodes of the "electronic zine" TVCV screened before live shows.' }, video: 'https://www.youtube.com/watch?v=2lv2D16qG1U' },
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
};

export function t(obj: Record<string, string>, locale: Locale): string {
  return obj[locale] || obj.pt || '';
}
