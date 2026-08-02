import React from 'react'
import GridLines from '@/components/common/grid/GridLines'
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb'
import { notFound } from 'next/navigation'

const PROJECT_DETAILS = {
    'mobile-erp': {
        title: 'Mobile Franchise ERP',
        subtitle: 'Multi-Outlet Inventory & Device Repair Tracking Hub',
        metaTitle: 'Mobile Franchise ERP — Projects / Ahamed Ansil P A',
        metaDesc: 'Detailed showcase of the multi-outlet mobile shop inventory, repair tracker, and customer billing ERP built using MERN stack, manual coding, and vibe tools.',
        category: 'Franchise ERP',
        scope: 'Multi-Outlet India',
        role: 'Full Stack Developer',
        techStack: 'React, Next.js, Node.js, Express, MongoDB, Tailwind CSS, REST APIs',
        workflowTools: 'VS Code, Codex, Antigravity, GitHub Copilot',
        status: 'Under Active Dev',
        statusPing: true,
        image: '/images/mobile_erp_mockup.png',
        overview: 'engineered as a robust web application for a franchise owner managing a vast network of mobile shop outlets across india. the portal delivers a unified management pipeline—combining centralized stock metrics, remote store controls, automatic client ticket credentials, secure tracking, and database slip analytics.',
        confidentialText: 'This software is under active development. Due to confidentiality agreements and security constraints, no public preview link or repository code access is available.',
        features: [
            {
                title: "Centralized Stock tracking",
                desc: "owner portal allows real-time visibility into consolidated items. individual outlets can authenticate and add stocks independently, displaying instant dashboard reflections."
            },
            {
                title: "Automated Ticket Credentials",
                desc: "when a customer logs a phone repair request, the system auto-generates secure client login credentials (username and password) to prevent user-overhead."
            },
            {
                title: "Isolated Client Tracking",
                desc: "using strict authorization checks, customers log in to track their specific phone repair update timeline, completely isolating other corporate data."
            },
            {
                title: "Payment Slip Generator",
                desc: "completed repairs produce a download-ready billing slip with a unique slip code, immediately synchronized and stored in the database."
            },
            {
                title: "Slip Search & Filter",
                desc: "outlet managers and owners can filter database slips (daily, weekly, monthly views) or perform global queries via specific unique slip numbers."
            },
            {
                title: "Franchise Outlet Manager",
                desc: "owner dashboards include options to register new outlets, update store settings, and change branch login details with secure backend hashes."
            }
        ],
        dbText: 'built with a normalized database schema in MongoDB to prevent records duplication. outlets, repairs, customers, and slips are structured into isolated collections bound by strict validation pipelines. a dedicated REST API layer handles data transmission, ensuring that authentication is verified on every request. customer-facing pages load lightweight, single-record queries based on active session tokens, safeguarding administrative stock metrics and slip reports from general client view.',
        devWorkflow: 'this application is actively developed under a fast-paced vibe coding process combined with rigorous manual styling. AI code-agents like Antigravity, Codex, and GitHub Copilot are used inside VS Code to scaffold controllers, schema pipelines, and mock interfaces. manual code refinement focuses on optimizing query processing, security tokens, slip downloading libraries, and responsive mobile-first UI grids.'
    },
    'hrms': {
        title: 'Confidential HRMS Portal',
        subtitle: 'Internal Enterprise Resource Planner & HR Hub',
        metaTitle: 'Confidential HRMS Portal — Projects / Ahamed Ansil P A',
        metaDesc: 'Detailed showcase of the confidential company-wide HRMS built for an enterprise client using Next.js, MERN stack, manual design, and vibe coding.',
        category: 'Enterprise Portal',
        scope: 'Company-Wide',
        role: 'Full Stack Developer',
        techStack: 'React, Next.js, Node.js, Express, MongoDB, Tailwind CSS, GSAP, Lenis',
        workflowTools: 'VS Code, Codex, Antigravity, GitHub Copilot',
        status: 'Active in Production',
        statusPing: true,
        image: '/images/hrms_mockup.png',
        overview: 'The HRMS portal was designed, architected, and fully implemented by me from scratch. The execution model relied on a tight iteration loop combining manual coding and vibe coding workflows.',
        confidentialText: 'This software is a private internal portal deployed for the employees of our client company. Due to confidentiality agreements and security constraints, no public preview link or repository code access is available.',
        features: [
            {
                title: "Check-in & Checkout",
                desc: "automated attendance logging system utilizing secure geofencing and network IP constraints to ensure remote work validation."
            },
            {
                title: "Timesheet Management",
                desc: "collaborative timesheet logger enabling daily workload reporting, dynamic logs, and one-click manager approval pipelines."
            },
            {
                title: "Leave Management",
                desc: "unified request center for annual, sick, or casual leaves with balance tracking, request timelines, and automatic calendar syncing."
            },
            {
                title: "Flexible Work Schedule",
                desc: "cohesive scheduling tool supporting Work-from-Home (WFH) and Work-from-Office (WFO) application and confirmation routines."
            },
            {
                title: "Payroll Calculator",
                desc: "integrated calculation layer estimating base salaries, professional deductions, tax structures, and producing dynamic monthly slips."
            }
        ],
        dbText: 'built with a MERN stack (MongoDB, Express, React, Node.js) with dynamic collections. security and data integrity are handled at the controller layer. a dedicated REST API layer handles data transmission, ensuring that authentication is verified on every request.',
        devWorkflow: 'The HRMS portal was designed, architected, and fully implemented by me from scratch. The execution model relied on a tight iteration loop combining manual coding and vibe coding workflows. Leveraging modern workspace engines including Codex, Antigravity, and GitHub Copilot, I optimized scaffolding, utility generation, and styling routines within VS Code. While automated agents accelerated database schemas and state controllers, I manually refined the UX layout, micro-interactions, and security policies to maintain absolute design precision.'
    }
}

