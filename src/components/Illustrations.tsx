import React from 'react';

/**
 * Neo-Brutalist Pop-Art SVG Vector Illustrations
 * Faithfully styled after Paperfolio X design language
 */

// 1. Hero John Carter Avatar (Yellow Card)
export const JohnCarterAvatar: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => (
  <svg viewBox="0 0 380 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Yellow Background Card */}
    <rect width="380" height="400" rx="28" fill="#FFC224" />
    <rect x="2" y="2" width="376" height="396" rx="26" stroke="#000000" strokeWidth="4" />
    
    <g transform="translate(40, 50)">
      {/* Torso / Sweater */}
      <path
        d="M20 280 C20 210, 60 170, 150 170 C240 170, 280 210, 280 280 L20 280 Z"
        fill="#FF5364"
        stroke="#000000"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      
      {/* Polka dots on sweater */}
      <circle cx="60" cy="220" r="7" fill="#FFC224" />
      <circle cx="110" cy="245" r="7" fill="#FFC224" />
      <circle cx="150" cy="210" r="7" fill="#FFC224" />
      <circle cx="190" cy="245" r="7" fill="#FFC224" />
      <circle cx="240" cy="220" r="7" fill="#FFC224" />
      <circle cx="85" cy="275" r="7" fill="#FFC224" />
      <circle cx="150" cy="265" r="7" fill="#FFC224" />
      <circle cx="215" cy="275" r="7" fill="#FFC224" />

      {/* Turtleneck collar */}
      <rect
        x="95"
        y="142"
        width="110"
        height="36"
        rx="18"
        fill="#FF5364"
        stroke="#000000"
        strokeWidth="4"
      />

      {/* Neck */}
      <path d="M130 142 L130 115 L170 115 L170 142 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />

      {/* Face & Head */}
      <path
        d="M95 65 C95 20, 205 20, 205 65 C205 110, 205 130, 150 130 C95 130, 95 110, 95 65 Z"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      {/* Hair */}
      <path
        d="M75 55 C70 30, 85 5, 140 5 C195 5, 220 25, 215 65 C205 60, 195 60, 185 68 C175 45, 140 40, 120 50 C105 40, 85 45, 75 55 Z"
        fill="#000000"
      />
      <path
        d="M75 55 C70 65, 80 85, 95 85 C95 65, 85 55, 75 55 Z"
        fill="#000000"
      />

      {/* Ear */}
      <circle cx="210" cy="80" r="14" fill="#FFFFFF" stroke="#000000" strokeWidth="3.5" />
      <path d="M210 75 Q205 80 210 85" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />

      {/* Beard & Moustache */}
      <path
        d="M100 85 C95 125, 110 145, 150 145 C190 145, 205 125, 200 85 C185 92, 175 88, 165 80 C155 88, 140 88, 130 80 C120 88, 110 90, 100 85 Z"
        fill="#000000"
      />

      {/* Smile in beard */}
      <path d="M138 98 Q150 108 162 98 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />

      {/* Eyes & Eyebrows */}
      <path d="M125 55 Q133 48 142 55" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="134" cy="62" r="3.5" fill="#000000" />

      <path d="M165 55 Q174 48 183 55" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="174" cy="62" r="3.5" fill="#000000" />

      {/* Nose */}
      <path d="M152 58 L146 72 L155 72" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

// 2. Who's Behind - John Carter working on laptop (Coral Circle)
export const JohnCarterWorking: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => (
  <svg viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Coral Circle */}
    <circle cx="180" cy="180" r="170" fill="#FF5364" stroke="#000000" strokeWidth="5" />
    
    <g transform="translate(30, 20)">
      {/* Yellow Polka dot Sweater */}
      <path
        d="M20 320 C25 240, 70 200, 130 195 C145 195, 170 200, 190 220 L200 320 Z"
        fill="#FFC224"
        stroke="#000000"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Polka dots */}
      <circle cx="50" cy="270" r="7" fill="#FF5364" />
      <circle cx="95" cy="240" r="7" fill="#FF5364" />
      <circle cx="105" cy="300" r="7" fill="#FF5364" />
      <circle cx="145" cy="250" r="7" fill="#FF5364" />
      <circle cx="155" cy="310" r="7" fill="#FF5364" />

      {/* Sleeve */}
      <path
        d="M130 205 L180 290 L160 300 L115 220 Z"
        fill="#FFC224"
        stroke="#000000"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Cuff */}
      <rect x="160" y="278" width="30" height="22" rx="4" transform="rotate(30 160 278)" fill="#FFC224" stroke="#000000" strokeWidth="3" />

      {/* Hands on Laptop */}
      <path
        d="M178 285 C195 285, 215 280, 225 295 C220 305, 200 305, 185 300 Z"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="3.5"
      />
      <line x1="200" y1="285" x2="202" y2="295" stroke="#000000" strokeWidth="2.5" />
      <line x1="210" y1="287" x2="212" y2="296" stroke="#000000" strokeWidth="2.5" />

      {/* Turtleneck collar */}
      <rect x="95" y="165" width="80" height="30" rx="15" fill="#FFC224" stroke="#000000" strokeWidth="4" />

      {/* Head & Neck */}
      <path d="M120 165 L120 145 L150 145 L150 165 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
      <path
        d="M95 105 C95 65, 175 65, 175 105 C175 135, 165 150, 135 150 C105 150, 95 135, 95 105 Z"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="4"
      />

      {/* Hair */}
      <path
        d="M85 95 C80 70, 100 45, 140 45 C170 45, 185 60, 185 95 C175 90, 160 90, 150 98 C140 75, 115 75, 95 85 Z"
        fill="#000000"
      />

      {/* Beard */}
      <path
        d="M100 120 C95 148, 115 160, 145 160 C175 160, 180 145, 175 120 C165 125, 150 120, 140 115 C130 122, 115 125, 100 120 Z"
        fill="#000000"
      />

      {/* Face features */}
      <circle cx="150" cy="100" r="3.5" fill="#000000" />
      <path d="M142 93 Q148 88 155 93" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
      <path d="M160 98 L155 108 L162 108" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />

      {/* Ear */}
      <circle cx="102" cy="115" r="10" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />

      {/* Laptop */}
      <g transform="translate(190, 200)">
        {/* Screen */}
        <polygon points="15,0 75,10 65,100 5,90" fill="#1A1A1A" stroke="#000000" strokeWidth="4" strokeLinejoin="round" />
        <circle cx="40" cy="50" r="8" fill="none" stroke="#FFFFFF" strokeWidth="3" />
        {/* Base */}
        <polygon points="0,90 85,95 80,105 -5,100" fill="#333333" stroke="#000000" strokeWidth="3" strokeLinejoin="round" />
      </g>
    </g>
  </svg>
);

