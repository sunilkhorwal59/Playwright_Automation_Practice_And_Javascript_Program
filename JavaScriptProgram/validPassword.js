let str = [
  "test@123",
  "Password_22",
  "Human02@",
  "$321322a",
  "Work239life!",
  "tEst8209"
];

str.forEach(password => {

  let hasUpper = /[A-Z]/.test(password);
  let hasLower = /[a-z]/.test(password);
  let hasNumber = /[0-9]/.test(password);
  let hasSpecial = /[^A-Za-z0-9]/.test(password);
  let hasMinLength = password.length >= 8;

  if (hasUpper && hasLower && hasNumber && hasSpecial && hasMinLength) {
    console.log(password);
  }
});