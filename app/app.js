import angular from 'angular';

import { AppComponent } from './app.component';

import {
    TodoListComponent,
    TodoItemComponent
} from './components';

const app = angular.module('todo-app', []);

app.directive('appRoot', AppComponent);
app.directive('appTodoList', TodoListComponent);
app.directive('appTodoItem', TodoItemComponent);

export default app;