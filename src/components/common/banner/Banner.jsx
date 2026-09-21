import React from 'react'
import GridLines from '../grid/GridLines'

/**
 * Reusable Banner component
 * Props:
 * - bgImage: string (path to background image in /public)
 * - bgVideo: string (path to background video in /public)
 * - bgVideoMobile: string (optional mobile-only video path in /public)
 * - className: additional container classes
 * - children: up to 4 child nodes which will be placed into 4 grid sections
 *
 * Usage:
 * <Banner bgImage="/images/hero.jpg">
 *   <div>Left column content</div>
 *   <div>Column 2</div>
 *   <div>Column 3</div>
 *   <div>Column 4</div>
 * </Banner>
 */
function Banner({
    bgImage,
    bgVideo,
    bgVideoMobile,
    children,
    className = '',
    style,
    fullHeight = false,
    height = null,
    columnWidths = null, // e.g. ['30%', '30%', '20%', '20%'] or null for equal
    borderColor = 'rgba(255,255,255,0.2)',
    sectionOffsets = [], // optional per-section offsets { paddingTop: '10%' }
    bottomSlot,
}) {
    const childArray = React.Children.toArray(children).slice(0, 4)

    const minHeight = fullHeight ? '100vh' : height || null

    // build grid-template-columns string with minmax(0, 1fr) for equal column widths
    const template = Array.isArray(columnWidths)
        ? columnWidths.join(' ')
        : 'repeat(4, minmax(0, 1fr))'

    return (
        <section
            className={`relative w-full overflow-hidden site-banner container-padding-x ${className}`}
            style={{ ...(minHeight ? { minHeight, height: minHeight } : {}), boxSizing: 'border-box', ...style }}
        >
            {/* Background image */}
            {bgImage && (
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${bgImage})` }}
                    aria-hidden="true"
                />
            )}

            {/* Background video (falls back to image if provided) */}
            {bgVideo && (
                <video
                    className={`banner-media ${bgVideoMobile ? 'hidden md:block' : ''}`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-hidden="true"
                >
                    <source src={bgVideo} type="video/mp4" />
                    {/* Fallback text for very old browsers */}
                    Your browser does not support the video tag.
                </video>
            )}

            {bgVideoMobile && (
                <video
                    className="banner-media block md:hidden"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    aria-hidden="true"
                >
                    <source src={bgVideoMobile} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}

            {/* Optional subtle overlay to make text/readability easier */}
            <div className="absolute inset-0 bg-black/10" aria-hidden="true" />

            {/* Reusable GridLines component overlay */}
            <GridLines className='hidden sm:block' columns={4} borderColor={borderColor} />

            {/* Content container (inside the image/video) */}
            <div className="relative z-10 h-full">
                <div
                    className="w-full h-full grid"
                    style={{ gridTemplateColumns: template }}
                >
                    {Array.from({ length: 4 }).map((_, idx) => {
                        const child = childArray[idx] ?? null
                        const isFirst = idx === 0
                        const isLast = idx === 3

                        const offset = sectionOffsets[idx] || {}

                        const contentWrapperStyle = {
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end', // Aligns child vertically to bottom
                            alignItems: 'stretch',
                            height: '100%',
                            paddingBottom: bottomSlot ? '5.5rem' : '3.5rem',
                            paddingTop: '2rem',
                            boxSizing: 'border-box',
                        }

                        return (
                            <div key={idx} className="px-4">
                                <div style={contentWrapperStyle}>
                                    {child}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Optional bottom slot anchored to the bottom of the banner */}
            {bottomSlot && (
                <div className="absolute left-0 right-0 bottom-0 container-padding-x z-20">
                    <div className="py-6">{bottomSlot}</div>
                </div>
            )}
        </section>
    )
}

export default Banner