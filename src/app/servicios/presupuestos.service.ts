import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Presupuesto } from 'src/model/presupuesto';

@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {
  private myDB: AngularFireList<unknown>;
  public presupuestoU:Presupuesto;
  public id:string;

  constructor(private presupuestosDB: AngularFireDatabase) {
    this.myDB = this.presupuestosDB.list("Presupuestos");
  }

  public addPresupuesto(newPresupuesto: Presupuesto) {
    this.myDB.push(newPresupuesto);
  }

  public getPresupuestos() {
    return this.myDB.snapshotChanges();
  }

  public putPresupuesto(presupuesto:Presupuesto,id:string){
    this.myDB.update(id,{...presupuesto});
  }

  public deletePresupuesto(id:string){
    this.myDB.remove(id);
  }
  
}
