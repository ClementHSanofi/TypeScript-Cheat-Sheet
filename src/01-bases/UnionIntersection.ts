// -----------------------------
// Union Types
// -----------------------------

type Id = number | string;

function printId(id: Id) {
  console.log(`ID : ${id}`);
}

printId(123);       // OK
printId("abc-456"); // OK

// -----------------------------
// Intersection Types
// -----------------------------

type User = { name: string };
type Admin = { role: "admin" };

type AdminUser = User & Admin;

const admin: AdminUser = {
  name: "Clément",
  role: "admin"
};

function greetAdmin(user: AdminUser) {
  console.log(`Bonjour ${user.name}, vous êtes ${user.role}`);
}

greetAdmin(admin); // OK

// -----------------------------
// Exemple combiné
// -----------------------------

type ErrorResponse = { error: string };
type SuccessResponse = { data: string };

type APIResponse = ErrorResponse | SuccessResponse;

function handleResponse(res: APIResponse) {
  if ("error" in res) {
    console.error("Erreur :", res.error);
  } else {
    console.log("Données :", res.data);
  }
}