function notifyMe() {
	if(!("Notification" in window)) {
	  // ブラウザーが通知に対応しているか調べる
	  alert("このブラウザーはデスクトップ通知に対応していません。");
	}else if(Notification.permission !== "denied") {
	  // ユーザーにその権限を要求する必要がある
	  Notification.requestPermission();
	}
}

self.addEventListener('install', function (e) {
	console.log('service worker install')
	notifyMe();
})