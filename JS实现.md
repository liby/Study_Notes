# JavaScript使用

- HTML中的脚本必须位于\<script\>与\</script\>标签之间。
  - 脚本可被放置在HTML页面的\<body\>和\<head\>部分中。

## \<script\>标签

- 使用\<script>标签可以在HTML页面中插入JS。
  - 它会告诉JS在何处开始和结束。
  - 不用在\<script\>标签中使用type="text/javascript"。

## \<body\>中的JavaScript

  ```html
  <!DOCTYPE html>
  <html>
    <body>
      <script>
      document.write("<h1>This is a heading</h1>");
      document.write("<p>This is a paragraph</p>");
      </script>
    </body>
  </html>
  ```

## JavaScript函数和事件

- 上面例子中的JS语句会在页面加载时执行。
  - 通常需要在某个事件发生时执行代码，比如用户点击按钮时。
  - 如果把JS代码放入函数中，就可以在事件发生时调用该函数。

## \<head\>或\<body\>中的JavaScript

- 可以在HTML文档中放入不限数量的脚本。
  - 脚本可以放在\<body\>或\<head\>部分中，或者同时存在两个部分中。
  - 通常是把函数放入\<head\>部分中，或者放在页面底部，就可以把他们安置到同一处位置，不会干扰页面的内容。

##　＼＜head\>中的JavaScript函数

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script>
      function myfunction() {
        document.getElementById("demo").innerHTML = "My First JavaScript Function"
      }
    </script>
  </head>
  <body>
    <h1>My Web Page</h1>
    <p id="demo">A Paragraph</p>
    <button type="button" onclick="myfunction()">Try it</button>
  </body>
  </html>
  ```

## \<body\>中的JavaScript函数

- 把JavaScript放到页面代码的底部，就可以确保在\<p\>元素创建之后再执行脚本。

## 外部的JavaScript

- 还可以把脚本保存到外部文件中，外部文件通常包含被多个网页使用的代码。
- 外部JavaScript文件的扩展名是.js。
  - 如需使用外部文件，要在\<script\>标签的"src"属性中设置该.js文件:

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <script src="myScript.js"></script>
  </body>
  </html>
  ```

- 在\<head\>或\<body\>中引用脚本文件都是可以的，实际运行效果与在\<script\>标签中编写脚本完全一致。
  - 外部脚本不能包含\<script\>标签。