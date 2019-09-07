import * as React from 'react';
import { Radio as BpRadio, RadioGroup as BPRadioGroup, IControlProps, Alignment } from '@blueprintjs/core';



export interface InputRadioProps {
    key?: string;
    value?: string;
    label?: string;
    labelPosition?: string;
    onChange?: (value: any) => any;
    checked?: boolean;
    disabled?: boolean;
    className?: string;
    selectedValue?:string|number;

    alignIndicator?:Alignment;
    children?:React.ReactNode;
    defaultChecked?:boolean;
    inline?:boolean;
    inputRef?:(ref: HTMLInputElement | null) => any;
    labelElement?:React.ReactNode;
    large?:boolean;
    tagName?:IControlProps;

    inline?:boolean;
    name?:string;
    options?: any;
}

const generateRadioButton = (props: InputRadioProps) => {
    return props.options && props.options.map(x => {
        return <BpRadio label={x.label} value={x.value} />
    });
}

export const InputRadio: React.SFC<InputRadioProps> = (props) => {
    return (
        <BPRadioGroup   {...props} selectedValue={props.value} >
                {generateRadioButton(props)}
        </BPRadioGroup>
    );
};
