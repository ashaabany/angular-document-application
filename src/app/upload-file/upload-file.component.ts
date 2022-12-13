import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent {

  fileContent: any = '';  

  fileChanged(event: any) {
      const file = event.target.files[0];

      if (file) {
        var reader = new FileReader();
        reader.onload = () => {
            this.fileContent = reader.result;
        };
        reader.readAsText(file);
      }
  }

}
