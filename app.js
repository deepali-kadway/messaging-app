const shSelectorBtn = document.getElementById('shawna-selector')
const emSelectorBtn = document.getElementById('emma-selector')
const chatHeader = document.querySelector('.chat-header')
const chatMessages = document.querySelector('.chat-messages')
const chatInputForm = document.querySelector('.chat-input-form')
const chatInput = document.querySelector('.chat-input')
const clearChat = document.querySelector('.clear-chat-btn')

// create a funtion that will return a message element
const createChatMessageElement = (message) => `
<div class="message ${message.sender === 'Shawna' ? 'blue-bg' : 'gray-bg'}">
    <div class="message-sender">${message.sender}</div>
    <div class="message-text">${message.text}</div>
    <div class="message-timestamp">${message.timestamp}</div>
</div>
`

// send message function
const sendMessage = (event) => {
    event.preventDefault()
    const timestamp = new Date().toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})
    const message = {
        sender: messageSender,
        text: chatInput.value,
        timestamp
    }
    chatMessages.innerHTML += createChatMessageElement(message)
    chatInputForm.reset()
    chatMessages.scrollTop = chatMessages.scrollHeight
}
chatInputForm.addEventListener('submit', sendMessage)
clearChat.addEventListener('click', () => {
    chatMessages.innerHTML = ''
})

// update message sender
let messageSender = 'Shawna'
const updateMessageSender = (name) => {
messageSender = name;
chatHeader.innerText = `${messageSender} chatting...`
chatInput.placeholder = `Type here, ${messageSender} ...`

if(name === 'Shawna')
{
    shSelectorBtn.classList.add('active-person-button')
    emSelectorBtn.classList.remove('active-person-button')
}
if(name === 'Emma')
{
    emSelectorBtn.classList.add('active-person-button')
    shSelectorBtn.classList.remove('active-person-button')
}

chatInput.focus()
}
shSelectorBtn.onclick = () => updateMessageSender('Shawna')
emSelectorBtn.onclick = () => updateMessageSender('Emma')
