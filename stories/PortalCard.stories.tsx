import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react'
import PortalCard from '../components/PortalCard'

export default{
    title: 'Cards/Portal Card',
    component: PortalCard,
} as ComponentMeta<typeof PortalCard>

export const Default: ComponentStory<typeof PortalCard> = () => <PortalCard />