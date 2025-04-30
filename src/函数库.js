import { 事件结算函数 } from "./事件.js";



// 过场动画开始函数
export function 过场动画开始(text) {
    const 过场动画 = document.getElementById('过场动画');
    const 过场动画_文字_h1 = document.getElementById('过场动画_文字_h1');

    
    过场动画.style.display = 'block';

    if (text === 'logo') {
        过场动画_文字_h1.classList.add('logo');
    } else if (text === '随机') {
        随机文本生成函数(过场动画_文字_h1)
    } else {
        动态调整文本大小_根据屏幕(text, 过场动画_文字_h1);
    }

    
    setTimeout(() => {
        过场动画.style.display = 'none';
        过场动画_文字_h1.innerHTML = '';
        过场动画_文字_h1.classList.remove('logo');
    }, 3500);
}

const 随机文本 = ["Ciallo～(∠・ω<)⌒★","设置里可以调整默认难度哦~","设置里可以调整默认难度哦~",
    "(*´∀`)~♥","(*´･д･)?","健康掉到零以下也不要慌哦，只要在回合结束前恢复回来就行了","健康掉到零以下也不要慌哦，只要在回合结束前恢复回来就行了",
    "记得要根据财富调整策略哦","记得要根据财富调整策略哦","如果觉得太难了，可以降低难度试试","如果觉得太难了，可以降低难度试试","在模拟中表现的越好，分数就越高",
    "在模拟中表现的越好，分数就越高","分数越高，获得的天赋点就越多","分数越高，获得的天赋点就越多","难度越高，获得的天赋点就越多","难度越高，获得的天赋点就越多"
]

function  随机文本生成函数(容器) {
    

    var 随机文本数量 = 随机文本.length;
    var 随机索引 = 整数随机函数(0, 随机文本数量 - 1);
    var 随机文本内容 = 随机文本[随机索引];
    动态调整文本大小_根据屏幕(随机文本内容, 容器);
}


function 动态调整文本大小_根据屏幕(text, element) {
    const tempSpan = document.createElement("span");
    tempSpan.style.visibility = "hidden";
    tempSpan.style.whiteSpace = "nowrap";
    tempSpan.innerHTML = text;
    document.body.appendChild(tempSpan);

    let fontSize = window.innerWidth * 0.1; // 初始字体大小为屏幕宽度的 10%
    tempSpan.style.fontSize = `${fontSize}px`;

    const targetWidth = window.innerWidth * 0.7; // 目标宽度是屏幕宽度的 70%

    while (tempSpan.offsetWidth > targetWidth || tempSpan.offsetHeight > window.innerHeight) {
        fontSize--;
        tempSpan.style.fontSize = `${fontSize}px`;
        if (fontSize <= 10) break; // 防止字体过小
    }

    document.body.removeChild(tempSpan);
    element.style.fontSize = `${fontSize}px`;
    element.innerHTML = text;
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
    游戏内数据.回合数 = 1;

    游戏内数据更新函数()
    游戏开局生成函数(难度,性别,名字)

}

export const 空格符号 = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"

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
    "词条": [],
}

