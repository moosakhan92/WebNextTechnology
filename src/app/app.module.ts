import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    PortfolioComponent,
    BlogComponent,
    ContactComponent,
    TestComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([
      {path: "home", component: HomeComponent},
      {path: "about", component: AboutComponent},
      {path: "service", component: ServiceComponent},
      {path: "portfolio", component: PortfolioComponent},
      {path: "blog", component: BlogComponent},
      {path: "contact", component: ContactComponent},
      {path: "**", component: HomeComponent},
      {path: "", component: HomeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
