import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react'
import NavBar from '../components/NavBar'

export default{
    title: 'Nav Sidebar',
    component: NavBar,
} as ComponentMeta<typeof NavBar>

export const Default: ComponentStory<typeof NavBar> = () => <NavBar/>