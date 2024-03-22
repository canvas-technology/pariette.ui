/* eslint-disable @typescript-eslint/strict-boolean-expressions */
'use client'
import React from 'react'

interface GridProps {
  children?: React.ReactNode
  //container
  container?: boolean
  direction?: 'row' | 'col'
  spacing?: number
  columns?: { xs?: number; sm?: number; md?: number; lg?: number; xl?: number } | number
  //items
  span?: number
  start?: number
  // end?: number;
}

const Grid = ({ children, container, spacing = 2, columns = 2, direction = 'col', span, start }: GridProps) => {
  const director = () => {
    if (typeof columns === 'number') {
      //tekli column belirleme
      const column = `grid-${direction}s-${columns}`
      const req = direction === 'row' ? ' grid-flow-col' : ''
      return column + req
    } else if (typeof columns === 'object') {
      //array mapleyerek breakpointleri ekleme
      const prefix = `grid-${direction}s`
      const variants = Object.keys(columns).map((key) => {
        return `${key}:${prefix}-${columns[key as keyof typeof columns]}`
      })
      const req = direction === 'row' ? ' grid-flow-col' : ''
      return prefix + '-1 ' + variants.join(' ') + req
    } else {
      return ''
    }
  }

  const spanner = () => {
    //itemlerde boyutlandırma
    if (span) {
      const spanVariants: { [key: number]: string } = {
        [span]: `${direction}-span-${span}`,
      }
      return spanVariants[span]
    } else {
      return ''
    }
  }

  const startPointer = () => {
    //itemlerde başlangıç noktası
    if (start) {
      const startP = `${direction}-start-${start}`
      return startP
    } else {
      return ''
    }
  }

  return container ? (
    <div className={`grid ${director()} w-full gap-${spacing * 2}`}>{children}</div>
  ) : (
    <div className={`${spanner()} ${startPointer()}`}>{children}</div>
  )
}

export default Grid
