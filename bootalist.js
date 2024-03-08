let brut;

fetch(
  'https://hidden-retreat-17646.herokuapp.com/https://brutalist.report/'
).then((response) => {
  response.text().then((text) => {
    brut = text;
  });
});

const root = document.getElementById('root');

root.innerHTML = brut;
