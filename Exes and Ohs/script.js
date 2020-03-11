function XO(str) {
  var bool = true;
  let lowerStr = str.toLowerCase();
  if (str.indexOf('o') === -1 && str.indexOf('x') === -1) {
    console.log('neither o or x found!');
  } else {
    let xs = 0;
    let os = 0;
    for (var i = 0; i < lowerStr.length; i++) {
      (lowerStr[i] === 'o') ? os++ : (lowerStr[i] === 'x') ? xs++ : console.log('nothing');
    }

      (xs !== os) ? bool = false : bool = true; 
  }

  return bool;
}
