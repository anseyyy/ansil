import React from 'react'
import GridLines from '@/components/common/grid/GridLines'
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb'

export default function ResumePage() {
    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-white relative overflow-x-hidden">
            {/* Grid lines background spanning the entire scrolling layout height */}
            <div className="absolute inset-y-0 left-0 right-0 pointer-events-none z-0">
                <GridLines columns={4} borderColor="rgba(255, 255, 255, 0.05)" />
            </div>

            {/* Main scrollable content container */}
            <div className="relative z-10 container-padding-x pt-36 pb-32">
                

                <div className="w-full grid grid-cols-4 gap-8 md:gap-12">
                    
                    {/* Column 1: Profile Photo, Name, and Contact */}
                    <div className="col-span-4 md:col-span-1 flex flex-col gap-6 select-none">
                        {/* Neat Profile Image */}
                        <div className="w-full aspect-square rounded-2xl overflow-hidden border border-white/10 bg-[#121212] shadow-2xl">
                            <img 
                                src="/images/ansilheaderimage.png" 
                                alt="Ahamed Ansil P A" 
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>

                        <div>
                            <h1 className="text-xl md:text-2xl font-black uppercase tracking-tighter text-white leading-tight">
                                Ahamed Ansil P A
                            </h1>
                            <p className="text-[#ff4b36] font-mono text-xs uppercase tracking-widest mt-2 font-bold">
                                Full Stack Developer
                            </p>
                        </div>
                        
                        <div className="flex flex-col gap-4 text-[10px] md:text-xs tracking-wider">
                            <div>
                                <h4 className="text-[9px] uppercase tracking-widest text-white/40 font-bold font-mono mb-1">Email</h4>
                                <a href="mailto:ahamedansilpa@gmail.com" className="text-white hover:text-[#ff4b36] transition-colors font-medium">
                                    ahamedansilpa@gmail.com
                                </a>
                            </div>
                            <div>
                                <h4 className="text-[9px] uppercase tracking-widest text-white/40 font-bold font-mono mb-1">Phone</h4>
                                <a href="tel:+918589957733" className="text-white hover:text-[#ff4b36] transition-colors font-medium">
                                    +91 85899 57733
                                </a>
                            </div>
                            <div>
                                <h4 className="text-[9px] uppercase tracking-widest text-white/40 font-bold font-mono mb-1">Location</h4>
                                <p className="text-white/80 font-medium">Malappuram, Kerala, India</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Technical Skills */}
                    <div className="col-span-4 md:col-span-1 flex flex-col gap-6 select-none">
                        <div>
                            <h4 className="text-[9px] uppercase tracking-widest text-white/40 font-bold font-mono mb-3">Technical Skills</h4>
                            <div className="flex flex-col gap-5 text-[10px] md:text-xs text-white/80 font-bold uppercase tracking-wider">
                                <div>
                                    <span className="text-[8px] text-[#ff4b36] font-mono block mb-1">/ Frontend</span>
                                    <p className="leading-relaxed">React.js, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap</p>
                                </div>
                                <div>
                                    <span className="text-[8px] text-[#ff4b36] font-mono block mb-1">/ Backend & DB</span>
                                    <p className="leading-relaxed">Node.js, Express.js, MongoDB, Mongoose, REST APIs, JWT Auth</p>
                                </div>
                                <div>
                                    <span className="text-[8px] text-[#ff4b36] font-mono block mb-1">/ Tools & Concepts</span>
                                    <p className="leading-relaxed">Git, GitHub, VS Code, Postman, MVC Architecture, Responsive Design, CRUD Operations</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Summary & Detailed Work Experience */}
                    <div className="col-span-4 md:col-span-1 flex flex-col gap-8">
                        {/* Summary */}
                        <div className="select-none">
                            <h4 className="text-[9px] uppercase tracking-widest text-white/40 font-bold font-mono mb-2">Summary</h4>
                            <p className="text-xs md:text-sm font-extrabold text-white uppercase tracking-wider leading-relaxed">
                                MERN Stack Developer with experience building scalable full-stack web applications. Strong foundation in RESTful API development, authentication, and responsive UI design.
                            </p>
                        </div>

                        {/* Work Experience */}
                        <div className="flex flex-col gap-6 select-none">
                            <h3 className="text-[9px] uppercase tracking-widest text-white/40 font-bold font-mono">Work Experience</h3>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <h4 className="text-xs font-black uppercase tracking-wider text-white">Full Stack Developer</h4>
                                    <p className="text-[9px] text-[#ff4b36] uppercase tracking-widest font-mono font-bold mt-0.5">Feb 2026 — Present / Phew Interactive</p>
                                    <ul className="text-[10px] text-white/60 lowercase font-medium tracking-wide mt-2.5 flex flex-col gap-1.5 list-disc pl-3">
                                        <li>built custom HRMS & OMS ERP applications used company-wide by all employees.</li>
                                        <li>learned and applied Next.js, React, and modern Tailwind CSS to construct high-performance frontends.</li>
                                        <li>implemented scroll animations and interactive user experiences using GSAP and Lenis.</li>
                                        <li>designed, developed, and deployed several responsive client websites and web platforms.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Education & Links */}
                    <div className="col-span-4 md:col-span-1 flex flex-col justify-between h-full gap-8 select-none">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-5">
                                <h3 className="text-[9px] uppercase tracking-widest text-white/40 font-bold font-mono">Education & Training</h3>
                                <div>
                                    <h4 className="text-xs font-black uppercase tracking-wider text-white">ICA College Thozhiyoor</h4>
                                    <p className="text-[9px] text-white/50 uppercase tracking-widest font-mono font-bold mt-1.5 leading-relaxed">
                                        Bachelor of Science in Computer Science<br />
                                        Calicut University / April 2025
                                    </p>
                                </div>
                                <div className="border-t border-white/5 pt-4">
                                    <h4 className="text-xs font-black uppercase tracking-wider text-white font-mono">Luminar Technolab</h4>
                                    <p className="text-[9px] text-[#ff4b36] uppercase tracking-widest font-mono font-bold mt-0.5">May 2025 — Nov 2025</p>
                                    <p className="text-[9px] text-white/50 uppercase tracking-widest font-mono font-bold leading-relaxed mt-1">
                                        MERN Stack Internship & Training
                                    </p>
                                    <ul className="text-[10px] text-white/60 lowercase font-medium tracking-wide mt-2 flex flex-col gap-1.5 list-disc pl-3">
                                        <li>learned components design with React.js, HTML, and CSS.</li>
                                        <li>built reusable React components to improve performance.</li>
                                        <li>assisted in building RESTful APIs with Node.js & Express.</li>
                                        <li>collaborated in agile cycles to hit project milestones.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/80 mt-12">
                            <a href="https://linkedin.com/in/ahamedansil" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff4b36] transition-colors">
                                / LinkedIn Profile
                            </a>
                            <a href="https://github.com/anseyyy" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff4b36] transition-colors">
                                / GitHub Repository
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
