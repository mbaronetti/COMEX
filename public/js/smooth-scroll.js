/*!
 * Smooth Scroll - v1.4.10 - 2013-03-02
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2013 Karl Swedberg
 * Licensed MIT (https://github.com/kswedberg/jquery-smooth-scroll/blob/master/LICENSE-MIT)
 */
(function (l) {
  function t(l) {
    return l.replace(/(:|\.)/g, "\\$1");
  }
  var e = "1.4.10",
    o = {
      exclude: [],
      excludeWithin: [],
      offset: 0,
      direction: "top",
      scrollElement: null,
      scrollTarget: null,
      beforeScroll: function () {},
      afterScroll: function () {},
      easing: "swing",
      speed: 400,
      autoCoefficent: 2,
    },
    r = function (t) {
      var e = [],
        o = !1,
        r = t.dir && "left" == t.dir ? "scrollLeft" : "scrollTop";
      return (
        this.each(function () {
          if (this != document && this != window) {
            var t = l(this);
            t[r]() > 0
              ? e.push(this)
              : (t[r](1), (o = t[r]() > 0), o && e.push(this), t[r](0));
          }
        }),
        e.length ||
          this.each(function () {
            "BODY" === this.nodeName && (e = [this]);
          }),
        "first" === t.el && e.length > 1 && (e = [e[0]]),
        e
      );
    };
  l.fn.extend({
    scrollable: function (l) {
      var t = r.call(this, { dir: l });
      return this.pushStack(t);
    },
    firstScrollable: function (l) {
      var t = r.call(this, { el: "first", dir: l });
      return this.pushStack(t);
    },
    smoothScroll: function (e) {
      e = e || {};
      var o = l.extend({}, l.fn.smoothScroll.defaults, e),
        r = l.smoothScroll.filterPath(location.pathname);
      return (
        this.unbind("click.smoothscroll").bind(
          "click.smoothscroll",
          function (e) {
            var n = this,
              s = l(this),
              c = o.exclude,
              i = o.excludeWithin,
              a = 0,
              f = 0,
              h = !0,
              u = {},
              d = location.hostname === n.hostname || !n.hostname,
              m =
                o.scrollTarget ||
                (l.smoothScroll.filterPath(n.pathname) || r) === r,
              p = t(n.hash);
            if (o.scrollTarget || (d && m && p)) {
              for (; h && c.length > a; ) s.is(t(c[a++])) && (h = !1);
              for (; h && i.length > f; ) s.closest(i[f++]).length && (h = !1);
            } else h = !1;
            h &&
              (e.preventDefault(),
              l.extend(u, o, { scrollTarget: o.scrollTarget || p, link: n }),
              l.smoothScroll(u));
          }
        ),
        this
      );
    },
  }),
    (l.smoothScroll = function (t, e) {
      var o,
        r,
        n,
        s,
        c = 0,
        i = "offset",
        a = "scrollTop",
        f = {},
        h = {};
      "number" == typeof t
        ? ((o = l.fn.smoothScroll.defaults), (n = t))
        : ((o = l.extend({}, l.fn.smoothScroll.defaults, t || {})),
          o.scrollElement &&
            ((i = "position"),
            "static" == o.scrollElement.css("position") &&
              o.scrollElement.css("position", "relative"))),
        (o = l.extend({ link: null }, o)),
        (a = "left" == o.direction ? "scrollLeft" : a),
        o.scrollElement
          ? ((r = o.scrollElement), (c = r[a]()))
          : (r = l("html, body").firstScrollable()),
        o.beforeScroll.call(r, o),
        (n =
          "number" == typeof t
            ? t
            : e ||
              (l(o.scrollTarget)[i]() && l(o.scrollTarget)[i]()[o.direction]) ||
              0),
        (f[a] = n + c + o.offset),
        (s = o.speed),
        "auto" === s && ((s = f[a] || r.scrollTop()), (s /= o.autoCoefficent)),
        (h = {
          duration: s,
          easing: o.easing,
          complete: function () {
            o.afterScroll.call(o.link, o);
          },
        }),
        o.step && (h.step = o.step),
        r.length ? r.stop().animate(f, h) : o.afterScroll.call(o.link, o);
    }),
    (l.smoothScroll.version = e),
    (l.smoothScroll.filterPath = function (l) {
      return l
        .replace(/^\//, "")
        .replace(/(index|default).[a-zA-Z]{3,4}$/, "")
        .replace(/\/$/, "");
    }),
    (l.fn.smoothScroll.defaults = o);
})(jQuery);
