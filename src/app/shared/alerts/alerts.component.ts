import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  SuccessAlert() {
    Swal.fire({
      icon: 'success',
      title: 'El correo se ha enviado correctamente',
      showConfirmButton: false,
      timer: 1500
    })
  }

  IncompletDataAlert() {
    Swal.fire({
      title: 'Información!',
      text: 'Por favor rellene todos los campos obligatorios',
      icon: 'info',
      confirmButtonText: 'Reintentar'
    })
  }

  ErrorAlert() {
    Swal.fire({
      title: 'Error!',
      text: 'No se puede contectar con el servidor intente nuevamente',
      icon: 'error',
      confirmButtonText: 'Reintentar'
    })
  }

  ChargeAlert() {
    Swal.fire({
      title: 'Por favor espere...!',
      html: 'Enviando Mensaje',
      allowOutsideClick: false,
      didOpen: () => {
          Swal.showLoading(null)
      },
  });
  }

  WorkshopChargeAlert() {
    Swal.fire({
      title: 'Por favor espere...!',
      html: 'Cargando enlace',
      allowOutsideClick: false,
      didOpen: () => {
          Swal.showLoading(null)
      },
  });
  }

  WorkshopAlert() {
  Swal.fire({
    icon: 'success',
    title: '¡Gracias por su espera! en el enlace podrá acceder a la información',
    showConfirmButton: false,
    timer: 2000
  })
  }

}
