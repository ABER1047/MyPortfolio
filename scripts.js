var obj_loading_bar = document.getElementById("loading_bar");
var obj_loading_bar_bg = document.getElementById("loading_bar_bg");
var obj_loading_bar_grad = document.getElementById("loading_bar_grad");
var obj_hello_title_eng = document.getElementById("hello_title_eng");
var obj_hello_title_kor = document.getElementById("hello_title_kor");
var obj_hello_title_jap = document.getElementById("hello_title_jap");
var obj_hello_title_desc = document.getElementById("hello_title_desc");
var obj_trailer_video = document.getElementById("trailer_video");
var obj_quick_select_main = document.getElementById("quick_select_main");
var obj_quick_select_showcase = document.getElementById("quick_select_showcase");
var obj_quick_select_contact = document.getElementById("quick_select_contact");
var obj_discord_icon = document.getElementById("discord_icon");
var obj_github_icon = document.getElementById("github_icon");
var obj_youtube_icon = document.getElementById("youtube_icon");
var obj_showcase_text = document.getElementById("showcase_text");
var obj_showcase_game_title1 = document.getElementById("showcase_game_title1");
var obj_showcase_game_title_sec1 = document.getElementById("showcase_game_title_sec1");
var obj_showcase_game_title2 = document.getElementById("showcase_game_title2");
var obj_showcase_game_title_sec2 = document.getElementById("showcase_game_title_sec2");
var obj_showcase_game_title3 = document.getElementById("showcase_game_title3");
var obj_showcase_game_title_sec3 = document.getElementById("showcase_game_title_sec3");
var obj_othergames_arrow_left = document.getElementById("othergames_arrow_left");
var obj_othergames_arrow_right = document.getElementById("othergames_arrow_right");
var obj_arena_of_wakgood_gif = document.getElementById("arena_of_wakgood_gif");
var obj_astronaut_gif = document.getElementById("astronaut_gif");
var obj_project_wak_gif = document.getElementById("project_wak_gif");
var obj_more_desc = document.getElementById("more_desc");
var obj_desc_blinder = document.getElementById("desc_blinder");
var obj_desc_thumbnail = document.getElementById("desc_thumbnail");
var obj_project_wak_desc = document.getElementById("project_wak_desc");
var obj_astronaut_desc = document.getElementById("astronaut_desc");
var obj_arena_of_wakgood_desc = document.getElementById("arena_of_wakgood_desc");
var obj_game_selector_button = [];
var obj_game_selector_button_activated = [];
for(var i = 1; i <= 4; i++)
{
obj_game_selector_button[i] = document.getElementById("game_selector_button"+i);
}

for(var i = 0; i < 4; i++)
{
obj_game_selector_button_activated[i] = 1;
}



var c_w = -4;
var c_h = -4;
var is_pc = 1;
var c_x = 1;
var scroll = 0;
var scroll_animation = [];
for(var i = 0; i < 99; i++)
{
scroll_animation[i] = 0;
}
var n_showcase_game = 0;
var opened_more_desc = 0;




obj_trailer_video.onloadeddata = function()
{
console.log("loaded_video");
obj_loading_bar.style.transition = "width 1s";
obj_loading_bar.style.width = window.innerWidth+"px";
setTimeout(show_page_anime,1000);
}



function show_page_anime()
{
obj_loading_bar_bg.style.background = "#02050C";
obj_loading_bar.style.background = "#02050C";
obj_loading_bar_bg.style.transition = "background 1s, width 1s, opacity 1s";
obj_loading_bar.style.transition = "background 1s, width 1s";
setTimeout(show_page,1000)
}


function show_page()
{
obj_loading_bar_bg.style.opacity = 0;
obj_loading_bar.style.opacity = 0;
obj_loading_bar_grad.style.opacity = 0;
obj_loading_bar_grad.style.opacity = 0;

obj_trailer_video.style.filter = "blur(0px)";


console.log("page_loaded");

setTimeout(title_anime1,1000)
setTimeout(title_anime2,1200)
setTimeout(title_anime3,1400)
setTimeout(title_anime4,1600)
}


function title_anime1()
{
obj_hello_title_eng.style.top = 140*c_x+"px";
obj_hello_title_eng.style.opacity = "1";
}

