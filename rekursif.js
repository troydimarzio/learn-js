const loopVal = (n) => {
	if(n === 11) return;
	console.log(n);
	return loopVal(n+1);
}

//loopVal(1);

const faktorialFunc = (n) => {
	if(n === 0) return 1;
	return n * faktorialFunc(n-1);
}

console.log(faktorialFunc(10));