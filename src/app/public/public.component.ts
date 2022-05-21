import { Component, OnInit } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TokenStorageService} from "../service/token-storage.service";
import {ModalService} from "../service/modal.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss'],
  providers: [AuthService]
})
export class PublicComponent implements OnInit {

  private bodyText: string | undefined;
  title = 'frontend';
  submitted = false;
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  isLoggedIn = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService,
              private tokenStorage: TokenStorageService,
              private modalService: ModalService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.bodyText = '';
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  openModal(id: string) {
    console.info('abriendo modal {}', id);
    this.modalService.open(id);
  }

  closeModal(id: string) {
    console.info('cerrando', id);
    this.modalService.close(id);
  }

  onError(id: string, errorMessage: string) {
    this.modalService.onError(id, errorMessage);
  }

  onSubmit(): void {
    this.submitted = true;
    if(!this.loginForm.invalid) {
      this.authService.login(this.f['username'].value,
        this.f['password'].value).subscribe(
        data => {
          this.tokenStorage.saveToken(data.token);
          this.tokenStorage.saveUser(data);

          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
          this.router.navigate(['/private']);
        },
        error => {
          this.errorMessage = error.error.message;
          this.onError('login-modal', 'Usuario/Password incorrecto');
        }
      )
    }
  }

}
