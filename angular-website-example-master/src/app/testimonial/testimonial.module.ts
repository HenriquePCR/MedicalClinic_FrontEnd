import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimonialRoutingModule } from './testimonial-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestimonialPageComponent } from './testimonial-page/testimonial-page.component';


@NgModule({
  declarations: [
    TestimonialPageComponent
  ],
  imports: [
    CommonModule,
    TestimonialRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TestimonialModule { }
