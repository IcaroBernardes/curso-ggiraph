// Associa um loop de animação às imagens da galeria
$(document).ready(function(){
  
  // Define propriedades comuns às animações
  var bgy = '100%';
  var dly = 500;
  var esg = 'easeInOutQuad';
  var atp = true;
  var lop = true;
  var dir = 'alternate';
  
  // Define animação de #gallery-carmen
  anime({
    targets: '#gallery-carmen',
    duration: 15000,
    backgroundPositionY: bgy,
    delay: anime.stagger(dly),
    easing: esg,
    autoplay: atp,
    loop: lop,
    direction: dir
  });
  
  // Define animação de #gallery-brlineup
  anime({
    targets: '#gallery-brlineup',
    duration: 10000,
    backgroundPositionY: bgy,
    delay: anime.stagger(dly),
    easing: esg,
    autoplay: atp,
    loop: lop,
    direction: dir
  });
  
  // Define animação de #gallery-gppresid
  anime({
    targets: '#gallery-gppresid',
    duration: 10000,
    backgroundPositionY: bgy,
    delay: anime.stagger(dly),
    easing: esg,
    autoplay: atp,
    loop: lop,
    direction: dir
  });
  
});