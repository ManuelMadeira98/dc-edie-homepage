import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { CardDesignComponent } from './card-design/card-design.component';
import { CardServiceComponent } from './card-service/card-service.component';
import { ContactInputComponent } from './contact-input/contact-input.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ResetTabindexDirective } from './reset-tabindex.directive';
import { NoBackgroundScrollDirective } from './no-background-scroll.directive';

@NgModule({
	declarations: [AppComponent, CardDesignComponent, CardServiceComponent, ContactInputComponent, NavigationComponent, ResetTabindexDirective, NoBackgroundScrollDirective],
	imports: [BrowserModule, LayoutModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
