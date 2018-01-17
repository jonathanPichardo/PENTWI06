import angular from 'angular';

import {
    TodoListComponent,
    TodoItemComponent
} from './components';

export const app = angular.module('todo-app', []);

app.component('appTodoList', TodoListComponent);
app.component('appTodoItem', TodoItemComponent);