import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  useEffect(() => {
    // Smooth scrolling if needed or any kinetic interaction scripts
    const handleScroll = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href');
        if (id !== '#') {
          const element = document.querySelector(id);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleScroll);
    return () => document.removeEventListener('click', handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Sophisticated Glows */}
        <div className="kinetic-glow w-[600px] h-[600px] bg-primary-container/20 -top-[20%] -left-[10%] blur-[160px]"></div>
        <div className="kinetic-glow w-[800px] h-[800px] bg-secondary-container/10 bottom-[-10%] -right-[5%] blur-[200px]"></div>
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 relative">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-card border border-primary-container/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-container"></span>
              </span>
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-primary">Live Now : Pulse Elite Session</span>
            </div>
            <h1 className="text-7xl md:text-[110px] font-black font-space-grotesk leading-[0.85] tracking-tighter">
              TRANSFORMEZ<br />
              <span className="gradient-text">VOTRE CORPS</span>.<br />
              <span className="text-white/90">ÉLEVEZ VOTRE ESPRIT.</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl font-body leading-relaxed border-l-2 border-white/10 pl-6">
              L'expérience fitness la plus immersive au monde. Entraînez-vous avec l'élite, progressez avec précision, et rejoignez le futur du mouvement.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <button className="px-10 py-5 bg-gradient-to-r from-primary-container to-secondary-container text-on-primary font-black rounded-full text-lg hover:shadow-[0_0_40px_rgba(0,229,255,0.4)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 group">
                COMMENCER MAINTENANT
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              <button className="px-10 py-5 glass-card rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3 border border-white/10">
                <span className="material-symbols-outlined text-primary">play_circle</span>
                VOIR LE TEASER
              </button>
            </div>
          </div>
          <div className="relative group">
            {/* Floating UI Element */}
            <div className="absolute -top-10 -right-10 z-20 glass-card p-6 rounded-3xl animate-float depth-shadow border border-white/10 hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-container/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-container">bolt</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Intensité</p>
                  <p className="text-xl font-black font-space-grotesk">98% PEAK</p>
                </div>
              </div>
              <div className="flex gap-1 h-8 items-end">
                <div className="w-1.5 bg-primary-container rounded-full h-1/2"></div>
                <div className="w-1.5 bg-primary-container rounded-full h-full"></div>
                <div className="w-1.5 bg-primary-container rounded-full h-2/3"></div>
                <div className="w-1.5 bg-primary-container rounded-full h-4/5"></div>
                <div className="w-1.5 bg-primary-container rounded-full h-1/2"></div>
              </div>
            </div>
            {/* Main Image Container */}
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] depth-shadow border border-white/10">
              <img alt="Professional Athlete" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcQvqK6Z2QrXfnxbChPN9QcHoiK01sH6Ayjrhw0ANooiqe0o-Pfxsj0XC9wcDRyYn3rXZ6JmHihBfpAXp_Ssn-afu2yqm8TkfNaV6CsK2W7Vv2hp5t5cYZwDUqIlinHOeVFcUABuVfS-FkaqbLLj7E-JdzQmV0wBry30hBUl-fLVPYZ75-6LTvplFFOaU1RktH3rCAz5tx8kbI0k5uZhoCe5VcERFIzvG_QsqrxTJZMhdiyR8PY-uZ6pKCuUQgMjv6g7RR9HaawVgd" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              {/* Integrated Performance HUD */}
              <div className="absolute bottom-8 left-8 right-8 p-8 glass-card rounded-[2rem] border border-white/10 group-hover:border-primary-container/30 transition-colors hidden sm:block">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-2">Données Biométriques</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black font-space-grotesk text-white">164</span>
                      <span className="text-lg font-bold text-on-surface-variant">BPM</span>
                    </div>
                  </div>
                  <div className="relative w-20 h-20">
                    <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 100 100">
                      <circle className="text-white/5" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeWidth="8"></circle>
                      <circle className="text-primary-container drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeDasharray="251.2" strokeDashoffset="60" strokeWidth="8"></circle>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary-container text-xl animate-pulse">favorite</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Kinetic Blurred Shape */}
            <div className="absolute -z-10 -bottom-20 -left-20 w-80 h-80 bg-secondary-container/20 blur-[100px] rounded-full animate-float-delayed"></div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="glass-card rounded-[3rem] p-12 md:p-16 border border-white/5 relative overflow-hidden">
            {/* Background detail */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-container/5 to-transparent"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center relative z-10">
              <div className="text-center lg:text-left space-y-4">
                <h2 className="text-5xl font-black font-space-grotesk tracking-tighter">REJOIGNEZ LA <br /><span className="text-primary-container italic">COMMUNAUTÉ</span>.</h2>
                <p className="text-on-surface-variant text-lg">Plus de 10 000 membres actifs redéfinissent leurs limites chaque jour.</p>
              </div>
              <div className="flex flex-col items-center gap-6">
                <div className="flex -space-x-5">
                  <img className="w-16 h-16 rounded-full border-4 border-surface-container ring-4 ring-primary-container/20 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-BiMVx2e6qffjG7BuI9L0kitEB7Hu7utVRZemHzVEh4QejlrbM1z8Jy-lp9xK7r40d_SUDoHtZafo5LSzIH78OO130Iv5lTKv0nDmr_owesPYtL1D6SsNVPw35sXuBZkh4bUW83Q5ityvnMuUTZKxOUtn2p5EAHiyB23MLmaCW9Yq-6DwOl4u1cPcypRigqBkQGexcrIimewS2jyp8WQrGbuo4d72hzWsRXU3bxF6iVSvXFxQBsGiljADu7w6GqjvEUVDkIwGHcdk" />
                  <img className="w-16 h-16 rounded-full border-4 border-surface-container ring-4 ring-secondary-container/20 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ75I4kI9LTAltYBzR3mO3rpVPvS390u69CTZPU51hPb3JVGivUb2zk3Xdz9zuvjPtyUaSStaLKlNWbR9BuBQnevnvQZ6ZT14q_XYL7oF5Pkttk2q8V3Mztm9FWwILEI2od3cMNNr8Lna4oxOnUFv2izSDm3EYwkWJ_foj8FXQmUt30dKPFZ5bTxrj3hEspnKoxnj7Mb9sNzzabcHZ5tmaIhK_5r2Wo-C8hqOozee7NF5qTFNhRiJzwLrgG_IJdemAX36won6owoiv" />
                  <img className="w-16 h-16 rounded-full border-4 border-surface-container object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFRLz-uiQFRhE9gCZh67JMHl_FyZsK_XqBpbt8Lr4lKhDQlaKsiaMrG-BQtF-fQ0qCkfXm7jCwibPnLSGpLSTZ1tab_TR73KaFe85kC6KpNWVyHCH17OSef5Q-lcPst38MZm-V9cPafQ-oaOVu25sFM5CqAeFPTQpkk6ZOghUTk-n1n5-Wa1sjg2CQ4nHAFat9HPhDtaGcdFyT2h84FbsvbsW0-38isRm1hnwy5Grykg9teCQel6jchkYyYsyQfecfpJuZAmf7KW7g" />
                  <div className="w-16 h-16 rounded-full border-4 border-surface-container bg-surface-container-high flex items-center justify-center text-sm font-black text-primary-container backdrop-blur-xl">+10k</div>
                </div>
                <div className="flex items-center gap-3 glass-card px-6 py-2 rounded-full border border-white/10">
                  <div className="flex gap-1">
                    <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-primary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <span className="font-bold text-white">4.9/5 TrustScore</span>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="p-8 glass-card rounded-[2rem] italic text-on-surface-variant border-l-4 border-primary-container relative">
                  <span className="absolute top-4 left-4 text-6xl text-white/5 font-serif">"</span>
                  "PULSE a littéralement changé ma vision du sport. L'énergie est palpable, même à travers l'écran. C'est le futur."
                  <span className="block mt-4 font-black not-italic text-white text-sm tracking-widest uppercase">— Sarah M., Membre Pro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-32 relative overflow-hidden">
        <div className="kinetic-glow w-[500px] h-[500px] bg-secondary-container/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[150px]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-24 text-center space-y-6">
            <h2 className="text-6xl md:text-8xl font-black font-space-grotesk tracking-tighter leading-none uppercase">UNE EXPÉRIENCE <br /><span className="gradient-text italic">SANS COMPROMIS</span></h2>
            <p className="text-xl text-on-surface-variant max-w-2xl mx-auto font-medium">Technologie de pointe et expertise humaine au service de votre performance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[340px]">
            {/* Feature 1 */}
            <div className="md:col-span-8 group rounded-[2.5rem] overflow-hidden relative p-10 flex flex-col justify-end depth-shadow border border-white/5">
              <img alt="Personal Training" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0BDsrdiB063wP3gGrLSONRZH7cS-DUCvnkffBaN7GcdgcBisS3B7yPTZe4IS-AsNJJlPwFr9ktGLr1ktDKE9Kct36Jw4FtTUw37Z8unVb9jxqGKDUNbGpK74lJKIVjfkVZqOoiOi_iPz2DbZOkm1F9EPQxzx6Mu0XJa8AQx1_GztLfdbnmbmoDQXJTPyR18TCrW1aj-uPHobZl6RuVwTfhXK1PE6ZbGei4_jqxpgxBb8RkSELuqaeaNm-hZEALsYd3VvUW7Gw0eY7" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="relative z-10 space-y-4">
                <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-primary-container/50 transition-colors">
                  <span className="material-symbols-outlined text-primary-container text-4xl">fitness_center</span>
                </div>
                <h3 className="text-4xl font-black font-space-grotesk uppercase italic">Programmes Élite</h3>
                <p className="text-on-surface-variant max-w-md text-lg leading-relaxed">Intelligence artificielle et coachs olympiques s'unissent pour créer votre plan parfait.</p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="md:col-span-4 glass-card rounded-[2.5rem] p-10 flex flex-col justify-between border border-white/5 hover:border-secondary-container/40 transition-all group depth-shadow">
              <div className="w-16 h-16 bg-secondary-container/20 rounded-2xl flex items-center justify-center border border-secondary-container/20">
                <span className="material-symbols-outlined text-secondary text-4xl animate-pulse">live_tv</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black font-space-grotesk uppercase italic">Live Stream 4K</h3>
                <p className="text-on-surface-variant text-lg">Immersion totale avec nos flux vidéo ultra-haute définition et audio spatialisé.</p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="md:col-span-4 glass-card rounded-[2.5rem] p-10 flex flex-col justify-between border border-white/5 hover:border-primary-container/40 transition-all group depth-shadow">
              <div className="w-16 h-16 bg-primary-container/20 rounded-2xl flex items-center justify-center border border-primary-container/20">
                <span className="material-symbols-outlined text-primary-container text-4xl">nutrition</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-black font-space-grotesk uppercase italic">Nutrition Bio</h3>
                <p className="text-on-surface-variant text-lg">Synchronisation de vos besoins caloriques en temps réel selon vos entraînements.</p>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="md:col-span-8 glass-card rounded-[2.5rem] overflow-hidden relative p-10 flex items-center border border-white/5 depth-shadow">
              <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center gap-16">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                    <span className="material-symbols-outlined text-white text-4xl">analytics</span>
                  </div>
                  <h3 className="text-4xl font-black font-space-grotesk uppercase italic leading-none">Analyse de <br /><span className="text-primary">Performance</span></h3>
                  <p className="text-on-surface-variant text-lg">Visualisez votre progression avec des graphiques cinétiques interactifs.</p>
                </div>
                <div className="space-y-6 glass-card p-8 rounded-3xl border border-white/5 relative overflow-hidden hidden sm:block">
                  <div className="h-4 bg-white/5 rounded-full overflow-hidden relative group">
                    <div className="h-full bg-gradient-to-r from-primary-container to-cyan-400 w-[85%] relative">
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] animate-[shimmer_2s_infinite]"></div>
                    </div>
                  </div>
                  <div className="h-4 bg-white/5 rounded-full overflow-hidden relative">
                    <div className="h-full bg-gradient-to-r from-secondary-container to-purple-400 w-[65%]"></div>
                  </div>
                  <div className="h-4 bg-white/5 rounded-full overflow-hidden relative">
                    <div className="h-full bg-white w-[92%] shadow-[0_0_15px_rgba(255,255,255,0.4)]"></div>
                  </div>
                  {/* Floating Ring Ornament */}
                  <div className="absolute -right-10 -bottom-10 w-32 h-32 border-[20px] border-primary-container/10 rounded-full animate-float"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-6xl md:text-8xl font-black font-space-grotesk italic tracking-tighter uppercase leading-none">CHOISISSEZ VOTRE <br /><span className="gradient-text">NIVEAU D'IMPACT</span></h2>
            <p className="text-on-surface-variant text-xl font-medium">L'investissement le plus rentable est celui que vous faites sur vous-même.</p>
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
                <li className="flex items-center gap-4 text-sm font-bold"><span className="material-symbols-outlined">check_circle</span> 1 Session Live Coachée</li>
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
                <li className="flex items-center gap-4 text-sm font-bold"><span className="material-symbols-outlined text-primary-container">check_circle</span> Pulse Box (Équipement)</li>
                <li className="flex items-center gap-4 text-sm font-bold"><span className="material-symbols-outlined text-primary-container">check_circle</span> Accès Clubs Physiques</li>
              </ul>
              <button className="w-full py-5 rounded-2xl border-2 border-white/10 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">SÉLECTIONNER</button>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-40 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h2 className="text-7xl md:text-[90px] font-black font-space-grotesk leading-none tracking-tighter uppercase italic">VOIR C'EST <br /><span className="gradient-text">CROIRE.</span></h2>
              <p className="text-2xl text-on-surface-variant leading-relaxed font-medium">L'esthétique n'est qu'un symptôme de votre puissance retrouvée. Découvrez des transformations réelles d'athlètes Pulse.</p>
              <div className="grid grid-cols-2 gap-12 pt-8">
                <div className="relative">
                  <p className="text-6xl font-black font-space-grotesk text-primary-container">-12KG</p>
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-on-surface-variant mt-2">Perte Moyenne</p>
                  <div className="absolute -left-6 top-0 w-1 h-full bg-primary-container/20"></div>
                </div>
                <div className="relative">
                  <p className="text-6xl font-black font-space-grotesk text-secondary">+25%</p>
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-on-surface-variant mt-2">Force Explosive</p>
                  <div className="absolute -left-6 top-0 w-1 h-full bg-secondary/20"></div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 relative">
              {/* Premium Editorial Layout */}
              <div className="space-y-6">
                <div className="rounded-[2rem] overflow-hidden aspect-[4/6] relative depth-shadow border border-white/10 group">
                  <img alt="Transformation Before" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2L4khshhFIqHsCrv94kE1w_P_FRBIPG298zzR7tLYCm10Cu5qPOviLEsWcoh5GecYX-hmDyAjMJE19jq38eGX3MVPo3G31q_RV3zFTOwm_5OijU3SSFWB1rdQ1xkkZ-Lgv1NVw76CzENeYvaZ0DB-np2hnugnDO9vWKCP7rOyjwpecGC8FobqiXuBVK6lNeXU2hF25zsjjUMYn8YHqChHNZhvKxe6hw4V0kGm2k8Kt-02NsukEamsCz3WCzafKLIBq8eXyilT-H1Y" />
                  <div className="absolute bottom-6 left-6 px-4 py-2 glass-card text-[10px] font-black uppercase tracking-widest rounded-xl border border-white/20">Semaine 01</div>
                </div>
              </div>
              <div className="space-y-6 -mt-12">
                <div className="rounded-[2rem] overflow-hidden aspect-[4/6] relative depth-shadow border-2 border-primary-container/50 group">
                  <img alt="Transformation After" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvHlP_CGOXQFv7qb-Vlg_z53obonR1mWzUG3G7n0o9pd79r-nIoA4PdAaW0AWPF2Z6_bT856KPAxX_IIEv61NJbAeURtJ9xUjHho2tXXQkdagbLmQC9FRLWXBb2-Nws44bS5hD-1J1Qx4zmSXTukZxH8vU27oUGKF3j9f_YZK7Z8nOO42wo1ZVFOHy3nv_dnarhhNrhuJEQQcfTCwpzmdkfFoGV9zNNru337shG0N8U9etVqK4YkYw_M2z0bqmWPCaoBrJ0XRfhgqO" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container/20 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-6 left-6 px-4 py-2 bg-primary-container text-on-primary text-[10px] font-black uppercase tracking-widest rounded-xl shadow-xl">Semaine 12</div>
                </div>
                {/* Floating Stat Ornament */}
                <div className="glass-card p-6 rounded-3xl animate-float border border-primary-container/30">
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary-container">Progression</p>
                  <p className="text-2xl font-black font-space-grotesk">SCORE S+</p>
                </div>
              </div>
              {/* Background Kinetic Blur */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-container/5 blur-[120px] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary-container/5 z-0"></div>
        <div className="kinetic-glow w-[1000px] h-[1000px] bg-secondary-container/20 bottom-[-500px] left-1/2 -translate-x-1/2 blur-[200px]"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-12">
          <h2 className="text-7xl md:text-[120px] font-black font-space-grotesk tracking-tighter leading-[0.8] uppercase italic">
            REJOIGNEZ LE <br />
            <span className="gradient-text">MOUVEMENT</span> <br />
            DÈS AUJOURD'HUI
          </h2>
          <p className="text-2xl text-on-surface-variant max-w-2xl mx-auto font-medium">Votre potentiel n'attend pas demain. Activez votre énergie maintenant.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-8 pt-8">
            <button className="px-16 py-7 bg-white text-black font-black rounded-full text-2xl hover:bg-primary-container hover:scale-105 transition-all duration-300 shadow-[0_30px_60px_rgba(0,229,255,0.3)] uppercase tracking-tighter italic">
              Commencer l'aventure
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
