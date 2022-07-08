import Swal from 'sweetalert2';

export class SweetAlertPopUp {

    constructor() {}
    
    public showLoading() {
        Swal.fire({
            title: 'Loading...',
            allowOutsideClick: false,
            allowEscapeKey: false
        });
        Swal.showLoading();
    }

    public close() {
        Swal.close();
    }

    public errorPopUp() {
        Swal.fire('Error!', 'some error occur', 'error');
        // Swal.fire({
        //     title: "some error occur",
        //     type: "error",
        //     showConfirmButton: false,
        //     allowOutsideClick: false,
        //     allowEscapeKey: false,
        //     timer: 3000
        // })
    }

    public successPopUp(message) {
        Swal.fire('Succes', message, 'success');
        // Swal.fire({
        //     title: message,
        //     type: "success",
        //     showConfirmButton: false,
        //     allowOutsideClick: false,
        //     allowEscapeKey: false,
        //     timer: 3000
        // })
    }
}