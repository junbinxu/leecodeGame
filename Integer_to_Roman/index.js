/**
 * @param {number} num
 * @return {string}
 * 整数转罗马数字
 * 思路:
 *  分别对每个数位的数字转化成罗马数字（对4,9,40,90,400,900特殊判断）
 */
var intToRoman = function(num) {
    var romanMap = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'L',
        100: 'C',
        500: 'D',
        1000: 'M'
    }
    var numMap = [
        ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
        ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
        ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
        ['', 'M', 'MM', 'MMM']
    ];

    var str = (num + '').split('');
    var res = '';

    for(var i = 0, iLen = str.length; i < iLen; i++) {
        res += numMap[iLen - i - 1][parseInt(str[i])]
    }

    return res;
};