// 3. Web Design Illustration
export const WebDesignIllu: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Browser Card with thick black shadow */}
    <rect x="24" y="24" width="220" height="150" rx="16" fill="#000000" />
    <rect x="20" y="20" width="220" height="150" rx="16" fill="#FFFFFF" stroke="#000000" strokeWidth="3.5" />
    
    {/* Browser Header */}
    <line x1="20" y1="48" x2="240" y2="48" stroke="#000000" strokeWidth="2" />
    <circle cx="36" cy="34" r="4.5" fill="#FF5364" />
    <circle cx="49" cy="34" r="4.5" fill="#FFC224" />
    <circle cx="62" cy="34" r="4.5" fill="#59D13E" />

    {/* Content */}
    {/* Left Lines */}
    <rect x="36" y="62" width="45" height="4" rx="2" fill="#000000" />
    <rect x="36" y="74" width="65" height="4" rx="2" fill="#000000" />
    <rect x="36" y="86" width="55" height="4" rx="2" fill="#000000" />
    <rect x="36" y="102" width="35" height="14" rx="4" fill="#000000" />

    {/* Right Blue Box */}
    <rect x="125" y="60" width="68" height="60" rx="10" fill="#2B7FFF" stroke="#000000" strokeWidth="3" />

    {/* Bottom Dots & lines */}
    <circle cx="58" cy="142" r="7" fill="#FFFFFF" stroke="#000000" strokeWidth="2.5" />
    <circle cx="118" cy="142" r="7" fill="#2B7FFF" stroke="#000000" strokeWidth="2.5" />
    <circle cx="178" cy="142" r="7" fill="#FFFFFF" stroke="#000000" strokeWidth="2.5" />
    
    <line x1="42" y1="156" x2="74" y2="156" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
    <line x1="102" y1="156" x2="134" y2="156" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
    <line x1="162" y1="156" x2="194" y2="156" stroke="#000000" strokeWidth="3" strokeLinecap="round" />

    {/* Yellow Cursor Arrow */}
    <g transform="translate(195, 115)">
      <polygon
        points="0,0 26,12 16,18 24,32 16,36 8,22 0,26"
        fill="#FFC224"
        stroke="#000000"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

// 4. UI/UX Design Illustration (Smartphone with resize nodes)
export const UIUXDesignIllu: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Transform Bounding Box */}
    <rect x="50" y="20" width="160" height="155" fill="none" stroke="#000000" strokeWidth="2" strokeDasharray="3 3" />
    <rect x="44" y="14" width="12" height="12" rx="2" fill="#6355F6" stroke="#000000" strokeWidth="2" />
    <rect x="204" y="14" width="12" height="12" rx="2" fill="#6355F6" stroke="#000000" strokeWidth="2" />
    <rect x="44" y="169" width="12" height="12" rx="2" fill="#6355F6" stroke="#000000" strokeWidth="2" />
    <rect x="204" y="169" width="12" height="12" rx="2" fill="#6355F6" stroke="#000000" strokeWidth="2" />

    {/* Phone shadow */}
    <rect x="74" y="32" width="105" height="140" rx="20" fill="#000000" />
    {/* Phone Body */}
    <rect x="70" y="28" width="105" height="140" rx="20" fill="#FFFFFF" stroke="#000000" strokeWidth="3.5" />

    {/* Phone Notch */}
    <rect x="102" y="34" width="40" height="6" rx="3" fill="#000000" />

    {/* Top UI elements */}
    <circle cx="88" cy="54" r="5" fill="#FF5364" stroke="#000000" strokeWidth="1.5" />
    <rect x="100" y="52" width="26" height="4" rx="2" fill="#000000" />
    <rect x="145" y="50" width="15" height="3" rx="1.5" fill="#000000" />
    <rect x="145" y="55" width="15" height="3" rx="1.5" fill="#000000" />

    {/* Coral highlighted card floating over phone */}
    <g transform="translate(60, 70)">
      <rect x="3" y="3" width="95" height="36" rx="10" fill="#000000" />
      <rect x="0" y="0" width="95" height="36" rx="10" fill="#FF5364" stroke="#000000" strokeWidth="2.5" />
    </g>

    {/* Lower card wireframes */}
    <rect x="80" y="122" width="34" height="32" rx="6" fill="#FFFFFF" stroke="#000000" strokeWidth="2.5" />
    <circle cx="97" cy="138" r="7" fill="#FF5364" />
    <path d="M97 134 V142 M93 138 H101" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />

    <rect x="122" y="122" width="42" height="32" rx="6" fill="#FFFFFF" stroke="#000000" strokeWidth="2.5" />
  </svg>
);

// 5. Product Design Illustration (Smartwatch & Ruler)
export const ProductDesignIllu: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Watch Band Top */}
    <path d="M80 50 C80 20, 130 20, 130 50 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="3.5" />
    {/* Watch Band Bottom */}
    <path d="M80 150 C80 180, 130 180, 130 150 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="3.5" />

    {/* Watch Body Shadow */}
    <rect x="74" y="44" width="68" height="106" rx="28" fill="#000000" />
    {/* Watch Body */}
    <rect x="70" y="40" width="68" height="106" rx="28" fill="#FFFFFF" stroke="#000000" strokeWidth="3.5" />
    
    {/* Watch Crown button */}
    <rect x="138" y="75" width="8" height="18" rx="4" fill="#000000" />

    {/* Notification pill inside watch */}
    <circle cx="86" cy="62" r="5" fill="#59D13E" stroke="#000000" strokeWidth="1.5" />
    <rect x="96" y="60" width="26" height="3" rx="1.5" fill="#000000" />

    {/* Green Screen */}
    <rect x="80" y="78" width="48" height="48" rx="12" fill="#59D13E" stroke="#000000" strokeWidth="2.5" />

    {/* Bottom watch lines */}
    <rect x="88" y="134" width="32" height="3" rx="1.5" fill="#000000" />

    {/* Measurement Ruler on Right */}
    <g transform="translate(165, 30)">
      <rect x="3" y="3" width="28" height="125" rx="8" fill="#000000" />
      <rect x="0" y="0" width="28" height="125" rx="8" fill="#FFFFFF" stroke="#000000" strokeWidth="3.5" />
      {/* Ticks */}
      <line x1="0" y1="18" x2="14" y2="18" stroke="#FFC224" strokeWidth="3" />
      <line x1="0" y1="34" x2="8" y2="34" stroke="#000000" strokeWidth="2.5" />
      <line x1="0" y1="50" x2="14" y2="50" stroke="#FFC224" strokeWidth="3" />
      <line x1="0" y1="66" x2="8" y2="66" stroke="#000000" strokeWidth="2.5" />
      <line x1="0" y1="82" x2="14" y2="82" stroke="#FFC224" strokeWidth="3" />
      <line x1="0" y1="98" x2="8" y2="98" stroke="#000000" strokeWidth="2.5" />
      <line x1="0" y1="114" x2="14" y2="114" stroke="#FFC224" strokeWidth="3" />
    </g>
  </svg>
);

