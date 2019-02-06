var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
import { IPoliciesService } from './services/policies/policies.interface';
import { PoliciesService } from './services/policies';
import { reducers } from './redux/reducers/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { PoliciesEffect } from './redux/effects';
import { PoliciesTableComponent } from './components/policies-table/policies-table.component';
import { PoliciesTailsComponent } from './components/policies-tails/policies-tails.component';
import { FavsModalComponent } from './components/favs-modal/favs-modal.component';
import { FavsListComponent } from './components/favs-list/favs-list.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                NavbarComponent,
                FooterComponent,
                HomeComponent,
                PoliciesTableComponent,
                PoliciesTailsComponent,
                FavsModalComponent,
                FavsListComponent
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
                FormsModule
            ],
            providers: [{
                    provide: IPoliciesService,
                    useClass: PoliciesService
                }],
            entryComponents: [
                FavsModalComponent,
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map