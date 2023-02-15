let number = 14;
let count = 0;

for(let i = 0; i<=number; i++){
	if(number%i != 0){
		count++;
      }
}
if(count == 0){
	console.log("Prime");
}
else{
	console.log("Not Prime")
}