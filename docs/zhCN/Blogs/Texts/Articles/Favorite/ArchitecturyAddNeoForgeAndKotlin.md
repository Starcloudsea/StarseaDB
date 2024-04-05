---
title: 为Architectury添加Kotlin支持并将Forge和Mojang映射替换成NeoForge和Yarn
---

# 为Architectury添加Kotlin支持并将Forge和Mojang映射替换成NeoForge和Yarn

感谢[Coder2(Jack253-png)](https://github.com/Jack253-png)为我的项目迁移提供大量帮助(≧∀≦)ゞ

:::warning
我把映射切换成Yarn后还没用过，鬼知道能不能用......😵‍💫
该方法**仅适用于新项目和1.20.2+版本的Minecraft**，我无法保证老项目在迁移后的稳定性。
:::

啊，没错，为了搞定这个问题，我又搞了一个月=D

## 开始之前......

- 你需要确保你使用的是IntelliJ IDEA而不是Visual Studio Code或其它编辑器，只是因为迁移需要用到IntelliJ IDEA的一些功能。但是如果你仅是想要使用NeoForge，你可以使用任意一个编辑器（记事本除外😡）

- 你需要确保你的Minecraft版本是1.20.2+，如果你要使用NeoForge的话.

- 你需要确保你的项目的Architectury Loom版本是1.4+，如果你要使用NeoForge的话.

- 没了（

## Starcloudsea的项目环境.....

::: details 太多了自己点开看（〃｀ 3′〃）

Starcloudsea是Architectury初学者，好孩子少学一些(′д｀ )…彡…彡

- JDK: 21

- Gradle: 8.7

- Kotlin: 1.9.23

- Architectury Plugin: 3.4-SNAPSHOT

- Architectury Loom: 1.4-SNAPSHOT

- Architectury: 10.1.20

- Fabric API: 0.91.6+1.20.2

- Fabric Loader: 0.15.9

- Yarn: 1.20.2+build.4

- NeoForge: 20.2.88

- Mod Version: 1.0-ThanksFabric（我自己Mod的名称，表示对Fabric的“听我说屑屑你”心情（我是真的谢））

:::

## 为项目添加（或将Forge替换为）NeoForge开发环境

::: warning
大部分标记为移除（红色）的行都是可选的，不是必须，如果你想在保留Forge的同时添加NeoForge，请不要删除它们.（但有其它情况，请留意警告.）
:::

1. 如果你的Architectury Loom版本是1.4以下，你应该把它升级到1.4或以上.

2. 更改`settings.gradle`中的内容：
   
```Groovy
pluginManagement {
    repositories {
        maven { url "https://maven.fabricmc.net/" }
        maven { url "https://maven.architectury.dev/" }
        maven { url "https://maven.minecraftforge.net/" } // [!code --]
        maven { url "https://maven.neoforged.net/releases/" } // [!code ++]
        gradlePluginPortal()
    }
}
plugins {
    id 'org.gradle.toolchains.foojay-resolver-convention' version '0.5.0'
}

include("common")
include("fabric")
include("forge") // [!code --]
include("neoforge") // [!code ++]
```

3. 更改`gradle.properties`的内容：（**不要全抄，这只适用于1.20.2和我的项目**）：

```Properties
org.gradle.jvmargs=-Xmx2048M

minecraft_version=1.20.2
# 你可以选择添加NeoForge或者干别的事情，但是这两个属性你只能保留其中一个. // [!code highlight]
# 如果你只想要NeoForge： // [!code highlight]
enabled_platforms=fabric,neoforge // [!code highlight]
# 如果你想要Forge和NeoForge并存： // [!code highlight]
enabled_platforms=fabric,forge,neoforge // [!code highlight]

archives_base_name=LearnModApp
mod_version=1.0-ThanksFabric
maven_group=org.starcloudsea.learnmodapp

architectury_version=10.1.20

fabric_loader_version=0.15.9
fabric_api_version=0.91.6+1.20.2

forge_version=1.20.2-48.1.0 // [!code --]

neoforge_version=20.2.88 // [!code ++]
```
其中的neoforge_version需要按需更改，你可以在 https://projects.neoforged.net/neoforged/neoforge 看到所有NeoForge的版本.

4. 构建你的项目，如果构建成功，你的项目应该会多出一个neoforge的模块.

::: tip
如果你在构建时发生了错误说找不到neoforge包，请从构建窗口查看报错信息里的链接，如果报错信息里的链接没有NeoForge的Maven库，请将在`settings.gradle`中的NeoForge源复制（或剪切）一份到`build.gradle`中：
```Groovy
allprojects {
    apply plugin: "java"
    apply plugin: "architectury-plugin"
    apply plugin: "maven-publish"

    archivesBaseName = rootProject.archives_base_name
    version = rootProject.mod_version
    group = rootProject.maven_group

    repositories {
        maven { url "https://maven.neoforged.net/releases/" } // [!code ++]
    }

    tasks.withType(JavaCompile).configureEach {
        options.encoding = "UTF-8"
        options.release.set(21)
    }

    java {
        withSourcesJar()
    }
}
```
然后再次构建，这时应该就可以构建成功了;)
:::

