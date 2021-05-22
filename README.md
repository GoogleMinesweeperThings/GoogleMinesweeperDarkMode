# Google Minesweeper Dark Mode

## Enable Dark Mode
```
window.minesweeper.dark();
```
If you want to disable, just refresh.

## Enable a Custom Color Scheme
```
window.minesweeper.scheme({
  scoreBar:     '#rrggbb', // hex code,   the color of the bar at the top
  background:   '#rrggbb', // hex code,   the background color of the page; will be the scoreBar color if omitted
  lightSquares: '#rrggbb', // hex code,   the color for the light grass
  darkSquares:  '#rrggbb', // hex code,   the color for the dark grass
  dugLight:     '#rrggbb', // hex code,   the color for the light dug squares
  dugDark:      '#rrggbb', // hex code,   the color for the dark dug squares
  edges:        '#rrggbb', // hex code,   the color for the edges between dug squares and grass
  centre:       boolean,   // true/false, whether to centre the game
});
```

### <3 fishes