function title_anime2()
{
obj_hello_title_kor.style.top = 290*c_x+"px";
obj_hello_title_kor.style.opacity = "1";
}

function title_anime3()
{
obj_hello_title_jap.style.top = 330*c_x+"px";
obj_hello_title_jap.style.opacity = "1";
}

function title_anime4()
{
obj_hello_title_desc.style.top = 460*c_x+"px";
obj_hello_title_desc.style.opacity = "1";

obj_loading_bar_bg.style.width = 0;
obj_loading_bar_bg.style.height = 0;
obj_loading_bar_bg.style.top = -128+"px";
obj_loading_bar.style.width = 0;
obj_loading_bar.style.height = 0;
obj_loading_bar.style.top = -128+"px";
obj_loading_bar_grad.style.width = 0;
obj_loading_bar_grad.style.height = 0;
obj_loading_bar_grad.style.top = -128+"px";
obj_trailer_video.style.transition = "all 0.1s";
document.getElementById("body_t").style.overflowY = "scroll";
}

function text_appearence_anime1(target)
{
target.style.transition = "none";
target.style.color = "#d59d75";

setTimeout(text_appearence_anime2,50,target);
}

function text_appearence_anime2(target_)
{
target_.style.transition = "color 1s";
target_.style.color = "#141527";
}



function text_appearence2_anime1(target)
{
target.style.transition = "none";
target.style.color = "#d59d75";

setTimeout(text_appearence2_anime2,50,target);
}

function text_appearence2_anime2(target_)
{
target_.style.transition = "color 1s";
target_.style.color = "#749eca";
}






window.onload = css_values();
$(window).resize(function()
{
css_values();
})








obj_quick_select_main.addEventListener("mouseover",function()
{
obj_quick_select_main.style.color = "#749eca";
})

obj_quick_select_main.addEventListener("mouseleave",function()
{
obj_quick_select_main.style.color = "#192731";
})

obj_quick_select_showcase.addEventListener("mouseover",function()
{
obj_quick_select_showcase.style.color = "#749eca";
})

obj_quick_select_showcase.addEventListener("mouseleave",function()
{
obj_quick_select_showcase.style.color = "#192731";
})

obj_quick_select_contact.addEventListener("mouseover",function()
{
obj_quick_select_contact.style.color = "#749eca";
})

obj_quick_select_contact.addEventListener("mouseleave",function()
{
obj_quick_select_contact.style.color = "#192731";
})





obj_discord_icon.addEventListener("mouseover",function()
{
obj_discord_icon.style.opacity = "0.7";
debug_log("overed");
})

obj_discord_icon.addEventListener("mouseleave",function()
{
obj_discord_icon.style.opacity = "1";
})

obj_github_icon.addEventListener("mouseover",function()
{
obj_github_icon.style.opacity = "0.7";
debug_log("overed");
})

obj_github_icon.addEventListener("mouseleave",function()
{
obj_github_icon.style.opacity = "1";
})

obj_youtube_icon.addEventListener("mouseover",function()
{
obj_youtube_icon.style.opacity = "0.7";
debug_log("overed");
})

obj_youtube_icon.addEventListener("mouseleave",function()
{
obj_youtube_icon.style.opacity = "1";
})






