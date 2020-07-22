import {FileUploader} from 'ng2-file-upload';
import {Injectable} from '@angular/core';

const URL = 'api/books/upload';

@Injectable({providedIn: 'root'})
export class FileUploadingService {

  public uploader: FileUploader;
  public response: string;

  constructor() {
    this.uploader = new FileUploader({
      url: URL,
      formatDataFunction: async (item) => {
        return new Promise((resolve, reject) => {
          resolve({
            name: item.file.name
          });
        });
      }
    });
  }
}
