export default {
    // 时间不够十位数自动补0
  add0(m) {
      return m < 10 ? '0' + m : m
  },
// 中国标准时间format yyyy-mm-dd hh:mm:ss
  format(time) {
      let date = new Date(time); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      let Y,M,D,h,m,s;
      Y = date.getFullYear();
      M = date.getMonth() + 1;
      D = date.getDate();
      h = date.getHours();
      m = date.getMinutes();
      s = date.getSeconds();
      // this.nowTime = this.add0(Y) + '-' + this.add0(M) + '-' + this.add0(D) + ' ' + this.add0(h) + ':' + this.add0(m) + ':' + this.add0(s);
      return this.add0(Y) + '-' + this.add0(M) + '-' + this.add0(D) + ' ' + this.add0(h) + ':' + this.add0(m) + ':' + this.add0(s);
  },

  getTimeState() {
    // 获取当前时间
    let timeNow = new Date() // 获取当前小时
    let hours = timeNow.getHours() // 设置默认文字
    let text = `` // 判断当前时间段
    if (hours >= 0 && hours < 9) {
      text = `早上好`
    } else if (hours >= 9 && hours < 11) {
      text = `上午好`
    } else if (hours >= 11 && hours < 13) {
      text = `中午好`
    } else if (hours >= 13 && hours < 18) {
      text = `下午好`
    } else if (hours >= 18 && hours < 24) {
      text = `晚上好`
    }
    console.log(`hours >>>>>`, hours)
    console.log(`text >>>>`, text) // 返回当前时间段对应的状态
    return text
  },
}

