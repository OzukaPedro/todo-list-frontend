import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { WeekService } from '../../../../core/services/week.service';

@Component({
  standalone: true,
  selector: 'app-week-details',
  templateUrl: './week-details.html',
})
export class WeekDetailsComponent {
  private route = inject(ActivatedRoute);
  private weekService = inject(WeekService);

  private id$ = this.route.paramMap.pipe(
    map(p => Number(p.get('id')))
  );

  week = toSignal(
    this.id$.pipe(
      switchMap(id => this.weekService.findById(id))
    ),
    { initialValue: null }
  );
}
