import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CheckCircle2, Loader2, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import {
  GoldenTicketsCrest,
  TycoonCharacterCorner,
  VaultDiceCorner,
} from './components/CardIllustrations';
import { playClickChime, playCollectFanfare } from './utils/sound';

type FlowStep = 'ENTER_USERNAME' | 'VERIFYING' | 'COLLECT_READY' | 'COLLECTED';
type Lang = 'en' | 'fr';

const REDIRECT_URL = 'https://apptrck.net/cl/i/o4mqg4';

const COPY = {
  en: {
    brand: 'Reward Vault',
    crestTop: 'PLAYER',
    crestBottom: 'REWARDS',
    headlineInput: 'Claim your reward here!',
    placeholder: 'Enter your username',
    emptyError: 'Please enter a username (at least 2 characters).',
    goBtn: 'GO!',
    verifying: 'Opening vault for',
    readyTitle: 'Vault unlocked for',
    collectBtn: 'COLLECT',
    changeUser: 'Change username',
    collectedTitle: 'Rewards collected!',
    collectedSub: 'Redirecting for',
    claimAnother: 'Claim Another',
    soundOn: 'Sound On',
    soundOff: 'Muted',
  },
  fr: {
    brand: 'Reward Vault',
    crestTop: 'RÉCOMPENSE',
    crestBottom: 'JOUEUR',
    headlineInput: 'Récupère ta récompense ici !',
    placeholder: "Saisis ton nom d'utilisateur",
    emptyError: "Saisis un nom d'utilisateur (au moins 2 caractères).",
    goBtn: 'GO!',
    verifying: 'Ouverture du coffre pour',
    readyTitle: 'Coffre prêt pour',
    collectBtn: 'COLLECTER',
    changeUser: 'Changer de pseudo',
    collectedTitle: 'Récompenses collectées !',
    collectedSub: 'Redirection pour',
    claimAnother: 'Autre joueur',
    soundOn: 'Son activé',
    soundOff: 'Muet',
  },
} as const;

const CONFETTI_PIECES = [
  { id: 1, left: '16%', delay: 0, color: '#FACC15' },
  { id: 2, left: '28%', delay: 0.08, color: '#4ADE80' },
  { id: 3, left: '39%', delay: 0.04, color: '#38BDF8' },
  { id: 4, left: '51%', delay: 0.12, color: '#F472B6' },
  { id: 5, left: '63%', delay: 0.06, color: '#FACC15' },
  { id: 6, left: '74%', delay: 0.1, color: '#60A5FA' },
  { id: 7, left: '84%', delay: 0.03, color: '#A3E635' },
];

