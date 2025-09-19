import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './job.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent {

  @Input({ required: true }) taskDetail!: Task;
  @Output() completedTask = new EventEmitter<string>();

  onCompletedTask(id: string) {
    this.completedTask.emit(id);
  }

}
