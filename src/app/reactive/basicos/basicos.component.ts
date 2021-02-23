import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre     : new FormControl('RTX 4080ti'),
  //   precio     : new FormControl(1500),
  //   existencias: new FormControl(5),
  // })

  miFormulario: FormGroup = this.fb.group({
    nombre: [ , [ Validators.required, Validators.minLength(3) ]   ],
    precio: [ , [ Validators.required, Validators.min(0)] ],
    existencias: [ , [ Validators.required, Validators.min(0)] ],
  })

  constructor( private fb: FormBuilder ) { }

  ngOnInit() {
    // no utilizamos this.miFormulario.setValue porque
    // se necesita que hay definir todos los campos 
    // del objeto. es mejor utilizar reset() porque solo
    // tratamos los campos que queremos
    this.miFormulario.reset({
      nombre: 'RTX 4080ti',
      precio: 1600
    })
  }


  campoEsValido( campo: string ) {

    return this.miFormulario.controls[campo].errors 
            && this.miFormulario.controls[campo].touched;
  }

  guardar() {

    if ( this.miFormulario.invalid )  {
      // simulamos que el usuario ha entrado en todos los campos
      // y así se muestran todos los errores de una vez.
      this.miFormulario.markAllAsTouched();
      return;
    }


    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }



}