// 6. User Research Illustration
export const UserResearchIllu: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Floating Left Profile Badge */}
    <g transform="translate(35, 30)">
      <rect x="2" y="2" width="36" height="36" rx="12" fill="#000000" />
      <rect x="0" y="0" width="36" height="36" rx="12" fill="#FFFFFF" stroke="#000000" strokeWidth="2.5" />
      <circle cx="18" cy="14" r="5" fill="#2B7FFF" />
      <path d="M10 28 C10 22, 26 22, 26 28" fill="#2B7FFF" />
    </g>

    {/* Floating Right Profile Badge */}
    <g transform="translate(205, 105)">
      <rect x="2" y="2" width="36" height="36" rx="12" fill="#000000" />
      <rect x="0" y="0" width="36" height="36" rx="12" fill="#FFFFFF" stroke="#000000" strokeWidth="2.5" />
      <circle cx="18" cy="14" r="5" fill="#2B7FFF" />
      <path d="M10 28 C10 22, 26 22, 26 28" fill="#2B7FFF" />
    </g>

    {/* Center Research Paper */}
    <g transform="translate(85, 20)">
      <rect x="5" y="5" width="105" height="148" rx="16" fill="#000000" />
      <rect x="0" y="0" width="105" height="148" rx="16" fill="#FFFFFF" stroke="#000000" strokeWidth="3.5" />

      {/* Main Avatar Circle */}
      <circle cx="52" cy="42" r="22" fill="#FFC224" stroke="#000000" strokeWidth="3" />
      <circle cx="52" cy="35" r="8" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
      <path d="M40 54 C40 45, 64 45, 64 54" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />

      {/* Paper text lines */}
      <line x1="20" y1="80" x2="85" y2="80" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
      <line x1="20" y1="92" x2="70" y2="92" stroke="#000000" strokeWidth="2" strokeLinecap="round" />

      {/* Checklist bullets with yellow dots */}
      <circle cx="25" cy="108" r="5" fill="#FFC224" stroke="#000000" strokeWidth="2" />
      <line x1="36" y1="108" x2="85" y2="108" stroke="#000000" strokeWidth="2" strokeLinecap="round" />

      <circle cx="25" cy="122" r="5" fill="#FFC224" stroke="#000000" strokeWidth="2" />
      <line x1="36" y1="122" x2="80" y2="122" stroke="#000000" strokeWidth="2" strokeLinecap="round" />

      <circle cx="25" cy="136" r="5" fill="#FFC224" stroke="#000000" strokeWidth="2" />
      <line x1="36" y1="136" x2="75" y2="136" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
    </g>
  </svg>
);

// 7. Motion Graphics Illustration
export const MotionGraphicsIllu: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Back Card: Purple Video Screen */}
    <g transform="translate(60, 25)">
      <rect x="5" y="5" width="150" height="110" rx="18" fill="#000000" />
      <rect x="0" y="0" width="150" height="110" rx="18" fill="#FFFFFF" stroke="#000000" strokeWidth="3.5" />
      {/* Top window dots */}
      <circle cx="16" cy="14" r="3" fill="#000000" />
      <circle cx="26" cy="14" r="3" fill="#000000" />
      
      {/* Purple Video canvas */}
      <rect x="12" y="24" width="126" height="66" rx="10" fill="#6355F6" stroke="#000000" strokeWidth="2.5" />
      <circle cx="75" cy="57" r="16" fill="#FFFFFF" stroke="#000000" strokeWidth="2.5" />
      <polygon points="71,50 83,57 71,64" fill="#000000" />
    </g>

    {/* Front Left Card: Easing Curve controller */}
    <g transform="translate(35, 75)">
      <rect x="4" y="4" width="70" height="70" rx="14" fill="#000000" />
      <rect x="0" y="0" width="70" height="70" rx="14" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
      {/* Bezier easing curve */}
      <path d="M12 55 C 35 55, 35 15, 58 15" stroke="#000000" strokeWidth="3" strokeLinecap="round" fill="none" />
      <rect x="8" y="50" width="9" height="9" rx="2" fill="#FF5364" stroke="#000000" strokeWidth="1.5" />
      <rect x="53" y="10" width="9" height="9" rx="2" fill="#FF5364" stroke="#000000" strokeWidth="1.5" />
    </g>

    {/* Timeline Sliders on bottom */}
    <g transform="translate(120, 115)">
      <line x1="0" y1="12" x2="80" y2="12" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="30" cy="12" r="6" fill="#6355F6" stroke="#000000" strokeWidth="2" />

      <line x1="0" y1="28" x2="80" y2="28" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="50" y="23" width="10" height="10" rx="2" fill="#FF5364" stroke="#000000" strokeWidth="1.5" />
    </g>
  </svg>
);

// 8. Studio Case Study (Laptop UI with video player)
export const StudioCaseStudyIllu: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => (
  <svg viewBox="0 0 460 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Solid Purple Background container matching screenshot */}
    <rect width="460" height="320" fill="#6355F6" />
    
    <g transform="translate(45, 40)">
      {/* Laptop Screen Shadow */}
      <rect x="18" y="18" width="324" height="205" rx="16" fill="#000000" />
      {/* Laptop Screen Bezel */}
      <rect x="14" y="14" width="324" height="205" rx="16" fill="#FFFFFF" stroke="#000000" strokeWidth="4" />

      {/* Screen Interface */}
      {/* Left Sidebar */}
      <line x1="65" y1="14" x2="65" y2="219" stroke="#000000" strokeWidth="2.5" />
      <circle cx="34" cy="36" r="6" fill="#6355F6" stroke="#000000" strokeWidth="2" />
      <circle cx="48" cy="36" r="3.5" fill="#FF5364" />

      {/* Sidebar Items */}
      <circle cx="30" cy="68" r="4.5" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
      <line x1="40" y1="68" x2="55" y2="68" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
      
      <circle cx="30" cy="94" r="4.5" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
      <line x1="40" y1="94" x2="52" y2="94" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />

      <circle cx="30" cy="120" r="4.5" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
      <line x1="40" y1="120" x2="55" y2="120" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />

      {/* Center Main Stage (Video Player in Purple) */}
      <rect x="80" y="32" width="155" height="100" rx="12" fill="#6355F6" stroke="#000000" strokeWidth="3" />
      <polygon points="150,72 168,82 150,92" fill="#FFFFFF" stroke="#000000" strokeWidth="2" strokeLinejoin="round" />

      {/* Player controls */}
      <circle cx="94" cy="150" r="7" fill="#FFFFFF" stroke="#000000" strokeWidth="2.5" />
      <line x1="106" y1="150" x2="160" y2="150" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
      <rect x="180" y="142" width="45" height="16" rx="4" fill="#6355F6" stroke="#000000" strokeWidth="2" />

      <line x1="82" y1="178" x2="140" y2="178" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
      <circle cx="152" cy="178" r="3" fill="#000000" />

      {/* Right Column in interface */}
      <line x1="250" y1="14" x2="250" y2="219" stroke="#000000" strokeWidth="2" />
      <circle cx="265" cy="40" r="3" fill="#000000" />
      <line x1="275" y1="40" x2="305" y2="40" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />

      <circle cx="265" cy="60" r="3" fill="#000000" />
      <line x1="275" y1="56" x2="310" y2="56" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
      <line x1="275" y1="64" x2="300" y2="64" stroke="#6355F6" strokeWidth="2" strokeLinecap="round" />

      <circle cx="265" cy="85" r="3" fill="#000000" />
      <line x1="275" y1="81" x2="315" y2="81" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
      <line x1="275" y1="89" x2="295" y2="89" stroke="#000000" strokeWidth="2" strokeLinecap="round" />

      <circle cx="265" cy="110" r="3" fill="#000000" />
      <line x1="275" y1="106" x2="310" y2="106" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
      <line x1="275" y1="114" x2="320" y2="114" stroke="#6355F6" strokeWidth="2" strokeLinecap="round" />

      <rect x="264" y="180" width="55" height="18" rx="4" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />

      {/* Laptop Base */}
      <path d="M-8 219 L360 219 C360 232, 345 238, 330 238 L22 238 C7 238, -8 232, -8 219 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="4" />
      {/* Laptop opening notch */}
      <rect x="150" y="219" width="50" height="6" rx="3" fill="#000000" />
    </g>
  </svg>
);

