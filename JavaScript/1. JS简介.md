# JavaScript简介

- JS是脚本语言，是一种轻量级的编程语言，可插入HTML页面的编程代码。
  - 插入HTML页面后，可由所有的现代浏览器执行。

## JavaScript: 写入HTML输出

  `document.write("<h1>This is a heading</h1>)`
- 只能在HTML输出中使用，如果在文档加载后使用，会覆盖掉整个文档的内容。

## JavaScript：对事件作出反应

  `<button type="button" onclick="alert('Welcome!')">点击这里</button>`
- alert()函数多用于代码测试。

## JavaScript：改变HTML内容

  ```js
  x = document.getElementById("demo")  //查找元素
  x.innerHTML = "Hello JavaScript";  //改变内容
  ```

- DOM(文档对象模型)是用来访问HTML元素的正式W3C标准。

## JavaScript：改变 HTML 图像

  ```html
  <!DOCTYPE html>
  <html>
    <body>
      <script>
        function changeImage(){
          element=document.getElementById('myimage')
          if (element.src.match("bulbon")){
            element.src="/i/eg_bulboff.gif";
          } else {
            element.src="/i/eg_bulbon.gif";
          }
        }
      </script>

      <img id="myimage" onclick="changeImage()" src="/i/eg_bulboff.gif">

      <p>点击灯泡来点亮或熄灭这盏灯</p>

    </body>
  </html>
  ```

## JavaScript：改变 HTML 样式

  ```js
  x = docment.getElementById("demo")  //找到元素
  x = style.color = "#ff0000";  //改变样式
  ```

## JavaScript: 验证输入

  `if isNaN(x) { alert("Not Numeric") };`

- ECMA-262是Javascript标准的官方名称。