/**
 * Dessine le score sur le canvas.
 *
 * Cette fonction affiche le score actuel du jeu dans le coin supérieur gauche du canvas.
 * Le score est affiché en noir avec une police Arial de 20px.
 *
 * @param {CanvasRenderingContext2D} ctx - Le contexte de rendu 2D du canvas utilisé pour dessiner.
 * @param {number} score - Le score à afficher, qui est un entier.
 */
export function drawScore(ctx, score) {
  // Couleur et police du texte
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  // Affiche le score en haut à gauche
  ctx.fillText("Score : " + score, 10, 25);

}
