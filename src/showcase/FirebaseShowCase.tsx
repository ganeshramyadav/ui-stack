import * as React from 'react';
import { Firebase } from '../components/firebase';
import { Record } from '../models';

export interface FirebaseShowCaseProps {

}

export interface FirebaseShowCaseState {
    userList?: Record[];
    loading?: boolean;
    error?: string;
}

export class FirebaseShowCase extends React.Component<FirebaseShowCaseProps, FirebaseShowCaseState>
{

    /**
     * first render
     */
    constructor(props: FirebaseShowCaseProps) {
        super(props);
        this.state = { userList: [], loading: true }
        console.log('ctor');
    }

    public componentWillMount() {
        console.log('componentWillMount');
    }

    public render() {
        console.log('render');


        if (this.state.loading) {
            return 'Loading.......';
        }
        return (<div>
            {this.state.userList && this.state.userList.map((user: Record, index: number) => {
                return (<li key={index}  > {user.name} -  {user.email} </li>)
            })}
        </div>);
    }


    public componentDidMount() {
        console.log('componentDiMount');
        this.initApi();


    }

    /***  State Change */
    public shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return false;
    }

    public componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    /// render called


    public componentDidUpdate() {
        console.log('componentDidUpdate');
    }


    /***Props change */

    public componentWillReceiveProps(props: FirebaseShowCaseProps) {
        console.log('componentWillReceiveProps');
    }


    /***Component will unmount while removing the component from  */

    public componentWillUnmount() {
        console.log('componentWillUnMount');
    }

    public componentDidCatch(info: any, err: any) {
        console.log(err, info);
    }

    private async initApi() {
        return Firebase.auth().signInWithEmailAndPassword('praveen@yopmail.com', '123456789')
            .then((response: any) => {
                Firebase.database().ref('users').on('value', (snapshot: any) => {
                    const __array: Record[] = snapshot.val();
                    const _userlist: Record[] = [];
                    __array.forEach((user: Record) => {
                        _userlist.push({ name: user.name, email: user.email });
                    });

                    this.setState({ userList: _userlist, loading: false });
                })
            }).catch(err => {
                throw err;
            });
    }

}