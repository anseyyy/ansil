import React from 'react'
import GridLines from '../../../components/common/grid/GridLines'

const SKILLS = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML & CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'PostgreSQL'] },
    { category: 'Tooling', items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vercel'] },
    { category: 'Concepts', items: ['MVC Architecture', 'CRUD Operations', 'Authentication', 'Responsive Web', 'API Integration'] },
    { category: 'AI Tools', items: ['GitHub Copilot', 'Codex', 'Antigravity', 'ChatGPT', 'Gemini'] },
]

export default function AboutSkills() {
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
                    {/* Left Column: Title (Sticky) */}
                    <div className="col-span-4 md:col-span-1 flex flex-col gap-4 pb-16 md:pb-0 md:pr-8 md:sticky md:top-36 self-start select-none">
                        <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#ff4b36] flex items-center gap-2">
                            <span className="inline-block w-5 h-px bg-[#ff4b36]" />
                            Skills
                        </span>
                        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white leading-tight">
                            What I<br />Work With.
                        </h2>
                        <p className="mt-2 text-[10px] font-bold tracking-widest text-white/30 uppercase leading-loose max-w-[180px]">
                            A curated selection of languages, frameworks, and tools.
                        </p>
                    </div>

                    {/* Right Columns: Skills Lists */}
                    <div className="col-span-4 md:col-span-3 grid grid-cols-2 lg:grid-cols-5 gap-10 md:gap-6">
                        {SKILLS.map((group, idx) => (
                            <div key={group.category} className="flex flex-col gap-6 group">
                                {/* Category Header */}
                                <div className="flex flex-col gap-2 select-none">
                                    <span className="text-[9px] font-mono font-bold text-[#ff4b36] tracking-wider">
                                        /{String(idx + 1).padStart(2, '0')}
                                    </span>
                                    <h3 className="text-[11px] font-extrabold uppercase tracking-widest text-white border-b border-white/10 pb-4 group-hover:border-[#ff4b36] transition-colors duration-300">
                                        {group.category}
                                    </h3>
                                </div>

                                {/* Skills List */}
                                <ul className="flex flex-col gap-3.5">
                                    {group.items.map((skill) => (
                                        <li
                                            key={skill}
                                            className="group/item flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-all duration-300 transform hover:translate-x-1.5 cursor-default select-none"
                                        >
                                            {/* Accent micro-bullet */}
                                            <span className="w-1.5 h-1.5 bg-[#ff4b36] opacity-0 scale-50 group-hover/item:opacity-100 group-hover/item:scale-100 transition-all duration-300 inline-block flex-shrink-0" />
                                            <span>
                                                {skill}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
