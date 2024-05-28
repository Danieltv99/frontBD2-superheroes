import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaCrudComponent } from './multimedia-crud.component';

describe('MultimediaCrudComponent', () => {
  let component: MultimediaCrudComponent;
  let fixture: ComponentFixture<MultimediaCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultimediaCrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultimediaCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
