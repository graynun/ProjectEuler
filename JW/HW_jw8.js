var foo = function() {
	this.numStr = '7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450';
	this.arr = [];
	this.max = 0;

	this._initialize();
};

var _ = foo.prototype;

_._initialize = function() {
	this._makeArray();
	this._judgeZero(0);
	console.log(this.max);
	
};

_._makeArray = function() {
	this.arr = this.numStr.split("");
};

_._judgeZero = function(n) {
	var mulNum = [],
		i;

	for ( i = n; i < n + 5; i++ ) {
		if(parseInt(this.arr[i]) == 0) {
			if( i > this.arr.length - 5 ){
				//?????????????
			} else {	
				this._judgeZero(i+1);
			}
		} else {
			mulNum.push(parseInt(this.arr[i]));
		}
	}


	if ( mulNum.length == 5 ) {
		this._multiple(mulNum, n + 1);
	}
	 
};

_._multiple = function(arr , index) {
	var mul = 1;

	for ( var i = 0; i < arr.length; i++ ) {
		mul *= arr[i];
	}
	this._setMax(mul);

	if( index > this.arr.length - 5) {
		//?????????????
	} else {
		this._judgeZero(index);
	}
};

_._setMax = function(m) {
	if( m > this.max) {
		this.max = m;
	}
};

var max = new foo();