	function getel(e)
	{
		var arr,gc=new Object();
		if (e instanceof Array||(e instanceof Object&&e.length>1)) 
			{ arr=new Array;
				for (var i=0;i<e.length;i++)
				{
					if(!(e[i] instanceof Object))
					{
						arr[i]=document.querySelector(e[i])
					}
					else
					{
						arr[i]=e[i]	
					}
				}
				gc={body:arr,typ:1}
			}
			else
			{
				if(!(e instanceof Object)){
					arr=[document.querySelector(e)]
				}
				else
				{
					arr=[e];
				}
				gc={body:arr,typ:0}
			}
			for(i=0;i<gc.body.length;i++)
			{
				gc.body[i].index=i;
			}
			return gc;
		}

		function optionsing(choose,content,ev)//主体
		{
			this.choose=getel(choose);
			if(content)
			{
				this.content=getel(content);
			}
			else
			{
				this.content=getel(choose);
			}
			if(ev)
			{
				this.ev=ev;
			}
			else
			{
				this.ev="load"
			}
			
		}



		optionsing.prototype.add=function(el,act,el1,el2,time)//添加监听
		{
			var that=this;
			if (el instanceof Array)
			{
				for(var i in el)
				{
					el[i].addEventListener(this.ev,function(ev){
						var thats=this; 
						act(el1,eval(el2),time,thats)});
				}
			}
			else{
				if(!el)
				{
					this.choose.body[0].addEventListener(this.ev,function(ev){
						var thats=this; 
						act(el1,eval(el2),time,thats)});
				}
				else
				{
					el.addEventListener(this.ev,function(ev){
						var thats=this;
						act(el1,eval(el2),time,thats)});
				}
			}


		}


		optionsing.prototype.act=function(act)//连接行为
		{
			var e,acts;
			acts=function(){};
			act.apply(acts,new Array());
			if(!this.content.typ)
			{

				e=this.content.body[0];
				this.add(this.choose.body,acts.s,e,acts.can2,acts.time); 
			}
			else
				{   e=new Array()
					for(var i in this.content.body)
					{
						e[i]=this.content.body[i];
						this.add(this.choose.body[i],acts.s,e[i],acts.can2,acts.time); 

					}
				}
			}


			optionsing.prototype.show=function()//显示 
			{
				var  show=function()
				{  
					this.s=function(el)
					{
						el.style.display="block"
					}
				}
				this.act(show)
				return this;

			}


			optionsing.prototype.hidden=function()//隐藏
			{
				var  hidden=function(el)
				{  
					this.s=function(el)
					{
						el.style.display="none";
					}
				}
				this.act(hidden)
				return this;
			}


			optionsing.prototype.slidedown=function(time)//下滑
			{ 

				var slide=function()
				{   this.time=time;
					this.s=function(el,el2,time)
					{
						el.style.display="block";
						height=el.clientHeight;
						el.style.height="0px";
						el.style.overflow="hidden"
						el.style.transition="none";
						var down=function(el,height,time)
						{
							if(time)
							{
								time=time/1000;
								el.style.height=height+"px";
								el.style.transition="all "+time+"s";
							}
							else
							{
								el.style.height=height+"px";
								el.style.transition="all 0.2s";
							}
						}
						setTimeout(function(){down(el,height,time)},0)
					}
				}
				this.act(slide);
				return this;
			}



			optionsing.prototype.fadein=function(time)
			{
				var fadein=function()
				{   this.time=time;
					this.s=function(el,el2,time)
					{
						el.style.display="block";
						el.style.opacity=0;
						el.style.transition="none";
						var down=function(el,time)
						{
							if(time)
							{
								time=time/1000;
								el.style.opacity=1;
								el.style.transition="all "+time+"s";
							}
							else
							{
								el.style.height=1;
								el.style.transition="all 0.2s";
							}
						}
						setTimeout(function(){down(el,time)},0)
					}
				}
				this.act(fadein);
				return this;
			}



			optionsing.prototype.swithclass=function(el,cl,alls)
			{
				var tagname,newcl,newclass,excl,newcl1;
				if(cl)
				{
					excl=new RegExp(cl)
					for(i=0;i<alls.length;i++)
					{
						if(excl.test(alls[i].className))
						{
							newcl1=alls[i];
							newcl1.p=true;
							newcl=alls[i];

						}
						else
						{
							newcl=alls[i].querySelector("."+cl);
						}
						if(newcl)
						{
							newclass=newcl.className.replace(cl,"");
							newcl.className=newclass;
							tagname=newcl.localName;
						}
					}
					if(el.index+1)
					{

						if(newcl1&&newcl1.p)
						{
							newcl=el;
						}
						else
						{
							newcl=el.querySelector(tagname);
						}
						newclass=newcl.className+" "+cl;
						newcl.setAttribute("class",newclass);
					} 
				}
			}



