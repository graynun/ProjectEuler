var tree = {
		id: 1,
		children: [
			{
				id: 2,
				children: [
					{
						id: 5
					},
					{
						id: 6,
						children: [
							{
								id: 12,
								children: [
									{
										id: 19
									},
									{
										id: 20
									}
								]
							},
							{
								id: 13
							}
						]
					},
					{
						id: 7
					}
				]
			},
			{
				id: 3,
				children: [
					{
						id: 8
					},
					{
						id: 9,
						children: [
							{
								id: 14
							},
							{
								id: 15
							},
							{
								id: 16
							}
						]
					}
				]
			},
			{
				id: 4,
				children: [
					{
						id: 10
					},
					{
						id: 11,
						children: [
							{
								id: 17
							},
							{
								id: 18
							}
						]
					}
				]
			}
		]
	};

var arr = [],
	hasChild = [];
var foo = function(data) {
	arr.push(data.id);
	
	if(data.hasOwnProperty('children')) {
		for( var i in data.children ) {
			foo(data.children[i]);
		}
	} else {
		return;
	}
};

foo(tree);

console.log(arr);