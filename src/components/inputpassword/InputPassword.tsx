import * as React from 'react';
import { InputText, InputTextProps } from '../inputtext/InputText';
import { Button as BpButton } from '@blueprintjs/core';

export interface InputPasswordState {
    show?: boolean;
}


export class InputPassword extends React.Component<InputTextProps, InputPasswordState>{


    /**
     *
     */
    constructor(props: InputTextProps) {
        super(props);
        this.state = { show: false };
    }



    public render() {
        return <InputText
            {...this.props}
            className={`rt-inputtext ${this.props.className}`}
            type={this.state.show ? 'text' : 'password'}
            rightElement={
                <BpButton icon={this.state.show ? 'unlock' : 'lock' } 
                onClick={() => {
                    this.setState({ show : !this.state.show  })
                }  }
                />
            }
        />;
    }




}




