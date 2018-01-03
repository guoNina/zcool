var animations = [
  {
    in:function () {
      var img = $(".wrap>.content>.contentList firstLi img");
      setTimeout(function () {
        $(img).css({
          opacity:1
        });
      },1000)
    }
  }
]