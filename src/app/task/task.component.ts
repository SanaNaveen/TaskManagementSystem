import { Component, Input } from '@angular/core';
import { JobComponent } from './job/job.component';
import { DUMMY_TASKS } from '../shared/dummy-task';
import { NewJobComponent } from './new-job/new-job.component';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [JobComponent, NewJobComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  taskDetails = DUMMY_TASKS;

  @Input({required: true}) userDetail!: any;
  isAddingNewJob : boolean = false;

  constructor(private taskService: TaskService) {}

  get selectedUserTask() {
    return this.taskService.selectedUserTask(this.userDetail?.id);
    // return this.taskDetails.filter((task) => task.userId === this.userDetail?.id);
  }

  onCompletedTask(id: string) {
    this.taskService.onCompletedTask(id);
    // this.taskDetails = this.taskDetails.filter((task) => task.id !== id);
  }

  onAddingNewTask() {
    this.isAddingNewJob = true;
  }

  onCancelNewTask(data: boolean) {
    this.isAddingNewJob = data;
  }

  onAddNewJob(data: any) {
    this.taskService.onAddNewJob(data, this.userDetail?.id);
    // this.taskDetails.unshift({
    //   id: new Date().getTime().toString(),
    //   userId: this.userDetail.id,
    //   title: data.title,
    //   summary: data.summary,
    //   dueDate: data.date
    // });
    this.isAddingNewJob = false;
  }

}
