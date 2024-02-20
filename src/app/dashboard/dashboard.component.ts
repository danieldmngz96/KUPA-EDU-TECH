import { Component, OnInit } from '@angular/core';
import data from '../../assets/classes.json';
import { DashboardService } from './../services//dashboard.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  classes:any[] = [];

  constructor(private dash: DashboardService,
    private auth: AuthService,) { }

  ngOnInit(): void {
    this.getdataClases();
   }

  async getdataClases() {


    this.dash.getClass().subscribe(
      (res: any) => {
        console.log(res);
        this.classes = res
        console.log(res);
        console.log(res.token);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }


}
