export const removeAccents = (text: string) => {
  var noAccentValue = text;
  // noAccentValue = noAccentValue.replace(new RegExp("\\s", 'g'),"");
  noAccentValue = noAccentValue.replace(new RegExp("[àáâãäå]", 'g'),"a");
  noAccentValue = noAccentValue.replace(new RegExp("æ", 'g'),"ae");
  noAccentValue = noAccentValue.replace(new RegExp("ç", 'g'),"c");
  noAccentValue = noAccentValue.replace(new RegExp("[èéêë]", 'g'),"e");
  noAccentValue = noAccentValue.replace(new RegExp("[ìíîï]", 'g'),"i");
  noAccentValue = noAccentValue.replace(new RegExp("ñ", 'g'),"n");                            
  noAccentValue = noAccentValue.replace(new RegExp("[òóôõö]", 'g'),"o");
  noAccentValue = noAccentValue.replace(new RegExp("œ", 'g'),"oe");
  noAccentValue = noAccentValue.replace(new RegExp("[ùúûü]", 'g'),"u");
  noAccentValue = noAccentValue.replace(new RegExp("[ýÿ]", 'g'),"y");
  // noAccentValue = noAccentValue.replace(new RegExp("\\W", 'g'),"");
  return noAccentValue;
};