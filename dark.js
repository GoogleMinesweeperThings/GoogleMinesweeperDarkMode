if(window.minesweeper === undefined)
  window.minesweeper = {};

window.minesweeper.scheme = function(settings = {}) {
  if(settings.scoreBar === undefined)
    settings.scoreBar = '#4A752C';
  if(settings.lightSquares === undefined)
    settings.lightSquares = '#A2D149';
  if(settings.darkSquares === undefined)
    settings.darkSquares = '#AAD751';
	if(settings.dugDark === undefined)
    settings.dugDark = '#D7B899';
  if(settings.dugLight === undefined)
    settings.dugLight = '#E5C29F';
  if(settings.edges === undefined)
    settings.edges = '#87AF3A';
  
  if(settings.centre)
    document.getElementsByTagName('div')[0].style = 'margin-left:auto;margin-right:auto;position:relative;vertical-align:middle';

  document.body.bgColor = settings.background || settings.scoreBar;
  document.getElementById('NWJp1d').style.backgroundColor = settings.scoreBar;
  document.getElementsByClassName('HhuoRb')[0].style.backgroundColor = settings.scoreBar;


  const scripts = document.body.getElementsByTagName('script');
  for(let script of scripts) {
    const req = new XMLHttpRequest();
    req.open('GET', script.src);
    req.onload = function() {
      if(this.responseText.indexOf('#A2') !== -1)
        processCode(this.responseText);
    };
    req.send();
  }

  function processCode(code) {
    eval(`

      var loseImage = new Image;
      loseImage.src = 'https://www.google.com/logos/fnbx/minesweeper/lose_screen.png';
      
      
      
      
    `);
    setTimeout(_ => {
      eval(`
        var loseCanvas = document.createElement('canvas');
        loseCanvas.width = loseImage.width;
        loseCanvas.height = loseImage.height;

        var loseCtx = loseCanvas.getContext('2d');
        loseCtx.drawImage(loseImage, 0, 0);
        
        loseCtx.fillStyle = '${settings.darkSquares}';
        loseCtx.fillRect(0, 167, 39, 50);
        loseCtx.fillRect(327, 167, 41, 50);
        loseCtx.fillRect(409, 167, 51, 50);
        
        loseCtx.fillStyle = '${settings.lightSquares}';
        loseCtx.fillRect(368, 167, 41, 50);

        loseCtx.fillStyle = '${settings.dugLight}';
        loseCtx.fillRect(39, 167, 41, 50);
        loseCtx.fillRect(203, 167, 41, 50);
        loseCtx.fillRect(285, 167, 42, 50);

        loseCtx.fillStyle = '${settings.dugDark}';
        loseCtx.fillRect(162, 167, 41, 50);

        
        var loseData = loseCanvas.toDataURL();
      `);

      eval(`

        var winImage = new Image;
        winImage.src = 'https://www.google.com/logos/fnbx/minesweeper/win_screen.png';
    
      `);

      setTimeout(_ => {

        eval(`
          var winCanvas = document.createElement('canvas');
          winCanvas.width = winImage.width;
          winCanvas.height = winImage.height;

          var winCtx = winCanvas.getContext('2d');
          winCtx.drawImage(winImage, 0, 0);

          for(let i = 0; i < 11; i++) {
            if(i % 2 === 0)
              winCtx.fillStyle = '${settings.darkSquares}';
            else
              winCtx.fillStyle = '${settings.lightSquares}';
            
            winCtx.fillRect(i * 41, 167, 42, 111);
          }

          var winData = winCanvas.toDataURL();
          
          
        `);

        eval(
          code.match(
            /[a-zA-Z0-9_$]{1,6}=function\(a\){a\.isDisposed\(\)\|\|[^]*?"Play again"[^]*?"Try again"\)\)\)}/
          )[0].replace(
            /a\.[a-zA-Z0-9_$]{1,6}\.src/,
            'winData'
          ).replace(
            /a\.[a-zA-Z0-9_$]{1,6}\.src/,
            'loseData'
          )
        );


        eval(
          code.match(
            /[a-zA-Z0-9_$]{1,6}=function\(a,b,c\){switch\(c\){case "GRASS":[^]*?height\)\)}/
          )[0].replaceAll(
            '#AAD751',
            settings.lightSquares
          ).replaceAll(
            '#A2D149',
            settings.darkSquares
          ).replaceAll(
            '#E5C29F',
            settings.dugLight
          ).replaceAll(
            '#D7B899',
            settings.dugDark
          )
        );

        eval(
          code.match(
            /[a-zA-Z0-9_$]{1,6}=function\(a,b,c\){a\.[a-zA-Z0-9_$]{1,6}\.push\({[^]*?:0}\)}/
          )[0].replace(
            '#AAD751',
            settings.lightSquares
          ).replace(
            '#A2D149',
            settings.darkSquares
          )
        );

        eval(
          code.match(
            /[a-zA-Z0-9_$]{1,6}=function\(a\){if\(!a\.isDisposed\(\)\){if\(a\.[a-zA-Z0-9_$]{1,6}\){for[^]*?height\)\)\)}}/
          )[0].replace(
            '#87AF3A',
            settings.edges
          )
        );
      }, 750);
    }, 750);
  }
};

window.minesweeper.dark = function() {
  return window.minesweeper.scheme({
		scoreBar: 		'#262428',
    lightSquares: '#47404F',
    darkSquares:  '#423C49',
    edges:        '#2E2933',
    dugLight:     '#1C1821',
    dugDark:      '#151219',
    centre:       true,
  });
};


