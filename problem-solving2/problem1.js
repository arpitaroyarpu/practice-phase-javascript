//here the word "lake" is used how many times? and first "lake" is in which position?

const sentence = "As the sun set, the children gathered by the lake, their laughter echoing as they played. \
  The lake shimmered in the fading light, reflecting the colors of the sunset. They threw stones into the lake, \
  watching the ripples spread across the surface of the lake. Each splash sent a wave of excitement through them, \
  making them laugh even louder by the lake’s edge.";

  const matches = sentence.match(/lake/gi);
  const occurances = matches ? matches.length : 0;  //lakes return null which is falsy value so we should use this ternary

  console.log(occurances);

  let position = sentence.search(/lakes/i);
  position = position >= 0 ? position : "not found!";  //for avoiding minus value
  console.log(position);


