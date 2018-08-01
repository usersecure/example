

function init(){
	let wrapBig = document.querySelector('#wrapBig');
	let smallImg = document.querySelector('#smallImg');
	let bigImg = document.querySelector('#bigImg');
	let bigWrap = document.querySelector('#bigWrap');
	let areaSelect = document.querySelector('#areaSelect');
	let listWrap = document.querySelector('#listWrap');
	let oAlinks = listWrap.getElementsByTagName('a');
	wrapBig.onmousemove = function(e){
		toggleShow(bigWrap,areaSelect,'block');
		areaMove(e,areaSelect);
	}
	wrapBig.onmouseout = function(e){
		toggleShow(bigWrap,areaSelect,'none')
	}

	// Array.prototype.forEach.call(oAlinks, args...: any)
	for(let i=0,l=oAlinks.length;i<l;i++){

		oAlinks[i].addEventListener('mouseover', function(){
			// console.log(i)
			removeClass(oAlinks,i)
			smallImg.src = this.getElementsByTagName('img')[0].getAttribute('src');
			bigImg.src = this.getElementsByTagName('img')[0].getAttribute('src');
			// console.log(this.getElementsByTagName('img')[0].getAttribute('src'))
			this.className += ' active';
		});
	}
	
}

function toggleShow(ele,area,isShow){
	ele.style.display = isShow;
	area.style.display = isShow;
}
function areaMove(e,ele){
	let wrapBig = document.querySelector('#wrapBig');
	let bigImg = document.querySelector('#bigImg');

	let l = e.clientX - wrapBig.offsetLeft - ele.offsetWidth/2;
	let t = e.clientY - wrapBig.offsetTop - ele.offsetHeight/2;

	// console.log(l,t)

	if(e.clientX<(wrapBig.offsetLeft+ele.offsetWidth/2)){
		ele.style.left = 0;
	}else if(e.clientX>(wrapBig.offsetLeft+wrapBig.offsetWidth/2+ele.offsetWidth/2)){
		ele.style.left = wrapBig.offsetWidth/2 +'px';
	}else{
		ele.style.left = l + 'px';
		bigImg.style.left =  - Math.floor((400*l)/200) + 'px';
	}

	if(e.clientY<(wrapBig.offsetTop+ele.offsetHeight/2)){
		ele.style.top = 0;
	}else if(e.clientY>(wrapBig.offsetTop+wrapBig.offsetHeight/2+ele.offsetHeight/2)){
		ele.style.top = 200 + 'px';
	}else{
		ele.style.top = t + 'px';
		bigImg.style.top =  - Math.floor((400*t)/200) + 'px';

	}
}
function removeClass(eles,index){
	for(let i = 0,l = eles.length; i<l;i++){
		if(i==index){
			continue;
		}else{
			// eles[i].className.replace('active', '');
			eles[i].className = '';
		}
	}
}



window.onload = init;