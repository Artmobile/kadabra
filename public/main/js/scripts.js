include("js/jquery.color.js");

include("js/jquery.backgroundpos.js");
include("js/jquery.easing.js");
include("js/jquery.mousewheel.js");
include("js/jquery-ui-1.8.11.custom.min.js");
include("js/cScroll.js");
include("js/forms.js");
include("js/googleMap.js");
include("js/superfish.js");
include("js/switcher.js");
include("js/jquery.jqtransform.js");

function include(url) {
    document.write('<script src="' + url + '"></script>');
}
var MSIE = false, content;

function addAllListeners() {
    $('.soc_links>li>a').hover(
        function(){
        	$(this).children('img').stop().animate({'top':'-8px'},400,'easeOutExpo');  
        },
        function(){
            $(this).children('img').stop().animate({'top':'0'},500,'easeOutCubic');
        }
    );
    $('.scrollDown').hover(
        function(){
            $(this).stop().animate({'backgroundPosition':'center top'},300,'easeOutExpo');
        },
        function(){
            $(this).stop().animate({'backgroundPosition':'center bottom'},400,'easeOutCubic');
        }
    );
    $('.scrollUp').hover(
        function(){
            $(this).stop().animate({'backgroundPosition':'center bottom'},300,'easeOutExpo');
        },
        function(){
            $(this).stop().animate({'backgroundPosition':'center top'},400,'easeOutCubic');
        }
    );
    var val1 = $('.readMore').css('color');
    $('#page_about .readMore').hover(
        function(){
        	$(this).stop().animate({'color':'#57d19a'},300,'easeOutExpo');  
        },
        function(){
            $(this).stop().animate({'color':val1},500,'easeOutCubic');
        }
    );  
    $('#page_about .readMore').hover(
        function(){
        	$(this).stop().animate({'color':'#57d19a'},300,'easeOutExpo');  
        },
        function(){
            $(this).stop().animate({'color':val1},500,'easeOutCubic');
        }
    );
    $('#page_tours .readMore').hover(
        function(){
        	$(this).stop().animate({'color':'#43cdcc'},300,'easeOutExpo');  
        },
        function(){
            $(this).stop().animate({'color':val1},500,'easeOutCubic');
        }
    );  
    $('#page_tours .readMore').hover(
        function(){
        	$(this).stop().animate({'color':'#43cdcc'},300,'easeOutExpo');  
        },
        function(){
            $(this).stop().animate({'color':val1},500,'easeOutCubic');
        }
    );  
    $('#page_hotels .readMore').hover(
        function(){
        	$(this).stop().animate({'color':'#94c93c'},300,'easeOutExpo');  
        },
        function(){
            $(this).stop().animate({'color':val1},500,'easeOutCubic');
        }
    ); 
    var val2 = $('.readMore2').css('color');
    var val3 = $('.readMore2').css('backgroundColor');
    $('.readMore2').hover(
        function(){
            if (!MSIE) {
                $(this).stop().animate({'color':val3,'backgroundColor':val2},300,'easeOutExpo');  
            }else {
                $(this).addClass('hover');
            }       
        },
        function(){
            if (!MSIE) {
                $(this).stop().animate({'color':val2,'backgroundColor':val3},500,'easeOutCubic');  
            } else {
                $(this).removeClass('hover');
            }
        }
    );
    var val5 = $('.closeBtn>span').css('color');
    $('.closeBtn').hover(
        function(){
        	$(this)
                .children('strong').stop().animate({'backgroundPosition':'center bottom'},300,'easeOutExpo').end()
                .find('span>span').stop().animate({'height':'100%'},300,'easeOutExpo');  
        },
        function(){
            $(this)
                .children('strong').stop().animate({'backgroundPosition':'center top'},500,'easeOutCubic').end()
                .find('span>span').stop().animate({'height':'0'},500,'easeOutCubic');
        }
    ); 
}

