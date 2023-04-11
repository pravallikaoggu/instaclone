import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { AccountComponent } from './account/account.component';
import { TagComponent } from './tag/tag.component';
import { PlaceComponent } from './place/place.component';
import { TopComponent } from './top/top.component';
import { SearchComponent } from './search/search.component';

const routes:Routes=[
  {
    path:'home',component:HomeComponent
  },
  {
    path:'firstpage',component:FirstpageComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'top',component:TopComponent
  },
  {
    path:'tag',component:TagComponent
  },
  {
    path:'search',component:SearchComponent
  },

  {
    path:'account',component:AccountComponent
  },
  {
    path:'place',component:PlaceComponent
  },
  {
    path:"**",component:NotfoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    HomeComponent,
    FirstpageComponent,
    AccountComponent,
    TagComponent,
    PlaceComponent,
    TopComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
