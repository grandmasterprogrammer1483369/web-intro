function getPhotos(tag) {
  return fetch('/sok?tag=' + tag).then(function(resp) {
    return resp.json();
  });
}

function renderImages(data) {
  let html = '';

  for (let i = 0; i < data.length; i++) {
    const img = data[i];
    html += `
      <figure>
        <img src="${img.url}" />
        <figcaption>${img.title}</figcaption>
      </figure>
    `;
  }

  return html;
}

getPhotos('bekk').then(function(data) {
  const html = renderImages(data);
  document.querySelector('main').innerHTML = html;
});
