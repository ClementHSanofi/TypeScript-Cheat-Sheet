// -----------------------------
// Union & Intersection Types
// -----------------------------

// Union type : Id peut être un nombre ou une chaîne de caractères
type Id = number | string;

// Type avec une propriété 'name'
type Named = { name: string };

// Intersection type : WithId combine Named et ajoute 'id'
type WithId = Named & { id: Id };

// Exemple d'utilisation : fonction qui affiche les infos d'une personne
function printWithId(obj: WithId) {
  console.log(`Nom : ${obj.name}, ID : ${obj.id}`);
}

printWithId({ name: "Clément", id: 123 }); // OK
printWithId({ name: "Alice", id: "abc-456" }); // OK


// -----------------------------
// Alias vs Interface
// -----------------------------

// Type alias : Coord représente une coordonnée avec x et y
type Coord = { x: number; y: number };

// Exemple d'utilisation : fonction qui calcule la distance à l'origine
function distanceToOrigin(coord: Coord): number {
  return Math.sqrt(coord.x ** 2 + coord.y ** 2);
}

console.log(distanceToOrigin({ x: 3, y: 4 })); // 5


// Interface : HasId représente un objet avec un identifiant
interface HasId {
  id: string;
}

// Exemple d'utilisation : fonction qui vérifie si l'ID est valide
function isValidId(obj: HasId): boolean {
  return obj.id.length > 0;
}

console.log(isValidId({ id: "xyz123" })); // true
console.log(isValidId({ id: "" }));       // false


// -----------------------------
// Literal Types
// -----------------------------

// Type littéral : Direction ne peut être que l'une des quatre valeurs
type Direction = "up" | "down" | "left" | "right";

// Exemple d'utilisation : fonction qui affiche une direction
function move(dir: Direction) {
  console.log(`Moving ${dir}`);
}

move("up");    // OK
move("left");  // OK
// move("forward"); // ❌ Erreur : "forward" n'est pas une Direction