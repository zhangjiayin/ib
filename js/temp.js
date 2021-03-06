function btnStartSpinning(e) {
	e.hasClass("btn-loading") && e.prop("disabled", !0).addClass("btn-spinning").append('<i class="fa fa-spinner fa-spin btn-spin" aria-hidden="true"></i>')
}
$(function(){
	$(".open-item>ul a").click(function(e){
		e.stopPropagation();
	});
});

function btnStopSpinning(e) {
	e.hasClass("btn-spinning") && e.prop("disabled", !1).removeClass("btn-spinning").find("i.btn-spin").remove()
}(function(e) {
	e(document).on("click", function(n) {
		e("#notice-headerbox").find(n.target).length || e("#notice-headerbox .notice.open").removeClass("open").children(".dropdown-box").slideUp(200), e("#user-headerbox").find(n.target).length || e("#user-headerbox.open").removeClass("open").children(".user-options").slideUp(400), e("#search-headerbox").find(n.target).length || e("#search").is(":visible") && e("#search").slideToggle()
	})
}).apply(this, [jQuery]),
	function(e) {
		var n = function(n) {
			var s = n.attr("data-target"),
				t = n.attr("data-toggle-class");
			n.on("click.toggleClass.fireEvent", function(n) {
				n.preventDefault(), e(s).toggleClass(t)
			})
		};
		e(function() {
			e("[data-toggle-class][data-target]").each(function() {
				n(e(this))
			})
		})
	}.apply(this, [jQuery]),
	function(e) {
		function n(n) {
			n.children("ul.child-nav").slideDown(500, function() {
				e(this).css("display", "")
			}), n.addClass("open-item").removeClass("close-item")
		}

		function s(n) {
			n.children("ul.child-nav").slideUp(300, function() {
				e(this).css("display", ""), n.addClass("close-item").removeClass("open-item")
			})
		}
		var t = e("#main-nav");
		t.on("click", "li.close-item", function(t) {
			t.stopPropagation();
			var i = e(this);
			n(i), i.siblings("li.open-item").each(function() {
				s(e(this))
			})
		}), t.on("click", "li.open-item", function(n) {
			n.stopPropagation(), s(e(this))
		}), t.on("click", "li.active-item", function(e) {
			e.stopPropagation()
		})
	}.apply(this, [jQuery]),
	
	
	
	function(e) {
		e("#user-headerbox").on("click", function() {
			var n = e(this).children(".user-options");
			e(this).toggleClass("open"), e(this).hasClass("open") ? n.slideDown(400) : n.slideUp(400)
		})
	}.apply(this, [jQuery]),
	
	
	function(e) {
		function n(e) {
			e.children(".dropdown-box").slideDown(400)
		}

		function s(e) {
			e.children(".dropdown-box").slideUp(200)
		}

		function t(n) {
			n.siblings(".notice.open").each(function() {
				s(e(this)), e(this).removeClass("open")
			})
		}
		e("#notice-headerbox .notice i").on("click", function() {
			var i = e(this).parent();
			i.toggleClass("open"), i.hasClass("open") ? (t(i), n(i)) : s(i)
		})
	}.apply(this, [jQuery]),
	function(e) {
		e("#search-icon").on("click", function() {
			e("#search").slideToggle()
		})
	}.apply(this, [jQuery]),
	function(e) {
		e(".panel").on("click", ".toggle-panel.panel-expand", function() {
			var n = e(this).closest(".panel");
			n.children(".panel-content, .panel-footer").slideUp(400), e(this).addClass("panel-collapse").removeClass("panel-expand")
		}), e(".panel").on("click", ".toggle-panel.panel-collapse", function() {
			var n = e(this).closest(".panel");
			n.children(".panel-content, .panel-footer").slideDown(400), e(this).addClass("panel-expand").removeClass("panel-collapse")
		}), e(".panel").on("click", ".remove-panel", function() {
			var n = e(this).closest(".panel"),
				s = n.parent();
			s.is('[class*="col-"]') && 1 == s.children().length ? s.fadeOut(500, function() {
				s.remove()
			}) : n.fadeOut(300, function() {
				n.remove()
			})
		})
	}.apply(this, [jQuery]), $(function() {
		var e = $(".scroll-to-top");
		$(window).on("scroll", function() {
			$(this).scrollTop() > 100 ? e.fadeIn() : e.fadeOut()
		}), e.on("click", function() {
			return $("html, body").animate({
				scrollTop: 0
			}, 600), !1
		})
	}),
	function(e) {
		function n() {
			t.addClass("fixed").removeClass("scroll"), a.prop("checked", !0)
		}

		function s() {
			t.addClass("scroll").addClass("scroll-left-sidebar").addClass("scroll-content-header").removeClass("fixed"), a.removeAttr("checked")
		}
		var t = e("html"),
			i = e("#left-sidebar-collapsed"),
			o = e("#content-header-fixed"),
			l = e("#left-sidebar-fixed"),
			a = e("#header-fixed");
		a.on("change", function() {
			a.is(":checked") ? n() : (s(), l.removeAttr("checked"), o.removeAttr("checked"))
		}), l.on("change", function() {
			l.is(":checked") ? (n(), t.removeClass("scroll-left-sidebar")) : t.addClass("scroll-left-sidebar")
		}), o.on("change", function() {
			o.is(":checked") ? (n(), t.removeClass("scroll-content-header")) : t.addClass("scroll-content-header")
		}), i.on("change", function() {
			i.is(":checked") ? t.addClass("left-sidebar-collapsed") : t.removeClass("left-sidebar-collapsed")
		}), e(".left-sidebar-toggle").on("click", function() {
			i.is(":checked") ? i.removeAttr("checked") : i.prop("checked", !0)
		})
	}.apply(this, [jQuery]);