5. 将forge模块中的`src`, `build.gradle`, `gradle.properties`复制一份到NeoForge模块中.

::: warning
现在，如果需要更改的文件在neoforge模块中，你在遇到到标记为删除（红色块）的代码块时，你应该删除它.因为Forge的内容在NeoForge中不可配置，这会导致很多问题.
:::

6. 更改`neoforge/gradle.properties`中的内容;
   
```Properties
loom.platform=forge // [!code --]
loom.platform=neoforge // [!code ++]
```

7. 更改`neoforge/build.gradle`中的内容;

```Groovy
plugins {
    id "com.github.johnrengelman.shadow" version "7.1.2"
}
loom {
    forge { // [!code --]
        mixinConfig "modmcmc-common.mixins.json" // [!code --]
        mixinConfig "modmcmc.mixins.json" // [!code --]
    } // [!code --]
}
architectury {
    platformSetupLoomIde()
    forge() // [!code --]
    neoForge() // [!code ++]
}

configurations {
    common
    shadowCommon // Don't use shadow from the shadow plugin since it *excludes* files.
    compileClasspath.extendsFrom common
    runtimeClasspath.extendsFrom common
    developmentForge.extendsFrom common // [!code --]
    developmentNeoForge.extendsFrom common // [!code ++]
}

dependencies {
    forge "net.minecraftforge:forge:${rootProject.forge_version}" // [!code --]
    neoForge "net.neoforged:neoforge:${rootProject.neoforge_version}" // [!code ++]
    // Remove the next line if you don't want to depend on the API
    modApi "dev.architectury:architectury-forge:${rootProject.architectury_version}"  // [!code --]
    modApi "dev.architectury:architectury-neoforge:${rootProject.architectury_version}" // [!code ++]
    common(project(path: ":common", configuration: "namedElements")) { transitive false }
    shadowCommon(project(path: ":common", configuration: "transformProductionForge")) { transitive = false } // [!code --]
    shadowCommon(project(path: ":common", configuration: "transformProductionNeoForge")) { transitive = false } // [!code ++]
}
```

下面其实还有个叫mavenForge的东西，暂时不知道干嘛用的，你可以自己研究研究（

8. 更改`neoforge/src/main/resources/META-INF/mods.toml`的内容：

```Toml
[[dependencies.modmcmc]] #optional
    # the modid of the dependency
    modId="forge" #mandatory // [!code --]
    modId="neoforge" #mandatory // [!code ++]
    # Does this dependency have to exist - if not, ordering below must be specified
    mandatory=true #mandatory
    # The version range of the dependency
    versionRange="[49,)" #mandatory // [!code --]
    versionRange="[20,)" #mandatory // [!code ++]
    # An ordering relationship for the dependency - BEFORE or AFTER required if the  relationship is not mandatory
    ordering="NONE"
    # Side this dependency is applied on - BOTH, CLIENT or SERVER
    side="BOTH"
```

9. 更改neoforge模块中的‘src/main/java/<你的Mod命名空间>.forge`软件包名为`src/main/java/<你的Mod命名空间>.neoforge`，并将`<Mod名>`Forge改成`<Mod名>NeoForge`，并更改<Mod名>NeoForge中的内容：

```Java
//不要忘了更改软件包名！我在这里没有放出是因为每个人的软件包名都不一样.

