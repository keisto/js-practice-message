const { hash } = window.location
const secretMessage = atob(hash.slice(1)) // remove hash #

if (secretMessage) {
  document.querySelector('#message-form').classList.add('hide')
  document.querySelector('#message-show').classList.remove('hide')

  document.querySelector('#message-show p').innerText = secretMessage
}

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault() // prevent default browser behavior

  document.querySelector('#message-form').classList.add('hide')
  document.querySelector('#link-form').classList.remove('hide')

  const messageInput = document.querySelector('#message-input')
  const encrypted = btoa(messageInput.value)

  const shareLink = document.querySelector('#link-input')
  shareLink.value = `${window.location}#${encrypted}`
  shareLink.select()
})
