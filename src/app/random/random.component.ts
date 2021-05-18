import { Component,OnInit} from '@angular/core';
import { Router } from "@angular/router";

interface Food {
  value: string;
  viewValue: string;
}
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.less'],
})
export class RandomComponent implements OnInit {
  ReviewerName: string = '';
  Sushi: string = '';
  binding: string = 'Xiaohang';
  foods: Food[] = [
    { value: 'Xiaohang', viewValue: 'Xiaohang' },
    { value: 'Amy', viewValue: 'Amy' },
    { value: 'Charles', viewValue: 'Charles' },
    { value: 'David', viewValue: 'David' },
    { value: 'Alice', viewValue: 'Alice' },
    { value: 'Jack', viewValue: 'Jack' },
    { value: 'Chris', viewValue: 'Chris' },
    { value: 'Taolue', viewValue: 'Taolue' },
  ];
  constructor(private router: Router) { }

  ngOnInit() { }
  okBtn() {
    this.router.navigate(['/ProjectITem'], { queryParams: { name: this.binding } });

  }

}


