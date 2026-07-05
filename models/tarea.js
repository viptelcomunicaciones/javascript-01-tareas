import { v4 as uuidv4 } from 'uuid';
export class Tarea {

    id= '';
    desc = '';
    completadoen = null;

    constructor(desc){
        this.id = uuidv4();
        this.desc = desc;
        this.completadoen = null;

    }
};
