import React from 'react'

/**
 * GridLines Component
 * Renders absolute-positioned vertical grid lines matching the site layout.
 * 
 * Props:
 * - columns: number (default 4)
 * - borderColor: string (default rgba(255,255,255,0.2))
 * - className: string (for additional styling or positioning)
 */
function GridLines({
    columns = 4,
    borderColor = 'rgba(255, 255, 255, 0.2)',
    className = '',
}) {
    return (
        <div className={`absolute inset-y-0 left-0 right-0 pointer-events-none z-0 container-padding-x ${className}`}>
            <div 
                className="w-full h-full grid" 
                style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
            >
                {Array.from({ length: columns }).map((_, idx) => {
                    const isFirst = idx === 0
                    return (
                        <div
                            key={idx}
                            style={{
                                borderRight: `1px solid ${borderColor}`,
                                borderLeft: isFirst ? `1px solid ${borderColor}` : 'none',
                                height: '100%',
                            }}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default GridLines
