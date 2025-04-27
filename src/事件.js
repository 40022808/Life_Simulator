import { 人物属性, 人物属性更新函数, 词条读取函数 } from "./函数库.js";



var 事件结算图片
var 事件结算标题
var 事件结算内容
var 事件结算结果
var 事件结算性别

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

export function 事件结算函数(事件结算id,性别) {
    事件结算获取函数(事件结算id).then(result => {
        if (result) {
            事件结算图片 = result.图片;
            事件结算标题 = result.标题;
            事件结算内容 = result.内容;
            事件结算性别 = result.性别;
            事件结算结果 = result.结果;
        }
        else {
            console.log("未找到对应的数据");
        }

        事件结算数据载入函数(性别,事件结算id)
    });
}


function 事件结算数据载入函数(性别,事件结算id) {
    const 游戏界面_事件_事件结算_图片 = document.getElementById("游戏界面_事件_事件结算_图片");
    const 游戏界面_事件_事件结算_事件_标题 = document.getElementById("游戏界面_事件_事件结算_事件_标题");
    const 游戏界面_事件_事件结算_事件_内容 = document.getElementById("游戏界面_事件_事件结算_事件_内容");
    const 游戏界面_事件_事件结算_事件_结果 = document.getElementById("游戏界面_事件_事件结算_事件_结果");

    if (事件结算性别 == "有") {
        游戏界面_事件_事件结算_图片.style.backgroundImage = "url(" + "assets/图片/" + 性别 + "/" + 事件结算图片 + ")";
    }
    else {
        游戏界面_事件_事件结算_图片.style.backgroundImage = "url(" + "assets/图片/" + 事件结算图片 + ")";
    }

    游戏界面_事件_事件结算_事件_标题.innerHTML = 事件结算标题;
    游戏界面_事件_事件结算_事件_内容.innerHTML = 事件结算内容;
    游戏界面_事件_事件结算_事件_结果.innerHTML = 事件结算结果;


    事件效果处理函数(事件结算id)

}


function 事件效果处理函数(事件结算id) {


    if (事件结算id == "Z1") {
        人物属性.词条.push("贫困开局II") 
    }
    else if (事件结算id == "Z2") {
        人物属性.词条.push("贫困开局I") 
    }
    else if (事件结算id == "Z3") {
        人物属性.词条.push("普通开局") 
    }
    else if (事件结算id == "Z4") {
        人物属性.词条.push("富裕开局I") 
    }
    else if (事件结算id == "Z5") {
        人物属性.词条.push("富裕开局II") 
    }

    
    人物属性更新函数()
    词条读取函数();

}