import * as React from 'react';
import { CallOut } from '../components';

export class CallOutShowCase extends React.Component<{},{}>{
    public render(){
        return(
            <div>
                <h5>none Intent CallOut</h5>
                <CallOut intent='none'>The component is a simple wrapper around the CSS API that provides props for modifiers and optional title element. Any additional HTML props will be spread to the rendered element.</CallOut>
                
                <h5>Primary Intent CallOut</h5>
                <CallOut intent='primary'>The component is a simple wrapper around the CSS API that provides props for modifiers and optional title element. Any additional HTML props will be spread to the rendered element.</CallOut>
                
                <h5>Success Intent CallOut</h5>
                <CallOut intent='success'>The component is a simple wrapper around the CSS API that provides props for modifiers and optional title element. Any additional HTML props will be spread to the rendered element.</CallOut>
                
                <h5>Warning Intent CallOut</h5>
                <CallOut intent='warning'>The component is a simple wrapper around the CSS API that provides props for modifiers and optional title element. Any additional HTML props will be spread to the rendered element.</CallOut>
                
                <h5>Danger Intent CallOut</h5>
                <CallOut intent='danger'>The component is a simple wrapper around the CSS API that provides props for modifiers and optional title element. Any additional HTML props will be spread to the rendered element.</CallOut>
                
                <h5>Title CallOut</h5>
                <CallOut title='Title'>The component is a simple wrapper around the CSS API that provides props for modifiers and optional title element. Any additional HTML props will be spread to the rendered element.</CallOut>
                
                <h5>With Icon CallOut</h5>
                <CallOut icon='add'>The component is a simple wrapper around the CSS API that provides props for modifiers and optional title element. Any additional HTML props will be spread to the rendered element.</CallOut>
           
            </div>
        );
    }
}