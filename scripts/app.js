//getting the exact path length of each letter

const strokeLength = document.querySelectorAll("#odin-title svg path");

console.log(strokeLength); // just verifying that all letters have been caught

// getting the path length using for loop
for (let i = 0; i < strokeLength.length; i++) {
  console.log(`Letter ${i + 1} is ${strokeLength[i].getTotalLength()}`);
}

//repeating the process from above but for the logo itself

//getting the elements within the logo svg
const logoStrokeLength = document.querySelectorAll("#odin-logo svg g");

console.log(logoStrokeLength);

//getting the paths within the elements above (paths)
const logoPaths = [];

logoStrokeLength.forEach((g) => {
  const paths = g.querySelectorAll("path");
  const circles = g.querySelectorAll("circle");

  paths.forEach((path) => {
    logoPaths.push(path);
  });

  circles.forEach((circle) => {
    logoPaths.push(circle);
  });
});

console.log(logoPaths);

for (let j = 0; j < logoPaths.length; j++) {
  console.log(`Line of area ${j + 1} is ${logoPaths[j].getTotalLength()}`);
}
