import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { cardServicio } from '../servicios/CardServicio';
import { iCard } from '../interfaces/ICard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-component',
  templateUrl: './tabla-component.component.html',
  styleUrls: ['./tabla-component.component.css']
})
export class TablaComponent implements OnInit {

  public dataList : iCard[]= []



constructor(private router: Router, private dataFind: cardServicio ){

}
  ngOnInit(): void {
    this.dataFind.get().subscribe(data => {
      console.log(data)
      this.dataList = data
    })
  }

  delete(numero: string){
     this.dataFind.delete(numero).subscribe();
    setTimeout(()=>{
      window.location.reload();
    },
      400
    )


  }

}
