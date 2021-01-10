(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    var contrastColor = '#ccc';
    var axisCommon = function () {
        return {
            axisLine: {
                lineStyle: {
                    color: contrastColor
                }
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: contrastColor,
                }
            },
            axisLabel: {
                textStyle: {
                    color: contrastColor
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    type: 'dashed',
                    color: '#aaa',
                }
            },
            splitArea: {
                areaStyle: {
                    color: contrastColor
                }
            }
        };
    };

    // var colorPalette = ['#dd6b66','#759aa0','#e69d87','#8dc1a9','#ea7e53','#eedd78','#73a373','#73b9bc','#7289ab', '#91ca8c','#f49f42'];
    // var colorPalette = ['#99fdfe','#8474f9','#fd589a','#ff7272','#fba669','#fbd769','#ceff6b','#a1bd57','#08fbdf','#68c0ff', '#4274f4','#556285'];
    var colorPalette = [
        '#f48833','#39bae8','#b163d9',
        '#1E90FF','#00BFFF','#87CEFA','#00F5FF','#ADD8E6',
        '#3c78d8','#4a86e8','#0099ff','#00ccff','#00cccc',
        '#4C87B9','#4B77BE',  '#5C9BD1','#3598DC',
        '#32C5D2', '#36D7B7', '#759c6a', '#bfd3b7',
        '#6DCDE6','#4366F3','#8651F4','#FF8200',
        '#ffffd2','#fcbad3','#aa96da','#a8d8ea',
        '#95e1d3','#eaffd0','#fce38a','#f38181',
        '#ff8c94','#ffaaa6', '#ffd3b5','#dcedc2',
        ];
    var theme = {
        color: colorPalette,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        tooltip: {
            show: true,
            axisPointer: {
                lineStyle: {
                    color: contrastColor
                },
                crossStyle: {
                    color: contrastColor
                }
            },
            confine: true,  //在该div中显示
        },
        legend: {
            textStyle: {
                color: contrastColor
            }
        },
        textStyle: {
            color: contrastColor
        },
        title: {
            textStyle: {
                color: contrastColor
            }
        },
        toolbox: {
            iconStyle: {
                normal: {
                    borderColor: contrastColor
                }
            }
        },
        dataZoom: {
            textStyle: {
                color: contrastColor
            }
        },
        timeline: {
            lineStyle: {
                color: contrastColor
            },
            itemStyle: {
                normal: {
                    color: colorPalette[1]
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: contrastColor
                    }
                }
            },
            controlStyle: {
                normal: {
                    color: contrastColor,
                    borderColor: contrastColor
                }
            }
        },
        timeAxis: axisCommon(),
        logAxis: axisCommon(),
        valueAxis: axisCommon(),
        categoryAxis: axisCommon(),

        line: {
            symbol: 'circle'
        },
        graph: {
            color: colorPalette
        },
        gauge: {
            title: {
                textStyle: {
                    color: contrastColor
                }
            }
        },
        candlestick: {
            itemStyle: {
                normal: {
                    color: '#FD1050',
                    color0: '#0CF49B',
                    borderColor: '#FD1050',
                    borderColor0: '#0CF49B'
                }
            }
        }
    };
    theme.categoryAxis.splitLine.show = false;
    echarts.registerTheme('dark', theme);
}));