fetch('/input4.txt')
.then(r => r.text())
.then(data => {
  // PART 1
  const xmasGrid = data.split(/\n/gm)
  let xmasCount = 0
  let target = "XMAS";
  const plotPoints = [[0, 1],[0, -1],[1, 0],[-1, 0],[1, 1],[1, -1],[-1, 1],[-1, -1]]
  for (let i = 0; i < xmasGrid.length; i++) {
    for (let j = 0; j < xmasGrid[i].length; j++) {
      if (xmasGrid[i][j] === target[0]) {
        for (let [di, dj] of plotPoints) {
          let match = true;
          for (let h = 0; h < target.length; h++) {
            const ni = i + h * di;
            const nj = j + h * dj;
            if (ni < 0 || ni >= xmasGrid.length || nj < 0 || nj >= xmasGrid[0].length) {
              match = false;
              break;
            }
            if (xmasGrid[ni][nj] !== target[h]) {
              match = false;
              break;
            }
          }
          if (match) {
            xmasCount++;
          }
        }
      }
    }
  }
  console.log(xmasCount);
  // PART 2
  const grid = xmasGrid; // Your input grid
let xCount = 0;

function checkPattern(grid, i, j, di, dj, pattern) {
  // pattern is "MAS" or "SAM"
  // Middle letter is at (i, j) which should be 'A'
  // We check one step before and one step after in (di, dj) direction
  const rows = grid.length;
  const cols = grid[0].length;

  const middle = pattern[1]; // 'A'
  const before = pattern[0]; // 'M' or 'S'
  const after = pattern[2];  // 'S' or 'M'

  // Check middle is 'A'
  if (grid[i][j] !== middle) return false;

  // Check before
  const bi = i - di;
  const bj = j - dj;
  if (bi < 0 || bi >= rows || bj < 0 || bj >= cols || grid[bi][bj] !== before) return false;

  // Check after
  const ai = i + di;
  const aj = j + dj;
  if (ai < 0 || ai >= rows || aj < 0 || aj >= cols || grid[ai][aj] !== after) return false;

  return true;
}

// Directions for forming the X:
// We'll define two pairs of directions for the two diagonals of the X.
// Forward diagonal uses directions: (-1,-1) and (1,1)
// Backward diagonal uses directions: (-1,1) and (1,-1)
const forwardDirections = [[-1, -1], [1, 1]];
const backwardDirections = [[-1, 1], [1, -1]];

// Patterns to check
const patterns = ["MAS", "SAM"];

for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    if (grid[i][j] === 'A') {
      let foundX = false;
      for (let fp of patterns) {
        for (let bp of patterns) {
          let forwardMatch = checkPattern(grid, i, j, 1, 1, fp);
          let backwardMatch = checkPattern(grid, i, j, 1, -1, bp);
          if (forwardMatch && backwardMatch) {
            foundX = true;
            break;
          }
          forwardMatch = checkPattern(grid, i, j, -1, -1, fp);
          backwardMatch = checkPattern(grid, i, j, -1, 1, bp);
          if (forwardMatch && backwardMatch) {
            foundX = true;
            break;
          }
        }
        if (foundX) break;
      }
      if (foundX) {
        xCount++;
      }
    }
  }
}
console.log(xCount);
})
