import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonModal, IonicModule, ModalController } from '@ionic/angular';
import { ModalEditarPage } from '../modal-editar/modal-editar.page';
import { Router } from '@angular/router';
import { Tarea } from '../model/tarea';
import { TareasService } from '../services/tareas.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tabseminario',
  templateUrl: './tabseminario.page.html',
  styleUrls: ['./tabseminario.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, HttpClientModule]
})
export class TabseminarioPage implements OnInit {

  @ViewChild(IonModal)
  modal?: IonModal ;
  message = 'hol';
  name = 'nnnn';
  tareas: Tarea[] = [];

  constructor(private service: TareasService,  private router: Router,public modalController: ModalController) { }

  ngOnInit(): void {
    this.service.getAllTareas().subscribe((resp: Tarea[])=>{
      this.tareas = resp;
    });
  }

  async openIonModal(id: number) {
    const modal = await this.modalController.create({
      component: ModalEditarPage,
      componentProps: {
        idTarea: id
      }
    });
    modal.onDidDismiss().then((modelData) => {
      if (modelData !== null) {

        console.log('Modal Data : ' + modelData.data);
        this.ngOnInit();

      }
    });
    return await modal.present();
  }



}
