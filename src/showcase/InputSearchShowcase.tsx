import * as React from 'react';
import { InputSearch } from '../components';
import {InputTextShowcaseState} from './InputTextShowcase';

export class InputSearchShowcase extends React.Component<{}, InputTextShowcaseState>{
  
    public render(){
        return (
            <div>
            <h4> Input Search </h4>
            <InputSearch placeholder={'Search'} />
            </div>
        );
    }
}