function repos_gif()
{
scroll_animation[1] = 0;
    if (n_showcase_game == 1)
    {
    obj_arena_of_wakgood_gif.style.left = "59%";
    obj_arena_of_wakgood_gif.style.top = "1760px";
    obj_arena_of_wakgood_gif.style.filter = "blur(5px)";
    obj_arena_of_wakgood_gif.style.zIndex = "100";
    obj_arena_of_wakgood_gif.style.width = 700*c_x+"px";
    
    obj_astronaut_gif.style.left = "30.5%";
    obj_astronaut_gif.style.top = "1730px";
    obj_astronaut_gif.style.filter = "blur(0px)";
    obj_astronaut_gif.style.zIndex = "101";
    obj_astronaut_gif.style.width = 800*c_x+"px";
    
    obj_project_wak_gif.style.left = "5%";
    obj_project_wak_gif.style.top = "1760px";
    obj_project_wak_gif.style.filter = "blur(5px)";
    obj_project_wak_gif.style.zIndex = "100";
    obj_project_wak_gif.style.width = 700*c_x+"px";
    
    
    
    
    obj_showcase_game_title1.style.opacity = "0";
    obj_showcase_game_title_sec1.style.opacity = "0";
    obj_showcase_game_title2.style.opacity = "1";
    obj_showcase_game_title_sec2.style.opacity = "1";
    obj_showcase_game_title3.style.opacity = "0";
    obj_showcase_game_title_sec3.style.opacity = "0";
    }
    else if (n_showcase_game == 2)
    {
    obj_project_wak_gif.style.left = "59%";
    obj_project_wak_gif.style.top = "1760px";
    obj_project_wak_gif.style.filter = "blur(5px)";
    obj_project_wak_gif.style.zIndex = "100";
    obj_project_wak_gif.style.width = 700*c_x+"px";
    
    obj_arena_of_wakgood_gif.style.left = "30.5%";
    obj_arena_of_wakgood_gif.style.top = "1730px";
    obj_arena_of_wakgood_gif.style.filter = "blur(0px)";
    obj_arena_of_wakgood_gif.style.zIndex = "101";
    obj_arena_of_wakgood_gif.style.width = 800*c_x+"px";
    
    obj_astronaut_gif.style.left = "5%";
    obj_astronaut_gif.style.top = "1760px";
    obj_astronaut_gif.style.filter = "blur(5px)";
    obj_astronaut_gif.style.zIndex = "100";
    obj_astronaut_gif.style.width = 700*c_x+"px";
    
    
    
    obj_showcase_game_title1.style.opacity = "0";
    obj_showcase_game_title_sec1.style.opacity = "0";
    obj_showcase_game_title2.style.opacity = "0";
    obj_showcase_game_title_sec2.style.opacity = "0";
    obj_showcase_game_title3.style.opacity = "1";
    obj_showcase_game_title_sec3.style.opacity = "1";
    }
    else
    {
    obj_astronaut_gif.style.left = "59%";
    obj_astronaut_gif.style.top = "1760px";
    obj_astronaut_gif.style.filter = "blur(5px)";
    obj_astronaut_gif.style.zIndex = "100";
    obj_astronaut_gif.style.width = 700*c_x+"px";
    
    obj_project_wak_gif.style.left = "30.5%";
    obj_project_wak_gif.style.top = "1730px";
    obj_project_wak_gif.style.filter = "blur(0px)";
    obj_project_wak_gif.style.zIndex = "101";
    obj_project_wak_gif.style.width = 800*c_x+"px";
    
    obj_arena_of_wakgood_gif.style.left = "5%";
    obj_arena_of_wakgood_gif.style.top = "1760px";
    obj_arena_of_wakgood_gif.style.filter = "blur(5px)";
    obj_arena_of_wakgood_gif.style.zIndex = "100";
    obj_arena_of_wakgood_gif.style.width = 700*c_x+"px";
    
    
    
    obj_showcase_game_title1.style.opacity = "1";
    obj_showcase_game_title_sec1.style.opacity = "1";
    obj_showcase_game_title2.style.opacity = "0";
    obj_showcase_game_title_sec2.style.opacity = "0";
    obj_showcase_game_title3.style.opacity = "0";
    obj_showcase_game_title_sec3.style.opacity = "0";
    }
    

reset_color_gsb();
obj_game_selector_button[obj_game_selector_button_activated[n_showcase_game]].style.background = "#AD8264";
setTimeout(scroll_animation_active,500);
}


obj_othergames_arrow_left.addEventListener("click",function()
{
n_showcase_game --;

    if (n_showcase_game < 0)
    {
    n_showcase_game = 2;
    }
debug_log(n_showcase_game);
setTimeout(repos_gif,50);
})

obj_othergames_arrow_right.addEventListener("click",function()
{
n_showcase_game ++;

    if (n_showcase_game > 2)
    {
    n_showcase_game = 0;
    }
debug_log(n_showcase_game);
setTimeout(repos_gif,50);
})









function reset_color_gsb()
{
    for(var i = 1; i <= 4; i++)
    {
    obj_game_selector_button[i].style.background = "#141527";
    }
}

