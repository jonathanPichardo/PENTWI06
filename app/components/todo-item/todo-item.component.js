const template = require('./todo-item.component.html')

export class TodoItemComponent {
    constructor() {
        this.template = template;
        this.controller = TodoItemController;
    }
}

class TodoItemController {

}