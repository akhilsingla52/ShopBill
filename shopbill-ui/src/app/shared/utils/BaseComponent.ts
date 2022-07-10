import Swal from 'sweetalert2';
import { FormGroup } from '@angular/forms';

declare var $: any;

export class BaseComponent {
    form: FormGroup;
    modelHeader: string;
    params: any;
    headElements: any;

    constructor() {}

    get f(){
        return this.form.controls;
    }
    
    getControls(key: string){
        return this.form.get(key);
    }

    setParams() {
        this.params = {
            page: 1,
            size: 10,
            sort: [],
            search: '',
            totalElements: 0
        };
    }

    orderBy(sort: string) {
        if(this.params.sort.length > 0
            && this.params.sort[0] === sort) {
            this.params.sort[0] = sort+',desc';
        } else {
            this.params.sort[0] = sort;
        }
    }

    openModel(modelHeader: string) {
        this.modelHeader = modelHeader;
        this.form.reset();
    }

    closeModel(modelId: string) {
        this.form.reset();
        $(modelId).modal("hide");
    }

    errorPopUp() {
        Swal.fire('Error!', 'some error occur', 'error');
    }

    successPopUp(message) {
        Swal.fire('Succes', message, 'success');
    }
    
}