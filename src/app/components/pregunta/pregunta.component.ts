import { Component } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta';
import { Respuesta } from 'src/app/models/respuesta';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css'],
})
export class PreguntaComponent {
  listPregunta: Pregunta[];

  constructor(public _preguntaService: PreguntaService) {
    this.listPregunta = this._preguntaService.getPreguntas();
  }

  obtenerPregunta() {
    return this.listPregunta[this._preguntaService.indexPregunta]
      .descripcionPregunta;
  }

  respuestaSeleccionada(respuesta: Respuesta, indexRta: number) {
    if (this._preguntaService.pregConfirmada === true) {
      return;
    }
    this._preguntaService.opcionSeleccionada = respuesta;
    this._preguntaService.deshabilitado = false;
    this._preguntaService.indexRespuesta = indexRta;
  }

  AddClassOption(respuesta: Respuesta) {
    if (
      respuesta === this._preguntaService.opcionSeleccionada &&
      !this._preguntaService.pregConfirmada
    ) {
      return 'active: bg-blue-700';
    }

    if (
      respuesta === this._preguntaService.opcionSeleccionada &&
      this._preguntaService.pregConfirmada &&
      this._preguntaService.opcionSeleccionada.esCorrecta === 1
    ) {
      return 'bg-green-400';
    }

    if (
      respuesta === this._preguntaService.opcionSeleccionada &&
      this._preguntaService.pregConfirmada &&
      this._preguntaService.opcionSeleccionada.esCorrecta === 0
    ) {
      return 'bg-red-400';
    }
    return '';
  }

  iconCorrecta(respuesta: Respuesta) {
    if (
      respuesta === this._preguntaService.opcionSeleccionada &&
      this._preguntaService.pregConfirmada &&
      this._preguntaService.opcionSeleccionada.esCorrecta === 1
    ) {
      return true;
    }

    return false;
  }

  iconIncorrecta(respuesta: Respuesta) {
    if (
      respuesta === this._preguntaService.opcionSeleccionada &&
      this._preguntaService.pregConfirmada &&
      this._preguntaService.opcionSeleccionada.esCorrecta === 0
    ) {
      return true;
    }

    return false;
  }
}
