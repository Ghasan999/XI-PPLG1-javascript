var Pessi = 185;
var WildanJR = 190;
var CR7 = 195;

if (Pessi > WildanJR && Pessi > CR7) {
  console.log('Pessi adalah siswa yang tertinggi');
} else if (WildanJR > Pessi && WildanJR > CR7) {
  console.log('WildanJR adalah siswa yang tertinggi');
} else if (CR7 > Pessi && CR7 > WildanJR) {
  console.log('CR7 adalah siswa yang tertinggi');
}

if ((Pessi > WildanJR && Pessi < CR7) || (Pessi < WildanJR && Pessi > CR7)) {
  console.log('Pessi adalah siswa menengah');
} else if ((WildanJR > Pessi && WildanJR < CR7) || (WildanJR < Pessi && WildanJR > CR7)) {
  console.log('WildanJR adalah siswa menengah');
} else if ((CR7 > Pessi && CR7 < WildanJR) || (CR7 < Pessi && CR7 > WildanJR)) {
  console.log('CR7 adalah siswa menengah');
}

if (Pessi < WildanJR && Pessi < CR7) {
  console.log('Pessi adalah siswa terpendek');
} else if (WildanJR < Pessi && WildanJR < CR7) {
  console.log('WildanJR adalah siswa terpendek');
} else if (CR7 < Pessi && CR7 < WildanJR) {
  console.log('CR7 adalah siswa terpendek');
}