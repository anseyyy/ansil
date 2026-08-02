import React from 'react'

/**
 * VerticalLine Component
 * Renders a single vertical line with customizable color and classes.
 * 
 * Props:
 * - color: string (default rgba(255,255,255,0.2))
 * - className: string (additional tailwind classes e.g. h-32, absolute, etc.)
 */
function VerticalLine({
    color = 'rgba(255, 255, 255, 0.2)',
    className = '',
    style = {},
    ...props
}) {
    return (
        <div
            className={`w-[1px] h-full ${className}`}
            style={{
                backgroundColor: color,
                ...style
            }}
            {...props}
        />
    )
}

export default VerticalLine
