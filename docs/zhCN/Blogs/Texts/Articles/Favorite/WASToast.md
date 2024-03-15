---
title: 搞定WAS的Toast通知！
---

# 搞定Windows App SDK的Toast通知

::: tip
Σ(っ °Д °;)っ别被水印误会！这篇文章是我在CSDN里发的，但是由于我不想在CSDN里了，所以我把文章搬到了这里，但是原图片已经被我删了，只好拿CSDN的水印版用了QAQ(当然相较于CSDN原文还是做了些改进的)
:::

::: warning
由于Starcloudsea将自己的主力框架从Windows App SDK迁移到了Uno Platform(这玩意有够难用的)，所以这篇文章很可能随着NuGet包的更新而失效(虽然这玩意**两年半**都没更新)，但如果你发现新版本无法使用，你可以在文章底部发评论或者直接发个issues(最希望你提交个pr啦awa)，等我有时间的时候我会处理这个问题的;)
:::

为了搞定这个问题，我搞了整整一个月，最后还是一个大佬帮我搞的🥴

记得加 CommunityToolkit.WinUI.Notifications NuGet包

首先，在Package.appxmanifest（未打包项目跳到第二步）中加入：

```XML

<Extensions>

	<desktop:Extension Category="windows.toastNotificationActivation">
		<desktop:ToastNotificationActivation ToastActivatorCLSID="A41FE01C-2EF2-4FC1-9C30-BB19C16222E9" />
	</desktop:Extension>

	<com:Extension Category="windows.comServer">
		<com:ComServer>
			<com:ExeServer Executable="TestApp1.exe" Arguments="-ToastActivated" DisplayName="Toast activator">
				<com:Class Id="A41FE01C-2EF2-4FC1-9C30-BB19C16222E9" DisplayName="Toast activator"/>
			</com:ExeServer>
		</com:ComServer>
	</com:Extension>

</Extensions>

```

记得将里面的TestApp1.exe换成自己的应用名称（记得加.exe后缀），以及将里面的A41FE01C-2EF2-4FC1-9C30-BB19C16222E9替换成自己的GUID（可以用VS自带的GUID生成器）

第二步，设置Toast通知：

```C#

var a = new CommunityToolkit.WinUI.Notifications.ToastContentBuilder();
a.AddArgument("action", "viewConversation");
a.AddArgument("conversationId", 9813);
a.AddText("Andrew sent you a picture");
a.AddText("Check this out, The Enchantments in Washington!");
a.Show();

```

至于a.AddArgument("action", "viewConversation");
a.AddArgument("conversationId", 9813);的意思，你可以参考下NewBing的回答：

![Bing的对话](/Images/docs/Shared/Blogs/Articles/Favorite/WASToast/Bing.png)

至于AddText，不用多说了吧，自己运行看看（

至此，你的Toast通知就设置完毕了。

如果想往里面加入按钮，那么你就要参考第三步了：

第三步，在a.Show之前，加入：

```C#

a.AddButton(new ToastButton()
    .SetContent("Like")
    .AddArgument("action", "aaa")
    .SetBackgroundActivation());

```

然后在程序入口处（通常是App.xaml.cs）加入：

```C#

public App()
{
    CommunityToolkit.WinUI.Notifications.ToastNotificationManagerCompat.OnActivated += ToastNotificationManagerCompat_OnActivated;
}

private static void ToastNotificationManagerCompat_OnActivated(CommunityToolkit.WinUI.Notifications.ToastNotificationActivatedEventArgsCompat e)
{
    var ToastClickArgs = CommunityToolkit.WinUI.Notifications.ToastArguments.Parse(e.Argument);
    if (ToastClickArgs.Count > 0)
    {
        foreach (var ToastClickItem in ToastClickArgs)
        {
            switch (ToastClickItem.Value)
            {
                case "aaa":
                    //执行代码块
                    Debug.WriteLine("成了！！！！！！！！！！");
                break;
            }
        }
    }
}

```

这里的aaa代表着刚刚在Button里创建的aaa，大家可以随意修改，只要两个名称一样就行。

如果你想创建多个按钮，那么就多添加几个case。

好，如果你的代码是现抄的，那么你在执行第二步的代码时，会发现有通知出来了（记得把勿扰模式关掉）：

![Toast通知弹出](/Images/docs/Shared/Blogs/Articles/Favorite/WASToast/Toast.png)

如果你点击了“Like”按钮，你会发现输出中出现了：

`成了！！！！！！！！！！`

注意，第一步是已打包项目中必须执行的，否则你见到的将是程序抛出一大串又臭又长的异常（

(大佬就是厉害)

​