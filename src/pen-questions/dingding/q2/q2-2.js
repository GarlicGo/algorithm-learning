// 编辑试题描述 编写函数format实现金额按千分位分隔转化，如：
// format('12345') --> '12,345.00'
// format('1234.5') --> '1,234.50'
// 规则：
// 1.保留2位小数
// 2 整数部分每3位用逗号分隔 3.禁止使用js原生的toLocaleString方法
function format(amount) {
    // 确保输入是字符串
    const amountStr = String(amount);

    // 分割整数和小数部分
    let [integer, decimal] = amountStr.split('.');

    // 格式化整数部分
    let formattedInteger = '';
    for (let i = integer.length - 1; i >= 0; i--) {
        const reverseIndex = integer.length - 1 - i;
        if (reverseIndex > 0 && reverseIndex % 3 === 0) {
            formattedInteger = ',' + formattedInteger;
        }
        formattedInteger = integer[i] + formattedInteger;
    }

    // 处理小数部分
    if (decimal === undefined) {
        decimal = '00';
    } else if (decimal.length === 1) {
        decimal += '0';
    } else if (decimal.length > 2) {
        decimal = decimal.substring(0, 2);
    }

    // 组合整数和小数部分
    return `${formattedInteger}.${decimal}`;
}

// 测试代码
console.log(format('12345'));
console.log(format('1234.5'));