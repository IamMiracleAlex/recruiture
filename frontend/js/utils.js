/* --------------------------------------- */
/*              Dom Helpers                */
/* --------------------------------------- */
function get(name, from = document) {
  if (from.querySelector(name)) return from.querySelector(name);
  throw new Error(`The specified element ${name} was not found`);
}

function getAll(name, from = document) {
  if (from.querySelectorAll(name)) return [...from.querySelectorAll(name)];
  return [];
}

// the navigate function (find in blog cards,employer success modal btn and etc...)
function navigate(url) {
  location.assign(url);
}
