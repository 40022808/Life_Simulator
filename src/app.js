import { 过场动画开始, 弹窗函数 } from "./函数库.js";

const 初始界面 = document.getElementById('初始界面');
const 开局选项 = document.getElementById('开局选项');
const 弹窗 = document.getElementById('弹窗');




const 初始界面_按钮_开始 = document.getElementById('初始界面_按钮_开始');
初始界面_按钮_开始.addEventListener('click', () => {

    过场动画开始("开局选项");


    setTimeout(() => {
        初始界面.style.display = 'none';
        开局选项.style.display = 'flex';
    }, 1500);
    
});

const 开局选项_按钮_返回 = document.getElementById('开局选项_按钮_返回');
开局选项_按钮_返回.addEventListener('click', () => {
    过场动画开始("返回主菜单");
    setTimeout(() => {
        开局选项.style.display = 'none';
        初始界面.style.display = 'flex';
    }, 1500);
});

const 开局选项_按钮_开始 = document.getElementById('开局选项_按钮_开始');
开局选项_按钮_开始.addEventListener('click', () => {
    const 开局选项_选项_名字 = document.getElementById('开局选项_选项_名字');
    
    if (开局选项_选项_名字.value === '') {
        弹窗函数("请输入你的名字");
    }

});



const 弹窗_关闭 = document.getElementById('弹窗_关闭');
弹窗_关闭.addEventListener('click', () => {
    弹窗.style.display = 'none';
});








































