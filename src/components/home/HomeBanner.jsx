import React from 'react'
import Banner from '../common/banner/Banner'

function HomeBanner() {
    return (
        <div>
            <Banner
                bgVideo="/videos/homevideo.mp4"
                fullHeight={false}
                style={{ minHeight: 'clamp(60vh, 85vw, 100vh)', height: 'clamp(60vh, 85vw, 100vh)' }}
            >
                {/* Column 1: View Resume Link */}
                <div className="flex flex-col justify-end h-full pb-4 w-full">
                    <a href="/resume" className="flex items-center gap-2 cursor-pointer group w-fit select-none">
                        <span className="w-1.5 h-1.5 bg-[#ff4b36] inline-block group-hover:scale-125 transition-transform" />
                        <span className="text-[11px] font-bold uppercase tracking-widest text-white group-hover:text-[#ff4b36] transition-colors">
                            View Resume
                        </span>
                    </a>
                </div>

                {/* Column 2: Spacer */}
                <div className="h-full w-full" />

                {/* Column 3: Headline & Massive Title */}
                <div className="flex flex-col justify-end h-full w-full pb-32 md:pb-40 relative">
                    <p className="text-xs md:text-sm font-extrabold text-white uppercase tracking-wider leading-relaxed max-w-[280px]">
                        I help founders and growing brands turn their ideas into refined websites.
                    </p>

                    {/* Absolute positioned Web Developer title */}
                    <h1 className="absolute bottom-4 left-0 text-[5vw] font-black uppercase tracking-tighter leading-none text-white whitespace-nowrap select-none -ml-1 pointer-events-none">
                        Web Developer
                    </h1>
                </div>

                {/* Column 4: Services Index */}
                <div className="flex flex-col justify-end h-full w-full pb-32 md:pb-40">
                    <div className="flex flex-col items-start gap-3 text-[10px] md:text-xs font-extrabold uppercase tracking-widest text-white/90">
                        <div className="hover:text-[#ff4b36] cursor-pointer transition-colors">/01 Web Application Development</div>
                        <div className="hover:text-[#ff4b36] cursor-pointer transition-colors">/02 Website Development</div>
                        <div className="hover:text-[#ff4b36] cursor-pointer transition-colors">/03 3D Animation</div>
                    </div>
                </div>
            </Banner>
        </div>
    )
}

export default HomeBanner