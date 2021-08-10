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
    // 着席時
    if (data['todo'] == 'seat') {
      // seat1
      if (data['seat_no'] == 1) {
        const seatName = document.getElementById('seat-name-no1');
        const noSeat = document.getElementById('no-seat-no1');
        const seatUserIconImg = document.getElementById('seat-user-icon-img-no1');
        seatName.innerHTML = data['user_nickname']
        seatName.setAttribute('style', 'visibility: visible;');
        noSeat.setAttribute('style', 'display: none;');
        seatUserIconImg.setAttribute('src', data['seat_user_icon_img'])
        seatUserIconImg.setAttribute('style', 'visibility: visible;');
      }
      // seat2
      else if (data['seat_no'] == 2) {
        const seatName = document.getElementById('seat-name-no2');
        const noSeat = document.getElementById('no-seat-no2');
        const seatUserIconImg = document.getElementById('seat-user-icon-img-no2');
        seatName.innerHTML = data['user_nickname']
        seatName.setAttribute('style', 'visibility: visible;');
        noSeat.setAttribute('style', 'display: none;');
        seatUserIconImg.setAttribute('src', data['seat_user_icon_img'])
        seatUserIconImg.setAttribute('style', 'visibility: visible;');
      }
      // seat3
      else if (data['seat_no'] == 3) {
        const seatName = document.getElementById('seat-name-no3');
        const noSeat = document.getElementById('no-seat-no3');
        const seatUserIconImg = document.getElementById('seat-user-icon-img-no3');
        seatName.innerHTML = data['user_nickname']
        seatName.setAttribute('style', 'visibility: visible;');
        noSeat.setAttribute('style', 'display: none;');
        seatUserIconImg.setAttribute('src', data['seat_user_icon_img'])
        seatUserIconImg.setAttribute('style', 'visibility: visible;');
      }
    } 
    // メッセージ送信時
    else if (data['message']) {
      const messages = document.getElementById('chat-messages');
      messages.insertAdjacentHTML('beforeend', data['message']);
      messages.scrollTop = messages.scrollHeight;
    }

    // 退出時
    else if (data['todo'] == 'exit') {
      const seatName1 = document.getElementById('seat-name-no1');
      const seatName2 = document.getElementById('seat-name-no2');
      const seatName3 = document.getElementById('seat-name-no3');
      // seat1
      if (data['user_nickname'] == seatName1.innerHTML) {
        const noSeat = document.getElementById('no-seat-no1');
        const seatUserIconImg = document.getElementById('seat-user-icon-img-no1');
        seatName1.innerHTML = ''
        seatName1.setAttribute('style', 'visibility: hidden;');
        noSeat.removeAttribute('style');
        seatUserIconImg.removeAttribute('src');
        seatUserIconImg.setAttribute('style', 'visibility: hidden;');
      }
      // seat2
      else if (data['user_nickname'] == seatName2.innerHTML) {
        const noSeat = document.getElementById('no-seat-no2');
        const seatUserIconImg = document.getElementById('seat-user-icon-img-no2');
        seatName1.innerHTML = ''
        seatName1.setAttribute('style', 'visibility: hidden;');
        noSeat.removeAttribute('style');
        seatUserIconImg.removeAttribute('src');
        seatUserIconImg.setAttribute('style', 'visibility: hidden;');
      }
      // seat3
      else if (data['user_nickname'] == seatName3.innerHTML) {
        const noSeat = document.getElementById('no-seat-no3');
        const seatUserIconImg = document.getElementById('seat-user-icon-img-no3');
        seatName1.innerHTML = ''
        seatName1.setAttribute('style', 'visibility: hidden;');
        noSeat.removeAttribute('style');
        seatUserIconImg.removeAttribute('src');
        seatUserIconImg.setAttribute('style', 'visibility: hidden;');
      };
    };

  },

  speak: function(message, data_lounge, data_user) {
    return this.perform('speak', { message: message, lounge_id: data_lounge, user_id: data_user });
  },

  seat: function(data_lounge, data_user, seat_no, user_nickname, seat_user_icon_img) {
    return this.perform('seat', { lounge_id: data_lounge, user_id: data_user, seat_no: seat_no, user_nickname: user_nickname, seat_user_icon_img: seat_user_icon_img });
  },

  exit: function(data_lounge, data_user, user_nickname) {
    return this.perform('exit', { lounge_id: data_lounge, user_id: data_user, user_nickname: user_nickname });
  }
});

window.addEventListener('load', () => {
  // chat-input要素が含まれている場合のみに処理する定義
  if (document.getElementById('chat-input')) {

    // lounge_idとuser_idを取得
    const chatInput = document.getElementById('chat-input');
    const dataLounge = chatInput.getAttribute("data-lounge");
    const dataUser = chatInput.getAttribute("data-user");

    // 着席用のデータ取得
    const seatNo1 = document.getElementById('seat-no1');
    const seatNo2 = document.getElementById('seat-no2');
    const seatNo3 = document.getElementById('seat-no3');
    const userNickname = document.getElementById('user-nickname').innerHTML;
    const seatUserIconImg = document.getElementById('user-icon--img');
    const seatUserIconImgSrc = seatUserIconImg.getAttribute('src');
    let count = 0

    // 退出用のデータ取得
    const exitBtn = document.getElementById('lounge-exit-btn');

    // 入室した時の処理
    const jsClose = document.getElementById('js-close')
    jsClose.addEventListener('click', () => {
      // channel speakへ、各データを引数にして渡す
      appLounge.speak("＜入室しました＞", dataLounge, dataUser);
    });

    // 着席した時の処理
    // seat1
    seatNo1.addEventListener('click', () => {
      appLounge.seat(dataLounge, dataUser, 1, userNickname, seatUserIconImgSrc);
    });
    // seat2
    seatNo2.addEventListener('click', () => {
      appLounge.seat(dataLounge, dataUser, 2, userNickname, seatUserIconImgSrc);
    });
    // seat3
    seatNo3.addEventListener('click', () => {
      appLounge.seat(dataLounge, dataUser, 3, userNickname, seatUserIconImgSrc);
    });
    
    // チャット送信時の処理
    chatInput.addEventListener('keypress', (e) => {
      // return(Enter)が押された時
      if (e.key === 'Enter') {
        // channel speakへ、各データを引数にして渡す
        appLounge.speak(e.target.value, dataLounge, dataUser);
        // inputの中身を空に
        e.target.value = '';
        e.preventDefault();
      };
    });

    // 退出した時の処理
    exitBtn.addEventListener('click', () => {
      appLounge.exit(dataLounge, dataUser, userNickname);
    });

    };
});
