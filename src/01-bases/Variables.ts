// ==============================
// Déclaration de variables
// ==============================

// Variable mutable : peut être réassignée
let mutable: number = 10;
mutable += 5; // mutable vaut maintenant 15

// Constante : ne peut pas être réassignée
const immutable: string = "Hello, TypeScript!";
// immutable = "Hi!" ❌ Erreur : reassignment interdit

// ==============================
// Annotation de type vs Inférence
// ==============================

// Annotation explicite
let n: number;
n = 42;

// Inférence automatique
let s = "texte"; // TypeScript infère que s est de type string

// ==============================
// Types spéciaux
// ==============================

// Any : désactive le typage (à éviter autant que possible)
let x: any = 3;
x = "string"; // aucun contrôle de type

// Unknown : plus sûr que any, nécessite un "narrowing"
let u: unknown = "ok";
if (typeof u === "string") {
  console.log(u.toUpperCase()); // ✅ narrowing effectué
}

// Void : utilisé pour les fonctions qui ne retournent rien
function log(msg: string): void {
  console.log(msg);
}

// Never : utilisé pour les fonctions qui ne retournent jamais (erreur, boucle infinie, etc.)
function fail(msg: string): never {
  throw new Error(msg);
}

// ==============================
// 🧠 Bonnes pratiques
// ==============================

// ✅ Préférer const par défaut, utiliser let si nécessaire
// ✅ Éviter le type any, préférer unknown ou un typage explicite
// ✅ Utiliser l'inférence quand elle est claire et sûre