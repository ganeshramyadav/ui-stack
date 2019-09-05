import * as React from 'react';
import { InputPassword } from '../components';
import {InputTextShowcaseState} from './InputTextShowcase';

export class InputPasswordShowcase extends React.Component<{}, InputTextShowcaseState>{
  
    public render(){
        return (
            <div>
            <h4>  Input Password </h4>
            <InputPassword />
            </div>
        );
    }
}