function ON_READY() {
    /*SUPERFISH MENU*/   
    $('.menu #menu').superfish({
	   delay: 800,
	   animation: {
	       opacity: 'show'
	   },
       speed: 'slow',
       autoArrows: false,
       dropShadows: false
    });
}
function ON_LOAD(){
    $('.spinner').fadeOut();
    
    MSIE = ($.browser.msie) && ($.browser.version <= 8);
    if (($.browser.msie) && ($.browser.version == 9)) {
        $('#form1 input').css({'paddingLeft':1,'paddingRight':1});
        $('#form1 span').css({'letterSpacing':'-1px'});
    }
    
    var wths = [82,68,51,65];
    $('#form1').jqTransform({imgPath:'images/'});
    $('#form1').find('.jqTransformSelectWrapper').eq(0).css('width',wths[0]).children().css('width',wths[0]);
    $('#form1').find('.jqTransformSelectWrapper').eq(1).css('width',wths[0]).children().css('width',wths[0]);
    $('#form1').find('.jqTransformSelectWrapper').eq(2).css('width',wths[1]).children().css('width',wths[1]);
    $('#form1').find('.jqTransformSelectWrapper').eq(3).css('width',wths[2]).children().css('width',wths[2]);
    $('#form1').find('.jqTransformSelectWrapper').eq(4).css('width',wths[3]).children().css('width',wths[3]);
    
    $('.clearBtn').click(function (){
       $('#form1 input,#form1 textarea').val('');
        $("div.jqTransformSelectWrapper").each(function() {
            $("div span", this).text($("ul li:first", this).text());
            $("ul li a.selected", this).removeClass("selected");
            $("ul li:first a", this).addClass("selected");
        });
    });
    
    $('.scroll').cScroll({
        duration: 500,
        easing: 'easeOutExpo',
        step:'190px'
    });
    $('.scrollUp').click(function(){
		$(this).parent().parent().siblings('.scroll').cScroll('up');
		return false;
    });
    $('.scrollDown').click(function(){
		$(this).parent().parent().siblings('.scroll').cScroll('down');
		return false;
    });
    
    var coords = [  {x : 0, y : 0},
                    {x : 337, y : -49},
                    {x : -225, y : 50},
                    {x : -365, y : -60},
                    {x : -325, y : -269},
                    {x : 135, y : -310},
                    {x : 338, y : -40}
    ];
    
    //content switch
    content = $('#content');
    content.tabs({
        show:0,
        preFu:function(_){
            _.li.css({'visibility':'hidden'});		
            _.li.find('>div>span').css('opacity','0');		
        },
        actFu:function(_){
            if(_.curr){
                var _class =_.curr.attr('class');
                if (_class) {
                    _class = parseInt(_class[_class.length-1]);
                }
                if (!$.isNumeric(_class)) {
                    if (_.n >= 0){
                        _class = _.n;
                    }
                }
                content.stop(true).delay(800).animate({'left': coords[_class].x, 'top': coords[_class].y},1000,'easeOutExpo')
                
                if (!MSIE){
                    _.curr.children('div:first-child').find('span').eq(1).stop(true).delay(200).animate({'opacity':'1'},800,'easeOutBounce')
                    _.curr.children('div:first-child').find('span').eq(0).stop(true).delay(600).animate({'opacity':'1'},600,'easeOutExpo')
                    _.curr.css({'opacity':'0','visibility':'visible'}).stop(true).delay(200).show().animate({'opacity':'1'},{duration:1000,easing:'easeOutCubic'});
                } else {
                    _.curr.children('div:first-child').find('span').eq(1).css({'opacity':'1'})
                    _.curr.children('div:first-child').find('span').eq(0).css({'opacity':'1'})
                    _.curr.css({'opacity':'0','visibility':'visible'}).show().css({'opacity':'1'});
                }
            }
    		if(_.prev){
  		        if (!MSIE){
      		        _.prev.children('div:first-child').find('span').eq(1).stop(true).delay(300).animate({'opacity':'0'},400,'easeInOutExpo');
                    _.prev.children('div:first-child').find('span').eq(0).stop(true).animate({'opacity':'0'},400,'easeInOutExpo')
                    _.prev.show().stop(true).animate({'opacity':'0'},{duration:400,easing:'easeInOutExpo',complete:function(){
                                if (_.prev){ _.prev.css({'visibility':'hidden'});}
                            }
    		              });
                } else {
                    _.prev.children('div:first-child').find('span').eq(1).css({'opacity':'0'});
                    _.prev.children('div:first-child').find('span').eq(0).css({'opacity':'0'})
                    _.prev.show().stop(true).css({'opacity':'0','visibility':'hidden'});
                }
            }            
  		}
    });
    var defColor = $('#menu>li>a').eq(0).css('color'); 
    var nav = $('.menu');
    nav.navs({
		useHash:true,
        defHash: '#!/page_about',
        hoverIn:function(li){
            if (!MSIE) {
                $('>strong',li).stop(true).animate({'opacity':'1'},600,'easeOutBounce');
                $('>span',li).stop(true).delay(300).animate({'opacity':'1'},600,'easeOutBounce');
                $('>em',li).stop(true).delay(600).animate({'opacity':'1'},600,'easeOutExpo');
            } else {
                $('>strong',li).css({'opacity':'1'});
                $('>span',li).css({'opacity':'1'});
                $('>em',li).css({'opacity':'1'});
            }
        },
        hoverOut:function(li){
            if ((!li.hasClass('with_ul')) || (!li.hasClass('sfHover'))) {
                if (!MSIE) {
                    $('>strong',li).stop(true).delay(500).animate({'opacity':'0'},400,'easeInOutExpo');
                    $('>span',li).stop(true).delay(300).animate({'opacity':'0'},400,'easeInOutExpo');
                    $('>em',li).stop(true).animate({'opacity':'0'},400,'easeInOutExpo');                
                } else {
                    $('>strong',li).css({'opacity':'0'});
                    $('>span',li).css({'opacity':'0'});
                    $('>em',li).css({'opacity':'0'});
                }
            }
        }
    })
    .navs(function(n){
   	    $('#content').tabs(n);
   	});
    
    setTimeout(function(){  $('body').css({'overflow':'visible'}); },300);    
    addAllListeners();
}

$(document).ready(ON_READY);
$(window).load(ON_LOAD);