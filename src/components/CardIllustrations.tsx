import React from 'react';

export function GoldenTicketsCrest() {
  return (
    <svg
      viewBox="0 0 220 96"
      className="w-44 sm:w-52 h-auto mx-auto -mb-7 relative z-0 pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Left ticket */}
      <g transform="translate(36, 20) rotate(-18)">
        <rect x="0" y="0" width="44" height="68" rx="6" fill="#F59E0B" stroke="#78350F" strokeWidth="3" />
        <rect x="5" y="5" width="34" height="58" rx="3" fill="none" stroke="#FEF3C7" strokeWidth="1.5" strokeDasharray="3 2" />
        <text x="22" y="28" textAnchor="middle" fill="#78350F" fontSize="14" fontWeight="bold">★</text>
        <text x="22" y="44" textAnchor="middle" fill="#78350F" fontSize="14" fontWeight="bold">★</text>
      </g>
      {/* Center ticket */}
      <g transform="translate(88, 6) rotate(-2)">
        <rect x="0" y="0" width="46" height="72" rx="6" fill="#FBBF24" stroke="#78350F" strokeWidth="3" />
        <rect x="5" y="5" width="36" height="62" rx="3" fill="none" stroke="#FFFBEB" strokeWidth="1.5" strokeDasharray="3 2" />
        <text x="23" y="26" textAnchor="middle" fill="#92400E" fontSize="14" fontWeight="bold">✦</text>
        <text x="23" y="42" textAnchor="middle" fill="#92400E" fontSize="14" fontWeight="bold">✦</text>
      </g>
      {/* Right ticket */}
      <g transform="translate(138, 14) rotate(18)">
        <rect x="0" y="0" width="46" height="72" rx="6" fill="#FDE047" stroke="#78350F" strokeWidth="3" />
        <rect x="5" y="5" width="36" height="62" rx="3" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 2" />
        <text x="23" y="28" textAnchor="middle" fill="#92400E" fontSize="14" fontWeight="bold">★</text>
        <text x="23" y="44" textAnchor="middle" fill="#92400E" fontSize="14" fontWeight="bold">★</text>
      </g>
    </svg>
  );
}

const TYCOON_IMAGE_URL = 'https://i.postimg.cc/CKhWpYWW/images.jpg';

