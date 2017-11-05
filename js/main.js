n=d(".newshead li");
gg(n,".newscont","mouseenter").tabroll("X",500,800,"choice");
n=d(".s2right .showc");
gg(n,".strategy","mouseenter").tabroll("X",790,800,"showing");
n=d(".cosnavar");
gg(n,".coswrap","mouseenter").tabroll("X",1200,800,"cosing");



gg(window,["nav",".navleft"],"scroll").func(function(){
	if(d("body")[0].scrollTop>=53)
	{
		this.addclass("bb fx","nav").removeclass("line1",".line").addclass("line2",".line")
		this.css("display:block",".navleft").addclass("yytsmall",".yyt");
	}
	else
	{
		this.removeclass("bb fx","nav").removeclass("line2",".line").addclass("line1",".line")
		this.css("display:none",".navleft").removeclass("yytsmall",".yyt");
	}
})



gg("#offing","nav","mouseenter").func(function(){
	this.addclass("bb").removeclass("line1",".line").addclass("line2",".line")
})
gg("#offing","nav","mouseleave").func(function(){
	if(d("body")[0].scrollTop<53)
	{
		this.removeclass("bb").removeclass("line2",".line").addclass("line1",".line")
	}
})



var who=0;
gg(".prow",".banner>img","click").func(function(){
	if(who==0)
	{
		who=3;
		this.addclass("sy2",".sy1").removeclass("sy1",".sy1").addclass("qm2",".qm1").removeclass("qm1",".qm1");
		setTimeout(function(){
			this.addclass("bb2",".bb1").removeclass("bb1",".bb1").addclass("yb2",".yb1").removeclass("yb1",".yb1");
			who=1;
		}.bind(this),1510)
	}
	else if(who==1)
	{
		who=3;
		setTimeout(function(){
			this.addclass("sy1",".sy2").removeclass("sy2",".sy2").addclass("qm1",".qm2").removeclass("qm2",".qm2");
			who=0;
		}.bind(this),1510)
		this.addclass("bb1",".bb2").removeclass("bb2",".bb2").addclass("yb1",".yb2").removeclass("yb2",".yb2");

	}	
})




var app=0;
gg("#hideapp",".app","click").func(function(){
	arguments[1].preventDefault();
	if(app==0)
	{
		this.addclass("apphide").addclass("faa","#hideapp a")
		app=1;
	}
	else
	{
		this.removeclass("apphide").removeclass("faa","#hideapp a")
		app=0;
	}
})



n=d("#dot i")
gg(n,"#autoroll","mouseenter").autoroll("X","dott",360).tabroll("X",360,800,"dott");
n=d(".dot i")
gg(n,".roll2","mouseenter").autoroll("X","dot2",368).tabroll("X",368,800,"dot2"); 




gg([".shis1",".protagonist"],["#ssrtt",".juese"],"click").tabs("fadein",1000).func(function(){
	el=arguments[3]
	if(el.index==0)
	{
		this.addclass("showing",".shis1").removeclass("showing",".protagonist")

	}
	else if(el.index==1)
	{
		this.removeclass("showing",".shis1").addclass("showing",".protagonist");

	}
});




n=d(".xuanren p")
var zj={"alls":[{"name":"晴明","introduce":"京都城中极具盛名的天才阴阳师<br>却不知为何失去了自己的记忆<br>等待着他的是寻回记忆的喜悦<br>还是不堪回首的残忍真相"},
                {"name":"神乐","introduce":"善良而沉默的神秘少女<br>失忆后便跟随在晴明身边<br>拥有敏锐的直觉和强大的通灵能力<br>以及不为人知的过去"},
                {"name":"源博雅","introduce":"拥有皇室血统的贵族青年<br>擅长弓术与结界之术<br>性情孤傲爽直<br>但似乎一直在寻找某个重要的人"},
                {"name":"八百比丘尼","introduce":"因误食人鱼肉而不老不死<br>能力超凡的流浪占卜师<br>一直在凤凰林中等待着<br>占卜之梦预言的命运之人"}]};
gg(n,"","click").func(function(){
	var index1=d(".justyou")[0].index+1;
	var index2=arguments[3].index+1;
	this.removeclass("justyou").addclass("justyou",arguments[3]);
	this.removeclass("tu"+index1,".tu").addclass("tu"+index2,".tu");
	this.removeclass("num"+index1,".numer").addclass("num"+index2,".numer");
	this.html(zj.alls[index2-1].name,".jiao").html(zj.alls[index2-1].introduce,".shuo");
})




gg([".pre",".next"],".eachssr","click").rowroll(".pre",".next",828).func(function(){
	if(this.content.body[0].index==0)
	{
		this.css("display:none",".pre")
	}
	else
	{
		this.css("display:block",".pre")
	}
	if(this.content.body[0].index==this.content.body[0].maxl-1)
	{
		this.css("display:none",".next")
	}
	else
	{
		this.css("display:block",".next")
	}
})

gg(d(".play"),".vedios","click").show();

gg(".cancel",".vedios","click").hidden();

gg(d(".moregame"),[".pcwrap",".phgame"],"click").func(function(){
	if(arguments[3].index==0)
	{
		if(!(arguments[3].innerText=="<<"))
		{

		this.css("width:420px",".pcwrap").css("width:250px",".hideaa").css("opacity:0","#rmtj").html("<<",arguments[3]).css("top:163px",arguments[3])
	    }
	    else
	    {
	    this.css("width:100%",".pcwrap").css("width:135px",".hideaa").css("opacity:1","#rmtj").html("更多热门端游",arguments[3]).css("top:124px",arguments[3])	
	    }
	}
	else
	{
		if(!(arguments[3].innerText=="<<"))
		{

		this.css("width:420px",".pcwrap").css("width:250px",".hideaa").css("opacity:0","#rmtj").html("<<",arguments[3]).css("top:163px",arguments[3])
	    }
	    else
	    {
	    this.css("width:100%",".pcwrap").css("width:135px",".hideaa").css("opacity:1","#rmtj").html("更多热门端游",arguments[3]).css("top:124px",arguments[3])	
	    }
	}
})