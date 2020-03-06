//	download 表格
$("#request").click(function() {
	$("table.display.reportTable").show();
	$(".report-total").show();
	$('.reportTable').DataTable({
		dom: 'Bfrtip',
		//2018.7.31 修改
		"paging": true, //显示分页
		"lengthChange": false, //选择每页显示多少条数据，下拉选项        
		"paginationType": "full_numbers", //详细分页组，可以支持直接跳转到某页  
		"lengthMenu": [30], //选择每页显示多少条数据)
		//2018.7.31 修改
		"scrollX": true,
		"autoWidth": true,
		"ordering": false, // 禁止排序
		"info": false, // 禁止显示信息
		bFilter: false, //去掉搜索框
		buttons: [
			'copyHtml5',
			{
				extend: 'excel',
				text: 'Excel',
				filename: uList,
				sheetName: "Report work form",
				exportOptions: {

				}
			},
			{
				extend: 'csv', //使用 excel扩展
				text: 'CSV', // 显示文字
				filename: uList,
				exportOptions: {
					sheetName: "Report work form",
				}
			},
		]
	})
});
//	download 表格	end

var uList = "";

//过滤
$(document).ready(function() {
	$('#search_input').fastLiveFilter('.select_a');
});

//模态框左边
var two_way_list_selector = function(o) {
	var obj = o;
	var btn_a = o.find("#add");
	var btn_b = o.find("#delete2");
	var btn_c = o.find("#delete");
	//				var btn_d = o.find(".btn_add_all");
	var btn_e = o.find("#group"); //组
	var btn_f = o.find("#country"); //国家
	var btn_g = o.find("#status"); //状态
	var btn_h = o.find("#IB"); //IB
	var btn_i = o.find("#delete_group"); //删除组
	var btn_j = o.find("#delete_country"); //删除国家
	var btn_k = o.find("#delete_status"); //删除状态
	var btn_m = o.find("#deleteIB"); //删除IB
	var btn_n = o.find("#DeleteAll"); //全部删除
	var btn_p = o.find("#CheckAll"); //全部添加
	var select_a = o.find(".select_a");
	var select_b = o.find(".select_b");
	var a_report =o.find("#add-report");
	//是否按下了shift
	var is_shift = false;
	//是否按下了ctrl
	var is_ctrl = false;
	document.addEventListener("keydown", function(e) {
		is_shift = e.shiftKey;
		is_ctrl = e.ctrlKey;
	}, false);
	document.addEventListener("keyup", function(e) {
		is_shift = is_ctrl = false;
	}, false);
	//进行排序
	var option_sort = function(o) {
		o.html(o.find("div").toArray().sort(function(a, b) {
			return parseInt($(a).attr("data-index")) - parseInt($(b).attr("data-index"));
		}));
		obj.find(".item").removeClass("is_select");
		obj.find(".item").unbind("dblclick").dblclick(function() {
			_dblclick($(this));
		});
		obj.find(".item").unbind("click").click(function() {
			_click($(this));
		});
	}
	//在列表中双击时
	var _dblclick = function(o) {
		var flag = o.parent().attr("class");
		var a;
		if(flag == "select_a") {
			a = o.clone(true);
			select_b.append(a);
			o.remove();
			option_sort(select_b);
			change_list_number();
		} else {
			a = o.clone(true);
			select_a.append(a);
			o.remove();
			option_sort(select_a);
			change_list_number();
			check_error(1);
		}
	}
	//在列表中单击时
	var temp_index = 0;
	var _click = function(o) {
		var flag = o.parent().attr("class");
		if(is_shift) {
			var this_index = o.index();
			if(temp_index != this_index) {
				obj.find("." + flag + " .item").each(function(index, element) {
					if(this_index > temp_index && index < this_index && index >= temp_index) {
						$(this).addClass("is_select");
					}
					if(this_index < temp_index && index > this_index && index <= temp_index) {
						$(this).addClass("is_select");
					}
				});
			}
		}
		if(!is_ctrl && !is_shift) {
			obj.find("." + flag + " .item").each(function() {
				$(this).removeClass("is_select");
			});
		}
		if(o.hasClass("is_select")) {
			o.removeClass("is_select");
		} else {
			o.addClass("is_select");
		}
		temp_index = o.index();
	}
	//选项单击时
	obj.find(".item").click(function() {
		_click($(this));
	});
	//选项双击时
	obj.find(".item").dblclick(function() {
		_dblclick($(this));
	});
	//加入选中
	btn_a.click(function() {
		var a = select_a.find(".is_select").clone(true);
		if(a.size() == 0) {
			return false;
		}
		select_b.append(a);
		select_a.find(".is_select").remove();
		option_sort(select_b);
		change_list_number();
		check_error(1);
	});
	//删除选中
	btn_b.click(function() {
		var a = select_b.find(".is_select").clone(true);
		if(a.size() == 0) {
			return false;
		}
		select_a.append(a);
		select_b.find(".is_select").remove();
		option_sort(select_a);
		change_list_number();
	});
	//按组添加
	btn_e.click(function() {
		auto_add('Group', select_a, select_b, option_sort);
	})
	//按国家添加
	btn_f.click(function() {
		auto_add('Country', select_a, select_b, option_sort);
	})
	//按状态添加
	btn_g.click(function() {
		auto_add('Status', select_a, select_b, option_sort);
	})
	//按IB添加
	btn_h.click(function() {
		auto_add('IB', select_a, select_b, option_sort);
	})
	//按组删除
	btn_i.click(function() {
		auto_delete('Group', select_a, select_b, option_sort);
	})
	//按国家删除
	btn_j.click(function() {
		auto_delete('Country', select_a, select_b, option_sort);
	})
	//按状态删除
	btn_k.click(function() {
		auto_delete('Status', select_a, select_b, option_sort);
	})
	//按IB删除
	btn_m.click(function() {
		auto_delete('IB', select_a, select_b, option_sort);
	})
	//删除全部
	btn_c.click(function() {
		select_a.append(select_b.find("div"));
		option_sort(select_a);
		change_list_number()
	});
	btn_n.click(function() {
		select_a.append(select_b.find("div"));
		option_sort(select_a);
		change_list_number();
	});
	//添加全部
	btn_p.click(function() {
		select_b.append(select_a.find("div"));
		option_sort(select_a);
		change_list_number();
	});
	//初始化全部
	a_report.click(function() {
		$("#reportModal").modal();
		$("#user-list-name").val(" ");
		select_a.append(select_b.find("div"));
		option_sort(select_a,select_b);
		change_list_number();
	});
	
	
}
//页面加载完毕后
$(document).ready(function(e) {
	two_way_list_selector($("body")); //#two_way_list_selector_a
	change_list_number();
});
//去掉选中文字
document.onselectstart = function(event) {
	event = window.event || event;
	event.returnValue = false;
}

