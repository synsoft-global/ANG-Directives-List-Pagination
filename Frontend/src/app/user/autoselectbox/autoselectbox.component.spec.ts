import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoselectboxComponent } from './autoselectbox.component';

describe('AutoselectboxComponent', () => {
  let component: AutoselectboxComponent;
  let fixture: ComponentFixture<AutoselectboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoselectboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoselectboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
