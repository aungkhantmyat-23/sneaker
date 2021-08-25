import { Component, OnInit } from '@angular/core';
import { Power1 } from 'gsap/all';
declare let gsap:any;
@Component({
  selector: 'app-bottom-section',
  templateUrl: './bottom-section.component.html',
  styleUrls: ['./bottom-section.component.css']
})
export class BottomSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const timeline = gsap.timeline({
      delay:0.5,
      scrollTrigger:{
        trigger:'.appeartext',
        start:"top 95%",
        end:"bottom 80%",
        toggleActions:"restart  restart "
      },
     })
     const appearText = document.querySelectorAll('.appeartext'); 
     timeline.fromTo(
      appearText,
      {opacity:0},
      {opacity:1,duration:1}
      );
  }

}
