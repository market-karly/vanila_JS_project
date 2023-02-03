
  let modal = document.querySelector('.popup-box');
  let modalCloseOneDayBtn = document.querySelector('.close-during-oneday');
  let modalCloseBtn = document.querySelector('.close');
  let body = document.querySelector('body');
  let popUpBox = document.querySelector('.popup-box')
  let isClose = document.querySelector('.is-open')


  // 모달 창 하루동안 닫기 기능
  function onCloseOneDayHandler(e) {
    e.preventDefault();
    popUpBox.parentNode.removeChild(popUpBox);
  }

  // 모달 창 닫기 기능
  function onCloseModalHandler(e) {
    e.preventDefault();
    popUpBox.parentNode.removeChild(popUpBox);
  }
    
  modalCloseBtn.addEventListener('click', onCloseModalHandler);
  modalCloseOneDayBtn.addEventListener('click',onCloseOneDayHandler);
