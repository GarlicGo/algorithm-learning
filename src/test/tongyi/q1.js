// 请通过代码实现大整数（可能比Number.MAX_VALUE大）相加运算

var BigInt = function(str) {
    this.value = str;
}

BigInt.prototype.plus = function(bigint) {
    let str1 = this.value;
    let str2 = bigint.value;
    
    if (str1.length < str2.length) {
        [str1, str2] = [str2, str1];
    }
    
    let result = '';
    let carry = 0;
    
    for (let i = 1; i <= str1.length; i++) {
        let digit1 = parseInt(str1[str1.length - i]);
        let digit2 = parseInt(str2[str2.length - i] || '0');
        
        let sum = digit1 + digit2 + carry;
        carry = Math.floor(sum / 10); 
        result = (sum % 10) + result; 
    }
    
    if (carry > 0) {
        result = carry + result;
    }
    
    return this.toString(result);
};

BigInt.prototype.toString = function(result) {
    return result;
}

var bigint1 = new BigInt('1234232453525454546445451434342153453454545454545454');
var bigint2 = new BigInt('1234232453525454546445451434342153453454545454545454');
console.log(bigint1.plus(bigint2));