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
        $scope.items = [1, 2, 3, 4];
    }

}