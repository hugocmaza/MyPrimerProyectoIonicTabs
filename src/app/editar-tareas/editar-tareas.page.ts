import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators,ReactiveFormsModule  } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tarea } from '../model/tarea';
import { ActivatedRoute, Router } from '@angular/router';
import { TareasService } from '../services/tareas.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-editar-tareas',
  templateUrl: './editar-tareas.page.html',
  styleUrls: ['./editar-tareas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule ]
})
export class EditarTareasPage implements OnInit {

  formulario: FormGroup;
  id: any;

  constructor(
    private service: TareasService,
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
    this.activatedRoute.params.subscribe((params: any)=>{
      const id = params.id;
      this.service.getTareabyId(id).subscribe((tarea: Tarea)=>{
        console.log('--------------'+tarea.fecha.toLocaleDateString);
        this.formulario.patchValue(tarea);
      });
    });
  }

  updateTarea(){
    console.log('-------'+this.id+'-----'+ this.formulario);
		this.service.updateTarea(this.id,this.formulario.value).subscribe(()=>{
      this.router.navigate(['/tabs/tab1']);
    });
	}



}
