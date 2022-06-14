import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import TeamCard from '../components/TeamCard'

export default{
    title: 'Cards/Team Card',
    component: TeamCard,
} as ComponentMeta<typeof TeamCard>

export const Default: ComponentStory<typeof TeamCard> = () => <TeamCard />