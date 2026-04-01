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
      },
      {
        id: "pro-vs-eu",
        title: "Procariontes vs Eucariontes",
        content: "Existem dois tipos principais de células: procariontes e eucariontes. As procariontes (como as bactérias) são simples e não possuem núcleo; o DNA fica solto no citoplasma. Já as eucariontes (como as suas) são complexas, possuem um núcleo protegido por uma membrana e várias organelas. É como comparar uma barraca de acampamento (simples) com uma casa cheia de cômodos (complexa).",
        questions: [
          {
            id: "q26",
            text: "Qual é a principal diferença entre procariontes e eucariontes?",
            options: ["O tamanho", "A presença de núcleo", "A cor", "A idade"],
            correctIndex: 1,
            explanation: "Eucariontes possuem núcleo definido, enquanto procariontes não."
          },
          {
            id: "q27",
            text: "Onde fica o DNA em uma célula procarionte?",
            options: ["No núcleo", "Solto no citoplasma", "Fora da célula", "Na membrana"],
            correctIndex: 1,
            explanation: "Como não há núcleo, o material genético fica disperso no citoplasma."
          },
          {
            id: "q28",
            text: "As bactérias são exemplos de quais células?",
            options: ["Eucariontes", "Procariontes", "Vírus", "Plantas"],
            correctIndex: 1,
            explanation: "Bactérias são os exemplos mais clássicos de organismos procariontes."
          },
          {
            id: "q29",
            text: "Qual célula é comparada a uma 'casa cheia de cômodos' no texto?",
            options: ["Procarionte", "Eucarionte", "Bactéria", "Átomo"],
            correctIndex: 1,
            explanation: "As células eucariontes são complexas e organizadas em compartimentos (organelas)."
          },
          {
            id: "q30",
            text: "Células humanas são de qual tipo?",
            options: ["Procariontes", "Eucariontes", "Invisíveis", "Simples"],
            correctIndex: 1,
            explanation: "Nossas células possuem núcleo e organelas complexas, sendo eucariontes."
          }
        ]
      }
    ]
  },
  {
    id: "organelles",
    title: "Organelas Celulares",
    description: "As pequenas fábricas dentro da célula.",
    icon: "🏭",
    microtexts: [
      {
        id: "mitochondria",
        title: "Mitocôndrias: Energia",
        content: "As mitocôndrias são as 'usinas de energia' da célula. Elas realizam a respiração celular, processo que transforma o açúcar dos alimentos e o oxigênio em energia (ATP) para a célula funcionar. Sem elas, você não teria força nem para piscar os olhos! Elas possuem seu próprio DNA e são encontradas em grande quantidade em células que gastam muita energia, como as dos músculos.",
        questions: [
          {
            id: "q31",
            text: "Qual é a principal função da mitocôndria?",
            options: ["Produzir açúcar", "Produzir energia (ATP)", "Limpar a célula", "Guardar DNA"],
            correctIndex: 1,
            explanation: "A mitocôndria é responsável pela respiração celular, que gera energia."
          },
          {
            id: "q32",
            text: "Qual processo a mitocôndria realiza?",
            options: ["Fotossíntese", "Respiração celular", "Digestão", "Divisão"],
            correctIndex: 1,
            explanation: "A respiração celular é o processo de quebra de glicose para gerar energia."
          },
          {
            id: "q33",
            text: "Onde encontramos mais mitocôndrias no corpo?",
            options: ["Nos ossos", "Nos músculos", "No cabelo", "Nas unhas"],
            correctIndex: 1,
            explanation: "Células musculares exigem muita energia, por isso têm muitas mitocôndrias."
          },
          {
            id: "q34",
            text: "O que a mitocôndria usa para gerar energia?",
            options: ["Apenas água", "Açúcar e Oxigênio", "Luz solar", "Gás carbônico"],
            correctIndex: 1,
            explanation: "Ela quebra a glicose (açúcar) na presença de oxigênio."
          },
          {
            id: "q35",
            text: "A mitocôndria possui DNA próprio?",
            options: ["Não, só o núcleo tem", "Sim, ela é especial", "Apenas em plantas", "Apenas em bactérias"],
            correctIndex: 1,
            explanation: "Sim, mitocôndrias têm seu próprio material genético, diferente do núcleo."
          }
        ]
      },
      {
        id: "ribosomes",
        title: "Ribossomos: Proteínas",
        content: "Os ribossomos são pequenas fábricas de proteínas. Eles 'leem' as instruções do DNA e montam as proteínas, que são os tijolos que constroem e reparam o nosso corpo. Eles podem estar soltos no citoplasma ou grudados no Retículo Endoplasmático Rugoso. Sem proteínas, não teríamos músculos, pele, cabelos ou enzimas para digerir a comida!",
        questions: [
          {
            id: "q36",
            text: "O que os ribossomos produzem?",
            options: ["Gordura", "Energia", "Proteínas", "Açúcar"],
            correctIndex: 2,
            explanation: "A função exclusiva dos ribossomos é a síntese (produção) de proteínas."
          },
          {
            id: "q37",
            text: "A que os ribossomos são comparados no texto?",
            options: ["Usinas", "Fábricas", "Tijolos", "Seguranças"],
            correctIndex: 1,
            explanation: "Eles fabricam as proteínas seguindo as ordens do DNA."
          },
          {
            id: "q38",
            text: "Onde os ribossomos podem ser encontrados?",
            options: ["Apenas no núcleo", "No citoplasma ou no Retículo Rugoso", "Fora da célula", "Apenas nos músculos"],
            correctIndex: 1,
            explanation: "Eles ficam dispersos ou associados ao retículo endoplasmático."
          },
          {
            id: "q39",
            text: "Qual é a importância das proteínas para o corpo?",
            options: ["Nenhuma", "Servem como tijolos de construção", "Servem apenas para dar cor", "São apenas gordura"],
            correctIndex: 1,
            explanation: "Proteínas formam a estrutura do corpo (músculos, pele, etc.)."
          },
          {
            id: "q40",
            text: "Quem dá as 'instruções' para os ribossomos trabalharem?",
            options: ["A mitocôndria", "O DNA", "A membrana", "O açúcar"],
            correctIndex: 1,
            explanation: "O DNA contém o código que diz qual proteína deve ser montada."
          }
        ]
      }
    ]
  },
  {
    id: "metabolism",
    title: "Metabolismo Celular",
    description: "Como as células conseguem energia.",
    icon: "⚡",
    microtexts: [
      {
        id: "photosynthesis",
        title: "Fotossíntese",
        content: "A fotossíntese é o processo pelo qual plantas e algas produzem seu próprio alimento. Elas usam a luz do sol, água e gás carbônico para fabricar glicose (açúcar) e liberam oxigênio no ar. Esse processo acontece dentro de organelas verdes chamadas cloroplastos. É graças à fotossíntese que temos oxigênio para respirar e a base de quase toda a comida do planeta!",
        questions: [
          {
            id: "q41",
            text: "O que a planta produz na fotossíntese?",
            options: ["Apenas água", "Glicose (açúcar) e Oxigênio", "Gás carbônico", "Luz"],
            correctIndex: 1,
            explanation: "O objetivo é produzir alimento (glicose) e o oxigênio é liberado como subproduto."
          },
          {
            id: "q42",
            text: "Qual é a fonte de energia para a fotossíntese?",
            options: ["Vento", "Luz do Sol", "Solo", "Chuva"],
            correctIndex: 1,
            explanation: "A energia luminosa é captada pela clorofila para iniciar o processo."
          },
          {
            id: "q43",
            text: "Em qual organela ocorre a fotossíntese?",
            options: ["Mitocôndria", "Cloroplasto", "Ribossomo", "Núcleo"],
            correctIndex: 1,
            explanation: "Os cloroplastos contêm clorofila e são o local da fotossíntese."
          },
          {
            id: "q44",
            text: "Qual gás a planta retira do ar para fazer fotossíntese?",
            options: ["Oxigênio", "Nitrogênio", "Gás carbônico", "Hélio"],
            correctIndex: 2,
            explanation: "As plantas absorvem o CO2 (gás carbônico) da atmosfera."
          },
          {
            id: "q45",
            text: "Por que a fotossíntese é importante para nós?",
            options: ["Porque produz oxigênio", "Porque faz sombra", "Porque gasta água", "Porque esfria o planeta"],
            correctIndex: 0,
            explanation: "Ela libera o oxigênio que a maioria dos seres vivos usa para respirar."
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
  },
  {
    id: "division",
    title: "Divisão Celular",
    description: "Como a vida se multiplica.",
    icon: "➗",
    microtexts: [
      {
        id: "mitosis",
        title: "Mitose: Crescimento",
        content: "A mitose é o tipo de divisão celular onde uma célula se divide em duas células filhas idênticas à mãe. É o processo que faz você crescer e que cicatriza um corte na sua pele. Imagine que a célula faz uma cópia exata de tudo o que tem dentro (incluindo o DNA) e depois se separa. Assim, o corpo mantém o mesmo número de cromossomos em todas as células novas.",
        questions: [
          {
            id: "q46",
            text: "Quantas células filhas são formadas na mitose?",
            options: ["Uma", "Duas", "Quatro", "Oito"],
            correctIndex: 1,
            explanation: "Uma célula mãe se divide em duas células filhas na mitose."
          },
          {
            id: "q47",
            text: "As células filhas da mitose são diferentes da mãe?",
            options: ["Sim, totalmente", "Não, são idênticas", "Apenas metade é igual", "São menores"],
            correctIndex: 1,
            explanation: "A mitose gera clones exatos para manter a função do tecido."
          },
          {
            id: "q48",
            text: "Para que serve a mitose no nosso corpo?",
            options: ["Para reprodução sexual", "Para crescimento e cicatrização", "Para produzir energia", "Para digerir comida"],
            correctIndex: 1,
            explanation: "Ela permite o aumento do número de células e a reposição de tecidos lesados."
          },
          {
            id: "q49",
            text: "O que acontece com o DNA antes da célula se dividir?",
            options: ["Ele some", "Ele é destruído", "Ele é duplicado (copiado)", "Ele muda de cor"],
            correctIndex: 2,
            explanation: "A célula precisa copiar o DNA para que cada filha receba uma cópia completa."
          },
          {
            id: "q50",
            text: "Se uma célula com 46 cromossomos faz mitose, quantos cromossomos as filhas terão?",
            options: ["23", "46", "92", "0"],
            correctIndex: 1,
            explanation: "A mitose mantém o número de cromossomos constante."
          }
        ]
      },
      {
        id: "meiosis",
        title: "Meiose: Reprodução",
        content: "Diferente da mitose, a meiose é uma divisão especial para criar células reprodutivas (gametas), como espermatozoides e óvulos. Nela, uma célula se divide duas vezes, gerando quatro células filhas com metade do DNA da mãe. Isso é essencial para que, na fecundação, o bebê tenha o número correto de cromossomos (metade do pai e metade da mãe). Além disso, ela mistura o DNA, criando diversidade!",
        questions: [
          {
            id: "q51",
            text: "Qual é o objetivo principal da meiose?",
            options: ["Crescer o corpo", "Criar gametas (reprodução)", "Cicatrizar feridas", "Produzir energia"],
            correctIndex: 1,
            explanation: "A meiose é exclusiva para a formação de células sexuais."
          },
          {
            id: "q52",
            text: "Quantas células filhas são formadas ao final da meiose?",
            options: ["Uma", "Duas", "Quatro", "Oito"],
            correctIndex: 2,
            explanation: "A meiose envolve duas divisões sucessivas, resultando em 4 células."
          },
          {
            id: "q53",
            text: "O que acontece com o número de cromossomos na meiose?",
            options: ["Ele dobra", "Ele continua igual", "Ele cai pela metade", "Ele some"],
            correctIndex: 2,
            explanation: "As células filhas recebem apenas metade do material genético da célula original."
          },
          {
            id: "q54",
            text: "Por que a meiose é importante para a diversidade?",
            options: ["Porque cria clones", "Porque mistura o DNA", "Porque é rápida", "Porque não usa DNA"],
            correctIndex: 1,
            explanation: "Durante a meiose ocorre a recombinação gênica, que mistura as características."
          },
          {
            id: "q55",
            text: "Quais células são formadas por meiose em humanos?",
            options: ["Células da pele", "Neurônios", "Espermatozoides e Óvulos", "Músculos"],
            correctIndex: 2,
            explanation: "Gametas são as únicas células humanas produzidas por este processo."
          }
        ]
      }
    ]
  },
  {
    id: "genetics",
    title: "Genética Básica",
    description: "As leis da hereditariedade.",
    icon: "🧬",
    microtexts: [
      {
        id: "mendel-laws",
        title: "As Leis de Mendel",
        content: "Gregor Mendel, o 'pai da genética', descobriu como as características passam de pais para filhos usando ervilhas. Ele percebeu que temos 'fatores' (hoje chamados de genes) que vêm em pares. Um gene pode ser dominante (manda mais) ou recessivo (fica escondido). Por exemplo, se você tem um gene para olhos castanhos (dominante) e um para azuis (recessivo), seus olhos serão castanhos!",
        questions: [
          {
            id: "q56",
            text: "Quem é considerado o pai da genética?",
            options: ["Darwin", "Einstein", "Mendel", "Newton"],
            correctIndex: 2,
            explanation: "Gregor Mendel lançou as bases da genética com seus experimentos."
          },
          {
            id: "q57",
            text: "O que Mendel usou em seus experimentos famosos?",
            options: ["Ratos", "Ervilhas", "Flores", "Bactérias"],
            correctIndex: 1,
            explanation: "As ervilhas eram fáceis de cultivar e tinham características bem distintas."
          },
          {
            id: "q58",
            text: "O que acontece quando um gene é 'dominante'?",
            options: ["Ele sempre some", "Ele expressa sua característica", "Ele é mais fraco", "Ele não faz nada"],
            correctIndex: 1,
            explanation: "Genes dominantes se manifestam mesmo se houver apenas uma cópia deles."
          },
          {
            id: "q59",
            text: "Como chamamos hoje os 'fatores' que Mendel descreveu?",
            options: ["Células", "Genes", "Proteínas", "Átomos"],
            correctIndex: 1,
            explanation: "Genes são os segmentos de DNA que determinam nossas características."
          },
          {
            id: "q60",
            text: "Um gene recessivo só aparece se:",
            options: ["Estiver com um dominante", "Estiver em dose dupla (par)", "Nunca aparece", "Aparece sempre"],
            correctIndex: 1,
            explanation: "Características recessivas só se manifestam se não houver um gene dominante presente."
          }
        ]
      }
    ]
  }
];

