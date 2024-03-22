import React from 'react';
interface GridProps {
    children?: React.ReactNode;
    container?: boolean;
    direction?: 'row' | 'col';
    spacing?: number;
    columns?: {
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
    } | number;
    span?: number;
    start?: number;
}
declare const Grid: ({ children, container, spacing, columns, direction, span, start }: GridProps) => React.JSX.Element;
export default Grid;
