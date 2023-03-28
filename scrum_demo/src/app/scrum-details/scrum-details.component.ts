import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-scrum-details',
  templateUrl: './scrum-details.component.html',
  styleUrls: ['./scrum-details.component.css']
})
export class ScrumDetailsComponent {

  scrumList: any = [];
  id: any;
  type: any;
  personsList: any = [
    {
      value: 1, person: "person 1"
    },
    {
      value: 2, person: "person 2"
    },
    {
      value: 3, person: "person 3"
    },
    {
      value: 4, person: "person 4"
    },
    {
      value: 5, person: "person 5"
    }
  ]
  filterArray: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['scrumList']) {
        const decodedScrumList = JSON.parse(decodeURIComponent(params['scrumList']));
        console.log(decodedScrumList);
        this.scrumList=decodedScrumList
        // Do something with the decoded array...
      }
    });

    // this.scrumList.push({ id: this.id, name: this.type });

    console.log(this.scrumList)
  }

  toShow(val:any){
    this.filterArray=this.scrumList.filter((ele:any)=>{
      return ele.name==val
    })
    console.log(this.filterArray)
  }
}
