import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardDesignComponent } from './card-design/card-design.component';
import { CardServiceComponent } from './card-service/card-service.component';

@NgModule({
	declarations: [AppComponent, CardDesignComponent, CardServiceComponent],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
