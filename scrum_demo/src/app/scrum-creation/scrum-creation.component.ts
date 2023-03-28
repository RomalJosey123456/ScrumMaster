import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scrum-creation',
  templateUrl: './scrum-creation.component.html',
  styleUrls: ['./scrum-creation.component.css']
})
export class ScrumCreationComponent implements  OnInit {
  
  name:any;
  point:any;
  scrumList: any=[];
  check: boolean=false;

  constructor(private router: Router){

  }


  ngOnInit(): void {
    console.log( this.scrumList)
  }
 
  toAdd(){
    this.scrumList.push({ id: this.name, name: this.point });
    const findDuplicatesById = (arr:any) => {
      return arr.filter((value:any, index:any) => {
        return arr.some((item:any, i:any) => {
          return item.id === value.id && i !== index;
        });
      });
    };


 console.log( this.scrumList)


const duplicates = findDuplicatesById(this.scrumList);

console.log(duplicates)

if(duplicates.length>0){
     this.check=true
     this.name='';
     this.point=''
}
else{
  this.check=false;
  const encodedScrumList = encodeURIComponent(JSON.stringify(this.scrumList));
  this.router.navigate(['/main/details'], { queryParams: { scrumList: encodedScrumList } });
}
 
 
   
  }
}
