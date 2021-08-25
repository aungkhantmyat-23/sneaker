import { Component, OnInit } from '@angular/core';
import { Power1 } from 'gsap/all';
declare let gsap:any;
@Component({
  selector: 'app-jordan-three-section',
  templateUrl: './jordan-three-section.component.html',
  styleUrls: ['./jordan-three-section.component.css']
})
export class JordanThreeSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const timeline = gsap.timeline({
      delay:0.5,
      scrollTrigger:{
        trigger:'.container-1 ',
        start:"top 75%",
        end:"bottom 10%",
        
        toggleActions:"restart complete "
      },
     })
     const container1 = document.querySelectorAll('.container-1'); 
     const appearText = document.querySelectorAll('.appear-text');
     const img2 = document.querySelectorAll('.img2');
     timeline.fromTo(
      container1,
      0.5,
      {x: '-100%',opacity:0},
      {x: '0%',opacity:1},
      {
       ease: Power1.easeIn
      },
    )
    timeline.fromTo(
      appearText,
      0.8,
      {opacity:0},
      {opacity:1,duration:1},
      {
       ease: Power1.easeIn
      },
    )
    timeline.fromTo(
      img2,
      0.7,
      {x: '100%',opacity:0},
      {x: '0%',opacity:1},
      {
       ease: Power1.easeIn
      },
    )
  }

}
