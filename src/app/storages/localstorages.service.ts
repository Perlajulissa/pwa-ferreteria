import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstoragesService {
  constructor() { }
  
  saveFormData(formData: any) {
    localStorage.setItem('contactFormData', JSON.stringify(formData));
  }

  getFormData() {
    const storedData = localStorage.getItem('contactFormData');
    return storedData ? JSON.parse(storedData) : null;
  }

  clearFormData() {
    localStorage.removeItem('contactFormData');
  }
  
}
