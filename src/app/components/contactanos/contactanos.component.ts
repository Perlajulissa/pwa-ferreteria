import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalstoragesService } from 'src/app/storages/localstorages.service';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private storageService: LocalstoragesService) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.loadStoredData();
  }
  loadStoredData() {
    const storedData = this.storageService.getFormData();

    if (storedData) {
      this.contactForm.patchValue(storedData);
    }
  }
  onSubmit() {
    // Accede a los valores del formulario
    const name = this.contactForm.get('name')?.value;
    const email = this.contactForm.get('email')?.value;
    const message = this.contactForm.get('message')?.value;

    // Guardar datos en el localStorage
    //this.storageService.saveFormData(this.contactForm.value);
    // Guarda datos en localStorage
    const formData = {name,email, message };
    this.storageService.saveFormData(formData);
  }

  clearFormData() {
    // Limpiar datos en el localStorage
    this.storageService.clearFormData();
    this.contactForm.reset();
  }
  get name(){ return this.contactForm.get('name');} 
  get email(){ return this.contactForm.get('email');} 
  get message(){ return this.contactForm.get('message');}
}