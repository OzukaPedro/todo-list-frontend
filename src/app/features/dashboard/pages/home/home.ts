import { Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Week } from '../../../../core/models/week.model';
import { WeekService } from '../../../../core/services/week.service';

@Component({
  imports: [MatIconModule, RouterModule],
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
})
export class HomeComponent {
updateWeek(id: number,payload: HTMLInputElement) {
throw new Error('Method not implemented.');
}
deleteWeek(id: number) {
  if(!id) {
    throw new Error('Por favor insira um id');
  }
  this.weekService.delete(id).subscribe(()=> {
    this.loadWeeks();
  })
}
  readonly weekService = inject(WeekService);
  weeks = signal<Week[]>([]);

  ngOnInit() {
    this.loadWeeks();
  }

  loadWeeks() {
    this.weekService.findAll().subscribe((res) => {
      this.weeks.set(res);
    });
  }

  createWeek(input: HTMLInputElement) {
    if (!input.value.trim()) return;

    this.weekService.create({ title: input.value }).subscribe(() => {
      input.value = '';
      this.loadWeeks();
    });
  }
}