export async function generateMetadata({ params }) {
    const slug = (await params).slug
    const project = PROJECT_DETAILS[slug]
    if (!project) return {}
    return {
        title: project.metaTitle,
        description: project.metaDesc
    }
}

export async function generateStaticParams() {
    return [
        { slug: 'mobile-erp' },
        { slug: 'hrms' }
    ]
}

export default async function ProjectSlugPage({ params }) {
    const slug = (await params).slug
    const project = PROJECT_DETAILS[slug]

    if (!project) {
        notFound()
    }

    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-white relative pt-36 pb-32">
            {/* Grid lines background */}
            <div className="absolute inset-y-0 left-0 right-0 pointer-events-none z-0">
                <GridLines columns={4} borderColor="rgba(255, 255, 255, 0.05)" />
            </div>

            {/* Corner accent bracket */}
            <div className="absolute top-36 right-0 pointer-events-none z-10 flex flex-col items-end pr-8 gap-1 select-none">
                <div className="w-16 h-px bg-[#ff4b36] opacity-60" />
                <div className="w-px h-16 bg-[#ff4b36] opacity-60 self-end" />
            </div>

            {/* Main Content Layout */}
            <div className="relative z-10 container-padding-x w-full grid grid-cols-4 gap-8 md:gap-12">
                
                {/* Left Column: Project Metadata Card (Spans 1 Column) */}
                <div className="col-span-4 md:col-span-1 flex flex-col gap-8 md:sticky md:top-36 self-start select-none">
                    {/* Breadcrumbs */}
                    <Breadcrumb path={[{ label: 'Projects', href: '/projects' }, { label: project.title }]} className="mb-4" />
                    <div className="flex flex-col gap-2">
                        <span className="text-[8px] font-mono text-[#ff4b36] uppercase tracking-widest">/ Project Category</span>
                        <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-white">{project.category}</h4>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="text-[8px] font-mono text-[#ff4b36] uppercase tracking-widest">/ Scope</span>
                        <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-white">{project.scope}</h4>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="text-[8px] font-mono text-[#ff4b36] uppercase tracking-widest">/ Role</span>
                        <h4 className="text-[11px] font-extrabold uppercase tracking-widest text-white">{project.role}</h4>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="text-[8px] font-mono text-[#ff4b36] uppercase tracking-widest">/ Tech Stack</span>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-white/60 leading-relaxed">
                            {project.techStack}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="text-[8px] font-mono text-[#ff4b36] uppercase tracking-widest">/ Workflow Tools</span>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-white/60 leading-relaxed">
                            {project.workflowTools}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 border-t border-white/10 pt-6">
                        <span className="text-[8px] font-mono text-white/30 uppercase tracking-widest">Development Stage</span>
                        <div className="flex items-center gap-2">
                            {project.statusPing && <span className="w-1.5 h-1.5 bg-[#ff4b36] rounded-full animate-pulse" />}
                            <span className="text-[9px] font-bold uppercase tracking-widest text-white">{project.status}</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Case Study Details (Spans 3 Columns) */}
                <div className="col-span-4 md:col-span-3 flex flex-col gap-12 pt-2">
                    
                    {/* Title Header */}
                    <div className="flex flex-col gap-4">
                        <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                            {project.title}
                        </h1>
                        <p className="text-xs md:text-sm font-extrabold text-[#ff4b36] uppercase tracking-widest font-mono">
                            {project.subtitle}
                        </p>
                    </div>

                    {/* Divider line */}
                    <div className="w-full h-px bg-white/10" />

                    {/* Macbook Showcase Mockup */}
                    <div className="w-full border border-white/10 p-2 bg-[#121212] relative group overflow-hidden">
                        {/* Red Accent Top Border */}
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-[#ff4b36]" />
                        <img 
                            src={project.image} 
                            alt={`${project.title} Macbook Mockup`} 
                            className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                        />
                    </div>

                    {/* Project Overview */}
                    <div className="flex flex-col gap-6">
                        <h2 className="text-[11px] font-black uppercase tracking-widest text-white flex items-center gap-2 select-none">
                            <span className="w-1.5 h-1.5 bg-[#ff4b36]" />
                            Project Overview
                        </h2>
                        <p className="text-[10px] text-white/60 lowercase leading-relaxed font-medium">
                            {project.overview}
                        </p>
                    </div>

                    {/* Confidential Project Banner */}
                    <div className="w-full border border-[#ff4b36]/30 bg-[#ff4b36]/5 p-6 flex flex-col gap-2 select-none">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#ff4b36] flex items-center gap-2">
                            ⚠️ Confidential Enterprise System
                        </span>
                        <p className="text-[10px] text-white/70 lowercase leading-relaxed">
                            {project.confidentialText}
                        </p>
                    </div>

                    {/* Key System Features */}
                    <div className="flex flex-col gap-8">
                        <h2 className="text-[11px] font-black uppercase tracking-widest text-white flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#ff4b36]" />
                            System Features
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.features.map((feat, idx) => (
                                <div key={idx} className="border-l-2 border-[#ff4b36] pl-4 py-1.5 flex flex-col gap-2">
                                    <h4 className="text-xs font-black uppercase tracking-wider text-white">{feat.title}</h4>
                                    <p className="text-[10px] text-white/50 lowercase leading-relaxed font-medium">{feat.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* DB & Schema Pipeline */}
                    <div className="flex flex-col gap-6 border-t border-white/10 pt-10">
                        <h2 className="text-[11px] font-black uppercase tracking-widest text-white flex items-center gap-2 select-none">
                            <span className="w-1.5 h-1.5 bg-[#ff4b36]" />
                            Database & API Architecture
                        </h2>
                        
                        <div className="flex flex-col gap-4 text-[10px] text-white/60 leading-relaxed lowercase font-medium">
                            <p>{project.dbText}</p>
                        </div>
                    </div>

                    {/* Development & Vibe Coding Workflow */}
                    <div className="flex flex-col gap-6 border-t border-white/10 pt-10">
                        <h2 className="text-[11px] font-black uppercase tracking-widest text-white flex items-center gap-2 select-none">
                            <span className="w-1.5 h-1.5 bg-[#ff4b36]" />
                            Development Workflow
                        </h2>
                        
                        <div className="flex flex-col gap-4 text-[10px] text-white/60 leading-relaxed lowercase font-medium">
                            <p>{project.devWorkflow}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
