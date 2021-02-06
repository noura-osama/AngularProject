import { Component, OnInit } from '@angular/core';
declare var $: any;
import { Blogs } from '../_models/blogs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogs:Blogs[]=[new Blogs("Noura",(new Date ),["tag1","tag2","tag3"], "jkfenkjfhvekjshfejkhdvfkjdvjke cejbdvjej vhjv sedhjvejh",'https://yt3.ggpht.com/a-/AAuE7mDaIPSwLi2eUtSdUZ0Knhmpfg6vTCe09VKiLw=s900-mo-c-c0xffffffff-rj-k-no'),
  new Blogs("Noura",(new Date ),["tag1","tag2","tag3"], "jkfenkjfhvekjshfejkhdvfkjdvjke cejbdvjej vhjv sedhjvejh"),
  new Blogs("Noura",(new Date ),["tag1","tag2","tag3"], "jkfenkjfhvekjshfejkhdvfkjdvjke cejbdvjej vhjv sedhjvejh",'https://yt3.ggpht.com/a-/AAuE7mDaIPSwLi2eUtSdUZ0Knhmpfg6vTCe09VKiLw=s900-mo-c-c0xffffffff-rj-k-no')
  ,new Blogs("Noura",(new Date ),["tag1","tag2","tag3"], "jkfenkjfhvekjshfejkhdvfkjdvjke cejbdvjej vhjv sedhjvejh",'https://yt3.ggpht.com/a-/AAuE7mDaIPSwLi2eUtSdUZ0Knhmpfg6vTCe09VKiLw=s900-mo-c-c0xffffffff-rj-k-no')
]

  constructor() {
    
   }

  ngOnInit(): void {
    
  }

}
