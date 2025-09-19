import { Injectable } from "@angular/core";
import { DUMMY_TASKS } from "../shared/dummy-task";

@Injectable({
    providedIn:'root'
})
export class TaskService{
    
    taskDetails = DUMMY_TASKS;

    public selectedUserTask(userId: string) {
        return this.taskDetails.filter((task) => task.userId === userId);
    }

    public onCompletedTask(id: string) {
        this.taskDetails = this.taskDetails.filter((task) => task.id !== id);
    }

    public onAddNewJob(data: any, userId: string) {
        this.taskDetails.unshift({
            id: new Date().getTime().toString(),
            userId: userId,
            title: data.title,
            summary: data.summary,
            dueDate: data.date
        });
    }

}