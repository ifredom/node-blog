export function pad(num) {
    return (num > 9 ? '' : '0') + num;
}
export function generator(time, index) {
    if (!time) return 'file.log';

    var month = time.getFullYear() + '' + pad(time.getMonth() + 1);
    var day = pad(time.getDate());
    var hour = pad(time.getHours());
    var minute = pad(time.getMinutes());

    return month + '/' + month + day + '-' + hour + minute + '-' + index + '-file.log';
}
