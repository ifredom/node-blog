export function getUserInfo () {
  let user = sessionStorage.getItem('userinfo');
  if (user) return user;
}
export function getUserId () {
  let user = sessionStorage.getItem('userinfo');
  if (user) return user.opId;
}
export function getToken () {
  let user = sessionStorage.getItem('userinfo');
  if (user) return user.token;
}

export const deepCopy = source => {
  var sourceCopy = source instanceof Array ? [] : {};
  for (var item in source) {
    sourceCopy[item] =
      typeof source[item] === 'object' ? deepCopy(source[item]) : source[item];
  }
  return sourceCopy;
};
export const systemType = source => {
  var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    return 'ios';
  } else {
    return 'android';
  }
};
