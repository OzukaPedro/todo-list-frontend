import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateWeekDTO, Week } from '../models/week.model';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class WeekService {
  private readonly endpoint = '/week';

  constructor(private api: ApiService) {}

  findAll(): Observable<Week[]> {
  return this.api.get<Week[]>(this.endpoint);
}
  findById(id: number): Observable<Week> {
    return this.api.get<Week>(`${this.endpoint}/${id}`);
  }

  create(payload: CreateWeekDTO): Observable<Week> {
    return this.api.post<Week>(this.endpoint, payload);
  }

  update(id: number, payload: Partial<CreateWeekDTO>): Observable<Week> {
    return this.api.put<Week>(`${this.endpoint}/${id}`, payload);
  }

  delete(id: number): Observable<void> {
    return this.api.delete<void>(`${this.endpoint}/${id}`);
  }
}
