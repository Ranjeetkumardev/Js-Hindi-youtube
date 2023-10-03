// Immediately Invoked Function Expressions (IIFE)

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();
 // yadi dono fun ko bina ; k run karte to error deta bcz ye to immidiate invoke/execute to kar deta h esse pata nahi h ki esse rokna kab h iss liye ; use karte h isse rokane k liye 
//named iife
((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("Ranjeet");
// what is iife => jo immidiate execute ho  // good
//better => global scope se jo polution hoti h usase bachane k liye iife use karte h