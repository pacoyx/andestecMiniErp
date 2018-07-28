import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArticuloComponent } from './components/maestros/articulo/articulo.component';
import { ArticulolistComponent } from './components/maestros/articulo/articulolist.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';
import { MaestrosComponent } from './components/maestros/maestros.component';
import { AlmacenComponent } from './components/maestros/almacen/almacen.component';
import { AlmacenlistComponent } from './components/maestros/almacen/almacenlist.component';
import { CentrocostoComponent } from './components/maestros/centrocosto/centrocosto.component';
import { CentrocostolistComponent } from './components/maestros/centrocosto/centrocostolist.component';
import { FamiliaComponent } from './components/maestros/familia/familia.component';
import { FamilialistComponent } from './components/maestros/familia/familialist.component';
import { FamiliasubComponent } from './components/maestros/familiasub/familiasub.component';
import { FamiliasublistComponent } from './components/maestros/familiasub/familiasublist.component';
import { MercanciatipoComponent } from './components/maestros/mercanciatipo/mercanciatipo.component';
import { MercanciatipolistComponent } from './components/maestros/mercanciatipo/mercanciatipolist.component';
import { ServicioComponent } from './components/maestros/servicio/servicio.component';
import { ServiciolistComponent } from './components/maestros/servicio/serviciolist.component';
import { UnidadComponent } from './components/maestros/unidad/unidad.component';
import { UnidadesComponent } from './components/maestros/unidad/unidades.component';
import { ClientelistComponent } from './components/maestros/cliente/clientelist.component';
import { ClienteComponent } from './components/maestros/cliente/cliente.component';
import { ProveedorlistComponent } from './components/maestros/proveedor/proveedorlist.component';
import { ProveedorComponent } from './components/maestros/proveedor/proveedor.component';
import { ReporteStockComponent } from './components/reportes/reporte-stock/reporte-stock.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'articulo/:id', component: ArticuloComponent },
    { path: 'articulos', component: ArticulolistComponent },
    { path: 'transacciones', component: TransaccionesComponent },
    { path: 'maestros', component: MaestrosComponent },
    { path: 'almacenes', component: AlmacenlistComponent },
    { path: 'almacen/:id', component: AlmacenComponent },
    { path: 'centrocosto/:id', component: CentrocostoComponent },
    { path: 'centrocostos', component: CentrocostolistComponent },
    { path: 'familia/:id', component: FamiliaComponent },
    { path: 'familias', component: FamilialistComponent },
    { path: 'familiasub/:id', component: FamiliasubComponent },
    { path: 'familiassub', component: FamiliasublistComponent },
    { path: 'mercanciatipo/:id', component: MercanciatipoComponent },
    { path: 'mercanciatipos', component: MercanciatipolistComponent },
    { path: 'servicio/:id', component: ServicioComponent },
    { path: 'servicios', component: ServiciolistComponent },
    { path: 'unidad/:id', component: UnidadComponent },
    { path: 'unidades', component: UnidadesComponent },
    { path: 'cliente/:id', component: ClienteComponent },
    { path: 'clientes', component: ClientelistComponent },
    { path: 'proveedor/:id', component: ProveedorComponent },
    { path: 'proveedores', component: ProveedorlistComponent },
    { path: 'reportestock', component: ReporteStockComponent },

    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
