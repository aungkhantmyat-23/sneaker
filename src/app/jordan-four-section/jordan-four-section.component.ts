import { Component, OnInit } from '@angular/core';
import { Power1 } from 'gsap/all';
declare let gsap:any;
@Component({
  selector: 'app-jordan-four-section',
  templateUrl: './jordan-four-section.component.html',
  styleUrls: ['./jordan-four-section.component.css']
})
export class JordanFourSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const timeline = gsap.timeline({
      delay:0.5,
      scrollTrigger:{
        trigger:'.title-1 ',
        start:"top 75%",
        end:"bottom 10%",
        toggleActions:"restart complete "
      },
     })
     const title1 = document.querySelectorAll('.title-1'); 
     const title2 = document.querySelectorAll('.title-2'); 
     const threeborder1 = document.querySelectorAll('.tb1'); 
     const threeborder2 = document.querySelectorAll('.tb2'); 
     const threefill = document.querySelectorAll('.tf'); 
     const contentappear = document.querySelectorAll('.content-appear');
     timeline.fromTo(
       title1,
       0.3,
       {x: '-100%',opacity:0},
       {x: '0%',opacity:1},
       {
        ease: Power1.easeIn
       },
     )
     timeline.fromTo(
      title2,
      0.3,
      {x: '-100%',opacity:0},
      {x: '0%',opacity:1},
      {
        ease: Power1.easeIn
      },
    )
     timeline.from(
      threeborder1,
      0.15,
      {x: '-100%',opacity:0},
      {x: '100%',opacity:1},
      {
        rotation:200,
        transformOrigin:"50% 50%",
        ease: Power1.easeIn
      },
    )
    timeline.from(
      threeborder2,
      0.45,
      {x: '-100%',opacity:0},
      {x: '100%',opacity:1},
      {
        rotation:200,
        transformOrigin:"50% 50%",
        ease: Power1.easeIn
      },
    )
    timeline.from(
      threefill,
      0.2,
      {x: '-100%',opacity:0},
      {x: '100%',opacity:1},
      {
        rotation:200,
        transformOrigin:"50% 50%",
        ease: Power1.easeInOut,
      },
    )
    timeline.fromTo(
      contentappear,
      {opacity:0},
      {opacity:1,duration:1}
      );
  }

}
