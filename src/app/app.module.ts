import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OktaAuthModule } from '@okta/okta-angular';
import { AuthInterceptor } from './shared/okta/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { firebaseConfig } from './api-keys';
import { EditComponent } from './edit/edit.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticlesService } from './shared/articles.service';

const config = {
  issuer: 'https://dev-356571.okta.com/',
  redirectUri: 'https://wiki-693b2.firebaseapp.com/implicit/callback',
  clientId: '0oagxnlysDWOVhpPp356'
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditComponent,
    ArticlesComponent
  ],
  imports: [
    MarkdownModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OktaAuthModule.initAuth(config)
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
