import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScrumCreationComponent } from './scrum-creation/scrum-creation.component';
import { ScrumDetailsComponent } from './scrum-details/scrum-details.component';

const routes: Routes = [
  {
    path: '',
    component: ScrumCreationComponent
  },
     
      {
        path: 'main',
        component: ScrumCreationComponent
      },
      {
        path: 'main/details',
        component: ScrumDetailsComponent
      }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
