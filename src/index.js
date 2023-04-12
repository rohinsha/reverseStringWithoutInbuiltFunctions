function reverse(str) {
  return str.split("").reduce((a, b) => (a = b + a), "");
}

console.log(reverse("javas technology"));
//("ygolonhcet savaj");
