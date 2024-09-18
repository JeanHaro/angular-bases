import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes
import { DbzMainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { FormCreateCharacterComponent } from './components/form-create-character/form-create-character.component';

@NgModule({
  declarations: [
    DbzMainPageComponent,
    ListComponent,
    FormCreateCharacterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DbzMainPageComponent
  ]
})
export class DbzModule { }
