function  click(e){


  chrome.tabs.executeScript(null,
  {code: "document.body.style.backgroundImage='url(" + images[e.target.id]
    +"'"

  });
  window.close();
}
document.addEventListener('DOMContentLoaded', function(){

  var divs= document.querySelectorAll('div');
  for (var i = 0 ; i<divs.length; i++){
    divs[i].addEventListener('click',click);
  }
});
var images ={



  joe : 'https://www.aussiespecialist.com/content/asp/en_gb/sales-resources/image-and-video-galleries/jcr:content/mainParsys/hero/image.adapt.1663.medium.jpg',

  kate:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd8cAJmOsrWimMAMpTAFOPURbw4q7uDKKxau1nimZ4V-usMb0w',

  david: 'https://fortunedotcom.files.wordpress.com/2016/12/youtube1.gif',
  chris:  'https://fortunedotcom.files.wordpress.com/2016/12/youtube1.gif'
}