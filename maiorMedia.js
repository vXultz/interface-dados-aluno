export function encontrarMaiorMedia(medias) {
  if (medias.length === 0) {
    return null;
  }

  let maiorMedia = medias[0];

  for (let i = 1; i < medias.length; i++) {
    if (medias[i] > maiorMedia) {
      maiorMedia = medias[i];
    }
  }

  return maiorMedia;
}