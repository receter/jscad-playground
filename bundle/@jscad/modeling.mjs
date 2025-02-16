const Ic = (t) =>
  t.reduce((e, n) => (Array.isArray(n) ? e.concat(Ic(n)) : e.concat(n)), []);
var V = Ic;
const Di = (t) => Object.assign({}, t);
var Li = Di;
const Ii = (t, e, n) => (
  (t[0] = e[0] + n[0]),
  (t[1] = e[1] + n[1]),
  (t[2] = e[2] + n[2]),
  (t[3] = e[3] + n[3]),
  (t[4] = e[4] + n[4]),
  (t[5] = e[5] + n[5]),
  (t[6] = e[6] + n[6]),
  (t[7] = e[7] + n[7]),
  (t[8] = e[8] + n[8]),
  (t[9] = e[9] + n[9]),
  (t[10] = e[10] + n[10]),
  (t[11] = e[11] + n[11]),
  (t[12] = e[12] + n[12]),
  (t[13] = e[13] + n[13]),
  (t[14] = e[14] + n[14]),
  (t[15] = e[15] + n[15]),
  t
);
var Zi = Ii;
const Xi = () => [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
var Bs = Xi;
const Yi = Bs,
  Hi = (t) => {
    const e = Yi();
    return (
      (e[0] = t[0]),
      (e[1] = t[1]),
      (e[2] = t[2]),
      (e[3] = t[3]),
      (e[4] = t[4]),
      (e[5] = t[5]),
      (e[6] = t[6]),
      (e[7] = t[7]),
      (e[8] = t[8]),
      (e[9] = t[9]),
      (e[10] = t[10]),
      (e[11] = t[11]),
      (e[12] = t[12]),
      (e[13] = t[13]),
      (e[14] = t[14]),
      (e[15] = t[15]),
      e
    );
  };
var Ui = Hi;
const Wi = (t, e) => (
  (t[0] = e[0]),
  (t[1] = e[1]),
  (t[2] = e[2]),
  (t[3] = e[3]),
  (t[4] = e[4]),
  (t[5] = e[5]),
  (t[6] = e[6]),
  (t[7] = e[7]),
  (t[8] = e[8]),
  (t[9] = e[9]),
  (t[10] = e[10]),
  (t[11] = e[11]),
  (t[12] = e[12]),
  (t[13] = e[13]),
  (t[14] = e[14]),
  (t[15] = e[15]),
  t
);
var Zc = Wi;
const Ki = (t, e) => {
  const n = e[0],
    s = e[1],
    o = e[2],
    r = e[3],
    c = e[4],
    a = e[5],
    i = e[6],
    l = e[7],
    f = e[8],
    u = e[9],
    h = e[10],
    d = e[11],
    p = e[12],
    g = e[13],
    $ = e[14],
    v = e[15],
    y = n * a - s * c,
    x = n * i - o * c,
    m = n * l - r * c,
    P = s * i - o * a,
    w = s * l - r * a,
    E = o * l - r * i,
    A = f * g - u * p,
    b = f * $ - h * p,
    _ = f * v - d * p,
    S = u * $ - h * g,
    M = u * v - d * g,
    q = h * v - d * $;
  let B = y * q - x * M + m * S + P * _ - w * b + E * A;
  return B
    ? ((B = 1 / B),
      (t[0] = (a * q - i * M + l * S) * B),
      (t[1] = (o * M - s * q - r * S) * B),
      (t[2] = (g * E - $ * w + v * P) * B),
      (t[3] = (h * w - u * E - d * P) * B),
      (t[4] = (i * _ - c * q - l * b) * B),
      (t[5] = (n * q - o * _ + r * b) * B),
      (t[6] = ($ * m - p * E - v * x) * B),
      (t[7] = (f * E - h * m + d * x) * B),
      (t[8] = (c * M - a * _ + l * A) * B),
      (t[9] = (s * _ - n * M - r * A) * B),
      (t[10] = (p * w - g * m + v * y) * B),
      (t[11] = (u * m - f * w - d * y) * B),
      (t[12] = (a * b - c * S - i * A) * B),
      (t[13] = (n * S - s * b + o * A) * B),
      (t[14] = (g * x - p * P - $ * y) * B),
      (t[15] = (f * P - u * x + h * y) * B),
      t)
    : null;
};
var Qi = Ki;
const Ji = (t, e) =>
  t[0] === e[0] &&
  t[1] === e[1] &&
  t[2] === e[2] &&
  t[3] === e[3] &&
  t[4] === e[4] &&
  t[5] === e[5] &&
  t[6] === e[6] &&
  t[7] === e[7] &&
  t[8] === e[8] &&
  t[9] === e[9] &&
  t[10] === e[10] &&
  t[11] === e[11] &&
  t[12] === e[12] &&
  t[13] === e[13] &&
  t[14] === e[14] &&
  t[15] === e[15];
var ji = Ji;
const tl = 1e5,
  el = 1e-5,
  nl = 1e-13,
  sl = Math.PI * 2;
var D = {
  EPS: el,
  NEPS: nl,
  TAU: sl,
  spatialResolution: tl,
};
const { NEPS: ol } = D,
  Xc = (t) => (Math.abs(t) < ol ? 0 : t),
  rl = (t) => Xc(Math.sin(t)),
  cl = (t) => Xc(Math.cos(t));
var tt = { sin: rl, cos: cl };
const al = (t) => (
  (t[0] = 1),
  (t[1] = 0),
  (t[2] = 0),
  (t[3] = 0),
  (t[4] = 0),
  (t[5] = 1),
  (t[6] = 0),
  (t[7] = 0),
  (t[8] = 0),
  (t[9] = 0),
  (t[10] = 1),
  (t[11] = 0),
  (t[12] = 0),
  (t[13] = 0),
  (t[14] = 0),
  (t[15] = 1),
  t
);
var Yc = al;
const { EPS: il } = D,
  { sin: ll, cos: fl } = tt,
  ul = Yc,
  hl = (t, e, n) => {
    let [s, o, r] = n;
    const c = s * s + o * o + r * r;
    if (Math.abs(c) < il) return ul(t);
    const a = 1 / Math.sqrt(c);
    (s *= a), (o *= a), (r *= a);
    const i = ll(e),
      l = fl(e),
      f = 1 - l;
    return (
      (t[0] = s * s * f + l),
      (t[1] = o * s * f + r * i),
      (t[2] = r * s * f - o * i),
      (t[3] = 0),
      (t[4] = s * o * f - r * i),
      (t[5] = o * o * f + l),
      (t[6] = r * o * f + s * i),
      (t[7] = 0),
      (t[8] = s * r * f + o * i),
      (t[9] = o * r * f - s * i),
      (t[10] = r * r * f + l),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      t
    );
  };
var Hc = hl;
const dl = (t, e) => (
  (t[0] = e[0]),
  (t[1] = 0),
  (t[2] = 0),
  (t[3] = 0),
  (t[4] = 0),
  (t[5] = e[1]),
  (t[6] = 0),
  (t[7] = 0),
  (t[8] = 0),
  (t[9] = 0),
  (t[10] = e[2]),
  (t[11] = 0),
  (t[12] = 0),
  (t[13] = 0),
  (t[14] = 0),
  (t[15] = 1),
  t
);
var gl = dl;
const { sin: Vn, cos: Rn } = tt,
  pl = (t, e, n, s) => {
    const o = Vn(e),
      r = Rn(e),
      c = Vn(n),
      a = Rn(n),
      i = Vn(s),
      l = Rn(s);
    return (
      (t[0] = a * r),
      (t[1] = a * o),
      (t[2] = -c),
      (t[3] = 0),
      (t[4] = i * c * r - l * o),
      (t[5] = l * r + i * c * o),
      (t[6] = i * a),
      (t[7] = 0),
      (t[8] = i * o + l * c * r),
      (t[9] = l * c * o - i * r),
      (t[10] = l * a),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      t
    );
  };
var $l = pl;
const ml = (t, e) => (
  (t[0] = 1),
  (t[1] = 0),
  (t[2] = 0),
  (t[3] = 0),
  (t[4] = 0),
  (t[5] = 1),
  (t[6] = 0),
  (t[7] = 0),
  (t[8] = 0),
  (t[9] = 0),
  (t[10] = 1),
  (t[11] = 0),
  (t[12] = e[0]),
  (t[13] = e[1]),
  (t[14] = e[2]),
  (t[15] = 1),
  t
);
var vl = ml;
const yl = Bs,
  wl = (t, e, n, s, o, r, c, a, i, l, f, u, h, d, p, g) => {
    const $ = yl();
    return (
      ($[0] = t),
      ($[1] = e),
      ($[2] = n),
      ($[3] = s),
      ($[4] = o),
      ($[5] = r),
      ($[6] = c),
      ($[7] = a),
      ($[8] = i),
      ($[9] = l),
      ($[10] = f),
      ($[11] = u),
      ($[12] = h),
      ($[13] = d),
      ($[14] = p),
      ($[15] = g),
      $
    );
  };
var xl = wl;
const Pl = (t, e) => (
  (t[0] = Math.abs(e[0])), (t[1] = Math.abs(e[1])), (t[2] = Math.abs(e[2])), t
);
var Uc = Pl;
const El = (t, e, n) => (
  (t[0] = e[0] + n[0]), (t[1] = e[1] + n[1]), (t[2] = e[2] + n[2]), t
);
var Wc = El;
const Al = (t, e) => t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
var pn = Al;
const bl = pn,
  Sl = (t, e) => {
    const n = t[0],
      s = t[1],
      o = t[2],
      r = e[0],
      c = e[1],
      a = e[2],
      i = Math.sqrt(n * n + s * s + o * o),
      l = Math.sqrt(r * r + c * c + a * a),
      f = i * l,
      u = f && bl(t, e) / f;
    return Math.acos(Math.min(Math.max(u, -1), 1));
  };
var _l = Sl;
const Tl = () => [0, 0, 0];
var $n = Tl;
const Ml = $n,
  kl = (t) => {
    const e = Ml();
    return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), e;
  };
var Nl = kl;
const Ol = (t, e) => ((t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t);
var Kc = Ol;
const Bl = (t, e, n) => {
  const s = e[0],
    o = e[1],
    r = e[2],
    c = n[0],
    a = n[1],
    i = n[2];
  return (
    (t[0] = o * i - r * a), (t[1] = r * c - s * i), (t[2] = s * a - o * c), t
  );
};
var ke = Bl;
const Vl = (t, e) => {
  const n = e[0] - t[0],
    s = e[1] - t[1],
    o = e[2] - t[2];
  return Math.sqrt(n * n + s * s + o * o);
};
var Qc = Vl;
const Rl = (t, e, n) => (
  (t[0] = e[0] / n[0]), (t[1] = e[1] / n[1]), (t[2] = e[2] / n[2]), t
);
var Fl = Rl;
const Cl = (t, e) => t[0] === e[0] && t[1] === e[1] && t[2] === e[2];
var ql = Cl;
const Gl = (t, e) => ((t[0] = e), (t[1] = e), (t[2] = e), t);
var zl = Gl;
const Dl = $n,
  Ll = (t, e, n) => {
    const s = Dl();
    return (s[0] = t), (s[1] = e), (s[2] = n), s;
  };
var Il = Ll;
const Zl = (t, e, n = 0) => ((t[0] = e[0]), (t[1] = e[1]), (t[2] = n), t);
var Xl = Zl;
const Yl = (t) => {
  const e = t[0],
    n = t[1],
    s = t[2];
  return Math.sqrt(e * e + n * n + s * s);
};
var Jc = Yl;
const Hl = (t, e, n, s) => (
  (t[0] = e[0] + s * (n[0] - e[0])),
  (t[1] = e[1] + s * (n[1] - e[1])),
  (t[2] = e[2] + s * (n[2] - e[2])),
  t
);
var Ul = Hl;
const Wl = (t, e, n) => (
  (t[0] = Math.max(e[0], n[0])),
  (t[1] = Math.max(e[1], n[1])),
  (t[2] = Math.max(e[2], n[2])),
  t
);
var jc = Wl;
const Kl = (t, e, n) => (
  (t[0] = Math.min(e[0], n[0])),
  (t[1] = Math.min(e[1], n[1])),
  (t[2] = Math.min(e[2], n[2])),
  t
);
var ta = Kl;
const Ql = (t, e, n) => (
  (t[0] = e[0] * n[0]), (t[1] = e[1] * n[1]), (t[2] = e[2] * n[2]), t
);
var Jl = Ql;
const jl = (t, e) => ((t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), t);
var t1 = jl;
const e1 = (t, e) => {
  const n = e[0],
    s = e[1],
    o = e[2];
  let r = n * n + s * s + o * o;
  return (
    r > 0 && (r = 1 / Math.sqrt(r)),
    (t[0] = n * r),
    (t[1] = s * r),
    (t[2] = o * r),
    t
  );
};
var Vs = e1;
const n1 = Uc,
  s1 = $n,
  o1 = ke,
  r1 = (t, e) => {
    const n = n1(s1(), e),
      s = 0 + (n[0] < n[1] && n[0] < n[2]),
      o = 0 + (n[1] <= n[0] && n[1] < n[2]),
      r = 0 + (n[2] <= n[0] && n[2] <= n[1]);
    return o1(t, e, [s, o, r]);
  };
var c1 = r1;
const a1 = (t, e, n, s) => {
  const o = [],
    r = [];
  return (
    (o[0] = e[0] - n[0]),
    (o[1] = e[1] - n[1]),
    (o[2] = e[2] - n[2]),
    (r[0] = o[0]),
    (r[1] = o[1] * Math.cos(s) - o[2] * Math.sin(s)),
    (r[2] = o[1] * Math.sin(s) + o[2] * Math.cos(s)),
    (t[0] = r[0] + n[0]),
    (t[1] = r[1] + n[1]),
    (t[2] = r[2] + n[2]),
    t
  );
};
var i1 = a1;
const l1 = (t, e, n, s) => {
  const o = [],
    r = [];
  return (
    (o[0] = e[0] - n[0]),
    (o[1] = e[1] - n[1]),
    (o[2] = e[2] - n[2]),
    (r[0] = o[2] * Math.sin(s) + o[0] * Math.cos(s)),
    (r[1] = o[1]),
    (r[2] = o[2] * Math.cos(s) - o[0] * Math.sin(s)),
    (t[0] = r[0] + n[0]),
    (t[1] = r[1] + n[1]),
    (t[2] = r[2] + n[2]),
    t
  );
};
var f1 = l1;
const u1 = (t, e, n, s) => {
  const o = [],
    r = [];
  return (
    (o[0] = e[0] - n[0]),
    (o[1] = e[1] - n[1]),
    (r[0] = o[0] * Math.cos(s) - o[1] * Math.sin(s)),
    (r[1] = o[0] * Math.sin(s) + o[1] * Math.cos(s)),
    (t[0] = r[0] + n[0]),
    (t[1] = r[1] + n[1]),
    (t[2] = e[2]),
    t
  );
};
var h1 = u1;
const d1 = (t, e, n) => (
  (t[0] = e[0] * n), (t[1] = e[1] * n), (t[2] = e[2] * n), t
);
var ea = d1;
const g1 = (t, e, n) => (
  (t[0] = Math.round(e[0] / n) * n + 0),
  (t[1] = Math.round(e[1] / n) * n + 0),
  (t[2] = Math.round(e[2] / n) * n + 0),
  t
);
var p1 = g1;
const $1 = (t, e) => {
  const n = e[0] - t[0],
    s = e[1] - t[1],
    o = e[2] - t[2];
  return n * n + s * s + o * o;
};
var na = $1;
const m1 = (t) => {
  const e = t[0],
    n = t[1],
    s = t[2];
  return e * e + n * n + s * s;
};
var sa = m1;
const v1 = (t, e, n) => (
  (t[0] = e[0] - n[0]), (t[1] = e[1] - n[1]), (t[2] = e[2] - n[2]), t
);
var mn = v1;
const y1 = (t) =>
  `[${t[0].toFixed(7)}, ${t[1].toFixed(7)}, ${t[2].toFixed(7)}]`;
var w1 = y1;
const x1 = (t, e, n) => {
  const s = e[0],
    o = e[1],
    r = e[2];
  let c = n[3] * s + n[7] * o + n[11] * r + n[15];
  return (
    (c = c || 1),
    (t[0] = (n[0] * s + n[4] * o + n[8] * r + n[12]) / c),
    (t[1] = (n[1] * s + n[5] * o + n[9] * r + n[13]) / c),
    (t[2] = (n[2] * s + n[6] * o + n[10] * r + n[14]) / c),
    t
  );
};
var P1 = x1;
var N = {
  abs: Uc,
  add: Wc,
  angle: _l,
  clone: Nl,
  copy: Kc,
  create: $n,
  cross: ke,
  distance: Qc,
  divide: Fl,
  dot: pn,
  equals: ql,
  fromScalar: zl,
  fromValues: Il,
  fromVec2: Xl,
  length: Jc,
  lerp: Ul,
  max: jc,
  min: ta,
  multiply: Jl,
  negate: t1,
  normalize: Vs,
  orthogonal: c1,
  rotateX: i1,
  rotateY: f1,
  rotateZ: h1,
  scale: ea,
  snap: p1,
  squaredDistance: na,
  squaredLength: sa,
  subtract: mn,
  toString: w1,
  transform: P1,
};
const At = N,
  E1 = Hc,
  A1 = (t, e, n) => {
    const s = At.normalize(At.create(), e),
      o = At.normalize(At.create(), n),
      r = At.cross(At.create(), o, s),
      c = At.dot(o, s);
    if (c === -1) return E1(t, Math.PI, At.orthogonal(r, s));
    const a = 1 / (1 + c);
    return (
      (t[0] = r[0] * r[0] * a + c),
      (t[1] = r[1] * r[0] * a - r[2]),
      (t[2] = r[2] * r[0] * a + r[1]),
      (t[3] = 0),
      (t[4] = r[0] * r[1] * a + r[2]),
      (t[5] = r[1] * r[1] * a + c),
      (t[6] = r[2] * r[1] * a - r[0]),
      (t[7] = 0),
      (t[8] = r[0] * r[2] * a - r[1]),
      (t[9] = r[1] * r[2] * a + r[0]),
      (t[10] = r[2] * r[2] * a + c),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      t
    );
  };
var b1 = A1;
const { sin: S1, cos: _1 } = tt,
  T1 = (t, e) => {
    const n = S1(e),
      s = _1(e);
    return (
      (t[0] = 1),
      (t[1] = 0),
      (t[2] = 0),
      (t[3] = 0),
      (t[4] = 0),
      (t[5] = s),
      (t[6] = n),
      (t[7] = 0),
      (t[8] = 0),
      (t[9] = -n),
      (t[10] = s),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      t
    );
  };
var M1 = T1;
const { sin: k1, cos: N1 } = tt,
  O1 = (t, e) => {
    const n = k1(e),
      s = N1(e);
    return (
      (t[0] = s),
      (t[1] = 0),
      (t[2] = -n),
      (t[3] = 0),
      (t[4] = 0),
      (t[5] = 1),
      (t[6] = 0),
      (t[7] = 0),
      (t[8] = n),
      (t[9] = 0),
      (t[10] = s),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      t
    );
  };
var B1 = O1;
const { sin: V1, cos: R1 } = tt,
  F1 = (t, e) => {
    const n = V1(e),
      s = R1(e);
    return (
      (t[0] = s),
      (t[1] = n),
      (t[2] = 0),
      (t[3] = 0),
      (t[4] = -n),
      (t[5] = s),
      (t[6] = 0),
      (t[7] = 0),
      (t[8] = 0),
      (t[9] = 0),
      (t[10] = 1),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      t
    );
  };
var C1 = F1;
const q1 = (t) =>
  t[0] === 1 &&
  t[1] === 0 &&
  t[2] === 0 &&
  t[3] === 0 &&
  t[4] === 0 &&
  t[5] === 1 &&
  t[6] === 0 &&
  t[7] === 0 &&
  t[8] === 0 &&
  t[9] === 0 &&
  t[10] === 1 &&
  t[11] === 0 &&
  t[12] === 0 &&
  t[13] === 0 &&
  t[14] === 0 &&
  t[15] === 1;
var G1 = q1;
const z1 = (t) =>
    // TODO check if it is worth the effort to add recognition of 90 deg rotations
    yt(t[1]) &&
    yt(t[2]) &&
    yt(t[3]) &&
    yt(t[4]) &&
    yt(t[6]) &&
    yt(t[7]) &&
    yt(t[8]) &&
    yt(t[9]) &&
    yt(t[11]) &&
    t[15] === 1,
  yt = (t) => Math.abs(t) < Number.EPSILON;
var D1 = z1;
const L1 = (t) => {
  const e = t[4] * t[9] - t[8] * t[5],
    n = t[8] * t[1] - t[0] * t[9],
    s = t[0] * t[5] - t[4] * t[1];
  return e * t[2] + n * t[6] + s * t[10] < 0;
};
var I1 = L1;
const Z1 = (t, e) => {
  const [n, s, o, r] = e;
  return (
    (t[0] = 1 - 2 * n * n),
    (t[1] = -2 * s * n),
    (t[2] = -2 * o * n),
    (t[3] = 0),
    (t[4] = -2 * n * s),
    (t[5] = 1 - 2 * s * s),
    (t[6] = -2 * o * s),
    (t[7] = 0),
    (t[8] = -2 * n * o),
    (t[9] = -2 * s * o),
    (t[10] = 1 - 2 * o * o),
    (t[11] = 0),
    (t[12] = 2 * n * r),
    (t[13] = 2 * s * r),
    (t[14] = 2 * o * r),
    (t[15] = 1),
    t
  );
};
var X1 = Z1;
const Y1 = (t, e, n) => {
  const s = e[0],
    o = e[1],
    r = e[2],
    c = e[3],
    a = e[4],
    i = e[5],
    l = e[6],
    f = e[7],
    u = e[8],
    h = e[9],
    d = e[10],
    p = e[11],
    g = e[12],
    $ = e[13],
    v = e[14],
    y = e[15];
  let x = n[0],
    m = n[1],
    P = n[2],
    w = n[3];
  return (
    (t[0] = x * s + m * a + P * u + w * g),
    (t[1] = x * o + m * i + P * h + w * $),
    (t[2] = x * r + m * l + P * d + w * v),
    (t[3] = x * c + m * f + P * p + w * y),
    (x = n[4]),
    (m = n[5]),
    (P = n[6]),
    (w = n[7]),
    (t[4] = x * s + m * a + P * u + w * g),
    (t[5] = x * o + m * i + P * h + w * $),
    (t[6] = x * r + m * l + P * d + w * v),
    (t[7] = x * c + m * f + P * p + w * y),
    (x = n[8]),
    (m = n[9]),
    (P = n[10]),
    (w = n[11]),
    (t[8] = x * s + m * a + P * u + w * g),
    (t[9] = x * o + m * i + P * h + w * $),
    (t[10] = x * r + m * l + P * d + w * v),
    (t[11] = x * c + m * f + P * p + w * y),
    (x = n[12]),
    (m = n[13]),
    (P = n[14]),
    (w = n[15]),
    (t[12] = x * s + m * a + P * u + w * g),
    (t[13] = x * o + m * i + P * h + w * $),
    (t[14] = x * r + m * l + P * d + w * v),
    (t[15] = x * c + m * f + P * p + w * y),
    t
  );
};
var H1 = Y1;
const { EPS: U1 } = D,
  { sin: W1, cos: K1 } = tt,
  Q1 = Zc,
  J1 = (t, e, n, s) => {
    let [o, r, c] = s;
    const a = o * o + r * r + c * c;
    if (Math.abs(a) < U1) return Q1(t, e);
    const i = 1 / Math.sqrt(a);
    (o *= i), (r *= i), (c *= i);
    const l = W1(n),
      f = K1(n),
      u = 1 - f,
      h = e[0],
      d = e[1],
      p = e[2],
      g = e[3],
      $ = e[4],
      v = e[5],
      y = e[6],
      x = e[7],
      m = e[8],
      P = e[9],
      w = e[10],
      E = e[11],
      A = o * o * u + f,
      b = r * o * u + c * l,
      _ = c * o * u - r * l,
      S = o * r * u - c * l,
      M = r * r * u + f,
      q = c * r * u + o * l,
      B = o * c * u + r * l,
      C = r * c * u - o * l,
      k = c * c * u + f;
    return (
      (t[0] = h * A + $ * b + m * _),
      (t[1] = d * A + v * b + P * _),
      (t[2] = p * A + y * b + w * _),
      (t[3] = g * A + x * b + E * _),
      (t[4] = h * S + $ * M + m * q),
      (t[5] = d * S + v * M + P * q),
      (t[6] = p * S + y * M + w * q),
      (t[7] = g * S + x * M + E * q),
      (t[8] = h * B + $ * C + m * k),
      (t[9] = d * B + v * C + P * k),
      (t[10] = p * B + y * C + w * k),
      (t[11] = g * B + x * C + E * k),
      e !== t &&
        ((t[12] = e[12]), (t[13] = e[13]), (t[14] = e[14]), (t[15] = e[15])),
      t
    );
  };
var j1 = J1;
const { sin: tf, cos: ef } = tt,
  nf = (t, e, n) => {
    const s = tf(n),
      o = ef(n),
      r = e[4],
      c = e[5],
      a = e[6],
      i = e[7],
      l = e[8],
      f = e[9],
      u = e[10],
      h = e[11];
    return (
      e !== t &&
        ((t[0] = e[0]),
        (t[1] = e[1]),
        (t[2] = e[2]),
        (t[3] = e[3]),
        (t[12] = e[12]),
        (t[13] = e[13]),
        (t[14] = e[14]),
        (t[15] = e[15])),
      (t[4] = r * o + l * s),
      (t[5] = c * o + f * s),
      (t[6] = a * o + u * s),
      (t[7] = i * o + h * s),
      (t[8] = l * o - r * s),
      (t[9] = f * o - c * s),
      (t[10] = u * o - a * s),
      (t[11] = h * o - i * s),
      t
    );
  };
var sf = nf;
const { sin: of, cos: rf } = tt,
  cf = (t, e, n) => {
    const s = of(n),
      o = rf(n),
      r = e[0],
      c = e[1],
      a = e[2],
      i = e[3],
      l = e[8],
      f = e[9],
      u = e[10],
      h = e[11];
    return (
      e !== t &&
        ((t[4] = e[4]),
        (t[5] = e[5]),
        (t[6] = e[6]),
        (t[7] = e[7]),
        (t[12] = e[12]),
        (t[13] = e[13]),
        (t[14] = e[14]),
        (t[15] = e[15])),
      (t[0] = r * o - l * s),
      (t[1] = c * o - f * s),
      (t[2] = a * o - u * s),
      (t[3] = i * o - h * s),
      (t[8] = r * s + l * o),
      (t[9] = c * s + f * o),
      (t[10] = a * s + u * o),
      (t[11] = i * s + h * o),
      t
    );
  };
var af = cf;
const { sin: lf, cos: ff } = tt,
  uf = (t, e, n) => {
    const s = lf(n),
      o = ff(n),
      r = e[0],
      c = e[1],
      a = e[2],
      i = e[3],
      l = e[4],
      f = e[5],
      u = e[6],
      h = e[7];
    return (
      e !== t &&
        ((t[8] = e[8]),
        (t[9] = e[9]),
        (t[10] = e[10]),
        (t[11] = e[11]),
        (t[12] = e[12]),
        (t[13] = e[13]),
        (t[14] = e[14]),
        (t[15] = e[15])),
      (t[0] = r * o + l * s),
      (t[1] = c * o + f * s),
      (t[2] = a * o + u * s),
      (t[3] = i * o + h * s),
      (t[4] = l * o - r * s),
      (t[5] = f * o - c * s),
      (t[6] = u * o - a * s),
      (t[7] = h * o - i * s),
      t
    );
  };
var hf = uf;
const df = (t, e, n) => {
  const s = n[0],
    o = n[1],
    r = n[2];
  return (
    (t[0] = e[0] * s),
    (t[1] = e[1] * s),
    (t[2] = e[2] * s),
    (t[3] = e[3] * s),
    (t[4] = e[4] * o),
    (t[5] = e[5] * o),
    (t[6] = e[6] * o),
    (t[7] = e[7] * o),
    (t[8] = e[8] * r),
    (t[9] = e[9] * r),
    (t[10] = e[10] * r),
    (t[11] = e[11] * r),
    (t[12] = e[12]),
    (t[13] = e[13]),
    (t[14] = e[14]),
    (t[15] = e[15]),
    t
  );
};
var gf = df;
const pf = (t, e, n) => (
  (t[0] = e[0] - n[0]),
  (t[1] = e[1] - n[1]),
  (t[2] = e[2] - n[2]),
  (t[3] = e[3] - n[3]),
  (t[4] = e[4] - n[4]),
  (t[5] = e[5] - n[5]),
  (t[6] = e[6] - n[6]),
  (t[7] = e[7] - n[7]),
  (t[8] = e[8] - n[8]),
  (t[9] = e[9] - n[9]),
  (t[10] = e[10] - n[10]),
  (t[11] = e[11] - n[11]),
  (t[12] = e[12] - n[12]),
  (t[13] = e[13] - n[13]),
  (t[14] = e[14] - n[14]),
  (t[15] = e[15] - n[15]),
  t
);
var $f = pf;
const mf = (t) => t.map((e) => e.toFixed(7)).toString();
var vf = mf;
const yf = (t, e, n) => {
  const s = n[0],
    o = n[1],
    r = n[2];
  let c, a, i, l, f, u, h, d, p, g, $, v;
  return (
    e === t
      ? ((t[12] = e[0] * s + e[4] * o + e[8] * r + e[12]),
        (t[13] = e[1] * s + e[5] * o + e[9] * r + e[13]),
        (t[14] = e[2] * s + e[6] * o + e[10] * r + e[14]),
        (t[15] = e[3] * s + e[7] * o + e[11] * r + e[15]))
      : ((c = e[0]),
        (a = e[1]),
        (i = e[2]),
        (l = e[3]),
        (f = e[4]),
        (u = e[5]),
        (h = e[6]),
        (d = e[7]),
        (p = e[8]),
        (g = e[9]),
        ($ = e[10]),
        (v = e[11]),
        (t[0] = c),
        (t[1] = a),
        (t[2] = i),
        (t[3] = l),
        (t[4] = f),
        (t[5] = u),
        (t[6] = h),
        (t[7] = d),
        (t[8] = p),
        (t[9] = g),
        (t[10] = $),
        (t[11] = v),
        (t[12] = c * s + f * o + p * r + e[12]),
        (t[13] = a * s + u * o + g * r + e[13]),
        (t[14] = i * s + h * o + $ * r + e[14]),
        (t[15] = l * s + d * o + v * r + e[15])),
    t
  );
};
var wf = yf;
var I = {
  add: Zi,
  clone: Ui,
  copy: Zc,
  create: Bs,
  invert: Qi,
  equals: ji,
  fromRotation: Hc,
  fromScaling: gl,
  fromTaitBryanRotation: $l,
  fromTranslation: vl,
  fromValues: xl,
  fromVectorRotation: b1,
  fromXRotation: M1,
  fromYRotation: B1,
  fromZRotation: C1,
  identity: Yc,
  isIdentity: G1,
  isOnlyTransformScale: D1,
  isMirroring: I1,
  mirrorByPlane: X1,
  multiply: H1,
  rotate: j1,
  rotateX: sf,
  rotateY: af,
  rotateZ: hf,
  scale: gf,
  subtract: $f,
  toString: vf,
  translate: wf,
};
const xf = I,
  Pf = (t) => (
    t === void 0 && (t = []),
    {
      sides: t,
      transforms: xf.create(),
    }
  );
var vn = Pf;
const Ef = (t, e) => ((t[0] = Math.abs(e[0])), (t[1] = Math.abs(e[1])), t);
var Af = Ef;
const bf = (t, e, n) => ((t[0] = e[0] + n[0]), (t[1] = e[1] + n[1]), t);
var Sf = bf;
const _f = (t) => Math.atan2(t[1], t[0]);
var Rs = _f;
var Tf = Rs;
const Mf = Rs,
  kf = (t) => Mf(t) * 57.29577951308232;
var Nf = kf;
const Of = () => [0, 0];
var yn = Of;
const Bf = yn,
  Vf = (t) => {
    const e = Bf();
    return (e[0] = t[0]), (e[1] = t[1]), e;
  };
var Rf = Vf;
const Ff = (t, e) => ((t[0] = e[0]), (t[1] = e[1]), t);
var Cf = Ff;
const qf = (t, e, n) => (
  (t[0] = 0), (t[1] = 0), (t[2] = e[0] * n[1] - e[1] * n[0]), t
);
var Gf = qf;
const zf = (t, e) => {
  const n = e[0] - t[0],
    s = e[1] - t[1];
  return Math.sqrt(n * n + s * s);
};
var Df = zf;
const Lf = (t, e, n) => ((t[0] = e[0] / n[0]), (t[1] = e[1] / n[1]), t);
var If = Lf;
const Zf = (t, e) => t[0] * e[0] + t[1] * e[1];
var Xf = Zf;
const Yf = (t, e) => t[0] === e[0] && t[1] === e[1];
var Hf = Yf;
const { sin: Uf, cos: Wf } = tt,
  Kf = (t, e) => ((t[0] = Wf(e)), (t[1] = Uf(e)), t);
var oa = Kf;
const Qf = oa,
  Jf = (t, e) => Qf(t, e * 0.017453292519943295);
var jf = Jf;
const t0 = (t, e) => ((t[0] = e), (t[1] = e), t);
var e0 = t0;
const n0 = yn,
  s0 = (t, e) => {
    const n = n0();
    return (n[0] = t), (n[1] = e), n;
  };
var o0 = s0;
const r0 = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]);
var c0 = r0;
const a0 = (t, e, n, s) => {
  const o = e[0],
    r = e[1];
  return (t[0] = o + s * (n[0] - o)), (t[1] = r + s * (n[1] - r)), t;
};
var i0 = a0;
const l0 = (t, e, n) => (
  (t[0] = Math.max(e[0], n[0])), (t[1] = Math.max(e[1], n[1])), t
);
var f0 = l0;
const u0 = (t, e, n) => (
  (t[0] = Math.min(e[0], n[0])), (t[1] = Math.min(e[1], n[1])), t
);
var h0 = u0;
const d0 = (t, e, n) => ((t[0] = e[0] * n[0]), (t[1] = e[1] * n[1]), t);
var g0 = d0;
const p0 = (t, e) => ((t[0] = -e[0]), (t[1] = -e[1]), t);
var $0 = p0;
const m0 = (t, e, n, s) => {
  const o = e[0] - n[0],
    r = e[1] - n[1],
    c = Math.cos(s),
    a = Math.sin(s);
  return (t[0] = o * c - r * a + n[0]), (t[1] = o * a + r * c + n[1]), t;
};
var ra = m0;
const { TAU: v0 } = D,
  y0 = yn,
  w0 = ra,
  x0 = (t, e) => w0(t, e, y0(), v0 / 4);
var P0 = x0;
const E0 = (t, e) => {
  const n = e[0],
    s = e[1];
  let o = n * n + s * s;
  return o > 0 && (o = 1 / Math.sqrt(o)), (t[0] = n * o), (t[1] = s * o), t;
};
var A0 = E0;
const b0 = (t, e, n) => ((t[0] = e[0] * n), (t[1] = e[1] * n), t);
var S0 = b0;
const _0 = (t, e, n) => (
  (t[0] = Math.round(e[0] / n) * n + 0),
  (t[1] = Math.round(e[1] / n) * n + 0),
  t
);
var T0 = _0;
const M0 = (t, e) => {
  const n = e[0] - t[0],
    s = e[1] - t[1];
  return n * n + s * s;
};
var k0 = M0;
const N0 = (t) => {
  const e = t[0],
    n = t[1];
  return e * e + n * n;
};
var O0 = N0;
const B0 = (t, e, n) => ((t[0] = e[0] - n[0]), (t[1] = e[1] - n[1]), t);
var V0 = B0;
const R0 = (t) => `[${t[0].toFixed(7)}, ${t[1].toFixed(7)}]`;
var F0 = R0;
const C0 = (t, e, n) => {
  const s = e[0],
    o = e[1];
  return (
    (t[0] = n[0] * s + n[4] * o + n[12]),
    (t[1] = n[1] * s + n[5] * o + n[13]),
    t
  );
};
var q0 = C0;
var G = {
  abs: Af,
  add: Sf,
  angle: Tf,
  angleDegrees: Nf,
  angleRadians: Rs,
  clone: Rf,
  copy: Cf,
  create: yn,
  cross: Gf,
  distance: Df,
  divide: If,
  dot: Xf,
  equals: Hf,
  fromAngleDegrees: jf,
  fromAngleRadians: oa,
  fromScalar: e0,
  fromValues: o0,
  length: c0,
  lerp: i0,
  max: f0,
  min: h0,
  multiply: g0,
  negate: $0,
  normal: P0,
  normalize: A0,
  rotate: ra,
  scale: S0,
  snap: T0,
  squaredDistance: k0,
  squaredLength: O0,
  subtract: V0,
  toString: F0,
  transform: q0,
};
const Fn = G,
  G0 = vn,
  z0 = (t) => {
    if (!Array.isArray(t)) throw new Error("the given points must be an array");
    let e = t.length;
    if (e < 3)
      throw new Error(
        "the given points must define a closed geometry with three or more points",
      );
    Fn.equals(t[0], t[e - 1]) && --e;
    const n = [];
    let s = t[e - 1];
    for (let o = 0; o < e; o++) {
      const r = t[o];
      n.push([Fn.clone(s), Fn.clone(r)]), (s = r);
    }
    return G0(n);
  };
var D0 = z0;
const L0 = I,
  io = G,
  I0 = vn,
  Z0 = (t) => {
    if (t[0] !== 0) throw new Error("invalid compact binary data");
    const e = I0();
    e.transforms = L0.clone(t.slice(1, 17));
    for (let n = 21; n < t.length; n += 4) {
      const s = io.fromValues(t[n + 0], t[n + 1]),
        o = io.fromValues(t[n + 2], t[n + 3]);
      e.sides.push([s, o]);
    }
    return t[17] >= 0 && (e.color = [t[17], t[18], t[19], t[20]]), e;
  };
var X0 = Z0;
const Y0 = (t) =>
  !!(
    t &&
    typeof t == "object" &&
    "sides" in t &&
    "transforms" in t &&
    Array.isArray(t.sides) &&
    "length" in t.transforms
  );
var ca = Y0;
const lo = I,
  Ge = G,
  H0 = (t) => (
    lo.isIdentity(t.transforms) ||
      ((t.sides = t.sides.map((e) => {
        const n = Ge.transform(Ge.create(), e[0], t.transforms),
          s = Ge.transform(Ge.create(), e[1], t.transforms);
        return [n, s];
      })),
      (t.transforms = lo.create())),
    t
  );
var U0 = H0;
const W0 = U0,
  K0 = (t) => W0(t).sides;
var Ne = K0;
const Q0 = vn,
  J0 = Ne,
  j0 = (t) => {
    const n = J0(t).map((s) => [s[1], s[0]]);
    return n.reverse(), Q0(n);
  };
var aa = j0;
const ue = G,
  tu = Ne,
  eu = (t) => {
    const e = /* @__PURE__ */ new Map(),
      n = (s) => {
        const o = s.toString();
        return e.has(o) ? e.get(o) : (e.set(o, s), s);
      };
    return t.map((s) => s.map(n));
  },
  nu = (t) => {
    const e = /* @__PURE__ */ new Map();
    return (
      eu(t).forEach((s) => {
        e.has(s[0]) ? e.get(s[0]).push(s) : e.set(s[0], [s]);
      }),
      e
    );
  },
  su = (t) => {
    const e = nu(tu(t)),
      n = [];
    for (;;) {
      let s;
      for (const [c, a] of e) {
        if (((s = a.shift()), !s)) {
          e.delete(c);
          continue;
        }
        break;
      }
      if (s === void 0) break;
      const o = [],
        r = s[0];
      for (;;) {
        o.push(s[0]);
        const c = s[1];
        if (c === r) break;
        const a = e.get(c);
        if (!a) throw new Error(`geometry is not closed at vertex ${c}`);
        const i = ou(s, a);
        a.length === 0 && e.delete(c), (s = i);
      }
      o.length > 0 && o.push(o.shift()), n.push(o);
    }
    return e.clear(), n;
  },
  ou = (t, e) => {
    if (e.length === 1) return e.pop();
    const n = ue.create(),
      s = ue.angleDegrees(ue.subtract(n, t[1], t[0]));
    let o, r;
    e.forEach((a, i) => {
      let f = ue.angleDegrees(ue.subtract(n, a[1], a[0])) - s;
      f < -180 && (f += 360),
        f >= 180 && (f -= 360),
        (r === void 0 || f > o) && ((r = i), (o = f));
    });
    const c = e[r];
    return e.splice(r, 1), c;
  };
var ia = su;
const ru = Ne,
  cu = (t) => {
    const n = ru(t).map((s) => s[0]);
    return n.length > 0 && n.push(n.shift()), n;
  };
var au = cu;
const fo = G,
  iu = Ne,
  lu = (t) => {
    const e = iu(t);
    let n =
      "geom2 (" +
      e.length +
      ` sides):
[
`;
    return (
      e.forEach((s) => {
        n +=
          "  [" +
          fo.toString(s[0]) +
          ", " +
          fo.toString(s[1]) +
          `]
`;
      }),
      (n += `]
`),
      n
    );
  };
var fu = lu;
const uu = (t) => {
  const e = t.sides,
    n = t.transforms;
  let s = [-1, -1, -1, -1];
  t.color && (s = t.color);
  const o = new Float32Array(21 + e.length * 4);
  (o[0] = 0),
    (o[1] = n[0]),
    (o[2] = n[1]),
    (o[3] = n[2]),
    (o[4] = n[3]),
    (o[5] = n[4]),
    (o[6] = n[5]),
    (o[7] = n[6]),
    (o[8] = n[7]),
    (o[9] = n[8]),
    (o[10] = n[9]),
    (o[11] = n[10]),
    (o[12] = n[11]),
    (o[13] = n[12]),
    (o[14] = n[13]),
    (o[15] = n[14]),
    (o[16] = n[15]),
    (o[17] = s[0]),
    (o[18] = s[1]),
    (o[19] = s[2]),
    (o[20] = s[3]);
  for (let r = 0; r < e.length; r++) {
    const c = r * 4 + 21,
      a = e[r][0],
      i = e[r][1];
    (o[c + 0] = a[0]), (o[c + 1] = a[1]), (o[c + 2] = i[0]), (o[c + 3] = i[1]);
  }
  return o;
};
var hu = uu;
const uo = I,
  du = aa,
  gu = (t, e) => {
    const n = uo.multiply(uo.create(), t, e.transforms),
      s = Object.assign({}, e, { transforms: n });
    return t[0] * t[5] - t[4] * t[1] < 0 ? du(s) : s;
  };
var pu = gu;
const $u = G,
  mu = ca,
  vu = ia,
  yu = (t) => {
    if (!mu(t)) throw new Error("invalid geom2 structure");
    if (
      (vu(t),
      t.sides.forEach((e) => {
        if ($u.equals(e[0], e[1])) throw new Error(`geom2 self-edge ${e[0]}`);
      }),
      !t.transforms.every(Number.isFinite))
    )
      throw new Error(`geom2 invalid transforms ${t.transforms}`);
  };
var wu = yu;
var R = {
  clone: Li,
  create: vn,
  fromPoints: D0,
  fromCompactBinary: X0,
  isA: ca,
  reverse: aa,
  toOutlines: ia,
  toPoints: au,
  toSides: Ne,
  toString: fu,
  toCompactBinary: hu,
  transform: pu,
  validate: wu,
};
const xu = (t) => Object.assign({}, t);
var Pu = xu;
const Eu = I,
  Au = (t) => (
    t === void 0 && (t = []),
    {
      polygons: t,
      transforms: Eu.create(),
    }
  );
var Oe = Au;
const bu = ke,
  ho = mn,
  go = sa,
  Su = (t, e, n) => {
    const s = [],
      o = [],
      r = [];
    ho(s, n, e), ho(o, t, e);
    const c = go(bu(r, o, s)),
      a = go(s);
    if (a === 0) throw Error("a and b are the same point");
    return c / a;
  },
  _u = (t, e, n) => Math.sqrt(Su(t, e, n));
var Tu = _u;
const Mu = ke,
  ku = Vs,
  po = mn,
  Nu = (t, e, n, s) => {
    const o = [0, 0, 0];
    return po(t, e, n), po(o, n, s), Mu(t, t, o), ku(t, t);
  };
var Ou = Nu;
let Bu = class {
  constructor() {
    (this.head = null), (this.tail = null);
  }
  clear() {
    this.head = this.tail = null;
  }
  /**
   * Inserts a `node` before `target`, it's assumed that
   * `target` belongs to this doubly linked list
   *
   * @param {*} target
   * @param {*} node
   */
  insertBefore(e, n) {
    (n.prev = e.prev),
      (n.next = e),
      n.prev ? (n.prev.next = n) : (this.head = n),
      (e.prev = n);
  }
  /**
   * Inserts a `node` after `target`, it's assumed that
   * `target` belongs to this doubly linked list
   *
   * @param {Vertex} target
   * @param {Vertex} node
   */
  insertAfter(e, n) {
    (n.prev = e),
      (n.next = e.next),
      n.next ? (n.next.prev = n) : (this.tail = n),
      (e.next = n);
  }
  /**
   * Appends a `node` to the end of this doubly linked list
   * Note: `node.next` will be unlinked from `node`
   * Note: if `node` is part of another linked list call `addAll` instead
   *
   * @param {*} node
   */
  add(e) {
    this.head ? (this.tail.next = e) : (this.head = e),
      (e.prev = this.tail),
      (e.next = null),
      (this.tail = e);
  }
  /**
   * Appends a chain of nodes where `node` is the head,
   * the difference with `add` is that it correctly sets the position
   * of the node list `tail` property
   *
   * @param {*} node
   */
  addAll(e) {
    for (
      this.head ? (this.tail.next = e) : (this.head = e), e.prev = this.tail;
      e.next;

    )
      e = e.next;
    this.tail = e;
  }
  /**
   * Deletes a `node` from this linked list, it's assumed that `node` is a
   * member of this linked list
   *
   * @param {*} node
   */
  remove(e) {
    e.prev ? (e.prev.next = e.next) : (this.head = e.next),
      e.next ? (e.next.prev = e.prev) : (this.tail = e.prev);
  }
  /**
   * Removes a chain of nodes whose head is `a` and whose tail is `b`,
   * it's assumed that `a` and `b` belong to this list and also that `a`
   * comes before `b` in the linked list
   *
   * @param {*} a
   * @param {*} b
   */
  removeChain(e, n) {
    e.prev ? (e.prev.next = n.next) : (this.head = n.next),
      n.next ? (n.next.prev = e.prev) : (this.tail = e.prev);
  }
  first() {
    return this.head;
  }
  isEmpty() {
    return !this.head;
  }
};
var Vu = Bu;
let Ru = class {
  constructor(e, n) {
    (this.point = e),
      (this.index = n),
      (this.next = null),
      (this.prev = null),
      (this.face = null);
  }
};
var Fu = Ru;
const Cu = Qc,
  qu = na;
let Gu = class {
  constructor(e, n) {
    (this.vertex = e),
      (this.face = n),
      (this.next = null),
      (this.prev = null),
      (this.opposite = null);
  }
  head() {
    return this.vertex;
  }
  tail() {
    return this.prev ? this.prev.vertex : null;
  }
  length() {
    return this.tail() ? Cu(this.tail().point, this.head().point) : -1;
  }
  lengthSquared() {
    return this.tail() ? qu(this.tail().point, this.head().point) : -1;
  }
  setOpposite(e) {
    (this.opposite = e), (e.opposite = this);
  }
};
var zu = Gu;
const Cn = Wc,
  Du = Kc,
  Lu = ke,
  qn = pn,
  Iu = Jc,
  Zu = Vs,
  ze = ea,
  Gn = mn,
  zn = zu,
  la = 0,
  Xu = 1,
  Es = 2;
let Yu = class fa {
  constructor() {
    (this.normal = []),
      (this.centroid = []),
      (this.offset = 0),
      (this.outside = null),
      (this.mark = la),
      (this.edge = null),
      (this.nVertices = 0);
  }
  getEdge(e) {
    if (typeof e != "number") throw Error("requires a number");
    let n = this.edge;
    for (; e > 0; ) (n = n.next), (e -= 1);
    for (; e < 0; ) (n = n.prev), (e += 1);
    return n;
  }
  computeNormal() {
    const e = this.edge,
      n = e.next;
    let s = n.next;
    const o = Gn([], n.head().point, e.head().point),
      r = [],
      c = [];
    for (this.nVertices = 2, this.normal = [0, 0, 0]; s !== e; )
      Du(c, o),
        Gn(o, s.head().point, e.head().point),
        Cn(this.normal, this.normal, Lu(r, c, o)),
        (s = s.next),
        (this.nVertices += 1);
    (this.area = Iu(this.normal)),
      (this.normal = ze(this.normal, this.normal, 1 / this.area));
  }
  computeNormalMinArea(e) {
    if ((this.computeNormal(), this.area < e)) {
      let n,
        s = 0,
        o = this.edge;
      do {
        const f = o.lengthSquared();
        f > s && ((n = o), (s = f)), (o = o.next);
      } while (o !== this.edge);
      const r = n.tail().point,
        c = n.head().point,
        a = Gn([], c, r),
        i = Math.sqrt(s);
      ze(a, a, 1 / i);
      const l = qn(this.normal, a);
      ze(a, a, -l),
        Cn(this.normal, this.normal, a),
        Zu(this.normal, this.normal);
    }
  }
  computeCentroid() {
    this.centroid = [0, 0, 0];
    let e = this.edge;
    do Cn(this.centroid, this.centroid, e.head().point), (e = e.next);
    while (e !== this.edge);
    ze(this.centroid, this.centroid, 1 / this.nVertices);
  }
  computeNormalAndCentroid(e) {
    typeof e < "u" ? this.computeNormalMinArea(e) : this.computeNormal(),
      this.computeCentroid(),
      (this.offset = qn(this.normal, this.centroid));
  }
  distanceToPlane(e) {
    return qn(this.normal, e) - this.offset;
  }
  /**
   * @private
   *
   * Connects two edges assuming that prev.head().point === next.tail().point
   *
   * @param {HalfEdge} prev
   * @param {HalfEdge} next
   */
  connectHalfEdges(e, n) {
    let s;
    if (e.opposite.face === n.opposite.face) {
      const o = n.opposite.face;
      let r;
      e === this.edge && (this.edge = n),
        o.nVertices === 3
          ? ((r = n.opposite.prev.opposite), (o.mark = Es), (s = o))
          : ((r = n.opposite.next),
            o.edge === r.prev && (o.edge = r),
            (r.prev = r.prev.prev),
            (r.prev.next = r)),
        (n.prev = e.prev),
        (n.prev.next = n),
        n.setOpposite(r),
        o.computeNormalAndCentroid();
    } else (e.next = n), (n.prev = e);
    return s;
  }
  mergeAdjacentFaces(e, n) {
    const s = e.opposite,
      o = s.face;
    n.push(o), (o.mark = Es);
    let r = e.prev,
      c = e.next,
      a = s.prev,
      i = s.next;
    for (; r.opposite.face === o; ) (r = r.prev), (i = i.next);
    for (; c.opposite.face === o; ) (c = c.next), (a = a.prev);
    let l;
    for (l = i; l !== a.next; l = l.next) l.face = this;
    this.edge = c;
    let f;
    return (
      (f = this.connectHalfEdges(a, c)),
      f && n.push(f),
      (f = this.connectHalfEdges(r, i)),
      f && n.push(f),
      this.computeNormalAndCentroid(),
      n
    );
  }
  collectIndices() {
    const e = [];
    let n = this.edge;
    do e.push(n.head().index), (n = n.next);
    while (n !== this.edge);
    return e;
  }
  static createTriangle(e, n, s, o = 0) {
    const r = new fa(),
      c = new zn(e, r),
      a = new zn(n, r),
      i = new zn(s, r);
    return (
      (c.next = i.prev = a),
      (a.next = c.prev = i),
      (i.next = a.prev = c),
      (r.edge = c),
      r.computeNormalAndCentroid(o),
      r
    );
  }
};
var Hu = {
  VISIBLE: la,
  NON_CONVEX: Xu,
  DELETED: Es,
  Face: Yu,
};
const Dn = pn,
  Uu = Tu,
  Wu = Ou,
  $o = Vu,
  Ku = Fu,
  { Face: wt, VISIBLE: Zt, NON_CONVEX: mo, DELETED: Qu } = Hu,
  Ju = 1,
  vo = 2;
let ju = class {
  constructor(e) {
    if (!Array.isArray(e)) throw TypeError("input is not a valid array");
    if (e.length < 4) throw Error("cannot build a simplex out of <4 points");
    (this.tolerance = -1),
      (this.nFaces = 0),
      (this.nPoints = e.length),
      (this.faces = []),
      (this.newFaces = []),
      (this.claimed = new $o()),
      (this.unclaimed = new $o()),
      (this.vertices = []);
    for (let n = 0; n < e.length; n += 1) this.vertices.push(new Ku(e[n], n));
    (this.discardedFaces = []), (this.vertexPointIndices = []);
  }
  addVertexToFace(e, n) {
    (e.face = n),
      n.outside ? this.claimed.insertBefore(n.outside, e) : this.claimed.add(e),
      (n.outside = e);
  }
  /**
   * Removes `vertex` for the `claimed` list of vertices, it also makes sure
   * that the link from `face` to the first vertex it sees in `claimed` is
   * linked correctly after the removal
   *
   * @param {Vertex} vertex
   * @param {Face} face
   */
  removeVertexFromFace(e, n) {
    e === n.outside &&
      (e.next && e.next.face === n ? (n.outside = e.next) : (n.outside = null)),
      this.claimed.remove(e);
  }
  /**
   * Removes all the visible vertices that `face` is able to see which are
   * stored in the `claimed` vertext list
   *
   * @param {Face} face
   * @return {Vertex|undefined} If face had visible vertices returns
   * `face.outside`, otherwise undefined
   */
  removeAllVerticesFromFace(e) {
    if (e.outside) {
      let n = e.outside;
      for (; n.next && n.next.face === e; ) n = n.next;
      return this.claimed.removeChain(e.outside, n), (n.next = null), e.outside;
    }
  }
  /**
   * Removes all the visible vertices that `face` is able to see, additionally
   * checking the following:
   *
   * If `absorbingFace` doesn't exist then all the removed vertices will be
   * added to the `unclaimed` vertex list
   *
   * If `absorbingFace` exists then this method will assign all the vertices of
   * `face` that can see `absorbingFace`, if a vertex cannot see `absorbingFace`
   * it's added to the `unclaimed` vertex list
   *
   * @param {Face} face
   * @param {Face} [absorbingFace]
   */
  deleteFaceVertices(e, n) {
    const s = this.removeAllVerticesFromFace(e);
    if (s)
      if (!n) this.unclaimed.addAll(s);
      else {
        let o;
        for (let r = s; r; r = o)
          (o = r.next),
            n.distanceToPlane(r.point) > this.tolerance
              ? this.addVertexToFace(r, n)
              : this.unclaimed.add(r);
      }
  }
  /**
   * Reassigns as many vertices as possible from the unclaimed list to the new
   * faces
   *
   * @param {Faces[]} newFaces
   */
  resolveUnclaimedPoints(e) {
    let n = this.unclaimed.first();
    for (let s = n; s; s = n) {
      n = s.next;
      let o = this.tolerance,
        r;
      for (let c = 0; c < e.length; c += 1) {
        const a = e[c];
        if (a.mark === Zt) {
          const i = a.distanceToPlane(s.point);
          if ((i > o && ((o = i), (r = a)), o > 1e3 * this.tolerance)) break;
        }
      }
      r && this.addVertexToFace(s, r);
    }
  }
  /**
   * Computes the extremes of a tetrahedron which will be the initial hull
   *
   * @return {number[]} The min/max vertices in the x,y,z directions
   */
  computeExtremes() {
    const e = [],
      n = [],
      s = [],
      o = [];
    let r, c;
    for (r = 0; r < 3; r += 1) s[r] = o[r] = this.vertices[0];
    for (r = 0; r < 3; r += 1) e[r] = n[r] = this.vertices[0].point[r];
    for (r = 1; r < this.vertices.length; r += 1) {
      const a = this.vertices[r],
        i = a.point;
      for (c = 0; c < 3; c += 1) i[c] < e[c] && ((e[c] = i[c]), (s[c] = a));
      for (c = 0; c < 3; c += 1) i[c] > n[c] && ((n[c] = i[c]), (o[c] = a));
    }
    return (
      (this.tolerance =
        3 *
        Number.EPSILON *
        (Math.max(Math.abs(e[0]), Math.abs(n[0])) +
          Math.max(Math.abs(e[1]), Math.abs(n[1])) +
          Math.max(Math.abs(e[2]), Math.abs(n[2])))),
      [s, o]
    );
  }
  /**
   * Compues the initial tetrahedron assigning to its faces all the points that
   * are candidates to form part of the hull
   */
  createInitialSimplex() {
    const e = this.vertices,
      [n, s] = this.computeExtremes();
    let o,
      r,
      c,
      a,
      i = 0,
      l = 0;
    for (c = 0; c < 3; c += 1) {
      const g = s[c].point[c] - n[c].point[c];
      g > i && ((i = g), (l = c));
    }
    const f = n[l],
      u = s[l];
    for (i = 0, c = 0; c < this.vertices.length; c += 1) {
      const g = this.vertices[c];
      if (g !== f && g !== u) {
        const $ = Uu(g.point, f.point, u.point);
        $ > i && ((i = $), (o = g));
      }
    }
    const h = Wu([], f.point, u.point, o.point),
      d = Dn(f.point, h);
    for (i = -1, c = 0; c < this.vertices.length; c += 1) {
      const g = this.vertices[c];
      if (g !== f && g !== u && g !== o) {
        const $ = Math.abs(Dn(h, g.point) - d);
        $ > i && ((i = $), (r = g));
      }
    }
    const p = [];
    if (Dn(r.point, h) - d < 0)
      for (
        p.push(
          wt.createTriangle(f, u, o),
          wt.createTriangle(r, u, f),
          wt.createTriangle(r, o, u),
          wt.createTriangle(r, f, o),
        ),
          c = 0;
        c < 3;
        c += 1
      ) {
        const g = (c + 1) % 3;
        p[c + 1].getEdge(2).setOpposite(p[0].getEdge(g)),
          p[c + 1].getEdge(1).setOpposite(p[g + 1].getEdge(0));
      }
    else
      for (
        p.push(
          wt.createTriangle(f, o, u),
          wt.createTriangle(r, f, u),
          wt.createTriangle(r, u, o),
          wt.createTriangle(r, o, f),
        ),
          c = 0;
        c < 3;
        c += 1
      ) {
        const g = (c + 1) % 3;
        p[c + 1].getEdge(2).setOpposite(p[0].getEdge((3 - c) % 3)),
          p[c + 1].getEdge(0).setOpposite(p[g + 1].getEdge(1));
      }
    for (c = 0; c < 4; c += 1) this.faces.push(p[c]);
    for (c = 0; c < e.length; c += 1) {
      const g = e[c];
      if (g !== f && g !== u && g !== o && g !== r) {
        i = this.tolerance;
        let $;
        for (a = 0; a < 4; a += 1) {
          const v = p[a].distanceToPlane(g.point);
          v > i && ((i = v), ($ = p[a]));
        }
        $ && this.addVertexToFace(g, $);
      }
    }
  }
  reindexFaceAndVertices() {
    const e = [];
    for (let n = 0; n < this.faces.length; n += 1) {
      const s = this.faces[n];
      s.mark === Zt && e.push(s);
    }
    this.faces = e;
  }
  collectFaces(e) {
    const n = [];
    for (let s = 0; s < this.faces.length; s += 1) {
      if (this.faces[s].mark !== Zt)
        throw Error("attempt to include a destroyed face in the hull");
      const o = this.faces[s].collectIndices();
      if (e) n.push(o);
      else
        for (let r = 0; r < o.length - 2; r += 1)
          n.push([o[0], o[r + 1], o[r + 2]]);
    }
    return n;
  }
  /**
   * Finds the next vertex to make faces with the current hull
   *
   * - let `face` be the first face existing in the `claimed` vertex list
   *  - if `face` doesn't exist then return since there're no vertices left
   *  - otherwise for each `vertex` that face sees find the one furthest away
   *  from `face`
   *
   * @return {Vertex|undefined} Returns undefined when there're no more
   * visible vertices
   */
  nextVertexToAdd() {
    if (!this.claimed.isEmpty()) {
      let e,
        n,
        s = 0;
      const o = this.claimed.first().face;
      for (n = o.outside; n && n.face === o; n = n.next) {
        const r = o.distanceToPlane(n.point);
        r > s && ((s = r), (e = n));
      }
      return e;
    }
  }
  /**
   * Computes a chain of half edges in ccw order called the `horizon`, for an
   * edge to be part of the horizon it must join a face that can see
   * `eyePoint` and a face that cannot see `eyePoint`
   *
   * @param {number[]} eyePoint - The coordinates of a point
   * @param {HalfEdge} crossEdge - The edge used to jump to the current `face`
   * @param {Face} face - The current face being tested
   * @param {HalfEdge[]} horizon - The edges that form part of the horizon in
   * ccw order
   */
  computeHorizon(e, n, s, o) {
    this.deleteFaceVertices(s), (s.mark = Qu);
    let r;
    n ? (r = n.next) : (r = n = s.getEdge(0));
    do {
      const c = r.opposite,
        a = c.face;
      a.mark === Zt &&
        (a.distanceToPlane(e) > this.tolerance
          ? this.computeHorizon(e, c, a, o)
          : o.push(r)),
        (r = r.next);
    } while (r !== n);
  }
  /**
   * Creates a face with the points `eyeVertex.point`, `horizonEdge.tail` and
   * `horizonEdge.tail` in ccw order
   *
   * @param {Vertex} eyeVertex
   * @param {HalfEdge} horizonEdge
   * @return {HalfEdge} The half edge whose vertex is the eyeVertex
   */
  addAdjoiningFace(e, n) {
    const s = wt.createTriangle(e, n.tail(), n.head());
    return (
      this.faces.push(s), s.getEdge(-1).setOpposite(n.opposite), s.getEdge(0)
    );
  }
  /**
   * Adds horizon.length faces to the hull, each face will be 'linked' with the
   * horizon opposite face and the face on the left/right
   *
   * @param {Vertex} eyeVertex
   * @param {HalfEdge[]} horizon - A chain of half edges in ccw order
   */
  addNewFaces(e, n) {
    this.newFaces = [];
    let s, o;
    for (let r = 0; r < n.length; r += 1) {
      const c = n[r],
        a = this.addAdjoiningFace(e, c);
      s ? a.next.setOpposite(o) : (s = a), this.newFaces.push(a.face), (o = a);
    }
    s.next.setOpposite(o);
  }
  /**
   * Computes the distance from `edge` opposite face's centroid to
   * `edge.face`
   *
   * @param {HalfEdge} edge
   * @return {number}
   * - A positive number when the centroid of the opposite face is above the
   *   face i.e. when the faces are concave
   * - A negative number when the centroid of the opposite face is below the
   *   face i.e. when the faces are convex
   */
  oppositeFaceDistance(e) {
    return e.face.distanceToPlane(e.opposite.face.centroid);
  }
  /**
   * Merges a face with none/any/all its neighbors according to the strategy
   * used
   *
   * if `mergeType` is MERGE_NON_CONVEX_WRT_LARGER_FACE then the merge will be
   * decided based on the face with the larger area, the centroid of the face
   * with the smaller area will be checked against the one with the larger area
   * to see if it's in the merge range [tolerance, -tolerance] i.e.
   *
   *    dot(centroid smaller face, larger face normal) - larger face offset > -tolerance
   *
   * Note that the first check (with +tolerance) was done on `computeHorizon`
   *
   * If the above is not true then the check is done with respect to the smaller
   * face i.e.
   *
   *    dot(centroid larger face, smaller face normal) - smaller face offset > -tolerance
   *
   * If true then it means that two faces are non convex (concave), even if the
   * dot(...) - offset value is > 0 (that's the point of doing the merge in the
   * first place)
   *
   * If two faces are concave then the check must also be done on the other face
   * but this is done in another merge pass, for this to happen the face is
   * marked in a temporal NON_CONVEX state
   *
   * if `mergeType` is MERGE_NON_CONVEX then two faces will be merged only if
   * they pass the following conditions
   *
   *    dot(centroid smaller face, larger face normal) - larger face offset > -tolerance
   *    dot(centroid larger face, smaller face normal) - smaller face offset > -tolerance
   *
   * @param {Face} face
   * @param {number} mergeType - Either MERGE_NON_CONVEX_WRT_LARGER_FACE or
   * MERGE_NON_CONVEX
   */
  doAdjacentMerge(e, n) {
    let s = e.edge,
      o = !0,
      r = 0;
    do {
      if (r >= e.nVertices) throw Error("merge recursion limit exceeded");
      const c = s.opposite.face;
      let a = !1;
      if (
        (n === vo
          ? (this.oppositeFaceDistance(s) > -this.tolerance ||
              this.oppositeFaceDistance(s.opposite) > -this.tolerance) &&
            (a = !0)
          : e.area > c.area
            ? this.oppositeFaceDistance(s) > -this.tolerance
              ? (a = !0)
              : this.oppositeFaceDistance(s.opposite) > -this.tolerance &&
                (o = !1)
            : this.oppositeFaceDistance(s.opposite) > -this.tolerance
              ? (a = !0)
              : this.oppositeFaceDistance(s) > -this.tolerance && (o = !1),
        a)
      ) {
        const i = e.mergeAdjacentFaces(s, []);
        for (let l = 0; l < i.length; l += 1) this.deleteFaceVertices(i[l], e);
        return !0;
      }
      (s = s.next), (r += 1);
    } while (s !== e.edge);
    return o || (e.mark = mo), !1;
  }
  /**
   * Adds a vertex to the hull with the following algorithm
   *
   * - Compute the `horizon` which is a chain of half edges, for an edge to
   *   belong to this group it must be the edge connecting a face that can
   *   see `eyeVertex` and a face which cannot see `eyeVertex`
   * - All the faces that can see `eyeVertex` have its visible vertices removed
   *   from the claimed VertexList
   * - A new set of faces is created with each edge of the `horizon` and
   *   `eyeVertex`, each face is connected with the opposite horizon face and
   *   the face on the left/right
   * - The new faces are merged if possible with the opposite horizon face first
   *   and then the faces on the right/left
   * - The vertices removed from all the visible faces are assigned to the new
   *   faces if possible
   *
   * @param {Vertex} eyeVertex
   */
  addVertexToHull(e) {
    const n = [];
    this.unclaimed.clear(),
      this.removeVertexFromFace(e, e.face),
      this.computeHorizon(e.point, null, e.face, n),
      this.addNewFaces(e, n);
    for (let s = 0; s < this.newFaces.length; s += 1) {
      const o = this.newFaces[s];
      if (o.mark === Zt) for (; this.doAdjacentMerge(o, Ju); );
    }
    for (let s = 0; s < this.newFaces.length; s += 1) {
      const o = this.newFaces[s];
      if (o.mark === mo) for (o.mark = Zt; this.doAdjacentMerge(o, vo); );
    }
    this.resolveUnclaimedPoints(this.newFaces);
  }
  build() {
    let e;
    for (this.createInitialSimplex(); (e = this.nextVertexToAdd()); )
      this.addVertexToHull(e);
    this.reindexFaceAndVertices();
  }
};
var t2 = ju;
const e2 = t2,
  n2 = (t, e = {}) => {
    const n = new e2(t);
    return n.build(), n.collectFaces(e.skipTriangulation);
  };
var ua = n2;
const s2 = (t) => ((t === void 0 || t.length < 3) && (t = []), { vertices: t });
var ce = s2;
const o2 = ce,
  r2 = N,
  c2 = (...t) => {
    let e, n;
    return (
      t.length === 1 ? ((e = o2()), (n = t[0])) : ((e = t[0]), (n = t[1])),
      (e.vertices = n.vertices.map((s) => r2.clone(s))),
      e
    );
  };
var a2 = c2;
const i2 = N,
  l2 = ce,
  f2 = (t) => {
    const e = t.map((n) => i2.clone(n));
    return l2(e);
  };
var u2 = f2;
const h2 = ce,
  d2 = (t, e) => {
    const n = h2(t);
    return (n.plane = e), n;
  };
var g2 = d2;
const p2 = () => [0, 0, 0, 0];
var wn = p2;
const $2 = wn,
  m2 = (t) => {
    const e = $2();
    return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e;
  };
var ha = m2;
const v2 = (t, e) => (
  (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t
);
var da = v2;
const y2 = (t, e) =>
  t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3];
var ga = y2;
const w2 = (t, e) => (
  (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), (t[3] = -e[3]), t
);
var pa = w2;
const Ln = N,
  x2 = (t, e, n) => {
    const s = Ln.normalize(Ln.create(), e),
      o = Ln.dot(n, s);
    return (t[0] = s[0]), (t[1] = s[1]), (t[2] = s[2]), (t[3] = o), t;
  };
var $a = x2;
const P2 = wn,
  E2 = (t, e, n, s) => {
    const o = P2();
    return (o[0] = t), (o[1] = e), (o[2] = n), (o[3] = s), o;
  };
var ma = E2;
const lt = N,
  A2 = $a,
  b2 = (t, ...e) => {
    (t[0] = 0), (t[1] = 0), (t[2] = 0), (t[3] = 0);
    const n = e.length;
    e.forEach((d) => {
      lt.add(t, t, d);
    }),
      lt.scale(t, t, 1 / n);
    let s = 0,
      o = 0,
      r = 0,
      c = 0,
      a = 0,
      i = 0;
    const l = lt.create();
    e.forEach((d) => {
      lt.subtract(l, d, t),
        (s += l[0] * l[0]),
        (o += l[0] * l[1]),
        (r += l[0] * l[2]),
        (c += l[1] * l[1]),
        (a += l[1] * l[2]),
        (i += l[2] * l[2]);
    }),
      (s /= n),
      (o /= n),
      (r /= n),
      (c /= n),
      (a /= n),
      (i /= n),
      (l[0] = 0),
      (l[1] = 0),
      (l[2] = 0);
    const f = lt.create();
    let u = c * i - a * a;
    (f[0] = u), (f[1] = r * a - o * i), (f[2] = o * a - r * c);
    let h = u * u;
    return (
      lt.add(l, l, lt.scale(f, f, h)),
      (u = s * i - r * r),
      (f[0] = r * a - o * i),
      (f[1] = u),
      (f[2] = o * r - a * s),
      (h = u * u),
      lt.dot(l, f) < 0 && (h = -h),
      lt.add(l, l, lt.scale(f, f, h)),
      (u = s * c - o * o),
      (f[0] = o * a - r * c),
      (f[1] = o * r - a * s),
      (f[2] = u),
      (h = u * u),
      lt.dot(l, f) < 0 && (h = -h),
      lt.add(l, l, lt.scale(f, f, h)),
      A2(t, l, t)
    );
  };
var S2 = b2;
const dt = N,
  _2 = (t, ...e) => {
    const n = e.length,
      s = dt.create(),
      o = dt.create(),
      r = (c) => {
        const a = e[c],
          i = e[(c + 1) % n],
          l = e[(c + 2) % n];
        return (
          dt.subtract(s, i, a),
          dt.subtract(o, l, a),
          dt.cross(s, s, o),
          dt.normalize(s, s),
          s
        );
      };
    return (
      (t[0] = 0),
      (t[1] = 0),
      (t[2] = 0),
      n === 3
        ? dt.copy(t, r(0))
        : (e.forEach((c, a) => {
            dt.add(t, t, r(a));
          }),
          dt.normalize(t, t)),
      (t[3] = dt.dot(t, e[0])),
      t
    );
  };
var va = _2;
const { EPS: In } = D,
  st = N,
  T2 = (t, e, n, s) => {
    let o = st.subtract(st.create(), n, e),
      r = st.subtract(st.create(), s, e);
    st.length(o) < In && (o = st.orthogonal(o, r)),
      st.length(r) < In && (r = st.orthogonal(r, o));
    let c = st.cross(st.create(), o, r);
    st.length(c) < In && ((r = st.orthogonal(r, o)), (c = st.cross(c, o, r))),
      (c = st.normalize(c, c));
    const a = st.dot(c, e);
    return (t[0] = c[0]), (t[1] = c[1]), (t[2] = c[2]), (t[3] = a), t;
  };
var M2 = T2;
const k2 = N,
  N2 = (t, e) => {
    const n = e[0] * t[0] + e[1] * t[1] + e[2] * t[2] - t[3],
      s = e[0] - n * t[0],
      o = e[1] - n * t[1],
      r = e[2] - n * t[2];
    return k2.fromValues(s, o, r);
  };
var O2 = N2;
const B2 = N,
  V2 = (t, e) => B2.dot(t, e) - t[3];
var ya = V2;
const R2 = (t) =>
  `(${t[0].toFixed(9)}, ${t[1].toFixed(9)}, ${t[2].toFixed(9)}, ${t[3].toFixed(9)})`;
var wa = R2;
const F2 = I,
  ot = N,
  C2 = va,
  q2 = pa,
  G2 = (t, e, n) => {
    const s = F2.isMirroring(n),
      o = ot.orthogonal(ot.create(), e),
      r = ot.cross(o, e, o),
      c = ot.cross(ot.create(), e, r);
    let a = ot.fromScalar(ot.create(), e[3]);
    ot.multiply(a, a, e);
    let i = ot.add(ot.create(), a, r),
      l = ot.add(ot.create(), a, c);
    return (
      (a = ot.transform(a, a, n)),
      (i = ot.transform(i, i, n)),
      (l = ot.transform(l, l, n)),
      C2(t, a, i, l),
      s && q2(t, t),
      t
    );
  };
var z2 = G2;
var vt = {
  /**
   * @see [vec4.clone()]{@link module:modeling/maths/vec4.clone}
   * @function clone
   */
  clone: ha,
  /**
   * @see [vec4.copy()]{@link module:modeling/maths/vec4.copy}
   * @function copy
   */
  copy: da,
  /**
   * @see [vec4.create()]{@link module:modeling/maths/vec4.create}
   * @function create
   */
  create: wn,
  /**
   * @see [vec4.equals()]{@link module:modeling/maths/vec4.equals}
   * @function equals
   */
  equals: ga,
  flip: pa,
  fromNormalAndPoint: $a,
  /**
   * @see [vec4.fromValues()]{@link module:modeling/maths/vec4.fromValues}
   * @function fromValues
   */
  fromValues: ma,
  fromNoisyPoints: S2,
  fromPoints: va,
  fromPointsRandom: M2,
  projectionOfPoint: O2,
  signedDistanceToPoint: ya,
  /**
   * @see [vec4.toString()]{@link module:modeling/maths/vec4.toString}
   * @function toString
   */
  toString: wa,
  transform: z2,
};
const yo = vt,
  D2 = ce,
  L2 = (t) => {
    const e = t.vertices.slice().reverse(),
      n = D2(e);
    return t.plane && (n.plane = yo.flip(yo.create(), t.plane)), n;
  };
var I2 = L2;
const Z2 = (t) =>
  !!(t && typeof t == "object" && "vertices" in t && Array.isArray(t.vertices));
var xa = Z2;
const wo = vt,
  Bt = N,
  X2 = (t) => Y2(t.vertices),
  Y2 = (t) => {
    const e = t.length;
    if (e > 2) {
      const n = wo.fromPoints(wo.create(), ...t);
      let s = t[e - 2],
        o = t[e - 1];
      for (let r = 0; r < e; r++) {
        const c = t[r];
        if (!H2(s, o, c, n)) return !1;
        (s = o), (o = c);
      }
    }
    return !0;
  },
  H2 = (t, e, n, s) => {
    const o = Bt.cross(
      Bt.create(),
      Bt.subtract(Bt.create(), e, t),
      Bt.subtract(Bt.create(), n, e),
    );
    return Bt.dot(o, s) >= 0;
  };
var Pa = X2;
const xo = vt,
  U2 = (t) => (
    t.plane || (t.plane = xo.fromPoints(xo.create(), ...t.vertices)), t.plane
  );
var Fs = U2;
const W2 = Fs,
  K2 = (t) => {
    const e = t.vertices.length;
    if (e < 3) return 0;
    const n = t.vertices,
      s = W2(t),
      o = Math.abs(s[0]),
      r = Math.abs(s[1]),
      c = Math.abs(s[2]);
    if (o + r + c === 0) return 0;
    let a = 3;
    o > r && o > c ? (a = 1) : r > c && (a = 2);
    let i = 0,
      l = 0,
      f = 1,
      u = 2;
    switch (a) {
      case 1:
        for (f = 1; f < e; f++)
          (l = f - 1), (u = (f + 1) % e), (i += n[f][1] * (n[u][2] - n[l][2]));
        (i += n[0][1] * (n[1][2] - n[e - 1][2])), (i /= 2 * s[0]);
        break;
      case 2:
        for (f = 1; f < e; f++)
          (l = f - 1), (u = (f + 1) % e), (i += n[f][2] * (n[u][0] - n[l][0]));
        (i += n[0][2] * (n[1][0] - n[e - 1][0])), (i /= 2 * s[1]);
        break;
      case 3:
      default:
        for (f = 1; f < e; f++)
          (l = f - 1), (u = (f + 1) % e), (i += n[f][0] * (n[u][1] - n[l][1]));
        (i += n[0][0] * (n[1][1] - n[e - 1][1])), (i /= 2 * s[2]);
        break;
    }
    return i;
  };
var Ea = K2;
const he = N,
  Q2 = (t) => {
    const e = t.vertices,
      n = e.length,
      s = n === 0 ? he.create() : he.clone(e[0]),
      o = he.clone(s);
    for (let r = 1; r < n; r++) he.min(s, s, e[r]), he.max(o, o, e[r]);
    return [s, o];
  };
var J2 = Q2;
const j2 = (t, e) => t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
var th = j2;
const eh = (t, e) => ((t[0] = e), (t[1] = e), (t[2] = e), (t[3] = e), t);
var nh = eh;
const sh = (t, e, n) => {
  const [s, o, r, c] = e;
  return (
    (t[0] = n[0] * s + n[4] * o + n[8] * r + n[12] * c),
    (t[1] = n[1] * s + n[5] * o + n[9] * r + n[13] * c),
    (t[2] = n[2] * s + n[6] * o + n[10] * r + n[14] * c),
    (t[3] = n[3] * s + n[7] * o + n[11] * r + n[15] * c),
    t
  );
};
var oh = sh;
var Aa = {
  clone: ha,
  copy: da,
  create: wn,
  dot: th,
  equals: ga,
  fromScalar: nh,
  fromValues: ma,
  toString: wa,
  transform: oh,
};
const rh = Aa,
  Po = /* @__PURE__ */ new WeakMap(),
  ch = (t) => {
    const e = Po.get(t);
    if (e) return e;
    const n = t.vertices,
      s = rh.create();
    if (n.length === 0)
      return (s[0] = 0), (s[1] = 0), (s[2] = 0), (s[3] = 0), s;
    let o = n[0],
      r = o,
      c = o,
      a = o,
      i = o,
      l = o;
    n.forEach((d) => {
      o[0] > d[0] && (o = d),
        r[1] > d[1] && (r = d),
        c[2] > d[2] && (c = d),
        a[0] < d[0] && (a = d),
        i[1] < d[1] && (i = d),
        l[2] < d[2] && (l = d);
    }),
      (s[0] = (o[0] + a[0]) * 0.5),
      (s[1] = (r[1] + i[1]) * 0.5),
      (s[2] = (c[2] + l[2]) * 0.5);
    const f = s[0] - a[0],
      u = s[1] - i[1],
      h = s[2] - l[2];
    return (s[3] = Math.sqrt(f * f + u * u + h * h)), Po.set(t, s), s;
  };
var ah = ch;
const Zn = N,
  ih = (t) => {
    let e = 0;
    const n = t.vertices,
      s = Zn.create();
    for (let o = 0; o < n.length - 2; o++)
      Zn.cross(s, n[o + 1], n[o + 2]), (e += Zn.dot(n[0], s));
    return (e /= 6), e;
  };
var lh = ih;
const fh = (t) => t.vertices;
var uh = fh;
const hh = N,
  dh = (t) => {
    let e = "poly3: vertices: [";
    return (
      t.vertices.forEach((n) => {
        e += `${hh.toString(n)}, `;
      }),
      (e += "]"),
      e
    );
  };
var gh = dh;
const ph = I,
  Eo = N,
  $h = ce,
  mh = (t, e) => {
    const n = e.vertices.map((s) => Eo.transform(Eo.create(), s, t));
    return ph.isMirroring(t) && n.reverse(), $h(n);
  };
var vh = mh;
const yh = ya,
  { NEPS: wh } = D,
  xh = N,
  Ph = xa,
  Eh = Pa,
  Ah = Ea,
  bh = Fs,
  Sh = (t) => {
    if (!Ph(t)) throw new Error("invalid poly3 structure");
    if (t.vertices.length < 3)
      throw new Error(`poly3 not enough vertices ${t.vertices.length}`);
    if (Ah(t) <= 0) throw new Error("poly3 area must be greater than zero");
    for (let e = 0; e < t.vertices.length; e++)
      if (xh.equals(t.vertices[e], t.vertices[(e + 1) % t.vertices.length]))
        throw new Error(`poly3 duplicate vertex ${t.vertices[e]}`);
    if (!Eh(t)) throw new Error("poly3 must be convex");
    if (
      (t.vertices.forEach((e) => {
        if (!e.every(Number.isFinite))
          throw new Error(`poly3 invalid vertex ${e}`);
      }),
      t.vertices.length > 3)
    ) {
      const e = bh(t);
      t.vertices.forEach((n) => {
        const s = Math.abs(yh(e, n));
        if (s > wh)
          throw new Error(`poly3 must be coplanar: vertex ${n} distance ${s}`);
      });
    }
  };
var _h = Sh;
var z = {
  clone: a2,
  create: ce,
  fromPoints: u2,
  fromPointsAndPlane: g2,
  invert: I2,
  isA: xa,
  isConvex: Pa,
  measureArea: Ea,
  measureBoundingBox: J2,
  measureBoundingSphere: ah,
  measureSignedVolume: lh,
  plane: Fs,
  toPoints: uh,
  toString: gh,
  transform: vh,
  validate: _h,
};
const Th = ua,
  Mh = Oe,
  kh = z,
  Nh = (t) => {
    if (!Array.isArray(t)) throw new Error("the given points must be an array");
    const n = Th(t, { skipTriangulation: !0 }).map((s) => {
      const o = s.map((r) => t[r]);
      return kh.create(o);
    });
    return Mh(n);
  };
var Oh = Nh;
const Bh = z,
  Vh = Oe,
  Rh = (t) => {
    if (!Array.isArray(t)) throw new Error("the given points must be an array");
    const e = t.map((s, o) => Bh.create(s));
    return Vh(e);
  };
var Fh = Rh;
const Ch = N,
  qh = I,
  Gh = z,
  zh = Oe,
  Dh = (t) => {
    if (t[0] !== 1) throw new Error("invalid compact binary data");
    const e = zh();
    e.transforms = qh.clone(t.slice(1, 17));
    const n = t[21];
    let s = 22,
      o = t.length - n * 3;
    for (; o < t.length; ) {
      const r = t[s];
      s++;
      const c = [];
      for (let a = 0; a < r; a++)
        c.push(Ch.fromValues(t[o], t[o + 1], t[o + 2])), (o += 3);
      e.polygons.push(Gh.create(c));
    }
    return t[17] >= 0 && (e.color = [t[17], t[18], t[19], t[20]]), e;
  };
var Lh = Dh;
const Ao = I,
  Ih = z,
  Zh = (t) => (
    Ao.isIdentity(t.transforms) ||
      ((t.polygons = t.polygons.map((e) => Ih.transform(t.transforms, e))),
      (t.transforms = Ao.create())),
    t
  );
var Xh = Zh;
const Yh = Xh,
  Hh = (t) => Yh(t).polygons;
var xn = Hh;
const Uh = z,
  Wh = Oe,
  Kh = xn,
  Qh = (t) => {
    const n = Kh(t).map((s) => Uh.invert(s));
    return Wh(n);
  };
var Jh = Qh;
const jh = (t) =>
  !!(
    t &&
    typeof t == "object" &&
    "polygons" in t &&
    "transforms" in t &&
    Array.isArray(t.polygons) &&
    "length" in t.transforms
  );
var ba = jh;
const td = z,
  ed = xn,
  nd = (t) => ed(t).map((s) => td.toPoints(s));
var sd = nd;
const od = z,
  rd = xn,
  cd = (t) => {
    const e = rd(t);
    let n =
      "geom3 (" +
      e.length +
      ` polygons):
`;
    return (
      e.forEach((s) => {
        n +=
          "  " +
          od.toString(s) +
          `
`;
      }),
      n
    );
  };
var ad = cd;
const id = z,
  ld = (t) => {
    const e = t.polygons,
      n = t.transforms,
      s = e.length,
      o = e.reduce((l, f) => l + f.vertices.length, 0);
    let r = [-1, -1, -1, -1];
    t.color && (r = t.color);
    const c = new Float32Array(22 + s + o * 3);
    (c[0] = 1),
      (c[1] = n[0]),
      (c[2] = n[1]),
      (c[3] = n[2]),
      (c[4] = n[3]),
      (c[5] = n[4]),
      (c[6] = n[5]),
      (c[7] = n[6]),
      (c[8] = n[7]),
      (c[9] = n[8]),
      (c[10] = n[9]),
      (c[11] = n[10]),
      (c[12] = n[11]),
      (c[13] = n[12]),
      (c[14] = n[13]),
      (c[15] = n[14]),
      (c[16] = n[15]),
      (c[17] = r[0]),
      (c[18] = r[1]),
      (c[19] = r[2]),
      (c[20] = r[3]),
      (c[21] = o);
    let a = 22,
      i = a + s;
    return (
      e.forEach((l) => {
        const f = id.toPoints(l);
        (c[a] = f.length), a++;
        for (let u = 0; u < f.length; u++) {
          const h = f[u];
          (c[i + 0] = h[0]), (c[i + 1] = h[1]), (c[i + 2] = h[2]), (i += 3);
        }
      }),
      c
    );
  };
var fd = ld;
const bo = I,
  ud = (t, e) => {
    const n = bo.multiply(bo.create(), t, e.transforms);
    return Object.assign({}, e, { transforms: n });
  };
var hd = ud;
const dd = z,
  gd = ba,
  pd = (t) => {
    if (!gd(t)) throw new Error("invalid geom3 structure");
    if (
      (t.polygons.forEach(dd.validate),
      $d(t),
      !t.transforms.every(Number.isFinite))
    )
      throw new Error(`geom3 invalid transforms ${t.transforms}`);
  },
  $d = (t) => {
    const e = /* @__PURE__ */ new Map();
    t.polygons.forEach(({ vertices: s }) => {
      s.forEach((o, r) => {
        const c = `${o}`,
          a = `${s[(r + 1) % s.length]}`,
          i = `${c}/${a}`,
          l = e.has(i) ? e.get(i) : 0;
        e.set(i, l + 1);
      });
    });
    const n = [];
    if (
      (e.forEach((s, o) => {
        const r = o.split("/").reverse().join("/"),
          c = e.get(r);
        s !== c && n.push(o.replace("/", " -> "));
      }),
      n.length > 0)
    )
      throw new Error(`non-manifold edges ${n.length}
${n.join(`
`)}`);
  };
var md = pd;
var F = {
  clone: Pu,
  create: Oe,
  fromPointsConvex: Oh,
  fromPoints: Fh,
  fromCompactBinary: Lh,
  invert: Jh,
  isA: ba,
  toPoints: sd,
  toPolygons: xn,
  toString: ad,
  toCompactBinary: fd,
  transform: hd,
  validate: md,
};
const vd = (t) => Object.assign({}, t);
var Cs = vd;
const { EPS: So } = D,
  yd = G,
  wd = Cs,
  xd = (t) => {
    if (t.isClosed) return t;
    const e = wd(t);
    if (((e.isClosed = !0), e.points.length > 1)) {
      const n = e.points,
        s = n[0];
      let o = n[n.length - 1];
      for (; yd.distance(s, o) < So * So && (n.pop(), n.length !== 1); )
        o = n[n.length - 1];
    }
    return e;
  };
var Sa = xd;
const Pd = I,
  Ed = (t) => (
    t === void 0 && (t = []),
    {
      points: t,
      isClosed: !1,
      transforms: Pd.create(),
    }
  );
var Pn = Ed;
const { EPS: _o } = D,
  To = G,
  Ad = Sa,
  bd = Pn,
  Sd = (t, e) => {
    const n = { closed: !1 };
    let { closed: s } = Object.assign({}, n, t),
      o = bd();
    if (((o.points = e.map((r) => To.clone(r))), o.points.length > 1)) {
      const r = o.points[0],
        c = o.points[o.points.length - 1];
      To.distance(r, c) < _o * _o && (s = !0);
    }
    return s === !0 && (o = Ad(o)), o;
  };
var qs = Sd;
const Mo = I,
  ko = G,
  _d = (t) => (
    Mo.isIdentity(t.transforms) ||
      ((t.points = t.points.map((e) =>
        ko.transform(ko.create(), e, t.transforms),
      )),
      (t.transforms = Mo.create())),
    t
  );
var Td = _d;
const Md = Td,
  kd = (t) => Md(t).points;
var ae = kd;
const { TAU: De } = D,
  U = G,
  Nd = qs,
  Od = ae,
  Bd = (t, e) => {
    const n = {
      radius: [0, 0],
      // X and Y radius
      xaxisrotation: 0,
      clockwise: !1,
      large: !1,
      segments: 16,
    };
    let {
      endpoint: s,
      radius: o,
      xaxisrotation: r,
      clockwise: c,
      large: a,
      segments: i,
    } = Object.assign({}, n, t);
    if (!Array.isArray(s))
      throw new Error("endpoint must be an array of X and Y values");
    if (s.length < 2) throw new Error("endpoint must contain X and Y values");
    if (((s = U.clone(s)), !Array.isArray(o)))
      throw new Error("radius must be an array of X and Y values");
    if (o.length < 2) throw new Error("radius must contain X and Y values");
    if (i < 4) throw new Error("segments must be four or more");
    const l = 1e5;
    if (e.isClosed) throw new Error("the given path cannot be closed");
    const f = Od(e);
    if (f.length < 1)
      throw new Error(
        "the given path must contain one or more points (as the starting point for the arc)",
      );
    let u = o[0],
      h = o[1];
    const d = f[f.length - 1];
    (u = Math.round(u * l) / l),
      (h = Math.round(h * l) / l),
      (s = U.fromValues(Math.round(s[0] * l) / l, Math.round(s[1] * l) / l));
    const p = !c;
    let g = [];
    if (u === 0 || h === 0) g.push(s);
    else {
      (u = Math.abs(u)), (h = Math.abs(h));
      const v = r,
        y = Math.cos(v),
        x = Math.sin(v),
        m = U.subtract(U.create(), d, s);
      U.scale(m, m, 0.5);
      const P = Math.round((y * m[0] + x * m[1]) * l) / l,
        w = Math.round((-x * m[0] + y * m[1]) * l) / l,
        E = U.fromValues(P, w),
        A = (E[0] * E[0]) / (u * u) + (E[1] * E[1]) / (h * h);
      if (A > 1) {
        const nt = Math.sqrt(A);
        (u *= nt),
          (h *= nt),
          (u = Math.round(u * l) / l),
          (h = Math.round(h * l) / l);
      }
      let b = Math.sqrt(
        (u * u * h * h - u * u * E[1] * E[1] - h * h * E[0] * E[0]) /
          (u * u * E[1] * E[1] + h * h * E[0] * E[0]),
      );
      p === a && (b = -b);
      const _ = U.fromValues((u * E[1]) / h, (-h * E[0]) / u);
      U.scale(_, _, b);
      let S = U.fromValues(y * _[0] - x * _[1], x * _[0] + y * _[1]);
      S = U.add(S, S, U.scale(U.create(), U.add(U.create(), d, s), 0.5));
      const M = U.fromValues((E[0] - _[0]) / u, (E[1] - _[1]) / h),
        q = U.fromValues((-E[0] - _[0]) / u, (-E[1] - _[1]) / h),
        B = U.angleRadians(M);
      let k = U.angleRadians(q) - B;
      (k = k % De), !p && k > 0 ? (k -= De) : p && k < 0 && (k += De);
      let J = Math.ceil((Math.abs(k) / De) * i) + 1;
      J < 1 && (J = 1);
      for (let nt = 1; nt < J; nt++) {
        const Et = B + (nt / J) * k,
          fe = Math.cos(Et),
          Ce = Math.sin(Et),
          It = U.fromValues(y * u * fe - x * h * Ce, x * u * fe + y * h * Ce);
        U.add(It, It, S), g.push(It);
      }
      J && g.push(t.endpoint);
    }
    return (g = f.concat(g)), Nd({}, g);
  };
var Vd = Bd;
const Rd = qs,
  Fd = ae,
  { equals: Cd } = G,
  qd = (...t) => {
    let e = !1,
      n = [];
    return (
      t.forEach((s, o) => {
        const r = Fd(s).slice();
        if (
          (n.length > 0 &&
            r.length > 0 &&
            Cd(r[0], n[n.length - 1]) &&
            r.shift(),
          r.length > 0 && e)
        )
          throw new Error(
            `Cannot concatenate to a closed path; check the ${o}th path`,
          );
        (e = s.isClosed), (n = n.concat(r));
      }),
      Rd({ closed: e }, n)
    );
  };
var _a = qd;
const Gd = _a,
  zd = Pn,
  Dd = (t, e) => Gd(e, zd(t));
var Ta = Dd;
const { TAU: Ld } = D,
  ft = G,
  Id = G,
  Zd = Ta,
  Xd = ae,
  Yd = (t, e) => {
    const n = {
      segments: 16,
    };
    let { controlPoints: s, segments: o } = Object.assign({}, n, t);
    if (!Array.isArray(s))
      throw new Error("controlPoints must be an array of one or more points");
    if (s.length < 1)
      throw new Error("controlPoints must be an array of one or more points");
    if (o < 4) throw new Error("segments must be four or more");
    if (e.isClosed) throw new Error("the given geometry cannot be closed");
    const r = Xd(e);
    if (r.length < 1)
      throw new Error(
        "the given path must contain one or more points (as the starting point for the bezier curve)",
      );
    if (((s = s.slice()), s[0] === null)) {
      if (s.length < 2)
        throw new Error(
          "a null control point must be passed with one more control points",
        );
      let w = r[r.length - 2];
      if (
        ("lastBezierControlPoint" in e && (w = e.lastBezierControlPoint),
        !Array.isArray(w))
      )
        throw new Error(
          "the given path must contain TWO or more points if given a null control point",
        );
      const E = ft.scale(ft.create(), r[r.length - 1], 2);
      ft.subtract(E, E, w), (s[0] = E);
    }
    s.unshift(r[r.length - 1]);
    const a = s.length - 1,
      i = [];
    let l = 1;
    for (let w = 0; w <= a; ++w) w > 0 && (l *= w), i.push(l);
    const f = [];
    for (let w = 0; w <= a; ++w) {
      const E = i[a] / (i[w] * i[a - w]);
      f.push(E);
    }
    const u = ft.create(),
      h = ft.create(),
      d = Id.create(),
      p = (w) => {
        let E = 1,
          A = Math.pow(1 - w, a);
        const b = w !== 1 ? 1 / (1 - w) : 1,
          _ = ft.create();
        for (let S = 0; S <= a; ++S) {
          S === a && (A = 1);
          const M = f[S] * E * A,
            q = ft.scale(u, s[S], M);
          ft.add(_, _, q), (E *= w), (A *= b);
        }
        return _;
      },
      g = [],
      $ = [],
      v = a + 1;
    for (let w = 0; w < v; ++w) {
      const E = w / (v - 1),
        A = p(E);
      g.push(A), $.push(E);
    }
    let y = 1;
    const x = Ld / o,
      m = Math.sin(x);
    for (; y < g.length - 1; ) {
      const w = ft.subtract(u, g[y], g[y - 1]);
      ft.normalize(w, w);
      const E = ft.subtract(h, g[y + 1], g[y]);
      ft.normalize(E, E);
      const A = ft.cross(d, w, E);
      if (Math.abs(A[2]) > m) {
        const b = $[y - 1],
          _ = $[y + 1],
          S = b + ((_ - b) * 1) / 3,
          M = b + ((_ - b) * 2) / 3,
          q = p(S),
          B = p(M);
        g.splice(y, 1, q, B), $.splice(y, 1, S, M), y--, y < 1 && (y = 1);
      } else ++y;
    }
    g.shift();
    const P = Zd(g, e);
    return (P.lastBezierControlPoint = s[s.length - 2]), P;
  };
var Hd = Yd;
const Ud = G,
  No = ae,
  Wd = (t, e) => {
    if (t.isClosed !== e.isClosed || t.points.length !== e.points.length)
      return !1;
    const n = No(t),
      s = No(e),
      o = n.length;
    let r = 0;
    do {
      let c = !1;
      for (let a = 0; a < o; a++)
        if (!Ud.equals(n[a], s[(a + r) % o])) {
          c = !0;
          break;
        }
      if (c === !1) return !0;
      if (!t.isClosed) return !1;
    } while (++r < o);
    return !1;
  };
var Kd = Wd;
const Qd = I,
  Jd = G,
  jd = Pn,
  tg = (t) => {
    if (t[0] !== 2) throw new Error("invalid compact binary data");
    const e = jd();
    (e.transforms = Qd.clone(t.slice(1, 17))), (e.isClosed = !!t[17]);
    for (let n = 22; n < t.length; n += 2) {
      const s = Jd.fromValues(t[n], t[n + 1]);
      e.points.push(s);
    }
    return t[18] >= 0 && (e.color = [t[18], t[19], t[20], t[21]]), e;
  };
var eg = tg;
const ng = (t) =>
  !!(
    t &&
    typeof t == "object" &&
    "points" in t &&
    "transforms" in t &&
    "isClosed" in t &&
    Array.isArray(t.points) &&
    "length" in t.transforms
  );
var Ma = ng;
const sg = Cs,
  og = (t) => {
    const e = sg(t);
    return (e.points = t.points.slice().reverse()), e;
  };
var rg = og;
const cg = G,
  ag = ae,
  ig = (t) => {
    const e = ag(t);
    let n =
      "path (" +
      e.length +
      " points, " +
      t.isClosed +
      `):
[
`;
    return (
      e.forEach((s) => {
        n +=
          "  " +
          cg.toString(s) +
          `,
`;
      }),
      (n += `]
`),
      n
    );
  };
var lg = ig;
const fg = (t) => {
  const e = t.points,
    n = t.transforms;
  let s = [-1, -1, -1, -1];
  t.color && (s = t.color);
  const o = new Float32Array(22 + e.length * 2);
  (o[0] = 2),
    (o[1] = n[0]),
    (o[2] = n[1]),
    (o[3] = n[2]),
    (o[4] = n[3]),
    (o[5] = n[4]),
    (o[6] = n[5]),
    (o[7] = n[6]),
    (o[8] = n[7]),
    (o[9] = n[8]),
    (o[10] = n[9]),
    (o[11] = n[10]),
    (o[12] = n[11]),
    (o[13] = n[12]),
    (o[14] = n[13]),
    (o[15] = n[14]),
    (o[16] = n[15]),
    (o[17] = t.isClosed ? 1 : 0),
    (o[18] = s[0]),
    (o[19] = s[1]),
    (o[20] = s[2]),
    (o[21] = s[3]);
  for (let r = 0; r < e.length; r++) {
    const c = r * 2 + 22,
      a = e[r];
    (o[c] = a[0]), (o[c + 1] = a[1]);
  }
  return o;
};
var ug = fg;
const Oo = I,
  hg = (t, e) => {
    const n = Oo.multiply(Oo.create(), t, e.transforms);
    return Object.assign({}, e, { transforms: n });
  };
var dg = hg;
const gg = G,
  pg = Ma,
  $g = (t) => {
    if (!pg(t)) throw new Error("invalid path2 structure");
    if (t.points.length > 1) {
      for (let e = 0; e < t.points.length; e++)
        if (gg.equals(t.points[e], t.points[(e + 1) % t.points.length]))
          throw new Error(`path2 duplicate points ${t.points[e]}`);
    }
    if (
      (t.points.forEach((e) => {
        if (!e.every(Number.isFinite))
          throw new Error(`path2 invalid point ${e}`);
      }),
      !t.transforms.every(Number.isFinite))
    )
      throw new Error(`path2 invalid transforms ${t.transforms}`);
  };
var mg = $g;
var L = {
  appendArc: Vd,
  appendBezier: Hd,
  appendPoints: Ta,
  clone: Cs,
  close: Sa,
  concat: _a,
  create: Pn,
  equals: Kd,
  fromPoints: qs,
  fromCompactBinary: eg,
  isA: Ma,
  reverse: rg,
  toPoints: ae,
  toString: lg,
  toCompactBinary: ug,
  transform: dg,
  validate: mg,
};
const vg = V,
  ka = R,
  Na = F,
  Oa = L,
  Ba = z,
  yg = (t, e) => {
    const n = ka.clone(e);
    return (n.color = t), n;
  },
  wg = (t, e) => {
    const n = Na.clone(e);
    return (n.color = t), n;
  },
  xg = (t, e) => {
    const n = Oa.clone(e);
    return (n.color = t), n;
  },
  Pg = (t, e) => {
    const n = Ba.clone(e);
    return (n.color = t), n;
  },
  Eg = (t, ...e) => {
    if (!Array.isArray(t)) throw new Error("color must be an array");
    if (t.length < 3) throw new Error("color must contain R, G and B values");
    if (
      (t.length === 3 && (t = [t[0], t[1], t[2], 1]),
      (e = vg(e)),
      e.length === 0)
    )
      throw new Error("wrong number of arguments");
    const n = e.map((s) =>
      ka.isA(s)
        ? yg(t, s)
        : Na.isA(s)
          ? wg(t, s)
          : Oa.isA(s)
            ? xg(t, s)
            : Ba.isA(s)
              ? Pg(t, s)
              : ((s.color = t), s),
    );
    return n.length === 1 ? n[0] : n;
  };
var Ag = Eg;
const bg = {
  // basic color keywords
  black: [0 / 255, 0 / 255, 0 / 255],
  silver: [192 / 255, 192 / 255, 192 / 255],
  gray: [128 / 255, 128 / 255, 128 / 255],
  white: [255 / 255, 255 / 255, 255 / 255],
  maroon: [128 / 255, 0 / 255, 0 / 255],
  red: [255 / 255, 0 / 255, 0 / 255],
  purple: [128 / 255, 0 / 255, 128 / 255],
  fuchsia: [255 / 255, 0 / 255, 255 / 255],
  green: [0 / 255, 128 / 255, 0 / 255],
  lime: [0 / 255, 255 / 255, 0 / 255],
  olive: [128 / 255, 128 / 255, 0 / 255],
  yellow: [255 / 255, 255 / 255, 0 / 255],
  navy: [0 / 255, 0 / 255, 128 / 255],
  blue: [0 / 255, 0 / 255, 255 / 255],
  teal: [0 / 255, 128 / 255, 128 / 255],
  aqua: [0 / 255, 255 / 255, 255 / 255],
  // extended color keywords
  aliceblue: [240 / 255, 248 / 255, 255 / 255],
  antiquewhite: [250 / 255, 235 / 255, 215 / 255],
  // 'aqua': [ 0 / 255, 255 / 255, 255 / 255 ],
  aquamarine: [127 / 255, 255 / 255, 212 / 255],
  azure: [240 / 255, 255 / 255, 255 / 255],
  beige: [245 / 255, 245 / 255, 220 / 255],
  bisque: [255 / 255, 228 / 255, 196 / 255],
  // 'black': [ 0 / 255, 0 / 255, 0 / 255 ],
  blanchedalmond: [255 / 255, 235 / 255, 205 / 255],
  // 'blue': [ 0 / 255, 0 / 255, 255 / 255 ],
  blueviolet: [138 / 255, 43 / 255, 226 / 255],
  brown: [165 / 255, 42 / 255, 42 / 255],
  burlywood: [222 / 255, 184 / 255, 135 / 255],
  cadetblue: [95 / 255, 158 / 255, 160 / 255],
  chartreuse: [127 / 255, 255 / 255, 0 / 255],
  chocolate: [210 / 255, 105 / 255, 30 / 255],
  coral: [255 / 255, 127 / 255, 80 / 255],
  cornflowerblue: [100 / 255, 149 / 255, 237 / 255],
  cornsilk: [255 / 255, 248 / 255, 220 / 255],
  crimson: [220 / 255, 20 / 255, 60 / 255],
  cyan: [0 / 255, 255 / 255, 255 / 255],
  darkblue: [0 / 255, 0 / 255, 139 / 255],
  darkcyan: [0 / 255, 139 / 255, 139 / 255],
  darkgoldenrod: [184 / 255, 134 / 255, 11 / 255],
  darkgray: [169 / 255, 169 / 255, 169 / 255],
  darkgreen: [0 / 255, 100 / 255, 0 / 255],
  darkgrey: [169 / 255, 169 / 255, 169 / 255],
  darkkhaki: [189 / 255, 183 / 255, 107 / 255],
  darkmagenta: [139 / 255, 0 / 255, 139 / 255],
  darkolivegreen: [85 / 255, 107 / 255, 47 / 255],
  darkorange: [255 / 255, 140 / 255, 0 / 255],
  darkorchid: [153 / 255, 50 / 255, 204 / 255],
  darkred: [139 / 255, 0 / 255, 0 / 255],
  darksalmon: [233 / 255, 150 / 255, 122 / 255],
  darkseagreen: [143 / 255, 188 / 255, 143 / 255],
  darkslateblue: [72 / 255, 61 / 255, 139 / 255],
  darkslategray: [47 / 255, 79 / 255, 79 / 255],
  darkslategrey: [47 / 255, 79 / 255, 79 / 255],
  darkturquoise: [0 / 255, 206 / 255, 209 / 255],
  darkviolet: [148 / 255, 0 / 255, 211 / 255],
  deeppink: [255 / 255, 20 / 255, 147 / 255],
  deepskyblue: [0 / 255, 191 / 255, 255 / 255],
  dimgray: [105 / 255, 105 / 255, 105 / 255],
  dimgrey: [105 / 255, 105 / 255, 105 / 255],
  dodgerblue: [30 / 255, 144 / 255, 255 / 255],
  firebrick: [178 / 255, 34 / 255, 34 / 255],
  floralwhite: [255 / 255, 250 / 255, 240 / 255],
  forestgreen: [34 / 255, 139 / 255, 34 / 255],
  // 'fuchsia': [ 255 / 255, 0 / 255, 255 / 255 ],
  gainsboro: [220 / 255, 220 / 255, 220 / 255],
  ghostwhite: [248 / 255, 248 / 255, 255 / 255],
  gold: [255 / 255, 215 / 255, 0 / 255],
  goldenrod: [218 / 255, 165 / 255, 32 / 255],
  // 'gray': [ 128 / 255, 128 / 255, 128 / 255 ],
  // 'green': [ 0 / 255, 128 / 255, 0 / 255 ],
  greenyellow: [173 / 255, 255 / 255, 47 / 255],
  grey: [128 / 255, 128 / 255, 128 / 255],
  honeydew: [240 / 255, 255 / 255, 240 / 255],
  hotpink: [255 / 255, 105 / 255, 180 / 255],
  indianred: [205 / 255, 92 / 255, 92 / 255],
  indigo: [75 / 255, 0 / 255, 130 / 255],
  ivory: [255 / 255, 255 / 255, 240 / 255],
  khaki: [240 / 255, 230 / 255, 140 / 255],
  lavender: [230 / 255, 230 / 255, 250 / 255],
  lavenderblush: [255 / 255, 240 / 255, 245 / 255],
  lawngreen: [124 / 255, 252 / 255, 0 / 255],
  lemonchiffon: [255 / 255, 250 / 255, 205 / 255],
  lightblue: [173 / 255, 216 / 255, 230 / 255],
  lightcoral: [240 / 255, 128 / 255, 128 / 255],
  lightcyan: [224 / 255, 255 / 255, 255 / 255],
  lightgoldenrodyellow: [250 / 255, 250 / 255, 210 / 255],
  lightgray: [211 / 255, 211 / 255, 211 / 255],
  lightgreen: [144 / 255, 238 / 255, 144 / 255],
  lightgrey: [211 / 255, 211 / 255, 211 / 255],
  lightpink: [255 / 255, 182 / 255, 193 / 255],
  lightsalmon: [255 / 255, 160 / 255, 122 / 255],
  lightseagreen: [32 / 255, 178 / 255, 170 / 255],
  lightskyblue: [135 / 255, 206 / 255, 250 / 255],
  lightslategray: [119 / 255, 136 / 255, 153 / 255],
  lightslategrey: [119 / 255, 136 / 255, 153 / 255],
  lightsteelblue: [176 / 255, 196 / 255, 222 / 255],
  lightyellow: [255 / 255, 255 / 255, 224 / 255],
  // 'lime': [ 0 / 255, 255 / 255, 0 / 255 ],
  limegreen: [50 / 255, 205 / 255, 50 / 255],
  linen: [250 / 255, 240 / 255, 230 / 255],
  magenta: [255 / 255, 0 / 255, 255 / 255],
  // 'maroon': [ 128 / 255, 0 / 255, 0 / 255 ],
  mediumaquamarine: [102 / 255, 205 / 255, 170 / 255],
  mediumblue: [0 / 255, 0 / 255, 205 / 255],
  mediumorchid: [186 / 255, 85 / 255, 211 / 255],
  mediumpurple: [147 / 255, 112 / 255, 219 / 255],
  mediumseagreen: [60 / 255, 179 / 255, 113 / 255],
  mediumslateblue: [123 / 255, 104 / 255, 238 / 255],
  mediumspringgreen: [0 / 255, 250 / 255, 154 / 255],
  mediumturquoise: [72 / 255, 209 / 255, 204 / 255],
  mediumvioletred: [199 / 255, 21 / 255, 133 / 255],
  midnightblue: [25 / 255, 25 / 255, 112 / 255],
  mintcream: [245 / 255, 255 / 255, 250 / 255],
  mistyrose: [255 / 255, 228 / 255, 225 / 255],
  moccasin: [255 / 255, 228 / 255, 181 / 255],
  navajowhite: [255 / 255, 222 / 255, 173 / 255],
  // 'navy': [ 0 / 255, 0 / 255, 128 / 255 ],
  oldlace: [253 / 255, 245 / 255, 230 / 255],
  // 'olive': [ 128 / 255, 128 / 255, 0 / 255 ],
  olivedrab: [107 / 255, 142 / 255, 35 / 255],
  orange: [255 / 255, 165 / 255, 0 / 255],
  orangered: [255 / 255, 69 / 255, 0 / 255],
  orchid: [218 / 255, 112 / 255, 214 / 255],
  palegoldenrod: [238 / 255, 232 / 255, 170 / 255],
  palegreen: [152 / 255, 251 / 255, 152 / 255],
  paleturquoise: [175 / 255, 238 / 255, 238 / 255],
  palevioletred: [219 / 255, 112 / 255, 147 / 255],
  papayawhip: [255 / 255, 239 / 255, 213 / 255],
  peachpuff: [255 / 255, 218 / 255, 185 / 255],
  peru: [205 / 255, 133 / 255, 63 / 255],
  pink: [255 / 255, 192 / 255, 203 / 255],
  plum: [221 / 255, 160 / 255, 221 / 255],
  powderblue: [176 / 255, 224 / 255, 230 / 255],
  // 'purple': [ 128 / 255, 0 / 255, 128 / 255 ],
  // 'red': [ 255 / 255, 0 / 255, 0 / 255 ],
  rosybrown: [188 / 255, 143 / 255, 143 / 255],
  royalblue: [65 / 255, 105 / 255, 225 / 255],
  saddlebrown: [139 / 255, 69 / 255, 19 / 255],
  salmon: [250 / 255, 128 / 255, 114 / 255],
  sandybrown: [244 / 255, 164 / 255, 96 / 255],
  seagreen: [46 / 255, 139 / 255, 87 / 255],
  seashell: [255 / 255, 245 / 255, 238 / 255],
  sienna: [160 / 255, 82 / 255, 45 / 255],
  // 'silver': [ 192 / 255, 192 / 255, 192 / 255 ],
  skyblue: [135 / 255, 206 / 255, 235 / 255],
  slateblue: [106 / 255, 90 / 255, 205 / 255],
  slategray: [112 / 255, 128 / 255, 144 / 255],
  slategrey: [112 / 255, 128 / 255, 144 / 255],
  snow: [255 / 255, 250 / 255, 250 / 255],
  springgreen: [0 / 255, 255 / 255, 127 / 255],
  steelblue: [70 / 255, 130 / 255, 180 / 255],
  tan: [210 / 255, 180 / 255, 140 / 255],
  // 'teal': [ 0 / 255, 128 / 255, 128 / 255 ],
  thistle: [216 / 255, 191 / 255, 216 / 255],
  tomato: [255 / 255, 99 / 255, 71 / 255],
  turquoise: [64 / 255, 224 / 255, 208 / 255],
  violet: [238 / 255, 130 / 255, 238 / 255],
  wheat: [245 / 255, 222 / 255, 179 / 255],
  // 'white': [ 255 / 255, 255 / 255, 255 / 255 ],
  whitesmoke: [245 / 255, 245 / 255, 245 / 255],
  // 'yellow': [ 255 / 255, 255 / 255, 0 / 255 ],
  yellowgreen: [154 / 255, 205 / 255, 50 / 255],
};
var Va = bg;
const Sg = Va,
  _g = (t) => Sg[t.toLowerCase()];
var Tg = _g;
const Mg = (t) => {
  if (((t = t.replace("#", "")), t.length < 6))
    throw new Error("the given notation must contain 3 or more hex values");
  const e = parseInt(t.substring(0, 2), 16) / 255,
    n = parseInt(t.substring(2, 4), 16) / 255,
    s = parseInt(t.substring(4, 6), 16) / 255;
  if (t.length >= 8) {
    const o = parseInt(t.substring(6, 8), 16) / 255;
    return [e, n, s, o];
  }
  return [e, n, s];
};
var kg = Mg;
const Ng = (t, e, n) => (
  n < 0 && (n += 1),
  n > 1 && (n -= 1),
  n < 1 / 6
    ? t + (e - t) * 6 * n
    : n < 1 / 2
      ? e
      : n < 2 / 3
        ? t + (e - t) * (2 / 3 - n) * 6
        : t
);
var Ra = Ng;
const Og = V,
  Xn = Ra,
  Bg = (...t) => {
    if (((t = Og(t)), t.length < 3))
      throw new Error("values must contain H, S and L values");
    const e = t[0],
      n = t[1],
      s = t[2];
    let o = s,
      r = s,
      c = s;
    if (n !== 0) {
      const a = s < 0.5 ? s * (1 + n) : s + n - s * n,
        i = 2 * s - a;
      (o = Xn(i, a, e + 1 / 3)), (r = Xn(i, a, e)), (c = Xn(i, a, e - 1 / 3));
    }
    if (t.length > 3) {
      const a = t[3];
      return [o, r, c, a];
    }
    return [o, r, c];
  };
var Vg = Bg;
const Rg = V,
  Fg = (...t) => {
    if (((t = Rg(t)), t.length < 3))
      throw new Error("values must contain H, S and V values");
    const e = t[0],
      n = t[1],
      s = t[2];
    let o = 0,
      r = 0,
      c = 0;
    const a = Math.floor(e * 6),
      i = e * 6 - a,
      l = s * (1 - n),
      f = s * (1 - i * n),
      u = s * (1 - (1 - i) * n);
    switch (a % 6) {
      case 0:
        (o = s), (r = u), (c = l);
        break;
      case 1:
        (o = f), (r = s), (c = l);
        break;
      case 2:
        (o = l), (r = s), (c = u);
        break;
      case 3:
        (o = l), (r = f), (c = s);
        break;
      case 4:
        (o = u), (r = l), (c = s);
        break;
      case 5:
        (o = s), (r = l), (c = f);
        break;
    }
    if (t.length > 3) {
      const h = t[3];
      return [o, r, c, h];
    }
    return [o, r, c];
  };
var Cg = Fg;
const qg = V,
  Gg = (...t) => {
    if (((t = qg(t)), t.length < 3))
      throw new Error("values must contain R, G and B values");
    const e = t[0] * 255,
      n = t[1] * 255,
      s = t[2] * 255;
    let o = `#${Number(16777216 + e * 65536 + n * 256 + s)
      .toString(16)
      .substring(1, 7)}`;
    return t.length > 3 && (o = o + Number(t[3] * 255).toString(16)), o;
  };
var zg = Gg;
const Dg = V,
  Lg = (...t) => {
    if (((t = Dg(t)), t.length < 3))
      throw new Error("values must contain R, G and B values");
    const e = t[0],
      n = t[1],
      s = t[2],
      o = Math.max(e, n, s),
      r = Math.min(e, n, s);
    let c, a;
    const i = (o + r) / 2;
    if (o === r) c = a = 0;
    else {
      const l = o - r;
      switch (((a = i > 0.5 ? l / (2 - o - r) : l / (o + r)), o)) {
        case e:
          c = (n - s) / l + (n < s ? 6 : 0);
          break;
        case n:
          c = (s - e) / l + 2;
          break;
        case s:
          c = (e - n) / l + 4;
          break;
      }
      c /= 6;
    }
    if (t.length > 3) {
      const l = t[3];
      return [c, a, i, l];
    }
    return [c, a, i];
  };
var Ig = Lg;
const Zg = V,
  Xg = (...t) => {
    if (((t = Zg(t)), t.length < 3))
      throw new Error("values must contain R, G and B values");
    const e = t[0],
      n = t[1],
      s = t[2],
      o = Math.max(e, n, s),
      r = Math.min(e, n, s);
    let c;
    const a = o,
      i = o - r,
      l = o === 0 ? 0 : i / o;
    if (o === r) c = 0;
    else {
      switch (o) {
        case e:
          c = (n - s) / i + (n < s ? 6 : 0);
          break;
        case n:
          c = (s - e) / i + 2;
          break;
        case s:
          c = (e - n) / i + 4;
          break;
      }
      c /= 6;
    }
    if (t.length > 3) {
      const f = t[3];
      return [c, l, a, f];
    }
    return [c, l, a];
  };
var Yg = Xg;
var Hg = {
  colorize: Ag,
  colorNameToRgb: Tg,
  cssColors: Va,
  hexToRgb: kg,
  hslToRgb: Vg,
  hsvToRgb: Cg,
  hueToColorComponent: Ra,
  rgbToHex: zg,
  rgbToHsl: Ig,
  rgbToHsv: Yg,
};
const Ug = (t) => {
    if (!Array.isArray(t))
      throw new Error("Bezier points must be a valid array/");
    if (t.length < 2)
      throw new Error("Bezier points must contain at least 2 values.");
    const e = Wg(t);
    return {
      points: t,
      pointType: e,
      dimensions: e === "float_single" ? 0 : t[0].length,
      permutations: Bo(t.length - 1),
      tangentPermutations: Bo(t.length - 2),
    };
  },
  Wg = function (t) {
    let e = null;
    return (
      t.forEach((n) => {
        let s = "";
        if (Number.isFinite(n)) s = "float_single";
        else if (Array.isArray(n))
          n.forEach((o) => {
            if (!Number.isFinite(o))
              throw new Error("Bezier point values must all be numbers.");
          }),
            (s = "float_" + n.length);
        else
          throw new Error(
            "Bezier points must all be numbers or arrays of number.",
          );
        if (e == null) e = s;
        else if (e !== s)
          throw new Error(
            "Bezier points must be either all numbers or all arrays of numbers of the same size.",
          );
      }),
      e
    );
  },
  Bo = function (t) {
    const e = [];
    for (let n = 0; n <= t; n++) e.push(Yn(t) / (Yn(n) * Yn(t - n)));
    return e;
  },
  Yn = function (t) {
    let e = 1;
    for (let n = 2; n <= t; n++) e *= n;
    return e;
  };
var Kg = Ug;
const Qg = (t, e) => {
    if (t < 0 || t > 1)
      throw new Error("Bezier valueAt() input must be between 0 and 1");
    if (e.pointType === "float_single") return Vo(e, e.points, t);
    {
      const n = [];
      for (let s = 0; s < e.dimensions; s++) {
        const o = [];
        for (let r = 0; r < e.points.length; r++) o.push(e.points[r][s]);
        n.push(Vo(e, o, t));
      }
      return n;
    }
  },
  Vo = function (t, e, n) {
    const s = e.length - 1;
    let o = 0;
    for (let r = 0; r <= s; r++)
      o += t.permutations[r] * Math.pow(1 - n, s - r) * Math.pow(n, r) * e[r];
    return o;
  };
var Fa = Qg;
const Jg = (t, e) => {
    if (t < 0 || t > 1)
      throw new Error("Bezier tangentAt() input must be between 0 and 1");
    if (e.pointType === "float_single") return Ro(e, e.points, t);
    {
      const n = [];
      for (let s = 0; s < e.dimensions; s++) {
        const o = [];
        for (let r = 0; r < e.points.length; r++) o.push(e.points[r][s]);
        n.push(Ro(e, o, t));
      }
      return n;
    }
  },
  Ro = function (t, e, n) {
    const s = e.length - 1;
    let o = 0;
    for (let r = 0; r < s; r++) {
      const c = s * (e[r + 1] - e[r]);
      o +=
        t.tangentPermutations[r] *
        Math.pow(1 - n, s - 1 - r) *
        Math.pow(n, r) *
        c;
    }
    return o;
  };
var jg = Jg;
const Fo = Fa,
  tp = (t, e) => {
    let n = 0;
    const s = [0];
    let o = Fo(0, e);
    for (let r = 1; r <= t; r++) {
      const c = Fo(r / t, e);
      (n += ep(c, o)), s.push(n), (o = c);
    }
    return s;
  },
  ep = (t, e) => {
    if (Number.isFinite(t) && Number.isFinite(e)) return Math.abs(t - e);
    if (Array.isArray(t) && Array.isArray(e)) {
      if (t.length !== e.length)
        throw new Error(
          "The operands must have the same number of dimensions.",
        );
      let n = 0;
      for (let s = 0; s < t.length; s++) n += (e[s] - t[s]) * (e[s] - t[s]);
      return Math.sqrt(n);
    } else
      throw new Error(
        "The operands must be of the same type, either number or array.",
      );
  };
var Gs = tp;
const np = Gs,
  sp = (t, e) => np(t, e)[t];
var op = sp;
const rp = Gs,
  cp = (t, e) => {
    const n = {
        distance: 0,
        segments: 100,
      },
      { distance: s, segments: o } = Object.assign({}, n, t),
      r = rp(o, e);
    let c = 0,
      a = o;
    for (; c <= a; ) {
      const d = Math.floor(c + (a - c) / 2),
        p = r[d] - s;
      if (p < 0) c = d + 1;
      else if (p > 0) a = d - 1;
      else {
        a = d;
        break;
      }
    }
    const i = a;
    if (r[i] === s) return i / o;
    const l = r[i],
      u = r[i + 1] - l,
      h = (s - l) / u;
    return (i + h) / o;
  };
var ap = cp;
var ip = {
  create: Kg,
  valueAt: Fa,
  tangentAt: jg,
  lengths: Gs,
  length: op,
  arcLengthToT: ap,
};
var lp = {
  bezier: ip,
};
const fp = (t) => {
  let e = 0;
  for (let n = 0; n < t.length; n++) {
    const s = (n + 1) % t.length;
    (e += t[n][0] * t[s][1]), (e -= t[s][0] * t[n][1]);
  }
  return e / 2;
};
var En = fp;
const up = En,
  hp = (t) => up(t.vertices);
var Ca = hp;
const dp = (t) => ((t === void 0 || t.length < 3) && (t = []), { vertices: t });
var qa = dp;
const gp = qa,
  pp = (t) => {
    const e = t.vertices.slice().reverse();
    return gp(e);
  };
var Ga = pp;
const $p = Ca,
  mp = Ga,
  vp = (t, e) => {
    if (t.length === 0) return 0;
    const n = e.vertices;
    return n.length < 3
      ? 0
      : ($p(e) < 0 && (e = mp(e)),
        t.reduce((o, r) => o + yp(r, n), 0) === t.length ? 1 : 0);
  },
  yp = (t, e) => {
    const n = e.length,
      s = t[0],
      o = t[1];
    let r = e[n - 1],
      c = e[0],
      a = r[1] > o,
      i = 0,
      l = 0;
    for (let f = n + 1; --f; ) {
      const u = c[1] > o;
      if (a !== u) {
        const h = r[0] > s,
          d = c[0] > s;
        ((h && d) ||
          c[0] - ((c[1] - o) * (r[0] - c[0])) / (r[1] - c[1]) >= s) &&
          (i = !i);
      }
      (a = u), (r = c), (c = e[++l]);
    }
    return i;
  };
var wp = vp;
var zs = {
  arePointsInside: wp,
  create: qa,
  flip: Ga,
  measureArea: Ca,
};
var Ds = {
  geom2: R,
  geom3: F,
  path2: L,
  poly2: zs,
  poly3: z,
};
const xp = () => [0, 1, 0];
var Ls = xp;
const Pp = Ls,
  Ep = (t) => {
    const e = Pp();
    return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), e;
  };
var Ap = Ep;
const Hn = G,
  bp = (t) => {
    const e = Hn.normal(Hn.create(), t);
    return Hn.negate(e, e), e;
  };
var Is = bp;
const Co = G,
  Sp = (t) => Co.scale(Co.create(), t, t[2]);
var An = Sp;
const de = G,
  _p = Is,
  Tp = An,
  Mp = (t, e) => {
    const n = Tp(t),
      s = _p(t),
      o = de.subtract(de.create(), e, n),
      r = de.dot(o, s);
    return de.scale(o, s, r), de.add(o, o, n), o;
  };
var kp = Mp;
const Np = (t, e) => ((t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t);
var za = Np;
const Op = G,
  Bp = (t, e) => {
    let n = Op.dot(e, t);
    return (n = Math.abs(n - t[2])), n;
  };
var Vp = Bp;
const Rp = (t, e) => t[0] === e[0] && t[1] === e[1] && t[2] === e[2];
var Fp = Rp;
const ge = G,
  Cp = (t, e, n) => {
    const s = ge.subtract(ge.create(), n, e);
    ge.normal(s, s), ge.normalize(s, s);
    const o = ge.dot(e, s);
    return (t[0] = s[0]), (t[1] = s[1]), (t[2] = o), t;
  };
var Da = Cp;
const qp = Ls,
  Gp = (t, e, n) => {
    const s = qp();
    return (s[0] = t), (s[1] = e), (s[2] = n), s;
  };
var La = Gp;
const { NEPS: Un } = D,
  zp = (t, e) =>
    Math.abs(t[0] - e[0]) <= Un &&
    Math.abs(t[1] - e[1]) <= Un &&
    Math.abs(t[2] - e[2]) <= Un;
var Zs = zp;
const Dp = (t, e, n) => {
  let s = n - t[1],
    o = e[1] - t[1];
  o < 0 && ((s = -s), (o = -o));
  let r;
  return (
    s <= 0 ? (r = 0) : s >= o ? (r = 1) : o < 1e-10 ? (r = 0.5) : (r = s / o),
    t[0] + r * (e[0] - t[0])
  );
};
var Ia = Dp;
const Lp = (t, e, n, s) => {
  if ((t[0] === e[0] && t[1] === e[1]) || (n[0] === s[0] && n[1] === s[1]))
    return;
  const o = (s[1] - n[1]) * (e[0] - t[0]) - (s[0] - n[0]) * (e[1] - t[1]);
  if (Math.abs(o) < Number.MIN_VALUE) return;
  const r = ((s[0] - n[0]) * (t[1] - n[1]) - (s[1] - n[1]) * (t[0] - n[0])) / o,
    c = ((e[0] - t[0]) * (t[1] - n[1]) - (e[1] - t[1]) * (t[0] - n[0])) / o;
  if (r < 0 || r > 1 || c < 0 || c > 1) return;
  const a = t[0] + r * (e[0] - t[0]),
    i = t[1] + r * (e[1] - t[1]);
  return [a, i];
};
var Za = Lp;
const Ip = (t, e, n, s, o, r) => {
  const a = 1 / (t * s - e * n);
  let i = o * s - e * r,
    l = -o * n + t * r;
  return (i *= a), (l *= a), [i, l];
};
var Zp = Ip;
var Be = {
  aboutEqualNormals: Zs,
  area: En,
  cos: tt.cos,
  interpolateBetween2DPointsForY: Ia,
  intersect: Za,
  sin: tt.sin,
  solve2Linear: Zp,
};
const Xp = G,
  { solve2Linear: Yp } = Be,
  Hp = (t, e) => {
    const n = Yp(t[0], t[1], e[0], e[1], t[2], e[2]);
    return Xp.clone(n);
  };
var Up = Hp;
const qo = G,
  Wp = za,
  Kp = La,
  Qp = (t, e) => {
    const n = qo.negate(qo.create(), e),
      s = -e[2];
    return Wp(t, Kp(n[0], n[1], s));
  };
var Jp = Qp;
const jp = (t) =>
  `line2: (${t[0].toFixed(7)}, ${t[1].toFixed(7)}, ${t[2].toFixed(7)})`;
var t5 = jp;
const Go = G,
  e5 = Da,
  n5 = An,
  s5 = Is,
  o5 = (t, e, n) => {
    const s = n5(e),
      o = s5(e);
    return Go.transform(s, s, n), Go.transform(o, o, n), e5(t, s, o);
  };
var r5 = o5;
const c5 = An,
  a5 = (t, e) => {
    let n = (t[2] - t[1] * e) / t[0];
    return Number.isNaN(n) && (n = c5(t)[0]), n;
  };
var i5 = a5;
var Xs = {
  clone: Ap,
  closestPoint: kp,
  copy: za,
  create: Ls,
  direction: Is,
  distanceToPoint: Vp,
  equals: Fp,
  fromPoints: Da,
  fromValues: La,
  intersectPointOfLines: Up,
  origin: An,
  reverse: Jp,
  toString: t5,
  transform: r5,
  xAtY: i5,
};
const zo = N,
  l5 = () => [
    zo.fromValues(0, 0, 0),
    // origin
    zo.fromValues(0, 0, 1),
    // direction
  ];
var Xa = l5;
const Do = N,
  f5 = Xa,
  u5 = (t) => {
    const e = f5();
    return Do.copy(e[0], t[0]), Do.copy(e[1], t[1]), e;
  };
var h5 = u5;
const Vt = N,
  d5 = (t, e) => {
    const n = t[0],
      s = t[1],
      o = Vt.dot(Vt.subtract(Vt.create(), e, n), s),
      r = Vt.dot(s, s),
      c = o / r,
      a = Vt.scale(Vt.create(), s, c);
    return Vt.add(a, a, n), a;
  };
var Ya = d5;
const Lo = N,
  g5 = (t, e) => (Lo.copy(t[0], e[0]), Lo.copy(t[1], e[1]), t);
var p5 = g5;
const $5 = (t) => t[1];
var m5 = $5;
const Wn = N,
  v5 = Ya,
  y5 = (t, e) => {
    const n = v5(t, e),
      s = Wn.subtract(Wn.create(), e, n);
    return Wn.length(s);
  };
var w5 = y5;
const Io = N,
  x5 = (t, e) => !(!Io.equals(t[1], e[1]) || !Io.equals(t[0], e[0]));
var P5 = x5;
const Le = N,
  E5 = (t, e, n) => {
    const s = Le.normalize(Le.create(), n);
    return Le.copy(t[0], e), Le.copy(t[1], s), t;
  };
var Ve = E5;
const Rt = N,
  { solve2Linear: Kn } = Be,
  { EPS: A5 } = D,
  b5 = Ve,
  S5 = (t, e, n) => {
    let s = Rt.cross(Rt.create(), e, n),
      o = Rt.length(s);
    if (o < A5) throw new Error("parallel planes do not intersect");
    (o = 1 / o), (s = Rt.scale(s, s, o));
    const r = Math.abs(s[0]),
      c = Math.abs(s[1]),
      a = Math.abs(s[2]);
    let i, l;
    return (
      r >= c && r >= a
        ? ((l = Kn(e[1], e[2], n[1], n[2], e[3], n[3])),
          (i = Rt.fromValues(0, l[0], l[1])))
        : c >= r && c >= a
          ? ((l = Kn(e[0], e[2], n[0], n[2], e[3], n[3])),
            (i = Rt.fromValues(l[0], 0, l[1])))
          : ((l = Kn(e[0], e[1], n[0], n[1], e[3], n[3])),
            (i = Rt.fromValues(l[0], l[1], 0))),
      b5(t, i, s)
    );
  };
var _5 = S5;
const Zo = N,
  T5 = Ve,
  M5 = (t, e, n) => {
    const s = Zo.subtract(Zo.create(), n, e);
    return T5(t, e, s);
  };
var k5 = M5;
const Xt = N,
  N5 = (t, e) => {
    const n = e,
      s = e[3],
      o = t[0],
      r = t[1],
      c = (s - Xt.dot(n, o)) / Xt.dot(n, r);
    return Xt.add(Xt.create(), o, Xt.scale(Xt.create(), r, c));
  };
var O5 = N5;
const B5 = (t) => t[0];
var V5 = B5;
const Qn = N,
  R5 = Ve,
  F5 = (t, e) => {
    const n = Qn.clone(e[0]),
      s = Qn.negate(Qn.create(), e[1]);
    return R5(t, n, s);
  };
var C5 = F5;
const q5 = (t) => {
  const e = t[0],
    n = t[1];
  return `line3: point: (${e[0].toFixed(7)}, ${e[1].toFixed(7)}, ${e[2].toFixed(7)}) direction: (${n[0].toFixed(7)}, ${n[1].toFixed(7)}, ${n[2].toFixed(7)})`;
};
var G5 = q5;
const Yt = N,
  z5 = Ve,
  D5 = (t, e, n) => {
    const s = e[0],
      o = e[1],
      r = Yt.add(Yt.create(), s, o),
      c = Yt.transform(Yt.create(), s, n),
      a = Yt.transform(r, r, n),
      i = Yt.subtract(a, a, c);
    return z5(t, c, i);
  };
var L5 = D5;
var I5 = {
  clone: h5,
  closestPoint: Ya,
  copy: p5,
  create: Xa,
  direction: m5,
  distanceToPoint: w5,
  equals: P5,
  fromPlanes: _5,
  fromPointAndDirection: Ve,
  fromPoints: k5,
  intersectPointOfLineAndPlane: O5,
  origin: V5,
  reverse: C5,
  toString: G5,
  transform: L5,
};
var Z5 = {
  constants: D,
  line2: Xs,
  line3: I5,
  mat4: I,
  plane: vt,
  utils: Be,
  vec2: G,
  vec3: N,
  vec4: Aa,
};
const X5 = V,
  Ha = R,
  Ua = F,
  Y5 = L,
  H5 = z,
  fn = /* @__PURE__ */ new WeakMap(),
  U5 = () => 0,
  W5 = (t) => {
    let e = fn.get(t);
    return (
      e ||
      ((e = Ha.toSides(t).reduce(
        (s, o) => s + (o[0][0] * o[1][1] - o[0][1] * o[1][0]),
        0,
      )),
      (e *= 0.5),
      fn.set(t, e),
      e)
    );
  },
  K5 = (t) => {
    let e = fn.get(t);
    return (
      e ||
      ((e = Ua.toPolygons(t).reduce((s, o) => s + H5.measureArea(o), 0)),
      fn.set(t, e),
      e)
    );
  },
  Q5 = (...t) => {
    if (((t = X5(t)), t.length === 0))
      throw new Error("wrong number of arguments");
    const e = t.map((n) =>
      Y5.isA(n) ? U5(n) : Ha.isA(n) ? W5(n) : Ua.isA(n) ? K5(n) : 0,
    );
    return e.length === 1 ? e[0] : e;
  };
var Wa = Q5;
const J5 = V,
  j5 = Wa,
  t$ = (...t) => {
    if (((t = J5(t)), t.length === 0))
      throw new Error("measureAggregateArea: no geometries supplied");
    const e = j5(t);
    return t.length === 1 ? e : e.reduce((s, o) => s + o, 0);
  };
var e$ = t$;
const n$ = V,
  mt = G,
  pe = N,
  Ka = R,
  Qa = F,
  Ja = L,
  Xo = z,
  ne = /* @__PURE__ */ new WeakMap(),
  s$ = (t) => {
    let e = ne.get(t);
    if (e) return e;
    const n = Ja.toPoints(t);
    let s;
    n.length === 0 ? (s = mt.create()) : (s = mt.clone(n[0]));
    let o = mt.clone(s);
    return (
      n.forEach((r) => {
        mt.min(s, s, r), mt.max(o, o, r);
      }),
      (s = [s[0], s[1], 0]),
      (o = [o[0], o[1], 0]),
      (e = [s, o]),
      ne.set(t, e),
      e
    );
  },
  o$ = (t) => {
    let e = ne.get(t);
    if (e) return e;
    const n = Ka.toPoints(t);
    let s;
    n.length === 0 ? (s = mt.create()) : (s = mt.clone(n[0]));
    let o = mt.clone(s);
    return (
      n.forEach((r) => {
        mt.min(s, s, r), mt.max(o, o, r);
      }),
      (s = [s[0], s[1], 0]),
      (o = [o[0], o[1], 0]),
      (e = [s, o]),
      ne.set(t, e),
      e
    );
  },
  r$ = (t) => {
    let e = ne.get(t);
    if (e) return e;
    const n = Qa.toPolygons(t);
    let s = pe.create();
    if (n.length > 0) {
      const r = Xo.toPoints(n[0]);
      pe.copy(s, r[0]);
    }
    let o = pe.clone(s);
    return (
      n.forEach((r) => {
        Xo.toPoints(r).forEach((c) => {
          pe.min(s, s, c), pe.max(o, o, c);
        });
      }),
      (s = [s[0], s[1], s[2]]),
      (o = [o[0], o[1], o[2]]),
      (e = [s, o]),
      ne.set(t, e),
      e
    );
  },
  c$ = (...t) => {
    if (((t = n$(t)), t.length === 0))
      throw new Error("wrong number of arguments");
    const e = t.map((n) =>
      Ja.isA(n)
        ? s$(n)
        : Ka.isA(n)
          ? o$(n)
          : Qa.isA(n)
            ? r$(n)
            : [
                [0, 0, 0],
                [0, 0, 0],
              ],
    );
    return e.length === 1 ? e[0] : e;
  };
var Dt = c$;
const a$ = V,
  i$ = ta,
  l$ = jc,
  f$ = Dt,
  u$ = (...t) => {
    if (((t = a$(t)), t.length === 0))
      throw new Error("measureAggregateBoundingBox: no geometries supplied");
    const e = f$(t);
    if (t.length === 1) return e;
    const n = [
      [Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE],
      [-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE],
    ];
    return e.reduce(
      (s, o) => ((s = [i$(s[0], s[0], o[0]), l$(s[1], s[1], o[1])]), s),
      n,
    );
  };
var Ys = u$;
const { EPS: h$ } = D,
  d$ = (t, e) => {
    let n = 0;
    for (let s = 0; s < e; s++) n += t[1][s] - t[0][s];
    return (h$ * n) / e;
  };
var ja = d$;
const g$ = V,
  p$ = Ys,
  $$ = ja,
  { geom2: m$, geom3: v$, path2: y$ } = Ds,
  w$ = (...t) => {
    if (((t = g$(t)), t.length === 0))
      throw new Error("measureAggregateEpsilon: no geometries supplied");
    const e = p$(t);
    let n = 0;
    return (
      (n = t.reduce(
        (s, o) =>
          y$.isA(o) || m$.isA(o)
            ? Math.max(s, 2)
            : v$.isA(o)
              ? Math.max(s, 3)
              : 0,
        n,
      )),
      $$(e, n)
    );
  };
var x$ = w$;
const P$ = V,
  E$ = R,
  ti = F,
  A$ = L,
  b$ = z,
  Yo = /* @__PURE__ */ new WeakMap(),
  S$ = () => 0,
  _$ = () => 0,
  T$ = (t) => {
    let e = Yo.get(t);
    return (
      e ||
      ((e = ti
        .toPolygons(t)
        .reduce((s, o) => s + b$.measureSignedVolume(o), 0)),
      Yo.set(t, e),
      e)
    );
  },
  M$ = (...t) => {
    if (((t = P$(t)), t.length === 0))
      throw new Error("wrong number of arguments");
    const e = t.map((n) =>
      A$.isA(n) ? S$(n) : E$.isA(n) ? _$(n) : ti.isA(n) ? T$(n) : 0,
    );
    return e.length === 1 ? e[0] : e;
  };
var ei = M$;
const k$ = V,
  N$ = ei,
  O$ = (...t) => {
    if (((t = k$(t)), t.length === 0))
      throw new Error("measureAggregateVolume: no geometries supplied");
    const e = N$(t);
    return t.length === 1 ? e : e.reduce((s, o) => s + o, 0);
  };
var B$ = O$;
const V$ = V,
  ni = G,
  ct = N,
  si = R,
  oi = F,
  ri = L,
  Ho = z,
  se = /* @__PURE__ */ new WeakMap(),
  R$ = (t) => {
    let e = se.get(t);
    if (e !== void 0) return e;
    const n = ct.create();
    let s = 0;
    const o = ri.toPoints(t);
    if (o.length > 0) {
      let r = 0;
      const c = ct.create();
      o.forEach((a) => {
        ct.add(n, n, ct.fromVec2(c, a, 0)), r++;
      }),
        ct.scale(n, n, 1 / r),
        o.forEach((a) => {
          s = Math.max(s, ni.squaredDistance(n, a));
        }),
        (s = Math.sqrt(s));
    }
    return (e = [n, s]), se.set(t, e), e;
  },
  F$ = (t) => {
    let e = se.get(t);
    if (e !== void 0) return e;
    const n = ct.create();
    let s = 0;
    const o = si.toSides(t);
    if (o.length > 0) {
      let r = 0;
      const c = ct.create();
      o.forEach((a) => {
        ct.add(n, n, ct.fromVec2(c, a[0], 0)), r++;
      }),
        ct.scale(n, n, 1 / r),
        o.forEach((a) => {
          s = Math.max(s, ni.squaredDistance(n, a[0]));
        }),
        (s = Math.sqrt(s));
    }
    return (e = [n, s]), se.set(t, e), e;
  },
  C$ = (t) => {
    let e = se.get(t);
    if (e !== void 0) return e;
    const n = ct.create();
    let s = 0;
    const o = oi.toPolygons(t);
    if (o.length > 0) {
      let r = 0;
      o.forEach((c) => {
        Ho.toPoints(c).forEach((a) => {
          ct.add(n, n, a), r++;
        });
      }),
        ct.scale(n, n, 1 / r),
        o.forEach((c) => {
          Ho.toPoints(c).forEach((a) => {
            s = Math.max(s, ct.squaredDistance(n, a));
          });
        }),
        (s = Math.sqrt(s));
    }
    return (e = [n, s]), se.set(t, e), e;
  },
  q$ = (...t) => {
    t = V$(t);
    const e = t.map((n) =>
      ri.isA(n)
        ? R$(n)
        : si.isA(n)
          ? F$(n)
          : oi.isA(n)
            ? C$(n)
            : [[0, 0, 0], 0],
    );
    return e.length === 1 ? e[0] : e;
  };
var G$ = q$;
const z$ = V,
  D$ = Dt,
  L$ = (...t) => {
    t = z$(t);
    const e = t.map((n) => {
      const s = D$(n);
      return [
        s[0][0] + (s[1][0] - s[0][0]) / 2,
        s[0][1] + (s[1][1] - s[0][1]) / 2,
        s[0][2] + (s[1][2] - s[0][2]) / 2,
      ];
    });
    return e.length === 1 ? e[0] : e;
  };
var I$ = L$;
const Z$ = V,
  $t = N,
  ci = R,
  ai = F,
  un = /* @__PURE__ */ new WeakMap(),
  X$ = (t) => {
    let e = un.get(t);
    if (e !== void 0) return e;
    const n = ci.toSides(t);
    let s = 0,
      o = 0,
      r = 0;
    if (n.length > 0) {
      for (let a = 0; a < n.length; a++) {
        const i = n[a][0],
          l = n[a][1],
          f = i[0] * l[1] - i[1] * l[0];
        (s += f), (o += (i[0] + l[0]) * f), (r += (i[1] + l[1]) * f);
      }
      s /= 2;
      const c = 1 / (s * 6);
      (o *= c), (r *= c);
    }
    return (e = $t.fromValues(o, r, 0)), un.set(t, e), e;
  },
  Y$ = (t) => {
    let e = un.get(t);
    if (e !== void 0) return e;
    e = $t.create();
    const n = ai.toPolygons(t);
    if (n.length === 0) return e;
    let s = 0;
    const o = $t.create();
    return (
      n.forEach((r) => {
        const c = r.vertices;
        for (let a = 0; a < c.length - 2; a++) {
          $t.cross(o, c[a + 1], c[a + 2]);
          const i = $t.dot(c[0], o) / 6;
          (s += i), $t.add(o, c[0], c[a + 1]), $t.add(o, o, c[a + 2]);
          const l = $t.scale(o, o, (1 / 4) * i);
          $t.add(e, e, l);
        }
      }),
      $t.scale(e, e, 1 / s),
      un.set(t, e),
      e
    );
  },
  H$ = (...t) => {
    t = Z$(t);
    const e = t.map((n) => (ci.isA(n) ? X$(n) : ai.isA(n) ? Y$(n) : [0, 0, 0]));
    return e.length === 1 ? e[0] : e;
  };
var U$ = H$;
const W$ = V,
  K$ = Dt,
  Q$ = (...t) => {
    t = W$(t);
    const e = t.map((n) => {
      const s = K$(n);
      return [s[1][0] - s[0][0], s[1][1] - s[0][1], s[1][2] - s[0][2]];
    });
    return e.length === 1 ? e[0] : e;
  };
var J$ = Q$;
const j$ = V,
  { geom2: tm, geom3: em, path2: nm } = Ds,
  Hs = ja,
  Us = Dt,
  sm = (t) => Hs(Us(t), 2),
  om = (t) => Hs(Us(t), 2),
  rm = (t) => Hs(Us(t), 3),
  cm = (...t) => {
    if (((t = j$(t)), t.length === 0))
      throw new Error("wrong number of arguments");
    const e = t.map((n) =>
      nm.isA(n) ? sm(n) : tm.isA(n) ? om(n) : em.isA(n) ? rm(n) : 0,
    );
    return e.length === 1 ? e[0] : e;
  };
var Ot = cm;
var am = {
  measureAggregateArea: e$,
  measureAggregateBoundingBox: Ys,
  measureAggregateEpsilon: x$,
  measureAggregateVolume: B$,
  measureArea: Wa,
  measureBoundingBox: Dt,
  measureBoundingSphere: G$,
  measureCenter: I$,
  measureCenterOfMass: U$,
  measureDimensions: J$,
  measureEpsilon: Ot,
  measureVolume: ei,
};
const im = (t, e) =>
    Array.isArray(t) && t.length >= e ? t.every((n) => Number.isFinite(n)) : !1,
  lm = (t, e) => Number.isFinite(t) && t > e,
  fm = (t, e) => Number.isFinite(t) && t >= e;
var K = {
  isNumberArray: im,
  isGT: lm,
  isGTE: fm,
};
const { EPS: Uo, TAU: Ht } = D,
  xt = G,
  um = L,
  { isGT: hm, isGTE: Jn, isNumberArray: dm } = K,
  gm = (t) => {
    const e = {
      center: [0, 0],
      radius: 1,
      startAngle: 0,
      endAngle: Ht,
      makeTangent: !1,
      segments: 32,
    };
    let {
      center: n,
      radius: s,
      startAngle: o,
      endAngle: r,
      makeTangent: c,
      segments: a,
    } = Object.assign({}, e, t);
    if (!dm(n, 2)) throw new Error("center must be an array of X and Y values");
    if (!hm(s, 0)) throw new Error("radius must be greater than zero");
    if (!Jn(o, 0)) throw new Error("startAngle must be positive");
    if (!Jn(r, 0)) throw new Error("endAngle must be positive");
    if (!Jn(a, 4)) throw new Error("segments must be four or more");
    (o = o % Ht), (r = r % Ht);
    let i = Ht;
    o < r && (i = r - o), o > r && (i = r + (Ht - o));
    const l = Math.acos((s * s + s * s - Uo * Uo) / (2 * s * s)),
      f = xt.clone(n);
    let u;
    const h = [];
    if (i < l)
      (u = xt.fromAngleRadians(xt.create(), o)),
        xt.scale(u, u, s),
        xt.add(u, u, f),
        h.push(u);
    else {
      const d = Math.max(1, Math.floor(a * (i / Ht))) + 1;
      let p = (d * 0.5) / i;
      p > 0.25 && (p = 0.25);
      const g = c ? d + 2 : d;
      for (let $ = 0; $ <= g; $++) {
        let v = $;
        c &&
          ((v = (($ - 1) * (d - 2 * p)) / d + p),
          v < 0 && (v = 0),
          v > d && (v = d));
        const y = o + v * (i / d);
        (u = xt.fromAngleRadians(xt.create(), y)),
          xt.scale(u, u, s),
          xt.add(u, u, f),
          h.push(u);
      }
    }
    return um.fromPoints({ closed: !1 }, h);
  };
var pm = gm;
const { EPS: Wo, TAU: bt } = D,
  jn = G,
  Ko = R,
  { sin: $m, cos: mm } = tt,
  { isGTE: ts, isNumberArray: Qo } = K,
  vm = (t) => {
    const e = {
      center: [0, 0],
      radius: [1, 1],
      startAngle: 0,
      endAngle: bt,
      segments: 32,
    };
    let {
      center: n,
      radius: s,
      startAngle: o,
      endAngle: r,
      segments: c,
    } = Object.assign({}, e, t);
    if (!Qo(n, 2)) throw new Error("center must be an array of X and Y values");
    if (!Qo(s, 2)) throw new Error("radius must be an array of X and Y values");
    if (!s.every((d) => d >= 0))
      throw new Error("radius values must be positive");
    if (!ts(o, 0)) throw new Error("startAngle must be positive");
    if (!ts(r, 0)) throw new Error("endAngle must be positive");
    if (!ts(c, 3)) throw new Error("segments must be three or more");
    if (s[0] === 0 || s[1] === 0) return Ko.create();
    (o = o % bt), (r = r % bt);
    let a = bt;
    o < r && (a = r - o), o > r && (a = r + (bt - o));
    const i = Math.min(s[0], s[1]),
      l = Math.acos((i * i + i * i - Wo * Wo) / (2 * i * i));
    if (a < l)
      throw new Error(
        "startAngle and endAngle do not define a significant rotation",
      );
    c = Math.floor(c * (a / bt));
    const f = jn.clone(n),
      u = a / c,
      h = [];
    c = a < bt ? c + 1 : c;
    for (let d = 0; d < c; d++) {
      const p = u * d + o,
        g = jn.fromValues(s[0] * mm(p), s[1] * $m(p));
      jn.add(g, f, g), h.push(g);
    }
    return a < bt && h.push(f), Ko.fromPoints(h);
  };
var ii = vm;
const { TAU: ym } = D,
  wm = ii,
  { isGTE: xm } = K,
  Pm = (t) => {
    const e = {
      center: [0, 0],
      radius: 1,
      startAngle: 0,
      endAngle: ym,
      segments: 32,
    };
    let {
      center: n,
      radius: s,
      startAngle: o,
      endAngle: r,
      segments: c,
    } = Object.assign({}, e, t);
    if (!xm(s, 0)) throw new Error("radius must be positive");
    return (
      (s = [s, s]),
      wm({ center: n, radius: s, startAngle: o, endAngle: r, segments: c })
    );
  };
var li = Pm;
const Jo = F,
  Em = z,
  { isNumberArray: jo } = K,
  Am = (t) => {
    const e = {
        center: [0, 0, 0],
        size: [2, 2, 2],
      },
      { center: n, size: s } = Object.assign({}, e, t);
    if (!jo(n, 3))
      throw new Error("center must be an array of X, Y and Z values");
    if (!jo(s, 3))
      throw new Error(
        "size must be an array of width, depth and height values",
      );
    if (!s.every((r) => r >= 0))
      throw new Error("size values must be positive");
    return s[0] === 0 || s[1] === 0 || s[2] === 0
      ? Jo.create()
      : Jo.create(
          // adjust a basic shape to size
          [
            [
              [0, 4, 6, 2],
              [-1, 0, 0],
            ],
            [
              [1, 3, 7, 5],
              [1, 0, 0],
            ],
            [
              [0, 1, 5, 4],
              [0, -1, 0],
            ],
            [
              [2, 6, 7, 3],
              [0, 1, 0],
            ],
            [
              [0, 2, 3, 1],
              [0, 0, -1],
            ],
            [
              [4, 5, 7, 6],
              [0, 0, 1],
            ],
          ].map((r) => {
            const c = r[0].map((a) => [
              n[0] + (s[0] / 2) * (2 * !!(a & 1) - 1),
              n[1] + (s[1] / 2) * (2 * !!(a & 2) - 1),
              n[2] + (s[2] / 2) * (2 * !!(a & 4) - 1),
            ]);
            return Em.create(c);
          }),
        );
  };
var Ws = Am;
const bm = Ws,
  { isGTE: Sm } = K,
  _m = (t) => {
    const e = {
      center: [0, 0, 0],
      size: 2,
    };
    let { center: n, size: s } = Object.assign({}, e, t);
    if (!Sm(s, 0)) throw new Error("size must be positive");
    return (s = [s, s, s]), bm({ center: n, size: s });
  };
var Tm = _m;
const { EPS: tr, TAU: St } = D,
  Q = N,
  Mm = F,
  km = z,
  { sin: Nm, cos: Om } = tt,
  { isGT: Bm, isGTE: es, isNumberArray: ns } = K,
  Vm = (t) => {
    const e = {
      center: [0, 0, 0],
      height: 2,
      startRadius: [1, 1],
      startAngle: 0,
      endRadius: [1, 1],
      endAngle: St,
      segments: 32,
    };
    let {
      center: n,
      height: s,
      startRadius: o,
      startAngle: r,
      endRadius: c,
      endAngle: a,
      segments: i,
    } = Object.assign({}, e, t);
    if (!ns(n, 3))
      throw new Error("center must be an array of X, Y and Z values");
    if (!Bm(s, 0)) throw new Error("height must be greater then zero");
    if (!ns(o, 2))
      throw new Error("startRadius must be an array of X and Y values");
    if (!o.every((b) => b >= 0))
      throw new Error("startRadius values must be positive");
    if (!ns(c, 2))
      throw new Error("endRadius must be an array of X and Y values");
    if (!c.every((b) => b >= 0))
      throw new Error("endRadius values must be positive");
    if (c.every((b) => b === 0) && o.every((b) => b === 0))
      throw new Error("at least one radius must be positive");
    if (!es(r, 0)) throw new Error("startAngle must be positive");
    if (!es(a, 0)) throw new Error("endAngle must be positive");
    if (!es(i, 4)) throw new Error("segments must be four or more");
    (r = r % St), (a = a % St);
    let l = St;
    r < a && (l = a - r), r > a && (l = a + (St - r));
    const f = Math.min(o[0], o[1], c[0], c[1]),
      u = Math.acos((f * f + f * f - tr * tr) / (2 * f * f));
    if (l < u)
      throw new Error(
        "startAngle and endAngle do not define a significant rotation",
      );
    const h = Math.floor(i * (l / St)),
      d = Q.fromValues(0, 0, -(s / 2)),
      p = Q.fromValues(0, 0, s / 2),
      g = Q.subtract(Q.create(), p, d),
      $ = Q.fromValues(1, 0, 0),
      v = Q.fromValues(0, 1, 0),
      y = Q.create(),
      x = Q.create(),
      m = Q.create(),
      P = (b, _, S) => {
        const M = _ * l + r;
        return (
          Q.scale(y, $, S[0] * Om(M)),
          Q.scale(x, v, S[1] * Nm(M)),
          Q.add(y, y, x),
          Q.scale(m, g, b),
          Q.add(m, m, d),
          Q.add(Q.create(), y, m)
        );
      },
      w = (...b) => {
        const _ = b.map((S) => Q.add(Q.create(), S, n));
        return km.create(_);
      },
      E = [];
    for (let b = 0; b < h; b++) {
      const _ = b / h;
      let S = (b + 1) / h;
      l === St && b === h - 1 && (S = 0),
        c[0] === o[0] && c[1] === o[1]
          ? (E.push(w(d, P(0, S, c), P(0, _, c))),
            E.push(w(P(0, S, c), P(1, S, c), P(1, _, c), P(0, _, c))),
            E.push(w(p, P(1, _, c), P(1, S, c))))
          : (o[0] > 0 && o[1] > 0 && E.push(w(d, P(0, S, o), P(0, _, o))),
            (o[0] > 0 || o[1] > 0) &&
              E.push(w(P(0, _, o), P(0, S, o), P(1, _, c))),
            c[0] > 0 && c[1] > 0 && E.push(w(p, P(1, _, c), P(1, S, c))),
            (c[0] > 0 || c[1] > 0) &&
              E.push(w(P(1, _, c), P(0, S, o), P(1, S, c))));
    }
    return (
      l < St &&
        (E.push(w(d, P(0, 0, o), p)),
        E.push(w(P(0, 0, o), P(1, 0, c), p)),
        E.push(w(d, p, P(0, 1, o))),
        E.push(w(P(0, 1, o), p, P(1, 1, c)))),
      Mm.create(E)
    );
  };
var fi = Vm;
const Rm = F,
  Fm = fi,
  { isGTE: Cm } = K,
  qm = (t) => {
    const e = {
        center: [0, 0, 0],
        height: 2,
        radius: 1,
        segments: 32,
      },
      {
        center: n,
        height: s,
        radius: o,
        segments: r,
      } = Object.assign({}, e, t);
    if (!Cm(o, 0)) throw new Error("radius must be positive");
    return s === 0 || o === 0
      ? Rm.create()
      : Fm({
          center: n,
          height: s,
          startRadius: [o, o],
          endRadius: [o, o],
          segments: r,
        });
  };
var ui = qm;
const { TAU: er } = D,
  O = N,
  nr = F,
  sr = z,
  { sin: or, cos: rr } = tt,
  { isGTE: Gm, isNumberArray: cr } = K,
  zm = (t) => {
    const e = {
        center: [0, 0, 0],
        radius: [1, 1, 1],
        segments: 32,
        axes: [
          [1, 0, 0],
          [0, -1, 0],
          [0, 0, 1],
        ],
      },
      { center: n, radius: s, segments: o, axes: r } = Object.assign({}, e, t);
    if (!cr(n, 3))
      throw new Error("center must be an array of X, Y and Z values");
    if (!cr(s, 3))
      throw new Error("radius must be an array of X, Y and Z values");
    if (!s.every((p) => p >= 0))
      throw new Error("radius values must be positive");
    if (!Gm(o, 4)) throw new Error("segments must be four or more");
    if (s[0] === 0 || s[1] === 0 || s[2] === 0) return nr.create();
    const c = O.scale(O.create(), O.normalize(O.create(), r[0]), s[0]),
      a = O.scale(O.create(), O.normalize(O.create(), r[1]), s[1]),
      i = O.scale(O.create(), O.normalize(O.create(), r[2]), s[2]),
      l = Math.round(o / 4);
    let f;
    const u = [],
      h = O.create(),
      d = O.create();
    for (let p = 0; p <= o; p++) {
      const g = (er * p) / o,
        $ = O.add(O.create(), O.scale(h, c, rr(g)), O.scale(d, a, or(g)));
      if (p > 0) {
        let v, y;
        for (let x = 0; x <= l; x++) {
          const m = ((er / 4) * x) / l,
            P = rr(m),
            w = or(m);
          if (x > 0) {
            let E = [],
              A;
            (A = O.subtract(O.create(), O.scale(h, f, v), O.scale(d, i, y))),
              E.push(O.add(A, A, n)),
              (A = O.subtract(O.create(), O.scale(h, $, v), O.scale(d, i, y))),
              E.push(O.add(A, A, n)),
              x < l &&
                ((A = O.subtract(
                  O.create(),
                  O.scale(h, $, P),
                  O.scale(d, i, w),
                )),
                E.push(O.add(A, A, n))),
              (A = O.subtract(O.create(), O.scale(h, f, P), O.scale(d, i, w))),
              E.push(O.add(A, A, n)),
              u.push(sr.create(E)),
              (E = []),
              (A = O.add(O.create(), O.scale(h, f, v), O.scale(d, i, y))),
              E.push(O.add(O.create(), n, A)),
              (A = O.add(A, O.scale(h, $, v), O.scale(d, i, y))),
              E.push(O.add(O.create(), n, A)),
              x < l &&
                ((A = O.add(A, O.scale(h, $, P), O.scale(d, i, w))),
                E.push(O.add(O.create(), n, A))),
              (A = O.add(A, O.scale(h, f, P), O.scale(d, i, w))),
              E.push(O.add(O.create(), n, A)),
              E.reverse(),
              u.push(sr.create(E));
          }
          (v = P), (y = w);
        }
      }
      f = $;
    }
    return nr.create(u);
  };
var hi = zm;
const Dm = F,
  Lm = z,
  { isNumberArray: ar } = K,
  Im = (t) => {
    const e = {
        points: [],
        faces: [],
        colors: void 0,
        orientation: "outward",
      },
      {
        points: n,
        faces: s,
        colors: o,
        orientation: r,
      } = Object.assign({}, e, t);
    if (!(Array.isArray(n) && Array.isArray(s)))
      throw new Error("points and faces must be arrays");
    if (n.length < 3) throw new Error("three or more points are required");
    if (s.length < 1) throw new Error("one or more faces are required");
    if (o) {
      if (!Array.isArray(o)) throw new Error("colors must be an array");
      if (o.length !== s.length)
        throw new Error("faces and colors must have the same length");
    }
    n.forEach((a, i) => {
      if (!ar(a, 3))
        throw new Error(`point ${i} must be an array of X, Y, Z values`);
    }),
      s.forEach((a, i) => {
        if (a.length < 3)
          throw new Error(`face ${i} must contain 3 or more indexes`);
        if (!ar(a, a.length))
          throw new Error(`face ${i} must be an array of numbers`);
      }),
      r !== "outward" && s.forEach((a) => a.reverse());
    const c = s.map((a, i) => {
      const l = Lm.create(a.map((f) => n[f]));
      return o && o[i] && (l.color = o[i]), l;
    });
    return Dm.create(c);
  };
var di = Im;
const ir = I,
  lr = N,
  fr = F,
  Zm = di,
  { isGTE: ur } = K,
  Xm = (t) => {
    const e = {
      radius: 1,
      frequency: 6,
    };
    let { radius: n, frequency: s } = Object.assign({}, e, t);
    if (!ur(n, 0)) throw new Error("radius must be positive");
    if (!ur(s, 6)) throw new Error("frequency must be six or more");
    if (n === 0) return fr.create();
    s = Math.floor(s / 6);
    const o = [
        // hard-coded data of icosahedron (20 faces, all triangles)
        [0.850651, 0, -0.525731],
        [0.850651, -0, 0.525731],
        [-0.850651, -0, 0.525731],
        [-0.850651, 0, -0.525731],
        [0, -0.525731, 0.850651],
        [0, 0.525731, 0.850651],
        [0, 0.525731, -0.850651],
        [0, -0.525731, -0.850651],
        [-0.525731, -0.850651, -0],
        [0.525731, -0.850651, -0],
        [0.525731, 0.850651, 0],
        [-0.525731, 0.850651, 0],
      ],
      r = [
        [0, 9, 1],
        [1, 10, 0],
        [6, 7, 0],
        [10, 6, 0],
        [7, 9, 0],
        [5, 1, 4],
        [4, 1, 9],
        [5, 10, 1],
        [2, 8, 3],
        [3, 11, 2],
        [2, 5, 4],
        [4, 8, 2],
        [2, 11, 5],
        [3, 7, 6],
        [6, 11, 3],
        [8, 7, 3],
        [9, 8, 4],
        [11, 10, 5],
        [10, 11, 6],
        [8, 9, 7],
      ],
      c = (h, d, p) => {
        const g = h[0],
          $ = h[1],
          v = h[2];
        let y = p;
        const x = [],
          m = [];
        for (let P = 0; P < d; P++)
          for (let w = 0; w < d - P; w++) {
            const E = P / d,
              A = (P + 1) / d,
              b = w / (d - P),
              _ = (w + 1) / (d - P),
              S = d - P - 1 ? w / (d - P - 1) : 1,
              M = [];
            (M[0] = a(a(g, $, b), v, E)),
              (M[1] = a(a(g, $, _), v, E)),
              (M[2] = a(a(g, $, S), v, A));
            for (let q = 0; q < 3; q++) {
              const B = lr.length(M[q]);
              for (let C = 0; C < 3; C++) M[q][C] /= B;
            }
            if (
              (x.push(M[0], M[1], M[2]),
              m.push([y, y + 1, y + 2]),
              (y += 3),
              w < d - P - 1)
            ) {
              const q = d - P - 1 ? (w + 1) / (d - P - 1) : 1;
              (M[0] = a(a(g, $, _), v, E)),
                (M[1] = a(a(g, $, q), v, A)),
                (M[2] = a(a(g, $, S), v, A));
              for (let B = 0; B < 3; B++) {
                const C = lr.length(M[B]);
                for (let k = 0; k < 3; k++) M[B][k] /= C;
              }
              x.push(M[0], M[1], M[2]), m.push([y, y + 1, y + 2]), (y += 3);
            }
          }
        return { points: x, triangles: m, offset: y };
      },
      a = (h, d, p) => {
        const g = 1 - p,
          $ = [];
        for (let v = 0; v < 3; v++) $[v] = h[v] * g + d[v] * p;
        return $;
      };
    let i = [],
      l = [],
      f = 0;
    for (let h = 0; h < r.length; h++) {
      const d = c([o[r[h][0]], o[r[h][1]], o[r[h][2]]], s, f);
      (i = i.concat(d.points)), (l = l.concat(d.triangles)), (f = d.offset);
    }
    let u = Zm({ points: i, faces: l, orientation: "inward" });
    return (
      n !== 1 && (u = fr.transform(ir.fromScaling(ir.create(), [n, n, n]), u)),
      u
    );
  };
var Ym = Xm;
const Hm = L,
  Um = (t) => {
    if (!Array.isArray(t)) throw new Error("points must be an array");
    return Hm.fromPoints({}, t);
  };
var Wm = Um;
const Ie = R,
  Km = (t) => {
    const e = {
        points: [],
        paths: [],
        orientation: "counterclockwise",
      },
      { points: n, paths: s, orientation: o } = Object.assign({}, e, t);
    if (!(Array.isArray(n) && Array.isArray(s)))
      throw new Error("points and paths must be arrays");
    let r = n;
    Array.isArray(n[0]) && (Array.isArray(n[0][0]) || (r = [n])),
      r.forEach((f, u) => {
        if (!Array.isArray(f))
          throw new Error("list of points " + u + " must be an array");
        if (f.length < 3)
          throw new Error(
            "list of points " + u + " must contain three or more points",
          );
        f.forEach((h, d) => {
          if (!Array.isArray(h))
            throw new Error(
              "list of points " + u + ", point " + d + " must be an array",
            );
          if (h.length < 2)
            throw new Error(
              "list of points " +
                u +
                ", point " +
                d +
                " must contain by X and Y values",
            );
        });
      });
    let c = s;
    if (s.length === 0) {
      let f = 0;
      c = r.map((u) => u.map((h) => f++));
    }
    const a = [];
    r.forEach((f) => f.forEach((u) => a.push(u)));
    let i = [];
    c.forEach((f) => {
      const u = f.map((d) => a[d]),
        h = Ie.fromPoints(u);
      i = i.concat(Ie.toSides(h));
    });
    let l = Ie.create(i);
    return o === "clockwise" && (l = Ie.reverse(l)), l;
  };
var Qm = Km;
const _t = G,
  hr = R,
  { isNumberArray: dr } = K,
  Jm = (t) => {
    const e = {
        center: [0, 0],
        size: [2, 2],
      },
      { center: n, size: s } = Object.assign({}, e, t);
    if (!dr(n, 2)) throw new Error("center must be an array of X and Y values");
    if (!dr(s, 2)) throw new Error("size must be an array of X and Y values");
    if (!s.every((a) => a >= 0))
      throw new Error("size values must be positive");
    if (s[0] === 0 || s[1] === 0) return hr.create();
    const o = [s[0] / 2, s[1] / 2],
      r = [o[0], -o[1]],
      c = [
        _t.subtract(_t.create(), n, o),
        _t.add(_t.create(), n, r),
        _t.add(_t.create(), n, o),
        _t.subtract(_t.create(), n, r),
      ];
    return hr.fromPoints(c);
  };
var Ks = Jm;
const { EPS: an, TAU: $e } = D,
  ss = G,
  H = N,
  gr = F,
  oe = z,
  { sin: jm, cos: tv } = tt,
  { isGTE: pr, isNumberArray: $r } = K,
  ev = Ws,
  mr = (t, e, n, s, o, r) => {
    const c = (($e / 4) * o) / s,
      a = tv(c),
      i = jm(c),
      l = s - o;
    let f = n * a,
      u = e[2] - (n - n * i);
    r || (u = n - n * i - e[2]), (f = f > an ? f : 0);
    const h = H.add(H.create(), t, [e[0] - n, e[1] - n, u]),
      d = H.add(H.create(), t, [n - e[0], e[1] - n, u]),
      p = H.add(H.create(), t, [n - e[0], n - e[1], u]),
      g = H.add(H.create(), t, [e[0] - n, n - e[1], u]),
      $ = [],
      v = [],
      y = [],
      x = [];
    for (let m = 0; m <= l; m++) {
      const P = l > 0 ? (($e / 4) * m) / l : 0,
        w = ss.fromAngleRadians(ss.create(), P);
      ss.scale(w, w, f);
      const E = H.fromVec2(H.create(), w);
      $.push(H.add(H.create(), h, E)),
        H.rotateZ(E, E, [0, 0, 0], $e / 4),
        v.push(H.add(H.create(), d, E)),
        H.rotateZ(E, E, [0, 0, 0], $e / 4),
        y.push(H.add(H.create(), p, E)),
        H.rotateZ(E, E, [0, 0, 0], $e / 4),
        x.push(H.add(H.create(), g, E));
    }
    return r
      ? [$, v, y, x]
      : ($.reverse(), v.reverse(), y.reverse(), x.reverse(), [x, y, v, $]);
  },
  vr = (t, e) => {
    const n = [];
    for (let s = 0; s < t.length; s++) {
      const o = t[s],
        r = e[s];
      for (let c = 0; c < o.length - 1; c++)
        n.push(oe.create([o[c], o[c + 1], r[c]])),
          c < r.length - 1 && n.push(oe.create([r[c], o[c + 1], r[c + 1]]));
    }
    return n;
  },
  yr = (t, e) => {
    const n = [];
    for (let s = 0; s < t.length; s++) {
      let o = t[s],
        r = e[s];
      const c = o[o.length - 1],
        a = r[r.length - 1],
        i = (s + 1) % t.length;
      (o = t[i]), (r = e[i]);
      const l = o[0],
        f = r[0];
      n.push(oe.create([c, l, f, a]));
    }
    return n;
  },
  nv = (t, e) => {
    (t = [t[3], t[2], t[1], t[0]]), (t = t.map((r) => r.slice().reverse()));
    const n = [];
    t.forEach((r) => {
      r.forEach((c) => n.push(c));
    });
    const s = [];
    e.forEach((r) => {
      r.forEach((c) => s.push(c));
    });
    const o = [];
    for (let r = 0; r < s.length; r++) {
      const c = (r + 1) % s.length;
      o.push(oe.create([n[r], n[c], s[c], s[r]]));
    }
    return o;
  },
  sv = (t) => {
    const e = {
      center: [0, 0, 0],
      size: [2, 2, 2],
      roundRadius: 0.2,
      segments: 32,
    };
    let {
      center: n,
      size: s,
      roundRadius: o,
      segments: r,
    } = Object.assign({}, e, t);
    if (!$r(n, 3))
      throw new Error("center must be an array of X, Y and Z values");
    if (!$r(s, 3))
      throw new Error("size must be an array of X, Y and Z values");
    if (!s.every((l) => l >= 0))
      throw new Error("size values must be positive");
    if (!pr(o, 0)) throw new Error("roundRadius must be positive");
    if (!pr(r, 4)) throw new Error("segments must be four or more");
    if (s[0] === 0 || s[1] === 0 || s[2] === 0) return gr.create();
    if (o === 0) return ev({ center: n, size: s });
    if (
      ((s = s.map((l) => l / 2)),
      o > s[0] - an || o > s[1] - an || o > s[2] - an)
    )
      throw new Error(
        "roundRadius must be smaller than the radius of all dimensions",
      );
    r = Math.floor(r / 4);
    let c = null,
      a = null,
      i = [];
    for (let l = 0; l <= r; l++) {
      const f = mr(n, s, o, r, l, !0),
        u = mr(n, s, o, r, l, !1);
      if (
        (l === 0 && (i = i.concat(nv(u, f))),
        c && (i = i.concat(vr(c, f), yr(c, f))),
        a && (i = i.concat(vr(a, u), yr(a, u))),
        l === r)
      ) {
        let h = f.map((d) => d[0]);
        i.push(oe.create(h)), (h = u.map((d) => d[0])), i.push(oe.create(h));
      }
      (c = f), (a = u);
    }
    return gr.create(i);
  };
var ov = sv;
const { EPS: rv, TAU: wr } = D,
  T = N,
  xr = F,
  cv = z,
  { sin: Pr, cos: Er } = tt,
  { isGTE: Ze, isNumberArray: av } = K,
  iv = ui,
  lv = (t) => {
    const e = {
        center: [0, 0, 0],
        height: 2,
        radius: 1,
        roundRadius: 0.2,
        segments: 32,
      },
      {
        center: n,
        height: s,
        radius: o,
        roundRadius: r,
        segments: c,
      } = Object.assign({}, e, t);
    if (!av(n, 3))
      throw new Error("center must be an array of X, Y and Z values");
    if (!Ze(s, 0)) throw new Error("height must be positive");
    if (!Ze(o, 0)) throw new Error("radius must be positive");
    if (!Ze(r, 0)) throw new Error("roundRadius must be positive");
    if (r > o) throw new Error("roundRadius must be smaller than the radius");
    if (!Ze(c, 4)) throw new Error("segments must be four or more");
    if (s === 0 || o === 0) return xr.create();
    if (r === 0) return iv({ center: n, height: s, radius: o });
    const a = [0, 0, -(s / 2)],
      i = [0, 0, s / 2],
      l = T.subtract(T.create(), i, a),
      f = T.length(l);
    if (2 * r > f - rv)
      throw new Error("height must be larger than twice roundRadius");
    let u;
    Math.abs(l[0]) > Math.abs(l[1])
      ? (u = T.fromValues(0, 1, 0))
      : (u = T.fromValues(1, 0, 0));
    const h = T.scale(T.create(), T.normalize(T.create(), l), r),
      d = T.scale(
        T.create(),
        T.normalize(T.create(), T.cross(T.create(), h, u)),
        o,
      ),
      p = T.scale(
        T.create(),
        T.normalize(T.create(), T.cross(T.create(), d, h)),
        o,
      );
    T.add(a, a, h), T.subtract(i, i, h);
    const g = Math.floor(0.25 * c),
      $ = (w) => {
        const E = w.map((A) => T.add(A, A, n));
        return cv.create(E);
      },
      v = [],
      y = T.create(),
      x = T.create();
    let m;
    for (let w = 0; w <= c; w++) {
      const E = (wr * w) / c,
        A = T.add(T.create(), T.scale(y, d, Er(E)), T.scale(x, p, Pr(E)));
      if (w > 0) {
        let b = [];
        b.push(T.add(T.create(), a, A)),
          b.push(T.add(T.create(), a, m)),
          b.push(T.add(T.create(), i, m)),
          b.push(T.add(T.create(), i, A)),
          v.push($(b));
        let _, S;
        for (let M = 0; M <= g; M++) {
          const q = ((wr / 4) * M) / g,
            B = Er(q),
            C = Pr(q);
          if (M > 0) {
            b = [];
            let k;
            (k = T.add(
              T.create(),
              a,
              T.subtract(y, T.scale(y, m, _), T.scale(x, h, S)),
            )),
              b.push(k),
              (k = T.add(
                T.create(),
                a,
                T.subtract(y, T.scale(y, A, _), T.scale(x, h, S)),
              )),
              b.push(k),
              M < g &&
                ((k = T.add(
                  T.create(),
                  a,
                  T.subtract(y, T.scale(y, A, B), T.scale(x, h, C)),
                )),
                b.push(k)),
              (k = T.add(
                T.create(),
                a,
                T.subtract(y, T.scale(y, m, B), T.scale(x, h, C)),
              )),
              b.push(k),
              v.push($(b)),
              (b = []),
              (k = T.add(T.create(), T.scale(y, m, _), T.scale(x, h, S))),
              T.add(k, k, i),
              b.push(k),
              (k = T.add(T.create(), T.scale(y, A, _), T.scale(x, h, S))),
              T.add(k, k, i),
              b.push(k),
              M < g &&
                ((k = T.add(T.create(), T.scale(y, A, B), T.scale(x, h, C))),
                T.add(k, k, i),
                b.push(k)),
              (k = T.add(T.create(), T.scale(y, m, B), T.scale(x, h, C))),
              T.add(k, k, i),
              b.push(k),
              b.reverse(),
              v.push($(b));
          }
          (_ = B), (S = C);
        }
      }
      m = A;
    }
    return xr.create(v);
  };
var fv = lv;
const { EPS: Ar, TAU: Xe } = D,
  X = G,
  br = R,
  { isGTE: Sr, isNumberArray: _r } = K,
  uv = Ks,
  hv = (t) => {
    const e = {
      center: [0, 0],
      size: [2, 2],
      roundRadius: 0.2,
      segments: 32,
    };
    let {
      center: n,
      size: s,
      roundRadius: o,
      segments: r,
    } = Object.assign({}, e, t);
    if (!_r(n, 2)) throw new Error("center must be an array of X and Y values");
    if (!_r(s, 2)) throw new Error("size must be an array of X and Y values");
    if (!s.every((g) => g >= 0))
      throw new Error("size values must be positive");
    if (!Sr(o, 0)) throw new Error("roundRadius must be positive");
    if (!Sr(r, 4)) throw new Error("segments must be four or more");
    if (s[0] === 0 || s[1] === 0) return br.create();
    if (o === 0) return uv({ center: n, size: s });
    if (((s = s.map((g) => g / 2)), o > s[0] - Ar || o > s[1] - Ar))
      throw new Error(
        "roundRadius must be smaller than the radius of all dimensions",
      );
    const c = Math.floor(r / 4),
      a = X.add(X.create(), n, [s[0] - o, s[1] - o]),
      i = X.add(X.create(), n, [o - s[0], s[1] - o]),
      l = X.add(X.create(), n, [o - s[0], o - s[1]]),
      f = X.add(X.create(), n, [s[0] - o, o - s[1]]),
      u = [],
      h = [],
      d = [],
      p = [];
    for (let g = 0; g <= c; g++) {
      const $ = ((Xe / 4) * g) / c,
        v = X.fromAngleRadians(X.create(), $);
      X.scale(v, v, o),
        u.push(X.add(X.create(), a, v)),
        X.rotate(v, v, X.create(), Xe / 4),
        h.push(X.add(X.create(), i, v)),
        X.rotate(v, v, X.create(), Xe / 4),
        d.push(X.add(X.create(), l, v)),
        X.rotate(v, v, X.create(), Xe / 4),
        p.push(X.add(X.create(), f, v));
    }
    return br.fromPoints(u.concat(h, d, p));
  };
var dv = hv;
const gv = hi,
  { isGTE: pv } = K,
  $v = (t) => {
    const e = {
      center: [0, 0, 0],
      radius: 1,
      segments: 32,
      axes: [
        [1, 0, 0],
        [0, -1, 0],
        [0, 0, 1],
      ],
    };
    let {
      center: n,
      radius: s,
      segments: o,
      axes: r,
    } = Object.assign({}, e, t);
    if (!pv(s, 0)) throw new Error("radius must be positive");
    return (s = [s, s, s]), gv({ center: n, radius: s, segments: o, axes: r });
  };
var gi = $v;
const mv = Ks,
  { isGTE: vv } = K,
  yv = (t) => {
    const e = {
      center: [0, 0],
      size: 2,
    };
    let { center: n, size: s } = Object.assign({}, e, t);
    if (!vv(s, 0)) throw new Error("size must be positive");
    return (s = [s, s]), mv({ center: n, size: s });
  };
var wv = yv;
const { TAU: pi } = D,
  Ee = G,
  xv = R,
  { isGT: Pv, isGTE: Ye, isNumberArray: Ev } = K,
  Av = (t, e) =>
    t > 0 && e > 1 && e < t / 2
      ? Math.cos((Math.PI * e) / t) / Math.cos((Math.PI * (e - 1)) / t)
      : 0,
  Tr = (t, e, n, s) => {
    const o = pi / t,
      r = [];
    for (let c = 0; c < t; c++) {
      const a = Ee.fromAngleRadians(Ee.create(), o * c + n);
      Ee.scale(a, a, e), Ee.add(a, s, a), r.push(a);
    }
    return r;
  },
  bv = (t) => {
    const e = {
      center: [0, 0],
      vertices: 5,
      outerRadius: 1,
      innerRadius: 0,
      density: 2,
      startAngle: 0,
    };
    let {
      center: n,
      vertices: s,
      outerRadius: o,
      innerRadius: r,
      density: c,
      startAngle: a,
    } = Object.assign({}, e, t);
    if (!Ev(n, 2)) throw new Error("center must be an array of X and Y values");
    if (!Ye(s, 2)) throw new Error("vertices must be two or more");
    if (!Pv(o, 0)) throw new Error("outerRadius must be greater than zero");
    if (!Ye(r, 0)) throw new Error("innerRadius must be greater than zero");
    if (!Ye(a, 0)) throw new Error("startAngle must be greater than zero");
    if (((s = Math.floor(s)), (c = Math.floor(c)), (a = a % pi), r === 0)) {
      if (!Ye(c, 2)) throw new Error("density must be two or more");
      r = o * Av(s, c);
    }
    const i = Ee.clone(n),
      l = Tr(s, o, a, i),
      f = Tr(s, r, a + Math.PI / s, i),
      u = [];
    for (let h = 0; h < s; h++) u.push(l[h]), u.push(f[h]);
    return xv.fromPoints(u);
  };
var Sv = bv;
const _v = V,
  Mr = I,
  kr = vt,
  Nr = R,
  Or = F,
  Br = L,
  bn = (t, ...e) => {
    const n = {
        origin: [0, 0, 0],
        normal: [0, 0, 1],
        // Z axis
      },
      { origin: s, normal: o } = Object.assign({}, n, t);
    if (((e = _v(e)), e.length === 0))
      throw new Error("wrong number of arguments");
    const r = kr.fromNormalAndPoint(kr.create(), o, s);
    if (Number.isNaN(r[0]))
      throw new Error(
        "the given origin and normal do not define a proper plane",
      );
    const c = Mr.mirrorByPlane(Mr.create(), r),
      a = e.map((i) =>
        Br.isA(i)
          ? Br.transform(c, i)
          : Nr.isA(i)
            ? Nr.transform(c, i)
            : Or.isA(i)
              ? Or.transform(c, i)
              : i,
      );
    return a.length === 1 ? a[0] : a;
  },
  Tv = (...t) => bn({ normal: [1, 0, 0] }, t),
  Mv = (...t) => bn({ normal: [0, 1, 0] }, t),
  kv = (...t) => bn({ normal: [0, 0, 1] }, t);
var Ae = {
  mirror: bn,
  mirrorX: Tv,
  mirrorY: Mv,
  mirrorZ: kv,
};
const Vr = vt,
  Ft = N,
  Nv = (t) => {
    const e = t.edges;
    if (e.length < 3)
      throw new Error("slices must have 3 or more edges to calculate a plane");
    const n = e.reduce((c, a) => Ft.add(Ft.create(), c, a[0]), Ft.create());
    Ft.scale(n, n, 1 / e.length);
    let s,
      o = 0;
    e.forEach((c) => {
      if (!Ft.equals(c[0], c[1])) {
        const a = Ft.squaredDistance(n, c[0]);
        a > o && ((s = c), (o = a));
      }
    });
    const r = e.find((c) => Ft.equals(c[1], s[0]));
    return Vr.fromPoints(Vr.create(), r[0], s[0], s[1]);
  };
var $i = Nv;
const Ov = (t) => (t || (t = []), { edges: t });
var Lt = Ov;
const Bv = Lt,
  Rr = N,
  Vv = (...t) => {
    let e, n;
    return (
      t.length === 1 ? ((e = Bv()), (n = t[0])) : ((e = t[0]), (n = t[1])),
      (e.edges = n.edges.map((s) => [Rr.clone(s[0]), Rr.clone(s[1])])),
      e
    );
  };
var Rv = Vv;
const Fv = N,
  Cv = (t, e) => {
    const n = t.edges,
      s = e.edges;
    return n.length !== s.length
      ? !1
      : n.reduce((r, c, a) => {
          const i = s[a],
            l = Fv.squaredDistance(c[0], i[0]);
          return r && l < Number.EPSILON;
        }, !0);
  };
var qv = Cv;
const He = N,
  Gv = Lt,
  zv = (t) => {
    if (!Array.isArray(t)) throw new Error("the given points must be an array");
    if (t.length < 3)
      throw new Error("the given points must contain THREE or more points");
    const e = [];
    let n = t[t.length - 1];
    return (
      t.forEach((s) => {
        s.length === 2 &&
          e.push([He.fromVec2(He.create(), n), He.fromVec2(He.create(), s)]),
          s.length === 3 && e.push([n, s]),
          (n = s);
      }),
      Gv(e)
    );
  };
var Dv = zv;
const Ue = N,
  Lv = Lt,
  Iv = (t) => {
    if (!Array.isArray(t)) throw new Error("the given sides must be an array");
    const e = [];
    return (
      t.forEach((n) => {
        e.push([
          Ue.fromVec2(Ue.create(), n[0]),
          Ue.fromVec2(Ue.create(), n[1]),
        ]);
      }),
      Lv(e)
    );
  };
var Zv = Iv;
const Xv = (t) =>
  !!(t && typeof t == "object" && "edges" in t && Array.isArray(t.edges));
var Yv = Xv;
const Hv = Lt,
  Uv = (...t) => {
    let e, n;
    return (
      t.length === 1 ? ((e = Hv()), (n = t[0])) : ((e = t[0]), (n = t[1])),
      (e.edges = n.edges.map((s) => [s[1], s[0]])),
      e
    );
  };
var Wv = Uv;
const Kv = (t) => t.edges;
var Qv = Kv;
const Jv = (t, e) => {
  let n,
    s,
    o,
    r,
    c,
    a = 1;
  do {
    (s = t), (t = null);
    let i = null;
    for (c = 0; s; ) {
      c++, (o = s);
      let l = 0;
      for (n = 0; n < a && (l++, (o = o.nextZ), !!o); n++);
      let f = a;
      for (; l > 0 || (f > 0 && o); )
        l !== 0 && (f === 0 || !o || e(s) <= e(o))
          ? ((r = s), (s = s.nextZ), l--)
          : ((r = o), (o = o.nextZ), f--),
          i ? (i.nextZ = r) : (t = r),
          (r.prevZ = i),
          (i = r);
      s = o;
    }
    (i.nextZ = null), (a *= 2);
  } while (c > 1);
  return t;
};
var jv = Jv;
const t3 = jv;
let mi = class {
  constructor(e, n, s) {
    (this.i = e),
      (this.x = n),
      (this.y = s),
      (this.prev = null),
      (this.next = null),
      (this.z = null),
      (this.prevZ = null),
      (this.nextZ = null),
      (this.steiner = !1);
  }
};
const e3 = (t, e, n, s) => {
    const o = new mi(t, e, n);
    return (
      s
        ? ((o.next = s.next), (o.prev = s), (s.next.prev = o), (s.next = o))
        : ((o.prev = o), (o.next = o)),
      o
    );
  },
  n3 = (t) => {
    (t.next.prev = t.prev),
      (t.prev.next = t.next),
      t.prevZ && (t.prevZ.nextZ = t.nextZ),
      t.nextZ && (t.nextZ.prevZ = t.prevZ);
  };
var vi = { Node: mi, insertNode: e3, removeNode: n3, sortLinked: t3 };
const s3 = (t, e, n, s, o, r, c, a) =>
    (o - c) * (e - a) - (t - c) * (r - a) >= 0 &&
    (t - c) * (s - a) - (n - c) * (e - a) >= 0 &&
    (n - c) * (r - a) - (o - c) * (s - a) >= 0,
  o3 = (t, e, n) => (e.y - t.y) * (n.x - e.x) - (e.x - t.x) * (n.y - e.y);
var Qs = { area: o3, pointInTriangle: s3 };
const { Node: Fr, insertNode: Cr, removeNode: hn } = vi,
  { area: at } = Qs,
  r3 = (t, e, n, s, o) => {
    let r;
    if (o === u3(t, e, n, s) > 0)
      for (let c = e; c < n; c += s) r = Cr(c, t[c], t[c + 1], r);
    else for (let c = n - s; c >= e; c -= s) r = Cr(c, t[c], t[c + 1], r);
    return r && Sn(r, r.next) && (hn(r), (r = r.next)), r;
  },
  yi = (t, e) => {
    if (!t) return t;
    e || (e = t);
    let n = t,
      s;
    do
      if (
        ((s = !1), !n.steiner && (Sn(n, n.next) || at(n.prev, n, n.next) === 0))
      ) {
        if ((hn(n), (n = e = n.prev), n === n.next)) break;
        s = !0;
      } else n = n.next;
    while (s || n !== e);
    return e;
  },
  c3 = (t, e, n) => {
    let s = t;
    do {
      const o = s.prev,
        r = s.next.next;
      !Sn(o, r) &&
        wi(o, s, s.next, r) &&
        Te(o, r) &&
        Te(r, o) &&
        (e.push(o.i / n),
        e.push(s.i / n),
        e.push(r.i / n),
        hn(s),
        hn(s.next),
        (s = t = r)),
        (s = s.next);
    } while (s !== t);
    return yi(s);
  },
  a3 = (t, e) => {
    let n = t;
    do {
      if (
        n.i !== t.i &&
        n.next.i !== t.i &&
        n.i !== e.i &&
        n.next.i !== e.i &&
        wi(n, n.next, t, e)
      )
        return !0;
      n = n.next;
    } while (n !== t);
    return !1;
  },
  Te = (t, e) =>
    at(t.prev, t, t.next) < 0
      ? at(t, e, t.next) >= 0 && at(t, t.prev, e) >= 0
      : at(t, e, t.prev) < 0 || at(t, t.next, e) < 0,
  i3 = (t, e) => {
    let n = t,
      s = !1;
    const o = (t.x + e.x) / 2,
      r = (t.y + e.y) / 2;
    do
      n.y > r != n.next.y > r &&
        n.next.y !== n.y &&
        o < ((n.next.x - n.x) * (r - n.y)) / (n.next.y - n.y) + n.x &&
        (s = !s),
        (n = n.next);
    while (n !== t);
    return s;
  },
  l3 = (t, e) => {
    const n = new Fr(t.i, t.x, t.y),
      s = new Fr(e.i, e.x, e.y),
      o = t.next,
      r = e.prev;
    return (
      (t.next = e),
      (e.prev = t),
      (n.next = o),
      (o.prev = n),
      (s.next = n),
      (n.prev = s),
      (r.next = s),
      (s.prev = r),
      s
    );
  },
  f3 = (t, e) =>
    t.next.i !== e.i &&
    t.prev.i !== e.i &&
    !a3(t, e) && // doesn't intersect other edges
    ((Te(t, e) &&
      Te(e, t) &&
      i3(t, e) && // locally visible
      (at(t.prev, t, e.prev) || at(t, e.prev, e))) || // does not create opposite-facing sectors
      (Sn(t, e) && at(t.prev, t, t.next) > 0 && at(e.prev, e, e.next) > 0)),
  wi = (t, e, n, s) => {
    const o = Math.sign(at(t, e, n)),
      r = Math.sign(at(t, e, s)),
      c = Math.sign(at(n, s, t)),
      a = Math.sign(at(n, s, e));
    return !!(
      (o !== r && c !== a) ||
      (o === 0 && We(t, n, e)) ||
      (r === 0 && We(t, s, e)) ||
      (c === 0 && We(n, t, s)) ||
      (a === 0 && We(n, e, s))
    );
  },
  We = (t, e, n) =>
    e.x <= Math.max(t.x, n.x) &&
    e.x >= Math.min(t.x, n.x) &&
    e.y <= Math.max(t.y, n.y) &&
    e.y >= Math.min(t.y, n.y),
  u3 = (t, e, n, s) => {
    let o = 0;
    for (let r = e, c = n - s; r < n; r += s)
      (o += (t[c] - t[r]) * (t[r + 1] + t[c + 1])), (c = r);
    return o;
  },
  Sn = (t, e) => t.x === e.x && t.y === e.y;
var xi = {
  cureLocalIntersections: c3,
  filterPoints: yi,
  isValidDiagonal: f3,
  linkedPolygon: r3,
  locallyInside: Te,
  splitPolygon: l3,
};
const {
    filterPoints: As,
    linkedPolygon: h3,
    locallyInside: d3,
    splitPolygon: g3,
  } = xi,
  { area: qr, pointInTriangle: p3 } = Qs,
  $3 = (t, e, n, s) => {
    const o = [];
    for (let r = 0, c = e.length; r < c; r++) {
      const a = e[r] * s,
        i = r < c - 1 ? e[r + 1] * s : t.length,
        l = h3(t, a, i, s, !1);
      l === l.next && (l.steiner = !0), o.push(w3(l));
    }
    o.sort((r, c) => r.x - c.x);
    for (let r = 0; r < o.length; r++) (n = m3(o[r], n)), (n = As(n, n.next));
    return n;
  },
  m3 = (t, e) => {
    const n = v3(t, e);
    if (!n) return e;
    const s = g3(n, t),
      o = As(n, n.next);
    return As(s, s.next), e === n ? o : e;
  },
  v3 = (t, e) => {
    let n = e;
    const s = t.x,
      o = t.y;
    let r = -1 / 0,
      c;
    do {
      if (o <= n.y && o >= n.next.y && n.next.y !== n.y) {
        const u = n.x + ((o - n.y) * (n.next.x - n.x)) / (n.next.y - n.y);
        if (u <= s && u > r) {
          if (((r = u), u === s)) {
            if (o === n.y) return n;
            if (o === n.next.y) return n.next;
          }
          c = n.x < n.next.x ? n : n.next;
        }
      }
      n = n.next;
    } while (n !== e);
    if (!c) return null;
    if (s === r) return c;
    const a = c,
      i = c.x,
      l = c.y;
    let f = 1 / 0;
    n = c;
    do {
      if (
        s >= n.x &&
        n.x >= i &&
        s !== n.x &&
        p3(o < l ? s : r, o, i, l, o < l ? r : s, o, n.x, n.y)
      ) {
        const u = Math.abs(o - n.y) / (s - n.x);
        d3(n, t) &&
          (u < f || (u === f && (n.x > c.x || (n.x === c.x && y3(c, n))))) &&
          ((c = n), (f = u));
      }
      n = n.next;
    } while (n !== a);
    return c;
  },
  y3 = (t, e) => qr(t.prev, t, e.prev) < 0 && qr(e.next, t, t.next) < 0,
  w3 = (t) => {
    let e = t,
      n = t;
    do (e.x < n.x || (e.x === n.x && e.y < n.y)) && (n = e), (e = e.next);
    while (e !== t);
    return n;
  };
var x3 = $3;
const P3 = x3,
  { removeNode: E3, sortLinked: A3 } = vi,
  {
    cureLocalIntersections: b3,
    filterPoints: dn,
    isValidDiagonal: S3,
    linkedPolygon: _3,
    splitPolygon: T3,
  } = xi,
  { area: qt, pointInTriangle: be } = Qs,
  M3 = (t, e, n = 2) => {
    const s = e && e.length,
      o = s ? e[0] * n : t.length;
    let r = _3(t, 0, o, n, !0);
    const c = [];
    if (!r || r.next === r.prev) return c;
    let a, i, l, f, u;
    if ((s && (r = P3(t, e, r, n)), t.length > 80 * n)) {
      (a = l = t[0]), (i = f = t[1]);
      for (let h = n; h < o; h += n) {
        const d = t[h],
          p = t[h + 1];
        d < a && (a = d), p < i && (i = p), d > l && (l = d), p > f && (f = p);
      }
      (u = Math.max(l - a, f - i)), (u = u !== 0 ? 1 / u : 0);
    }
    return Me(r, c, n, a, i, u), c;
  },
  Me = (t, e, n, s, o, r, c) => {
    if (!t) return;
    !c && r && B3(t, s, o, r);
    let a = t,
      i,
      l;
    for (; t.prev !== t.next; ) {
      if (((i = t.prev), (l = t.next), r ? N3(t, s, o, r) : k3(t))) {
        e.push(i.i / n),
          e.push(t.i / n),
          e.push(l.i / n),
          E3(t),
          (t = l.next),
          (a = l.next);
        continue;
      }
      if (((t = l), t === a)) {
        c
          ? c === 1
            ? ((t = b3(dn(t), e, n)), Me(t, e, n, s, o, r, 2))
            : c === 2 && O3(t, e, n, s, o, r)
          : Me(dn(t), e, n, s, o, r, 1);
        break;
      }
    }
  },
  k3 = (t) => {
    const e = t.prev,
      n = t,
      s = t.next;
    if (qt(e, n, s) >= 0) return !1;
    let o = t.next.next;
    for (; o !== t.prev; ) {
      if (
        be(e.x, e.y, n.x, n.y, s.x, s.y, o.x, o.y) &&
        qt(o.prev, o, o.next) >= 0
      )
        return !1;
      o = o.next;
    }
    return !0;
  },
  N3 = (t, e, n, s) => {
    const o = t.prev,
      r = t,
      c = t.next;
    if (qt(o, r, c) >= 0) return !1;
    const a = o.x < r.x ? (o.x < c.x ? o.x : c.x) : r.x < c.x ? r.x : c.x,
      i = o.y < r.y ? (o.y < c.y ? o.y : c.y) : r.y < c.y ? r.y : c.y,
      l = o.x > r.x ? (o.x > c.x ? o.x : c.x) : r.x > c.x ? r.x : c.x,
      f = o.y > r.y ? (o.y > c.y ? o.y : c.y) : r.y > c.y ? r.y : c.y,
      u = bs(a, i, e, n, s),
      h = bs(l, f, e, n, s);
    let d = t.prevZ,
      p = t.nextZ;
    for (; d && d.z >= u && p && p.z <= h; ) {
      if (
        (d !== t.prev &&
          d !== t.next &&
          be(o.x, o.y, r.x, r.y, c.x, c.y, d.x, d.y) &&
          qt(d.prev, d, d.next) >= 0) ||
        ((d = d.prevZ),
        p !== t.prev &&
          p !== t.next &&
          be(o.x, o.y, r.x, r.y, c.x, c.y, p.x, p.y) &&
          qt(p.prev, p, p.next) >= 0)
      )
        return !1;
      p = p.nextZ;
    }
    for (; d && d.z >= u; ) {
      if (
        d !== t.prev &&
        d !== t.next &&
        be(o.x, o.y, r.x, r.y, c.x, c.y, d.x, d.y) &&
        qt(d.prev, d, d.next) >= 0
      )
        return !1;
      d = d.prevZ;
    }
    for (; p && p.z <= h; ) {
      if (
        p !== t.prev &&
        p !== t.next &&
        be(o.x, o.y, r.x, r.y, c.x, c.y, p.x, p.y) &&
        qt(p.prev, p, p.next) >= 0
      )
        return !1;
      p = p.nextZ;
    }
    return !0;
  },
  O3 = (t, e, n, s, o, r) => {
    let c = t;
    do {
      let a = c.next.next;
      for (; a !== c.prev; ) {
        if (c.i !== a.i && S3(c, a)) {
          let i = T3(c, a);
          (c = dn(c, c.next)),
            (i = dn(i, i.next)),
            Me(c, e, n, s, o, r),
            Me(i, e, n, s, o, r);
          return;
        }
        a = a.next;
      }
      c = c.next;
    } while (c !== t);
  },
  B3 = (t, e, n, s) => {
    let o = t;
    do
      o.z === null && (o.z = bs(o.x, o.y, e, n, s)),
        (o.prevZ = o.prev),
        (o.nextZ = o.next),
        (o = o.next);
    while (o !== t);
    (o.prevZ.nextZ = null), (o.prevZ = null), A3(o, (r) => r.z);
  },
  bs = (t, e, n, s, o) => (
    (t = 32767 * (t - n) * o),
    (e = 32767 * (e - s) * o),
    (t = (t | (t << 8)) & 16711935),
    (t = (t | (t << 4)) & 252645135),
    (t = (t | (t << 2)) & 858993459),
    (t = (t | (t << 1)) & 1431655765),
    (e = (e | (e << 8)) & 16711935),
    (e = (e | (e << 4)) & 252645135),
    (e = (e | (e << 2)) & 858993459),
    (e = (e | (e << 1)) & 1431655765),
    t | (e << 1)
  );
var V3 = M3;
const { area: R3 } = Be,
  { toOutlines: F3 } = R,
  { arePointsInside: C3 } = zs,
  q3 = (t) => {
    const e = F3(t),
      n = [],
      s = [];
    e.forEach((c, a) => {
      const i = R3(c);
      i < 0 ? s.push(a) : i > 0 && n.push(a);
    });
    const o = [],
      r = [];
    return (
      n.forEach((c, a) => {
        const i = e[c];
        (o[a] = []),
          s.forEach((l, f) => {
            const u = e[l];
            C3([u[0]], { vertices: i }) &&
              (o[a].push(l), r[f] || (r[f] = []), r[f].push(a));
          });
      }),
      s.forEach((c, a) => {
        if (r[a] && r[a].length > 1) {
          const i = G3(r[a], (l) => o[l].length);
          r[a].forEach((l, f) => {
            f !== i && (o[l] = o[l].filter((u) => u !== c));
          });
        }
      }),
      o.map((c, a) => ({
        solid: e[n[a]],
        holes: c.map((i) => e[i]),
      }))
    );
  },
  G3 = (t, e) => {
    let n, s;
    return (
      t.forEach((o, r) => {
        const c = e(o);
        (s === void 0 || c < s) && ((n = r), (s = c));
      }),
      n
    );
  };
var z3 = q3;
const D3 = R,
  Gr = vt,
  L3 = G,
  j = N,
  I3 = $i,
  Z3 = z3;
let X3 = class {
  constructor(e) {
    this.plane = I3(e);
    const n = j.orthogonal(j.create(), this.plane),
      s = j.cross(j.create(), this.plane, n);
    (this.v = j.normalize(s, s)),
      (this.u = j.cross(j.create(), this.v, this.plane)),
      (this.basisMap = /* @__PURE__ */ new Map());
    const o = e.edges.map((c) => c.map((a) => this.to2D(a))),
      r = D3.create(o);
    this.roots = Z3(r);
  }
  /*
   * project a 3D point onto the 2D plane
   */
  to2D(e) {
    const n = L3.fromValues(j.dot(e, this.u), j.dot(e, this.v));
    return this.basisMap.set(n, e), n;
  }
  /*
   * un-project a 2D point back into 3D
   */
  to3D(e) {
    const n = this.basisMap.get(e);
    if (n) return n;
    {
      console.log("Warning: point not in original slice");
      const s = j.scale(j.create(), this.u, e[0]),
        o = j.scale(j.create(), this.v, e[1]),
        r = j.scale(j.create(), Gr, Gr[3]),
        c = j.add(s, s, r);
      return j.add(o, o, c);
    }
  }
};
var Y3 = X3;
const H3 = z,
  U3 = V3,
  W3 = Y3,
  K3 = (t) => {
    const e = new W3(t),
      n = [];
    return (
      e.roots.forEach(({ solid: s, holes: o }) => {
        let r = s.length;
        const c = [];
        o.forEach((u, h) => {
          c.push(r), (r += u.length);
        });
        const a = [s, ...o].flat(),
          i = a.flat(),
          l = (u) => e.to3D(a[u]),
          f = U3(i, c);
        for (let u = 0; u < f.length; u += 3) {
          const h = f.slice(u, u + 3).map(l);
          n.push(H3.fromPointsAndPlane(h, e.plane));
        }
      }),
      n
    );
  };
var Q3 = K3;
const zr = N,
  J3 = (t) =>
    t.reduce(
      (e, n) => (e += `[${zr.toString(n[0])}, ${zr.toString(n[1])}], `),
      "",
    ),
  j3 = (t) => `[${J3(t.edges)}]`;
var ty = j3;
const Ke = N,
  ey = Lt,
  ny = (t, e) => {
    const n = e.edges.map((s) => [
      Ke.transform(Ke.create(), s[0], t),
      Ke.transform(Ke.create(), s[1], t),
    ]);
    return ey(n);
  };
var sy = ny;
var ie = {
  calculatePlane: $i,
  clone: Rv,
  create: Lt,
  equals: qv,
  fromPoints: Dv,
  fromSides: Zv,
  isA: Yv,
  reverse: Wv,
  toEdges: Qv,
  toPolygons: Q3,
  toString: ty,
  transform: sy,
};
const Dr = N,
  oy = Lt,
  ry = (t) => {
    if (!t.edges) return t;
    let e = t.edges;
    const n = /* @__PURE__ */ new Map(),
      s = /* @__PURE__ */ new Map();
    (e = e.filter((c) => !Dr.equals(c[0], c[1]))),
      e.forEach((c) => {
        const a = c[0].toString(),
          i = c[1].toString();
        n.set(a, c[0]),
          n.set(i, c[1]),
          s.set(a, (s.get(a) || 0) + 1),
          s.set(i, (s.get(i) || 0) - 1);
      });
    const o = [],
      r = [];
    return (
      s.forEach((c, a) => {
        c < 0 && o.push(a), c > 0 && r.push(a);
      }),
      o.forEach((c) => {
        const a = n.get(c);
        let i = 1 / 0,
          l;
        r.forEach((f) => {
          const u = n.get(f),
            h = Dr.distance(a, u);
          h < i && ((i = h), (l = u));
        }),
          console.warn(
            `slice.repair: repairing vertex gap ${a} to ${l} distance ${i}`,
          ),
          (e = e.map((f) =>
            f[0].toString() === c
              ? [l, f[1]]
              : f[1].toString() === c
                ? [f[0], l]
                : f,
          ));
      }),
      oy(e)
    );
  };
var cy = ry;
const { EPS: Lr } = D,
  Ut = N,
  Qe = z,
  Ir = ie,
  Ss = (t, e) =>
    t === e ? t : t < e ? Ss(e, t) : e === 1 ? 1 : e === 0 ? t : Ss(e, t % e),
  ay = (t, e) => (t * e) / Ss(t, e),
  Zr = (t, e) => {
    const n = t / e.length;
    if (n === 1) return e;
    const s = Ut.fromValues(n, n, n),
      o = [];
    return (
      e.forEach((r) => {
        const c = Ut.subtract(Ut.create(), r[1], r[0]);
        Ut.divide(c, c, s);
        let a = r[0];
        for (let i = 1; i <= n; ++i) {
          const l = Ut.add(Ut.create(), a, c);
          o.push([a, l]), (a = l);
        }
      }),
      o
    );
  },
  Xr = ((Lr * Lr) / 2) * Math.sin(Math.PI / 3),
  iy = (t, e) => {
    let n = Ir.toEdges(t),
      s = Ir.toEdges(e);
    if (n.length !== s.length) {
      const r = ay(n.length, s.length);
      r !== n.length && (n = Zr(r, n)), r !== s.length && (s = Zr(r, s));
    }
    const o = [];
    return (
      n.forEach((r, c) => {
        const a = s[c],
          i = Qe.create([r[0], r[1], a[1]]),
          l = Qe.measureArea(i);
        Number.isFinite(l) && l > Xr && o.push(i);
        const f = Qe.create([r[0], a[1], a[0]]),
          u = Qe.measureArea(f);
        Number.isFinite(u) && u > Xr && o.push(f);
      }),
      o
    );
  };
var ly = iy;
const Yr = I,
  Hr = R,
  fy = F,
  _s = z,
  kt = ie,
  uy = cy,
  Ur = ly,
  hy = (t, e, n) => {
    let s = null;
    return (
      Hr.isA(n) && (s = kt.fromSides(Hr.toSides(n))),
      _s.isA(n) && (s = kt.fromPoints(_s.toPoints(n))),
      t === 0 || t === 1
        ? kt.transform(Yr.fromTranslation(Yr.create(), [0, 0, t]), s)
        : null
    );
  },
  dy = (t, e) => {
    const n = {
        numberOfSlices: 2,
        capStart: !0,
        capEnd: !0,
        close: !1,
        repair: !0,
        callback: hy,
      },
      {
        numberOfSlices: s,
        capStart: o,
        capEnd: r,
        close: c,
        repair: a,
        callback: i,
      } = Object.assign({}, n, t);
    if (s < 2) throw new Error("numberOfSlices must be 2 or more");
    a && (e = uy(e));
    const l = s - 1;
    let f = null,
      u = null,
      h = null,
      d = [];
    for (let p = 0; p < s; p++) {
      const g = i(p / l, p, e);
      if (g) {
        if (!kt.isA(g))
          throw new Error("the callback function must return slice objects");
        if (kt.toEdges(g).length === 0)
          throw new Error(
            "the callback function must return slices with one or more edges",
          );
        h && (d = d.concat(Ur(h, g))),
          p === 0 && (f = g),
          p === s - 1 && (u = g),
          (h = g);
      }
    }
    if (r) {
      const p = kt.toPolygons(u);
      d = d.concat(p);
    }
    if (o) {
      const p = kt.toPolygons(f).map(_s.invert);
      d = d.concat(p);
    }
    return (
      !o && !r && c && !kt.equals(u, f) && (d = d.concat(Ur(u, f))),
      fy.create(d)
    );
  };
var _n = dy;
const { TAU: ut } = D,
  me = I,
  { mirrorX: gy } = Ae,
  Je = R,
  os = ie,
  py = _n,
  $y = (t, e) => {
    const n = {
      segments: 12,
      startAngle: 0,
      angle: ut,
      overflow: "cap",
    };
    let {
      segments: s,
      startAngle: o,
      angle: r,
      overflow: c,
    } = Object.assign({}, n, t);
    if (s < 3) throw new Error("segments must be greater then 3");
    (o = Math.abs(o) > ut ? o % ut : o), (r = Math.abs(r) > ut ? r % ut : r);
    let a = o + r;
    if (((a = Math.abs(a) > ut ? a % ut : a), a < o)) {
      const y = o;
      (o = a), (a = y);
    }
    let i = a - o;
    if ((i <= 0 && (i = ut), Math.abs(i) < ut)) {
      const y = ut / s;
      (s = Math.floor(Math.abs(i) / y)), Math.abs(i) > s * y && s++;
    }
    let l = Je.toSides(e);
    if (l.length === 0) throw new Error("the given geometry cannot be empty");
    const f = l.filter((y) => y[0][0] < 0),
      u = l.filter((y) => y[0][0] >= 0);
    f.length > 0 &&
      u.length > 0 &&
      c === "cap" &&
      (f.length > u.length
        ? ((l = l.map((y) => {
            let x = y[0],
              m = y[1];
            return (
              (x = [Math.min(x[0], 0), x[1]]),
              (m = [Math.min(m[0], 0), m[1]]),
              [x, m]
            );
          })),
          (e = Je.create(l)),
          (e = gy(e)))
        : u.length >= f.length &&
          ((l = l.map((y) => {
            let x = y[0],
              m = y[1];
            return (
              (x = [Math.max(x[0], 0), x[1]]),
              (m = [Math.max(m[0], 0), m[1]]),
              [x, m]
            );
          })),
          (e = Je.create(l))));
    const d = i / s,
      p = Math.abs(i) < ut,
      g = os.fromSides(Je.toSides(e));
    os.reverse(g, g);
    const $ = me.create(),
      v = (y, x, m) => {
        let P = d * x + o;
        return (
          i === ut && x === s && (P = o),
          me.multiply(
            $,
            me.fromZRotation($, P),
            me.fromXRotation(me.create(), ut / 4),
          ),
          os.transform($, m)
        );
      };
    return (
      (t = {
        numberOfSlices: s + 1,
        capStart: p,
        capEnd: p,
        close: !p,
        callback: v,
      }),
      py(t, g)
    );
  };
var Pi = $y;
const my = V,
  Wr = I,
  Kr = R,
  Qr = F,
  Jr = L,
  Tn = (t, ...e) => {
    if (!Array.isArray(t)) throw new Error("angles must be an array");
    if (((e = my(e)), e.length === 0))
      throw new Error("wrong number of arguments");
    for (t = t.slice(); t.length < 3; ) t.push(0);
    const n = t[2],
      s = t[1],
      o = t[0],
      r = Wr.fromTaitBryanRotation(Wr.create(), n, s, o),
      c = e.map((a) =>
        Jr.isA(a)
          ? Jr.transform(r, a)
          : Kr.isA(a)
            ? Kr.transform(r, a)
            : Qr.isA(a)
              ? Qr.transform(r, a)
              : a,
      );
    return c.length === 1 ? c[0] : c;
  },
  vy = (t, ...e) => Tn([t, 0, 0], e),
  yy = (t, ...e) => Tn([0, t, 0], e),
  wy = (t, ...e) => Tn([0, 0, t], e);
var Se = {
  rotate: Tn,
  rotateX: vy,
  rotateY: yy,
  rotateZ: wy,
};
const xy = V,
  jr = I,
  tc = R,
  ec = F,
  nc = L,
  Mn = (t, ...e) => {
    if (!Array.isArray(t)) throw new Error("offset must be an array");
    if (((e = xy(e)), e.length === 0))
      throw new Error("wrong number of arguments");
    for (t = t.slice(); t.length < 3; ) t.push(0);
    const n = jr.fromTranslation(jr.create(), t),
      s = e.map((o) =>
        nc.isA(o)
          ? nc.transform(n, o)
          : tc.isA(o)
            ? tc.transform(n, o)
            : ec.isA(o)
              ? ec.transform(n, o)
              : o,
      );
    return s.length === 1 ? s[0] : s;
  },
  Py = (t, ...e) => Mn([t, 0, 0], e),
  Ey = (t, ...e) => Mn([0, t, 0], e),
  Ay = (t, ...e) => Mn([0, 0, t], e);
var zt = {
  translate: Mn,
  translateX: Py,
  translateY: Ey,
  translateZ: Ay,
};
const { TAU: by } = D,
  Sy = Pi,
  { rotate: _y } = Se,
  { translate: Ty } = zt,
  My = li,
  { isGT: rs, isGTE: cs } = K,
  ky = (t) => {
    const e = {
        innerRadius: 1,
        innerSegments: 32,
        outerRadius: 4,
        outerSegments: 32,
        innerRotation: 0,
        startAngle: 0,
        outerRotation: by,
      },
      {
        innerRadius: n,
        innerSegments: s,
        outerRadius: o,
        outerSegments: r,
        innerRotation: c,
        startAngle: a,
        outerRotation: i,
      } = Object.assign({}, e, t);
    if (!rs(n, 0)) throw new Error("innerRadius must be greater than zero");
    if (!cs(s, 3)) throw new Error("innerSegments must be three or more");
    if (!rs(o, 0)) throw new Error("outerRadius must be greater than zero");
    if (!cs(r, 3)) throw new Error("outerSegments must be three or more");
    if (!cs(a, 0)) throw new Error("startAngle must be positive");
    if (!rs(i, 0)) throw new Error("outerRotation must be greater than zero");
    if (n >= o)
      throw new Error(
        "inner circle is too large to rotate about the outer circle",
      );
    let l = My({ radius: n, segments: s });
    return (
      c !== 0 && (l = _y([0, 0, c], l)),
      (l = Ty([o, 0], l)),
      Sy(
        {
          startAngle: a,
          angle: i,
          segments: r,
        },
        l,
      )
    );
  };
var Ny = ky;
const { NEPS: re } = D,
  ve = G,
  Oy = R,
  { isNumberArray: By } = K,
  Ts = (t, e, n) => Math.acos((t * t + e * e - n * n) / (2 * t * e)),
  Vy = (t, e, n) =>
    e > re
      ? Math.sqrt(t * t + n * n - 2 * t * n * Math.cos(e))
      : Math.sqrt((t - n) * (t - n) + t * n * e * e * (1 - (e * e) / 12)),
  Ry = (t) => {
    if (Math.abs(t[0] + t[1] + t[2] - Math.PI) > re)
      throw new Error("AAA triangles require angles that sum to PI");
    const n = t[0],
      s = t[1],
      o = Math.PI - n - s,
      r = 1,
      c = (r / Math.sin(o)) * Math.sin(n),
      a = (r / Math.sin(o)) * Math.sin(s);
    return le(n, s, o, c, a, r);
  },
  Fy = (t) => {
    const e = t[0],
      n = t[1],
      s = Math.PI + re - e - n;
    if (s < re) throw new Error("AAS triangles require angles that sum to PI");
    const o = t[2],
      r = (o / Math.sin(e)) * Math.sin(n),
      c = (o / Math.sin(e)) * Math.sin(s);
    return le(e, n, s, o, r, c);
  },
  Cy = (t) => {
    const e = t[0],
      n = t[2],
      s = Math.PI + re - e - n;
    if (s < re) throw new Error("ASA triangles require angles that sum to PI");
    const o = t[1],
      r = (o / Math.sin(s)) * Math.sin(e),
      c = (o / Math.sin(s)) * Math.sin(n);
    return le(e, n, s, r, c, o);
  },
  qy = (t) => {
    const e = t[0],
      n = t[1],
      s = t[2],
      o = Vy(e, n, s),
      r = Ts(o, e, s),
      c = Math.PI - r - n;
    return le(r, n, c, s, o, e);
  },
  Gy = (t) => {
    const e = t[0],
      n = t[1],
      s = t[2],
      o = Math.asin((n * Math.sin(s)) / e),
      r = Math.PI - o - s,
      c = (e / Math.sin(s)) * Math.sin(r);
    return le(o, r, s, n, c, e);
  },
  zy = (t) => {
    const e = t[1],
      n = t[2],
      s = t[0];
    if (e + n <= s || n + s <= e || s + e <= n)
      throw new Error(
        "SSS triangle is incorrect, as the longest side is longer than the sum of the other sides",
      );
    const o = Ts(n, s, e),
      r = Ts(s, e, n),
      c = Math.PI - o - r;
    return le(o, r, c, e, n, s);
  },
  le = (t, e, n, s, o, r) => {
    const c = ve.fromValues(0, 0),
      a = ve.fromValues(r, 0),
      i = ve.fromValues(s, 0);
    return (
      ve.add(i, ve.rotate(i, i, [0, 0], Math.PI - e), a),
      Oy.fromPoints([c, a, i])
    );
  },
  Dy = (t) => {
    const e = {
      type: "SSS",
      values: [1, 1, 1],
    };
    let { type: n, values: s } = Object.assign({}, e, t);
    if (typeof n != "string") throw new Error("triangle type must be a string");
    if (
      ((n = n.toUpperCase()),
      !(
        (n[0] === "A" || n[0] === "S") &&
        (n[1] === "A" || n[1] === "S") &&
        (n[2] === "A" || n[2] === "S")
      ))
    )
      throw new Error("triangle type must contain three letters; A or S");
    if (!By(s, 3)) throw new Error("triangle values must contain three values");
    if (!s.every((o) => o > 0))
      throw new Error("triangle values must be greater than zero");
    switch (n) {
      case "AAA":
        return Ry(s);
      case "AAS":
        return Fy(s);
      case "ASA":
        return Cy(s);
      case "SAS":
        return qy(s);
      case "SSA":
        return Gy(s);
      case "SSS":
        return zy(s);
      default:
        throw new Error("invalid triangle type, try again");
    }
  };
var Ly = Dy;
var Iy = {
  arc: pm,
  circle: li,
  cube: Tm,
  cuboid: Ws,
  cylinder: ui,
  cylinderElliptic: fi,
  ellipse: ii,
  ellipsoid: hi,
  geodesicSphere: Ym,
  line: Wm,
  polygon: Qm,
  polyhedron: di,
  rectangle: Ks,
  roundedCuboid: ov,
  roundedCylinder: fv,
  roundedRectangle: dv,
  sphere: gi,
  square: wv,
  star: Sv,
  torus: Ny,
  triangle: Ly,
};
var Zy = {
  height: 14,
  32: [16],
  33: [10, 5, 21, 5, 7, void 0, 5, 2, 4, 1, 5, 0, 6, 1, 5, 2],
  34: [16, 4, 21, 4, 14, void 0, 12, 21, 12, 14],
  35: [
    21,
    11,
    25,
    4,
    -7,
    void 0,
    17,
    25,
    10,
    -7,
    void 0,
    4,
    12,
    18,
    12,
    void 0,
    3,
    6,
    17,
    6,
  ],
  36: [
    20,
    8,
    25,
    8,
    -4,
    void 0,
    12,
    25,
    12,
    -4,
    void 0,
    17,
    18,
    15,
    20,
    12,
    21,
    8,
    21,
    5,
    20,
    3,
    18,
    3,
    16,
    4,
    14,
    5,
    13,
    7,
    12,
    13,
    10,
    15,
    9,
    16,
    8,
    17,
    6,
    17,
    3,
    15,
    1,
    12,
    0,
    8,
    0,
    5,
    1,
    3,
    3,
  ],
  37: [
    24,
    21,
    21,
    3,
    0,
    void 0,
    8,
    21,
    10,
    19,
    10,
    17,
    9,
    15,
    7,
    14,
    5,
    14,
    3,
    16,
    3,
    18,
    4,
    20,
    6,
    21,
    8,
    21,
    10,
    20,
    13,
    19,
    16,
    19,
    19,
    20,
    21,
    21,
    void 0,
    17,
    7,
    15,
    6,
    14,
    4,
    14,
    2,
    16,
    0,
    18,
    0,
    20,
    1,
    21,
    3,
    21,
    5,
    19,
    7,
    17,
    7,
  ],
  38: [
    26, 23, 12, 23, 13, 22, 14, 21, 14, 20, 13, 19, 11, 17, 6, 15, 3, 13, 1, 11,
    0, 7, 0, 5, 1, 4, 2, 3, 4, 3, 6, 4, 8, 5, 9, 12, 13, 13, 14, 14, 16, 14, 18,
    13, 20, 11, 21, 9, 20, 8, 18, 8, 16, 9, 13, 11, 10, 16, 3, 18, 1, 20, 0, 22,
    0, 23, 1, 23, 2,
  ],
  39: [10, 5, 19, 4, 20, 5, 21, 6, 20, 6, 18, 5, 16, 4, 15],
  40: [
    14, 11, 25, 9, 23, 7, 20, 5, 16, 4, 11, 4, 7, 5, 2, 7, -2, 9, -5, 11, -7,
  ],
  41: [
    14, 3, 25, 5, 23, 7, 20, 9, 16, 10, 11, 10, 7, 9, 2, 7, -2, 5, -5, 3, -7,
  ],
  42: [16, 8, 21, 8, 9, void 0, 3, 18, 13, 12, void 0, 13, 18, 3, 12],
  43: [26, 13, 18, 13, 0, void 0, 4, 9, 22, 9],
  44: [10, 6, 1, 5, 0, 4, 1, 5, 2, 6, 1, 6, -1, 5, -3, 4, -4],
  45: [26, 4, 9, 22, 9],
  46: [10, 5, 2, 4, 1, 5, 0, 6, 1, 5, 2],
  47: [22, 20, 25, 2, -7],
  48: [
    20, 9, 21, 6, 20, 4, 17, 3, 12, 3, 9, 4, 4, 6, 1, 9, 0, 11, 0, 14, 1, 16, 4,
    17, 9, 17, 12, 16, 17, 14, 20, 11, 21, 9, 21,
  ],
  49: [20, 6, 17, 8, 18, 11, 21, 11, 0],
  50: [
    20, 4, 16, 4, 17, 5, 19, 6, 20, 8, 21, 12, 21, 14, 20, 15, 19, 16, 17, 16,
    15, 15, 13, 13, 10, 3, 0, 17, 0,
  ],
  51: [
    20, 5, 21, 16, 21, 10, 13, 13, 13, 15, 12, 16, 11, 17, 8, 17, 6, 16, 3, 14,
    1, 11, 0, 8, 0, 5, 1, 4, 2, 3, 4,
  ],
  52: [20, 13, 21, 3, 7, 18, 7, void 0, 13, 21, 13, 0],
  53: [
    20, 15, 21, 5, 21, 4, 12, 5, 13, 8, 14, 11, 14, 14, 13, 16, 11, 17, 8, 17,
    6, 16, 3, 14, 1, 11, 0, 8, 0, 5, 1, 4, 2, 3, 4,
  ],
  54: [
    20, 16, 18, 15, 20, 12, 21, 10, 21, 7, 20, 5, 17, 4, 12, 4, 7, 5, 3, 7, 1,
    10, 0, 11, 0, 14, 1, 16, 3, 17, 6, 17, 7, 16, 10, 14, 12, 11, 13, 10, 13, 7,
    12, 5, 10, 4, 7,
  ],
  55: [20, 17, 21, 7, 0, void 0, 3, 21, 17, 21],
  56: [
    20, 8, 21, 5, 20, 4, 18, 4, 16, 5, 14, 7, 13, 11, 12, 14, 11, 16, 9, 17, 7,
    17, 4, 16, 2, 15, 1, 12, 0, 8, 0, 5, 1, 4, 2, 3, 4, 3, 7, 4, 9, 6, 11, 9,
    12, 13, 13, 15, 14, 16, 16, 16, 18, 15, 20, 12, 21, 8, 21,
  ],
  57: [
    20, 16, 14, 15, 11, 13, 9, 10, 8, 9, 8, 6, 9, 4, 11, 3, 14, 3, 15, 4, 18, 6,
    20, 9, 21, 10, 21, 13, 20, 15, 18, 16, 14, 16, 9, 15, 4, 13, 1, 10, 0, 8, 0,
    5, 1, 4, 3,
  ],
  58: [
    10,
    5,
    14,
    4,
    13,
    5,
    12,
    6,
    13,
    5,
    14,
    void 0,
    5,
    2,
    4,
    1,
    5,
    0,
    6,
    1,
    5,
    2,
  ],
  59: [
    10,
    5,
    14,
    4,
    13,
    5,
    12,
    6,
    13,
    5,
    14,
    void 0,
    6,
    1,
    5,
    0,
    4,
    1,
    5,
    2,
    6,
    1,
    6,
    -1,
    5,
    -3,
    4,
    -4,
  ],
  60: [24, 20, 18, 4, 9, 20, 0],
  61: [26, 4, 12, 22, 12, void 0, 4, 6, 22, 6],
  62: [24, 4, 18, 20, 9, 4, 0],
  63: [
    18,
    3,
    16,
    3,
    17,
    4,
    19,
    5,
    20,
    7,
    21,
    11,
    21,
    13,
    20,
    14,
    19,
    15,
    17,
    15,
    15,
    14,
    13,
    13,
    12,
    9,
    10,
    9,
    7,
    void 0,
    9,
    2,
    8,
    1,
    9,
    0,
    10,
    1,
    9,
    2,
  ],
  64: [
    27,
    18,
    13,
    17,
    15,
    15,
    16,
    12,
    16,
    10,
    15,
    9,
    14,
    8,
    11,
    8,
    8,
    9,
    6,
    11,
    5,
    14,
    5,
    16,
    6,
    17,
    8,
    void 0,
    12,
    16,
    10,
    14,
    9,
    11,
    9,
    8,
    10,
    6,
    11,
    5,
    void 0,
    18,
    16,
    17,
    8,
    17,
    6,
    19,
    5,
    21,
    5,
    23,
    7,
    24,
    10,
    24,
    12,
    23,
    15,
    22,
    17,
    20,
    19,
    18,
    20,
    15,
    21,
    12,
    21,
    9,
    20,
    7,
    19,
    5,
    17,
    4,
    15,
    3,
    12,
    3,
    9,
    4,
    6,
    5,
    4,
    7,
    2,
    9,
    1,
    12,
    0,
    15,
    0,
    18,
    1,
    20,
    2,
    21,
    3,
    void 0,
    19,
    16,
    18,
    8,
    18,
    6,
    19,
    5,
  ],
  65: [18, 9, 21, 1, 0, void 0, 9, 21, 17, 0, void 0, 4, 7, 14, 7],
  66: [
    21,
    4,
    21,
    4,
    0,
    void 0,
    4,
    21,
    13,
    21,
    16,
    20,
    17,
    19,
    18,
    17,
    18,
    15,
    17,
    13,
    16,
    12,
    13,
    11,
    void 0,
    4,
    11,
    13,
    11,
    16,
    10,
    17,
    9,
    18,
    7,
    18,
    4,
    17,
    2,
    16,
    1,
    13,
    0,
    4,
    0,
  ],
  67: [
    21, 18, 16, 17, 18, 15, 20, 13, 21, 9, 21, 7, 20, 5, 18, 4, 16, 3, 13, 3, 8,
    4, 5, 5, 3, 7, 1, 9, 0, 13, 0, 15, 1, 17, 3, 18, 5,
  ],
  68: [
    21,
    4,
    21,
    4,
    0,
    void 0,
    4,
    21,
    11,
    21,
    14,
    20,
    16,
    18,
    17,
    16,
    18,
    13,
    18,
    8,
    17,
    5,
    16,
    3,
    14,
    1,
    11,
    0,
    4,
    0,
  ],
  69: [
    19,
    4,
    21,
    4,
    0,
    void 0,
    4,
    21,
    17,
    21,
    void 0,
    4,
    11,
    12,
    11,
    void 0,
    4,
    0,
    17,
    0,
  ],
  70: [18, 4, 21, 4, 0, void 0, 4, 21, 17, 21, void 0, 4, 11, 12, 11],
  71: [
    21,
    18,
    16,
    17,
    18,
    15,
    20,
    13,
    21,
    9,
    21,
    7,
    20,
    5,
    18,
    4,
    16,
    3,
    13,
    3,
    8,
    4,
    5,
    5,
    3,
    7,
    1,
    9,
    0,
    13,
    0,
    15,
    1,
    17,
    3,
    18,
    5,
    18,
    8,
    void 0,
    13,
    8,
    18,
    8,
  ],
  72: [22, 4, 21, 4, 0, void 0, 18, 21, 18, 0, void 0, 4, 11, 18, 11],
  73: [8, 4, 21, 4, 0],
  74: [16, 12, 21, 12, 5, 11, 2, 10, 1, 8, 0, 6, 0, 4, 1, 3, 2, 2, 5, 2, 7],
  75: [21, 4, 21, 4, 0, void 0, 18, 21, 4, 7, void 0, 9, 12, 18, 0],
  76: [17, 4, 21, 4, 0, void 0, 4, 0, 16, 0],
  77: [
    24,
    4,
    21,
    4,
    0,
    void 0,
    4,
    21,
    12,
    0,
    void 0,
    20,
    21,
    12,
    0,
    void 0,
    20,
    21,
    20,
    0,
  ],
  78: [22, 4, 21, 4, 0, void 0, 4, 21, 18, 0, void 0, 18, 21, 18, 0],
  79: [
    22, 9, 21, 7, 20, 5, 18, 4, 16, 3, 13, 3, 8, 4, 5, 5, 3, 7, 1, 9, 0, 13, 0,
    15, 1, 17, 3, 18, 5, 19, 8, 19, 13, 18, 16, 17, 18, 15, 20, 13, 21, 9, 21,
  ],
  80: [
    21,
    4,
    21,
    4,
    0,
    void 0,
    4,
    21,
    13,
    21,
    16,
    20,
    17,
    19,
    18,
    17,
    18,
    14,
    17,
    12,
    16,
    11,
    13,
    10,
    4,
    10,
  ],
  81: [
    22,
    9,
    21,
    7,
    20,
    5,
    18,
    4,
    16,
    3,
    13,
    3,
    8,
    4,
    5,
    5,
    3,
    7,
    1,
    9,
    0,
    13,
    0,
    15,
    1,
    17,
    3,
    18,
    5,
    19,
    8,
    19,
    13,
    18,
    16,
    17,
    18,
    15,
    20,
    13,
    21,
    9,
    21,
    void 0,
    12,
    4,
    18,
    -2,
  ],
  82: [
    21,
    4,
    21,
    4,
    0,
    void 0,
    4,
    21,
    13,
    21,
    16,
    20,
    17,
    19,
    18,
    17,
    18,
    15,
    17,
    13,
    16,
    12,
    13,
    11,
    4,
    11,
    void 0,
    11,
    11,
    18,
    0,
  ],
  83: [
    20, 17, 18, 15, 20, 12, 21, 8, 21, 5, 20, 3, 18, 3, 16, 4, 14, 5, 13, 7, 12,
    13, 10, 15, 9, 16, 8, 17, 6, 17, 3, 15, 1, 12, 0, 8, 0, 5, 1, 3, 3,
  ],
  84: [16, 8, 21, 8, 0, void 0, 1, 21, 15, 21],
  85: [22, 4, 21, 4, 6, 5, 3, 7, 1, 10, 0, 12, 0, 15, 1, 17, 3, 18, 6, 18, 21],
  86: [18, 1, 21, 9, 0, void 0, 17, 21, 9, 0],
  87: [
    24,
    2,
    21,
    7,
    0,
    void 0,
    12,
    21,
    7,
    0,
    void 0,
    12,
    21,
    17,
    0,
    void 0,
    22,
    21,
    17,
    0,
  ],
  88: [20, 3, 21, 17, 0, void 0, 17, 21, 3, 0],
  89: [18, 1, 21, 9, 11, 9, 0, void 0, 17, 21, 9, 11],
  90: [20, 17, 21, 3, 0, void 0, 3, 21, 17, 21, void 0, 3, 0, 17, 0],
  91: [
    14,
    4,
    25,
    4,
    -7,
    void 0,
    5,
    25,
    5,
    -7,
    void 0,
    4,
    25,
    11,
    25,
    void 0,
    4,
    -7,
    11,
    -7,
  ],
  92: [14, 0, 21, 14, -3],
  93: [
    14,
    9,
    25,
    9,
    -7,
    void 0,
    10,
    25,
    10,
    -7,
    void 0,
    3,
    25,
    10,
    25,
    void 0,
    3,
    -7,
    10,
    -7,
  ],
  94: [
    16,
    6,
    15,
    8,
    18,
    10,
    15,
    void 0,
    3,
    12,
    8,
    17,
    13,
    12,
    void 0,
    8,
    17,
    8,
    0,
  ],
  95: [16, 0, -2, 16, -2],
  96: [10, 6, 21, 5, 20, 4, 18, 4, 16, 5, 15, 6, 16, 5, 17],
  97: [
    19,
    15,
    14,
    15,
    0,
    void 0,
    15,
    11,
    13,
    13,
    11,
    14,
    8,
    14,
    6,
    13,
    4,
    11,
    3,
    8,
    3,
    6,
    4,
    3,
    6,
    1,
    8,
    0,
    11,
    0,
    13,
    1,
    15,
    3,
  ],
  98: [
    19,
    4,
    21,
    4,
    0,
    void 0,
    4,
    11,
    6,
    13,
    8,
    14,
    11,
    14,
    13,
    13,
    15,
    11,
    16,
    8,
    16,
    6,
    15,
    3,
    13,
    1,
    11,
    0,
    8,
    0,
    6,
    1,
    4,
    3,
  ],
  99: [
    18, 15, 11, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8,
    0, 11, 0, 13, 1, 15, 3,
  ],
  100: [
    19,
    15,
    21,
    15,
    0,
    void 0,
    15,
    11,
    13,
    13,
    11,
    14,
    8,
    14,
    6,
    13,
    4,
    11,
    3,
    8,
    3,
    6,
    4,
    3,
    6,
    1,
    8,
    0,
    11,
    0,
    13,
    1,
    15,
    3,
  ],
  101: [
    18, 3, 8, 15, 8, 15, 10, 14, 12, 13, 13, 11, 14, 8, 14, 6, 13, 4, 11, 3, 8,
    3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3,
  ],
  102: [12, 10, 21, 8, 21, 6, 20, 5, 17, 5, 0, void 0, 2, 14, 9, 14],
  103: [
    19,
    15,
    14,
    15,
    -2,
    14,
    -5,
    13,
    -6,
    11,
    -7,
    8,
    -7,
    6,
    -6,
    void 0,
    15,
    11,
    13,
    13,
    11,
    14,
    8,
    14,
    6,
    13,
    4,
    11,
    3,
    8,
    3,
    6,
    4,
    3,
    6,
    1,
    8,
    0,
    11,
    0,
    13,
    1,
    15,
    3,
  ],
  104: [
    19,
    4,
    21,
    4,
    0,
    void 0,
    4,
    10,
    7,
    13,
    9,
    14,
    12,
    14,
    14,
    13,
    15,
    10,
    15,
    0,
  ],
  105: [8, 3, 21, 4, 20, 5, 21, 4, 22, 3, 21, void 0, 4, 14, 4, 0],
  106: [
    10,
    5,
    21,
    6,
    20,
    7,
    21,
    6,
    22,
    5,
    21,
    void 0,
    6,
    14,
    6,
    -3,
    5,
    -6,
    3,
    -7,
    1,
    -7,
  ],
  107: [17, 4, 21, 4, 0, void 0, 14, 14, 4, 4, void 0, 8, 8, 15, 0],
  108: [8, 4, 21, 4, 0],
  109: [
    30,
    4,
    14,
    4,
    0,
    void 0,
    4,
    10,
    7,
    13,
    9,
    14,
    12,
    14,
    14,
    13,
    15,
    10,
    15,
    0,
    void 0,
    15,
    10,
    18,
    13,
    20,
    14,
    23,
    14,
    25,
    13,
    26,
    10,
    26,
    0,
  ],
  110: [
    19,
    4,
    14,
    4,
    0,
    void 0,
    4,
    10,
    7,
    13,
    9,
    14,
    12,
    14,
    14,
    13,
    15,
    10,
    15,
    0,
  ],
  111: [
    19, 8, 14, 6, 13, 4, 11, 3, 8, 3, 6, 4, 3, 6, 1, 8, 0, 11, 0, 13, 1, 15, 3,
    16, 6, 16, 8, 15, 11, 13, 13, 11, 14, 8, 14,
  ],
  112: [
    19,
    4,
    14,
    4,
    -7,
    void 0,
    4,
    11,
    6,
    13,
    8,
    14,
    11,
    14,
    13,
    13,
    15,
    11,
    16,
    8,
    16,
    6,
    15,
    3,
    13,
    1,
    11,
    0,
    8,
    0,
    6,
    1,
    4,
    3,
  ],
  113: [
    19,
    15,
    14,
    15,
    -7,
    void 0,
    15,
    11,
    13,
    13,
    11,
    14,
    8,
    14,
    6,
    13,
    4,
    11,
    3,
    8,
    3,
    6,
    4,
    3,
    6,
    1,
    8,
    0,
    11,
    0,
    13,
    1,
    15,
    3,
  ],
  114: [13, 4, 14, 4, 0, void 0, 4, 8, 5, 11, 7, 13, 9, 14, 12, 14],
  115: [
    17, 14, 11, 13, 13, 10, 14, 7, 14, 4, 13, 3, 11, 4, 9, 6, 8, 11, 7, 13, 6,
    14, 4, 14, 3, 13, 1, 10, 0, 7, 0, 4, 1, 3, 3,
  ],
  116: [12, 5, 21, 5, 4, 6, 1, 8, 0, 10, 0, void 0, 2, 14, 9, 14],
  117: [
    19,
    4,
    14,
    4,
    4,
    5,
    1,
    7,
    0,
    10,
    0,
    12,
    1,
    15,
    4,
    void 0,
    15,
    14,
    15,
    0,
  ],
  118: [16, 2, 14, 8, 0, void 0, 14, 14, 8, 0],
  119: [
    22,
    3,
    14,
    7,
    0,
    void 0,
    11,
    14,
    7,
    0,
    void 0,
    11,
    14,
    15,
    0,
    void 0,
    19,
    14,
    15,
    0,
  ],
  120: [17, 3, 14, 14, 0, void 0, 14, 14, 3, 0],
  121: [16, 2, 14, 8, 0, void 0, 14, 14, 8, 0, 6, -4, 4, -6, 2, -7, 1, -7],
  122: [17, 14, 14, 3, 0, void 0, 3, 14, 14, 14, void 0, 3, 0, 14, 0],
  123: [
    14,
    9,
    25,
    7,
    24,
    6,
    23,
    5,
    21,
    5,
    19,
    6,
    17,
    7,
    16,
    8,
    14,
    8,
    12,
    6,
    10,
    void 0,
    7,
    24,
    6,
    22,
    6,
    20,
    7,
    18,
    8,
    17,
    9,
    15,
    9,
    13,
    8,
    11,
    4,
    9,
    8,
    7,
    9,
    5,
    9,
    3,
    8,
    1,
    7,
    0,
    6,
    -2,
    6,
    -4,
    7,
    -6,
    void 0,
    6,
    8,
    8,
    6,
    8,
    4,
    7,
    2,
    6,
    1,
    5,
    -1,
    5,
    -3,
    6,
    -5,
    7,
    -6,
    9,
    -7,
  ],
  124: [8, 4, 25, 4, -7],
  125: [
    14,
    5,
    25,
    7,
    24,
    8,
    23,
    9,
    21,
    9,
    19,
    8,
    17,
    7,
    16,
    6,
    14,
    6,
    12,
    8,
    10,
    void 0,
    7,
    24,
    8,
    22,
    8,
    20,
    7,
    18,
    6,
    17,
    5,
    15,
    5,
    13,
    6,
    11,
    10,
    9,
    6,
    7,
    5,
    5,
    5,
    3,
    6,
    1,
    7,
    0,
    8,
    -2,
    8,
    -4,
    7,
    -6,
    void 0,
    8,
    8,
    6,
    6,
    6,
    4,
    7,
    2,
    8,
    1,
    9,
    -1,
    9,
    -3,
    8,
    -5,
    7,
    -6,
    5,
    -7,
  ],
  126: [
    24,
    3,
    6,
    3,
    8,
    4,
    11,
    6,
    12,
    8,
    12,
    10,
    11,
    14,
    8,
    16,
    7,
    18,
    7,
    20,
    8,
    21,
    10,
    void 0,
    3,
    8,
    4,
    10,
    6,
    11,
    8,
    11,
    10,
    10,
    14,
    7,
    16,
    6,
    18,
    6,
    20,
    7,
    21,
    10,
    21,
    12,
  ],
};
const Xy = Zy,
  Yy = {
    xOffset: 0,
    yOffset: 0,
    input: "?",
    align: "left",
    font: Xy,
    height: 14,
    // == old vector_xxx simplex font height
    lineSpacing: 2.142857142857143,
    // == 30/14 == old vector_xxx ratio
    letterSpacing: 1,
    extrudeOffset: 0,
  },
  Hy = (t, e) => {
    !e && typeof t == "string" && (t = { input: t }), (t = t || {});
    const n = Object.assign({}, Yy, t);
    return (n.input = e || n.input), n;
  };
var Ei = Hy;
const Uy = Ei,
  Wy = (t, e) => {
    const {
      xOffset: n,
      yOffset: s,
      input: o,
      font: r,
      height: c,
      extrudeOffset: a,
    } = Uy(t, e);
    let i = o.charCodeAt(0);
    (!i || !r[i]) && (i = 63);
    const l = [].concat(r[i]),
      f = (c - a) / r.height,
      u = a / 2,
      h = l.shift() * f,
      d = [];
    let p = [];
    for (let g = 0, $ = l.length; g < $; g += 2) {
      const v = f * l[g] + n,
        y = f * l[g + 1] + s + u;
      if (l[g] !== void 0) {
        p.push([v, y]);
        continue;
      }
      d.push(p), (p = []), g--;
    }
    return p.length && d.push(p), { width: h, height: c, segments: d };
  };
var Ai = Wy;
const Ky = Ai,
  Qy = Ei,
  sc = (t, e) => {
    const { x: n, y: s } = Object.assign({ x: 0, y: 0 }, t || {}),
      o = e.segments;
    let r = null,
      c = null;
    for (let a = 0, i = o.length; a < i; a++) {
      r = o[a];
      for (let l = 0, f = r.length; l < f; l++)
        (c = r[l]), (r[l] = [c[0] + n, c[1] + s]);
    }
    return e;
  },
  Jy = (t, e) => {
    const {
      xOffset: n,
      yOffset: s,
      input: o,
      font: r,
      height: c,
      align: a,
      extrudeOffset: i,
      lineSpacing: l,
      letterSpacing: f,
    } = Qy(t, e);
    let [u, h] = [n, s],
      d,
      p,
      g,
      $,
      v,
      y,
      x = { width: 0, segments: [] };
    const m = [];
    let P = [],
      w = 0;
    const E = u,
      A = () => {
        m.push(x), (w = Math.max(w, x.width)), (x = { width: 0, segments: [] });
      };
    for (d = 0, p = o.length; d < p; d++) {
      if (
        ((g = o[d]),
        ($ = Ky(
          { xOffset: u, yOffset: h, font: r, height: c, extrudeOffset: i },
          g,
        )),
        g ===
          `
`)
      ) {
        (u = E), (h -= $.height * l), A();
        continue;
      }
      (v = $.width * f),
        (x.width += v),
        (u += v),
        g !== " " && (x.segments = x.segments.concat($.segments));
    }
    for (x.segments.length && A(), d = 0, p = m.length; d < p; d++)
      (x = m[d]),
        w > x.width &&
          ((y = w - x.width),
          a === "right"
            ? (x = sc({ x: y }, x))
            : a === "center" && (x = sc({ x: y / 2 }, x))),
        (P = P.concat(x.segments));
    return P;
  };
var jy = Jy;
var tw = {
  vectorChar: Ai,
  vectorText: jy,
};
const ew = R,
  nw = F,
  sw = L,
  ow = (t) => {
    let e;
    for (const n of t) {
      let s = 0;
      if (
        (ew.isA(n) && (s = 1),
        nw.isA(n) && (s = 2),
        sw.isA(n) && (s = 3),
        e && s !== e)
      )
        return !1;
      e = s;
    }
    return !0;
  };
var Re = ow;
const rw = (t) => t * 0.017453292519943295;
var cw = rw;
const aw = (t, e) => t - e;
var bi = aw;
const iw = (t, e, n) => {
  let s = 0,
    o = t.length;
  for (; o > s; ) {
    const r = Math.floor((s + o) / 2),
      c = t[r];
    n(e, c) > 0 ? (s = r + 1) : (o = r);
  }
  t.splice(s, 0, e);
};
var lw = iw;
const { TAU: oc } = D,
  fw = (t, e, n) => {
    const s = e > 0 ? (t * oc) / e : 0,
      o = n > 0 ? oc / n : 0;
    return Math.ceil(Math.max(s, o, 4));
  };
var uw = fw;
const hw = (t) => t * 57.29577951308232;
var dw = hw;
var Si = {
  areAllShapesTheSameType: Re,
  degToRad: cw,
  flatten: V,
  fnNumberSort: bi,
  insertSorted: lw,
  radiusToSegments: uw,
  radToDeg: dw,
};
const rc = G,
  gw = R,
  pw = (t, e) => {
    if (e.vertices.length < 4) return null;
    const n = [],
      s = e.vertices.filter((c, a) => (c[2] > 0 ? (n.push(a), !0) : !1));
    if (s.length !== 2)
      throw new Error(
        "Assertion failed: fromFakePolygon: not enough points found",
      );
    const o = s.map((c) => {
      const a = Math.round(c[0] / t) * t + 0,
        i = Math.round(c[1] / t) * t + 0;
      return rc.fromValues(a, i);
    });
    if (rc.equals(o[0], o[1])) return null;
    const r = n[1] - n[0];
    if (r === 1 || r === 3) r === 1 && o.reverse();
    else
      throw new Error(
        "Assertion failed: fromFakePolygon: unknown index ordering",
      );
    return o;
  },
  $w = (t, e) => {
    const n = e.map((s) => pw(t, s)).filter((s) => s !== null);
    return gw.create(n);
  };
var Js = $w;
const Tt = N,
  mw = R,
  vw = F,
  yw = z,
  ww = (t, e, n) => {
    const s = [
      Tt.fromVec2(Tt.create(), n[0], t),
      Tt.fromVec2(Tt.create(), n[1], t),
      Tt.fromVec2(Tt.create(), n[1], e),
      Tt.fromVec2(Tt.create(), n[0], e),
    ];
    return yw.create(s);
  },
  xw = (t, e) => {
    const s = mw.toSides(e).map((r) => ww(t.z0, t.z1, r));
    return vw.create(s);
  };
var js = xw;
const cc = I,
  Pw = G,
  W = N,
  _i = function (t, e) {
    arguments.length < 2 && (e = W.orthogonal(W.create(), t)),
      (this.v = W.normalize(W.create(), W.cross(W.create(), t, e))),
      (this.u = W.cross(W.create(), this.v, t)),
      (this.plane = t),
      (this.planeorigin = W.scale(W.create(), t, t[3]));
  };
_i.prototype = {
  getProjectionMatrix: function () {
    return cc.fromValues(
      this.u[0],
      this.v[0],
      this.plane[0],
      0,
      this.u[1],
      this.v[1],
      this.plane[1],
      0,
      this.u[2],
      this.v[2],
      this.plane[2],
      0,
      0,
      0,
      -this.plane[3],
      1,
    );
  },
  getInverseProjectionMatrix: function () {
    const t = W.scale(W.create(), this.plane, this.plane[3]);
    return cc.fromValues(
      this.u[0],
      this.u[1],
      this.u[2],
      0,
      this.v[0],
      this.v[1],
      this.v[2],
      0,
      this.plane[0],
      this.plane[1],
      this.plane[2],
      0,
      t[0],
      t[1],
      t[2],
      1,
    );
  },
  to2D: function (t) {
    return Pw.fromValues(W.dot(t, this.u), W.dot(t, this.v));
  },
  to3D: function (t) {
    const e = W.scale(W.create(), this.u, t[0]),
      n = W.scale(W.create(), this.v, t[1]),
      s = W.add(e, e, this.planeorigin);
    return W.add(n, n, s);
  },
};
var Ew = _i;
const { EPS: Pt } = D,
  Mt = Xs,
  ht = G,
  Aw = Ew,
  Wt = Ia,
  { insertSorted: bw, fnNumberSort: Sw } = Si,
  ac = z,
  _w = (t) => {
    if (t.length < 2) return t;
    const e = [],
      n = t.length,
      s = ac.plane(t[0]),
      o = new Aw(s),
      r = [],
      c = [],
      a = /* @__PURE__ */ new Map(),
      i = /* @__PURE__ */ new Map(),
      l = /* @__PURE__ */ new Map(),
      f = 10 / Pt;
    for (let p = 0; p < n; p++) {
      const g = t[p];
      let $ = [],
        v = g.vertices.length,
        y = -1;
      if (v > 0) {
        let x, m;
        for (let P = 0; P < v; P++) {
          let w = o.to2D(g.vertices[P]);
          const E = Math.floor(w[1] * f);
          let A;
          l.has(E)
            ? (A = l.get(E))
            : l.has(E + 1)
              ? (A = l.get(E + 1))
              : l.has(E - 1)
                ? (A = l.get(E - 1))
                : ((A = w[1]), l.set(E, w[1])),
            (w = ht.fromValues(w[0], A)),
            $.push(w);
          const b = w[1];
          (P === 0 || b < x) && ((x = b), (y = P)),
            (P === 0 || b > m) && (m = b);
          let _ = i.get(b);
          _ || ((_ = {}), i.set(b, _)), (_[p] = !0);
        }
        if (x >= m) ($ = []), (v = 0), (y = -1);
        else {
          let P = a.get(x);
          P || ((P = []), a.set(x, P)), P.push(p);
        }
      }
      $.reverse(), (y = v - y - 1), r.push($), c.push(y);
    }
    const u = [];
    i.forEach((p, g) => u.push(g)), u.sort(Sw);
    let h = [],
      d = [];
    for (let p = 0; p < u.length; p++) {
      const g = [],
        $ = u[p],
        v = i.get($);
      for (let x = 0; x < h.length; ++x) {
        const m = h[x],
          P = m.polygonindex;
        if (v[P]) {
          const w = r[P],
            E = w.length;
          let A = m.leftvertexindex,
            b = m.rightvertexindex;
          for (;;) {
            let S = A + 1;
            if ((S >= E && (S = 0), w[S][1] !== $)) break;
            A = S;
          }
          let _ = b - 1;
          if (
            (_ < 0 && (_ = E - 1),
            w[_][1] === $ && (b = _),
            A !== m.leftvertexindex && A === b)
          )
            h.splice(x, 1), --x;
          else {
            (m.leftvertexindex = A),
              (m.rightvertexindex = b),
              (m.topleft = w[A]),
              (m.topright = w[b]);
            let S = A + 1;
            S >= E && (S = 0), (m.bottomleft = w[S]);
            let M = b - 1;
            M < 0 && (M = E - 1), (m.bottomright = w[M]);
          }
        }
      }
      let y;
      if (p >= u.length - 1) (h = []), (y = null);
      else {
        y = Number(u[p + 1]);
        const x = 0.5 * ($ + y),
          m = a.get($);
        for (const P in m) {
          const w = m[P],
            E = r[w],
            A = E.length,
            b = c[w];
          let _ = b;
          for (;;) {
            let C = _ + 1;
            if ((C >= A && (C = 0), E[C][1] !== $ || C === b)) break;
            _ = C;
          }
          let S = b;
          for (;;) {
            let C = S - 1;
            if ((C < 0 && (C = A - 1), E[C][1] !== $ || C === _)) break;
            S = C;
          }
          let M = _ + 1;
          M >= A && (M = 0);
          let q = S - 1;
          q < 0 && (q = A - 1);
          const B = {
            polygonindex: w,
            leftvertexindex: _,
            rightvertexindex: S,
            topleft: E[_],
            topright: E[S],
            bottomleft: E[M],
            bottomright: E[q],
          };
          bw(h, B, (C, k) => {
            const J = Wt(C.topleft, C.bottomleft, x),
              nt = Wt(k.topleft, k.bottomleft, x);
            return J > nt ? 1 : J < nt ? -1 : 0;
          });
        }
      }
      for (const x in h) {
        const m = h[x];
        let P = Wt(m.topleft, m.bottomleft, $);
        const w = ht.fromValues(P, $);
        P = Wt(m.topright, m.bottomright, $);
        const E = ht.fromValues(P, $);
        P = Wt(m.topleft, m.bottomleft, y);
        const A = ht.fromValues(P, y);
        P = Wt(m.topright, m.bottomright, y);
        const b = ht.fromValues(P, y),
          _ = {
            topleft: w,
            topright: E,
            bottomleft: A,
            bottomright: b,
            leftline: Mt.fromPoints(Mt.create(), w, A),
            rightline: Mt.fromPoints(Mt.create(), b, E),
          };
        if (g.length > 0) {
          const S = g[g.length - 1],
            M = ht.distance(_.topleft, S.topright),
            q = ht.distance(_.bottomleft, S.bottomright);
          M < Pt &&
            q < Pt &&
            ((_.topleft = S.topleft),
            (_.leftline = S.leftline),
            (_.bottomleft = S.bottomleft),
            g.splice(g.length - 1, 1));
        }
        g.push(_);
      }
      if (p > 0) {
        const x = /* @__PURE__ */ new Set(),
          m = /* @__PURE__ */ new Set();
        for (let P = 0; P < g.length; P++) {
          const w = g[P];
          for (let E = 0; E < d.length; E++)
            if (!m.has(E)) {
              const A = d[E];
              if (
                ht.distance(A.bottomleft, w.topleft) < Pt &&
                ht.distance(A.bottomright, w.topright) < Pt
              ) {
                m.add(E);
                const b = Mt.direction(w.leftline),
                  _ = Mt.direction(A.leftline),
                  S = b[0] - _[0],
                  M = Mt.direction(w.rightline),
                  q = Mt.direction(A.rightline),
                  B = M[0] - q[0],
                  C = Math.abs(S) < Pt,
                  k = Math.abs(B) < Pt,
                  J = C || S >= 0,
                  nt = k || B >= 0;
                J &&
                  nt &&
                  ((w.outpolygon = A.outpolygon),
                  (w.leftlinecontinues = C),
                  (w.rightlinecontinues = k),
                  x.add(E));
                break;
              }
            }
        }
        for (let P = 0; P < d.length; P++)
          if (!x.has(P)) {
            const w = d[P];
            w.outpolygon.rightpoints.push(w.bottomright),
              ht.distance(w.bottomright, w.bottomleft) > Pt &&
                w.outpolygon.leftpoints.push(w.bottomleft),
              w.outpolygon.leftpoints.reverse();
            const A = w.outpolygon.rightpoints
                .concat(w.outpolygon.leftpoints)
                .map((_) => o.to3D(_)),
              b = ac.fromPointsAndPlane(A, s);
            b.vertices.length && e.push(b);
          }
      }
      for (let x = 0; x < g.length; x++) {
        const m = g[x];
        m.outpolygon
          ? (m.leftlinecontinues || m.outpolygon.leftpoints.push(m.topleft),
            m.rightlinecontinues || m.outpolygon.rightpoints.push(m.topright))
          : ((m.outpolygon = {
              leftpoints: [],
              rightpoints: [],
            }),
            m.outpolygon.leftpoints.push(m.topleft),
            ht.distance(m.topleft, m.topright) > Pt &&
              m.outpolygon.rightpoints.push(m.topright));
      }
      d = g;
    }
    return e;
  };
var Tw = _w;
const ic = F,
  Mw = z,
  { NEPS: kw } = D,
  Nw = Tw,
  Ow = (t) => {
    if (t.isRetesselated) return t;
    const e = ic
        .toPolygons(t)
        .map((r, c) => ({
          vertices: r.vertices,
          plane: Mw.plane(r),
          index: c,
        })),
      n = Bw(e),
      s = [];
    n.forEach((r) => {
      if (Array.isArray(r)) {
        const c = Nw(r);
        s.push(...c);
      } else s.push(r);
    });
    const o = ic.create(s);
    return (o.isRetesselated = !0), o;
  },
  Bw = (t) => {
    let e = [t];
    const n = [];
    for (let o = 3; o >= 0; o--) {
      const r = [],
        c = o === 3 ? 15e-9 : kw;
      e.forEach((a) => {
        a.sort(Vw(o, c));
        let i = 0;
        for (let l = 1; l < a.length; l++)
          a[l].plane[o] - a[i].plane[o] > c &&
            (l - i === 1 ? n.push(a[i]) : r.push(a.slice(i, l)), (i = l));
        a.length - i === 1 ? n.push(a[i]) : r.push(a.slice(i));
      }),
        (e = r);
    }
    const s = [];
    return (
      e.forEach((o) => {
        o[0] && (s[o[0].index] = o);
      }),
      n.forEach((o) => {
        s[o.index] = o;
      }),
      s
    );
  },
  Vw = (t, e) => (n, s) =>
    n.plane[t] - s.plane[t] > e ? 1 : s.plane[t] - n.plane[t] > e ? -1 : 0;
var Fe = Ow;
const { EPS: Kt } = D,
  lc = Dt,
  Rw = (t, e) => {
    if (t.polygons.length === 0 || e.polygons.length === 0) return !1;
    const n = lc(t),
      s = n[0],
      o = n[1],
      r = lc(e),
      c = r[0],
      a = r[1];
    return !(
      c[0] - o[0] > Kt ||
      s[0] - a[0] > Kt ||
      c[1] - o[1] > Kt ||
      s[1] - a[1] > Kt ||
      c[2] - o[2] > Kt ||
      s[2] - a[2] > Kt
    );
  };
var to = Rw;
const fc = vt,
  Fw = z;
let Cw = class Ms {
  constructor(e) {
    (this.plane = null),
      (this.front = null),
      (this.back = null),
      (this.polygontreenodes = []),
      (this.parent = e);
  }
  // Convert solid space to empty space and empty space to solid space.
  invert() {
    const e = [this];
    let n;
    for (let s = 0; s < e.length; s++) {
      (n = e[s]),
        n.plane && (n.plane = fc.flip(fc.create(), n.plane)),
        n.front && e.push(n.front),
        n.back && e.push(n.back);
      const o = n.front;
      (n.front = n.back), (n.back = o);
    }
  }
  // clip polygontreenodes to our plane
  // calls remove() for all clipped PolygonTreeNodes
  clipPolygons(e, n) {
    let s = { node: this, polygontreenodes: e },
      o;
    const r = [];
    do {
      if (((o = s.node), (e = s.polygontreenodes), o.plane)) {
        const c = o.plane,
          a = [],
          i = [],
          l = n ? a : i,
          f = e.length;
        for (let h = 0; h < f; h++) {
          const d = e[h];
          d.isRemoved() || d.splitByPlane(c, l, a, i, a);
        }
        o.front &&
          i.length > 0 &&
          r.push({ node: o.front, polygontreenodes: i });
        const u = a.length;
        if (o.back && u > 0) r.push({ node: o.back, polygontreenodes: a });
        else for (let h = 0; h < u; h++) a[h].remove();
      }
      s = r.pop();
    } while (s !== void 0);
  }
  // Remove all polygons in this BSP tree that are inside the other BSP tree
  // `tree`.
  clipTo(e, n) {
    let s = this;
    const o = [];
    do
      s.polygontreenodes.length > 0 &&
        e.rootnode.clipPolygons(s.polygontreenodes, n),
        s.front && o.push(s.front),
        s.back && o.push(s.back),
        (s = o.pop());
    while (s !== void 0);
  }
  addPolygonTreeNodes(e) {
    let n = { node: this, polygontreenodes: e };
    const s = [];
    do {
      const o = n.node,
        r = n.polygontreenodes;
      if (r.length === 0) {
        n = s.pop();
        continue;
      }
      if (!o.plane) {
        let l = 0;
        l = Math.floor(r.length / 2);
        const f = r[l].getPolygon();
        o.plane = Fw.plane(f);
      }
      const c = [],
        a = [],
        i = r.length;
      for (let l = 0; l < i; ++l)
        r[l].splitByPlane(o.plane, o.polygontreenodes, a, c, a);
      c.length > 0 &&
        (o.front || (o.front = new Ms(o)),
        i === c.length && a.length === 0
          ? (o.front.polygontreenodes = c)
          : s.push({ node: o.front, polygontreenodes: c })),
        a.length > 0 &&
          (o.back || (o.back = new Ms(o)),
          i === a.length && c.length === 0
            ? (o.back.polygontreenodes = a)
            : s.push({ node: o.back, polygontreenodes: a })),
        (n = s.pop());
    } while (n !== void 0);
  }
};
var qw = Cw;
const Qt = N,
  Gw = (t, e, n) => {
    const s = Qt.subtract(Qt.create(), n, e);
    let o = (t[3] - Qt.dot(t, e)) / Qt.dot(t, s);
    return (
      Number.isNaN(o) && (o = 0),
      o > 1 && (o = 1),
      o < 0 && (o = 0),
      Qt.scale(s, s, o),
      Qt.add(s, e, s),
      s
    );
  };
var zw = Gw;
const { EPS: je } = D,
  Dw = vt,
  tn = N,
  as = z,
  Lw = zw,
  Iw = (t, e) => {
    const n = {
        type: null,
        front: null,
        back: null,
      },
      s = e.vertices,
      o = s.length,
      r = as.plane(e);
    if (Dw.equals(r, t)) n.type = 0;
    else {
      let c = !1,
        a = !1;
      const i = [],
        l = -je;
      for (let f = 0; f < o; f++) {
        const u = tn.dot(t, s[f]) - t[3],
          h = u < l;
        i.push(h), u > je && (c = !0), u < l && (a = !0);
      }
      if (!c && !a) {
        const f = tn.dot(t, r);
        n.type = f >= 0 ? 0 : 1;
      } else if (!a) n.type = 2;
      else if (!c) n.type = 3;
      else {
        n.type = 4;
        const f = [],
          u = [];
        let h = i[0];
        for (let p = 0; p < o; p++) {
          const g = s[p];
          let $ = p + 1;
          $ >= o && ($ = 0);
          const v = i[$];
          if (h === v) h ? u.push(g) : f.push(g);
          else {
            const y = s[$],
              x = Lw(t, g, y);
            h
              ? (u.push(g), u.push(x), f.push(x))
              : (f.push(g), f.push(x), u.push(x));
          }
          h = v;
        }
        const d = je * je;
        if (u.length >= 3) {
          let p = u[u.length - 1];
          for (let g = 0; g < u.length; g++) {
            const $ = u[g];
            tn.squaredDistance($, p) < d && (u.splice(g, 1), g--), (p = $);
          }
        }
        if (f.length >= 3) {
          let p = f[f.length - 1];
          for (let g = 0; g < f.length; g++) {
            const $ = f[g];
            tn.squaredDistance($, p) < d && (f.splice(g, 1), g--), (p = $);
          }
        }
        f.length >= 3 && (n.front = as.fromPointsAndPlane(f, r)),
          u.length >= 3 && (n.back = as.fromPointsAndPlane(u, r));
      }
    }
    return n;
  };
var Zw = Iw;
const { EPS: Xw } = D,
  Yw = N,
  uc = z,
  Hw = Zw;
let Uw = class Ti {
  // constructor creates the root node
  constructor(e, n) {
    (this.parent = e),
      (this.children = []),
      (this.polygon = n),
      (this.removed = !1);
  }
  // fill the tree with polygons. Should be called on the root node only; child nodes must
  // always be a derivate (split) of the parent node.
  addPolygons(e) {
    if (!this.isRootNode()) throw new Error("Assertion failed");
    const n = this;
    e.forEach((s) => {
      n.addChild(s);
    });
  }
  // remove a node
  // - the siblings become toplevel nodes
  // - the parent is removed recursively
  remove() {
    if (!this.removed) {
      (this.removed = !0), (this.polygon = null);
      const e = this.parent.children,
        n = e.indexOf(this);
      if (n < 0) throw new Error("Assertion failed");
      e.splice(n, 1), this.parent.recursivelyInvalidatePolygon();
    }
  }
  isRemoved() {
    return this.removed;
  }
  isRootNode() {
    return !this.parent;
  }
  // invert all polygons in the tree. Call on the root node
  invert() {
    if (!this.isRootNode()) throw new Error("Assertion failed");
    this.invertSub();
  }
  getPolygon() {
    if (!this.polygon) throw new Error("Assertion failed");
    return this.polygon;
  }
  getPolygons(e) {
    let n = [this];
    const s = [n];
    let o, r, c, a;
    for (o = 0; o < s.length; ++o)
      for (n = s[o], r = 0, c = n.length; r < c; r++)
        (a = n[r]),
          a.polygon
            ? e.push(a.polygon)
            : a.children.length > 0 && s.push(a.children);
  }
  // split the node by a plane; add the resulting nodes to the frontnodes and backnodes array
  // If the plane doesn't intersect the polygon, the 'this' object is added to one of the arrays
  // If the plane does intersect the polygon, two new child nodes are created for the front and back fragments,
  //  and added to both arrays.
  splitByPlane(e, n, s, o, r) {
    if (this.children.length) {
      const c = [this.children];
      let a, i, l, f, u;
      for (a = 0; a < c.length; a++)
        for (u = c[a], i = 0, l = u.length; i < l; i++)
          (f = u[i]),
            f.children.length > 0
              ? c.push(f.children)
              : f._splitByPlane(e, n, s, o, r);
    } else this._splitByPlane(e, n, s, o, r);
  }
  // only to be called for nodes with no children
  _splitByPlane(e, n, s, o, r) {
    const c = this.polygon;
    if (c) {
      const a = uc.measureBoundingSphere(c),
        i = a[3] + Xw,
        l = a,
        f = Yw.dot(e, l) - e[3];
      if (f > i) o.push(this);
      else if (f < -i) r.push(this);
      else {
        const u = Hw(e, c);
        switch (u.type) {
          case 0:
            n.push(this);
            break;
          case 1:
            s.push(this);
            break;
          case 2:
            o.push(this);
            break;
          case 3:
            r.push(this);
            break;
          case 4:
            if (u.front) {
              const h = this.addChild(u.front);
              o.push(h);
            }
            if (u.back) {
              const h = this.addChild(u.back);
              r.push(h);
            }
            break;
        }
      }
    }
  }
  // PRIVATE methods from here:
  // add child to a node
  // this should be called whenever the polygon is split
  // a child should be created for every fragment of the split polygon
  // returns the newly created child
  addChild(e) {
    const n = new Ti(this, e);
    return this.children.push(n), n;
  }
  invertSub() {
    let e = [this];
    const n = [e];
    let s, o, r, c;
    for (s = 0; s < n.length; s++)
      for (e = n[s], o = 0, r = e.length; o < r; o++)
        (c = e[o]),
          c.polygon && (c.polygon = uc.invert(c.polygon)),
          c.children.length > 0 && n.push(c.children);
  }
  // private method
  // remove the polygon from the node, and all parent nodes above it
  // called to invalidate parents of removed nodes
  recursivelyInvalidatePolygon() {
    (this.polygon = null),
      this.parent && this.parent.recursivelyInvalidatePolygon();
  }
  clear() {
    let e = [this];
    const n = [e];
    for (let s = 0; s < n.length; ++s) {
      e = n[s];
      const o = e.length;
      for (let r = 0; r < o; r++) {
        const c = e[r];
        c.polygon && (c.polygon = null),
          c.parent && (c.parent = null),
          c.children.length > 0 && n.push(c.children),
          (c.children = []);
      }
    }
  }
  toString() {
    let e = "",
      n = [this];
    const s = [n];
    let o, r, c, a;
    for (o = 0; o < s.length; ++o) {
      n = s[o];
      const i = " ".repeat(o);
      for (r = 0, c = n.length; r < c; r++)
        (a = n[r]),
          (e += `${i}PolygonTreeNode (${a.isRootNode()}): ${a.children.length}`),
          a.polygon
            ? (e += `
 ${i}polygon: ${a.polygon.vertices}
`)
            : (e += `
`),
          a.children.length > 0 && s.push(a.children);
    }
    return e;
  }
};
var Ww = Uw;
const Kw = qw,
  Qw = Ww;
let Jw = class {
  constructor(e) {
    (this.polygonTree = new Qw()),
      (this.rootnode = new Kw(null)),
      e && this.addPolygons(e);
  }
  invert() {
    this.polygonTree.invert(), this.rootnode.invert();
  }
  // Remove all polygons in this BSP tree that are inside the other BSP tree
  // `tree`.
  clipTo(e, n = !1) {
    this.rootnode.clipTo(e, n);
  }
  allPolygons() {
    const e = [];
    return this.polygonTree.getPolygons(e), e;
  }
  addPolygons(e) {
    const n = new Array(e.length);
    for (let s = 0; s < e.length; s++) n[s] = this.polygonTree.addChild(e[s]);
    this.rootnode.addPolygonTreeNodes(n);
  }
  clear() {
    this.polygonTree.clear();
  }
  toString() {
    return "Tree: " + this.polygonTree.toString("");
  }
};
var jw = Jw;
var eo = {
  Tree: jw,
};
const en = F,
  t4 = to,
  { Tree: hc } = eo,
  e4 = (t, e) => {
    if (!t4(t, e)) return en.create();
    const n = new hc(en.toPolygons(t)),
      s = new hc(en.toPolygons(e));
    n.invert(),
      s.clipTo(n),
      s.invert(),
      n.clipTo(s),
      s.clipTo(n),
      n.addPolygons(s.allPolygons()),
      n.invert();
    const o = n.allPolygons();
    return en.create(o);
  };
var n4 = e4;
const s4 = V,
  o4 = Fe,
  r4 = n4,
  c4 = (...t) => {
    t = s4(t);
    let e = t.shift();
    return (
      t.forEach((n) => {
        e = r4(e, n);
      }),
      (e = o4(e)),
      e
    );
  };
var Mi = c4;
const a4 = V,
  i4 = F,
  l4 = Ot,
  f4 = Js,
  u4 = js,
  h4 = Mi,
  d4 = (...t) => {
    t = a4(t);
    const e = t.map((o) => u4({ z0: -1, z1: 1 }, o)),
      n = h4(e),
      s = l4(n);
    return f4(s, i4.toPolygons(n));
  };
var g4 = d4;
const p4 = V,
  $4 = Re,
  m4 = R,
  v4 = F,
  y4 = g4,
  w4 = Mi,
  x4 = (...t) => {
    if (((t = p4(t)), t.length === 0))
      throw new Error("wrong number of arguments");
    if (!$4(t)) throw new Error("only intersect of the types are supported");
    const e = t[0];
    return m4.isA(e) ? y4(t) : v4.isA(e) ? w4(t) : e;
  };
var P4 = x4;
const is = N,
  E4 = Ot,
  dc = F,
  A4 = (t) => t.sort((e, n) => e - n).filter((e, n, s) => !n || e !== s[n - 1]),
  b4 = (t, e, n) => {
    const s = `${e}`,
      o = t.get(s);
    o === void 0 ? t.set(s, [n]) : o.push(n);
  },
  S4 = (t, e) => {
    const n = `${e}`;
    return t.get(n);
  },
  _4 = (t) => {
    const e = E4(t),
      n = dc.toPolygons(t),
      s = n.length,
      o = /* @__PURE__ */ new Map(),
      r = is.create();
    n.forEach((f, u) => {
      f.vertices.forEach((h) => {
        b4(o, is.snap(r, h, e), u);
      });
    });
    const c = n.map((f) => {
      let u = [];
      return (
        f.vertices.forEach((h) => {
          u = u.concat(S4(o, is.snap(r, h, e)));
        }),
        { e: 1, d: A4(u) }
      );
    });
    o.clear();
    let a = 0;
    const i = c.length;
    for (let f = 0; f < i; f++) {
      const u = c[f];
      if (u.e > 0) {
        const h = new Array(s);
        h[f] = !0;
        do
          (a = 0),
            h.forEach((d, p) => {
              const g = c[p];
              if (g.e > 0) {
                g.e = -1;
                for (let $ = 0; $ < g.d.length; $++) h[g.d[$]] = !0;
                a++;
              }
            });
        while (a > 0);
        u.indexes = h;
      }
    }
    const l = [];
    for (let f = 0; f < i; f++)
      if (c[f].indexes) {
        const u = [];
        c[f].indexes.forEach((h, d) => u.push(n[d])), l.push(dc.create(u));
      }
    return l;
  };
var T4 = _4;
const M4 = V,
  k4 = F,
  N4 = T4,
  O4 = (...t) => {
    if (((t = M4(t)), t.length === 0))
      throw new Error("wrong number of arguments");
    const e = t.map((n) => (k4.isA(n) ? N4(n) : n));
    return e.length === 1 ? e[0] : e;
  };
var B4 = O4;
const nn = F,
  V4 = to,
  { Tree: gc } = eo,
  R4 = (t, e) => {
    if (!V4(t, e)) return nn.clone(t);
    const n = new gc(nn.toPolygons(t)),
      s = new gc(nn.toPolygons(e));
    n.invert(),
      n.clipTo(s),
      s.clipTo(n, !0),
      n.addPolygons(s.allPolygons()),
      n.invert();
    const o = n.allPolygons();
    return nn.create(o);
  };
var F4 = R4;
const C4 = V,
  q4 = Fe,
  G4 = F4,
  z4 = (...t) => {
    t = C4(t);
    let e = t.shift();
    return (
      t.forEach((n) => {
        e = G4(e, n);
      }),
      (e = q4(e)),
      e
    );
  };
var ki = z4;
const D4 = V,
  L4 = F,
  I4 = Ot,
  Z4 = Js,
  X4 = js,
  Y4 = ki,
  H4 = (...t) => {
    t = D4(t);
    const e = t.map((o) => X4({ z0: -1, z1: 1 }, o)),
      n = Y4(e),
      s = I4(n);
    return Z4(s, L4.toPolygons(n));
  };
var U4 = H4;
const W4 = V,
  K4 = Re,
  Q4 = R,
  J4 = F,
  j4 = U4,
  tx = ki,
  ex = (...t) => {
    if (((t = W4(t)), t.length === 0))
      throw new Error("wrong number of arguments");
    if (!K4(t)) throw new Error("only subtract of the types are supported");
    const e = t[0];
    return Q4.isA(e) ? j4(t) : J4.isA(e) ? tx(t) : e;
  };
var nx = ex;
const ee = F,
  sx = to,
  { Tree: pc } = eo,
  ox = (t, e) => {
    if (!sx(t, e)) return rx(t, e);
    const n = new pc(ee.toPolygons(t)),
      s = new pc(ee.toPolygons(e));
    n.clipTo(s, !1), s.clipTo(n), s.invert(), s.clipTo(n), s.invert();
    const o = n.allPolygons().concat(s.allPolygons());
    return ee.create(o);
  },
  rx = (t, e) => {
    let n = ee.toPolygons(t);
    return (n = n.concat(ee.toPolygons(e))), ee.create(n);
  };
var Ni = ox;
const cx = V,
  ax = Fe,
  ix = Ni,
  lx = (...t) => {
    t = cx(t);
    let e;
    for (e = 1; e < t.length; e += 2) t.push(ix(t[e - 1], t[e]));
    let n = t[e - 1];
    return (n = ax(n)), n;
  };
var Oi = lx;
const fx = V,
  ux = F,
  hx = Ot,
  dx = Js,
  gx = js,
  px = Oi,
  $x = (...t) => {
    t = fx(t);
    const e = t.map((o) => gx({ z0: -1, z1: 1 }, o)),
      n = px(e),
      s = hx(n);
    return dx(s, ux.toPolygons(n));
  };
var Bi = $x;
const mx = V,
  vx = Re,
  yx = R,
  wx = F,
  xx = Bi,
  Px = Oi,
  Ex = (...t) => {
    if (((t = mx(t)), t.length === 0))
      throw new Error("wrong number of arguments");
    if (!vx(t)) throw new Error("only unions of the same type are supported");
    const e = t[0];
    return yx.isA(e) ? xx(t) : wx.isA(e) ? Px(t) : e;
  };
var no = Ex;
var Ax = {
  intersect: P4,
  scission: B4,
  subtract: nx,
  union: no,
};
const { EPS: bx, TAU: Sx } = D,
  $c = Za,
  ye = Xs,
  Y = G,
  _x = En,
  Tx = (t, e) => {
    const n = {
      delta: 1,
      corners: "edge",
      closed: !1,
      segments: 16,
    };
    let {
      delta: s,
      corners: o,
      closed: r,
      segments: c,
    } = Object.assign({}, n, t);
    if (Math.abs(s) < bx) return e;
    let a = t.closed ? _x(e) : 1;
    a === 0 && (a = 1);
    const i = (a > 0 && s >= 0) || (a < 0 && s < 0);
    s = Math.abs(s);
    let l = null,
      f = [];
    const u = [],
      h = Y.create(),
      d = e.length;
    for (let p = 0; p < d; p++) {
      const g = (p + 1) % d,
        $ = e[p],
        v = e[g];
      i ? Y.subtract(h, $, v) : Y.subtract(h, v, $),
        Y.normal(h, h),
        Y.normalize(h, h),
        Y.scale(h, h, s);
      const y = Y.add(Y.create(), $, h),
        x = Y.add(Y.create(), v, h),
        m = [y, x];
      if (l != null && (r || (!r && g !== 0))) {
        const P = $c(l[0], l[1], m[0], m[1]);
        P ? (f.pop(), (m[0] = P)) : u.push({ c: $, s0: l, s1: m });
      }
      (l = [y, x]), !(g === 0 && !r) && (f.push(m[0]), f.push(m[1]));
    }
    if (r && l != null) {
      const p = f[0],
        g = f[1],
        $ = $c(l[0], l[1], p, g);
      if ($) (f[0] = $), f.pop();
      else {
        const v = e[0],
          y = [p, g];
        u.push({ c: v, s0: l, s1: y });
      }
    }
    if (o === "edge") {
      const p = /* @__PURE__ */ new Map();
      f.forEach((v, y) => p.set(v, y));
      const g = ye.create(),
        $ = ye.create();
      u.forEach((v) => {
        ye.fromPoints(g, v.s0[0], v.s0[1]), ye.fromPoints($, v.s1[0], v.s1[1]);
        const y = ye.intersectPointOfLines(g, $);
        if (Number.isFinite(y[0]) && Number.isFinite(y[1])) {
          const x = v.s0[1],
            m = p.get(x);
          (f[m] = y), (f[(m + 1) % f.length] = void 0);
        } else {
          const x = v.s1[0],
            m = p.get(x);
          f[m] = void 0;
        }
      }),
        (f = f.filter((v) => v !== void 0));
    }
    if (o === "round") {
      let p = Math.floor(c / 4);
      const g = Y.create();
      u.forEach(($) => {
        let v = Y.angle(Y.subtract(g, $.s1[0], $.c));
        if (
          ((v -= Y.angle(Y.subtract(g, $.s0[1], $.c))),
          i && v < 0 && ((v = v + Math.PI), v < 0 && (v = v + Math.PI)),
          !i && v > 0 && ((v = v - Math.PI), v > 0 && (v = v - Math.PI)),
          v !== 0)
        ) {
          p = Math.floor(c * (Math.abs(v) / Sx));
          const y = v / p,
            x = Y.angle(Y.subtract(g, $.s0[1], $.c)),
            m = [];
          for (let P = 1; P < p; P++) {
            const w = x + y * P,
              E = Y.fromAngleRadians(Y.create(), w);
            Y.scale(E, E, s), Y.add(E, E, $.c), m.push(E);
          }
          if (m.length > 0) {
            const P = $.s0[1];
            let w = f.findIndex((E) => Y.equals(P, E));
            (w = (w + 1) % f.length), f.splice(w, 0, ...m);
          }
        } else {
          const y = $.s1[0],
            x = f.findIndex((m) => Y.equals(y, m));
          f.splice(x, 1);
        }
      });
    }
    return f;
  };
var kn = Tx;
const sn = R,
  Mx = kn,
  kx = (t, e) => {
    const n = {
        delta: 1,
        corners: "edge",
        segments: 16,
      },
      { delta: s, corners: o, segments: r } = Object.assign({}, n, t);
    if (!(o === "edge" || o === "chamfer" || o === "round"))
      throw new Error('corners must be "edge", "chamfer", or "round"');
    const i = sn
      .toOutlines(e)
      .map(
        (l) => (
          (t = {
            delta: s,
            corners: o,
            closed: !0,
            segments: r,
          }),
          Mx(t, l)
        ),
      )
      .reduce((l, f) => l.concat(sn.toSides(sn.fromPoints(f))), []);
    return sn.create(i);
  };
var Nx = kx;
const mc = I,
  Ox = N,
  Bx = F,
  we = z,
  Vx = (t, e) => {
    Ox.dot(we.plane(e), t) > 0 && (e = we.invert(e));
    const s = [e],
      o = we.transform(mc.fromTranslation(mc.create(), t), e),
      r = e.vertices.length;
    for (let c = 0; c < r; c++) {
      const a = c < r - 1 ? c + 1 : 0,
        i = we.create([
          e.vertices[c],
          o.vertices[c],
          o.vertices[a],
          e.vertices[a],
        ]);
      s.push(i);
    }
    return s.push(we.invert(o)), Bx.create(s);
  };
var Rx = Vx;
const { EPS: Fx, TAU: ls } = D,
  vc = I,
  Z = N,
  Cx = bi,
  fs = F,
  Ct = z,
  qx = gi,
  Gx = Fe,
  us = Ni,
  zx = Rx,
  Dx = (t, e, n) => {
    const s = e.toString();
    if (t.has(s)) t.get(s)[1].push(n);
    else {
      const o = [e, [n]];
      t.set(s, o);
    }
  },
  Lx = (t, e, n) => {
    const s = e[0].toString(),
      o = e[1].toString(),
      r = s < o ? `${s},${o}` : `${o},${s}`;
    if (t.has(r)) t.get(r)[1].push(n);
    else {
      const c = [e, [n]];
      t.set(r, c);
    }
  },
  hs = (t, e) => {
    t.findIndex((s) => s === e) < 0 && t.push(e);
  },
  Ix = (t, e) => {
    const n = {
        delta: 1,
        segments: 12,
      },
      { delta: s, segments: o } = Object.assign({}, n, t);
    let r = fs.create();
    const c = /* @__PURE__ */ new Map(),
      a = /* @__PURE__ */ new Map(),
      i = Z.create(),
      l = Z.create();
    return (
      fs.toPolygons(e).forEach((u, h) => {
        const d = Z.scale(Z.create(), Ct.plane(u), 2 * s),
          p = Ct.transform(
            vc.fromTranslation(vc.create(), Z.scale(Z.create(), d, -0.5)),
            u,
          ),
          g = zx(d, p);
        r = us(r, g);
        const $ = u.vertices;
        for (let v = 0; v < $.length; v++) {
          Dx(c, $[v], Ct.plane(u));
          const y = (v + 1) % $.length,
            x = [$[v], $[y]];
          Lx(a, x, Ct.plane(u));
        }
      }),
      a.forEach((u) => {
        const h = u[0],
          d = u[1],
          p = h[0],
          g = h[1],
          $ = Z.subtract(Z.create(), g, p);
        Z.normalize($, $);
        const v = d[0],
          y = Z.cross(Z.create(), v, $);
        let x = [];
        for (let S = 0; S < o; S++) hs(x, (S * ls) / o);
        for (let S = 0, M = d.length; S < M; S++) {
          const q = d[S],
            B = Z.dot(y, q),
            C = Z.dot(v, q);
          let k = Math.atan2(B, C);
          k < 0 && (k += ls),
            hs(x, k),
            (k = Math.atan2(-B, -C)),
            k < 0 && (k += ls),
            hs(x, k);
        }
        x = x.sort(Cx);
        const m = x.length;
        let P, w;
        const E = [],
          A = [],
          b = [];
        for (let S = -1; S < m; S++) {
          const M = x[S < 0 ? S + m : S],
            q = Math.sin(M),
            B = Math.cos(M);
          Z.scale(i, v, B * s), Z.scale(l, y, q * s), Z.add(i, i, l);
          const C = Z.add(Z.create(), p, i),
            k = Z.add(Z.create(), g, i);
          let J = !1;
          if ((S >= 0 && Z.distance(C, P) < Fx && (J = !0), !J)) {
            if (S >= 0) {
              E.push(C), A.push(k);
              const nt = [w, k, C, P],
                Et = Ct.create(nt);
              b.push(Et);
            }
            (P = C), (w = k);
          }
        }
        A.reverse(), b.push(Ct.create(E)), b.push(Ct.create(A));
        const _ = fs.create(b);
        r = us(r, _);
      }),
      c.forEach((u) => {
        const h = u[0],
          d = u[1],
          p = d[0];
        let g = null,
          $ = 0;
        for (let m = 1; m < d.length; m++) {
          const P = d[m],
            w = Z.cross(i, p, P),
            E = Z.length(w);
          E > 0.05 && E > $ && (($ = E), (g = P));
        }
        g || (g = Z.orthogonal(i, p));
        const v = Z.cross(i, p, g);
        Z.normalize(v, v);
        const y = Z.cross(l, v, p),
          x = qx({
            center: [h[0], h[1], h[2]],
            radius: s,
            segments: o,
            axes: [p, v, y],
          });
        r = us(r, x);
      }),
      Gx(r)
    );
  };
var Zx = Ix;
const Xx = F,
  Yx = no,
  Hx = Zx,
  Ux = (t, e) => {
    const n = {
        delta: 1,
        corners: "round",
        segments: 12,
      },
      { delta: s, corners: o, segments: r } = Object.assign({}, n, t);
    if (o !== "round")
      throw new Error('corners must be "round" for 3D geometries');
    if (Xx.toPolygons(e).length === 0)
      throw new Error("the given geometry cannot be empty");
    t = { delta: s, corners: o, segments: r };
    const a = Hx(t, e);
    return Yx(e, a);
  };
var Wx = Ux;
const Kx = En,
  rt = G,
  jt = R,
  _e = L,
  yc = kn,
  Qx = (t) => {
    let { external: e, internal: n } = t;
    Kx(e) < 0 ? (e = e.reverse()) : (n = n.reverse());
    const s = _e.fromPoints({ closed: !0 }, e),
      o = _e.fromPoints({ closed: !0 }, n),
      r = jt.toSides(jt.fromPoints(_e.toPoints(s))),
      c = jt.toSides(jt.fromPoints(_e.toPoints(o)));
    return r.push(...c), jt.create(r);
  },
  Jx = (t, e, n, s) => {
    const { points: o, external: r, internal: c } = t,
      a = Math.floor(e / 2),
      i = [],
      l = [];
    if (n === "round" && a > 0) {
      const u = Math.PI / a,
        h = o[o.length - 1],
        d = rt.angle(rt.subtract(rt.create(), r[r.length - 1], h)),
        p = o[0],
        g = rt.angle(rt.subtract(rt.create(), c[0], p));
      for (let $ = 1; $ < a; $++) {
        let v = d + u * $,
          y = rt.fromAngleRadians(rt.create(), v);
        rt.scale(y, y, s),
          rt.add(y, y, h),
          i.push(y),
          (v = g + u * $),
          (y = rt.fromAngleRadians(rt.create(), v)),
          rt.scale(y, y, s),
          rt.add(y, y, p),
          l.push(y);
      }
    }
    const f = [];
    return f.push(...r, ...i, ...c.reverse(), ...l), jt.fromPoints(f);
  },
  jx = (t, e) => {
    t = Object.assign(
      {},
      {
        delta: 1,
        corners: "edge",
        segments: 16,
      },
      t,
    );
    const { delta: s, corners: o, segments: r } = t;
    if (s <= 0) throw new Error("the given delta must be positive for paths");
    if (!(o === "edge" || o === "chamfer" || o === "round"))
      throw new Error('corners must be "edge", "chamfer", or "round"');
    const c = e.isClosed,
      a = _e.toPoints(e);
    if (a.length === 0) throw new Error("the given geometry cannot be empty");
    const i = {
      points: a,
      external: yc({ delta: s, corners: o, segments: r, closed: c }, a),
      internal: yc({ delta: -s, corners: o, segments: r, closed: c }, a),
    };
    return e.isClosed ? Qx(i) : Jx(i, r, o, s);
  };
var tP = jx;
const eP = V,
  nP = R,
  sP = F,
  oP = L,
  rP = Nx,
  cP = Wx,
  aP = tP,
  iP = (t, ...e) => {
    if (((e = eP(e)), e.length === 0))
      throw new Error("wrong number of arguments");
    const n = e.map((s) =>
      oP.isA(s) ? aP(t, s) : nP.isA(s) ? rP(t, s) : sP.isA(s) ? cP(t, s) : s,
    );
    return n.length === 1 ? n[0] : n;
  };
var so = iP;
const on = R,
  wc = zs,
  lP = kn,
  fP = (t, e) => {
    const n = {
        delta: 1,
        corners: "edge",
        segments: 0,
      },
      { delta: s, corners: o, segments: r } = Object.assign({}, n, t);
    if (!(o === "edge" || o === "chamfer" || o === "round"))
      throw new Error('corners must be "edge", "chamfer", or "round"');
    const c = on.toOutlines(e),
      i = c
        .map(
          (l) => (
            (t = {
              delta:
                c.reduce((h, d) => h + wc.arePointsInside(l, wc.create(d)), 0) %
                  2 ===
                0
                  ? s
                  : -s,
              corners: o,
              closed: !0,
              segments: r,
            }),
            lP(t, l)
          ),
        )
        .reduce((l, f) => l.concat(on.toSides(on.fromPoints(f))), []);
    return on.create(i);
  };
var uP = fP;
const xc = L,
  hP = kn,
  dP = (t, e) => {
    const n = {
        delta: 1,
        corners: "edge",
        closed: e.isClosed,
        segments: 16,
      },
      {
        delta: s,
        corners: o,
        closed: r,
        segments: c,
      } = Object.assign({}, n, t);
    if (!(o === "edge" || o === "chamfer" || o === "round"))
      throw new Error('corners must be "edge", "chamfer", or "round"');
    t = { delta: s, corners: o, closed: r, segments: c };
    const a = hP(t, xc.toPoints(e));
    return xc.fromPoints({ closed: r }, a);
  };
var gP = dP;
const pP = V,
  $P = R,
  mP = L,
  vP = uP,
  yP = gP,
  wP = (t, ...e) => {
    if (((e = pP(e)), e.length === 0))
      throw new Error("wrong number of arguments");
    const n = e.map((s) => (mP.isA(s) ? yP(t, s) : $P.isA(s) ? vP(t, s) : s));
    return n.length === 1 ? n[0] : n;
  };
var xP = wP;
var PP = {
  expand: so,
  offset: xP,
};
const xe = I,
  ds = N,
  EP = R,
  gs = ie,
  AP = _n,
  bP = (t, e) => {
    const n = {
      offset: [0, 0, 1],
      twistAngle: 0,
      twistSteps: 12,
      repair: !0,
    };
    let {
      offset: s,
      twistAngle: o,
      twistSteps: r,
      repair: c,
    } = Object.assign({}, n, t);
    if (r < 1) throw new Error("twistSteps must be 1 or more");
    o === 0 && (r = 1);
    const a = ds.clone(s),
      i = EP.toSides(e);
    if (i.length === 0) throw new Error("the given geometry cannot be empty");
    const l = gs.fromSides(i);
    a[2] < 0 && gs.reverse(l, l);
    const f = xe.create(),
      u = (h, d, p) => {
        const g = (d / r) * o,
          $ = ds.scale(ds.create(), a, d / r);
        return (
          xe.multiply(
            f,
            xe.fromZRotation(f, g),
            xe.fromTranslation(xe.create(), $),
          ),
          gs.transform(f, p)
        );
      };
    return (
      (t = {
        numberOfSlices: r + 1,
        capStart: !0,
        capEnd: !0,
        repair: c,
        callback: u,
      }),
      AP(t, l)
    );
  };
var Nn = bP;
const SP = R,
  _P = L,
  TP = Nn,
  MP = (t, e) => {
    if (!e.isClosed) throw new Error("extruded path must be closed");
    const n = _P.toPoints(e),
      s = SP.fromPoints(n);
    return TP(t, s);
  };
var kP = MP;
const NP = V,
  OP = R,
  BP = L,
  VP = Nn,
  RP = kP,
  FP = (t, ...e) => {
    const n = {
        height: 1,
        twistAngle: 0,
        twistSteps: 1,
        repair: !0,
      },
      {
        height: s,
        twistAngle: o,
        twistSteps: r,
        repair: c,
      } = Object.assign({}, n, t);
    if (((e = NP(e)), e.length === 0))
      throw new Error("wrong number of arguments");
    t = { offset: [0, 0, s], twistAngle: o, twistSteps: r, repair: c };
    const a = e.map((i) => (BP.isA(i) ? RP(t, i) : OP.isA(i) ? VP(t, i) : i));
    return a.length === 1 ? a[0] : a;
  };
var CP = FP;
const qP = L,
  GP = so,
  zP = Nn,
  DP = (t, e) => {
    const n = {
        size: 1,
        height: 1,
      },
      { size: s, height: o } = Object.assign({}, n, t);
    if (((t.delta = s), (t.offset = [0, 0, o]), qP.toPoints(e).length === 0))
      throw new Error("the given geometry cannot be empty");
    const c = GP(t, e);
    return zP(t, c);
  };
var LP = DP;
const { area: IP } = Be,
  ps = R,
  ZP = L,
  XP = so,
  YP = Nn,
  HP = (t, e) => {
    const n = {
        size: 1,
        height: 1,
      },
      { size: s, height: o } = Object.assign({}, n, t);
    (t.delta = s), (t.offset = [0, 0, o]);
    const r = ps.toOutlines(e);
    if (r.length === 0) throw new Error("the given geometry cannot be empty");
    const a = r
        .map(
          (l) => (
            IP(l) < 0 && l.reverse(), XP(t, ZP.fromPoints({ closed: !0 }, l))
          ),
        )
        .reduce((l, f) => l.concat(ps.toSides(f)), []),
      i = ps.create(a);
    return YP(t, i);
  };
var UP = HP;
const WP = V,
  KP = R,
  QP = L,
  JP = LP,
  jP = UP,
  tE = (t, ...e) => {
    const n = {
        size: 1,
        height: 1,
      },
      { size: s, height: o } = Object.assign({}, n, t);
    if (((e = WP(e)), e.length === 0))
      throw new Error("wrong number of arguments");
    if (s <= 0) throw new Error("size must be positive");
    if (o <= 0) throw new Error("height must be positive");
    const r = e.map((c) => (QP.isA(c) ? JP(t, c) : KP.isA(c) ? jP(t, c) : c));
    return r.length === 1 ? r[0] : r;
  };
var eE = tE;
const { TAU: Pe } = D,
  $s = ie,
  gt = I,
  nE = _n,
  sE = R,
  oE = (t, e) => {
    const n = {
        angle: Pe,
        startAngle: 0,
        pitch: 10,
        endOffset: 0,
        segmentsPerRotation: 32,
      },
      {
        angle: s,
        endOffset: o,
        segmentsPerRotation: r,
        startAngle: c,
      } = Object.assign({}, n, t);
    let a;
    if (
      (!t.pitch && t.height
        ? (a = t.height / (s / Pe))
        : (a = t.pitch ? t.pitch : n.pitch),
      r < 3)
    )
      throw new Error(
        "The number of segments per rotation needs to be at least 3.",
      );
    const l = sE.toSides(e);
    if (l.length === 0) throw new Error("the given geometry cannot be empty");
    const f = l.filter((v) => v[0][0] >= 0);
    let u = $s.fromSides(l);
    f.length === 0 && (u = $s.reverse(u));
    const h = Math.round((r / Pe) * Math.abs(s)),
      d = h >= 2 ? h : 2,
      p = gt.create();
    let g;
    const $ = (v, y, x) => {
      const m = c + (s / d) * y,
        P = (o / d) * y,
        w = ((m - c) / Pe) * a;
      return (
        gt.multiply(
          p,
          // then apply offsets
          gt.fromTranslation(gt.create(), [P, 0, w * Math.sign(s)]),
          // first rotate "flat" 2D shape from XY to XZ plane
          gt.fromXRotation(gt.create(), (-Pe / 4) * Math.sign(s)),
          // rotate the slice correctly to not create inside-out polygon
        ),
        (g = gt.create()),
        gt.multiply(
          g,
          // finally rotate around Z axis
          gt.fromZRotation(gt.create(), m),
          p,
        ),
        $s.transform(g, x)
      );
    };
    return nE(
      {
        // "base" slice is counted as segment, so add one for complete final rotation
        numberOfSlices: d + 1,
        callback: $,
      },
      u,
    );
  };
var rE = oE;
const cE = V,
  Pc = Zs,
  ms = vt,
  Ec = I,
  Ac = R,
  Vi = F,
  Jt = z,
  aE = Ot,
  iE = Bi,
  lE = (t, e) => {
    const n = ms.fromNormalAndPoint(ms.create(), t.axis, t.origin);
    if (
      Number.isNaN(n[0]) ||
      Number.isNaN(n[1]) ||
      Number.isNaN(n[2]) ||
      Number.isNaN(n[3])
    )
      throw new Error("project: invalid axis or origin");
    const s = aE(e),
      o = (s * s * Math.sqrt(3)) / 4;
    if (s === 0) return Ac.create();
    const r = Vi.toPolygons(e);
    let c = [];
    for (let i = 0; i < r.length; i++) {
      const l = r[i].vertices.map((h) => ms.projectionOfPoint(n, h)),
        f = Jt.create(l),
        u = Jt.plane(f);
      Pc(n, u) && (Jt.measureArea(f) < o || c.push(f));
    }
    if (!Pc(n, [0, 0, 1])) {
      const i = Ec.fromVectorRotation(Ec.create(), n, [0, 0, 1]);
      c = c.map((l) => Jt.transform(i, l));
    }
    c = c.sort((i, l) => Jt.measureArea(l) - Jt.measureArea(i));
    const a = c.map((i) => Ac.fromPoints(i.vertices));
    return iE(a);
  },
  fE = (t, ...e) => {
    const n = {
        axis: [0, 0, 1],
        // Z axis
        origin: [0, 0, 0],
      },
      { axis: s, origin: o } = Object.assign({}, n, t);
    if (((e = cE(e)), e.length === 0))
      throw new Error("wrong number of arguments");
    t = { axis: s, origin: o };
    const r = e.map((c) => (Vi.isA(c) ? lE(t, c) : c));
    return r.length === 1 ? r[0] : r;
  };
var uE = fE;
var hE = {
  extrudeFromSlices: _n,
  extrudeLinear: CP,
  extrudeRectangular: eE,
  extrudeRotate: Pi,
  extrudeHelical: rE,
  project: uE,
  slice: ie,
};
const bc = G,
  dE = (t) => {
    let e = bc.fromValues(1 / 0, 1 / 0);
    t.forEach((o) => {
      (o[1] < e[1] || (o[1] === e[1] && o[0] < e[0])) && (e = o);
    });
    const n = [];
    t.forEach((o) => {
      const r = pE(o[1] - e[1], o[0] - e[0]),
        c = bc.squaredDistance(o, e);
      n.push({ point: o, angle: r, distSq: c });
    }),
      n.sort((o, r) =>
        o.angle !== r.angle ? o.angle - r.angle : o.distSq - r.distSq,
      );
    const s = [];
    return (
      n.forEach((o) => {
        let r = s.length;
        for (; r > 1 && gE(s[r - 2], s[r - 1], o.point) <= Number.EPSILON; )
          s.pop(), (r = s.length);
        s.push(o.point);
      }),
      s
    );
  },
  gE = (t, e, n) =>
    (e[0] - t[0]) * (n[1] - t[1]) - (e[1] - t[1]) * (n[0] - t[0]),
  pE = (t, e) => (t === 0 && e === 0 ? -1 / 0 : -e / t);
var oo = dE;
const Sc = R,
  _c = F,
  Tc = L,
  $E = (t) => {
    const e = /* @__PURE__ */ new Set(),
      n = [],
      s = (o) => {
        const r = o.toString();
        e.has(r) || (n.push(o), e.add(r));
      };
    return (
      t.forEach((o) => {
        Sc.isA(o)
          ? Sc.toPoints(o).forEach(s)
          : _c.isA(o)
            ? _c.toPoints(o).forEach((r) => r.forEach(s))
            : Tc.isA(o) && Tc.toPoints(o).forEach(s);
      }),
      n
    );
  };
var ro = $E;
const mE = V,
  vE = L,
  yE = oo,
  wE = ro,
  xE = (...t) => {
    t = mE(t);
    const e = wE(t),
      n = yE(e);
    return vE.fromPoints({ closed: !0 }, n);
  };
var PE = xE;
const EE = V,
  Mc = R,
  AE = oo,
  bE = ro,
  SE = (...t) => {
    t = EE(t);
    const e = bE(t),
      n = AE(e);
    return n.length < 3 ? Mc.create() : Mc.fromPoints(n);
  };
var _E = SE;
const TE = z,
  ME = ua,
  kE = (t) =>
    ME(t, { skipTriangulation: !0 }).map((s) => {
      const o = s.map((r) => t[r]);
      return TE.create(o);
    });
var Ri = kE;
const NE = V,
  kc = F,
  OE = ro,
  BE = Ri,
  VE = (...t) => {
    t = NE(t);
    const e = OE(t);
    return e.length === 0 ? kc.create() : kc.create(BE(e));
  };
var RE = VE;
const FE = V,
  CE = Re,
  qE = R,
  GE = F,
  zE = L,
  DE = PE,
  LE = _E,
  IE = RE,
  ZE = (...t) => {
    if (((t = FE(t)), t.length === 0))
      throw new Error("wrong number of arguments");
    if (!CE(t)) throw new Error("only hulls of the same type are supported");
    const e = t[0];
    return zE.isA(e) ? DE(t) : qE.isA(e) ? LE(t) : GE.isA(e) ? IE(t) : e;
  };
var Fi = ZE;
const XE = V,
  YE = no,
  HE = Fi,
  UE = (...t) => {
    if (((t = XE(t)), t.length < 2))
      throw new Error("wrong number of arguments");
    const e = [];
    for (let n = 1; n < t.length; n++) e.push(HE(t[n - 1], t[n]));
    return YE(e);
  };
var WE = UE;
var KE = {
  hull: Fi,
  hullChain: WE,
  hullPoints2: oo,
  hullPoints3: Ri,
};
const vs = N,
  Ci = z,
  QE = (t, e) => {
    const n = Math.abs(Ci.measureArea(e));
    return Number.isFinite(n) && n > t;
  },
  JE = (t, e) => {
    let n = e.map((o) => {
      const r = o.vertices.map((i) => vs.snap(vs.create(), i, t)),
        c = [];
      for (let i = 0; i < r.length; i++) {
        const l = (i + 1) % r.length;
        vs.equals(r[i], r[l]) || c.push(r[i]);
      }
      const a = Ci.create(c);
      return o.color && (a.color = o.color), a;
    });
    const s = (t * t * Math.sqrt(3)) / 4;
    return (n = n.filter((o) => QE(s, o))), n;
  };
var qi = JE;
const jE = Zs,
  te = N,
  gn = z,
  tA = (t) => {
    const e = gn.toPoints(t),
      n = [];
    for (let s = 0; s < e.length; s++) {
      const o = (s + 1) % e.length,
        r = {
          v1: e[s],
          v2: e[o],
        };
      n.push(r);
    }
    for (let s = 0; s < n.length; s++) {
      const o = (s + 1) % e.length;
      (n[s].next = n[o]), (n[o].prev = n[s]);
    }
    return n;
  },
  eA = (t, e) => {
    const n = `${e.v1}:${e.v2}`;
    t.set(n, e);
  },
  ys = (t, e) => {
    const n = `${e.v1}:${e.v2}`;
    t.delete(n);
  },
  nA = (t, e) => {
    const n = `${e.v2}:${e.v1}`;
    return t.get(n);
  },
  sA = (t, e, n) => {
    let s = t.prev.v1,
      o = t.prev.v2,
      r = e.next.v2;
    const c = Nc(s, o, r, n);
    (s = e.prev.v1), (o = e.prev.v2), (r = t.next.v2);
    const a = Nc(s, o, r, n);
    return [c, a];
  },
  oA = te.create(),
  rA = te.create(),
  Nc = (t, e, n, s) => {
    const o = te.subtract(oA, e, t),
      r = te.subtract(rA, n, e);
    return te.cross(o, o, r), te.dot(o, s);
  },
  cA = (t) => {
    let e;
    const n = [];
    for (; t.next; ) {
      const s = t.next;
      n.push(t.v1),
        (t.v1 = null),
        (t.v2 = null),
        (t.next = null),
        (t.prev = null),
        (t = s);
    }
    return n.length > 0 && (e = gn.create(n)), e;
  },
  aA = (t) => {
    if (t.length < 2) return t;
    const e = t[0].plane,
      n = t.slice(),
      s = /* @__PURE__ */ new Map();
    for (; n.length > 0; ) {
      const r = n.shift(),
        c = tA(r);
      for (let a = 0; a < c.length; a++) {
        const i = c[a],
          l = nA(s, i);
        if (l) {
          const f = sA(i, l, e);
          if (f[0] >= 0 && f[1] >= 0) {
            const u = l.next,
              h = i.next;
            (i.prev.next = l.next),
              (i.next.prev = l.prev),
              (l.prev.next = i.next),
              (l.next.prev = i.prev),
              (i.v1 = null),
              (i.v2 = null),
              (i.next = null),
              (i.prev = null),
              ys(s, l),
              (l.v1 = null),
              (l.v2 = null),
              (l.next = null),
              (l.prev = null);
            const d = (p, g, $) => {
              const v = {
                v1: $.v1,
                v2: g.v2,
                next: g.next,
                prev: $.prev,
              };
              ($.prev.next = v),
                (g.next.prev = v),
                ys(p, g),
                (g.v1 = null),
                (g.v2 = null),
                (g.next = null),
                (g.prev = null),
                ys(p, $),
                ($.v1 = null),
                ($.v2 = null),
                ($.next = null),
                ($.prev = null);
            };
            f[0] === 0 && d(s, u, u.prev), f[1] === 0 && d(s, h, h.prev);
          }
        } else i.next && eA(s, i);
      }
    }
    const o = [];
    return (
      s.forEach((r) => {
        const c = cA(r);
        c && o.push(c);
      }),
      s.clear(),
      o
    );
  },
  iA = (t, e) => (Math.abs(t[3] - e[3]) < 15e-8 ? jE(t, e) : !1),
  lA = (t, e) => {
    const n = [];
    e.forEach((o) => {
      const r = n.find((c) => iA(c[0], gn.plane(o)));
      r ? r[1].push(o) : n.push([gn.plane(o), [o]]);
    });
    let s = [];
    return (
      n.forEach((o) => {
        const r = o[1],
          c = aA(r);
        s = s.concat(c);
      }),
      s
    );
  };
var fA = lA;
const Oc = D,
  pt = N,
  uA = z,
  Nt = !1,
  et = (t) => `${t}`,
  Bc = (t, e, n, s, o, r) => {
    const c = et(s),
      a = et(o);
    if (Nt && c === a) throw new Error("assert failed");
    const i = `${c}/${a}`,
      l = `${a}/${c}`;
    if (t.has(l)) return ln(t, e, n, o, s, null), null;
    const f = {
      vertex0: s,
      vertex1: o,
      polygonindex: r,
    };
    return (
      t.has(i) ? t.get(i).push(f) : t.set(i, [f]),
      e.has(c) ? e.get(c).push(i) : e.set(c, [i]),
      n.has(a) ? n.get(a).push(i) : n.set(a, [i]),
      i
    );
  },
  ln = (t, e, n, s, o, r) => {
    const c = et(s),
      a = et(o),
      i = `${c}/${a}`;
    if (Nt && !t.has(i)) throw new Error("assert failed");
    let l = -1;
    const f = t.get(i);
    for (let u = 0; u < f.length; u++) {
      const h = f[u];
      let d = et(h.vertex0);
      if (
        d === c &&
        ((d = et(h.vertex1)), d === a && !(r !== null && h.polygonindex !== r))
      ) {
        l = u;
        break;
      }
    }
    if (Nt && l < 0) throw new Error("assert failed");
    if (
      (f.splice(l, 1),
      f.length === 0 && t.delete(i),
      (l = e.get(c).indexOf(i)),
      Nt && l < 0)
    )
      throw new Error("assert failed");
    if (
      (e.get(c).splice(l, 1),
      e.get(c).length === 0 && e.delete(c),
      (l = n.get(a).indexOf(i)),
      Nt && l < 0)
    )
      throw new Error("assert failed");
    n.get(a).splice(l, 1), n.get(a).length === 0 && n.delete(a);
  },
  hA = (t) => {
    const e = /* @__PURE__ */ new Map();
    for (let n = 0; n < t.length; n++) {
      const s = t[n],
        o = s.vertices.length;
      if (o >= 3) {
        let r = s.vertices[0],
          c = et(r);
        for (let a = 0; a < o; a++) {
          let i = a + 1;
          i === o && (i = 0);
          const l = s.vertices[i],
            f = et(l),
            u = `${c}/${f}`,
            h = `${f}/${c}`;
          if (e.has(h)) {
            const d = e.get(h);
            d.splice(-1, 1), d.length === 0 && e.delete(h);
          } else {
            const d = {
              vertex0: r,
              vertex1: l,
              polygonindex: n,
            };
            e.has(u) ? e.get(u).push(d) : e.set(u, [d]);
          }
          (r = l), (c = f);
        }
      } else
        console.warn("warning: invalid polygon found during insertTjunctions");
    }
    if (e.size > 0) {
      const n = /* @__PURE__ */ new Map(),
        s = /* @__PURE__ */ new Map(),
        o = /* @__PURE__ */ new Map();
      for (const [c, a] of e)
        o.set(c, !0),
          a.forEach((i) => {
            const l = et(i.vertex0),
              f = et(i.vertex1);
            n.has(l) ? n.get(l).push(c) : n.set(l, [c]),
              s.has(f) ? s.get(f).push(c) : s.set(f, [c]);
          });
      const r = t.slice(0);
      for (; e.size !== 0; ) {
        for (const a of e.keys()) o.set(a, !0);
        let c = !1;
        for (;;) {
          const a = Array.from(o.keys());
          if (a.length === 0) break;
          const i = a[0];
          let l = !0;
          if (e.has(i)) {
            const f = e.get(i);
            if (Nt && f.length === 0) throw new Error("assert failed");
            const u = f[0];
            for (let h = 0; h < 2; h++) {
              const d = h === 0 ? u.vertex0 : u.vertex1,
                p = h === 0 ? u.vertex1 : u.vertex0,
                g = et(d),
                $ = et(p);
              let v = [];
              h === 0 ? s.has(g) && (v = s.get(g)) : n.has(g) && (v = n.get(g));
              for (let y = 0; y < v.length; y++) {
                const x = v[y],
                  m = e.get(x)[0],
                  P = h === 0 ? m.vertex0 : m.vertex1,
                  w = h === 0 ? m.vertex1 : m.vertex0,
                  E = et(P),
                  A = et(w);
                if (Nt && A !== g) throw new Error("assert failed");
                if (E === $) {
                  ln(e, n, s, d, p, null),
                    ln(e, n, s, p, d, null),
                    (l = !1),
                    (h = 2),
                    (c = !0);
                  break;
                } else {
                  const b = d,
                    _ = p,
                    S = P,
                    M = pt.subtract(pt.create(), S, b),
                    q =
                      pt.dot(pt.subtract(pt.create(), _, b), M) / pt.dot(M, M);
                  if (q > 0 && q < 1) {
                    const B = pt.scale(pt.create(), M, q);
                    if (
                      (pt.add(B, B, b),
                      pt.squaredDistance(B, _) < Oc.EPS * Oc.EPS)
                    ) {
                      const k = m.polygonindex,
                        J = r[k],
                        nt = et(m.vertex1);
                      let Et = -1;
                      for (let qe = 0; qe < J.vertices.length; qe++)
                        if (et(J.vertices[qe]) === nt) {
                          Et = qe;
                          break;
                        }
                      if (Nt && Et < 0) throw new Error("assert failed");
                      const fe = J.vertices.slice(0);
                      fe.splice(Et, 0, p);
                      const Ce = uA.create(fe);
                      (r[k] = Ce), ln(e, n, s, m.vertex0, m.vertex1, k);
                      const It = Bc(e, n, s, m.vertex0, p, k),
                        ao = Bc(e, n, s, p, m.vertex1, k);
                      It !== null && o.set(It, !0),
                        ao !== null && o.set(ao, !0),
                        (l = !1),
                        (h = 2),
                        (c = !0);
                      break;
                    }
                  }
                }
              }
            }
          }
          l && o.delete(i);
        }
        if (!c) break;
      }
      t = r;
    }
    return e.clear(), t;
  };
var dA = hA;
const ws = N,
  xs = z,
  gA = (t, e, n) => {
    const s = e.vertices.length;
    if (s > 3) {
      if (s > 4) {
        const c = [0, 0, 0];
        e.vertices.forEach((a) => ws.add(c, c, a)),
          ws.snap(c, ws.divide(c, c, [s, s, s]), t);
        for (let a = 0; a < s; a++) {
          const i = xs.create([c, e.vertices[a], e.vertices[(a + 1) % s]]);
          e.color && (i.color = e.color), n.push(i);
        }
        return;
      }
      const o = xs.create([e.vertices[0], e.vertices[1], e.vertices[2]]),
        r = xs.create([e.vertices[0], e.vertices[2], e.vertices[3]]);
      e.color && ((o.color = e.color), (r.color = e.color)), n.push(o, r);
      return;
    }
    n.push(e);
  },
  pA = (t, e) => {
    const n = [];
    return (
      e.forEach((s) => {
        gA(t, s, n);
      }),
      n
    );
  };
var $A = pA;
const mA = V,
  vA = Ot,
  yA = R,
  Gi = F,
  wA = L,
  xA = qi,
  PA = fA,
  EA = dA,
  AA = $A,
  bA = (t, e) => e,
  SA = (t, e) => e,
  _A = (t, e) => {
    const n = {
        snap: !1,
        simplify: !1,
        triangulate: !1,
      },
      { snap: s, simplify: o, triangulate: r } = Object.assign({}, n, t),
      c = vA(e);
    let a = Gi.toPolygons(e);
    s && (a = xA(c, a)),
      o && (a = PA(c, a)),
      r && ((a = EA(a)), (a = AA(c, a)));
    const i = Object.assign({}, e);
    return (i.polygons = a), i;
  },
  TA = (t, ...e) => {
    if (((e = mA(e)), e.length === 0))
      throw new Error("wrong number of arguments");
    const n = e.map((s) => {
      if (wA.isA(s)) return bA(t, s);
      if (yA.isA(s)) return SA(t, s);
      if (Gi.isA(s)) return _A(t, s);
      throw new Error("invalid geometry");
    });
    return n.length === 1 ? n[0] : n;
  };
var MA = TA;
const kA = V,
  Gt = G,
  ks = R,
  Ns = F,
  Os = L,
  co = Ot,
  NA = qi,
  OA = (t) => {
    const e = co(t),
      s = Os.toPoints(t).map((o) => Gt.snap(Gt.create(), o, e));
    return Os.create(s);
  },
  BA = (t) => {
    const e = co(t);
    let s = ks
      .toSides(t)
      .map((o) => [
        Gt.snap(Gt.create(), o[0], e),
        Gt.snap(Gt.create(), o[1], e),
      ]);
    return (s = s.filter((o) => !Gt.equals(o[0], o[1]))), ks.create(s);
  },
  VA = (t) => {
    const e = co(t),
      n = Ns.toPolygons(t),
      s = NA(e, n);
    return Ns.create(s);
  },
  RA = (...t) => {
    if (((t = kA(t)), t.length === 0))
      throw new Error("wrong number of arguments");
    const e = t.map((n) =>
      Os.isA(n) ? OA(n) : ks.isA(n) ? BA(n) : Ns.isA(n) ? VA(n) : n,
    );
    return e.length === 1 ? e[0] : e;
  };
var FA = RA;
var CA = {
  generalize: MA,
  snap: FA,
  retessellate: Fe,
};
const qA = (t, e, n) => {
  for (t = t.slice(); t.length < n; ) t.push(e);
  return t;
};
var GA = qA;
const zA = V,
  Vc = GA,
  zi = Ys,
  { translate: DA } = zt,
  LA = (t) => {
    if (!Array.isArray(t.modes) || t.modes.length > 3)
      throw new Error("align(): modes must be an array of length <= 3");
    if (
      ((t.modes = Vc(t.modes, "none", 3)),
      t.modes.filter((e) => ["center", "max", "min", "none"].includes(e))
        .length !== 3)
    )
      throw new Error(
        'align(): all modes must be one of "center", "max" or "min"',
      );
    if (!Array.isArray(t.relativeTo) || t.relativeTo.length > 3)
      throw new Error("align(): relativeTo must be an array of length <= 3");
    if (
      ((t.relativeTo = Vc(t.relativeTo, 0, 3)),
      t.relativeTo.filter((e) => Number.isFinite(e) || e == null).length !== 3)
    )
      throw new Error(
        "align(): all relativeTo values must be a number, or null.",
      );
    if (typeof t.grouped != "boolean")
      throw new Error("align(): grouped must be a boolean value.");
    return t;
  },
  IA = (t, e, n) => {
    for (let s = 0; s < 3; s++)
      t[s] == null &&
        (e[s] === "center"
          ? (t[s] = (n[0][s] + n[1][s]) / 2)
          : e[s] === "max"
            ? (t[s] = n[1][s])
            : e[s] === "min" && (t[s] = n[0][s]));
    return t;
  },
  Rc = (t, e, n) => {
    const s = zi(t),
      o = [0, 0, 0];
    for (let r = 0; r < 3; r++)
      e[r] === "center"
        ? (o[r] = n[r] - (s[0][r] + s[1][r]) / 2)
        : e[r] === "max"
          ? (o[r] = n[r] - s[1][r])
          : e[r] === "min" && (o[r] = n[r] - s[0][r]);
    return DA(o, t);
  },
  ZA = (t, ...e) => {
    (t = Object.assign(
      {},
      {
        modes: ["center", "center", "min"],
        relativeTo: [0, 0, 0],
        grouped: !1,
      },
      t,
    )),
      (t = LA(t));
    let { modes: s, relativeTo: o, grouped: r } = t;
    if (((e = zA(e)), e.length === 0))
      throw new Error("align(): No geometries were provided to act upon");
    if (o.filter((c) => c == null).length) {
      const c = zi(e);
      o = IA(o, s, c);
    }
    return (
      r ? (e = Rc(e, s, o)) : (e = e.map((c) => Rc(c, s, o))),
      e.length === 1 ? e[0] : e
    );
  };
var XA = ZA;
const YA = V,
  HA = R,
  UA = F,
  WA = L,
  KA = Dt,
  { translate: QA } = zt,
  Ps = (t, e) => {
    const n = {
        axes: [!0, !0, !0],
        relativeTo: [0, 0, 0],
      },
      { axes: s, relativeTo: o } = Object.assign({}, n, t),
      r = KA(e),
      c = [0, 0, 0];
    return (
      s[0] && (c[0] = o[0] - (r[0][0] + (r[1][0] - r[0][0]) / 2)),
      s[1] && (c[1] = o[1] - (r[0][1] + (r[1][1] - r[0][1]) / 2)),
      s[2] && (c[2] = o[2] - (r[0][2] + (r[1][2] - r[0][2]) / 2)),
      QA(c, e)
    );
  },
  On = (t, ...e) => {
    const n = {
        axes: [!0, !0, !0],
        relativeTo: [0, 0, 0],
        // TODO: Add additional 'methods' of centering: midpoint, centroid
      },
      { axes: s, relativeTo: o } = Object.assign({}, n, t);
    if (((e = YA(e)), e.length === 0))
      throw new Error("wrong number of arguments");
    if (o.length !== 3)
      throw new Error("relativeTo must be an array of length 3");
    t = { axes: s, relativeTo: o };
    const r = e.map((c) =>
      WA.isA(c) || HA.isA(c) || UA.isA(c) ? Ps(t, c) : c,
    );
    return r.length === 1 ? r[0] : r;
  },
  JA = (...t) => On({ axes: [!0, !1, !1] }, t),
  jA = (...t) => On({ axes: [!1, !0, !1] }, t),
  tb = (...t) => On({ axes: [!1, !1, !0] }, t);
var rn = {
  center: On,
  centerX: JA,
  centerY: jA,
  centerZ: tb,
};
const eb = V,
  Fc = I,
  Cc = R,
  qc = F,
  Gc = L,
  Bn = (t, ...e) => {
    if (!Array.isArray(t)) throw new Error("factors must be an array");
    if (((e = eb(e)), e.length === 0))
      throw new Error("wrong number of arguments");
    for (t = t.slice(); t.length < 3; ) t.push(1);
    if (t[0] <= 0 || t[1] <= 0 || t[2] <= 0)
      throw new Error("factors must be positive");
    const n = Fc.fromScaling(Fc.create(), t),
      s = e.map((o) =>
        Gc.isA(o)
          ? Gc.transform(n, o)
          : Cc.isA(o)
            ? Cc.transform(n, o)
            : qc.isA(o)
              ? qc.transform(n, o)
              : o,
      );
    return s.length === 1 ? s[0] : s;
  },
  nb = (t, ...e) => Bn([t, 1, 1], e),
  sb = (t, ...e) => Bn([1, t, 1], e),
  ob = (t, ...e) => Bn([1, 1, t], e);
var cn = {
  scale: Bn,
  scaleX: nb,
  scaleY: sb,
  scaleZ: ob,
};
const rb = V,
  zc = R,
  Dc = F,
  Lc = L,
  cb = (t, ...e) => {
    if (((e = rb(e)), e.length === 0))
      throw new Error("wrong number of arguments");
    const n = e.map((s) =>
      Lc.isA(s)
        ? Lc.transform(t, s)
        : zc.isA(s)
          ? zc.transform(t, s)
          : Dc.isA(s)
            ? Dc.transform(t, s)
            : s,
    );
    return n.length === 1 ? n[0] : n;
  };
var ab = cb;
var ib = {
  align: XA,
  center: rn.center,
  centerX: rn.centerX,
  centerY: rn.centerY,
  centerZ: rn.centerZ,
  mirror: Ae.mirror,
  mirrorX: Ae.mirrorX,
  mirrorY: Ae.mirrorY,
  mirrorZ: Ae.mirrorZ,
  rotate: Se.rotate,
  rotateX: Se.rotateX,
  rotateY: Se.rotateY,
  rotateZ: Se.rotateZ,
  scale: cn.scale,
  scaleX: cn.scaleX,
  scaleY: cn.scaleY,
  scaleZ: cn.scaleZ,
  transform: ab,
  translate: zt.translate,
  translateX: zt.translateX,
  translateY: zt.translateY,
  translateZ: zt.translateZ,
};
var it = {
  colors: Hg,
  curves: lp,
  geometries: Ds,
  maths: Z5,
  measurements: am,
  primitives: Iy,
  text: tw,
  utils: Si,
  booleans: Ax,
  expansions: PP,
  extrusions: hE,
  hulls: KE,
  modifiers: CA,
  transforms: ib,
};
const $b = it.booleans,
  mb = it.colors,
  vb = it.curves,
  yb = it.expansions,
  wb = it.extrusions,
  xb = it.geometries,
  Pb = it.hulls,
  Eb = it.maths,
  Ab = it.measurements,
  bb = it.modifiers,
  Sb = it.primitives,
  _b = it.text,
  Tb = it.transforms,
  Mb = it.utils;
export {
  $b as booleans,
  mb as colors,
  vb as curves,
  yb as expansions,
  wb as extrusions,
  xb as geometries,
  Pb as hulls,
  Eb as maths,
  Ab as measurements,
  bb as modifiers,
  Sb as primitives,
  _b as text,
  Tb as transforms,
  Mb as utils,
};
