import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  fullName: string = '';
  email: string = '';
  phone: string = '';
  address: string = '';
  summary: string = '';
  experience: string = '';
  education: string = '';
  skills: string = '';
}
