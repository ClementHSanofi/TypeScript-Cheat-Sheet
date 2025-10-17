// -----------------------------
// Union & Intersection Types
// -----------------------------

// Union type : Id peut être un nombre ou une chaîne de caractères
type Id = number | string;

// Type avec une propriété 'name'
type Named = { name: string };

// Intersection type : WithId combine les propriétés de Named et ajoute 'id'
type WithId = Named & { id: Id };


// -----------------------------
// Alias vs Interface
// -----------------------------

// Type alias : Coord représente une coordonnée avec x et y
type Coord = { x: number; y: number };

// Interface : HasId représente un objet avec un identifiant de type string
interface HasId {
  id: string;
}


// -----------------------------
// Literal Types
// -----------------------------

// Type littéral : Direction ne peut être que l'une des quatre valeurs
type Direction = "up" | "down" | "left" | "right";

// Exemple d'utilisation
const dir: Direction = "up";