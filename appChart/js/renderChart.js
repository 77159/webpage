/**
 * 图表渲染方法
 * @param chartType 图表基本配置项
 * @param data 图表数据
 * @param that 页面上下文对象
 */

//渲染方法-折线图
function renderLine(chartType, data, that) {
    let chart;
    try {
        chart = echarts.init($(`#${chartType}`)[0], 'dark');
        that.charts[chartType] = chart;
    } catch (e) {

    }

    let option = {
        // title: {
        //     text: '堆叠区域图',
        //     left: '0',
        //     top: '0',
        //     textStyle: {
        //         color: '#333',
        //     }
        // },
        tooltip: {
            trigger: 'axis',
            // axisPointer: {
            //     type: 'cross',
            // }
        },
        legend: {
            data: data.legendData,
            textStyle: {
                color: '#666',
            },
            top: '0',
            left: '0'
        },
        grid: {
            top: '15%',
            left: '1%',
            right: '5%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: data.xAxisData,
                axisLine: {
                    show: false //y轴线消失
                },
                axisLabel: {
                    interval: 0, //强制显示文字
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dotted',
                        color: '#ccc'
                    }
                },
                axisLabel: {
                    show: true,
                    interval: 'auto',
                    formatter: '{value}%'
                },
                axisLine: {
                    show: false //y轴线消失
                },
                axisTick: {
                    show: false //y轴坐标点消失
                },
            },

        ],
        series: [
            {
                name: data.legendData[0],
                type: 'line',
                stack: data.legendData[0],
                areaStyle: {
                    color: {
                        type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
                        colorStops: [
                            {offset: 0, color: 'rgba(244,136,51,0.5)'},
                            {offset: 1, color: 'rgba(255,255,255,0.5)'}
                        ],
                        global: false // 缺省为 false
                    }
                },
                lineStyle: {
                    color: 'rgba(244,136,51,0.5)',
                },
                data: data.enterData
            },
            {
                name: data.legendData[1],
                type: 'line',
                stack: data.legendData[1],
                areaStyle: {
                    color: {
                        type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
                        colorStops: [
                            {offset: 0, color: 'rgba(57,186,232,0.5)'},
                            {offset: 1, color: 'rgba(255,255,255,0.5)'}
                        ],
                        global: false // 缺省为 false
                    }
                },
                lineStyle: {
                    color: 'rgba(57,186,232,0.5)',
                },
                data: data.outData
            },
            {
                name: data.legendData[2],
                type: 'line',
                stack: data.legendData[2],
                areaStyle: {
                    color: {
                        type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
                        colorStops: [
                            {offset: 0, color: 'rgba(177,99,217,0.5)'},
                            {offset: 1, color: 'rgba(255,255,255,0.5)'}
                        ],
                        global: false // 缺省为 false
                    }
                },
                lineStyle: {
                    color: 'rgba(177,99,217,0.5)',
                },
                data: data.averageData
            },
        ]
    };
    chart.setOption(option, true);
}

//渲染方法-柱状图
function renderBar(chartType, data, that) {
    let chart;
    try {
        chart = echarts.init($(`#${chartType}`)[0], 'dark');
        that.charts[chartType] = chart;
    } catch (e) {

    }

    let option = {
        // title: {
        //     text: '出入库库量趋势',
        //     left: '0',
        //     top: '0',
        //     textStyle: {
        //         color: '#333',
        //     }
        // },
        legend: {
            data: data.legendData,
            textStyle: {
                color: '#666',
            },
            top: '0',
            left: '0',
        },
        tooltip: {
            trigger: 'axis',
        },
        grid: {
            top: '15%',
            left: '1%',
            right: '1%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: data.xAxisData,
                axisLabel: {
                    interval: 0, //强制显示文字
                },
                offset: 5,
                axisLine: {
                    show: false, //y轴线消失
                    onZero: false,
                    lineStyle: {
                        width: 1
                    }
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '',
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dotted',
                        color: '#ccc'
                    }
                },
                axisLine: {
                    show: false //y轴线消失
                },
                axisTick: {
                    show: false //y轴坐标点消失
                },
            },
            {
                type: 'value',
                name: '',
                axisLabel: {
                    show: false
                },
                axisLine: {
                    show: false //y轴线消失
                },
                axisTick: {
                    show: false //y轴坐标点消失
                },
            }
        ],
        series: [
            //顶部圆
            // {
            //     name: "",
            //     type: 'pictorialBar',
            //     symbolSize: [15, 10],
            //     symbolOffset: [0, -6],
            //     symbolPosition: 'end',
            //     z: 12,
            //     color: "#89dae8",
            //     data: [50, 108, 160, 100, 50, 108, 160, 100, 50, 108, 160, 100]
            // },
            //中间圆
            // {
            //     name: "",
            //     type: 'pictorialBar',
            //     symbolSize: [15, 10],
            //     symbolOffset: [0, -6],
            //     symbolPosition: 'end',
            //     z: 12,
            //     color: "#89dae8",
            //     data: [24, 49, 70, 60, 24, 49, 70, 60, 24, 49, 70, 60]
            // },
            //底部圆
            // {
            //     name: "",
            //     type: 'pictorialBar',
            //     symbolSize: [15, 10],
            //     symbolOffset: [0, -6],
            //     symbolPosition: 'end',
            //     z: 12,
            //     color: "#f48833",
            //     data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,]
            // },

            {
                name: data.legendData[0],
                type: 'bar',
                stack: '平均',
                barWidth: 15,
                label: {
                    show: true,
                    position: 'inside',
                    textStyle: {
                        color: '#fff'
                    },
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                // {offset: 0, color: '#F4C28C'},
                                // {offset: 1, color: '#f48833'}
                                {offset: 0, color: 'rgba(244,136,51,0.2)'},
                                {offset: 1, color: 'rgba(244,136,51,0.6)'}
                            ]
                        },
                    }
                },
                data: data.enterData
            },
            {
                name: data.legendData[1],
                type: 'bar',
                stack: '平均',
                barWidth: 15,
                label: {
                    show: true,
                    position: 'inside',
                    textStyle: {
                        color: '#fff'
                    },
                },
                itemStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [
                                // {offset: 0, color: '#A3E3E8'},
                                // {offset: 1, color: '#39bae8'}
                                {offset: 0, color: 'rgba(57,186,232,0.2)'},
                                {offset: 1, color: 'rgba(57,186,232,0.6)'}
                            ]
                        },
                    }
                },
                data: data.outData
            },
            {
                name: data.legendData[2],
                type: 'line',
                symbol: 'circle',
                symbolSize: 8,
                // smooth: true,
                smooth: 0.3,
                itemStyle: {
                    normal: {
                        color: '#B163D9'
                    }
                },
                data: data.averageData
            }
        ]

    };
    chart.setOption(option, true);
}

