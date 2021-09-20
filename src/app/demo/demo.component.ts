import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    title = 'stores';
  power = 10;
  nombres = ['Rene', 'Felipe', 'Marcela']


  addItem(){
    this.nombres.push("nuevo item")
  }

  deleteItem(index: number){
    this.nombres.splice(index,1)
  }

}
