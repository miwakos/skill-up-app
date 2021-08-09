import consumer from "./consumer"

const appLounge = consumer.subscriptions.create("LoungeChannel", {
  connected() {
    // 通信が確立された時の処理
  },

  disconnected() {
    // 通信が切断された時の処理
  },

  received(data) {
    // データが送信されてきた時の処理
    const messages = document.getElementById('chat-messages');
    messages.insertAdjacentHTML('beforeend', data['message']);
    messages.scrollTop = messages.scrollHeight;
  },

  speak: function(message, data_lounge, data_user) {
    return this.perform('speak', { message: message, lounge_id: data_lounge, user_id: data_user });
  }
});

// チャットを送る
function send (){
  if (document.getElementById('chat-input')) {
    const chat_input = document.getElementById('chat-input');
    chat_input.addEventListener('keypress', (e) => {
      // return(Enter)が押された時
      if (e.key === 'Enter') {
        // lounge_idとuser_idを取得
        const data_lounge = chat_input.getAttribute("data-lounge");
        const data_user = chat_input.getAttribute("data-user");
        // channel speakへ、各データを引数にして渡す
        appLounge.speak(e.target.value, data_lounge, data_user);
        // inputの中身を空に
        e.target.value = '';
        e.preventDefault();
      };
    });
  };
};

window.addEventListener('DOMContentLoaded', send);
