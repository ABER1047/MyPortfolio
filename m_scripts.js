

$(window).scroll(function()
{
var scroll = $(window).scrollTop();
    if (scroll > 64)
    {
        $('.trailer_bg').css(
        {
        filter : "blur(" + (scroll*0.05) + "px)",
        opacity : (1 - scroll*0.0015)
        })
    }
    else
    {
        $('.trailer_bg').css(
        {
        filter : "blur(0px)",
        opacity : 1
        })
    }
document.querySelector(".trailer_video").style.transform = "translateY(-"+scroll+"px)"
})













document.querySelector(".showcase_theme_button1").addEventListener("click",function()
{
document.querySelector(".showcase_1").style.transform = "translate(0vw)"
document.querySelector(".showcase_2").style.transform = "translate(-100vw)"
document.querySelector(".showcase_3").style.transform = "translate(-100vw)"
document.querySelector(".showcase_4").style.transform = "translate(-100vw)"
document.querySelector(".showcase_theme_button1").style.background = "#8f9db0"
document.querySelector(".showcase_theme_button2").style.background = "#d4d5d7"
document.querySelector(".showcase_theme_button3").style.background = "#d4d5d7"
document.querySelector(".showcase_theme_button4").style.background = "#d4d5d7"
})

document.querySelector(".showcase_theme_button2").addEventListener("click",function()
{
document.querySelector(".showcase_1").style.transform = "translate(-100vw)"
document.querySelector(".showcase_2").style.transform = "translate(0vw)"
document.querySelector(".showcase_3").style.transform = "translate(-100vw)"
document.querySelector(".showcase_4").style.transform = "translate(-100vw)"

document.querySelector(".showcase_theme_button1").style.background = "#d4d5d7"
document.querySelector(".showcase_theme_button2").style.background = "#8f9db0"
document.querySelector(".showcase_theme_button3").style.background = "#d4d5d7"
document.querySelector(".showcase_theme_button4").style.background = "#d4d5d7"

//쇼케이스 2번 애니메이션 실행
setTimeout(showcase2_text1_anime,100)
})

document.querySelector(".showcase_theme_button3").addEventListener("click",function()
{
document.querySelector(".showcase_1").style.transform = "translate(-100vw)"
document.querySelector(".showcase_2").style.transform = "translate(-100vw)"
document.querySelector(".showcase_3").style.transform = "translate(0vw)"
document.querySelector(".showcase_4").style.transform = "translate(-100vw)"

document.querySelector(".showcase_theme_button1").style.background = "#d4d5d7"
document.querySelector(".showcase_theme_button2").style.background = "#d4d5d7"
document.querySelector(".showcase_theme_button3").style.background = "#8f9db0"
document.querySelector(".showcase_theme_button4").style.background = "#d4d5d7"

//쇼케이스 3번 애니메이션 실행
setTimeout(showcase3_text1_anime,100)
})

document.querySelector(".showcase_theme_button4").addEventListener("click",function()
{
document.querySelector(".showcase_1").style.transform = "translate(-100vw)"
document.querySelector(".showcase_2").style.transform = "translate(-100vw)"
document.querySelector(".showcase_3").style.transform = "translate(-100vw)"
document.querySelector(".showcase_4").style.transform = "translate(0vw)"

document.querySelector(".showcase_theme_button1").style.background = "#d4d5d7"
document.querySelector(".showcase_theme_button2").style.background = "#d4d5d7"
document.querySelector(".showcase_theme_button3").style.background = "#d4d5d7"
document.querySelector(".showcase_theme_button4").style.background = "#8f9db0"

//쇼케이스 4번 애니메이션 실행
setTimeout(showcase4_text1_anime,100)
})








document.querySelector(".showcase1_button1").addEventListener("click",function()
{
document.querySelector(".showcase1_image").style.transform = "translate(0vw)"
document.querySelector(".showcase1_button1").style.background = "#AD8264"
document.querySelector(".showcase1_button2").style.background = "#E0C9A8"
document.querySelector(".showcase1_button3").style.background = "#E0C9A8"
document.querySelector(".showcase1_button4").style.background = "#E0C9A8"
})

