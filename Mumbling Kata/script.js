function accum(s) {
  let acc = 0;
  let string = '';
  let mumble = '';
  for (let i = 0; i < s.length; i++) {
    mumble = s[i].toUpperCase();
    if (acc === 0) {
      acc++;
      string+=mumble;
    } else {
      for (let j = 1; j <= acc; j++) {
        mumble += s[i].toLowerCase();
      }      
      acc++;
      string+= '-'+ mumble;
    }
  }
  return string;
}