export var 游戏内数据 = {
    "回合数": 0,
    "策略_健康":5,
    "策略_精神":5,
    "是否可以结束回合": "否",
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
        "词条": [],

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


    事件结算函数(事件结算id,性别,time)


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


export function 默认性别函数() {
    const 开局选项_选项_性别 = document.getElementById('开局选项_选项_性别');
    const 设置界面_默认性别_选择框 = document.getElementById('设置界面_默认性别_选择框');

    var 默认性别 = localStorage.getItem("默认性别") || "随机";
    开局选项_选项_性别.value = 默认性别;
    设置界面_默认性别_选择框.value = 默认性别;
}

export function 默认难度函数() {
    const 开局选项_选项_难度 = document.getElementById('开局选项_选项_难度');
    const 设置界面_默认难度_选择框 = document.getElementById('设置界面_默认难度_选择框');

    var 默认难度 = localStorage.getItem("默认难度") || "简单";
    开局选项_选项_难度.value = 默认难度;
    设置界面_默认难度_选择框.value = 默认难度;
}

export function 打开设置界面函数() {
    const 设置界面 = document.getElementById('设置界面');
    设置界面.style.display = 'flex';
    默认性别函数()
    默认难度函数()
}

export function 设置保存函数() {

    const 设置界面_默认性别_选择框 = document.getElementById('设置界面_默认性别_选择框');
    localStorage.setItem("默认性别", 设置界面_默认性别_选择框.value);
    默认性别函数()

    const 设置界面_默认难度_选择框 = document.getElementById('设置界面_默认难度_选择框');
    localStorage.setItem("默认难度", 设置界面_默认难度_选择框.value);
    默认难度函数()
}

export function 词条读取函数() {
    const 游戏界面_词条窗口_box_下半部分_词条 = document.getElementById("游戏界面_词条窗口_box_下半部分_词条");

    游戏界面_词条窗口_box_下半部分_词条.innerHTML = "";
    
    for (let i = 0; i < 人物属性.词条.length; i++) {
        
        const 词条元素 = document.createElement("div");
        词条元素.className = "游戏界面_词条窗口_box_下半部分_词条_名称";
        词条元素.id = 人物属性.词条[i];
        词条元素.innerHTML = 人物属性.词条[i] ;
        游戏界面_词条窗口_box_下半部分_词条.appendChild(词条元素);
    }
}

async function 词条描述获取函数(词条名称) {
    try {
        const response = await fetch("./assets/数据/词条描述数据.json"); // 获取 JSON 数据
        const data = await response.json(); // 解析 JSON 数据
        return data[词条名称] || null; // 根据事件结算id返回数据
    } catch (error) {
        console.error("加载 JSON 失败:", error);
        return null;
    }
}

export function 词条描述读取函数(词条名称) {
    const 游戏界面_词条窗口_box_下半部分_描述 = document.getElementById("游戏界面_词条窗口_box_下半部分_描述");


    词条描述获取函数(词条名称).then(result => {
        if (result) {
            游戏界面_词条窗口_box_下半部分_描述.innerHTML = result;
        }
        else {
            console.log("未找到对应的数据");
        }

        
    });
}

export function 游戏内数据更新函数() {
    const 游戏界面_按钮_回合_数字 = document.getElementById('游戏界面_按钮_回合_数字');
    const 策略加减按钮_数字_健康 = document.getElementById('策略加减按钮_数字_健康');
    const 策略加减按钮_数字_娱乐 = document.getElementById('策略加减按钮_数字_娱乐');

    游戏界面_按钮_回合_数字.innerHTML = 游戏内数据.回合数;
    策略加减按钮_数字_健康.innerHTML = 游戏内数据.策略_健康;
    策略加减按钮_数字_娱乐.innerHTML = 游戏内数据.策略_精神;
    策略文本描述更新函数()
}

function 策略文本描述更新函数() {
    const 游戏界面_策略窗口_box_下半部分_策略效果 = document.getElementById("游戏界面_策略窗口_box_下半部分_策略效果");
    var 健康数值 = -5
    var 精神数值 = -5
    var 财富数值 = 0

    健康数值 = 健康数值 + (游戏内数据.策略_健康 * 2) - 游戏内数据.策略_精神
    精神数值 = 精神数值 + (游戏内数据.策略_精神 * 2) - 游戏内数据.策略_健康
    财富数值 = 游戏内数据.策略_健康 + 游戏内数据.策略_精神

    var 文本 = "每回合结束的时候:" + "<br>" + "健康获得 " + 健康数值 + 空格符号 + "精神获得 " + 精神数值 + 空格符号 + "财富减少 " + 财富数值 + " 点"
    游戏界面_策略窗口_box_下半部分_策略效果.innerHTML = 文本;
}

export function 回合结束函数() {
    const 游戏界面_事件 = document.getElementById('游戏界面_事件');
    过场动画开始("随机");
    游戏内数据.是否可以结束回合 = "否";


    setTimeout(() => {
        游戏界面_事件.innerHTML = "";
        游戏内数据.回合数 = 游戏内数据.回合数 + 1;
        人物属性.年龄 = 人物属性.年龄 + 1;
        人物属性更新函数()
        游戏内数据更新函数()
        回合结束策略效果函数()
        回合结束词条效果函数(人物属性.词条)

        状态检查函数()
    }, 1000);


}


function 回合结束策略效果函数() {

    var 健康数值 = (游戏内数据.策略_健康 * 2) - 游戏内数据.策略_精神 - 5
    var 精神数值 = (游戏内数据.策略_精神 * 2) - 游戏内数据.策略_健康 - 5
    var 财富数值 = 游戏内数据.策略_健康 + 游戏内数据.策略_精神


    人物属性.健康 = 人物属性.健康 + 健康数值
    人物属性.精神 = 人物属性.精神 + 精神数值
    人物属性.财富 = 人物属性.财富 - 财富数值

    if (人物属性.健康 > 人物属性.健康上限) {
        人物属性.健康 = 人物属性.健康上限
    }

    if (人物属性.精神 > 人物属性.精神上限) {
        人物属性.精神 = 人物属性.精神上限
    }

    人物属性更新函数()


}

function 回合结束词条效果函数(词条数组) {
    const 词条效果映射 = {
        "贫困开局II": () => {
            人物属性.财富 = 人物属性.财富 - 10;
        },
        "贫困开局I": () => {
            人物属性.财富 = 人物属性.财富;
        },
        "普通开局": () => {
            人物属性.财富 = 人物属性.财富 + 50;
        },
        "富裕开局I": () => {
            人物属性.财富 = 人物属性.财富 + 100;
        },
        "富裕开局II": () => {
            人物属性.财富 = 人物属性.财富 + 300;
        },
        "欠债": () => {
            人物属性.财富 = 人物属性.财富 - 5;
            人物属性.精神 = 人物属性.精神 - 1;
        }
    };

    词条数组.forEach(词条 => {
        if (词条效果映射[词条]) {
            词条效果映射[词条](); // 运行对应的效果函数
        } else {
            console.log(`未找到词条效果: ${词条}`);
        }
    });

    if (人物属性.健康 > 人物属性.健康上限) {
        人物属性.健康 = 人物属性.健康上限
    }

    if (人物属性.精神 > 人物属性.精神上限) {
        人物属性.精神 = 人物属性.精神上限
    }

    人物属性更新函数()
}

function 状态检查函数() {
    if (人物属性.健康 <= 0) {

    }

    if (人物属性.精神 <= 0) {

    }

    if (人物属性.财富 < 0) {

        人物属性.词条.push("欠债");
        setTimeout(() => {
            弹窗函数("财富过低!<br>财富为负数时，获得词条:[欠债]")
        }, 2500);
        
    }

}