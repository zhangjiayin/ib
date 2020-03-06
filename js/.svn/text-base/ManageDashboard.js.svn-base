//拖放
$(function() {
	$('.chart').arrangeable();
	$('.arrRight li').arrangeable();
	$('.arrLeft li').arrangeable();
});
var pName = ["K", "B"];
var pR = [
	["LOGIN|EQUAL|1", "LOGIN|NOT EQUAL|1000"],
	["LOGIN|EQUAL|3", "LOGIN|NOT EQUAL|170"]
];
var pH = [
	["LOGIN|EQUAL|103"],
	[""]
];
var pL = ["GOMARKETS", "DFDFDFAD"];

var pName_right = ["a", "r"];
var pR_right = [
	["LOGIN|EQUAL|1", "LOGIN|NOT EQUAL|1000"],
	["LOGIN|EQUAL|3", "LOGIN|NOT EQUAL|170"]
];
var pH_right = [
	["LOGIN|EQUAL|103"],
	[""]
];
var pL_right = ["GOMARKETS", "DFDFDFAD"];

var sel_array = ["LOGIN", "SYMBOL", "GROUP", "SERVER"]
var selT_array = ["EQUAL", "NOT EQUAL", "BEGIN WITH", "NOT BEGIN WITH", "END WITH", "NOT END WITH", "MID", "NOT MID", "CUSTOM"]
$(document).ready(function() {
	var LEFT_BOX_HTML = ""
	for(i = 0; i < pName.length; i++) {
		LEFT_BOX_HTML = LEFT_BOX_HTML + '<li class="itemList itemListPop3" id="r' + i + '"> <p>' + pName[i] + '</p> <span class="itemSpan">$<i>0</i></span> </li>'
	}
	document.getElementById("LEFT-BOX").innerHTML = LEFT_BOX_HTML
	// $('#LEFT-BOX').find('p').each(function(){
	// 	console.log(($(this).html()))
	// })
	var RIGHT_BOX_HTML = ""
	for(i = 0; i < pName_right.length; i++) {
		RIGHT_BOX_HTML = RIGHT_BOX_HTML + '<li class="itemList itemListPop3" id="r' + i + '"> <p>' + pName_right[i] + '</p> <span class="itemSpan">$<i>0</i></span> </li>'
	}
	document.getElementById("RIGHT-BOX").innerHTML = RIGHT_BOX_HTML
	$('.arrRight li').arrangeable();
	$('.arrLeft li').arrangeable();
});

var position = 0;
var side = "LEFT";

$(function() {

	//左右两边选中
	function listCheck() {
		$(".itemList").click(function() {
			$(this).addClass("bor").siblings().removeClass("bor");
			$(this).parent().prev().find(".subDelete").removeAttr("disabled");

		});
		//		10.30新增
		var timeOutEvent = 0;
		$(function() {
			$(".itemList").on({
				touchstart: function() {
					timeOutEvent = setTimeout("longPress()", 500);
				},
				touchmove: function() {
					clearTimeout(timeOutEvent);
					timeOutEvent = 0;
				},
				touchend: function() {
					clearTimeout(timeOutEvent);
					if(timeOutEvent != 0) {
						$(this).addClass("bor").siblings().removeClass("bor");
						$(this).parent().prev().find(".subDelete").removeAttr("disabled");
					}
					return false;
				}
			});
		});
		//10.30新增end

	};
	listCheck();
	//左右两边添加
	$(".add").click(function() {
		var init_name = "Undefined"
		var i = 1;
		var side = $(this).siblings("span").html()
		if(side == "RIGHT") {
			while($.inArray(init_name, pName_right) != -1) {
				init_name = "Undefined"
				init_name = init_name + i;
				i = i + 1;
			}
			pName_right.push(init_name)
			pR_right.push([""])
			pH_right.push([""])
			pL_right.push("")
		} else {
			while($.inArray(init_name, pName) != -1) {
				init_name = "Undefined"
				init_name = init_name + i;
				i = i + 1;
			}
			pName.push(init_name)
			pR.push([""])
			pH.push([""])
			pL.push("")
		}
		var li = "<li class='itemList bgGray'><p>" + init_name + "</p><span class='itemSpan'>$<i>0</i></span></li>";
		$(this).parent().next("ul").append(li);
		$('.arrRight li').arrangeable();
		$('.arrLeft li').arrangeable();
		listCheck();
	});
	//左右两边删除	
	$(".subDelete").click(function() {
		var name = $(this).parent().siblings().children(".bor").find("p").html()
		var side = $(this).siblings("span").html()
		if(side == "RIGHT") {
			var index = pName_right.indexOf(name);
			if(index > -1) {
				pName_right.splice(index, 1);
				pR_right.splice(index, 1)
				pH_right.splice(index, 1)
				pL_right.splice(index, 1)
			}
		} else {
			var index = pName.indexOf(name);
			if(index > -1) {
				pName.splice(index, 1);
				pR.splice(index, 1)
				pH.splice(index, 1)
				pL.splice(index, 1)
			}
		}
		$(this).parent().siblings().children(".bor").remove();
		$(this).attr("disabled", "disabled");
	});
	$("#save_left").click(function() {
		var new_pName = []
		var new_pR = []
		var new_pH = []
		var new_pL = []
		$('#LEFT-BOX').find('p').each(function() {
			console.log(($(this).html()))
			new_pName.push($(this).html())
			new_pR.push(pR[pName.indexOf($(this).html())])
			new_pH.push(pH[pName.indexOf($(this).html())])
			new_pL.push(pL[pName.indexOf($(this).html())])
		})
		console.log(new_pName)
		console.log(new_pL)
	});
	$("#save_right").click(function() {
		var new_pName_right = []
		var new_pR_right = []
		var new_pH_right = []
		var new_pL_right = []
		$('#RIGHT-BOX').find('p').each(function() {
			console.log(($(this).html()))
			new_pName_right.push($(this).html())
			new_pR_right.push(pR_right[pName_right.indexOf($(this).html())])
			new_pH_right.push(pH_right[pName_right.indexOf($(this).html())])
			new_pL_right.push(pL_right[pName_right.indexOf($(this).html())])
		})
		console.log(new_pName_right)
		console.log(new_pL_right)
	});

	// 弹框显示
	$('body').on('dblclick', '.itemList', function() {
		$(this).removeClass("bor").parent().prev().find(".subDelete").attr("disabled", "disabled");
		$(".popBg").show();
		side = $(this).parent().siblings("p").find('span').html()
		// 右边
		if(side == "RIGHT") {
			var pop_body_HTML = ""
//			console.log("p" + $(this).find("p").html())
			position = pName_right.indexOf($(this).find("p").html())
			// for R Rule
			// $("#name").attr("placeholder", pName[position]);
			document.getElementById("name_pop").innerHTML = '<p class="L">name: <input  type="text" placeholder="' + pName_right[position] + '" /></p>'
			for(i = 0; i < pR_right[position].length; i++) {
				ip = i + 1
				var message = pR_right[position][i].split("|")
				// console.log(message[0])
				if(message[0] != "GROUP") {
					pop_body_HTML = pop_body_HTML + '<tr> <td> <input type="button" name="NO" size="2" value="R' + ip + '"disabled="disabled" /> </td> <td> ' +
						'<select id="selR' + i + '" name="" class="sn1"> <option value="0">-select-</option> ' +
						'<option value="LOGIN">LOGIN</option> <option value="SYMBOL">SYMBOL</option> <option value="GROUP">GROUP</option> <option value="SERVER">SERVER</option> ' +
						'</select> </td> <td> <select id="seltR' + i + '" name="" class="sn2"> <option value="0">-select-</option> <option value="EQUAL">EQUAL</option> <option value="NOT EQUAL">NOT EQUAL</option>' +
						' </select> </td> <td> <input type="text" placeholder="' + message[2] + '" /> </td> <td> <input type="button" onClick="deltr(this)" value="Delete"> </td> </tr>'
				} else {
					pop_body_HTML = pop_body_HTML + '<tr> <td> <input type="button" name="NO" size="2" value="R' + ip + '"disabled="disabled" /> </td> <td> ' +
						'<select id="selR' + i + '" name="" class="sn1"> <option value="0">-select-</option> ' +
						'<option value="LOGIN">LOGIN</option> <option value="SYMBOL">SYMBOL</option> <option value="GROUP">GROUP</option> <option value="SERVER">SERVER</option> ' +
						'</select> </td> <td> <select id="seltR' + i + '" name="" class="sn2"> <option value="0">-select-</option> <option value="EQUAL">EQUAL</option> <option value="NOT EQUAL">NOT EQUAL</option><option value="BEGIN WITH">BEGIN WITH</option><option value="NOT BEGIN WITH">NOT BEGIN WITH</option><option value="END WITH">END WITH</option><option value="NOT END WITH">NOT END WITH</option><option value="MID">MID</option><option value="NOT MID">NOT MID</option><option value="CUSTOM">CUSTOM</option>' +
						'</select> </td> <td> <input type="text" placeholder="' + message[2] + '" /> </td> <td> <input type="button" onClick="deltr(this)" value="Delete"> </td> </tr>'
				}
			}
			document.getElementById("pop_body_r").innerHTML = pop_body_HTML
			for(i = 0; i < pR_right[position].length; i++) {
				var message = pR_right[position][i].split("|")
				// console.log(message)
				$("#selR" + i).val(message[0]);
				$("#seltR" + i).val(message[1]);
				// var x1 = sel_array.indexOf(message[0])
				// var x2 = selT_array.indexOf(message[1])
				// // console.log(x1)
				// document.getElementById("selR" + i)[x1 + 1].selected = true;
				// document.getElementById("seltR" + i)[x2 + 1].selected = true;
			}
			// for H Rule
			var pop_body_HTML = ""
			for(i = 0; i < pH_right[position].length; i++) {
				ip = i + 1
				var message = pH_right[position][i].split("|")
				// console.log(message[0])
				if(message[0] != "GROUP") {
					pop_body_HTML = pop_body_HTML + '<tr> <td> <input type="button" name="NO" size="2" value="H' + ip + '"disabled="disabled" /> </td> <td> ' +
						'<select id="selhR' + i + '" name="" class="sgn1"> <option value="0">-select-</option> ' +
						'<option value="LOGIN">LOGIN</option> <option value="SYMBOL">SYMBOL</option> <option value="GROUP">GROUP</option> <option value="SERVER">SERVER</option> ' +
						'</select> </td> <td> <select id="selthR' + i + '" name="" class="sgn2"> <option value="0">-select-</option> <option value="EQUAL">EQUAL</option> <option value="NOT EQUAL">NOT EQUAL</option>' +
						' </select> </td> <td> <input type="text" placeholder="' + message[2] + '" /> </td> <td> <input type="button" onClick="deltr(this)" value="Delete"> </td> </tr>'
				} else {
					pop_body_HTML = pop_body_HTML + '<tr> <td> <input type="button" name="NO" size="2" value="H' + ip + '"disabled="disabled" /> </td> <td> ' +
						'<select id="selhR' + i + '" name="" class="sn1"> <option value="0">-select-</option> ' +
						'<option value="LOGIN">LOGIN</option> <option value="SYMBOL">SYMBOL</option> <option value="GROUP">GROUP</option> <option value="SERVER">SERVER</option> ' +
						'</select> </td> <td> <select id="selthR' + i + '" name="" class="sgn2"> <option value="0">-select-</option> <option value="EQUAL">EQUAL</option> <option value="NOT EQUAL">NOT EQUAL</option><option value="BEGIN WITH">BEGIN WITH</option><option value="NOT BEGIN WITH">NOT BEGIN WITH</option><option value="END WITH">END WITH</option><option value="NOT END WITH">NOT END WITH</option><option value="MID">MID</option><option value="NOT MID">NOT MID</option><option value="CUSTOM">CUSTOM</option>' +
						'</select> </td> <td> <input type="text" placeholder="' + message[2] + '" /> </td> <td> <input type="button" onClick="deltr(this)" value="Delete"> </td> </tr>'
				}
			}
			document.getElementById("pop_body_h").innerHTML = pop_body_HTML
			for(i = 0; i < pH_right[position].length; i++) {
				var message = pH_right[position][i].split("|")
				// console.log(message)
				$("#selhR" + i).val(message[0]);
				$("#selthR" + i).val(message[1]);
				// var x1 = sel_array.indexOf(message[0])
				// var x2 = selT_array.indexOf(message[1])
				// // console.log(x1)
				// document.getElementById("selR" + i)[x1 + 1].selected = true;
				// document.getElementById("seltR" + i)[x2 + 1].selected = true;
			}
			// $("#LL").attr("placeholder", pL[position]);
			document.getElementById("LL").innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;L:<input  type="text" placeholder="' + pL_right[position] + '" />'
		}
		// 左边
		else {
			var pop_body_HTML = ""
			console.log("p" + $(this).find("p").html())
			position = pName.indexOf($(this).find("p").html())
			// for R Rule
			// $("#name").attr("placeholder", pName[position]);
			document.getElementById("name_pop").innerHTML = '<p class="L">name: <input  type="text" placeholder="' + pName[position] + '" /></p>'
			for(i = 0; i < pR[position].length; i++) {
				ip = i + 1
				var message = pR[position][i].split("|")
				// console.log(message[0])
				if(message[0] != "GROUP") {
					pop_body_HTML = pop_body_HTML + '<tr> <td> <input type="button" name="NO" size="2" value="R' + ip + '"disabled="disabled" /> </td> <td> ' +
						'<select id="sel' + i + '" name="" class="sn1"> <option value="0">-select-</option> ' +
						'<option value="LOGIN">LOGIN</option> <option value="SYMBOL">SYMBOL</option> <option value="GROUP">GROUP</option> <option value="SERVER">SERVER</option> ' +
						'</select> </td> <td> <select id="selt' + i + '" name="" class="sn2"> <option value="0">-select-</option> <option value="EQUAL">EQUAL</option> <option value="NOT EQUAL">NOT EQUAL</option>' +
						' </select> </td> <td> <input type="text" placeholder="' + message[2] + '" /> </td> <td> <input type="button" onClick="deltr(this)" value="Delete"> </td> </tr>'
				} else {
					pop_body_HTML = pop_body_HTML + '<tr> <td> <input type="button" name="NO" size="2" value="R' + ip + '"disabled="disabled" /> </td> <td> ' +
						'<select id="sel' + i + '" name="" class="sn1"> <option value="0">-select-</option> ' +
						'<option value="LOGIN">LOGIN</option> <option value="SYMBOL">SYMBOL</option> <option value="GROUP">GROUP</option> <option value="SERVER">SERVER</option> ' +
						'</select> </td> <td> <select id="selt' + i + '" name="" class="sn2"> <option value="0">-select-</option> <option value="EQUAL">EQUAL</option> <option value="NOT EQUAL">NOT EQUAL</option><option value="BEGIN WITH">BEGIN WITH</option><option value="NOT BEGIN WITH">NOT BEGIN WITH</option><option value="END WITH">END WITH</option><option value="NOT END WITH">NOT END WITH</option><option value="MID">MID</option><option value="NOT MID">NOT MID</option><option value="CUSTOM">CUSTOM</option>' +
						'</select> </td> <td> <input type="text" placeholder="' + message[2] + '" /> </td> <td> <input type="button" onClick="deltr(this)" value="Delete"> </td> </tr>'
				}
			}
			document.getElementById("pop_body_r").innerHTML = pop_body_HTML
			for(i = 0; i < pR[position].length; i++) {
				var message = pR[position][i].split("|")
				// console.log(message)
				var x1 = sel_array.indexOf(message[0])
				var x2 = selT_array.indexOf(message[1])
				// console.log(x1)
				document.getElementById("sel" + i)[x1 + 1].selected = true;
				document.getElementById("selt" + i)[x2 + 1].selected = true;
			}
			// for H Rule
			var pop_body_HTML = ""
			for(i = 0; i < pH[position].length; i++) {
				ip = i + 1
				var message = pH[position][i].split("|")
				// console.log(message[0])
				if(message[0] != "GROUP") {
					pop_body_HTML = pop_body_HTML + '<tr> <td> <input type="button" name="NO" size="2" value="H' + ip + '"disabled="disabled" /> </td> <td> ' +
						'<select id="selh' + i + '" name="" class="sgn1"> <option value="0">-select-</option> ' +
						'<option value="LOGIN">LOGIN</option> <option value="SYMBOL">SYMBOL</option> <option value="GROUP">GROUP</option> <option value="SERVER">SERVER</option> ' +
						'</select> </td> <td> <select id="selth' + i + '" name="" class="sgn2"> <option value="0">-select-</option> <option value="EQUAL">EQUAL</option> <option value="NOT EQUAL">NOT EQUAL</option>' +
						' </select> </td> <td> <input type="text" placeholder="' + message[2] + '" /> </td> <td> <input type="button" onClick="deltr(this)" value="Delete"> </td> </tr>'
				} else {
					pop_body_HTML = pop_body_HTML + '<tr> <td> <input type="button" name="NO" size="2" value="H' + ip + '"disabled="disabled" /> </td> <td> ' +
						'<select id="selh' + i + '" name="" class="sgn1"> <option value="0">-select-</option> ' +
						'<option value="LOGIN">LOGIN</option> <option value="SYMBOL">SYMBOL</option> <option value="GROUP">GROUP</option> <option value="SERVER">SERVER</option> ' +
						'</select> </td> <td> <select id="selth' + i + '" name="" class="sgn2"> <option value="0">-select-</option> <option value="EQUAL">EQUAL</option> <option value="NOT EQUAL">NOT EQUAL</option><option value="BEGIN WITH">BEGIN WITH</option><option value="NOT BEGIN WITH">NOT BEGIN WITH</option><option value="END WITH">END WITH</option><option value="NOT END WITH">NOT END WITH</option><option value="MID">MID</option><option value="NOT MID">NOT MID</option><option value="CUSTOM">CUSTOM</option>' +
						'</select> </td> <td> <input type="text" placeholder="' + message[2] + '" /> </td> <td> <input type="button" onClick="deltr(this)" value="Delete"> </td> </tr>'
				}
			}
			document.getElementById("pop_body_h").innerHTML = pop_body_HTML
			for(i = 0; i < pH[position].length; i++) {
				var message = pH[position][i].split("|")
				// console.log(message)
				var x1 = sel_array.indexOf(message[0])
				var x2 = selT_array.indexOf(message[1])
				// console.log(x1)
				document.getElementById("selh" + i)[x1 + 1].selected = true;
				document.getElementById("selth" + i)[x2 + 1].selected = true;
			}
			// $("#LL").attr("placeholder", pL[position]);
			document.getElementById("LL").innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;L:<input  type="text" placeholder="' + pL[position] + '" />'
		}
		$(".popDiv").fadeIn();
	})

	//弹框关闭
	$(".popDiv input[value='CANCEL']").click(function() {
		$(".popBg").hide();
		$(".popDiv").fadeOut();
	});

	$(".popDiv input[value='OK']").click(function() {
		//右边
		if(side == "RIGHT") {
//			console.log($("#name_pop").find('input[type="text"]').attr("placeholder"))
			var old_name = $("#name_pop").find('input[type="text"]').attr("placeholder")
//			console.log($("#name_pop").find('input[type="text"]').val())
			if($("#name_pop").find('input[type="text"]').val() != "") {
				//如果重复
				if(pName_right.indexOf($("#name_pop").find('input[type="text"]').val()) != -1) {
//					alert("重复Name")
					return 0
				}
				//不重复
				pName_right[position] = $("#name_pop").find('input[type="text"]').val()
				$('#RIGHT-BOX').find('p').each(function() {
					if($(this).html() == old_name) {
						$(this).html($("#name_pop").find('input[type="text"]').val())
					}
				})
			}
			var r_array = []
			$("#pop_body_r").find('tr').each(function() {
				var r1 = $(this).find('select[class="sn1"]').find(":selected").text()
				if(r1 == "") {
					r1 = $(this).find('select[class="s1"]').find(":selected").text()
				}
//				console.log(r1)
				var r2 = $(this).find('select[class="sn2"]').find(":selected").text()
				if(r2 == "") {
					r2 = $(this).find('select[class="s2"]').find(":selected").text()
				}
//				console.log(r2)
				if($(this).find('input[type="text"]').val() != "") {
//					console.log($(this).find('input[type="text"]').val())
					var r3 = $(this).find('input[type="text"]').val()
				} else {
//					console.log($(this).find('input[type="text"]').attr("placeholder"))
					var r3 = $(this).find('input[type="text"]').attr("placeholder")
				}
				r_array.push(r1 + "|" + r2 + "|" + r3)
			})
//			console.log(r_array)
			pR_right[position] = r_array
			// H Rule update
			var h_array = []
			$("#pop_body_h").find('tr').each(function() {
				var h1 = $(this).find('select[class="sgn1"]').find(":selected").text()
				if(h1 == "") {
					h1 = $(this).find('select[class="sg1"]').find(":selected").text()
				}
//				console.log(h1)

				var h2 = $(this).find('select[class="sgn2"]').find(":selected").text()
				if(h2 == "") {
					h2 = $(this).find('select[class="sg2"]').find(":selected").text()
				}
//				console.log(h2)
				if($(this).find('input[type="text"]').val() != "") {
//					console.log($(this).find('input[type="text"]').val())
					var h3 = $(this).find('input[type="text"]').val()
				} else {
//					console.log($(this).find('input[type="text"]').attr("placeholder"))
					var h3 = $(this).find('input[type="text"]').attr("placeholder")
				}
				h_array.push(h1 + "|" + h2 + "|" + h3)
			})
			console.log(h_array)
			pH_right[position] = h_array

//			console.log($("LL").find('input[type="text"]').attr("placeholder"))
			var old_name = $("#LL").find('input[type="text"]').attr("placeholder")
//			console.log($("#LL").find('input[type="text"]').val())
			if($("#LL").find('input[type="text"]').val() != "") {
				pL_right[position] = $("#LL").find('input[type="text"]').val()
			}
		}
		//左边
		else {
//			console.log($("#name_pop").find('input[type="text"]').attr("placeholder"))
			var old_name = $("#name_pop").find('input[type="text"]').attr("placeholder")
//			console.log($("#name_pop").find('input[type="text"]').val())
			if($("#name_pop").find('input[type="text"]').val() != "") {
				//如果重复
				if(pName.indexOf($("#name_pop").find('input[type="text"]').val()) != -1) {
//					alert("重复Name")
					return 0
				}
				//不重复
				pName[position] = $("#name_pop").find('input[type="text"]').val()
				$('#LEFT-BOX').find('p').each(function() {
					if($(this).html() == old_name) {
						$(this).html($("#name_pop").find('input[type="text"]').val())
					}
				})
			}
			var r_array = []
			$("#pop_body_r").find('tr').each(function() {
				var r1 = $(this).find('select[class="sn1"]').find(":selected").text()
				if(r1 == "") {
					r1 = $(this).find('select[class="s1"]').find(":selected").text()
				}
//				console.log(r1)

				var r2 = $(this).find('select[class="sn2"]').find(":selected").text()
				if(r2 == "") {
					r2 = $(this).find('select[class="s2"]').find(":selected").text()
				}
//				console.log(r2)
				if($(this).find('input[type="text"]').val() != "") {
//					console.log($(this).find('input[type="text"]').val())
					var r3 = $(this).find('input[type="text"]').val()
				} else {
//					console.log($(this).find('input[type="text"]').attr("placeholder"))
					var r3 = $(this).find('input[type="text"]').attr("placeholder")
				}
				r_array.push(r1 + "|" + r2 + "|" + r3)
			})
//			console.log(r_array)
			pR[position] = r_array
			// H Rule update
			var h_array = []
			$("#pop_body_h").find('tr').each(function() {
				var h1 = $(this).find('select[class="sgn1"]').find(":selected").text()
				if(h1 == "") {
					h1 = $(this).find('select[class="sg1"]').find(":selected").text()
				}
//				console.log(h1)

				var h2 = $(this).find('select[class="sgn2"]').find(":selected").text()
				if(h2 == "") {
					h2 = $(this).find('select[class="sg2"]').find(":selected").text()
				}
//				console.log(h2)
				if($(this).find('input[type="text"]').val() != "") {
//					console.log($(this).find('input[type="text"]').val())
					var h3 = $(this).find('input[type="text"]').val()
				} else {
//					console.log($(this).find('input[type="text"]').attr("placeholder"))
					var h3 = $(this).find('input[type="text"]').attr("placeholder")
				}
				h_array.push(h1 + "|" + h2 + "|" + h3)
			})
//			console.log(h_array)
			pH[position] = h_array

//			console.log($("LL").find('input[type="text"]').attr("placeholder"))
			var old_name = $("#LL").find('input[type="text"]').attr("placeholder")
//			console.log($("#LL").find('input[type="text"]').val())
			if($("#LL").find('input[type="text"]').val() != "") {
				pL[position] = $("#LL").find('input[type="text"]').val()
			}
		}
		$(".popBg").hide();
		$(".popDiv").fadeOut();
	});

});

//弹框下拉
$(function() {
	let select = {
		LOGIN: {
			'EQUAL': 'EQUAL',
			'NOT EQUAL': 'NOT EQUAL',
		},
		SYMBOL: {
			'EQUAL': 'EQUAL',
			'NOT EQUAL': 'NOT EQUAL',
		},
		GROUP: {
			'EQUAL': 'EQUAL',
			'NOT EQUAL': 'NOT EQUAL',
			'BEGIN WITH': 'BEGIN WITH',
			'NOT BEGIN WITH': 'NOT BEGIN WITH',
			'END WITH': 'END WITH',
			'NOT END WITH': 'NOT END WITH',
			'MID': 'MID',
			'NOT MID': 'NOT MID',
			'CUSTOM': 'CUSTOM',
		},
		SERVER: {
			'EQUAL': 'EQUAL',
			'NOT EQUAL': 'NOT EQUAL',
		},
	};
	$(function() {
		initialization_s1($('.s1'), select)
		initialization_s1($('.sg1'), select)
		$("body").on("change", ".s1", function() {
			const this_s2 = $(this).parent().next().find('.s2')
			initialization_s2(this_s2, this.value, select)
		})
		$("body").on("change", ".sg1", function() {
			const this_sg2 = $(this).parent().next().find('.sg2')
			initialization_s2(this_sg2, this.value, select)
		})

		$("body").on("change", ".sn1", function() {
			const this_s2 = $(this).parent().next().find('.sn2')
			initialization_s2(this_s2, this.value, select)
		})
		$("body").on("change", ".sgn1", function() {
			const this_sg2 = $(this).parent().next().find('.sgn2')
			initialization_s2(this_sg2, this.value, select)
		})

	});

	function initialization_s1(_this, select) {
		_this.html('<option value="0">-select-</option>')
		Object.keys(select).forEach(function(key) {
			_this.append('<option value=' + key + '>' + key + '</option>')
		});
	}

	function initialization_s2(_this, vaule, select) {
		if(vaule == 0) {
			_this.attr("disabled", true);
			_this.html('<option value="0">-select-</option>')
			return false
		}
		_this.html('<option value="0">-select-</option>')
		Object.keys(select).forEach(function(key) {
			if(vaule == key) {
				Object.keys(select[key]).forEach(function(keyIn) {
					_this.append('<option value=' + select[key][keyIn] + '>' + keyIn + '</option>')
				});
			}
		});
		_this.removeAttr("disabled");
	};

});

