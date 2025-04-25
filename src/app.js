import { 过场动画开始, 弹窗函数, 游戏开始函数 } from "./函数库.js";

const 初始界面 = document.getElementById('初始界面');
const 开局选项 = document.getElementById('开局选项');
const 游戏界面 = document.getElementById('游戏界面');
const 弹窗 = document.getElementById('弹窗');




const 初始界面_按钮_开始 = document.getElementById('初始界面_按钮_开始');
初始界面_按钮_开始.addEventListener('click', () => {

    过场动画开始("logo");


    setTimeout(() => {
        初始界面.style.display = 'none';
        开局选项.style.display = 'flex';
    }, 1500);
    
});

const 初始界面_按钮_天赋 = document.getElementById('初始界面_按钮_天赋');
初始界面_按钮_天赋.addEventListener('click', () => {
    弹窗函数("天赋功能暂未开放!");
});

const 初始界面_按钮_数据 = document.getElementById('初始界面_按钮_数据');
初始界面_按钮_数据.addEventListener('click', () => {
    弹窗函数("数据功能暂未开放!");
});

const 初始界面_按钮_设置 = document.getElementById('初始界面_按钮_设置');
初始界面_按钮_设置.addEventListener('click', () => {
    弹窗函数("设置功能暂未开放!");
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
    const 开局选项_选项_性别 = document.getElementById('开局选项_选项_性别');
    const 开局选项_选项_难度 = document.getElementById('开局选项_选项_难度');
    const 游戏界面_信息_本次模拟信息_名字 = document.getElementById('游戏界面_信息_本次模拟信息_名字');

    if (开局选项_选项_名字.value === '') {
        弹窗函数("名字不能为空!");
    }
    else {
        过场动画开始("游戏开始!");
        var 名字 = 开局选项_选项_名字.value;
        var 性别 = 开局选项_选项_性别.value;
        var 难度 = 开局选项_选项_难度.value;

        if (性别 === '随机') {
            性别 = Math.random() < 0.5 ? '男性' : '女性';
        }

        if (名字.length > 3) {
            游戏界面_信息_本次模拟信息_名字.style.fontSize = '1vmax';
        }

        游戏开始函数(名字, 性别, 难度);
        setTimeout(() => {
            游戏界面.style.display = 'flex';
            开局选项.style.display = 'none';
        }, 1000);

    }

});



const 弹窗_关闭 = document.getElementById('弹窗_关闭');
弹窗_关闭.addEventListener('click', () => {
    弹窗.style.display = 'none';
});








































