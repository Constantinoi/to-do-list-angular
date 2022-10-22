import { Component, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements DoCheck {
  public taskList: Array<TaskList> = [
    { task: 'Minha nova Task', checked: true },
    { task: 'Minha nova Task 2', checked: false },
  ];

  constructor() {}

  ngDoCheck(): void {
    this.taskList.sort(
      (firt, last) => Number(firt.checked) - Number(last.checked)
    );
  }

  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false });
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }
  public deleteAllTaskList() {
    const confirm = window.confirm('Deseja apagar tudo?');
    if (confirm) {
      this.taskList = [];
    }
  }

  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm('Task Vazia, deletar?');

      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }
}
