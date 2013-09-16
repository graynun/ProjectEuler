var dayInMonth = function(year, month) {
	var d30 = [4, 6, 8, 9];

	if(d30.indexOf(month) !== -1) return 30;
	else if(month !== 2) return 31;

	if(year % 400 === 0) return 29;
	if(year % 100 === 0) return 28;
	if(year % 4 === 0) return 29;
	return 28;
};

var curYear = 1901,
	curMonth = 1,
	curDay = 1,
	cnt = 0;

for(;;) {
	if(curMonth === 12) {
		curYear += 1;
		curMonth = 1;
	} else {
		curMonth++;
	}

	curDay += dayInMonth(curYear, curMonth);
	curDay %= 7;

	if(curDay === 0) {
		cnt++;
	}

	if(curYear === 2000 && curMonth === 12) break;
}

console.log(cnt);
