import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import FormInputWrapper from '../components/FormInputWrapper'

export default{
    title: 'Form/Form Input Wrapper',
    component: FormInputWrapper,
    argTypes: {
        type: {
          options: ['text', 'text-area', 'date', 'single-choice', 'multi-choice'],
          control: { type: 'select' }
        },
      },
} as ComponentMeta<typeof FormInputWrapper>

const Template: ComponentStory<typeof FormInputWrapper> = ({type}) => {
    return <FormInputWrapper type={type}/>;
  };

export const Default = Template.bind({});
Default.args= {
    type: 'text',
  };