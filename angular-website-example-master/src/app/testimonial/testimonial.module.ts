import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimonialRoutingModule } from './testimonial-routing.module';

import { TestimonialPageComponent } from './testimonial-page/testimonial-page.component';


@NgModule({
  declarations: [
    TestimonialPageComponent
  ],
  imports: [
    CommonModule,
    TestimonialRoutingModule
  ]
})
export class TestimonialModule { }
