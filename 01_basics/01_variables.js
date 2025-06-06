const accountId = 144553;
let accountEmail = "vaunshika@google.com";
var accountPassword = "12345";
accountCity = "Pune";

// accountId = 2        // not allowed

accountEmail = "vg@r.com";
accountPassword = "212121";
accountCity = "Norway";
let accoutState;

console.log(accountId);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accoutState,
]);

/*
prefer not to using var
because of issue in block scope and functional scope
*/
