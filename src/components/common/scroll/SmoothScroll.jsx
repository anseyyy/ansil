"use client";
import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin for GSAP
gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }) {
    useEffect(() => {
        // Instantiate Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // cubic-bezier-like smooth easing
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1.5,
            infinite: false,
        });

        // Expose globally for header menu/modal overlays to toggle scrolling
        if (typeof window !== 'undefined') {
            window.lenis = lenis;
        }

        // Sync ScrollTrigger updates with Lenis scroll events
        lenis.on('scroll', ScrollTrigger.update);

        // Tell GSAP ticker to use Lenis requestAnimationFrame (raf) loop
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        // Set lag smoothing to 0 to align animations precisely with scroll
        gsap.ticker.lagSmoothing(0);

        // Cleanup on component unmount
        return () => {
            lenis.destroy();
            gsap.ticker.remove(lenis.raf);
            if (typeof window !== 'undefined' && window.lenis === lenis) {
                window.lenis = undefined;
            }
        };
    }, []);

    return <>{children}</>;
}
