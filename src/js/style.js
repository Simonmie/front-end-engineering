window.onload = function () {
  // menu下拉列表
  let navMenu = document.getElementsByClassName('open');
  let menuList = document.getElementsByClassName('nav-center-list');
  for (let i = 0; i < navMenu.length; i++) {
    navMenu[i].addEventListener('mouseenter', function () {
      for (let k = 0; k < menuList.length; k++) {
        menuList[k].classList.add('conceal');
      }
      menuList[i].classList.remove('conceal');
    });
  }
  let search = document.getElementById('sear');
  let gIndex = 0;
  let goods = ['电脑','台灯','小米平板 Pro5','超声波清洗器','扫地机器人'];
  setInterval(() => {
    search.placeholder = goods[gIndex];
    gIndex++;
    if(gIndex === goods.length) gIndex = 0;
  }, 3000);

  let slideshow = document.querySelector('.slideshow');  // 轮播图容器
  let imgs = document.getElementsByClassName('slideItem');  // 轮播图片
  let prev = document.getElementsByClassName('sildeshow-pre')[0]; // 上一张
  let next = document.getElementsByClassName('sildeshow-next')[0]; // 下一张
  let navs = document.getElementsByClassName('navItem');  //导航点
  let index = 0;
  let timer = null;

  prev.addEventListener('click',function(){
    prevPic();
  });
  next.addEventListener('click',function(){
    nextPic();
  });
  for(let i = 0; i < navs.length; i++){
    navs[i].addEventListener('click',function(){
      index = i;
      addIndex();
    });
  }
  slideshow.onmouseenter = ()=>{
    clearInterval(timer);
  }
  slideshow.onmouseleave = ()=>{
    outoChange();
  }

  outoChange();
  // 自动切换
  function outoChange(){
    clearInterval(timer);
    timer = setInterval(() => {
    nextPic();
    }, 3000);
  }
  // 轮播切换
  function addIndex() {
      clearActive();
      imgs[index].className = 'slideItem slideActive';
      navs[index].className = 'navItem navHover';
  }
  // 上一张
  function prevPic(){
    index--;
    index = index >= 0 ? index : imgs.length-1;
    addIndex();
  }
  // 下一张
  function nextPic(){
    index++;
    index = index % imgs.length; 
    addIndex();
  }
  // 初始化
  function clearActive() {
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].className = 'slideItem';
      navs[i].className = 'navItem';
    }
  }

  // 商品展示块内容切换
  let s1 = document.getElementsByClassName('smd-tem1');  /* 获取切换的内容块 */
  let s2 = document.getElementsByClassName('smd-tem2');
  let h = document.getElementsByClassName('hot');   /* 获取切换的按钮 */
  let w = document.getElementsByClassName('wear');
  let ha = [];
  let wa = [];

  // 遍历循环切换按钮绑定事件
  for (let i = 0; i < w.length; i++) {
    wa.push(w[i].firstElementChild);
    w[i].onmousemove = function () {
      wa[i].className = 'hover';
      ha[i].className = '';
      ha[i].style.color = '#333';
      ha[i].style.borderBottom = 'none';
      s2[i].style.display = 'block';
      s1[i].style.display = 'none';
    }
    ha.push(h[i].firstElementChild);
    h[i].onmousemove = function () {
      ha[i].className = 'hover';
      wa[i].className = '';
      s1[i].style.display = 'block';
      s2[i].style.display = 'none';
    }
  }
  
  // 四栏切换
  let tab1 = document.getElementsByClassName('tab1');
  let tab2 = document.getElementsByClassName('tab2');
  let tab3 = document.getElementsByClassName('tab3');
  let tab4 = document.getElementsByClassName('tab4');

  let mod1 = document.getElementsByClassName('mod1');
  let mod2 = document.getElementsByClassName('mod2');
  let mod3 = document.getElementsByClassName('mod3');
  let mod4 = document.getElementsByClassName('mod4');

  for(let i = 0; i < tab1.length; i++){
    tab1[i].onmouseenter = function(){
      this.className = 'tab1 mineSty';
      tab2[i].className = 'tab2 otherSty';
      tab3[i].className = 'tab3 otherSty';
      tab4[i].className = 'tab4 otherSty';
      mod1[i].style.display = 'block';
      mod2[i].style.display = 'none';
      mod3[i].style.display = 'none';
      mod4[i].style.display = 'none';
    };
    tab2[i].onmouseenter = function(){
      this.className = 'tab2 mineSty';
      tab1[i].className = 'tab1 otherSty';
      tab3[i].className = 'tab3 otherSty';
      tab4[i].className = 'tab4 otherSty';
      mod2[i].style.display = 'block';
      mod1[i].style.display = 'none';
      mod3[i].style.display = 'none';
      mod4[i].style.display = 'none';
    };
    tab3[i].onmouseenter = function(){
      this.className = 'tab3 mineSty';
      tab1[i].className = 'tab1 otherSty';
      tab2[i].className = 'tab2 otherSty';
      tab4[i].className = 'tab4 otherSty';
      mod3[i].style.display = 'block';
      mod1[i].style.display = 'none';
      mod2[i].style.display = 'none';
      mod4[i].style.display = 'none';
    };
    tab4[i].onmouseenter = function(){
      this.className = 'tab4 mineSty';
      tab1[i].className = 'tab1 otherSty';
      tab2[i].className = 'tab2 otherSty';
      tab3[i].className = 'tab3 otherSty';
      mod4[i].style.display = 'block';
      mod1[i].style.display = 'none';
      mod2[i].style.display = 'none';
      mod3[i].style.display = 'none';
    };

  }

  // 固定窗口
  let toolBar = document.getElementsByClassName('tool-bar-list');
  let barSta = document.getElementsByClassName('static');
  let barHov = document.getElementsByClassName('Bhover');
  let top = document.getElementsByClassName('toTop')[0];
  for (let i = 0; i < toolBar.length; i++) {
    toolBar[i].onmouseenter = function () {
      barSta[i].style.display = 'none';
      barHov[i].style.display = 'block';
    };
    toolBar[i].onmouseleave = function () {
      barSta[i].style.display = 'block';
      barHov[i].style.display = 'none';
    };
  }

  // 返回顶部
  let html = document.getElementsByTagName('html')[0];
  html.addEventListener('wheel', distance);
  html.addEventListener('mousemove', distance);
  top.addEventListener('click', function () {
    
    
    let ID = setInterval(() => {
      let num = document.documentElement.scrollTop;
      if(num > 0){
        num -= 30;
        document.documentElement.scrollTop = num;
        console.log(num);
      }else{
        clearInterval(ID);
      } 
    }, 1);
  });

  function distance() {
    let srctop = document.documentElement.scrollTop;
    if (srctop >= 860) {
      top.style.display = 'block';
    } else {
      top.style.display = 'none';
    }
  }


};