import React from 'react'
import Link from 'next/link'

/**
 * Reusable Breadcrumb component matching the portfolio design language
 * Props:
 * - path: Array of objects [{ label: 'Home', href: '/' }, { label: 'Resume' }]
 * - className: additional wrapping classes
 */
export default function Breadcrumb({ path = [], className = '' }) {
    return (
        <nav className={`flex items-center gap-2.5 select-none ${className}`} aria-label="Breadcrumb">
            {/* Design theme dot indicator */}
            <span className="w-1.5 h-1.5 bg-[#ff4b36] rounded-full inline-block" />
            
            <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest leading-none">
                {path.map((item, idx) => {
                    const isLast = idx === path.length - 1
                    
                    return (
                        <React.Fragment key={idx}>
                            {idx > 0 && (
                                <span className="text-white/20 mx-1">/</span>
                            )}
                            
                            {isLast ? (
                                <span className="text-white">
                                    {item.label}
                                </span>
                            ) : (
                                <Link 
                                    href={item.href || '/'} 
                                    className="text-white/40 hover:text-[#ff4b36] transition-colors"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </React.Fragment>
                    )
                })}
            </div>
        </nav>
    )
}