export function TycoonCharacterCorner() {
  const [imgFailed, setImgFailed] = React.useState(false);

  if (!imgFailed) {
    return (
      <div className="m-3 sm:m-4 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-white/85 shadow-[0_8px_22px_rgba(42,14,84,0.3)] bg-purple-900/30 pointer-events-none select-none">
        <img
          src={TYCOON_IMAGE_URL}
          alt="Reward mascot"
          referrerPolicy="no-referrer"
          onError={() => setImgFailed(true)}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <svg
      viewBox="0 0 210 175"
      className="w-36 sm:w-44 md:w-48 h-auto pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Gift box on bottom left */}
      <g transform="translate(4, 96)">
        <rect x="6" y="20" width="52" height="46" rx="5" fill="#F97316" stroke="#9A3412" strokeWidth="2.5" />
        <rect x="2" y="12" width="60" height="14" rx="4" fill="#FB923C" stroke="#9A3412" strokeWidth="2.5" />
        <rect x="25" y="12" width="14" height="54" fill="#EF4444" stroke="#991B1B" strokeWidth="2" />
        <path d="M32 12 C22 -2, 10 4, 24 12 Z" fill="#EF4444" stroke="#991B1B" strokeWidth="2" />
        <path d="M32 12 C42 -2, 54 4, 40 12 Z" fill="#EF4444" stroke="#991B1B" strokeWidth="2" />
      </g>

      {/* Pink secondary box */}
      <g transform="translate(46, 134)">
        <rect x="0" y="6" width="50" height="32" rx="4" fill="#F472B6" stroke="#9D174D" strokeWidth="2" />
        <rect x="18" y="6" width="12" height="32" fill="#FDE047" />
      </g>

      {/* Floating cash bills */}
      <g transform="translate(18, 42) rotate(-18)">
        <rect width="26" height="14" rx="2" fill="#38BDF8" stroke="#0369A1" strokeWidth="1.5" />
        <circle cx="13" cy="7" r="3" fill="#BAE6FD" />
      </g>
      <g transform="translate(74, 16) rotate(12)">
        <rect width="28" height="15" rx="2" fill="#FACC15" stroke="#A16207" strokeWidth="1.5" />
        <circle cx="14" cy="7.5" r="3.5" fill="#FEF08A" />
      </g>
      <g transform="translate(132, 34) rotate(-25)">
        <rect width="22" height="12" rx="2" fill="#4ADE80" stroke="#15803D" strokeWidth="1.5" />
      </g>

      {/* Tycoon character */}
      <g transform="translate(64, 34)">
        {/* Raised arms */}
        <path d="M18 88 Q -6 78 -16 58" stroke="#1E293B" strokeWidth="13" strokeLinecap="round" fill="none" />
        <circle cx="-18" cy="54" r="7" fill="#FDE2C8" stroke="#D97706" strokeWidth="1.5" />

        <path d="M64 86 Q 90 74 102 52" stroke="#1E293B" strokeWidth="13" strokeLinecap="round" fill="none" />
        <circle cx="104" cy="48" r="7" fill="#FDE2C8" stroke="#D97706" strokeWidth="1.5" />

        {/* Tuxedo body */}
        <path d="M16 80 Q 41 70 66 80 L 74 136 L 8 136 Z" fill="#1E293B" stroke="#0F172A" strokeWidth="2.5" />
        {/* Shirt V & Bowtie */}
        <polygon points="30,78 52,78 41,106" fill="#FFFFFF" />
        <polygon points="33,80 41,84 33,88" fill="#0F172A" />
        <polygon points="49,80 41,84 49,88" fill="#0F172A" />
        <circle cx="41" cy="84" r="2.5" fill="#334155" />

        {/* Head */}
        <circle cx="41" cy="54" r="25" fill="#FDE2C8" stroke="#D97706" strokeWidth="2" />
        {/* Eyes & eyebrows */}
        <ellipse cx="32" cy="48" rx="3.2" ry="4" fill="#1E293B" />
        <ellipse cx="50" cy="48" rx="3.2" ry="4" fill="#1E293B" />
        <circle cx="33" cy="46.5" r="1" fill="#FFFFFF" />
        <circle cx="51" cy="46.5" r="1" fill="#FFFFFF" />
        <path d="M26 40 Q32 36 37 40" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <path d="M45 40 Q50 36 56 40" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" fill="none" />

        {/* Joyful smile */}
        <path d="M33 63 Q41 72 49 63 Z" fill="#991B1B" />

        {/* Big white mustache */}
        <path
          d="M41 55 C33 50, 17 53, 12 64 C22 68, 34 65, 41 60 C48 65, 60 68, 70 64 C65 53, 49 50, 41 55 Z"
          fill="#FFFFFF"
          stroke="#CBD5E1"
          strokeWidth="1.5"
        />
        {/* Nose */}
        <circle cx="41" cy="55" r="4.5" fill="#FDBA74" />

        {/* Top Hat */}
        <g transform="translate(11, -6) rotate(-10, 30, 30)">
          <ellipse cx="30" cy="36" rx="34" ry="8" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
          <path d="M10 34 L14 4 Q30 0 46 4 L50 34 Z" fill="#334155" stroke="#0F172A" strokeWidth="2" />
          <path d="M11 28 L49 28 L50 34 L10 34 Z" fill="#22C55E" />
        </g>
      </g>
    </svg>
  );
}

export function VaultDiceCorner() {
  return (
    <svg
      viewBox="0 0 210 175"
      className="w-36 sm:w-44 md:w-48 h-auto pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Confetti */}
      <path d="M40 30 Q52 16 62 32" stroke="#F43F5E" strokeWidth="6" strokeLinecap="round" fill="none" />
      <rect x="85" y="18" width="16" height="9" rx="2" transform="rotate(24 85 18)" fill="#FBBF24" />
      <rect x="34" y="64" width="14" height="8" rx="2" transform="rotate(-35 34 64)" fill="#38BDF8" />

      {/* Gold Safe Vault */}
      <g transform="translate(88, 34)">
        <rect x="8" y="8" width="94" height="106" rx="14" fill="#FACC15" stroke="#B45309" strokeWidth="3" />
        <rect x="18" y="18" width="74" height="86" rx="8" fill="#4C1D95" stroke="#7C3AED" strokeWidth="2" />

        {/* Dice stacked inside vault */}
        <g transform="translate(26, 50)">
          <rect x="0" y="18" width="24" height="24" rx="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
          <circle cx="7" cy="25" r="2" fill="#334155" />
          <circle cx="17" cy="25" r="2" fill="#334155" />
          <circle cx="12" cy="30" r="2" fill="#334155" />
          <circle cx="7" cy="35" r="2" fill="#334155" />
          <circle cx="17" cy="35" r="2" fill="#334155" />

          <rect x="26" y="22" width="24" height="24" rx="4" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
          <circle cx="34" cy="30" r="2.2" fill="#334155" />
          <circle cx="42" cy="38" r="2.2" fill="#334155" />

          <rect x="14" y="-6" width="24" height="24" rx="4" transform="rotate(-8 26 6)" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
          <circle cx="22" cy="2" r="2" fill="#334155" />
          <circle cx="30" cy="10" r="2" fill="#334155" />
          <circle cx="26" cy="6" r="2" fill="#334155" />

          <rect x="42" y="-2" width="22" height="22" rx="4" transform="rotate(10 53 9)" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1.5" />
          <circle cx="53" cy="9" r="2.5" fill="#EF4444" />
        </g>
      </g>

      {/* Open vault door swung left */}
      <g transform="translate(26, 48) skewY(12)">
        <rect x="0" y="0" width="66" height="94" rx="10" fill="#BAE6FD" stroke="#0284C7" strokeWidth="3" />
        <rect x="8" y="8" width="50" height="78" rx="6" fill="#E0F2FE" />
        <circle cx="48" cy="47" r="10" fill="#7DD3FC" stroke="#0284C7" strokeWidth="2.5" />
        <circle cx="48" cy="47" r="4" fill="#0369A1" />
      </g>

      {/* Foreground pink/cyan ribbons */}
      <path d="M126 146 L156 122 L198 144 L180 172 L130 172 Z" fill="#EC4899" stroke="#9D174D" strokeWidth="2" />
      <rect x="16" y="138" width="38" height="22" rx="4" transform="rotate(-14 16 138)" fill="#67E8F9" stroke="#0E7490" strokeWidth="2" />
    </svg>
  );
}

export function DiceRewardIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 shrink-0" aria-hidden="true">
      <rect x="6" y="12" width="24" height="24" rx="5" transform="rotate(-10 18 24)" fill="#FFFFFF" stroke="#4C1D95" strokeWidth="2.5" />
      <circle cx="13" cy="19" r="2.2" fill="#4C1D95" />
      <circle cx="22" cy="27" r="2.2" fill="#4C1D95" />
      <rect x="20" y="14" width="22" height="22" rx="5" transform="rotate(12 31 25)" fill="#FEF08A" stroke="#92400E" strokeWidth="2.5" />
      <circle cx="27" cy="21" r="2" fill="#92400E" />
      <circle cx="35" cy="21" r="2" fill="#92400E" />
      <circle cx="31" cy="25" r="2" fill="#92400E" />
      <circle cx="27" cy="29" r="2" fill="#92400E" />
      <circle cx="35" cy="29" r="2" fill="#92400E" />
    </svg>
  );
}

