import React from 'react';
import { Coins, Dog, Users, Rocket, ChevronDown, Github, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2C1810] to-black text-white">
      {/* Hero Section */}
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Coins className="w-8 h-8 text-amber-600" />
          <span className="text-2xl font-bold">$BELA</span>
        </div>
        <div className="flex gap-6">
          <a href="#about" className="hover:text-amber-600 transition-colors">About</a>
          <a href="#tokenomics" className="hover:text-amber-600 transition-colors">Tokenomics</a>
          <a href="https://x.com/chrisxianmade" target="_blank" rel="noopener noreferrer" className="hover:text-amber-600 transition-colors">Community</a>
        </div>
      </nav>

      <header className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
        <div className="relative w-64 h-64 mb-8">
          <img
            src="https://cdn.petdirect.co.nz/cache/ck_editor_image/ac/04/76cbe1bd67b6c1365ee78e6cdaf1.png"
            alt="Bella"
            className="rounded-full object-cover w-full h-full border-4 border-amber-600"
          />
        </div>
        <h1 className="text-6xl font-bold mb-4">Meet $BELA</h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
          Bella, Solana chain's biggest saving grace! Inspired by our beloved Bella, this yorkie isn't here to play, and wants to make your pockets fatter. We'll do it together, one candle at a time.
        </p>
        <div className="flex gap-4">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-bold transition-colors">
            Buy $BELA
          </button>
          <a 
            href="https://x.com/chrisxianmade" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="border-2 border-amber-600 hover:bg-amber-600/10 px-8 py-3 rounded-full font-bold transition-colors"
          >
            Join Community
          </a>
        </div>
        <ChevronDown className="w-8 h-8 mt-16 animate-bounce text-amber-600" />
      </header>

      {/* Features */}
      <section className="bg-[#1C1C1C]/80 py-20" id="about">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose $BELA?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#2C1810] p-8 rounded-2xl text-center">
              <Dog className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Community Driven</h3>
              <p className="text-gray-400">Built by dog lovers, for dog lovers. Every transaction supports animal shelters.</p>
            </div>
            <div className="bg-[#2C1810] p-8 rounded-2xl text-center">
              <Users className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Strong Community</h3>
              <p className="text-gray-400">Join thousands of $BELA holders in our growing community.</p>
            </div>
            <div className="bg-[#2C1810] p-8 rounded-2xl text-center">
              <Rocket className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Fair Launch</h3>
              <p className="text-gray-400">No pre-sale, no team tokens. 100% fair distribution to the community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section className="py-20" id="tokenomics">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Tokenomics</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#2C1810] p-8 rounded-2xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">Token Distribution</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between">
                  <span>Liquidity Pool</span>
                  <span className="text-amber-600">80%</span>
                </li>
                <li className="flex justify-between">
                  <span>Community Rewards</span>
                  <span className="text-amber-600">15%</span>
                </li>
                <li className="flex justify-between">
                  <span>Animal Shelter Fund</span>
                  <span className="text-amber-600">5%</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#2C1810] p-8 rounded-2xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">Price Chart</h3>
                <a 
                  href="https://dexscreener.com/search?q=%24BELA" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-amber-600 hover:text-amber-500 text-sm font-semibold"
                >
                  View
                </a>
              </div>
              <div className="relative h-48 w-full">
                <div className="absolute top-0 left-0 right-0 flex justify-between items-center">
                  <span className="text-xs text-gray-400">24h</span>
                  <span className="text-sm font-bold text-amber-600">+42.69%</span>
                </div>
                <svg viewBox="0 0 100 50" className="w-full h-full mt-6" preserveAspectRatio="none">
                  <path
                    d="M0,50 L5,45 L10,48 L15,42 L20,44 L25,38 L30,40 L35,35 L40,37 L45,32 L50,34 L55,28 L60,30 L65,25 L70,27 L75,22 L80,24 L85,18 L90,20 L95,15 L100,10"
                    fill="none"
                    stroke="#d97706"
                    strokeWidth="0.5"
                    className="drop-shadow-lg"
                  />
                  <path
                    d="M0,50 L5,45 L10,48 L15,42 L20,44 L25,38 L30,40 L35,35 L40,37 L45,32 L50,34 L55,28 L60,30 L65,25 L70,27 L75,22 L80,24 L85,18 L90,20 L95,15 L100,10 L100,50 L0,50"
                    fill="url(#gradient)"
                    fillOpacity="0.2"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#d97706" />
                      <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1C1C1C] py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://x.com/chrisxianmade" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-600 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber-600 transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
          <p className="text-center text-gray-400">
            © 2024 $BELA Coin. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;