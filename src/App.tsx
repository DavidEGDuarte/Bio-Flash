import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Trophy, 
  User, 
  Flame, 
  ChevronLeft, 
  CheckCircle2, 
  XCircle, 
  ArrowRight,
  Star,
  RotateCcw,
  LayoutDashboard,
  Moon,
  Sun
} from 'lucide-react';
import { biologyData, Module, Microtext, Question } from './data/biologyData';
import { UserStats, INITIAL_STATS, getLevelInfo, ACHIEVEMENTS } from './types';

type View = 'modules' | 'content' | 'quiz' | 'profile' | 'review';

export default function App() {
  const [view, setView] = useState<View>('modules');
  const [stats, setStats] = useState<UserStats>(() => {
    const saved = localStorage.getItem('bioflash_stats');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_STATS;
      }
    }
    return INITIAL_STATS;
  });

  const [activeModule, setActiveModule] = useState<Module | null>(null);
  const [activeMicrotext, setActiveMicrotext] = useState<Microtext | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizResults, setQuizResults] = useState<{ hits: number; misses: number }>({ hits: 0, misses: 0 });
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('bioflash_stats', JSON.stringify(stats));
  }, [stats]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Streak logic
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    if (stats.lastActive !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().split('T')[0];
      
      setStats(prev => ({
        ...prev,
        lastActive: today,
        streak: prev.lastActive === yesterdayStr ? prev.streak + 1 : 1
      }));
    }
  }, []);

  const levelInfo = useMemo(() => getLevelInfo(stats.points), [stats.points]);

  const handleModuleSelect = (module: Module) => {
    setActiveModule(module);
    setView('modules'); // Stay on modules but show microtexts if we wanted a sub-view, 
    // but for simplicity let's just go straight to the first uncompleted microtext or the list
  };

  const startMicrotext = (microtext: Microtext) => {
    setActiveMicrotext(microtext);
    setView('content');
  };

  const startQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setQuizResults({ hits: 0, misses: 0 });
    setView('quiz');
  };

  const handleAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    
    const isCorrect = index === activeMicrotext?.questions[currentQuestionIndex].correctIndex;
    
    if (isCorrect) {
      setQuizResults(prev => ({ ...prev, hits: prev.hits + 1 }));
      setStats(prev => ({ 
        ...prev, 
        points: prev.points + 10,
        totalHits: prev.totalHits + 1
      }));
    } else {
      setQuizResults(prev => ({ ...prev, misses: prev.misses + 1 }));
      const qId = activeMicrotext?.questions[currentQuestionIndex].id || '';
      setStats(prev => ({ 
        ...prev, 
        totalMisses: prev.totalMisses + 1,
        wrongQuestions: prev.wrongQuestions.includes(qId) ? prev.wrongQuestions : [...prev.wrongQuestions, qId]
      }));
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < (activeMicrotext?.questions.length || 0) - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // Quiz finished
      if (activeMicrotext) {
        const isPerfect = quizResults.hits === activeMicrotext.questions.length;
        setStats(prev => {
          const newCompleted = prev.completedMicrotexts.includes(activeMicrotext.id) 
            ? prev.completedMicrotexts 
            : [...prev.completedMicrotexts, activeMicrotext.id];
          
          let newAchievements = [...prev.achievements];
          if (!newAchievements.includes('first-quiz')) newAchievements.push('first-quiz');
          if (isPerfect && !newAchievements.includes('perfect-quiz')) newAchievements.push('perfect-quiz');
          
          return {
            ...prev,
            completedMicrotexts: newCompleted,
            achievements: newAchievements
          };
        });
      }
      setView('modules');
      setActiveMicrotext(null);
    }
  };

  const renderHeader = () => (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-500/20">
          B
        </div>
        <h1 className="font-bold text-zinc-900 dark:text-white hidden sm:block">BioFlash</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 bg-orange-100 dark:bg-orange-900/30 px-3 py-1.5 rounded-full">
          <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
          <span className="text-sm font-bold text-orange-600 dark:text-orange-400">{stats.streak}</span>
        </div>
        <div className="flex items-center gap-1.5 bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1.5 rounded-full">
          <Trophy className="w-4 h-4 text-emerald-500" />
          <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{stats.points}</span>
        </div>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
        >
          {darkMode ? <Sun className="w-5 h-5 text-zinc-400" /> : <Moon className="w-5 h-5 text-zinc-600" />}
        </button>
      </div>
    </header>
  );

  const renderModuleList = () => (
    <div className="max-w-2xl mx-auto p-4 space-y-8">
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Seus Módulos</h2>
          <button 
            onClick={() => setView('profile')}
            className="text-emerald-600 dark:text-emerald-400 text-sm font-medium flex items-center gap-1"
          >
            Ver Perfil <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid gap-4">
          {biologyData.map(module => {
            const completedInModule = module.microtexts.filter(m => stats.completedMicrotexts.includes(m.id)).length;
            const progress = (completedInModule / module.microtexts.length) * 100;
            
            return (
              <motion.div 
                key={module.id}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => handleModuleSelect(module)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                  activeModule?.id === module.id 
                    ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-900/10' 
                    : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{module.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-zinc-900 dark:text-white">{module.title}</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">{module.description}</p>
                    <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        className="h-full bg-emerald-500"
                      />
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-xs font-medium text-zinc-400">{completedInModule}/{module.microtexts.length} lições</span>
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">{Math.round(progress)}%</span>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {activeModule?.id === module.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800 space-y-2"
                    >
                      {module.microtexts.map((mt, idx) => (
                        <button
                          key={mt.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            startMicrotext(mt);
                          }}
                          className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-left group"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                              stats.completedMicrotexts.includes(mt.id)
                                ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400'
                                : 'bg-zinc-100 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400'
                            }`}>
                              {stats.completedMicrotexts.includes(mt.id) ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                            </div>
                            <span className="font-medium text-zinc-700 dark:text-zinc-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                              {mt.title}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-emerald-500 transition-all group-hover:translate-x-1" />
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {stats.wrongQuestions.length > 0 && (
        <section className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 p-5 rounded-2xl">
          <div className="flex items-center gap-3 mb-2">
            <RotateCcw className="w-5 h-5 text-amber-600" />
            <h3 className="font-bold text-amber-900 dark:text-amber-400">Modo Revisão</h3>
          </div>
          <p className="text-sm text-amber-700 dark:text-amber-500/80 mb-4">
            Você tem {stats.wrongQuestions.length} conceitos para reforçar. Vamos revisar?
          </p>
          <button 
            onClick={() => setView('review')}
            className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-amber-600/20"
          >
            Começar Revisão
          </button>
        </section>
      )}
    </div>
  );

  const renderContentView = () => (
    <div className="max-w-2xl mx-auto p-4 flex flex-col min-h-[calc(100vh-70px)]">
      <button 
        onClick={() => setView('modules')}
        className="flex items-center gap-1 text-zinc-500 hover:text-zinc-900 dark:hover:text-white mb-6 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" /> Voltar
      </button>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1 space-y-6"
      >
        <div className="space-y-2">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            {activeModule?.title}
          </span>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white leading-tight">
            {activeMicrotext?.title}
          </h2>
        </div>

        <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
            {activeMicrotext?.content}
          </p>
        </div>

        <div className="flex items-center gap-3 p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl border border-emerald-100 dark:border-emerald-900/20">
          <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white">
            <BookOpen className="w-5 h-5" />
          </div>
          <p className="text-sm text-emerald-800 dark:text-emerald-400 font-medium">
            Leia com atenção! O quiz a seguir vai testar o que você acabou de aprender.
          </p>
        </div>
      </motion.div>

      <button 
        onClick={startQuiz}
        className="mt-8 w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg rounded-2xl transition-all shadow-xl shadow-emerald-600/20 flex items-center justify-center gap-2"
      >
        Fazer Quiz <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );

  const renderQuizView = () => {
    if (!activeMicrotext) return null;
    const question = activeMicrotext.questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / activeMicrotext.questions.length) * 100;

    return (
      <div className="max-w-2xl mx-auto p-4 flex flex-col min-h-[calc(100vh-70px)]">
        <div className="flex items-center justify-between mb-8">
          <div className="flex-1 mr-4">
            <div className="flex justify-between mb-2">
              <span className="text-xs font-bold text-zinc-400">Questão {currentQuestionIndex + 1} de {activeMicrotext.questions.length}</span>
              <span className="text-xs font-bold text-emerald-500">{Math.round(progress)}%</span>
            </div>
            <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-emerald-500"
              />
            </div>
          </div>
          <button 
            onClick={() => setView('modules')}
            className="p-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
          >
            <XCircle className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 space-y-8">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white leading-tight">
            {question.text}
          </h2>

          <div className="grid gap-3">
            {question.options.map((option, idx) => {
              let state = 'default';
              if (isAnswered) {
                if (idx === question.correctIndex) state = 'correct';
                else if (idx === selectedOption) state = 'wrong';
                else state = 'disabled';
              }

              return (
                <motion.button
                  key={idx}
                  whileTap={!isAnswered ? { scale: 0.98 } : {}}
                  onClick={() => handleAnswer(idx)}
                  disabled={isAnswered}
                  className={`p-5 rounded-2xl border-2 text-left transition-all flex items-center justify-between ${
                    state === 'default' ? 'border-zinc-200 dark:border-zinc-800 hover:border-emerald-500 dark:hover:border-emerald-500 bg-white dark:bg-zinc-900' :
                    state === 'correct' ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400' :
                    state === 'wrong' ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400' :
                    'border-zinc-100 dark:border-zinc-900 text-zinc-400 opacity-50'
                  }`}
                >
                  <span className="font-bold">{option}</span>
                  {state === 'correct' && <CheckCircle2 className="w-6 h-6 text-emerald-500" />}
                  {state === 'wrong' && <XCircle className="w-6 h-6 text-red-500" />}
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence>
            {isAnswered && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-6 rounded-3xl border ${
                  selectedOption === question.correctIndex 
                    ? 'bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-900/30' 
                    : 'bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-900/30'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                    selectedOption === question.correctIndex ? 'bg-emerald-500' : 'bg-red-500'
                  }`}>
                    {selectedOption === question.correctIndex ? <Trophy className="text-white w-6 h-6" /> : <RotateCcw className="text-white w-6 h-6" />}
                  </div>
                  <div>
                    <h4 className={`font-bold text-lg mb-1 ${
                      selectedOption === question.correctIndex ? 'text-emerald-900 dark:text-emerald-400' : 'text-red-900 dark:text-red-400'
                    }`}>
                      {selectedOption === question.correctIndex ? 'Boa! Você mandou bem.' : 'Quase lá! Vamos entender melhor.'}
                    </h4>
                    <p className={`text-sm leading-relaxed ${
                      selectedOption === question.correctIndex ? 'text-emerald-800/70 dark:text-emerald-400/70' : 'text-red-800/70 dark:text-red-400/70'
                    }`}>
                      {question.explanation}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {isAnswered && (
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={nextQuestion}
            className="mt-8 w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold text-lg rounded-2xl transition-all flex items-center justify-center gap-2"
          >
            {currentQuestionIndex < activeMicrotext.questions.length - 1 ? 'Próxima Questão' : 'Finalizar Quiz'} <ArrowRight className="w-5 h-5" />
          </motion.button>
        )}
      </div>
    );
  };

  const renderProfileView = () => (
    <div className="max-w-2xl mx-auto p-4 space-y-8">
      <button 
        onClick={() => setView('modules')}
        className="flex items-center gap-1 text-zinc-500 hover:text-zinc-900 dark:hover:text-white mb-2 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" /> Voltar
      </button>

      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-3xl flex items-center justify-center text-white text-4xl shadow-xl shadow-emerald-500/20">
            <User className="w-12 h-12" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 w-10 h-10 rounded-2xl flex items-center justify-center font-bold border-4 border-white dark:border-zinc-900">
            {levelInfo.level}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">{levelInfo.title}</h2>
          <p className="text-zinc-500 dark:text-zinc-400">Nível {levelInfo.level} • {stats.points} pontos</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl">
          <span className="text-xs font-bold text-zinc-400 uppercase">Acertos</span>
          <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{stats.totalHits}</p>
        </div>
        <div className="p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl">
          <span className="text-xs font-bold text-zinc-400 uppercase">Erros</span>
          <p className="text-2xl font-bold text-red-600 dark:text-red-400">{stats.totalMisses}</p>
        </div>
        <div className="p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl">
          <span className="text-xs font-bold text-zinc-400 uppercase">Precisão</span>
          <p className="text-2xl font-bold text-zinc-900 dark:text-white">
            {stats.totalHits + stats.totalMisses > 0 
              ? Math.round((stats.totalHits / (stats.totalHits + stats.totalMisses)) * 100) 
              : 0}%
          </p>
        </div>
        <div className="p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl">
          <span className="text-xs font-bold text-zinc-400 uppercase">Lições</span>
          <p className="text-2xl font-bold text-zinc-900 dark:text-white">{stats.completedMicrotexts.length}</p>
        </div>
      </div>

      <section>
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">Conquistas</h3>
        <div className="grid grid-cols-2 gap-4">
          {ACHIEVEMENTS.map(achievement => {
            const isUnlocked = stats.achievements.includes(achievement.id);
            return (
              <div 
                key={achievement.id}
                className={`p-4 rounded-2xl border flex items-center gap-3 transition-all ${
                  isUnlocked 
                    ? 'bg-white dark:bg-zinc-900 border-emerald-200 dark:border-emerald-900/30' 
                    : 'bg-zinc-50 dark:bg-zinc-900/50 border-zinc-100 dark:border-zinc-800 opacity-50 grayscale'
                }`}
              >
                <div className="text-2xl">{achievement.icon}</div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white">{achievement.title}</h4>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400">{achievement.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );

  const renderReviewView = () => {
    // Find questions that were missed
    const missedQuestions: Question[] = [];
    biologyData.forEach(m => m.microtexts.forEach(mt => mt.questions.forEach(q => {
      if (stats.wrongQuestions.includes(q.id)) missedQuestions.push(q);
    })));

    if (missedQuestions.length === 0) {
      return (
        <div className="max-w-2xl mx-auto p-4 text-center space-y-6 mt-20">
          <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Tudo limpo!</h2>
          <p className="text-zinc-500 dark:text-zinc-400">Você não tem questões para revisar no momento. Continue aprendendo!</p>
          <button 
            onClick={() => setView('modules')}
            className="px-8 py-3 bg-emerald-600 text-white font-bold rounded-xl"
          >
            Voltar aos Módulos
          </button>
        </div>
      );
    }

    // For simplicity, we just show one by one in a review mode
    const question = missedQuestions[currentQuestionIndex % missedQuestions.length];

    return (
      <div className="max-w-2xl mx-auto p-4 flex flex-col min-h-[calc(100vh-70px)]">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-amber-600">Revisão Inteligente</h2>
          <button onClick={() => setView('modules')} className="p-2 text-zinc-400"><XCircle className="w-6 h-6" /></button>
        </div>

        <div className="flex-1 space-y-8">
          <div className="p-4 bg-amber-50 dark:bg-amber-900/10 rounded-2xl border border-amber-100 dark:border-amber-900/20 text-sm text-amber-800 dark:text-amber-400 font-medium">
            Esta é uma questão que você errou anteriormente. Vamos tentar de novo?
          </div>

          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white leading-tight">
            {question.text}
          </h2>

          <div className="grid gap-3">
            {question.options.map((option, idx) => {
              let state = 'default';
              if (isAnswered) {
                if (idx === question.correctIndex) state = 'correct';
                else if (idx === selectedOption) state = 'wrong';
                else state = 'disabled';
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(idx)}
                  disabled={isAnswered}
                  className={`p-5 rounded-2xl border-2 text-left transition-all flex items-center justify-between ${
                    state === 'default' ? 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900' :
                    state === 'correct' ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400' :
                    state === 'wrong' ? 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400' :
                    'border-zinc-100 dark:border-zinc-900 text-zinc-400 opacity-50'
                  }`}
                >
                  <span className="font-bold">{option}</span>
                  {state === 'correct' && <CheckCircle2 className="w-6 h-6 text-emerald-500" />}
                </button>
              );
            })}
          </div>

          {isAnswered && (
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800">
              <p className="text-sm text-zinc-600 dark:text-zinc-400 italic">"{question.explanation}"</p>
            </div>
          )}
        </div>

        {isAnswered && (
          <button 
            onClick={() => {
              if (selectedOption === question.correctIndex) {
                setStats(prev => ({
                  ...prev,
                  wrongQuestions: prev.wrongQuestions.filter(id => id !== question.id)
                }));
              }
              setIsAnswered(false);
              setSelectedOption(null);
              // If more questions, stay in review, else go back
              if (missedQuestions.length <= 1 && selectedOption === question.correctIndex) {
                setView('modules');
              }
            }}
            className="mt-8 w-full py-4 bg-emerald-600 text-white font-bold rounded-2xl"
          >
            {selectedOption === question.correctIndex ? 'Entendi! Remover da Revisão' : 'Tentar Outra'}
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans selection:bg-emerald-200 selection:text-emerald-900">
      {renderHeader()}
      
      <main className="pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            {view === 'modules' && renderModuleList()}
            {view === 'content' && renderContentView()}
            {view === 'quiz' && renderQuizView()}
            {view === 'profile' && renderProfileView()}
            {view === 'review' && renderReviewView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-t border-zinc-200 dark:border-zinc-800 px-6 py-3 flex justify-around items-center z-50">
        <button 
          onClick={() => setView('modules')}
          className={`flex flex-col items-center gap-1 transition-colors ${view === 'modules' ? 'text-emerald-600 dark:text-emerald-400' : 'text-zinc-400 hover:text-zinc-600'}`}
        >
          <LayoutDashboard className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Estudo</span>
        </button>
        <button 
          onClick={() => setView('review')}
          className={`flex flex-col items-center gap-1 transition-colors ${view === 'review' ? 'text-emerald-600 dark:text-emerald-400' : 'text-zinc-400 hover:text-zinc-600'}`}
        >
          <RotateCcw className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Revisão</span>
        </button>
        <button 
          onClick={() => setView('profile')}
          className={`flex flex-col items-center gap-1 transition-colors ${view === 'profile' ? 'text-emerald-600 dark:text-emerald-400' : 'text-zinc-400 hover:text-zinc-600'}`}
        >
          <User className="w-6 h-6" />
          <span className="text-[10px] font-bold uppercase tracking-tighter">Perfil</span>
        </button>
      </nav>
    </div>
  );
}