// 9. Venture Case Study (Browser with search bar & buttons)
export const VentureCaseStudyIllu: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => (
  <svg viewBox="0 0 460 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Solid Electric Blue Background matching screenshot */}
    <rect width="460" height="320" fill="#2B7FFF" />
    
    <g transform="translate(60, 40)">
      {/* Browser Shadow */}
      <rect x="18" y="18" width="310" height="215" rx="20" fill="#000000" />
      {/* Browser Body */}
      <rect x="12" y="12" width="310" height="215" rx="20" fill="#FFFFFF" stroke="#000000" strokeWidth="4" />

      {/* Top window dots */}
      <circle cx="34" cy="34" r="5" fill="#FF5364" stroke="#000000" strokeWidth="1.5" />
      <circle cx="48" cy="34" r="5" fill="#FFC224" stroke="#000000" strokeWidth="1.5" />
      <circle cx="62" cy="34" r="5" fill="#59D13E" stroke="#000000" strokeWidth="1.5" />

      {/* Center Venture Logo */}
      <g transform="translate(100, 75)">
        <path d="M0 8 C0 3.5, 3.5 0, 8 0 L14 0 C18.5 0, 22 3.5, 22 8 L22 14 C22 18.5, 18.5 22, 14 22 L8 22 C3.5 22, 0 18.5, 0 14 Z" fill="#FFC224" />
        <path d="M8 8 C8 3.5, 11.5 0, 16 0 L22 0 C26.5 0, 30 3.5, 30 8 L30 14 C30 18.5, 26.5 22, 22 22 L16 22 C11.5 22, 8 18.5, 8 14 Z" fill="#FFB800" opacity="0.8" />
        <text x="38" y="16" fill="#000000" fontSize="18" fontWeight="800" fontFamily="sans-serif">venture</text>
      </g>

      {/* Big Search Bar */}
      <g transform="translate(55, 120)">
        <rect x="0" y="0" width="220" height="34" rx="17" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
        <circle cx="18" cy="17" r="6" stroke="#000000" strokeWidth="2.5" />
        <line x1="22" y1="21" x2="27" y2="26" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="38" y1="17" x2="88" y2="17" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* Two action pills below */}
      <g transform="translate(85, 170)">
        <rect x="0" y="0" width="65" height="20" rx="10" fill="#FFFFFF" stroke="#000000" strokeWidth="2.5" />
        <rect x="75" y="0" width="65" height="20" rx="10" fill="#FFFFFF" stroke="#000000" strokeWidth="2.5" />
      </g>
    </g>
  </svg>
);

// 10. Lily Woods Avatar (Client Testimonial)
export const LilyWoodsAvatar: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => (
  <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Coral Circle */}
    <circle cx="160" cy="160" r="150" fill="#FF5364" stroke="#000000" strokeWidth="5" />
    
    <g transform="translate(40, 20)">
      {/* Striped Blue Turtleneck Sweater */}
      <path
        d="M20 280 C25 210, 65 170, 120 170 C175 170, 215 210, 220 280 Z"
        fill="#6355F6"
        stroke="#000000"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Sweater white stripes */}
      <line x1="60" y1="230" x2="60" y2="280" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
      <line x1="85" y1="210" x2="85" y2="280" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
      <line x1="120" y1="195" x2="120" y2="280" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
      <line x1="155" y1="210" x2="155" y2="280" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />
      <line x1="180" y1="230" x2="180" y2="280" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" />

      {/* Striped Collar */}
      <rect x="75" y="145" width="90" height="34" rx="12" fill="#6355F6" stroke="#000000" strokeWidth="4" />
      <line x1="92" y1="147" x2="92" y2="177" stroke="#FFFFFF" strokeWidth="4" />
      <line x1="106" y1="147" x2="106" y2="177" stroke="#FFFFFF" strokeWidth="4" />
      <line x1="120" y1="147" x2="120" y2="177" stroke="#FFFFFF" strokeWidth="4" />
      <line x1="134" y1="147" x2="134" y2="177" stroke="#FFFFFF" strokeWidth="4" />
      <line x1="148" y1="147" x2="148" y2="177" stroke="#FFFFFF" strokeWidth="4" />

      {/* Head & Neck */}
      <rect x="105" y="125" width="30" height="25" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
      <path
        d="M80 85 C80 45, 160 45, 160 85 C160 120, 150 135, 120 135 C90 135, 80 120, 80 85 Z"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="4"
      />

      {/* Black Voluminous Hair */}
      <path
        d="M50 85 C40 40, 75 10, 125 10 C175 10, 205 35, 200 85 C205 110, 200 140, 180 155 C165 130, 165 100, 160 85 C150 65, 130 65, 115 80 C105 60, 85 65, 75 80 C70 95, 65 135, 45 125 C40 105, 45 95, 50 85 Z"
        fill="#000000"
      />

      {/* Ear */}
      <circle cx="165" cy="98" r="10" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />

      {/* Face features */}
      <circle cx="100" cy="85" r="3.5" fill="#000000" />
      <circle cx="130" cy="85" r="3.5" fill="#000000" />
      <path d="M115 82 L110 94 L118 94" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M106 108 Q118 116 126 108" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
    </g>
  </svg>
);

