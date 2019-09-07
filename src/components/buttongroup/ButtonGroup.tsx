import * as React from 'react';
import {ButtonGroup as BpButtonGroup, Alignment} from '@blueprintjs/core';
import {IProps} from '@blueprintjs/core';

export interface ButtonGroupProps{
    alignText?:Alignment;
    className?:IProps;
    // className?:string;
    fill?:boolean;
    large?:boolean;
    minimal?:boolean;
    vertical?:boolean;
}

export const ButtonGroup:React.SFC<ButtonGroupProps>=(props)=>{
    return <BpButtonGroup {...props}/>;
}