
import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { errorServicio } from '../servicios/errrorServicio';
import { validacionServicio } from '../servicios/ValidacionServicio';
import { cardServicio } from '../servicios/CardServicio';
import { iCard } from '../interfaces/ICard';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  @ViewChild('front')
  front!: ElementRef

  @ViewChild('back')
  back!: ElementRef



  public form: FormGroup = this.fb.group({
    numero: ['', [Validators.required,Validators.pattern(this.validacion.validarNumero)]],
    nombre: ['', [Validators.required, Validators.pattern(this.validacion.validarNombre)]],
    expDateMM: ['', Validators.required],
    expDateYY: ['', Validators.required],
    cvv: ['', Validators.required]


  })

  public color: string = "red"




  title = 'SIIentrega';

  constructor(private api: cardServicio ,private validacion:validacionServicio,private servicio:errorServicio, private render2: Renderer2, private fb: FormBuilder) { }


  rotate(): void {

    const rotatesF = this.back.nativeElement
    const rotatesB = this.front.nativeElement
    this.render2.setStyle(rotatesF, 'transform', 'perspective(1000px) rotateY(0deg)')
    this.render2.setStyle(rotatesB, 'transform', 'perspective(1000px) rotateY(180deg)')
  }

  antiRotate(): void {
    const rotatesF = this.back.nativeElement
    const rotatesB = this.front.nativeElement
    this.render2.setStyle(rotatesF, 'transform', 'perspective(1000px) rotateY(180deg)')
    this.render2.setStyle(rotatesB, 'transform', 'perspective(1000px) rotateY(0deg)')
  }

  get dataFind(){
    return this.form.value as iCard
  }



  Cancelar(){
    this.form.reset()
  }


  limpiarCampos() {
    this.form.reset();
  }

  mostrarAnuncio() {
    alert("La tarjeta se registró con éxito");

    setTimeout(() => {
      this.limpiarCampos();
    }, 400);
  }

  submit() {
    if (this.form.invalid) {
        this.form.markAllAsTouched()
        return;

    }
    this.dataFind.vencimiento = this.form.controls['expDateMM'].value + this.form.controls['expDateYY'].value
    this.api.post(this.dataFind).subscribe()

}

validField(field: string) {
   return this.servicio.validate(this.form, field)
}

}
