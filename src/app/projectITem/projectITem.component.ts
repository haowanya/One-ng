import { Component, OnInit, Inject, OnChanges } from '@angular/core';
import { ProjectITemService } from './projectITem.component.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogData } from '../random/random.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-projectITem',
  templateUrl: './projectITem.component.html',
  styleUrls: ['./projectITem.component.less'],
  providers: [ProjectITemService]
})

export class ProjectITemComponent implements OnInit, OnChanges {
  constructor(public dialog: MatDialog, private router: Router, private routeInfo: ActivatedRoute) {
  }
  flag: boolean = true
  Sushi: string = ''
  ReviewerName: string = ''
  binding: string = this.routeInfo.snapshot.queryParams['name']
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
  emailFormControl = new FormControl('', [
    Validators.required,
  ]);
  matcher = new MyErrorStateMatcher();
  updata(): void {
    console.log('[ emailFormControl ]', this.emailFormControl)
    this.foods.forEach((v, i) => {
      if (v.value === this.binding) {
        this.foods.splice(i, 1);
      }
    });
    this.ReviewerName = this.foods[Math.floor(Math.random() * this.foods.length)].value;
    this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
      data: { name: this.ReviewerName, animal: this.emailFormControl.value },
    });
  }
  BackOff() {
    this.Sushi = ''
    this.router.navigate(['/Random']);
  }
  ngOnInit() { }

  ngOnChanges() { }

}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './bottom-sheet-overview-example-sheet.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
