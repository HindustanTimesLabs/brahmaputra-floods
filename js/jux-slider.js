$(document).ready(function(){
  //for detecting change and firing zing chart function
  $('#sat-image-location').change(function() {
    getVals();
  });

  // Initialize Sliders
  var sliderSections = document.getElementsByClassName("range-slider");
  for( var x = 0; x < sliderSections.length; x++ ){
    var sliders = sliderSections[x].getElementsByTagName("input");
    for( var y = 0; y < sliders.length; y++ ){
      if( sliders[y].type ==="range" ){
        sliders[y].oninput = getVals;
        // Manually trigger event first time to display values
        sliders[y].oninput();
      }
    }
  }
});


// Script for the slider
function JuxtoseSlider(before,after,month1,year1,month2,year2){
  document.getElementById('juxtpose-slider').innerHTML='';

  folder=$('#sat-image-location').val();
  slider = new juxtapose.JXSlider('#juxtpose-slider',
  [
    {
      src: 'sat-img/'+folder+'/'+before+'.jpeg',
      label: month1+', '+year1
    },
    {
      src: 'sat-img/'+folder+'/'+after+'.jpeg',
      label: month2+', '+year2
    }
  ],
  {
    animate: true,
    showLabels: true,
    showCredits: false,
    startingPosition: "50%",
    makeResponsive: true
  });
}



function giveYear(num){
  if(num==0){
    return '2013';
  } else if(num==1){
    return '2014';
  } else if(num==2){
    return '2015';
  } else if(num==3){
    return '2016';
  }
}

function giveMonth(num){
  if(num==0){
    return 'January';
  }
  else if(num==1){
    return 'February';
  }
  else if(num==2){
    return 'March';
  }
  else if(num==3){
    return 'April';
  }
  else if(num==4){
    return 'May';
  }
  else if(num==5){
    return 'June';
  }
  else if(num==6){
    return 'July';
  }
  else if(num==7){
    return 'August';
  }
  else if(num==8){
    return 'September';
  }
  else if(num==9){
    return 'October';
  }
  else if(num==10){
    return 'November';
  }
  else if(num==11){
    return 'December';
  }
}

function getVals(){
  // Get slider values
  var parent = $('.range-slider');
  var slides = $("input");
  var slide1 = parseFloat( slides[0].value );
  var slide2 = parseFloat( slides[1].value );
  // Neither slider will clip the other, so make sure we determine which is larger
  if( slide1 > slide2 ){ var tmp = slide2; slide2 = slide1; slide1 = tmp; }

  var displayElement = $(".rangeValues")[0];
  //displayElement.innerHTML = giveMonth(slide1%12)+', ' +giveYear(Math.floor(slide1/12)) + " - " + giveMonth(slide2%12)+', ' +giveYear(Math.floor(slide2/12));
  displayElement.innerHTML = '(Slide the cirlces along the line to view satellite images from different months)';
  month1=giveMonth(slide1%12);
  year1=giveYear(Math.floor(slide1/12));
  month2=giveMonth(slide2%12);
  year2=giveYear(Math.floor(slide2/12));
  JuxtoseSlider(slide1,slide2,month1,year1,month2,year2);
}
