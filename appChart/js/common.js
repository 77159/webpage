const Common = {

    //页面缩放
    pageResize() {
        let width = document.documentElement.clientWidth / 16;
        let styleN = document.createElement('style');
        styleN.innerHTML = 'html{font-size: ' + width + 'px !important;}';
        document.head.appendChild(styleN);
    },

    /**
     * 图表缩放
     * @param charts
     * @param param
     */
    chartsResize(charts, param) {
        $(window).resize(() => {
            Object.keys(charts).forEach(id => {
                if (param && param.notResize.includes(id)) {
                    return
                }
                charts[id].resize();
            })
        });
    },

    /**
     * 获取地址栏参数
     * @param name key
     * @returns {string|null}
     */
    getUrlParams(name) {
        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        let r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    },

    /**
     * 两个数之间的随机整数
     * @param num1
     * @param num2
     * @returns {number}
     */
    randomNum(num1, num2) {
        return Math.floor(Math.random() * (num2 - num1) + num1);
    },

};

Common.pageResize();

$(window).resize(() => {
    Common.pageResize();
});
