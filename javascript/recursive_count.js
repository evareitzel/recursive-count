function recursiveCount(num = 0) {
  // type your code here
  counting(num)
}

const counting = (count = 0) => {
  while (count < 10) {
    console.log(count);
    ++count;
  }
}


if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
