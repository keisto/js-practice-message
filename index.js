document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault() // prevent default browser behavior

  document.querySelector('#message-form').classList.add('hide')
  document.querySelector('#link-form').classList.remove('hide')

  const message = document.querySelector('#message-input')
  const encrypted = btoa(message.value)

  const shareLink = document.querySelector('#link-input')
  shareLink.value = `${window.location}#${encrypted}`
  shareLink.select()
})
