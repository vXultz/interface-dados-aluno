export function encontrarMaiorMedia(mediaMaterias) {
  if (mediaMaterias.length === 0) return 0;
  return Math.max(...mediaMaterias);
}