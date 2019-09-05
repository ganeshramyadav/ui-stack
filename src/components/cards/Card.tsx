import * as React from 'react';
import { Card as CardBP, Elevation } from '@blueprintjs/core';



export interface CardProps {
    className?: string;
    elevation?: Elevation;
    interactive?: boolean;
    onClick?: (value?: any) => any;
    children?: any;
}

export const Card: React.SFC<CardProps> = (props) => {
    return (
        <CardBP {...props} children={props.children} />
    );
}