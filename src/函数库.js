


// 过场动画开始函数
export function 过场动画开始(text) {
    const 过场动画 = document.getElementById('过场动画');
    const 过场动画_文字_h1 = document.getElementById('过场动画_文字_h1');

    if (text === 'logo') {
        过场动画_文字_h1.classList.add('logo');
    }
    else {
        过场动画_文字_h1.innerHTML = text;
    }
    
    
    过场动画.style.display = 'block';
    setTimeout(() => {
        过场动画.style.display = 'none';
        过场动画_文字_h1.innerHTML = '';
        过场动画_文字_h1.classList.remove('logo');
    }, 3500);
}



export function 弹窗函数(text) {
    const 弹窗 = document.getElementById('弹窗');
    const 弹窗_text = document.getElementById('弹窗_text');

    弹窗.style.display = 'flex';
    弹窗_text.innerHTML = text;

}

export function 游戏开始函数(名字, 性别, 难度) {
    const 游戏界面_信息_本次模拟信息_难度 = document.getElementById('游戏界面_信息_本次模拟信息_难度');
    const 游戏界面_信息_本次模拟信息_名字 = document.getElementById('游戏界面_信息_本次模拟信息_名字');
    const 游戏界面_信息_本次模拟信息_性别 = document.getElementById('游戏界面_信息_本次模拟信息_性别');

    游戏界面_信息_本次模拟信息_名字.innerHTML = 名字;
    游戏界面_信息_本次模拟信息_性别.innerHTML = 性别;
    游戏界面_信息_本次模拟信息_难度.innerHTML = 难度;


}