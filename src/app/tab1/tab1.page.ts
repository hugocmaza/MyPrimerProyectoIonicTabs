import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { FormBuilder, FormsModule } from '@angular/forms';
import { Router,RouterLinkWithHref } from '@angular/router';
import { Tarea } from '../model/tarea';
import { TareasService } from '../services/tareas.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
})
export class Tab1Page {
  tareas: Tarea[] = [];

  constructor(
    private service: TareasService,
    public formBuilder: FormBuilder, private router: Router)
    { }

  ngOnInit(): void {
    this.service.getAllTareas().subscribe((resp: Tarea[])=>{
      this.tareas = resp;
    });
  }

  borrar(id: number){
    this.service.deleteTarea(id)
    .subscribe((response) => {
      this.ngOnInit();
        this.router.navigate(['/tabs/tab1']);

    });
  }

}
