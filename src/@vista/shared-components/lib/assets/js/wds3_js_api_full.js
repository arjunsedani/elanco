/* eslint-disable */
/*
 * Slingshot JavaScript Client API.
 * (c) 2018- Dion.
 * Base64 encoding - http://www.webtoolkit.info/.
 */

var sls = {};
Array.prototype.indexOf ||
  (Array.prototype.indexOf = function (s) {
    var t = this.length,
      e = arguments[1] || 0;
    for (e < 0 && (e += t); e < t; e++) if (this[e] === s) return e;
    return -1;
  }),
  (sls.Browser = {
    MSIE: 0,
    FF: 0,
    Firebug: 0,
    Safari: 0,
    Opera: 0,
    Chrome: 0,
  }),
  (navigator.sayswho = (function () {
    var s,
      t = navigator.userAgent,
      e =
        t.match(
          /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i
        ) || [];
    return /trident/i.test(e[1])
      ? "MSIE " + ((s = /\brv[ :]+(\d+(\.\d+)?)/g.exec(t) || [])[1] || "")
      : ((e = e[2]
          ? [e[1], e[2]]
          : [navigator.appName, navigator.appVersion, "-?"]),
        null != (s = t.match(/version\/([\.\d]+)/i)) && (e[2] = s[1]),
        e.join(" "));
  })()),
  navigator.sayswho.split("MSIE ")[1]
    ? (sls.Browser.MSIE = navigator.sayswho.split("MSIE ")[1].slice(0, 3))
    : navigator.sayswho.split("Firefox ")[1]
    ? (sls.Browser.FF = navigator.sayswho.split("Firefox ")[1].slice(0, 3))
    : navigator.sayswho.split("Safari ")[1]
    ? (sls.Browser.Safari = navigator.sayswho.split("Safari ")[1].slice(0, 3))
    : navigator.sayswho.split("Chrome ")[1] &&
      (sls.Browser.Chrome = navigator.sayswho.split("Chrome ")[1].slice(0, 3)),
  sls.Browser.FF < 2 &&
    sls.Browser.MSIE < 6 &&
    sls.Browser.Chrome < 1 &&
    sls.Browser.Safari < 1 &&
    alert(
      "This browser is not yet supported (or browser detection failed)!\n\nBrowsers tested so far: FF2 or higher, IE6 or higher, Safari and Chrome"
    ),
  (sls.Util = {}),
  (sls.Util.has_properties = function (s) {
    for (var t in s) if (s.hasOwnProperty(t)) return !0;
    return !1;
  }),
  (sls.Util.number_of_properties = function (s) {
    var t = 0;
    for (var e in s) s.hasOwnProperty(e) && t++;
    return t;
  }),
  (sls.Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    encode: function (s) {
      var t,
        e,
        i,
        n,
        h,
        o,
        c,
        a = "",
        r = 0;
      for (s = sls.Base64._utf8_encode(s); r < s.length; )
        (n = (t = s.charCodeAt(r++)) >> 2),
          (h = ((3 & t) << 4) | ((e = s.charCodeAt(r++)) >> 4)),
          (o = ((15 & e) << 2) | ((i = s.charCodeAt(r++)) >> 6)),
          (c = 63 & i),
          isNaN(e) ? (o = c = 64) : isNaN(i) && (c = 64),
          (a =
            a +
            this._keyStr.charAt(n) +
            this._keyStr.charAt(h) +
            this._keyStr.charAt(o) +
            this._keyStr.charAt(c));
      return a;
    },
    _utf8_encode: function (s) {
      s = s.replace(/\r\n/g, "\n");
      for (var t = "", e = 0; e < s.length; e++) {
        var i = s.charCodeAt(e);
        i < 128
          ? (t += String.fromCharCode(i))
          : i > 127 && i < 2048
          ? ((t += String.fromCharCode((i >> 6) | 192)),
            (t += String.fromCharCode((63 & i) | 128)))
          : ((t += String.fromCharCode((i >> 12) | 224)),
            (t += String.fromCharCode(((i >> 6) & 63) | 128)),
            (t += String.fromCharCode((63 & i) | 128)));
      }
      return t;
    },
    _utf8_encode_length: function (s) {
      for (var t = s.replace(/\r\n/g, "\n"), e = 0, i = 0; i < t.length; i++) {
        var n = t.charCodeAt(i);
        n < 128 ? e++ : (e += n > 127 && n < 2048 ? 2 : 3);
      }
      return e;
    },
  }),
  (sls.RecFidState = {
    OK: 0,
    RequestPending: 1,
    Stale: 2,
    NotAvailable: 3,
    RequestError: 4,
    NotPermissioned: 5,
    ServiceStale: 6,
    ServiceUnknown: 7,
    Dropped: 8,
    RecordPaused: 9,
    ErrorRecordPaused: 10,
    RecordStateChangeName: 20,
  }),
  (sls.ConnectionStatus = {
    Init: 0,
    Active: 1,
    Down: 2,
    Reconnecting: 3,
    Unauthorised: 4,
    MaxClientsExceeded: 5,
    MaxConnectAttemptsExceeded: 6,
  }),
  (sls.RequestType = {
    Monitor: "M",
    Unmonitor: "U",
    Snapshot: "S",
  }),
  (sls.InsertType = {
    Record: "R",
    Page: "P",
  }),
  (sls.RequestField = function (s) {
    (this.field = s),
      (this.value = ""),
      (this.offset = 0),
      (this.dataLength = 0);
  }),
  (sls.RecordRequest = function (s, t) {
    (this.service = s),
      (this.name = t),
      (this.type = sls.RequestType.Monitor),
      (this.priority = 0),
      (this.flags = 0),
      (this.fields = []);
  }),
  (sls.RecordRequest.prototype.setType = function (s) {
    this.type = s;
  }),
  (sls.RecordRequest.prototype.setFields = function (s) {
    for (var t = 0; t < s.length; t++)
      this.fields.push(new sls.RequestField(s[t]));
  }),
  (sls.RecordRequest.prototype.setPriority = function (s) {
    this.priority = s;
  }),
  (sls.RecordRequest.prototype.setNoMerge = function () {
    this.flags |= 1;
  }),
  (sls.RecordRequest.prototype.setWhenAvailable = function () {
    this.flags |= 2;
  }),
  (sls.RecordRequest.prototype.serialize = function () {
    var s = "";
    (s = this.service + "," + this.name + "," + this.type),
      (this.flags > 0 || this.priority > 0) &&
        ((s += ",["),
        this.flags > 0
          ? ((s += "f" + this.flags),
            this.priority > 0 && (s += ",p" + this.priority))
          : this.priority > 0 && (s += "p" + this.priority),
        (s += "]"));
    for (var t = 0; t < this.fields.length; t++)
      s += "," + this.fields[t].field;
    return s;
  }),
  (sls.InsertRequest = function (s, t, e) {
    (this.service = s),
      (this.name = t),
      (this.type = sls.InsertType.Record),
      (this.seqNo = e),
      (this.flags = 0),
      (this.fields = []);
  }),
  (sls.InsertRequest.prototype.setType = function (s) {
    this.type = s;
  }),
  (sls.InsertRequest.prototype.setField = function (s, t, e, i) {
    var n = new sls.RequestField(s);
    (n.offset = t),
      !0 === i && (this.flags |= 1),
      (n.value = e),
      (n.dataLength = sls.Base64._utf8_encode_length(e)),
      this.fields.push(n);
  }),
  (sls.InsertRequest.prototype.serialize = function () {
    for (
      var s =
          this.service + "," + this.name + "," + this.type + "," + this.seqNo,
        t = 0;
      t < this.fields.length;
      t++
    )
      s +=
        "," +
        this.fields[t].field +
        "," +
        this.fields[t].offset +
        "," +
        this.flags +
        "," +
        this.fields[t].dataLength +
        "," +
        this.fields[t].value;
    return s;
  }),
  (sls.HttpConnection = function (s, t, e, i, n) {
    (sls.HttpConnection.prototype.request_record = function (s) {
      if (void 0 === s.service || "" === s.service) return 2;
      if (void 0 === s.name || "" === s.name) return 3;
      if (void 0 === s.fields || 0 === s.fields.length) return 4;
      if (s.type === sls.RequestType.Monitor) this._requests.push(s);
      else {
        if (s.type !== sls.RequestType.Snapshot) return 5;
        this._requests.unshift(s);
      }
      return 0;
    }),
      (sls.HttpConnection.prototype.unmonitor_fields = function (s) {
        if (
          (s.setType(sls.RequestType.Unmonitor),
          void 0 === s.service || "" === s.service)
        )
          return 2;
        if (void 0 === s.name || "" === s.name) return 3;
        if (void 0 === s.fields || 0 === s.fields.length) return 4;
        this._requests.push(s);
        var t = s.service + s.name;
        if (this._pend[t]) {
          for (var e = 0; e < s.fields.length; e++)
            this._pend[t].fids[s.fields[e].field] &&
              delete this._pend[t].fids[s.fields[e].field];
          var i = 0;
          for (var n in this._pend[t].fids)
            if (!1 !== this._pend[t].fids.hasOwnProperty(n)) {
              i = 1;
              break;
            }
          0 === i && delete this._pend[t];
        }
        if (this._cache[t]) {
          for (e = 0; e < s.fields.length; e++)
            this._cache[t].fids[s.fields[e].field] &&
              delete this._cache[t].fids[s.fields[e].field];
          i = 0;
          for (n in this._cache[t].fids)
            if (!1 !== this._cache[t].fids.hasOwnProperty(n)) {
              i = 1;
              break;
            }
          0 === i && delete this._cache[t];
        }
        return 0;
      }),
      (sls.HttpConnection.prototype.unmonitor_record = function (s) {
        if (void 0 === s.service || "" === s.service) return 2;
        if (void 0 === s.name || "" === s.name) return 2;
        var t = [],
          e = s.service + s.name,
          i = 0;
        if (this._pend[e]) {
          for (var n in this._pend[e].fids)
            !1 !== this._pend[e].fids.hasOwnProperty(n) && (t[i++] = n);
          delete this._pend[e];
        }
        if (this._cache[e]) {
          for (n in this._cache[e].fids)
            !1 !== this._cache[e].fids.hasOwnProperty(n) && (t[i++] = n);
          delete this._cache[e];
        }
        return t.length <= 0
          ? 0
          : (s.setType(sls.RequestType.Unmonitor),
            s.setFields(t),
            this._requests.push(s),
            0);
      }),
      (sls.HttpConnection.prototype.insert_request = function (s) {
        return void 0 === s.service || "" === s.service
          ? 2
          : void 0 === s.name || "" === s.name
          ? 3
          : void 0 === s.fields || 0 === s.fields.length
          ? 4
          : (this._inserts.push(s), 0);
      }),
      (sls.HttpConnection.prototype.destroy = function () {
        null !== this._websocket
          ? this._websocket.close()
          : (this.sendClose(),
            this.remove_element_and_childs(this._postForm),
            this.remove_element_and_childs(this._postFrame),
            this.remove_element_and_childs(this._pushFrame));
      }),
      (sls.HttpConnection.prototype.pause_updates = function (s) {
        return (this._ctlFlags & this.FL_connected ||
          this._ctlFlags & this.FL_buffered) &&
          0 !== this._sig &&
          0 !== this._id
          ? (this.sendPause(s), (this._ctlFlags |= this.FL_paused), 0)
          : 1;
      }),
      (sls.HttpConnection.prototype.resume_updates = function () {
        return (this._ctlFlags & this.FL_connected ||
          this._ctlFlags & this.FL_buffered) &&
          0 !== this._sig &&
          0 !== this._id
          ? (this.sendResume(), (this._ctlFlags &= ~this.FL_paused), 0)
          : 1;
      }),
      (sls.HttpConnection.prototype.create_iframe = function (s) {
        var t;
        return (
          sls.Browser.MSIE >= 6 &&
          sls.Browser.MSIE < 9 &&
          document.documentMode < 9
            ? (t = document.createElement(
                '<iframe name="' + s + '" id="' + s + '">'
              ))
            : (((t = document.createElement("iframe")).name = s), (t.id = s)),
          (t.style.position = "absolute"),
          (t.style.top = t.style.left = t.style.width = t.style.height = "1px"),
          (t.style.visibility = "hidden"),
          document.body.appendChild(t),
          t
        );
      }),
      (sls.HttpConnection.prototype.create_post_form = function (s, t) {
        var e,
          i = document.createElement("form");
        return (
          (i.id = s),
          (i.method = "post"),
          (i.target = t.name),
          (i.action = ""),
          sls.Browser.MSIE >= 6 &&
          sls.Browser.MSIE < 9 &&
          document.documentMode < 9
            ? (e = document.createElement('<input type="hidden" name="p">'))
            : (((e = document.createElement("input")).type = "hidden"),
              (e.name = "p")),
          (e.value = ""),
          i.appendChild(e),
          document.body.appendChild(i),
          i
        );
      }),
      (sls.HttpConnection.prototype.remove_element_and_childs = function (s) {
        for (; s.firstChild; ) s.removeChild(s.firstChild);
        s.parentNode && s.parentNode.removeChild(s);
      }),
      (sls.HttpConnection.prototype.setStatus = function (s) {
        this._statusChanged = !0;
      }),
      (sls.HttpConnection.prototype.getURI = function () {
        var s = "";
        2 & this._flags && (s += "02\n");
        var t = this.serializeReqCache(this._pend);
        for (
          "" !== t && (s += t);
          this._requests.length > 0 && s.length < 600;

        ) {
          var e = this._requests.shift();
          (s += "2" + e.serialize() + "\n"), this.addToReqCache(e);
        }
        var i = new Date(),
          n = "";
        if (
          ((n =
            "" === this._auth
              ? this._hostWDS +
                "/JS3/" +
                i.getTime() +
                "/SlingShot2000/index.html"
              : this._hostWDS +
                "/JS3/" +
                i.getTime() +
                "/SlingShot2000/index.html?" +
                this._auth),
          "" !== s)
        ) {
          var h = sls.Base64.encode(s);
          n.length + h.length < 1997 && (n = n + "%23" + h);
        }
        return n;
      }),
      (sls.HttpConnection.prototype.getWsURI = function () {
        var s = "";
        for (
          2 & this._flags && (s += "02\n");
          this._requests.length > 0 && s.length < 600;

        ) {
          var t = this._requests.shift();
          (s += "2" + t.serialize() + "\n"), this.addToReqCache(t);
        }
        var e = this._hostWDS.replace(/.*?:\/\//g, ""),
          i = new Date(),
          n = "";
        return (
          (n =
            "" === this._auth
              ? this._ws + e + "/" + i.getTime() + "/SlingShot2000/index.html"
              : this._ws +
                e +
                "/" +
                i.getTime() +
                "/SlingShot2000/index.html?" +
                this._auth),
          "" !== s && (n = n + "%23" + sls.Base64.encode(s)),
          n
        );
      }),
      (sls.HttpConnection.prototype.nextURI = function () {
        return (
          this._incCnt++,
          this._http +
            this._host +
            "/JS3/CSK" +
            this._incCnt +
            "/SlingShot2000/" +
            this._sig +
            "/" +
            this._id
        );
      }),
      (sls.HttpConnection.prototype.nextWsURI = function () {
        return (
          this._incCnt++,
          this._ws +
            this._host +
            "/CSK" +
            this._incCnt +
            "/SlingShot2000/" +
            this._sig +
            "/" +
            this._id
        );
      }),
      (sls.HttpConnection.prototype.post = function (s) {
        if (
          ((this._ctlFlags &= ~this.FL_pingRequired),
          (s = this.connHdr() + s),
          this._ctlFlags & this.FL_buffered && (s += "5\n"),
          this.callbacks.debug_msg)
        ) {
          var t = "post data:\n" + s;
          this.callbacks.debug_msg(t);
        }
        1 == (1 & this._flags)
          ? null !== this._websocket && this._websocket.send(s)
          : ((this._postForm.action = this.nextURI()),
            (this._postForm.p.value = sls.Base64.encode(s)),
            this._postForm.submit());
      }),
      (sls.HttpConnection.prototype.recv = function (s) {
        this._pushFrame.src = s;
      }),
      (sls.HttpConnection.prototype.ac = function (s) {
        if (
          ((this._ctlFlags &= ~this.FL_recvClose),
          this._ctlFlags & this.FL_initConn)
        ) {
          (this._sig = s.s),
            (this._id = s.i),
            (this._host = s.h),
            (this._ping = s.p),
            (this._logging = s.l);
          var t = this;
          (this._connAttempts = 0),
            setTimeout(function () {
              t.processConnect();
            }, 100);
        } else {
          if (this._sig !== s.s || this._id !== s.i) {
            (this._ctlFlags &= ~this.FL_connected),
              (this._ctlFlags |= this.FL_broken),
              (this._ctlFlags &= ~this.FL_buffered),
              (this._sig = 0),
              (this._id = 0);
            t = this;
            return void setTimeout(function () {
              t.broken();
            }, 1e3);
          }
          (this._ctlFlags |= this.FL_connected),
            (this._ctlFlags &= ~this.FL_broken);
        }
        this._actTime = this._now;
      }),
      (sls.HttpConnection.prototype.processConnect = function () {
        if (
          (this._ctlFlags & this.FL_initConn &&
            (this._ctlFlags |= this.FL_pingRequired),
          (this._ctlFlags &= ~this.FL_initConn),
          this._ctlFlags & this.FL_recvClose
            ? ((this._ctlFlags |= this.FL_buffered),
              (this._ctlFlags |= this.FL_bcRecv))
            : (this._ctlFlags |= this.FL_connected),
          this.callbacks.debug_msg)
        ) {
          var s =
            "processConnect: recvClose = " +
            (this._ctlFlags & this.FL_recvClose) +
            " , buffered =" +
            (this._ctlFlags & this.FL_buffered);
          this.callbacks.debug_msg(s);
        }
        (this._ctlFlags &= ~this.FL_broken),
          (this._ctlFlags &= ~this.FL_staleSet),
          this.setStatus("connected to Slingshot..."),
          this.callbacks.connection_status &&
            this.callbacks.connection_status(sls.ConnectionStatus.Active);
      }),
      (sls.HttpConnection.prototype.bc = function () {
        this._ctlFlags |= this.FL_bcRecv;
      }),
      (sls.HttpConnection.prototype.rc = function () {
        this.callbacks.debug_msg &&
          this.callbacks.debug_msg("push page _rc received."),
          (this._ctlFlags &= ~this.FL_connected),
          (this._ctlFlags |= this.FL_recvClose);
        var s = this;
        setTimeout(function () {
          s.reconnect();
        }, 1e3),
          (this._actTime = this._now);
      }),
      (sls.HttpConnection.prototype.hb = function () {
        this._actTime = this._now;
      }),
      (sls.HttpConnection.prototype.pi = function () {
        (this._actTime = this._now), (this._ctlFlags |= this.FL_pingRequired);
      }),
      (sls.HttpConnection.prototype.sendPing = function () {
        this.post("3\n");
      }),
      (sls.HttpConnection.prototype.sendPause = function (s) {
        void 0 === s ? this.post("7\n") : this.post("7," + s + "\n");
      }),
      (sls.HttpConnection.prototype.sendResume = function () {
        this.post("8\n");
      }),
      (sls.HttpConnection.prototype.up = function (s) {
        if (((this._actTime = this._now), this.callbacks.debug_msg)) {
          var t = "Update received for " + s.s + " " + s.k;
          this.callbacks.debug_msg(t);
        }
        var e = s.s + s.k;
        if (s.f !== sls.RecFidState.RecordStateChangeName) {
          if (this.callbacks.record_update) {
            if (
              ((void 0 !== s.fids && null !== s.fids) || (s.fids = []),
              0 == s.fids.length)
            ) {
              var i;
              if (null !== this._pend && this._pend[e]) i = this._pend[e];
              else if (null !== this._cache && this._cache[e])
                i = this._cache[e];
              else {
                if (null === this._snapCache || !this._snapCache[e]) return;
                i = this._snapCache[e];
              }
              var n = 0;
              for (var h in i.fids)
                !1 !== i.fids.hasOwnProperty(h) &&
                  ((s.fids[n] = {}),
                  (s.fids[n].i = h),
                  (s.fids[n].v = i.fids[h].v),
                  (s.fids[n].f = i.fids[h].f),
                  ++n);
            }
            this.callbacks.record_update(s);
          }
          if (null !== this._snapCache) {
            if (this._snapCache[e]) {
              for (n = 0; n < s.fids.length; n++)
                this._snapCache[e].fids[s.fids[n].i] &&
                  delete this._snapCache[e].fids[s.fids[n].i];
              var o = 0;
              for (var h in this._snapCache[e].fids)
                if (!1 !== this._snapCache[e].fids.hasOwnProperty(h)) {
                  o = 1;
                  break;
                }
              0 === o && delete this._snapCache[e];
            }
            var c = 0;
            for (var a in this._snapCache)
              if (!1 !== this._snapCache.hasOwnProperty(a)) {
                c = 1;
                break;
              }
            0 === c && (delete this._snapCache, (this._snapCache = null));
          }
          if (this._pend[e]) {
            if (s.f === sls.RecFidState.OK) {
              (void 0 !== this._cache[e] && null !== this._cache[e]) ||
                ((this._cache[e] = {}),
                (this._cache[e].fids = {}),
                (this._cache[e].s = s.s),
                (this._cache[e].k = s.k),
                (this._cache[e].reqType = this._pend[e].reqType),
                (this._cache[e].reqFlags = this._pend[e].reqFlags),
                (this._cache[e].reqPrio = this._pend[e].reqPrio));
              for (h in this._pend[e].fids)
                !1 !== this._pend[e].fids.hasOwnProperty(h) &&
                  ((void 0 !== this._cache[e].fids[h] &&
                    null !== this._cache[e].fids[h]) ||
                    (this._cache[e].fids[h] = {}));
            }
            for (n = 0; n < s.fids.length; n++)
              (2 & this._pend[e].reqFlags &&
                s.f === sls.RecFidState.NotAvailable) ||
                !this._pend[e].fids[s.fids[n].i] ||
                delete this._pend[e].fids[s.fids[n].i];
            o = 0;
            for (h in this._pend[e].fids)
              if (!1 !== this._pend[e].fids.hasOwnProperty(h)) {
                o = 1;
                break;
              }
            0 === o && delete this._pend[e];
          }
          if (void 0 !== this._cache[e] && null !== this._cache[e]) {
            var r = null;
            switch (
              ((this._cache[e].f = s.f),
              (this._cache[e].n = s.n),
              (this._cache[e].d = s.d),
              s.f)
            ) {
              case sls.RecFidState.OK:
                for (n = 0; n < s.fids.length; n++)
                  if (
                    void 0 !== this._cache[e].fids[s.fids[n].i] &&
                    null !== this._cache[e].fids[s.fids[n].i]
                  )
                    if (
                      ((this._cache[e].fids[s.fids[n].i].f = s.fids[n].f),
                      256 & this._cache[e].fids[s.fids[n].i].f)
                    ) {
                      var l = 255 & this._cache[e].fids[s.fids[n].i].f,
                        _ = this._cache[e].fids[s.fids[n].i].v.substr(0, l),
                        d = this._cache[e].fids[s.fids[n].i].v.substr(
                          l + s.fids[n].v.length,
                          this._cache[e].fids[s.fids[n].i].v.length -
                            s.fids[n].v.length -
                            l
                        );
                      this._cache[e].fids[s.fids[n].i].v = _ + s.fids[n].v + d;
                    } else this._cache[e].fids[s.fids[n].i].v = s.fids[n].v;
                  else null === r && (r = []), r.push(s.fids[n].i);
                break;
              case sls.RecFidState.RequestPending:
              case sls.RecFidState.Stale:
              case sls.RecFidState.ServiceStale:
                break;
              case sls.RecFidState.NotAvailable:
              case sls.RecFidState.RequestError:
              case sls.RecFidState.NotPermissioned:
              case sls.RecFidState.ServiceUnknown:
              case sls.RecFidState.Dropped:
                for (n = 0; n < s.fids.length; n++)
                  this._cache[e].fids[s.fids[n].i] &&
                    delete this._cache[e].fids[s.fids[n].i];
                o = 0;
                for (h in this._cache[e].fids)
                  if (!1 !== this._cache[e].fids.hasOwnProperty(h)) {
                    o = 1;
                    break;
                  }
                0 === o && delete this._cache[e];
                break;
              case sls.RecFidState.RecordPaused:
              case sls.RecFidState.ErrorRecordPaused:
            }
          }
        } else {
          var p = s.s + s.n;
          if (null !== this._snapCache && this._snapCache[p]) {
            this._snapCache[e] = {
              s: s.s,
              k: s.k,
              reqType: this._snapCache[p].reqType,
              reqFlags: this._snapCache[p].reqFlags,
              reqPrio: this._snapCache[p].reqPrio,
              fids: {},
            };
            for (var h in this._snapCache[p].fids)
              !1 !== this._snapCache[p].fids.hasOwnProperty(h) &&
                (this._snapCache[e].fids[h] = {});
            delete this._snapCache[p];
          }
          if (null !== this._pend && this._pend[p]) {
            this._pend[e] = {
              s: s.s,
              k: s.k,
              reqType: this._pend[p].reqType,
              reqFlags: this._pend[p].reqFlags,
              reqPrio: this._pend[p].reqPrio,
              fids: {},
            };
            for (var h in this._pend[p].fids)
              !1 !== this._pend[p].fids.hasOwnProperty(h) &&
                (this._pend[e].fids[h] = {});
            delete this._pend[p];
          }
          if (null !== this._cache && this._cache[p]) {
            this._cache[e] = {
              s: s.s,
              k: s.k,
              reqType: this._cache[p].reqType,
              reqFlags: this._cache[p].reqFlags,
              reqPrio: this._cache[p].reqPrio,
              fids: {},
            };
            for (var h in this._cache[p].fids)
              !1 !== this._cache[p].fids.hasOwnProperty(h) &&
                (this._cache[e].fids[h] = {});
            delete this._cache[p];
          }
          this.callbacks.record_update && this.callbacks.record_update(s);
        }
      }),
      (sls.HttpConnection.prototype.ins = function (s) {
        if (this.callbacks.debug_msg) {
          var t = "Insert status received for " + s.s + " " + s.k + " " + s.i;
          this.callbacks.debug_msg(t);
        }
        var e = "i" + s.i;
        !1 !== this._insCache.hasOwnProperty(e) &&
          void 0 !== this._insCache[e] &&
          null !== this._insCache[e] &&
          (this.callbacks.insert_status &&
            ((st = {}),
            (st.s = this._insCache[e].service),
            (st.k = this._insCache[e].name),
            (st.i = this._insCache[e].seqNo),
            (st.r = 1),
            (st.t = s.t),
            this.callbacks.insert_status(st)),
          delete this._insCache[e]);
      }),
      (sls.HttpConnection.prototype.end = function () {
        if (this.callbacks.debug_msg) {
          var s =
            ("_end: _recvClose=" + this._ctlFlags) &
            (this.FL_recvClose + " _buffered=" + this._ctlFlags) &
            (this.FL_buffered + " _bcRecv=" + this._ctlFlags) &
            this.FL_bcRecv;
          this.callbacks.debug_msg(s);
        }
        if (this._ctlFlags & this.FL_recvClose)
          this._ctlFlags & this.FL_buffered &&
            !(this._ctlFlags & this.FL_bcRecv) &&
            ((this._ctlFlags &= ~this.FL_connected),
            (this._ctlFlags |= this.FL_broken),
            (this._ctlFlags &= ~this.FL_buffered),
            (this._sig = 0),
            (this._id = 0),
            (t = this),
            setTimeout(function () {
              t.broken();
            }, 1e3));
        else {
          (this._ctlFlags &= ~this.FL_connected),
            (this._ctlFlags |= this.FL_broken),
            (this._ctlFlags &= ~this.FL_buffered),
            (this._sig = 0),
            (this._id = 0);
          var t = this;
          setTimeout(function () {
            t.broken();
          }, 1e3);
        }
        this._ctlFlags &= ~this.FL_bcRecv;
      }),
      (sls.HttpConnection.prototype.xa = function () {
        clearInterval(this._runID),
          this.callbacks.connection_status &&
            this.callbacks.connection_status(sls.ConnectionStatus.Unauthorised),
          this.callbacks.debug_msg &&
            this.callbacks.debug_msg("Unauthorised connection"),
          1 == (1 & this._flags) &&
            (this._websocket.close(), (this._websocket = null)),
          (this._ctlFlags |= this.FL_unauthorised);
      }),
      (sls.HttpConnection.prototype.xc = function () {
        clearInterval(this._runID),
          this.callbacks.connection_status &&
            this.callbacks.connection_status(
              sls.ConnectionStatus.MaxClientsExceeded
            ),
          this.callbacks.debug_msg &&
            this.callbacks.debug_msg("Maximum clients exceeded");
      }),
      (sls.HttpConnection.prototype.markStale = function () {
        for (var s in this._cache)
          if (!1 !== this._cache.hasOwnProperty(s)) {
            this._cache[s].f = sls.RecFidState.ServiceStale;
            var t = {};
            (t.s = this._cache[s].s),
              (t.k = this._cache[s].k),
              (t.f = this._cache[s].f),
              (t.n = this._cache[s].n),
              (t.d = this._cache[s].d);
            var e = 0;
            for (var i in this._cache[s].fids)
              !1 !== this._cache[s].fids.hasOwnProperty(i) &&
                ((void 0 !== t.fids && null !== t.fids) || (t.fids = []),
                (t.fids[e] = {}),
                (t.fids[e].i = i),
                (t.fids[e].v = this._cache[s].fids[i].v),
                (t.fids[e].f = this._cache[s].fids[i].f),
                ++e);
            this.callbacks.record_update(t);
          }
      }),
      (sls.HttpConnection.prototype.broken = function () {
        if (
          !(
            this._ctlFlags & this.FL_connected ||
            this._ctlFlags & this.FL_buffered
          )
        ) {
          if (this._connAttempts > this._maxConnAttempts)
            return (
              this.callbacks.debug_msg &&
                this.callbacks.debug_msg(
                  "Max consecutive reconnect attempts exceeded. STOPPING ..."
                ),
              this.callbacks.connection_status &&
                this.callbacks.connection_status(
                  sls.ConnectionStatus.MaxConnectAttemptsExceeded
                ),
              void clearInterval(this._runID)
            );
          if (
            (this.callbacks.debug_msg &&
              this.callbacks.debug_msg("Connection broken."),
            ++this._connAttempts,
            (this._ctlFlags |= this.FL_rereq),
            (this._ctlFlags |= this.FL_initConn),
            (this._ctlFlags &= ~this.FL_buffered),
            (this._ctlFlags &= ~this.FL_bcRecv),
            this._ctlFlags & this.FL_staleSet ||
              ((this._ctlFlags |= this.FL_staleSet),
              this.markStale(),
              this.callbacks.connection_status &&
                this.callbacks.connection_status(sls.ConnectionStatus.Down)),
            0 == (1 & this._flags))
          )
            (this._pushPageURI = this.getURI()), this.recv(this._pushPageURI);
          else {
            var s = this;
            null !== this._websocket && this._websocket.close(),
              (this._websocket = new WebSocket(this.getWsURI())),
              (this._websocket.onopen = s.onopen),
              (this._websocket.onmessage = s.onmessage),
              (this._websocket.onclose = s.onclose),
              (this._websocket.onerror = s.onerror),
              (this._websocket.slsconn = this);
          }
          this.setStatus("connection lost");
          s = this;
          setTimeout(function () {
            s.broken();
          }, 4200);
        }
      }),
      (sls.HttpConnection.prototype.reconnect = function () {
        if (
          (this.callbacks.debug_msg &&
            this.callbacks.debug_msg("Reconnecting."),
          0 == (1 & this._flags))
        )
          (this._pushPageURI = this.nextURI()), this.recv(this._pushPageURI);
        else {
          if (null === this._host || "" === this._host) return void this.xa();
          null !== this._websocket && this._websocket.close(),
            (this._websocket = new WebSocket(this.nextWsURI())),
            (this._websocket.onopen = this.onopen),
            (this._websocket.onmessage = this.onmessage),
            (this._websocket.onclose = this.onclose),
            (this._websocket.onerror = this.onerror),
            (this._websocket.slsconn = this);
        }
      }),
      (sls.HttpConnection.prototype.sendClose = function () {
        0 !== this._sig && 0 !== this._id && this.post("4\n");
      }),
      (sls.HttpConnection.prototype.connHdr = function () {
        return this._bandwidth <= 0
          ? "1" + this._sig + "," + this._id + "," + (2 & this._flags) + "\n"
          : "1" +
              this._sig +
              "," +
              this._id +
              "," +
              (2 & this._flags) +
              "," +
              this._bandwidth +
              "\n";
      }),
      (sls.HttpConnection.prototype.run = function () {
        if (
          ((this._now = this._now + this._runInt),
          this._ctlFlags & this.FL_paused)
        )
          this._actTime = this._now;
        else if (
          (this._ctlFlags & this.FL_connected ||
            this._ctlFlags & this.FL_buffered) &&
          0 !== this._sig &&
          0 !== this._id
        ) {
          if (
            !(this._ctlFlags & this.FL_broken) &&
            this._now > this._actTime + 1e3 * this._ping + 3e3
          ) {
            this.callbacks.debug_msg &&
              this.callbacks.debug_msg("Activity time out."),
              (this._ctlFlags |= this.FL_broken),
              (this._ctlFlags &= ~this.FL_connected),
              (this._ctlFlags &= ~this.FL_recvClose),
              (this._ctlFlags &= ~this.FL_buffered);
            var s = this;
            return void setTimeout(function () {
              s.broken();
            }, 4200);
          }
          ((!(this._ctlFlags & this.FL_rereq) && this._requests.length > 0) ||
            this._inserts.length > 0) &&
            (this.callbacks.debug_msg &&
              this.callbacks.debug_msg("Sending requests."),
            this.sendRequests()),
            !(this._ctlFlags & this.FL_rereq) &&
              this._now > this._pendCheckTime + 1e4 &&
              ((this._pendCheckTime = this._now),
              this.requestPending(),
              this.checkInserts()),
            this._ctlFlags & this.FL_rereq && this.reRequestAll(),
            this._ctlFlags & this.FL_pingRequired && this.sendPing();
        } else this._pendCheckTime = this._now;
      }),
      (sls.HttpConnection.prototype.checkRequest = function (s) {
        var t = s.service + s.name,
          e = s.fields.length;
        if (this._pend[t])
          for (; e--; )
            this._pend[t].fids[s.fields[e].field] && s.fields.splice(e, 1);
        if (((e = s.fields.length), this._cache[t]))
          for (; e--; )
            this._cache[t].fids[s.fields[e].field] && s.fields.splice(e, 1);
      }),
      (sls.HttpConnection.prototype.sendRequests = function () {
        if (0 !== this._requests.length || 0 !== this._inserts.length) {
          for (var s = ""; this._requests.length > 0; ) {
            var t = this._requests.shift();
            this.checkRequest(t),
              t.fields.length <= 0 ||
                ((s += "2" + t.serialize() + "\n"), this.addToReqCache(t));
          }
          if (this._inserts.length > 0)
            for (var e = new Date().getTime(); this._inserts.length > 0; )
              (s += "6" + (t = this._inserts.shift()).serialize() + "\n"),
                (t.tm = e),
                (this._insCache["i" + t.seqNo] = t);
          this.post(s);
        }
      }),
      (sls.HttpConnection.prototype.requestPending = function () {
        var s = this.serializeReqCache(this._snapCache),
          t = this.serializeReqCache(this._pend),
          e = "";
        "" !== t && (e += t),
          "" !== s && (e += s),
          "" !== e &&
            (this.callbacks.debug_msg &&
              this.callbacks.debug_msg("Requesting pending."),
            this.post(e));
      }),
      (sls.HttpConnection.prototype.reRequestAll = function () {
        this._ctlFlags &= ~this.FL_rereq;
        var s = this.serializeReqCache(this._snapCache),
          t = this.serializeReqCache(this._pend),
          e = this.serializeReqCache(this._cache),
          i = "";
        if (("" !== t && (i += t), "" !== e)) {
          i += e;
          for (var n in this._cache)
            if (!1 !== this._cache.hasOwnProperty(n)) {
              (void 0 !== this._pend[n] && null !== this._pend[n]) ||
                ((this._pend[n] = {}),
                (this._pend[n].fids = {}),
                (this._pend[n].s = this._cache[n].s),
                (this._pend[n].k = this._cache[n].k),
                (this._pend[n].reqType = this._cache[n].reqType),
                (this._pend[n].reqFlags = this._cache[n].reqFlags),
                (this._pend[n].reqPrio = this._cache[n].reqPrio));
              for (var h in this._cache[n].fids)
                !1 !== this._cache[n].fids.hasOwnProperty(h) &&
                  ((void 0 !== this._pend[n].fids[h] &&
                    null !== this._pend[n].fids[h]) ||
                    (this._pend[n].fids[h] = {}));
              delete this._cache[n];
            }
        }
        "" !== s && (i += s), "" !== i && this.post(i);
      }),
      (sls.HttpConnection.prototype.serializeReqCache = function (s) {
        if (void 0 === s || null === s) return "";
        var t = "";
        for (var e in s)
          if (!1 !== s.hasOwnProperty(e)) {
            (t += "2" + s[e].s + "," + s[e].k + "," + s[e].reqType),
              (s[e].reqFlags > 0 || s[e].reqPrio > 0) &&
                ((t += ",["),
                s[e].reqFlags > 0
                  ? ((t += "f" + s[e].reqFlags),
                    s[e].reqPrio > 0 && (t += ",p" + s[e].reqPrio))
                  : s[e].reqPrio > 0 && (t += "p" + s[e].reqPrio),
                (t += "]"));
            for (var i in s[e].fids)
              !1 !== s[e].fids.hasOwnProperty(i) && (t += "," + i);
            t += "\n";
          }
        return t;
      }),
      (sls.HttpConnection.prototype.addToReqCache = function (s) {
        var t = null;
        if (s.type === sls.RequestType.Monitor) t = this._pend;
        else {
          if (s.type !== sls.RequestType.Snapshot) return;
          (void 0 !== this._snapCache && null !== this._snapCache) ||
            (this._snapCache = {}),
            (t = this._snapCache);
        }
        var e = s.service + s.name;
        if (t[e]) {
          (void 0 !== t[e].fids && null !== t[e].fids) || (t[e].fids = {});
          for (var i = 0; i < s.fields.length; i++)
            (void 0 !== t[e].fids[s.fields[i].field] &&
              null !== t[e].fids[s.fields[i].field]) ||
              (t[e].fids[s.fields[i].field] = {});
        } else
          for (
            t[e] = {
              s: s.service,
              k: s.name,
              reqType: s.type,
              reqFlags: s.flags,
              reqPrio: s.priority,
              fids: {},
            },
              i = 0;
            i < s.fields.length;
            i++
          )
            t[e].fids[s.fields[i].field] = {};
      }),
      (sls.HttpConnection.prototype.checkInserts = function () {
        for (var s in this._insCache)
          !1 !== this._insCache.hasOwnProperty(s) &&
            5e3 + this._insCache[s].tm < this._now &&
            (this.callbacks.insert_status &&
              ((o = {}),
              (o.s = this._insCache[s].service),
              (o.k = this._insCache[s].name),
              (o.i = this._insCache[s].seqNo),
              (o.r = 2),
              (o.t = "Insert timed out"),
              this.callbacks.insert_status(o)),
            delete this._insCache[s]);
      }),
      (sls.HttpConnection.prototype.onopen = function (s) {
        this.slsconn.callbacks.debug_msg && this.slsconn.callbacks.debug_msg(s);
      }),
      (sls.HttpConnection.prototype.onmessage = function (s) {
        var t = JSON.parse(s.data);
        if (t.hasOwnProperty("up"))
          for (var e = 0; e < t.up.length; e++) {
            var i = t.up[e];
            null !== i &&
              (i.hasOwnProperty("s")
                ? this.slsconn.up(i)
                : i.hasOwnProperty("pi")
                ? this.slsconn.pi()
                : i.hasOwnProperty("hb")
                ? this.slsconn.hb()
                : i.hasOwnProperty("ins") && this.slsconn.ins());
          }
        else
          t.hasOwnProperty("ac")
            ? this.slsconn.ac(t.ac)
            : t.hasOwnProperty("hb")
            ? this.slsconn.hb()
            : t.hasOwnProperty("rc")
            ? this.slsconn.rc()
            : t.hasOwnProperty("xa")
            ? this.slsconn.xa()
            : t.hasOwnProperty("xc") && this.slsconn.xc();
      }),
      (sls.HttpConnection.prototype.onclose = function (s) {
        if (
          (this.slsconn.callbacks.debug_msg &&
            this.slsconn.callbacks.debug_msg(
              s + " " + s.wasClean + " " + s.code + "\n" + s.reason
            ),
          (this._websocket = null),
          1006 !== s.code ||
            this.slsconn._ctlFlags & this.slsconn.FL_initConn ||
            this._ctlFlags & this.FL_broken)
        ) {
          if (
            !(this.slsconn._ctlFlags & this.slsconn.FL_unauthorised) &&
            this.slsconn._ctlFlags & this.slsconn.FL_initConn
          ) {
            this.slsconn.callbacks.debug_msg &&
              this.slsconn.callbacks.debug_msg("Switching to JS API."),
              this.slsconn.reset(!0);
            t = this.slsconn;
            setTimeout(function () {
              t.startAPI();
            }, 20);
          }
        } else {
          (this._ctlFlags |= this.FL_broken),
            (this._ctlFlags &= ~this.FL_connected),
            (this._ctlFlags &= ~this.FL_recvClose),
            (this._ctlFlags &= ~this.FL_buffered);
          var t = this.slsconn;
          setTimeout(function () {
            t.broken();
          }, 4200);
        }
      }),
      (sls.HttpConnection.prototype.onerror = function (s) {
        this.slsconn.callbacks.debug_msg && this.slsconn.callbacks.debug_msg(s);
      }),
      (sls.HttpConnection.prototype.reset = function (s) {
        (this._sig = 0),
          (this._id = 0),
          (this._incCnt = 0),
          (this._ctlFlags &= ~this.FL_connected),
          (this._ctlFlags &= ~this.FL_broken),
          (this._ctlFlags &= ~this.FL_recvClose),
          (this._ctlFlags &= ~this.FL_bcRecv),
          (this._ctlFlags |= this.FL_initConn),
          (this._ctlFlags &= ~this.FL_buffered),
          (this._ctlFlags |= this.FL_pingRequired),
          0 == s
            ? (this._ctlFlags &= ~this.FL_switchedProto)
            : (this._ctlFlags |= this.FL_switchedProto);
        var t = new Date();
        (this._now = t.getTime()),
          (this._actTime = this._now),
          (this._pendCheckTime = this._now);
      }),
      (this.FL_connected = 1),
      (this.FL_broken = 2),
      (this.FL_recvClose = 4),
      (this.FL_bcRecv = 8),
      (this.FL_initConn = 16),
      (this.FL_buffered = 32),
      (this.FL_rereq = 64),
      (this.FL_staleSet = 128),
      (this.FL_pingRequired = 256),
      (this.FL_switchedProto = 512),
      (this.FL_unauthorised = 1024),
      (this.FL_paused = 2048),
      (this._ctlFlags = 0),
      (this._hostWDS = ""),
      (this._pushPageURI = ""),
      (this._flags = i || 0),
      (this._host = null),
      (this._ping = 15),
      (this._logging = 0),
      (this._statusChanged = !1),
      (this._http = "http://"),
      (this._ws = "ws://"),
      (this._now = 0),
      (this._actTime = 0),
      (this._pendCheckTime = 0),
      (this._runInt = 100),
      (this._requests = []),
      (this._inserts = []),
      (this._pend = {}),
      (this._cache = {}),
      (this._snapCache = null),
      (this._insCache = {}),
      (this._ctlFlags &= ~this.FL_rereq),
      (this._ctlFlags &= ~this.FL_staleSet),
      (this._runID = 0),
      (this._auth = e || ""),
      (this._postFrame = null),
      (this._postForm = null),
      (this._pushFrame = null),
      (this._websocket = null),
      (this._bandwidth = n || 0),
      (this._maxConnAttempts = 10),
      (this._connAttempts = 0),
      (this.callbacks = t || {}),
      this.reset(!1),
      -1 !== s.indexOf("https://") &&
        ((this._http = "https://"), (this._ws = "wss://")),
      (this._hostWDS = s),
      (sls.HttpConnection.prototype.startAPI = function () {
        if (
          ((this._flags &= -2),
          (this._postFrame = this.create_iframe("postFrame")),
          (this._postForm = this.create_post_form(
            "postToServer",
            this._postFrame
          )),
          (this._pushFrame = this.create_iframe("pushFrame")),
          (this._pushPageURI = this.getURI()),
          this.callbacks.debug_msg &&
            this.callbacks.debug_msg("Initial connection attempt..."),
          this.recv(this._pushPageURI),
          0 === this._runID)
        ) {
          this.callbacks.debug_msg &&
            this.callbacks.debug_msg("Starting API run interval.");
          var s = this;
          this._runID = setInterval(function () {
            s.run();
          }, this._runInt);
        }
        this.callbacks.debug_msg && this.callbacks.debug_msg("Started API."),
          this.callbacks.api_started && this.callbacks.api_started();
      }),
      (sls.HttpConnection.prototype.startWsAPI = function () {
        if (window.WebSocket) {
          var s = this;
          (this._websocket = new WebSocket(this.getWsURI())),
            (this._websocket.onopen = s.onopen),
            (this._websocket.onmessage = s.onmessage),
            (this._websocket.onclose = s.onclose),
            (this._websocket.onerror = s.onerror),
            (this._websocket.slsconn = this),
            this.callbacks.debug_msg &&
              this.callbacks.debug_msg("Initial connection attempt..."),
            (this._runID = setInterval(function () {
              s.run();
            }, this._runInt)),
            this.callbacks.debug_msg &&
              this.callbacks.debug_msg("Started WS API."),
            this.callbacks.api_started && this.callbacks.api_started();
        } else {
          (this._flags &= -2),
            this.callbacks.debug_msg &&
              this.callbacks.debug_msg(
                "No websockets support, starting JS API."
              );
          s = this;
          setTimeout(function () {
            s.startAPI();
          }, 20);
        }
      });
    var h = this;
    1 == (1 & this._flags)
      ? setTimeout(function () {
          h.startWsAPI();
        }, 20)
      : setTimeout(function () {
          h.startAPI();
        }, 20);
  });
var _sls_theHttpConnection = null,
  _ac = function (s) {
    _sls_theHttpConnection.ac(s);
  },
  _up = function (s) {
    _sls_theHttpConnection.up(s);
  },
  _hb = function () {
    _sls_theHttpConnection.hb();
  },
  _pi = function () {
    _sls_theHttpConnection.pi();
  },
  _rc = function () {
    _sls_theHttpConnection.rc();
  },
  _bc = function () {
    _sls_theHttpConnection.bc();
  },
  _xa = function () {
    _sls_theHttpConnection.xa();
  },
  _xc = function () {
    _sls_theHttpConnection.xc();
  },
  _ins = function (s) {
    _sls_theHttpConnection.ins(s);
  },
  _end = function () {
    _sls_theHttpConnection.end();
  };
(sls.get_version = function () {
  return "1.4 - Copyright Dion 2018-";
}),
  (sls.create_http_connection = function (s, t, e, i, n) {
    return null === _sls_theHttpConnection
      ? ((_sls_theHttpConnection = new sls.HttpConnection(s, t, e, i, n)), 0)
      : 1;
  }),
  (sls.destroy_http_connection = function () {
    _sls_theHttpConnection &&
      (_sls_theHttpConnection.destroy(), (_sls_theHttpConnection = null));
  }),
  (sls.set_connection_callbacks = function (s) {
    _sls_theHttpConnection && (_sls_theHttpConnection.callbacks = s);
  }),
  (sls.request_record = function (s) {
    return _sls_theHttpConnection
      ? _sls_theHttpConnection.request_record(s)
      : 1;
  }),
  (sls.unmonitor_fields = function (s) {
    return _sls_theHttpConnection
      ? _sls_theHttpConnection.unmonitor_fields(s)
      : 1;
  }),
  (sls.unmonitor_record = function (s) {
    return _sls_theHttpConnection
      ? _sls_theHttpConnection.unmonitor_record(s)
      : 1;
  }),
  (sls.insert_request = function (s) {
    return _sls_theHttpConnection
      ? _sls_theHttpConnection.insert_request(s)
      : 1;
  }),
  (sls.pause_updates = function (s) {
    return _sls_theHttpConnection ? _sls_theHttpConnection.pause_updates(s) : 1;
  }),
  (sls.resume_updates = function (s) {
    return _sls_theHttpConnection ? _sls_theHttpConnection.resume_updates() : 1;
  }),
  (sls.set_max_connection_attempts = function (s) {
    if (_sls_theHttpConnection)
      return (_sls_theHttpConnection._maxConnAttempts = s);
  });

export default sls;
