import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react'
import Table from '../components/Table'

export default{
    title: 'Table',
    component: Table,
} as ComponentMeta<typeof Table>

export const Default: ComponentStory<typeof Table> = () => <Table />