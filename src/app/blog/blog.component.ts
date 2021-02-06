import { Component, OnInit } from '@angular/core';
import { Blogs } from '../_models/blogs';
import { BlogService } from '../_services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs:Blog[];
  constructor(public blogservice:BlogService) { }

  ngOnInit(): void {
     console.log("done");
     this.blogservice.getAll().subscribe(
       a=>{
         this.blogs=a;
       }
     )
  }

}
