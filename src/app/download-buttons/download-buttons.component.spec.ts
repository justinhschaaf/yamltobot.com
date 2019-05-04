import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadButtonsComponent } from './download-buttons.component';

describe('DownloadButtonsComponent', () => {
  let component: DownloadButtonsComponent;
  let fixture: ComponentFixture<DownloadButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
