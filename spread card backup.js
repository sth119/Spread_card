$(document).ready(function () {
  // 카드 클릭 시 spread 클래스 관리
  $('.card-container').click(function (event) {
    console.log('카드 클릭되었습니다.');

    // 모든 카드에서 spread 제거하고 현재 클릭된 카드에 추가
    $('.card-container').removeClass('spread');
    $(this).addClass('spread');

    // 이벤트 전파 방지
    event.stopPropagation();
  });

  // 배경 클릭 시 모든 상태 초기화
  $('body').click(function () {
    console.log('배경 클릭되었습니다.');
    $('.card-container').removeClass('spread'); // 카드 초기화
    $('.movie').removeClass('on'); // 영화 패널 초기화
    $('.asidewrap').removeClass('on'); // 배경 초기화
  });

  // 카드별 동작 처리
  const movies = document.querySelectorAll('#movie1, #movie2, #movie3, #movie4, #movie5, #movie6');
  const background = document.querySelector('.asidewrap');

  $('.card-container').on('click', function (event) {
    // 클릭된 카드가 spread 클래스를 가지고 있지 않으면 aside를 열지 않음
    if (!$(this).hasClass('spread')) return;

    // 기존 상태 초기화
    movies.forEach(movie => movie.classList.remove('on'));
    background.classList.remove('on');

    // 현재 클릭된 카드에 따라 패널 열기
    const targetCard = event.target;
    if ($(targetCard).hasClass('card-card1')) {
      $('#movie1').addClass('on');
      $('.asidewrap').addClass('on');
      console.log('1번 클릭');
    } else if ($(targetCard).hasClass('card-card2')) {
      $('#movie2').addClass('on');
      $('.asidewrap').addClass('on');
      console.log('2번 클릭');
    } else if ($(targetCard).hasClass('card-card3')) {
      $('#movie3').addClass('on');
      $('.asidewrap').addClass('on');
      console.log('3번 클릭');
    } else if ($(targetCard).hasClass('card-card4')) {
      $('#movie4').addClass('on');
      $('.asidewrap').addClass('on');
      console.log('4번 클릭');
    } else if ($(targetCard).hasClass('card-card5')) {
      $('#movie5').addClass('on');
      $('.asidewrap').addClass('on');
      console.log('5번 클릭');
    } else if ($(targetCard).hasClass('card-card6')) {
      $('#movie6').addClass('on');
      $('.asidewrap').addClass('on');
      console.log('6번 클릭');
    }
  });
});
