import * as React from 'react';
import {Button} from '../components';
import {Toaster} from '../components'
import { Position } from '@blueprintjs/core';

export class ToastShowcase extends React.Component<{},{}> {
    public render() {
        return (
            <div>
                <h4>Toasts with Intents</h4>
                <Button onClick={() => Toaster.show('Hi there...', 'hand')}>Default</Button> &nbsp;
                <Button onClick={() => Toaster.show('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')}>Long Text</Button> &nbsp;
                <Button intent='primary' onClick={() => Toaster.info('Role will be updated later', 'info-sign')}>Info</Button>  &nbsp;
                <Button intent='success' onClick={() => Toaster.success('Role deleted successfully', 'tick')}>Success</Button> &nbsp;
                <Button intent='danger' onClick={() => Toaster.error('Oops! something went wrong', 'ban-circle')}>Error</Button> &nbsp;
                <Button intent='warning' onClick={() => Toaster.warning('Not all operations are successful', 'warning-sign')}>Warning</Button>

                {/* <h4>Toasts with Intents and Position</h4>
                <Button onClick={() => Toaster.show('Hi there...', 'hand','bottom-right')}>Default</Button> &nbsp;
                <Button onClick={() => Toaster.show('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'bottom')}>Long Text</Button> &nbsp;
                <Button intent='primary' onClick={() => Toaster.info('Role will be updated later', 'info-sign')}>Info</Button>  &nbsp;
                <Button intent='success' onClick={() => Toaster.success('Role deleted successfully', 'tick')}>Success</Button> &nbsp;
                <Button intent='danger' onClick={() => Toaster.error('Oops! something went wrong', 'ban-circle')}>Error</Button> &nbsp;
                <Button intent='warning' onClick={() => Toaster.warning('Not all operations are successful', 'warning-sign')}>Warning</Button> */}
            </div>
        );
    }
}
