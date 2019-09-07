import * as React from 'react';
import {InputRadio} from '../components';



export interface RadioState 
{
    value?:string;
}

export class InputRadioboxShowCase extends React.Component<{},RadioState> {


    /**
     *
     */
    constructor() {
        super();
        this.state ={ }
    }

    // tslint:disable-next-line:max-func-body-length
    public render() {
        const options = [
            {label: 'Java', value: 'java'},
            {label: 'Scala', value: 'scala'},
            {label: 'Groovy', value: 'groovy'},
            {label: 'JRuby', value: 'jruby'},
        ];

        return (
            <div>
                <h5>Default Configuration</h5>
                <InputRadio
                    value={this.state.value}
                    /* selectedValue={this.state.value}  */
                    options={options}
                    onChange={(event: any) => this.setState({value: event.currentTarget.value})}
                />

                <h5>Multiple Groups in one line</h5>
                <InputRadio
                    value={this.state.value}
                    inline 
                    options={options}
                    onChange={(event: any) => this.setState({value: event.currentTarget.value})}
                />

                <InputRadio
                    inline 
                    value={this.state.value}
                    options={options}
                    onChange={(event: any) => this.setState({value: event.currentTarget.value})}
                />

                <h5>Left Side Labels</h5>
                <InputRadio
                    labelPosition='left'
                    value={this.state.value}
                    options={options}
                    onChange={(event: any) => this.setState({value: event.currentTarget.value})}
                />

                <h5>Vertical</h5>
                <InputRadio
                    vertical
                    value={this.state.value}
                    options={options}
                    onChange={(event: any) => this.setState({value: event.currentTarget.value})}
                />

                <h5>Vertical Right side label</h5>
                <InputRadio
                    alignIndicator='LEFT'
                    vertical
                    value={this.state.value}
                    options={options}
                    onChange={(event: any) => this.setState({value: event.currentTarget.value})}
                />

                <h5>Disabled</h5>
                <InputRadio
                    disabled
                    vertical
                    value={this.state.value}
                    options={options}
                    onChange={(event: any) => this.setState({value: event.currentTarget.value})}
                /> 
                
                {/* <h5>With Intents</h5>
                <InputRadio
                    intent='primary'
                    value={this.state.value}
                    options={options}
                    onChange={(event: any) => this.setState({value: event.currentTarget.value})}
                />
                <br/>
                <InputRadio
                    intent='success'
                    value={this.state.value}
                    options={options}
                    onChange={(event: any) => this.setState({value: event.currentTarget.value})}
                />
                <br/>
                <InputRadio
                    intent='warning'
                    value={this.state.value}
                    options={options}
                    onChange={(event: any) => this.setState({value: event.currentTarget.value})}
                />
                <br/>
                <InputRadio
                    intent='error'
                    value={this.state.value}
                    options={options}
                    onChange={(event: any) => this.setState({value: event.currentTarget.value})}
                /> */}

                <h5>As Buttons</h5>
                <InputRadio
                    renderAs='buttons'
                    value={this.state.value}
                    options={options}
                    onChange={(event: any) => this.setState({value: event.currentTarget.value})}
                />

                <h5>As Buttons Vertical</h5>
                <InputRadio
                    vertical
                    renderAs='buttons'
                    value={this.state.value}
                    options={options}
                    onChange={(event: any) => this.setState({value: event.currentTarget.value})}
                />
            </div>
        );
    }
}

