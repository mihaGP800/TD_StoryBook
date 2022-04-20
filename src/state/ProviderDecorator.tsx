import React, {ReactNode} from 'react';
import {AppRootStateType} from './store';
import {Provider} from 'react-redux';
import {v1} from 'uuid';
import {combineReducers, createStore} from 'redux';
import {tasksReducer} from './tasks-reducer';
import {todolistsReducer} from './todolists-reducer';

const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer
})

const initialGlobalState = {
    todolists: [
        {id: "todolistId1", title: "What to learn", filter: "all"},
        {id: "todolistId2", title: "What to buy", filter: "all"}
    ] ,
    tasks: {
        ["todolistId1"]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true}
        ],
        ["todolistId2"]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "React Book", isDone: true}
        ]
    }
};

const store = createStore(rootReducer, initialGlobalState as AppRootStateType)


export const ProviderDecorator = (storyFn: () => ReactNode) => {
    return (
        <Provider store={store}>{storyFn()}</Provider>
    );
}