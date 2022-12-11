import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent {
  constructor() { }

  ngOnInit() {
  }


  displayContents: any = '';
  fileName: string = '';
  

  fileChanged(event: any) {
      const file = event.target.files[0];

      if (file) {
        this.fileName = file.name;
        var reader = new FileReader();
        reader.onload = () => {
            this.displayContents = reader.result;
        };
        reader.readAsText(file);

      }
  }




}
