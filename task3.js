function count_repetitions(s) {
  const len = s.length;
  var tmp = "";
  for (var i = 0; i < len; ++i) {
    tmp += s[i];
    const tmp_len = i + 1;
    if (len % tmp_len == 0) {
      const repetitions = len / tmp_len;
      if (s == tmp.repeat(repetitions)) {
        return repetitions;
      }
    }
  }
  return 1;
}

console.log(count_repetitions("asdasdasd"));