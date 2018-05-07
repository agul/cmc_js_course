function most_popular(text) {
  text = text.split(/[\s]+/);
  cnt = {};
  for (var i in text) {
    const word = text[i];
    if (word in cnt) {
      cnt[word] += 1;
    } else {
      cnt[word] = 1;
    }
  }
  const kBad = "---";
  var best = kBad;
  var best_cnt = 0;
  for (var word in cnt) {
    const cur_cnt = cnt[word];
    if (cur_cnt == best_cnt) {
      best = kBad;
    }
    else if (cur_cnt > best_cnt) {
      best_cnt = cur_cnt;
      best = word;
    }
  }
  return best;
}


const kText = "Sed tempus ipsum quis eros tempus lacinia Cras finibus lorem ut lacinia egestas nunc nibh iaculis est convallis tincidunt mi mi sed nisl Sed porttitor aliquam elit ullamcorper tincidunt arcu euismod quis Mauris congue elit suscipit leo varius facilisis Cras et arcu sodales laoreet est vitae pharetra orci Integer eget nulla dictum aliquet justo semper molestie neque Maecenas bibendum lacus tincidunt auctor varius purus felis ullamcorper dui et laoreet ligula ex et risus Donec eget fringilla nibh Cras congue tincidunt accumsan Maecenas euismod eleifend elit ut rhoncus tortor sodales a Cras egestas finibus lorem non tempor tincidunt aera";
console.log(most_popular(kText));