import { 事件结算函数 } from "./事件.js";



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

export function 整数随机函数(最小值, 最大值) {
    return Math.floor(Math.random() * (最大值 - 最小值 + 1) + 最小值);
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
    const 游戏界面_事件_事件结算 = document.getElementById('游戏界面_事件_事件结算');

    

    

    游戏界面_信息_本次模拟信息_名字.innerHTML = 名字;
    游戏界面_信息_本次模拟信息_性别.innerHTML = 性别;
    游戏界面_信息_本次模拟信息_难度.innerHTML = 难度;

    人物属性初始化()

    游戏开局生成函数(难度,性别,名字)

}

export var 人物属性 = {
    "名字": "",
    "健康": 0,
    "健康上限": 100,
    "精神": 0,
    "精神上限": 100,
    "财富": 0,
    "年龄": 0,
    "体魄": 0,
    "智力": 0,
    "魅力": 0,
    "运气": 0,
    "武力": 0,
    "战力": 0,
    "状态":"",
    "寿命": 0,
}

function 人物属性初始化() {
    人物属性 = {
        "名字": "",
        "健康": 0,
        "健康上限": 100,
        "精神": 0,
        "精神上限": 100,
        "财富": 0,
        "年龄": 0,
        "体魄": 0,
        "智力": 0,
        "魅力": 0,
        "运气": 0,
        "武力": 0,
        "战力": 0,
        "状态":"",
        "寿命": 0,
    }
}


function 游戏开局生成函数(难度,性别,名字) {
    游戏开局属性生成函数(难度,名字)

    let 开局 = 整数随机函数(1,50)
    开局 = 开局 + 人物属性.运气
    var 开局id = ""

    if (开局 >= 1 && 开局 <= 10) {
        开局id = "Z1"
        事件结算元素生成函数(3800,开局id,性别)
    }
    else if (开局 >= 11 && 开局 <= 20) {
        开局id = "Z2"
        事件结算元素生成函数(3800,开局id,性别)
    }
    else if (开局 >= 21 && 开局 <= 30) {
        开局id = "Z3"
        事件结算元素生成函数(3800,开局id,性别)
    }
    else if (开局 >= 31 && 开局 <= 40) {
        开局id = "Z4"
        事件结算元素生成函数(3800,开局id,性别)
    }
    else if (开局 >= 41 ) {
        开局id = "Z5"
        事件结算元素生成函数(3800,开局id,性别)
    }

    

}



function 事件结算元素生成函数(time,事件结算id,性别) {
    const 游戏界面_事件 = document.getElementById('游戏界面_事件');

    let 事件结算元素 = document.createElement("div"); 
    事件结算元素.className = "游戏界面_事件_事件结算"
    事件结算元素.id = "游戏界面_事件_事件结算"
    游戏界面_事件.appendChild(事件结算元素);

    let 游戏界面_事件_事件结算_图片 = document.createElement("div");
    游戏界面_事件_事件结算_图片.className = "游戏界面_事件_事件结算_图片"
    游戏界面_事件_事件结算_图片.id = "游戏界面_事件_事件结算_图片"
    事件结算元素.appendChild(游戏界面_事件_事件结算_图片);

    let 游戏界面_事件_事件结算_事件 = document.createElement("div");
    游戏界面_事件_事件结算_事件.className = "游戏界面_事件_事件结算_事件"
    事件结算元素.appendChild(游戏界面_事件_事件结算_事件);

    let 游戏界面_事件_事件结算_事件_标题 = document.createElement("div");
    游戏界面_事件_事件结算_事件_标题.className = "游戏界面_事件_事件结算_事件_标题"
    游戏界面_事件_事件结算_事件_标题.id = "游戏界面_事件_事件结算_事件_标题"
    游戏界面_事件_事件结算_事件.appendChild(游戏界面_事件_事件结算_事件_标题);

    let 游戏界面_事件_事件结算_事件_内容 = document.createElement("div");
    游戏界面_事件_事件结算_事件_内容.className = "游戏界面_事件_事件结算_事件_内容"
    游戏界面_事件_事件结算_事件_内容.id = "游戏界面_事件_事件结算_事件_内容"
    游戏界面_事件_事件结算_事件.appendChild(游戏界面_事件_事件结算_事件_内容);

    let 游戏界面_事件_事件结算_事件_结果 = document.createElement("div");
    游戏界面_事件_事件结算_事件_结果.className = "游戏界面_事件_事件结算_事件_结果"
    游戏界面_事件_事件结算_事件_结果.id = "游戏界面_事件_事件结算_事件_结果"
    游戏界面_事件_事件结算_事件.appendChild(游戏界面_事件_事件结算_事件_结果);


    事件结算函数(事件结算id,性别)


    setTimeout(() => {
        事件结算元素.style.display = 'flex';
    }, time);
}


