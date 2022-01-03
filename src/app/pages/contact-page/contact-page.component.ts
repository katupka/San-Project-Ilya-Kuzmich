import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  dataForm: FormGroup = this.getDefault()

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  getDefault(): FormGroup {
    return this.fb.group({
      name: ['', []],
      email: ['', []],
      message: ['', []]
    });
  }

  setDefault() {
    this.dataForm = this.getDefault()
    this.openSnackBar("Wysłano!")
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "Ok", {duration: 1000, horizontalPosition: 'center'});
  }

}