document.querySelector(".showcase1_button2").addEventListener("click",function()
{
document.querySelector(".showcase1_image").style.transform = "translate(-100vw)"
document.querySelector(".showcase1_button1").style.background = "#E0C9A8"
document.querySelector(".showcase1_button2").style.background = "#AD8264"
document.querySelector(".showcase1_button3").style.background = "#E0C9A8"
document.querySelector(".showcase1_button4").style.background = "#E0C9A8"
})

document.querySelector(".showcase1_button3").addEventListener("click",function()
{
document.querySelector(".showcase1_image").style.transform = "translate(-200vw)"
document.querySelector(".showcase1_button1").style.background = "#E0C9A8"
document.querySelector(".showcase1_button2").style.background = "#E0C9A8"
document.querySelector(".showcase1_button3").style.background = "#AD8264"
document.querySelector(".showcase1_button4").style.background = "#E0C9A8"
})

document.querySelector(".showcase1_button4").addEventListener("click",function()
{
document.querySelector(".showcase1_image").style.transform = "translate(-300vw)"
document.querySelector(".showcase1_button1").style.background = "#E0C9A8"
document.querySelector(".showcase1_button2").style.background = "#E0C9A8"
document.querySelector(".showcase1_button3").style.background = "#E0C9A8"
document.querySelector(".showcase1_button4").style.background = "#AD8264"
})









document.querySelector(".showcase1_trailer_button").addEventListener("mouseover",function()
{
document.querySelector(".showcase1_trailer_button").style.background = "#446A83"
document.querySelector(".showcase1_trailer_button").style.border = "2px solid #446A83"
})

document.querySelector(".showcase1_trailer_button").addEventListener("mouseleave",function()
{
document.querySelector(".showcase1_trailer_button").style.background = "#547282"
document.querySelector(".showcase1_trailer_button").style.border = "2px solid #547282"
})

document.querySelector(".showcase1_code_button").addEventListener("mouseover",function()
{
document.querySelector(".showcase1_code_button").style.background = "#547282"
})

document.querySelector(".showcase1_code_button").addEventListener("mouseleave",function()
{
document.querySelector(".showcase1_code_button").style.background = "#0C1019"
})






document.querySelector(".showcase2_button1").addEventListener("click",function()
{
document.querySelector(".showcase2_image").style.transform = "translate(0vw)"
document.querySelector(".showcase2_button1").style.background = "#AD8264"
document.querySelector(".showcase2_button2").style.background = "#E0C9A8"
document.querySelector(".showcase2_button3").style.background = "#E0C9A8"
document.querySelector(".showcase2_button4").style.background = "#E0C9A8"
})

document.querySelector(".showcase2_button2").addEventListener("click",function()
{
document.querySelector(".showcase2_image").style.transform = "translate(-100vw)"
document.querySelector(".showcase2_button1").style.background = "#E0C9A8"
document.querySelector(".showcase2_button2").style.background = "#AD8264"
document.querySelector(".showcase2_button3").style.background = "#E0C9A8"
document.querySelector(".showcase2_button4").style.background = "#E0C9A8"
})

document.querySelector(".showcase2_button3").addEventListener("click",function()
{
document.querySelector(".showcase2_image").style.transform = "translate(-200vw)"
document.querySelector(".showcase2_button1").style.background = "#E0C9A8"
document.querySelector(".showcase2_button2").style.background = "#E0C9A8"
document.querySelector(".showcase2_button3").style.background = "#AD8264"
document.querySelector(".showcase2_button4").style.background = "#E0C9A8"
})

document.querySelector(".showcase2_button4").addEventListener("click",function()
{
document.querySelector(".showcase2_image").style.transform = "translate(-300vw)"
document.querySelector(".showcase2_button1").style.background = "#E0C9A8"
document.querySelector(".showcase2_button2").style.background = "#E0C9A8"
document.querySelector(".showcase2_button3").style.background = "#E0C9A8"
document.querySelector(".showcase2_button4").style.background = "#AD8264"
})







document.querySelector(".showcase2_trailer_button").addEventListener("mouseover",function()
{
document.querySelector(".showcase2_trailer_button").style.background = "#446A83"
document.querySelector(".showcase2_trailer_button").style.border = "2px solid #446A83"
})

