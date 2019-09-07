import * as React from 'react';
import {Button} from '../components';
import { Alert } from '@blueprintjs/core';
import { CONSOLE } from '@blueprintjs/icons/lib/esm/generated/iconNames';

export class ButtonShowCase extends React.Component<{},{}>{
    public render(){
        return (
            <div>
                <h5>Disabled Button</h5>
                <Button text="Button"  disabled/>


                <h5>Fill Button</h5>
                <Button text="Button" fill />

                <h5>Intent primary Button</h5>
                <Button text="Button" intent='primary' />

                <h5>success Button</h5>
                <Button text="Button" intent='success' />
                <h5>loading Button</h5>
                <Button text="Button" loading />
                <h5>Minimal Button</h5>
                <Button text="Button" minimal />

                <h5>Minimal Button</h5>
                <Button text="Button" icon='add' />

                <h5>OnClick Event Button</h5>
                <Button text="Button" onClick={(e:any) =>{
                    console.log('tsete');
                }} />

            </div>
        );
    }
}