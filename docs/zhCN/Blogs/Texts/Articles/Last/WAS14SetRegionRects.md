---
title: WAS 1.4 更改标题栏拖拽区域
---

# Windows App SDK 1.4的标题栏可拖拽问题

自从Windows App SDK 1.4发布起，搜索结果的几个排在前面的文章中的更改标题栏可拖拽区域已经全部失效了，因为`SetDragRectangles`方法在Microsoft Learn中已经标记为"已废弃"，这意味这这个方法已经不能在新版Windows App SDK 1.4起作用(从没见过更新如此明显的库(雾))

当然，Microsoft给了一个替代方法，这个方法是我在Microsoft Q&A问到的:)

代码如下：

```C#
IntPtr hWndMain = WinRT.Interop.WindowNative.GetWindowHandle(this);
Microsoft.UI.WindowId myWndId = Microsoft.UI.Win32Interop.GetWindowIdFromWindow(hWndMain);
var incps = InputNonClientPointerSource.GetForWindowId(myWndId);
incps.SetRegionRects(NonClientRegionKind.Caption, new RectInt32[] { new RectInt32(X, Y, Width, Height) });  // [!code highlight]
```
:::tip
如果你在写了代码后报错，那么大概率是你没引用，引用就行了，或者是你的Windows App SDK版本太低或者太高(不会微软只用一些就给废弃了吧？（*゜ー゜*）)
:::

其中，X,Y表示横坐标和纵坐标，Width表示宽，Hight表示高.

不建议删除代码的任何内容(除非你代码已经写了这些东西的其中一些)，因为这段代码的所有地方都是关联起来的，你在修改后可能会导致报错，异常或各种Bug(当然如果你有更好的解决方案当我没说).

当然，变量名随便改😉

:::warning
通过这种方式更改的标题栏可拖拽区域仍然会受到你的屏幕缩放设置的影响，目前仅能保证100%的屏幕缩放不出现问题，太高或太低的屏幕缩放会使区域变大或变小，示例方法没有考虑到这个设置的影响(我也不会啊QAQ找了那么多文章问了那么多AI一个不能用)所以你可能要自己编写兼容方法。(对了，如果成功了，在评论告诉一声哈awa)
:::