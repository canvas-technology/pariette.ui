import React from 'react'
type Props = {
    width?: string,
    gap?: string
}

const Container = ({width= '100%', gap= '10px'}: Props) => {
    return (
        <div style={{
            width: width,
            gap: gap
        }}>
            x
        </div>
    )
}

export default Container