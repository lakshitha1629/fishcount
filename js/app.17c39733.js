(function(e) {
    function t(t) {
        for (var s, n, r = t[0], l = t[1], c = t[2], d = 0, m = []; d < r.length; d++) n = r[d], i[n] && m.push(i[n][0]), i[n] = 0;
        for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (e[s] = l[s]);
        u && u(t);
        while (m.length) m.shift()();
        return o.push.apply(o, c || []), a()
    }

    function a() {
        for (var e, t = 0; t < o.length; t++) {
            for (var a = o[t], s = !0, r = 1; r < a.length; r++) {
                var l = a[r];
                0 !== i[l] && (s = !1)
            }
            s && (o.splice(t--, 1), e = n(n.s = a[0]))
        }
        return e
    }
    var s = {},
        i = { app: 0 },
        o = [];

    function n(t) { if (s[t]) return s[t].exports; var a = s[t] = { i: t, l: !1, exports: {} }; return e[t].call(a.exports, a, a.exports, n), a.l = !0, a.exports }
    n.m = e, n.c = s, n.d = function(e, t, a) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a }) }, n.r = function(e) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var s in e) n.d(a, s, function(t) { return e[t] }.bind(null, s));
        return a
    }, n.n = function(e) { var t = e && e.__esModule ? function() { return e["default"] } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "/Shrimp-Counter-App/";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = r.push.bind(r);
    r.push = t, r = r.slice();
    for (var c = 0; c < r.length; c++) t(r[c]);
    var u = l;
    o.push([0, "chunk-vendors"]), a()
})({
    0: function(e, t, a) { e.exports = a("56d7") },
    "30ac": function(e, t, a) {},
    "430b": function(e, t, a) {},
    "56d7": function(e, t, a) {
        "use strict";
        a.r(t);
        a("cadf"), a("551c"), a("f751"), a("097d");
        var s = a("2b0e"),
            i = a("ce5b"),
            o = a.n(i),
            n = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", { attrs: { id: "app" } }, [a("v-app", [a("app-toolbar"), a("v-content", [a("router-view", { key: e.componentKey }), a("loading-dialogue")], 1)], 1)], 1)
            },
            r = [],
            l = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", [a("v-toolbar", { attrs: { color: "primary", absolute: "", app: "" } }, [a("v-toolbar-title", { staticClass: "text-uppercase white--text", staticStyle: { cursor: "pointer" } }, [a("v-layout", { attrs: { "align-center": "" }, on: { click: function(t) { return e.rerender() } } }, [a("v-avatar", { staticClass: "mx-2", attrs: { tile: "", size: "20" } }, [a("img", { attrs: { src: "/Shrimp-Counter-App/img/bot.png" } })]), a("span", { staticClass: "font-weight-black" }, [e._v("MEC")]), a("span", { staticClass: "font-weight-thin" }, [e._v("Vision")])], 1)], 1), a("v-spacer"), a("span", { staticClass: "caption mx-3" }, [a("v-btn-toggle", { attrs: { value: e.localeSelect, mandatory: "" } }, [a("v-btn", { attrs: { small: "", flat: "" }, on: { click: function(t) { return e.changeLocale("en") } } }, [e._v("EN")]), a("v-btn", { attrs: { small: "", flat: "" }, on: { click: function(t) { return e.changeLocale("es") } } }, [e._v("ES")])], 1)], 1), a("v-toolbar-items", { staticClass: "hidden-sm-and-down" }, e._l(e.menu[e.localeSelect], function(t) { return a("v-btn", { key: t.title, attrs: { to: t.link, flat: "", dark: "" } }, [e._v(e._s(t.title))]) }), 1), a("v-menu", { staticClass: "hidden-md-and-up" }, [a("v-toolbar-side-icon", { attrs: { slot: "activator" }, slot: "activator" }), a("v-list", e._l(e.menu[e.localeSelect], function(t) { return a("v-list-tile", { key: t.title, attrs: { to: t.link } }, [a("v-list-tile-content", [a("v-list-tile-title", [e._v(e._s(t.title))])], 1)], 1) }), 1)], 1)], 1)], 1)
            },
            c = [],
            u = a("a925");
        s["default"].use(u["a"]);
        var d = { en: { subtitle: "Using computer vision to identify and count mosquito eggs.", description: "This is a proof-of-concept web app to develop a way to algorithmically detect mosquito eggs and egg cluster on ovitrap paper using computer vision. Try out the app using the 'demo' image -- or check out the guide for more information.", "Select Image": "Select Image", "Demo Image": "Demo Image", "Select the ovitrap image type": "Select the ovitrap image type", "Paper Strip": "Paper Strip", "Paper-Description": "Ovitrap paper is rectangular in shape (approx. 32cm X 8cm), on white pellon fabric with gray-black mosquito eggs.", Magnified: "Magnified", "Magnified-Description": "Ovitrap paper is less narrow than a paper strip, on white pellon fabric with gray-black mosquito eggs that appear larger in the image.", Microscope: "Microscope", "Microscope-Description": "Image is square, and mosquito eggs are clearly visible as large objects.", Rotate: "Rotate", Remove: "Remove", Analyze: "Analyze", "Analyzing Image...": "Analyzing Image...", Filters: "Filters", "Image Threshold Adjustment": "Image Threshold Adjustment", "Image Threshold Adjustment Details": 'Use this slider to separate background image "noise" and scan for just the eggs.', "Minimum Egg Size": "Minimum Egg Size", "Minimum Egg Size Details": "The minimum (smallest single egg) radius for the algorithm — anything smaller will be 'grayed out' and not calculated.", "Maximum Egg Size": "Maximum Egg Size", "Maximum Egg Size Details": "The maximum radius for the eggs — anything larger will be considered a cluster.", "Maximum Cluster Size": "Maximum Cluster Size", "Maximum Cluster Size Details": "The maximum radius for the cluster of eggs — anything larger will be discarded.", "Egg Size Scale": "Egg Size Scale", "Egg Size Scale Details": "Use these sliders to set the minimum (smallest single egg) radius for the algorithm.", "Too Large / Too Small": "Too Large / Too Small", Reset: "Reset", of: "of", "Source Image": "Source Image", Threshold: "Threshold", "Detected Objects": "Detected Objects", "Sorted Markers": "Sorted Markers", "Outlined Overlay": "Outlined Overlay", Analysis: "Analysis", Details: "Details", "Single Eggs": "Single Eggs", "Calculated from Clusters": "Calculated from Clusters", "Total Egg Estimation": "Total Egg Estimation", "Total Single Egg Area": "Total Single Egg Area", "Single Egg Average Size": "Single Egg Average Size", "Egg Clusters": "Egg Clusters", "Total Egg Clusters Area": "Total Egg Clusters Area", "Average Cluster Area": "Average Cluster Area", "Average Eggs per Cluster": "Average Eggs per Cluster", "Image Size": "Image Size", Close: "Close", Compare: "Compare", "Show Filters": "Show Filters" }, es: { subtitle: "Uso de la visión por ordenador para identificar y contar los huevos de mosquitos.", description: "Esta es una aplicación web de prueba de concepto para desarrollar una forma de detectar de forma algorítmica los huevos de mosquitos y los conglomerados de huevos en papel ovitrap mediante visión artificial. Pruebe la aplicación utilizando la imagen 'demo' o consulte la guía para obtener más información.", "Select Image": "Seleccionar Imagen", "Demo Image": "Imagen Demo", "Select the ovitrap image type": "Seleccione el tipo de imagen ovitrap", "Paper Strip": "Tira de Papel", "Paper-Description": "El papel Ovitrap es de forma rectangular (aprox. 32 cm X 8 cm), sobre tela de pellón blanco con huevos de mosquito negro grisáceo.", Magnified: "Magnificada", "Magnified-Description": "El papel Ovitrap es menos estrecho que una tira de papel, sobre tela de pellon blanco con huevos de mosquito gris-negro que aparecen más grandes en la imagen.", Microscope: "Microscopio", "Microscope-Description": "La imagen es cuadrada y los huevos de mosquito son claramente visibles como objetos grandes.", Rotate: "Girar", Remove: "Retirar", Analyze: "Analizar", "Analyzing Image...": "Analizando Imagen...", Filters: "Filtros", "Image Threshold Adjustment": "Ajuste del umbral de imagen", "Image Threshold Adjustment Details": 'Use este control deslizante para separar el "ruido" de la imagen de fondo y escanee solo los huevos.', "Minimum Egg Size": "Tamaño Mínimo del Huevo", "Minimum Egg Size Details": "El radio mínimo (el huevo individual más pequeño) para el algoritmo; cualquier cosa más pequeña se 'atenuará' y no se calculará.", "Maximum Egg Size": "Tamaño Máximo del Huevo", "Maximum Egg Size Details": "El radio máximo para los huevos: cualquier cosa más grande se considerará un racimo.", "Maximum Cluster Size": "Tamaño máximo del Clúster", "Maximum Cluster Size Details": "El radio máximo para el racimo de huevos: todo lo más grande se descartará.", "Egg Size Scale": "Escala de Tamaño de Huevo", "Egg Size Scale Details": "Use estos controles deslizantes para establecer el radio mínimo (el huevo más pequeño) para el algoritmo.", "Too Large / Too Small": "Demasiado Grande / Demasiado Pequeño", Reset: "Reiniciar", of: "de", "Source Image": "Fuente de Imagen", Threshold: "Límite", "Detected Objects": "Objetos Detectados", "Sorted Markers": "Marcadores Ordenados", "Outlined Overlay": "Superposición Delineada", Analysis: "Análisis", Details: "Detalles", "Single Eggs": "Huevos individuales", "Calculated from Clusters": "Calculado a partir de clusters", "Total Egg Estimation": "Estimación Total del Huevo", "Total Single Egg Area": "Área Total de un Solo Euevo", "Single Egg Average Size": "Tamaño Promedio de un Solo Huevo", "Egg Clusters": "Racimos de Huevo", "Total Egg Clusters Area": "Área Total de Racimos de Huevos", "Average Cluster Area": "Área Promedio del Clúster", "Average Eggs per Cluster": "Promedio de Huevos por Racimo", "Image Size": "Tamaño de la Imagen", Close: "Cerca", Compare: "Comparar", "Show Filters": "Mostrar Filtros" } },
            m = new u["a"]({ locale: "en", fallbackLocale: "es", messages: d }),
            p = m,
            g = {
                components: {},
                data: function() { return { menu: { 0: [{ title: "Vision", link: "/" }, { title: "Guide", link: "/guide" }, { title: "About", link: "/about" }], 1: [{ title: "Visión", link: "/" }, { title: "Guía", link: "/guide-es" }, { title: "Acerca de...", link: "/about-es" }] }, languages: [{ title: "en", name: "English" }, { title: "es", name: "Español" }], loading: !1 } },
                computed: { localeSelect: function() { return "en" === this.$i18n.locale ? 0 : 1 } },
                created: function() {
                    var e = this;
                    $e.$on("appLoading", function() { e.loading = !0 })
                },
                methods: { rerender: function() { $e.$emit("forceRerender") }, menuItems: function() { return this.menu }, changeLocale: function(e) { p.locale = e } }
            },
            v = g,
            h = a("2877"),
            f = Object(h["a"])(v, l, c, !1, null, null, null),
            y = f.exports,
            b = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", { staticClass: "loading text-xs-center" }, [a("v-dialog", { attrs: { persistent: "", width: "500" }, model: { value: e.loadingDialog, callback: function(t) { e.loadingDialog = t }, expression: "loadingDialog" } }, [a("v-card", { attrs: { color: "primary", dark: "" } }, [a("v-card-text", [a("v-layout", { attrs: { "align-center": "" } }, [a("v-avatar", { staticClass: "mr-2", attrs: { id: "bot", tile: "", size: "24" } }, [a("v-img", { attrs: { src: "/Shrimp-Counter-App/img/bot.gif" } })], 1), e._v("\r\n        " + e._s(e.$t("Analyzing Image...")) + "\r\n        ")], 1), a("v-progress-linear", { staticClass: "mb-0", attrs: { indeterminate: "", color: "white", height: "15" } })], 1)], 1)], 1)], 1)
            },
            _ = [],
            w = {
                data: function() { return { loadingDialog: !1 } },
                created: function() {
                    var e = this;
                    $e.$on("loadingDialog", function() { e.loadingDialog = !0 })
                },
                watch: {
                    loadingDialog: function(e) {
                        var t = this;
                        e && setTimeout(function() { return t.loadingDialog = !1 }, 3e3)
                    }
                }
            },
            C = w,
            x = Object(h["a"])(C, b, _, !1, null, null, null),
            A = x.exports,
            E = {
                name: "Shrimp-Counter-App",
                components: { AppToolbar: y, LoadingDialogue: A },
                data: function() { return { componentKey: 0 } },
                created: function() {
                    var e = this;
                    $e.$on("forceRerender", function() { e.$router.push("/"), e.componentKey += 1, e.$vuetify.goTo(0, { offset: 0 }) })
                },
                mounted: function() {
                    var e = document.createElement("script");
                    e.setAttribute("src", "opencv.js"), document.head.appendChild(e), console.log("OpenCV Loaded")
                }
            },
            S = E,
            k = Object(h["a"])(S, n, r, !1, null, null, null),
            z = k.exports,
            T = a("9483");
        Object(T["a"])("".concat("/Shrimp-Counter-App/", "service-worker.js"), { ready: function() { console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB") }, cached: function() { console.log("Content has been cached for offline use.") }, updated: function() { console.log("New content is available; please refresh.") }, offline: function() { console.log("No internet connection found. App is running in offline mode.") }, error: function(e) { console.error("Error during service worker registration:", e) } });
        a("40d9");
        var j = a("2896"),
            I = a.n(j),
            $ = (a("bf40"), a("c0a4")),
            D = a.n($),
            M = a("8c4f"),
            R = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a(e.visionComponent, { key: e.componentKey, tag: "component" })
            },
            q = [],
            O = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("v-container", [a("app-top"), a("v-layout", [a("v-flex", { attrs: { xs12: "", md6: "", "offset-md3": "" } }, [a("v-container", { staticClass: "pt-0", attrs: { "grid-list-xl": "" } }, [a("h2", { staticClass: "subheading text-xs-center pb-2" }, [e._v(e._s(e.$t("Select the ovitrap image type")))]), a("v-item-group", { attrs: { mandatory: "" }, model: { value: e.imageType, callback: function(t) { e.imageType = t }, expression: "imageType" } }, [a("v-layout", { attrs: { row: "", wrap: "", "justify-center": "" } }, [a("v-flex", { attrs: { xs12: "", md4: "" } }, [a("v-item", {
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            var s = t.active,
                                i = t.toggle;
                            return a("v-card", { class: s ? "elevation-5" : "", style: s ? "border: 2px solid var(--v-primary-base)" : "", on: { click: function(t) { i(), e.resetCroppa() } } }, [a("v-img", { attrs: { src: "/Shrimp-Counter-App/img/type-paper-thumb.jpg", "aspect-ratio": "2.00" } }), a("v-card-title", { attrs: { "primary-title": "" } }, [a("div", [a("h3", { staticClass: "headline mb-0" }, [e._v(e._s(e.$t("Paper Strip")))]), a("div", [e._v(e._s(e.$t("Paper-Description")))])])])], 1)
                        }
                    }])
                })], 1), a("v-flex", { attrs: { xs12: "", md4: "" } }, [a("v-item", {
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            var s = t.active,
                                i = t.toggle;
                            return a("v-card", { class: s ? "elevation-5" : "", style: s ? "border: 2px solid var(--v-primary-base)" : "", on: { click: function(t) { i(), e.resetCroppa() } } }, [a("v-img", { attrs: { src: "/Shrimp-Counter-App/img/type-magnified-thumb.jpg", "aspect-ratio": "2.00" } }), a("v-card-title", { attrs: { "primary-title": "" } }, [a("div", [a("h3", { staticClass: "headline mb-0" }, [e._v(e._s(e.$t("Magnified")))]), a("div", [e._v(e._s(e.$t("Magnified-Description")))])])])], 1)
                        }
                    }])
                })], 1), a("v-flex", { attrs: { xs12: "", md4: "" } }, [a("v-item", {
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            var s = t.active,
                                i = t.toggle;
                            return a("v-card", { class: s ? "elevation-5" : "", style: s ? "border: 2px solid var(--v-primary-base)" : "", on: { click: function(t) { i(), e.resetCroppa() } } }, [a("v-img", { attrs: { src: "/Shrimp-Counter-App/img/type-microscope-thumb.jpg", "aspect-ratio": "2.00" } }), a("v-card-title", { attrs: { "primary-title": "" } }, [a("div", [a("h3", { staticClass: "headline mb-0" }, [e._v(e._s(e.$t("Microscope")))]), a("div", [e._v(e._s(e.$t("Microscope-Description")))])])])], 1)
                        }
                    }])
                })], 1)], 1)], 1)], 1)], 1)], 1), a("v-layout", { key: e.croppaKey, style: this.croppaDimensions, attrs: { id: "croppaBox" } }, [a("croppa", { attrs: { "auto-sizing": "", "zoom-speed": 5, placeholder: "", "show-loading": !0, "placeholder-font-size": 20, "loading-size": 100, "show-remove-button": !1, "prevent-white-space": !1, "initial-image": e.initialImage }, on: { "initial-image-loaded": function(t) { e.showBottomOptions = !0 }, "new-image": function(t) { e.showBottomOptions = !0 }, "image-remove": function(t) { e.showBottomOptions = !1 } }, model: { value: e.croppa, callback: function(t) { e.croppa = t }, expression: "croppa" } }, [a("v-btn", { directives: [{ name: "show", rawName: "v-show", value: !e.croppa.imageSet, expression: "!croppa.imageSet" }], attrs: { id: "croppaButton", flat: "", large: "", depressed: "", absolute: "" }, on: { click: function(t) { return e.croppa.chooseFile() } } }, [e._v("\r\n    " + e._s(e.$t("Select Image")) + "\r\n    "), a("v-icon", { attrs: { large: "", right: "" } }, [e._v("photo")])], 1), a("v-btn", { directives: [{ name: "show", rawName: "v-show", value: !e.croppa.imageSet, expression: "!croppa.imageSet" }], staticStyle: { top: "25px" }, attrs: { absolute: "", right: "" }, on: { click: function(t) { return e.loadDemoImage() } } }, [e._v("\r\n    " + e._s(e.$t("Demo Image")) + "\r\n    "), a("v-icon", { attrs: { right: "" } }, [e._v("grain")])], 1)], 1)], 1), a("v-bottom-nav", { attrs: { app: "", fixed: "", value: this.showBottomOptions, height: "70" } }, [a("v-btn", { attrs: { flat: "", color: "primary" }, on: { click: function(t) { return e.croppa.rotate() } } }, [a("span", [e._v(e._s(e.$t("Rotate")))]), a("v-icon", [e._v("rotate_right")])], 1), a("v-btn", { attrs: { flat: "", color: "primary" }, on: { click: function(t) { return e.croppa.remove() } } }, [a("span", [e._v(e._s(e.$t("Remove")))]), a("v-icon", [e._v("cancel")])], 1), a("v-btn", { attrs: { flat: "", color: "secondary" }, on: { click: function(t) { return e.accept() } } }, [a("span", [e._v(e._s(e.$t("Analyze")))]), a("v-icon", [e._v("check_circle")])], 1)], 1)], 1)
            },
            P = [],
            V = (a("96cf"), a("3b8d")),
            L = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", { staticClass: "title my-4" }, [a("v-layout", { staticStyle: { cursor: "pointer" }, attrs: { "justify-center": "", row: "" }, on: { click: function(t) { return e.rerender() } } }, [a("v-avatar", { staticClass: "mr-2 ml-0", attrs: { tile: "", size: "48" } }, [a("img", { attrs: { src: "/Shrimp-Counter-App/img/bot.png" } })]), a("span", { staticClass: "display-2 font-weight-black text-uppercase black--text pb-0" }, [a("span", [e._v("MEC")]), a("span", { staticClass: "font-weight-thin" }, [e._v("Vision")])])], 1), a("v-layout", { attrs: { "align-center": "", "justify-center": "", wrap: "" } }, [a("h2", { staticClass: "headline mt-4" }, [e._v(e._s(e.$t("subtitle")))])]), a("v-layout", { attrs: { "align-center": "", "justify-center": "", wrap: "" } }, [a("v-flex", { attrs: { xs12: "", md10: "", lg10: "", xl6: "" } }, [a("p", { staticClass: "subheading my-3" }, [e._v(e._s(e.$t("description")))])])], 1)], 1)
            },
            N = [],
            U = { methods: { rerender: function() { $e.$emit("forceRerender") } } },
            B = U,
            F = Object(h["a"])(B, L, N, !1, null, null, null),
            H = F.exports,
            W = {
                components: { AppTop: H },
                data: function() { return { croppa: {}, croppaKey: 0, initialImage: "", dataUrl: "", imageAccepted: !1, loading: !1, loadingDialog: !1, analysisStarted: !1, showBottomOptions: !1, imageType: 0 } },
                computed: { croppaDimensions: function() { return 0 === this.imageType ? "width: 100%; height: 400px;" : 1 === this.imageType ? "width: 100%; height: 800px;" : 2 === this.imageType ? "width: 80%; height: 600px;" : "width = 100%; height: 400px;" } },
                watch: {
                    loadingDialog: function(e) {
                        var t = this;
                        e && setTimeout(function() { return t.loadingDialog = !1 }, 500)
                    }
                },
                methods: {
                    resetCroppa: function() { this.initialImage = null, this.croppaKey += 1 },
                    next: function() {
                        var e = parseInt(this.active);
                        this.active = e < 5 ? e + 1 : 0
                    },
                    loadDemoImage: function() {
                        var e = new Image;
                        0 === this.imageType && (e.src = "/Shrimp-Counter-App/img/type-paper.jpg"), 1 === this.imageType && (e.src = "/Shrimp-Counter-App/img/type-magnified.jpg"), 2 === this.imageType && (e.src = "/Shrimp-Counter-App/img/type-microscope.jpg"), this.initialImage = e, this.croppa.refresh(), this.$vuetify.goTo("#croppaBox", {})
                    },
                    accept: function() {
                        var e = Object(V["a"])(regeneratorRuntime.mark(function e() {
                            return regeneratorRuntime.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return $e.$emit("appLoading"), $e.$emit("toAnalysis"), $e.$emit("loadingScreen"), this.analysisStarted = !0, e.next = 6, this.croppa.generateDataUrl("", 1);
                                    case 6:
                                        return this.rawImage = e.sent, $e.$emit("imageType", this.imageType), e.next = 10, $e.$emit("rawImageReady", this.rawImage);
                                    case 10:
                                        return this.imageAccepted = !0, e.next = 13, new Promise(function(e, t) { return setTimeout(e, 500) });
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));

                        function t() { return e.apply(this, arguments) }
                        return t
                    }()
                }
            },
            G = W,
            K = (a("d835"), Object(h["a"])(G, O, P, !1, null, null, null)),
            X = K.exports,
            J = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", [a("v-container", { attrs: { fluid: "" } }, [a("v-layout", { attrs: { row: "", wrap: "" } }, [a("v-flex", { directives: [{ name: "show", rawName: "v-show", value: e.analysisStarted, expression: "analysisStarted" }], attrs: { xs12: "", md8: "", lg8: "", xl9: "" } }, [a("v-window", { staticClass: "elevation-5", model: { value: e.window, callback: function(t) { e.window = t }, expression: "window" } }, e._l(e.analyzedImages, function(t) { return a("v-window-item", { key: t.output, attrs: { transition: !1, "reverse-transition": !1 } }, [a("canvas", { directives: [{ name: "show", rawName: "v-show", value: e.showAnalysis, expression: "showAnalysis" }], staticClass: "imageCanvasOuter", attrs: { id: t.output } }, [a("img", { staticClass: "imageCanvasInner", staticStyle: { height: "100px" }, attrs: { id: "analyzedImage", src: e.analyzedImage } })]), a("canvas", { directives: [{ name: "show", rawName: "v-show", value: !e.showAnalysis, expression: "!showAnalysis" }], staticClass: "imageCanvasOuter", attrs: { id: t.source } }, [a("img", { staticClass: "imageCanvasInner", attrs: { id: "analyzedImage", src: e.analyzedImage } })])]) }), 1), a("v-card", { staticClass: "my-3" }, [a("v-card-title", [a("v-layout", { attrs: { "align-center": "", wrap: "" } }, [a("v-flex", [a("h1", { class: { title: e.$vuetify.breakpoint.smAndDown, "display-1": e.$vuetify.breakpoint.mdAndUp } }, [e._v(e._s(e.analyzedImagesPretty[this.window]))]), a("h2", { class: { subheading: e.$vuetify.breakpoint.smAndDown, "title mt-2": e.$vuetify.breakpoint.mdAndUp } }, [e._v("(" + e._s(this.window + 1) + " " + e._s(e.$t("of")) + " " + e._s(this.length) + ")")])]), a("v-spacer"), a("v-layout", { class: { "": e.$vuetify.breakpoint.smAndDown, shrink: e.$vuetify.breakpoint.mdAndUp }, attrs: { "justify-end": "", row: "" } }, [a("v-flex", { staticClass: "text-xs-center", attrs: { shrink: "" } }, [a("v-btn", { attrs: { icon: "", color: "primary" }, on: { click: e.previous } }, [a("v-icon", [e._v("chevron_left")])], 1)], 1), a("v-flex", { staticClass: "text-xs-center", attrs: { shrink: "" } }, [a("v-btn", { attrs: { icon: "", color: "primary" }, on: { click: e.next } }, [a("v-icon", [e._v("chevron_right")])], 1)], 1)], 1)], 1)], 1)], 1)], 1), a("v-flex", { directives: [{ name: "show", rawName: "v-show", value: e.analysisComplete, expression: "analysisComplete" }], class: { "pl-0": e.$vuetify.breakpoint.smAndDown, "pl-3": e.$vuetify.breakpoint.mdAndUp }, attrs: { xs12: "", md4: "", lg3: "", xl3: "" } }, [a("div", { directives: [{ name: "show", rawName: "v-show", value: e.drawer, expression: "drawer" }] }, [a("v-card", { staticClass: "mb-2" }, [a("v-card-title", [a("h4", { staticClass: "title" }, [e._v(e._s(e.$t("Filters")))])]), a("v-card-text", { staticClass: "pt-0" }, [a("v-layout", [a("v-tooltip", { attrs: { bottom: "" }, scopedSlots: e._u([{ key: "activator", fn: function(t) { var s = t.on; return [a("v-flex", { staticClass: "subheading" }, [a("span", e._g({}, s), [e._v(e._s(e.$t("Image Threshold Adjustment")))])])] } }]) }, [a("span", [e._v(e._s(e.$t("Image Threshold Adjustment Details")))])])], 1), a("v-layout", { attrs: { row: "" } }, [a("v-flex", [a("v-slider", { attrs: { max: 255 }, on: { change: function(t) { return e.analyze() } }, model: { value: e.threshValue, callback: function(t) { e.threshValue = t }, expression: "threshValue" } })], 1), a("v-flex", { attrs: { xs3: "", md2: "", xl2: "", "mx-2": "" } }, [a("v-text-field", { staticClass: "filter", attrs: { solo: "", "hide-details": "", "single-line": "" }, model: { value: e.threshValue, callback: function(t) { e.threshValue = t }, expression: "threshValue" } })], 1)], 1), a("v-layout", [a("v-tooltip", { attrs: { bottom: "" }, scopedSlots: e._u([{ key: "activator", fn: function(t) { var s = t.on; return [a("v-flex", { staticClass: "subheading" }, [a("span", e._g({}, s), [e._v(e._s(e.$t("Minimum Egg Size")))])])] } }]) }, [a("span", [e._v(e._s(e.$t("Minimum Egg Size Details")))])])], 1), a("v-layout", { attrs: { row: "" } }, [a("v-flex", { attrs: { "mx-3": "" } }, [a("v-slider", { attrs: { min: 0, max: 100 }, on: { change: function(t) { return e.analyze() } }, model: { value: e.minEggRadius, callback: function(t) { e.minEggRadius = t }, expression: "minEggRadius" } })], 1), a("v-flex", { attrs: { xs8: "", md5: "", lg4: "", xl3: "" } }, [a("v-text-field", { attrs: { solo: "", "hide-details": "", "single-line": "" }, model: { value: e.minEggRadius, callback: function(t) { e.minEggRadius = t }, expression: "minEggRadius" } })], 1)], 1), a("v-layout", [a("v-tooltip", { attrs: { bottom: "" }, scopedSlots: e._u([{ key: "activator", fn: function(t) { var s = t.on; return [a("v-flex", { staticClass: "subheading" }, [a("span", e._g({}, s), [e._v(e._s(e.$t("Maximum Egg Size")))])])] } }]) }, [a("span", [e._v(e._s(e.$t("Maximum Egg Size Details")))])])], 1), a("v-layout", { attrs: { row: "" } }, [a("v-flex", { attrs: { "mx-3": "" } }, [a("v-slider", { attrs: { min: 0, max: 100 }, on: { change: function(t) { return e.analyze() } }, model: { value: e.maxEggRadius, callback: function(t) { e.maxEggRadius = t }, expression: "maxEggRadius" } })], 1), a("v-flex", { attrs: { xs8: "", md5: "", lg4: "", xl3: "" } }, [a("v-text-field", { attrs: { solo: "", "hide-details": "", "single-line": "" }, model: { value: e.maxEggRadius, callback: function(t) { e.maxEggRadius = t }, expression: "maxEggRadius" } })], 1)], 1), a("v-layout", [a("v-tooltip", { attrs: { bottom: "" }, scopedSlots: e._u([{ key: "activator", fn: function(t) { var s = t.on; return [a("v-flex", { staticClass: "subheading" }, [a("span", e._g({}, s), [e._v(e._s(e.$t("Maximum Cluster Size")))])])] } }]) }, [a("span", [e._v(e._s(e.$t("Maximum Cluster Size Details")))])])], 1), a("v-layout", { attrs: { row: "" } }, [a("v-flex", { attrs: { "mx-3": "" } }, [a("v-slider", { attrs: { min: 0, max: 100 }, on: { change: function(t) { return e.analyze() } }, model: { value: e.maxEggCluster, callback: function(t) { e.maxEggCluster = t }, expression: "maxEggCluster" } })], 1), a("v-flex", { attrs: { xs8: "", md5: "", lg4: "", xl3: "" } }, [a("v-text-field", { attrs: { solo: "", "hide-details": "", "single-line": "" }, model: { value: e.maxEggCluster, callback: function(t) { e.maxEggCluster = t }, expression: "maxEggCluster" } })], 1)], 1), a("v-layout", { attrs: { row: "", wrap: "", "align-center": "" } }, [a("v-tooltip", { attrs: { bottom: "" }, scopedSlots: e._u([{ key: "activator", fn: function(t) { var s = t.on; return [a("v-flex", { staticClass: "subheading mb-1" }, [a("span", e._g({}, s), [a("p", { staticClass: "mb-1" }, [e._v(e._s(e.$t("Egg Size Scale")))]), a("p", { staticClass: "caption my-0" }, [a("v-icon", { attrs: { small: "", color: "rgba(0, 0, 225, 255)" } }, [e._v("fiber_manual_record")]), e._v(" " + e._s(e.$t("Minimum Egg Size")))], 1), a("p", { staticClass: "caption my-0" }, [a("v-icon", { attrs: { small: "", color: "rgba(225, 0, 0, 255)" } }, [e._v("fiber_manual_record")]), e._v(" " + e._s(e.$t("Maximum Egg Size")))], 1), a("p", { staticClass: "caption my-0" }, [a("v-icon", { attrs: { small: "", color: "rgba(100, 100, 100, 255)" } }, [e._v("fiber_manual_record")]), e._v(" " + e._s(e.$t("Too Large / Too Small")))], 1)])])] } }]) }, [a("span", [e._v(e._s(e.$t("Egg Size Scale Details")))])]), a("v-flex", [a("canvas", { staticStyle: { margin: "auto", display: "block" }, attrs: { id: "legendCanvas" } }, [a("img", { attrs: { id: "legendImage", src: "/Shrimp-Counter-App/img/legend.png" } })])])], 1)], 1)], 1)], 1), a("v-card", [a("v-card-title", { staticClass: "justify-end" }, [a("h4", { staticClass: "title" }, [e._v(e._s(e.$t("Analysis")))]), a("v-spacer"), a("v-btn", { staticClass: "mr-0", attrs: { color: "primary", dark: "" }, on: { click: function(t) { e.detailsDialog = !0 } } }, [e._v(e._s(e.$t("Details")))])], 1), a("v-divider"), a("v-list", [a("v-list-tile", [a("v-list-tile-content", { staticClass: "body-2" }, [a("span", [a("v-icon", { attrs: { small: "", color: "rgba(0, 0, 225, 255)" } }, [e._v("fiber_manual_record")]), e._v(e._s(e.$t("Single Eggs")))], 1)]), a("v-list-tile-content", { staticClass: "body-2 align-end" }, [e._v(e._s(this.singlesCount))])], 1), a("v-list-tile", [a("v-list-tile-content", { staticClass: "body-2" }, [a("span", [a("v-icon", { attrs: { small: "", color: "rgba(225, 0, 0, 255)" } }, [e._v("fiber_manual_record")]), e._v(e._s(e.$t("Calculated from Clusters")))], 1)]), a("v-list-tile-content", { staticClass: "body-2 align-end" }, [e._v(e._s(this.singlesCalculated))])], 1), a("v-divider"), a("v-list-tile", [a("v-list-tile-content", { staticClass: "body-2" }, [e._v(e._s(e.$t("Total Egg Estimation")))]), a("v-list-tile-content", { staticClass: "body-2 align-end" }, [e._v(e._s(this.totalEggs))])], 1)], 1)], 1)], 1), a("v-dialog", { attrs: { "max-width": "500px" }, model: { value: e.detailsDialog, callback: function(t) { e.detailsDialog = t }, expression: "detailsDialog" } }, [a("v-card", [a("v-card-title", [a("h2", { staticClass: "title ml-2" }, [e._v(e._s(e.$t("Details")))])]), a("v-card-text", [a("v-list", [a("v-list-tile", [a("v-list-tile-content", { staticClass: "body-1" }, [e._v(e._s(e.$t("Total Single Egg Area")))]), a("v-list-tile-content", { staticClass: "align-end body-1" }, [e._v(e._s(this.singlesTotalArea))])], 1), a("v-list-tile", [a("v-list-tile-content", { staticClass: "body-1" }, [e._v(e._s(e.$t("Single Egg Average Size")))]), a("v-list-tile-content", { staticClass: "align-end body-1" }, [e._v(e._s(this.singlesAvg))])], 1), a("v-list-tile", [a("v-list-tile-content", { staticClass: "body-1" }, [e._v(e._s(e.$t("Egg Clusters")))]), a("v-list-tile-content", { staticClass: "align-end body-1" }, [e._v(e._s(this.clustersCount))])], 1), a("v-list-tile", [a("v-list-tile-content", { staticClass: "body-1" }, [e._v(e._s(e.$t("Total Egg Clusters Area")))]), a("v-list-tile-content", { staticClass: "align-end body-1" }, [e._v(e._s(this.clustersTotalArea))])], 1), a("v-list-tile", [a("v-list-tile-content", { staticClass: "body-1" }, [e._v(e._s(e.$t("Average Cluster Area")))]), a("v-list-tile-content", { staticClass: "align-end body-1" }, [e._v(e._s(this.avgClusterArea))])], 1), a("v-list-tile", [a("v-list-tile-content", { staticClass: "body-1" }, [e._v(e._s(e.$t("Average Eggs per Cluster")))]), a("v-list-tile-content", { staticClass: "align-end body-1" }, [e._v(e._s(this.avgEggsPerCluster))])], 1), a("v-list-tile", [a("v-list-tile-content", { staticClass: "body-1" }, [e._v(e._s(e.$t("Image Size")))]), a("v-list-tile-content", { staticClass: "align-end body-1" }, [e._v(e._s(this.imageSize))])], 1)], 1)], 1), a("v-card-actions", [a("v-spacer"), a("v-btn", { attrs: { color: "primary", flat: "" }, on: { click: function(t) { e.detailsDialog = !1 } } }, [e._v(e._s(e.$t("Close")))])], 1)], 1)], 1)], 1), a("v-bottom-nav", { attrs: { app: "", fixed: "", value: this.showBottom, height: "70" } }, [a("v-btn", { attrs: { flat: "", color: "primary" }, on: { click: function(t) { return e.rerender() } } }, [a("span", [e._v(e._s(e.$t("Reset")))]), a("v-icon", [e._v("refresh")])], 1), a("v-btn", { attrs: { flat: "", color: "primary" }, on: { click: function(t) { e.showAnalysis = !e.showAnalysis } } }, [a("span", [e._v(e._s(e.$t("Compare")))]), a("v-icon", [e._v("compare")])], 1), a("v-btn", { attrs: { flat: "", color: "primary" }, on: { click: function(t) { t.stopPropagation(), e.drawer = !e.drawer } } }, [a("span", [e._v(e._s(e.$t("Show Filters")))]), a("v-icon", [e._v("tune")])], 1)], 1)], 1)], 1)
            },
            Q = [],
            Y = a("75fc"),
            Z = (a("ac6a"), a("8615"), {
                data: function() { return { drawer: !1, infoExpanded: !1, eggsize: null, analyzedImage: null, imageSize: "", imageDepth: "", imageChannels: "", imageType: "", showAnalysis: !0, showBottom: !1, firstRun: !0, active: null, analyzedImages: [{ output: "src", source: "src2" }, { output: "threshold", source: "src3" }, { output: "objects", source: "src5" }, { output: "outlines", source: "src6" }, { output: "overlay", source: "src7" }], analyzedImagesPretty: [this.$i18n.t("Source Image"), this.$i18n.t("Threshold"), this.$i18n.t("Detected Objects"), this.$i18n.t("Sorted Markers"), this.$i18n.t("Outlined Overlay")], analysisStarted: !1, analysisComplete: !1, threshValue: 120, minEggRadius: 5, maxEggRadius: 13, maxEggCluster: 30, singlesCount: 0, clustersCount: 0, singlesArray: [], singlesTotalArea: 0, clustersTotalArea: 0, avgClusterArea: 0, avgEggsPerCluster: 0, singlesAvg: 0, clustersArray: [], singlesCalculated: 0, eggBoxes: 0, detectedObjectsArray: [], detectedObjectsArrayList: [], totalEggs: 0, window: 0, length: 5, detailsDialog: !1 } },
                created: function() {
                    var e = this;
                    $e.$on("imageType", function(t) { 0 === t ? (e.threshValue = 116, e.minEggRadius = 1, e.maxEggRadius = 8, e.maxEggCluster = 8) : 1 === t ? (e.threshValue = 120, e.minEggRadius = 5, e.maxEggRadius = 13, e.maxEggCluster = 30) : (e.threshValue = 120, e.minEggRadius = 4, e.maxEggRadius = 14, e.maxEggCluster = 20) }), $e.$on("rawImageReady", function(t) { e.analyzedImage = t, e.load() })
                },
                methods: {
                    load: function() {
                        var e = Object(V["a"])(regeneratorRuntime.mark(function e() {
                            return regeneratorRuntime.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        return $e.$emit("loadingDialog"), e.next = 3, new Promise(function(e, t) { return setTimeout(e, 2e3) });
                                    case 3:
                                        this.analyze(), this.turnImages();
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));

                        function t() { return e.apply(this, arguments) }
                        return t
                    }(),
                    rerender: function() { $e.$emit("forceRerender") },
                    imageMenu: function(e) { this.active = e },
                    next: function() { this.window = this.window + 1 === this.length ? 0 : this.window + 1 },
                    previous: function() { this.window = this.window - 1 < 0 ? this.length - 1 : this.window - 1 },
                    analyze: function() {
                        var e = Object(V["a"])(regeneratorRuntime.mark(function e() {
                            var t, a, s, i, o, n, r, l, c, u, d, m, p, g, v, h, f, y, b, _, w, C, x, A, E, S, k, z, T, j, I, $;
                            return regeneratorRuntime.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        for (this.analysisStarted = !0, t = cv.imread("analyzedImage"), a = t.clone(), cv.imshow("src", t), this.imageSize = t.size().width + " x " + t.size().height, this.imageDepth = t.depth(), this.imageChannels = t.channels(), this.imageType = t.type(), s = new cv.Mat, i = new cv.Mat, o = new cv.Mat, n = new cv.Mat, r = cv.Mat.zeros(t.rows, t.cols, cv.CV_8UC3), l = new cv.Mat(t.rows, t.cols, cv.CV_8UC3, new cv.Scalar(255, 255, 255, 0)), cv.cvtColor(t, s, cv.COLOR_RGBA2GRAY), cv.threshold(s, i, this.threshValue, 255, cv.THRESH_BINARY), c = cv.Mat.ones(3, 3, cv.CV_8U), u = new cv.Point(-1, -1), cv.dilate(i, o, c, u, 0, cv.BORDER_CONSTANT, cv.morphologyDefaultBorderValue()), d = new cv.MatVector, m = new cv.Mat, p = [], g = [], cv.findContours(o, d, m, cv.RETR_TREE, cv.CHAIN_APPROX_SIMPLE), v = [], this.singlesArray = [], this.clustersArray = [], this.singlesCount = 0, this.clustersCount = 0, this.singlesTotalArea = 0, this.clustersTotalArea = 0, h = new cv.Scalar(255, 255, 255), f = new cv.Scalar(0, 225, 0, 255), y = new cv.Scalar(0, 0, 225, 255), b = new cv.Scalar(255, 0, 0, 255), _ = new cv.Scalar(100, 100, 100, 255), w = Math.PI * (this.minEggRadius * this.minEggRadius), C = Math.PI * (this.maxEggRadius * this.maxEggRadius), x = Math.PI * (this.maxEggCluster * this.maxEggCluster), A = 1; A < d.size(); ++A) p.push(cv.contourArea(d.get(A))), g = Object.values(p), E = Math.max.apply(Math, Object(Y["a"])(g)), E === cv.contourArea(d.get(A)) || (S = d.get(A), k = cv.boundingRect(S), cv.drawContours(r, d, A, h, 1, 8, m, 100), z = new cv.Point(k.x - 5, k.y - 5), T = new cv.Point(k.x + k.width + 5, k.y + k.height + 5), -1 === m.intPtr(0, A)[0] || -1 === m.intPtr(0, A)[1] || -1 === m.intPtr(0, A)[2] || -1 === m.intPtr(0, A)[3] ? cv.rectangle(r, z, T, f, 1, cv.LINE_AA, 0) : cv.rectangle(r, z, T, f, 3, cv.LINE_AA, 0), n = t.roi(k), v.push(n), cv.contourArea(d.get(A)) <= w ? (cv.drawContours(l, d, A, _, -1, cv.LINE_8, m, 0), cv.drawContours(a, d, A, _, 1, cv.LINE_8, m, 0)) : cv.contourArea(d.get(A)) > w && cv.contourArea(d.get(A)) <= C ? (cv.drawContours(l, d, A, y, -1, cv.LINE_8, m, 0), cv.drawContours(a, d, A, y, 1, cv.LINE_8, m, 0), this.singlesArray.push(cv.contourArea(d.get(A))), ++this.singlesCount) : cv.contourArea(d.get(A)) > C && cv.contourArea(d.get(A)) <= x ? (cv.drawContours(l, d, A, b, -1, cv.LINE_8, m, 0), cv.drawContours(a, d, A, b, 1, cv.LINE_8, m, 0), this.clustersArray.push(cv.contourArea(d.get(A))), ++this.clustersCount) : cv.contourArea(d.get(A)) > x && (cv.drawContours(l, d, A, _, -1, cv.LINE_8, m, 0), cv.drawContours(a, d, A, _, 1, cv.LINE_8, m, 0)));
                                        for (j = 0; j < this.singlesArray.length; j++) this.singlesTotalArea += this.singlesArray[j];
                                        if (this.singlesAvg = (this.singlesTotalArea / this.singlesArray.length).toFixed(2), isNaN(this.singlesAvg) && (this.singlesAvg = 0), 0 === this.clustersCount);
                                        else
                                            for (I = 0; I < this.clustersArray.length; I++) this.clustersTotalArea += this.clustersArray[I];
                                        this.singlesCalculated = (this.clustersTotalArea / this.singlesAvg).toFixed(0), isNaN(this.singlesCalculated) && (this.singlesCalculated = 0), this.avgClusterArea = (this.clustersTotalArea / this.clustersCount).toFixed(2), isNaN(this.avgClusterArea) && (this.avgClusterArea = 0), this.avgEggsPerCluster = (this.avgClusterArea / this.singlesAvg).toFixed(1), isNaN(this.avgEggsPerCluster) && (this.avgEggsPerCluster = 0), this.totalEggs = +this.singlesCount + +this.singlesCalculated, this.eggEstimate = d.size(), cv.imshow("src", t), cv.imshow("src2", t), cv.imshow("src3", t), cv.imshow("src5", t), cv.imshow("src6", t), cv.imshow("src7", t), cv.imshow("threshold", i), cv.imshow("objects", r), cv.imshow("outlines", l), cv.imshow("overlay", a), $ = cv.imread("legendImage"), cv.circle($, new cv.Point(50, 50), this.minEggRadius, y, 1), cv.circle($, new cv.Point(50, 50), this.maxEggRadius, b, 1), cv.circle($, new cv.Point(50, 50), this.maxEggCluster, _, 1), cv.imshow("legendCanvas", $), $.delete(), t.delete(), s.delete(), i.delete(), o.delete(), r.delete(), l.delete(), a.delete(), c.delete(), d.delete(), m.delete();
                                    case 78:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));

                        function t() { return e.apply(this, arguments) }
                        return t
                    }(),
                    turnImages: function() {
                        var e = Object(V["a"])(regeneratorRuntime.mark(function e() {
                            var t;
                            return regeneratorRuntime.wrap(function(e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        t = 4;
                                    case 1:
                                        if (!(this.window < t)) { e.next = 7; break }
                                        return e.next = 4, new Promise(function(e, t) { return setTimeout(e, 500) });
                                    case 4:
                                        ++this.window, e.next = 1;
                                        break;
                                    case 7:
                                        return e.next = 9, new Promise(function(e, t) { return setTimeout(e, 500) });
                                    case 9:
                                        return this.analysisComplete = !0, e.next = 12, new Promise(function(e, t) { return setTimeout(e, 500) });
                                    case 12:
                                        this.showBottom = !0;
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }, e, this)
                        }));

                        function t() { return e.apply(this, arguments) }
                        return t
                    }()
                }
            }),
            ee = Z,
            te = (a("d053"), Object(h["a"])(ee, J, Q, !1, null, null, null)),
            ae = te.exports,
            se = {
                components: { AppImage: X, AppAnalysis: ae },
                data: function() { return { componentKey: 0, visionComponent: X } },
                created: function() {
                    var e = this;
                    $e.$on("toAnalysis", function() { e.visionComponent = "AppAnalysis" })
                }
            },
            ie = se,
            oe = Object(h["a"])(ie, R, q, !1, null, null, null),
            ne = oe.exports,
            re = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", [a("v-layout", { attrs: { "my-3": "" } }, [a("v-flex", { attrs: { xs12: "", sm6: "", "offset-sm3": "" } }, [a("v-card", [a("v-card-title", { attrs: { "primary-title": "" } }, [a("div", [a("h3", { staticClass: "headline mb-2" }, [e._v("Overview")]), a("div", [a("p", [e._v("Shrimp-Counter-App is a Progressive Web App (PWA) that uses computer vision (object detection) to estimate the number of mosquito eggs on ovitrap paper.")]), a("p", [e._v("This website will work with most smartphones (iOS and Android), as well as desktop and laptop computers. The website, because it is a PWA, behaves in many ways like a native phone app, which allows it to be used offline, to use a phone's photos and camera, and to allow it to be placed on a phone home screen, alongside native apps.")]), a("p", [e._v('The algorithmic processing of the app uses a tool known as "OpenCV" (Open Computer Vision) which analyzes an image in order to highlight contrast, detect edges, find contours of objects within an image, and to make calculations based on that analysis. For Shrimp-Counter-App, we use several algorithmic procedures tied together, in order to isolate the mosquito egg items and count them separately.')])])])])], 1)], 1)], 1), a("v-layout", { attrs: { "my-3": "" } }, [a("v-flex", { attrs: { xs12: "", sm6: "", "offset-sm3": "" } }, [a("v-card", [a("v-card-title", { attrs: { "primary-title": "" } }, [a("div", [a("h3", { staticClass: "headline mb-2" }, [e._v("Using Shrimp-Counter-App")]), a("div", [a("h3", [e._v("1. Load an Image")]), a("p", [e._v("The app (or website) is very simple. Once it loads onto a device's web-browser, it loads all of the app code it needs to operate so that no information will be sent to a remote server or database -- everything is happening on the device to which it is loaded.")]), a("h3", [e._v("2. Adjust the Image")]), a("p", [e._v("After the app loads, a user can either take a picture, or upload one from their device (or use the 'demo' pictures in memory to see it work). Once selected, the user then adjusts the image by zooming in and out (using 'pinch-and-zoom' on a phone or with the scroll function on a desktop), as well as things like rotating and cropping. Additionally, you can select the 'type' of image you're analyzing -- a classic ovitrap paper, or magnified or microscoped image (and more can be added later) -- this helps to analyze the image using the appropriate algorithm.")]), a("h3", [e._v("3. Analyze the Image")]), a("p", [e._v("Once the image has been adjusted, the user presses the button to 'analyze' the image. At this point, the app uses a software technique (open-source library) to analyze the image and find matches within the image that match the pattern as close as possible to mosquito eggs and mosquito egg clusters. At this point, the user can see the algorithm run through its process of converting the image to black and white (threshold value), detecting objects in the image, sorting the detected objects by size, and then overlaying the detected objects on top of the original image.")]), a("h3", [e._v("4. Review the Analysis")]), a("p", [e._v("When the analysis is complete, the total egg estimation will be displayed. The user can also see a disaggregation of single egg counts versus clustered egg counts, as well as additional 'details' in the pop-up button. Additionally, the user can 'compare' the output at each stage of the algorithm process by pressing the 'compare' button, along with toggling the left-right arrows to review the algorithm processes in order.")]), a("h3", [e._v("5. Adjust the Algorithm")]), a("p", [e._v("Depending on the process and image used, it might be necessary to adjust the filters and threshold value. This can be done by selecting the 'show filters' button and reviewing the various settings, including ways to adjust the threshold value (where items become black or white), and the single egg minimum and maximum values, as well as maximum cluster size (to filter out large foreign objects like insects or dirt). When a value is changed here, the algorithm is updated automatically (without the animation) to reflect the new values.")])])])])], 1)], 1)], 1), a("v-layout", { attrs: { "my-3": "" } }, [a("v-flex", { attrs: { xs12: "", sm6: "", "offset-sm3": "" } }, [a("v-card", [a("v-card-title", { attrs: { "primary-title": "" } }, [a("div", [a("h3", { staticClass: "headline mb-3" }, [e._v("Tips for Accurate Results")]), a("div", [a("h3", [e._v("Camera Quality")]), a("p", [e._v("Use the highest-quality and resolution camera available, even if it is not with a smartphone device. The app can use images that are in the phone's photo library -- they do "), a("em", [e._v("not")]), e._v(" have to be taken with that particular device.")]), a("h3", [e._v("Camera Placement")]), a("p", [e._v("Capture the picture as close to the egg paper as possible while still capturing the entire paper. Ensure that the camera is perpendicular and directly above the image as much as possible -- and not taken from an angle.")]), a("h3", [e._v("Environment and Lighting")]), a("p", [e._v("Capture the image in a place with bright and consistent lighting. Try to avoid using the camera flash, as this creates both shadows which can be misidentified as eggs. Additionally, try to do everything possible to increase the contrast in the image between the eggs and the paper -- this makes the algorithm work more accurately.")]), a("h3", [e._v("Egg Paper Type and Quality")]), a("p", [e._v("There is a lot of variation in egg paper (ovitrap paper), and so try to have a consistent process throughout the various counts. Ensure that the egg paper is as flat as possible, with as few folds and wrinkles in the paper, as this causes shadows which may be misidentified as eggs. Additionally, try to use a background color that is different than the egg paper, as this will make it easier to crop the picture within the app.")]), a("h3", [e._v("Consistency and the Algorithm")]), a("p", [e._v("The Shrimp-Counter-App app works best when used in a controlled and consistent environment. The best types of images are ones that are consist in all their qualities except for the number of eggs on the paper, which the app should capture differently. The app itself is susceptible to changes in lighting, focus, and processing demands, and so there will be some small variation from picture to picture (similar to human counts!) The best ways to ensure consistency is to focus on finding a consistent process, and then using consistent filtering and thresholding values that match the image environment.")]), a("h3", [e._v("A Note about Data Retention")]), a("p", [e._v("The app, because it is a web app, does "), a("em", [e._v("not")]), e._v(" save data locally to a device, and it is never sent to a server or external database. Once the page is refreshed, the previous data is erased. It is much like a functional calculator in this way, with no history. Ensure that your counting process is consistent and is collected in another location prior to adapting the Shrimp-Counter-App app entirely!")])])])])], 1)], 1)], 1)], 1)
            },
            le = [],
            ce = { data: function() { return {} } },
            ue = ce,
            de = Object(h["a"])(ue, re, le, !1, null, null, null),
            me = de.exports,
            pe = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", [a("v-layout", { attrs: { "my-3": "" } }, [a("v-flex", { attrs: { xs12: "", sm6: "", "offset-sm3": "" } }, [a("v-card", [a("v-card-title", { attrs: { "primary-title": "" } }, [a("div", [a("h3", { staticClass: "headline mb-2" }, [e._v("Visión General")]), a("div", [a("p", [e._v("Shrimp-Counter-App es una aplicación web progresiva (PWA) que utiliza la visión por computadora (detección de objetos) para estimar la cantidad de huevos de mosquito en papel ovitraprap.")]), a("p", [e._v("Este sitio web funcionará con la mayoría de los teléfonos inteligentes (iOS y Android), así como con computadoras de escritorio y portátiles. El sitio web, debido a que es una PWA, se comporta de muchas maneras como una aplicación de teléfono nativa, lo que permite que se use sin conexión, para usar las fotos y la cámara de un teléfono, y para permitir que se coloque en la pantalla de inicio de un teléfono, junto con la aplicación nativa aplicaciones.")]), a("p", [e._v('El procesamiento algorítmico de la aplicación utiliza una herramienta conocida como "OpenCV" (Open Computer Vision) que analiza una imagen para resaltar el contraste, detectar bordes, encontrar contornos de objetos dentro de una imagen y hacer cálculos basados en ese análisis. Para Shrimp-Counter-App, utilizamos varios procedimientos algorítmicos unidos, para aislar los elementos de huevo de mosquito y contarlos por separado.')])])])])], 1)], 1)], 1), a("v-layout", { attrs: { "my-3": "" } }, [a("v-flex", { attrs: { xs12: "", sm6: "", "offset-sm3": "" } }, [a("v-card", [a("v-card-title", { attrs: { "primary-title": "" } }, [a("div", [a("h3", { staticClass: "headline mb-2" }, [e._v("Usando Shrimp-Counter-App")]), a("div", [a("h3", [e._v("1. Cargar una Imagen")]), a("p", [e._v("La aplicación (o sitio web) es muy simple. Una vez que se carga en el navegador web de un dispositivo, carga todo el código de la aplicación que necesita para funcionar, de modo que no se envíe información a un servidor remoto o base de datos; todo está sucediendo en el dispositivo en el que se carga.")]), a("h3", [e._v("2. Ajuste la Imagen.")]), a("p", [e._v("Después de que se carga la aplicación, un usuario puede tomar una foto o cargar una desde su dispositivo (o usar las imágenes de 'demostración' en la memoria para verla funcionar). Una vez seleccionado, el usuario ajusta la imagen al acercar y alejar (usando 'pellizcar y hacer zoom' en un teléfono o con la función de desplazamiento en un escritorio), así como cosas como rotar y recortar. Además, puede seleccionar el 'tipo' de imagen que está analizando: un papel de ovitrap clásico o una imagen ampliada o microscópica (y se puede agregar más más adelante), esto ayuda a analizar la imagen usando el algoritmo apropiado.")]), a("h3", [e._v("3. Analiza la Imagen.")]), a("p", [e._v("Una vez que la imagen ha sido ajustada, el usuario presiona el botón para 'analizar' la imagen. En este punto, la aplicación utiliza una técnica de software (biblioteca de código abierto) para analizar la imagen y encontrar coincidencias dentro de la imagen que coincidan con el patrón lo más cerca posible de los huevos de mosquito y los racimos de huevos de mosquito. En este punto, el usuario puede ver el algoritmo ejecutar su proceso de convertir la imagen a blanco y negro (valor umbral), detectar objetos en la imagen, ordenar los objetos detectados por tamaño y luego superponer los objetos detectados en la parte superior del imagen original.")]), a("h3", [e._v("4. Revise el Análisis.")]), a("p", [e._v("Cuando se completa el análisis, se mostrará la estimación total del huevo. El usuario también puede ver una desagregación de recuentos de huevos individuales versus recuentos de huevos agrupados, así como 'detalles' adicionales en el botón emergente. Además, el usuario puede 'comparar' la salida en cada etapa del proceso del algoritmo presionando el botón 'comparar', junto con alternar las flechas izquierda-derecha para revisar los procesos del algoritmo en orden.")]), a("h3", [e._v("5. Ajuste el Algoritmo.")]), a("p", [e._v("Dependiendo del proceso y la imagen utilizada, puede ser necesario ajustar los filtros y el valor umbral. Esto se puede hacer seleccionando el botón 'Mostrar filtros' y revisando las diversas configuraciones, incluidas las formas de ajustar el valor umbral (donde los elementos se vuelven negros o blancos), y los valores mínimos y máximos de un solo huevo, así como el tamaño máximo del grupo ( para filtrar objetos extraños grandes como insectos o tierra). Cuando se cambia un valor aquí, el algoritmo se actualiza automáticamente (sin la animación) para reflejar los nuevos valores.")])])])])], 1)], 1)], 1), a("v-layout", { attrs: { "my-3": "" } }, [a("v-flex", { attrs: { xs12: "", sm6: "", "offset-sm3": "" } }, [a("v-card", [a("v-card-title", { attrs: { "primary-title": "" } }, [a("div", [a("h3", { staticClass: "headline mb-3" }, [e._v("Consejos para Resultados Precisos")]), a("div", [a("h3", [e._v("Calidad de la Cámara")]), a("p", [e._v("Use la cámara de mayor calidad y resolución disponible, incluso si no es con un teléfono inteligente. La aplicación puede usar imágenes que se encuentran en la biblioteca de fotos del teléfono -- "), a("em", [e._v("no")]), e._v(" deben tomarse con ese dispositivo en particular.")]), a("h3", [e._v("Colocación de Cámara")]), a("p", [e._v("Capture la imagen lo más cerca posible del papel de huevo mientras captura todo el papel. Asegúrese de que la cámara esté perpendicular y directamente sobre la imagen tanto como sea posible, y que no esté tomada desde un ángulo.")]), a("h3", [e._v("Ambiente e Iluminación")]), a("p", [e._v("Capture la imagen en un lugar con iluminación brillante y constante. Trate de evitar el uso del flash de la cámara, ya que esto crea sombras que pueden identificarse erróneamente como huevos. Además, intente hacer todo lo posible para aumentar el contraste en la imagen entre los huevos y el papel; esto hace que el algoritmo funcione con mayor precisión.")]), a("h3", [e._v("Tipo de Papel de Huevo y Calidad")]), a("p", [e._v("Hay mucha variación en el papel de huevo (papel ovitrap) y, por lo tanto, trate de tener un proceso constante a lo largo de los diversos recuentos. Asegúrese de que el papel de huevo sea lo más plano posible, con el menor número de pliegues y arrugas en el papel, ya que esto causa sombras que pueden ser mal identificadas como huevos. Además, intente utilizar un color de fondo que sea diferente al papel de huevo, ya que esto facilitará el recorte de la imagen dentro de la aplicación.")]), a("h3", [e._v("La Consistencia y el Algoritmo")]), a("p", [e._v("La aplicación Shrimp-Counter-App funciona mejor cuando se usa en un entorno controlado y consistente. Los mejores tipos de imágenes son las que consisten en todas sus cualidades, excepto la cantidad de huevos en el papel, que la aplicación debería capturar de manera diferente. La aplicación en sí es susceptible a cambios en la iluminación, el enfoque y las demandas de procesamiento, por lo que habrá una pequeña variación de una imagen a otra (¡similar a los recuentos humanos!). Las mejores formas de garantizar la coherencia es centrarse en encontrar un proceso coherente, y luego usando valores consistentes de filtrado y umbral que coinciden con el entorno de la imagen.")]), a("h3", [e._v("Una Nota Sobre la Retención de Datos")]), a("p", [e._v("La aplicación, debido a que es una aplicación web, no guarda datos localmente en un dispositivo, y nunca se envía a un servidor o base de datos externa. Una vez que se actualiza la página, se borran los datos anteriores. Es muy parecido a una calculadora funcional de esta manera, sin historial. ¡Asegúrese de que su proceso de conteo sea consistente y se recopile en otra ubicación antes de adaptar completamente la aplicación Shrimp-Counter-App!")])])])])], 1)], 1)], 1)], 1)
            },
            ge = [],
            ve = { data: function() { return {} } },
            he = ve,
            fe = Object(h["a"])(he, pe, ge, !1, null, null, null),
            ye = fe.exports,
            be = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", [a("v-layout", { attrs: { "my-3": "" } }, [a("v-flex", { attrs: { xs12: "", sm6: "", "offset-sm3": "" } }, [a("v-card", [a("v-card-title", { attrs: { "primary-title": "" } }, [a("div", [a("h3", { staticClass: "headline mb-3" }, [e._v("About")]), a("div", [a("p", [e._v("Shrimp-Counter-App is a Progressive Web App (PWA) that uses computer vision (object detection) to estimate the number of mosquito eggs on ovitrap paper.")]), a("p", [e._v("Check out the "), a("a", { attrs: { href: "https://github.com/abtassociates/Shrimp-Counter-App" } }, [e._v("project page")]), e._v(" if you would like to contribute to the Shrimp-Counter-App project or adapt it for your own purposes.")]), a("p", [e._v("Shrimp-Counter-App was aided in being made possible by the generous support of the American people through the "), a("a", { attrs: { href: "https://www.usaid.gov" } }, [e._v("United States Agency for International Development (USAID)")]), e._v(" and is implemented under the "), a("a", { attrs: { href: "https://www.usaid.gov/documents/1862/zika-airs-project-zap" } }, [e._v("Zika AIRS Project")]), e._v(".")]), a("p", [e._v("The information on this website and web app does not necessarily represent the views of USAID or the United States Government.")])])])])], 1)], 1)], 1)], 1)
            },
            _e = [],
            we = { data: function() { return {} } },
            Ce = we,
            xe = Object(h["a"])(Ce, be, _e, !1, null, null, null),
            Ae = xe.exports,
            Ee = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", [a("v-layout", { attrs: { "my-3": "" } }, [a("v-flex", { attrs: { xs12: "", sm6: "", "offset-sm3": "" } }, [a("v-card", [a("v-card-title", { attrs: { "primary-title": "" } }, [a("div", [a("h3", { staticClass: "headline mb-3" }, [e._v("Acerca De...")]), a("div", [a("p", [e._v("Shrimp-Counter-App es una aplicación web progresiva (PWA) que utiliza la visión por computadora (detección de objetos) para estimar la cantidad de huevos de mosquito en papel ovitraprap.")]), a("p", [e._v("Consulte la "), a("a", { attrs: { href: "https://github.com/abtassociates/Shrimp-Counter-App" } }, [e._v("página del proyecto")]), e._v(" si desea contribuir al proyecto Shrimp-Counter-App o adaptarlo para sus propios fines.")]), a("p", [e._v(" Shrimp-Counter-App se hizo posible gracias al generoso apoyo del pueblo estadounidense a través de la "), a("a", { attrs: { href: "https://www.usaid.gov" } }, [e._v(" Agencia de los Estados Unidos para el Desarrollo Internacional (USAID) ")]), e._v(" y se implementa bajo el "), a("a", { attrs: { href: "https://www.usaid.gov/documents/1862/zika-airs-project-zap" } }, [e._v(" Proyecto Zika AIRS ")]), e._v(".")]), a("p", [e._v(" La información en este sitio web y aplicación web no representa necesariamente los puntos de vista de USAID o del Gobierno de los Estados Unidos. ")])])])])], 1)], 1)], 1)], 1)
            },
            Se = [],
            ke = { data: function() { return {} } },
            ze = ke,
            Te = Object(h["a"])(ze, Ee, Se, !1, null, null, null),
            je = Te.exports;
        s["default"].use(M["a"]);
        var Ie = new M["a"]({ mode: "history", base: "/Shrimp-Counter-App/", routes: [{ path: "/", name: "vision", component: ne }, { path: "/guide", name: "guide", component: me }, { path: "/guide-es", name: "guide-es", component: ye }, { path: "/about", name: "about", component: Ae }, { path: "/about-es", name: "about-es", component: je }] });
        a.d(t, "eventBus", function() { return $e }), s["default"].use(I.a), s["default"].use(o.a, { theme: { primary: D.a.blue.darken4, secondary: D.a.lightBlue.darken4, accent: D.a.red.accent2 }, options: { customProperties: !0 } }), s["default"].config.productionTip = !1;
        var $e = new s["default"];
        new s["default"]({ i18n: p, router: Ie, render: function(e) { return e(z) } }).$mount("#app")
    },
    d053: function(e, t, a) {
        "use strict";
        var s = a("430b"),
            i = a.n(s);
        i.a
    },
    d835: function(e, t, a) {
        "use strict";
        var s = a("30ac"),
            i = a.n(s);
        i.a
    }
});
//# sourceMappingURL=app.17c39733.js.map