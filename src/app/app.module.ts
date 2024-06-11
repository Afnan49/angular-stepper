import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CdkStepperModule } from '@angular/cdk/stepper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepperComponent } from './stepper/stepper.component';
import { InformationComponent } from './shard/information/information.component';
import { ContactComponent } from './shard/contact/contact.component';
import { SecurityComponent } from './shard/security/security.component';
import { FinishComponent } from './shard/finish/finish.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    InformationComponent,
    ContactComponent,
    SecurityComponent,
    FinishComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CdkStepperModule, FormsModule],
  exports: [CdkStepperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
