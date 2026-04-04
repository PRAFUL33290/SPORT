import React from 'react';

function Coachs() {
  const coachs = [
    {
      id: 1,
      name: 'Marcus Vance',
      specialty: 'Head Coach - Force & Conditionnement',
      image: 'https://images.unsplash.com/photo-1567598508481-65985588e295?q=80&w=1470&auto=format&fit=crop',
      bio: 'Ancien athlète olympique, Marcus combine la biomécanique de pointe avec une approche mentale intransigeante.',
      stats: { xp: '15 ans', rating: '4.99/5' }
    },
    {
      id: 2,
      name: 'Elena Rostova',
      specialty: 'Performance Élite & Mobilité',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1374&auto=format&fit=crop',
      bio: 'Experte en prévention des blessures et récupération active, Elena sculpte des corps aussi fonctionnels qu\'esthétiques.',
      stats: { xp: '10 ans', rating: '4.95/5' }
    },
    {
      id: 3,
      name: 'David Chen',
      specialty: 'Nutrition & Recomposition',
      image: 'https://images.unsplash.com/photo-1583465575603-9bb8a3754e04?q=80&w=1331&auto=format&fit=crop',
      bio: 'Docteur en nutrition sportive, David élabore des stratégies métaboliques millimétrées pour repousser vos limites.',
      stats: { xp: '12 ans', rating: '4.98/5' }
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center space-y-6">
        <h1 className="text-6xl md:text-8xl font-black font-space-grotesk tracking-tighter uppercase italic leading-none">
          L'ÉLITE DU <span className="gradient-text">COACHING</span>
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto font-medium">
          Entraînez-vous avec les meilleurs esprits du fitness mondial. Pas d'excuses, que des résultats.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {coachs.map((coach) => (
          <div key={coach.id} className="glass-card rounded-[3rem] p-8 border border-white/5 hover:-translate-y-2 transition-all duration-500 group">
            <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden mb-8 border-4 border-white/5 group-hover:border-primary-container/30 transition-colors">
              <img
                src={coach.image}
                alt={coach.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <div className="text-center space-y-4">
              <h3 className="text-3xl font-black font-space-grotesk italic">{coach.name}</h3>
              <p className="text-primary-container font-black uppercase tracking-widest text-xs">
                {coach.specialty}
              </p>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {coach.bio}
              </p>

              <div className="flex justify-center gap-6 pt-4 border-t border-white/10 mt-6">
                <div className="text-center">
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-1">Expérience</p>
                  <p className="font-black text-white">{coach.stats.xp}</p>
                </div>
                <div className="w-px bg-white/10"></div>
                <div className="text-center">
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-1">Rating</p>
                  <p className="font-black text-white flex items-center justify-center gap-1">
                    <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    {coach.stats.rating}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Coachs;
