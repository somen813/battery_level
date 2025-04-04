if (navigator.serviceWorker) {
	navigator.serviceWorker.register ('/service-worker.js')
}

navigator.getBattery().then((battery) => {
	console.log('Battery charging:', battery.charging);
	console.log('Battery level:', battery.level * 100, '%');
	console.log('Battery charging time:', battery.chargingTime, 'seconds');
	console.log('Battery discharging time:', battery.dischargingTime, 'seconds');
});

navigator.getBattery().then((battery) => {
	console.log('Battery charging status changed:', battery.charging);
	if(battery.charging === true) {
		BatteryLevel.textContent = '充電中';
	}else if(battery.charging === false) {
		BatteryLevel.textContent = `${battery.level * 100}%`;
	}
	console.log('Battery charging status changed:', battery.charging);
});

const BatteryLevel = document.querySelector('#BatteryLevel');
console.log(BatteryLevel.textContent);

navigator.getBattery().then((battery) => {
	battery.onchargingchange = () => {
		console.log('Battery charging status changed:', battery.charging);
		if(battery.charging === true) {
			BatteryLevel.textContent = '充電中';
		}else if(battery.charging === false) {
			BatteryLevel.textContent = `${battery.level * 100}%`;
		}
		console.log('Battery charging status changed:', battery.charging);
	};

	battery.onlevelchange = () => {
		 console.log('Battery level changed:', battery.level * 100, '%');
		 if(battery.level === 0.5) {
			const notification = new Notification(`バッテリー残量：${battery.level * 100}%`);
		 }else if(battery.level <= 10) {
			const notification = new Notification(`バッテリー残量が非常に少ないです。残り${battery.level * 100}%`);
		 }
	};
});