export default function App() {
  const [lang, setLang] = useState<Lang>('en');
  const [step, setStep] = useState<FlowStep>('ENTER_USERNAME');
  const [username, setUsername] = useState('');
  const [activeUser, setActiveUser] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [soundEnabled, setSoundEnabled] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);
  const verifyTimerRef = useRef<number | null>(null);
  const t = COPY[lang];

  useEffect(() => {
    return () => {
      if (verifyTimerRef.current) {
        window.clearTimeout(verifyTimerRef.current);
      }
    };
  }, []);

  const handleGoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = username.trim().replace(/^@+/, '');
    if (cleaned.length < 2) {
      setErrorMsg(t.emptyError);
      inputRef.current?.focus();
      return;
    }

    setErrorMsg('');
    setActiveUser(cleaned);
    playClickChime(soundEnabled);
    setStep('VERIFYING');

    if (verifyTimerRef.current) {
      window.clearTimeout(verifyTimerRef.current);
    }
    verifyTimerRef.current = window.setTimeout(() => {
      setStep('COLLECT_READY');
    }, 480);
  };

  const handleCollect = () => {
    playCollectFanfare(soundEnabled);
    setStep('COLLECTED');

    window.setTimeout(() => {
      window.location.assign(REDIRECT_URL);
    }, 150);
  };

  const handleReset = () => {
    if (verifyTimerRef.current) {
      window.clearTimeout(verifyTimerRef.current);
    }
    setStep('ENTER_USERNAME');
    setErrorMsg('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 60);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f7fb] text-slate-900">
      {/* Top Bar */}
      <header className="w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
          <a
            href="#claim"
            onClick={(e) => {
              e.preventDefault();
              handleReset();
            }}
            className="font-display text-xl font-bold tracking-tight text-[#4c2384] whitespace-nowrap shrink-0"
          >
            {t.brand}
          </a>

          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center p-1 bg-slate-100 rounded-lg" role="group" aria-label="Language">
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 text-xs font-bold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  lang === 'en' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('fr')}
                className={`px-2.5 py-1 text-xs font-bold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  lang === 'fr' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                FR
              </button>
            </div>

            <button
              type="button"
              onClick={() => setSoundEnabled((v) => !v)}
              aria-label={soundEnabled ? t.soundOn : t.soundOff}
              title={soundEnabled ? t.soundOn : t.soundOff}
              className="w-9 h-9 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors shrink-0 cursor-pointer"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-16">
        {/* Hero Reward Card matching reference */}
        <section id="claim" className="relative pt-2 pb-4">
          {/* Overlapping Golden Tickets + 3D Title Crest */}
          <div className="relative z-20 flex flex-col items-center -mb-10 sm:-mb-12 pointer-events-none select-none">
            <GoldenTicketsCrest />
            <div className="relative z-10 text-center leading-none">
              <div className="font-display text-3xl sm:text-5xl font-bold tracking-wide uppercase game-title-top">
                {t.crestTop}
              </div>
              <div className="font-display text-3xl sm:text-5xl font-bold tracking-wide uppercase game-title-bottom -mt-1">
                {t.crestBottom}
              </div>
            </div>
          </div>

          {/* Main Purple Starburst Card */}
          <div className="relative overflow-hidden rounded-[28px] sm:rounded-[34px] border-[6px] border-white starburst-card shadow-[0_20px_50px_rgba(76,35,132,0.22)] min-h-[360px] sm:min-h-[390px] flex flex-col items-center justify-center px-5 sm:px-12 pt-16 pb-12">
            {/* Decorative Corners */}
            <div className="hidden sm:block absolute bottom-0 left-0 z-10 pointer-events-none">
              <TycoonCharacterCorner />
            </div>
            <div className="hidden sm:block absolute bottom-0 right-0 z-10 pointer-events-none">
              <VaultDiceCorner />
            </div>

            {/* Confetti celebration layer on Collect */}
            {step === 'COLLECTED' && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden z-20" aria-hidden="true">
                {CONFETTI_PIECES.map((piece) => (
                  <span
                    key={piece.id}
                    style={{
                      left: piece.left,
                      animationDelay: `${piece.delay}s`,
                      backgroundColor: piece.color,
                    }}
                    className="absolute top-6 w-3 h-5 rounded-xs animate-confetti"
                  />
                ))}
              </div>
            )}

            {/* Dynamic Center Stage */}
            <div className="relative z-30 w-full max-w-[540px] mx-auto">
              <AnimatePresence mode="wait">
                {step === 'ENTER_USERNAME' && (
                  <motion.form
                    key="step-input"
                    onSubmit={handleGoSubmit}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18 }}
                    className="flex flex-col items-center text-center"
                  >
                    <h1 className="text-white text-xl sm:text-[26px] font-bold tracking-tight headline-stroke mb-6 text-balance">
                      {t.headlineInput}
                    </h1>

                    <div className="w-full">
                      <label htmlFor="player-username-input" className="sr-only">
                        {t.placeholder}
                      </label>
                      <input
                        ref={inputRef}
                        id="player-username-input"
                        type="text"
                        value={username}
                        onChange={(e) => {
                          setUsername(e.target.value);
                          if (errorMsg) setErrorMsg('');
                        }}
                        placeholder={t.placeholder}
                        autoComplete="username"
                        maxLength={32}
                        className="w-full h-14 sm:h-16 px-5 rounded-2xl bg-white text-slate-900 text-center text-lg sm:text-xl font-semibold placeholder:text-slate-500 shadow-[0_8px_22px_rgba(42,14,84,0.24)] border-2 border-transparent focus:border-amber-300 focus:outline-none transition-colors"
                      />
                      {errorMsg && (
                        <p role="alert" className="mt-2.5 text-sm font-semibold text-amber-200 headline-stroke">
                          {errorMsg}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="mt-6 btn-game-green px-10 py-3 rounded-full font-display text-2xl sm:text-[28px] leading-none font-bold text-[#eaffc2] tracking-wide cursor-pointer whitespace-nowrap shrink-0"
                    >
                      {t.goBtn}
                    </button>
                  </motion.form>
                )}

                {step === 'VERIFYING' && (
                  <motion.div
                    key="step-verifying"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.16 }}
                    className="flex flex-col items-center justify-center text-center py-10"
                  >
                    <Loader2 className="w-11 h-11 text-amber-300 animate-spin mb-4" />
                    <p className="text-white text-xl font-bold headline-stroke">
                      {t.verifying} <span className="text-amber-300">@{activeUser}</span>
                    </p>
                  </motion.div>
                )}

                {step === 'COLLECT_READY' && (
                  <motion.div
                    key="step-collect"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-center text-center"
                  >
                    <h2 className="text-white text-xl sm:text-2xl font-bold headline-stroke mb-6 text-balance">
                      {t.readyTitle}{' '}
                      <span className="text-amber-300">@{activeUser}</span>
                    </h2>

                    <div className="flex flex-col items-center gap-3">
                      <button
                        type="button"
                        onClick={handleCollect}
                        className="btn-game-green px-10 py-3 rounded-full font-display text-2xl sm:text-[28px] leading-none font-bold text-[#eaffc2] tracking-wide cursor-pointer whitespace-nowrap shrink-0"
                      >
                        {t.collectBtn}
                      </button>

                      <button
                        type="button"
                        onClick={handleReset}
                        className="text-sm font-semibold text-white/90 hover:text-white underline underline-offset-4 cursor-pointer whitespace-nowrap"
                      >
                        {t.changeUser}
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 'COLLECTED' && (
                  <motion.div
                    key="step-collected"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.22 }}
                    className="flex flex-col items-center text-center py-2"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500 border-4 border-white flex items-center justify-center shadow-lg mb-3">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>

                    <h2 className="text-white text-2xl sm:text-3xl font-bold headline-stroke">
                      {t.collectedTitle}
                    </h2>
                    <p className="text-amber-200 text-base sm:text-lg font-semibold mt-1 headline-stroke">
                      {t.collectedSub} <span className="text-white">@{activeUser}</span>
                    </p>

                    <div className="mt-6 flex flex-col items-center gap-3">
                      <a
                        href={REDIRECT_URL}
                        rel="noopener noreferrer"
                        className="btn-game-green px-8 py-3 rounded-full font-display text-xl sm:text-2xl leading-none font-bold text-[#eaffc2] tracking-wide cursor-pointer whitespace-nowrap shrink-0"
                      >
                        {t.collectBtn}
                      </a>

                      <button
                        type="button"
                        onClick={handleReset}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 hover:text-white underline underline-offset-4 cursor-pointer whitespace-nowrap"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        {t.claimAnother}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
