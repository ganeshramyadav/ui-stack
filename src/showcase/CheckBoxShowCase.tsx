import * as React from 'react';
import {CheckBox} from '../components';


export class CheckBoxShowCase extends React.Component<{},{}>{
    public render(){
        return(
            <div>
                    <h5>CheckBox Without Label</h5>
                    <CheckBox />

                    <h5>CheckBox With Label</h5>
                    <CheckBox label='test1'/>
                    <CheckBox label='test2'/>
                    <CheckBox label='test3'/>

                    <h5>Disabled CheckBox</h5>
                    <CheckBox label='test1' disabled/>
                    <CheckBox label='test2' disabled/>
                    <CheckBox label='test3' disabled/>

                    <h5>Left Align CheckBox</h5>
                    <CheckBox label='test1' alignIndicator='left'/>
                    <CheckBox label='test2' alignIndicator='left'/>
                    <CheckBox label='test3' alignIndicator='left'/>

                    <h5>Right Align CheckBox</h5>
                    <CheckBox label='test1' alignIndicator='right'/>
                    <CheckBox label='test2' alignIndicator='right'/>
                    <CheckBox label='test3' alignIndicator='right'/>

                    <h5>Inline CheckBox</h5>
                    <CheckBox label='test1' inline='1'/>
                    <CheckBox label='test2' inline='1'/>
                    <CheckBox label='test3' inline='1'/>

                    <h5>labelElement CheckBox</h5>
                    <CheckBox labelElement='test1' />
                    <CheckBox labelElement='test2' />
                    <CheckBox labelElement='test3' />

                    <h5>Checked CheckBox</h5>
                    <CheckBox labelElement='test1' checked/>

                    <h5>children CheckBox</h5>
                    <CheckBox children={'h5'} />

                    <h5>defaultChecked CheckBox</h5>
                    <CheckBox labelElement='test1' defaultChecked/>
                    <CheckBox labelElement='test2' />
                    <CheckBox labelElement='test3' />

                    <h5>defaultIndeterminate CheckBox</h5>
                    <CheckBox labelElement='test1' defaultIndeterminate/>
                    
                    {/* <h5>inputRef CheckBox</h5> */}
                    {/* <CheckBox value="Bob" labelElement='test1' ref={el => { this.input = el; }}/> */}
                    
                    <h5>large CheckBox</h5>
                    <CheckBox labelElement='test1' large/>
                    <CheckBox labelElement='test2' large/>
                    <CheckBox labelElement='test3' large/>
            </div>
        );
    }
}