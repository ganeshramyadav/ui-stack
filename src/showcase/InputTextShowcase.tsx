import * as React from 'react';
import { InputText } from '../components';

export interface InputTextShowcaseState {
    value1?: string;
}

export class InputTextShowcase extends React.Component<{}, InputTextShowcaseState>{

    /**
     *
     */
    constructor(props: any) {
        super(props);
        this.state = { value1: 'praveen' }
    }


    public render() {
        return (
            <div>
                <h4> OnChange Event InputText </h4>
                <InputText value={this.state.value1} onChange={(event: any) => {
                    this.setState({ value1: event.target.value })
                }} />


                <h4> InputText with None intent </h4>
                <InputText  value={this.state.value1} intent={'none'} />


                <h4>  InputText with Primary intent </h4>
                <InputText value={this.state.value1} intent={'primary'} />


                <h4>  InputText with Success intent </h4>
                <InputText value={this.state.value1} intent={'success'} />


                <h4>  InputText with Warning intent </h4>
                <InputText value={this.state.value1} intent={'warning'} />

                <h4>  InputText with Danger intent </h4>
                <InputText value={this.state.value1} intent={'danger'} />

                <h4>  InputText with disabled </h4>
                <InputText value={this.state.value1} disabled />

                <h4>  InputText with placeholder </h4>
                <InputText placeholder={'Enter name'} />



            </div>
        )
    }






}