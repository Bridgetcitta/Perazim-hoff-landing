// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { 
  Scissors, 
  Crown, 
  Gem, 
  Sparkles, 
  Menu, 
  X, 
  ArrowRight, 
  ChevronRight, 
  Search, 
  Instagram, 
  Facebook, 
  Mail, 
  MapPin, 
  Star 
} from 'lucide-react';

import myFabricImage from './11.jpg'; 
import heroCover from './6.jpg';
import Fabric14 from './14.jpg';
import Fabric4 from './4.jpg';
import Fabric1 from './1.jpg';
// --- Components ---

const LuxuryButton = ({ children, variant = 'primary', className = '', ...props }) => {
  // Primary: Black background, Gold Text
  const primaryStyle = "bg-black text-amber-400 border border-black hover:bg-white hover:text-black hover:border-black shadow-xl";
  
  // Secondary: White background, Black Text, Gold Border Effect
  const secondaryStyle = "bg-white text-black border border-stone-200 hover:border-amber-400 hover:text-amber-600";
  
  // Gold: Gold Gradient background, White text
  const goldStyle = "bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300 text-white border border-transparent hover:shadow-[0_5px_15px_rgba(245,158,11,0.3)]";

  const variants = {
    primary: primaryStyle,
    secondary: secondaryStyle,
    gold: goldStyle
  };

  return (
    <button 
      className={`px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-500 flex items-center justify-center gap-2 ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

const SectionHeading = ({ badge, title, subtitle, align = 'center' }) => (
  <div className={`max-w-4xl mx-auto mb-20 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    {badge && (
      <div className={`flex items-center gap-4 mb-6 ${align === 'center' ? 'justify-center' : 'justify-start'}`}>
        <div className="h-px w-8 bg-amber-400"></div>
        <span className="text-amber-600 text-[10px] font-bold uppercase tracking-[0.3em]">
          {badge}
        </span>
        <div className="h-px w-8 bg-amber-400"></div>
      </div>
    )}
    <h2 className="text-4xl md:text-6xl font-serif text-black mb-6 leading-tight">
      {title}
    </h2>
    <p className="text-lg text-stone-500 leading-relaxed font-light max-w-2xl mx-auto font-serif italic">
      {subtitle}
    </p>
  </div>
);

const FabricCard = ({ image, title, origin, description }) => (
  <div className="group cursor-pointer">
    {/* Image Container */}
    <div className="relative h-[550px] w-full overflow-hidden bg-stone-100 mb-8 border border-stone-100">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      {/* Gold Border Overlay on Hover */}
      <div className="absolute inset-4 border border-white/0 group-hover:border-amber-400/80 transition-all duration-700 z-10"></div>
      
      {/* Quick Add Button */}
      <div className="absolute bottom-0 left-0 w-full bg-white p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 border-t border-stone-100 flex justify-between items-center">
        <span className="text-xs uppercase tracking-widest">View Details</span>
        <ArrowRight className="w-4 h-4 text-amber-600" />
      </div>
    </div>

    {/* Text Content */}
    <div className="text-center px-4">
      <p className="text-amber-600 text-[10px] tracking-[0.25em] uppercase mb-3 font-bold">{origin}</p>
      <h3 className="text-2xl font-serif text-black mb-2 group-hover:text-amber-600 transition-colors">{title}</h3>
      <p className="text-stone-500 text-sm font-light leading-relaxed line-clamp-2">
        {description}
      </p>
    </div>
  </div>
);

// --- Main Application ---

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-stone-900 selection:bg-amber-100 selection:text-amber-900">
      
      {/* Top Bar Announcement */}
      <div className="bg-black text-white py-2 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] font-medium">
          <span className="text-amber-400 mx-2">✦</span> 
          Complimentary Global Shipping on Orders Over $500
          <span className="text-amber-400 mx-2">✦</span>
        </p>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 top-8 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 !top-0' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="border border-black p-2 rounded-none">
                <Crown className="text-black w-6 h-6" strokeWidth={1} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif text-black tracking-[0.1em] leading-none uppercase">The Perazim Hoff</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-12">
              {['Silks', 'Lace', 'Brocade', 'Velvet', 'Atelier'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-bold tracking-[0.2em] text-black hover:text-amber-600 transition-colors uppercase relative group">
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-px bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-6">
              <Search className="w-5 h-5 text-black hover:text-amber-600 cursor-pointer transition-colors" />
              <div className="h-4 w-px bg-stone-300"></div>
              <span className="text-xs font-bold uppercase tracking-widest cursor-pointer hover:text-amber-600">Login</span>
              <span className="text-xs font-bold uppercase tracking-widest cursor-pointer hover:text-amber-600">Bag (0)</span>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-black"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-stone-100 p-8 flex flex-col gap-6 shadow-xl animate-in slide-in-from-top-5">
            <a href="#silks" className="text-black font-serif text-3xl hover:text-amber-600">Silks</a>
            <a href="#lace" className="text-black font-serif text-3xl hover:text-amber-600">Lace</a>
            <a href="#brocade" className="text-black font-serif text-3xl hover:text-amber-600">Brocade</a>
            <a href="#about" className="text-black font-serif text-3xl hover:text-amber-600">The Atelier</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen pt-32 pb-20 flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Text */}
          <div className="lg:col-span-5 relative z-10 order-2 lg:order-1">
            <div className="mb-8 flex items-center gap-4">
              <div className="w-12 h-px bg-black"></div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-amber-600">
                The Gold Collection
              </span>
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-serif text-black mb-8 leading-[1]">
              Woven <br/>
              <span className="italic text-stone-400">in</span> <br/>
              Luxury.
            </h1>
            
            <p className="text-lg text-stone-600 mb-12 max-w-md font-light leading-relaxed font-serif">
              Discover fabrics that define opulence. From the shimmer of crushed silk to the weight of imperial brocade.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <LuxuryButton variant="primary">
                Shop Collection
              </LuxuryButton>
              <LuxuryButton variant="secondary">
                View Lookbook
              </LuxuryButton>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:col-span-7 relative h-[600px] lg:h-[800px] order-1 lg:order-2">
             {/* Main Image */}
             <div className="absolute inset-0 bg-stone-100 overflow-hidden">
               <img 
                 src={heroCover}
                 alt="Luxury Fabric" 
                 className="w-full h-full object-cover opacity-90"
               />
             </div>
             
             {/* Floating Elements */}
             <div className="absolute -bottom-10 -left-10 bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] max-w-xs border border-stone-100 hidden md:block">
                <div className="flex items-center gap-2 mb-4 text-amber-500">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <p className="font-serif italic text-black">"The quality of the damask is simply unrivaled. A true treasure."</p>
                <p className="text-[10px] uppercase tracking-widest mt-4 text-stone-400">— Eleanor Vance, Couturier</p>
             </div>

             {/* Gold Frame Outline */}
             <div className="absolute top-10 right-10 bottom-10 left-10 border border-white/30 pointer-events-none"></div>
          </div>
        </div>
      </header>

      {/* Philosophy Strip */}
      <div className="border-y border-stone-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-stone-100">
          <div className="px-6 flex flex-col items-center">
            <Gem className="w-6 h-6 text-black mb-6" strokeWidth={1} />
            <h4 className="font-serif text-2xl text-black mb-3 italic">Rare Textiles</h4>
            <p className="text-stone-500 text-sm font-light leading-relaxed">Sourced from the archives of European mills.</p>
          </div>
          <div className="px-6 pt-12 md:pt-0 flex flex-col items-center">
            <Scissors className="w-6 h-6 text-black mb-6" strokeWidth={1} />
            <h4 className="font-serif text-2xl text-black mb-3 italic">Couture Grade</h4>
            <p className="text-stone-500 text-sm font-light leading-relaxed">Fabrics chosen specifically for bespoke tailoring.</p>
          </div>
          <div className="px-6 pt-12 md:pt-0 flex flex-col items-center">
            <Sparkles className="w-6 h-6 text-black mb-6" strokeWidth={1} />
            <h4 className="font-serif text-2xl text-black mb-3 italic">Authentic Gold</h4>
            <p className="text-stone-500 text-sm font-light leading-relaxed">Threads spun with real 24k gold leaf.</p>
          </div>
        </div>
      </div>

      {/* The Collections Grid */}
      <section id="collections" className="py-32 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <SectionHeading 
            badge="The Selection"
            title="Material Excellence" 
            subtitle="Explore our curated pillars of luxury."
          />
          
          <div className="grid md:grid-cols-3 gap-12">
            <FabricCard 
              image={myFabricImage}
             title="Royal Silk"
              description="100% silk and Charmeuse. Liquid drapes that catch the light with an ethereal glow."
            />
            <FabricCard 
              image={Fabric14}
              title="Luxury Lace"
              description="Intricate beaded patterns handcrafted on tulle. Delicate, feminine, and timelessly elegant."
            />
            <FabricCard 
              image={Fabric4}
              title="Imperial Brocade"
              description="Heavy-weight Jacquards and Brocades woven with genuine gold and silver threads."
            />
          </div>

          <div className="mt-20 text-center">
             <a href="#" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] border-b border-black pb-1 hover:text-amber-600 hover:border-amber-600 transition-colors">
                View Full Catalogue <ArrowRight className="w-4 h-4" />
             </a>
          </div>
        </div>
      </section>

      {/* Highlight/Showcase Section */}
      <section className="py-32 bg-stone-50 overflow-hidden relative">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-24">
          
          <div className="lg:w-1/2 relative">
             <div className="absolute top-10 -left-10 w-full h-full border border-black/10"></div>
             <img 
               src={Fabric1} 
               alt="Luxury Velvet" 
               className="w-full h-[700px] object-cover relative z-10 shadow-2xl"
             />
             <div className="absolute bottom-10 -right-10 bg-black text-white p-8 z-20 hidden lg:block">
               <span className="block text-4xl font-serif text-amber-400 mb-1">01</span>
               <span className="text-[10px] uppercase tracking-widest text-stone-400">Limited Edition</span>
             </div>
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-amber-600 tracking-[0.3em] text-xs font-bold uppercase mb-6">The Masterpiece</h3>
            <h2 className="text-5xl md:text-7xl font-serif text-black mb-8 leading-tight">
              Velvet <br/> Goldmine
            </h2>
            <div className="h-px w-20 bg-black mb-8"></div>
            <p className="text-stone-600 text-lg leading-relaxed mb-10 font-light font-serif">
              Our rarest acquisition this season. Double-dyed velvet infused with micro-gold dust, creating a shimmer that changes with the angle of the light. Perfect for evening gowns that demand attention.
            </p>
            
            <div className="grid grid-cols-2 gap-12 mb-12">
              <div>
                <span className="block text-xs uppercase tracking-widest text-stone-400 mb-2">Weight</span>
                <span className="text-xl font-serif text-black">320 GSM</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-stone-400 mb-2">Width</span>
                <span className="text-xl font-serif text-black">58 Inches</span>
              </div>
            </div>

            <LuxuryButton variant="primary">
              Request Swatch
            </LuxuryButton>
          </div>
        </div>
      </section>

      {/* Featured Fabric List (Text Only) */}
      <section className="py-24 bg-white border-y border-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 text-center">
            {['Damask', 'Chiffon', 'Georgette', 'Tulle', 'Taffeta', 'Organza', 'Cashmere', 'Merino Wool'].map((item) => (
              <span key={item} className="text-3xl font-serif text-stone-300 hover:text-black hover:italic cursor-default transition-all duration-500">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Footer */}
      <footer className="bg-white pt-24 pb-12 border-t border-stone-100">
        <div className="max-w-[1400px] mx-auto px-6">
          
          {/* Newsletter Box */}
          <div className="bg-black text-white p-12 md:p-20 text-center mb-20 relative overflow-hidden">
             {/* Gold decorative circle */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/10 rounded-full"></div>
             <div className="relative z-10">
                <Crown className="text-amber-400 w-8 h-8 mx-auto mb-6" />
                <h2 className="text-3xl md:text-5xl font-serif mb-6">Join The Inner Circle</h2>
                <p className="text-stone-400 mb-10 max-w-lg mx-auto font-light">
                   Receive early access to new collections and private invitations to our showroom events.
                </p>
                <div className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto border-b border-white/30 pb-2">
                   <input type="email" placeholder="Email Address" className="bg-transparent text-white placeholder:text-stone-500 w-full outline-none py-2 text-center sm:text-left" />
                   <button className="text-xs font-bold uppercase tracking-widest hover:text-amber-400 transition-colors whitespace-nowrap py-2">Subscribe</button>
                </div>
             </div>
          </div>

          {/* Footer Grid */}
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1">
               <span className="text-2xl font-serif text-black uppercase tracking-widest block mb-6">Perazim Hoff</span>
               <div className="flex gap-4">
                  <Instagram size={20} className="text-black hover:text-amber-600 cursor-pointer" />
                  <Facebook size={20} className="text-black hover:text-amber-600 cursor-pointer" />
                  <Mail size={20} className="text-black hover:text-amber-600 cursor-pointer" />
               </div>
            </div>
            
            <div>
               <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-stone-400">Shop</h4>
               <ul className="space-y-4 text-sm font-serif">
                  <li><a href="#" className="hover:text-amber-600 hover:italic transition-all">New Arrivals</a></li>
                  <li><a href="#" className="hover:text-amber-600 hover:italic transition-all">Best Sellers</a></li>
               </ul>
            </div>

            <div>
               <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-stone-400">Atelier</h4>
               <ul className="space-y-4 text-sm font-serif">
                  <li><a href="#" className="hover:text-amber-600 hover:italic transition-all">About Us</a></li>

               </ul>
            </div>

            <div>
               <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-stone-400">Contact</h4>
               <div className="flex gap-3 items-start text-sm font-serif">
                  <MapPin size={16} className="mt-1 shrink-0" />
                  <address className="not-italic">
                     Rawlings Park - Accra<br/>+233 55 256 6834
                  </address>
               </div>
            </div>
          </div>

          <div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-stone-400">
             <p>&copy; 2025 The Perazim Hoff. All Rights Reserved.</p>
             <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Accessibility</a>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}