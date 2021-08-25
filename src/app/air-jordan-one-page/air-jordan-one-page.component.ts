import { Component, OnInit } from '@angular/core';
declare let gsap:any;

@Component({
  selector: 'app-air-jordan-one-page',
  templateUrl: './air-jordan-one-page.component.html',
  styleUrls: ['./air-jordan-one-page.component.css']
})
export class AirJordanOnePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const timeline = gsap.timeline({
      delay:0.5,
      scrollTrigger:{
        trigger:'.description',
        start:"top 75%",
        end:"bottom 25%",
        
        toggleActions:"restart complete restart complete"
      },
     })
     timeline.staggerFrom(
       '.description',
       0.7,
       { x: '-100%'},{x:'100%'} ,
      
       );
  }

}
