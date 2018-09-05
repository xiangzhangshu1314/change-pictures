# change-pictures
实现逻辑： 当前点击的图片的top ,left,z-index和最上面的图片的top, left, z-index进行交换。

点快之后，图片动作就乱了，原因是先前的两图片的animate  1000ms 还没执行完。加上如下两句：
 $(".pic[title]").stop(true,true); $(this).stop(true,true);
 意思就是：当遇到点击事件，无论animate 1000ms执行到何处，立即到目标位置，然后及时处理下一个点击事件。
 实参列表{"left" : left1, "top": top1}  前一个加引号， ： 后面的不加，应为它是指数值，不能是字符串。
