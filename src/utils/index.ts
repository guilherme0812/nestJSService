const PASSWORD_RULE = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{6,24}$/gm
const PASSWORD_RULE_MESSAGE = 'Password must be between 6 and 24 characters long with 1 special character and capital character each'

export const passwordRule = () => {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{6,24}$/gm
}

export const MESSAGES = {
  PASSWORD_RULE_MESSAGE
}