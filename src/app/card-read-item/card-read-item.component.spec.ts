import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReadItemComponent } from './card-read-item.component';

describe('CardReadItemComponent', () => {
  let component: CardReadItemComponent;
  let fixture: ComponentFixture<CardReadItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardReadItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReadItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
