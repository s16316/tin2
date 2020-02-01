function silnia(n) {
    if (n <= 0) {
        return 1;
    } else {
        return n * silnia(n - 1);
    }
}

console.log(silnia(4))

function silnia2(num) {
    var silniav = 1;
    for (var i = 2; i <= num; i++) {
      silniav *= i;
    }
    return silniav;
  }

  console.log(silnia2(4))