export function CashRewardIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 shrink-0" aria-hidden="true">
      <rect x="6" y="18" width="36" height="18" rx="4" fill="#22C55E" stroke="#14532D" strokeWidth="2.5" />
      <rect x="8" y="13" width="32" height="16" rx="4" fill="#4ADE80" stroke="#14532D" strokeWidth="2.5" />
      <circle cx="24" cy="21" r="4.5" fill="#DCFCE7" stroke="#15803D" strokeWidth="1.5" />
      <text x="24" y="24" textAnchor="middle" fill="#14532D" fontSize="9" fontWeight="bold">$</text>
    </svg>
  );
}

export function StickerPackIcon() {
  return (
    <svg viewBox="0 0 48 48" className="w-10 h-10 shrink-0" aria-hidden="true">
      <rect x="11" y="6" width="26" height="36" rx="4" fill="#FACC15" stroke="#854D0E" strokeWidth="2.5" />
      <rect x="15" y="11" width="18" height="26" rx="2" fill="#FEF08A" />
      <polygon points="24,15 26.5,21 33,21.5 28,25.8 29.5,32 24,28.5 18.5,32 20,25.8 15,21.5 21.5,21" fill="#F59E0B" stroke="#92400E" strokeWidth="1.5" />
    </svg>
  );
}
