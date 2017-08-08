import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './pages/buttons/button.component';
import { GridComponent } from './pages/grid/grid.component';
import { PortletsComponent } from './pages/portlets/portlets.component';
import { TypoComponent } from './pages/typography/typo.component';
import { ChartComponent } from './pages/chart/chart.component';
import { IconsComponent } from './pages/icons/icons.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { MapComponent } from './pages/map/map.component';
import { InboxComponent } from './pages/mailbox/inbox/inbox.component';
import { ComposeMailComponent } from './pages/mailbox/composemail/composemail.component';
import {  BlankComponent} from './pages/system/blank/blank.component';
import { ErrorComponent } from './pages/system/404/404.component';
import { PriceComponent } from './pages/e-commerce/price/price.component';
import { ProductComponent } from './pages/e-commerce/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
     NavBarComponent,
     SideBarComponent,
     HomeComponent,
     FooterComponent,
     ButtonComponent,
     GridComponent,
     PortletsComponent,
     TypoComponent,
     ChartComponent,
     IconsComponent,
     LoginComponent,
     SignUpComponent,
     MapComponent,
     InboxComponent,
     ComposeMailComponent,
     BlankComponent,
     ErrorComponent,
     PriceComponent,
     ProductComponent
  ],
  imports: [
    BrowserModule,
RouterModule.forRoot([
{
  path: '',
  component: HomeComponent
},
{
  path: 'button',
  component: ButtonComponent
},
{
  path: 'grid',
  component: GridComponent
},
{
  path: 'portlets',
  component: PortletsComponent
},
{
  path: 'typography',
  component: TypoComponent
},
{
  path: 'chart',
  component: ChartComponent
},
{
  path: 'icons',
  component: IconsComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'signup',
  component: SignUpComponent
},
{
  path: 'map',
  component: MapComponent
},
{
  path: 'inbox',
  component: InboxComponent
},
{
  path: 'composemail',
  component: ComposeMailComponent
},
{
  path: 'blank',
  component: BlankComponent
},
{
  path: 'error',
  component: ErrorComponent
},
{
  path: 'pricing',
  component: PriceComponent
},
{
  path: 'products',
  component: ProductComponent
},
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }