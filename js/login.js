$(function() {
	$(".radiospan").bind("click", function() {
		$(this).addClass("on").siblings().removeClass("on")
	});
	$(".piaochecked").bind("click", function() {
		$(this).hasClass("on_check") ? $(this).removeClass("on_check") : $(this).addClass("on_check")
	})
});
var Login = function() {
	return {
		init: function() {
			$(".login-form").validate({
				errorElement: "span",
				errorClass: "help-block",
				focusInvalid: false,
				rules: {
					email: {
						required: true
					},
					password: {
						required: true
					},
					remember: {
						required: false
					}
				},
				messages: {
					email: {
						required: "Email is required."
					},
					password: {
						required: "Password is required."
					}
				},
				invalidHandler: function(event, validator) {
					$("#loginerror", $(".login-form")).show()
				},
				highlight: function(element) {
					$(element).closest(".control-group").addClass("error")
				},
				success: function(label) {
					label.closest(".control-group").removeClass("error");
					label.remove()
				},
				errorPlacement: function(error, element) {
					error.addClass("help-small no-left-padding").insertAfter(element.closest(".input-icon"))
				},
				submitHandler: function(form) {
					ajaxLoginPost()
				}
			});
			$(".login-form input").keypress(function(e) {
				if(e.which === 13) {
					if($(".login-form").validate().form()) {
						ajaxLoginPost()
					}
					return false
				}
			});
			$(".forget-form").validate({
				errorElement: "span",
				errorClass: "help-block",
				focusInvalid: false,
				ignore: "",
				rules: {
					email: {
						required: true,
						email: true
					}
				},
				messages: {
					email: {
						required: "Email is required."
					}
				},
				invalidHandler: function(event, validator) {
					$("#forgeterror", $(".forget-form")).show()
				},
				highlight: function(element) {
					$(element).closest(".control-group").addClass("error")
				},
				success: function(label) {
					label.closest(".control-group").removeClass("error");
					label.remove()
				},
				errorPlacement: function(error, element) {
					error.addClass("help-small no-left-padding").insertAfter(element.closest(".input-icon"))
				},
				submitHandler: function(form) {
					ajaxForgetPost()
				}
			});
			$(".forget-form input").keypress(function(e) {
				if(e.which == 13) {
					if($(".forget-form").validate().form()) {
						ajaxForgetPost()
					}
					return false
				}
			});
			jQuery("#forget-password").click(function() {
				jQuery(".login-form").hide();
				jQuery(".forget-form").show()
			});
			jQuery("#back-btn").click(function() {
				jQuery(".login-form").show();
				jQuery(".forget-form").hide()
			});
			$(".register-form").validate({
				errorElement: "span",
				errorClass: "help-block",
				focusInvalid: false,
				ignore: "",
				rules: {
					firstname: {
						required: true
					},
					lastname: {
						required: true
					},
					password: {
						required: true
					},
					rpassword: {
						equalTo: "#register_password"
					},
					email: {
						required: true,
						email: true
					},
					tnc: {
						required: true
					}
				},
				messages: {
					tnc: {
						required: "Please accept TNC first."
					}
				},
				invalidHandler: function(event, validator) {},
				highlight: function(element) {
					$(element).closest(".control-group").addClass("error")
				},
				success: function(label) {
					label.closest(".control-group").removeClass("error");
					label.remove()
				},
				errorPlacement: function(error, element) {
					if(element.attr("name") == "tnc") {
						error.addClass("help-small no-left-padding").insertAfter($("#register_tnc_error"))
					} else {
						error.addClass("help-small no-left-padding").insertAfter(element.closest(".input-icon"))
					}
				},
				submitHandler: function(form) {
					window.location.href = window.location.href.replace(window.location.pathname, "/index.html")
				}
			});
			jQuery("#register-btn").click(function() {
				jQuery(".login-form").hide();
				jQuery(".register-form").show()
			});
			jQuery("#register-back-btn").click(function() {
				jQuery(".login-form").show();
				jQuery(".register-form").hide()
			});

			function ajaxLoginPost() {
				$("#loginerror", $(".login-form")).hide();
				var sendModel = {
					Email: $("#email").val(),
					Password: $("#password").val(),
					Remember: $("#chkRemember").val()
				};
				$.ajax({
					type: "POST",
					url: "/Login/Index",
					contentType: "application/json",
					cache: false,
					dataType: "json",
					data: JSON.stringify({
						model: sendModel
					}),
					success: function(data) {
						if(data != null) {
							if(data.Message == null || data.Message.length <= 0) {
								window.location.href = window.location.href.replace(window.location.pathname, "/Defaults/index")
							} else {
								$("#loginerror span").html(data.Message);
								$("#loginerror", $(".login-form")).show()
							}
						}
					},
					error: function(datas) {
						$("#loginerror span").html(datas.responseText);
						$("#loginerror", $(".login-form")).show()
					}
				})
			}

			function ajaxForgetPost() {
				$("#forgeterror", $(".forget-form")).hide();
				var femail = $("#forgetemail").val();
				$.ajax({
					type: "POST",
					url: "/Login/ForgetPassword",
					contentType: "application/json",
					cache: false,
					dataType: "json",
					data: JSON.stringify({
						email: femail
					}),
					success: function(data) {
						if(data != null) {
							if(data.Code <= 0) {
								alert("Email has sent, please check your email box and reset your password")
							} else {
								$("#forgeterror span").html(data.Message);
								$("#forgeterror", $(".forget-form")).show()
							}
						}
					},
					error: function(datas) {
						$("#forgeterror span").html(datas.responseText);
						$("#forgeterror", $(".forget-form")).show()
					}
				})
			}
		}
	}
}();