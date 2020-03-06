$(document).ready(function() {
	$(function() {
		var table = $('<table class="ex-2"></table>');
		table.append('<thead><tr><th class="number">Number</th></tr></thead>');
		var tbody = $("<tbody></tbody>");
		for(var i = 0; i < 20; i += 1) {
			tbody.append("<tr><td>" + Math.floor(Math.random() * 100) + "</td></tr>")
		}
		table.append(tbody);
		$("table").tablesort().data("tablesort");
		$("thead th.number").data("sortBy", function(th, td, sorter) {
			return parseInt(td.text(), 10)
		})
	});
	
	
	//解除disabled
    $(".enableEdit").click(function () {
        $temp = $("input").attr("disabled");
        if ($temp == "disabled")
        {
            $("input").removeAttr("disabled");
            $("#btn_submit").removeAttr("disabled");
            $("#btn_disable").removeAttr("disabled");
            $("#btn_reset").removeAttr("disabled");
            $("button").removeAttr("disabled");
             $(this).html("<i class='fa fa-lock'></i>Locking")
//          showDisableBtn(false);
//          showLoading(false);
            $(".chosen").attr('disabled', false);
            $(".chosen").prop('disabled', false).trigger("chosen:updated");
        }
        else
        {
            $("input").attr('disabled', 'disabled');
            $("button").attr('disabled', 'disabled');
            $("#btn_submit").attr("disabled", "disabled");
            $("#btn_disable").attr("disabled", "disabled");
            $("#btn_reset").attr("disabled", "disabled");
            $(".chosen").attr('disabled', true);
            $(".chosen").prop('disabled', true).trigger("chosen:updated");
            $(this).html("<i class='fa fa-edit'></i>Edit")
        }
        
    });

	$("#menu-toggle i").click(function() {
		if($(this).hasClass("fa-bars")) {
			$(this).removeClass("fa-bars").addClass("fa-close")
		} else {
			$(this).removeClass("fa-close").addClass("fa-bars")
		}
	});
	$(function() {
		$("#IB1").click(function() {
			$(".IB2").slideToggle()
		});
		$("#IB2").click(function() {
			$(".IB3").slideToggle()
		});
		$("#IB3").click(function() {
			$(".IB4").slideToggle()
		})
	});
	$(function() {
		$(".radiospan").bind("click", function() {
			$(this).addClass("on").parent().siblings().children().removeClass("on")
		});
		$(".piaochecked").bind("click", function() {
			$(this).hasClass("on_check") ? $(this).removeClass("on_check") : $(this).addClass("on_check")
		})
	});
	$(function() {
		$(".pageTitBg>i").click(function() {
			if($(this).hasClass("fa-chevron-circle-down")) {
				$(this).removeClass("fa-chevron-circle-down").addClass("fa-chevron-circle-up")
			} else {
				$(this).removeClass("fa-chevron-circle-up").addClass("fa-chevron-circle-down")
			}
			$(this).parent().parent().children().children("form").stop().slideToggle()
		})
	});
	if(window.addEventListener) {
		window.addEventListener("load", lazyOnload, false)
	} else {
		if(window.attachEvent) {
			window.attachEvent("onload", lazyOnload)
		} else {
			window.onload = lazyOnload
		}
	}

	function DatePicker(beginSelector, endSelector, tips) {
		$(function() {
			var startDate = new Date();
			var endDate = new Date();
			$(beginSelector).datepicker().on("changeDate", function(ev) {
				if(ev.date.valueOf() > endDate.valueOf()) {
					$(tips).show().find("strong").text("The start date can not be greater then the end date");
					$(beginSelector).val("Choose Date")
				} else {
					$(tips).hide();
					startDate = new Date(ev.date)
				}
				$(beginSelector).datepicker("hide")
			});
			$(endSelector).datepicker().on("changeDate", function(ev) {
				if(ev.date.valueOf() < startDate.valueOf()) {
					$(tips).show().find("strong").text("The end date can not be less then the start date");
					$(endSelector).val("Choose Date")
				} else {
					$(tips).hide();
					endDate = new Date(ev.date)
				}
				$(endSelector).datepicker("hide")
			})
		})
	}
	DatePicker("#dp1", "#dp2", "#alert1");
	DatePicker("#dp3", "#dp4", "#alert2");
	DatePicker("#dp5", "#dp6", "#alert3")
});

function lazyOnload() {
	App.init()
};