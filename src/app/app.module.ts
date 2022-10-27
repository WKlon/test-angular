import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
} from '@taiga-ui/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { CardFormComponent } from './card-form/card-form.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardStyleDirective } from './directive/card-style.directive';
import { CardsFilterPipe } from './pipes/cards-filter.pipe';
import { TestFormComponent } from './test-form/test-form.component';
import { CreateComponent } from './pages/create/create.component';
import { MatMenuModule } from '@angular/material/menu';
import { ReadComponent } from './pages/read/read.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { AddDialogComponent } from './add-dialog/add-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { CardReadListComponent } from './card-read-list/card-read-list.component';
import { CardReadItemComponent } from './card-read-item/card-read-item.component';
import { ViewDialogComponent } from './view-dialog/view-dialog.component';
registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardFormComponent,
    CardListComponent,
    CardStyleDirective,
    CardsFilterPipe,
    TestFormComponent,
    CreateComponent,
    ReadComponent,
    NavComponent,
    AddDialogComponent,
    CardReadListComponent,
    CardReadItemComponent,
    ViewDialogComponent,
  ],
  entryComponents: [AddDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSliderModule,
    MatInputModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatBadgeModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatSortModule,
    MatSelectModule,
  ],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
  bootstrap: [AppComponent],
})
export class AppModule {}
