import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReadListComponent } from './card-read-list.component';

describe('CardReadListComponent', () => {
  let component: CardReadListComponent;
  let fixture: ComponentFixture<CardReadListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardReadListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
