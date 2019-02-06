import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { IPoliciesService } from './services/policies/policies.interface';
import { PoliciesService } from './services/policies';
import { reducers } from './redux/reducers/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule, Actions} from '@ngrx/effects';
import { HttpClientModule} from '@angular/common/http';
import { PoliciesEffect } from './redux/effects';
import { PoliciesTableComponent } from './components/policies-table/policies-table.component';
import { PoliciesTailsComponent } from './components/policies-tails/policies-tails.component';
import { FavsModalComponent } from './components/favs-modal/favs-modal.component';
import { FavsListComponent } from './components/favs-list/favs-list.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterModalComponent } from './components/filter-modal/filter-modal.component';
import { Ng5SliderModule } from 'ng5-slider';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PoliciesTableComponent,
    PoliciesTailsComponent,
    FavsModalComponent,
    FavsListComponent,
    FilterModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([PoliciesEffect]),
    HttpClientModule,
    NgScrollbarModule,
    ReactiveFormsModule,
    FormsModule,
    Ng5SliderModule
  ],
  providers: [{
    provide: IPoliciesService,
    useClass: PoliciesService
  }],
  entryComponents: [
    FavsModalComponent,
    FilterModalComponent
],
  bootstrap: [AppComponent]
})
export class AppModule { }
