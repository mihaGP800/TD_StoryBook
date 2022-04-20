import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {AddItemForm} from '../AddItemForm';
import {action} from '@storybook/addon-actions';
import {Task} from '../Task';
import {v1} from 'uuid';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Task',
    component: Task,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    args: {
        changeTaskStatus: action('changeTaskStatus'),
        changeTaskTitle: action('changeTaskTitle'),
        removeTask: action('removeTask'),
    },
} as ComponentMeta<typeof Task>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const TaskDoneStory = Template.bind({});

TaskDoneStory.args = {
    task: {
        id: v1(),
        title: 'wwwww',
        isDone: true,
    },
    todolistId: 'todoL',
};

export const TaskNotDoneStory = Template.bind({});

TaskNotDoneStory.args = {
    task: {
        id: v1(),
        title: 'wwwww',
        isDone: false,
    },
    todolistId: 'todoL',
};

