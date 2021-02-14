import Validatable from "../interfaces/Validatable";

export default function validate(validatableInput: Validatable) {
  let isValid = true;
  const { value } = validatableInput;

  if (validatableInput.required) {
    isValid = isValid && value.toString().trim().length !== 0;
  }
  if (validatableInput.minLength != null && typeof value === "string") {
    isValid = isValid && value.length > validatableInput.minLength;
  }
  if (validatableInput.maxLength != null && typeof value === "string") {
    isValid = isValid && value.length < validatableInput.maxLength;
  }
  if (validatableInput.min != null && typeof value === "number") {
    isValid = isValid && value > validatableInput.min;
  }
  if (validatableInput.max != null && typeof value === "number") {
    isValid = isValid && value < validatableInput.max;
  }

  return isValid;
}
