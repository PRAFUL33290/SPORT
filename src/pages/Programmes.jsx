import React from 'react';

function Programmes() {
  const programmes = [
    {
      id: 1,
      title: 'Hypertrophie Pro',
      level: 'Avancé',
      duration: '12 Semaines',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop',
      description: 'Développez une masse musculaire sèche avec des techniques d\'intensité avancées issues des pros de la musculation.',
    },
    {
      id: 2,
      title: 'Explosivité Elite',
      level: 'Intermédiaire',
      duration: '8 Semaines',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop',
      description: 'Gagnez en puissance, vitesse et détente verticale. Idéal pour les athlètes de terrain.',
    },
    {
      id: 3,
      title: 'Recomposition Corporelle',
      level: 'Tous Niveaux',
      duration: '16 Semaines',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop',
      description: 'Perdez de la masse grasse tout en maintenant votre capital musculaire grâce à une périodisation nutritionnelle et sportive.',
    },
    {
      id: 4,
      title: 'Mobilité & Récupération',
      level: 'Tous Niveaux',
      duration: 'Continu',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop',
      description: 'Des routines quotidiennes pour améliorer votre souplesse, prévenir les blessures et optimiser votre récupération nerveuse.',
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center space-y-6">
        <h1 className="text-6xl md:text-8xl font-black font-space-grotesk tracking-tighter uppercase italic leading-none">
          NOS <span className="gradient-text">PROGRAMMES</span>
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto font-medium">
          Des protocoles d'entraînement basés sur la science, conçus pour des résultats spectaculaires.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {programmes.map((prog) => (
          <div key={prog.id} className="glass-card rounded-[2.5rem] overflow-hidden group border border-white/5 hover:border-primary-container/30 transition-all duration-500">
            <div className="relative h-64 overflow-hidden">
              <img
                src={prog.image}
                alt={prog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-4 left-6 flex gap-3">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-white border border-white/20">
                  {prog.level}
                </span>
                <span className="px-3 py-1 bg-primary-container/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-primary-container border border-primary-container/20">
                  {prog.duration}
                </span>
              </div>
            </div>
            <div className="p-8 space-y-4">
              <h3 className="text-3xl font-black font-space-grotesk italic">{prog.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">
                {prog.description}
              </p>
              <button className="mt-4 flex items-center gap-2 text-primary hover:text-white transition-colors font-bold uppercase tracking-widest text-sm group-hover:translate-x-2 duration-300">
                Découvrir le programme
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programmes;
