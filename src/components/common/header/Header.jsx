"use client";
import React, { useState, useEffect } from 'react'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [time, setTime] = useState('');

    useEffect(() => {
        setMounted(true);
        const updateClock = () => {
            const now = new Date();
            let hours = now.getHours();
            const minutes = now.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // 0 should be 12
            const strHours = hours < 10 ? '0' + hours : hours;
            const strMinutes = minutes < 10 ? '0' + minutes : minutes;
            setTime(`${strHours}:${strMinutes} ${ampm}`);
        };

        updateClock();
        const timerId = setInterval(updateClock, 1000);
        return () => clearInterval(timerId);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
            if (typeof window !== 'undefined' && window.lenis) {
                window.lenis.stop();
            }
        } else {
            document.body.style.overflow = '';
            if (typeof window !== 'undefined' && window.lenis) {
                window.lenis.start();
            }
        }

        return () => {
            document.body.style.overflow = '';
            if (typeof window !== 'undefined' && window.lenis) {
                window.lenis.start();
            }
        };
    }, [isMenuOpen]);

    return (
        <header className="absolute top-0 left-0 right-0 z-50 w-full bg-transparent text-white">
            <div className="container-padding-x py-3 sm:pt-10">
                <div 
                    className="w-full h-20 grid"
                    style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}
                >
                    {/* Column 1: Menu & Brand */}
                    <div className="flex items-center justify-start h-full relative">
                        <div className="flex items-center gap-3">
                            {/* Menu button */}
                            <div 
                                className="flex items-center gap-2 cursor-pointer group z-50 select-none"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <div className="relative w-3 h-3 flex items-center justify-center">
                                    {/* Closed State: 2x2 Grid */}
                                    <div className={`grid grid-cols-2 gap-[3px] w-3 h-3 transition-all duration-300 absolute inset-0 ${isMenuOpen ? 'opacity-0 scale-50 rotate-45' : 'opacity-100 scale-100 rotate-0'}`}>
                                        <span className="w-1 h-1 bg-white rounded-[1px] group-hover:bg-[#ff4b36] transition-colors" />
                                        <span className="w-1 h-1 bg-white rounded-[1px] group-hover:bg-[#ff4b36] transition-colors" />
                                        <span className="w-1 h-1 bg-white rounded-[1px] group-hover:bg-[#ff4b36] transition-colors" />
                                        <span className="w-1 h-1 bg-white rounded-[1px] group-hover:bg-[#ff4b36] transition-colors" />
                                    </div>
                                    {/* Open State: Cross 'X' */}
                                    <div className={`w-3 h-3 transition-all duration-300 absolute inset-0 ${isMenuOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-45'}`}>
                                        <span className="absolute top-1/2 left-0 w-3 h-[1.5px] bg-[#ff4b36] rounded-[1px] -translate-y-1/2 rotate-45" />
                                        <span className="absolute top-1/2 left-0 w-3 h-[1.5px] bg-[#ff4b36] rounded-[1px] -translate-y-1/2 -rotate-45" />
                                    </div>
                                </div>
                                <span className={`text-[11px] font-bold uppercase tracking-wider text-white group-hover:text-[#ff4b36] transition-colors ${isMenuOpen ? 'text-[#ff4b36]' : ''}`}>
                                    {isMenuOpen ? 'Close' : 'Menu'}
                                </span>
                            </div>
                            
                            {/* Separator line */}
                            <div className="w-6 h-[1px] bg-white/20" />
                            
                            {/* Brand Logo */}
                            <a href="/" className="text-sm font-black uppercase tracking-widest text-white hover:text-[#ff4b36] transition-colors cursor-pointer select-none">
                                Ansil.dev
                            </a>
                        </div>

                        {/* Floating Small Ball Menu Backdrop */}
                        {isMenuOpen && (
                            <div 
                                className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[2px] transition-all duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            />
                        )}

                        {/* Floating Small Menu Box */}
                        <div 
                            className={`absolute top-16 left-[-10px] w-60 rounded-2xl bg-[#0a0a0a]/90 text-white flex flex-col items-start px-8 py-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 z-50 transform origin-top-left transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                                isMenuOpen 
                                    ? 'scale-100 opacity-100 pointer-events-auto rotate-0' 
                                    : 'scale-0 opacity-0 pointer-events-none -rotate-6'
                            }`}
                            style={{ 
                                backdropFilter: 'blur(16px)'
                            }}
                        >
                            {/* Menu Links */}
                            <nav className="flex flex-col items-start gap-5 w-full">
                                <a 
                                    href="/about" 
                                    className="group flex items-baseline gap-3 text-sm font-bold uppercase tracking-widest text-white/60 hover:text-white transition-all duration-300 transform hover:translate-x-1.5"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span className="text-[10px] text-[#ff4b36] font-mono font-extrabold">01</span>
                                    <span>About</span>
                                </a>
                                <a 
                                    href="/projects" 
                                    className="group flex items-baseline gap-3 text-sm font-bold uppercase tracking-widest text-white/60 hover:text-white transition-all duration-300 transform hover:translate-x-1.5"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span className="text-[10px] text-[#ff4b36] font-mono font-extrabold">02</span>
                                    <span>Projects</span>
                                </a>
                                <a 
                                    href="/resume" 
                                    className="group flex items-baseline gap-3 text-sm font-bold uppercase tracking-widest text-white/60 hover:text-white transition-all duration-300 transform hover:translate-x-1.5"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <span className="text-[10px] text-[#ff4b36] font-mono font-extrabold">03</span>
                                    <span>Resume</span>
                                </a>

                            </nav>
                            
                            {/* Sleek separator & footer */}
                            <div className="w-full h-[1px] bg-white/10 mt-6 mb-4" />
                            <div className="flex justify-between w-full text-[9px] uppercase tracking-widest text-white/40 font-bold font-mono">
                                <span>© 2026</span>
                                <span>Ansil.dev</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Spacer */}
                    <div className="h-full" />

                    {/* Column 3: Live Local Time Clock */}
                    <div className="hidden sm:flex items-center justify-start h-full">
                        {mounted ? (
                            <div className="flex items-center select-none text-[11px] font-extrabold uppercase tracking-widest">
                                <span className="text-white">{time}</span>
                                <span className="text-white/40 ml-2 font-bold font-sans">Local Time</span>
                            </div>
                        ) : (
                            <div className="flex  items-center select-none text-[11px] font-extrabold uppercase tracking-widest text-white/40">
                                --:-- -- <span className="ml-2 font-bold font-sans">Local Time</span>
                            </div>
                        )}
                    </div>

                    {/* Column 4: Contact Action Button */}
                    <div className="hidden sm:flex items-center justify-end h-full">
                        <a href="#contact" className="flex items-center h-10 overflow-hidden cursor-pointer group select-none">
                            {/* Avatar */}
                            <img
                                src="/images/ansilheaderimage.png"
                                alt="Ansil Profile"
                                className="h-10 w-10 object-cover border border-r-0 border-white/10"
                            />
                            
                            {/* Left Arrow Box (slides in on hover) */}
                            <div className="h-full w-0 group-hover:w-10 opacity-0 group-hover:opacity-100 bg-[#ff4b36] text-white flex items-center justify-center transition-all duration-300 ease-in-out overflow-hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5 flex-shrink-0">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                            
                            {/* Button Label */}
                            <div className="bg-black text-white font-extrabold text-[10px] uppercase tracking-widest h-full px-5 flex items-center justify-center pointer-events-none">
                                Start Project <span className="text-white/40 ml-1.5">/Ansil</span>
                            </div>
                            
                            {/* Right Arrow Box (slides out on hover) */}
                            <div className="h-full w-10 group-hover:w-0 opacity-100 group-hover:opacity-0 bg-[#ff4b36] text-white flex items-center justify-center transition-all duration-300 ease-in-out overflow-hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5 flex-shrink-0">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
