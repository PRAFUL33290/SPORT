import React from 'react';

function Contact() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-6">
        <h1 className="text-6xl md:text-8xl font-black font-space-grotesk tracking-tighter uppercase italic leading-none">
          PRENEZ <span className="gradient-text">CONTACT</span>
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto font-medium">
          Une question sur nos programmes ? Un besoin spécifique ? Notre équipe est prête à vous répondre.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Contact Info */}
        <div className="space-y-10">
          <div className="glass-card p-8 rounded-3xl border border-white/5 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary-container/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary-container">location_on</span>
              </div>
              <div>
                <h4 className="text-white font-black text-lg mb-1">Quartier Général</h4>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  100 Avenue des Champs-Élysées<br />
                  75008 Paris, France
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary-container/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary">mail</span>
              </div>
              <div>
                <h4 className="text-white font-black text-lg mb-1">Email</h4>
                <p className="text-on-surface-variant text-sm">elite@pulsefitclub.com</p>
                <p className="text-on-surface-variant text-sm">support@pulsefitclub.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary-container/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary-container">phone</span>
              </div>
              <div>
                <h4 className="text-white font-black text-lg mb-1">Téléphone</h4>
                <p className="text-on-surface-variant text-sm">+33 1 23 45 67 89</p>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">Lun-Ven, 9h-18h</p>
              </div>
            </div>
          </div>

          {/* Decorative element */}
          <div className="relative h-48 rounded-3xl overflow-hidden glass-card flex items-center justify-center border border-white/5">
             <div className="absolute inset-0 bg-primary-container/5 mix-blend-overlay"></div>
             <div className="kinetic-glow w-full h-full bg-primary-container/20 blur-[50px]"></div>
             <p className="relative z-10 text-2xl font-black italic font-space-grotesk text-white/50 text-center px-4">
                "LE PREMIER PAS EST SOUVENT LE PLUS DUR."
             </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-card p-10 rounded-[2.5rem] border border-white/5 depth-shadow">
          <h3 className="text-2xl font-black font-space-grotesk italic mb-8">Envoyez-nous un message</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant" htmlFor="firstName">Prénom</label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary-container focus:border-transparent outline-none transition-all text-white"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant" htmlFor="lastName">Nom</label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary-container focus:border-transparent outline-none transition-all text-white"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant" htmlFor="email">Adresse Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary-container focus:border-transparent outline-none transition-all text-white"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant" htmlFor="subject">Sujet</label>
              <select
                id="subject"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary-container focus:border-transparent outline-none transition-all text-white appearance-none"
              >
                <option value="" className="bg-surface text-white">Sélectionnez un sujet</option>
                <option value="programs" className="bg-surface text-white">Informations sur les programmes</option>
                <option value="billing" className="bg-surface text-white">Question de facturation</option>
                <option value="coaching" className="bg-surface text-white">Coaching privé</option>
                <option value="other" className="bg-surface text-white">Autre</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-on-surface-variant" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-primary-container focus:border-transparent outline-none transition-all text-white resize-none"
                placeholder="Comment pouvons-nous vous aider à dépasser vos limites ?"
              ></textarea>
            </div>

            <button type="button" className="w-full py-5 bg-gradient-to-r from-primary-container to-secondary-container text-on-primary font-black rounded-2xl text-lg hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-all duration-300 uppercase tracking-widest italic">
              ENVOYER LE MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