@Mod(MODMCMC.MOD_ID)
public class MODMCMCForge { // [!code --]
public class MODMCMCNeoForge { // [!code ++]
    public MODMCMCForge() {
		// Submit our event bus to let architectury register our content on the right time
        //这行代码貌似在NeoForge中无法使用.
        EventBuses.registerModEventBus(MODMCMC.MOD_ID, FMLJavaModLoadingContext.get().getModEventBus()); // [!code --]
        MODMCMC.init();
    }
}
```

并且更改neoforge/src/main/resources/<你的Mod名全小写>.mixins.json中的内容：

```Json
{
  "required": true,
  "minVersion": "0.8",
  "package": "org.starcloudsea.learnmodapp.learnmodapp.forge.mixin", // [!code --]
  "package": "org.starcloudsea.learnmodapp.learnmodapp.neoforge.mixin", // [!code ++]
  "compatibilityLevel": "JAVA_17",
  "mixins": [
  ],
  "client": [
  ],
  "injectors": {
    "defaultRequire": 1
  }
}
```

::: tip
这样做其实没有多大用处，只是会让强迫症舒服一些😁
:::

10. 构建你的Mod，如果没报错且运行成功，那么你的NeoForge就设置完成了！q(≧▽≦q)

11. 然后，如果你只想要NeoForge，那么你就可以删除Forge模块了（

::: danger
前提是你的Mod真的没写任何东西！别把你刚写的"将敌对生物对某个玩家友好的Mixin"删了啊！很珍贵的啊！Σ(っ °Д °;)っ
:::

## 为项目添加Kotlin支持

::: tip
检查你的IntelliJ IDEA有没有装Kotlin插件，如果没装就装上.
:::

1. 右键common/src/main/java/<你Mod的命名空间>/LearnModApp.java文件，选择`将 Java 文件转换为 Kotlin 文件`，如果IntelliJ IDEA提示`未在项目中配置 Kotlin`，你应该点击`好的，在项目中配置 Kotlin`，然后选择`单个模块`，然后选择<你的项目名>.common，然后选择Kotlin 编译器和运行时版本（我认为最好是最新的），点击确定，然后构建一遍（为了防止哪个模块转换后直接罢工，如果一次性转完再构建的话，如果有模块罢工排查难度会变高很多😵‍💫），然后对其它几个模块也这样做.

::: warning
不要选择对所有模块进行配置，因为Fabric对Fabric的配置比较特殊，这样做会使Fabric在构建时会因为Fabric中的Gson模块识别到了Kotlin所使用的Java8而导致报错，即使你在Fabric的build.gradle删除了Kotlin相关内容.（应该是因为没删干净或者别的原因）
:::

2. 对于Fabric，你需要这样做：
    1. 在`fabric/build.gradle`中替换代码：
    ```Groovy
    dependencies {
        modImplementation "net.fabricmc:fabric-loader:${rootProject.fabric_loader_version}"
        modApi "net.fabricmc.fabric-api:fabric-api:${rootProject.fabric_api_version}"
        modApi "dev.architectury:architectury-fabric:${rootProject.architectury_version}"
        implementation "org.jetbrains.kotlin:kotlin-stdlib-jdk8" // [!code --]
        modImplementation("net.fabricmc:fabric-language-kotlin:<Fabric Language Kotlin版本>+kotlin.<Kotlin版本>") // [!code ++]
        common(project(path: ":common", configuration: "namedElements")) { transitive false }
        shadowCommon(project(path: ":common", configuration: "transformProductionFabric")) { transitive false }
    }
    ```

    2. 在`fabric/src/main/resources/fabric.mod.json`中，添加：

    ```Json
    {
        // 在我的项目中，这个键的值默认就是1，我不知道Fabric为什么要把这个东西也算到迁移代码里......（明明迁移代码除了这个只给出了关键数值） // [!code highlight]
        // 不过，我猜测可能有一些例外，如果你的这个键的值不是1，你可以考虑将这个值改为1，如果你的Fabric模块没有什么代码或依赖需要用到其它数字. // [!code highlight]
        "schemaVersion": 1, // [!code highlight]
        "id": "learnmodapp",
        "version": "${version}",
      
        "name": "LearnModApp",
        "description": "全世界最难的Json解释器莫过于Fabric和Kotlin冲突的Gson",
        "authors": [],
        "contact": {},
      
        "license": "Apache 2.0",
        "icon": "icon.png",
      
        "environment": "*",
        "entrypoints": {
          "main": [
            "org.starcloudsea.learnmodapp.learnmodapp.fabric.LearnModAppFabric",
            { // [!code ++]
              "adapter": "kotlin", // [!code ++]
              "value": "org.starcloudsea.learnmodapp.learnmodapp.fabric.LearnModAppFabric" // [!code ++]
            } // [!code ++]
      
          ]
        },
        "mixins": [
          "learnmodapp.mixins.json",
          "learnmodapp-common.mixins.json"
        ],
        "depends": {
          "fabricloader": ">=0.15.9",
          "minecraft": ">=1.20.2",
          "fabric-language-kotlin": ">=<Fabric Language Kotlin版本>+kotlin.<Kotlin版本>" // [!code ++]
        }
    }
    ```
    然后，你的Fabric就可以使用Kotlin了，不过别人想要使用你Mod的话就需要加Fabric Language Kotlin这个Mod作为前置😜

    :::tip
    如果你在构建时遇到了Gson的报错（比如这个：`Can not set final java.util.Map field net.fabricmc.loom.configuration.providers.minecraft.ManifestVersion.latest to com.google.gson.internal.LinkedTreeMap`），那么这很有可能是因为你没有删除`implementation "org.jetbrains.kotlin:kotlin-stdlib-jdk8"`代码，这是必须的，因为Gson不支持Java 8，但是Kotlin的默认配置依旧在使用，这会导致一些报错.在Fabric的官方文档也告诉了需要替换而不是添加`modImplementation("net.fabricmc:fabric-language-kotlin:<Fabric Language Kotlin版本>+kotlin.<Kotlin版本>")`代码.
    :::

3. 对于Forge/NeoForge，你需要这样做：

    1. 在`neoforge/build.gradle`添加：
    ```Groovy
    plugins {
        id "com.github.johnrengelman.shadow" version "7.1.2"
        id 'org.jetbrains.kotlin.plugin.serialization' version '<你的Kotlin版本>' // [!code ++]
        id 'org.jetbrains.kotlin.jvm' version '<你的Kotlin版本>'
    }

