
//modal commands
const openModal = ()=>{
  $('#modal').css('display', 'block');
}

const closeModal = ()=>{
  $('#modal').css('display', 'none');
}

const gridSquares = [];
// const meter = ['#bar1', '#bar2', '#bar3', '#bar4', '#bar5', '#bar6', '#bar7', '#bar8', '#bar9', '#bar10'];

//make golf course and create array of square ids
const createGrid = () =>{
  for (let i = 1; i <= 100; i++){
  const $div = $('<div>').addClass('gridSquare').attr('id', 'square' + i).appendTo('#grid');
  gridSquares.push(i);
  }
}

//create and locate hole
const randSquare = () =>{
  const randSquareId = '#square' + Math.floor(Math.random()*(gridSquares.length));
  const createHole = () =>{
    const $hole = $('<div>').addClass('hole').appendTo(randSquareId);
  }
  createHole();
}

//append golf ball
const createBall = () =>{
  const $ball = $('<div>').addClass('ball').appendTo('.container');
}

//move ball right
const moveRight = ()=>{
  $('.ball').animate({left: '+=57.5px'});
}

//move ball left
const moveLeft = ()=>{
  $('.ball').animate({left: '-=57.5px'});
}

//determine strength of shot
const increaseStrength = (event)=>{
  $(event.target).css('box-shadow', '0px 0px 15px 5px rgba(255, 255, 190, .75)');
}

//check locations
const checkWin = () =>{
  const $ballLoc = $('.ball').offset();
  const $holeLoc = $('.hole').offset();
  console.log($holeLoc);
  console.log($ballLoc);
  if ($holeLoc.top-5 <= $ballLoc.top &&
      $holeLoc.top+5 >= $ballLoc.top &&
      $holeLoc.left-5 <= $ballLoc.left &&
      $holeLoc.left+5 >= $ballLoc.left
    ) {
      console.log('win');
    } else {
      console.log('lose');
    }
}

//hitting ball according to strength meter
const hitBall = ()=>{
  if ($('#bar1').css('box-shadow') !== 'none'){
    $('.ball').animate({top: '-50px'}, 'slow');

  } else if ($('#bar2').css('box-shadow') !== 'none'){
    $('.ball').animate({top: '-114px'}, 'slow');

  } else if ($('#bar3').css('box-shadow') !== 'none'){
    $('.ball').animate({top: '-165px'}, 'slow');

  } else if ($('#bar4').css('box-shadow') !== 'none'){
    $('.ball').animate({top: '-220px'}, 'slow');

  } else if ($('#bar5').css('box-shadow') !== 'none'){
    $('.ball').animate({top: '-280px'}, 'slow');

  } else if ($('#bar6').css('box-shadow') !== 'none'){
    $('.ball').animate({top: '-335px'}, 'slow');

  } else if ($('#bar7').css('box-shadow') !== 'none'){
    $('.ball').animate({top: '-390px'}, 'slow');

  } else if ($('#bar8').css('box-shadow') !== 'none'){
    $('.ball').animate({top: '-451px'}, 'slow');

  } else if ($('#bar9').css('box-shadow') !== 'none'){
    $('.ball').animate({top: '-505px'}, 'slow');

  } else if ($('#bar10').css('box-shadow') !== 'none'){
    $('.ball').animate({top: '-575px'}, 'slow');

  }
  checkWin();
}




$(()=>{

  createGrid();
  randSquare();
  createBall();

  $('#openModal').click(openModal);
  $('#close').click(closeModal);
  $('#rightButton').click(moveRight);
  $('#leftButton').click(moveLeft);
  $('#strengthMeter').click(increaseStrength);
  $('.ball').click(hitBall);



});
