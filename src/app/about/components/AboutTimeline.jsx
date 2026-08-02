import React from 'react'
import GridLines from '../../../components/common/grid/GridLines'

const TIMELINE = [
    {
        year: '2024',
        role: 'Full Stack Developer',
        company: 'Freelance',
        desc: 'Building bespoke web applications and design systems for startups and growing brands across India.',
    },
    {
        year: '2023',
        role: 'Frontend Developer',
        company: 'Agency Work',
        desc: 'Delivered high-performance Next.js sites and React applications, collaborating with designers and back-end teams.',
    },
    {
        year: '2022',
        role: 'Junior Web Developer',
        company: 'Self-Directed',
        desc: 'Started building full-stack web projects independently, exploring JavaScript, REST APIs, and component-based frontend architecture.',
    },
    {
        year: '2021',
        role: 'Computer Science Student',
        company: 'University',
        desc: 'Began programming journey with Python and C, eventually discovering the web and never looking back.',
    },
]

export default function AboutTimeline() {
    return (
        <section className="w-full bg-[#0a0a0a] border-t border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none z-0">
                <GridLines columns={4} borderColor="rgba(255, 255, 255, 0.05)" />
            </div>

            <div className="relative z-10 container-padding-x py-24">
                <div
                    className="w-full grid gap-0"
                    style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}
                >
                    {/* Section label col 1 */}
                    <div className="col-span-4 md:col-span-1 flex flex-col gap-3 pb-16 md:pb-0 md:pr-8">
                        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#ff4b36] flex items-center gap-2 select-none">
                            <span className="inline-block w-5 h-px bg-[#ff4b36]" />
                            Journey
                        </span>
                        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white leading-tight">
                            How I Got<br />Here.
                        </h2>
                        <p className="mt-2 text-[10px] font-bold tracking-widest text-white/30 uppercase leading-loose max-w-[180px]">
                            From curiosity to craft.
                        </p>
                    </div>

                    {/* Timeline entries cols 2-4 */}
                    <div className="col-span-4 md:col-span-3 flex flex-col">
                        {TIMELINE.map((item) => (
                            <div
                                key={item.year}
                                className="flex flex-col md:flex-row gap-6 md:gap-0 border-t border-white/10 py-8 hover:bg-white/[0.015] transition-colors duration-300 group"
                            >
                                {/* Year */}
                                <div className="md:w-24 flex-shrink-0">
                                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#ff4b36] group-hover:text-white transition-colors">
                                        {item.year}
                                    </span>
                                </div>
                                {/* Dot */}
                                <div className="hidden md:flex items-start pt-1 px-6">
                                    <span className="w-1.5 h-1.5 bg-white/20 group-hover:bg-[#ff4b36] transition-colors flex-shrink-0 mt-[2px]" />
                                </div>
                                {/* Content */}
                                <div className="flex-1 flex flex-col gap-2">
                                    <div className="flex items-baseline justify-between gap-4">
                                        <h3 className="text-sm font-black uppercase tracking-tight text-white">{item.role}</h3>
                                        <span className="text-[9px] font-mono uppercase tracking-widest text-white/30 flex-shrink-0">{item.company}</span>
                                    </div>
                                    <p className="text-[10px] font-bold tracking-wider text-white/40 uppercase leading-loose">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                        <div className="border-t border-white/10" />
                    </div>
                </div>
            </div>
        </section>
    )
}
