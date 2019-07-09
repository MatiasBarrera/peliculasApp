import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Servicio
import { PeliculasService } from './services/peliculas.service';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { UrlImagePipe } from './pipe/url-image.pipe';
import { ShortPPipe } from './pipe/short-p.pipe';

// Routes
import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BusquedaComponent,
    UrlImagePipe,
    ShortPPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES, {useHash: true})
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }

