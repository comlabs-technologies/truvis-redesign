(() => {
  const canvas = document.querySelector('.hero-shader');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const gl = canvas?.getContext('webgl', {
    alpha: false, antialias: false, depth: false, powerPreference: 'low-power',
  });
  if (!gl) return;

  const vertexSource = `
    attribute vec2 a_position;
    void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
  `;
  const fragmentSource = `
    precision mediump float;
    uniform vec2 u_resolution;
    uniform float u_time;

    float lightPool(vec2 point, vec2 center, vec2 scale) {
      vec2 offset = (point - center) * scale;
      return exp(-dot(offset, offset));
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution;
      float phase = u_time * 0.38;
      vec2 drift = vec2(0.18 * sin(phase), 0.20 * cos(phase));
      float curve = uv.y - 0.50 - 0.26 * sin(uv.x * 4.0 - 1.3 + drift.x * 3.0) - drift.y;
      float ribbon = exp(-curve * curve * 16.0);
      float right = smoothstep(0.14, 0.92, uv.x);
      vec3 paper = vec3(0.995, 0.994, 1.0);
      vec3 blue = vec3(0.72, 0.77, 0.98);
      vec3 violet = vec3(0.84, 0.73, 0.96);
      vec3 mint = vec3(0.77, 0.91, 0.85);
      vec3 color = mix(paper, blue, ribbon * right * 0.38);
      color = mix(color, violet, lightPool(uv, vec2(0.81, 0.77) + drift, vec2(2.7, 2.45)) * right * 0.52);
      color = mix(color, mint, lightPool(uv, vec2(0.79, 0.10) - drift, vec2(2.8, 3.2)) * right * 0.53);
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  function compile(type, source) {
    const shader = gl.createShader(type);
    if (!shader) return null;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return shader;
    gl.deleteShader(shader);
    return null;
  }

  const vertex = compile(gl.VERTEX_SHADER, vertexSource);
  const fragment = compile(gl.FRAGMENT_SHADER, fragmentSource);
  const program = gl.createProgram();
  if (!vertex || !fragment || !program) return;
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  gl.deleteShader(vertex);
  gl.deleteShader(fragment);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
  gl.useProgram(program);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program, 'a_position');
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
  const resolution = gl.getUniformLocation(program, 'u_resolution');
  const time = gl.getUniformLocation(program, 'u_time');

  let visible = false;
  let frame = 0;
  let previous = 0;
  let elapsed = 0;
  let lost = false;

  function draw() {
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(resolution, canvas.width, canvas.height);
    gl.uniform1f(time, motion.matches ? 0 : elapsed);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    if (!canvas.hasAttribute('data-ready')) canvas.dataset.ready = 'true';
  }

  function tick(now) {
    if (previous) elapsed = (elapsed + (now - previous) / 1000) % (2 * Math.PI / 0.38);
    previous = now;
    draw();
    frame = requestAnimationFrame(tick);
  }

  function sync() {
    const shouldAnimate = visible && !document.hidden && !motion.matches && !lost;
    if (shouldAnimate && !frame) frame = requestAnimationFrame(tick);
    if (!shouldAnimate && frame) {
      cancelAnimationFrame(frame);
      frame = 0;
      previous = 0;
    }
  }

  const size = new ResizeObserver(() => {
    if (lost) return;
    const { clientWidth: width, clientHeight: height } = canvas;
    if (!width || !height) return;
    const scale = Math.min(window.devicePixelRatio || 1, 1.25, 1280 / width);
    canvas.width = Math.round(width * scale);
    canvas.height = Math.round(height * scale);
    draw();
  });
  size.observe(canvas);

  const intersection = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    sync();
  });
  intersection.observe(canvas);
  document.addEventListener('visibilitychange', sync);
  motion.addEventListener('change', () => {
    if (!lost) draw();
    sync();
  });
  canvas.addEventListener('webglcontextlost', () => {
    lost = true;
    delete canvas.dataset.ready;
    size.disconnect();
    intersection.disconnect();
    sync();
  });
})();