//操作修改条数
function change_list_number() {
	$(".left_number").text($(".select_a > div").length);
	$(".right_number").text($(".select_b > div").length);
}
//检查NAME&右边列表
function check_error(type) {
	var uList = $.trim($("#user-list-name").val());
	var selList = $(".select_b > div").length;
	if(type == 0) {
		if(uList == "") {
			$("#user-list-name").addClass("bg-error");
		} else {
			$("#user-list-name").removeClass("bg-error");
		}
		if(selList <= 0) {
			$("#right_list").addClass("bg-error");
		} else {
			$("#right_list").removeClass("bg-error");
		}
	}
	if(type == 1) {
		if(selList <= 0) {
			$("#right_list").addClass("bg-error");
		} else {
			$("#right_list").removeClass("bg-error");
		}
	}
	if(type == 2) { // 单独判断name为空
		if(uList == "") {
			$("#user-list-name").addClass("bg-error");
		} else {
			$("#user-list-name").removeClass("bg-error");
		}
	}
}
//组添加
//type类型 关键字
function auto_add(type, select_a, select_b, option_sort) {
	if($(".select_a > .is_select").length > 1) {
		alert("只能选择一条")
		return false
	} else if($(".select_a > .is_select").length == 0) {
		alert("请选择一条")
		return false
	}
	var Keyword1 = $.trim($(".select_a .is_select").find('span').eq(2).text());
	var Keyword2 = $.trim($(".select_a .is_select").find('span').eq(3).text());
	var Keyword3 = $.trim($(".select_a .is_select").find('span').eq(5).text());
	var Keyword4 = $.trim($(".select_a .is_select").find('span').eq(6).text());
	$(".select_a > div").each(function(i, n) {
		var my_text1 = $.trim($(n).find('span').eq(2).text());
		var my_text2 = $.trim($(n).find('span').eq(3).text());
		var my_text3 = $.trim($(n).find('span').eq(5).text());
		var my_text4 = $.trim($(n).find('span').eq(6).text());
		if($.trim(type) == 'Group' && my_text1 == Keyword1) {
			$(n).addClass("is_select");
		} else if($.trim(type) == 'Country' && my_text2 == Keyword2) {
			$(n).addClass("is_select");
		} else if($.trim(type) == 'Status' && my_text3 == Keyword3) {
			$(n).addClass("is_select");
		} else if($.trim(type) == 'IB' && my_text4 == Keyword4) {
			$(n).addClass("is_select");
		}
	})
	var a = select_a.find(".is_select").clone(true);
	if(a.size() == 0) {
		return false;
	}
	select_b.append(a);
	select_a.find(".is_select").remove();
	option_sort(select_b);
	change_list_number();
	check_error(1);
}

