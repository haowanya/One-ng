import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  MatBottomSheet,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.less'],
})
export class RandomComponent implements OnInit {
  @Output() ReviewerName: any;
  @Output() Sushi: any;
  binding: any = 'Amy';
  // ReviewerName: string = '';
  // Sushi: string = '';
  isActive: string = '1';
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
  constructor(private _bottomSheet: MatBottomSheet) {}
  updata(): void {
    if (this.Sushi) this._bottomSheet.open(BottomSheetOverviewExampleSheet);
    else alert('JIRA project ID cannot be empty');
  }
  ngOnInit() {}
  okBtn() {
    let data = JSON.parse(JSON.stringify(this.foods));
    data.forEach((v: object, i: number) => {
      //@ts-ignore
      if (v.value === this.binding) {
        data.splice(i, 1);
      }
    });
    this.ReviewerName = data[Math.floor(Math.random() * data.length)].value;
    this.isActive = '2';
  }
  // updata() {
  //   if (this.Sushi)
  //     alert(
  //       `Congratulation! ${this.ReviewerName} was chosed as the reviewer of PRSM-${this.Sushi} !". (${this.ReviewerName} is the reviewer's name, PRSM-${this.Sushi} is the JIRA item ID)`
  //     );
  //   else alert('JIRA project ID cannot be empty');
  // }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: './bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>
  ) {}
  @Input() ReviewerName: string = '';
  @Input() Sushi: string = '';
  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
