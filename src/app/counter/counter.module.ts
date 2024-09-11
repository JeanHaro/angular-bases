import { NgModule } from "@angular/core";

// Componentes
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
  declarations: [
    CounterComponent
  ],
  // Exponer afuera
  exports: [
    CounterComponent
  ]
})
export class CounterModule {

}
