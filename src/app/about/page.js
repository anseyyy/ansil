import React from 'react'
import AboutHero from '@/app/about/components/AboutHero'
import AboutSkills from '@/app/about/components/AboutSkills'
import AboutTimeline from '@/app/about/components/AboutTimeline'
import AboutValues from '@/app/about/components/AboutValues'

export const metadata = {
    title: 'About — Ahamed Ansil P A',
    description: 'Full Stack Developer based in Kerala, India. Building fast, scalable, and purposeful web applications and software.',
}

export default function AboutPage() {
    return (
        <main className="w-full bg-[#0a0a0a] text-white overflow-x-hidden">
            <AboutHero />
            <AboutValues />
            <AboutSkills />
            <AboutTimeline />
        </main>
    )
}