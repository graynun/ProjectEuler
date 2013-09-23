var N = 1001,
	cursor = 1,
	sum = 1,
	inc = 2;

for(var i = 1; i <= (N - 1) / 2; i++) {
	for(var j = 0; j < 4; j++) {
		cursor += inc;
		sum += cursor;
	}
	inc += 2;
}

console.log(sum);