//正负数改变颜色
$(function() {
	var itemSpan = $(".itemSpan i");
	$(itemSpan).each(function() {
		var num = parseFloat(this.firstChild.nodeValue);
		if(num > 0) {
			$(this).parent().parent().addClass("bgGreen");
		} else if(num < 0) {
			$(this).parent().parent().addClass("bgRed");
		} else {
			$(this).parent().parent().addClass("bgGray");
		}
	});
});

//弹框1
function changeIndex() {
	var i = 1;
	$("#dynamicTable tbody tr").each(function() {
		$(this).find("input[name='NO']").val("R" + i++);
	});
};

function changeIndex2() {
	var i = 1;
	$("#dynamicTable2 tbody tr").each(function() {
		$(this).find("input[name='NO']").val("H" + i++);
	});
};

//弹框1 第一个add添加行数
$(function() {
	var oId = 1;
	$("#btn_addtr").click(function() {
		$("#tab11 tbody tr").clone().appendTo("#dynamicTable tbody");
		oId += 1;
		changeIndex(); //更新行号
	});
});
//弹框1 第二个add添加行数
$(function() {
	$("#btn_addtr1").click(function() {
		$("#tab12 tbody tr").clone().appendTo("#dynamicTable2 tbody");
		changeIndex2();
	});
});
//弹框----删除
//	1
function deltr(opp) {
	var length = $("#dynamicTable tbody tr").length;
	if(length <= 1) {
		alert("至少保留一行");
	} else {
		// var position_r = $(opp).parent().parent().find("input[name='NO']").val()
		// var position_r = position_r.replace("R", "");
		// pR[position].splice(position_r-1, 1)
		$(opp).parent().parent().remove();
		changeIndex();
	}
}
//2
function deltr2(opp) {
	var length = $("#dynamicTable2 tbody tr").length;
	if(length <= 1) {
		alert("至少保留一行");
	} else {
		$(opp).parent().parent().remove();
		changeIndex2();
	}
};