document.querySelector(".showcase2_trailer_button").addEventListener("mouseleave",function()
{
document.querySelector(".showcase2_trailer_button").style.background = "#547282"
document.querySelector(".showcase2_trailer_button").style.border = "2px solid #547282"
})

document.querySelector(".showcase2_code_button").addEventListener("mouseover",function()
{
document.querySelector(".showcase2_code_button").style.background = "#547282"
})

document.querySelector(".showcase2_code_button").addEventListener("mouseleave",function()
{
document.querySelector(".showcase2_code_button").style.background = "#0C1019"
})






document.querySelector(".showcase3_button1").addEventListener("click",function()
{
document.querySelector(".showcase3_image").style.transform = "translate(0vw)"
document.querySelector(".showcase3_button1").style.background = "#AD8264"
document.querySelector(".showcase3_button2").style.background = "#E0C9A8"
document.querySelector(".showcase3_button3").style.background = "#E0C9A8"
document.querySelector(".showcase3_button4").style.background = "#E0C9A8"
})

document.querySelector(".showcase3_button2").addEventListener("click",function()
{
document.querySelector(".showcase3_image").style.transform = "translate(-100vw)"
document.querySelector(".showcase3_button1").style.background = "#E0C9A8"
document.querySelector(".showcase3_button2").style.background = "#AD8264"
document.querySelector(".showcase3_button3").style.background = "#E0C9A8"
document.querySelector(".showcase3_button4").style.background = "#E0C9A8"
})

document.querySelector(".showcase3_button3").addEventListener("click",function()
{
document.querySelector(".showcase3_image").style.transform = "translate(-200vw)"
document.querySelector(".showcase3_button1").style.background = "#E0C9A8"
document.querySelector(".showcase3_button2").style.background = "#E0C9A8"
document.querySelector(".showcase3_button3").style.background = "#AD8264"
document.querySelector(".showcase3_button4").style.background = "#E0C9A8"
})

document.querySelector(".showcase3_button4").addEventListener("click",function()
{
document.querySelector(".showcase3_image").style.transform = "translate(-300vw)"
document.querySelector(".showcase3_button1").style.background = "#E0C9A8"
document.querySelector(".showcase3_button2").style.background = "#E0C9A8"
document.querySelector(".showcase3_button3").style.background = "#E0C9A8"
document.querySelector(".showcase3_button4").style.background = "#AD8264"
})



document.querySelector(".showcase3_code_button").addEventListener("mouseover",function()
{
document.querySelector(".showcase3_code_button").style.background = "#547282"
})

document.querySelector(".showcase3_code_button").addEventListener("mouseleave",function()
{
document.querySelector(".showcase3_code_button").style.background = "#0C1019"
})








document.querySelector(".showcase4_button1").addEventListener("click",function()
{
document.querySelector(".showcase4_image").style.transform = "translate(0vw)"
document.querySelector(".showcase4_button1").style.background = "#AD8264"
document.querySelector(".showcase4_button2").style.background = "#E0C9A8"
document.querySelector(".showcase4_button3").style.background = "#E0C9A8"
document.querySelector(".showcase4_button4").style.background = "#E0C9A8"
})

document.querySelector(".showcase4_button2").addEventListener("click",function()
{
document.querySelector(".showcase4_image").style.transform = "translate(-100vw)"
document.querySelector(".showcase4_button1").style.background = "#E0C9A8"
document.querySelector(".showcase4_button2").style.background = "#AD8264"
document.querySelector(".showcase4_button3").style.background = "#E0C9A8"
document.querySelector(".showcase4_button4").style.background = "#E0C9A8"
})

document.querySelector(".showcase4_button3").addEventListener("click",function()
{
document.querySelector(".showcase4_image").style.transform = "translate(-200vw)"
document.querySelector(".showcase4_button1").style.background = "#E0C9A8"
document.querySelector(".showcase4_button2").style.background = "#E0C9A8"
document.querySelector(".showcase4_button3").style.background = "#AD8264"
document.querySelector(".showcase4_button4").style.background = "#E0C9A8"
})

document.querySelector(".showcase4_button4").addEventListener("click",function()
{
document.querySelector(".showcase4_image").style.transform = "translate(-300vw)"
document.querySelector(".showcase4_button1").style.background = "#E0C9A8"
document.querySelector(".showcase4_button2").style.background = "#E0C9A8"
document.querySelector(".showcase4_button3").style.background = "#E0C9A8"
document.querySelector(".showcase4_button4").style.background = "#AD8264"
})







document.querySelector(".showcase4_code_button").addEventListener("mouseover",function()
{
document.querySelector(".showcase4_code_button").style.background = "#547282"
})

document.querySelector(".showcase4_code_button").addEventListener("mouseleave",function()
{
document.querySelector(".showcase4_code_button").style.background = "#0C1019"
})







if (window.innerWidth < 975)
{
document.querySelector(".theme_selector_button1").addEventListener("mouseover",function()
{
document.querySelector(".theme_selector_button1").style.color = "#E7D2B5"
})

document.querySelector(".theme_selector_button1").addEventListener("mouseleave",function()
{
document.querySelector(".theme_selector_button1").style.color = "white"
})
}
else
{
document.querySelector(".theme_selector_button1").addEventListener("mouseover",function()
{
document.querySelector(".theme_selector_button1").style.background = "#446A83"
document.querySelector(".theme_selector_button1").style.border = "2px solid #446A83"
})

document.querySelector(".theme_selector_button1").addEventListener("mouseleave",function()
{
document.querySelector(".theme_selector_button1").style.background = "#547282"
document.querySelector(".theme_selector_button1").style.border = "2px solid #547282"
})
}

document.querySelector(".theme_selector_button1").addEventListener("click",function()
{
window.scroll({top:0, behavior : "smooth"})
})




document.querySelector(".theme_selector_button2").addEventListener("mouseover",function()
{
document.querySelector(".theme_selector_button2").style.color = "#E7D2B5"
})

document.querySelector(".theme_selector_button2").addEventListener("mouseleave",function()
{
document.querySelector(".theme_selector_button2").style.color = "white"
})

document.querySelector(".theme_selector_button2").addEventListener("click",function()
{
//720이 2번째 칸
window.scroll({top:1900, behavior : "smooth"})
})





document.querySelector(".theme_selector_button3").addEventListener("mouseover",function()
{
document.querySelector(".theme_selector_button3").style.color = "#E7D2B5"
})

document.querySelector(".theme_selector_button3").addEventListener("mouseleave",function()
{
document.querySelector(".theme_selector_button3").style.color = "white"
})

document.querySelector(".theme_selector_button3").addEventListener("click",function()
{
//720이 2번째 칸
window.scroll({top:9999, behavior : "smooth"})
})









document.querySelector(".github_icon").addEventListener("mouseover",function()
{
document.querySelector(".github_icon").style.filter = "brightness(1)"
})

document.querySelector(".github_icon").addEventListener("mouseleave",function()
{
document.querySelector(".github_icon").style.filter = "brightness(0.7)"
})



document.querySelector(".discord_icon").addEventListener("mouseover",function()
{
document.querySelector(".discord_icon").style.filter = "brightness(1)"
})

document.querySelector(".discord_icon").addEventListener("mouseleave",function()
{
document.querySelector(".discord_icon").style.filter = "brightness(0.7)"
})



document.querySelector(".youtube_icon").addEventListener("mouseover",function()
{
document.querySelector(".youtube_icon").style.filter = "brightness(1)"
})

document.querySelector(".youtube_icon").addEventListener("mouseleave",function()
{
document.querySelector(".youtube_icon").style.filter = "brightness(0.7)"
})















