import * as React from 'react';
import { InputNumber} from '../components';

export class InputNumberShowcase extends React.Component<{},{}> {
    public render() {
        return (
            <div>
                <h6>Example of Intent None</h6>
                <InputNumber  intent={'none'}/>

                <h6>Example of Intent Primary</h6>
                <InputNumber  intent={'primary'}/>

                <h6>Example of Intent Success</h6>
                <InputNumber  intent={'success'}/>

                <h6>Example of Intent Warning</h6>
                <InputNumber  intent={'warning'}/>
                <h6>Example of Intent Danger</h6>
                <InputNumber  intent={'danger'}/>

                <h6>Example of Botton Position Right</h6>

                <InputNumber  buttonPosition='right'/>
                <h6>Example of Botton Position Left</h6>
                <InputNumber  buttonPosition='left'/>

                {/* <h6>Example of Botton Position Bottom</h6>
                <InputNumber  buttonPosition={7}/> */}
                
                </div>
        ) 
    }
}