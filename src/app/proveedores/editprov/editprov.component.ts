import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, Form, NgForm } from '@angular/forms';
import { ProveedoresService } from '../../servicios/proveedores.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Proveedor } from 'src/model/proveedor';

@Component({
  selector: 'app-editprov',
  templateUrl: './editprov.component.html',
  styleUrls: ['./editprov.component.css']
})
export class EditprovComponent implements OnInit {
  proveedorForm: FormGroup;
  proveedor: Proveedor;
  nombre: any;
  cif: any;
  direccion: any;
  cp: any;
  localidad: any;
  provincias: string[] = [ 'Álava','Albacete','Alicante','Almería','Asturias','Ávila','Badajoz','Barcelona','Burgos','Cáceres','Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba','La Coruña','Cuenca','Gerona','Granada','Guadalajara','Guipúzcoa','Huelva','Huesca','IslasBaleares','Jaén','León','Lérida','Lugo','Madrid','Málaga','Murcia','Navarra','Orense','Palencia','Las Palmas','Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona','Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora','Zaragoza' ];
  telefono: number;
  email: any;
  contacto: any;
  id: string;

  constructor(private pf: FormBuilder, private proveedorService: ProveedoresService , private router: Router, private activatedRouter: ActivatedRoute) {
    this.proveedor = proveedorService.proveedorU;
  }

  ngOnInit(): void {
    this.proveedorForm = this.pf.group({
      nombre: ['', Validators.required],
      cif: ['', Validators.required],
      direccion: ['', Validators.required],
      cp: ['', Validators.required],
      localidad: ['', Validators.required],
      provincia:['',Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      contacto: ['', Validators.required]
    });
  }

  public onSubmit() {
    this.proveedorService.putProveedorE(this.saveProveedor(),this.proveedorService.id);
    this.router.navigate(['/proveedores']);
  }

  public saveProveedor() {
    const saveProveedor:Proveedor = {
      key:this.proveedor.key,
      nombre: this.proveedorForm.get('nombre').value,
      cif: this.proveedorForm.get('cif').value,
      direccion: this.proveedorForm.get('direccion').value,
      cp: this.proveedorForm.get('cp').value,
      localidad: this.proveedorForm.get('localidad').value,
      provincia: this.proveedorForm.get('provincia').value,
      telefono: this.proveedorForm.get('telefono').value,
      email: this.proveedorForm.get('email').value,
      contacto: this.proveedorForm.get('contacto').value
    };
    return saveProveedor;
  }
}

