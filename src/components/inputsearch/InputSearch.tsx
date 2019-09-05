import * as React from 'react';
import { InputText, InputTextProps } from '../inputtext/InputText';
import { Button as BpButton } from '@blueprintjs/core';

export class InputSearch extends React.Component<InputTextProps,{}>{
 constructor(props: InputTextProps){
    super(props);
    this.state = {};
 }

 public render() {
    return <InputText
        {...this.props}
        className={`rt-inputtext ${this.props.className}`}
        type={'search'}
        rightElement={
            <BpButton icon={ 'search' } 
           
            />
        }
    />;
}
}