import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
    {
        id: '01',
        title: ' Mobile Franchise ERP',
        description: 'Multi-outlet management ERP built for a major mobile shop franchise featuring real-time inventory tracking, customer device repair logging with auto-generated logins, and payment slip generators.',
        date: 'Aug 01, 2026',
        category: 'ENTERPRISE SYSTEM',
        image: '/images/mobile_erp_mockup.png',
        aspectRatio: 'aspect-[1.5]',
        links: [
            { label: 'CASE STUDY', href: '/projects/mobile-erp', isDemo: true }
        ]
    },
    {
        id: '02',
        title: 'HRMS Portal',
        description: 'Company-wide HRMS built for an enterprise corporation featuring check-in/out, live timesheets, leave workflow, WFO/WFH tracking, and payroll calculations.',
        date: 'April 15, 2025',
        category: 'ENTERPRISE SYSTEM',
        image: '/images/hrms_mockup.png',
        aspectRatio: 'aspect-[1.5]',
        links: [
            { label: 'CASE STUDY', href: '/projects/hrms', isDemo: true }
        ]
    },
    {
        id: '03',
        title: 'QR Code Generator',
        description: 'a clean web utility to paste links and generate responsive qr codes instantly with custom configurations.',
        date: 'Jan 10, 2026',
        category: 'UTILITY & TOOLS',
        image: '/images/qrcode_mockup.jpg',
        aspectRatio: 'aspect-[4/3]',
        links: [
            { label: 'LIVE DEMO', href: 'https://www.qrcodey.in/', isDemo: true },
            { label: '/ CODE', href: 'https://github.com/anseyyy' }
        ]
    },
    {
        id: '04',
        title: 'CivicFix Dashboard',
        description: 'engineered a civic issue reporting dashboard for monitor & report local concerns.',
        date: 'Nov 12, 2025',
        category: 'DEVELOPMENT',
        image: '/images/civicfix_mockup.png',
        aspectRatio: 'aspect-[3/2]',
        links: [
            { label: 'LIVE DEMO', href: 'https://civicfix-client.vercel.app/', isDemo: true },
            { label: '/ CODE', href: 'https://github.com/anseyyy' }
        ]
    },
    {
        id: '05',
        title: 'Hospital Scheduler',
        description: 'architected a dynamic appointment system with real-time doctor slots.',
        date: 'Oct 28, 2025',
        category: 'FULL STACK DEV',
        image: '/images/hospital_mockup.png',
        aspectRatio: 'aspect-[4/5]',
        links: [
            { label: 'LIVE DEMO', href: 'https://hospital-client-bay.vercel.app/', isDemo: true },
            { label: '/ CODE', href: 'https://github.com/anseyyy' }
        ]
    }
]

export default function ProjectGrid() {
    const leftProjects = projects.filter((_, idx) => idx % 2 === 0)
    const rightProjects = projects.filter((_, idx) => idx % 2 !== 0)

    return (
        <div className="w-full grid grid-cols-4 gap-8 md:gap-16 items-start">
            {/* Left Column Stack: Spans Column 1 & 2 */}
            <div className="col-span-4 md:col-span-2 flex flex-col gap-16 md:gap-24 pt-12 md:pt-20">
                {leftProjects.map((project, idx) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            {/* Right Column Stack: Spans Column 3 & 4 */}
            <div className="col-span-4 md:col-span-2 flex flex-col gap-16 md:gap-24 pt-0">
                {rightProjects.map((project, idx) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    )
}
