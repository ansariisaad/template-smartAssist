import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  view(page:any){
    this.router.navigate(["../Admin/"+page]); 
  }

  view2(page:any,status:any,title:any){ 
    this.router.navigate(['../Admin/'+page,{ type: status,title:title }]).then(() => { 
      window.scroll({ top: 0,  left: 0, behavior: 'smooth'  });
    });  
  }
  

} 