// 11. Article Illustration: Palette & Pen
export const ArticlePaletteIllu: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => (
  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Light Gray Container */}
    <rect width="320" height="200" rx="16" fill="#F4F5F7" />

    <g transform="translate(40, 25)">
      {/* Browser Body Shadow */}
      <rect x="8" y="8" width="180" height="135" rx="14" fill="#000000" />
      <rect x="0" y="0" width="180" height="135" rx="14" fill="#FFFFFF" stroke="#000000" strokeWidth="3.5" />
      
      {/* Window dots */}
      <circle cx="16" cy="16" r="4" fill="#FF5364" />
      <circle cx="28" cy="16" r="4" fill="#FFC224" />
      <circle cx="40" cy="16" r="4" fill="#59D13E" />

      {/* Circular Node vector path in window */}
      <circle cx="90" cy="75" r="34" stroke="#000000" strokeWidth="2.5" fill="none" />
      <circle cx="90" cy="41" r="5" fill="#FFC224" stroke="#000000" strokeWidth="2" />
      <circle cx="124" cy="75" r="5" fill="#6355F6" stroke="#000000" strokeWidth="2" />
      <circle cx="90" cy="109" r="5" fill="#FF5364" stroke="#000000" strokeWidth="2" />
      <circle cx="56" cy="75" r="5" fill="#59D13E" stroke="#000000" strokeWidth="2" />

      {/* Floating Pen tool */}
      <g transform="translate(-15, 60)">
        <rect x="4" y="4" width="45" height="45" rx="12" fill="#000000" />
        <rect x="0" y="0" width="45" height="45" rx="12" fill="#FFFFFF" stroke="#000000" strokeWidth="2.5" />
        <path d="M22 10 L32 20 L24 35 L12 25 Z" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
        <circle cx="22" cy="20" r="2.5" fill="#000000" />
      </g>

      {/* Floating Color Palette */}
      <g transform="translate(160, 40)">
        <rect x="4" y="4" width="38" height="95" rx="10" fill="#000000" />
        <rect x="0" y="0" width="38" height="95" rx="10" fill="#FFFFFF" stroke="#000000" strokeWidth="2.5" />
        <rect x="8" y="10" width="22" height="22" rx="4" fill="#2B7FFF" />
        <rect x="8" y="37" width="22" height="22" rx="4" fill="#FF5364" />
        <rect x="8" y="64" width="22" height="22" rx="4" fill="#FFC224" />
      </g>
    </g>
  </svg>
);

// 12. Article Illustration: Typography H1
export const ArticleTypographyIllu: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => (
  <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="200" height="160" rx="14" fill="#F4F5F7" />
    
    <g transform="translate(30, 20)">
      {/* Monitor Base */}
      <rect x="58" y="95" width="24" height="25" fill="#FFFFFF" stroke="#000000" strokeWidth="2.5" />
      <line x1="45" y1="120" x2="95" y2="120" stroke="#000000" strokeWidth="3" strokeLinecap="round" />

      {/* Monitor Display */}
      <rect x="0" y="0" width="140" height="95" rx="12" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />

      {/* H1 Box with handles */}
      <rect x="18" y="15" width="55" height="65" stroke="#000000" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
      <rect x="15" y="12" width="6" height="6" fill="#6355F6" stroke="#000000" strokeWidth="1" />
      <rect x="70" y="12" width="6" height="6" fill="#6355F6" stroke="#000000" strokeWidth="1" />
      <rect x="15" y="77" width="6" height="6" fill="#6355F6" stroke="#000000" strokeWidth="1" />
      <rect x="70" y="77" width="6" height="6" fill="#6355F6" stroke="#000000" strokeWidth="1" />

      <text x="25" y="55" fill="#000000" fontSize="26" fontWeight="bold" fontFamily="sans-serif">H<tspan fontSize="18">1</tspan></text>

      {/* Right controls */}
      <line x1="88" y1="25" x2="115" y2="25" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
      <line x1="88" y1="35" x2="122" y2="35" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
      
      {/* Yellow pill button */}
      <rect x="85" y="50" width="38" height="14" rx="4" fill="#FFC224" stroke="#000000" strokeWidth="1.5" />
      <line x1="88" y1="72" x2="110" y2="72" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
    </g>
  </svg>
);

// 13. Article Illustration: Phone with exercises
export const ArticleExerciseIllu: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => (
  <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="200" height="160" rx="14" fill="#F4F5F7" />
    
    <g transform="translate(55, 10)">
      {/* Phone */}
      <rect x="0" y="0" width="90" height="140" rx="16" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
      <rect x="30" y="6" width="30" height="4" rx="2" fill="#000000" />

      {/* UI Elements inside phone */}
      <rect x="12" y="20" width="30" height="28" rx="6" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
      <line x1="18" y1="26" x2="36" y2="42" stroke="#000000" strokeWidth="2" />
      <line x1="36" y1="26" x2="18" y2="42" stroke="#000000" strokeWidth="2" />

      <line x1="50" y1="25" x2="78" y2="25" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="33" x2="70" y2="33" stroke="#000000" strokeWidth="2" strokeLinecap="round" />

      <rect x="12" y="60" width="66" height="2" fill="#000000" />
      <line x1="12" y1="72" x2="40" y2="72" stroke="#000000" strokeWidth="2" strokeLinecap="round" />

      {/* Pie Chart / Donut */}
      <circle cx="28" cy="105" r="14" fill="none" stroke="#FF5364" strokeWidth="6" />
      <path d="M28 91 A 14 14 0 0 1 42 105" fill="none" stroke="#FFC224" strokeWidth="6" />

      <line x1="50" y1="98" x2="78" y2="98" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="108" x2="70" y2="108" stroke="#000000" strokeWidth="2" strokeLinecap="round" />

      {/* Floating magnifying glass badge */}
      <g transform="translate(-25, 45)">
        <rect x="0" y="0" width="28" height="28" rx="8" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
        <circle cx="13" cy="13" r="5" stroke="#6355F6" strokeWidth="2" fill="none" />
        <line x1="17" y1="17" x2="21" y2="21" stroke="#6355F6" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Floating pencil badge */}
      <g transform="translate(75, 95)">
        <rect x="0" y="0" width="28" height="28" rx="8" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
        <line x1="8" y1="20" x2="20" y2="8" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
      </g>
    </g>
  </svg>
);

