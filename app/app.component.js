
const template = require('./app.component.html');

export class AppComponent {
    constructor(){
        this.template = template;
        this.controller = AppController;
        this.bindings = {};
    }
}

class AppController{
    constructor(){

        console.log('Ell');

    };
}