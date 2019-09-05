import * as React from 'react';
import {Buttons} from '../components';
import { Button } from '@blueprintjs/core';

export class ButtonShowCase extends React.Component<{},{}>{
    public render(){
        return (
            <div>
                <h5>Disabled Button</h5>
                <Button name="Submit" Disabled={'true'}  />
            </div>
        );
    }
}