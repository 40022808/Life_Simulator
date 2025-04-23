


// 过场动画开始函数
export function 过场动画开始(text) {
    const 过场动画 = document.getElementById('过场动画');
    const 过场动画_文字_h1 = document.getElementById('过场动画_文字_h1');
    过场动画_文字_h1.innerHTML = text;
    过场动画.style.display = 'block';
    setTimeout(() => {
        过场动画.style.display = 'none';
    }, 5000);
}



export function 弹窗函数(text) {
    const 弹窗 = document.getElementById('弹窗');
    const 弹窗_text = document.getElementById('弹窗_text');

    弹窗.style.display = 'flex';
    弹窗_text.innerHTML = text;

}