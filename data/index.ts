export interface Stat {
  n: string;
  label: string;
}

export interface SkillGroup {
  cat: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  mode: string;
  stack: string[];
  points: string[];
}

export interface Education {
  course: string;
  school: string;
  period: string;
  status: string;
}

export interface PortfolioData {
  name: string;
  fullName: string;
  age: number;
  roles: string[];
  location: string;
  email: string;
  linkedin: string;
  github: string;
  bio: string;
  bio2: string;
  stats: Stat[];
  skills: SkillGroup[];
  experience: Experience[];
  education: Education[];
}

const data: PortfolioData = {
  name: "Pietro Kucharski",
  fullName: "Pietro Santos Kucharski Pereira Lima",
  age: 23,
  roles: [
    "Desenvolvedor Full Stack Web",
    "TypeScript · Next.js · Node.js",
    "React · NestJS · Prisma ORM",
  ],
  location: "Brusque, SC — Brasil",
  email: "pietrokucharski@hotmail.com",
  linkedin: "https://www.linkedin.com/in/pietro-kucharski-4b624b1b8/",
  github: "https://github.com/PietroKucharski",
  bio: "Desenvolvedor Full Stack com foco em aplicações modernas usando TypeScript, Next.js, Node.js e React. Atuo no front e back-end, com experiência em APIs RESTful, integração com serviços externos e modelagem de bancos de dados relacionais. Já desenvolvi sistemas reais para diferentes empresas — gestão de fornecedores, orçamentos e ERP.",
  bio2: "Perfil colaborativo, comprometido com boas práticas de código e em constante evolução técnica. Inglês para leitura e escrita (B1).",
  stats: [
    { n: "3+", label: "anos de\nexperiência" },
    { n: "03", label: "empresas\natendidas" },
    { n: "02", label: "graduações\ncursadas" },
    { n: "20+", label: "tecnologias\ndominadas" },
  ],
  skills: [
    {
      cat: "Front-end",
      items: [
        "TypeScript",
        "JavaScript",
        "React",
        "Next.js",
        "HTML",
        "CSS",
        "TailwindCSS",
      ],
    },
    {
      cat: "Back-end",
      items: ["Node.js", "NestJS", "REST APIs", "Prisma ORM", "Drizzle"],
    },
    {
      cat: "Banco de Dados",
      items: ["MySQL", "PostgreSQL"],
    },
    {
      cat: "Mobile",
      items: ["React Native", "Expo"],
    },
    {
      cat: "DevOps & Ferramentas",
      items: ["Docker", "Git", "GitHub"],
    },
    {
      cat: "Complementares",
      items: ["Java", "Spring Boot", "Python", "Axios"],
    },
  ],
  experience: [
    {
      company: "Grupo Glatz",
      role: "Desenvolvedor Full Stack",
      period: "Set 2025 — Mai 2026",
      mode: "Híbrido · Gaspar, SC",
      stack: ["TypeScript", "Next.js", "Node.js", "Git"],
      points: [
        "Desenvolvimento e manutenção de aplicações web com TypeScript, Next.js e Node.js.",
        "Sistema interno de gestão de fornecedores para o Grupo Glatz — cadastro, acompanhamento e avaliação.",
        "Sistema web de gestão de orçamentos para a Madepar (Lages/SC).",
        "Módulo de ERP para a Tecnoraster (Blumenau/SC), empresa de rastreamento veicular.",
      ],
    },
    {
      company: "KRAH",
      role: "Desenvolvedor Júnior",
      period: "Set 2022 — Ago 2023",
      mode: "Mobile · Android & iOS",
      stack: ["Expo", "NestJS", "Prisma", "Python"],
      points: [
        "Aplicação mobile (Android/iOS) para o sistema 5S da empresa, arquitetura MVC.",
        "Stack: TypeScript/JavaScript, Expo no front mobile, NestJS no back-end, autenticação com Bcrypt.",
        "Scripts em Python para automação e otimização de processos em banco de dados.",
      ],
    },
    {
      company: "Intelligence for Innovation",
      role: "Estagiário · QA",
      period: "Jul 2021 — Nov 2021",
      mode: "I4I · Testes & QA",
      stack: ["Genexus", "Testes", "Docs técnicas"],
      points: [
        "Testes automatizados e manuais de funcionalidades com a ferramenta Genexus.",
        "Planejamento, desenvolvimento e aplicação de testes; análise de resultados.",
        "Elaboração de documentações técnicas detalhadas — cenários, métodos e conclusões.",
      ],
    },
  ],
  education: [
    {
      course: "Big Data e Inteligência Analítica",
      school: "Uniasselvi",
      period: "Fev 2022 — Dez 2024",
      status: "Concluído",
    },
    {
      course: "Sistemas de Informação",
      school: "UNIFEBE",
      period: "Jul 2025 — atual",
      status: "Cursando",
    },
  ],
};

export default data;
