import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FormInput from '../components/FormInput';

export default{
    title: 'Form/Form Input',
    component: FormInput,
    argTypes: {
        type: {
            options: ['text', 'text-area', 'date', 'single-choice', 'multi-choice'],
            control: { type: 'select' }
        }
},
} as ComponentMeta<typeof FormInput>

const Template: ComponentStory<typeof FormInput> = ({type, options}) => {
    return <FormInput type={type} options={options}/>;
    };

export const Default = Template.bind({});
Default.args= {
    type: 'text',
};