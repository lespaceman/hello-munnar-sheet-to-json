let convertedJson = [];

// destinationData.forEach((destination) => {
// 	const regex = /\(([^()]+)\)|([^,()\s]+)/g;

// 	Object.keys(destination).forEach(function (key) {
// 		if (
// 			key == 'activitiesid' ||
// 			key == 'challengesid' ||
// 			key == 'activitytagsid' ||
// 			key == 'atmaminityid' ||
// 			key == 'bankaminityid' ||
// 			key == 'wastebinaminityid' ||
// 			key == 'fuelStationaminityid' ||
// 			key == 'hospitalAminityId' ||
// 			key == 'ffid'
// 		) {
// 			destination[key] = destination[key].match(regex);
// 		}
// 	});
// 	convertedJson.push(destination);
// });

activityData.forEach((destination) => {
	const regex = /\(([^()]+)\)|([^,()\s]+)/g;

	Object.keys(destination).forEach(function (key) {
		if (key == 'activitychallangesid') {
			destination[key] = destination[key].match(regex);
		}
	});
	convertedJson.push(destination);
});

console.log(JSON.stringify(convertedJson));
