import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react'
import DataCard from '../components/DataCard'

export default{
    title: 'Cards/Data Card',
    component: DataCard,
} as ComponentMeta<typeof DataCard>

export const Default: ComponentStory<typeof DataCard> = () => <DataCard />