function 游戏开局属性生成函数(难度,名字) {
    人物属性.名字 = 名字;
    人物属性.年龄 = 0;
    人物属性.体魄 = 1;
    人物属性.智力 = 1;
    人物属性.魅力 = 1;
    人物属性.武力 = 0;
    人物属性.战力 = 人物属性.体魄 + 人物属性.武力;
    人物属性.状态 = "健康";
    人物属性.寿命 = 100;
    
    if (难度 == "简单") {
        人物属性.健康 = 人物属性.健康上限 * 1;
        人物属性.精神 = 人物属性.精神上限 * 1;
        人物属性.财富 = 300;
        人物属性.运气 = 10;
        
    }
    else if (难度 == "普通") {
        人物属性.健康 = 人物属性.健康上限 * 0.8;
        人物属性.精神 = 人物属性.精神上限 * 0.8;
        人物属性.财富 = 100;
        人物属性.运气 = 0;
    }
    else if (难度 == "困难") {
        人物属性.健康 = 人物属性.健康上限 * 0.5;
        人物属性.精神 = 人物属性.精神上限 * 0.5;
        人物属性.财富 = 0;
        人物属性.运气 = -10;
    }

    人物属性更新函数()




}

export function 人物属性更新函数() {
    const 游戏界面属性显示_健康 = document.getElementById('游戏界面属性显示_健康');
    const 游戏界面属性显示_精神 = document.getElementById('游戏界面属性显示_精神');
    const 游戏界面属性显示_财富 = document.getElementById('游戏界面属性显示_财富');
    const 游戏界面属性显示_年龄 = document.getElementById('游戏界面属性显示_年龄');
    const 游戏界面属性显示_体魄 = document.getElementById('游戏界面属性显示_体魄');
    const 游戏界面属性显示_智力 = document.getElementById('游戏界面属性显示_智力');
    const 游戏界面属性显示_魅力 = document.getElementById('游戏界面属性显示_魅力');
    const 游戏界面属性显示_运气 = document.getElementById('游戏界面属性显示_运气');
    const 游戏界面属性显示_武力 = document.getElementById('游戏界面属性显示_武力');
    const 游戏界面属性显示_战力 = document.getElementById('游戏界面属性显示_战力');
    const 游戏界面属性显示_状态 = document.getElementById('游戏界面属性显示_状态');
    const 游戏界面属性显示_寿命 = document.getElementById('游戏界面属性显示_寿命');

    游戏界面属性显示_健康.innerHTML = "健康: " + 人物属性.健康 + "/" + 人物属性.健康上限;
    游戏界面属性显示_精神.innerHTML = "精神: " + 人物属性.精神 + "/" + 人物属性.精神上限;
    游戏界面属性显示_财富.innerHTML = "财富: " + 人物属性.财富;
    游戏界面属性显示_年龄.innerHTML = "年龄: " + 人物属性.年龄;
    游戏界面属性显示_体魄.innerHTML = "体魄: " + 人物属性.体魄;
    游戏界面属性显示_智力.innerHTML = "智力: " + 人物属性.智力;
    游戏界面属性显示_魅力.innerHTML = "魅力: " + 人物属性.魅力;
    游戏界面属性显示_运气.innerHTML = "运气: " + 人物属性.运气;
    游戏界面属性显示_武力.innerHTML = "武力: " + 人物属性.武力;
    游戏界面属性显示_战力.innerHTML = "战力: " + 人物属性.战力;
    游戏界面属性显示_状态.innerHTML = "状态: " + 人物属性.状态;
    游戏界面属性显示_寿命.innerHTML = "寿命: " + 人物属性.寿命;
}
