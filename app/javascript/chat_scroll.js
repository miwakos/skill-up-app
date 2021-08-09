function scroll () {
  if (document.getElementById('chat-messages')) {
    const messages = document.getElementById('chat-messages');
    messages.scrollTop = messages.scrollHeight;
  };
};

window.addEventListener('DOMContentLoaded', scroll);