addEventListener("mousemove",function()
{
var c_w = window.innerWidth;
    if (c_w >= 1280)
    {
    var size_scale = c_w/1280;
    var margin_scale = 1920/c_w;
    var mouse_x = event.clientX;
    var mouse_y = event.clientY;


    var distance_ratio_xx = (mouse_x - c_w*0.3)*0.012+82;
    var distance_ratio_yy = (mouse_y - size_scale*540)*0.012;

    console.log("distance_ratio_xx"+distance_ratio_xx);

    document.documentElement.style.setProperty("--margin_title",-32+distance_ratio_xx+"px")
    document.documentElement.style.setProperty("--margin_desc",32*margin_scale+distance_ratio_xx+"px")
    document.documentElement.style.setProperty("--text_margin_top_s",18*margin_scale+distance_ratio_yy+"px")
    document.documentElement.style.setProperty("--title_s1_margin",-16*margin_scale+distance_ratio_yy+"px")
    document.documentElement.style.setProperty("--title_s2_margin",-25*margin_scale+distance_ratio_yy+"px")
    document.documentElement.style.setProperty("--margin_top_desc",-21*margin_scale+distance_ratio_yy+"px")
    }
})


reset_pos_by_win()
function reset_pos_by_win()
{
var c_w = window.innerWidth;
var size_scale = c_w/1280;
var size_scale_sec = c_w/896;
var size_scale_thi = c_w/640;
var size_scale_for = c_w/576;
var size_scale_fif = c_w/320;
var mid_pos_real = (1920-c_w)*0.5;

    if (size_scale >= 0.6)
    {
    window.location.href = "index.html";
    }

    if (c_w < 975)
    {
    var margin_scale = 1920/c_w;
    document.documentElement.style.setProperty("--margin_title",-32+"px")
    document.documentElement.style.setProperty("--margin_desc",4*margin_scale+"px")
    document.documentElement.style.setProperty("--text_margin_top_s",18*margin_scale+"px")
    document.documentElement.style.setProperty("--title_s1_margin",-16*margin_scale+"px")
    document.documentElement.style.setProperty("--title_s2_margin",-25*margin_scale+"px")
    document.documentElement.style.setProperty("--margin_top_desc",-21*margin_scale+"px")
    
    document.documentElement.style.setProperty("--theme_selector1_bg","#ffffff00")
    document.documentElement.style.setProperty("--theme_selector3_pos","19%")
    document.documentElement.style.setProperty("--theme_selector2_pos","39%")
    document.documentElement.style.setProperty("--theme_selector1_pos","58%")
    document.documentElement.style.setProperty("--center_code_button","35%")
    
    
    document.documentElement.style.setProperty("--showcase_title_margin",16*margin_scale+"px")
    document.documentElement.style.setProperty("--showcase_title_margin2",50*margin_scale+"px")
    document.documentElement.style.setProperty("--contact_page_margin","380px")
    
    
    
    document.documentElement.style.setProperty("--contact_button1_pos","37.5%")
    document.documentElement.style.setProperty("--contact_button2_pos","47.5%")
    document.documentElement.style.setProperty("--contact_button3_pos","57.5%")
    
    
    document.documentElement.style.setProperty("--img_width",1024*size_scale+"px")
    document.documentElement.style.setProperty("--img_height",576*size_scale+"px")
    
    
    document.documentElement.style.setProperty("--trailer_button_pos","18%")
    
    
    document.documentElement.style.setProperty("--contact_box_margin",mid_pos_real*0.8+"px")
    
    document.documentElement.style.setProperty("--text_m44px",-60*size_scale_for+"px")
    
    document.documentElement.style.setProperty("--theme_button_24px",12*size_scale_thi+"px")
    document.documentElement.style.setProperty("--theme_button_m24px",-12*size_scale_thi+"px")
    }
    else
    {
    size_scale = 1;
    size_scale_sec = 1;
    size_scale_thi = 1;
    size_scale_for = 1;
    size_scale_fif = 1;
    
    document.documentElement.style.setProperty("--margin_title","32px")
    document.documentElement.style.setProperty("--margin_desc","96px")
    document.documentElement.style.setProperty("--text_margin_top_s","0px")
    document.documentElement.style.setProperty("--title_s1_margin","0px")
    document.documentElement.style.setProperty("--title_s2_margin","0px")
    document.documentElement.style.setProperty("--margin_top_desc","48px")
    
    
    
    document.documentElement.style.setProperty("--theme_selector1_bg","#547282")
    document.documentElement.style.setProperty("--theme_selector1_pos","77%")
    document.documentElement.style.setProperty("--theme_selector2_pos","71%")
    document.documentElement.style.setProperty("--theme_selector3_pos","66%")
    document.documentElement.style.setProperty("--center_code_button","45%")
    
    
    
    document.documentElement.style.setProperty("--showcase_title_margin","44px")
    document.documentElement.style.setProperty("--showcase_title_margin2","27px")
    document.documentElement.style.setProperty("--contact_page_margin","380px")
    
    
    
    document.documentElement.style.setProperty("--contact_button1_pos","75%")
    document.documentElement.style.setProperty("--contact_button2_pos","71.8%")
    document.documentElement.style.setProperty("--contact_button3_pos","68.6%")
    
    
    document.documentElement.style.setProperty("--img_width","640px")
    document.documentElement.style.setProperty("--img_height","360px")
    
    
    document.documentElement.style.setProperty("--trailer_button_pos","40%")
    
    
    document.documentElement.style.setProperty("--contact_box_margin","400px")
    
    document.documentElement.style.setProperty("--text_m44px",-44/(c_w/1980)+"px")
    
    document.documentElement.style.setProperty("--theme_button_24px",20*size_scale_thi+"px")
    document.documentElement.style.setProperty("--theme_button_m24px",-20*size_scale_thi+"px")
    }
    
    
document.documentElement.style.setProperty("--title_s_text_size",64*size_scale+"px")
document.documentElement.style.setProperty("--text_162px",162*size_scale+"px")
document.documentElement.style.setProperty("--text_64px",64*size_scale_thi+"px")
document.documentElement.style.setProperty("--text_48px",48*size_scale_sec+"px")
document.documentElement.style.setProperty("--text_32px",32*size_scale_for+"px")
document.documentElement.style.setProperty("--text_28px",28*size_scale_thi+"px")
document.documentElement.style.setProperty("--text_24px",24*size_scale_thi+"px")
document.documentElement.style.setProperty("--text_16px",16*size_scale_for+"px")
document.documentElement.style.setProperty("--text_17_5px",17.5*size_scale_for+"px")
document.documentElement.style.setProperty("--text_12px",12*size_scale_for+"px")
document.documentElement.style.setProperty("--text_m12px",-12*size_scale_for+"px")
document.documentElement.style.setProperty("--text_m24px",-24*size_scale_thi+"px")
document.documentElement.style.setProperty("--text_m60px",-60*size_scale_for+"px")
document.documentElement.style.setProperty("--text_m32px",-32/(c_w/1980)+"px")
document.documentElement.style.setProperty("--text_10px",12*size_scale_for+"px")
document.documentElement.style.setProperty("--text_270px",270*size_scale_fif+"px")
document.documentElement.style.setProperty("--text_100px",100*size_scale_thi+"px")
document.documentElement.style.setProperty("--text_485px",485*size_scale_for+"px")
    



var cal_trailer_bg_xpos = (-(1920-c_w)*0.5)+"px"
document.documentElement.style.setProperty("--trailer_bg_margin_left",cal_trailer_bg_xpos)
document.documentElement.style.setProperty("--window_width",c_w+"px")
console.log(cal_trailer_bg_xpos)
console.log((c_w-8)+"px")
}


