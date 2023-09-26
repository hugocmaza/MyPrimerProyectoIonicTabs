import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from '../model/tarea';
import { TareasService } from '../services/tareas.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.page.html',
  styleUrls: ['./modal-editar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule]
})
export class ModalEditarPage implements OnInit {

  @Input() idTarea: number = 0;
  formulario: FormGroup;

  constructor(
    private modalController: ModalController,  private service: TareasService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formulario = formBuilder.group<Tarea>({
      id:0,
      titulo : '',
      fecha:new Date()
    });
    console.log(this.formulario);
    this.formulario.get('titulo')?.addValidators(Validators.required);
   }
  ngOnInit() {
    this.service.getTareabyId(this.idTarea).subscribe((tarea: Tarea)=>{
      console.log('--------------'+tarea.fecha.toLocaleDateString);
      this.formulario.patchValue(tarea);
    });
   }
  async closeModel() {
    const close = 'Modal Removed';
    this.service.updateTarea(this.idTarea,this.formulario.value).subscribe(()=>{

    });
    await this.modalController.dismiss(close);
  }



}
