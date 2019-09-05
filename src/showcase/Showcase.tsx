import * as React from 'react';
import * as Blueprint from '@blueprintjs/core';
import { Tabs, Tab, Button } from '@blueprintjs/core';
import { BaseComponent } from '../components/basecomponent/BaseComponent';
import { InputNumberShowcase } from './InputNumberShowcase';
import { InputTextShowcase } from './InputTextShowcase';
import { InputTextareaShowcase } from './InputTextareaShowcase';
import { InputPasswordShowcase } from './InputPasswordShowcase';
import { InputSearchShowcase } from './InputSearchShowcase';
import { IconShowcase } from './IconShowcase';
import { FirebaseShowCase } from './FirebaseShowCase';
export interface ShowcaseProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Showcase extends React.Component<ShowcaseProps, {}> {
    render() {
        return (<Tabs id='TabsExample' vertical={true} renderActiveTabPanelOnly={true} >
            <Tab id='in' title='Inputnumber' panel={this.renderBaseComponent(< InputNumberShowcase />)} />
            <Tab id='it' title='InputText' panel={this.renderBaseComponent(<InputTextShowcase />)} />
            <Tab id='textarea' title='TextArea' panel={this.renderBaseComponent(<InputTextareaShowcase />)} />
            <Tab id='tp' title='TextPassword' panel={this.renderBaseComponent(<InputPasswordShowcase />)} />
            <Tab id='icon' title='Icons' panel={this.renderBaseComponent(<IconShowcase />)} />
            <Tab id='ts' title='TextSearch' panel={this.renderBaseComponent(<InputSearchShowcase />)} />
            <Tab id='firebase' title='FirebaseShowCase' panel={this.renderBaseComponent(<FirebaseShowCase />)} />
            <Tab id='tb' title='Button' panel={this.renderBaseComponent(<Button />)} />
        </Tabs>)
    }


    renderBaseComponent(children?: JSX.Element | string) {
        return <BaseComponent children={children} />;
    }
}