import { Component, OnInit } from '@angular/core';
declare let $:any;
declare let gsap:any;
@Component({
  selector: 'app-home-heading',
  templateUrl: './home-heading.component.html',
  styleUrls: ['./home-heading.component.css']
})
export class HomeHeadingComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    const logo = document.querySelectorAll("path");
    for(let i=0; i< logo.length; i++){
      console.log(`${i} ${logo[i].getTotalLength()}`)
    }

    const tl=gsap.timeline({
      default:{ease :'power1.out'}
    })
    tl.to('.text',{
      y:"0%", duration:1, stagger: 0.25
     });
    tl.to('.slider',{
      y:"-100%",duration:1.5,delay:2.5
    });
    tl.to('.intro',{
      y:"-100%",duration:1.2
    },"-=1");
    tl.fromTo('nav',{
      opacity:0
      },{
        opacity:1,
        duration:1
      }
    );
    tl.fromTo('.big-text',{
      opacity:0
      },{
        opacity:1,
        duration:1
      }
    );
    
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "35%";
  }
  
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
}
