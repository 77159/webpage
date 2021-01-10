let Index = {

    data: {},

    //初始化
    init() {
        this.charts = {};
        Common.chartsResize(this.charts);
    },

    //初始化页面布局
    initLayout: function () {
        let w = Common.getUrlParams('width') ? Common.getUrlParams('width') : '100%';
        let h = Common.getUrlParams('height') ? Common.getUrlParams('height') : '300px';
        let t = Common.getUrlParams('type') ? Common.getUrlParams('type') : 'line';
        let html = '';
        html += '<div class="model" style="width: ' + w + '; height: ' + h + ';"><div id="' + t + '" class="chartDetail"></div></div>';
        $('#container').html(html);
        this.getData(t);
    },

    /**
     * 请求数据，数据回来之后渲染
     * @param chartType 图表类型
     */
    getData(chartType) {
        let d = '';
        this.renderFun(chartType, d, 1);
    },

    /**
     * 判断通过哪种图表方法渲染
     * @param chartType 图表类型
     * @param data 图表数据
     * @param dateType 入参类型
     *
     * line 折线图
     *
     *
     */
    renderFun(chartType, data, dateType) {

        let d = '';
        try {
            d = $.parseJSON(JSON.parse(JSON.stringify(data)))
        } catch (e) {

        }

        d = [
            {
                "platformName": "死数据1",
                "reservationTotal": 15,
                "finishedNumber": 13,
                "achievementRate": 25
            }, {
                "platformName": "死数据2",
                "reservationTotal": 15,
                "finishedNumber": 15,
                "achievementRate": 29
            }, {
                "platformName": "死数据3",
                "reservationTotal": 40,
                "finishedNumber": 23,
                "achievementRate": 45
            }
        ]

        console.log('data:', data);
        console.log('d:', d);

        if (chartType == 'line') {

            let chartData = {
                legendData: [],
                xAxisData: [],
                enterData: [],
                outData: [],
                averageData: [],
            };
            chartData.legendData = ['入库', '出库', '平均'];

            if (d.list) {
                if (dateType == 1) {
                    chartData.xAxisData = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

                    let temp = [];
                    chartData.xAxisData.forEach((item, index) => {
                        temp.push({tempDate: index + 1, enterData: 0, outData: 0, averageData: 0});
                    });

                    Index.testFunLine(temp, d.list, chartData);

                } else if (dateType == 2) {
                    let m = new Date().getMonth() + 1;
                    let md = 30;
                    if (m == 2) {
                        md = 28
                    }
                    for (let i = 1; i <= md; i++) {
                        if (i % 3 == 0) {
                            chartData.xAxisData.push(i + '日');
                        }
                    }

                    let temp = [];
                    chartData.xAxisData.forEach((item, index) => {
                        temp.push({tempDate: Number(item.split('日')[0]), enterData: 0, outData: 0, averageData: 0});
                    });

                    Index.testFunLine(temp, d.list, chartData);

                } else if (dateType == 3) {
                    chartData.xAxisData = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

                    let temp = [];
                    chartData.xAxisData.forEach((item, index) => {
                        temp.push({tempDate: Number(item.split('月')[0]), enterData: 0, outData: 0, averageData: 0});
                    });

                    Index.testFunLine(temp, d.list, chartData);
                }
            }

            renderLine(chartType, chartData, this);
        } else if (chartType == 'bar') {

            let chartData = {
                legendData: [],
                xAxisData: [],
                enterData: [],
                outData: [],
                averageData: [],
            };
            chartData.legendData = ['入库', '出库', '累计'];

            if (d.list) {
                if (dateType == 1) {
                    chartData.xAxisData = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

                    let temp = [];
                    chartData.xAxisData.forEach((item, index) => {
                        temp.push({tempDate: index + 1, enterData: 0, outData: 0, averageData: 0});
                    });

                    Index.testFunBar(temp, d.list, chartData);

                } else if (dateType == 2) {
                    let m = new Date().getMonth() + 1;
                    let md = 30;
                    if (m == 2) {
                        md = 28
                    }
                    for (let i = 1; i <= md; i++) {
                        if (i % 3 == 0) {
                            chartData.xAxisData.push(i + '日');
                        }
                    }

                    let temp = [];
                    chartData.xAxisData.forEach((item, index) => {
                        temp.push({tempDate: Number(item.split('日')[0]), enterData: 0, outData: 0, averageData: 0});
                    });

                    Index.testFunBar(temp, d.list, chartData);

                } else if (dateType == 3) {
                    chartData.xAxisData = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

                    let temp = [];
                    chartData.xAxisData.forEach((item, index) => {
                        temp.push({tempDate: Number(item.split('月')[0]), enterData: 0, outData: 0, averageData: 0});
                    });

                    Index.testFunBar(temp, d.list, chartData);
                }
            }

            renderBar(chartType, chartData, this);
        } else if (chartType == 'pie') {

            let chartData = {
                legendData: [],
                pieData: [],
            };

            if (d) {
                d.forEach((item, index) => {
                    chartData.legendData.push(item.platformName);
                    chartData.pieData.push({name: item.platformName, value: item.achievementRate})
                })
            }
            renderPie(chartType, chartData, this);
        }
    },

    testFunLine(temp, d, chartData) {
        temp.forEach((item, index) => {
            d.forEach((item2, index2) => {
                if (item.tempDate == item2.reserveDate) {
                    item.enterData = item2.inAchievementRate;
                    item.outData = item2.outAchievementRate;
                    item.averageData = item2.achievementRateTotal;
                }
            })
        });
        temp.forEach((item, index) => {
            chartData.enterData.push(item.enterData);
            chartData.outData.push(item.outData);
            chartData.averageData.push(item.averageData);
        })
    },

    testFunBar(temp, d, chartData) {
        temp.forEach((item, index) => {
            d.forEach((item2, index2) => {
                if (item.tempDate == item2.reserveDate) {
                    item.enterData = item2.inReservationFinishedNumber;
                    item.outData = item2.outReservationFinishedNumber;
                    item.averageData = item2.finishedTotal;
                }
            })
        });
        temp.forEach((item, index) => {
            chartData.enterData.push(item.enterData);
            chartData.outData.push(item.outData);
            chartData.averageData.push(item.averageData);
        })
    }

};

// 数据加载完成执行：
$(function () {
    Index.init();
    Index.initLayout();
});

window.renderFun = Index.renderFun;