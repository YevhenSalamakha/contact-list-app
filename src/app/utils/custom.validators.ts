import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const baseValidatorFunction = (
  regexp: RegExp,
  patternName: string
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    return !regexp.test(value) ? { [patternName]: true } : null;
  };
};

export const phoneNumberValidator = () => {
  const phoneNumberFormat =
    /(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/g;

  return baseValidatorFunction(phoneNumberFormat, "phoneNumberFormat");
};
