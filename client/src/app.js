import io from 'socket.io-client';

const refs = {
    editor: document.querySelector('.message-editor'),
    feed: document.querySelector('.message-feed'),
};
const socket = io('ws://localhost:3000');
const userName = prompt('Username?', '') || 'Anonymous';

export const appendJoinedMessage = name => {
    document.body.insertAdjacentHTML(
        'afterbegin',
        `<h1>Joined chat as ${name}</h1>`,
    );
};

export const appendMessageToFeed = ({ userName, message }) => {
    refs.feed.insertAdjacentHTML(
        'beforeend',
        `<li><span>${userName}</span>: ${message}</li>`,
    );
};

const onEditorSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const [input] = form.elements;

    const payload = {
        userName,
        message: input.value,
    };

    socket.emit('chat-message', payload);
    appendMessageToFeed(payload);
    form.reset();
};

appendJoinedMessage(userName);
socket.on('chat-message', appendMessageToFeed);
refs.editor.addEventListener('submit', onEditorSubmit);
