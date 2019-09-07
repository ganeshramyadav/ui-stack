import * as React from 'react';
import {Checkbox as BpCheckbox} from '@blueprintjs/core';
import {Alignment, IControlProps} from '@blueprintjs/core';

export interface CheckBoxProps{
    alignIndicator?:Alignment;
    checked?:boolean;
    children?:React.ReactNode;
    className?:string;
    defaultChecked?:boolean;
    defaultIndeterminate?:boolean;
    disabled?:boolean;
    indeterminate?:boolean;
    inline?:boolean;
    inputRef?:IControlProps;
    ref?:(event?:any) => any;
    // inputRef?:(event?:any) => any;
    // inputRef?:(event?:any) => any;
    label?:string;
    labelElement?:React.ReactNode;
    large?:boolean;
    onChange?:(event?:any) => any;
    tagName?:IControlProps;
}

export const CheckBox: React.SFC<CheckBoxProps>=(props)=>{
    return <BpCheckbox {...props}/>;
}