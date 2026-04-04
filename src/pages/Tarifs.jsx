import React from 'react';

function Tarifs() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-24 space-y-6">
        <h1 className="text-6xl md:text-8xl font-black font-space-grotesk italic tracking-tighter uppercase leading-none">
          CHOISISSEZ VOTRE <br /><span className="gradient-text">NIVEAU D'IMPACT</span>
        </h1>
        <p className="text-on-surface-variant text-xl font-medium max-w-2xl mx-auto">
          L'investissement le plus rentable est celui que vous faites sur vous-même. Aucun engagement, annulez à tout moment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Basic */}
        <div className="glass-card rounded-[3rem] p-12 flex flex-col hover:translate-y-[-12px] transition-all duration-500 border border-white/5 hover:border-white/20 depth-shadow">
          <p className="text-on-surface-variant font-black uppercase tracking-widest text-xs mb-6">Discovery</p>
          <h3 className="text-3xl font-black mb-4 font-space-grotesk italic">BASIC</h3>
          <div className="flex items-baseline gap-2 mb-10">
            <span className="text-6xl font-black font-space-grotesk">9,99€</span>
            <span className="text-on-surface-variant font-bold">/MOIS</span>
          </div>
          <ul className="space-y-5 mb-12 flex-grow">
            <li className="flex items-center gap-4 text-sm font-bold"><span className="material-symbols-outlined text-primary-container">check_circle</span> Accès illimité vidéo</li>
            <li className="flex items-center gap-4 text-sm font-bold"><span className="material-symbols-outlined text-primary-container">check_circle</span> App iOS / Android</li>
            <li className="flex items-center gap-4 text-sm font-bold opacity-30"><span className="material-symbols-outlined">cancel</span> Nutrition sur mesure</li>
            <li className="flex items-center gap-4 text-sm font-bold opacity-30"><span className="material-symbols-outlined">cancel</span> Coaching Live</li>
          </ul>
          <button className="w-full py-5 rounded-2xl border-2 border-white/10 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">SÉLECTIONNER</button>
        </div>

        {/* Pro */}
        <div className="bg-white text-black rounded-[3rem] p-12 flex flex-col relative scale-105 depth-shadow ring-[12px] ring-white/5 z-20">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-primary-container text-on-primary rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-xl">MOST ADDICTIVE</div>
          <p className="text-black/60 font-black uppercase tracking-widest text-xs mb-6">Recommended</p>
          <h3 className="text-3xl font-black mb-4 font-space-grotesk italic">PRO ELITE</h3>
          <div className="flex items-baseline gap-2 mb-10">
            <span className="text-6xl font-black font-space-grotesk">19,99€</span>
            <span className="text-black/60 font-bold">/MOIS</span>
          </div>
          <ul className="space-y-5 mb-12 flex-grow">
            <li className="flex items-center gap-4 text-sm font-bold"><span className="material-symbols-outlined">check_circle</span> Tout de l'offre Basic</li>
            <li className="flex items-center gap-4 text-sm font-bold"><span className="material-symbols-outlined">check_circle</span> Nutrition AI-driven</li>
            <li className="flex items-center gap-4 text-sm font-bold"><span className="material-symbols-outlined">check_circle</span> 1 Session Live Coachée / mois</li>
            <li className="flex items-center gap-4 text-sm font-bold"><span className="material-symbols-outlined">check_circle</span> Suivi Biométrique</li>
          </ul>
          <button className="w-full py-5 rounded-2xl bg-black text-white font-black uppercase tracking-widest hover:bg-primary-container hover:text-black transition-all shadow-xl">DEVENIR ELITE</button>
        </div>

        {/* Elite */}
        <div className="glass-card rounded-[3rem] p-12 flex flex-col hover:translate-y-[-12px] transition-all duration-500 border border-white/5 hover:border-white/20 depth-shadow">
          <p className="text-on-surface-variant font-black uppercase tracking-widest text-xs mb-6">Limitless</p>
          <h3 className="text-3xl font-black mb-4 font-space-grotesk italic">LEGACY</h3>
          <div className="flex items-baseline gap-2 mb-10">
            <span className="text-6xl font-black font-space-grotesk">39,99€</span>
            <span className="text-on-surface-variant font-bold">/MOIS</span>
          </div>
          <ul className="space-y-5 mb-12 flex-grow">
            <li className="flex items-center gap-4 text-sm font-bold"><span className="material-symbols-outlined text-primary-container">check_circle</span> Accès VIP illimité</li>
            <li className="flex items-center gap-4 text-sm font-bold"><span className="material-symbols-outlined text-primary-container">check_circle</span> Coaching 1-on-1 24/7</li>
            <li className="flex items-center gap-4 text-sm font-bold"><span className="material-symbols-outlined text-primary-container">check_circle</span> Pulse Box (Équipement Pro)</li>
            <li className="flex items-center gap-4 text-sm font-bold"><span className="material-symbols-outlined text-primary-container">check_circle</span> Accès Clubs Physiques Partenaires</li>
          </ul>
          <button className="w-full py-5 rounded-2xl border-2 border-white/10 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">SÉLECTIONNER</button>
        </div>
      </div>

      {/* FAQ ou info sup (optionnel mais bon pour une page dédiée) */}
      <div className="mt-32 max-w-3xl mx-auto border-t border-white/10 pt-16">
        <h3 className="text-2xl font-black font-space-grotesk italic mb-8 text-center">QUESTIONS FRÉQUENTES</h3>
        <div className="space-y-6">
          <div className="glass-card p-6 rounded-2xl">
            <h4 className="font-bold text-white mb-2">Puis-je changer de forfait en cours de route ?</h4>
            <p className="text-on-surface-variant text-sm">Absolument. Vous pouvez upgrader vers Pro ou Legacy à tout moment. La facturation sera ajustée au prorata.</p>
          </div>
          <div className="glass-card p-6 rounded-2xl">
            <h4 className="font-bold text-white mb-2">Que contient la Pulse Box (Offre Legacy) ?</h4>
            <p className="text-on-surface-variant text-sm">La box inclut notre cardiofréquencemètre exclusif, des bandes de résistance premium, et des suppléments nutritionnels pour votre premier mois.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tarifs;
