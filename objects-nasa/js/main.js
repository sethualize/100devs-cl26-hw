//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getPic)

function getPic() {
  let picDate = document.querySelector('input').value

  fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data)
      document.querySelector('img').src = data.url
      document.querySelector('h2').innerHTML = data.title
      document.querySelector('h3').innerHTML = data.explanation
    })
    .catch((err) => {
      console.log(`error ${err}`)
    })
}
