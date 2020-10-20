import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BateauxPage } from './bateaux.page';

describe('BateauxPage', () => {
  let component: BateauxPage;
  let fixture: ComponentFixture<BateauxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BateauxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BateauxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
