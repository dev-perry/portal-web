import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react'
import AuthForm from '../components/AuthForm'

export default{
    title: 'Auth Form',
    component: AuthForm,
} as ComponentMeta<typeof AuthForm>

export const Default: ComponentStory<typeof AuthForm> = () => <AuthForm />