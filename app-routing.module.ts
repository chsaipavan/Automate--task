import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Note2Component } from './note2/note2.component';
import { Note3Component } from './note3/note3.component';  



const routes: Routes = [
  {path:'note2',component:Note2Component},
  {path:'note3',component:Note3Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
