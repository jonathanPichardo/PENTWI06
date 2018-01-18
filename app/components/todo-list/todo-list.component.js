import { TodoItem } from '../../model/todoItem';

const template = require('./todo-list.component.html');
export class TodoListComponent {
    constructor() {
        this.template = template;
        this.controller = TodoListController;
        this.bindings = {};
    }
}

class TodoListController {

    constructor($scope) {
        
        $scope.items = [];

        $scope.addTask = () => {
            if(!$scope.newTask){
                return;
            }
            $scope.items.push(new TodoItem($scope.newTask));
            $scope.newTask = '';
        };

        $scope.newTask = '';

    }

}