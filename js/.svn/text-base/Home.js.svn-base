var Acount = echarts.init(document.getElementById('Acount'));
window.onresize = function() {
	Acount.resize();
	Funding.resize();
	FundingTotal.resize();
};
option1 = {
	title: {
		text: 'Deposit',
		x: 'center',
	},
	tooltip: {
		trigger: 'axis',
		backgroundColor: 'rgba(16,86,46,0.79)',
	},
	legend: {
		itemGap: 10,
		top: "1%",
		left: "0"
	},
	toolbox: {
		feature: {
			dataView: {
				show: true,
				readOnly: false
			},
			magicType: {
				show: true,
				type: ['line', 'bar']
			},
			restore: {},
			saveAsImage: {}
		}
	},
	grid: { //网格
		left: '3%',
		right: '5%',
		bottom: '2%',
		containLabel: true
	},
	xAxis: [ //X轴
		{
			type: 'category',
			boundaryGap: false,
			data: ['  03 \n/22', '  03 \n/23', '  03 \n/24', '  03 \n/25', '  03 \n/26', '  03 \n/27', '  03 \n/28'],
			axisLine: {
				lineStyle: {
					color: "#10562e",
				}
			},
			axisLabel: {
				interval: 0
			},
		}
	],
	yAxis: [ //Y轴
		{
			type: 'value',
			axisLine: {
				lineStyle: {
					color: "#10562e",
				}
			},
		}
	],
	series: [{
		name: '新增',
		type: 'line',
		stack: '总量',
		itemStyle: {
			normal: {
				color: '#10562e'
			}
		},
		areaStyle: {
			normal: {
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: '#10562e'
				}, {
					offset: 1,
					color: '#fff'
				}])
			}
		},
		data: [120, 132, 101, 134, 72, 90, 80]
	}, ]
};
Acount.setOption(option1);

//统计图2
var Funding = echarts.init(document.getElementById('Funding'));
option2 = {
	title: {
		text: 'Funding',
		x: 'center',
	},
	tooltip: {
		trigger: 'axis',
		backgroundColor: 'rgba(16,86,46,0.79)',

	},
	legend: {
		itemGap: 10,
		top: "1%",
		left: "0"
	},
	toolbox: {
		feature: {
			dataView: {
				show: true,
				readOnly: false
			},
			magicType: {
				show: true,
				type: ['line', 'bar']
			},
			restore: {},
			saveAsImage: {}
		}
	},
	grid: { //网格
		left: '3%',
		right: '5%',
		bottom: '2%',
		containLabel: true
	},
	xAxis: [ //X轴
		{
			type: 'category',
			boundaryGap: false,
			data: ['  03 \n/22', '  03 \n/23', '  03 \n/24', '  03 \n/25', '  03 \n/26', '  03 \n/27', '  03 \n/28'],
			axisLine: {
				lineStyle: {
					color: "#10562e",
				}
			},
			axisLabel: {
				interval: 0
			},
		}
	],
	yAxis: [ //Y轴
		{
			type: 'value',
			axisLine: {
				lineStyle: {
					color: "#10562e",
				}
			},
		}
	],
	series: [{
		name: '新增',
		type: 'line',
		stack: '总量',
		itemStyle: {
			normal: {
				color: '#10562e'
			}
		},
		areaStyle: {
			normal: {
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: '#10562e'
				}, {
					offset: 1,
					color: '#fff'
				}])
			}
		},
		data: [50, 132, 101, 184, 72, 90, 80]
	}, ]
};
Funding.setOption(option2);

//统计图2-1
var FundingTotal = echarts.init(document.getElementById('FundingTotal'));
option201 = {
	title: {
		text: 'FundingTotal',
		x: 'center',
	},
	tooltip: {
		trigger: 'axis',
		backgroundColor: 'rgba(16,86,46,0.79)',

	},
	legend: {
		itemGap: 10,
		top: "1%",
		left: "0"
	},
	toolbox: {
		feature: {
			dataView: {
				show: true,
				readOnly: false
			},
			magicType: {
				show: true,
				type: ['line', 'bar']
			},
			restore: {},
			saveAsImage: {}
		}
	},
	grid: { //网格
		left: '3%',
		right: '5%',
		bottom: '2%',
		containLabel: true
	},
	xAxis: [ //X轴
		{
			type: 'category',
			boundaryGap: false,
			data: ['  03 \n/22', '  03 \n/23', '  03 \n/24', '  03 \n/25', '  03 \n/26', '  03 \n/27', '  03 \n/28'],
			axisLine: {
				lineStyle: {
					color: "#10562e",
				}
			},
			axisLabel: {
				interval: 0
			},
		}
	],
	yAxis: [ //Y轴
		{
			type: 'value',
			axisLine: {
				lineStyle: {
					color: "#10562e",
				}
			},
		}
	],
	series: [{
		name: '新增',
		type: 'line',
		stack: '总量',
		itemStyle: {
			normal: {
				color: '#10562e'
			}
		},
		areaStyle: {
			normal: {
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: '#10562e'
				}, {
					offset: 1,
					color: '#fff'
				}])
			}
		},
		data: [120, 132, 81, 134, 92, 100, 80]
	}, ]
};
FundingTotal.setOption(option201);