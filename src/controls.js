/**
 * Gère le changement de direction du serpent en fonction de l'entrée de l'utilisateur.
 *
 * Cette fonction est appelée chaque fois qu'une touche directionnelle est pressée.
 * Elle vérifie que la nouvelle direction n'est pas opposée à la direction actuelle
 * (pour éviter que le serpent se retourne sur lui-même) et retourne la nouvelle direction
 * si elle est valide.
 *
 * @param {KeyboardEvent} event - L'événement clavier qui contient les informations sur la touche pressée.
 * @param {string} currentDirection - La direction actuelle du serpent (peut être "UP", "DOWN", "LEFT", ou "RIGHT").
 * @returns {string} - La nouvelle direction du serpent après traitement, ou la direction actuelle si le changement n'est pas valide.
 */
export function handleDirectionChange(event, currentDirection) {
  const key = event.key    // key vaut maintenant "ArrowUp", "ArrowDown", "ArrowLeft" ou "ArrowRight"
  if (key === "ArrowUp" && currentDirection !== "DOWN"){     // Vérification de la touche et vérifier si ce n'est pas un demi tour
    currentDirection = "UP"
  }
  else if (key === "ArrowDown" && currentDirection !== "UP"){
    currentDirection = "DOWN"
  }
  else if (key === "ArrowLeft" && currentDirection !== "RIGHT"){
    currentDirection = "LEFT"
  }
  else if (key === "ArrowRight" && currentDirection !== "LEFT"){
    currentDirection = "RIGHT"
  }
  return currentDirection    // retourne la bonne direction
}
