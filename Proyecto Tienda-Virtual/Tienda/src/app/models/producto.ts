export class Producto {
    id?: number;
    nombre: string;
    categoria: string;
    precio: number;
    ubicacion: number;

    constructor(nombre: string, categoria: string, precio: number, ubicacion: number) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
        this.ubicacion = ubicacion;
    }
}
