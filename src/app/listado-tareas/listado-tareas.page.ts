import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.page.html',
  styleUrls: ['./listado-tareas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ListadoTareasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
