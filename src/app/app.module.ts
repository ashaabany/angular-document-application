import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { FormResultsComponent } from './search-form/form-results/form-results.component';

const appRoutes: Routes = [
  { path: 'upload-file', component: UploadFileComponent },
  { path: 'search-form', component: SearchFormComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    UploadFileComponent,
    SearchFormComponent,
    FormResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
