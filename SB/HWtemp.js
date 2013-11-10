
var payCoins = function(price, kindOfCoins){
	kindOfCoins.sort(function(a,b){return b-a;});
	var sz = kindOfCoins.length;
	
	var result = {};
	result['total'] = Infinity;
	result['coins'] = [];
	
	for(var i = 0; i < sz; i++){
		if(price % kindOfCoins[i] == 0){
			var num_total = price/kindOfCoins[i];
			var coins = [[kindOfCoins[i], num_total]];
		}else{
			var remain_price = price % kindOfCoins[i];
			var remain = payCoins(remain_price,kindOfCoins.slice(i+1));
			var num_remain = 0;
			remain['coins'].map(function(a){ num_remain += a[1]; return a; });

			var num_this = (price - remain_price)/kindOfCoins[i];
			var num_total = num_this + num_remain;
			
			var coins = remain['coins'];
			if(num_this != 0){
				coins.unshift([kindOfCoins[i],num_this]);
			}
		}
		if(result['total'] > num_total){
			result['total'] = num_total;
			result['coins'] = coins;
		}
	}
	return result;
}

console.log(payCoins(13,[1,4,5]));