import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_two';
  original_data: { firstName: string, lastName: string, role: string }[] = [
    { firstName: "Virat", lastName: "Kohli", role: "Batsman" },
    { firstName: "MS", lastName: "Dhoni", role: "Captain" },
    { firstName: "Sachin", lastName: "Tendulkar", role: "Batsman" },
    { firstName: "Jasprit", lastName: "Bumrah", role: "Bowler" }
  ];
  data: { firstName: string, lastName: string, role: string }[] = [
    { firstName: "Virat", lastName: "Kohli", role: "Batsman" },
    { firstName: "MS", lastName: "Dhoni", role: "Captain" },
    { firstName: "Sachin", lastName: "Tendulkar", role: "Batsman" },
    { firstName: "Jasprit", lastName: "Bumrah", role: "Bowler" }
  ];
  selectedRole: string = "all";
  roles: string[] = ["Batsman", "Captain", "Bowler"];

  constructor() { }

  ngOnInit(): void {
    this.renderTable(this.data);
  }

  renderTable(filteredData: { firstName: string, lastName: string, role: string }[]): void {
  }

  fetchRoles(): void {
  }

  removeItem(index: number): void {
    this.data.splice(index, 1);
    this.filterData();
  }

  filterData(): void {
    this.data = this.original_data;
    if (this.selectedRole !== "all") {
      this.data = this.data.filter(item => item.role === this.selectedRole);
    }
    else{
      this.data = this.original_data;
    }
  }

  addRole(firstName: string, lastName: string, role: string): void {
    const newItem = { firstName, lastName, role };
    this.data.push(newItem);
    this.filterData();
  }

  onRoleChange(event: string): void {
    this.filterData();
    console.log(event);
  }
}
