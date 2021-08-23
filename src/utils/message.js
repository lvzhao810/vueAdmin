import {MessageBox, Message} from 'element-ui'

const message = (msg, type) => {
    Message({
        showClose: true,
        message: msg,
        type: type
    });
}
//成功
const success = (msg) => {
    message(msg, 'success');
}
//消息
const info = (msg) => {
    message(msg, 'info');
}
//错误
const error = (msg) => {
    message(msg, 'error');
}
//警告
const warning = (msg) => {
    message(msg, 'warning');
}

//ElMessageBox
const alert = ({title, msg, okBtnText, func}) => {
    if (!title) {
        title = '提示';
    }
    if (!msg) {
        msg = '错误';
    }
    if (!okBtnText) {
        okBtnText = '确定';
    }
    MessageBox.alert(msg, title, {
        confirmButtonText: okBtnText,
    }).then(func ? func : () => {})
}

const confirm = ({title, msg, func, cFunc}) => {
    MessageBox.confirm(msg, title ? title:'提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
    }).then(func ? func : () => {}).catch(cFunc ? cFunc : () => {});
}

export default {
    message,
    success,
    info,
    error,
    warning,
    alert,
    confirm,
}