// 11. Multi-Currency Accounting & FX Illustration
export const MultiCurrencyFXIllu: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Card shadow */}
    <rect x="16" y="24" width="248" height="152" rx="16" fill="#000000" />
    {/* Main card */}
    <rect x="12" y="20" width="248" height="152" rx="16" fill="#FFFFFF" stroke="#000000" strokeWidth="3.5" />

    {/* Coins Row: ¥ $ € £ */}
    <g transform="translate(34, 46)">
      {/* ¥ coin - red */}
      <circle cx="0" cy="0" r="20" fill="#FF5364" stroke="#000000" strokeWidth="3" />
      <circle cx="0" cy="0" r="14" fill="#FF5364" stroke="#FFFFFF" strokeWidth="1.5" />
      <path d="M-6 -10 L0 -3 L6 -10 M-6 -2 L0 5 L6 -2 M0 -10 V8" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* $ coin - yellow */}
      <g transform="translate(54, 0)">
        <circle cx="0" cy="0" r="20" fill="#FFC224" stroke="#000000" strokeWidth="3" />
        <circle cx="0" cy="0" r="14" fill="#FFC224" stroke="#FFFFFF" strokeWidth="1.5" />
        <path d="M0 -11 V11 M-6 -7 Q0 -11 6 -7 Q8 -3 0 -1 M-6 7 Q0 11 6 7 Q8 3 0 1" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      {/* € coin - blue */}
      <g transform="translate(108, 0)">
        <circle cx="0" cy="0" r="20" fill="#2B7FFF" stroke="#000000" strokeWidth="3" />
        <circle cx="0" cy="0" r="14" fill="#2B7FFF" stroke="#FFFFFF" strokeWidth="1.5" />
        <path d="M-8 -8 A10 10 0 1 0 -8 8 M-8 -8 L2 -4 M-8 0 L2 4 M-8 8 L2 -1" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      {/* £ coin - green */}
      <g transform="translate(162, 0)">
        <circle cx="0" cy="0" r="20" fill="#59D13E" stroke="#000000" strokeWidth="3" />
        <circle cx="0" cy="0" r="14" fill="#59D13E" stroke="#FFFFFF" strokeWidth="1.5" />
        <path d="M-2 -12 Q-9 -8 -9 0 Q-9 6 -2 8 L-1 8 M-2 -4 L-1 10" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
    </g>

    {/* FX wavy fluctuation line */}
    <path
      d="M24 100 Q40 84, 58 96 T96 92 T134 104 T172 88 T210 100 T254 92"
      stroke="#000000"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="58" cy="96" r="3.5" fill="#FF5364" stroke="#000000" strokeWidth="1.5" />
    <circle cx="96" cy="92" r="3.5" fill="#FFC224" stroke="#000000" strokeWidth="1.5" />
    <circle cx="134" cy="104" r="3.5" fill="#2B7FFF" stroke="#000000" strokeWidth="1.5" />
    <circle cx="172" cy="88" r="3.5" fill="#59D13E" stroke="#000000" strokeWidth="1.5" />
    <circle cx="210" cy="100" r="3.5" fill="#FF5364" stroke="#000000" strokeWidth="1.5" />

    {/* Bottom ledger / spreadsheet strip */}
    <g transform="translate(20, 120)">
      <rect x="0" y="0" width="140" height="40" rx="8" fill="#F4F5F7" stroke="#000000" strokeWidth="2.5" />
      <line x1="0" y1="13" x2="140" y2="13" stroke="#000000" strokeWidth="1.5" />
      <line x1="46" y1="0" x2="46" y2="40" stroke="#000000" strokeWidth="1.5" />
      <line x1="92" y1="0" x2="92" y2="40" stroke="#000000" strokeWidth="1.5" />
      <rect x="6" y="5" width="34" height="5" rx="2" fill="#FF5364" />
      <rect x="52" y="5" width="34" height="5" rx="2" fill="#2B7FFF" />
      <rect x="98" y="5" width="34" height="5" rx="2" fill="#59D13E" />
      <rect x="6" y="20" width="28" height="4" rx="2" fill="#000000" />
      <rect x="52" y="20" width="20" height="4" rx="2" fill="#000000" />
      <rect x="98" y="20" width="24" height="4" rx="2" fill="#000000" />
      <rect x="6" y="30" width="32" height="4" rx="2" fill="#000000" />
      <rect x="52" y="30" width="26" height="4" rx="2" fill="#000000" />
      <rect x="98" y="30" width="18" height="4" rx="2" fill="#000000" />
    </g>

    {/* Exchange arrow + gain tag */}
    <g transform="translate(180, 120)">
      <rect x="0" y="0" width="70" height="40" rx="8" fill="#FFC224" stroke="#000000" strokeWidth="2.5" />
      <path d="M6 20 H54 M46 12 L54 20 L46 28" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="8" y="25" width="54" height="10" rx="3" fill="#FFFFFF" stroke="#000000" strokeWidth="1.5" />
      <text x="35" y="33" textAnchor="middle" fontSize="8" fontWeight="900" fill="#000000" fontFamily="monospace">+0.03</text>
    </g>
  </svg>
);

// 12. Cross-border Logistics Cost Accounting Illustration
export const CostAccountingIllu: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="16" y="24" width="248" height="152" rx="16" fill="#000000" />
    <rect x="12" y="20" width="248" height="152" rx="16" fill="#FFFFFF" stroke="#000000" strokeWidth="3.5" />

    {/* Container (shipping box) */}
    <g transform="translate(28, 52)">
      <rect x="0" y="26" width="90" height="58" fill="#2B7FFF" stroke="#000000" strokeWidth="3" />
      <rect x="0" y="26" width="90" height="10" fill="#000000" />
      {/* Container corrugation lines */}
      <line x1="22" y1="36" x2="22" y2="84" stroke="#FFFFFF" strokeWidth="1.5" />
      <line x1="45" y1="36" x2="45" y2="84" stroke="#FFFFFF" strokeWidth="1.5" />
      <line x1="68" y1="36" x2="68" y2="84" strokeWidth="1.5" stroke="#FFFFFF" />
      {/* ISO code */}
      <rect x="8" y="44" width="74" height="16" fill="#FFC224" stroke="#000000" strokeWidth="2" />
      <text x="45" y="57" textAnchor="middle" fontSize="9" fontWeight="900" fill="#000000" fontFamily="monospace">MSKU 42</text>

      {/* Customs tariff stamp on side */}
      <g transform="translate(56, 64)">
        <circle cx="0" cy="0" r="14" fill="#FFFFFF" stroke="#FF5364" strokeWidth="2.5" />
        <text x="0" y="4" textAnchor="middle" fontSize="7" fontWeight="900" fill="#FF5364" fontFamily="monospace">DUTY</text>
      </g>

      {/* Wheels under container */}
      <circle cx="14" cy="94" r="7" fill="#000000" />
      <circle cx="76" cy="94" r="7" fill="#000000" />
    </g>

    {/* Floating cost breakdown invoice */}
    <g transform="translate(136, 44)">
      <rect x="0" y="0" width="118" height="110" rx="6" fill="#FFFFFF" stroke="#000000" strokeWidth="2.5" />
      <rect x="0" y="0" width="118" height="22" rx="6" fill="#FF5364" stroke="#000000" strokeWidth="2.5" />
      <text x="59" y="16" textAnchor="middle" fontSize="8" fontWeight="900" fill="#FFFFFF" fontFamily="monospace">COST BREAKDOWN</text>

      {/* Row: Head Freight */}
      <rect x="8" y="30" width="40" height="9" rx="2" fill="#000000" />
      <rect x="54" y="30" width="28" height="9" rx="2" fill="#2B7FFF" />
      <text x="100" y="38" textAnchor="end" fontSize="8" fontWeight="900" fill="#000000" fontFamily="monospace">2,140</text>

      {/* Row: Customs */}
      <rect x="8" y="45" width="34" height="9" rx="2" fill="#000000" />
      <rect x="48" y="45" width="22" height="9" rx="2" fill="#59D13E" />
      <text x="100" y="53" textAnchor="end" fontSize="8" fontWeight="900" fill="#000000" fontFamily="monospace">386</text>

      {/* Row: Delivery */}
      <rect x="8" y="60" width="36" height="9" rx="2" fill="#000000" />
      <rect x="50" y="60" width="24" height="9" rx="2" fill="#FFC224" />
      <text x="100" y="68" textAnchor="end" fontSize="8" fontWeight="900" fill="#000000" fontFamily="monospace">148</text>

      <line x1="8" y1="78" x2="110" y2="78" stroke="#000000" strokeWidth="2" />
      <text x="8" y="92" fontSize="8" fontWeight="900" fill="#000000" fontFamily="monospace">TOTAL</text>
      <rect x="46" y="84" width="62" height="16" rx="4" fill="#FFC224" stroke="#000000" strokeWidth="2" />
      <text x="77" y="96" textAnchor="middle" fontSize="9" fontWeight="900" fill="#000000" fontFamily="monospace">,674</text>
    </g>

    {/* Margin tag */}
    <g transform="translate(170, 158)">
      <rect x="0" y="0" width="84" height="22" rx="6" fill="#59D13E" stroke="#000000" strokeWidth="2.5" />
      <text x="42" y="15" textAnchor="middle" fontSize="9" fontWeight="900" fill="#000000" fontFamily="monospace">+18% MARGIN</text>
    </g>
  </svg>
);

