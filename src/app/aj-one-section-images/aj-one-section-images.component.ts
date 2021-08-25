import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Component, OnInit } from '@angular/core';
declare let gsap:any;
@Component({
  selector: 'app-aj-one-section-images',
  templateUrl: './aj-one-section-images.component.html',
  styleUrls: ['./aj-one-section-images.component.css']
})
export class AjOneSectionImagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const tl = gsap.timeline({
      delay:0.3,
      scrollTrigger:{
        trigger:'.aj1',
        start:"top center%",
        toggleActions:"restart complete restart complete"
      },
    });
    const aj1 = document.querySelectorAll('.aj1');
    tl.fromTo(aj1,0.5,{y:'40%'},{y:'-10%'})
    .fromTo(aj1[0],1,{opacity:1},{opacity:1})
          .fromTo(aj1[1],1,{opacity:0},{opacity:1})
          .fromTo(aj1[2],1,{opacity:0},{opacity:1})
          .fromTo(aj1[3],1,{opacity:0},{opacity:1})
          .fromTo(aj1[4],1,{opacity:0},{opacity:1})


    
      
    
  }

}
