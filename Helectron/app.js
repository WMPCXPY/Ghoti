// --- 主要依赖 ---

// 载入electron模块
const electron = require("electron");
// 创建应用程序对象
const app = electron.app;
// 创建一个浏览器窗口，主要用来加载HTML页面
const BrowserWindow = electron.BrowserWindow;

// --- 其他依赖 ---

// 在需要窗口的时候用ipc打开
var ipc = require('ipc');

// --- 窗口 ---
// 声明一个BrowserWindow对象实例
let mainWindow;


//定义一个创建浏览器窗口的方法
function createWindow() {
    // 创建一个浏览器窗口对象，并指定窗口的大小
    // 1024×768 合理的窗口大小
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768
    });

    // 通过浏览器窗口对象加载index.html文件，同时也是可以加载一个互联网地址的
    // 同时也可以简化成：mainWindow.loadURL('./index.html');
    mainWindow.loadURL('file://' + __dirname + '/src/windows/main/main.html');
    // mainWindow.loadURL('http://www.sushithedog.com');
    // 打开程序的同时打开开发者工具
    mainWindow.openDevTools();
    // 监听浏览器窗口对象是否关闭，关闭之后直接将mainWindow指向空引用，也就是回收对象内存空间
    mainWindow.on("closed", function () {
        mainWindow = null;
    });
}

// 通知主进程打开窗口
// ipc.on('toggle-test-view', function () {
//     if (!mainWindow) {
//         createWindow();
//     }

//     // isClosed()：返回一个布尔值，指示窗口当前是否是 closed 状态
//     // isVisible()：返回一个布尔值，指示窗口当前是否可见
//     // show() / hide()：方便显示及隐藏窗口的方法
//     return (!mainWindow.isClosed() && mainWindow.isVisible()) ? mainWindow.hide() : mainWindow.show();
// });

// 监听应用程序对象是否初始化完成，初始化完成之后即可创建浏览器窗口
app.on("ready", createWindow);

// 监听应用程序对象中的所有浏览器窗口对象是否全部被关闭，如果全部被关闭，则退出整个应用程序。该
app.on("window-all-closed", function () {
    // 判断当前操作系统是否是window系统，因为这个事件只作用在window系统中
    if (process.platform != "darwin") {
        // 退出整个应用程序
        app.quit();
    }
});

// 监听应用程序图标被通过点或者没有任何浏览器窗口显示在桌面上，那我们应该重新创建并打开浏览器窗口，避免Mac OS X系统回收或者销毁浏览器窗口
app.on("activate", function () {
    if (mainWindow === null) {
        createWindow();
    }
});