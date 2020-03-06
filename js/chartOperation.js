Highcharts.setOptions({title:"",credits:{enabled:false,},lang:{noData:"暂无数据"},});function chartList(){$(".chart>div").click(function(){$(this).parent().addClass("bor").siblings().removeClass("bor");$(this).parent().parent().prev().find(".ChartDel").removeAttr("disabled")})}chartList();$(".ChartDel").click(function(){$(this).parent().siblings().children(".bor").remove();$(this).attr("disabled","disabled")});function changeColor(){var chartTitle=$(".chart>span i");$(chartTitle).each(function(){var num=parseFloat(this.firstChild.nodeValue);if(num<0){$(this).parent().css("color","#f00")}else{if(num>0){$(this).parent().css("color","#333")}else{$(this).parent().css("color","#333")}}})}changeColor();$(function(){c=0;for(var i=0;i<=1;i++){chartAdd(c);c++}$(".ChartAdd").click(function(){chartAdd(c);c++})});$("body").on("click",".ChartLineAdd",function(){var chart=$(this).parent().parent().find("div").data("chart");if(chart.series.length<20){chart.addSeries({name:"111",selected:false,data:[216.4,194.1,95.6,54.4,29.9,71.5,106.4,129.2,144,176,135.6,148.5]})}else{alert("最多20条")}});$("body").on("click",".ChartLineDel",function(){var chart=$(this).parent().parent().find("div").data("chart");if(chart.series.length>0){chart.getSelectedSeries().map(function(i,n){i.remove()})}else{alert("没了")}});(function(H){H.wrap(H.Legend.prototype,"positionCheckboxes",function(p,scrollOffset){var alignAttr=this.group.alignAttr,translateY,clipHeight=this.clipHeight||this.legendHeight;if(alignAttr){translateY=alignAttr.translateY;H.each(this.allItems,function(item){var checkbox=item.checkbox,bBox=item.legendItem.getBBox(true),top;if(checkbox){top=(translateY+checkbox.y+(scrollOffset||0)+3);H.css(checkbox,{left:(alignAttr.translateX+item.checkboxOffset+checkbox.x-85-bBox.width)+"px",top:top-1+"px",display:top>translateY-6&&top<translateY+clipHeight-6?"":"none"})}})}})})(Highcharts);function drawChart(thisId,thisData){var clickDetected=false;var chart=Highcharts.chart(thisId,{chart:{events:{addSeries:function(){var label=this.renderer.label("A series was added, about to redraw chart",100,120).attr({fill:Highcharts.getOptions().colors[0],padding:10,r:5,zIndex:8}).css({color:"#FFF",}).add();setTimeout(function(){label.fadeOut()},1000)},}},xAxis:{lineColor:"#ddd",gridLineWidth:1,gridLineColor:"#eee",gridLineDashStyle:"Dash",labels:{format:"{value:%H:%M}",formatter:function(){return Highcharts.dateFormat("%H:%M",this.value)},align:"left",x:3,y:-3},tickWidth:0,},series:thisData,yAxis:[{title:{text:null},gridLineColor:"#eee",gridLineDashStyle:"Dash",labels:{align:"left",x:3,y:16,format:"{value:.,0f}"},showFirstLabel:false},{linkedTo:0,gridLineWidth:0,opposite:true,title:{text:null},labels:{align:"right",x:-3,y:16,},showFirstLabel:false}],legend:{align:"left",verticalAlign:"top",y:20,borderWidth:0,itemDistance:30},tooltip:{headerFormat:"<b>{series.name}</b><br>",pointFormat:"{point.x:%e. %b}: {point.d:.2f} m",shared:false,crosshairs:true,dateTimeLabelFormats:{day:"%H%M"},plotOptions:{spline:{marker:{radius:4,lineColor:"#666",lineWidth:1}}},crosshairs:true,},plotOptions:{series:{cursor:"pointer",showCheckbox:true,events:{legendItemClick:function(e){if(clickDetected){$("#name_pop>p>input").val(this.name);$(".popBg").show();$(".popDiv").fadeIn()}else{clickDetected=true;setTimeout(function(){clickDetected=false},300)}return false},checkboxClick:function(e){setTimeout(function(){var choseLine=$("#"+thisId).data("chart").getSelectedSeries();if(choseLine.length===0){$("#"+thisId).parent().find(".ChartLineDel").attr("disabled","disabled")}else{$("#"+thisId).parent().find(".ChartLineDel").removeAttr("disabled")}},100)},}}},});$("#"+thisId).data("chart",chart)}function chartAdd(c){$("#chartWrap").append('<li class="chart"><p><span>Principal Risk Book PnL Chart</span> <input type="button" value="Add" class="ChartLineAdd" /> <input type="button" disabled="disabled" value="Delete"  class="ChartLineDel" /> <input type="button" value="Save" /></p><span>08:30:00 : $ <i>0</i></span><div id="chart'+c+'"></div></li>');var testData=[{name:"Tokyo",selected:false,data:[29.9,71.5,106.4,129.2,144,176,135.6,148.5,216.4,194.1,95.6,54.4],},{name:"dd",selected:false,data:[46.9,91.5,86.4,199.2,134,106,105.6,138.5,126.4,134.1,195.6,154.4],},];drawChart("chart"+c,testData);$(".chart").arrangeable();chartList();changeColor()};