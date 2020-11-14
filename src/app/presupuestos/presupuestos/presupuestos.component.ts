import { Component, OnInit } from '@angular/core';
import { PresupuestosService } from '../../servicios/presupuestos.service';
import { Presupuesto } from 'src/model/presupuesto';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent implements OnInit {
  presupuestos: any[] = [];
  public presupuestoUp:Presupuesto;
  public id:string;

  constructor(private presupuestosService: PresupuestosService) {
    this.presupuestosService.getPresupuestos()
      .subscribe(presupuestos => {
        presupuestos.forEach((everypresupuesto)=>{
          this.presupuestos.push({
            key:everypresupuesto.key,
            ...everypresupuesto.payload.val() as Presupuesto
          })
        })
      })
  }

  ngOnInit(): void {
  }

  public getPresupuesto(pres:Presupuesto,id:string){
    this.presupuestoUp=pres;
    this.presupuestosService.presupuestoU=pres;
    this.presupuestosService.id=id;
  }

  public eliminarPresupuesto(id:string){
    this.presupuestosService.deletePresupuesto(id);
    this.presupuestos=[];
    for(const id$ in this.presupuestos){
      const p=this.presupuestos[id$];
      p.key=id$;
      this.presupuestos.push(this.presupuestos[id$]);
    }
  }
}
