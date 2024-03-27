---
title: Fixed the Toast notification for WAS!
---

# Fixing Windows App SDK's Toast Notifications

::: warning
First of all, my English is very poor, so the whole article is translated by me using DeepL translator, the grammar may be wrong, you may be able to read the article in the Chinese version of this page using the translator, maybe this will be more accurate.

Secondly, I am not well versed in C# programming, some parts of this article may be useless or inefficient, you should check the accuracy of the code with your own knowledge to avoid problems.

Of course, if the documentation does have issues, you should post a comment at the bottom of the article or raise a new issue on GitHub. 😉
:::

::: tip
Σ(っ °Д °;)っ Don't be mistaken by the watermark! This article is I posted in CSDN, but because I do not want to be in CSDN, so I moved the article here, but the original image has been deleted by me, I had to take CSDN on the picture (with watermarks) in this site to use. QAQ(Of course, compared to the original article I posted in CSDN still made some improvements)
:::

::: warning
Since Starcloudsea migrated their main framework from the Windows App SDK to the Uno Platform (which is really quite hard to use to be honest), this article will most likely expire with the update of the NuGet package (even though the package hasn't been updated for **two and a half years**), but if you find that the new version doesn't work you can either post a comment at the bottom of the article Or just submit an issue to GitHub (it would be great if you could submit a valid pull request! awa) and I'll take care of it when I have time ;)

(Of course, the Uno Platform works particularly well in some places.)

:::

I messed around with this for a whole month to get it fixed, and in the end someone who codes really well did it for me 🥴

The code requires the CommunityToolkit.WinUI.Notifications NuGet package to work properly.

First, you need to add the following code to Package.appxmanifest (if your project is an unpackaged project, you can skip to the second step):

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

You should replace the TestApp1.exe in here with your own application name, as well as replace the A41FE01C-2EF2-4FC1-9C30-BB19C16222E9 in there with your own GUID (you can generate a GUID with Visual Studio's own GUID generator)

In the second step, you need to define a Toast notification:

```C#

var a = new CommunityToolkit.WinUI.Notifications.ToastContentBuilder();
a.AddArgument("action", "viewConversation");
a.AddArgument("conversationId", 9813);
a.AddText("Andrew sent you a picture");
a.AddText("Check this out, The Enchantments in Washington!");
a.Show();

```

It is not clear to me what a.AddArgument("action", "viewConversation");
a.AddArgument("conversationId", 9813); means, but you can refer to Bing's answer:

![Conversations with Bing](/Images/docs/Shared/Blogs/Texts/Articles/WASToast/Bing.png)

As for AddText, it obviously adds text to the Toast notification.

Now you have a basic Toast notification set up, and after running, the program will call the a.Show() method to display the notification.

If you want to add buttons to it, then you should refer to step 3 now:

Step 3, in front of the a.Show code, add:

```C#

a.AddButton(new ToastButton()
    .SetContent("Like")
    .AddArgument("action", "aaa")
    .SetBackgroundActivation());

```

Then add it at the program entry point (usually App.xaml.cs):

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
                    //点击按钮后，代码在这里执行.
                    Debug.WriteLine("Follow Starcloudsea! awa");
                break;
            }
        }
    }
}

```

The aaa here represents the aaa that was just created in the AddButton method, which you can modify as you wish, as long as the two names are the same and follow C# naming conventions.

If you want to create multiple buttons then you just need to add a couple more AddButton methods and just add a couple more cases, but there is a limit to the number, I forget how many. 🥴

OK, if you copied most of your code from this post, then your program will find that a Toast notification pops up on Windows when executing the sample code in step 2 (if it doesn't, you may need to check that your Do Not Disturb mode is turned on):

![Windows pops up a Toast notification](/Images/docs/Shared/Blogs/Texts/Articles/WASToast/Toast.png)

If you click on the "Like" button, you will find it in the output of your program:

`Follow Starcloudsea! awa`

(As with this output, my account on Bilibili wants some followers. qwq)

Note that the first step is mandatory in a packaged project, otherwise what you should see is your program throwing exceptions (I haven't done it this way, I'm not sure, but it should be the case...)

(He's really something.)

​