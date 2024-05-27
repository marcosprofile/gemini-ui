import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoDestaqueComponent } from './texto-destaque.component';

describe('TextoDestaqueComponent', () => {
  let component: TextoDestaqueComponent;
  let fixture: ComponentFixture<TextoDestaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextoDestaqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextoDestaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
