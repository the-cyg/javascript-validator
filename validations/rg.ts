import { ValidatorInput, ValidatorReturn } from "../types"
import utils from "../utils/utils";
import { specialCharacters } from "./specialCharacters";

export const rg = (input: ValidatorInput): ValidatorReturn => {
  let field = {
    name: input.name,
    valid: false
  }

  if (typeof input.value === 'number') input.value = String(input.value)
  if (typeof input.value !== 'string') return field

  let rg = utils.removeWhiteSpace(input.value)
  field.valid = specialCharacters({ name: 'rg', value: rg }).valid

  return field
}