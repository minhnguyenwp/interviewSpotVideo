export function myFormatDate(strFormat, strDate){
	var dateFormat = require('dateformat');
	var now = new Date(strDate);
	if(now == 'Invalid Date') return 'Not Applicable';
	return dateFormat(now, strFormat);
}

export function getStd(props){
	return props.location.pathname.replace(props.match.path, '').replace('/','');
}