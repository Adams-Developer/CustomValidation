import { Validators, FormControl } from '@angular/forms';
import { UsernameValidator } from './username.validator';

export class CustomValidationModel {
    username: string;
    password: string;

    passwordValidation = new FormControl([Validators.required, Validators.minLength(3)]);
    usernameValidation = new FormControl(Validators.required, UsernameValidator.cannotContainSpace)
}

