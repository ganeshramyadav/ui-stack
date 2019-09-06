import * as React from 'react';
import {Callout as BpCallOut} from '@blueprintjs/core';
import { IconName, Intent } from '@blueprintjs/core';


export interface CallOutProps{
    className?:string;
    icon?:IconName;
    intent?:Intent;
    title?:string;
}

export const CallOut:React.SFC<CallOutProps>=(props)=>{
    return <BpCallOut {...props}/>
}