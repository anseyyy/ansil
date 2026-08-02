import React from 'react'
import GridLines from '../../../components/common/grid/GridLines'

const VALUES = [
    {
        index: '01',
        title: 'Clarity First',
        body: 'Every design decision should serve a purpose. I strip out noise and focus on what actually communicates and converts.',
    },
    {
        index: '02',
        title: 'Code with Intent',
        body: 'Clean, maintainable code is not a luxury. It is the foundation of everything that scales well.',
    },
    {
        index: '03',
        title: 'Motion Matters',
        body: 'Micro-interactions and transitions are not decoration — they guide users through experiences naturally.',
    },
    {
        index: '04',
        title: 'Always Shipping',
        body: 'A good product shipped beats a perfect product stuck in review. I value momentum and iteration.',
    },
]

export default function AboutValues() {
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
                    {/* Left Column: Label, Title & Description (Sticky) */}
                    <div className="col-span-4 md:col-span-1 flex flex-col gap-4 pb-16 md:pb-0 md:pr-8 md:sticky md:top-36 self-start select-none">
                        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#ff4b36] flex items-center gap-2">
                            <span className="inline-block w-5 h-px bg-[#ff4b36]" />
                            Values
                        </span>
                        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white leading-tight">
                            What Drives<br />My Work.
                        </h2>
                        <p className="mt-2 text-[10px] font-bold tracking-widest text-white/30 uppercase leading-loose max-w-[180px]">
                            Core principles that shape my design and code.
                        </p>
                    </div>

                    {/* Right Columns: List of values */}
                    <div className="col-span-4 md:col-span-3 flex flex-col">
                        {VALUES.map((v, idx) => (
                            <div
                                key={v.index}
                                className="w-full grid grid-cols-3 gap-4 md:gap-0 py-10 border-t border-white/10 hover:bg-white/[0.015] transition-all duration-350 group cursor-default"
                            >
                                {/* Left: Index & Title */}
                                <div className="col-span-3 md:col-span-1 flex items-start gap-4 select-none">
                                    <span className="text-[10px] font-mono font-black text-[#ff4b36] group-hover:text-white transition-colors mt-0.5">
                                        /{v.index}
                                    </span>
                                    <h3 className="text-sm font-black uppercase tracking-wider text-white group-hover:text-[#ff4b36] transition-colors duration-300">
                                        {v.title}
                                    </h3>
                                </div>

                                {/* Right: Description */}
                                <div className="col-span-3 md:col-span-2 md:pl-8">
                                    <p className="text-[11px] font-medium tracking-wide text-white/50 group-hover:text-white/80 transition-colors leading-relaxed max-w-xl">
                                        {v.body}
                                    </p>
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