function auto_delete(type, select_b, select_a, option_sort) {
	if($(".select_b > .is_select").length > 1) {
		alert("只能选择一条")
		return false
	} else if($(".select_b > .is_select").length == 0) {
		alert("请选择一条")
		return false
	}
	var Keyword1 = $.trim($(".select_b .is_select").find('span').eq(2).text());
	var Keyword2 = $.trim($(".select_b .is_select").find('span').eq(3).text());
	var Keyword3 = $.trim($(".select_b .is_select").find('span').eq(5).text());
	var Keyword4 = $.trim($(".select_b .is_select").find('span').eq(6).text());
	$(".select_b > div").each(function(i, n) {
		var my_text1 = $.trim($(n).find('span').eq(2).text());
		var my_text2 = $.trim($(n).find('span').eq(3).text());
		var my_text3 = $.trim($(n).find('span').eq(5).text());
		var my_text4 = $.trim($(n).find('span').eq(6).text());
		if($.trim(type) == 'Group' && my_text1 == Keyword1) {
			$(n).addClass("is_select");
		} else if($.trim(type) == 'Country' && my_text2 == Keyword2) {
			$(n).addClass("is_select");
		} else if($.trim(type) == 'Status' && my_text3 == Keyword3) {
			$(n).addClass("is_select");
		} else if($.trim(type) == 'IB' && my_text4 == Keyword4) {
			$(n).addClass("is_select");
		}
	})
	var a = select_a.find(".is_select").clone(true);
	if(a.size() == 0) {
		return false;
	}
	select_b.append(a);
	select_a.find(".is_select").remove();
	option_sort(select_b);
	change_list_number();
};
//		模态框左边 end	


			var that;
			function del() {
				$('.delete-btn').on('click', function() {
					that = $(this);
				})
				$('.Sure').on('click', function() {
					that.parent().remove();
					$('#myModal').modal('hide');
					$("#cite").text("-Select-");
				})
			};
			function sel() {
				$("#divselect ul li a").on('click', function(e) {
					var txt = $(this).text();
					$("#cite").html(txt);
					$("#divselect  ul").hide();
					$("#citeSel b").css("background-position", "0 0");
				});
			};
			//		模态框右边
			$(function() {
				$("#selectedSub").click(function() {
					check_error(0);
					uList = $.trim($("#user-list-name").val());
					var selList = $(".select_b > div").length;
					//关闭窗口
					if(uList != '' && selList != 0) {
						$(this).attr("data-dismiss", "modal");
						$("#divselect ul").append("<li><a href='javascript:'>" + uList + "</a><i class='fa fa-close delete-btn' data-toggle='modal' data-target='#myModal'></i> </li>");
						sel();
						del();
					} else {
						return false
					};
				});
			});
			//模态框右边end
			$(function() {
				$("#citeSel").click(function() {
					var ul = $("#divselect  ul");
					if(ul.css("display") == "none") {
						ul.show();
						$("#citeSel b").css("background-position", "-18px 0");
					} else {
						ul.hide();
						$("#citeSel b").css("background-position", "0 0");
					}
				});
				del();
				sel();
			});
			$(document).bind("click", function(e) {
				var target = $(e.target);
				if(target.closest("#phone,#citeSel").length == 0) {
					$("#phone").hide();
					$("#citeSel b").css("background-position", "0 0");
				};
				e.stopPropagation();
			});

