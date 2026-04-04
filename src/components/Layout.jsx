import React from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';

function Layout() {
  return (
    <>
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-[100] bg-black/60 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          <Link className="text-2xl font-black italic tracking-tighter text-cyan-400 font-space-grotesk flex items-center gap-2" to="/">
            <span className="w-8 h-8 bg-gradient-to-tr from-primary-container to-secondary-container rounded-lg flex items-center justify-center italic text-on-primary">P</span>
            PULSE FIT CLUB
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 font-space-grotesk tracking-tight text-sm uppercase font-bold">
            <NavLink
              to="/programmes"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-cyan-400"
                  : "text-white/50 hover:text-white transition-all"
              }
            >
              Programmes
            </NavLink>
            <NavLink
              to="/coachs"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-cyan-400"
                  : "text-white/50 hover:text-white transition-all"
              }
            >
              Coachs
            </NavLink>
            <NavLink
              to="/tarifs"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-cyan-400"
                  : "text-white/50 hover:text-white transition-all"
              }
            >
              Tarifs
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-400 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-cyan-400"
                  : "text-white/50 hover:text-white transition-all"
              }
            >
              Contact
            </NavLink>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-white text-black font-black px-8 py-2.5 rounded-full hover:bg-primary-container transition-all duration-300 font-space-grotesk text-sm">
              S'INSCRIRE
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="min-h-screen">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black w-full pt-32 pb-16 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="space-y-8">
            <h2 className="text-2xl font-black text-white font-space-grotesk flex items-center gap-2 italic">
              <span className="w-8 h-8 bg-gradient-to-tr from-primary-container to-secondary-container rounded-lg flex items-center justify-center not-italic text-on-primary">P</span>
              PULSE FIT CLUB
            </h2>
            <p className="text-neutral-500 text-base leading-relaxed">
              L'élite du fitness digital. La technologie au service du corps humain. Rejoignez l'élite, devenez infini.
            </p>
            <div className="flex gap-5">
              <a className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center hover:bg-primary-container hover:text-black transition-all border border-white/10" href="#">
                <span className="material-symbols-outlined text-xl">alternate_email</span>
              </a>
              <a className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center hover:bg-primary-container hover:text-black transition-all border border-white/10" href="#">
                <span className="material-symbols-outlined text-xl">share</span>
              </a>
              <a className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center hover:bg-primary-container hover:text-black transition-all border border-white/10" href="#">
                <span className="material-symbols-outlined text-xl">chat_bubble</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-black mb-8 font-space-grotesk uppercase tracking-widest text-sm italic">Navigation</h4>
            <ul className="space-y-5 text-sm font-bold">
              <li><Link className="text-neutral-500 hover:text-primary-container transition-all flex items-center gap-2 group" to="/programmes"><span className="w-1 h-1 bg-primary-container rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Programmes</Link></li>
              <li><Link className="text-neutral-500 hover:text-primary-container transition-all flex items-center gap-2 group" to="/coachs"><span className="w-1 h-1 bg-primary-container rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Coachs</Link></li>
              <li><Link className="text-neutral-500 hover:text-primary-container transition-all flex items-center gap-2 group" to="/tarifs"><span className="w-1 h-1 bg-primary-container rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Tarifs</Link></li>
              <li><Link className="text-neutral-500 hover:text-primary-container transition-all flex items-center gap-2 group" to="/contact"><span className="w-1 h-1 bg-primary-container rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black mb-8 font-space-grotesk uppercase tracking-widest text-sm italic">Légal</h4>
            <ul className="space-y-5 text-sm font-bold">
              <li><a className="text-neutral-500 hover:text-primary-container transition-all" href="#">Mentions Légales</a></li>
              <li><a className="text-neutral-500 hover:text-primary-container transition-all" href="#">Confidentialité</a></li>
              <li><a className="text-neutral-500 hover:text-primary-container transition-all" href="#">Newsletter</a></li>
              <li><a className="text-neutral-500 hover:text-primary-container transition-all" href="#">Support Tech</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-black mb-8 font-space-grotesk uppercase tracking-widest text-sm italic">Newsletter</h4>
            <p className="text-neutral-500 text-sm mb-6 font-medium">Rejoignez 50k+ passionnés pour des insights exclusifs.</p>
            <form className="space-y-4">
              <div className="relative">
                <input className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-primary-container focus:border-transparent outline-none transition-all" placeholder="votre@email.com" type="email" />
              </div>
              <button className="w-full bg-primary-container text-black font-black py-4 rounded-2xl hover:bg-white transition-all uppercase tracking-widest text-xs italic">S'ABONNER MAINTENANT</button>
            </form>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-neutral-600 text-[10px] font-black tracking-[0.4em] uppercase">© 2024 PULSE FIT CLUB. DESIGNED FOR THE ELITE.</p>
          <div className="flex gap-8 text-[10px] font-black text-neutral-600 uppercase tracking-widest">
            <a className="hover:text-white transition-colors" href="#">Cookies</a>
            <a className="hover:text-white transition-colors" href="#">Terms</a>
            <a className="hover:text-white transition-colors" href="#">Sitemap</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;
