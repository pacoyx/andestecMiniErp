import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Ma_Warehouse } from '../../shared/modelos/Ma_Warehouse';
import { MaestrosService } from '../../../services/maestros.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styles: [`.ng-invalid.ng-touched:not(form) {border: 1px solid red}`

  ]
})
export class AlmacenComponent {
  forma: FormGroup;
  nuevo: boolean = false;
  id: string = "";
  cargando: boolean = false;

  constructor(private maestroSevicio: MaestrosService,
    private router: Router,
    private route: ActivatedRoute) {

    this.forma = new FormGroup({
      'ID_COMPANY': new FormControl(''),
      'ID_WAREHOUSE': new FormControl('', Validators.required),
      'DESCRIPCION': new FormControl('', Validators.required),
      'DIRECCION': new FormControl('', Validators.required)
    });

    //aqui obtenemos el usuario en caso sea modificacion
    route.params.subscribe(parametros => {
      this.id = parametros['id'];

      if (this.id !== "nuevo") {
        this.maestroSevicio.getAlmacen(this.id)
          .subscribe((res: Ma_Warehouse) => {            
            this.forma.get('ID_WAREHOUSE').setValue(res.ID_WAREHOUSE);
            this.forma.get('DESCRIPCION').setValue(res.DESCRIPCION);
            this.forma.get('DIRECCION').setValue(res.DIRECCION);
          });
      }
    })
  }


  guardar() {
    this.cargando = true;
    let eAlmacen = new Ma_Warehouse(
      this.forma.get('ID_WAREHOUSE').value,
      this.forma.get('DESCRIPCION').value,
      this.forma.get('DIRECCION').value, 1);

    this.maestroSevicio.registrarAlmacen(eAlmacen);
    this.forma.reset();
    //this.router.navigate(['/almacenes'])
    this.cargando = false;
  }

}