window.addEventListener("resize", function()
{
reset_pos_by_win()
})









/* Loading bar */
var loaded_page = false;

function loading_now()
{
loading_bar.style.width = window.innerWidth+"px";
setTimeout(show_page_anime,7500)
}

var video_ele = document.getElementById("trailer_video")
video_ele.onloadeddata = function()
{
console.log("loaded_video");
document.getElementById("loading_bar").style.transition = "width 1s";
setTimeout(show_page_anime,1000);
}


function show_page_anime()
{
document.getElementById("loading_bar_bg").style.background = "#02050C";
document.getElementById("loading_bar").style.background = "#02050C";
document.getElementById("loading_bar_bg").style.transition = "background 1s, width 1s, opacity 1s";
document.getElementById("loading_bar").style.transition = "background 1s, width 1s";
setTimeout(show_page,1000)
}

$(window).resize(function()
{
    if (!loaded_page)
    {
    loading_now();
    }
})

window.onload = function()
{
loading_now();
}

function show_page()
{
setTimeout(set_height,1000)
loaded_page = true;

document.getElementById("loading_bar_bg").style.opacity = 0;
document.getElementById("loading_bar").style.opacity = 0;
document.getElementById("loading_bar_grad").style.opacity = 0;

console.log("page_loaded");
}


