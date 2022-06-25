import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react'
import PortalElementButton from '../components/PortalElementButton';

export default{
    title: 'Buttons/Portal Element',
    component: PortalElementButton,
} as ComponentMeta<typeof PortalElementButton>

export const Default: ComponentStory<typeof PortalElementButton> = () => <PortalElementButton />