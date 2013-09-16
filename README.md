  
grunt搭建的前端开发环境
===================================
本环境实现css、js的修改监听，
实现一个命令自动编译css、js。

###命令介绍

grunt         该命令将合并制定的js并压缩，编译sass文件成css并压缩<br />
grunt watch   该命令用来监听指定的文件的变动，这里监听了js和scss的变动<br />
grunt watch:script 监听JS文件<br />
grunt watch:css   监听scss文件<br />
grunt uglify  合并&压缩JS<br />
grunt compass 编译SCSS文件，生成压缩后的CSS.<br />
