var obj_loading_bar = document.getElementById("loading_bar");
var obj_loading_bar_bg = document.getElementById("loading_bar_bg");
var obj_loading_bar_grad = document.getElementById("loading_bar_grad");
var obj_starry_stars2 = document.getElementById("starry_stars2");
var obj_hello_title_eng = document.getElementById("hello_title_eng");
var obj_hello_title_kor = document.getElementById("hello_title_kor");
var obj_hello_title_jap = document.getElementById("hello_title_jap");
var obj_hello_title_desc = document.getElementById("hello_title_desc");
var obj_trailer_video = document.getElementById("trailer_video");
var obj_trailer_bg = document.getElementById("trailer_bg");
var obj_quick_select_bg_outline = document.getElementById("quick_select_bg_outline");
var obj_quick_select_bg = document.getElementById("quick_select_bg");
var obj_quick_select_main = document.getElementById("quick_select_main");
var obj_quick_select_showcase = document.getElementById("quick_select_showcase");
var obj_quick_select_other_works = document.getElementById("quick_select_other_works");
var obj_quick_select_contact = document.getElementById("quick_select_contact");
var obj_music_info = document.getElementById("music_info");
var obj_music_info2 = document.getElementById("music_info2");
var obj_music_button = document.getElementById("music_button");
var obj_discord_icon = document.getElementById("discord_icon");
var obj_github_icon = document.getElementById("github_icon");
var obj_youtube_icon = document.getElementById("youtube_icon");
var obj_showcase_text = document.getElementById("showcase_text");
var obj_showcase_game_title1 = document.getElementById("showcase_game_title1");
var obj_showcase_game_title_sec1 = document.getElementById("showcase_game_title_sec1");
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
var obj_download_link = document.getElementById("download_link");
var obj_download_button = document.getElementById("download_button");


var obj_other_works_text = document.getElementById("other_works_text");
var obj_works_arrow_left = document.getElementById("works_arrow_left");
var obj_works_arrow_right = document.getElementById("works_arrow_right");
var obj_showcase_works_title1 = document.getElementById("showcase_works_title1");
var obj_showcase_works_title_sec1 = document.getElementById("showcase_works_title_sec1");


var max_size_ = 2;


var obj_works_more_desc = document.getElementById("works_more_desc");
var obj_works_more_desc_link = document.getElementById("works_more_desc_link");




var obj_aftereffect = document.getElementById("aftereffect");
var obj_photoshop = document.getElementById("photoshop");
var obj_aseprite = document.getElementById("aseprite");
var obj_blender = document.getElementById("blender");
var obj_clipstudio = document.getElementById("clipstudio");
var obj_gms = document.getElementById("gms");
var obj_c = document.getElementById("c");
var obj_cpp = document.getElementById("cpp");
var obj_html = document.getElementById("html");
var obj_javascript = document.getElementById("javascript");
var obj_css = document.getElementById("css");
var obj_android = document.getElementById("android");
var obj_java = document.getElementById("java");
var obj_unity = document.getElementById("unity");
var obj_opengl = document.getElementById("opengl");


var obj_air_res_bar = document.getElementById("air_res_bar")
var obj_credit = document.getElementById("credit");


var obj_game_selector_button = [];
var obj_game_selector_button_activated = [];
var obj_works_gif = [];
for(var i = 1; i <= 4; i++)
{
obj_game_selector_button[i] = document.getElementById("game_selector_button"+i);
}

for(var i = 0; i < 4; i++)
{
obj_game_selector_button_activated[i] = 1;
}

