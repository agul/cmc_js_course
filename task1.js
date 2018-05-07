function bin2dec(binary) {
  if (typeof binary !== 'string') {
    return undefined;
  }
  var result = 0;
  for (var i in binary) {
    const cur_char = binary[i];
    result *= 2;
    if (cur_char === '1') {
      result += 1;
    }
    else if (cur_char !== '0') {
      return undefined;
    } 
  }
  return result;
}


console.log(bin2dec('1011'));