"use client";
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import GridLines from '../grid/GridLines'

const SERVICES = [
    {
        id: 'website-building',
        title: 'Website Building',
        template: "Hi Ansil, I'm interested in building a website. Let's discuss details!"
    },
    {
        id: 'web-software',
        title: 'Web Software Building',
        template: "Hi Ansil, I need custom web software built. Let's discuss requirements!"
    },
    {
        id: 'portfolios',
        title: 'Portfolios',
        template: "Hi Ansil, I want to create a stunning portfolio website. Let's connect!"
    },
    {
        id: 'small-ecommerce',
        title: 'Low-Price E-Commerce',
        template: "Hi Ansil, I'd like to build a low-price small e-commerce website with WhatsApp checkout. Let's discuss details!"
    },
    {
        id: 'normal-ecommerce',
        title: 'Normal E-Commerce',
        template: "Hi Ansil, I want to build a full-featured e-commerce platform. Let's chat!"
    }
]

export default function Footer() {
    const pathname = usePathname()
    const [selectedService, setSelectedService] = useState('website-building')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: SERVICES[0].template
    })

    if (pathname === '/resume') {
        return null
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleServiceSelect = (serviceId) => {
        setSelectedService(serviceId)
        const template = SERVICES.find(s => s.id === serviceId)?.template || ''
        setFormData(prev => ({
            ...prev,
            message: template
        }))
    }

    const handleDropdownChange = (e) => {
        const serviceId = e.target.value
        setSelectedService(serviceId)
        const template = SERVICES.find(s => s.id === serviceId)?.template || ''
        setFormData(prev => ({
            ...prev,
            message: template
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const serviceLabel = SERVICES.find(s => s.id === selectedService)?.title || selectedService
        const text = `Hi Ansil,\n\nI'm *${formData.name}* (${formData.email}).\nI'm interested in *${serviceLabel}*.\n\n*Message:* ${formData.message}`
        const encodedText = encodeURIComponent(text)
        const whatsappUrl = `https://wa.me/918589957733?text=${encodedText}`
        window.open(whatsappUrl, '_blank')
    }

    return (
        <footer id="contact" className="w-full bg-[#0a0a0a] border-t border-white/10 pt-24 pb-20 relative text-white">
            {/* Grid lines background spanning the entire footer container height */}
            <div className="absolute inset-y-0 left-0 right-0 pointer-events-none z-0">
                <GridLines columns={4} borderColor="rgba(255, 255, 255, 0.05)" />
            </div>

            <div className="relative z-10 container-padding-x">
                <div 
                    className="w-full grid items-start"
                    style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))' }}
                >
                    
                    {/* Left Column: Sticky Profile Card (Spans 1 Column on desktop) */}
                    <div className="col-span-4 md:col-span-1  md:sticky md:top-32 self-start">
                        <div className="flex flex-col bg-[#121212] border border-white/10 overflow-hidden shadow-2xl">
                            {/* Thin Red Border Top of Card */}
                            <div className="w-full h-1 bg-[#ff4b36]" />
                            
                            {/* Profile Photo */}
                            <div className="w-full  overflow-hidden bg-black relative">
                                <img 
                                    src="/images/ansilheaderimage.png" 
                                    alt="Ahamed Ansil P A" 
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>

                            {/* Card Details */}
                            <div className="p-5 flex flex-col gap-5">
                                {/* Profile Header (Name & Socials) */}
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xs font-black uppercase tracking-widest text-white flex items-center gap-1.5 select-none">
                                        <span className="w-1.5 h-1.5 bg-[#ff4b36] inline-block" />
                                        Ahamed Ansil
                                    </h3>
                                    {/* Social Links */}
                                    <div className="flex items-center gap-2">
                                        {/* GitHub */}
                                        <a href="https://github.com/anseyyy" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label="GitHub">
                                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                            </svg>
                                        </a>
                                        {/* LinkedIn */}
                                        <a href="https://linkedin.com/in/ahamedansil" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors" aria-label="LinkedIn">
                                            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </a>
                                        {/* Email */}
                                        <a href="mailto:ahamedansilpa@gmail.com" className="text-white/40 hover:text-white transition-colors" aria-label="Email">
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                {/* Divider Line */}
                                <div className="w-full h-[1px] bg-white/10" />

                                {/* Metadata Details */}
                                <div className="flex flex-col gap-2.5 text-[9px] font-mono select-none">
                                    <div className="flex justify-between items-center">
                                        <span className="text-white/40 uppercase">Profession</span>
                                        <span className="text-white font-bold uppercase text-[8.5px]">Full Stack Dev</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-white/40 uppercase">Location</span>
                                        <span className="text-white font-bold uppercase text-[8.5px]">Kerala, India</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Spacer Column (Spans 1 Column on desktop to match layout padding) */}
                    <div className="hidden md:block col-span-1 px-4" />

                    {/* Right Column: Contact Details & Form (Spans 2 Columns on desktop) */}
                    <div className="col-span-4 md:col-span-2  flex flex-col gap-12 pt-4">
                        {/* Section Header */}
                        <div className="flex flex-col gap-5">
                            <span className="text-[10px] font-bold tracking-widest text-[#ff4b36] uppercase flex items-center gap-2 select-none">
                                <span className="w-1.5 h-1.5 bg-[#ff4b36]" />
                                Contact
                            </span>
                            
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none select-none">
                                <span className="text-white/40 block">Create Your</span>
                                <span className="text-white block mt-1">Next Website With Me.</span>
                            </h2>
                        </div>

                        {/* Bio Row */}
                        <div className="w-full border-t border-b border-white/10 py-8 select-none">
                            <p className="text-[10px] md:text-xs font-bold tracking-widest text-white/60 uppercase leading-relaxed max-w-lg">
                                From first concept to final build, I create websites with <span className="text-white">clear structure & smooth interactions</span>.
                            </p>
                        </div>

                        {/* Small Service Cards */}
                        <div className="flex flex-col gap-3">
                            <span className="text-[9px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-1.5 select-none">
                                <span className="w-1.5 h-1.5 bg-[#ff4b36]" />
                                Service Required (Click to auto-fill)
                            </span>
                            <div className="flex flex-wrap gap-2.5">
                                {SERVICES.map((service) => {
                                    const isSelected = selectedService === service.id
                                    return (
                                        <button
                                            key={service.id}
                                            type="button"
                                            onClick={() => handleServiceSelect(service.id)}
                                            className={`text-[8.5px] font-extrabold uppercase tracking-widest py-2 px-3.5 border transition-all duration-300 cursor-pointer ${
                                                isSelected 
                                                    ? 'bg-[#ff4b36] border-[#ff4b36] text-white shadow-lg' 
                                                    : 'bg-[#121212] border-white/10 text-white/60 hover:border-white/20 hover:text-white'
                                            }`}
                                        >
                                            {service.title}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Interactive Form Section */}
                        <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-8">
                            {/* Name Input */}
                            <div className="flex flex-col gap-2.5">
                                <label className="text-[9px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-1.5 select-none">
                                    <span className="w-1.5 h-1.5 bg-[#ff4b36]" />
                                    Your Name
                                </label>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Jane Smith" 
                                    required
                                    className=" w-full bg-transparent border-b border-white/10 py-3 text-sm font-semibold tracking-wider text-white placeholder-white/20 focus:outline-none focus:border-b-[#ff4b36] transition-colors"
                                />
                            </div>

                            {/* Email Input */}
                            <div className="flex flex-col gap-2.5">
                                <label className="text-[9px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-1.5 select-none">
                                    <span className="w-1.5 h-1.5 bg-[#ff4b36]" />
                                    Email Address
                                </label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="jane@framer.com" 
                                    required
                                    className="w-full bg-transparent border-b border-white/10 py-3 text-sm font-semibold tracking-wider text-white placeholder-white/20 focus:outline-none focus:border-b-[#ff4b36] transition-colors"
                                />
                            </div>

                            {/* Selected Category Selector */}
                            <div className="flex flex-col gap-2.5">
                                <label className="text-[9px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-1.5 select-none">
                                    <span className="w-1.5 h-1.5 bg-[#ff4b36]" />
                                    Selected Category
                                </label>
                                <select 
                                    value={selectedService}
                                    onChange={handleDropdownChange}
                                    className="w-full bg-[#121212] border border-white/10 p-3 text-xs font-bold uppercase tracking-wider text-white focus:outline-none focus:border-[#ff4b36] transition-colors cursor-pointer"
                                >
                                    {SERVICES.map((s) => (
                                        <option key={s.id} value={s.id}>
                                            {s.title}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Message Input */}
                            <div className="flex flex-col gap-2.5">
                                <label className="text-[9px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-1.5 select-none">
                                    <span className="w-1.5 h-1.5 bg-[#ff4b36]" />
                                    Your Message / Requirements
                                </label>
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project..." 
                                    required
                                    rows={4}
                                    className="w-full bg-transparent border-b border-white/10 py-3 text-sm font-semibold tracking-wider text-white placeholder-white/20 focus:outline-none focus:border-b-[#ff4b36] transition-colors resize-none"
                                />
                            </div>

                            {/* Form Submit Row */}
                            <div className="flex justify-end pt-4">
                                <button 
                                    type="submit" 
                                    className="flex items-center gap-3 bg-black border border-white/10 hover:border-white/30 text-white font-extrabold text-[10px] uppercase tracking-widest py-4 px-8 cursor-pointer hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    Submit on WhatsApp
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>

                </div>

                {/* Main Bottom Copyright Footer */}
                <div className="w-full border-t border-white/10 pt-8 mt-24 flex justify-between text-[9px] uppercase tracking-widest text-white/30 font-mono select-none">
                    <span>© 2026 / Ansil.dev</span>
                    <span>Designed & Developed with Care</span>
                </div>
            </div>
        </footer>
    )
}