obj_game_selector_button[1].addEventListener("click",function()
{
reset_color_gsb();
obj_game_selector_button[1].style.background = "#AD8264";
obj_game_selector_button_activated[n_showcase_game] = 1;
    if (n_showcase_game == 0)
    {
    obj_project_wak_gif.src = "imgs/project_wak_1.gif";
    }
    else if (n_showcase_game == 1)
    {
    obj_astronaut_gif.src = "imgs/Project Astronaut1.gif";
    }
    else
    {
    obj_arena_of_wakgood_gif.src = "imgs/arena_wak1.gif";
    }
})

obj_game_selector_button[2].addEventListener("click",function()
{
reset_color_gsb();
obj_game_selector_button[2].style.background = "#AD8264";
obj_game_selector_button_activated[n_showcase_game] = 2;
    if (n_showcase_game == 0)
    {
    obj_project_wak_gif.src = "imgs/project_wak_2.gif";
    }
    else if (n_showcase_game == 1)
    {
    obj_astronaut_gif.src = "imgs/Project Astronaut2.gif";
    }
    else
    {
    obj_arena_of_wakgood_gif.src = "imgs/arena_wak2.gif";
    }
})

obj_game_selector_button[3].addEventListener("click",function()
{
reset_color_gsb();
obj_game_selector_button[3].style.background = "#AD8264";
obj_game_selector_button_activated[n_showcase_game] = 3;
    if (n_showcase_game == 0)
    {
    obj_project_wak_gif.src = "imgs/project_wak_3.gif";
    }
    else if (n_showcase_game == 1)
    {
    obj_astronaut_gif.src = "imgs/Project Astronaut3.gif";
    }
    else
    {
    obj_arena_of_wakgood_gif.src = "imgs/arena_wak3.gif";
    }
})

obj_game_selector_button[4].addEventListener("click",function()
{
reset_color_gsb();
obj_game_selector_button[4].style.background = "#AD8264";
obj_game_selector_button_activated[n_showcase_game] = 4;
    if (n_showcase_game == 0)
    {
    obj_project_wak_gif.src = "imgs/project_wak_4.gif";
    }
    else if (n_showcase_game == 1)
    {
    obj_astronaut_gif.src = "imgs/Project Astronaut4.gif";
    }
    else
    {
    obj_arena_of_wakgood_gif.src = "imgs/arena_wak4.gif";
    }
})



addEventListener("click",function()
{
desc_des_start();
});
addEventListener("mousewheel",function()
{
desc_des_start();
});



function desc_des_start()
{
    if (opened_more_desc == 1)
    {
    obj_desc_blinder.style.opacity = "0";
    obj_project_wak_desc.style.opacity = "0";
    obj_astronaut_desc.style.opacity = "0";
    obj_arena_of_wakgood_desc.style.opacity = "0";
    obj_desc_thumbnail.style.opacity = "0";
    setTimeout(desc_blinder_des,500);
    }
}

function desc_blinder_des()
{
obj_desc_blinder.style.height = "0px";
document.getElementById("body_t").style.overflowY = "scroll";


obj_project_wak_desc.style.top = "-999px";
obj_astronaut_desc.style.top = "-999px";
obj_arena_of_wakgood_desc.style.top = "-999px";
obj_desc_thumbnail.style.top = "-999px";
opened_more_desc = 0;
}

function desc_blinder_cre()
{
opened_more_desc = 1;
}

obj_more_desc.addEventListener("click",function()
{
setTimeout(desc_blinder_cre,500);
document.getElementById("body_t").style.overflowY = "hidden";
obj_desc_blinder.style.height = "2000px";
obj_desc_blinder.style.opacity = "0.95";
obj_desc_thumbnail.style.top = "20%";
obj_desc_thumbnail.style.opacity = "1";

    if (n_showcase_game == 0)
    {
    obj_desc_thumbnail.src = "imgs/project_wak_thumbnail.png";
    obj_project_wak_desc.style.top = "60%";
    obj_project_wak_desc.style.opacity = "1";
    }
    else if (n_showcase_game == 1)
    {
    obj_desc_thumbnail.src = "imgs/astronaut_thumbnail.png";
    obj_astronaut_desc.style.top = "60%";
    obj_astronaut_desc.style.opacity = "1";
    }
    else
    {
    obj_desc_thumbnail.src = "imgs/arena_of_wakgood_thumbnail.gif";
    obj_arena_of_wakgood_desc.style.top = "60%";
    obj_arena_of_wakgood_desc.style.opacity = "1";
    }
})


