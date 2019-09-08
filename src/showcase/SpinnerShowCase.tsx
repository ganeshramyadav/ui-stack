import * as React from 'react';
import {Spinner} from '../components';

export class SpinnerShowCase extends React.Component<{},{}>{
    public render(){
        return (
            <div>
                <h5>Example of none intent Spinner</h5>
                <Spinner intent={'none'}/>

                <h5>Example of Primary intent Spinner</h5>
                <Spinner intent={'primary'}/>

                <h5>Example of Success intent Spinner</h5>
                <Spinner  intent={'success'}/>

                <h5>Example of Warning intent Spinner</h5>
                <Spinner  intent={'warning'}/>

                <h5>Example of Danger intent Spinner</h5>
                <Spinner  intent={'danger'}/>

                <h5>Example of Size Spinner</h5>
                <Spinner value="0" size="100" /> 
                <Spinner value="0.1" size="10" />
                <Spinner value="0.2" size="20" />
                <Spinner value="0.3" size="30" />
                <Spinner value="0.4" size="40" />
                <Spinner value="0.5" size="50" />
                <Spinner value="1" size="70" />
            </div>
        );
    }
}