    dependencies {
        neoForge "net.neoforged:neoforge:${rootProject.neoforge_version}"
        modApi "dev.architectury:architectury-neoforge:${rootProject.architectury_version}"
        common(project(path: ":common", configuration: "namedElements")) { transitive false }
        shadowCommon(project(path: ":common", configuration:     "transformProductionNeoForge")) { transitive = false }
        //如果你在使用Forge:
        implementation 'thedarkcolour:kotlinforforge-forge:<你的Kotlin For Forge版本>' // [!code ++]
        //如果你在使用NeoForge:
        implementation 'thedarkcolour:kotlinforforge-neoforge:<你的Kotlin For Forge版本>' // [!code ++]
        implementation "org.jetbrains.kotlin:kotlin-stdlib-jdk8"
    }

    repositories {
        maven { // [!code ++]
            name = 'Kotlin for Forge' // [!code ++]
            url = 'https://thedarkcolour.github.io/KotlinForForge/' // [!code ++]
        } // [!code ++]
        mavenCentral()
    }
    ```
    你可以在 https://www.mcmod.cn/download/2890.html 中找到Kotlin For Forge的全版本awa

    2. 更改`neoforge/src/main/resources/META-INF/mods.toml`中的代码：
    ```Toml
    # The name of the mod loader type to load - for regular FML @Mod mods it should be javafml
    modLoader="javafml" #mandatory // [!code --]
    modLoader="kotlinforforge" #mandatory // [!code ++]

    # A version range to match for said mod loader - for regular FML @Mod it will be the forge version
    loaderVersion="[49,)" #mandatory This is typically bumped every Minecraft version by Forge. See our download page for lists of versions. // [!code --]
    loaderVersion="[4.10,)" #mandatory This is typically bumped every Minecraft version by Forge. See our download page for lists of versions. // [!code ++]
    ```

    然后你的NeoForge Mod就支持Kotlin了awa

    :::tip
    相应的，在别人使用你的Mod时，他也需要添加Kotlin For Forge作为前置Mod.
    :::

4. 构建整个项目.

5. 现在你需要再按照第一步，将Java文件转换Kotlin，只需要做这一步，因为IntelliJ在找不到依赖时仅会让你添加依赖而不会为你转换，在添加依赖后，你需要重新把Java文件转成Kotlin文件.

6. 好力，开搞吧！（喜）

## 将Mojang原版映射替换成Yarn

这个很简单，你只需要在build.gradle中将`mappings loom.officialMojangMappings()`注释掉，然后将`// mappings "net.fabricmc:yarn:@YARN_MAPPINGS@:v2"`取消注释并指定版本就好了(。・ω・。)

就像这样：

```Groovy
    dependencies {
        minecraft "com.mojang:minecraft:${rootProjectminecraft_version}"
        // The following line declares the mojmap mappings, you mayuse other mappings as well
        // mappings loom.officialMojangMappings()
        // The following line declares the yarn mappings you mayselect this one as well.
        mappings "net.fabricmc:yarn:1.20.2+build.4:v2"
    }
```

4.4更新：用过Yarn了，完全不会用🥴

你可以在 https://maven.fabricmc.net/net/fabricmc/yarn/ 找到Yarn的所有版本（

别看字数1w多，其实很容易的，细心一点就好（