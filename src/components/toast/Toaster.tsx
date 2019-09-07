import { Toaster as BpToaster, Intent as BpIntent, IToaster as BpIToaster } from '@blueprintjs/core';
// import './ToasterStyles.scss';s

const TIME_OUT_VALUE = 2000;

export class Toaster {

    /*************
        few iconNames to use
        primary - info-sign
        success - tick
        warning - warning-sign
        danger - ban-circle
        others - hand, heart, edit, delete, home, history
    ************/
    private static toasterInstance: BpIToaster = BpToaster.create({ className: 'sui-toaster' });

    // public static info(message?: string, icon?: string, Position?:ToasterPosition)
    
    public static info(message?: string, icon?: string): string {
        return Toaster.toasterInstance.show({ message: message || '', intent: BpIntent.PRIMARY, timeout: TIME_OUT_VALUE });
    }

    public static warning(message?: string, icon?: string): string {
        return Toaster.toasterInstance.show({ message: message || '', intent: BpIntent.WARNING, timeout: TIME_OUT_VALUE });
    }

    public static error(message?: string, icon?: string): string {
        return Toaster.toasterInstance.show({ message: message || '', intent: BpIntent.DANGER,  timeout: TIME_OUT_VALUE });
    }

    public static success(message?: string, icon?: string): string {
        return Toaster.toasterInstance.show({ message: message || '', intent: BpIntent.SUCCESS,  timeout: TIME_OUT_VALUE });
    }

    public static show(message?: string, icon?: string, timeout?: number): string {
        return Toaster.toasterInstance.show({ message: message || '', intent: BpIntent.NONE, timeout: timeout || 5000 });
    }

    public static clear() {
        return Toaster.toasterInstance.clear();
    }
}
