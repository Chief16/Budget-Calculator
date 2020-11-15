import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.scss']
})
export class AddItemFormComponent implements OnInit {

  @Input() item: BudgetItem;
  @Output() formSubmit: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  isItemNew: boolean;

  constructor() { }

  ngOnInit(): void {
    if(this.item){
      this.isItemNew = false;
    }else{
      this.isItemNew = true;
      this.item = new BudgetItem("", null)
    }
  }

  onSubmit(form : NgForm){
    this.formSubmit.emit(form.value)
    form.reset();
  }
}
