/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BookOpen } from 'lucide-react';
import HeroImg from './assets/images/pastelstudy_hero_1776755542551.png';
import MintErgoImg from './assets/images/mint_ergo_chair_1776755559344.png';
import SkyFlowImg from './assets/images/sky_flow_chair_1776755573373.png';
import PetalSoftImg from './assets/images/petal_soft_chair_1776755592054.png';
import LilacLearnImg from './assets/images/lilac_learn_chair_1776755608962.png';
import PeachPivotImg from './assets/images/peach_pivot_chair_1776755627831.png';
import CloudCoreImg from './assets/images/cloud_core_chair_1776755645175.png';

export default function App() {
  const products = [
    { name: "Mint-Ergo", img: MintErgoImg, desc: "Verde Menta Pastel", price: "$129" },
    { name: "Sky-Flow", img: SkyFlowImg, desc: "Azul Cielo Pálido", price: "$139" },
    { name: "Petal-Soft", img: PetalSoftImg, desc: "Rosa Cuarzo", price: "$149" },
    { name: "Lilac-Learn", img: LilacLearnImg, desc: "Lavanda Suave", price: "$159" },
    { name: "Peach-Pivot", img: PeachPivotImg, desc: "Tono Melocotón", price: "$169" },
    { name: "Cloud-Core", img: CloudCoreImg, desc: "Gris Perla", price: "$179" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <nav className="px-10 py-6 flex justify-between items-center bg-white/50 backdrop-blur-sm border-b border-slate-200">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3">
            <BookOpen className="text-indigo-400 w-7 h-7" />
            <div>
              <h1 className="text-lg font-bold tracking-tight text-slate-900 italic">PastelStudy <span className="text-indigo-400">Co.</span></h1>
              <p className="text-[9px] text-slate-500 tracking-widest uppercase">Estética Escandinava</p>
            </div>
          </div>
          <div className="hidden md:flex gap-2">
            <div className="w-2 h-2 rounded-full bg-indigo-100"></div>
            <div className="w-2 h-2 rounded-full bg-indigo-200"></div>
            <div className="w-2 h-2 rounded-full bg-indigo-300"></div>
          </div>
        </div>
        <button className="px-5 py-2 bg-slate-900 text-white rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg shadow-slate-200 hover:bg-slate-700 transition">
          Comprar Ahora
        </button>
      </nav>
      
      <header className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] uppercase font-bold tracking-[0.2em] text-indigo-400 shadow-sm">
              Colección Escandinava 2024
            </div>
            <h2 className="text-6xl font-extrabold tracking-tighter text-slate-900 leading-[1.1] mb-6">Learning in <span className="text-indigo-400 italic">Pastel</span>.</h2>
            <p className="text-lg text-slate-500 leading-relaxed max-w-md">Ergonomic chairs designed for comfort, focus, and academic excellence. Crafted with beauty.</p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-white text-slate-900 rounded-2xl font-bold shadow-md hover:shadow-xl transition-all border border-slate-100">Explorar Serie</button>
            </div>
          </div>
          <img src={HeroImg} alt="PastelStudy Hero" className="rounded-[3rem] shadow-xl w-full" referrerPolicy="no-referrer" />
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-16 px-6">
        <h3 className="text-3xl font-bold mb-12 text-slate-900">Explore Collection</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(p => (
            <div key={p.name} className="bg-white p-4 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 hover:scale-105 transition-transform duration-300">
              <img src={p.img} alt={p.name} className="w-full aspect-square rounded-2xl mb-4" referrerPolicy="no-referrer" />
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-sm mb-0.5">{p.name}</h4>
                  <p className="text-xs text-slate-400">{p.desc}</p>
                </div>
                <span className="font-mono font-bold text-indigo-400">{p.price}</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="px-10 py-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-400 border-t border-slate-100 gap-4">
        <p>&copy; 2026 PastelStudy Co. Estética Escandinava para Mentes Brillantes.</p>
        <p>Contacto: hola@pastelstudy.co | +34 600 000 000</p>
      </footer>
    </div>
  );
}
