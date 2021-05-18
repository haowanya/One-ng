import { Component, Inject, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";

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
  binding: string = 'Amy';
  foods: Food[] = [
    { value: 'Amy', viewValue: 'Amy' },
    { value: 'Xiaohang', viewValue: 'Xiaohang' },
    { value: 'Charles', viewValue: 'Charles' },
    { value: 'David', viewValue: 'David' },
    { value: 'Alice', viewValue: 'Alice' },
    { value: 'Jack', viewValue: 'Jack' },
    { value: 'Chris', viewValue: 'Chris' },
    { value: 'Taolue', viewValue: 'Taolue' },
  ];
  animalControl = new FormControl('', Validators.required);
  constructor(private routeInfo: ActivatedRoute, private router: Router) { }

  ngOnInit() { }
  okBtn() {
    this.router.navigate(['/ProjectITem'], { queryParams: { name: this.binding } });

  }

}


