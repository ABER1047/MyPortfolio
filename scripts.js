
var obj_loading_bar_bg = document.getElementById("loading_bar_bg");
var obj_loading_bar_grad = document.getElementById("loading_bar_grad");
var obj_screen_transition_bg = document.getElementById("screen_transition_bg");
var obj_background = document.getElementById("background");
var obj_hello_title_eng = document.getElementById("hello_title_eng");
var obj_hello_title_kor = document.getElementById("hello_title_kor");
var obj_hello_title_jap = document.getElementById("hello_title_jap");
var obj_hello_title_desc = document.getElementById("hello_title_desc");
var obj_trailer_video = document.getElementById("trailer_video");
var obj_trailer_bg = document.getElementById("trailer_video");
var obj_quick_select_bg_outline = document.getElementById("quick_select_bg_outline");
//var obj_quick_select_bg = document.getElementById("quick_select_bg");
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
var obj_more_desc = document.getElementById("more_desc");
var obj_aboutme = document.getElementById("aboutme");
var obj_desc_blinder = document.getElementById("desc_blinder");
var obj_desc_thumbnail = document.getElementById("desc_thumbnail");
var obj_works_desc = document.getElementById("works_desc");
var obj_aboutme_desc = document.getElementById("aboutme_desc");
var obj_source_code_link = document.getElementById("source_code_link");
var obj_source_code_button = document.getElementById("source_code_button");
var obj_download_link = document.getElementById("download_link");
var obj_download_button = document.getElementById("download_button");


var obj_other_works_text = document.getElementById("other_works_text");
var obj_works_arrow_left = document.getElementById("works_arrow_left");
var obj_works_arrow_right = document.getElementById("works_arrow_right");
var obj_showcase_works_title1 = document.getElementById("showcase_works_title1");
var obj_showcase_works_title_sec1 = document.getElementById("showcase_works_title_sec1");


var max_size_sub_project = 2;
var max_size_main_project = 1;


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
for(var i = 0; i < 3; i++)
{
    obj_game_selector_button[i] = document.getElementById("game_selector_button"+(i+1));
}

for(var i = 0; i < obj_game_selector_button.length; i++)
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
var n_showcase_game = 1;
var n_showcase_works = 0;
var opened_more_desc = 0;
var works_gif_scroll_xx = 0;
var music_on = 1;
var audio = -4;
var random_bgm = -4;

var music_auto_playing = [-4,-4];
var saved_random_bgm = -4;

var quick_selector_activated = -1;
var background_stars = 1;






//첫 화면 로딩
setTimeout(show_page,9000);
for(var i = 1; i <= 3; i++)
{
    for(var k = 1; k <= 4; k++)
    {
        preload_images("imgs","gif","main"+i+"_"+k);
    }
}
preload_images("imgs","png","project_wak_thumbnail","Astronaut_thumbnail","project_wak_beat_thumbnail");
obj_loading_bar_grad.style.left = "0px";


function show_page()
{
    css_values();
    background_stars = 0;
    obj_trailer_bg.play();
    obj_trailer_bg.currentTime = 4;
    obj_trailer_video.style.filter = "blur(0px)";
    repos_works_gif();
    repos_gif();

    obj_screen_transition_bg.style.top = "-8px";
    console.log("page_loaded");
    setTimeout(screen_transition1,1000);
    
    setTimeout(title_anime1,2000);
    setTimeout(title_anime2,2200);
    setTimeout(title_anime3,2400);
    setTimeout(title_anime4,2600);
}

function screen_transition1()
{
    obj_loading_bar_bg.style.opacity = 0;
    obj_loading_bar_grad.style.opacity = 0;
    obj_screen_transition_bg.style.height = "0px";
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

    obj_loading_bar_bg.style.height = 0;
    obj_loading_bar_bg.style.top = -128+"px";
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
        //obj_quick_select_bg.style.top = "-8px";
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
    target.style.color = "#dcc4db";

    setTimeout(text_appearence_anime2,50,target);
}

function text_appearence_anime2(target_)
{
    target_.style.transition = "color 1s";
    target_.style.color = "#121212";
}



function text_appearence2_anime1(target)
{
    target.style.transition = "none";
    target.style.color = "#dcc4db";

    setTimeout(text_appearence2_anime2,50,target);
}

function text_appearence2_anime2(target_)
{
    target_.style.transition = "color 1s";
    target_.style.color = "#749eca";
}








window.addEventListener("resize", function()
{
    css_values();
})






obj_quick_select_main.addEventListener("mouseover",function()
{
    obj_quick_select_main.style.color = "#749eca";
})

obj_quick_select_main.addEventListener("mouseleave",function()
{
    obj_quick_select_main.style.color = "#fff9f6";
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
    obj_quick_select_showcase.style.color = "#fff9f6";
})

