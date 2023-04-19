export class Respuesta {
  nombre: string = '';
  esCorrecta: number = 0;

  constructor(nombre: string, esCorrecta: number) {
    this.nombre = nombre;
    this.esCorrecta = esCorrecta;
  }
}
