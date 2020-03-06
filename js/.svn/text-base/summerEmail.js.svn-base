
$(function(){
	//双击添加到邮件编辑器
var list_email = function(o) {
	var obj = o;
	var Email_a = o.find(".Email_a");
	var Email_b = o.find(".note-editable");
	//在列表中双击时
	var _dblclick = function(o) {
		var flag = o.parent().attr("class");
		var a;
		if(flag == "Email_a") {
			a = o.clone(true);
			Email_b.append(a);
		}
	};
	//选项双击时
	obj.find(".item").dblclick(function() {
		_dblclick($(this));
	});
};
//页面加载完毕后
$(document).ready(function(e) {
	list_email($("body"));
});
})

$(document).ready(function() {
	$('#summernote').summernote({
		height: 300,
		minHeight:300,
		focus: true,
		toolbar: [
			['headline', ['style']], //大字标题
			['style', ['bold', 'italic', 'underline', 'strikethrough']], //样式
			['fontface', ['fontname', 'color', 'fontsize']], //字体
			['alignment', ['ul', 'ol', 'paragraph', 'lineheight']], //对齐方式
			['insert', ['picture', 'hr']], //插入链接，图片，下划线
			['view', ['codeview']] //代码视图
		],
	});
});
//是否私有切换
function private(question) {
	if(question.value == "0") {
		$("#all-Y").show();
		$("#all-N").hide();
	} else if(question.value == "1") {
		$("#all-Y").hide();
		$("#all-N").show();
	}
}