function set_height()
{
document.getElementById("loading_bar_bg").style.height = 0;
document.getElementById("loading_bar").style.height = 0;
document.getElementById("loading_bar_grad").style.height = 0;
title1_anime()
setTimeout(title2_anime,200)
setTimeout(title3_anime,400)
setTimeout(title_desc_anime,700)
setTimeout(theme_selector_anime,1500)
}


function title1_anime()
{
document.getElementById("title").style.opacity = 1;
document.getElementById("title").style.top = "0px";
}

function title2_anime()
{
document.getElementById("title_small1").style.opacity = 1;
document.getElementById("title_small1").style.top = "260px";
}

function title3_anime()
{
document.getElementById("title_small2").style.opacity = 1;
document.getElementById("title_small2").style.top = "330px";
}

function title_desc_anime()
{
document.getElementById("desc_first").style.opacity = 1;
document.getElementById("desc_first").style.top = "450px";
}

function theme_selector_anime()
{
document.getElementById("theme_selector_button1").style.opacity = 1;
document.getElementById("theme_selector_button2").style.opacity = 1;
document.getElementById("theme_selector_button3").style.opacity = 1;
document.getElementById("body_t").style.overflowY = "scroll";
}







$(window).scroll(function()
{
var scroll = $(window).scrollTop();
    if (scroll > 1100)
    {
    setTimeout(showcase_bg_anime,100)
    setTimeout(showcase_text1_anime,900)
    setTimeout(showcase_text2_anime,1000)
    setTimeout(showcase_buttons_anime,1100)
    setTimeout(showcase_test_anime,2000)
    
    
    //쇼케이스 1번 실행
    setTimeout(showcase1_text1_anime,1500)
    }
})

function showcase_bg_anime()
{
document.getElementById("select_menu").style.width = window.innerWidth+"px";
document.getElementById("in_box_text1").style.width = window.innerWidth+"px";
document.getElementById("in_box_text2").style.width = window.innerWidth+"px";
document.getElementById("in_box_text3").style.width = window.innerWidth+"px";
document.getElementById("in_box_text4").style.width = window.innerWidth+"px";
}




//Showcase
function showcase_text1_anime()
{
document.getElementById("title_sec").style.opacity = 1;
document.getElementById("title_sec").style.top = "0px";
}

//쇼케이스
function showcase_text2_anime()
{
document.getElementById("title_sec_small").style.opacity = 1;
document.getElementById("title_sec_small").style.top = "0px";
}

//쇼케이스 프로젝트 선택 버튼
function showcase_buttons_anime()
{
document.getElementById("theme_selector_buttons").style.opacity = 1;
}




//쇼케이스1에 소개된 프로젝트 타이틀1
function showcase1_text1_anime()
{
document.getElementById("showcase1_title_sec").style.opacity = 1;
document.getElementById("showcase1_title_sec").style.top = "0px";
setTimeout(showcase1_text2_anime,200)
}

//쇼케이스1에 소개된 프로젝트 타이틀2
function showcase1_text2_anime()
{
document.getElementById("showcase1_title_sec_small").style.opacity = 1;
document.getElementById("showcase1_title_sec_small").style.top = "0px";

setTimeout(showcase1_image_anime,500)
}

//쇼케이스1 이미지
function showcase1_image_anime()
{
document.getElementById("showcase1_image").style.opacity = 1;
setTimeout(selector_buttons1_anime,100)
}

//쇼케이스1 이미지 선택 버튼
function selector_buttons1_anime()
{
document.getElementById("selector_buttons1").style.opacity = 1;
setTimeout(in_box_text1_anime,500)
}

//쇼케이스1 설명글
function in_box_text1_anime()
{
document.getElementById("in_box_text1").style.opacity = 1;
setTimeout(showcase1_button_anime,1000)
}

//쇼케이스1 다운로드 버튼
function showcase1_button_anime()
{
document.getElementById("showcase1_trailer_button").style.opacity = 1;

document.getElementById("showcase1_code_button").style.opacity = 1;
}







