import { Component, OnChanges, SimpleChanges, OnInit, Inject } from '@angular/core';
import { IProjectITemProps, IProjectITemStates, IProjectITemOutput } from './projectITem.component.d';
// import { ReactComponentBase } from '@app/components/reactComponentBase/reactComponentBase.component';
import { ProjectITemService } from './projectITem.component.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogData } from '../random/random.component';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private svc: ProjectITemService, public dialog: MatDialog, private router: Router, private routeInfo: ActivatedRoute) {
  }
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


  updata(): void {
    let data: Food[] = JSON.parse(JSON.stringify(this.foods));
    data.forEach((v, i) => {
      if (v.value === this.binding) {
        data.splice(i, 1);
      }
    });
    this.ReviewerName = data[Math.floor(Math.random() * data.length)].value;
    if (this.Sushi) {
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
        width: '500px',
        data: { name: this.ReviewerName, animal: this.Sushi },
      });
    } else {
      alert('JIRA project ID cannot be empty');
    }
  }
  BackOff() {
    this.Sushi = ''
    this.router.navigate(['/Random']);
  }

  ngOnInit() {
    console.log(this.routeInfo.snapshot.queryParams['name']);

    // this.setStates(this.svc.initDelegate(this.props, this.states));
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.setStates(this.svc.changeDelegate(changes.props.previousValue, changes.props.currentValue, this.states));
  }
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
