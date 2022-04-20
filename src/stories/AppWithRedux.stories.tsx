import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import AppWithRedux from '../AppWithRedux';
import {ProviderDecorator} from '../state/ProviderDecorator';

export default {
    title: 'AppWithRedux',
    component: AppWithRedux,
    decorators: [ProviderDecorator]
} as ComponentMeta<typeof AppWithRedux>;

const Template: ComponentStory<typeof AppWithRedux> = () => <AppWithRedux/>
    // <Provider store={store}><AppWithRedux/></Provider>;

export const AppWithReduxStory = Template.bind({});
// AppWithRedux.args = {};

