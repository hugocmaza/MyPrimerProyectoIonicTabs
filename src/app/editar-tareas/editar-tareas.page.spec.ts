import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarTareasPage } from './editar-tareas.page';

describe('EditarTareasPage', () => {
  let component: EditarTareasPage;
  let fixture: ComponentFixture<EditarTareasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarTareasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
