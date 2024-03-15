import React from 'react'
type Props = {
    children?: never,
    width?: string,
    gap?: string
}

const Container = ({children, width= '100%', gap= '10px'}: Props) => {
    return (
        <div style={{
            width: width,
            gap: gap
        }}>
            {children}
        </div>
    )
}

export default Container