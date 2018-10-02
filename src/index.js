module.exports = function getZerosCount(number, base) {
  // your implementation
 var b = base;
var n = number;
var a, m, k = 0;
for ( var i = 2; i <= base; i++ ){
if ( b % i == 0){
a = 0;
while ( b % i == 0 ){
a++;
b = Math.floor(b/i);
}
m = 0;
k = number;
while ( k / i > 0 ){
m = m + Math.floor( k / i );
k = Math.floor( k / i );
}
n = Math.min( n, Math.floor( m / a ));
}
}
return n;
// my implementation
}