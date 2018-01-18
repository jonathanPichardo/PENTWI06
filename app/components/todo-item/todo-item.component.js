const template = require('./todo-item.component.html')

export class TodoItemComponent {
    constructor() {
        this.template = template;
        this.controller = TodoItemController;
        this.scope = {
            item: '=item'
        };
    }
}

class TodoItemController {
    contructor($scope) {
        
    }
}