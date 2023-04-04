import React from "react";
import { Exo_interface } from "./exos";

export const exo_pokemon: Exo_interface = {
  name: "Pokémon",
  description: (
    <div>Base de données contenant les pokémons de la 1ère génération.</div>
  ),
  db_url:
    "https://raw.githubusercontent.com/cpge-exercices/sql/main/db/world.sql",
  diagram: "642c778b5758ac5f1726bc6c",
  questions: [
    "Afficher tous les noms de pays.",
  ],
  answers: [
    "SELECT nom FROM pays"
  ],
};
