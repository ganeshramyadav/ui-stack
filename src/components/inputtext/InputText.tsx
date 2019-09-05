import * as React from 'react';
import { Intent, IconName } from "@blueprintjs/core";
import { InputGroup } from "@blueprintjs/core";
import './InputText.css';


export interface InputTextProps {
    className?: string;
    defaultValue?: string;
    disabled?: boolean;
    intent?: Intent;
    leftIconName?: IconName;
    onChange?: any;
    placeholder?: string;
    rightElement?: JSX.Element;
    type?: string;
    value?: string;
}

export const InputText : React.SFC<InputTextProps> = (props) => {
    return <InputGroup   {...props} className={`rt-inputtext ${props.className}`}  />;
} 

