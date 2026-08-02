import React from 'react'
import GridLines from '@/components/common/grid/GridLines'
import ProjectGrid from '@/app/projects/componet/ProjectGrid'

export default function ProjectsPage() {
    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] pt-20 text-white relative overflow-x-hidden">
            {/* Grid lines background spanning the entire scrolling layout height */}
            <div className="absolute inset-y-0 left-0 right-0 pointer-events-none z-0">
                <GridLines columns={4} borderColor="rgba(255, 255, 255, 0.05)" />
            </div>

            {/* Giant background text: PROJECTS */}
            <div className="absolute top-8 pt-20 left-9 right-0 pointer-events-none select-none z-0 overflow-hidden">
                <h1 className="text-[14vw] font-black uppercase text-white/[0.015] tracking-tighter leading-none whitespace-nowrap">
                    Projects
                </h1>
            </div>

            {/* Main content container */}
            <div className="relative z-10 container-padding-x pt-36 pb-32">
                {/* Masonry Project Grid Component */}
                <ProjectGrid />
            </div>
        </div>
    )
}
