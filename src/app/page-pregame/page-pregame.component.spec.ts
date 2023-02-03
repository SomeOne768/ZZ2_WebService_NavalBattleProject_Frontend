import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePregameComponent } from './page-pregame.component';

describe('PagePregameComponent', () => {
  let component: PagePregameComponent;
  let fixture: ComponentFixture<PagePregameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePregameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePregameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
