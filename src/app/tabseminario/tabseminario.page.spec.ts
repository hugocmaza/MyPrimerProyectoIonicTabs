import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabseminarioPage } from './tabseminario.page';

describe('TabseminarioPage', () => {
  let component: TabseminarioPage;
  let fixture: ComponentFixture<TabseminarioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabseminarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
