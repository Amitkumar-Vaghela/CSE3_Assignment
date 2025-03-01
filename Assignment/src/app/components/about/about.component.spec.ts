// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { AboutComponent } from './about.component';

// describe('AboutComponent', () => {
//   let component: AboutComponent;
//   let fixture: ComponentFixture<AboutComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [AboutComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(AboutComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  team = [
    { name: 'Amit Vaghela', role: 'Founder & CEO', image: 'assets/team1.jpg' },
    { name: 'Jane Doe', role: 'CTO', image: 'assets/team2.jpg' },
    { name: 'John Smith', role: 'Lead Developer', image: 'assets/team3.jpg' }
  ];
}
