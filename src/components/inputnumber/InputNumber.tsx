import * as React from 'react';
import { IconName, NumericInput, Position } from "@blueprintjs/core";

export interface InputNumberprops {
    allowNumericCharactersOnly?: boolean;
    buttonPosition?: Position;
    clampValueOnBlur?:boolean;
    className?:string;
    disabled?:boolean;
    intent?:  "none" | "primary" | "success" | "warning" | "danger";
    large?:boolean;
    leftIconName?:IconName;
    majorStepSize?:number;
    max?:number;
    min?:number;
    minorStepSize?:number;
    onButtonClick?:any;
    onValueChange?:any;
    placeholder?:string;
    selectAllOnFocus?:boolean;
    selectAllOnIncrement?:boolean;
    stepSize?:number;
    valueS?:string | number; 


}


export class InputNumber extends React.Component<InputNumberprops, {}>{

    public render() {
        return <NumericInput {...this.props} value={this.props.valueS} />
        
    }
}