//渲染方法-圆环图
function renderPie(chartType, data, that) {
    let chart;
    try {
        chart = echarts.init($(`#${chartType}`)[0], 'dark');
        that.charts[chartType] = chart;
    } catch (e) {

    }

    const chartPieColors = [
        [
            {offset: 0, color: "rgba(89,181,255,1)"},
            {offset: 1, color: "rgba(34,99,189,0.5)"}
        ],
        [
            {offset: 0, color: "#FF9793"},
            {offset: 1, color: "rgba(231,80,76,0.5)"}
        ],
        [
            {offset: 0, color: "#AE60FA"},
            {offset: 1, color: "rgba(109,50,193,0.5)"}
        ],
        [
            {offset: 0, color: "#EFCE49"},
            {offset: 1, color: "rgba(215,156,18,0.5)"}
        ],
        [
            {offset: 0, color: "#FFB058"},
            {offset: 1, color: "rgba(197,102,37,0.5)"}
        ],
        [
            {offset: 0, color: "#4ACC88"},
            {offset: 1, color: "rgba(39,166,87,0.5)"}
        ],
        [
            {offset: 0, color: "#27BCC9"},
            {offset: 1, color: "rgba(44,152,158,0.5)"}
        ],
        [
            {offset: 0, color: "#8A98FF"},
            {offset: 1, color: "rgba(43,54,168,0.5)"}
        ],
        [
            {offset: 0, color: "#00CDCB"},
            {offset: 1, color: "rgba(6,206,203,0.5)"}
        ],
        [
            {offset: 0, color: "#068EFF"},
            {offset: 1, color: "rgba(0,64,196,0.5)"}
        ],
        [
            {offset: 0, color: "#0591E8"},
            {offset: 1, color: "rgba(0,106,191,0.5)"}
        ],
        [
            {offset: 0, color: "#47F0FF"},
            {offset: 1, color: "rgba(7,240,255,0.5)"}
        ]
    ];
    
    let seriesData = data.pieData.map((item, index) => {
        return {
            value: item.value,
            name: item.name,
            itemStyle: {
                borderWidth: 0,
                borderColor: "#182037",
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: chartPieColors[index > 8 ? Math.floor(Math.random() * 8 + 1) : index],
                    global: false
                }
            }
        };
    });

    let option = {
        tooltip: {
            trigger: 'item',
            // formatter: '{a} <br/>{b}: {c} ({d}%)'
            formatter: '{b}: {d}%'
        },
        legend: {
            orient: 'horizontal',
            x: 'center',
            y: '80%',
            textStyle: {
                color: '#666',
            },
            data: data.legendData
        },
        series: [
            {
                name: '',
                type: 'pie',
                radius: ['40%', '60%'],
                center: ['50%', '45%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'none',
                    textStyle: {
                        color: '#fff',
                        fontSize: '12',
                    },
                    formatter: (params) => {
                        return `${params.value}%`
                    }
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '14',
                        fontWeight: 'bold',
                    }
                },
                labelLine: {
                    show: false
                },
                data: seriesData
            },

            {
                radius: ['40%', '35%'],
                center: ['50%', '45%'],
                type: 'pie',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                animation: false,
                tooltip: {
                    show: false
                },
                data: [{
                    value: data.pieData.length > 0 ? 1 : [],
                    itemStyle: {
                        color: "#E6E9F0",
                    },
                }],
            }
        ]
    };
    chart.setOption(option, true);
}