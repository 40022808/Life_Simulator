import { 人物属性 } from "./函数库.js";



var 事件结算图片
var 事件结算标题
var 事件结算内容

async function 事件结算获取函数(事件结算id) {
    try {
        const response = await fetch("./assets/数据/事件结算数据.json"); // 获取 JSON 数据
        const data = await response.json(); // 解析 JSON 数据
        return data[事件结算id] || null; // 根据事件结算id返回数据
    } catch (error) {
        console.error("加载 JSON 失败:", error);
        return null;
    }
}

export function 事件结算函数(事件结算id) {
    事件结算获取函数(事件结算id).then(result => {
        if (result) {
            事件结算图片 = result.图片;
            事件结算标题 = result.标题;
            事件结算内容 = result.内容;
        }
        else {
            console.log("未找到对应的数据");
        }

        事件结算数据载入函数()
    });
}


function 事件结算数据载入函数() {
    const 游戏界面_事件_事件结算_图片 = document.getElementById("游戏界面_事件_事件结算_图片");
    const 游戏界面_事件_事件结算_事件_标题 = document.getElementById("游戏界面_事件_事件结算_事件_标题");
    const 游戏界面_事件_事件结算_事件_内容 = document.getElementById("游戏界面_事件_事件结算_事件_内容");


    游戏界面_事件_事件结算_图片.style.backgroundImage = "url(" + "assets/图片/" + 事件结算图片 + ")";
    游戏界面_事件_事件结算_事件_标题.innerHTML = 事件结算标题;
    游戏界面_事件_事件结算_事件_内容.innerHTML = 事件结算内容;
}


