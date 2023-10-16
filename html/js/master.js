var Body = {
    setBackgroundColor : function(color){
      $('body').css('background-color', color);
      // document.querySelector('body').style.backgroundColor = color;
    },
    setColor : function(color){
      $('body').css('color', color);
      // document.querySelector('body').style.color = color;
    }
  }
  var Links = {
    setColor : function(color){
      // var i = 0;
      // var alist = document.querySelectorAll('a');
      // while (i < alist.length){
      //   alist[i].style.color = color;
      //   i = i + 1;
      // }
      $('a').css('color', color);
    }
  }
  
  var aTags = {
    setUnder_del : function(){
      $('a').css('text-decoration', 'none');
    }, 
    setUnder : function(){
      $('a').css('text-decoration', 'underline');
    }
  }
  
  
  function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value=='night'){
      Body.setBackgroundColor('black');
      Body.setColor('white');
      Links.setColor('powderblue'); 
      self.value='day';
    } else {
      Body.setBackgroundColor('white');
      Body.setColor('black');        
      Links.setColor('blue');
      self.value='night';
    }
  } 
  
  function underLineHandler(self){
    if(self.value=='del'){
      aTags.setUnder_del();
      self.value = 'underline';
    } else {
      aTags.setUnder();
      self.value = 'del';
    }
  }

  var num = "";

  function calc_reset(){
    num = "";
    $("#tostring").val(0);
  }
    
  function calc_event(i){
    num = num + i;
    $("#tostring").val(num);
  }
  function calc_result(){
    $("#tostring").val(eval(num));
  }