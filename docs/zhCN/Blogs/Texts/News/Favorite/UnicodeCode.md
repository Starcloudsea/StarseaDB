---
title: '"正经"Blog'
---

# "正经"Blog

今天我在库里面写了这个东西，写完之后发现我压根不需要这堆东西，那我直接写在这里当笔记吧（喜）

```C#
var regex = new Regex(@"^&#[xX][0-9a-fA-F]+;$"); //说实话我也不知道这东西是什么，索引？模板？
if (Glyph != null && regex.IsMatch(Glyph)) //检查字符串是否符合条件
{
    string unicodeEscape = Glyph; //（我现在才发现这个好像有点多此一举的意思......）
    // 移除"&#"和";"，保留16进制数字部分
    string hexValue = unicodeEscape.TrimStart(new char[] { '&', '#', 'x' }).TrimEnd(';');
    // 将16进制数字转换为对应的字符
    GetText = char.ConvertFromUtf32(Convert.ToInt32(hexValue, 16));
}
```

总之就是一堆杂七杂八的C#代码，估计也不是最优解，大家当个参考吧（