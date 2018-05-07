function is_bracket(char) {
  return "([{)]}".includes(char);
}

function is_open(bracket) {
  return "([{".includes(bracket);
}

function opposite(bracket) {
  return "([{"[")]}".indexOf(bracket)];
}

function check_brackets(s) {
  if (typeof s !== "string") {
    return false;
  }
  var stack = [];
  for (var i in s) {
    const char = s[i];
    if (!is_bracket(char)) {
      return false;
    }
    if (is_open(char)) {
      stack.push(char);
    } else {
      var last = stack.pop();
      if (last != opposite(char)) {
        return false;
      }
    }
  }
  return true;
}

console.log(check_brackets("()"));
console.log(check_brackets("([])"));
console.log(check_brackets("([)]"));
console.log(check_brackets("{{([])[()]{}}}"));