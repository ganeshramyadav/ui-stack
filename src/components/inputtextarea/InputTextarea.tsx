import * as React from 'react';

import { TextArea, Intent, IIntentProps, IProps } from "@blueprintjs/core";
import { BlockOverflowProperty } from 'csstype';

export interface InputTextareaProps{
    large?:boolean;
    intent?:Intent;
    onChange?:any;
    value?:string;
    disabled?:boolean;
    className?:string;
    ellipsize?:boolean;
    fill?:boolean;
    growVertically?:boolean;
    inputRef?:any;
    small?:boolean;
}

export class InputTextarea extends React.Component<InputTextareaProps,{}>{
    public render(){
       return <TextArea  {...this.props} />;
    }
}