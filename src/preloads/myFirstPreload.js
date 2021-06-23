function runPreload() {
	FSBL.Clients.LinkerClient.subscribe("account", (acc) => {
		// This function is a built-in global in both the
		// Account Detail and Account Statement apps
		// that we'll reuse.
		window.displayAccount(acc);
	});
}

// this code ensures that the FSBL library has been initialized
if (window.FSBL && FSBL.addEventListener) {
	FSBL.addEventListener("onReady", runPreload);
} else {
	window.addEventListener("FSBLReady", runPreload);
}
