import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Proveedor } from 'src/model/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  private myBD: AngularFireList<unknown>;
  public proveedorU:Proveedor;
  public id:string;

  constructor(private proveedorDB: AngularFireDatabase) {
    this.myBD=this.proveedorDB.list("Proveedores");
   }

   /**
  proveedores: any= [
    { nombre: 'Telefónica', 
    cif: 'B12345678', 
    direccion: 'Paseo de la Castellana, 100', 
    cp: '28.010', 
    localidad: 'Madrid', 
    provincia: 'Madrid', 
    telefono: 911111111, 
    email:'info@telefonica.com', 
    contacto: 'Juan Pérez'},
    
    { nombre: 'Iberdrola',
      cif: 'B87654321', 
      direccion: 'Príncipe de Vergara, 200', 
      cp: '28.015', 
      localidad: 'Madrid', 
      provincia: 'Madrid', 
      telefono: 922222222, 
      email: 'info@iberdrola.com', 
      contacto: 'Laura Martínez'}
    ] */

  public addProveedor(newProveedor:Proveedor){
    this.myBD.push(newProveedor);
  }

  public getProveedores(){
    return this.myBD.snapshotChanges();
  }

  public putProveedor(proveedor:Proveedor){
    this.myBD.push(proveedor);
  }

  public putProveedorE(proveedor:Proveedor,id:string){
    this.myBD.update(id,{...proveedor});
  }

  public deleteProveedor(id:string){
    this.myBD.remove(id);
  }

}
