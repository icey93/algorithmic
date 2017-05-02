//创建二维数组
// var twod = [];
// var rows = 5;
// for(var i = 0; i < rows; ++i) {
// 	twod[i] =[];
// }

Array.matrix = function(numrows, numcols, initial) {
	var arr = [];
	for(var i = 0; i < numrows; ++i) {
		var columns = [];
		for(var j = 0; j < numcols; ++j) {
			columns[j] = initial;
		}
		arr[i] = columns;
	}
	return arr
}

//test
var nums = Array.matrix(5, 5, 0);
console.log(nums[1][1]);

var names = Array.matrix(3, 3, "");
names[1][2] = "Joe";
console.log(names[1][2]);

var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
var total = 0;
for(var row = 0; row < grades.length; ++row) {
	for(var col = 0; col < grades[row].length; ++ col) {
		total += grades[row][col];
	}
	average = total / grades[row].length;
	console.log('student' + parseInt(row + 1) + 'average' + average.toFixed(2));
	total = 0;
	average = 0.0;
}






