import * as React from 'react';
import { Icon as IconBP, Intent } from '@blueprintjs/core';
import { IconName } from './IconNames';


export interface IconProps {
    iconName: IconName;
    className?: string;
    intent?: Intent;
}

export const Icon: React.SFC<IconProps> = (props) => {
    return <IconBP  icon={props.iconName} {...props} />;
}
