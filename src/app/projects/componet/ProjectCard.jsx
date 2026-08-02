import React from 'react'

export default function ProjectCard({ project }) {
    const { title, description, date, category, image, aspectRatio, links } = project

    const primaryLink = links?.find(l => l.isDemo)?.href || links?.[0]?.href

    return (
        <div className="flex flex-col select-none group">
            {/* Date Header with top border hover transition */}
            <div className="flex justify-between items-center border-t border-white/10 group-hover:border-t-[#ff4b36] pt-3 mb-6 transition-colors duration-300">
                <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">{date}</span>
                <div className="flex gap-0.5 text-[7px] text-white/20">
                    <span>■</span><span>■</span><span>■</span>
                </div>
            </div>

            {/* Main Clickable Card Body */}
            <a 
                href={primaryLink}
                target={primaryLink?.startsWith('http') ? '_blank' : '_self'}
                rel={primaryLink?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex flex-col cursor-pointer group/card"
            >
                <div className={`border-t border-t-[#ff4b36] border-b border-white/10 pb-5 mb-5 relative overflow-hidden ${aspectRatio || 'aspect-[3/2]'} bg-[#121212] shadow-2xl`}>
                    <img 
                        src={image} 
                        alt={`${title} Mockup`} 
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 pointer-events-none" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                </div>

                <div className="flex items-center gap-1.5 text-[8px] tracking-widest font-extrabold uppercase font-mono text-white/40 mb-3">
                    <span className="w-1.5 h-1.5 bg-[#ff4b36] rounded-[1px] inline-block" />
                    {category}
                </div>

                <h3 className="text-base font-black uppercase tracking-wider text-white mb-2 leading-tight group-hover/card:text-[#ff4b36] transition-colors">
                    {title}
                </h3>
                
                <p className="text-[10px] text-white/60 leading-relaxed lowercase mb-4 max-w-md">
                    {description}
                </p>
            </a>

            {/* Actions Row */}
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest">
                {links && links.map((link, idx) => {
                    if (link.isDemo) {
                        return (
                            <a 
                                key={idx}
                                href={link.href}
                                target={link.href?.startsWith('http') ? '_blank' : '_self'}
                                rel={link.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="flex items-center gap-1 text-white hover:text-[#ff4b36] transition-colors"
                            >
                                {link.label} <span className="text-[8px]">→</span>
                            </a>
                        )
                    }
                    if (link.href) {
                        return (
                            <a 
                                key={idx} 
                                href={link.href} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-white/40 hover:text-white transition-colors"
                            >
                                {link.label}
                            </a>
                        )
                    }
                    return (
                        <span key={idx} className="text-white/40">
                            {link.label}
                        </span>
                    )
                })}
            </div>
        </div>
    )
}
