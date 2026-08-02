"use client";
import React, { useEffect } from 'react'
import GridLines from '../../../components/common/grid/GridLines'

export default function AboutHero() {

    useEffect(() => {
        const targets = [
            { id: 'counter-years', end: 3, suffix: '+' },
            { id: 'counter-projects', end: 20, suffix: '+' },
            { id: 'counter-clients', end: 10, suffix: '+' },
        ]
        targets.forEach(({ id, end, suffix }) => {
            const el = document.getElementById(id)
            if (!el) return
            let count = 0
            const step = Math.ceil(end / 40)
            const timer = setInterval(() => {
                count = Math.min(count + step, end)
                el.textContent = count + suffix
                if (count >= end) clearInterval(timer)
            }, 30)
        })
    }, [])

    return (
        <section className="w-full min-h-screen bg-[#0a0a0a] relative overflow-hidden flex flex-col">
            {/* Grid Lines */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <GridLines columns={4} borderColor="rgba(255, 255, 255, 0.05)" />
            </div>

            {/* Top-right corner bracket accent */}
            <div className="absolute top-36 right-0 pointer-events-none z-10 flex flex-col items-end pr-8 gap-1 select-none">
                <div className="w-16 h-px bg-[#ff4b36] opacity-60" />
                <div className="w-px h-16 bg-[#ff4b36] opacity-60 self-end" />
            </div>

            {/* Content */}
            <div className="relative z-10 container-padding-x flex flex-col flex-1 pt-40 pb-20">
                <div
                    className="w-full grid items-start gap-0 flex-1"
                    style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}
                >
                    {/* Col 1: Identity tag + stats */}
                    <div className="col-span-4 md:col-span-1 flex flex-col gap-6 pb-8 md:pb-16 md:pr-6 md:sticky md:top-36 self-start">
                        <div className="flex flex-col gap-4">
                            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#ff4b36] flex items-center gap-2 select-none">
                                <span className="inline-block w-5 h-px bg-[#ff4b36]" />
                                About
                            </span>
                            <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase leading-loose">
                                Full Stack Developer<br />& Web App Builder
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 mt-6 border-t border-white/10 pt-6">
                            {[
                                { id: 'counter-years', value: '1.3+', label: 'Years Experience' },
                                { id: 'counter-projects', value: '13+', label: 'Projects Shipped' },
                                { id: 'counter-clients', value: '3+', label: 'Happy Clients' },
                            ].map(({ id, value, label }) => (
                                <div key={id} className="flex flex-col">
                                    <span id={id} className="text-3xl font-black text-white tracking-tighter">{value}</span>
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-white/30 mt-1">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Col 2: Portrait */}
                    <div className="col-span-4 md:col-span-1 flex flex-col items-start pb-16 md:pb-0 md:sticky md:top-36 self-start">
                        <div className="w-full">
                            <div className="w-full h-[2px] bg-[#ff4b36]" />
                            <div className="w-full overflow-hidden bg-black">
                                <img
                                    src="/images/ansilheaderimage.png"
                                    alt="Ahamed Ansil P A"
                                    className="w-full h-[55vh] object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            <div className="w-full bg-[#0a0a0a] border border-white/10 border-t-0 px-4 py-3 flex items-center justify-between">
                                <span className="text-[9px] font-mono uppercase tracking-widest text-white/40">Ahamed Ansil P A</span>
                                <span className="text-[9px] font-mono uppercase tracking-widest text-[#ff4b36]">Kerala, India</span>
                            </div>
                        </div>
                    </div>

                    {/* Col 3: Spacer */}
                    <div className="hidden md:block col-span-1" />

                    {/* Col 4: Hero Headline */}
                    <div className="col-span-4 md:col-span-1 flex flex-col justify-start pb-16">
                        <h1 className="text-[clamp(3rem,8vw,6rem)] font-black uppercase tracking-tighter leading-none text-white select-none">
                            I BUILD<br />
                            <span className="text-white/20">THINGS</span><br />
                            FOR THE<br />
                            <span className="text-[#ff4b36]">WEB.</span>
                        </h1>
                        <p className="mt-8 text-[10px] font-bold tracking-widest text-white/40 uppercase leading-loose max-w-[260px]">
                            Crafting digital experiences that are bold, fast, and purposefully designed.
                        </p>
                        <a
                            href="/resume"
                            className="mt-10 w-fit flex items-center gap-3 border border-white/10 hover:border-[#ff4b36] text-white hover:text-[#ff4b36] text-[10px] font-bold uppercase tracking-widest px-6 py-4 transition-all duration-300 group"
                        >
                            View Resume
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 group-hover:translate-x-1 transition-transform">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
