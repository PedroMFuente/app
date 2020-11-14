import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from 'src/app/servicios/proveedores.service';
import { Proveedor } from 'src/model/proveedor';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  proveedores: any[] = [];
  public proveedorUP: Proveedor;
  public id: string;

  constructor(private ProveedoresService: ProveedoresService) {
    this.ProveedoresService.getProveedores()
      .subscribe(proveedores => {
        proveedores.forEach((everyproveedor) => {
          this.proveedores.push({
            key: everyproveedor.key,
            ...everyproveedor.payload.val() as Proveedor
          })
        })
      })
  }

  ngOnInit(): void {
    //this.proveedores = this.ProveedoresService.getProveedores();
  }

  public getProveedor(prov: Proveedor, id: string) {
    this.proveedorUP = prov;
    this.ProveedoresService.proveedorU = prov;
    this.ProveedoresService.id = id;
  }

  public eliminarProveedor(id: string) {
    this.ProveedoresService.deleteProveedor(id);
    this.proveedores = [];
    for (const id$ in this.proveedores) {
      const p = this.proveedores[id$];
      p.key = id$;
      this.proveedores.push(this.proveedores[id$]);
    }
  }

}