obj_quick_select_showcase.addEventListener("click",function()
{
    window.scrollTo({top : 1505, left : 0, behavior : "smooth"});
})

obj_quick_select_contact.addEventListener("mouseover",function()
{
    obj_quick_select_contact.style.color = "#749eca";
})

obj_quick_select_contact.addEventListener("mouseleave",function()
{
    obj_quick_select_contact.style.color = "#fff9f6";
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
    obj_quick_select_other_works.style.color = "#fff9f6";
})

obj_quick_select_other_works.addEventListener("click",function()
{
    window.scrollTo({top : 2850, left : 0, behavior : "smooth"});
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
    else if (random_bgm == "Dhalia" || random_bgm == "Lily" || random_bgm == "Intro")
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
    else if (random_bgm == "Snowlight" || random_bgm == "インベーダー" || random_bgm == "Ma Chouchoute")
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

        
    obj_music_button.src = "imgs/album"+(album_num)+".png";
}



function select_music()
{
    random_bgm = choose("PIXELIZE","Telepathic Love","Kokorotravel","Dhalia","Pluie","Sunflower","Hello","Snowlight","Letter From Heaven 空中都市 ver","Sweet Dreams","frostbite","Sight","Ma Chouchoute","インベーダー","Lily","Intro");
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

    var works_url = ["https://github.com/ABER1047/Astronaut_remake","https://github.com/ABER1047/Arena-of-woowakgood","https://github.com/ABER1047/Project-wak"];
    var works_title_eng = ["Project Wak Beat","Arena of Wakgood","Project Wak"];
    var works_title_kr = ["프로젝트 왁비트","아레나 오브 왁굳","프로젝트 왁"];
    var download_url = ["https://just-wak-beat.github.io/Project-Wak-Beat-website/","https://github.com/Arena-of-Wakgood/Arena-of-woowakgood","https://project-wak.github.io/Project-wak_website/"];


    for(var i = -max_size_main_project; i <= max_size_main_project; i++)
    {//n_showcase_works
        var _real_i = i+2;
        var n_show_case_ = i-n_showcase_game;
        n_show_case_ = (n_show_case_ < -max_size_main_project) ? max_size_main_project*2+n_show_case_+1 : n_show_case_;
        n_show_case_ = (n_show_case_ > max_size_main_project) ? -max_size_main_project*2+n_show_case_-1 : n_show_case_;

        var img_size = (1 - abs(n_show_case_)/(max_size_main_project*5))*800;
        var obj_main_project = document.getElementById("main_project"+_real_i);
        obj_main_project.style.left = (c_w - img_size)*0.5+(n_show_case_)*(600/max_size_main_project)+"px";
        obj_main_project.style.top = (1700+abs(n_show_case_)*30)+"px";
        obj_main_project.style.filter = "blur("+(abs(n_show_case_)*2)+"px)";
        obj_main_project.style.zIndex = 101-abs(n_show_case_);
        obj_main_project.style.width = img_size+"px";
    }

    var n_real_showcase = n_showcase_game+max_size_main_project;
    if (n_real_showcase > 2)
    {
        n_real_showcase -= 3;
    }
    if (n_real_showcase < 0)
    {
        n_real_showcase += 3;
    }

    obj_showcase_game_title1.textContent = works_title_eng[n_real_showcase];
    obj_showcase_game_title_sec1.textContent = works_title_kr[n_real_showcase];
    obj_showcase_game_title1.style.left = c_w*0.5-(obj_showcase_game_title1.textContent.length)*9+"px";
    obj_showcase_game_title_sec1.style.left = c_w*0.5-(obj_showcase_game_title_sec1.textContent.length)*3+"px";
    obj_source_code_link.href = works_url[n_real_showcase];
    obj_download_link.href = download_url[n_real_showcase];
    
    

    reset_color_gsb();
    obj_game_selector_button[obj_game_selector_button_activated[n_showcase_game]].style.background = "#dcc4db";
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
    for(var i = 0; i < obj_game_selector_button.length; i++)
    {
        obj_game_selector_button[i].style.background = "#aec1cf";
    }
}



obj_game_selector_button[0].addEventListener("click",function()
{
    reset_color_gsb();
    obj_game_selector_button[0].style.background = "#dcc4db";
    obj_game_selector_button_activated[n_showcase_game] = 1;
    var target_num = n_showcase_game+2;
    if (target_num > 3)
    {
        target_num -= 3
    }
    if (target_num < 1)
    {
        target_num += 3
    }
    var obj_main_project = document.getElementById("main_project"+target_num);
    obj_main_project.src = "imgs/main"+(target_num)+"_"+1+".gif";
})

obj_game_selector_button[1].addEventListener("click",function()
{
    reset_color_gsb();
    obj_game_selector_button[1].style.background = "#dcc4db";
    obj_game_selector_button_activated[n_showcase_game] = 1;
    var target_num = n_showcase_game+2;
    if (target_num > 3)
    {
        target_num -= 3
    }
    if (target_num < 1)
    {
        target_num += 3
    }
    var obj_main_project = document.getElementById("main_project"+target_num);
    obj_main_project.src = "imgs/main"+(target_num)+"_"+2+".gif";
})

obj_game_selector_button[2].addEventListener("click",function()
{
    reset_color_gsb();
    obj_game_selector_button[2].style.background = "#dcc4db";
    obj_game_selector_button_activated[n_showcase_game] = 1;
    var target_num = n_showcase_game+2;
    if (target_num > 3)
    {
        target_num -= 3
    }
    if (target_num < 1)
    {
        target_num += 3
    }
    var obj_main_project = document.getElementById("main_project"+target_num);
    obj_main_project.src = "imgs/main"+(target_num)+"_"+3+".gif";
})





obj_desc_blinder.addEventListener("click",function()
{
    desc_des_start();
});
addEventListener("mousewheel",function()
{
    desc_des_start();
});


obj_source_code_button.addEventListener("mouseover",function()
{
    obj_source_code_button.style.background = "#b0d0e5";
})

obj_source_code_button.addEventListener("mouseleave",function()
{
    obj_source_code_button.style.background = "#fff9f6";
})

obj_download_button.addEventListener("mouseover",function()
{
    obj_download_button.style.background = "#fe74cc";
})

obj_download_button.addEventListener("mouseleave",function()
{
    obj_download_button.style.background = "#fff9f6";
})







function desc_des_start()
{
    if (opened_more_desc == 1)
    {
        obj_desc_blinder.style.opacity = 0;
        obj_works_desc.style.opacity = 0;
        obj_desc_thumbnail.style.opacity = 0;
        obj_source_code_button.style.opacity = 0;
        obj_download_button.style.opacity = 0;
        obj_aboutme_desc.style.opacity = 0;
        setTimeout(desc_blinder_des,500);
    }
}

function desc_blinder_des()
{
    obj_desc_blinder.style.height = "0px";
    document.getElementById("body_t").style.overflowY = "scroll";


    obj_works_desc.style.top = "-999px";
    obj_desc_thumbnail.style.top = "-999px";
    obj_source_code_button.style.top = "-999px";
    obj_download_button.style.top = "-999px";
    obj_aboutme_desc.style.top = "-999px";
    obj_desc_thumbnail.style.borderRadius = "0%";
    obj_desc_thumbnail.style.width = "var(--s500px)";
    opened_more_desc = 0;
}

function desc_blinder_cre()
{
    opened_more_desc = 1;
}

obj_more_desc.addEventListener("click",function()
{
    var tmp_str = "";
    var downloadable = 0;
    css_values();
    setTimeout(desc_blinder_cre,500);
    setTimeout(css_values,10);
    document.getElementById("body_t").style.overflowY = "hidden";
    obj_desc_blinder.style.height = "2000px";
    obj_desc_blinder.style.opacity = 0.95;
    obj_desc_thumbnail.style.top = "16%";
    obj_desc_thumbnail.style.opacity = 1;
    obj_source_code_button.style.top = "800px";
    obj_source_code_button.style.opacity = 1;
    obj_works_desc.style.opacity = 1;
    obj_works_desc.style.top = "48%";

    if (n_showcase_game == 1)
    {
        tmp_str = "꽤나 스케일이 크게 제작되었으며, 약 150명 이상의 테스터분들이 도움을 주셨습니다.";
        downloadable = 1;
        
        obj_desc_thumbnail.src = "imgs/project_wak_thumbnail.png";
        obj_works_desc.innerHTML = "<span class = 'accent'>Project Wak(프로젝트 왁)</span></br></br>";
        obj_works_desc.innerHTML += "<span class = 'accent'>출시</span></br>2022 연말공모전</br></br>";
        obj_works_desc.innerHTML += "<span class = 'accent'>장르</span></br>소울라이크, 액션, RPG</br></br>";
        obj_works_desc.innerHTML += "<span class = 'accent'>개발 기간</span></br>약 1년 반 (유지 보수 기간 제외, 1인 개발)</br></br>";
        obj_works_desc.innerHTML += "</br></br>";
        obj_works_desc.innerHTML += "게임 판매 플렛폼인 Steam(스팀)에 판매되는</br>";
        obj_works_desc.innerHTML += "액션 RPG게임 급의 퀄리티로 제작하는게 목표였기 때문에</br>";
        obj_works_desc.innerHTML += (tmp_str)+"</br>";
    }
    else if (n_showcase_game == 2)
    {
        tmp_str = "오리지널 맵들과 함께, 유저들이 직접 원하는 곡으로 제작한 '커스텀 유저 맵'을 플레이 해보실 수 있습니다.";
        downloadable = 1;
        
        
        obj_desc_thumbnail.src = "imgs/project_wak_beat_thumbnail.png";
        obj_works_desc.innerHTML = "<span class = 'accent'>Project Wak Beat(프로젝트 왁비트)</span></br></br>";
        obj_works_desc.innerHTML += "<span class = 'accent'>출시</span></br>2023 연말공모전</br></br>";
        obj_works_desc.innerHTML += "<span class = 'accent'>장르</span></br>소울라이크, 액션, RPG</br></br>";
        obj_works_desc.innerHTML += "<span class = 'accent'>개발 기간</span></br>약 1년 반 (유지 보수 기간 제외, 1인 개발)</br></br>";
        obj_works_desc.innerHTML += "</br></br>";
        obj_works_desc.innerHTML += "Project Wak Beat는 Project arrhythmia와 JSAB를 베이스로</br>";
        obj_works_desc.innerHTML += "기본적으로는 비트에 맞춰 등장하는 여러 탄막들을 피하는 리듬게임이며,</br>";
        obj_works_desc.innerHTML += "Windows & Android 플렛폼에서 플레이 가능합니다!</br>";
        obj_works_desc.innerHTML += "오리지널 맵들과 함께, 유저들이 직접 원하는 곡으로 제작한 '커스텀 유저 맵'을 플레이 해보실 수 있습니다.</br>";
    }
    else
    {
        tmp_str = "첫 출시 당시, 예상보다 많은 접속자로 인해 서버가 마비되어, 우왁굳님의 방송에선 진행 할 수 없게 되었습니다.";
        downloadable = 1;
        
        
        obj_desc_thumbnail.src = "imgs/arena_of_wakgood_thumbnail.gif";
        obj_works_desc.innerHTML = "<span class = 'accent'>Arena of Wakgood(아레나 오브 왁굳)</span></br></br>";
        obj_works_desc.innerHTML += "<span class = 'accent'>출시</span></br>2021년 3월 10일</br></br>";
        obj_works_desc.innerHTML += "<span class = 'accent'>장르</span></br>액션, 멀티플레이, PVP, 대전</br></br>";
        obj_works_desc.innerHTML += "<span class = 'accent'>개발 기간</span></br>약 반년 (유지 보수 기간 제외, 1인 개발)</br></br>";
        obj_works_desc.innerHTML += "</br></br>";
        obj_works_desc.innerHTML += "각기 다른 게임 모드와 여러 맵에서, 각 플레이어들이 자신의 무기를 들고 대전하며,</br>";
        obj_works_desc.innerHTML += "채팅 및 이모티콘기능</span>을 통해 플레이어들 끼리 서로 대화를 주고 받을 수 있습니다.</br>";
        obj_works_desc.innerHTML += "약 20명 이상의 비공개 테스터분들이 도움을 주셨습니다.</br>";
        obj_works_desc.innerHTML += "첫 출시 당시, 예상보다 많은 접속자로 인해 서버가 마비되어, 우왁굳님의 방송에선 진행 할 수 없게 되었습니다.</br>";
    }
    
    //for css
    var text_max_width = (tmp_str.length)*12;
    document.documentElement.style.setProperty("--works_desc_xx",(c_w-text_max_width)*0.5+"px");
    document.documentElement.style.setProperty("--works_desc_width",text_max_width+"px");
    document.documentElement.style.setProperty("--source_code_button_xx",(c_w-80)*0.5+"px");
    
    if (downloadable == 1)
    {
        obj_download_button.style.top = "850px";
        obj_download_button.style.opacity = 1;
    }
})


obj_more_desc.addEventListener("mouseover",function()
{
    obj_more_desc.style.background = "#b79aca";
})

obj_more_desc.addEventListener("mouseleave",function()
{
    obj_more_desc.style.background = "#24254a";
})












obj_aboutme.addEventListener("click",function()
{
    setTimeout(desc_blinder_cre,500);
    document.getElementById("body_t").style.overflowY = "hidden";
    obj_desc_blinder.style.height = "2000px";
    obj_desc_blinder.style.opacity = "0.95";
    obj_desc_thumbnail.style.top = "7%";
    obj_desc_thumbnail.style.opacity = "1";
    obj_desc_thumbnail.style.width = "200px";
    obj_desc_thumbnail.style.borderRadius = "50%";
    obj_desc_thumbnail.style.overflow = "hidden";
    obj_source_code_button.style.top = "-800px";
    obj_download_button.style.top = "-800px";

    obj_desc_thumbnail.src = "https://avatars.githubusercontent.com/u/78880883?v=4";
    aboutme_desc.style.top = "33%";
    aboutme_desc.style.opacity = "1";
})

obj_aboutme.addEventListener("mouseover",function()
{
    obj_aboutme.style.background = "#b79aca";
})

obj_aboutme.addEventListener("mouseleave",function()
{
    obj_aboutme.style.background = "#24254a";
})
















function repos_works_gif()
{
    scroll_animation[3] = 0;

    var works_url = ["https://github.com/ABER-Portfolio/Astronaut_remake","https://wallpapers-projects-aber.github.io/bocchi/","https://github.com/ABER1047/delaunay-trianglulation","https://wallpapers-projects-aber.github.io/HitoriBocchi/","https://github.com/ABER1047"];
    var works_title_eng = ["Astronaut","Bocchi!","Delaunay Triangulation","Hitori Bocchi","Empty"];
    var works_title_kr = ["아스트로넛","ぼっち・ざ・ろっく!","들로네 삼각분할","ひとりぼっち","비어있음"];
    var download_url = ["","https://steamcommunity.com/sharedfiles/filedetails/?id=2902111469","","https://steamcommunity.com/sharedfiles/filedetails/?id=2945142270",""];

    for(var i = -max_size_sub_project; i <= max_size_sub_project; i++)
    {//n_showcase_works
        var _real_i = i+2;
        var n_show_case_ = i-n_showcase_works;
        n_show_case_ = (n_show_case_ < -max_size_sub_project) ? max_size_sub_project*2+n_show_case_+1 : n_show_case_;
        n_show_case_ = (n_show_case_ > max_size_sub_project) ? -max_size_sub_project*2+n_show_case_-1 : n_show_case_;

        var img_size = (1 - abs(n_show_case_)/(max_size_sub_project*3))*800;
        var obj_sub_project = document.getElementById("sub_project"+_real_i);
        obj_sub_project.style.left = (c_w - img_size)*0.5+(n_show_case_)*(720/max_size_sub_project)+"px";
        obj_sub_project.style.top = (3100+abs(n_show_case_)*21)+"px";
        obj_sub_project.style.filter = "blur("+(abs(n_show_case_)*2)+"px)";
        obj_sub_project.style.zIndex = 101-abs(n_show_case_);
        obj_sub_project.style.width = img_size+"px";
    }

    var n_real_showcase = n_showcase_works+max_size_sub_project;
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
    obj_source_code_link.href = works_url[n_real_showcase];
    obj_download_link.href = download_url[n_real_showcase];

    setTimeout(scroll_animation_active,500);
}


obj_works_more_desc.addEventListener("click",function()
{
    var downloadable = 0;
    var n_real_showcase = n_showcase_works+max_size_sub_project;
    var tmp_str = "";
    setTimeout(desc_blinder_cre,500);
    setTimeout(css_values,10);
    document.getElementById("body_t").style.overflowY = "hidden";
    obj_desc_blinder.style.height = "2000px";
    obj_desc_blinder.style.opacity = 0.95;
    obj_desc_thumbnail.style.top = "16%";
    obj_desc_thumbnail.style.opacity = 1;
    obj_source_code_button.style.top = "800px";
    obj_source_code_button.style.opacity = 1;
    obj_works_desc.style.opacity = 1;
    obj_works_desc.style.top = "48%";
    obj_source_code_button.innerHTML = "소스코드";

    if (n_real_showcase == 0)
    {
        tmp_str = "아쉽게도, 특성화고 진학을 위해 제작하였던 이 작품은 심사 점수 중 만점에 가까운 점수를 받을 수 있었지만,";
        
        obj_works_desc.style.top = "45%";
        obj_desc_thumbnail.src = "imgs/astronaut_preview.gif";
        obj_works_desc.innerHTML = "<span class = 'accent'>Astronaut (아스트로넛)</span></br></br>";
        obj_works_desc.innerHTML += "<span class = 'accent'>출시</span></br>2019년</br></br>";
        obj_works_desc.innerHTML += "<span class = 'accent'>장르</span></br>멀티플레이, RPG, 생존</br></br>";
        obj_works_desc.innerHTML += "<span class = 'accent'>개발 기간</span></br>약 1년 반 (유지 보수 기간 제외, 1인 개발)</br></br>";
        obj_works_desc.innerHTML += "</br></br>";
        obj_works_desc.innerHTML += "<span class = 'accent'>2019년도에 특성화고에 진학하기 위한 포트폴리오 용도</span>로 제작했던 게임입니다.</br>";
        obj_works_desc.innerHTML += "게임의 목표는 여러가지 위험이 도사리는 다른 행성을 탐험하고 몬스터들을 잡거나,</br>";
        obj_works_desc.innerHTML += "지하 동굴을 탐험하거나, 행성 내에 이미 개척되어 개발된 지역을 방문하여 생존하는 것입니다.</br>";
        obj_works_desc.innerHTML += "Server-client방식을 통해 멀티 플레이로 친구와 함께 플레이 할 수 있습니다.</br>";
        obj_works_desc.innerHTML += "아쉽게도, 특성화고 진학을 위해 제작하였던 이 작품은 심사 점수 중 만점에 가까운 점수를 받을 수 있었지만,</br>";
        obj_works_desc.innerHTML += "다른 이유로 인해 진학하지 못하였습니다.</br>";
    }
    else if (n_real_showcase == 1)
    {
        tmp_str = "Steam(스팀)의 Wallpaper Engine을 위한 웹사이트 입니다.";
        downloadable = 1;
        
        obj_desc_thumbnail.src = "imgs/bocchi!.gif";
        obj_works_desc.innerHTML = "<span class = 'accent'>Bocchi!</span></br></br>";
        obj_works_desc.innerHTML += "<span class = 'accent'>출시</span></br>2022년 12월 16일</br></br>";
        obj_works_desc.innerHTML += "<span class = 'accent'>개발 기간</span></br>약 7일 (유지 보수 기간 제외, 1인 개발)</br></br>";
        obj_works_desc.innerHTML += "</br></br>";
        obj_works_desc.innerHTML += "Steam(스팀)의 Wallpaper Engine을 위한 웹사이트 입니다.</br>";
        obj_works_desc.innerHTML += "Wallpaper Engine 창작마당에서 다운로드 가능합니다.</br>";
    }
    else if (n_real_showcase == 2)
    {
        tmp_str = "이 삼각형들의 내각의 최소값이 최대가 되도록 하는 '들로네 삼각분할'을 구현한 프로젝트 입니다.";
        
        
        obj_desc_thumbnail.src = "imgs/delaunay.gif";
        obj_works_desc.innerHTML = "<span class = 'accent'>Delaunay Triangulation (들로네 삼각분할)</span></br></br>";
        obj_works_desc.innerHTML += "<span class = 'accent'>출시</span></br>2022년 7월 23일</br></br>";
        obj_works_desc.innerHTML += "<span class = 'accent'>개발 기간</span></br>약 2주 (유지 보수 기간 제외, 1인 개발)</br></br>";
        obj_works_desc.innerHTML += "</br></br>";
        obj_works_desc.innerHTML += "고등학교 수학 주제 탐구 활동을 위해 제작한 프로젝트 입니다.</br>";
        obj_works_desc.innerHTML += "평면 위의 점들을 삼각형으로 연결하여 공간을 분할할 때,</br>";
        obj_works_desc.innerHTML += "이 삼각형들의 내각의 최소값이 최대가 되도록 하는 '들로네 삼각분할'을 구현한 프로젝트 입니다.</br>";
    }
    else if (n_real_showcase == 3)
    {
        tmp_str = "실제 시간에 기반하여 자연스럽게 배경이 바뀌는 효과가 있습니다.";
        downloadable = 1;
        
        obj_desc_thumbnail.src = "imgs/falling_bocchi_preview.gif";
        obj_works_desc.innerHTML = "<span class = 'accent'>Hitori Bocchi</span></br></br>";
        obj_works_desc.innerHTML += "<span class = 'accent'>출시</span></br>2023년 3월 11일</br></br>";
        obj_works_desc.innerHTML += "<span class = 'accent'>개발 기간</span></br>약 7일 (유지 보수 기간 제외, 1인 개발)</br></br>";
        obj_works_desc.innerHTML += "</br></br>";
        obj_works_desc.innerHTML += "Steam(스팀)의 Wallpaper Engine을 위한 웹사이트 입니다.</br>";
        obj_works_desc.innerHTML += "실제 시간에 기반하여 자연스럽게 배경이 바뀌는 효과가 있습니다.</br>";
        obj_works_desc.innerHTML += "Wallpaper Engine 창작마당에서 다운로드 가능합니다.</br>";
    }
    else if (n_real_showcase == 4)
    {
        tmp_str = "더 많은 프로젝트를 구경하고 싶다면";
        
        
        obj_desc_thumbnail.src = "imgs/X.png";
        obj_works_desc.innerHTML = "<span class = 'accent'>이런!</span></br></br>";
        obj_works_desc.innerHTML += "</br></br>";
        obj_works_desc.innerHTML += "이곳은 아직 비어있네요!</br>";
        obj_works_desc.innerHTML += "더 많은 프로젝트를 구경하고 싶다면</br>";
        obj_works_desc.innerHTML += "제 깃허브 페이지를 방문해주세요!</br>";
        obj_source_code_button.innerHTML = "방문하기";
    }
    
    //for css
    var text_max_width = (tmp_str.length)*12;
    document.documentElement.style.setProperty("--works_desc_xx",(c_w-text_max_width)*0.5+"px");
    document.documentElement.style.setProperty("--works_desc_width",text_max_width+"px");
    document.documentElement.style.setProperty("--source_code_button_xx",(c_w-80)*0.5+"px");
    
    if (downloadable == 1)
    {
        obj_download_button.style.top = "850px";
        obj_download_button.style.opacity = 1;
    }
})


obj_works_arrow_left.addEventListener("click",function()
{
    n_showcase_works --;

    if (n_showcase_works < -max_size_sub_project)
    {
        n_showcase_works = max_size_sub_project;
    }
    setTimeout(repos_works_gif,50);
})

obj_works_arrow_right.addEventListener("click",function()
{
    n_showcase_works ++;

    if (n_showcase_works > max_size_sub_project)
    {
        n_showcase_works = -max_size_sub_project;
    }
    setTimeout(repos_works_gif,50);
})




obj_works_more_desc.addEventListener("mouseover",function()
{
    obj_works_more_desc.style.background = "#b79aca";
})

obj_works_more_desc.addEventListener("mouseleave",function()
{
    obj_works_more_desc.style.background = "#24254a";
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
    obj_credit.style.color = "#dcc4db";
})

obj_credit.addEventListener("mouseleave",function()
{
    obj_credit.style.color = "#1a1a1a";
})


obj_air_res_bar.addEventListener("mouseover",function()
{
    obj_air_res_bar.style.background = "#86868d";
})

obj_air_res_bar.addEventListener("mouseleave",function()
{
    obj_air_res_bar.style.background = "#867dff";
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
        //window.location.href = "m_index.html";
    }
    else
    {
        is_pc = 1;
    }

    var main_trailer_height = c_h*1.1+32;
    document.documentElement.style.setProperty("--showcase_text_xx",(c_w-384*0.5)*0.5+"px");
    document.documentElement.style.setProperty("--other_works_text_xx",(c_w-396*0.5)*0.5+"px");
    document.documentElement.style.setProperty("--view_width_x1p1",main_trailer_height+"px");
    document.documentElement.style.setProperty("--view_height",c_h+"px");
    document.documentElement.style.setProperty("--more_desc_xx",(c_w-86)*0.5+"px");
    document.documentElement.style.setProperty("--desc_thumbnail_xx",(c_w-obj_desc_thumbnail.width)*0.5+"px");
    document.documentElement.style.setProperty("--trailer_video_xx",(is_pc == 1) ? (64+"px") : (c_w-main_trailer_height/9*16)*0.5+"px");
    
    for(var i = 1; i <= obj_game_selector_button.length; i++)
    {
        document.documentElement.style.setProperty("--game_selector_button"+i+"_xx",(c_w*0.5-64*(2-i))+"px");
    }

    
    

    document.documentElement.style.setProperty("--sr168px",c_w-168*c_x_comp+"px");
    document.documentElement.style.setProperty("--sr288px",c_w-288*c_x_comp+"px");
    document.documentElement.style.setProperty("--sr384px",c_w-384*c_x_comp+"px");
    document.documentElement.style.setProperty("--sr500px",c_w-500*c_x_comp+"px");

    
    document.documentElement.style.setProperty("--s18px",18*c_x+"px");
    document.documentElement.style.setProperty("--s36px",36*c_x+"px");
    document.documentElement.style.setProperty("--s48px",48*c_x+"px");
    document.documentElement.style.setProperty("--s108px",108*c_x+"px");
    document.documentElement.style.setProperty("--s112px",112*c_x+"px");
    document.documentElement.style.setProperty("--s256"+"px",256*c_x+"px");
    document.documentElement.style.setProperty("--s160"+"px",160*c_x+"px");
    document.documentElement.style.setProperty("--s110px",110*c_x+"px");
    document.documentElement.style.setProperty("--s260px",260*c_x+"px");
    document.documentElement.style.setProperty("--s300px",300*c_x+"px");
    document.documentElement.style.setProperty("--s410px",410*c_x+"px");
    document.documentElement.style.setProperty("--s800px",800*c_x+"px");
    document.documentElement.style.setProperty("--s700px",700*c_x+"px");
    document.documentElement.style.setProperty("--s500px",500*c_x+"px");
    document.documentElement.style.setProperty("--s450px",450*c_x+"px");

    document.documentElement.style.setProperty("--m980px",980+(1-is_pc)*320+"px");
    document.documentElement.style.setProperty("--m1100px",1100+(1-is_pc)*320+"px");

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
    
    document.documentElement.style.setProperty("--m_interect_120xx",-120-mouse_movement_dis_xx+"px");
    document.documentElement.style.setProperty("--m_interect_128xx",-128-mouse_movement_dis_xx+"px");
    document.documentElement.style.setProperty("--m_interect_12xx",-12+mouse_movement_dis_xx+"px");
    document.documentElement.style.setProperty("--m_interect_20xx",-20+mouse_movement_dis_xx+"px");

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
            //obj_quick_select_bg.style.top = "-88px";
            obj_quick_select_main.style.top = "-63px";
            obj_quick_select_contact.style.top = "-63px";
            obj_quick_select_showcase.style.top = "-63px";
            obj_quick_select_other_works.style.top = "-63px";
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
        
        if (scroll > 220+is_pc*200 && scroll_animation[1] == 0)
        {
            scroll_animation[1] = 1;

            obj_showcase_game_title1.style.width = "0px";
            setTimeout(text_appearence_anime1,500,obj_showcase_game_title1);
            obj_showcase_game_title_sec1.style.width = "0px";
            setTimeout(text_appearence2_anime2,1000,obj_showcase_game_title_sec1);
        }
        
        if (scroll > 1000+is_pc*200 && scroll_animation[2] == 0)
        {
            scroll_animation[2] = 1;
            obj_other_works_text.style.width = "0px";
            document.getElementById("sepa_bg2_2").style.width = "2000px";
            setTimeout(text_appearence_anime1,500,obj_other_works_text);
        }
        
        if (scroll > 1550+is_pc*200 && scroll_animation[3] == 0)
        {
            scroll_animation[3] = 1;
            obj_showcase_works_title1.style.width = "0px";
            setTimeout(text_appearence_anime1,500,obj_showcase_works_title1);
            obj_showcase_works_title_sec1.style.width = "0px";
            setTimeout(text_appearence2_anime2,1000,obj_showcase_works_title_sec1);
        }
        
        if (scroll > 2400+is_pc*200 && scroll_animation[4] == 0)
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



if (is_pc == 1)
{
    var obj_bg_star = [], star_num = 0;

    //step event
    setTimeout(step_event,200);
    function step_event()
    {
        var random_val = irandom_range(0,100);
        if (random_val <= 50+background_stars*50)
        {
            obj_bg_star[star_num] = document.createElement("img");
            var scale = irandom_range(10,100)/80;
            var type = irandom_range(0,100);
            if (type <= 90)
            {
                var _xx = irandom_range(0,c_w-32);
                var _yy = (background_stars == 0) ? 4723 : irandom_range(0,4723);
                var size = c_x*24*scale;
                var transition_time = floor(size)*4;
                obj_bg_star[star_num].style.width = size+"px";
                obj_bg_star[star_num].src = "imgs/flake"+irandom_range(1,5)+".png";
                obj_bg_star[star_num].style.opacity = 1;
            }
            else
            {
                var _xx = irandom_range(-c_w*0.2,c_w*1.1);
                var _yy = (background_stars == 0) ? 2823 : irandom_range(0,2823);
                var size = c_x*1280*scale;
                var transition_time = floor(size)/8;
                obj_bg_star[star_num].style.width = size+"px";
                obj_bg_star[star_num].src = "imgs/starlight2.png";
                obj_bg_star[star_num].style.opacity = 0;
            }
            obj_bg_star[star_num].style.position = "absolute";
            obj_bg_star[star_num].style.display = "block";
            obj_bg_star[star_num].style.zIndex = 0;
            obj_bg_star[star_num].style.top = _yy+"px";
            obj_bg_star[star_num].draggable = false;
            obj_bg_star[star_num].style.left = _xx+"px";
            obj_bg_star[star_num].style.filter = "blur(0.3px)";
            obj_bg_star[star_num].style.transform = "rotate("+irandom_range(0,359)+"deg)";
            obj_bg_star[star_num].style.transition = "top "+(transition_time)+"s, opacity 4s, filter 4s";
            document.getElementById("star_bg").appendChild(obj_bg_star[star_num]);
            setTimeout(set_star_pos,100,star_num,_yy);
            star_num += (star_num > 100) ? -101 : 1;
        }
        //step event
        setTimeout(step_event,200);
    }

    function set_star_pos(target,ystart)
    {
        if (obj_bg_star[target].src == "imgs/starlight2.png")
        {
            obj_bg_star[target].style.opacity = irandom_range(10,20)/20;
        }
        obj_bg_star[target].style.top = -(ystart/800)+"px";
        setTimeout(des_star1,25000,target);
    }

    function des_star1(target)
    {
        obj_bg_star[target].style.opacity = 0;
        setTimeout(des_star2,4000,target);
    }

    function des_star2(target)
    {
        obj_bg_star[target].remove();
    }
}