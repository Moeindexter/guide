"use strict";(self.webpackChunkdisnake_guide=self.webpackChunkdisnake_guide||[]).push([[726],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=a.createContext({}),c=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(t),u=o,g=p["".concat(d,".").concat(u)]||p[u]||m[u]||r;return t?a.createElement(g,s(s({ref:n},l),{},{components:t})):a.createElement(g,s({ref:n},l))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=p;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9497:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(7462),o=(t(7294),t(3905));const r={description:"A section that lists practices you should follow while making your Discord bot.",keywords:["disnake","bot","guide","tutorial","good practices","python"]},s="Good practices",i={unversionedId:"faq/good-practices",id:"faq/good-practices",title:"Good practices",description:"A section that lists practices you should follow while making your Discord bot.",source:"@site/docs/faq/good-practices.mdx",sourceDirName:"faq",slug:"/faq/good-practices",permalink:"/faq/good-practices",draft:!1,editUrl:"https://github.com/DisnakeDev/guide/edit/main/guide/docs/faq/good-practices.mdx",tags:[],version:"current",lastUpdatedBy:"Sem",lastUpdatedAt:1710498079,formattedLastUpdatedAt:"Mar 15, 2024",frontMatter:{description:"A section that lists practices you should follow while making your Discord bot.",keywords:["disnake","bot","guide","tutorial","good practices","python"]},sidebar:"guideSidebar",previous:{title:"Extensions",permalink:"/faq/extensions"}},d={},c=[{value:"Running code when a cog is loaded",id:"running-code-when-a-cog-is-loaded",level:2},{value:"Reloading your bot",id:"reloading-your-bot",level:2},{value:"Converting arguments in commands",id:"converting-arguments-in-commands",level:2},{value:"Context command targets",id:"context-command-targets",level:2},{value:"Slash command descriptions",id:"slash-command-descriptions",level:2},{value:"Guild-only commands",id:"guild-only-commands",level:2}],l=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",n)},m=l("Tabs"),p=l("TabItem"),u={toc:c};function g(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"good-practices"},"Good practices"),(0,o.kt)("h2",{id:"running-code-when-a-cog-is-loaded"},"Running code when a cog is loaded"),(0,o.kt)("p",null,"Most people are used to running everything in ",(0,o.kt)("inlineCode",{parentName:"p"},"__init__")," but that doesn't allow running async code. In this case you can\noverwrite the special ",(0,o.kt)("inlineCode",{parentName:"p"},"cog_load")," method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{5,6}","{5,6}":!0},"class MyCog(commands.Cog):\n    def __init__(self, bot: commands.Bot):\n        self.bot = bot\n\n    async def cog_load(self):\n        self.data = await bot.fetch_database_data()\n\n    @commands.slash_command()\n    async def command(self, interaction: disnake.ApplicationCommandInteraction, user: disnake.User):\n        await interaction.response.send_message(self.data[user.id])\n")),(0,o.kt)("h2",{id:"reloading-your-bot"},"Reloading your bot"),(0,o.kt)("p",null,"One of the lesser known disnake features is the ",(0,o.kt)("inlineCode",{parentName:"p"},"reload")," kwarg for your bot. It reloads extensions every time they are\nedited; allowing you to test your code in real-time. This is especially useful if startup times for your bot are very\nslow, since only one extension will be reloaded at a time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{3}","{3}":!0},"from disnake.ext import commands\n\nbot = commands.Bot(..., reload=True)\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This should be used purely for debugging. Please do not use this in production.")),(0,o.kt)("h2",{id:"converting-arguments-in-commands"},"Converting arguments in commands"),(0,o.kt)("p",null,"discord.py used to have ",(0,o.kt)("inlineCode",{parentName:"p"},"Converter")," classes to convert arguments if they are provided. These were however very hard to\nuse with type-checkers because the type of the parameter is never actually the converter itself."),(0,o.kt)("p",null,"Disnake aims to eliminate this issue by only allowing conversion of builtin types like ",(0,o.kt)("inlineCode",{parentName:"p"},"disnake.Member"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"disnake.Emoji"),", etc. If you ever want to have your own converter you have to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"converter")," argument in ",(0,o.kt)("inlineCode",{parentName:"p"},"Param"),"."),(0,o.kt)(m,{mdxType:"Tabs"},(0,o.kt)(p,{value:"disnake",label:"disnake",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{10}","{10}":!0},'async def convert_data(inter: disnake.ApplicationCommandInteraction, arg: str):\n    parts = arg.split(",")\n    return {"a": parts[0], "b": int(parts[1]), "c": parts[2].lower()}\n\n\n@commands.slash_command()\nasync def command(\n    self,\n    inter: disnake.ApplicationCommandInteraction,\n    data: Dict[str, Any] = commands.Param(converter=convert_data),\n):\n    ...\n'))),(0,o.kt)(p,{value:"discord.py",label:"discord.py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'class DataConverter(commands.Converter):\n    async def convert(self, ctx: commands.Context, arg: str):\n        parts = arg.split(",")\n        return {"a": parts[0], "b": int(parts[1]), "c": parts[2].lower()}\n\n\n@commands.command()\nasync def command(self, ctx: commands.Context, data: DataConverter):\n    ...\n')))),(0,o.kt)("p",null,"If you absolutely want to be able to use classes you may pass in a class method. Alternatively, set a method of the\nclass to be the converter using ",(0,o.kt)("inlineCode",{parentName:"p"},"converter_method"),"."),(0,o.kt)(m,{mdxType:"Tabs"},(0,o.kt)(p,{value:"classmethod",label:"classmethod converter",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{9-12,19}","{9-12,19}":!0},'from dataclasses import dataclass\n\n\n@dataclass\nclass Data:\n    a: str\n    b: int\n\n    @classmethod\n    async def from_option(cls, inter: disnake.CommandInteraction, arg: str):\n        a, b = arg.split(",")\n        return cls(a, int(b))\n\n\n@commands.slash_command()\nasync def command(\n    self,\n    inter: disnake.CommandInteraction,\n    data: Data = commands.Param(converter=Data.from_option),\n):\n    ...\n'))),(0,o.kt)(p,{value:"converter",label:"converter method",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{9-12,19}","{9-12,19}":!0},'from dataclasses import dataclass\n\n\n@dataclass\nclass Data:\n    a: str\n    b: int\n\n    @commands.converter_method\n    async def from_option(cls, inter: disnake.CommandInteraction, arg: str):\n        a, b = arg.split(",")\n        return cls(a, int(b))\n\n\n@commands.slash_command()\nasync def command(\n    self,\n    inter: disnake.CommandInteraction,\n    data: Data,\n):\n    ...\n')))),(0,o.kt)("h2",{id:"context-command-targets"},"Context command targets"),(0,o.kt)("p",null,"Instead of using ",(0,o.kt)("inlineCode",{parentName:"p"},"inter.target")," you should be using a parameter of your command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@commands.user_command()\nasync def command(self, inter: disnake.ApplicationCommandInteraction, user: disnake.User):\n    await inter.response.send_message(f"Used on {user.mention}")\n')),(0,o.kt)("h2",{id:"slash-command-descriptions"},"Slash command descriptions"),(0,o.kt)("p",null,"You may use docstrings for command and option descriptions. Everything before ",(0,o.kt)("inlineCode",{parentName:"p"},"Parameters")," is the command description.\nEverything after ",(0,o.kt)("inlineCode",{parentName:"p"},"Parameters")," are the option descriptions."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@commands.slash_command()\nasync def command(\n    self,\n    inter: disnake.ApplicationCommandInteraction,\n    category: str,\n    item: str,\n    details: bool,\n):\n    """Show item info\n\n    Parameters\n    ----------\n    category: The category to search\n    item: The item to display\n    details: Whether to get the details of this time\n    """\n')),(0,o.kt)("h2",{id:"guild-only-commands"},"Guild-only commands"),(0,o.kt)("p",null,"While disnake does provide a ",(0,o.kt)("inlineCode",{parentName:"p"},"@commands.guild_only()")," decorator, it still makes you handle ",(0,o.kt)("inlineCode",{parentName:"p"},"guild")," being optional in\ncase you're using linters. To solve this you should be using ",(0,o.kt)("inlineCode",{parentName:"p"},"GuildCommandInteraction"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# before\n@commands.slash_command()\n@commands.guild_only()\nasync def command(inter: disnake.ApplicationCommandInteraction):\n    assert inter.guild is not None\n    await inter.send(inter.guild.name)\n\n\n# after\n@commands.slash_command()\nasync def command(inter: disnake.GuildCommandInteraction):\n    await inter.send(inter.guild.name)\n")))}g.isMDXComponent=!0}}]);