import * as React from 'react';

import { InputTextarea } from '../components';


export class InputTextareaShowcase extends React.Component<{}, {}>{
    public render() {
        return (
            <div>
                <h5>Disabled TextArea</h5>
                <InputTextarea Disabled={'true'}  />
                <h5>Readonly TextArea</h5>
                <InputTextarea Readonly={'true'}  />
                <h5>Simple TextArea</h5>
                <InputTextarea intent={'none'} />
                <h5>Primary TextArea</h5>
                <InputTextarea intent={'primary'} />
                <h5>Success TextArea</h5>
                <InputTextarea intent={'success'} />
                <h5>Warning TextArea</h5>
                <InputTextarea  intent={'warning'}/>
                <h5>Danger TextArea</h5>
                <InputTextarea  intent={'danger'}/>
            </div>
        );
    }
}