import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearTareasPage } from './crear-tareas.page';

describe('CrearTareasPage', () => {
  let component: CrearTareasPage;
  let fixture: ComponentFixture<CrearTareasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrearTareasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
