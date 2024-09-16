import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { DbzMainPageComponent } from './pages/main-page.component';



@NgModule({
  declarations: [
    DbzMainPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DbzMainPageComponent
  ]
})
export class DbzModule { }
