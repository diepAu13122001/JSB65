// bai1
// let x = prompt("Nhap 1 so: ");

function kiemTraSo(num) {
  // ngoai le - khong phai so
  if (!isFinite(num)) return num + " khong phai so";
  // doi kieu du lieu
  num = parseFloat(num);
  // kiem tra
  if (num < 0) {
    return num + " la so am";
  } else if (num == 0) {
    return num + " la 0";
  } else {
    if (num % 1 == 0) return num + " so nguyen duong";
    // if (Number.isInteger(num)) return num + " so nguyen duong";
    else return num + " la so thap phan duong";
  }
}

// console.log(kiemTraSo(x));
// //Dom
// document.write(kiemTraSo(x));

// Bai 2 -----------------------------------------------
let y = 90;
let z = -1;
let k = 0;

// arrow func
const max = (...a) => {
  let maxNum = 0;
  // ..
  a.forEach((element) => {
    if (maxNum < element) {
      maxNum = element;
    }
  });

  return maxNum;
};

function max2(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a &&  b > c) {
    return b;
  } else if (c > b &&  c > a) {
    return c;
  } 
}

// document.write(max(y, z, k));
// document.write(max2(y, z, k));















