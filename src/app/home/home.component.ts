import { Component, OnInit } from '@angular/core';

import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  editField: string;
  events: Array<any> = [];
  headers: Set<string> = new Set<string>();

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe(data => this.updateData(data.result));
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.dataService.updateList(id, property, editField).subscribe(data => this.updateData(data.result));
  }

  remove(id: any) {
    this.dataService.removeRow(id).subscribe(data => this.updateData(data.result));
  }

  add() {
    this.dataService.addRow(this.headers).subscribe(data => this.updateData(data.result));
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

  updateData(data) {
    data.forEach(item => {
      Object.keys(item).forEach(key => this.headers.add(key));
    });

    this.events = data;
  }
}
