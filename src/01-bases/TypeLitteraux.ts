// -----------------------------
// Types littéraux simples
// -----------------------------

type Status = "success" | "error" | "loading";

function showStatus(status: Status) {
  console.log(`Statut actuel : ${status}`);
}

showStatus("success"); // OK
// showStatus("pending"); // ❌ Erreur : "pending" n'est pas un Status

// -----------------------------
// Combinaison avec union
// -----------------------------

type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";

function sendRequest(method: HTTPMethod, url: string) {
  console.log(`Envoi d'une requête ${method} vers ${url}`);
}

sendRequest("POST", "/api/data"); // OK

// -----------------------------
// Utilisation avec const
// -----------------------------

const direction = "left"; // Type : "left"
type Direction = "up" | "down" | "left" | "right";

function move(dir: Direction) {
  console.log(`Déplacement vers ${dir}`);
}

move(direction); // OK