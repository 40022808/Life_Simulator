import { 过场动画开始, 弹窗函数, 游戏开始函数, 默认性别函数, 设置保存函数, 默认难度函数, 词条读取函数, 人物属性, 词条描述读取函数, 打开设置界面函数, 游戏内数据, 游戏内数据更新函数 } from "./函数库.js";
import { 临时记住游戏名, 读取游戏名 } from "./数据.js";

const 初始界面 = document.getElementById('初始界面');
const 开局选项 = document.getElementById('开局选项');
const 游戏界面 = document.getElementById('游戏界面');
const 弹窗 = document.getElementById('弹窗');




///////////////////////////开局加载//////////////////////////////////////
默认性别函数()
默认难度函数()
///////////////////////////开局加载//////////////////////////////////////



const 初始界面_按钮_开始 = document.getElementById('初始界面_按钮_开始');
初始界面_按钮_开始.addEventListener('click', () => {

    过场动画开始("logo");

    读取游戏名();
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
    打开设置界面函数();
});

const 设置界面_box_按钮 = document.getElementById('设置界面_box_按钮');
设置界面_box_按钮.addEventListener('click', () => {
    const 设置界面 = document.getElementById('设置界面');
    设置界面.style.display = 'none';
});

const 游戏界面_信息_游戏内设置 = document.getElementById('游戏界面_信息_游戏内设置');
游戏界面_信息_游戏内设置.addEventListener('click', () => {
    打开设置界面函数();
});

const 开局选项_按钮_返回 = document.getElementById('开局选项_按钮_返回');
开局选项_按钮_返回.addEventListener('click', () => {
    过场动画开始("返回主菜单");
    临时记住游戏名()
    setTimeout(() => {
        开局选项.style.display = 'none';
        初始界面.style.display = 'flex';
    }, 1500);
});

const 设置界面_box_保存_按钮 = document.getElementById('设置界面_box_保存_按钮');
设置界面_box_保存_按钮.addEventListener('click', () => {
    const 设置界面_box_保存_反馈 = document.getElementById('设置界面_box_保存_反馈');

    设置界面_box_保存_反馈.style.display = 'block';

    setTimeout(() => {
        设置界面_box_保存_反馈.style.display = 'none';
    }, 3000);

    设置保存函数();

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
        临时记住游戏名()
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





const 游戏界面_按钮_按钮栏_词条 = document.getElementById('游戏界面_按钮_按钮栏_词条');
游戏界面_按钮_按钮栏_词条.addEventListener('click', () => {
    const 游戏界面_词条窗口 = document.getElementById('游戏界面_词条窗口');
    游戏界面_词条窗口.style.display = 'flex';

    词条读取函数()
});

const 游戏界面_词条窗口_box_上半部分_关闭 = document.getElementById('游戏界面_词条窗口_box_上半部分_关闭');
游戏界面_词条窗口_box_上半部分_关闭.addEventListener('click', () => {
    const 游戏界面_词条窗口 = document.getElementById('游戏界面_词条窗口');
    const 游戏界面_词条窗口_box_下半部分_描述 = document.getElementById("游戏界面_词条窗口_box_下半部分_描述");
    游戏界面_词条窗口.style.display = 'none';
    游戏界面_词条窗口_box_下半部分_描述.innerHTML = "请选择一个词条进行查看。";
});


const 游戏界面_词条窗口_box_下半部分_词条 = document.getElementById("游戏界面_词条窗口_box_下半部分_词条");
游戏界面_词条窗口_box_下半部分_词条.addEventListener("click", (event) => {
    if (event.target.classList.contains("游戏界面_词条窗口_box_下半部分_词条_名称")) {

        词条描述读取函数(event.target.id)
    }
});



const 游戏界面_按钮_按钮栏_策略 = document.getElementById('游戏界面_按钮_按钮栏_策略');
游戏界面_按钮_按钮栏_策略.addEventListener('click', () => {
    const 游戏界面_策略窗口 = document.getElementById('游戏界面_策略窗口');
    游戏界面_策略窗口.style.display = 'flex';
});

const 游戏界面_策略窗口_box_上半部分_关闭 = document.getElementById('游戏界面_策略窗口_box_上半部分_关闭');
游戏界面_策略窗口_box_上半部分_关闭.addEventListener('click', () => {
    const 游戏界面_策略窗口 = document.getElementById('游戏界面_策略窗口');
    游戏界面_策略窗口.style.display = 'none';
});




const 策略加减按钮_健康_减 = document.getElementById('策略加减按钮_健康_减');
策略加减按钮_健康_减.addEventListener('click', () => {
    if (游戏内数据.策略_健康 > 0) {
        游戏内数据.策略_健康 = 游戏内数据.策略_健康 - 1;
        游戏内数据更新函数();
    }
    
});

const 策略加减按钮_健康_加 = document.getElementById('策略加减按钮_健康_加');
策略加减按钮_健康_加.addEventListener('click', () => {
    if (游戏内数据.策略_健康 < 10) {
        游戏内数据.策略_健康 = 游戏内数据.策略_健康 + 1;
        游戏内数据更新函数();
    }
});

const 策略加减按钮_娱乐_减 = document.getElementById('策略加减按钮_娱乐_减');
策略加减按钮_娱乐_减.addEventListener('click', () => {
    if (游戏内数据.策略_精神 > 0) {
        游戏内数据.策略_精神 = 游戏内数据.策略_精神 - 1;
        游戏内数据更新函数();
    }
});

const 策略加减按钮_娱乐_加 = document.getElementById('策略加减按钮_娱乐_加');
策略加减按钮_娱乐_加.addEventListener('click', () => {
    if (游戏内数据.策略_精神 < 10) {
        游戏内数据.策略_精神 = 游戏内数据.策略_精神 + 1;
        游戏内数据更新函数();
    }
});




