for(var i = 1; i <= 7; i++)
{
obj_works_gif[i] = document.getElementById("works_gif"+i);
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
var n_showcase_works = 0;
var opened_more_desc = 0;
var works_gif_scroll_xx = 0;
var music_on = 1;
var audio = -4;
var random_bgm = -4;

var music_auto_playing = [-4,-4];
var saved_random_bgm = -4;

var quick_selector_activated = -1;




obj_trailer_video.onloadeddata = function()
{
console.log("loaded_video");
obj_loading_bar.style.transition = "width 1s";
obj_loading_bar.style.width = window.innerWidth+"px";

setTimeout(show_page_anime,4000);
}



function show_page_anime()
{
obj_loading_bar_bg.style.background = "#02050C";
obj_loading_bar.style.background = "#02050C";
obj_loading_bar_bg.style.transition = "background 1s, width 1s, opacity 1s";
obj_loading_bar.style.transition = "background 1s, width 1s";

preload_images("imgs","gif","arena_wak1","arena_wak2","arena_wak3","arena_wak4","project_wak_1","project_wak_2","project_wak_3","project_wak_4","Project Astronaut1","Project Astronaut2","Project Astronaut3","Project Astronaut4");

setTimeout(show_page,1000);
setTimeout(starry_stars_brighting,1500);
}


function starry_stars_brighting()
{
obj_starry_stars2.style.top = irandom_range(0,700)*irandom_return()+"px";
obj_starry_stars2.style.left = irandom_range(0,700)*irandom_return()+"px";
obj_starry_stars2.style.transform = "rotate("+irandom_range(0,359)+"deg)";
obj_starry_stars2.style.opacity = 0.4;
setTimeout(starry_stars_fading,1100);
}

function starry_stars_fading()
{
obj_starry_stars2.style.opacity = 0;
setTimeout(starry_stars_brighting,irandom_range(3100,4000));
}


function show_page()
{
obj_loading_bar_bg.style.opacity = 0;
obj_loading_bar.style.opacity = 0;
obj_loading_bar_grad.style.opacity = 0;
obj_loading_bar_grad.style.opacity = 0;

obj_trailer_video.style.filter = "blur(0px)";
repos_works_gif();


console.log("page_loaded");

setTimeout(title_anime1,1000);
setTimeout(title_anime2,1200);
setTimeout(title_anime3,1400);
setTimeout(title_anime4,1600);
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

scroll_animation[99] = 1;
}

function quick_select_menu_anime1()
{
    if (quick_selector_activated == 1)
    {
    obj_quick_select_bg_outline.style.top = "56px";
    obj_quick_select_bg.style.top = "-8px";
    setTimeout(quick_select_menu_anime2,500);
    }
}

function quick_select_menu_anime2()
{
    if (quick_selector_activated == 1)
    {
    obj_quick_select_main.style.top = "17px";
    setTimeout(quick_select_menu_anime3,100);
    }
}

function quick_select_menu_anime3()
{
    if (quick_selector_activated == 1)
    {
    obj_quick_select_contact.style.top = "17px";
    setTimeout(quick_select_menu_anime4,100);
    }
}

function quick_select_menu_anime4()
{
    if (quick_selector_activated == 1)
    {
    obj_quick_select_showcase.style.top = "17px";
    setTimeout(quick_select_menu_anime5,100);
    }
}

function quick_select_menu_anime5()
{
    if (quick_selector_activated == 1)
    {
    obj_quick_select_other_works.style.top = "17px";
    setTimeout(quick_select_menu_anime6,400);
    }
}

function quick_select_menu_anime6()
{
    if (quick_selector_activated == 1)
    {
    obj_music_button.style.top = "12px";
    setTimeout(quick_select_menu_anime6_2,400);
    }
}

function quick_select_menu_anime6_2()
{
    if (quick_selector_activated == 1)
    {
    obj_music_button.style.left = "2.5%";
    }
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






window.onload = function()
{
window.scrollTo({top : 0, left : 0, behavior : "smooth"});
css_values();
setTimeout(force_loading,7000);
setTimeout(show_page_anime,7000);
}

window.addEventListener("resize", function()
{
css_values();
})


function force_loading()
{
obj_loading_bar.style.transition = "width 1s";
obj_loading_bar.style.width = window.innerWidth+"px";
}







obj_quick_select_main.addEventListener("mouseover",function()
{
obj_quick_select_main.style.color = "#749eca";
})

obj_quick_select_main.addEventListener("mouseleave",function()
{
obj_quick_select_main.style.color = "#192731";
})

obj_quick_select_main.addEventListener("click",function()
{
window.scrollTo({top : 0, left : 0, behavior : "smooth"});
})

obj_quick_select_showcase.addEventListener("mouseover",function()
{
obj_quick_select_showcase.style.color = "#749eca";
})

obj_quick_select_showcase.addEventListener("mouseleave",function()
{
obj_quick_select_showcase.style.color = "#192731";
})

obj_quick_select_showcase.addEventListener("click",function()
{
window.scrollTo({top : 1495, left : 0, behavior : "smooth"});
})

obj_quick_select_contact.addEventListener("mouseover",function()
{
obj_quick_select_contact.style.color = "#749eca";
})

obj_quick_select_contact.addEventListener("mouseleave",function()
{
obj_quick_select_contact.style.color = "#192731";
})

obj_quick_select_contact.addEventListener("click",function()
{
window.scrollTo({top : 600, left : 0, behavior : "smooth"});
})

obj_quick_select_other_works.addEventListener("mouseover",function()
{
obj_quick_select_other_works.style.color = "#749eca";
})

obj_quick_select_other_works.addEventListener("mouseleave",function()
{
obj_quick_select_other_works.style.color = "#192731";
})

obj_quick_select_other_works.addEventListener("click",function()
{
window.scrollTo({top : 2822, left : 0, behavior : "smooth"});
})

obj_music_button.addEventListener("mouseover",function()
{
obj_music_button.style.opacity = 0.7-music_on*0.3;
})

obj_music_button.addEventListener("mouseleave",function()
{
obj_music_button.style.opacity = 1-music_on*0.3;
})

obj_music_button.addEventListener("click",function()
{
music_on ++
    if (music_on > 1)
    {
    music_on = 0;
    }
    
    if (music_on == 0)
    {
    music_info.style.opacity = 0.8;
    music_info2.style.opacity = 1;
    play_sound();
    }
    else
    {
    music_info.style.opacity = 0;
    music_info2.style.opacity = 0;
    audio.pause();
    
    obj_music_button.src = "imgs/music_icon.png";
    }
})


function album_imgs()
{
var album_num = 7;
    if (random_bgm == "PIXELIZE" || random_bgm == "Telepathic Love")
    {
    album_num = 6;
    }
    else if (random_bgm == "Kokorotravel")
    {
    album_num = 5;
    }
    else if (random_bgm == "Dhalia")
    {
    album_num = 4;
    }
    else if (random_bgm == "Pluie" || random_bgm == "Sunflower")
    {
    album_num = 1;
    }
    else if (random_bgm == "Letter From Heaven 空中都市 ver" || random_bgm == "Sight")
    {
    album_num = 3;
    }
    else if (random_bgm == "Snowlight")
    {
    album_num = 2;
    }
    else if (random_bgm == "Sweet Dreams")
    {
    album_num = 8;
    }
    else if (random_bgm == "frostbite")
    {
    album_num = 9;
    }
    
obj_music_button.src = "imgs/album"+album_num+".png";
}



function select_music()
{
random_bgm = choose("PIXELIZE","Telepathic Love","Kokorotravel","Dhalia","Pluie","Sunflower","Hello","Snowlight","Letter From Heaven 空中都市 ver","Sweet Dreams","frostbite","Sight");
}



function play_sound()
{
    if (music_on == 0)
    {
        if (audio == -4)
        {
        saved_random_bgm = random_bgm;

            while(true)
            {
                if (saved_random_bgm == random_bgm)
                {
                select_music();
                }
                else
                {
                break;
                }
            }
        
        
        audio = new Audio("sounds/Snails House - "+random_bgm+".mp3");
        audio.pitchShift = false;
        audio.volume = 0.03;
        audio.loop = false;
        
        obj_music_info2.textContent = "Ujico*/Snail's House - "+random_bgm;
        }
        
    audio.play();
    setTimeout(album_imgs,100);
    setTimeout(play_music_automatically,100);
    }
}

function stop_sound()
{
audio.currentTime = 0;
audio.pause();
audio = -4;
}

function play_music_automatically()
{
    if (music_auto_playing[0] != -4)
    {
    clearTimeout(music_auto_playing[0]);
    clearTimeout(music_auto_playing[1]);
    }

//play audio automatically
var duration = parseInt(audio.duration),
currentTime = parseInt(audio.currentTime),
timeLeft = duration - currentTime;

music_auto_playing[0] = setTimeout(stop_sound,timeLeft*1000);
music_auto_playing[1] = setTimeout(play_sound,timeLeft*1000+100);
debug_log("duration : "+duration);
}



obj_music_info.addEventListener("click",function()
{
stop_sound();
setTimeout(play_sound,100);
})

obj_music_info2.addEventListener("click",function()
{
stop_sound();
setTimeout(play_sound,100);
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
    
    
    
    
    obj_showcase_game_title1.textContent = "Astronaut";
    obj_showcase_game_title_sec1.textContent = "아스트로넛";
    obj_showcase_game_title1.style.left = "46%";
    obj_showcase_game_title_sec1.style.left = "50%";
    
    
    
    obj_download_link.href = "https://github.com/ABER1047/Astronaut_remake";
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
    
    
    
    obj_showcase_game_title1.textContent = "Arena of Wakgood";
    obj_showcase_game_title_sec1.textContent = "아레나 오브 왁굳";
    obj_showcase_game_title1.style.left = "43.5%";
    obj_showcase_game_title_sec1.style.left = "48%";

    
    
    
    obj_download_link.href = "https://github.com/ABER1047/Arena-of-woowakgood";
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
    
    
    
    obj_showcase_game_title1.textContent = "Project Wak";
    obj_showcase_game_title_sec1.textContent = "프로젝트 왁";
    obj_showcase_game_title1.style.left = "46%";
    obj_showcase_game_title_sec1.style.left = "50%";
    
    
    
    obj_download_link.href = "https://github.com/ABER1047/Project-wak";
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



obj_desc_blinder.addEventListener("click",function()
{
desc_des_start();
});
addEventListener("mousewheel",function()
{
desc_des_start();
});


obj_download_button.addEventListener("mouseover",function()
{
obj_download_button.style.background = "#b0d0e5";
})

obj_download_button.addEventListener("mouseleave",function()
{
obj_download_button.style.background = "white";
})







function desc_des_start()
{
    if (opened_more_desc == 1)
    {
    obj_desc_blinder.style.opacity = "0";
    obj_project_wak_desc.style.opacity = "0";
    obj_astronaut_desc.style.opacity = "0";
    obj_arena_of_wakgood_desc.style.opacity = "0";
    obj_desc_thumbnail.style.opacity = "0";
    obj_download_button.style.opacity = "0";
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
obj_download_button.style.top = "-999px";
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
obj_desc_thumbnail.style.top = "18%";
obj_desc_thumbnail.style.opacity = "1";
obj_download_button.style.top = "800px";
obj_download_button.style.opacity = "1";

    if (n_showcase_game == 0)
    {
    obj_desc_thumbnail.src = "imgs/project_wak_thumbnail.png";
    obj_project_wak_desc.style.top = "55%";
    obj_project_wak_desc.style.opacity = "1";
    }
    else if (n_showcase_game == 1)
    {
    obj_desc_thumbnail.src = "imgs/Astronaut_thumbnail.png";
    obj_astronaut_desc.style.top = "55%";
    obj_astronaut_desc.style.opacity = "1";
    }
    else
    {
    obj_desc_thumbnail.src = "imgs/arena_of_wakgood_thumbnail.gif";
    obj_arena_of_wakgood_desc.style.top = "53%";
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

















function repos_works_gif()
{
scroll_animation[3] = 0;

var works_url = ["https://github.com/ABER1047/Just_Wak_and_Beats","https://github.com/ABER1047/bocchi","https://github.com/ABER1047/delaunay-trianglulation","https://github.com/ABER1047/HitoriBocchi"];
var works_title_eng = ["Just Wak & Beats","Bocchi!","Delaunay Triangulation","Hitori Bocchi","Empty"];
var works_title_kr = ["저스트 왁 & 비트","ぼっち・ざ・ろっく!","들로네 삼각분할","ひとりぼっち","비어있음"];


for(var i = -max_size_; i <= max_size_; i++)
{//n_showcase_works
var _real_i = i+2;
var n_show_case_ = i-n_showcase_works;
n_show_case_ = (n_show_case_ < -max_size_) ? max_size_*2+n_show_case_+1 : n_show_case_;
n_show_case_ = (n_show_case_ > max_size_) ? -max_size_*2+n_show_case_-1 : n_show_case_;

var img_size = (1 - abs(n_show_case_)/(max_size_*3))*800;
var obj_sub_project = document.getElementById("sub_project"+_real_i);
obj_sub_project.style.left = (c_w - img_size)*0.5+(n_show_case_)*(720/max_size_)+"px";
obj_sub_project.style.top = (3100+abs(n_show_case_)*21)+"px";
obj_sub_project.style.filter = "blur("+(abs(n_show_case_)*2)+"px)";
obj_sub_project.style.zIndex = 101-abs(n_show_case_);
obj_sub_project.style.width = img_size+"px";
}

var n_real_showcase = n_showcase_works+max_size_;
if (n_real_showcase == 1 || n_real_showcase == 3)
{
obj_showcase_works_title_sec1.style.fontFamily = "auto";
}
else
{
obj_showcase_works_title_sec1.style.fontFamily = "customfont";
}

obj_showcase_works_title1.textContent = works_title_eng[n_real_showcase];
obj_showcase_works_title_sec1.textContent = works_title_kr[n_real_showcase];
obj_showcase_works_title1.style.left = c_w*0.5-(obj_showcase_works_title1.textContent.length)*9+"px";
obj_showcase_works_title_sec1.style.left = c_w*0.5-(obj_showcase_works_title_sec1.textContent.length)*3+"px";
obj_works_more_desc_link.href = works_url[n_real_showcase];
    

setTimeout(scroll_animation_active,500);
}


obj_works_arrow_left.addEventListener("click",function()
{
n_showcase_works --;

    if (n_showcase_works < -max_size_)
    {
    n_showcase_works = max_size_;
    }
setTimeout(repos_works_gif,50);
})

obj_works_arrow_right.addEventListener("click",function()
{
n_showcase_works ++;

    if (n_showcase_works > max_size_)
    {
    n_showcase_works = -max_size_;
    }
setTimeout(repos_works_gif,50);
})




obj_works_more_desc.addEventListener("mouseover",function()
{
obj_works_more_desc.style.background = "#b79aca";
})

obj_works_more_desc.addEventListener("mouseleave",function()
{
obj_works_more_desc.style.background = "#141527";
})






function icons_appearance_first(target)
{
icons_appearance(target);
setTimeout(icons_appearance_first_white,1000,target);
}

function icons_appearance_first_white(target)
{
target.style.filter = "grayscale(0%)";
setTimeout(icons_appearance_first_black,50,target);
}

function icons_appearance_first_black(target)
{
target.style.transition = "top 1.5s, filter 1s";
target.style.filter = "grayscale(100%)";
}

function icons_appearance(target)
{
target.style.top = "4618px";
setTimeout(icons_fading,1450,target);
}

function icons_fading(target)
{
target.style.top = "4625px";
setTimeout(icons_appearance,1450,target);
}


function works_gif_anime(target)
{
target.style.opacity = "1";
obj_air_res_bar.style.opacity = "1";
}



obj_credit.addEventListener("mouseover",function()
{
obj_credit.style.color = "#79b0c2";
})

obj_credit.addEventListener("mouseleave",function()
{
obj_credit.style.color = "#e29056";
})


obj_air_res_bar.addEventListener("mouseover",function()
{
obj_air_res_bar.style.background = "#86868d";
})

obj_air_res_bar.addEventListener("mouseleave",function()
{
obj_air_res_bar.style.background = "#bbbbc4";
})







function css_values()
{
c_w = window.innerWidth;
c_h = window.innerHeight;
c_x = c_w/1920;
var c_x_comp = c_w/480;
c_x_comp = correct_value(c_x_comp,0,1);

    if (c_x < 0.6)
    {
    is_pc = 0;
    c_x = 0.6;
    window.location.href = "m_index.html";
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
document.documentElement.style.setProperty("--s450px",450*c_x+"px");

    for(var k = 1 ; k <= 7; k++)
    {
    document.documentElement.style.setProperty("--works_gif_"+k+"_xx",works_gif_scroll_xx+(k-1)*500*c_x+"px");
    }
}



addEventListener("mousemove",function()
{
var mouse_x = event.clientX;
var mouse_y = event.clientY;
var mouse_movement_dis_xx = (mouse_x - c_w*0.5)/72*is_pc
var mouse_movement_dis_yy = (mouse_y - c_h*0.5)/72*is_pc

document.documentElement.style.setProperty("--m_interect_xx",mouse_movement_dis_xx+"px");
document.documentElement.style.setProperty("--m_interect_yy",mouse_movement_dis_yy+"px");

document.documentElement.style.setProperty("--m_interect_xx2",-mouse_movement_dis_xx*0.5+"px");
document.documentElement.style.setProperty("--m_interect_yy2",-mouse_movement_dis_yy*0.5+"px");
})

$(window).scroll(function()
{
var scroll_real = $(window).scrollTop();
scroll = scroll_real-1000;
document.documentElement.style.setProperty("--scroll_yy",scroll*0.02*c_x+"px");

if (scroll_real < 3000)
{
document.documentElement.style.setProperty("--real_scroll_yy",scroll_real+"px");
}
var __opacity__ = scroll+1000;
__opacity__ = correct_value(0,1);
document.documentElement.style.setProperty("--scroll_opacity",__opacity__*0.01);
debug_log(scroll);

scroll_animation_active();
})

function scroll_animation_active()
{
obj_trailer_video.style.filter = "blur("+$(window).scrollTop()*0.04+"px)";

    if (scroll_animation[99] == 1)
    {
        if (scroll <= -1000)
        {
        quick_selector_activated = -1;
        
        obj_quick_select_bg_outline.style.top = "-24px";
        obj_quick_select_bg.style.top = "-88px";
        obj_quick_select_main.style.top = "-63px";
        obj_quick_select_contact.style.top = "-63px";
        obj_quick_select_showcase.style.top = "-63px";
        obj_quick_select_other_works.style.top = "-63px";
        obj_music_button.style.top = "-63px";
        }
        else
        {
            if (quick_selector_activated == -1)
            {
            quick_selector_activated = 1;
            quick_select_menu_anime1();
            }
        }

        

    
        if (scroll > 0 && scroll_animation[0] == 0)
        {
        scroll_animation[0] = 1;
        obj_showcase_text.style.width = "0px";
        document.getElementById("sepa_bg1_2").style.width = "2000px";
        setTimeout(text_appearence_anime1,500,obj_showcase_text);
        }
        
        if (scroll > 420 && scroll_animation[1] == 0)
        {
        scroll_animation[1] = 1;

        obj_showcase_game_title1.style.width = "0px";
        setTimeout(text_appearence_anime1,500,obj_showcase_game_title1);
        obj_showcase_game_title_sec1.style.width = "0px";
        setTimeout(text_appearence2_anime2,1000,obj_showcase_game_title_sec1);
        }
        
        if (scroll > 1200 && scroll_animation[2] == 0)
        {
        scroll_animation[2] = 1;
        obj_other_works_text.style.width = "0px";
        document.getElementById("sepa_bg2_2").style.width = "2000px";
        setTimeout(text_appearence_anime1,500,obj_other_works_text);
        }
        
        if (scroll > 1750 && scroll_animation[3] == 0)
        {
        scroll_animation[3] = 1;
        obj_showcase_works_title1.style.width = "0px";
        setTimeout(text_appearence_anime1,500,obj_showcase_works_title1);
        obj_showcase_works_title_sec1.style.width = "0px";
        setTimeout(text_appearence2_anime2,1000,obj_showcase_works_title_sec1);
        }
        
        if (scroll > 2600 && scroll_animation[4] == 0)
        {
        scroll_animation[4] = 1;
        document.getElementById("sepa_bg3_2").style.width = "2000px";
        setTimeout(icons_appearance_first,100,obj_aftereffect);
        setTimeout(icons_appearance_first,200,obj_photoshop);
        setTimeout(icons_appearance_first,300,obj_aseprite);
        setTimeout(icons_appearance_first,400,obj_blender);
        setTimeout(icons_appearance_first,500,obj_clipstudio);
        setTimeout(icons_appearance_first,600,obj_gms);
        setTimeout(icons_appearance_first,700,obj_c);
        setTimeout(icons_appearance_first,800,obj_cpp);
        setTimeout(icons_appearance_first,900,obj_html);
        setTimeout(icons_appearance_first,1000,obj_javascript);
        setTimeout(icons_appearance_first,1100,obj_css);
        setTimeout(icons_appearance_first,1200,obj_android);
        setTimeout(icons_appearance_first,1300,obj_java);
        setTimeout(icons_appearance_first,1400,obj_unity);
        setTimeout(icons_appearance_first,1500,obj_opengl);
        
        
            for(var i = 1; i <= 7; i++)
            {
            setTimeout(works_gif_anime,1600,obj_works_gif[i]);
            }
        }
    }
}

obj_air_res_bar.addEventListener("input",function()
{
works_gif_scroll_xx = (obj_air_res_bar.value)*15.5;
    for(var k = 1 ; k <= 7; k++)
    {
    document.documentElement.style.setProperty("--works_gif_"+k+"_xx",-works_gif_scroll_xx+(k-1)*500*c_x+"px");
    }
})