// 13. AR/AP & Agent Reconciliation Illustration
export const ReconciliationIllu: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="16" y="24" width="248" height="152" rx="16" fill="#000000" />
    <rect x="12" y="20" width="248" height="152" rx="16" fill="#FFFFFF" stroke="#000000" strokeWidth="3.5" />

    {/* Left sheet: Agent statement */}
    <g transform="translate(24, 42)">
      <rect x="0" y="0" width="108" height="116" rx="6" fill="#F4F5F7" stroke="#000000" strokeWidth="2.5" />
      <rect x="0" y="0" width="108" height="20" rx="6" fill="#2B7FFF" stroke="#000000" strokeWidth="2.5" />
      <text x="54" y="14" textAnchor="middle" fontSize="8" fontWeight="900" fill="#FFFFFF" fontFamily="monospace">AGENT STMT</text>
      {/* Rows */}
      <rect x="8" y="28" width="60" height="7" rx="1" fill="#000000" />
      <rect x="72" y="26" width="28" height="11" rx="2" fill="#FFC224" stroke="#000000" strokeWidth="1.5" />
      <rect x="8" y="42" width="52" height="7" rx="1" fill="#000000" />
      <rect x="72" y="40" width="28" height="11" rx="2" fill="#FF5364" stroke="#000000" strokeWidth="1.5" />
      <rect x="8" y="56" width="58" height="7" rx="1" fill="#000000" />
      <rect x="72" y="54" width="28" height="11" rx="2" fill="#59D13E" stroke="#000000" strokeWidth="1.5" />
      <rect x="8" y="70" width="54" height="7" rx="1" fill="#000000" />
      <rect x="72" y="68" width="28" height="11" rx="2" fill="#FFC224" stroke="#000000" strokeWidth="1.5" />
      <rect x="8" y="84" width="40" height="7" rx="1" fill="#000000" />
      <rect x="72" y="82" width="28" height="11" rx="2" fill="#FF5364" stroke="#000000" strokeWidth="1.5" />
      <line x1="8" y1="100" x2="100" y2="100" stroke="#000000" strokeWidth="1.5" />
      <text x="8" y="112" fontSize="8" fontWeight="900" fill="#000000" fontFamily="monospace">BAL 4,820</text>
    </g>

    {/* Reconciliation arrow with checkmark */}
    <g transform="translate(140, 86)">
      <path d="M0 14 H26" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
      <path d="M20 6 L28 14 L20 22" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="38" cy="14" r="14" fill="#59D13E" stroke="#000000" strokeWidth="3" />
      <path d="M31 14 L36 19 L45 9" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </g>

    {/* Right sheet: Our ledger */}
    <g transform="translate(186, 42)">
      <rect x="0" y="0" width="70" height="116" rx="6" fill="#F4F5F7" stroke="#000000" strokeWidth="2.5" />
      <rect x="0" y="0" width="70" height="20" rx="6" fill="#FF5364" stroke="#000000" strokeWidth="2.5" />
      <text x="35" y="14" textAnchor="middle" fontSize="8" fontWeight="900" fill="#FFFFFF" fontFamily="monospace">OURS</text>
      {/* Matching rows */}
      <rect x="8" y="28" width="54" height="7" rx="1" fill="#000000" />
      <path d="M52 24 L58 30" stroke="#59D13E" strokeWidth="3" strokeLinecap="round" />
      <rect x="8" y="42" width="46" height="7" rx="1" fill="#000000" />
      <path d="M46 38 L52 44" stroke="#59D13E" strokeWidth="3" strokeLinecap="round" />
      <rect x="8" y="56" width="52" height="7" rx="1" fill="#000000" />
      <path d="M50 52 L56 58" stroke="#59D13E" strokeWidth="3" strokeLinecap="round" />
      <rect x="8" y="70" width="48" height="7" rx="1" fill="#000000" />
      <path d="M48 66 L54 72" stroke="#59D13E" strokeWidth="3" strokeLinecap="round" />
      <rect x="8" y="84" width="34" height="7" rx="1" fill="#000000" />
      <path d="M42 80 L48 86" stroke="#FF5364" strokeWidth="3" strokeLinecap="round" />
      <line x1="8" y1="100" x2="62" y2="100" stroke="#000000" strokeWidth="1.5" />
      <text x="8" y="112" fontSize="8" fontWeight="900" fill="#000000" fontFamily="monospace">4,820</text>
    </g>

    {/* "on the sea" floating note */}
    <g transform="translate(30, 152)">
      <path d="M0 8 Q 8 -2 20 8 T 40 8 T 60 8" stroke="#2B7FFF" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M0 14 Q 8 4 20 14 T 40 14 T 60 14" stroke="#2B7FFF" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5" />
      <text x="66" y="14" fontSize="8" fontWeight="900" fill="#000000" fontFamily="monospace">no more drift</text>
    </g>
  </svg>
);

