import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdzListeComponent } from './Adz-Component/adz-liste/adz-liste.component';
import { AdzRechercheComponent } from './Adz-Component/adz-recherche/adz-recherche.component';



const routes: Routes = [  

  { path: 'recherche/:search', component:AdzListeComponent},
{ path: '**', component: AdzRechercheComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
