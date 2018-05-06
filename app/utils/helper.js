export function myFormatDate(strFormat, strDate){
    if(strDate == '0000-00-00 00:00:00') return 'Not Applicable';
	var dateFormat = require('dateformat');
	var now = new Date(strDate);
	if(now == 'Invalid Date' || now == '01-01-1970') return 'Not Applicable';
	return dateFormat(now, strFormat);
}

export function getStd(props){
	return props.location.pathname.replace(props.match.path, '').replace('/','');
}

export function parseQuery(queryStr){
    var queryArr = queryStr.replace('?','').split('&'),
      queryParams = [];

    for (var q = 0, qArrLength = queryArr.length; q < qArrLength; q++) {
        var qArr = queryArr[q].split('=');
        queryParams[qArr[0]] = qArr[1];
    }

    return queryParams;
}

export function nth(n){return["st","nd","rd"][((n+90)%100-10)%10-1]||"th"}


export function toHHMMSS(sec){
    var str = new Date(sec * 1000).toISOString().substr(11, 8);
    var h = str.substr(0, 2)
    if(h == '00') // h == 0
    str = str.substr(3, 5)
    return str
}