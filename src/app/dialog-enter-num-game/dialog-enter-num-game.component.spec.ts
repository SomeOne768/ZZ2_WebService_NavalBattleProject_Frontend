import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEnterNumGameComponent } from './dialog-enter-num-game.component';

describe('DialogEnterNumGameComponent', () => {
  let component: DialogEnterNumGameComponent;
  let fixture: ComponentFixture<DialogEnterNumGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEnterNumGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEnterNumGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
