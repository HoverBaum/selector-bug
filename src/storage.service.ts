import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  constructor() { }

  public get(options) {
    return Storage.get(options);
  }

  public set(options) {
    return Storage.set(options);
  }
}
