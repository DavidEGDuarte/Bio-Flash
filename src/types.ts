import { biologyData } from "./data/biologyData";

export interface UserStats {
  points: number;
  streak: number;
  lastActive: string | null;
  completedMicrotexts: string[];
  wrongQuestions: string[]; // IDs of questions missed
  level: number;
  achievements: string[];
  totalHits: number;
  totalMisses: number;
}

export const INITIAL_STATS: UserStats = {
  points: 0,
  streak: 0,
  lastActive: null,
  completedMicrotexts: [],
  wrongQuestions: [],
  level: 1,
  achievements: [],
  totalHits: 0,
  totalMisses: 0,
};

export const LEVELS = [
  { level: 1, minPoints: 0, title: "Iniciante" },
  { level: 2, minPoints: 100, title: "Estudante" },
  { level: 3, minPoints: 300, title: "Explorador" },
  { level: 4, minPoints: 600, title: "Cientista" },
  { level: 5, minPoints: 1000, title: "Mestre da Biologia" },
];

export const getLevelInfo = (points: number) => {
  return LEVELS.slice().reverse().find(l => points >= l.minPoints) || LEVELS[0];
};

export const ACHIEVEMENTS = [
  { id: "first-quiz", title: "Primeiros Passos", description: "Completou o primeiro quiz", icon: "🌱" },
  { id: "streak-3", title: "Focado", description: "3 dias de sequência", icon: "🔥" },
  { id: "perfect-quiz", title: "Mestre da Célula", description: "Acertou todas as questões de um quiz", icon: "🏆" },
  { id: "level-5", title: "Expert", description: "Chegou ao nível 5", icon: "🎓" },
];
