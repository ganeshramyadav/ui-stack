import * as React from 'react';
import './BaseComponent.css';


export interface BaseComponentProps {
    children?: JSX.Element | string | HTMLElement;
}


export class BaseComponent extends React.Component<BaseComponentProps, {}>
{
    public render() {
        return (<div className='base-showcase'>
            {this.props.children}
        </div>);
    }

}

