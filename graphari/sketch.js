function setup() {
  createCanvas(800, 600);
  fill(128, 128, 100);
  graph = new Graph();
}

var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;
var i = 0;
var j = 0;
var k = 0;
var l = 0;
var m = 0;
var n = 0;
var o = 0;

var adMatrix = [];
var iterat = 0;

function oposite(x) {
  if (x == 0) return 1;
  return 0;
}

function draw() {
  adMatrix = [
    [0, a, b, c, d, e],
    [a, 0, f, g, h, i],
    [b, f, 0, j, k, l],
    [c, g, j, 0, m, n],
    [d, h, k, m, 0, o],
    [e, i, l, n, o, 0]
  ];
  background(223, 223, 255);
  graph.show(adMatrix);
  iterat++;
  if (iterat % 2 == 0) a = oposite(a);
  if (iterat % 4 == 0) b = oposite(b);
  if (iterat % 8 == 0) c = oposite(c);
  if (iterat % 16 == 0) d = oposite(d);
  if (iterat % 32 == 0) e = oposite(e);
  if (iterat % 64 == 0) f = oposite(f);
  if (iterat % 128 == 0) g = oposite(g);
  if (iterat % 256 == 0) h = oposite(h);
  if (iterat % 512 == 0) i = oposite(i);
  if (iterat % 1024 == 0) j = oposite(j);
  if (iterat % 2048 == 0) k = oposite(k);
  if (iterat % 4096 == 0) l = oposite(l);
  if (iterat % 8192 == 0) m = oposite(m);
  if (iterat % 16384 == 0) n = oposite(n);
  if (iterat % 32768 == 0) o = oposite(o);
  if (keyIsDown(SHIFT)) console.log(adMatrix);
  text(
    `
[0, ${a}, ${b}, ${c}, ${d}, ${e}]
[${a}, 0, ${f}, ${g}, ${h}, ${i}]
[${b}, ${f}, 0, ${j}, ${k}, ${l}]
[${c}, ${g}, ${j}, 0, ${m}, ${n}]
[${d}, ${h}, ${k}, ${m}, 0, ${o}]
[${e}, ${i}, ${l}, ${n}, ${o}, 0]`,
    10,
    10
  );
}

/*

[0, a, b, c],
[a, 0, d, e],
[b, d, 0, f],
[c, e, f, 0],


*/
