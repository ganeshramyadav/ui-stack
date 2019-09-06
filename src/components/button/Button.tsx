import * as React from 'react';
import { Button as BpButton } from "@blueprintjs/core";
import { IActionProps, IIntentProps, Alignment } from "@blueprintjs/core";

export interface ButtonProps {
    active?: boolean;
    alignText?: Alignment;
    className?: string;
    disabled?: boolean;
    elementRef?: any;
    fill?: boolean;
    icon?: IActionProps;
    intent?: IIntentProps;
    large?: boolean;
    loading?: boolean;
    minimal?: boolean;
    onClick?: (event?:any) => any;
    small?: boolean;
    text?: React.ReactNode;
    type?: "submit" | "reset" | "button";
}

export const Button: React.SFC<ButtonProps> = (props) => {
    return <BpButton  {...props} />;
}