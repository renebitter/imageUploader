import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageUploaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'imageUploader';
}
