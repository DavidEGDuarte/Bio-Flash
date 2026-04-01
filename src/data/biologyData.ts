export interface Question {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Microtext {
  id: string;
  title: string;
  content: string;
  questions: Question[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  microtexts: Microtext[];
}

export const biologyData: Module[] = [
  {
    id: "intro-bio",
    title: "Introdução à Biologia",
    description: "O que é vida e como a estudamos.",
    icon: "🔬",
    microtexts: [
      {
        id: "what-is-bio",
        title: "O que é Biologia?",
        content: "A Biologia é a ciência que estuda a vida em todas as suas formas. O nome vem do grego: 'bios' significa vida e 'logos' significa estudo. Ela nos ajuda a entender desde como uma pequena bactéria funciona até como grandes ecossistemas, como a Amazônia, se mantêm equilibrados. Basicamente, se algo nasce, cresce, se reproduz ou interage com o ambiente, a biologia está lá para explicar!",
        questions: [
          {
            id: "q1",
            text: "O que significa o termo 'bios' na palavra Biologia?",
            options: ["Estudo", "Vida", "Terra", "Célula"],
            correctIndex: 1,
            explanation: "Bios vem do grego e significa vida. Por isso, Biologia é o estudo da vida!"
          },
          {
            id: "q2",
            text: "Qual é o principal objeto de estudo da Biologia?",
            options: ["As rochas", "Os astros", "A vida", "Os números"],
            correctIndex: 2,
            explanation: "A Biologia foca exclusivamente nos seres vivos e nos processos que sustentam a vida."
          },
          {
            id: "q3",
            text: "A Biologia estuda apenas animais grandes?",
            options: ["Sim, apenas mamíferos", "Não, estuda desde bactérias até ecossistemas", "Sim, apenas o que vemos a olho nu", "Não, estuda apenas plantas"],
            correctIndex: 1,
            explanation: "A Biologia é vasta e estuda desde seres microscópicos até grandes sistemas complexos."
          },
          {
            id: "q4",
            text: "Por que a Biologia é importante para entender a Amazônia?",
            options: ["Para saber o preço da madeira", "Para entender o equilíbrio do ecossistema", "Para medir a distância entre as árvores", "Para contar quantas pedras existem lá"],
            correctIndex: 1,
            explanation: "A Biologia estuda as interações entre os seres vivos e o ambiente, o que é essencial para entender ecossistemas."
          },
          {
            id: "q5",
            text: "Se algo interage com o ambiente e se reproduz, ele é objeto de estudo de qual ciência?",
            options: ["Física", "Química", "Biologia", "Geografia"],
            correctIndex: 2,
            explanation: "Interação com o ambiente e reprodução são características fundamentais dos seres vivos, estudados pela Biologia."
          }
        ]
      },
      {
        id: "levels-org",
        title: "Níveis de Organização",
        content: "Na biologia, a vida é organizada em níveis, como se fossem peças de um quebra-cabeça. Tudo começa com os átomos, que formam moléculas. As moléculas formam as células (a unidade básica da vida). Um conjunto de células forma um tecido, vários tecidos formam um órgão, e vários órgãos formam um sistema. No final, todos os sistemas juntos formam o organismo completo, como você!",
        questions: [
          {
            id: "q6",
            text: "Qual é considerada a unidade básica da vida?",
            options: ["Átomo", "Molécula", "Célula", "Tecido"],
            correctIndex: 2,
            explanation: "A célula é a menor parte de um ser vivo que consegue realizar todas as funções vitais."
          },
          {
            id: "q7",
            text: "O que é formado por um conjunto de tecidos que trabalham juntos?",
            options: ["Molécula", "Órgão", "Sistema", "Organismo"],
            correctIndex: 1,
            explanation: "Quando diferentes tecidos se unem para realizar uma função específica, eles formam um órgão, como o coração."
          },
          {
            id: "q8",
            text: "Qual é a sequência correta de organização?",
            options: ["Célula -> Tecido -> Órgão", "Órgão -> Célula -> Tecido", "Tecido -> Órgão -> Célula", "Célula -> Órgão -> Tecido"],
            correctIndex: 0,
            explanation: "As células formam tecidos, que por sua vez formam os órgãos."
          },
          {
            id: "q9",
            text: "O que vem antes da célula na escala de organização?",
            options: ["Tecido", "Órgão", "Moléculas e Átomos", "Organismo"],
            correctIndex: 2,
            explanation: "Antes da vida surgir no nível celular, temos a organização química: átomos e moléculas."
          },
          {
            id: "q10",
            text: "Um ser humano completo representa qual nível de organização?",
            options: ["Sistema", "Tecido", "Organismo", "Órgão"],
            correctIndex: 2,
            explanation: "O organismo é o nível mais complexo de um indivíduo, formado pela união de todos os seus sistemas."
          }
        ]
      }
    ]
  },
  {
    id: "cytology",
    title: "Citologia: A Célula",
    description: "Descubra o incrível mundo dentro das células.",
    icon: "🧬",
    microtexts: [
      {
        id: "cell-theory",
        title: "Teoria Celular",
        content: "A Teoria Celular diz três coisas fundamentais: 1. Todos os seres vivos são formados por células. 2. A célula é a unidade funcional da vida (onde tudo acontece). 3. Uma célula só nasce de outra célula que já existia. Isso significa que, não importa se é uma baleia ou uma grama, tudo o que é vivo depende de células para existir e funcionar!",
        questions: [
          {
            id: "q11",
            text: "Segundo a Teoria Celular, do que são feitos todos os seres vivos?",
            options: ["Água", "Células", "Ar", "Energia"],
            correctIndex: 1,
            explanation: "A base de todo ser vivo, segundo a teoria, é a célula."
          },
          {
            id: "q12",
            text: "Como surge uma nova célula?",
            options: ["Do nada", "A partir de outra célula preexistente", "A partir de poeira", "A partir de luz solar"],
            correctIndex: 1,
            explanation: "As células se dividem para criar novas células; elas não surgem do nada."
          },
          {
            id: "q13",
            text: "A célula é chamada de unidade 'funcional' porque:",
            options: ["Ela é bonita", "Ela é pequena", "Nela ocorrem as reações vitais", "Ela não faz nada"],
            correctIndex: 2,
            explanation: "Dizemos que é funcional porque é dentro dela que a 'mágica' da vida acontece (metabolismo)."
          },
          {
            id: "q14",
            text: "Uma baleia e uma planta seguem a Teoria Celular?",
            options: ["Apenas a baleia", "Apenas a planta", "Nenhuma das duas", "Ambas, pois são seres vivos"],
            correctIndex: 3,
            explanation: "A teoria vale para TODOS os seres vivos, sem exceção."
          },
          {
            id: "q15",
            text: "Quantos pilares principais tem a Teoria Celular básica?",
            options: ["Um", "Dois", "Três", "Dez"],
            correctIndex: 2,
            explanation: "São três: todos têm células, unidade funcional e origem em células preexistentes."
          }
        ]
      }
    ]
  },
  {
    id: "membranes",
    title: "Membrana Plasmática",
    description: "A fronteira inteligente da célula.",
    icon: "🛡️",
    microtexts: [
      {
        id: "membrane-structure",
        title: "Estrutura da Membrana",
        content: "A membrana plasmática é como a pele da célula. Ela é formada por uma 'bicamada fosfolipídica' (duas camadas de gordura) com proteínas mergulhadas nela. Imagine um mar de gordura onde as proteínas são icebergs flutuando. Essa estrutura é chamada de Mosaico Fluido porque as peças se movem o tempo todo, permitindo que a célula seja flexível e resistente!",
        questions: [
          {
            id: "q16",
            text: "Qual é o principal componente da membrana plasmática?",
            options: ["Açúcar", "Fosfolipídios (gordura)", "DNA", "Vitamina C"],
            correctIndex: 1,
            explanation: "A membrana é composta principalmente por uma bicamada de fosfolipídios."
          },
          {
            id: "q17",
            text: "Por que o modelo da membrana se chama 'Mosaico Fluido'?",
            options: ["Porque é rígido como pedra", "Porque as peças se movem e deslizam", "Porque é feito de vidro", "Porque é estático"],
            correctIndex: 1,
            explanation: "As moléculas da membrana não estão presas; elas se movem lateralmente, dando fluidez."
          },
          {
            id: "q18",
            text: "O que seriam os 'icebergs' no modelo do mosaico fluido?",
            options: ["As gorduras", "A água", "As proteínas", "O núcleo"],
            correctIndex: 2,
            explanation: "As proteínas ficam mergulhadas na camada de gordura, parecendo icebergs no mar."
          },
          {
            id: "q19",
            text: "A membrana plasmática é comparada a quê no texto?",
            options: ["Ao cérebro", "À pele da célula", "Ao estômago", "Aos ossos"],
            correctIndex: 1,
            explanation: "Assim como a pele nos protege, a membrana protege e delimita a célula."
          },
          {
            id: "q20",
            text: "Quantas camadas de fosfolipídios formam a membrana?",
            options: ["Uma", "Duas", "Três", "Nenhuma"],
            correctIndex: 1,
            explanation: "É uma bicamada, ou seja, duas camadas sobrepostas."
          }
        ]
      },
      {
        id: "perm-select",
        title: "Permeabilidade Seletiva",
        content: "A membrana não deixa qualquer um entrar. Ela tem 'permeabilidade seletiva', o que significa que ela seleciona o que entra e o que sai da célula. Nutrientes e oxigênio entram, enquanto resíduos saem. É como o segurança de uma festa: ele confere o convite antes de deixar passar. Isso mantém o interior da célula sempre equilibrado e seguro.",
        questions: [
          {
            id: "q21",
            text: "O que significa 'permeabilidade seletiva'?",
            options: ["Deixa tudo passar", "Não deixa nada passar", "Seleciona o que entra e sai", "Destrói tudo o que toca"],
            correctIndex: 2,
            explanation: "A membrana controla a entrada e saída de substâncias para manter a saúde celular."
          },
          {
            id: "q22",
            text: "A quem a membrana é comparada para explicar a seleção?",
            options: ["A um cozinheiro", "A um segurança de festa", "A um motorista", "A um professor"],
            correctIndex: 1,
            explanation: "O segurança controla quem entra, assim como a membrana controla as moléculas."
          },
          {
            id: "q23",
            text: "O que geralmente entra na célula através da membrana?",
            options: ["Lixo", "Veneno", "Nutrientes e Oxigênio", "Pedras"],
            correctIndex: 2,
            explanation: "A célula precisa de 'combustível' (nutrientes) e oxigênio para funcionar."
          },
          {
            id: "q24",
            text: "Por que a seleção é importante para a célula?",
            options: ["Para ficar bonita", "Para manter o equilíbrio interno", "Para mudar de cor", "Para ficar maior"],
            correctIndex: 1,
            explanation: "O equilíbrio (homeostase) é vital para que a célula não morra ou adoeça."
          },
          {
            id: "q25",
            text: "A membrana deixa resíduos (lixo) saírem da célula?",
            options: ["Sim, é necessário descartar", "Não, guarda tudo dentro", "Apenas se a célula explodir", "Não, resíduos não existem"],
            correctIndex: 0,
            explanation: "A excreção de resíduos é uma das funções controladas pela membrana."
          }
        ]
      }
    ]
  }
];
