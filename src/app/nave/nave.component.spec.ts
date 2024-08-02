import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaveComponent } from './nave.component';

describe('NaveComponent', () => {
  let component: NaveComponent;
  let fixture: ComponentFixture<NaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
