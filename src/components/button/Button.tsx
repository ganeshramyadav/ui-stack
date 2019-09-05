import * as React from 'react';
import { Button } from "@blueprintjs/core";
import { IActionProps, IProps,  IIntentProps, Alignment } from "@blueprintjs/core";

export interface ButtonProps{
    active?:boolean;
    alignText?:Alignment;
    className?:string;
    disabled?:boolean;
    elementRef?:any;
    fill?:boolean;
    icon?:IActionProps;
    intent?:IIntentProps;
    large?:boolean;
    loading?:boolean;
    minimal?:boolean;
    onClick?:IActionProps;
    small?:boolean;
    text?:React.ReactNode;
    type?:"submit" | "reset" | "button";
} 

export const Buttons : React.SFC<ButtonProps> = (props) => {
    return <Button  {...props} />;
} 

/* export class Buttons extends React.Component<Buttonprops, {}>{
    public render() {
        return <Button {...this.props} value={this.props.valueS} />
    }
} */