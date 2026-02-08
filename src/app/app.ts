import { Component} from '@angular/core';
import { Post } from "./post/post";

@Component({
  selector: 'app-root',
  imports: [Post],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Blog Posts';
}