obj_more_desc.addEventListener("mouseover",function()
{
obj_more_desc.style.background = "#b79aca";
})

obj_more_desc.addEventListener("mouseleave",function()
{
obj_more_desc.style.background = "#141527";
})









function css_values()
{
c_w = window.innerWidth;
c_h = window.innerHeight;
c_x = c_w/1920;
var c_x_comp = c_w/480;
c_x_comp = correct_value(c_x_comp,0,1);

    if (c_x < 0.5)
    {
    is_pc = 0;
    c_x = 0.5;
    }
    else
    {
    is_pc = 1;
    }

    for(var i = 16; i <= 256; i += 4)
    {
    document.documentElement.style.setProperty("--s"+i+"px",i*c_x+"px");
    }
    
    for(var i = 128; i <= 512; i += 4)
    {
    document.documentElement.style.setProperty("--sr"+i+"px",c_w-i*c_x_comp+"px");
    }
document.documentElement.style.setProperty("--s110px",110*c_x+"px");
document.documentElement.style.setProperty("--s260px",260*c_x+"px");
document.documentElement.style.setProperty("--s300px",300*c_x+"px");
document.documentElement.style.setProperty("--s410px",410*c_x+"px");
document.documentElement.style.setProperty("--s800px",800*c_x+"px");
document.documentElement.style.setProperty("--s700px",700*c_x+"px");
document.documentElement.style.setProperty("--s500px",500*c_x+"px");
}



addEventListener("mousemove",function()
{
var mouse_x = event.clientX;
var mouse_y = event.clientY;
var mouse_movement_dis_xx = (mouse_x - c_w*0.5)/72*is_pc
var mouse_movement_dis_yy = (mouse_y - c_h*0.5)/72*is_pc

document.documentElement.style.setProperty("--m_interect_xx",mouse_movement_dis_xx+"px");
document.documentElement.style.setProperty("--m_interect_yy",mouse_movement_dis_yy+"px");
})

$(window).scroll(function()
{
scroll = $(window).scrollTop()-1000;
document.documentElement.style.setProperty("--scroll_yy",scroll*0.02*c_x+"px");
var __opacity__ = scroll+1000;
__opacity__ = correct_value(0,1);
document.documentElement.style.setProperty("--scroll_opacity",__opacity__*0.01);
debug_log(scroll);

scroll_animation_active();
})

function scroll_animation_active()
{
obj_trailer_video.style.filter = "blur("+$(window).scrollTop()*0.04+"px)";

    if (scroll > 0 && scroll_animation[0] == 0)
    {
    scroll_animation[0] = 1;
    obj_showcase_text.style.width = "0px";
    setTimeout(text_appearence_anime1,500,obj_showcase_text);
    }
    
    if (scroll > 450 && scroll_animation[1] == 0)
    {
    scroll_animation[1] = 1;
        if (n_showcase_game == 0)
        {
        obj_showcase_game_title1.style.width = "0px";
        setTimeout(text_appearence_anime1,500,obj_showcase_game_title1);
        obj_showcase_game_title_sec1.style.width = "0px";
        setTimeout(text_appearence2_anime2,1000,obj_showcase_game_title_sec1);
        }
        else if (n_showcase_game == 1)
        {
        obj_showcase_game_title2.style.width = "0px";
        setTimeout(text_appearence_anime1,500,obj_showcase_game_title2);
        obj_showcase_game_title_sec2.style.width = "0px";
        setTimeout(text_appearence2_anime2,1000,obj_showcase_game_title_sec2);
        }
        else
        {
        obj_showcase_game_title3.style.width = "0px";
        setTimeout(text_appearence_anime1,500,obj_showcase_game_title3);
        obj_showcase_game_title_sec3.style.width = "0px";
        setTimeout(text_appearence2_anime2,1000,obj_showcase_game_title_sec3);
        }
    }
}