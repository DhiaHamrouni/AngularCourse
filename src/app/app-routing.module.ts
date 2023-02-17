import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { DetailsComponent } from './details/details.component';
import { FormProductComponent } from './form-product/form-product.component';
import { HomeComponent } from './home/home.component';
import { OffreEmploiComponent } from './offre-emploi/offre-emploi.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'', redirectTo:'/products',pathMatch:'full'},
  {path:'products', component:ProductComponent},
  {path:'offres',component:OffreEmploiComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'saveproduct',component:FormProductComponent},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
