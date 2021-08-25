import { Component, OnInit } from '@angular/core';
declare let gsap:any;
@Component({
  selector: 'app-jordan-one-section',
  templateUrl: './jordan-one-section.component.html',
  styleUrls: ['./jordan-one-section.component.css']
})
export class JordanOneSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const tl=gsap.timeline({
      delay:0.5,
      scrollTrigger:{
        trigger:'.appear-text',
        start:"top 95%",
        end:"bottom 80%",
        toggleActions:"restart  restart "
      },
    })
    tl.fromTo(
      '.appear-text',
      {opacity:0},
      {opacity:1,duration:1}
      );


     
  }

}
