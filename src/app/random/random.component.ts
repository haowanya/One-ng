import { Component, Inject, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  // @Output() ReviewerName: any;
  // @Output() Sushi: any;
  binding: any = 'Amy';
  ReviewerName: string = '';
  Sushi: string = '';
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
  constructor(public dialog: MatDialog) { }
  updata(): void {
    if(this.Sushi){
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width:'500px',
        data: { name: this.ReviewerName, animal: this.Sushi }
      });
    }else{
      alert('JIRA project ID cannot be empty')
    }
  }
  ngOnInit() { }
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
  BackOff(){
    this.isActive='1'
    this.Sushi=''
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './bottom-sheet-overview-example-sheet.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
