Array.prototype.uniq = function() {
  let result = [];
  let i = 0;
  while (i < this.length) {
    if (result.indexOf(this[i]) === -1) {
      result.push(this[i]);
    }
    i++;
  }
  return result;
};

Array.prototype.twoSum = function() {
  let result = [];
  let i = 0;
  while (i < this.length) {
    j = i + 1;
    while (j < this.length) {
      if (this[i] + this[j] === 0) {
        result.push([i, j]);
      }
      j++;
    }
    i++;
  }

  return result;
};

Array.prototype.transpose = function() {
  let result = [];
  let i = 0;
  while (i < this[0].length) {
    let temp = [];
    for (var j = 0; j < this.length; j++) {
      temp.push(this[j][i]);
    }
    i++;
    result.push(temp);
  }
  return result;
};

Array.prototype.myEach = function(callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function(callback) {
  let result = [];
  for (var i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }
  return result;
};

Array.prototype.myReduce = function(cb, acc) {
  i = 0;
  if (acc === undefined) {
    acc = this[0];
    i += 1;
  }
  while (i < this.length) {
    acc = cb(acc, this[i]);
    i += 1;
  }
  return acc;
};

Array.prototype.bubbleSort = function() {
  let not_sorted = true;
  while(not_sorted) {
    not_sorted = false;
    i = 0;
    while (i < this.length - 1) {
      if (this[i] > this[i + 1]) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
        not_sorted = true;
      }
      i += 1;
    }
  }
  return this;
};

String.prototype.subStrings = function() {
  let result = [];

  for (var i = 0; i < this.length; i++) {
    temp = this[i];
    result.push(temp);
    for (var j = i + 1; j < this.length; j++) {
      temp += this[j];
      result.push(temp);
    }
  }
  return result;
};

function range(start, end) {
  let result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumRec(arr.slice(1));
}

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * exponent(base, exp - 1);
}

function exponent2(base, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp === 1) {
    return base;
  }
  if (exp % 2 === 0) {
    return Math.pow(exponent2(base, exp/2), 2);
  } else {
    return base * Math.pow(exponent2(base, (exp - 1)/ 2), 2);
  }
}

function fibonacci(n) {
  if (n <= 2) {
    return [1, 1];
  }
  let result = fibonacci(n - 1);
  result.push(result[result.length - 1] + result[result.length - 2]);
  return result;
}

function deepDup(arr) {
  let result = [];
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      result.push(arr[i]);
    } else {
      result.push(deepDup(arr[i]));
    }
  }
  return result;
}
