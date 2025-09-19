import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-job',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-job.component.html',
  styleUrl: './new-job.component.css'
})
export class NewJobComponent {

  enteredTitle: string = '';
  enteredSummary: string = '';
  enteredDate: string = '';

  @Output() isCancelTask = new EventEmitter<boolean>();
  @Output() addJob = new EventEmitter<{title : string, summary: string, date: string}>();

  onCancelTask() {
    this.isCancelTask.emit(false);
  }

  onSubmit() {
    this.addJob.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    });
  }

}
