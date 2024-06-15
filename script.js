// script.js

document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('message-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // 阻止表单默认提交行为

        var name = document.getElementById('name').value;
        var message = document.getElementById('message').value;

        // 这里可以添加验证逻辑，确保表单字段不为空

        // 模拟表单提交后的行为，实际开发中应使用Ajax发送数据到服务器
        addMessageToBoard(name, message);
    });

    function addMessageToBoard(name, message) {
        // 创建一个新的留言元素
        var newMessage = document.createElement('article');
        newMessage.classList.add('message');
    
        // 获取当前日期和时间
        var currentDateTime = new Date();
        var formattedDate = currentDateTime.toLocaleString(); // 格式化日期和时间
    
        // 设置留言内容和日期
        newMessage.innerHTML = `
            <h2>${name}</h2>
            <p>${message}</p>
            <p class="message-date">留言日期: ${formattedDate}</p>
        `;
    
        // 将新留言添加到留言板
        document.getElementById('message-board').appendChild(newMessage);
    
        // 清空表单
        document.getElementById('message-form').reset();
    }
});