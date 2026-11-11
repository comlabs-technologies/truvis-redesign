(() => {
  const canvas = document.querySelector('.cta-trail');
  const cta = canvas?.closest('.final-cta');
  const context = canvas?.getContext('2d');
  if (!cta || !context) return;

  const enabled = matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
  const characters = '01ABCDEF<>:·';
  const cell = 17;
  const duration = 680;
  const trail = new Map();
  let width = 0;
  let height = 0;
  let scale = 1;
  let previous = null;
  let frame = 0;

  function clear() {
    cancelAnimationFrame(frame);
    frame = 0;
    previous = null;
    trail.clear();
    context.clearRect(0, 0, width, height);
  }

  function draw(now) {
    frame = 0;
    context.clearRect(0, 0, width, height);
    context.fillStyle = '#e2d8ff';
    for (const [key, glyph] of trail) {
      const progress = Math.min(1, Math.max(0, (now - glyph.time) / duration));
      if (progress === 1) {
        trail.delete(key);
        continue;
      }
      const opacity = (1 - progress) ** 2 * glyph.strength;
      const y = glyph.y + progress * 11;
      context.globalAlpha = opacity * .33;
      context.fillRect(glyph.x - .5, y - 18, 1, 5 + progress * 5);
      context.globalAlpha = opacity;
      context.fillText(glyph.character, glyph.x, y);
    }
    context.globalAlpha = 1;
    if (trail.size) frame = requestAnimationFrame(draw);
  }

  function stamp(column, row, time, strength) {
    const x = (column + .5) * cell;
    const y = (row + .5) * cell;
    if (x < width * .46 || x > width || y < 0 || y > height) return;
    const key = `${column}:${row}`;
    if (trail.has(key)) trail.delete(key);
    trail.set(key, {
      x, y, time, strength,
      character: characters[Math.floor(Math.random() * characters.length)],
    });
    if (trail.size > 110) trail.delete(trail.keys().next().value);
  }

  cta.addEventListener('pointermove', event => {
    if (!enabled.matches || event.pointerType !== 'mouse') return;
    const bounds = canvas.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    if (x < bounds.width * .46 || y < 0 || y > bounds.height) {
      previous = null;
      return;
    }
    const density = Math.min(devicePixelRatio || 1, 2);
    if (width !== bounds.width || height !== bounds.height || scale !== density) {
      clear();
      width = bounds.width;
      height = bounds.height;
      scale = density;
      canvas.width = Math.round(width * scale);
      canvas.height = Math.round(height * scale);
      context.setTransform(scale, 0, 0, scale, 0, 0);
      context.font = '12px ui-monospace, monospace';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
    }

    const column = Math.floor(x / cell);
    const row = Math.floor(y / cell);
    if (previous?.column === column && previous.row === row) return;
    const start = previous || { column, row };
    const steps = Math.min(12, Math.max(1, Math.abs(column - start.column), Math.abs(row - start.row)));
    const time = performance.now();
    for (let step = 1; step <= steps; step++) {
      const cx = Math.round(start.column + (column - start.column) * step / steps);
      const cy = Math.round(start.row + (row - start.row) * step / steps);
      stamp(cx, cy, time, .67);
      stamp(cx - 1, cy + 1, time, .22);
      stamp(cx + 1, cy - 1, time, .24);
    }
    previous = { column, row };
    if (!frame) frame = requestAnimationFrame(draw);
  }, { passive: true });

  cta.addEventListener('pointerleave', () => { previous = null; });
  enabled.addEventListener('change', clear);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) clear();
  });
})();
