import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emiItemTaskList = new EventEmitter();

  public addTaskItemList: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList() {
    if (this.addTaskItemList.trim()) {
      this.emiItemTaskList.emit(this.addTaskItemList);
      this.addTaskItemList = "";
    }
  }
}
