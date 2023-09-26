import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoTareasPage } from './listado-tareas.page';

describe('ListadoTareasPage', () => {
  let component: ListadoTareasPage;
  let fixture: ComponentFixture<ListadoTareasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListadoTareasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
