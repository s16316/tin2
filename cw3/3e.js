function student(imie, nazwisko, nrindeksu, stopnie) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.nrindeksu = nrindeksu;
    this.srednia = function() {
      var sum = 0;
      for (var i = 0; i < stopnie.length; i++) {
        sum += stopnie[i];
      }
      var srednia = sum / stopnie.length;
      return srednia;
    }
  }
  
  var student1 = new student("Pawel", "Zdziarski", "s16316", [5,5,5]);
  console.log(student1.imie,student1.nazwisko,student1.nrindeksu,student1.srednia());