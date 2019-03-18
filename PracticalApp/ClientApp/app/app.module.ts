import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { AppComponent } from './app.component';
import { Menubar } from './components/menubar/menubar.component';
import { RouterModule } from '@angular/router';
import { NavigationMenu } from './components/navigationmenu/navigationmenu.component';
import { SnotifyService, ToastDefaults } from 'ng-snotify';
import { Ng5BreadcrumbModule } from 'ng5-breadcrumb';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { LocalStorage } from '../shared/Util';
import { AuthGuard } from '../shared/auth.guard';
import { ConfirmEqualValidatorDirective } from '../shared/conformEqualValidator.directive';
import { Login } from './components/login/login.component';
import { AdminService } from '../services/AdminService';
import { SalesItem } from './components/salesitem/salesitem.component';
import { SalesItemService } from '../services/SalesItemService';

let routes = [
   // { path: "", component: Login, canActivate: [AuthGuard]  },
    { path: "login", component: Login },
    { path: "navigationmenu", component: NavigationMenu },
    { path: "menubar", component: Menubar },
    { path: "salesitem", component: SalesItem }

];

@NgModule({
  declarations: [
      AppComponent,
      Login,
      Menubar,
      NavigationMenu,
      ConfirmEqualValidatorDirective,
      SalesItem
     
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      SelectDropDownModule,
      FormsModule,
      HttpModule,
      //TimepickerModule.forRoot(),
      BsDatepickerModule.forRoot(),
      DatepickerModule.forRoot(),
      Ng5BreadcrumbModule.forRoot(),
      RouterModule.forRoot(routes, {
          onSameUrlNavigation: 'reload',
          useHash: true,
          enableTracing: false // for Debugging of the Routes
      }),
    ],

    exports: [RouterModule

    ],

    providers: [
      //  AuthGuard,
        { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
        SnotifyService,
        LocalStorage,
        AuthGuard,
        AdminService,
        SalesItemService
        
        //  NotificationService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
