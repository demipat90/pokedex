export const zeroPadNumber = (num, size) => {
  var s = String(num);
  while (s.length < (size || 2)) { s = "0" + s; }
  return s;
}

export const filterByLanguage = (arr, ln) => {
  return arr?.filter(item => item.language.name === ln);
}

export const renderFlavorText = (str) => {
  return str.replaceAll("\f", "\n")
    .replaceAll("\u00ad\n", "")
    .replaceAll("\u00ad", "")
    .replaceAll(" -\n", " - ")
    .replaceAll("-\n", "-")
    .replaceAll("\n", " ");
}
