function formatDuration(seconds) {
	let year = 0;
	let day = 0;
	let hour = 0;
	let minute = 0;
	let str = "";
	let strYear = "";
	let strDay = "";
	let strHour = "";
	let strMinute = "";
	let strSeconds = "";
  if (seconds == 0) return "now"; 
	while (seconds >= 31536000) {
		seconds -= 31536000;
		year += 1;
	}
	while (seconds >= 86400) {
		day += 1;
		seconds -= 86400;
	}
	while (seconds >= 3600) {
		hour += 1;
		seconds -= 3600;
	}

	while (seconds >= 60) {
		minute += 1;
		seconds -= 60;
	}
	if (year == 1) strYear = "1 year"
	else if (year > 1) {
		strYear = year + " years"
	}

	if (day == 1) strDay += "1 day"
	else if (day > 1) {
		strDay = day + " days"
	}

	if (hour == 1) strHour = "1 hour"
	else if (hour > 1) {
		strHour = hour + " hours"
	}

	if (minute == 1) strMinute = "1 minute"
	else if (minute > 1) {
		strMinute = minute + " minutes"
	}

	if (seconds == 1) strSeconds = "1 second"
	else if (seconds > 1) {
		strSeconds = seconds + " seconds"
	}
	let mas = [strYear, strDay, strHour, strMinute, strSeconds];
	let masLength = mas.length + 2;


	for (let i = 0; i < masLength; i++) {
		if (mas[i] == "") mas.splice(i, 1);
		//console.log("splice");
	}
	for (let i = 0; i < masLength; i++) {
		if (mas[i] == "") mas.splice(i, 1);

	}
	for (let i = 0; i < masLength; i++) {
		if (mas[i] == "") mas.splice(i, 1);

	}

	if (mas.length == 1) {
		str = mas[0];

	}
	else if (mas.length == 2) {
		mas.splice(mas.length - 1, 0, " and ");
		for (let i = 0; i < mas.length; i++) {
			str += mas[i];
		}
	}
		else if (mas.length == 3) {
			mas.splice(mas.length - 1, 0, " and ");
			mas.splice(1, 0, ", ");
				for (let i = 0; i < mas.length; i++) {
				str += mas[i];
			}
		}

			else if (mas.length == 4) {
				mas.splice(mas.length - 1, 0, " and ");
				mas.splice(1, 0, ", ");
				mas.splice(3, 0, ", ");
					for (let i = 0; i < mas.length; i++) {
					str += mas[i];
				}
}

else if (mas.length == 5) {
	mas.splice(mas.length - 1, 0, " and ");
	mas.splice(1, 0, ", ");
	mas.splice(3, 0, ", ");
	mas.splice(5, 0, ", ");
		for (let i = 0; i < mas.length; i++) {
		str += mas[i];
	}
}

			let strLength2 = str.length;
			//console.log(str[str.length-1]);
			for (let i = 0; i < strLength2; i++) {
				if (str[str.length - 1] == " ") str.slice(0, -1);
			}
		
		return str;
	}