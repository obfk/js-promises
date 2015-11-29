function get(url) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      }
      else {
        reject(Error(req.statusText));
      }
    };

    req.onerror = function() {
      reject(Error('Network Error'));
    }

    req.send();
  });
}

function addContentToPage(content) {
  var el = document.getElementById('root');
  el.innerHTML = el.innerHTML + content;
}

function getJSON(url) {
  return get(url).then(JSON.parse);
}

getJSON('data/story.json').then(function(story) {
  addContentToPage(story.heading);

  return Promise.all(
    story.chapterUrls.map(getJSON)
  );
}).then(function(chapters) {
  chapters.forEach(function(chapter) {
    addContentToPage(chapter.html);
  });
}).catch(function(err) {
  addContentToPage("Argh, broken: " + err.message);
});
