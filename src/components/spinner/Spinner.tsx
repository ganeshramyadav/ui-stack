import * as React from "react";
import {Spinner as BpSpinner, Intent} from '@blueprintjs/core';
import { SvgAttributes } from "csstype";

export interface SpinnerProps{
    className?:string;
    intent?:Intent;
    /* 
    *   Spinner.SIZE_STANDARD = 50
    *   Spinner.SIZE_SMALL = 20px
    *   Spinner.SIZE_STANDARD = 50px
    *   Spinner.SIZE_LARGE = 100px
    */
    
    size?:number;
    tagName?:keyof;
    // tagName?:SvgAttributes;
    value?:number;
}

export const Spinner: React.SFC<SpinnerProps> = (props)=>{
    return <BpSpinner {...props}/>
}