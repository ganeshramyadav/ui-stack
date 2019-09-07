import * as React from 'react';

import {Toast as BpToast, IActionProps, IconName, Intent} from '@blueprintjs/core';

export interface ToastProps{
    action?:IActionProps;
    className?:string;
    icon?:IconName;
    intent?:Intent;
    message?:React.ReactNode;
    onDismiss?:void;
    timeout?:number;
}

export const Toast: React.SFC<ToastProps> =(props)=>{
    return <BpToast {...props}/>
}