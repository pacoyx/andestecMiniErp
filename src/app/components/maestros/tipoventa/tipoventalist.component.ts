import { Component } from '@angular/core';
import { MaestrosService } from '../../../services/maestros.service';
import { MA_SALESTYPE } from '../../shared/modelos/MA_SALESTYPE';
declare var swal: any;

@Component({
  selector: 'app-tipoventalist',
  templateUrl: './tipoventalist.component.html',
  styleUrls: []
})
export class TipoventalistComponent {
  eTipoventa: MA_SALESTYPE[] = [];
  bol_cargando: boolean;
  bol_error: boolean;
  msj_error: string;

  constructor(private maestroServicio: MaestrosService) {
    this.cargarListado();
  }

  cargarListado() {
    this.bol_cargando = true;
    this.maestroServicio.getTipoVentas().then((
      resp: MA_SALESTYPE[]) => {
      this.eTipoventa = resp;
      this.bol_cargando = false;
    }).catch(err => this.ShowError(err));
  }

  borrarTipoventa(codigo: string) {
    swal({
      title: "Esta seguro de eliminar?",
      text: "Una vez eliminado, no podra recuperar el registro",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.maestroServicio.borrarTipoVenta(codigo).then(
            res => {
              if (res == "ok") {
                swal("Registro Eliminado", { icon: "success", });
                this.cargarListado();
              }
            }
          ).catch(err => this.ShowError(err));
        }
      });

  }


  ShowError(err: string) {
    this.bol_cargando = false;
    this.bol_error = true;
    this.msj_error = err;
    setTimeout(() => {
      this.bol_error = false;
    }, 2000);
  }

}
