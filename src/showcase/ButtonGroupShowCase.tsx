import * as React from 'react';
import { ButtonGroup } from '../components';
import { Button } from '../components'


export class ButtonGroupShowCase extends React.Component<{},{}>{
    public render(){
        return(
            <div>
                <h5>'Left' alignText ButtonGroup</h5>
                <ButtonGroup alignText="left">
                    <Button text="Button" fill />
                    <Button text="Button" fill />
                    <Button text="Button" fill />
                    <Button text="Button" fill />
                </ButtonGroup>
                
                <h5>'Center' alignText ButtonGroup</h5>
                <ButtonGroup alignText="center">
                    <Button text="Button" fill />
                    <Button text="Button" fill />
                    <Button text="Button" fill />
                    <Button text="Button" fill />
                </ButtonGroup>
                
                <h5>'Right' alignText ButtonGroup</h5>
                <ButtonGroup alignText="right">
                    <Button text="Button" fill />
                    <Button text="Button" fill />
                    <Button text="Button" fill />
                    <Button text="Button" fill />
                </ButtonGroup>
                
                <h5>Fill ButtonGroup</h5>
                <ButtonGroup fill>
                    <Button text="Button" fill />
                    <Button text="Button" fill />
                    <Button text="Button" fill />
                    <Button text="Button" fill />
                </ButtonGroup>
                
                <h5>large ButtonGroup</h5>
                <ButtonGroup large>
                    <Button text="Button" fill />
                    <Button text="Button" fill />
                    <Button text="Button" fill />
                    <Button text="Button" fill />
                </ButtonGroup>
                
                <h5>minimal ButtonGroup</h5>
                <ButtonGroup minimal>
                    <Button text="Button" fill />
                    <Button text="Button" fill />
                    <Button text="Button" fill />
                    <Button text="Button" fill />
                </ButtonGroup>
                
                <h5>vertical ButtonGroup</h5>
                <ButtonGroup vertical>
                    <Button text="Button" fill />
                    <Button text="Button" fill />
                    <Button text="Button" fill />
                    <Button text="Button" fill />
                </ButtonGroup>
            </div>
        );
    }
}
