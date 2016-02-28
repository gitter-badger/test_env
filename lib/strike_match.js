function strike_match(h, a) {
 if (h && a) {
   if (h === a) return 2;
   a = [h, a];
   var b, e, k, c, l, f, m = 0, d, g = {}, n = 0;
   for (b = 0;2 > b;b++) {
     for (e = a[b].toLowerCase().split(/\s+/g), k = e.length, c = 0;c < k;c++) {
       for (l = e[c].length - 1, f = 0;f < l;f++) {m++, d = e[c].substr(f, 2), b ? g[d] && (--g[d], ++n) : g[d] = ++g[d] || 1;}
     }
   }
   return (2 * n / m).toFixed(2);
 }
}
module.exports = strike_match;
