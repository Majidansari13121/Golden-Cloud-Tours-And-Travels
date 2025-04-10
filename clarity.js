/* clarity-js v0.7.63: https://github.com/microsoft/clarity (License: MIT) */
!function() {
    "use strict";
    var t = Object.freeze({
        __proto__: null,
        get queue() {
            return kr
        },
        get start() {
            return wr
        },
        get stop() {
            return Sr
        },
        get track() {
            return vr
        }
    })
      , e = Object.freeze({
        __proto__: null,
        get clone() {
            return qr
        },
        get compute() {
            return Ur
        },
        get data() {
            return Rr
        },
        get keys() {
            return Lr
        },
        get reset() {
            return Fr
        },
        get start() {
            return Xr
        },
        get stop() {
            return Br
        },
        get trigger() {
            return Yr
        },
        get update() {
            return Vr
        }
    })
      , n = Object.freeze({
        __proto__: null,
        get check() {
            return $r
        },
        get compute() {
            return ei
        },
        get data() {
            return Ar
        },
        get start() {
            return Qr
        },
        get stop() {
            return ni
        },
        get trigger() {
            return ti
        }
    })
      , a = Object.freeze({
        __proto__: null,
        get compute() {
            return si
        },
        get data() {
            return ai
        },
        get log() {
            return ci
        },
        get reset() {
            return li
        },
        get start() {
            return oi
        },
        get stop() {
            return ui
        },
        get updates() {
            return ri
        }
    })
      , r = Object.freeze({
        __proto__: null,
        get callback() {
            return Si
        },
        get callbacks() {
            return hi
        },
        get clear() {
            return ki
        },
        get consent() {
            return wi
        },
        get data() {
            return fi
        },
        get electron() {
            return pi
        },
        get id() {
            return bi
        },
        get metadata() {
            return yi
        },
        get save() {
            return Ei
        },
        get shortid() {
            return Ni
        },
        get start() {
            return gi
        },
        get stop() {
            return mi
        }
    })
      , i = Object.freeze({
        __proto__: null,
        get data() {
            return ji
        },
        get envelope() {
            return Li
        },
        get start() {
            return Ai
        },
        get stop() {
            return Ri
        }
    })
      , o = {
        projectId: null,
        delay: 1e3,
        lean: !1,
        track: !0,
        content: !0,
        drop: [],
        mask: [],
        unmask: [],
        regions: [],
        cookies: [],
        fraud: !0,
        checksum: [],
        report: null,
        upload: null,
        fallback: null,
        upgrade: null,
        action: null,
        dob: null,
        delayDom: !1,
        throttleDom: !0,
        conversions: !1,
        longTask: 30,
        includeSubdomains: !0,
        throttleMutations: !1
    };
    function u(t) {
        return window.Zone && "__symbol__"in window.Zone ? window.Zone.__symbol__(t) : t
    }
    var c = 0;
    function s(t) {
        void 0 === t && (t = null);
        var e = t && t.timeStamp > 0 ? t.timeStamp : performance.now()
          , n = t && t.view ? t.view.performance.timeOrigin : performance.timeOrigin;
        return Math.max(Math.round(e + n - c), 0)
    }
    var l = "0.7.63";
    function d(t, e) {
        void 0 === e && (e = null);
        for (var n, a = 5381, r = a, i = 0; i < t.length; i += 2) {
            if (a = (a << 5) + a ^ t.charCodeAt(i),
            i + 1 < t.length)
                r = (r << 5) + r ^ t.charCodeAt(i + 1)
        }
        return n = Math.abs(a + 11579 * r),
        (e ? n % Math.pow(2, e) : n).toString(36)
    }
    var f = /\S/gi
      , h = 255
      , p = !0
      , v = null
      , g = null
      , m = null;
    function y(t, e, n, a, r) {
        if (void 0 === a && (a = !1),
        t) {
            if ("input" == e && ("checkbox" === r || "radio" === r))
                return t;
            switch (n) {
            case 0:
                return t;
            case 1:
                switch (e) {
                case "*T":
                case "value":
                case "placeholder":
                case "click":
                    return function(t) {
                        var e = -1
                          , n = 0
                          , a = !1
                          , r = !1
                          , i = !1
                          , o = null;
                        O();
                        for (var u = 0; u < t.length; u++) {
                            var c = t.charCodeAt(u);
                            if (a = a || c >= 48 && c <= 57,
                            r = r || 64 === c,
                            i = 9 === c || 10 === c || 13 === c || 32 === c,
                            0 === u || u === t.length - 1 || i) {
                                if (a || r) {
                                    null === o && (o = t.split(""));
                                    var s = t.substring(e + 1, i ? u : u + 1);
                                    s = p && null !== m ? s.match(m) ? s : S(s, "▪", "▫") : k(s),
                                    o.splice(e + 1 - n, s.length, s),
                                    n += s.length - 1
                                }
                                i && (a = !1,
                                r = !1,
                                e = u)
                            }
                        }
                        return o ? o.join("") : t
                    }(t);
                case "input":
                case "change":
                    return E(t)
                }
                return t;
            case 2:
            case 3:
                switch (e) {
                case "*T":
                case "data-":
                    return a ? w(t) : k(t);
                case "src":
                case "srcset":
                case "title":
                case "alt":
                    return 3 === n ? "" : t;
                case "value":
                case "click":
                case "input":
                case "change":
                    return E(t);
                case "placeholder":
                    return k(t)
                }
                break;
            case 4:
                switch (e) {
                case "*T":
                case "data-":
                    return a ? w(t) : k(t);
                case "value":
                case "input":
                case "click":
                case "change":
                    return Array(5).join("•");
                case "checksum":
                    return ""
                }
                break;
            case 5:
                switch (e) {
                case "*T":
                case "data-":
                    return S(t, "▪", "▫");
                case "value":
                case "input":
                case "click":
                case "change":
                    return Array(5).join("•");
                case "checksum":
                case "src":
                case "srcset":
                case "alt":
                case "title":
                    return ""
                }
            }
        }
        return t
    }
    function b(t, e, n) {
        void 0 === e && (e = !1),
        void 0 === n && (n = !1);
        var a = t;
        if (e)
            a = "".concat("https://").concat("Electron");
        else {
            var r = o.drop;
            if (r && r.length > 0 && t && t.indexOf("?") > 0) {
                var i = t.split("?")
                  , u = i[0]
                  , c = i[1];
                a = u + "?" + c.split("&").map((function(t) {
                    return r.some((function(e) {
                        return 0 === t.indexOf("".concat(e, "="))
                    }
                    )) ? "".concat(t.split("=")[0], "=").concat("*na*") : t
                }
                )).join("&")
            }
        }
        return n && (a = a.substring(0, h)),
        a
    }
    function w(t) {
        var e = t.trim();
        if (e.length > 0) {
            var n = e[0]
              , a = t.indexOf(n)
              , r = t.substr(0, a)
              , i = t.substr(a + e.length);
            return "".concat(r).concat(e.length.toString(36)).concat(i)
        }
        return t
    }
    function k(t) {
        return t.replace(f, "•")
    }
    function S(t, e, n) {
        return O(),
        t ? t.replace(g, e).replace(v, n) : t
    }
    function E(t) {
        for (var e = 5 * (Math.floor(t.length / 5) + 1), n = "", a = 0; a < e; a++)
            n += a > 0 && a % 5 == 0 ? " " : "•";
        return n
    }
    function O() {
        if (p && null === v)
            try {
                v = new RegExp("\\p{N}","gu"),
                g = new RegExp("\\p{L}","gu"),
                m = new RegExp("\\p{Sc}","gu")
            } catch (t) {
                p = !1
            }
    }
    var T = null
      , N = null
      , M = !1;
    function x() {
        M && (T = {
            time: s(),
            event: 4,
            data: {
                visible: N.visible,
                docWidth: N.docWidth,
                docHeight: N.docHeight,
                screenWidth: N.screenWidth,
                screenHeight: N.screenHeight,
                scrollX: N.scrollX,
                scrollY: N.scrollY,
                pointerX: N.pointerX,
                pointerY: N.pointerY,
                activityTime: N.activityTime,
                scrollTime: N.scrollTime
            }
        }),
        N = N || {
            visible: 1,
            docWidth: 0,
            docHeight: 0,
            screenWidth: 0,
            screenHeight: 0,
            scrollX: 0,
            scrollY: 0,
            pointerX: 0,
            pointerY: 0,
            activityTime: 0,
            scrollTime: 0
        }
    }
    function _(t, e, n, a) {
        switch (t) {
        case 8:
            N.docWidth = e,
            N.docHeight = n;
            break;
        case 11:
            N.screenWidth = e,
            N.screenHeight = n;
            break;
        case 10:
            N.scrollX = e,
            N.scrollY = n,
            N.scrollTime = a;
            break;
        default:
            N.pointerX = e,
            N.pointerY = n
        }
        M = !0
    }
    function I(t) {
        N.activityTime = t
    }
    function C(t, e) {
        N.visible = "visible" === e ? 1 : 0,
        N.visible || I(t),
        M = !0
    }
    function D() {
        M && Zr(4)
    }
    var j = Object.freeze({
        __proto__: null,
        activity: I,
        compute: D,
        reset: x,
        start: function() {
            M = !1,
            x()
        },
        get state() {
            return T
        },
        stop: function() {
            x()
        },
        track: _,
        visibility: C
    })
      , A = null;
    function R(t, e) {
        to() && t && "string" == typeof t && t.length < 255 && (A = e && "string" == typeof e && e.length < 255 ? {
            key: t,
            value: e
        } : {
            value: t
        },
        Zr(24))
    }
    var L, P = null, z = null;
    function H(t) {
        t in P || (P[t] = 0),
        t in z || (z[t] = 0),
        P[t]++,
        z[t]++
    }
    function W(t, e) {
        null !== e && (t in P || (P[t] = 0),
        t in z || (z[t] = 0),
        P[t] += e,
        z[t] += e)
    }
    function X(t, e) {
        null !== e && !1 === isNaN(e) && (t in P || (P[t] = 0),
        (e > P[t] || 0 === P[t]) && (z[t] = e,
        P[t] = e))
    }
    function Y(t, e, n) {
        return window.setTimeout(Hi(t), e, n)
    }
    function q(t) {
        return window.clearTimeout(t)
    }
    var U = 0
      , F = 0
      , V = null;
    function B() {
        V && q(V),
        V = Y(J, F),
        U = s()
    }
    function J() {
        var t = s();
        L = {
            gap: t - U
        },
        Zr(25),
        L.gap < 3e5 ? V = Y(J, F) : Zi && (R("clarity", "suspend"),
        _o(),
        ["mousemove", "touchstart"].forEach((function(t) {
            return Xi(document, t, eo)
        }
        )),
        ["resize", "scroll", "pageshow"].forEach((function(t) {
            return Xi(window, t, eo)
        }
        )))
    }
    var G = Object.freeze({
        __proto__: null,
        get data() {
            return L
        },
        reset: B,
        start: function() {
            F = 6e4,
            U = 0
        },
        stop: function() {
            q(V),
            U = 0,
            F = 0
        }
    })
      , K = null;
    function Z(t, e) {
        if (t in K) {
            var n = K[t]
              , a = n[n.length - 1];
            e - a[0] > 100 ? K[t].push([e, 0]) : a[1] = e - a[0]
        } else
            K[t] = [[e, 0]]
    }
    function Q() {
        Zr(36)
    }
    function $() {
        K = {}
    }
    var tt = Object.freeze({
        __proto__: null,
        compute: Q,
        get data() {
            return K
        },
        reset: $,
        start: function() {
            K = {}
        },
        stop: function() {
            K = {}
        },
        track: Z
    })
      , et = null;
    function nt(t) {
        to() && o.lean && (o.lean = !1,
        et = {
            key: t
        },
        Si(),
        Ei(),
        o.upgrade && o.upgrade(t),
        Zr(3))
    }
    var at = Object.freeze({
        __proto__: null,
        get data() {
            return et
        },
        start: function() {
            !o.lean && o.upgrade && o.upgrade("Config"),
            et = null
        },
        stop: function() {
            et = null
        },
        upgrade: nt
    });
    function rt(t, e, n, a) {
        return new (n || (n = Promise))((function(r, i) {
            function o(t) {
                try {
                    c(a.next(t))
                } catch (t) {
                    i(t)
                }
            }
            function u(t) {
                try {
                    c(a.throw(t))
                } catch (t) {
                    i(t)
                }
            }
            function c(t) {
                var e;
                t.done ? r(t.value) : (e = t.value,
                e instanceof n ? e : new n((function(t) {
                    t(e)
                }
                ))).then(o, u)
            }
            c((a = a.apply(t, e || [])).next())
        }
        ))
    }
    function it(t, e) {
        var n, a, r, i, o = {
            label: 0,
            sent: function() {
                if (1 & r[0])
                    throw r[1];
                return r[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        },
        "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }
        ),
        i;
        function u(u) {
            return function(c) {
                return function(u) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; i && (i = 0,
                    u[0] && (o = 0)),
                    o; )
                        try {
                            if (n = 1,
                            a && (r = 2 & u[0] ? a.return : u[0] ? a.throw || ((r = a.return) && r.call(a),
                            0) : a.next) && !(r = r.call(a, u[1])).done)
                                return r;
                            switch (a = 0,
                            r && (u = [2 & u[0], r.value]),
                            u[0]) {
                            case 0:
                            case 1:
                                r = u;
                                break;
                            case 4:
                                return o.label++,
                                {
                                    value: u[1],
                                    done: !1
                                };
                            case 5:
                                o.label++,
                                a = u[1],
                                u = [0];
                                continue;
                            case 7:
                                u = o.ops.pop(),
                                o.trys.pop();
                                continue;
                            default:
                                if (!(r = o.trys,
                                (r = r.length > 0 && r[r.length - 1]) || 6 !== u[0] && 2 !== u[0])) {
                                    o = 0;
                                    continue
                                }
                                if (3 === u[0] && (!r || u[1] > r[0] && u[1] < r[3])) {
                                    o.label = u[1];
                                    break
                                }
                                if (6 === u[0] && o.label < r[1]) {
                                    o.label = r[1],
                                    r = u;
                                    break
                                }
                                if (r && o.label < r[2]) {
                                    o.label = r[2],
                                    o.ops.push(u);
                                    break
                                }
                                r[2] && o.ops.pop(),
                                o.trys.pop();
                                continue
                            }
                            u = e.call(t, o)
                        } catch (t) {
                            u = [6, t],
                            a = 0
                        } finally {
                            n = r = 0
                        }
                    if (5 & u[0])
                        throw u[1];
                    return {
                        value: u[0] ? u[1] : void 0,
                        done: !0
                    }
                }([u, c])
            }
        }
    }
    var ot = null;
    function ut(t, e) {
        st(t, "string" == typeof e ? [e] : e)
    }
    function ct(t, e, n, a) {
        return void 0 === e && (e = null),
        void 0 === n && (n = null),
        void 0 === a && (a = null),
        rt(this, void 0, void 0, (function() {
            var r, i;
            return it(this, (function(o) {
                switch (o.label) {
                case 0:
                    return i = {},
                    [4, ft(t)];
                case 1:
                    return i.userId = o.sent(),
                    i.userHint = a || ((u = t) && u.length >= 5 ? "".concat(u.substring(0, 2)).concat(S(u.substring(2), "*", "*")) : S(u, "*", "*")),
                    st("userId", [(r = i).userId]),
                    st("userHint", [r.userHint]),
                    st("userType", [ht(t)]),
                    e && (st("sessionId", [e]),
                    r.sessionId = e),
                    n && (st("pageId", [n]),
                    r.pageId = n),
                    [2, r]
                }
                var u
            }
            ))
        }
        ))
    }
    function st(t, e) {
        if (to() && t && e && "string" == typeof t && t.length < 255) {
            for (var n = (t in ot ? ot[t] : []), a = 0; a < e.length; a++)
                "string" == typeof e[a] && e[a].length < 255 && n.push(e[a]);
            ot[t] = n
        }
    }
    function lt() {
        Zr(34)
    }
    function dt() {
        ot = {}
    }
    function ft(t) {
        return rt(this, void 0, void 0, (function() {
            var e;
            return it(this, (function(n) {
                switch (n.label) {
                case 0:
                    return n.trys.push([0, 4, , 5]),
                    crypto && t ? [4, crypto.subtle.digest("SHA-256", (new TextEncoder).encode(t))] : [3, 2];
                case 1:
                    return e = n.sent(),
                    [2, Array.prototype.map.call(new Uint8Array(e), (function(t) {
                        return ("00" + t.toString(16)).slice(-2)
                    }
                    )).join("")];
                case 2:
                    return [2, ""];
                case 3:
                    return [3, 5];
                case 4:
                    return n.sent(),
                    [2, ""];
                case 5:
                    return [2]
                }
            }
            ))
        }
        ))
    }
    function ht(t) {
        return t && t.indexOf("@") > 0 ? "email" : "string"
    }
    var pt = "CompressionStream"in window;
    function vt(t) {
        return rt(this, void 0, void 0, (function() {
            var e, n;
            return it(this, (function(a) {
                switch (a.label) {
                case 0:
                    return a.trys.push([0, 3, , 4]),
                    pt ? (e = new ReadableStream({
                        start: function(e) {
                            return rt(this, void 0, void 0, (function() {
                                return it(this, (function(n) {
                                    return e.enqueue(t),
                                    e.close(),
                                    [2]
                                }
                                ))
                            }
                            ))
                        }
                    }).pipeThrough(new TextEncoderStream).pipeThrough(new window.CompressionStream("gzip")),
                    n = Uint8Array.bind,
                    [4, gt(e)]) : [3, 2];
                case 1:
                    return [2, new (n.apply(Uint8Array, [void 0, a.sent()]))];
                case 2:
                    return [3, 4];
                case 3:
                    return a.sent(),
                    [3, 4];
                case 4:
                    return [2, null]
                }
            }
            ))
        }
        ))
    }
    function gt(t) {
        return rt(this, void 0, void 0, (function() {
            var e, n, a, r, i;
            return it(this, (function(o) {
                switch (o.label) {
                case 0:
                    e = t.getReader(),
                    n = [],
                    a = !1,
                    r = [],
                    o.label = 1;
                case 1:
                    return a ? [3, 3] : [4, e.read()];
                case 2:
                    return i = o.sent(),
                    a = i.done,
                    r = i.value,
                    a ? [2, n] : (n.push.apply(n, r),
                    [3, 1]);
                case 3:
                    return [2, n]
                }
            }
            ))
        }
        ))
    }
    var mt = null;
    function yt(t) {
        try {
            if (!mt)
                return;
            var e = function(t) {
                try {
                    return JSON.parse(t)
                } catch (t) {
                    return []
                }
            }(t);
            e.forEach((function(t) {
                mt(t)
            }
            ))
        } catch (t) {}
    }
    var bt = [j, a, Object.freeze({
        __proto__: null,
        compute: lt,
        get data() {
            return ot
        },
        identify: ct,
        reset: dt,
        set: ut,
        start: function() {
            dt()
        },
        stop: function() {
            dt()
        }
    }), n, tt, r, i, t, G, at, e];
    function wt() {
        P = {},
        z = {},
        H(5),
        bt.forEach((function(t) {
            return Hi(t.start)()
        }
        ))
    }
    function kt() {
        bt.slice().reverse().forEach((function(t) {
            return Hi(t.stop)()
        }
        )),
        P = {},
        z = {}
    }
    function St() {
        lt(),
        D(),
        si(),
        Zr(0),
        Q(),
        ei(),
        Ur()
    }
    var Et, Ot = [];
    function Tt(t, e, n) {
        o.fraud && null !== t && n && n.length >= 5 && (Et = {
            id: t,
            target: e,
            checksum: d(n, 28)
        },
        Ot.indexOf(Et.checksum) < 0 && (Ot.push(Et.checksum),
        Ir(41)))
    }
    var Nt = "load,active,fixed,visible,focus,show,collaps,animat".split(",")
      , Mt = {};
    function xt(t, e) {
        var n = t.attributes
          , a = t.prefix ? t.prefix[e] : null
          , r = 0 === e ? "".concat("~").concat(t.position - 1) : ":nth-of-type(".concat(t.position, ")");
        switch (t.tag) {
        case "STYLE":
        case "TITLE":
        case "LINK":
        case "META":
        case "*T":
        case "*D":
            return "";
        case "HTML":
            return "HTML";
        default:
            if (null === a)
                return "";
            a = "".concat(a).concat(">"),
            t.tag = 0 === t.tag.indexOf("svg:") ? t.tag.substr("svg:".length) : t.tag;
            var i = "".concat(a).concat(t.tag).concat(r)
              , o = "id"in n && n.id.length > 0 ? n.id : null
              , u = "BODY" !== t.tag && "class"in n && n.class.length > 0 ? n.class.trim().split(/\s+/).filter((function(t) {
                return _t(t)
            }
            )).join(".") : null;
            if (u && u.length > 0)
                if (0 === e) {
                    var c = "".concat(function(t) {
                        for (var e = t.split(">"), n = 0; n < e.length; n++) {
                            var a = e[n].indexOf("~")
                              , r = e[n].indexOf(".");
                            e[n] = e[n].substring(0, r > 0 ? r : a > 0 ? a : e[n].length)
                        }
                        return e.join(">")
                    }(a)).concat(t.tag).concat(".").concat(u);
                    c in Mt || (Mt[c] = []),
                    Mt[c].indexOf(t.id) < 0 && Mt[c].push(t.id),
                    i = "".concat(c).concat("~").concat(Mt[c].indexOf(t.id))
                } else
                    i = "".concat(a).concat(t.tag, ".").concat(u).concat(r);
            return i = o && _t(o) ? "".concat(function(t) {
                var e = t.lastIndexOf("*S")
                  , n = t.lastIndexOf("".concat("iframe:").concat("HTML"))
                  , a = Math.max(e, n);
                if (a < 0)
                    return "";
                return t.substring(0, t.indexOf(">", a) + 1)
            }(a)).concat("#").concat(o) : i,
            i
        }
    }
    function _t(t) {
        if (!t)
            return !1;
        if (Nt.some((function(e) {
            return t.toLowerCase().indexOf(e) >= 0
        }
        )))
            return !1;
        for (var e = 0; e < t.length; e++) {
            var n = t.charCodeAt(e);
            if (n >= 48 && n <= 57)
                return !1
        }
        return !0
    }
    var It = 1
      , Ct = null
      , Dt = []
      , jt = []
      , At = {}
      , Rt = []
      , Lt = []
      , Pt = []
      , zt = []
      , Ht = []
      , Wt = []
      , Xt = null
      , Yt = null
      , qt = null
      , Ut = null;
    function Ft() {
        Bt(),
        Jt(document, !0)
    }
    function Vt() {
        Bt()
    }
    function Bt() {
        It = 1,
        Dt = [],
        jt = [],
        At = {},
        Rt = [],
        Lt = [],
        Pt = "address,password,contact".split(","),
        zt = "password,secret,pass,social,ssn,code,hidden".split(","),
        Ht = "radio,checkbox,range,button,reset,submit".split(","),
        Wt = "INPUT,SELECT,TEXTAREA".split(","),
        Ct = new Map,
        Xt = new WeakMap,
        Yt = new WeakMap,
        qt = new WeakMap,
        Ut = new WeakMap,
        Mt = {}
    }
    function Jt(t, e) {
        void 0 === e && (e = !1);
        try {
            e && o.unmask.forEach((function(t) {
                return t.indexOf("!") < 0 ? Lt.push(t) : Rt.push(t.substr(1))
            }
            )),
            "querySelectorAll"in t && (o.regions.forEach((function(e) {
                return t.querySelectorAll(e[1]).forEach((function(t) {
                    return Za(t, "".concat(e[0]))
                }
                ))
            }
            )),
            o.mask.forEach((function(e) {
                return t.querySelectorAll(e).forEach((function(t) {
                    return qt.set(t, 3)
                }
                ))
            }
            )),
            o.checksum.forEach((function(e) {
                return t.querySelectorAll(e[1]).forEach((function(t) {
                    return Ut.set(t, e[0])
                }
                ))
            }
            )),
            Lt.forEach((function(e) {
                return t.querySelectorAll(e).forEach((function(t) {
                    return qt.set(t, 0)
                }
                ))
            }
            )))
        } catch (t) {
            jr(5, 1, t ? t.name : null)
        }
    }
    function Gt(t, e) {
        if (void 0 === e && (e = !1),
        null === t)
            return null;
        var n = Xt.get(t);
        return !n && e && (n = It++,
        Xt.set(t, n)),
        n || null
    }
    function Kt(t) {
        var e = !1;
        if (t.nodeType === Node.ELEMENT_NODE && "IFRAME" === t.tagName) {
            var n = t;
            try {
                n.contentDocument && (Yt.set(n.contentDocument, n),
                e = !0)
            } catch (t) {}
        }
        return e
    }
    function Zt(t) {
        var e = t.nodeType === Node.DOCUMENT_NODE ? t : null;
        return e && Yt.has(e) ? Yt.get(e) : null
    }
    function Qt(t, e, n) {
        if ("object" == typeof t[n] && "object" == typeof e[n]) {
            for (var a in t[n])
                if (t[n][a] !== e[n][a])
                    return !0;
            for (var a in e[n])
                if (e[n][a] !== t[n][a])
                    return !0;
            return !1
        }
        return t[n] !== e[n]
    }
    function $t(t) {
        var e = t.parent && t.parent in Dt ? Dt[t.parent] : null
          , n = e ? e.selector : null
          , a = t.data
          , r = function(t, e) {
            e.metadata.position = 1;
            for (var n = t ? t.children.indexOf(e.id) : -1; n-- > 0; ) {
                var a = Dt[t.children[n]];
                if (e.data.tag === a.data.tag) {
                    e.metadata.position = a.metadata.position + 1;
                    break
                }
            }
            return e.metadata.position
        }(e, t)
          , i = {
            id: t.id,
            tag: a.tag,
            prefix: n,
            position: r,
            attributes: a.attributes
        };
        t.selector = [xt(i, 0), xt(i, 1)],
        t.hash = t.selector.map((function(t) {
            return t ? d(t) : null
        }
        )),
        t.hash.forEach((function(e) {
            return At[e] = t.id
        }
        ))
    }
    function te(t) {
        var e = ee(ae(t));
        return null !== e && null !== e.textContent ? e.textContent.substr(0, 25) : ""
    }
    function ee(t) {
        return Ct.has(t) ? Ct.get(t) : null
    }
    function ne(t) {
        var e = Gt(t);
        return e in Dt ? Dt[e] : null
    }
    function ae(t) {
        return t in At ? At[t] : null
    }
    function re(t) {
        return Ct.has(Gt(t))
    }
    function ie() {
        for (var t = [], e = 0, n = jt; e < n.length; e++) {
            var a = n[e];
            a in Dt && t.push(Dt[a])
        }
        return jt = [],
        t
    }
    function oe(t) {
        if (Ct.get(t).nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
            Ct.delete(t);
            var e = t in Dt ? Dt[t] : null;
            if (e && e.children)
                for (var n = 0, a = e.children; n < a.length; n++) {
                    oe(a[n])
                }
        }
    }
    function ue(t) {
        for (var e = null; null === e && t.previousSibling; )
            e = Gt(t.previousSibling),
            t = t.previousSibling;
        return e
    }
    function ce(t, e, n, a) {
        void 0 === n && (n = !0),
        void 0 === a && (a = !1);
        var r = jt.indexOf(t);
        r >= 0 && 1 === e && a ? (jt.splice(r, 1),
        jt.push(t)) : -1 === r && n && jt.push(t)
    }
    var se = Object.freeze({
        __proto__: null,
        add: function(t, e, n, a) {
            var r = e ? Gt(e) : null;
            if (e && r || null != t.host || t.nodeType === Node.DOCUMENT_TYPE_NODE) {
                var i = Gt(t, !0)
                  , u = ue(t)
                  , c = null
                  , s = Qa(t) ? i : null
                  , l = Ut.has(t) ? Ut.get(t) : null
                  , d = o.content ? 1 : 3;
                r >= 0 && Dt[r] && ((c = Dt[r]).children.push(i),
                s = null === s ? c.region : s,
                l = null === l ? c.metadata.fraud : l,
                d = c.metadata.privacy),
                n.attributes && "data-clarity-region"in n.attributes && (Za(t, n.attributes["data-clarity-region"]),
                s = i),
                Ct.set(i, t),
                Dt[i] = {
                    id: i,
                    parent: r,
                    previous: u,
                    children: [],
                    data: n,
                    selector: null,
                    hash: null,
                    region: s,
                    metadata: {
                        active: !0,
                        suspend: !1,
                        privacy: d,
                        position: null,
                        fraud: l,
                        size: null
                    }
                },
                function(t, e, n) {
                    var a, r = e.data, i = e.metadata, o = i.privacy, u = r.attributes || {}, c = r.tag.toUpperCase();
                    switch (!0) {
                    case Wt.indexOf(c) >= 0:
                        var s = u.type
                          , l = ""
                          , d = ["class", "style"];
                        Object.keys(u).filter((function(t) {
                            return !d.includes(t)
                        }
                        )).forEach((function(t) {
                            return l += u[t].toLowerCase()
                        }
                        ));
                        var f = zt.some((function(t) {
                            return l.indexOf(t) >= 0
                        }
                        ));
                        i.privacy = "INPUT" === c && Ht.indexOf(s) >= 0 ? o : f ? 4 : 2;
                        break;
                    case "data-clarity-mask"in u:
                        i.privacy = 3;
                        break;
                    case "data-clarity-unmask"in u:
                        i.privacy = 0;
                        break;
                    case qt.has(t):
                        i.privacy = qt.get(t);
                        break;
                    case Ut.has(t):
                        i.privacy = 2;
                        break;
                    case "*T" === c:
                        var h = n && n.data ? n.data.tag : ""
                          , p = n && n.selector ? n.selector[1] : ""
                          , v = ["STYLE", "TITLE", "svg:style"];
                        i.privacy = v.includes(h) || Rt.some((function(t) {
                            return p.indexOf(t) >= 0
                        }
                        )) ? 0 : o;
                        break;
                    case 1 === o:
                        i.privacy = function(t, e, n) {
                            if (t && e.some((function(e) {
                                return t.indexOf(e) >= 0
                            }
                            )))
                                return 2;
                            return n.privacy
                        }(u.class, Pt, i);
                        break;
                    case "IMG" === c:
                        (null === (a = u.src) || void 0 === a ? void 0 : a.startsWith("blob:")) && (i.privacy = 3)
                    }
                }(t, Dt[i], c),
                $t(Dt[i]),
                function(t) {
                    if ("IMG" === t.data.tag && 3 === t.metadata.privacy) {
                        var e = ee(t.id);
                        !e || e.complete && 0 !== e.naturalWidth || Xi(e, "load", (function() {
                            e.setAttribute("data-clarity-loaded", "".concat(Ni()))
                        }
                        )),
                        t.metadata.size = []
                    }
                }(Dt[i]),
                ce(i, a)
            }
        },
        get: ne,
        getId: Gt,
        getNode: ee,
        getValue: function(t) {
            return t in Dt ? Dt[t] : null
        },
        has: re,
        hashText: te,
        iframe: Zt,
        lookup: ae,
        parse: Jt,
        sameorigin: Kt,
        start: Ft,
        stop: Vt,
        update: function(t, e, n, a) {
            var r = Gt(t)
              , i = e ? Gt(e) : null
              , o = ue(t)
              , u = !1
              , c = !1;
            if (r in Dt) {
                var s = Dt[r];
                if (s.metadata.active = !0,
                s.previous !== o && (u = !0,
                s.previous = o),
                s.parent !== i) {
                    u = !0;
                    var l = s.parent;
                    if (s.parent = i,
                    null !== i && i >= 0) {
                        var d = null === o ? 0 : Dt[i].children.indexOf(o) + 1;
                        Dt[i].children.splice(d, 0, r),
                        s.region = Qa(t) ? r : Dt[i].region
                    } else
                        !function(t, e) {
                            if (t in Dt) {
                                var n = Dt[t];
                                n.metadata.active = !1,
                                n.parent = null,
                                ce(t, e),
                                oe(t)
                            }
                        }(r, a);
                    if (null !== l && l >= 0) {
                        var f = Dt[l].children.indexOf(r);
                        f >= 0 && Dt[l].children.splice(f, 1)
                    }
                    c = !0
                }
                for (var h in n)
                    Qt(s.data, n, h) && (u = !0,
                    s.data[h] = n[h]);
                $t(s),
                ce(r, a, u, c)
            }
        },
        updates: ie
    })
      , le = 5e3
      , de = {}
      , fe = []
      , he = null
      , pe = null
      , ve = null;
    function ge() {
        de = {},
        fe = [],
        he = null,
        pe = null
    }
    function me(t, e) {
        return void 0 === e && (e = 0),
        rt(this, void 0, void 0, (function() {
            var n, a, r;
            return it(this, (function(i) {
                for (n = 0,
                a = fe; n < a.length; n++)
                    if (a[n].task === t)
                        return [2];
                return r = new Promise((function(n) {
                    fe[1 === e ? "unshift" : "push"]({
                        task: t,
                        resolve: n,
                        id: bi()
                    })
                }
                )),
                null === he && null === pe && ye(),
                [2, r]
            }
            ))
        }
        ))
    }
    function ye() {
        var t = fe.shift();
        t && (he = t,
        t.task().then((function() {
            t.id === bi() && (t.resolve(),
            he = null,
            ye())
        }
        )).catch((function(e) {
            t.id === bi() && (e && jr(0, 1, e.name, e.message, e.stack),
            he = null,
            ye())
        }
        )))
    }
    function be(t) {
        var e = Ee(t);
        return e in de ? performance.now() - de[e].start > de[e].yield ? 0 : 1 : 2
    }
    function we(t) {
        de[Ee(t)] = {
            start: performance.now(),
            calls: 0,
            yield: o.longTask
        }
    }
    function ke(t) {
        var e = performance.now()
          , n = Ee(t)
          , a = e - de[n].start;
        W(t.cost, a),
        H(5),
        de[n].calls > 0 && W(4, a)
    }
    function Se(t) {
        return rt(this, void 0, void 0, (function() {
            var e, n;
            return it(this, (function(a) {
                switch (a.label) {
                case 0:
                    return (e = Ee(t))in de ? (ke(t),
                    n = de[e],
                    [4, Oe()]) : [3, 2];
                case 1:
                    n.yield = a.sent().timeRemaining(),
                    function(t) {
                        var e = Ee(t);
                        if (de && de[e]) {
                            var n = de[e].calls
                              , a = de[e].yield;
                            we(t),
                            de[e].calls = n + 1,
                            de[e].yield = a
                        }
                    }(t),
                    a.label = 2;
                case 2:
                    return [2, e in de ? 1 : 2]
                }
            }
            ))
        }
        ))
    }
    function Ee(t) {
        return "".concat(t.id, ".").concat(t.cost)
    }
    function Oe() {
        return rt(this, void 0, void 0, (function() {
            return it(this, (function(t) {
                switch (t.label) {
                case 0:
                    return pe ? [4, pe] : [3, 2];
                case 1:
                    t.sent(),
                    t.label = 2;
                case 2:
                    return [2, new Promise((function(t) {
                        Ne(t, {
                            timeout: le
                        })
                    }
                    ))]
                }
            }
            ))
        }
        ))
    }
    var Te, Ne = window.requestIdleCallback || function(t, e) {
        var n = performance.now()
          , a = new MessageChannel
          , r = a.port1
          , i = a.port2;
        r.onmessage = function(a) {
            var r = performance.now()
              , u = r - n
              , c = r - a.data;
            if (c > o.longTask && u < e.timeout)
                requestAnimationFrame((function() {
                    i.postMessage(r)
                }
                ));
            else {
                var s = u > e.timeout;
                t({
                    didTimeout: s,
                    timeRemaining: function() {
                        return s ? o.longTask : Math.max(0, o.longTask - c)
                    }
                })
            }
        }
        ,
        requestAnimationFrame((function() {
            i.postMessage(performance.now())
        }
        ))
    }
    ;
    function Me() {
        Te = null
    }
    function xe() {
        var t = document.body
          , e = document.documentElement
          , n = t ? t.clientWidth : null
          , a = t ? t.scrollWidth : null
          , r = t ? t.offsetWidth : null
          , i = e ? e.clientWidth : null
          , o = e ? e.scrollWidth : null
          , u = e ? e.offsetWidth : null
          , c = Math.max(n, a, r, i, o, u)
          , s = t ? t.clientHeight : null
          , l = t ? t.scrollHeight : null
          , d = t ? t.offsetHeight : null
          , f = e ? e.clientHeight : null
          , h = e ? e.scrollHeight : null
          , p = e ? e.offsetHeight : null
          , v = Math.max(s, l, d, f, h, p);
        null !== Te && c === Te.width && v === Te.height || null === c || null === v || (Te = {
            width: c,
            height: v
        },
        Xa(8))
    }
    xe.dn = 19;
    var _e = [];
    function Ie(t) {
        var e = rr(t);
        if (e) {
            var n = e.value
              , a = n && n.length >= 5 && o.fraud && -1 === "password,secret,pass,social,ssn,code,hidden".indexOf(e.type) ? d(n, 28) : "";
            _e.push({
                time: s(t),
                event: 42,
                data: {
                    target: rr(t),
                    type: e.type,
                    value: n,
                    checksum: a
                }
            }),
            me(or.bind(this, 42))
        }
    }
    function Ce() {
        _e = []
    }
    function De(t) {
        var e = {
            x: 0,
            y: 0
        };
        if (t && t.offsetParent)
            do {
                var n = t.offsetParent
                  , a = null === n ? Zt(t.ownerDocument) : null;
                e.x += t.offsetLeft,
                e.y += t.offsetTop,
                t = a || n
            } while (t);
        return e
    }
    Ie.dn = 5;
    var je = ["input", "textarea", "radio", "button", "canvas"]
      , Ae = [];
    function Re(t, e, n) {
        var a = Zt(e)
          , r = a ? a.contentDocument.documentElement : document.documentElement
          , i = "pageX"in n ? Math.round(n.pageX) : "clientX"in n ? Math.round(n.clientX + r.scrollLeft) : null
          , o = "pageY"in n ? Math.round(n.pageY) : "clientY"in n ? Math.round(n.clientY + r.scrollTop) : null;
        if (a) {
            var u = De(a);
            i = i ? i + Math.round(u.x) : i,
            o = o ? o + Math.round(u.y) : o
        }
        var c = rr(n)
          , l = function(t) {
            for (; t && t !== document; ) {
                if (t.nodeType === Node.ELEMENT_NODE) {
                    var e = t;
                    if ("A" === e.tagName)
                        return e
                }
                t = t.parentNode
            }
            return null
        }(c)
          , d = function(t) {
            var e = null
              , n = document.documentElement;
            if ("function" == typeof t.getBoundingClientRect) {
                var a = t.getBoundingClientRect();
                a && a.width > 0 && a.height > 0 && (e = {
                    x: Math.floor(a.left + ("pageXOffset"in window ? window.pageXOffset : n.scrollLeft)),
                    y: Math.floor(a.top + ("pageYOffset"in window ? window.pageYOffset : n.scrollTop)),
                    w: Math.floor(a.width),
                    h: Math.floor(a.height)
                })
            }
            return e
        }(c);
        0 === n.detail && d && (i = Math.round(d.x + d.w / 2),
        o = Math.round(d.y + d.h / 2));
        var f = d ? Math.max(Math.floor((i - d.x) / d.w * 32767), 0) : 0
          , h = d ? Math.max(Math.floor((o - d.y) / d.h * 32767), 0) : 0;
        null !== i && null !== o && (Ae.push({
            time: s(n),
            event: t,
            data: {
                target: c,
                x: i,
                y: o,
                eX: f,
                eY: h,
                button: n.button,
                reaction: Pe(c),
                context: ze(l),
                text: Le(c),
                link: l ? l.href : null,
                hash: null,
                trust: n.isTrusted ? 1 : 0
            }
        }),
        me(or.bind(this, t)))
    }
    function Le(t) {
        var e = null;
        if (t) {
            var n = t.textContent || String(t.value || "") || t.alt;
            n && (e = n.replace(/\s+/g, " ").trim().substr(0, 25))
        }
        return e
    }
    function Pe(t) {
        if (t.nodeType === Node.ELEMENT_NODE) {
            var e = t.tagName.toLowerCase();
            if (je.indexOf(e) >= 0)
                return 0
        }
        return 1
    }
    function ze(t) {
        if (t && t.hasAttribute("target"))
            switch (t.getAttribute("target")) {
            case "_blank":
                return 1;
            case "_parent":
                return 2;
            case "_top":
                return 3
            }
        return 0
    }
    function He() {
        Ae = []
    }
    Re.dn = 6;
    var We = [];
    function Xe(t, e) {
        We.push({
            time: s(e),
            event: 38,
            data: {
                target: rr(e),
                action: t
            }
        }),
        me(or.bind(this, 38))
    }
    function Ye() {
        We = []
    }
    Xe.dn = 7;
    var qe = null
      , Ue = [];
    function Fe(t) {
        var e = rr(t)
          , n = ne(e);
        if (e && e.type && n) {
            var a = e.value
              , r = e.type;
            switch (e.type) {
            case "radio":
            case "checkbox":
                a = e.checked ? "true" : "false"
            }
            var i = {
                target: e,
                value: a,
                type: r
            };
            Ue.length > 0 && Ue[Ue.length - 1].data.target === i.target && Ue.pop(),
            Ue.push({
                time: s(t),
                event: 27,
                data: i
            }),
            q(qe),
            qe = Y(Ve, 1e3, 27)
        }
    }
    function Ve(t) {
        me(or.bind(this, t))
    }
    function Be() {
        Ue = []
    }
    Fe.dn = 9;
    var Je, Ge = [], Ke = null, Ze = !1, Qe = 0, $e = new Set;
    function tn(t, e, n) {
        var a = Zt(e)
          , r = a ? a.contentDocument.documentElement : document.documentElement
          , i = "pageX"in n ? Math.round(n.pageX) : "clientX"in n ? Math.round(n.clientX + r.scrollLeft) : null
          , o = "pageY"in n ? Math.round(n.pageY) : "clientY"in n ? Math.round(n.clientY + r.scrollTop) : null;
        if (a) {
            var u = De(a);
            i = i ? i + Math.round(u.x) : i,
            o = o ? o + Math.round(u.y) : o
        }
        null !== i && null !== o && nn({
            time: s(n),
            event: t,
            data: {
                target: rr(n),
                x: i,
                y: o
            }
        })
    }
    function en(t, e, n) {
        var a = Zt(e)
          , r = a ? a.contentDocument.documentElement : document.documentElement
          , i = n.changedTouches
          , o = s(n);
        if (i)
            for (var u = 0; u < i.length; u++) {
                var c = i[u]
                  , l = "clientX"in c ? Math.round(c.clientX + r.scrollLeft) : null
                  , d = "clientY"in c ? Math.round(c.clientY + r.scrollTop) : null;
                l = l && a ? l + Math.round(a.offsetLeft) : l,
                d = d && a ? d + Math.round(a.offsetTop) : d;
                var f = "identifier"in c ? c.identifier : void 0;
                switch (t) {
                case 17:
                    0 === $e.size && (Ze = !0,
                    Qe = f),
                    $e.add(f);
                    break;
                case 18:
                case 20:
                    $e.delete(f)
                }
                var h = Ze && Qe === f;
                null !== l && null !== d && nn({
                    time: o,
                    event: t,
                    data: {
                        target: rr(n),
                        x: l,
                        y: d,
                        id: f,
                        isPrimary: h
                    }
                }),
                20 !== t && 18 !== t || Qe === f && (Ze = !1)
            }
    }
    function nn(t) {
        switch (t.event) {
        case 12:
        case 15:
        case 19:
            var e = Ge.length
              , n = e > 1 ? Ge[e - 2] : null;
            n && function(t, e) {
                var n = t.data.x - e.data.x
                  , a = t.data.y - e.data.y
                  , r = Math.sqrt(n * n + a * a)
                  , i = e.time - t.time
                  , o = e.data.target === t.data.target;
                return e.event === t.event && o && r < 20 && i < 25
            }(n, t) && Ge.pop(),
            Ge.push(t),
            q(Ke),
            Ke = Y(an, 500, t.event);
            break;
        default:
            Ge.push(t),
            an(t.event)
        }
    }
    function an(t) {
        me(or.bind(this, t))
    }
    function rn() {
        Ge = []
    }
    tn.dn = 10,
    en.dn = 11;
    var on = null
      , un = !1;
    function cn() {
        var t = document.documentElement;
        Je = {
            width: t && "clientWidth"in t ? Math.min(t.clientWidth, window.innerWidth) : window.innerWidth,
            height: t && "clientHeight"in t ? Math.min(t.clientHeight, window.innerHeight) : window.innerHeight
        },
        un ? (q(on),
        on = Y(sn, 500, 11)) : (or(11),
        un = !0)
    }
    function sn(t) {
        me(or.bind(this, t))
    }
    function ln() {
        Je = null,
        q(on)
    }
    cn.dn = 12;
    var dn = []
      , fn = null
      , hn = null
      , pn = null;
    function vn(t) {
        void 0 === t && (t = null);
        var e = window
          , n = document.documentElement
          , a = t ? rr(t) : n;
        if (a && a.nodeType === Node.DOCUMENT_NODE) {
            var r = Zt(a);
            e = r ? r.contentWindow : e,
            a = n = a.documentElement
        }
        var i = a === n && "pageXOffset"in e ? Math.round(e.pageXOffset) : Math.round(a.scrollLeft)
          , o = a === n && "pageYOffset"in e ? Math.round(e.pageYOffset) : Math.round(a.scrollTop)
          , u = window.innerWidth
          , c = window.innerHeight
          , l = u / 3
          , d = u > c ? .15 * c : .2 * c
          , f = c - d
          , h = gn(l, d)
          , p = gn(l, f)
          , v = {
            time: s(t),
            event: 10,
            data: {
                target: a,
                x: i,
                y: o,
                top: h,
                bottom: p
            }
        };
        if (null === t && 0 === i && 0 === o || null === i || null === o)
            return fn = h,
            void (hn = p);
        var g = dn.length
          , m = g > 1 ? dn[g - 2] : null;
        m && function(t, e) {
            var n = t.data.x - e.data.x
              , a = t.data.y - e.data.y;
            return n * n + a * a < 400 && e.time - t.time < 25
        }(m, v) && dn.pop(),
        dn.push(v),
        q(pn),
        pn = Y(mn, 500, 10)
    }
    function gn(t, e) {
        var n, a, r;
        return "caretPositionFromPoint"in document ? r = null === (n = document.caretPositionFromPoint(t, e)) || void 0 === n ? void 0 : n.offsetNode : "caretRangeFromPoint"in document && (r = null === (a = document.caretRangeFromPoint(t, e)) || void 0 === a ? void 0 : a.startContainer),
        r || (r = document.elementFromPoint(t, e)),
        r && r.nodeType === Node.TEXT_NODE && (r = r.parentNode),
        r
    }
    function mn(t) {
        me(or.bind(this, t))
    }
    function yn() {
        var t, e;
        if (fn) {
            var n = ir(fn, null);
            ci(31, null === (t = null == n ? void 0 : n.hash) || void 0 === t ? void 0 : t.join("."))
        }
        if (hn) {
            var a = ir(hn, null);
            ci(32, null === (e = null == a ? void 0 : a.hash) || void 0 === e ? void 0 : e.join("."))
        }
    }
    vn.dn = 13,
    yn.dn = 14;
    var bn = null
      , wn = null
      , kn = null;
    function Sn(t) {
        var e = (t.nodeType === Node.DOCUMENT_NODE ? t : document).getSelection();
        if (null !== e && !(null === e.anchorNode && null === e.focusNode || e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset)) {
            var n = bn.start ? bn.start : null;
            null !== wn && null !== bn.start && n !== e.anchorNode && (q(kn),
            En(21)),
            bn = {
                start: e.anchorNode,
                startOffset: e.anchorOffset,
                end: e.focusNode,
                endOffset: e.focusOffset
            },
            wn = e,
            q(kn),
            kn = Y(En, 500, 21)
        }
    }
    function En(t) {
        me(or.bind(this, t))
    }
    function On() {
        wn = null,
        bn = {
            start: 0,
            startOffset: 0,
            end: 0,
            endOffset: 0
        }
    }
    Sn.dn = 15;
    var Tn, Nn, Mn = [];
    function xn(t) {
        Mn.push({
            time: s(t),
            event: 39,
            data: {
                target: rr(t)
            }
        }),
        me(or.bind(this, 39))
    }
    function _n() {
        Mn = []
    }
    function In(t) {
        Tn = {
            name: t.type
        },
        or(26, s(t)),
        _o()
    }
    function Cn() {
        Tn = null
    }
    function Dn(t) {
        void 0 === t && (t = null),
        Nn = {
            visible: "visibilityState"in document ? document.visibilityState : "default"
        },
        or(28, s(t))
    }
    function jn() {
        Nn = null
    }
    function An() {
        ur = [],
        sr(),
        He(),
        Ye(),
        rn(),
        Be(),
        un = !1,
        Xi(window, "resize", cn),
        cn(),
        Xi(document, "visibilitychange", Dn),
        Dn(),
        dn = [],
        vn(),
        On(),
        Ce(),
        _n(),
        Xi(window, "pagehide", In)
    }
    function Rn(t) {
        !function(t) {
            var e = Zt(t);
            Xi(e ? e.contentWindow : t === document ? window : t, "scroll", vn, !0)
        }(t),
        t.nodeType === Node.DOCUMENT_NODE && (function(t) {
            Xi(t, "click", Re.bind(this, 9, t), !0)
        }(t),
        function(t) {
            Xi(t, "cut", Xe.bind(this, 0), !0),
            Xi(t, "copy", Xe.bind(this, 1), !0),
            Xi(t, "paste", Xe.bind(this, 2), !0)
        }(t),
        function(t) {
            Xi(t, "mousedown", tn.bind(this, 13, t), !0),
            Xi(t, "mouseup", tn.bind(this, 14, t), !0),
            Xi(t, "mousemove", tn.bind(this, 12, t), !0),
            Xi(t, "wheel", tn.bind(this, 15, t), !0),
            Xi(t, "dblclick", tn.bind(this, 16, t), !0),
            Xi(t, "touchstart", en.bind(this, 17, t), !0),
            Xi(t, "touchend", en.bind(this, 18, t), !0),
            Xi(t, "touchmove", en.bind(this, 19, t), !0),
            Xi(t, "touchcancel", en.bind(this, 20, t), !0)
        }(t),
        function(t) {
            Xi(t, "input", Fe, !0)
        }(t),
        function(t) {
            Xi(t, "selectstart", Sn.bind(this, t), !0),
            Xi(t, "selectionchange", Sn.bind(this, t), !0)
        }(t),
        function(t) {
            Xi(t, "change", Ie, !0)
        }(t),
        function(t) {
            Xi(t, "submit", xn, !0)
        }(t))
    }
    xn.dn = 16,
    In.dn = 17,
    Dn.dn = 18,
    An.dn = 8;
    var Ln = Object.freeze({
        __proto__: null,
        observe: Rn,
        start: An,
        stop: function() {
            ur = [],
            sr(),
            He(),
            Ye(),
            q(Ke),
            Ge.length > 0 && an(Ge[Ge.length - 1].event),
            q(qe),
            Be(),
            ln(),
            jn(),
            q(pn),
            dn = [],
            fn = null,
            hn = null,
            On(),
            q(kn),
            Ce(),
            _n(),
            Cn()
        }
    });
    function Pn(t, e, n, a) {
        return rt(this, void 0, void 0, (function() {
            var r, i, o, u, c;
            return it(this, (function(s) {
                switch (s.label) {
                case 0:
                    r = [t],
                    s.label = 1;
                case 1:
                    if (!(r.length > 0))
                        return [3, 4];
                    for (i = r.shift(),
                    o = i.firstChild; o; )
                        r.push(o),
                        o = o.nextSibling;
                    return 0 !== (u = be(e)) ? [3, 3] : [4, Se(e)];
                case 2:
                    u = s.sent(),
                    s.label = 3;
                case 3:
                    return 2 === u ? [3, 4] : ((c = da(i, n, a)) && r.push(c),
                    [3, 1]);
                case 4:
                    return [2]
                }
            }
            ))
        }
        ))
    }
    var zn = []
      , Hn = []
      , Wn = {}
      , Xn = null
      , Yn = null
      , qn = null
      , Un = null
      , Fn = null
      , Vn = []
      , Bn = null
      , Jn = null
      , Gn = null
      , Kn = {}
      , Zn = null;
    function Qn() {
        if (zn = [],
        Vn = [],
        Bn = null,
        Gn = 0,
        Kn = {},
        Zn = 0,
        null === Xn && (Xn = CSSStyleSheet.prototype.insertRule,
        CSSStyleSheet.prototype.insertRule = function() {
            return to() && ra(this.ownerNode),
            Xn.apply(this, arguments)
        }
        ),
        "CSSMediaRule"in window && null === Un && (Un = CSSMediaRule.prototype.insertRule,
        CSSMediaRule.prototype.insertRule = function() {
            return to() && ra(this.parentStyleSheet.ownerNode),
            Un.apply(this, arguments)
        }
        ),
        null === Yn && (Yn = CSSStyleSheet.prototype.deleteRule,
        CSSStyleSheet.prototype.deleteRule = function() {
            return to() && ra(this.ownerNode),
            Yn.apply(this, arguments)
        }
        ),
        "CSSMediaRule"in window && null === Fn && (Fn = CSSMediaRule.prototype.deleteRule,
        CSSMediaRule.prototype.deleteRule = function() {
            return to() && ra(this.parentStyleSheet.ownerNode),
            Fn.apply(this, arguments)
        }
        ),
        null === qn) {
            qn = Element.prototype.attachShadow;
            try {
                Element.prototype.attachShadow = function() {
                    return to() ? ra(qn.apply(this, arguments)) : qn.apply(this, arguments)
                }
            } catch (t) {
                qn = null
            }
        }
    }
    function $n(t) {
        var e = s();
        Z(6, e),
        Hn.push({
            time: e,
            mutations: t
        }),
        me(ea, 1).then((function() {
            Y(xe),
            Hi($a)()
        }
        ))
    }
    function ta(t, e, n, a) {
        return rt(this, void 0, void 0, (function() {
            var r, i, u;
            return it(this, (function(c) {
                switch (c.label) {
                case 0:
                    return 0 !== (r = be(t)) ? [3, 2] : [4, Se(t)];
                case 1:
                    r = c.sent(),
                    c.label = 2;
                case 2:
                    if (2 === r)
                        return [2];
                    switch (i = e.target,
                    u = o.throttleDom ? function(t, e, n, a) {
                        var r = t.target ? ne(t.target.parentNode) : null;
                        if (r && "HTML" !== r.data.tag) {
                            var i = a > Gn
                              , u = n < Zn
                              , c = ne(t.target)
                              , s = c && c.selector ? c.selector.join() : t.target.nodeName
                              , l = r.selector ? r.selector.join() : ""
                              , d = o.throttleMutations && u && -1 !== s.indexOf("adthrive-ad")
                              , f = [l, s, t.attributeName, na(t.addedNodes), na(t.removedNodes)].join();
                            Kn[f] = f in Kn ? Kn[f] : [0, n];
                            var h = Kn[f];
                            if (!1 === i && h[0] >= 10 && aa(h[2], 2, e, a),
                            h[0] = i || d ? h[1] === n ? h[0] : h[0] + 1 : 1,
                            h[1] = n,
                            h[0] >= 10 || d)
                                return h[2] = t.removedNodes,
                                n > a + 3e3 ? t.type : (Wn[f] = {
                                    mutation: t,
                                    timestamp: a
                                },
                                "throttle")
                        }
                        return t.type
                    }(e, t, n, a) : e.type,
                    u && i && i.ownerDocument && Jt(i.ownerDocument),
                    u && i && i.nodeType == Node.DOCUMENT_FRAGMENT_NODE && i.host && Jt(i),
                    u) {
                    case "attributes":
                        da(i, 3, a);
                        break;
                    case "characterData":
                        da(i, 4, a);
                        break;
                    case "childList":
                        aa(e.addedNodes, 1, t, a),
                        aa(e.removedNodes, 2, t, a)
                    }
                    return [2]
                }
            }
            ))
        }
        ))
    }
    function ea() {
        return rt(this, void 0, void 0, (function() {
            var t, e, n, a, r, i, o, u, c, l, d;
            return it(this, (function(f) {
                switch (f.label) {
                case 0:
                    we(t = {
                        id: bi(),
                        cost: 3
                    }),
                    f.label = 1;
                case 1:
                    if (!(Hn.length > 0))
                        return [3, 3];
                    for (e = Hn.shift(),
                    n = s(),
                    a = 0,
                    r = e.mutations; a < r.length; a++)
                        i = r[a],
                        ta(t, i, n, e.time);
                    return [4, Xa(6, t, e.time)];
                case 2:
                    return f.sent(),
                    [3, 1];
                case 3:
                    for (o = !1,
                    u = 0,
                    c = Object.keys(Wn); u < c.length; u++)
                        l = c[u],
                        d = Wn[l],
                        delete Wn[l],
                        ta(t, d.mutation, s(), d.timestamp),
                        o = !0;
                    return Object.keys(Wn).length > 0 && function() {
                        Jn && q(Jn);
                        Jn = Y((function() {
                            me(ea, 1)
                        }
                        ), 33)
                    }(),
                    0 === Object.keys(Wn).length && o ? [4, Xa(6, t, s())] : [3, 5];
                case 4:
                    f.sent(),
                    f.label = 5;
                case 5:
                    return function() {
                        var t = s();
                        Object.keys(Kn).length > 1e4 && (Kn = {},
                        H(38));
                        for (var e = 0, n = Object.keys(Kn); e < n.length; e++) {
                            var a = n[e];
                            t > Kn[a][1] + 3e4 && delete Kn[a]
                        }
                    }(),
                    ke(t),
                    [2]
                }
            }
            ))
        }
        ))
    }
    function na(t) {
        for (var e = [], n = 0; t && n < t.length; n++)
            e.push(t[n].nodeName);
        return e.join()
    }
    function aa(t, e, n, a) {
        return rt(this, void 0, void 0, (function() {
            var r, i, o, u;
            return it(this, (function(c) {
                switch (c.label) {
                case 0:
                    r = t ? t.length : 0,
                    i = 0,
                    c.label = 1;
                case 1:
                    return i < r ? (o = t[i],
                    1 !== e ? [3, 2] : (Pn(o, n, e, a),
                    [3, 5])) : [3, 6];
                case 2:
                    return 0 !== (u = be(n)) ? [3, 4] : [4, Se(n)];
                case 3:
                    u = c.sent(),
                    c.label = 4;
                case 4:
                    if (2 === u)
                        return [3, 6];
                    da(o, e, a),
                    c.label = 5;
                case 5:
                    return i++,
                    [3, 1];
                case 6:
                    return [2]
                }
            }
            ))
        }
        ))
    }
    function ra(t) {
        return Vn.indexOf(t) < 0 && Vn.push(t),
        Bn && q(Bn),
        Bn = Y((function() {
            !function() {
                for (var t = 0, e = Vn; t < e.length; t++) {
                    var n = e[t];
                    if (n) {
                        var a = n.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
                        if (a && re(n))
                            continue;
                        ia(n, a ? "childList" : "characterData")
                    }
                }
                Vn = []
            }()
        }
        ), 33),
        t
    }
    function ia(t, e) {
        Hi($n)([{
            addedNodes: [t],
            attributeName: null,
            attributeNamespace: null,
            nextSibling: null,
            oldValue: null,
            previousSibling: null,
            removedNodes: [],
            target: t,
            type: e
        }])
    }
    Qn.dn = 21,
    $n.dn = 22,
    ia.dn = 23;
    var oa = /[^0-9\.]/g;
    function ua(t) {
        for (var e = 0, n = Object.keys(t); e < n.length; e++) {
            var a = n[e]
              , r = t[a];
            if ("@type" === a && "string" == typeof r)
                switch (r = (r = r.toLowerCase()).indexOf("article") >= 0 || r.indexOf("posting") >= 0 ? "article" : r) {
                case "article":
                case "recipe":
                    ci(5, t[a]),
                    ci(8, t.creator),
                    ci(18, t.headline);
                    break;
                case "product":
                    ci(5, t[a]),
                    ci(10, t.name),
                    ci(12, t.sku),
                    t.brand && ci(6, t.brand.name);
                    break;
                case "aggregaterating":
                    t.ratingValue && (X(11, ca(t.ratingValue, 100)),
                    X(18, ca(t.bestRating)),
                    X(19, ca(t.worstRating))),
                    X(12, ca(t.ratingCount)),
                    X(17, ca(t.reviewCount));
                    break;
                case "offer":
                    ci(7, t.availability),
                    ci(14, t.itemCondition),
                    ci(13, t.priceCurrency),
                    ci(12, t.sku),
                    X(13, ca(t.price));
                    break;
                case "brand":
                    ci(6, t.name)
                }
            null !== r && "object" == typeof r && ua(r)
        }
    }
    function ca(t, e) {
        if (void 0 === e && (e = 1),
        null !== t)
            switch (typeof t) {
            case "number":
                return Math.round(t * e);
            case "string":
                return Math.round(parseFloat(t.replace(oa, "")) * e)
            }
        return null
    }
    var sa = ["title", "alt", "onload", "onfocus", "onerror", "data-drupal-form-submit-last", "aria-label"]
      , la = /[\r\n]+/g;
    function da(t, e, n) {
        var a, r = null;
        if (2 === e && !1 === re(t))
            return r;
        0 !== e && t.nodeType === Node.TEXT_NODE && t.parentElement && "STYLE" === t.parentElement.tagName && (t = t.parentNode);
        var i = !1 === re(t) ? "add" : "update"
          , o = t.parentElement ? t.parentElement : null
          , u = t.ownerDocument !== document;
        switch (t.nodeType) {
        case Node.DOCUMENT_TYPE_NODE:
            o = u && t.parentNode ? Zt(t.parentNode) : o;
            var c = t
              , s = {
                tag: (u ? "iframe:" : "") + "*D",
                attributes: {
                    name: c.name ? c.name : "HTML",
                    publicId: c.publicId,
                    systemId: c.systemId
                }
            };
            se[i](t, o, s, e);
            break;
        case Node.DOCUMENT_NODE:
            t === document && Jt(document),
            Oa(t, n),
            fa(t);
            break;
        case Node.DOCUMENT_FRAGMENT_NODE:
            var l = t;
            if (l.host) {
                if (Jt(l),
                "function" === typeof l.constructor && l.constructor.toString().indexOf("[native code]") >= 0) {
                    fa(l);
                    var d = {
                        tag: "*S",
                        attributes: {
                            style: ""
                        }
                    };
                    se[i](t, l.host, d, e)
                } else
                    se[i](t, l.host, {
                        tag: "*P",
                        attributes: {}
                    }, e);
                Oa(t, n)
            }
            break;
        case Node.TEXT_NODE:
            if (o = o || t.parentNode,
            "update" === i || o && re(o) && "STYLE" !== o.tagName && "NOSCRIPT" !== o.tagName) {
                var f = {
                    tag: "*T",
                    value: t.nodeValue
                };
                se[i](t, o, f, e)
            }
            break;
        case Node.ELEMENT_NODE:
            var h = t
              , p = h.tagName
              , v = function(t) {
                var e = {}
                  , n = t.attributes;
                if (n && n.length > 0)
                    for (var a = 0; a < n.length; a++) {
                        var r = n[a].name;
                        sa.indexOf(r) < 0 && (e[r] = n[a].value)
                    }
                "INPUT" === t.tagName && !("value"in e) && t.value && (e.value = t.value);
                return e
            }(h);
            switch (o = t.parentElement ? t.parentElement : t.parentNode ? t.parentNode : null,
            "http://www.w3.org/2000/svg" === h.namespaceURI && (p = "svg:" + p),
            p) {
            case "HTML":
                o = u && o ? Zt(o) : o;
                var g = {
                    tag: (u ? "iframe:" : "") + p,
                    attributes: v
                };
                se[i](t, o, g, e);
                break;
            case "SCRIPT":
                if ("type"in v && "application/ld+json" === v.type)
                    try {
                        ua(JSON.parse(h.text.replace(la, "")))
                    } catch (t) {}
                break;
            case "NOSCRIPT":
                var m = {
                    tag: p,
                    attributes: {},
                    value: ""
                };
                se[i](t, o, m, e);
                break;
            case "META":
                var y = "property"in v ? "property" : "name"in v ? "name" : null;
                if (y && "content"in v) {
                    var b = v.content;
                    switch (v[y]) {
                    case "og:title":
                        ci(20, b);
                        break;
                    case "og:type":
                        ci(19, b);
                        break;
                    case "generator":
                        ci(21, b)
                    }
                }
                break;
            case "HEAD":
                var w = {
                    tag: p,
                    attributes: v
                }
                  , k = u && (null === (a = t.ownerDocument) || void 0 === a ? void 0 : a.location) ? t.ownerDocument.location : location;
                w.attributes["*B"] = k.protocol + "//" + k.host + k.pathname,
                se[i](t, o, w, e);
                break;
            case "BASE":
                var S = ne(t.parentElement);
                if (S) {
                    var E = document.createElement("a");
                    E.href = v.href,
                    S.data.attributes["*B"] = E.protocol + "//" + E.host + E.pathname
                }
                break;
            case "STYLE":
                var O = {
                    tag: p,
                    attributes: v,
                    value: ha(h)
                };
                se[i](t, o, O, e);
                break;
            case "IFRAME":
                var T = t
                  , N = {
                    tag: p,
                    attributes: v
                };
                Kt(T) && (!function(t) {
                    !1 === re(t) && Xi(t, "load", ia.bind(this, t, "childList"), !0)
                }(T),
                N.attributes["*O"] = "true",
                T.contentDocument && T.contentWindow && "loading" !== T.contentDocument.readyState && (r = T.contentDocument)),
                se[i](t, o, N, e);
                break;
            case "LINK":
                if (pi && "stylesheet" === v.rel) {
                    for (var M in Object.keys(document.styleSheets)) {
                        var x = document.styleSheets[M];
                        if (x.ownerNode == h) {
                            var _ = {
                                tag: "STYLE",
                                attributes: v,
                                value: pa(x)
                            };
                            se[i](t, o, _, e);
                            break
                        }
                    }
                    break
                }
                var I = {
                    tag: p,
                    attributes: v
                };
                se[i](t, o, I, e);
                break;
            case "VIDEO":
            case "AUDIO":
            case "SOURCE":
                "src"in v && v.src.startsWith("data:") && (v.src = "");
                var C = {
                    tag: p,
                    attributes: v
                };
                se[i](t, o, C, e);
                break;
            default:
                var D = {
                    tag: p,
                    attributes: v
                };
                h.shadowRoot && (r = h.shadowRoot),
                se[i](t, o, D, e)
            }
        }
        return r
    }
    function fa(t) {
        re(t) || (!function(t) {
            try {
                var e = u("MutationObserver")
                  , n = e in window ? new window[e](Hi($n)) : null;
                n && (n.observe(t, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }),
                zn.push(n))
            } catch (t) {
                jr(2, 0, t ? t.name : null)
            }
        }(t),
        Rn(t))
    }
    function ha(t) {
        var e = t.textContent ? t.textContent.trim() : ""
          , n = t.dataset ? Object.keys(t.dataset).length : 0;
        return (0 === e.length || n > 0 || t.id.length > 0) && (e = pa(t.sheet)),
        e
    }
    function pa(t) {
        var e = ""
          , n = null;
        try {
            n = t ? t.cssRules : []
        } catch (t) {
            if (jr(1, 1, t ? t.name : null),
            t && "SecurityError" !== t.name)
                throw t
        }
        if (null !== n)
            for (var a = 0; a < n.length; a++)
                e += n[a].cssText;
        return e
    }
    var va = []
      , ga = []
      , ma = null
      , ya = null
      , ba = "claritySheetId"
      , wa = "claritySheetNum"
      , ka = {}
      , Sa = {}
      , Ea = [];
    function Oa(t, e) {
        if (-1 === Ea.indexOf(t) && Ea.push(t),
        e = e || s(),
        null == t ? void 0 : t.adoptedStyleSheets) {
            X(36, 1);
            for (var n = [], a = 0, r = t.adoptedStyleSheets; a < r.length; a++) {
                var i = r[a]
                  , o = fi.pageNum;
                i[wa] !== o && (i[wa] = o,
                i[ba] = Ni(),
                Na(e, i[ba], 0),
                Na(e, i[ba], 2, pa(i))),
                n.push(i[ba])
            }
            var u = Gt(t, !0);
            ka[u] || (ka[u] = []),
            function(t, e) {
                if (t.length !== e.length)
                    return !1;
                return t.every((function(t, n) {
                    return t === e[n]
                }
                ))
            }(n, ka[u]) || (!function(t, e, n, a) {
                ga.push({
                    time: t,
                    event: 45,
                    data: {
                        id: e,
                        operation: n,
                        newIds: a
                    }
                }),
                Xa(45)
            }(e, t == document ? -1 : Gt(t), 3, n),
            ka[u] = n,
            Sa[u] = e)
        }
    }
    function Ta() {
        ga = [],
        va = []
    }
    function Na(t, e, n, a) {
        va.push({
            time: t,
            event: 46,
            data: {
                id: e,
                operation: n,
                cssRules: a
            }
        }),
        Xa(46)
    }
    var Ma = []
      , xa = null
      , _a = null
      , Ia = null
      , Ca = null
      , Da = null
      , ja = null
      , Aa = "clarityAnimationId"
      , Ra = "clarityOperationCount"
      , La = 20;
    function Pa() {
        Ma = []
    }
    function za(t, e, n, a, r, i, o) {
        Ma.push({
            time: t,
            event: 44,
            data: {
                id: e,
                operation: n,
                keyFrames: a,
                timing: r,
                targetId: i,
                timeline: o
            }
        }),
        Xa(44)
    }
    function Ha(t, e) {
        null === t && (t = Animation.prototype[e],
        Animation.prototype[e] = function() {
            return Wa(this, e),
            t.apply(this, arguments)
        }
        )
    }
    function Wa(t, e) {
        if (to()) {
            var n = t.effect
              , a = Gt(n.target);
            if (null !== a && n.getKeyframes && n.getTiming) {
                if (!t[Aa]) {
                    t[Aa] = Ni(),
                    t[Ra] = 0;
                    var r = n.getKeyframes()
                      , i = n.getTiming();
                    za(s(), t[Aa], 0, JSON.stringify(r), JSON.stringify(i), a)
                }
                if (t[Ra]++ < La) {
                    var o = null;
                    switch (e) {
                    case "play":
                        o = 1;
                        break;
                    case "pause":
                        o = 2;
                        break;
                    case "cancel":
                        o = 3;
                        break;
                    case "finish":
                        o = 4;
                        break;
                    case "commitStyles":
                        o = 5
                    }
                    o && za(s(), t[Aa], o)
                }
            }
        }
    }
    function Xa(t, e, n) {
        return void 0 === e && (e = null),
        void 0 === n && (n = null),
        rt(this, void 0, void 0, (function() {
            var a, r, i, u, c, l, d, f, h, p, v, g, m, b, w, k, S, E, O, T, N, M, x, C, D, j, A, R, L;
            return it(this, (function(P) {
                switch (P.label) {
                case 0:
                    switch (a = n || s(),
                    r = [a, t],
                    t) {
                    case 8:
                        return [3, 1];
                    case 7:
                        return [3, 2];
                    case 45:
                    case 46:
                        return [3, 3];
                    case 44:
                        return [3, 4];
                    case 5:
                    case 6:
                        return [3, 5]
                    }
                    return [3, 12];
                case 1:
                    return i = Te,
                    r.push(i.width),
                    r.push(i.height),
                    _(t, i.width, i.height),
                    kr(r),
                    [3, 12];
                case 2:
                    for (u = 0,
                    c = Fa; u < c.length; u++)
                        l = c[u],
                        (r = [l.time, 7]).push(l.data.id),
                        r.push(l.data.interaction),
                        r.push(l.data.visibility),
                        r.push(l.data.name),
                        kr(r);
                    return ar(),
                    [3, 12];
                case 3:
                    for (d = 0,
                    f = ga; d < f.length; d++)
                        m = f[d],
                        (r = [m.time, m.event]).push(m.data.id),
                        r.push(m.data.operation),
                        r.push(m.data.newIds),
                        kr(r);
                    for (h = 0,
                    p = va; h < p.length; h++)
                        m = p[h],
                        (r = [m.time, m.event]).push(m.data.id),
                        r.push(m.data.operation),
                        r.push(m.data.cssRules),
                        kr(r);
                    return Ta(),
                    [3, 12];
                case 4:
                    for (v = 0,
                    g = Ma; v < g.length; v++)
                        m = g[v],
                        (r = [m.time, m.event]).push(m.data.id),
                        r.push(m.data.operation),
                        r.push(m.data.keyFrames),
                        r.push(m.data.timing),
                        r.push(m.data.timeline),
                        r.push(m.data.targetId),
                        kr(r);
                    return Pa(),
                    [3, 12];
                case 5:
                    if (2 === be(e))
                        return [3, 12];
                    if (!((b = ie()).length > 0))
                        return [3, 11];
                    w = 0,
                    k = b,
                    P.label = 6;
                case 6:
                    return w < k.length ? (S = k[w],
                    0 !== (E = be(e)) ? [3, 8] : [4, Se(e)]) : [3, 10];
                case 7:
                    E = P.sent(),
                    P.label = 8;
                case 8:
                    if (2 === E)
                        return [3, 10];
                    for (O = S.data,
                    T = S.metadata.active,
                    N = S.metadata.suspend,
                    M = S.metadata.privacy,
                    x = function(t) {
                        var e = t.metadata.privacy;
                        return "*T" === t.data.tag && !(0 === e || 1 === e)
                    }(S),
                    C = 0,
                    D = T ? ["tag", "attributes", "value"] : ["tag"]; C < D.length; C++)
                        if (O[j = D[C]])
                            switch (j) {
                            case "tag":
                                A = Ya(S),
                                R = x ? -1 : 1,
                                r.push(S.id * R),
                                S.parent && T && (r.push(S.parent),
                                S.previous && r.push(S.previous)),
                                r.push(N ? "*M" : O[j]),
                                A && 2 === A.length && r.push("".concat("#").concat(qa(A[0]), ".").concat(qa(A[1])));
                                break;
                            case "attributes":
                                for (L in O[j])
                                    void 0 !== O[j][L] && r.push(Ua(L, O[j][L], M));
                                break;
                            case "value":
                                Tt(S.metadata.fraud, S.id, O[j]),
                                r.push(y(O[j], O.tag, M, x))
                            }
                    P.label = 9;
                case 9:
                    return w++,
                    [3, 6];
                case 10:
                    6 === t && I(a),
                    kr(function(t) {
                        for (var e = [], n = {}, a = 0, r = null, i = 0; i < t.length; i++)
                            if ("string" == typeof t[i]) {
                                var o = t[i]
                                  , u = n[o] || -1;
                                u >= 0 ? r ? r.push(u) : (r = [u],
                                e.push(r),
                                a++) : (r = null,
                                e.push(o),
                                n[o] = a++)
                            } else
                                r = null,
                                e.push(t[i]),
                                a++;
                        return e
                    }(r), !o.lean),
                    P.label = 11;
                case 11:
                    return [3, 12];
                case 12:
                    return [2]
                }
            }
            ))
        }
        ))
    }
    function Ya(t) {
        if (null !== t.metadata.size && 0 === t.metadata.size.length) {
            var e = ee(t.id);
            if (e)
                return [Math.floor(100 * e.offsetWidth), Math.floor(100 * e.offsetHeight)]
        }
        return t.metadata.size
    }
    function qa(t) {
        return t.toString(36)
    }
    function Ua(t, e, n) {
        return "".concat(t, "=").concat(y(e, 0 === t.indexOf("data-") ? "data-" : t, n))
    }
    var Fa = []
      , Va = null
      , Ba = {}
      , Ja = []
      , Ga = !1
      , Ka = null;
    function Za(t, e) {
        !1 === Va.has(t) && (Va.set(t, e),
        (Ka = null === Ka && Ga ? new IntersectionObserver(tr,{
            threshold: [0, .05, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
        }) : Ka) && t && t.nodeType === Node.ELEMENT_NODE && Ka.observe(t))
    }
    function Qa(t) {
        return Va && Va.has(t)
    }
    function $a() {
        for (var t = [], e = 0, n = Ja; e < n.length; e++) {
            var a = n[e]
              , r = Gt(a.node);
            r ? (a.state.data.id = r,
            Ba[r] = a.state.data,
            Fa.push(a.state)) : t.push(a)
        }
        Ja = t,
        Fa.length > 0 && Xa(7)
    }
    function tr(t) {
        for (var e = 0, n = t; e < n.length; e++) {
            var a = n[e]
              , r = a.target
              , i = a.boundingClientRect
              , o = a.intersectionRect
              , u = a.rootBounds;
            if (Va.has(r) && i.width + i.height > 0 && u.width > 0 && u.height > 0) {
                var c = r ? Gt(r) : null
                  , s = c in Ba ? Ba[c] : {
                    id: c,
                    name: Va.get(r),
                    interaction: 16,
                    visibility: 0
                }
                  , l = (o ? o.width * o.height * 1 / (u.width * u.height) : 0) > .05 || a.intersectionRatio > .8
                  , d = (l || 10 == s.visibility) && Math.abs(i.top) + u.height > i.height;
                er(r, s, s.interaction, d ? 13 : l ? 10 : 0),
                s.visibility >= 13 && Ka && Ka.unobserve(r)
            }
        }
        Fa.length > 0 && Xa(7)
    }
    function er(t, e, n, a) {
        var r = n > e.interaction || a > e.visibility;
        e.interaction = n > e.interaction ? n : e.interaction,
        e.visibility = a > e.visibility ? a : e.visibility,
        e.id ? (e.id in Ba && r || !(e.id in Ba)) && (Ba[e.id] = e,
        Fa.push(nr(e))) : Ja.push({
            node: t,
            state: nr(e)
        })
    }
    function nr(t) {
        return {
            time: s(),
            data: {
                id: t.id,
                interaction: t.interaction,
                visibility: t.visibility,
                name: t.name
            }
        }
    }
    function ar() {
        Fa = []
    }
    function rr(t) {
        var e = t.composed && t.composedPath ? t.composedPath() : null
          , n = e && e.length > 0 ? e[0] : t.target;
        return Gn = s() + 3e3,
        Zn = s() + 200,
        n && n.nodeType === Node.DOCUMENT_NODE ? n.documentElement : n
    }
    function ir(t, e, n) {
        void 0 === n && (n = null);
        var a = {
            id: 0,
            hash: null,
            privacy: 2,
            node: t
        };
        if (t) {
            var r = ne(t);
            if (null !== r) {
                var i = r.metadata;
                a.id = r.id,
                a.hash = r.hash,
                a.privacy = i.privacy,
                r.region && function(t, e) {
                    var n = ee(t)
                      , a = t in Ba ? Ba[t] : {
                        id: t,
                        visibility: 0,
                        interaction: 16,
                        name: Va.get(n)
                    }
                      , r = 16;
                    switch (e) {
                    case 9:
                        r = 20;
                        break;
                    case 27:
                        r = 30
                    }
                    er(n, a, r, a.visibility)
                }(r.region, e),
                i.fraud && Tt(i.fraud, r.id, n || r.data.value)
            }
        }
        return a
    }
    function or(t, e) {
        return void 0 === e && (e = null),
        rt(this, void 0, void 0, (function() {
            var n, a, r, i, o, u, c, l, d, f, h, p, v, g, m, w, k, S, E, O, T, N, M, x, I, D, j, A, R, L, P, z, H, W, X;
            return it(this, (function(Y) {
                switch (n = e || s(),
                a = [n, t],
                t) {
                case 13:
                case 14:
                case 12:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                    for (r = 0,
                    i = Ge; r < i.length; r++)
                        W = i[r],
                        (o = ir(W.data.target, W.event)).id > 0 && ((a = [W.time, W.event]).push(o.id),
                        a.push(W.data.x),
                        a.push(W.data.y),
                        void 0 !== W.data.id && (a.push(W.data.id),
                        void 0 !== W.data.isPrimary && a.push(W.data.isPrimary.toString())),
                        kr(a),
                        _(W.event, W.data.x, W.data.y));
                    rn();
                    break;
                case 9:
                    for (u = 0,
                    c = Ae; u < c.length; u++)
                        W = c[u],
                        l = ir(W.data.target, W.event, W.data.text),
                        a = [W.time, W.event],
                        d = l.hash ? l.hash.join(".") : "",
                        a.push(l.id),
                        a.push(W.data.x),
                        a.push(W.data.y),
                        a.push(W.data.eX),
                        a.push(W.data.eY),
                        a.push(W.data.button),
                        a.push(W.data.reaction),
                        a.push(W.data.context),
                        a.push(y(W.data.text, "click", l.privacy)),
                        a.push(b(W.data.link)),
                        a.push(d),
                        a.push(W.data.trust),
                        kr(a),
                        lr(W.time, W.event, d, W.data.x, W.data.y, W.data.reaction, W.data.context);
                    He();
                    break;
                case 38:
                    for (f = 0,
                    h = We; f < h.length; f++)
                        W = h[f],
                        a = [W.time, W.event],
                        (P = ir(W.data.target, W.event)).id > 0 && (a.push(P.id),
                        a.push(W.data.action),
                        kr(a));
                    Ye();
                    break;
                case 11:
                    p = Je,
                    a.push(p.width),
                    a.push(p.height),
                    _(t, p.width, p.height),
                    ln(),
                    kr(a);
                    break;
                case 26:
                    v = Tn,
                    a.push(v.name),
                    Cn(),
                    kr(a);
                    break;
                case 27:
                    for (g = 0,
                    m = Ue; g < m.length; g++)
                        W = m[g],
                        w = ir(W.data.target, W.event, W.data.value),
                        (a = [W.time, W.event]).push(w.id),
                        a.push(y(W.data.value, "input", w.privacy, !1, W.data.type)),
                        kr(a);
                    Be();
                    break;
                case 21:
                    (k = bn) && (S = ir(k.start, t),
                    E = ir(k.end, t),
                    a.push(S.id),
                    a.push(k.startOffset),
                    a.push(E.id),
                    a.push(k.endOffset),
                    On(),
                    kr(a));
                    break;
                case 10:
                    for (O = 0,
                    T = dn; O < T.length; O++)
                        W = T[O],
                        N = ir(W.data.target, W.event),
                        M = ir(W.data.top, W.event),
                        x = ir(W.data.bottom, W.event),
                        I = (null == M ? void 0 : M.hash) ? M.hash.join(".") : "",
                        D = (null == x ? void 0 : x.hash) ? x.hash.join(".") : "",
                        N.id > 0 && ((a = [W.time, W.event]).push(N.id),
                        a.push(W.data.x),
                        a.push(W.data.y),
                        a.push(I),
                        a.push(D),
                        kr(a),
                        _(W.event, W.data.x, W.data.y, W.time));
                    dn = [],
                    fn = null,
                    hn = null;
                    break;
                case 42:
                    for (j = 0,
                    A = _e; j < A.length; j++)
                        W = A[j],
                        a = [W.time, W.event],
                        (P = ir(W.data.target, W.event)).id > 0 && ((a = [W.time, W.event]).push(P.id),
                        a.push(W.data.type),
                        a.push(y(W.data.value, "change", P.privacy)),
                        a.push(y(W.data.checksum, "checksum", P.privacy)),
                        kr(a));
                    Ce();
                    break;
                case 39:
                    for (R = 0,
                    L = Mn; R < L.length; R++)
                        W = L[R],
                        a = [W.time, W.event],
                        (P = ir(W.data.target, W.event)).id > 0 && (a.push(P.id),
                        kr(a));
                    _n();
                    break;
                case 22:
                    for (z = 0,
                    H = cr; z < H.length; z++)
                        W = H[z],
                        (a = [W.time, W.event]).push(W.data.type),
                        a.push(W.data.hash),
                        a.push(W.data.x),
                        a.push(W.data.y),
                        a.push(W.data.reaction),
                        a.push(W.data.context),
                        kr(a, !1);
                    sr();
                    break;
                case 28:
                    X = Nn,
                    a.push(X.visible),
                    kr(a),
                    C(n, X.visible),
                    jn()
                }
                return [2]
            }
            ))
        }
        ))
    }
    $a.dn = 24;
    var ur = []
      , cr = [];
    function sr() {
        cr = []
    }
    function lr(t, e, n, a, r, i, o) {
        void 0 === i && (i = 1),
        void 0 === o && (o = 0),
        ur.push({
            time: t,
            event: 22,
            data: {
                type: e,
                hash: n,
                x: a,
                y: r,
                reaction: i,
                context: o
            }
        }),
        _(e, a, r)
    }
    var dr, fr, hr, pr, vr, gr = 0, mr = 0, yr = null, br = 0;
    function wr() {
        pr = !0,
        gr = 0,
        mr = 0,
        br = 0,
        dr = [],
        fr = [],
        hr = {},
        vr = null
    }
    function kr(t, e) {
        if (void 0 === e && (e = !0),
        pr) {
            var n = s()
              , a = t.length > 1 ? t[1] : null
              , r = JSON.stringify(t);
            switch (a) {
            case 5:
                gr += r.length;
            case 37:
            case 6:
            case 43:
            case 45:
            case 46:
                mr += r.length,
                dr.push(r);
                break;
            default:
                fr.push(r)
            }
            H(25);
            var i = function() {
                var t = !1 === o.lean && gr > 0 ? 100 : ji.sequence * o.delay;
                return "string" == typeof o.upload ? Math.max(Math.min(t, 3e4), 100) : o.delay
            }();
            n - br > 2 * i && (q(yr),
            yr = null),
            e && null === yr && (25 !== a && B(),
            yr = Y(Er, i),
            br = n,
            $r(mr))
        }
    }
    function Sr() {
        q(yr),
        Er(!0),
        gr = 0,
        mr = 0,
        br = 0,
        dr = [],
        fr = [],
        hr = {},
        vr = null,
        pr = !1
    }
    function Er(t) {
        return void 0 === t && (t = !1),
        rt(this, void 0, void 0, (function() {
            var e, n, a, r, i, u, c, s;
            return it(this, (function(l) {
                switch (l.label) {
                case 0:
                    return yr = null,
                    (e = !1 === o.lean && mr > 0 && (mr < 1048576 || ji.sequence > 0)) && X(1, 1),
                    $a(),
                    function() {
                        var t = [];
                        cr = [];
                        for (var e = ji.start + ji.duration, n = Math.max(e - 2e3, 0), a = 0, r = ur; a < r.length; a++) {
                            var i = r[a];
                            i.time >= n && (i.time <= e && cr.push(i),
                            t.push(i))
                        }
                        ur = t,
                        or(22)
                    }(),
                    St(),
                    function() {
                        for (var t = 0, e = Ea; t < e.length; t++) {
                            var n = e[t]
                              , a = n == document ? -1 : Gt(n)
                              , r = a in Sa ? Sa[a] : null;
                            Oa(document, r)
                        }
                    }(),
                    n = !0 === t,
                    a = JSON.stringify(Li(n)),
                    r = "[".concat(fr.join(), "]"),
                    i = e ? "[".concat(dr.join(), "]") : "",
                    u = function(t) {
                        return t.p.length > 0 ? '{"e":'.concat(t.e, ',"a":').concat(t.a, ',"p":').concat(t.p, "}") : '{"e":'.concat(t.e, ',"a":').concat(t.a, "}")
                    }({
                        e: a,
                        a: r,
                        p: i
                    }),
                    n ? (s = null,
                    [3, 3]) : [3, 1];
                case 1:
                    return [4, vt(u)];
                case 2:
                    s = l.sent(),
                    l.label = 3;
                case 3:
                    return W(2, (c = s) ? c.length : u.length),
                    Or(u, c, ji.sequence, n),
                    fr = [],
                    e && (dr = [],
                    mr = 0,
                    gr = 0),
                    [2]
                }
            }
            ))
        }
        ))
    }
    function Or(t, e, n, a) {
        if (void 0 === a && (a = !1),
        "string" == typeof o.upload) {
            var r = o.upload
              , i = !1;
            if (a && "sendBeacon"in navigator)
                try {
                    (i = navigator.sendBeacon.bind(navigator)(r, t)) && Nr(n)
                } catch (t) {}
            if (!1 === i) {
                n in hr ? hr[n].attempts++ : hr[n] = {
                    data: t,
                    attempts: 1
                };
                var u = new XMLHttpRequest;
                u.open("POST", r, !0),
                u.timeout = 15e3,
                u.ontimeout = function() {
                    zi(new Error("".concat("Timeout", " : ").concat(r)))
                }
                ,
                null !== n && (u.onreadystatechange = function() {
                    Hi(Tr)(u, n)
                }
                ),
                u.withCredentials = !0,
                e ? (u.setRequestHeader("Accept", "application/x-clarity-gzip"),
                u.send(e)) : u.send(t)
            }
        } else if (o.upload) {
            (0,
            o.upload)(t),
            Nr(n)
        }
    }
    function Tr(t, e) {
        var n = hr[e];
        t && 4 === t.readyState && n && ((t.status < 200 || t.status > 208) && n.attempts <= 1 ? t.status >= 400 && t.status < 500 ? ti(6) : (0 === t.status && (o.upload = o.fallback ? o.fallback : o.upload),
        Or(n.data, null, e)) : (vr = {
            sequence: e,
            attempts: n.attempts,
            status: t.status
        },
        n.attempts > 1 && Zr(2),
        200 === t.status && t.responseText && function(t) {
            for (var e = t && t.length > 0 ? t.split("\n") : [], n = 0, a = e; n < a.length; n++) {
                var r = a[n]
                  , i = r && r.length > 0 ? r.split(/ (.*)/) : [""];
                switch (i[0]) {
                case "END":
                    ti(6);
                    break;
                case "UPGRADE":
                    nt("Auto");
                    break;
                case "ACTION":
                    o.action && i.length > 1 && o.action(i[1]);
                    break;
                case "EXTRACT":
                    i.length > 1 && Yr(i[1]);
                    break;
                case "SIGNAL":
                    i.length > 1 && yt(i[1])
                }
            }
        }(t.responseText),
        0 === t.status && (Or(n.data, null, e, !0),
        ti(3)),
        t.status >= 200 && t.status <= 208 && Nr(e),
        delete hr[e]))
    }
    function Nr(t) {
        1 === t && (Ei(),
        Si())
    }
    var Mr, xr = {};
    function _r(t) {
        var e = t.error || t;
        return e.message in xr || (xr[e.message] = 0),
        xr[e.message]++ >= 5 || e && e.message && (Mr = {
            message: e.message,
            line: t.lineno,
            column: t.colno,
            stack: e.stack,
            source: t.filename
        },
        Ir(31)),
        !0
    }
    function Ir(t) {
        return rt(this, void 0, void 0, (function() {
            var e;
            return it(this, (function(n) {
                switch (e = [s(), t],
                t) {
                case 31:
                    e.push(Mr.message),
                    e.push(Mr.line),
                    e.push(Mr.column),
                    e.push(Mr.stack),
                    e.push(b(Mr.source)),
                    kr(e);
                    break;
                case 33:
                    Cr && (e.push(Cr.code),
                    e.push(Cr.name),
                    e.push(Cr.message),
                    e.push(Cr.stack),
                    e.push(Cr.severity),
                    kr(e, !1));
                    break;
                case 41:
                    Et && (e.push(Et.id),
                    e.push(Et.target),
                    e.push(Et.checksum),
                    kr(e, !1))
                }
                return [2]
            }
            ))
        }
        ))
    }
    _r.dn = 4;
    var Cr, Dr = {};
    function jr(t, e, n, a, r) {
        void 0 === n && (n = null),
        void 0 === a && (a = null),
        void 0 === r && (r = null);
        var i = n ? "".concat(n, "|").concat(a) : "";
        t in Dr && Dr[t].indexOf(i) >= 0 || (Cr = {
            code: t,
            name: n,
            message: a,
            stack: r,
            severity: e
        },
        t in Dr ? Dr[t].push(i) : Dr[t] = [i],
        Ir(33))
    }
    var Ar, Rr = {}, Lr = new Set, Pr = {}, zr = {}, Hr = {}, Wr = {};
    function Xr() {
        Fr()
    }
    function Yr(t) {
        try {
            var e = t && t.length > 0 ? t.split(/ (.*)/) : [""]
              , n = e[0].split(/\|(.*)/)
              , a = parseInt(n[0])
              , r = n.length > 1 ? n[1] : ""
              , i = e.length > 1 ? JSON.parse(e[1]) : {};
            for (var o in Pr[a] = {},
            zr[a] = {},
            Hr[a] = {},
            Wr[a] = r,
            i) {
                var u = parseInt(o)
                  , c = i[o]
                  , s = 2;
                switch (c.startsWith("~") ? s = 0 : c.startsWith("!") && (s = 4),
                s) {
                case 0:
                    var l = c.substring(1, c.length);
                    Pr[a][u] = Jr(l);
                    break;
                case 2:
                    zr[a][u] = c;
                    break;
                case 4:
                    var d = c.substring(1, c.length);
                    Hr[a][u] = d
                }
            }
        } catch (t) {
            jr(8, 1, t ? t.name : null)
        }
    }
    function qr(t) {
        return JSON.parse(JSON.stringify(t))
    }
    function Ur() {
        try {
            for (var t in Pr) {
                var e = parseInt(t);
                if ("" == Wr[e] || document.querySelector(Wr[e])) {
                    var n = Pr[e];
                    for (var a in n) {
                        var r = parseInt(a)
                          , i = (h = Gr(qr(n[r]))) ? JSON.stringify(h).substring(0, 1e4) : h;
                        i && Vr(e, r, i)
                    }
                    var o = zr[e];
                    for (var u in o) {
                        var c = parseInt(u)
                          , s = document.querySelectorAll(o[c]);
                        if (s)
                            Vr(e, c, Array.from(s).map((function(t) {
                                return t.textContent
                            }
                            )).join("<SEP>").substring(0, 1e4))
                    }
                    var l = Hr[e];
                    for (var d in l) {
                        var f = parseInt(d);
                        Vr(e, f, te(l[f]).trim().substring(0, 1e4))
                    }
                }
            }
            Lr.size > 0 && Zr(40)
        } catch (t) {
            jr(5, 1, t ? t.name : null)
        }
        var h
    }
    function Fr() {
        Lr.clear()
    }
    function Vr(t, e, n) {
        var a, r = !1;
        t in Rr || (Rr[t] = {},
        r = !0),
        a = Hr[t],
        0 == Object.keys(a).length || e in Rr[t] && Rr[t][e] == n || (r = !0),
        Rr[t][e] = n,
        r && Lr.add(t)
    }
    function Br() {
        Fr()
    }
    function Jr(t) {
        for (var e = [], n = t.split("."); n.length > 0; ) {
            var a = n.shift()
              , r = a.indexOf("[")
              , i = a.indexOf("{")
              , o = a.indexOf("}");
            e.push({
                name: r > 0 ? a.substring(0, r) : i > 0 ? a.substring(0, i) : a,
                type: r > 0 ? 1 : i > 0 ? 2 : 3,
                condition: i > 0 ? a.substring(i + 1, o) : null
            })
        }
        return e
    }
    function Gr(t, e) {
        if (void 0 === e && (e = window),
        0 == t.length)
            return e;
        var n, a = t.shift();
        if (e && e[a.name]) {
            var r = e[a.name];
            if (1 !== a.type && Kr(r, a.condition))
                n = Gr(t, r);
            else if (Array.isArray(r)) {
                for (var i = [], o = 0, u = r; o < u.length; o++) {
                    var c = u[o];
                    if (Kr(c, a.condition)) {
                        var s = Gr(t, c);
                        s && i.push(s)
                    }
                }
                n = i
            }
            return n
        }
        return null
    }
    function Kr(t, e) {
        if (e) {
            var n = e.split(":");
            return n.length > 1 ? t[n[0]] == n[1] : t[n[0]]
        }
        return !0
    }
    function Zr(t) {
        var e = [s(), t];
        switch (t) {
        case 4:
            var n = T;
            n && ((e = [n.time, n.event]).push(n.data.visible),
            e.push(n.data.docWidth),
            e.push(n.data.docHeight),
            e.push(n.data.screenWidth),
            e.push(n.data.screenHeight),
            e.push(n.data.scrollX),
            e.push(n.data.scrollY),
            e.push(n.data.pointerX),
            e.push(n.data.pointerY),
            e.push(n.data.activityTime),
            e.push(n.data.scrollTime),
            kr(e, !1)),
            x();
            break;
        case 25:
            e.push(L.gap),
            kr(e);
            break;
        case 35:
            e.push(Ar.check),
            kr(e, !1);
            break;
        case 3:
            e.push(et.key),
            kr(e);
            break;
        case 2:
            e.push(vr.sequence),
            e.push(vr.attempts),
            e.push(vr.status),
            kr(e, !1);
            break;
        case 24:
            A.key && e.push(A.key),
            e.push(A.value),
            kr(e);
            break;
        case 34:
            var a = Object.keys(ot);
            if (a.length > 0) {
                for (var r = 0, i = a; r < i.length; r++) {
                    var o = i[r];
                    e.push(o),
                    e.push(ot[o])
                }
                dt(),
                kr(e, !1)
            }
            break;
        case 0:
            var u = Object.keys(z);
            if (u.length > 0) {
                for (var c = 0, l = u; c < l.length; c++) {
                    var d = l[c]
                      , f = parseInt(d, 10);
                    e.push(f),
                    e.push(Math.round(z[d]))
                }
                z = {},
                kr(e, !1)
            }
            break;
        case 1:
            var h = Object.keys(ri);
            if (h.length > 0) {
                for (var p = 0, v = h; p < v.length; p++) {
                    var g = v[p];
                    f = parseInt(g, 10);
                    e.push(f),
                    e.push(ri[g])
                }
                li(),
                kr(e, !1)
            }
            break;
        case 36:
            var m = Object.keys(K);
            if (m.length > 0) {
                for (var y = 0, b = m; y < b.length; y++) {
                    var w = b[y];
                    f = parseInt(w, 10);
                    e.push(f),
                    e.push([].concat.apply([], K[w]))
                }
                $(),
                kr(e, !1)
            }
            break;
        case 40:
            Lr.forEach((function(t) {
                e.push(t);
                var n = [];
                for (var a in Rr[t]) {
                    var r = parseInt(a, 10);
                    n.push(r),
                    n.push(Rr[t][a])
                }
                e.push(n)
            }
            )),
            Fr(),
            kr(e, !1)
        }
    }
    function Qr() {
        Ar = {
            check: 0
        }
    }
    function $r(t) {
        if (0 === Ar.check) {
            var e = Ar.check;
            e = ji.sequence >= 128 ? 1 : e,
            e = ji.pageNum >= 128 ? 7 : e,
            e = s() > 72e5 ? 2 : e,
            (e = t > 10485760 ? 2 : e) !== Ar.check && ti(e)
        }
    }
    function ti(t) {
        Ar.check = t,
        5 !== t && (ki(),
        _o())
    }
    function ei() {
        0 !== Ar.check && Zr(35)
    }
    function ni() {
        Ar = null
    }
    var ai = null
      , ri = null
      , ii = !1;
    function oi() {
        ai = {},
        ri = {},
        ii = !1
    }
    function ui() {
        ai = {},
        ri = {},
        ii = !1
    }
    function ci(t, e) {
        if (e && (e = "".concat(e),
        t in ai || (ai[t] = []),
        ai[t].indexOf(e) < 0)) {
            if (ai[t].length > 128)
                return void (ii || (ii = !0,
                ti(5)));
            ai[t].push(e),
            t in ri || (ri[t] = []),
            ri[t].push(e)
        }
    }
    function si() {
        Zr(1)
    }
    function li() {
        ri = {},
        ii = !1
    }
    function di(t) {
        ci(36, t.toString())
    }
    var fi = null
      , hi = []
      , pi = 0
      , vi = null;
    function gi() {
        var t, e, n;
        vi = null;
        var a = navigator && "userAgent"in navigator ? navigator.userAgent : ""
          , r = null !== (n = null === (e = null === (t = null === Intl || void 0 === Intl ? void 0 : Intl.DateTimeFormat()) || void 0 === t ? void 0 : t.resolvedOptions()) || void 0 === e ? void 0 : e.timeZone) && void 0 !== n ? n : ""
          , i = (new Date).getTimezoneOffset().toString()
          , u = window.location.ancestorOrigins ? Array.from(window.location.ancestorOrigins).toString() : ""
          , c = document && document.title ? document.title : "";
        pi = a.indexOf("Electron") > 0 ? 1 : 0;
        var s, l = function() {
            var t = {
                session: Ni(),
                ts: Math.round(Date.now()),
                count: 1,
                upgrade: null,
                upload: ""
            }
              , e = _i("_clsk", !o.includeSubdomains);
            if (e) {
                var n = e.split("|");
                n.length >= 5 && t.ts - Mi(n[1]) < 18e5 && (t.session = n[0],
                t.count = Mi(n[2]) + 1,
                t.upgrade = Mi(n[3]),
                t.upload = n.length >= 6 ? "".concat("https://").concat(n[5], "/").concat(n[4]) : "".concat("https://").concat(n[4]))
            }
            return t
        }(), f = xi(), h = o.projectId || d(location.host);
        fi = {
            projectId: h,
            userId: f.id,
            sessionId: l.session,
            pageNum: l.count
        },
        o.lean = o.track && null !== l.upgrade ? 0 === l.upgrade : o.lean,
        o.upload = o.track && "string" == typeof o.upload && l.upload && l.upload.length > "https://".length ? l.upload : o.upload,
        ci(0, a),
        ci(3, c),
        ci(1, b(location.href, !!pi)),
        ci(2, document.referrer),
        ci(15, function() {
            var t = Ni();
            if (o.track && Oi(window, "sessionStorage")) {
                var e = sessionStorage.getItem("_cltk");
                t = e || t,
                sessionStorage.setItem("_cltk", t)
            }
            return t
        }()),
        ci(16, document.documentElement.lang),
        ci(17, document.dir),
        ci(26, "".concat(window.devicePixelRatio)),
        ci(28, f.dob.toString()),
        ci(29, f.version.toString()),
        ci(33, u),
        ci(34, r),
        ci(35, i),
        X(0, l.ts),
        X(1, 0),
        X(35, pi),
        navigator && (ci(9, navigator.language),
        X(33, navigator.hardwareConcurrency),
        X(32, navigator.maxTouchPoints),
        X(34, Math.round(navigator.deviceMemory)),
        (s = navigator.userAgentData) && s.getHighEntropyValues ? s.getHighEntropyValues(["model", "platform", "platformVersion", "uaFullVersion"]).then((function(t) {
            var e;
            ci(22, t.platform),
            ci(23, t.platformVersion),
            null === (e = t.brands) || void 0 === e || e.forEach((function(t) {
                ci(24, t.name + "~" + t.version)
            }
            )),
            ci(25, t.model),
            X(27, t.mobile ? 1 : 0)
        }
        )) : ci(22, navigator.platform)),
        screen && (X(14, Math.round(screen.width)),
        X(15, Math.round(screen.height)),
        X(16, Math.round(screen.colorDepth)));
        for (var p = 0, v = o.cookies; p < v.length; p++) {
            var g = v[p]
              , m = _i(g);
            m && ut(g, m)
        }
        !function(t) {
            di(t ? 1 : 0)
        }(o.track),
        Ti(f)
    }
    function mi() {
        vi = null,
        fi = null,
        hi.forEach((function(t) {
            t.called = !1
        }
        ))
    }
    function yi(t, e, n) {
        void 0 === e && (e = !0),
        void 0 === n && (n = !1);
        var a = o.lean ? 0 : 1
          , r = !1;
        fi && (a || !1 === e) && (t(fi, !o.lean),
        r = !0),
        !n && r || hi.push({
            callback: t,
            wait: e,
            recall: n,
            called: r
        })
    }
    function bi() {
        return fi ? [fi.userId, fi.sessionId, fi.pageNum].join(".") : ""
    }
    function wi(t) {
        if (void 0 === t && (t = !0),
        !t)
            return o.track = !1,
            Ci("_clsk", "", -Number.MAX_VALUE),
            Ci("_clck", "", -Number.MAX_VALUE),
            _o(),
            void window.setTimeout(xo, 250);
        to() && (o.track = !0,
        Ti(xi(), 1),
        Ei(),
        di(2))
    }
    function ki() {
        Ci("_clsk", "", 0)
    }
    function Si() {
        !function(t) {
            if (hi.length > 0)
                for (var e = 0; e < hi.length; e++) {
                    var n = hi[e];
                    !n.callback || n.called || n.wait && !t || (n.callback(fi, !o.lean),
                    n.called = !0,
                    n.recall || (hi.splice(e, 1),
                    e--))
                }
        }(o.lean ? 0 : 1)
    }
    function Ei() {
        if (fi) {
            var t = Math.round(Date.now())
              , e = o.upload && "string" == typeof o.upload ? o.upload.replace("https://", "") : ""
              , n = o.lean ? 0 : 1;
            Ci("_clsk", [fi.sessionId, t, fi.pageNum, n, e].join("|"), 1)
        }
    }
    function Oi(t, e) {
        try {
            return !!t[e]
        } catch (t) {
            return !1
        }
    }
    function Ti(t, e) {
        void 0 === e && (e = null),
        e = null === e ? t.consent : e;
        var n = Math.ceil((Date.now() + 31536e6) / 864e5)
          , a = 0 === t.dob ? null === o.dob ? 0 : o.dob : t.dob;
        (null === t.expiry || Math.abs(n - t.expiry) >= 1 || t.consent !== e || t.dob !== a) && Ci("_clck", [fi.userId, 2, n.toString(36), e, a].join("|"), 365)
    }
    function Ni() {
        var t = Math.floor(Math.random() * Math.pow(2, 32));
        return window && window.crypto && window.crypto.getRandomValues && Uint32Array && (t = window.crypto.getRandomValues(new Uint32Array(1))[0]),
        t.toString(36)
    }
    function Mi(t, e) {
        return void 0 === e && (e = 10),
        parseInt(t, e)
    }
    function xi() {
        var t = {
            id: Ni(),
            version: 0,
            expiry: null,
            consent: 0,
            dob: 0
        }
          , e = _i("_clck", !o.includeSubdomains);
        if (e && e.length > 0) {
            for (var n = e.split("|"), a = 0, r = 0, i = document.cookie.split(";"); r < i.length; r++) {
                a += "_clck" === i[r].split("=")[0].trim() ? 1 : 0
            }
            if (1 === n.length || a > 1) {
                var u = "".concat(";").concat("expires=").concat(new Date(0).toUTCString()).concat(";path=/");
                document.cookie = "".concat("_clck", "=").concat(u),
                document.cookie = "".concat("_clsk", "=").concat(u)
            }
            n.length > 1 && (t.version = Mi(n[1])),
            n.length > 2 && (t.expiry = Mi(n[2], 36)),
            n.length > 3 && 1 === Mi(n[3]) && (t.consent = 1),
            n.length > 4 && Mi(n[1]) > 1 && (t.dob = Mi(n[4])),
            o.track = o.track || 1 === t.consent,
            t.id = o.track ? n[0] : t.id
        }
        return t
    }
    function _i(t, e) {
        var n;
        if (void 0 === e && (e = !1),
        Oi(document, "cookie")) {
            var a = document.cookie.split(";");
            if (a)
                for (var r = 0; r < a.length; r++) {
                    var i = a[r].split("=");
                    if (i.length > 1 && i[0] && i[0].trim() === t) {
                        for (var o = Ii(i[1]), u = o[0], c = o[1]; u; )
                            u = (n = Ii(c))[0],
                            c = n[1];
                        return e ? c.endsWith("".concat("~", "1")) ? c.substring(0, c.length - 2) : null : c
                    }
                }
        }
        return null
    }
    function Ii(t) {
        try {
            var e = decodeURIComponent(t);
            return [e != t, e]
        } catch (t) {}
        return [!1, t]
    }
    function Ci(t, e, n) {
        if ((o.track || "" == e) && (navigator && navigator.cookieEnabled || Oi(document, "cookie"))) {
            var a = function(t) {
                return encodeURIComponent(t)
            }(e)
              , r = new Date;
            r.setDate(r.getDate() + n);
            var i = r ? "expires=" + r.toUTCString() : ""
              , u = "".concat(t, "=").concat(a).concat(";").concat(i).concat(";path=/");
            try {
                if (null === vi) {
                    for (var c = location.hostname ? location.hostname.split(".") : [], s = c.length - 1; s >= 0; s--)
                        if (vi = ".".concat(c[s]).concat(vi || ""),
                        s < c.length - 1 && (document.cookie = "".concat(u).concat(";").concat("domain=").concat(vi),
                        _i(t) === e))
                            return;
                    vi = ""
                }
            } catch (t) {
                vi = ""
            }
            document.cookie = vi ? "".concat(u).concat(";").concat("domain=").concat(vi) : u
        }
    }
    var Di, ji = null;
    function Ai() {
        var t = fi;
        ji = {
            version: l,
            sequence: 0,
            start: 0,
            duration: 0,
            projectId: t.projectId,
            userId: t.userId,
            sessionId: t.sessionId,
            pageNum: t.pageNum,
            upload: 0,
            end: 0,
            applicationPlatform: 0,
            url: ""
        }
    }
    function Ri() {
        ji = null
    }
    function Li(t) {
        return ji.start = ji.start + ji.duration,
        ji.duration = s() - ji.start,
        ji.sequence++,
        ji.upload = t && "sendBeacon"in navigator ? 1 : 0,
        ji.end = t ? 1 : 0,
        ji.applicationPlatform = 0,
        ji.url = b(location.href, !1, !0),
        [ji.version, ji.sequence, ji.start, ji.duration, ji.projectId, ji.userId, ji.sessionId, ji.pageNum, ji.upload, ji.end, ji.applicationPlatform, ji.url]
    }
    function Pi() {
        Di = []
    }
    function zi(t) {
        if (Di && -1 === Di.indexOf(t.message)) {
            var e = o.report;
            if (e && e.length > 0) {
                var n = {
                    v: ji.version,
                    p: ji.projectId,
                    u: ji.userId,
                    s: ji.sessionId,
                    n: ji.pageNum
                };
                t.message && (n.m = t.message),
                t.stack && (n.e = t.stack);
                var a = new XMLHttpRequest;
                a.open("POST", e, !0),
                a.send(JSON.stringify(n)),
                Di.push(t.message)
            }
        }
        return t
    }
    function Hi(t) {
        return function() {
            var e = performance.now();
            try {
                t.apply(this, arguments)
            } catch (t) {
                throw zi(t)
            }
            var n = performance.now() - e;
            W(4, n),
            n > o.longTask && (H(7),
            X(6, n),
            jr(9, 0, "".concat(t.dn || t.name, "-").concat(n)))
        }
    }
    var Wi = [];
    function Xi(t, e, n, a) {
        void 0 === a && (a = !1),
        n = Hi(n);
        try {
            t[u("addEventListener")](e, n, a),
            Wi.push({
                event: e,
                target: t,
                listener: n,
                capture: a
            })
        } catch (t) {}
    }
    function Yi() {
        for (var t = 0, e = Wi; t < e.length; t++) {
            var n = e[t];
            try {
                n.target[u("removeEventListener")](n.event, n.listener, n.capture)
            } catch (t) {}
        }
        Wi = []
    }
    var qi = null
      , Ui = null
      , Fi = null
      , Vi = 0;
    function Bi() {
        return !(Vi++ > 20) || (jr(4, 0),
        !1)
    }
    function Ji() {
        Vi = 0,
        Fi !== Ki() && (_o(),
        window.setTimeout(Gi, 250))
    }
    function Gi() {
        xo(),
        X(29, 1)
    }
    function Ki() {
        return location.href ? location.href.replace(location.hash, "") : location.href
    }
    Ji.dn = 1;
    var Zi = !1;
    function Qi() {
        Zi = !0,
        c = performance.now() + performance.timeOrigin,
        ge(),
        Yi(),
        Pi(),
        Fi = Ki(),
        Vi = 0,
        Xi(window, "popstate", Ji),
        null === qi && (qi = history.pushState,
        history.pushState = function() {
            qi.apply(this, arguments),
            to() && Bi() && Ji()
        }
        ),
        null === Ui && (Ui = history.replaceState,
        history.replaceState = function() {
            Ui.apply(this, arguments),
            to() && Bi() && Ji()
        }
        )
    }
    function $i() {
        Fi = null,
        Vi = 0,
        Pi(),
        Yi(),
        ge(),
        c = 0,
        Zi = !1
    }
    function to() {
        return Zi
    }
    function eo() {
        xo(),
        R("clarity", "restart")
    }
    function no() {
        !function() {
            Ot = [],
            X(26, navigator.webdriver ? 1 : 0);
            try {
                X(31, window.top == window.self || window.top == window ? 1 : 2)
            } catch (t) {
                X(31, 0)
            }
        }(),
        Xi(window, "error", _r),
        xr = {},
        Dr = {}
    }
    eo.dn = 2,
    no.dn = 3;
    var ao = Object.freeze({
        __proto__: null,
        start: no,
        stop: function() {
            Dr = {}
        }
    });
    function ro() {
        return rt(this, void 0, void 0, (function() {
            var t, e;
            return it(this, (function(n) {
                switch (n.label) {
                case 0:
                    return t = s(),
                    we(e = {
                        id: bi(),
                        cost: 3
                    }),
                    [4, Pn(document, e, 0, t)];
                case 1:
                    return n.sent(),
                    Oa(document, t),
                    [4, Xa(5, e, t)];
                case 2:
                    return n.sent(),
                    ke(e),
                    [2]
                }
            }
            ))
        }
        ))
    }
    function io() {
        Me(),
        xe(),
        ar(),
        Ka = null,
        Va = new WeakMap,
        Ba = {},
        Ja = [],
        Ga = !!window.IntersectionObserver,
        Ft(),
        o.delayDom ? Xi(window, "load", (function() {
            Qn()
        }
        )) : Qn(),
        me(ro, 1).then((function() {
            Hi(xe)(),
            Hi($a)(),
            Hi(yn)()
        }
        )),
        window.CSSStyleSheet && CSSStyleSheet.prototype && (null === ma && (ma = CSSStyleSheet.prototype.replace,
        CSSStyleSheet.prototype.replace = function() {
            return to() && (X(36, 1),
            this[wa] === fi.pageNum && Na(s(), this[ba], 1, arguments[0])),
            ma.apply(this, arguments)
        }
        ),
        null === ya && (ya = CSSStyleSheet.prototype.replaceSync,
        CSSStyleSheet.prototype.replaceSync = function() {
            return to() && (X(36, 1),
            this[wa] === fi.pageNum && Na(s(), this[ba], 2, arguments[0])),
            ya.apply(this, arguments)
        }
        )),
        function() {
            if (window.Animation && window.Animation.prototype && window.KeyframeEffect && window.KeyframeEffect.prototype && window.KeyframeEffect.prototype.getKeyframes && window.KeyframeEffect.prototype.getTiming && (Pa(),
            Ha(_a, "play"),
            Ha(Ia, "pause"),
            Ha(Ca, "commitStyles"),
            Ha(Da, "cancel"),
            Ha(ja, "finish"),
            null === xa && (xa = Element.prototype.animate,
            Element.prototype.animate = function() {
                var t = xa.apply(this, arguments);
                return Wa(t, "play"),
                t
            }
            ),
            document.getAnimations))
                for (var t = 0, e = document.getAnimations(); t < e.length; t++) {
                    var n = e[t];
                    "finished" === n.playState ? Wa(n, "finish") : "paused" === n.playState || "idle" === n.playState ? Wa(n, "pause") : "running" === n.playState && Wa(n, "play")
                }
        }()
    }
    io.dn = 20;
    var oo = Object.freeze({
        __proto__: null,
        hashText: te,
        start: io,
        stop: function() {
            ar(),
            Va = null,
            Ba = {},
            Ja = [],
            Ka && (Ka.disconnect(),
            Ka = null),
            Ga = !1,
            Vt(),
            function() {
                for (var t = 0, e = zn; t < e.length; t++) {
                    var n = e[t];
                    n && n.disconnect()
                }
                zn = [],
                Kn = {},
                Hn = [],
                Wn = [],
                Vn = [],
                Gn = 0,
                Bn = null,
                Zn = 0
            }(),
            Me(),
            ka = {},
            Sa = {},
            Ea = [],
            Ta(),
            Pa()
        }
    });
    var uo = null;
    function co() {
        uo = null
    }
    function so(t) {
        uo = {
            fetchStart: Math.round(t.fetchStart),
            connectStart: Math.round(t.connectStart),
            connectEnd: Math.round(t.connectEnd),
            requestStart: Math.round(t.requestStart),
            responseStart: Math.round(t.responseStart),
            responseEnd: Math.round(t.responseEnd),
            domInteractive: Math.round(t.domInteractive),
            domComplete: Math.round(t.domComplete),
            loadEventStart: Math.round(t.loadEventStart),
            loadEventEnd: Math.round(t.loadEventEnd),
            redirectCount: Math.round(t.redirectCount),
            size: t.transferSize ? t.transferSize : 0,
            type: t.type,
            protocol: t.nextHopProtocol,
            encodedSize: t.encodedBodySize ? t.encodedBodySize : 0,
            decodedSize: t.decodedBodySize ? t.decodedBodySize : 0
        },
        function(t) {
            rt(this, void 0, void 0, (function() {
                var e, n;
                return it(this, (function(a) {
                    return e = s(),
                    n = [e, t],
                    29 === t && (n.push(uo.fetchStart),
                    n.push(uo.connectStart),
                    n.push(uo.connectEnd),
                    n.push(uo.requestStart),
                    n.push(uo.responseStart),
                    n.push(uo.responseEnd),
                    n.push(uo.domInteractive),
                    n.push(uo.domComplete),
                    n.push(uo.loadEventStart),
                    n.push(uo.loadEventEnd),
                    n.push(uo.redirectCount),
                    n.push(uo.size),
                    n.push(uo.type),
                    n.push(uo.protocol),
                    n.push(uo.encodedSize),
                    n.push(uo.decodedSize),
                    co(),
                    kr(n)),
                    [2]
                }
                ))
            }
            ))
        }(29)
    }
    var lo, fo = 0, ho = 1 / 0, po = 0, vo = 0, go = [], mo = new Map, yo = function() {
        return fo || 0
    }, bo = function() {
        if (!go.length)
            return -1;
        var t = Math.min(go.length - 1, Math.floor((yo() - vo) / 50));
        return go[t].latency
    }, wo = function() {
        vo = yo(),
        go.length = 0,
        mo.clear()
    }, ko = function(t) {
        if (t.interactionId && !(t.duration < 40)) {
            !function(t) {
                "interactionCount"in performance ? fo = performance.interactionCount : t.interactionId && (ho = Math.min(ho, t.interactionId),
                po = Math.max(po, t.interactionId),
                fo = po ? (po - ho) / 7 + 1 : 0)
            }(t);
            var e = go[go.length - 1]
              , n = mo.get(t.interactionId);
            if (n || go.length < 10 || t.duration > (null == e ? void 0 : e.latency)) {
                if (n)
                    t.duration > n.latency && (n.latency = t.duration);
                else {
                    var a = {
                        id: t.interactionId,
                        latency: t.duration
                    };
                    mo.set(a.id, a),
                    go.push(a)
                }
                go.sort((function(t, e) {
                    return e.latency - t.latency
                }
                )),
                go.length > 10 && go.splice(10).forEach((function(t) {
                    return mo.delete(t.id)
                }
                ))
            }
        }
    }, So = ["navigation", "resource", "longtask", "first-input", "layout-shift", "largest-contentful-paint", "event"];
    function Eo() {
        try {
            lo && lo.disconnect(),
            lo = new PerformanceObserver(Hi(Oo));
            for (var t = 0, e = So; t < e.length; t++) {
                var n = e[t];
                PerformanceObserver.supportedEntryTypes.indexOf(n) >= 0 && ("layout-shift" === n && W(9, 0),
                lo.observe({
                    type: n,
                    buffered: !0
                }))
            }
        } catch (t) {
            jr(3, 1)
        }
    }
    function Oo(t) {
        !function(t) {
            for (var e = (!("visibilityState"in document) || "visible" === document.visibilityState), n = 0; n < t.length; n++) {
                var a = t[n];
                switch (a.entryType) {
                case "navigation":
                    so(a);
                    break;
                case "resource":
                    var r = a.name;
                    ci(4, To(r)),
                    r !== o.upload && r !== o.fallback || X(28, a.duration);
                    break;
                case "longtask":
                    H(7);
                    break;
                case "first-input":
                    e && X(10, a.processingStart - a.startTime);
                    break;
                case "event":
                    e && "PerformanceEventTiming"in window && "interactionId"in PerformanceEventTiming.prototype && (ko(a),
                    ci(37, bo().toString()));
                    break;
                case "layout-shift":
                    e && !a.hadRecentInput && W(9, 1e3 * a.value);
                    break;
                case "largest-contentful-paint":
                    e && X(8, a.startTime)
                }
            }
        }(t.getEntries())
    }
    function To(t) {
        var e = document.createElement("a");
        return e.href = t,
        e.host
    }
    function No() {
        co(),
        function() {
            navigator && "connection"in navigator && ci(27, navigator.connection.effectiveType),
            window.PerformanceObserver && PerformanceObserver.supportedEntryTypes ? "complete" !== document.readyState ? Xi(window, "load", Y.bind(this, Eo, 0)) : Eo() : jr(3, 0)
        }()
    }
    Eo.dn = 26,
    Oo.dn = 27,
    No.dn = 25;
    var Mo = [ao, oo, Ln, Object.freeze({
        __proto__: null,
        start: No,
        stop: function() {
            lo && lo.disconnect(),
            lo = null,
            wo(),
            co()
        }
    })];
    function xo(t) {
        void 0 === t && (t = null),
        function() {
            try {
                var t = navigator && "globalPrivacyControl"in navigator && 1 == navigator.globalPrivacyControl;
                return !1 === Zi && "undefined" != typeof Promise && window.MutationObserver && document.createTreeWalker && "now"in Date && "now"in performance && "undefined" != typeof WeakMap && !t
            } catch (t) {
                return !1
            }
        }() && (!function(t) {
            if (null === t || Zi)
                return !1;
            for (var e in t)
                e in o && (o[e] = t[e])
        }(t),
        Qi(),
        wt(),
        Mo.forEach((function(t) {
            return Hi(t.start)()
        }
        )),
        null === t && jo())
    }
    function _o() {
        to() && (Mo.slice().reverse().forEach((function(t) {
            return Hi(t.stop)()
        }
        )),
        kt(),
        $i(),
        void 0 !== Co && (Co[Do] = function() {
            (Co[Do].q = Co[Do].q || []).push(arguments),
            "start" === arguments[0] && Co[Do].q.unshift(Co[Do].q.pop()) && jo()
        }
        ))
    }
    var Io = Object.freeze({
        __proto__: null,
        consent: wi,
        event: R,
        hashText: te,
        identify: ct,
        metadata: yi,
        pause: function() {
            to() && (R("clarity", "pause"),
            null === pe && (pe = new Promise((function(t) {
                ve = t
            }
            ))))
        },
        resume: function() {
            to() && (pe && (ve(),
            pe = null,
            null === he && ye()),
            R("clarity", "resume"))
        },
        set: ut,
        signal: function(t) {
            mt = t
        },
        start: xo,
        stop: _o,
        upgrade: nt,
        version: l
    })
      , Co = window
      , Do = "clarity";
    function jo() {
        if (void 0 !== Co) {
            if (Co[Do] && Co[Do].v)
                return console.warn("Error CL001: Multiple Clarity tags detected.");
            var t = Co[Do] && Co[Do].q || [];
            for (Co[Do] = function(t) {
                for (var e = [], n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
                return Io[t].apply(Io, e)
            }
            ,
            Co[Do].v = l; t.length > 0; )
                Co[Do].apply(Co, t.shift())
        }
    }
    jo()
}();
