const socket = io('http://chat-socket.sx9.repl.co')
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

const name = prompt('Please Enter A Username!')
appendMessage('You Joined!')
socket.emit('new-user', name)

socket.on('chat-message', data => {
  appendMessage(`${data.name}: ${data.message}`)
})

socket.on('user-connected', name => {
  appendMessage(`${name} Joined!`)
})

socket.on('user-disconnected', name => {
  appendMessage(`${name} Left!`)
})

messageForm.addEventListener('submit', e => {
  e.preventDefault()
  const message = messageInput.value
  appendMessage(`You: ${message}`)
  socket.emit('send-chat-message', message)
  messageInput.value = ''
})

function appendMessage(message) {
  const messageElement = document.createElement('p')
  messageElement.innerText = message
  messageContainer.append(messageElement)
}