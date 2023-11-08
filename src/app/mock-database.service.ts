import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockDatabaseService {
  private data: any[] = [];

  constructor() {
    this.data = [
      {
        id: 1,
        photo: 'assets/laisLadeia.png',
        name: 'Laís Ladeia B. Rocha',
        status: 'Psicóloga Responsável pelo Curso',
        description:
          'Psicóloga com título de especialista em Psicologia Clínica e Psicologia da Saúde pelo Conselho Federal de Psicologia e especialista em Saúde Mental e Psiquiatria Multiprofissional no Instituto de Psiquiatria do Hospital das Clínicas da USP. Formação complementar em Psicopatologia, Psicofarmacologia e Psicologia Hospitalar. Atuante no Sistema Único de Saúde (SUS) desde 2016. Possui experiência em Hospital Público Infantil, Atenção Primária em Unidade Básica de Saúde, Atenção Especializada em Residência Terapêutica, CAPS III Adulto e atualmente em CAPS II Infanto-juvenil.       Professora em curso de pós-graduação, formações, cursos, palestras e mentoria para profissionais do SUS. Diversas participações em Congressos e Eventos de Saúde Pública com apresentações orais, rodas de conversa e oficinas.Criadora do Instituto de Ensino e Aprendizagem em Psicologia da Saúde. Apaixonada pelo SUS, pelo estudo e pelo ensino descomplicado.',
      },
      {
        id: 2,
        photo: '',
        name: 'Prof. Esp. \nMárcia Santos Miranda',
        status: 'Psicóloga especialista em Psicoterapia Ambulatorial',
        description:
          'Atuou na Atenção Especializada em Saúde Mental como Acompanhante Terapêutica em Serviço Residencial Terapêutico (SRT)  em articulação com CAPS III e demais equipamentos do SUS entre 2016 e 2019.        Foi colaboradora do Núcleo de Direitos Humanos e Grupo de Trabalho de Psicologia e Relações Raciais do Conselho Regional de Psicologia de São Paulo entre 2015 e 2022.     Atualmente trabalha com Medidas Socioeducativas de Internação na Fundação Casa.',
      },
      {
        id: 3,
        photo: '',
        name: 'Prof. Me. Karen Pereira Bisconcini CRP 06/117815',
        status:
          'Mestra em Gerontologia pela Escola de Artes, Ciências e Humanidades - USP',
        description:
          'Psicóloga formada pela Universidade Estadual de Londrina - PR. Especialista em Psicologia Hospitalar pelo Hospital das Clínicas da Faculdade de Medicina da USP. Especialista pelo programa de Residência Multiprofissional em Saúde do Idoso em Cuidados Paliativos pela Faculdade de Medicina da USP. Mestra em Gerontologia pela Escola de Artes, Ciências e Humanidades - USP.Atua como Psicóloga Clínica e Hospitalar com experiência em hospital público estadual, professora de pós graduação nas áreas da Psicologia Hospitalar, Cuidados Paliativos e Envelhecimento.',
      },
      {
        id: 4,
        photo: '',
        name: 'Prof. Esp. Jordana Borges Gomes CRP 09/14760',
        status: 'Psicóloga com título de especialista em Saúde Publica (UNIP)',
        description:
          'Atualmente especializando em Tanatologia e Cuidados Paliativos, é Psicóloga Hospitalar do Hospital do Câncer de Rio Verde, atuando no Hospital Geral, Enfermaria da Clínica Médica e UTI Adulto. Preceptora de estágio de Psicologia Hospitalar neste mesmo hospital, sendo responsável pelas estagiárias de Psicologia  no Sistema Único de Saúde (SUS).',
      },
      {
        id: 5,
        photo: '',
        name: 'Prof. Me. Luísa Volpato CRP 06/140900',
        status: 'Psicóloga Mestra em Ciências da Saúde pela UNIFESP',
        description:
          'Psicóloga em hospital público de referência na Baixada Santista em São Paulo.Especialista em Saúde Neonatal pelo programa de Residência Multiprofissional  da USF. Especialista em Psicologia Hospitalar pela UCAM.',
      },
      {
        id: 6,
        photo: '',
        name: 'Prof. Esp. Amanda Sacramento Maia CRP 03/21258',
        status: 'Psicologa Especialista em Psicologia Hospitalar',
        description:
          'Especialista em Psicologia Hospitalar (Uniruy e Conselho Federal de Psicologia). Pós Graduanda em Cuidados Paliativos e Terapia da dor (PUC Minas) e em Saúde Mental, Psicopatologia e Atenção Psicossocial (UNOPAR). Formação complementar em Tanatologia. Responsável por serviço de Psicologia em unidade pública de alta complexidade em Nefrologia em Salvador/Ba. Coordenadora e Idealizadora do Catavento Instituto. Professora universitária em temáticas voltadas para adoecimento crônico, agudo, psicossomatica, luto e Psicologia Hospitalar.',
      },
      {
        id: 7,
        photo: '',
        name: 'Prof. Esp. Bruno Logan Azevedo CRP 06/112009',
        status: 'Especialista em Psicopatologia e Dependência Química',
        description:
          'Psicólogo e Redutor de Danos. Especialista em Psicopatologia e Dependência Química. Atuou no Centro de Convivência É de Lei e foi Redutor de Danos no Respire. Atualmente psicólogo do Consultório na Rua de Diadema - SP. Conselheiro no Conselho do Estado de São Paulo de políticas sobre drogas (CONED), secretário executivo da Rede Brasileira de Redução de Danos e Direitos Humanos (REDUC). Apresentador do canal do YouTube "RD com Logan".',
      },
      {
        id: 8,
        photo: '',
        name: 'Prof. Esp. Roberta Lindoni CRP 06/143093',
        status:
          'Psicóloga especialista em Gestão de Projetos Sociais com Famílias',
        description:
          'Especializanda em Saúde Mental pela Faculdade de Ciências Médicas da Santa Casa de São Paulo (2023). Possui experiência no Sistema Único de Assistência Social (SUAS)  em equipamento voltado à pessoas com direitos violados e em situação de violência como o Núcleo de Proteção Jurídico Social e Apoio Psicológico (NPJ) e Centro de Defesa e Convivência da Mulher (CDCM), serviços vinculados à Secretaria Municipal de Assistência e Desenvolvimento Social, no município de São Paulo. Atualmente é psicóloga na atenção básica (SUS) em equipe multidisciplinar. Interessada pelas áreas ligadas à garantia de direitos e promoção de saúde, envolvendo Políticas Públicas, Direitos Humanos, Assistência Social, Saúde Mental e Saúde Coletiva.',
      },
      {
        id: 9,
        photo: '',
        name: 'Prof. Esp. Thays S. Costa de Souza CRP 08/32783',
        status: 'Psicóloga Especialista em Urgência e Emergência',
        description:
          'Psicóloga Especialista em Urgência e Emergência pela Secretaria de Saúde de São José dos Pinhais pelo Programa de Residência Multiprofissional. Atuação em Unidade de Pronto-Atendimento (UPA), Centro de Atenção Psicossocial (CAPS), Hospital Geral (UTI e Pronto-Socorro) e SAMU. Docente em cursos de Psicologia da Saúde. Tem como interesse de estudos temas como saúde mental, suicídio, luto e psicologia hospitalar.',
      },
      {
        id: 10,
        photo: '',
        name: 'Prof. Me. Isadora J. Pires Mattos CRP 14/06223-6',
        status: 'Psicóloga Especialista em Cuidados Paliativos',
        description:
          'Mestre em Psicologia (UFMS).  Possui Formação em Tanatologia e Formanda em Perdas e Lutos. Atua no Programa "Melhor em Casa" - SAD (Serviço de Atenção Domiciliar) com pacientes em cuidados paliativos no Sistema Único de Saúde SUS e com demandas de Perdas e Lutos desde 2018.',
      },
      {
        id: 11,
        photo: '',
        name: 'Prof. Esp. Raíssa Righetti Ramos CRP 06/117730',
        status: 'Psicologa Especialista em Psicologia Hospitalar',
        description:
          'Psicologa com título de especialista em Psicologia Hospitalar pelo Hospital das Clínicas da Faculdade de Medicina da USP e em Psicologia da Saúde pela UNIFESP no programa de Residência Multiprofissional. Membro do Núcleo de Psicologia Hospitalar do CRPABC. Atuou como Psicóloga Hospitalar em serviço público nos setores de Urgência e Emergência e UTI. Hoje atua como psicóloga do SUS em Unidade Básica de Saúde (UBS) integrando a equipe multidisciplinar.',
      },
      {
        id: 12,
        photo: '',
        name: 'Prof. Esp. Mayara Antunes CRP 06/134334',
        status: 'Psicóloga Especialista em Saúde da Família',
        description:
          'Psicóloga e especialista em  Saúde da Família pelo Programa de Residência Multiprofissional da Secretaria de Saúde de São Bernardo do Campo - SP. Experiência em atenção especializada (CAPS III), atendimento a pessoas em urgência em saúde mental, acompanhamento a pacientes em internação psiquiátrica, triagem de pacientes por demanda espontânea, avaliação e acompanhamento de pacientes em risco de suicídio, atendimentos em grupo, individual e articulação intersetorial para discussão de casos de alta complexidade. Experiência na atenção primária em prevenção e promoção à saúde, atendimento para pacientes em  todas as linhas de cuidado, palestras em sala de espera, matriciamentos para as equipes de Estratégia Saúde da Família. Experiência na coordenação da equipe multiprofissional e de enfermagem.',
      },
      {
        id: 13,
        photo: '',
        name: 'Prof. Esp. Lívia Nádia A. dos Santos CRP 11/17914',
        status: 'Psicóloga Especialista em Psicologia Hospitalar',
        description:
          'Psicóloga com título de especialista em Psicologia Hospitalar. Residente (R) em Cancerologia pela Escola de Saúde Pública do Ceará. Atua nos setores de Quimioterapia, Radioterapia, Ambulatório de Psico-Oncologia e Leitos de Enfermaria no geral. Durante a graduação foi estagiária em Centro de Atenção Psicossocial (CAPS) e Plantão Psicológico em Saúde Mental. Possui formação em Psicologia Hospitalar, Psico-oncologia, Cuidados Paliativos, Plantão Psicológico, Psicoterapia Breve Focal e Tanatologia. Autora de capítulo em dois livros de Psicologia da Saúde que versam sobre Plantão Psicológico em Saúde Mental: "Plantão Psicológico na atenção básica: desafios e potencialidades de uma atuação territorializada dentro da comunidade" e "Plantão Psicológico como estratégia de cuidado em saúde mental".',
      },
      {
        id: 14,
        photo: '',
        name: 'Prof. Me. Milena Dias Corrêa CRP 06/153662',
        status: 'Psicóloga e Mestre em Ciências da Saúde pela UNIFESP',
        description:
          'Experiência profissional em Atenção Primária à Saude no SUS desde 2018 com capacitações em Redes de Atenção à Violência por parceiro íntimo e Políticas de Equidade em Saúde e o Enfrentamento das Violências.  Atuação em Unidade Básica de Saúde como psicóloga em equipe multidisciplinar. Pesquisadora e coorientadora de trabalhos sobre violência de gênero, interseccionalidade e saúde pública em territórios vulneráveis desde 2019.',
      },
    ];
  }

  getAllData(): any[] {
    return this.data;
  }
}
