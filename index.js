document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault() // prevent default browser behavior

  const input = document.querySelector('#message')

  console.log(input.value)
})