// 14. Export Tax Rebate & Compliance Illustration
export const TaxComplianceIllu: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="16" y="24" width="248" height="152" rx="16" fill="#000000" />
    <rect x="12" y="20" width="248" height="152" rx="16" fill="#FFFFFF" stroke="#000000" strokeWidth="3.5" />

    {/* Tax form */}
    <g transform="translate(40, 36)">
      <rect x="0" y="0" width="132" height="124" rx="4" fill="#F4F5F7" stroke="#000000" strokeWidth="2.5" />
      <rect x="14" y="10" width="80" height="8" rx="2" fill="#FF5364" />
      <rect x="14" y="24" width="104" height="5" rx="1" fill="#000000" />
      <rect x="14" y="36" width="78" height="5" rx="1" fill="#000000" />
      <rect x="14" y="48" width="96" height="5" rx="1" fill="#000000" />
      <rect x="14" y="60" width="64" height="5" rx="1" fill="#000000" />

      {/* Table rows: VAT / Customs / Rebate cols */}
      <line x1="12" y1="74" x2="120" y2="74" stroke="#000000" strokeWidth="1.5" />
      <line x1="46" y1="74" x2="46" y2="116" stroke="#000000" strokeWidth="1.5" />
      <line x1="82" y1="74" x2="82" y2="116" stroke="#000000" strokeWidth="1.5" />
      <line x1="12" y1="88" x2="120" y2="88" stroke="#000000" strokeWidth="1.5" />
      <line x1="12" y1="102" x2="120" y2="102" stroke="#000000" strokeWidth="1.5" />
      <rect x="18" y="78" width="22" height="4" rx="1" fill="#000000" />
      <rect x="52" y="78" width="22" height="4" rx="1" fill="#000000" />
      <rect x="88" y="78" width="22" height="4" rx="1" fill="#59D13E" />
      <rect x="18" y="92" width="22" height="4" rx="1" fill="#000000" />
      <rect x="52" y="92" width="22" height="4" rx="1" fill="#000000" />
      <rect x="88" y="92" width="22" height="4" rx="1" fill="#59D13E" />
    </g>

    {/* Red official stamp / seal */}
    <g transform="translate(170, 72)">
      <circle cx="0" cy="0" r="34" fill="#FFFFFF" stroke="#FF5364" strokeWidth="4" />
      <circle cx="0" cy="0" r="26" fill="none" stroke="#FF5364" strokeWidth="2" strokeDasharray="4 3" />
      <text x="0" y="-8" textAnchor="middle" fontSize="9" fontWeight="900" fill="#FF5364" fontFamily="monospace">TAX</text>
      <text x="0" y="6" textAnchor="middle" fontSize="8" fontWeight="900" fill="#FF5364" fontFamily="monospace">BUREAU</text>
      <text x="0" y="18" textAnchor="middle" fontSize="7" fontWeight="700" fill="#FF5364" fontFamily="monospace">2026-11</text>
      {/* Rotating slash */}
      <line x1="-20" y1="-16" x2="20" y2="16" stroke="#FF5364" strokeWidth="3" />
    </g>

    {/* Rebate check + shield */}
    <g transform="translate(184, 140)">
      {/* Shield */}
      <path d="M0 0 H44 V22 C44 34, 22 44, 22 44 C22 44, 0 34, 0 22 Z" fill="#59D13E" stroke="#000000" strokeWidth="2.5" />
      <path d="M12 22 L20 30 L34 14" stroke="#000000" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </g>

    {/* Rebate amount pill */}
    <g transform="translate(60, 164)">
      <rect x="0" y="0" width="96" height="22" rx="11" fill="#FFC224" stroke="#000000" strokeWidth="2.5" />
      <text x="48" y="15" textAnchor="middle" fontSize="9" fontWeight="900" fill="#000000" fontFamily="monospace">REBATE ,280</text>
    </g>
  </svg>
);

// 15. Treasury & Payment Scheduling Illustration
export const TreasurySchedulingIllu: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="16" y="24" width="248" height="152" rx="16" fill="#000000" />
    <rect x="12" y="20" width="248" height="152" rx="16" fill="#FFFFFF" stroke="#000000" strokeWidth="3.5" />

    {/* Clock */}
    <g transform="translate(34, 46)">
      <circle cx="42" cy="42" r="42" fill="#FFC224" stroke="#000000" strokeWidth="3.5" />
      <circle cx="42" cy="42" r="36" fill="none" stroke="#000000" strokeWidth="1.5" />
      {/* Hour marks */}
      <line x1="42" y1="14" x2="42" y2="20" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="42" y1="64" x2="42" y2="70" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="14" y1="42" x2="20" y2="42" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="64" y1="42" x2="70" y2="42" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" />
      {/* Hands */}
      <line x1="42" y1="42" x2="42" y2="22" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
      <line x1="42" y1="42" x2="60" y2="50" stroke="#FF5364" strokeWidth="3" strokeLinecap="round" />
      <circle cx="42" cy="42" r="3" fill="#000000" />
    </g>

    {/* Cash pool bar chart */}
    <g transform="translate(130, 44)">
      <rect x="0" y="0" width="122" height="80" rx="6" fill="#F4F5F7" stroke="#000000" strokeWidth="2.5" />
      <text x="61" y="14" textAnchor="middle" fontSize="7" fontWeight="900" fill="#000000" fontFamily="monospace">CASH POSITION</text>

      {/* Bars */}
      <rect x="8" y="52" width="18" height="22" fill="#2B7FFF" stroke="#000000" strokeWidth="1.5" />
      <rect x="32" y="38" width="18" height="36" fill="#FFC224" stroke="#000000" strokeWidth="1.5" />
      <rect x="56" y="22" width="18" height="52" fill="#59D13E" stroke="#000000" strokeWidth="1.5" />
      <rect x="80" y="32" width="18" height="42" fill="#FF5364" stroke="#000000" strokeWidth="1.5" />
      <rect x="104" y="44" width="10" height="30" fill="#6355F6" stroke="#000000" strokeWidth="1.5" />
      {/* Baseline */}
      <line x1="4" y1="74" x2="118" y2="74" stroke="#000000" strokeWidth="1.5" />
      <text x="17" y="82" textAnchor="middle" fontSize="6" fontWeight="700" fill="#000000" fontFamily="monospace">CNY</text>
      <text x="41" y="82" textAnchor="middle" fontSize="6" fontWeight="700" fill="#000000" fontFamily="monospace">USD</text>
      <text x="65" y="82" textAnchor="middle" fontSize="6" fontWeight="700" fill="#000000" fontFamily="monospace">EUR</text>
      <text x="89" y="82" textAnchor="middle" fontSize="6" fontWeight="700" fill="#000000" fontFamily="monospace">GBP</text>
    </g>

    {/* Payment schedule timeline */}
    <g transform="translate(30, 144)">
      <line x1="0" y1="20" x2="220" y2="20" stroke="#000000" strokeWidth="3" strokeLinecap="round" />
      <circle cx="0" cy="20" r="7" fill="#FF5364" stroke="#000000" strokeWidth="2.5" />
      <circle cx="54" cy="20" r="7" fill="#FFC224" stroke="#000000" strokeWidth="2.5" />
      <circle cx="108" cy="20" r="7" fill="#2B7FFF" stroke="#000000" strokeWidth="2.5" />
      <circle cx="162" cy="20" r="7" fill="#59D13E" stroke="#000000" strokeWidth="2.5" />
      <circle cx="216" cy="20" r="7" fill="#FFFFFF" stroke="#000000" strokeWidth="2.5" strokeDasharray="3 2" />

      <rect x="-6" y="0" width="12" height="14" rx="3" fill="#FF5364" stroke="#000000" strokeWidth="1.5" />
      <text x="0" y="-4" textAnchor="middle" fontSize="6" fontWeight="900" fill="#000000" fontFamily="monospace">W1</text>

      <rect x="48" y="0" width="12" height="14" rx="3" fill="#FFC224" stroke="#000000" strokeWidth="1.5" />
      <text x="54" y="-4" textAnchor="middle" fontSize="6" fontWeight="900" fill="#000000" fontFamily="monospace">W2</text>

      <rect x="102" y="0" width="12" height="14" rx="3" fill="#2B7FFF" stroke="#000000" strokeWidth="1.5" />
      <text x="108" y="-4" textAnchor="middle" fontSize="6" fontWeight="900" fill="#000000" fontFamily="monospace">W3</text>

      <rect x="156" y="0" width="12" height="14" rx="3" fill="#59D13E" stroke="#000000" strokeWidth="1.5" />
      <text x="162" y="-4" textAnchor="middle" fontSize="6" fontWeight="900" fill="#000000" fontFamily="monospace">W4</text>
    </g>
  </svg>
);
