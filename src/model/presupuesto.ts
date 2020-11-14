export interface Presupuesto{
    key?:any,
    proveedor:string,
    fecha:Date,
    concepto:string,
    base:number,
    tipo:any,
    iva:number,
    total:number
}