var sumBigIntArr = function(A, B){
	var sz = Math.max(A.length, B.length);
	var arrTemp = [0];
	var C = [];
	var recentVal = 0;
	for(var i = 0; i < sz; i++){
		if(A[i] == null)	tempA = 0;
		else				tempA = parseInt(A[i]);
		if(B[i] == null)	tempB = 0;
		else				tempB = parseInt(B[i]);

		recentVal = tempA + tempB + arrTemp[i];
		C[i] = recentVal % 10;
		arrTemp[i+1] = (recentVal - C[i])/10;
	}
	if(arrTemp[sz] != null && arrTemp[sz] != 0)	C.push(arrTemp[sz]);
	return C;
}

var n = [];
n[0] = '37107287533902102798797998220837590246510135740250';
n[1] = '46376937677490009712648124896970078050417018260538';
n[2] = '74324986199524741059474233309513058123726617309629';
n[3] = '91942213363574161572522430563301811072406154908250';
n[4] = '23067588207539346171171980310421047513778063246676';
n[5] = '89261670696623633820136378418383684178734361726757';
n[6] = '28112879812849979408065481931592621691275889832738';
n[7] = '44274228917432520321923589422876796487670272189318';
n[8] = '47451445736001306439091167216856844588711603153276';
n[9] = '70386486105843025439939619828917593665686757934951';
n[10] = '62176457141856560629502157223196586755079324193331';
n[11] = '64906352462741904929101432445813822663347944758178';
n[12] = '92575867718337217661963751590579239728245598838407';
n[13] = '58203565325359399008402633568948830189458628227828';
n[14] = '80181199384826282014278194139940567587151170094390';
n[15] = '35398664372827112653829987240784473053190104293586';
n[16] = '86515506006295864861532075273371959191420517255829';
n[17] = '71693888707715466499115593487603532921714970056938';
n[18] = '54370070576826684624621495650076471787294438377604';
n[19] = '53282654108756828443191190634694037855217779295145';
n[20] = '36123272525000296071075082563815656710885258350721';
n[21] = '45876576172410976447339110607218265236877223636045';
n[22] = '17423706905851860660448207621209813287860733969412';
n[23] = '81142660418086830619328460811191061556940512689692';
n[24] = '51934325451728388641918047049293215058642563049483';
n[25] = '62467221648435076201727918039944693004732956340691';
n[26] = '15732444386908125794514089057706229429197107928209';
n[27] = '55037687525678773091862540744969844508330393682126';
n[28] = '18336384825330154686196124348767681297534375946515';
n[29] = '80386287592878490201521685554828717201219257766954';
n[30] = '78182833757993103614740356856449095527097864797581';
n[31] = '16726320100436897842553539920931837441497806860984';
n[32] = '48403098129077791799088218795327364475675590848030';
n[33] = '87086987551392711854517078544161852424320693150332';
n[34] = '59959406895756536782107074926966537676326235447210';
n[35] = '69793950679652694742597709739166693763042633987085';
n[36] = '41052684708299085211399427365734116182760315001271';
n[37] = '65378607361501080857009149939512557028198746004375';
n[38] = '35829035317434717326932123578154982629742552737307';
n[39] = '94953759765105305946966067683156574377167401875275';
n[40] = '88902802571733229619176668713819931811048770190271';
n[41] = '25267680276078003013678680992525463401061632866526';
n[42] = '36270218540497705585629946580636237993140746255962';
n[43] = '24074486908231174977792365466257246923322810917141';
n[44] = '91430288197103288597806669760892938638285025333403';
n[45] = '34413065578016127815921815005561868836468420090470';
n[46] = '23053081172816430487623791969842487255036638784583';
n[47] = '11487696932154902810424020138335124462181441773470';
n[48] = '63783299490636259666498587618221225225512486764533';
n[49] = '67720186971698544312419572409913959008952310058822';
n[50] = '95548255300263520781532296796249481641953868218774';
n[51] = '76085327132285723110424803456124867697064507995236';
n[52] = '37774242535411291684276865538926205024910326572967';
n[53] = '23701913275725675285653248258265463092207058596522';
n[54] = '29798860272258331913126375147341994889534765745501';
n[55] = '18495701454879288984856827726077713721403798879715';
n[56] = '38298203783031473527721580348144513491373226651381';
n[57] = '34829543829199918180278916522431027392251122869539';
n[58] = '40957953066405232632538044100059654939159879593635';
n[59] = '29746152185502371307642255121183693803580388584903';
n[60] = '41698116222072977186158236678424689157993532961922';
n[61] = '62467957194401269043877107275048102390895523597457';
n[62] = '23189706772547915061505504953922979530901129967519';
n[63] = '86188088225875314529584099251203829009407770775672';
n[64] = '11306739708304724483816533873502340845647058077308';
n[65] = '82959174767140363198008187129011875491310547126581';
n[66] = '97623331044818386269515456334926366572897563400500';
n[67] = '42846280183517070527831839425882145521227251250327';
n[68] = '55121603546981200581762165212827652751691296897789';
n[69] = '32238195734329339946437501907836945765883352399886';
n[70] = '75506164965184775180738168837861091527357929701337';
n[71] = '62177842752192623401942399639168044983993173312731';
n[72] = '32924185707147349566916674687634660915035914677504';
n[73] = '99518671430235219628894890102423325116913619626622';
n[74] = '73267460800591547471830798392868535206946944540724';
n[75] = '76841822524674417161514036427982273348055556214818';
n[76] = '97142617910342598647204516893989422179826088076852';
n[77] = '87783646182799346313767754307809363333018982642090';
n[78] = '10848802521674670883215120185883543223812876952786';
n[79] = '71329612474782464538636993009049310363619763878039';
n[80] = '62184073572399794223406235393808339651327408011116';
n[81] = '66627891981488087797941876876144230030984490851411';
n[82] = '60661826293682836764744779239180335110989069790714';
n[83] = '85786944089552990653640447425576083659976645795096';
n[84] = '66024396409905389607120198219976047599490197230297';
n[85] = '64913982680032973156037120041377903785566085089252';
n[86] = '16730939319872750275468906903707539413042652315011';
n[87] = '94809377245048795150954100921645863754710598436791';
n[88] = '78639167021187492431995700641917969777599028300699';
n[89] = '15368713711936614952811305876380278410754449733078';
n[90] = '40789923115535562561142322423255033685442488917353';
n[91] = '44889911501440648020369068063960672322193204149535';
n[92] = '41503128880339536053299340368006977710650566631954';
n[93] = '81234880673210146739058568557934581403627822703280';
n[94] = '82616570773948327592232845941706525094512325230608';
n[95] = '22918802058777319719839450180888072429661980811197';
n[96] = '77158542502016545090413245809786882778948721859617';
n[97] = '72107838435069186155435662884062257473692284509516';
n[98] = '20849603980134001723930671666823555245252804609722';
n[99] = '53503534226472524250874054075591789781264330331690';

var bigNs = [];
var sum = [];
for(var i = 0; i < 100; i++){
	bigNs[i] = n[i].split("");
	bigNs[i].reverse();
	if(i == 0) sum = bigNs[0];
	else	sum = sumBigIntArr(sum, bigNs[i]);
}

console.log(bigNs[99]);
console.log(sum.reverse().join());
//console.log(sumBigIntArr([2,3],[8,6]));