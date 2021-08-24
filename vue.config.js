module.exports = {
    
    publicPath:process.env.NODE_ENV === 'production' ? './dist/' : '/',

    //基本路径
    // publicPath: './',//默认的'/'是绝对路径，如果不确定在根路径，改成相对路径'./'
    // 输出文件目录
    outputDir: 'dist',
    assetsDir: 'assets',
    indexPath: 'index.html',
};