//쇼케이스2에 소개된 프로젝트 타이틀1
function showcase2_text1_anime()
{
document.getElementById("showcase2_title_sec").style.opacity = 1;
document.getElementById("showcase2_title_sec").style.top = "0px";
setTimeout(showcase2_text2_anime,200)
}

//쇼케이스2에 소개된 프로젝트 타이틀2
function showcase2_text2_anime()
{
document.getElementById("showcase2_title_sec_small").style.opacity = 1;
document.getElementById("showcase2_title_sec_small").style.top = "0px";

setTimeout(showcase2_image_anime,500)
}

//쇼케이스2 이미지
function showcase2_image_anime()
{
document.getElementById("showcase2_image").style.opacity = 1;
setTimeout(selector_buttons2_anime,100)
}

//쇼케이스2 이미지 선택 버튼
function selector_buttons2_anime()
{
document.getElementById("selector_buttons2").style.opacity = 1;
setTimeout(in_box_text2_anime,500)
}

//쇼케이스2 설명글
function in_box_text2_anime()
{
document.getElementById("in_box_text2").style.opacity = 1;
setTimeout(showcase2_button_anime,1000)
}

//쇼케이스2 다운로드 버튼
function showcase2_button_anime()
{
document.getElementById("showcase2_trailer_button").style.opacity = 1;

document.getElementById("showcase2_code_button").style.opacity = 1;
}





//쇼케이스3에 소개된 프로젝트 타이틀1
function showcase3_text1_anime()
{
document.getElementById("showcase3_title_sec").style.opacity = 1;
document.getElementById("showcase3_title_sec").style.top = "0px";
setTimeout(showcase3_text2_anime,200)
}

//쇼케이스3에 소개된 프로젝트 타이틀2
function showcase3_text2_anime()
{
document.getElementById("showcase3_title_sec_small").style.opacity = 1;
document.getElementById("showcase3_title_sec_small").style.top = "0px";

setTimeout(showcase3_image_anime,500)
}

//쇼케이스3 이미지
function showcase3_image_anime()
{
document.getElementById("showcase3_image").style.opacity = 1;
setTimeout(selector_buttons3_anime,100)
}

//쇼케이스3 이미지 선택 버튼
function selector_buttons3_anime()
{
document.getElementById("selector_buttons3").style.opacity = 1;
setTimeout(in_box_text3_anime,500)
}

//쇼케이스3 설명글
function in_box_text3_anime()
{
document.getElementById("in_box_text3").style.opacity = 1;
setTimeout(showcase3_button_anime,1000)
}

//쇼케이스3 다운로드 버튼
function showcase3_button_anime()
{
document.getElementById("showcase3_code_button").style.opacity = 1;
}







//쇼케이스4에 소개된 프로젝트 타이틀1
function showcase4_text1_anime()
{
document.getElementById("showcase4_title_sec").style.opacity = 1;
document.getElementById("showcase4_title_sec").style.top = "0px";
setTimeout(showcase4_text2_anime,200)
}

//쇼케이스4에 소개된 프로젝트 타이틀2
function showcase4_text2_anime()
{
document.getElementById("showcase4_title_sec_small").style.opacity = 1;
document.getElementById("showcase4_title_sec_small").style.top = "0px";

setTimeout(showcase4_image_anime,500)
}

//쇼케이스4 이미지
function showcase4_image_anime()
{
document.getElementById("showcase4_image").style.opacity = 1;
setTimeout(selector_buttons4_anime,100)
}

//쇼케이스4 이미지 선택 버튼
function selector_buttons4_anime()
{
document.getElementById("selector_buttons4").style.opacity = 1;
setTimeout(in_box_text4_anime,500)
}

//쇼케이스4 설명글
function in_box_text4_anime()
{
document.getElementById("in_box_text4").style.opacity = 1;
setTimeout(showcase4_button_anime,1000)
}

//쇼케이스3 다운로드 버튼
function showcase4_button_anime()
{
document.getElementById("showcase4_code_button").style.opacity = 1;
}





function showcase_test_anime()
{
document.getElementById("under_box_selector_buttons").style.opacity = 1;
}