(() => {
	const SETTINGS_KEY = "vanta_settings";

	function load() {
		try {
			return JSON.parse(localStorage.getItem(SETTINGS_KEY));
		} catch {
			return null;
		}
	}

	document.addEventListener(
		"keydown",
		e => {
			const s = load();
			if (!s?.panicKey || !s?.panicUrl) return;

			if (e.key === s.panicKey) {
				e.preventDefault();
				e.stopImmediatePropagation();

				// Escape iframe, force redirect
				window.top.location.replace(s.panicUrl);
			}
		},
		true // CAPTURE PHASE = strongest possible
	);
})();