optionsing.prototype.tabs=function(acts,time)//选项卡
{
	var act;
	var tabs=function()
	{
		this.time=time;
		this.can2="that.content.body";
		this.s=function(el,el1,time)
		{
			for(var i in el1)
			{
				el1[i].style.display="none";

			}
			el.style.display="block";
		}
	}
	if(acts)
	{
		act=this;
		act[acts](time);
	}
	this.act(tabs);
	return this;
}



optionsing.prototype.roll=function(el,el2,d)
{

	if(el.index>0)
	{
		if(el.cl)
			el2[el.index-1].className=el2[el.index-1].className.replace(" "+el.cl,"");
	}
	if(el.index==el.maxl)
	{
		el.index=0;
	}
	if(el.cl)
	{
		el2[el.index].className=el2[el.index].className.replace(" "+el.cl,"");
		el2[el.index].className+=" "+el.cl;
	}
		el.style.transform="translate"+el.d+"("+-el.wrap*el.index+"px)";
		el.style.transition="transform "+el.time/1000+"s";

	}


optionsing.prototype.rowroll=function(pre,next,wrap,d)
	{
		var pres=document.querySelector(pre);
		var nexts=document.querySelector(next);
		var that=this;

		if(!that.content.body[0].d)
		{
			that.content.body[0].d=d||"X";
		}

		that.content.body[0].wrap=that.content.body[0].wrap||wrap;
		that.content.body[0].maxl=that.content.body[0].maxl||parseInt(that.content.body[0].clientWidth/wrap)+1;
		that.content.body[0].time=that.content.body[0].time||500;

		pres.addEventListener("click",function()
		{
			if(that.content.body[0].index>0)
			{
				that.content.body[0].index--;
				that.roll(that.content.body[0],that.choose.body,that.content.body[0].d);
			}
		})
		nexts.addEventListener("click",function()
		{
			that.content.body[0].index++;
			that.roll(that.content.body[0],that.choose.body,that.content.body[0].d);
		})

		return this;
	}


	optionsing.prototype.tabroll=function(d,wrap,time,cl)
	{

		var that=this;
		var tabroll=function(ev)
		{
			this.time=time;
			this.can2="[ev.toElement,'"+cl+"',that.choose.body]";
			this.s=function(el,el1,time)
			{

				el.index=el1[0].index;
				el.style.transform="translate"+d+"("+-el1[0].index*wrap+"px)";
				el.style.transition="all "+(time/1000)+"s";
				that.swithclass(el1[0],el1[1],el1[2]);

			}
		}
		this.act(tabroll);
		return this;
	}






	optionsing.prototype.autoroll=function(d,cl,wrap,time,time2)
	{
		var maxl=this.choose.body.length;
		var el=this.content.body[0];
		var el2=this.choose.body;
		var times,that=this;
		el.index=0;
		el.cl=cl;
		el.wrap=wrap;
		el.maxl=maxl;
		el.time=time2||500;
		el.d=d||"X";
		this.roll(el,el2,d);
		times=time||5000;
		var timer=setInterval(function(){el.index++;that.roll(el,el2,d)},times)
		el.parentNode.addEventListener("mouseover",function(){
			clearInterval(timer);

		})
		el.parentNode.addEventListener("mouseout",function(){
			timer=setInterval(function(){el.index++;that.roll(el,el2,d)},times);
		})
		return this;
	}

	optionsing.prototype.css=function(csst,el)
	{
		if(el)
		{
			el=(typeof el=="string")?document.querySelectorAll(el):[el];
		}
		else
		{
			el=this.content.body;
		}
		for(i=0;i<el.length;i++)
		{
			el[i].style.cssText=csst;
		}
		return this;
	}


	optionsing.prototype.addclass=function(clname,el)
	{
		var excl;
		excl=new RegExp(clname);
		if(el)
		{
			el=(typeof el=="string")?document.querySelectorAll(el):[el];
		}
		else
		{
			el=this.content.body;
		}
		for(i=0;i<el.length;i++)
		{
			if(!excl.test(el[i].className))
			{
				el[i].className+=" "+clname;
			}
		}
		return this;
	}


	optionsing.prototype.removeclass=function(clname,el)
	{
		var excl,newcl;
		excl=new RegExp(clname);
		if(el)
		{
			el=(typeof el=="string")?document.querySelectorAll(el):[el];
		}
		else
		{
			el=this.content.body;
		}
		for(i=0;i<el.length;i++)
		{
			if(excl.test(el[i].className))
			{
				newcl=el[i].className.replace(" "+clname,"");
				el[i].className=newcl;
			}
		}
		return this;
	}


	optionsing.prototype.html=function(str,el)
	{
		if(el)
		{
			el=(typeof el=="string")?document.querySelectorAll(el):[el];
		}
		else
		{
			el=this.content.body;
		}
		for(i=0;i<el.length;i++)
		{

			el[i].innerHTML=str;

		}
		return this;
	}

	optionsing.prototype.func=function(f)
	{
		if(f instanceof Object)
		{
			f=f.bind(this)
		}
		var cf=function()
		{
			this.can2="ev"
			this.s=f
		}
		this.act(cf)
		return this;
	}


	optionsing.prototype.animate=function(m,time,cellback)
	{
for(i in m)
{
	
}		
}
//拖拽方法，参数分别为回执函数,是否影响其他元素,是否拖拽后返回,是否仅仅在父级内
optionsing.prototype.move=function(cellback,n,nochange,container)
{
	var a=0,el,t,l;
	el=this.choose.body[0];
	if(container)
	{
		container=document.querySelector(container);
		container.style.position="relative";
	}
	t=el.offsetTop;
	l=el.offsetLeft;
	var ranging=function(e,el,t,l)
	{   
		a=1;
		el.c=e.clientY-parseInt(el.offsetTop)+t;
		el.d=e.clientX-parseInt(el.offsetLeft)+l;

		if(!n)
		{
			el.style.position="relative";
		}
		else
		{
			el.style.position="absolute";	
		}
	}

	var movety=function(el,cellback)
	{
		a=0;  
		if(typeof cellback=="function")
		{
			cellback()
		}
		if (nochange)
		{
			el.style.position="static";
			el.style.top=0;
			el.style.left=0;
		}
	}


	var smove=function(ev,container,el,t,l)
	{

		var e1,e2,containers,top,left;
		if (a==1) 
		{
			e1=ev.clientY;
			e2=ev.clientX;
			el.style.top=e1-el.c+"px";
			el.style.left=e2-el.d+"px";
			if(container)
			{
				top=container.clientHeight-el.offsetHeight-t;
				left=container.clientWidth-el.offsetWidth-l;
				if(parseInt(el.style.top)>top)
				{
					el.style.top=top+"px"
				}
				if(parseInt(el.style.top)<-t)
				{
					el.style.top=-t+"px"
				}
				if(parseInt(el.style.left)>left)
				{
					el.style.left=left+"px";
				}									
				if(parseInt(el.style.left)<-l)
				{
					el.style.left=-l+"px";

				}
			}


		}
	}
	el.addEventListener("mousedown",function(e){ranging(e,el,t,l)});
	el.addEventListener("mouseup",function(){movety(el,cellback)});
	window.addEventListener("mousemove",function(ev){smove(ev,container,el,t,l)});
	return this;
}

function gg(choose,content,ev)
{
	var gg=new optionsing(choose,content,ev);
	return gg;
}

function d(el)
{
	var d=document.querySelectorAll(el);
	return d;
}







