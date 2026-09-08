/* Page outline. Builds itself from the headings already in the document, so
   there is nothing to keep in sync, and marks the one you are reading.
   The whole component is progressive: without it every section is still
   reachable by scrolling. */
(function () {
	var nav = document.querySelector('.outline');
	var main = document.querySelector('main');
	if (!nav || !main) return;

	var nodes = main.querySelectorAll('.section__head h2, .card__title, .paper__title');
	if (nodes.length < 3) { nav.remove(); return; }

	var list = document.createElement('ol');
	list.className = 'outline__list';
	var targets = [];
	var links = [];

	Array.prototype.forEach.call(nodes, function (node, i) {
		var isSection = node.tagName === 'H2';
		var host = node.closest(isSection ? '.section' : '.card, .paper') || node;
		if (!host.id) host.id = 'o' + i;
		targets.push(host);

		var a = document.createElement('a');
		a.className = 'outline__link';
		a.href = '#' + host.id;
		var bar = document.createElement('span');
		bar.className = 'outline__bar';
		var label = document.createElement('span');
		label.className = 'outline__label';
		label.textContent = node.textContent.trim();
		a.appendChild(bar);
		a.appendChild(label);

		var li = document.createElement('li');
		li.className = 'outline__item ' + (isSection ? 'is-section' : 'is-entry');
		li.appendChild(a);
		list.appendChild(li);
		links.push(a);
	});

	nav.appendChild(list);

	var current = -1;
	function update() {
		var idx = 0;
		for (var i = 0; i < targets.length; i++) {
			if (targets[i].getBoundingClientRect().top <= 170) idx = i;
		}
		if (idx === current) return;
		if (current > -1) links[current].classList.remove('is-current');
		current = idx;
		links[current].classList.add('is-current');
	}

	var queued = false;
	function onScroll() {
		if (queued) return;
		queued = true;
		requestAnimationFrame(function () { update(); queued = false; });
	}

	window.addEventListener('scroll', onScroll, { passive: true });
	window.addEventListener('resize', onScroll, { passive: true });
	update();
})();
