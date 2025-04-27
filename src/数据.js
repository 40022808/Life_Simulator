




export function 临时记住游戏名() {
    const input = document.getElementById("开局选项_选项_名字");

    sessionStorage.setItem("username", input.value);

}

export function 读取游戏名() {
    const input = document.getElementById("开局选项_选项_名字");

    // 从本地存储读取数据并显示
    const username = sessionStorage.getItem("username");
    if (username) {
        input.value = username;
    }
    else {
        input.value = "";
    }
}