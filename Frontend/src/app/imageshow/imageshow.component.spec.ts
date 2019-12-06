import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageshowComponent } from './imageshow.component';

describe('ImageshowComponent', () => {
  let component: ImageshowComponent;
  let fixture: ComponentFixture<ImageshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
