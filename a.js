/*
 Copyright WizRocket, Inc. (ver.20250114113536)
        ____ _                    _____
       / ___| | _____   _____ _ _|_   _|_ _ _ __
      | |   | |/ _ \ \ / / _ \ '__|| |/ _` | '_ \
      | |___| |  __/\ V /  __/ |   | | (_| | |_) |
       \____|_|\___| \_/ \___|_|   |_|\__,_| .__/
                                           |_|

*/
window.$WZRK_WR = new function() {
    function Ha(a, b, d, e) {
        var f = !ya && c.m(D) && h.J(D) ? ":OO" === D.slice(-3) : ya = !1;
        if (f)
            q.d("req dropped due to optout cookie: " + D);
        else if (!c.m(D) && Ia < ua - 1 && 150 > b)
            setTimeout(function() {
                Ha(a, b + 1, d, e)
            }, 50);
        else {
            e || (c.m(D) && (a = c.h(a, "gc", D)),
            a = c.Ga(a, d));
            a = Va(a);
            a = c.h(a, "r", (new Date).getTime());
            r.hasOwnProperty("plugin") && (a = c.h(a, "ct_pl", r.plugin));
            -1 != a.indexOf("chrome-extension:") && (a = a.replace("chrome-extension:", "https:"));
            for (f = document.getElementsByClassName("ct-jp-cb"); f[0]; )
                f[0].parentNode.removeChild(f[0]);
            f = ia.createElement("script");
            f.setAttribute("type", "text/javascript");
            f.setAttribute("src", a);
            f.setAttribute("class", "ct-jp-cb");
            f.setAttribute("rel", "nofollow");
            f.async = !0;
            ia.getElementsByTagName("head")[0].appendChild(f);
            q.d("req snt -> url: " + a)
        }
    }
    function Va(a) {
        var b = c.v("useIP");
        "boolean" !== typeof b && (b = !1);
        return c.h(a, "useIP", b ? "true" : "false")
    }
    function Ja() {
        var a = c.l("WZRK_K");
        "undefined" == typeof a && (a = {});
        a.flag = !0;
        c.i("WZRK_K", a)
    }
    function Ka(a) {
        function b(g, k) {
            var m = JSON.parse(JSON.stringify(e)), t = {}, n, p;
            for (p in m)
                m.hasOwnProperty(p) && (m[p] !== g ? t[m[p]] = k[m[p]] : n = p);
            m.splice(n, 1);
            e = JSON.parse(JSON.stringify(m));
            return t
        }
        this.max = a;
        if (a = c.l("WZRK_X")) {
            var d = {};
            var e = [];
            a = a.cache;
            for (var f in a)
                a.hasOwnProperty(f) && (d[a[f][0]] = a[f][1],
                e.push(a[f][0]));
            this.cache = d
        } else
            this.cache = {},
            e = [];
        this.get = function(g) {
            var k = this.cache[g];
            k && (this.cache = b(g, this.cache),
            this.cache[g] = k,
            e.push(g));
            this.Ba(this.cache);
            return k
        }
        ;
        this.set = function(g, k) {
            var m = e;
            null != this.cache[g] ? this.cache = b(g, this.cache) : m.length === this.max && (this.cache = b(m[0], this.cache));
            this.cache[g] = k;
            e[e.length - 1] !== g && e.push(g);
            this.Ba(this.cache)
        }
        ;
        this.Ba = function(g) {
            var k = [], m = e, t;
            for (t in m)
                if (m.hasOwnProperty(t)) {
                    var n = [];
                    n.push(m[t]);
                    n.push(g[m[t]]);
                    k.push(n)
                }
            c.i("WZRK_X", {
                cache: k
            })
        }
        ;
        this.ja = function() {
            var g = e;
            return null != g && 1 < g.length ? g[g.length - 2] : -1
        }
        ;
        this.Ua = function() {
            if (e.length)
                return e[e.length - 1]
        }
    }
    function La(a) {
        var b = {
            type: "data"
        };
        c.m(a) && (b.g = a);
        b.action = "unregister";
        b.id = ba;
        a = c.G();
        b.s = a.s;
        b = c.o(JSON.stringify(b));
        a = U;
        a = c.h(a, "type", "data");
        a = c.h(a, "d", b);
        c.i("WZRK_FPU", !1);
        c.I(a, !0);
        b = c.l("WZRK_PSD");
        c.$(b)
    }
    function Ma(a) {
        c.Ha(a.evtName);
        a = c.D(a, void 0);
        c.S(a);
        a.WZRK_CAMP = c.ha();
        a = c.o(JSON.stringify(a));
        var b = U;
        b = c.h(b, "type", "push");
        b = c.h(b, "d", a);
        c.O(b, !1)
    }
    function Wa(a) {
        var b = "=".repeat((4 - a.length % 4) % 4);
        a = window.atob((a + b).replace(/\-/g, "+").replace(/_/g, "/"));
        b = [];
        for (var d = 0; d < a.length; d++)
            b.push(a.charCodeAt(d));
        return new Uint8Array(b)
    }
    var ja = "wzrkt.com", U, Na, Oa, c = this, ia = document, V = window.location.hostname, aa, q = window.console, Pa = 0, za = 0, ka = {}, Qa = 0, la = {}, Ra = 0, Aa = !1, ma = [], Ba, D, M, ba, Sa, va = {}, W = !1, da = !1, na, oa, F, L, X, K, Ca, Da, Ea, Fa = null, r = window.wizrocket, ua = 0, Ia = 0;
    "undefined" != typeof clevertap ? (r = clevertap,
    window.wizrocket = clevertap) : window.clevertap = r;
    var ea;
    c.ab = function() {
        return 1 === Ra
    }
    ;
    c.da = function() {
        var a = ia.createElement("script");
        a.setAttribute("type", "text/javascript");
        a.setAttribute("id", "wzrk-alert-js");
        a.setAttribute("src", "https://d2r1yp2w7bby2u.cloudfront.net/js/wzrk_dialog.min.js");
        document.getElementsByTagName("body")[0].appendChild(a);
        return a
    }
    ;
    c.Aa = function() {
        var a = ia.getElementById("wzrk-alert-js");
        a.parentNode.removeChild(a)
    }
    ;
    c.Oa = function(a, b) {
        ea = a;
        null != b && c.ib(b);
        ea && pa.Z ? c.ma(pa.Na) : !ea && pa.Z && q.e("Ensure that web push notifications are fully enabled and integrated before requesting them")
    }
    ;
    c.ba = function(a, b, d, e) {
        -1 !== navigator.userAgent.indexOf("Chrome") || -1 !== navigator.userAgent.indexOf("Firefox") ? c.kb(a, b) : -1 !== navigator.userAgent.indexOf("Safari") && c.lb(d, e)
    }
    ;
    c.lb = function(a, b) {
        "undefined" === typeof a && q.e("Ensure that APNS Web Push ID is supplied");
        "undefined" === typeof b && q.e("Ensure that APNS Web Push service path is supplied");
        "safari"in window && "pushNotification"in window.safari && window.safari.pushNotification.requestPermission(b, a, {}, function(d) {
            if ("granted" === d.permission) {
                var e = JSON.parse(JSON.stringify(d));
                e.endpoint = d.deviceToken;
                e.browser = "Safari";
                c.i("WZRK_PSD", e);
                c.$(e);
                q.K("Safari Web Push registered. Device Token: " + d.deviceToken)
            } else
                "denied" === d.permission && q.K("Error subscribing to Safari web push")
        })
    }
    ;
    c.kb = function(a, b) {
        var d = "";
        if ("serviceWorker"in navigator)
            navigator.serviceWorker.register(b).then(function(e) {
                d = e.scope;
                return "undefined" !== typeof __wzrk_account_id ? new Promise(function(f) {
                    return setTimeout(function() {
                        return f(e)
                    }, 5E3)
                }
                ) : /^(\.?)(\/?)([^/]*).js$/.test(b) ? navigator.serviceWorker.ready : -1 !== navigator.userAgent.indexOf("Chrome") ? new Promise(function(f) {
                    return setTimeout(function() {
                        return f(e)
                    }, 5E3)
                }
                ) : navigator.serviceWorker.getRegistrations()
            }).then(function(e) {
                -1 !== navigator.userAgent.indexOf("Firefox") && Array.isArray(e) && (e = e.filter(function(g) {
                    return g.scope === d
                })[0]);
                var f = {
                    userVisibleOnly: !0
                };
                null != Fa && (f.applicationServerKey = Wa(Fa));
                e.pushManager.subscribe(f).then(function(g) {
                    q.K("Service Worker registered. Endpoint: " + g.endpoint);
                    g = JSON.parse(JSON.stringify(g));
                    -1 !== navigator.userAgent.indexOf("Chrome") ? (g.endpoint = g.endpoint.split("/").pop(),
                    g.browser = "Chrome") : -1 !== navigator.userAgent.indexOf("Firefox") && (g.endpoint = g.endpoint.split("/").pop(),
                    g.browser = "Firefox");
                    c.G();
                    c.i("WZRK_PSD", g);
                    c.$(g);
                    "undefined" !== typeof a && "function" === typeof a && a()
                })["catch"](function(g) {
                    q.K("Error subscribing: " + g);
                    e.pushManager.getSubscription().then(function(k) {
                        if (null !== k)
                            k.unsubscribe().then(function() {
                                q.K("Unsubscription successful")
                            })["catch"](function(m) {
                                q.K("Error unsubscribing: " + m)
                            })
                    })
                })
            })["catch"](function(e) {
                q.K("error registering service worker: " + e)
            })
    }
    ;
    c.$ = function(a) {
        if (a) {
            a = c.D(a, !0);
            a = JSON.stringify(a);
            var b = U;
            b = c.h(b, "type", "data");
            b = c.h(b, "d", c.o(a));
            c.I(b);
            h.j() && window.localStorage.setItem("WZRK_WPR", "ok")
        }
    }
    ;
    c.Qa = function() {
        return D
    }
    ;
    c.Wa = function() {
        q = {
            e: function(k) {
                window.console && console.error((new Date).getTime() + " " + k)
            },
            d: function(k) {
                window.console && c.Za() && console.debug((new Date).getTime() + " " + k)
            },
            K: function(k) {
                window.console && console.log((new Date).getTime() + " " + k)
            }
        };
        c.B("WZRK_P", window.location.hostname);
        c.Pa();
        if ("undefined" == typeof r.account[0])
            q.e(C["embed-error"]);
        else if (ba = r.account[0].id,
        "undefined" == typeof ba || "" == ba)
            q.e(C["embed-error"]);
        else {
            na = "WZRK_S_" + ba;
            "undefined" != typeof r.region && (Sa = r.region,
            ja = Sa + "." + ja);
            U = "https://" + ja + "/a?t=96";
            Na = "https://" + ja + "/r?r=1";
            Oa = "https://" + ja + "/e?r=1";
            var a = location.href
              , b = h.la(location.href.toLowerCase());
            if ("undefined" == typeof b.e || "0" != b.wzrk_ex) {
                c.sa();
                c.cb();
                var d = c.G()
                  , e = "undefined" == typeof d.p ? 0 : d.p;
                d.p = ++e;
                c.Ca(d);
                d = {};
                var f = h.Ra(ia.referrer);
                V != f && ("" != f && (f = 120 < f.length ? f.substring(0, 120) : f,
                d.referrer = f),
                f = b.utm_source || b.wzrk_source,
                "undefined" != typeof f && (f = 120 < f.length ? f.substring(0, 120) : f,
                d.us = f),
                f = b.utm_medium || b.wzrk_medium,
                "undefined" != typeof f && (f = 120 < f.length ? f.substring(0, 120) : f,
                d.um = f),
                f = b.utm_campaign || b.wzrk_campaign,
                "undefined" != typeof f && (f = 120 < f.length ? f.substring(0, 120) : f,
                d.uc = f),
                "undefined" != typeof b.wzrk_medium && (b = b.wzrk_medium,
                b.match(/^email$|^social$|^search$/) && (d.wm = b)));
                d = c.D(d, void 0);
                d.cpg = a;
                d.WZRK_CAMP = c.ha();
                a = U;
                c.S(d);
                "undefined" != d.pg && 1 == d.pg && c.eb(d);
                a = c.h(a, "type", "page");
                a = c.h(a, "d", c.o(JSON.stringify(d)));
                c.O(a, !1);
                var g = function() {
                    var k = U
                      , m = {};
                    m = c.D(m, void 0);
                    k = c.h(k, "type", "ping");
                    k = c.h(k, "d", c.o(JSON.stringify(m)));
                    c.O(k, !1)
                };
                setTimeout(function() {
                    3 >= e && g();
                    c.$a() && setInterval(function() {
                        g()
                    }, 3E5)
                }, 12E4);
                "undefined" == typeof r.session && (r.event.getDetails = function(k) {
                    if (h.H() && ("undefined" == typeof F && (F = c.l("WZRK_EV")),
                    "undefined" != typeof F)) {
                        k = F[k];
                        var m = {};
                        if ("undefined" != typeof k)
                            return m.firstTime = new Date(1E3 * k[1]),
                            m.lastTime = new Date(1E3 * k[2]),
                            m.count = k[0],
                            m
                    }
                }
                ,
                r.profile.getAttribute = function(k) {
                    if (h.H() && ("undefined" == typeof L && (L = c.l("WZRK_PR")),
                    "undefined" != typeof L))
                        return L[k]
                }
                ,
                r.session = {},
                r.session.getTimeElapsed = function() {
                    if (h.H()) {
                        "undefined" != typeof M && (M = c.G());
                        var k = M.s;
                        if ("undefined" != typeof k)
                            return Math.floor(h.F() - k)
                    }
                }
                ,
                r.user = {},
                r.user.getTotalVisits = function() {
                    if (h.H()) {
                        var k = c.v("sc");
                        "undefined" == typeof k && (k = 1);
                        return k
                    }
                }
                ,
                r.session.getPageCount = function() {
                    if (h.H())
                        return "undefined" != typeof M && (M = c.G()),
                        M.p
                }
                ,
                r.user.getLastVisit = function() {
                    if (h.H()) {
                        var k = c.v("ps");
                        if ("undefined" != typeof k)
                            return new Date(1E3 * k)
                    }
                }
                );
                Ra = 1
            }
        }
    }
    ;
    c.l = function(a) {
        if (la.hasOwnProperty(a))
            return la[a];
        var b = h.j() ? window.localStorage[a] : c.N(a);
        if ("undefined" != typeof b && null !== b && "" != b.trim())
            return b = JSON.parse(decodeURIComponent(b)),
            la[a] = b
    }
    ;
    c.i = function(a, b) {
        if ("undefined" != typeof b && null != b)
            try {
                h.j() ? window.localStorage[a] = encodeURIComponent(JSON.stringify(b)) : "WZRK_G" === a ? c.M(a, encodeURIComponent(b), 0, V) : c.M(a, encodeURIComponent(JSON.stringify(b)), 0, V),
                la[a] = b
            } catch (d) {}
    }
    ;
    c.ta = function(a) {
        if (h.isArray(a))
            for (; 0 < a.length; ) {
                var b = a.shift();
                if (!h.J(b)) {
                    q.e(C["event-error"]);
                    break
                }
                1024 < b.length && (b = b.substring(0, 1024),
                c.L(510, b + "... length exceeded 1024 chars. Trimmed."));
                if ("Stayed" == b || "UTM Visited" == b || "App Launched" == b || "Notification Sent" == b || "Notification Viewed" == b || "Notification Clicked" == b)
                    c.L(513, b + " is a restricted system event. It cannot be used as an event name.");
                else {
                    var d = {
                        type: "event"
                    };
                    d.evtName = h.W(b, Ga);
                    if (0 != a.length) {
                        var e = a.shift();
                        if (h.C(e)) {
                            if ("Charged" == b) {
                                if (!c.Xa(e)) {
                                    c.L(511, "Charged event structure invalid. Not sent.");
                                    continue
                                }
                            } else if (!c.oa(e)) {
                                c.L(512, b + " event structure invalid. Not sent.");
                                continue
                            }
                            d.evtData = e
                        } else
                            a.unshift(e)
                    }
                    Ma(d)
                }
            }
    }
    ;
    c.Ha = function(a) {
        if (h.j()) {
            "undefined" == typeof F && (F = c.l("WZRK_EV"),
            "undefined" == typeof F && (F = {}));
            var b = h.F()
              , d = F[a];
            "undefined" != typeof d ? (d[2] = b,
            d[0]++) : (d = [],
            d.push(1),
            d.push(b),
            d.push(b));
            F[a] = d;
            c.i("WZRK_EV", F)
        }
    }
    ;
    c.T = function(a, b) {
        if (h.j()) {
            "undefined" == typeof L && (L = c.l("WZRK_PR"),
            "undefined" == typeof L && (L = {}));
            if ("undefined" != typeof a._custom) {
                var d = a._custom, e;
                for (e in d)
                    d.hasOwnProperty(e) && (a[e] = d[e]);
                delete a._custom
            }
            for (var f in a)
                !a.hasOwnProperty(f) || L.hasOwnProperty(f) && !b || (L[f] = a[f]);
            "undefined" != typeof L._custom && delete L._custom;
            c.i("WZRK_PR", L)
        }
    }
    ;
    c.eb = function(a) {
        h.H() && (a.dsync = !0)
    }
    ;
    c.Ga = function(a, b) {
        return "undefined" !== typeof b && !0 === b ? c.h(a, "arp", c.o(JSON.stringify({
            skipResARP: !0
        }))) : h.j() && "undefined" != typeof window.localStorage.WZRK_ARP ? c.h(a, "arp", c.o(JSON.stringify(c.l("WZRK_ARP")))) : a
    }
    ;
    c.S = function(a) {
        da = c.ga("clear");
        void 0 !== da && da && (a.rc = !0,
        q.d("reset cookie sent in request and cleared from meta for future requests."));
        if (h.H()) {
            var b = c.v("lsTime")
              , d = c.v("exTs");
            "undefined" == typeof b || "undefined" == typeof d ? a.dsync = !0 : b + d < h.F() && (a.dsync = !0)
        }
    }
    ;
    c.ha = function() {
        if (h.j()) {
            var a = h.U();
            var b = []
              , d = a.global;
            a = a[h.ka()];
            if ("undefined" != typeof d) {
                var e = Object.keys(d), f;
                for (f in e)
                    if (e.hasOwnProperty(f)) {
                        var g = 0
                          , k = 0
                          , m = e[f];
                        "tc" != m && ("undefined" != typeof a && "undefined" != typeof a[m] && (g = a[m]),
                        "undefined" != typeof d && "undefined" != typeof d[m] && (k = d[m]),
                        b.push([m, g, k]))
                    }
            }
            d = 0;
            "undefined" != typeof a && "undefined" != typeof a.tc && (d = a.tc);
            return b = {
                wmp: d,
                tlc: b
            }
        }
    }
    ;
    c.ra = function() {
        q.d("logout called");
        Ja()
    }
    ;
    c.clear = function() {
        q.d("clear called. Reset flag has been set.");
        W = !0;
        q.d("Block request is true");
        la = {};
        h.j() && (delete window.localStorage.WZRK_G,
        delete window.localStorage.WZRK_K,
        delete window.localStorage.WZRK_PR,
        delete window.localStorage.WZRK_EV,
        delete window.localStorage.WZRK_META,
        delete window.localStorage.WZRK_ARP,
        delete window.localStorage.WZRK_CAMP,
        delete window.localStorage.WZRK_CHARGED_ID);
        c.B("WZRK_G", aa);
        c.B("WZRK_CAMP", V);
        c.B("WZRK_K", V);
        c.B(na, aa);
        c.B("WZRK_ARP", aa);
        D = null;
        M = "";
        c.u("clear", !0)
    }
    ;
    c.Ia = function(a) {
        if ("undefined" !== typeof a.skipResARP && a.skipResARP)
            q.d("Update ARP Request rejected", a);
        else {
            var b = "undefined" !== typeof a.isOUL && !0 === a.isOUL ? !0 : !1;
            if (h.j())
                try {
                    var d = c.l("WZRK_ARP");
                    if ("undefined" == typeof d || b)
                        d = {};
                    for (var e in a)
                        a.hasOwnProperty(e) && (-1 == a[e] ? delete d[e] : d[e] = a[e]);
                    c.i("WZRK_ARP", d)
                } catch (f) {
                    q.e("Unable to parse ARP JSON: " + f)
                }
        }
    }
    ;
    c.ya = function(a) {
        if (h.isArray(a) && 0 < a.length)
            for (var b in a)
                if (a.hasOwnProperty(b)) {
                    var d = a[b]
                      , e = {};
                    if ("undefined" != typeof d.Site) {
                        var f = d.Site;
                        if (h.A(f) || !c.qa(f))
                            break
                    } else
                        "undefined" != typeof d.Facebook ? (d = d.Facebook,
                        h.A(d) || d.error || (f = c.ua(d))) : "undefined" != typeof d["Google Plus"] && (d = d["Google Plus"],
                        h.A(d) || d.error || (f = c.va(d)));
                    "undefined" == typeof f || h.A(f) || (e.type = "profile",
                    "undefined" === typeof f.tz && (f.tz = (new Date).toString().match(/([A-Z]+[\+-][0-9]+)/)[1]),
                    e.profile = f,
                    c.T(f, !0),
                    e = c.D(e, void 0),
                    c.S(e),
                    e = c.o(JSON.stringify(e)),
                    d = U,
                    d = c.h(d, "type", "push"),
                    d = c.h(d, "d", e),
                    c.O(d, W))
                }
    }
    ;
    c.fb = function(a) {
        var b = !0;
        c.i("WZRK_FPU", b);
        if (h.isArray(a) && 0 < a.length)
            for (var d in a)
                if (a.hasOwnProperty(d)) {
                    var e = a[d]
                      , f = {};
                    if ("undefined" != typeof e.Site) {
                        var g = e.Site;
                        if (h.A(g) || !c.qa(g))
                            break
                    } else
                        "undefined" != typeof e.Facebook ? (e = e.Facebook,
                        h.A(e) || e.error || (g = c.ua(e))) : "undefined" != typeof e["Google Plus"] && (e = e["Google Plus"],
                        h.A(e) || e.error || (g = c.va(e)));
                    if ("undefined" != typeof g && !h.A(g)) {
                        f.type = "profile";
                        "undefined" === typeof g.tz && (g.tz = (new Date).toString().match(/([A-Z]+[\+-][0-9]+)/)[1]);
                        f.profile = g;
                        e = [];
                        if (h.j() && ("undefined" != typeof g.Identity && e.push(g.Identity),
                        "undefined" != typeof g.Email && e.push(g.Email),
                        "undefined" != typeof g.GPID && e.push("GP:" + g.GPID),
                        "undefined" != typeof g.FBID && e.push("FB:" + g.FBID),
                        0 < e.length)) {
                            var k = void 0
                              , m = e
                              , t = c.l("WZRK_K")
                              , n = c.l("WZRK_G");
                            if ("undefined" == typeof t)
                                t = {},
                                e = m;
                            else {
                                e = t.id;
                                var p = !1
                                  , H = !1;
                                null == e && (e = m[0],
                                p = !0);
                                null == K && h.j() && (K = new Ka(100));
                                if (p)
                                    c.m(n) && (K.set(e, n),
                                    W = !1);
                                else
                                    for (k in m)
                                        if (m.hasOwnProperty(k)) {
                                            var E = m[k];
                                            if (K.cache[E]) {
                                                e = E;
                                                H = !0;
                                                break
                                            }
                                        }
                                H ? (e !== K.Ua() ? (W = !1,
                                q.d("Block request is false"),
                                h.j() && (delete window.localStorage.WZRK_PR,
                                delete window.localStorage.WZRK_EV,
                                delete window.localStorage.WZRK_META,
                                delete window.localStorage.WZRK_ARP,
                                delete window.localStorage.WZRK_CAMP,
                                delete window.localStorage.WZRK_CHARGED_ID),
                                c.B("WZRK_CAMP", V),
                                c.B(na, aa),
                                c.B("WZRK_ARP", aa),
                                M = "") : (b = !1,
                                c.i("WZRK_FPU", b)),
                                k = K.get(e),
                                K.set(e, k),
                                c.i("WZRK_G", k),
                                D = k,
                                k = K.ja(),
                                c.l("WZRK_FPU") && -1 !== k && La(K.cache[k])) : (p ? c.m(n) && (D = n,
                                c.i("WZRK_G", n),
                                b = !1) : c.clear(),
                                c.i("WZRK_FPU", !1),
                                e = m[0])
                            }
                            t.id = e;
                            c.i("WZRK_K", t)
                        }
                        c.T(g, !0);
                        f = c.D(f, void 0);
                        c.S(f);
                        b && (f.isOUL = !0);
                        f = c.o(JSON.stringify(f));
                        e = U;
                        e = c.h(e, "type", "push");
                        e = c.h(e, "d", f);
                        c.O(e, W, b)
                    }
                }
    }
    ;
    c.wa = function(a) {
        h.isArray(a) && 0 < a.length && (a = a.pop(),
        "undefined" != typeof a && h.C(a) && ("undefined" != typeof a.Site && 0 < Object.keys(a.Site).length || "undefined" != typeof a.Facebook && 0 < Object.keys(a.Facebook).length || "undefined" != typeof a["Google Plus"] && 0 < Object.keys(a["Google Plus"]).length) ? (Ja(),
        c.fb([a])) : q.e("Profile object is in incorrect format"))
    }
    ;
    c.cb = function() {
        "undefined" === typeof r.onUserLogin && (r.onUserLogin = []);
        r.onUserLogin.push = function() {
            c.wa(Array.prototype.slice.call(arguments));
            return 0
        }
        ;
        "undefined" === typeof r.privacy && (r.privacy = []);
        r.privacy.push = function() {
            c.xa(Array.prototype.slice.call(arguments));
            return 0
        }
        ;
        r.event.push = function() {
            c.ta(Array.prototype.slice.call(arguments));
            return 0
        }
        ;
        "undefined" === typeof r.notifications && (r.notifications = []);
        r.notifications.push = function() {
            c.Ea(Array.prototype.slice.call(arguments));
            return 0
        }
        ;
        r.profile.push = function() {
            c.ya(Array.prototype.slice.call(arguments));
            return 0
        }
        ;
        r.logout = c.ra;
        r.clear = c.clear;
        c.wa(r.onUserLogin);
        c.xa(r.privacy);
        c.ta(r.event);
        c.ya(r.profile);
        for (c.Ea(r.notifications); 0 < r.notifications.length; )
            r.notifications.pop()
    }
    ;
    var ya = !1;
    c.xa = function(a) {
        if (h.isArray(a) && 0 < a.length) {
            var b = a.find(function(g) {
                return g.hasOwnProperty("optOut")
            });
            a = a.find(function(g) {
                return g.hasOwnProperty("useIP")
            });
            var d = {}
              , e = {};
            if (b) {
                var f = b.optOut;
                "boolean" === typeof f && (e.ct_optout = f,
                ya = !f)
            }
            c.u("useIP", a && "boolean" === typeof a.useIP ? a.useIP : !1);
            h.A(e) || (d.type = "profile",
            d.profile = e,
            d = c.D(d, void 0),
            b = c.o(JSON.stringify(d)),
            a = U,
            a = c.h(a, "type", "push"),
            a = c.h(a, "d", b),
            a = c.h(a, "optOut", f ? "true" : "false"),
            c.O(a, W))
        }
    }
    ;
    c.O = function(a, b, d) {
        var e = h.F();
        a = c.h(a, "rn", ++ua);
        a = a + "&i=" + e + "&sn=" + za;
        c.Ja(a, ua);
        !W || b || void 0 !== da && da ? (e == Pa ? za++ : (Pa = e,
        za = 0),
        c.I(a, !1, d)) : q.d("Not fired due to block request - " + W + " or clearCookie - " + da)
    }
    ;
    c.va = function(a) {
        var b = {};
        "undefined" != typeof a.displayName && (b.Name = a.displayName);
        "undefined" != typeof a.id && (b.GPID = a.id + "");
        "undefined" != typeof a.gender && ("male" == a.gender ? b.Gender = "M" : "female" == a.gender ? b.Gender = "F" : "other" == a.gender && (b.Gender = "O"));
        "undefined" != typeof a.image && 0 == a.image.isDefault && (b.Photo = a.image.url.split("?sz")[0]);
        if ("undefined" != typeof a.emails)
            for (var d = 0; d < a.emails.length; d++) {
                var e = a.emails[d];
                "account" == e.type && (b.Email = e.value)
            }
        if ("undefined" != typeof a.organizations)
            for (b.Employed = "N",
            d = 0; d < a.organizations.length; d++)
                "work" == a.organizations[d].type && (b.Employed = "Y");
        "undefined" != typeof a.birthday && (d = a.birthday.split("-"),
        b.DOB = window.$WZRK_WR.setDate(d[0] + d[1] + d[2]));
        "undefined" != typeof a.relationshipStatus && (b.Married = "N",
        "married" == a.relationshipStatus && (b.Married = "Y"));
        q.d("gplus usr profile " + JSON.stringify(b));
        return b
    }
    ;
    c.ua = function(a) {
        var b = {};
        b.Name = a.name;
        "undefined" != typeof a.id && (b.FBID = a.id + "");
        b.Gender = "male" == a.gender ? "M" : "female" == a.gender ? "F" : "O";
        "undefined" != a.relationship_status && (b.Married = "N",
        "Married" == a.relationship_status && (b.Married = "Y"));
        a: {
            var d = a.education;
            if ("undefined" != typeof d) {
                for (var e = "", f = "", g = 0; g < d.length; g++) {
                    var k = d[g];
                    if ("undefined" != typeof k.type) {
                        k = k.type;
                        if ("Graduate School" == k) {
                            d = "Graduate";
                            break a
                        }
                        "College" == k ? e = "1" : "High School" == k && (f = "1")
                    }
                }
                if ("1" == e) {
                    d = "College";
                    break a
                }
                if ("1" == f) {
                    d = "School";
                    break a
                }
            }
            d = void 0
        }
        "undefined" !== typeof d && (b.Education = d);
        b.Employed = 0 < ("undefined" !== typeof a.work ? a.work.length : 0) ? "Y" : "N";
        "undefined" !== typeof a.email && (b.Email = a.email);
        "undefined" !== typeof a.birthday && (a = a.birthday.split("/"),
        b.DOB = window.$WZRK_WR.setDate(a[2] + a[0] + a[1]));
        return b
    }
    ;
    c.Sa = function(a, b) {
        c.P("-1", a, b)
    }
    ;
    c.ob = function(a) {
        c.P("0", a)
    }
    ;
    c.pb = function(a) {
        ma = [];
        for (var b = document.getElementsByClassName("ct-unsub-group-input-item"), d = 0; d < b.length; d++) {
            var e = b[d];
            e.name && ma.push({
                name: e.name,
                xb: e.checked
            })
        }
        c.P("2", a)
    }
    ;
    c.Ka = function(a, b) {
        c.Da(b);
        c.P("2", a)
    }
    ;
    c.mb = function(a) {
        a.cUsY && (Ba = a.cUsY)
    }
    ;
    c.Da = function(a) {
        ma = a
    }
    ;
    c.Va = function() {
        return ma
    }
    ;
    c.nb = function(a) {
        c.P("1", a)
    }
    ;
    c.P = function(a, b, d) {
        var e = h.la(location.href)
          , f = e.e;
        e = e.p;
        if ("undefined" !== typeof f) {
            var g = {};
            g.id = ba;
            g.unsubGroups = ma;
            Ba && (g.cUsY = Ba);
            var k = Oa;
            d && (k = c.h(k, "fetchGroups", d));
            b && (k = c.h(k, "encoded", b));
            k = c.h(k, "e", f);
            k = c.h(k, "d", c.o(JSON.stringify(g)));
            e && (k = c.h(k, "p", e));
            "-1" != a && (k = c.h(k, "sub", a));
            c.I(k)
        }
    }
    ;
    c.L = function(a, b) {
        ka.c = a;
        ka.d = b;
        q.e(N + a + ": " + b)
    }
    ;
    c.Za = function() {
        return "undefined" != typeof sessionStorage && "" == sessionStorage.WZRK_D
    }
    ;
    c.$a = function() {
        return "undefined" != typeof wzrk_d && "continuous" == wzrk_d.ping
    }
    ;
    c.o = function(a) {
        q.d("dobj:" + a);
        return S.fa(a)
    }
    ;
    c.D = function(a, b) {
        "undefined" === typeof b && (a = h.za(a));
        h.A(ka) || (a.wzrk_error = ka,
        ka = {});
        a.id = ba;
        c.m(D) && (a.g = D);
        b = c.G();
        a.s = b.s;
        a.pg = "undefined" == typeof b.p ? 1 : b.p;
        return a
    }
    ;
    c.G = function() {
        var a = c.N(na)
          , b = {};
        null != a && (a = a.replace(Ta, '"'),
        b = JSON.parse(a),
        h.C(b) ? "undefined" != typeof b.t && 1260 < h.F() - b.t && (b = {}) : b = {});
        return M = b
    }
    ;
    c.Ca = function(a) {
        a = JSON.stringify(a);
        c.Y(na, a, 1200, V)
    }
    ;
    c.m = function(a) {
        return null == a || "undefined" == a ? !1 : !0
    }
    ;
    c.ia = function() {
        var a = null;
        if (c.m(D))
            return D;
        if (h.j()) {
            var b = window.localStorage.WZRK_G;
            if (c.m(b)) {
                try {
                    a = JSON.parse(decodeURIComponent(b))
                } catch (d) {
                    q.d("Cannot parse Gcookie from localstorage - must be encoded " + b),
                    32 == b.length ? (a = b,
                    c.i("WZRK_G", b)) : q.e("Illegal guid " + b)
                }
                c.m(a) && c.Y("WZRK_G", a, 31536E4, V)
            }
        }
        c.m(a) || (a = c.N("WZRK_G"),
        !c.m(a) || 0 !== a.indexOf("%") && 0 !== a.indexOf("'") && 0 !== a.indexOf('"') || (a = null),
        c.m(a) && c.i("WZRK_G", a));
        return a
    }
    ;
    c.Pa = function() {
        D = c.ia();
        h.j() && (X = c.v("cs"))
    }
    ;
    c.u = function(a, b) {
        if (h.j()) {
            var d = c.l("WZRK_META");
            "undefined" == typeof d && (d = {});
            void 0 === b ? delete d[a] : d[a] = b;
            c.i("WZRK_META", d)
        }
    }
    ;
    c.v = function(a) {
        if (h.j()) {
            var b = c.l("WZRK_META");
            if ("undefined" != typeof b)
                return b[a]
        }
    }
    ;
    c.ga = function(a) {
        var b = c.v(a);
        c.u(a, void 0);
        return b
    }
    ;
    c.bb = function(a) {
        if ("undefined" === typeof X || X !== a) {
            var b = c.v("cs");
            "undefined" === typeof b ? (c.u("ps", a),
            c.u("cs", a),
            c.u("sc", 1)) : b !== a && (c.u("ps", b),
            c.u("cs", a),
            b = c.v("sc"),
            "undefined" === typeof b && (b = 0),
            c.u("sc", b + 1));
            X = a
        }
    }
    ;
    c.hb = function(a, b, d, e, f) {
        "undefined" === typeof e && (e = 0);
        c.gb(e);
        if (!(e > ua)) {
            if (!c.m(D) || d || "boolean" === typeof f)
                c.m(D) || c.ga("useIP"),
                q.d("Cookie was " + D + " set to " + a),
                (D = a) && h.j() && (null == K && (K = new Ka(100)),
                f = c.l("WZRK_K"),
                null != f && f.id && d && !K.cache[f.id] && (c.i("WZRK_FPU", !0),
                K.set(f.id, a)),
                c.i("WZRK_G", a),
                f = K.ja(),
                c.l("WZRK_FPU") && -1 !== f && La(K.cache[f])),
                c.Y("WZRK_G", a, 31536E4, V),
                c.i("WZRK_G", a);
            d && (W = !1,
            q.d("Resumed requests"));
            h.j() && c.bb(b);
            a = c.G();
            if ("undefined" == typeof a.s || a.s <= b)
                a.s = b,
                a.t = h.F(),
                c.Ca(a);
            d && !Aa && c.sa();
            Ia = e
        }
    }
    ;
    c.sa = function() {
        var a = c.l("WZRK_L");
        if ("undefined" != typeof a && null != a) {
            Aa = !0;
            for (var b in a)
                if (a.hasOwnProperty(b)) {
                    var d = a[b];
                    "undefined" == typeof d.fired && (q.d("Processing backup event : " + d.q),
                    "undefined" != typeof d.q && c.I(d.q),
                    d.fired = !0)
                }
            c.i("WZRK_L", a);
            Aa = !1
        }
    }
    ;
    c.gb = function(a) {
        var b = c.l("WZRK_L");
        "undefined" != typeof b && null != b && "undefined" != typeof b[a] && (q.d("del event: " + a + " data->" + b[a].q),
        delete b[a],
        c.i("WZRK_L", b))
    }
    ;
    c.Ja = function(a, b) {
        var d = c.l("WZRK_L");
        "undefined" == typeof d && (d = {});
        d[b] = {
            q: a
        };
        c.i("WZRK_L", d);
        q.d("stored in WZRK_L reqNo : " + b + "-> " + a)
    }
    ;
    c.Y = function(a, b, d, e) {
        if (e)
            if ("undefined" == typeof aa) {
                e = e.split(".");
                for (var f = "", g = e.length - 1; 0 <= g; g--) {
                    f = "." + e[g] + f;
                    if (c.N(a)) {
                        var k = "test_" + a + g;
                        c.M(k, b, 10, f);
                        if (c.N(k))
                            c.B(k, f);
                        else
                            continue
                    }
                    c.M(a, b, d, f);
                    if (c.N(a) == b) {
                        aa = f;
                        break
                    }
                }
            } else
                c.M(a, b, d, aa);
        else
            c.M(a, b, d, e)
    }
    ;
    c.M = function(a, b, d, e) {
        var f = ""
          , g = "";
        d && (f = new Date,
        f.setTime(f.getTime() + 1E3 * d),
        f = "; expires=" + f.toGMTString());
        e && (g = "; domain=" + e);
        b = encodeURIComponent(b);
        document.cookie = a + "=" + b + f + g + "; path=/"
    }
    ;
    c.N = function(a) {
        a += "=";
        for (var b = document.cookie.split(";"), d = 0; d < b.length; d++) {
            for (var e = b[d]; " " == e.charAt(0); )
                e = e.substring(1, e.length);
            if (0 == e.indexOf(a))
                return decodeURIComponent(e.substring(a.length, e.length))
        }
        return null
    }
    ;
    c.B = function(a, b) {
        a += "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        b && (a = a + " domain=" + b + "; path=/");
        document.cookie = a
    }
    ;
    c.h = function(a, b, d) {
        return a + "&" + b + "=" + encodeURIComponent(d)
    }
    ;
    c.I = function(a, b, d) {
        Ha(a, 1, b, d)
    }
    ;
    c.ea = function(a) {
        if ("undefined" != typeof a && "-1" != a && h.j()) {
            var b = h.U()
              , d = b[X];
            "undefined" == typeof d && (d = {},
            b[X] = d);
            d[a] = "dnd";
            h.aa(b)
        }
        "undefined" != typeof va && (a = va[a],
        "undefined" != typeof a && (document.getElementById(a).style.display = "none",
        "intentPreview" == a && null != document.getElementById("intentOpacityDiv") && (document.getElementById("intentOpacityDiv").style.display = "none")))
    }
    ;
    var pa = {
        Z: !1
    };
    c.Ea = function(a) {
        ea && 0 < a.length ? c.ma(a) : "undefined" === typeof ea && 0 < a.length ? (pa.Z = !0,
        pa.Na = a.slice()) : !1 === ea && 0 < a.length && q.e("Make sure push notifications are fully enabled and integrated")
    }
    ;
    c.ib = function(a) {
        Fa = a
    }
    ;
    c.ma = function(a) {
        if (1 === a.length) {
            if (h.C(a[0])) {
                a = a[0];
                var b = a.titleText;
                var d = a.bodyText;
                var e = a.okButtonText;
                var f = a.rejectButtonText;
                var g = a.okButtonColor;
                var k = a.skipDialog;
                var m = a.askAgainTimeInSeconds;
                var t = a.okCallback;
                var n = a.rejectCallback;
                var p = a.subscriptionCallback;
                var H = a.hidePoweredByCT;
                var E = a.serviceWorkerPath;
                var T = a.httpsPopupPath;
                var Y = a.httpsIframePath;
                var y = a.apnsWebPushId;
                var fa = a.apnsWebPushServiceUrl
            }
        } else
            b = a[0],
            d = a[1],
            e = a[2],
            f = a[3],
            g = a[4],
            k = a[5],
            m = a[6];
        "undefined" === typeof k && (k = !1);
        "undefined" === typeof H && (H = !1);
        "undefined" === typeof E && (E = "/clevertap_sw.js");
        if ("undefined" !== typeof navigator.serviceWorker)
            if (a = "undefined" !== typeof T && "undefined" !== typeof Y,
            "https:" === location.protocol || "localhost" === document.location.hostname || a) {
                if (-1 !== navigator.userAgent.indexOf("Chrome")) {
                    if (Ca = navigator.userAgent.match(/Chrome\/(\d+)/),
                    "undefined" === typeof Ca || 50 > parseInt(Ca[1], 10))
                        return
                } else if (-1 !== navigator.userAgent.indexOf("Firefox")) {
                    if (Da = navigator.userAgent.match(/Firefox\/(\d+)/),
                    "undefined" === typeof Da || 50 > parseInt(Da[1], 10))
                        return
                } else if (-1 !== navigator.userAgent.indexOf("Safari")) {
                    if (Ea = navigator.userAgent.match(/Safari\/(\d+)/),
                    "undefined" === typeof Ea || 50 > parseInt(Ea[1], 10))
                        return
                } else
                    return;
                if (!a) {
                    if ("undefined" === typeof Notification)
                        return;
                    if ("granted" === Notification.permission) {
                        c.ba(p, E, y, fa);
                        return
                    }
                    if ("denied" === Notification.permission)
                        return;
                    if (k) {
                        c.ba(p, E, y, fa);
                        return
                    }
                }
                if (b && d && e && f) {
                    "undefined" !== typeof g && g.match(/^#[a-f\d]{6}$/i) || (g = "#f28046");
                    k = (new Date).getTime() / 1E3;
                    if ("undefined" !== typeof c.v("notif_last_time") && ("undefined" === typeof m && (m = 604800),
                    k - c.v("notif_last_time") < m))
                        return;
                    c.u("notif_last_time", k);
                    a ? (m = document.createElement("iframe"),
                    m.setAttribute("style", "display:none;"),
                    m.setAttribute("src", Y),
                    document.body.appendChild(m),
                    window.addEventListener("message", function(ca) {
                        if ("undefined" !== typeof ca.data) {
                            try {
                                var ha = JSON.parse(ca.data)
                            } catch (l) {
                                return
                            }
                            "undefined" !== typeof ha.state && "ct" === ha.from && "not" === ha.state && (c.da().onload = function() {
                                window.wzrkPermissionPopup.wizAlert({
                                    title: b,
                                    body: d,
                                    confirmButtonText: e,
                                    confirmButtonColor: g,
                                    rejectButtonText: f,
                                    hidePoweredByCT: H
                                }, function(l) {
                                    l ? ("undefined" !== typeof t && "function" === typeof t && t(),
                                    window.open(T)) : "undefined" !== typeof n && "function" === typeof n && n();
                                    c.Aa()
                                })
                            }
                            )
                        }
                    }, !1)) : c.da().onload = function() {
                        window.wzrkPermissionPopup.wizAlert({
                            title: b,
                            body: d,
                            confirmButtonText: e,
                            confirmButtonColor: g,
                            rejectButtonText: f,
                            hidePoweredByCT: H
                        }, function(ca) {
                            ca ? ("undefined" !== typeof t && "function" === typeof t && t(),
                            c.ba(p, E, y, fa)) : "undefined" !== typeof n && "function" === typeof n && n();
                            c.Aa()
                        })
                    }
                } else
                    q.e("Missing input parameters; please specify title, body, ok button and cancel button text")
            } else
                q.e("Make sure you are https or localhost to register for notifications")
    }
    ;
    c.ca = function(a) {
        function b(l, u) {
            if (!("undefined" != typeof l && 0 < l.clientY || (l = "undefined" == typeof u ? E : u,
            null != document.getElementById("intentPreview") || "undefined" == typeof l.display.layout && (/mobile/i.test(navigator.userAgent) || /mini/i.test(navigator.userAgent) || /iPad/i.test(navigator.userAgent) || "ontouchstart"in window || /tablet/i.test(navigator.userAgent))))) {
                var v = l.wzrk_id.split("_")[0];
                if (0 != t(l)) {
                    va[v] = "intentPreview";
                    u = !1;
                    var x = document.createElement("div");
                    x.id = "intentOpacityDiv";
                    x.setAttribute("style", "position: fixed;top: 0;bottom: 0;left: 0;width: 100%;height: 100%;z-index: 2147483646;background: rgba(0,0,0,0.7);");
                    document.body.appendChild(x);
                    var A = document.createElement("div");
                    A.id = "intentPreview";
                    "undefined" == typeof l.display.proto ? (u = !0,
                    A.setAttribute("style", "display:block;overflow:hidden;top:55% !important;left:50% !important;position:fixed;z-index:2147483647;width:600px !important;height:600px !important;margin:-300px 0 0 -300px !important;")) : A.setAttribute("style", l.display.iFrameStyle);
                    document.body.appendChild(A);
                    var B = document.createElement("iframe")
                      , z = 0 == l.display.br ? "0" : "8";
                    B.vb = "0px";
                    B.wb = "0px";
                    B.yb = "0px";
                    B.scrolling = "no";
                    B.id = "wiz-iframe-intent";
                    x = l.display.onClick;
                    var w = "";
                    "" != x && "undefined" != typeof x && (w = "cursor:pointer;");
                    if (1 == l.msgContent.type)
                        z = l.msgContent.html,
                        z = z.replace(/##campaignId##/g, v);
                    else {
                        if ("dark" == l.display.theme) {
                            var G = "#2d2d2e";
                            var O = "#eaeaea";
                            var P = "#353535"
                        } else
                            G = "#ffffff",
                            O = "#000000",
                            P = "#a5a6a6";
                        var I = l.msgContent.title
                          , Q = l.msgContent.description
                          , R = "";
                        "undefined" != typeof l.msgContent.ctaText && "" != l.msgContent.ctaText && (R = "<div class='button'><a href='#'>" + l.msgContent.ctaText + "</a></div>");
                        var J = "";
                        "undefined" != typeof l.msgContent.imageUrl && "" != l.msgContent.imageUrl && (J = "<div style='padding-top:20px;'><img src='" + l.msgContent.imageUrl + "' width='500' alt=" + I + " /></div>");
                        z = '<style type="text/css">body{margin:0;padding:0;}#contentDiv.wzrk{overflow:hidden;padding:0 0 20px 0;text-align:center;' + w + "}#contentDiv.wzrk td{padding:15px 10px;}.wzrkPPtitle{font-weight: bold;font-size: 24px;font-family:arial;word-break: break-word;padding-top:20px;}.wzrkPPdscr{font-size: 14px;font-family:arial;line-height:16px;word-break: break-word;display:inline-block;padding:20px 20px 0 20px;line-height:20px;}.PL15{padding-left:15px;}.wzrkPPwarp{margin:20px 20px 0 5px;padding:0px;border-radius: " + z + "px;box-shadow: 1px 1px 5px #888888;}a.wzrkClose{cursor:pointer;position: absolute;top: 11px;right: 11px;z-index: 2147483647;font-size:19px;font-family:arial;font-weight:bold;text-decoration: none;width: 25px;/*height: 25px;*/text-align: center; -webkit-appearance: none; line-height: 25px;background: #353535;border: #fff 2px solid;border-radius: 100%;box-shadow: #777 2px 2px 2px;color:#fff;}a:hover.wzrkClose{background-color:#d1914a !important;color:#fff !important; -webkit-appearance: none;}#contentDiv .button{padding-top:20px;}#contentDiv .button a{font-size: 14px;font-weight:bold;font-family:arial;text-align:center;display:inline-block;text-decoration:none;padding:0 30px;height:40px;line-height:40px;background:#ea693b;color:#fff;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;}</style><div class='wzrkPPwarp' style='color:" + (O + ";background-color:" + G + ";'><a href='javascript:void(0);' onclick=parent.$WZRK_WR.closeIframe(" + (v + ",'intentPreview'); class='wzrkClose' style='background-color:") + P + ";color:#ffffff'>&times;</a><div id='contentDiv' class='wzrk'><div class='wzrkPPtitle' style='color:" + O + "'>" + I + "</div><div class='wzrkPPdscr' style='color:") + (O + "'>" + Q + "</div>" + J + R + "</div></div>")
                    }
                    B.setAttribute("style", "z-index: 2147483647; display:block; height: 100% !important; width: 100% !important;min-height:80px !important;border:0px !important; border-color:none !important;");
                    A.appendChild(B);
                    v = (B.contentWindow ? B.contentWindow : B.contentDocument.document ? B.contentDocument.document : B.contentDocument).document;
                    v.open();
                    v.write(z);
                    v.close();
                    v = document.getElementById("wiz-iframe-intent").contentDocument.getElementById("contentDiv");
                    f(l);
                    k(x, l, v, "intentPreview", u)
                }
            }
        }
        function d(l) {
            var u = l.display.onClick;
            if (r.hasOwnProperty("notificationCallback") && "undefined" !== typeof r.notificationCallback && "function" === typeof r.notificationCallback) {
                var v = r.notificationCallback;
                if (!n) {
                    var x = {};
                    x.msgContent = l.msgContent;
                    x.msgId = l.wzrk_id;
                    "undefined" !== typeof l.display.kv && (x.kv = l.display.kv);
                    r.raiseNotificationClicked = function() {
                        if ("" != u && "undefined" != typeof u) {
                            var A = l.display.jsFunc;
                            u += m();
                            "undefined" != typeof A ? (c.I(u),
                            g(A, l)) : "1" == l.display.window ? window.open(u, "_blank") : window.location = u
                        }
                    }
                    ;
                    r.raiseNotificationViewed = function() {
                        f(l)
                    }
                    ;
                    v(x);
                    n = !0
                }
            } else
                e(l)
        }
        function e(l) {
            function u() {
                P = document.getElementById("wiz-iframe").contentDocument.getElementById("contentDiv").scrollHeight;
                !0 === x["custom-editor"] || B || (P += 25);
                document.getElementById("wiz-iframe").contentDocument.body.style.margin = "0px";
                document.getElementById("wiz-iframe").style.height = P + "px"
            }
            var v = l.wzrk_id.split("_")[0]
              , x = l.display;
            if (1 == x.layout)
                return b(void 0, l);
            if (0 != t(l)) {
                var A = "wizParDiv" + x.layout;
                if (null == document.getElementById(A)) {
                    va[v] = A;
                    var B = 2 == x.layout
                      , z = document.createElement("div");
                    z.id = A;
                    var w = window.innerHeight
                      , G = window.innerWidth
                      , O = !1;
                    if (B)
                        z.setAttribute("style", x.iFrameStyle);
                    else {
                        var P = 10
                          , I = 5 * G / 100
                          , Q = P + 5 * w / 100
                          , R = 30 * G / 100 + 20
                          , J = "width:30%;";
                        if ((/mobile/i.test(navigator.userAgent) || /mini/i.test(navigator.userAgent)) && 0 == /iPad/i.test(navigator.userAgent))
                            R = 85 * G / 100 + 20,
                            I = 5 * G / 100,
                            Q = 5 * w / 100,
                            J = "width:80%;";
                        else if ("ontouchstart"in window || /tablet/i.test(navigator.userAgent))
                            R = 50 * G / 100 + 20,
                            I = 5 * G / 100,
                            Q = 5 * w / 100,
                            J = "width:50%;";
                        "undefined" == typeof x.proto ? (O = !0,
                        z.setAttribute("style", "display:block;overflow:hidden; bottom:" + Q + "px !important;width:" + R + "px !important;right:" + I + "px !important;position:fixed;z-index:2147483647;")) : z.setAttribute("style", J + x.iFrameStyle)
                    }
                    document.body.appendChild(z);
                    w = document.createElement("iframe");
                    G = 0 == x.br ? "0" : "8";
                    w.frameborder = "0px";
                    w.marginheight = "0px";
                    w.marginwidth = "0px";
                    w.scrolling = "no";
                    w.id = "wiz-iframe";
                    var Z = l.display.onClick;
                    I = "";
                    "" != Z && "undefined" != typeof Z && (I = "cursor:pointer;");
                    if (1 === l.msgContent.type)
                        G = l.msgContent.html,
                        G = G.replace(/##campaignId##/g, v);
                    else {
                        if ("dark" == l.display.theme) {
                            Q = "#2d2d2e";
                            R = "#eaeaea";
                            var wa = J = "#353535"
                        } else
                            Q = "#ffffff",
                            R = "#000000",
                            wa = "#f4f4f4",
                            J = "#a5a6a6";
                        var qa = l.msgContent.title
                          , ra = l.msgContent.description
                          , Ua = "";
                        "undefined" != typeof l.msgContent.imageUrl && "" != l.msgContent.imageUrl && (Ua = "<td class='imgTd' style='background-color:" + wa + "'><img src='" + l.msgContent.imageUrl + "' height='60' width='60'></td>");
                        G = '<style type="text/css">body{margin:0;padding:0;}#contentDiv.wzrk{overflow:hidden;padding:0;text-align:center;' + I + "}#contentDiv.wzrk td{padding:15px 10px;}.wzrkPPtitle{font-weight: bold;font-size: 16px;font-family:arial;padding-bottom:10px;word-break: break-word;}.wzrkPPdscr{font-size: 14px;font-family:arial;line-height:16px;word-break: break-word;display:inline-block;}.PL15{padding-left:15px;}.wzrkPPwarp{margin:20px 20px 0 5px;padding:0px;border-radius: " + G + "px;box-shadow: 1px 1px 5px #888888;}a.wzrkClose{cursor:pointer;position: absolute;top: 11px;right: 11px;z-index: 2147483647;font-size:19px;font-family:arial;font-weight:bold;text-decoration: none;width: 25px;/*height: 25px;*/text-align: center; -webkit-appearance: none; line-height: 25px;background: #353535;border: #fff 2px solid;border-radius: 100%;box-shadow: #777 2px 2px 2px;color:#fff;}a:hover.wzrkClose{background-color:#d1914a !important;color:#fff !important; -webkit-appearance: none;}td{vertical-align:top;}td.imgTd{border-top-left-radius:8px;border-bottom-left-radius:8px;}</style><div class='wzrkPPwarp' style='color:" + (R + ";background-color:" + Q + ";'><a href='javascript:void(0);' onclick=parent.$WZRK_WR.closeIframe(" + (v + ",'" + A + "'); class='wzrkClose' style='background-color:") + J + ";color:#ffffff'>&times;</a><div id='contentDiv' class='wzrk'><table cellpadding='0' cellspacing='0' border='0'><tr>" + Ua + "<td style='vertical-align:top;'><div class='wzrkPPtitle' style='color:" + R + "'>" + qa + "</div><div class='wzrkPPdscr' style='color:") + (R + "'>" + ra + "<div></td></tr></table></div>")
                    }
                    w.setAttribute("style", "z-index: 2147483647; display:block; width: 100% !important; border:0px !important; border-color:none !important;");
                    z.appendChild(w);
                    v = (w.contentWindow ? w.contentWindow : w.contentDocument.document ? w.contentDocument.document : w.contentDocument).document;
                    v.open();
                    v.write(G);
                    v.close();
                    v = navigator.userAgent.toLowerCase();
                    if (-1 !== v.indexOf("safari"))
                        if (-1 < v.indexOf("chrome"))
                            w.onload = function() {
                                u();
                                var sa = document.getElementById("wiz-iframe").contentDocument.getElementById("contentDiv")
                                  , ta = O;
                                f(l);
                                k(Z, l, sa, A, ta)
                            }
                            ;
                        else {
                            var xa = w.contentDocument || w.contentWindow;
                            xa.document && (xa = xa.document);
                            u();
                            var Xa = setInterval(function() {
                                if ("complete" === xa.readyState) {
                                    clearInterval(Xa);
                                    u();
                                    var sa = document.getElementById("wiz-iframe").contentDocument.getElementById("contentDiv")
                                      , ta = O;
                                    f(l);
                                    k(Z, l, sa, A, ta)
                                }
                            }, 10)
                        }
                    else
                        w.onload = function() {
                            u();
                            var sa = document.getElementById("wiz-iframe").contentDocument.getElementById("contentDiv")
                              , ta = O;
                            f(l);
                            k(Z, l, sa, A, ta)
                        }
                }
            }
        }
        function f(l) {
            var u = {
                type: "event",
                evtName: "Notification Viewed"
            };
            u.evtData = {
                wzrk_id: l.wzrk_id,
                wzrk_pivot: l.wzrk_pivot
            };
            Ma(u)
        }
        function g(l, u) {
            l = window.parent[l];
            "function" == typeof l && ("undefined" !== typeof u.display.kv ? l(u.display.kv) : l())
        }
        function k(l, u, v, x, A) {
            if ("" != l && "undefined" != typeof l) {
                if (A)
                    var B = v;
                else
                    v = v.getElementsByClassName("jsCT_CTA"),
                    "undefined" != typeof v && 1 == v.length && (B = v[0]);
                var z = u.display.jsFunc
                  , w = u.display.preview;
                "undefined" == typeof w && (l += m());
                "undefined" != typeof B && (B.onclick = function() {
                    "undefined" != typeof z ? ("undefined" == typeof w && c.I(l),
                    g(z, u),
                    c.ea("-1", x)) : "1" == u.display.window ? window.open(l, "_blank") : window.location = l
                }
                )
            }
        }
        function m() {
            c.m(D) || (D = c.ia());
            null == M && (M = c.G());
            return "&t=wc&d=" + encodeURIComponent(S.fa(D + "|" + M.p + "|" + M.s))
        }
        function t(l) {
            function u(J, Z, wa) {
                var qa = 0
                  , ra = 0;
                "undefined" != typeof J[Z] && (qa = J[Z]);
                qa++;
                "undefined" != typeof J.tc && (ra = J.tc);
                0 > wa && ra++;
                J.tc = ra;
                J[Z] = qa
            }
            var v = l.wzrk_id.split("_")[0]
              , x = h.ka();
            if (h.j()) {
                delete sessionStorage.WZRK_CAMP;
                var A = h.U();
                "undefined" == typeof l.display.wmc && (l.display.wmc = 1);
                var B = -1
                  , z = -1
                  , w = -1
                  , G = -1
                  , O = -1
                  , P = -1;
                "undefined" != typeof l.display.efc && (B = parseInt(l.display.efc, 10));
                "undefined" != typeof l.display.mdc && (z = parseInt(l.display.mdc, 10));
                "undefined" != typeof l.display.tdc && (w = parseInt(l.display.tdc, 10));
                "undefined" != typeof l.display.tlc && (G = parseInt(l.display.tlc, 10));
                "undefined" != typeof l.display.wmp && (O = parseInt(l.display.wmp, 10));
                "undefined" != typeof l.display.wmc && (P = parseInt(l.display.wmc, 10));
                var I = A[X];
                if ("undefined" != typeof I) {
                    var Q = I[v]
                      , R = I.tc;
                    if ("dnd" == Q || 0 < P && R >= P && 0 > B || 0 < z && Q >= z)
                        return !1
                } else
                    I = {},
                    A[X] = I;
                z = A[x];
                if ("undefined" != typeof z) {
                    if (P = z[v],
                    Q = z.tc,
                    0 < O && Q >= O && 0 > B || 0 < w && P >= w)
                        return !1
                } else
                    z = {},
                    A[x] = z;
                w = A.global;
                if ("undefined" != typeof w) {
                    if (A = w[v],
                    0 < G && A >= G)
                        return !1
                } else
                    w = {},
                    A.global = w
            }
            if ("undefined" != typeof l.display.delay && 0 < l.display.delay)
                return x = l.display.delay,
                l.display.delay = 0,
                setTimeout(c.ca, 1E3 * x, a),
                !1;
            u(I, v, B);
            u(z, v, B);
            u(w, v, B);
            l = {};
            l[X] = I;
            l[x] = z;
            l.global = w;
            h.aa(l)
        }
        var n = !1;
        if (document.body) {
            if ("undefined" != typeof a.inapp_notifs)
                for (var p = 0; p < a.inapp_notifs.length; p++) {
                    var H = a.inapp_notifs[p];
                    if ("undefined" == typeof H.display.wtarget_type || 0 == H.display.wtarget_type)
                        d(H);
                    else if (1 == H.display.wtarget_type) {
                        var E = H;
                        window.document.body.onmouseleave = b
                    }
                }
            p = function(l) {
                if ("undefined" == typeof F && (F = c.l("WZRK_EV"),
                "undefined" == typeof F)) {
                    F = l;
                    return
                }
                for (var u in l)
                    if (l.hasOwnProperty(u)) {
                        var v = F[u]
                          , x = l[u];
                        "undefined" != typeof F[u] ? "undefined" != typeof x[0] && x[0] > v[0] && (F[u] = x) : F[u] = x
                    }
            }
            ;
            if (h.j())
                try {
                    if ("undefined" != typeof a.evpr) {
                        var T = a.evpr.events
                          , Y = a.evpr.profile
                          , y = a.evpr.expires_in;
                        c.u("lsTime", h.F());
                        c.u("exTs", y);
                        p(T);
                        c.i("WZRK_EV", F);
                        "undefined" == typeof L ? c.T(Y, !0) : c.T(Y, !1)
                    }
                    "undefined" != typeof a.arp && c.Ia(a.arp);
                    if ("undefined" != typeof a.inapp_stale) {
                        var fa = h.U()
                          , ca = fa.global;
                        if ("undefined" != typeof ca)
                            for (var ha in a.inapp_stale)
                                a.inapp_stale.hasOwnProperty(ha) && delete ca[a.inapp_stale[ha]];
                        h.aa(fa)
                    }
                } catch (l) {
                    q.e("Unable to persist evrp/arp: " + l)
                }
        } else
            6 > Qa && (Qa++,
            setTimeout(c.ca, 1E3, a))
    }
    ;
    c.ub = function(a, b, d) {
        var e = {};
        e.sendTo = a;
        e.targetId = b;
        e.epoch = h.F();
        e.type = null != d ? d : "view";
        e = c.D(e, void 0);
        return c.h(Na, "d", c.o(JSON.stringify(e)))
    }
    ;
    c.tb = function() {
        return '<div class="notice-message">  <a href="[RECORDER_HREF]" class="box">    <div class="avatar"><span class="fa [ICON] fa-4x fa-fw"></span></div>    <div class="info">      <div class="title">[TITLE]</div>      <div class="clearfix"></div>      <div class="text">[TEXT]</div>    </div>    <div class="clearfix"></div>  </a></div><div class="clearfix"></div>'
    }
    ;
    c.sb = function() {
        return '<head><base target="_parent" /><link rel="stylesheet" href="http://static.clevertap.com/fa/font-awesome.css"><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>[STYLE]</style></head>'
    }
    ;
    c.Xa = function(a) {
        if (h.C(a)) {
            for (var b in a)
                if (a.hasOwnProperty(b))
                    if ("Items" == b) {
                        if (!h.isArray(a[b]))
                            return !1;
                        16 < a[b].length && c.L(522, "Charged Items exceed 16 limit. Actual count: " + a[b].length + ". Additional items will be dropped.");
                        for (var d in a[b])
                            if (a[b].hasOwnProperty(d) && (!h.C(a[b][d]) || !c.oa(a[b][d])))
                                return !1
                    } else {
                        if (h.C(a[b]) || h.isArray(a[b]))
                            return !1;
                        h.V(a[b]) && (a[b] = h.X(a[b]))
                    }
            if (h.J(a["Charged ID"]) || h.pa(a["Charged ID"])) {
                b = a["Charged ID"] + "";
                "undefined" == typeof oa && (oa = c.l("WZRK_CHARGED_ID"));
                if ("undefined" != typeof oa && oa.trim() === b.trim())
                    return q.e("Duplicate Charged Id - Dropped" + a),
                    !1;
                oa = b;
                c.i("WZRK_CHARGED_ID", b)
            }
            return !0
        }
        return !1
    }
    ;
    c.oa = function(a) {
        if (h.C(a)) {
            for (var b in a)
                if (a.hasOwnProperty(b)) {
                    if (h.C(a[b]) || h.isArray(a[b]))
                        return !1;
                    h.V(a[b]) && (a[b] = h.X(a[b]))
                }
            return !0
        }
        return !1
    }
    ;
    c.qa = function(a) {
        if (h.C(a))
            for (var b in a)
                if (a.hasOwnProperty(b)) {
                    var d = !0
                      , e = a[b];
                    "undefined" == typeof e ? delete a[b] : ("Gender" != b || e.match(/^M$|^F$/) || (d = !1,
                    q.e(C["gender-error"])),
                    "Employed" != b || e.match(/^Y$|^N$/) || (d = !1,
                    q.e(C["employed-error"])),
                    "Married" != b || e.match(/^Y$|^N$/) || (d = !1,
                    q.e(C["married-error"])),
                    "Education" != b || e.match(/^School$|^College$|^Graduate$/) || (d = !1,
                    q.e(C["education-error"])),
                    "Age" == b && "undefined" != typeof e && (h.na(e) ? a.Age = +e : (d = !1,
                    q.e(C["age-error"]))),
                    "DOB" != b || /^\$D_/.test(e) && 11 == (e + "").length || h.V(e) || (d = !1,
                    q.e(C["dob-error"])),
                    h.V(e) && (a[b] = h.X(e)),
                    "Phone" != b || h.A(e) || (8 < e.length && "+" == e.charAt(0) ? (e = e.substring(1, e.length),
                    h.na(e) ? a.Phone = +e : (d = !1,
                    q.e(C["phone-format-error"] + ". Removed."))) : (d = !1,
                    q.e(C["phone-format-error"] + ". Removed."))),
                    d || delete a[b])
                }
        return d
    }
    ;
    c.setDate = function(a) {
        return h.setDate(a)
    }
    ;
    c.jb = function(a) {
        if (h.J(a) || h.pa(a))
            return "$E_" + a;
        q.e(C["enum-format-error"])
    }
    ;
    c.s = c.hb;
    c.is_onloadcalled = c.ab;
    c.setDate = c.setDate;
    c.enableWebPush = c.Oa;
    c.setEnum = c.jb;
    c.tr = c.ca;
    c.push = c.push;
    c.closeIframe = c.ea;
    c.getEmail = c.Sa;
    c.unSubEmail = c.ob;
    c.unsubEmailGroups = c.pb;
    c.changeSubscriptionGroups = c.Ka;
    c.getSubscriptionGroups = c.Va;
    c.setSubscriptionGroups = c.Da;
    c.setUpdatedCategoryLong = c.mb;
    c.subEmail = c.nb;
    c.logout = c.ra;
    c.clear = c.clear;
    r.getCleverTapID = c.Qa;
    var S = {
        Fa: String.fromCharCode,
        Ta: function() {
            var a = "", b;
            for (b = 0; 25 >= b; b++)
                a += String.fromCharCode(b + 65);
            for (b = 0; 25 >= b; b++)
                a += String.fromCharCode(b + 97);
            for (b = 0; 10 > b; b++)
                a += b;
            return a + "+/="
        },
        Ma: function(a) {
            var b = "", d;
            if (!h.isArray(a))
                return !1;
            var e = a.length;
            for (d = 0; d < e; ++d) {
                0 > a[d] && (a[d] += 256);
                void 0 === a[d] && (a[d] = 0);
                var f = a[d].toString(16);
                1 == f.length && (f = "0" + f);
                b += f
            }
            return b.trim()
        },
        rb: function(a) {
            for (var b = [], d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                b.push(e & 255);
                b.push(e >> 8 & 255)
            }
            return S.Ma(b)
        },
        fa: function(a) {
            if (null == a)
                return "";
            var b = ""
              , d = 0;
            for (a = S.La(a); d < 2 * a.length; ) {
                if (0 == d % 2) {
                    var e = a.charCodeAt(d / 2) >> 8;
                    var f = a.charCodeAt(d / 2) & 255;
                    var g = d / 2 + 1 < a.length ? a.charCodeAt(d / 2 + 1) >> 8 : NaN
                } else
                    e = a.charCodeAt((d - 1) / 2) & 255,
                    (d + 1) / 2 < a.length ? (f = a.charCodeAt((d + 1) / 2) >> 8,
                    g = a.charCodeAt((d + 1) / 2) & 255) : f = g = NaN;
                d += 3;
                var k = e >> 2;
                e = (e & 3) << 4 | f >> 4;
                var m = (f & 15) << 2 | g >> 6;
                var t = g & 63;
                isNaN(f) ? m = t = 64 : isNaN(g) && (t = 64);
                b = b + S.R.charAt(k) + S.R.charAt(e) + S.R.charAt(m) + S.R.charAt(t)
            }
            return b
        },
        La: function(a) {
            if (null == a)
                return "";
            var b, d = {}, e = {}, f = "", g = 2, k = 3, m = 2, t = "", n = 0, p = 0, H, E = S.Fa;
            for (H = 0; H < a.length; H += 1) {
                var T = a.charAt(H);
                Object.prototype.hasOwnProperty.call(d, T) || (d[T] = k++,
                e[T] = !0);
                var Y = f + T;
                if (Object.prototype.hasOwnProperty.call(d, Y))
                    f = Y;
                else {
                    if (Object.prototype.hasOwnProperty.call(e, f)) {
                        if (256 > f.charCodeAt(0)) {
                            for (b = 0; b < m; b++)
                                n <<= 1,
                                15 == p ? (p = 0,
                                t += E(n),
                                n = 0) : p++;
                            var y = f.charCodeAt(0);
                            for (b = 0; 8 > b; b++)
                                n = n << 1 | y & 1,
                                15 == p ? (p = 0,
                                t += E(n),
                                n = 0) : p++,
                                y >>= 1
                        } else {
                            y = 1;
                            for (b = 0; b < m; b++)
                                n = n << 1 | y,
                                15 == p ? (p = 0,
                                t += E(n),
                                n = 0) : p++,
                                y = 0;
                            y = f.charCodeAt(0);
                            for (b = 0; 16 > b; b++)
                                n = n << 1 | y & 1,
                                15 == p ? (p = 0,
                                t += E(n),
                                n = 0) : p++,
                                y >>= 1
                        }
                        g--;
                        0 == g && (g = Math.pow(2, m),
                        m++);
                        delete e[f]
                    } else
                        for (y = d[f],
                        b = 0; b < m; b++)
                            n = n << 1 | y & 1,
                            15 == p ? (p = 0,
                            t += E(n),
                            n = 0) : p++,
                            y >>= 1;
                    g--;
                    0 == g && (g = Math.pow(2, m),
                    m++);
                    d[Y] = k++;
                    f = String(T)
                }
            }
            if ("" !== f) {
                if (Object.prototype.hasOwnProperty.call(e, f)) {
                    if (256 > f.charCodeAt(0)) {
                        for (b = 0; b < m; b++)
                            n <<= 1,
                            15 == p ? (p = 0,
                            t += E(n),
                            n = 0) : p++;
                        y = f.charCodeAt(0);
                        for (b = 0; 8 > b; b++)
                            n = n << 1 | y & 1,
                            15 == p ? (p = 0,
                            t += E(n),
                            n = 0) : p++,
                            y >>= 1
                    } else {
                        y = 1;
                        for (b = 0; b < m; b++)
                            n = n << 1 | y,
                            15 == p ? (p = 0,
                            t += E(n),
                            n = 0) : p++,
                            y = 0;
                        y = f.charCodeAt(0);
                        for (b = 0; 16 > b; b++)
                            n = n << 1 | y & 1,
                            15 == p ? (p = 0,
                            t += E(n),
                            n = 0) : p++,
                            y >>= 1
                    }
                    g--;
                    0 == g && (g = Math.pow(2, m),
                    m++);
                    delete e[f]
                } else
                    for (y = d[f],
                    b = 0; b < m; b++)
                        n = n << 1 | y & 1,
                        15 == p ? (p = 0,
                        t += E(n),
                        n = 0) : p++,
                        y >>= 1;
                g--;
                0 == g && m++
            }
            y = 2;
            for (b = 0; b < m; b++)
                n = n << 1 | y & 1,
                15 == p ? (p = 0,
                t += E(n),
                n = 0) : p++,
                y >>= 1;
            for (; ; )
                if (n <<= 1,
                15 == p) {
                    t += E(n);
                    break
                } else
                    p++;
            return t
        }
    };
    S.R = S.Ta();
    var h = {
        setDate: function(a) {
            if (h.Ya(a))
                return "$D_" + a;
            q.e(C["date-format-error"])
        },
        V: function(a) {
            return "object" === typeof a && a instanceof Date
        },
        X: function(a) {
            return "$D_" + Math.round(a.getTime() / 1E3)
        },
        Ya: function(a) {
            var b = /^(\d{4})(\d{2})(\d{2})$/.exec(a);
            if (null == b)
                return !1;
            a = b[3];
            var d = b[2] - 1;
            b = b[1];
            var e = new Date(b,d,a);
            return e.getDate() == a && e.getMonth() == d && e.getFullYear() == b
        },
        isArray: function(a) {
            return "object" === typeof a && a instanceof Array
        },
        C: function(a) {
            return "[object Object]" == Object.prototype.toString.call(a)
        },
        A: function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b))
                    return !1;
            return !0
        },
        J: function(a) {
            return "string" == typeof a || a instanceof String
        },
        na: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a)
        },
        pa: function(a) {
            return /^-?[\d.]+(?:e-?\d+)?$/.test(a) && "number" == typeof a
        },
        qb: function() {},
        la: function(a) {
            var b = {}
              , d = a.indexOf("?");
            if (1 < d) {
                a = a.substring(d + 1);
                for (var e = /\+/g, f = /([^&=]+)=?([^&]*)/g, g = function(k) {
                    k = k.replace(e, " ");
                    try {
                        k = decodeURIComponent(k)
                    } catch (m) {}
                    return k
                }; d = f.exec(a); )
                    b[g(d[1])] = g(d[2])
            }
            return b
        },
        Ra: function(a) {
            if ("" == a)
                return "";
            var b = document.createElement("a");
            b.href = a;
            return b.hostname
        },
        za: function(a) {
            if ("object" == typeof a)
                for (var b in a) {
                    if (a.hasOwnProperty(b)) {
                        var d = h.za(a[b]);
                        h.J(b) && h.W(b, Ga);
                        if (h.J(b)) {
                            var e = h.W(b, Ga);
                            1024 < e.length && (e = e.substring(0, 1024),
                            window.$WZRK_WR.L(520, e + "... length exceeded 1024 chars. Trimmed."))
                        } else
                            e = b;
                        delete a[b];
                        a[e] = d
                    }
                }
            else
                return h.J(a) && (a = h.W(a, Ya),
                1024 < a.length && (a = a.substring(0, 1024),
                window.$WZRK_WR.L(521, a + "... length exceeded 1024 chars. Trimmed."))),
                a;
            return a
        },
        W: function(a, b) {
            return a.replace(b, "")
        },
        j: function() {
            try {
                return window.localStorage.setItem("wzrk_debug", "12345678"),
                window.localStorage.removeItem("wzrk_debug"),
                "localStorage"in window && null !== window.localStorage
            } catch (a) {
                return !1
            }
        },
        U: function() {
            var a = {};
            h.j() && (a = window.localStorage.WZRK_CAMP,
            "undefined" != typeof a ? a = JSON.parse(decodeURIComponent(a).replace(Ta, '"')) : a = {});
            return a
        },
        aa: function(a) {
            h.j() && (a = JSON.stringify(a),
            window.localStorage.WZRK_CAMP = encodeURIComponent(a))
        },
        H: function() {
            return h.j() && r.enablePersonalization
        },
        ka: function() {
            var a = new Date;
            return a.getFullYear() + "" + a.getMonth() + a.getDay()
        },
        F: function() {
            return Math.floor((new Date).getTime() / 1E3)
        }
    }
      , Ga = /^\s+|\.|:|\$|'|"|\\|\s+$/g
      , Ya = /^\s+|'|"|\\|\s+$/g
      , Ta = /'/g
      , C = {}
      , N = "CleverTap error: ";
    C["embed-error"] = N + "Incorrect embed script.";
    C["event-error"] = N + "Event structure not valid. This property has been ignored.";
    C["gender-error"] = N + "Gender value should be either M or F. This property has been ignored.";
    C["employed-error"] = N + "Employed value should be either Y or N. This property has been ignored.";
    C["married-error"] = N + "Married value should be either Y or N. This property has been ignored.";
    C["education-error"] = N + "Education value should be either School, College or Graduate. This property has been ignored.";
    C["age-error"] = N + "Age value should be a number. This property has been ignored.";
    C["dob-error"] = N + "DOB value should be a Date Object";
    C["obj-arr-error"] = N + "Expecting Object array in profile";
    C["date-format-error"] = N + "setDate(number). number should be formatted as yyyymmdd";
    C["enum-format-error"] = N + "setEnum(value). value should be a string or a number";
    C["phone-format-error"] = N + "Phone number should be formatted as +[country code][number]"
}
;
window.$CLTP_WR = window.$WZRK_WR;
window.$WZRK_WR.Wa();
