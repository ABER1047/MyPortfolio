//#region variables for element id
var obj_loading_bar_bg = document.getElementById("loading_bar_bg");
var obj_loading_bar_grad = document.getElementById("loading_bar_grad");
var obj_screen_transition_bg = document.getElementById("screen_transition_bg");
var obj_background = document.getElementById("background");
var obj_hello_title_eng = document.getElementById("hello_title_eng");
var obj_hello_title_kor = document.getElementById("hello_title_kor");
var obj_hello_title_jap = document.getElementById("hello_title_jap");
var obj_hello_title_desc = document.getElementById("hello_title_desc");
var obj_trailer_video = document.getElementById("trailer_video");
var obj_priview_video_bg = document.getElementById("priview_video_bg");
var obj_trailer_bg = document.getElementById("trailer_bg");
var obj_quick_select_bg_outline = document.getElementById("quick_select_bg_outline");
var obj_quick_select_main = document.getElementById("quick_select_main");
var obj_quick_select_works = document.getElementById("quick_select_works");
var obj_quick_select_contact = document.getElementById("quick_select_contact");
var obj_music_info = document.getElementById("music_info");
var obj_music_info2 = document.getElementById("music_info2");
var obj_music_button = document.getElementById("music_button");
var obj_star_point_parents = document.getElementById("star_point_parents");
var obj_credit = document.getElementById("credit");
var obj_contact_text = document.getElementById("contact_text");
var obj_contact_youtube = document.getElementById("contact_youtube");
var obj_contact_discord = document.getElementById("contact_discord");
var obj_contact_github = document.getElementById("contact_github");
var obj_black_line = document.getElementById("black_line");
var obj_black_line_head = document.getElementById("black_line_head");
var obj_arrow = document.getElementById("arrow");
var obj_animated_cursor_main = document.getElementById("animated_cursor_main");
var obj_animated_cursor = document.getElementById("animated_cursor");
var obj_starlight_effect = document.getElementById("starlight_effect");
//#endregion

//#region variables for design
var c_w = -4;
var c_h = -4;
var is_pc = 1;
var c_x = 1;
//#endregion

//#region variables for music
var music_on = 1;
var audio = -4;
var random_bgm = -4;
var music_auto_playing = [ -4,-4 ];
var saved_random_bgm = -4;
//#endregion

//#region variable for language
var text_scripts = [];
for(var i = 0; i < 99; i++)
{
    text_scripts[i] = "";
}
//#endregion

//#region varialbe for scroll
n_scroll_pos = 0;
//#endregion

//#region loading speed (for dev)
var loading_speed = 3000; //9000
//#endregion

//#region variable for check is window resized or scrolled
is_window_scrolled = true;
//#endregion

//#region variable for mouse pos
var mouse_x = 0;
var mouse_y = 0;
var b_mouse_x = 0;
var b_mouse_y = 0;
//#endregion

//#region variable for star element
var star_point = [-4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4];
var star_point_tp_button = [];
var star_point_txt_box = [];
var star_point_img_box = [];
var star_point_img_box_src = [ "imgs/gms.png", "imgs/android.png", "imgs/google_play.jpg", "imgs/astronaut_preview.gif", "imgs/arena_of_wakgood_preview.mp4", "imgs/delaunay_preview.gif", "imgs/bocchi_preview.mp4", "imgs/project_wak_preview.mp4", "imgs/hitori_bocchi_trailer.mp4", "imgs/project_wak_beat_preview.mp4", "imgs/project_D_preview.mp4"];
var star_point_img_box_type = [ "img", "img", "img", "img", "video", "img", "video", "video", "video", "video", "video"];
var star_point_source_code_link_box = [false, false, false, true, true, true, true, true, true, true, true ];
var star_point_download_link_box = [false, false, false, false, true, false, true, true, true, true, false ];
var star_point_trailer_link_box = [false, false, false, false, true, false, true, true, true, true, false ];
var star_point_margin_ratio = (9/star_point.length);
var star_point_margin = 120*star_point_margin_ratio;

//hyperlinks
var star_point_source_code_link = [
    false, 
    false, 
    false, 
    "https://github.com/ABER-Portfolio/Astronaut_remake", 
    "https://github.com/Arena-of-Wakgood/Arena-of-woowakgood", 
    "https://github.com/ABER-Portfolio/delaunay-trianglulation", 
    "https://github.com/Wallpapers-Projects-ABER/bocchi", 
    "https://github.com/Project-Wak/Project-wak", 
    "https://github.com/Wallpapers-Projects-ABER/HitoriBocchi", 
    "https://github.com/Just-Wak-Beat/Project_Wak_Beat",
    "https://github.com/ABER1047/Distress-diary-Remake" ];
var star_point_download_link = [
    false, 
    false, 
    false, 
    false, 
    "https://github.com/ABER1047/Arena-of-woowakgood/releases/download/alpha-2.22/Arena_of_Woowakgood.zip", 
    false, 
    "https://steamcommunity.com/sharedfiles/filedetails/?id=2902111469", 
    "https://project-wak.github.io/Project-wak_website/", 
    "https://steamcommunity.com/sharedfiles/filedetails/?id=2945142270", 
    "https://just-wak-beat.github.io/Project-Wak-Beat-website/",
    false ];
var star_point_trailer_link = [
    false, 
    false, 
    false, 
    false, 
    "https://www.youtube.com/watch?v=dbzp09Ly1CY", 
    false, 
    "https://wallpapers-projects-aber.github.io/bocchi/", 
    "https://youtu.be/YS-_TZILsJU?si=j43eQ-QJXfc1kR7c", 
    "https://wallpapers-projects-aber.github.io/HitoriBocchi/", 
    "https://youtu.be/y4fmaVC6ugo?si=Ca-CoinBQLCP8I0v",
    false ];
//#endregion

//#region variable for cursor animation
var playing_cursor_animation = false;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//#region set to current region language
function set_language(region)
{
    window.scrollTo(0, 0);
    var tmp_current_region = region;
    console.log(tmp_current_region);
    


    if (tmp_current_region == "South Korea")
    {
        //#region Korean text scripts
        text_scripts[1] = "<span class = 'accent_gold'>2013년도 (당시 초등학교 3학년)</span>";
        text_scripts[1] += "</br>";
        text_scripts[1] += "첫 프로그래밍(GML) 입문";
        
        text_scripts[2] = "<span class = 'accent_red'>2016년 1월 (당시 초등학교 졸업 후 겨울 방학)</span>";
        text_scripts[2] += "</br>";
        text_scripts[2] += "<span class = 'accent_red2'>첫 모바일 게임 개발</span>";
        text_scripts[2] += "</br>";
        text_scripts[2] += "</br>";
        text_scripts[2] += "겨울 방학때 처음으로 제작해 Google Play에 출시";
        
        text_scripts[3] = "<span class = 'accent_gold'>2017년도</span>";
        text_scripts[3] += "</br>";
        text_scripts[3] += "첫 모바일 게임 <span class = 'accent_gold2'>15만 다운로드 달성</span>";
        text_scripts[3] += "</br>";
        text_scripts[3] += "</br>";
        text_scripts[3] += "Google Play 앱스토어 Top 100위 안에 등재된 이후,"
        text_scripts[3] += "</br>";
        text_scripts[3] += "15만 다운로드 달성";
        text_scripts[3] += "</br>";
        text_scripts[3] += "</br>";
        text_scripts[3] += "(현재는 게임이 관리되지 않아 앱스토어에서 삭제됨)";
        
        text_scripts[4] = "<span class = 'accent_red'>2018년도 후반기</span>";
        text_scripts[4] += "</br>";
        text_scripts[4] += "<span class = 'accent_red2'>'Astronaut (아스트로넛)'</span>";
        text_scripts[4] += "</br>";
        text_scripts[4] += "</br>";
        text_scripts[4] += "특성화고 진학을 위해";
        text_scripts[4] += "</br>";
        text_scripts[4] += "2016년도부터 약 2년간 포트폴리오로써 개발한 게임";
        text_scripts[4] += "</br>";
        text_scripts[4] += "</br>";
        text_scripts[4] += "(심사 결과 만점에 가까운 점수를 받았지만, 개인적인 사정으로 인해 진학 X)";
        
        text_scripts[5] = "<span class = 'accent_red'>2020.03.10</span>";
        text_scripts[5] += "</br>";
        text_scripts[5] += "<span class = 'accent_red2'>'Arena of Wakgood (아레나 오브 왁굳)'</span>";
        text_scripts[5] += "</br>";
        text_scripts[5] += "</br>";
        text_scripts[5] += "2019년도부터 약 1년 간";
        text_scripts[5] += "</br>";
        text_scripts[5] += "유튜버 '우왁굳'의 '2021 연말공모전'을 위해 제작한";
        text_scripts[5] += "</br>";
        text_scripts[5] += "액션, PVP 온라인 대전 장르의 게임";
        text_scripts[5] += "</br>";
        text_scripts[5] += "</br>";
        text_scripts[5] += "</br>";
        text_scripts[5] += "2020.03.10 출시";
        
        text_scripts[6] = "<span class = 'accent_gold'>2022.07.03</span>";
        text_scripts[6] += "</br>";
        text_scripts[6] += "<span class = 'accent_gold2'>'Delauney Triangulation (들로네 삼각분할)'</span>";
        text_scripts[6] += "</br>";
        text_scripts[6] += "</br>";
        text_scripts[6] += "고등학교 수학 주제 탐구 활동을 위해"
        text_scripts[6] += "</br>";
        text_scripts[6] += "'들로네 삼각분할'을 구현한 프로젝트 제작";
        
        text_scripts[7] = "<span class = 'accent_purple'>2023.12.16</span>";
        text_scripts[7] += "</br>";
        text_scripts[7] += "<span class = 'accent_purple2'>'Bocchi!'</span>";
        text_scripts[7] += "</br>";
        text_scripts[7] += "</br>";
        text_scripts[7] += "Steam(스팀)의 Wallpaper Engine을 위한 웹사이트";
        text_scripts[7] += "</br>";
        text_scripts[7] += "</br>";
        text_scripts[7] += "2023.12.16 출시";
        
        text_scripts[8] = "<span class = 'accent_red'>2023.01.19</span>";
        text_scripts[8] += "</br>";
        text_scripts[8] += "<span class = 'accent_red2'>'Project Wak (프로젝트 왁)'</span>";
        text_scripts[8] += "</br>";
        text_scripts[8] += "</br>";
        text_scripts[8] += "2021년도 후반기부터 약 1년 반 동안";
        text_scripts[8] += "</br>";
        text_scripts[8] += "</br>";
        text_scripts[8] += "유튜버 '우왁굳'의 '2022 연말공모전'을 위해 제작한";
        text_scripts[8] += "</br>";
        text_scripts[8] += "액션, RPG, 소울라이크 장르의 게임";
        text_scripts[8] += "</br>";
        text_scripts[8] += "</br>";
        text_scripts[8] += "2023.01.19 출시";
        
        text_scripts[9] = "<span class = 'accent_purple'>2023.03.11</span>";
        text_scripts[9] += "</br>";
        text_scripts[9] += "<span class = 'accent_purple2'>'Hirori Bocchi'</span>";
        text_scripts[9] += "</br>";
        text_scripts[9] += "</br>";
        text_scripts[9] += "Steam(스팀)의 Wallpaper Engine을 위한 웹사이트";
        text_scripts[9] += "</br>";
        text_scripts[9] += "</br>";
        text_scripts[9] += "2023.03.11 출시";
        
        text_scripts[10] = "<span class = 'accent_red'>2024.01.14</span>";
        text_scripts[10] += "</br>";
        text_scripts[10] += "<span class = 'accent_red2'>'Project Wak Beat (프로젝트 왁비트)'</span>";
        text_scripts[10] += "</br>";
        text_scripts[10] += "</br>";
        text_scripts[10] += "2023년도부터 약 1년 간";
        text_scripts[10] += "</br>";
        text_scripts[10] += "유튜버 '우왁굳'의 '2023 연말공모전'을 위해";
        text_scripts[10] += "</br>";
        text_scripts[10] += "Project arrhythmia와 JSAB 게임을 기준으로 제작한";
        text_scripts[10] += "</br>";
        text_scripts[10] += "리듬, 액션, 탄막 장르의 게임";
        text_scripts[10] += "</br>";
        text_scripts[10] += "</br>";
        text_scripts[10] += "</br>";
        text_scripts[10] += "2024.01.14 출시";
        
        text_scripts[11] = "<span class = 'accent_red'>최근 근황</span>";
        text_scripts[11] += "</br>";
        text_scripts[11] += "<span class = 'accent_red2'>'Project D (프로젝트 D)'</span>";
        text_scripts[11] += "</br>";
        text_scripts[11] += "</br>";
        text_scripts[11] += "2022년도에 약 2개월간 개발하다 중단된 프로젝트";
        text_scripts[11] += "</br>";
        text_scripts[11] += "너무 오래된 프로젝트이기도 하고, 최적화 문제/스파게티 코드 등등";
        text_scripts[11] += "</br>";
        text_scripts[11] += "여러가지 문제점이 많아서, 현재 코드를 포함한 모든 부분을 전부 다 리메이크 중";
        //#endregion
    }
    else if (tmp_current_region == "Japan")
    {
        //#region Japanese text scripts
        text_scripts[1] = "<span class = 'jp'><span class = 'accent_gold'>2013年度(小学校3年生)</span>";
        text_scripts[1] += "</br>";
        text_scripts[1] += "初プログラミング(GML)入門</span>";
        
        text_scripts[2] = "<span class = 'jp'><span class = 'accent_red'>2016年1月(小学校卒業後の冬休み)</span>";
        text_scripts[2] += "</br>";
        text_scripts[2] += "初モバイルゲーム";
        text_scripts[2] += "</br>";
        text_scripts[2] += "</br>";
        text_scripts[2] += "冬休みに初めて作って、Google Playにリリース</span>";
        
        text_scripts[3] = "<span class = 'jp'><span class = 'accent_gold'>2017年度</span>";
        text_scripts[3] += "</br>";
        text_scripts[3] += "モバイルゲーム<span class = 'accent_gold2'>15万ダウンロード達成</span>";
        text_scripts[3] += "</br>";
        text_scripts[3] += "</br>";
        text_scripts[3] += "Google PlayのTop 100位以内に登録された後、"
        text_scripts[3] += "</br>";
        text_scripts[3] += "15万ダウンロード達成";
        text_scripts[3] += "</br>";
        text_scripts[3] += "</br>";
        text_scripts[3] += "(現在はゲームの管理がされていないので、App Storeから削除されています)</span>";
        
        text_scripts[4] = "<span class = 'jp'><span class = 'accent_red'>2018年度後半期</span>";
        text_scripts[4] += "</br>";
        text_scripts[4] += "<span class = 'accent_red2'>'Astronaut (アストロノート)'</span>";
        text_scripts[4] += "</br>";
        text_scripts[4] += "</br>";
        text_scripts[4] += "特性化進学のために";
        text_scripts[4] += "</br>";
        text_scripts[4] += "2016年度から約2年間ポートフォリオとして作ったゲーム";
        text_scripts[4] += "</br>";
        text_scripts[4] += "</br>";
        text_scripts[4] += "(審査結果満点に近いスコアを受けたが、個人的な事情により進学X)</span>";
        
        text_scripts[5] = "<span class = 'jp'><span class = 'accent_red'>2020.03.10</span>";
        text_scripts[5] += "</br>";
        text_scripts[5] += "<span class = 'accent_red2'>'Arena of Wakgood (アリーナオブワック)'</span>";
        text_scripts[5] += "</br>";
        text_scripts[5] += "</br>";
        text_scripts[5] += "2019年度から約1年間";
        text_scripts[5] += "</br>";
        text_scripts[5] += "Twitch配信者'Wakgood'さんの'2021年末公募展'のために";
        text_scripts[5] += "</br>";
        text_scripts[5] += "アクション、PVPオンライン対戦ジャンルのゲーム";
        text_scripts[5] += "</br>";
        text_scripts[5] += "</br>";
        text_scripts[5] += "</br>";
        text_scripts[5] += "2020.03.10リリース</span>";
        
        text_scripts[6] = "<span class = 'jp'><span class = 'accent_gold'>2022.07.03</span>";
        text_scripts[6] += "</br>";
        text_scripts[6] += "<span class = 'accent_gold2'>'Delauney Triangulation (デローネ三角分割)'</span>";
        text_scripts[6] += "</br>";
        text_scripts[6] += "</br>";
        text_scripts[6] += "高校の時、数学テーマ探求活動のために製作したプロジェクト"
        text_scripts[6] += "</br>";
        text_scripts[6] += "'デローネ三角分割'を具現したプロジェクト</span>";
        
        text_scripts[7] = "<span class = 'jp'><span class = 'accent_purple'>2023.12.16</span>";
        text_scripts[7] += "</br>";
        text_scripts[7] += "<span class = 'accent_purple2'>'Bocchi!'</span>";
        text_scripts[7] += "</br>";
        text_scripts[7] += "</br>";
        text_scripts[7] += "SteamのWallpaper Engineのために作ったウェブサイト";
        text_scripts[7] += "</br>";
        text_scripts[7] += "</br>";
        text_scripts[7] += "2023.12.16リリース</span>";
        
        text_scripts[8] = "<span class = 'jp'><span class = 'accent_red'>2023.01.19</span>";
        text_scripts[8] += "</br>";
        text_scripts[8] += "<span class = 'accent_red2'>'Project Wak (プロジェクトワック)'</span>";
        text_scripts[8] += "</br>";
        text_scripts[8] += "</br>";
        text_scripts[8] += "2021年度後半期から約1年半間";
        text_scripts[8] += "</br>";
        text_scripts[8] += "</br>";
        text_scripts[8] += "Twitch配信者'Wakgood'さんの'2022年末公募展'のために作った";
        text_scripts[8] += "</br>";
        text_scripts[8] += "アクション、RPG、ソウルライクジャンルのゲーム";
        text_scripts[8] += "</br>";
        text_scripts[8] += "</br>";
        text_scripts[8] += "2023.01.19リリース</span>";
        
        text_scripts[9] = "<span class = 'jp'><span class = 'accent_purple'>2023.03.11</span>";
        text_scripts[9] += "</br>";
        text_scripts[9] += "<span class = 'accent_purple2'>'Hirori Bocchi'</span>";
        text_scripts[9] += "</br>";
        text_scripts[9] += "</br>";
        text_scripts[9] += "SteamのWallpaper Engineのために作ったウェブサイト";
        text_scripts[9] += "</br>";
        text_scripts[9] += "</br>";
        text_scripts[9] += "2023.03.11リリース</span>";
        
        text_scripts[10] = "<span class = 'jp'><span class = 'accent_red'>2024.01.14</span>";
        text_scripts[10] += "</br>";
        text_scripts[10] += "<span class = 'accent_red2'>'Project Wak Beat (プロジェクトワックビート)'</span>";
        text_scripts[10] += "</br>";
        text_scripts[10] += "</br>";
        text_scripts[10] += "2023年度から約1年間";
        text_scripts[10] += "</br>";
        text_scripts[10] += "Twitch配信者'Wakgood'さんの'2023年末公募展'のために作った";
        text_scripts[10] += "</br>";
        text_scripts[10] += "Project arrhythmiaとJSABをベースにしている";
        text_scripts[10] += "</br>";
        text_scripts[10] += "リズム、アクション、弾幕ジャンルのゲーム";
        text_scripts[10] += "</br>";
        text_scripts[10] += "</br>";
        text_scripts[10] += "</br>";
        text_scripts[10] += "2024.01.14リリース</span>";
        
        text_scripts[11] = "<span class = 'accent_red'>最近</span>";
        text_scripts[11] += "</br>";
        text_scripts[11] += "<span class = 'accent_red2'>'Project D (プロジェクトD)'</span>";
        text_scripts[11] += "</br>";
        text_scripts[11] += "</br>";
        text_scripts[11] += "2022年度に約2ヶ月間開発したが中断されたプロジェクト";
        text_scripts[11] += "</br>";
        text_scripts[11] += "あまりにも古いプロジェクトだし、最適化問題/スパゲッティコードなど";
        text_scripts[11] += "</br>";
        text_scripts[11] += "いろいろ問題点が多くて, 現在コードを含むすべての部分を全部リメーク中";
        //#endregion
    }
    else
    {
        //#region English text scripts
        text_scripts[1] = "<span class = 'accent_gold'>2013 (3rd grade in elementary school)</span>";
        text_scripts[1] += "</br>";
        text_scripts[1] += "I Learned my first programming language(GML)";
        
        text_scripts[2] = "<span class = 'accent_red'>January 2016 (Winter vacation after graduating from elementary school)</span>";
        text_scripts[2] += "</br>";
        text_scripts[2] += "My first mobile game developed";
        text_scripts[2] += "</br>";
        text_scripts[2] += "</br>";
        text_scripts[2] += "The first mobile game which I developed during the winter vacation and released on Google Play";
        
        text_scripts[3] = "<span class = 'accent_gold'>2017</span>";
        text_scripts[3] += "</br>";
        text_scripts[3] += "My first mobile game was<span class = 'accent_gold2'>downloaded 150k times</span>";
        text_scripts[3] += "</br>";
        text_scripts[3] += "</br>";
        text_scripts[3] += "After achieved Top 100 in Google Play App Store,"
        text_scripts[3] += "</br>";
        text_scripts[3] += "My game downloaded 150k times";
        text_scripts[3] += "</br>";
        text_scripts[3] += "</br>";
        text_scripts[3] += "(But in now, this game was deleted in app store because I didn't managed for a long time)";
        
        text_scripts[4] = "<span class = 'accent_red'>the second half of 2018</span>";
        text_scripts[4] += "</br>";
        text_scripts[4] += "<span class = 'accent_red2'>'Astronaut'</span>";
        text_scripts[4] += "</br>";
        text_scripts[4] += "</br>";
        text_scripts[4] += "To go to specialized high school,";
        text_scripts[4] += "</br>";
        text_scripts[4] += "I developed this game as a portfolio for about two years from 2016";
        text_scripts[4] += "</br>";
        text_scripts[4] += "</br>";
        text_scripts[4] += "(I got close to perfect score as a result of the examination, but due to personal reasons I couldn't go to that high school X)";
        
        text_scripts[5] = "<span class = 'accent_red'>March 10, 2020</span>";
        text_scripts[5] += "</br>";
        text_scripts[5] += "<span class = 'accent_red2'>'Arena of Wakgood'</span>";
        text_scripts[5] += "</br>";
        text_scripts[5] += "</br>";
        text_scripts[5] += "This game was developed for Youtuber 'Woowakgood'";
        text_scripts[5] += "</br>";
        text_scripts[5] += "for about a year from 2019";
        text_scripts[5] += "</br>";
        text_scripts[5] += "</br>";
        text_scripts[5] += "March 10, 2020 Released";
        
        text_scripts[6] = "<span class = 'accent_gold'>July 03, 2022</span>";
        text_scripts[6] += "</br>";
        text_scripts[6] += "<span class = 'accent_gold2'>'Delauney Triangulation'</span>";
        text_scripts[6] += "</br>";
        text_scripts[6] += "</br>";
        text_scripts[6] += "This project was developed for high school math class when I was student"
        
        text_scripts[7] = "<span class = 'accent_purple'>December 16, 2023</span>";
        text_scripts[7] += "</br>";
        text_scripts[7] += "<span class = 'accent_purple2'>'Bocchi!'</span>";
        text_scripts[7] += "</br>";
        text_scripts[7] += "</br>";
        text_scripts[7] += "This is website for 'Wallpaper Engine' which available on Steam";
        text_scripts[7] += "</br>";
        text_scripts[7] += "</br>";
        text_scripts[7] += "December 16, 2023 Released";
        
        text_scripts[8] = "<span class = 'accent_red'>January 19, 2023</span>";
        text_scripts[8] += "</br>";
        text_scripts[8] += "<span class = 'accent_red2'>'Project Wak'</span>";
        text_scripts[8] += "</br>";
        text_scripts[8] += "</br>";
        text_scripts[8] += "Action, RPG, and Soullike genre game";
        text_scripts[8] += "</br>";
        text_scripts[8] += "</br>";
        text_scripts[8] += "which was developed for YouTuber 'Woowakgood'";
        text_scripts[8] += "</br>";
        text_scripts[8] += "for about a year and a half from the second half of 2021.";
        text_scripts[8] += "</br>";
        text_scripts[8] += "</br>";
        text_scripts[8] += "January 19, 2023 Released";
        
        text_scripts[9] = "<span class = 'accent_purple'>March 11, 2023</span>";
        text_scripts[9] += "</br>";
        text_scripts[9] += "<span class = 'accent_purple2'>'Hirori Bocchi'</span>";
        text_scripts[9] += "</br>";
        text_scripts[9] += "</br>";
        text_scripts[9] += "This is website for 'Wallpaper Engine' which available on Steam";
        text_scripts[9] += "</br>";
        text_scripts[9] += "</br>";
        text_scripts[9] += "March 11, 2023 Released";
        
        text_scripts[10] = "<span class = 'accent_red'>January 14, 2024</span>";
        text_scripts[10] += "</br>";
        text_scripts[10] += "<span class = 'accent_red2'>'Project Wak Beat'</span>";
        text_scripts[10] += "</br>";
        text_scripts[10] += "</br>";
        text_scripts[10] += "Rhythm, action, and ammunition genres game";
        text_scripts[10] += "</br>";
        text_scripts[10] += "which is fanmade game of Project arrhythmia and JSAB";
        text_scripts[10] += "</br>";
        text_scripts[10] += "was developed for Youtuber 'Woowakgood'";
        text_scripts[10] += "</br>";
        text_scripts[10] += "for about a year from 2023.";
        text_scripts[10] += "</br>";
        text_scripts[10] += "</br>";
        text_scripts[10] += "</br>";
        text_scripts[10] += "January 14, 2024 Released";
        
        text_scripts[11] = "<span class = 'accent_red'>Recently</span>";
        text_scripts[11] += "</br>";
        text_scripts[11] += "<span class = 'accent_red2'>'Project D'</span>";
        text_scripts[11] += "</br>";
        text_scripts[11] += "</br>";
        text_scripts[11] += "This project was developed for about 2 months in 2022";
        text_scripts[11] += "</br>";
        text_scripts[11] += "It was too old and has so many problems like optimizing problem, spaghetti code";
        text_scripts[11] += "</br>";
        text_scripts[11] += "So, I've been remaking it recently.";
        //#endregion
    }
}
set_language(get_country());
//#endregion


//#region scroll function

function page_scroll_to(tmp_scroll_yy)
{
    window.scrollTo({top : tmp_scroll_yy, left : 0, behavior : "smooth"});
    debug_log("scroll to : "+tmp_scroll_yy);
}

//#endregion


//#region 첫 화면 로딩
setTimeout(show_page,loading_speed);
obj_loading_bar_grad.style.left = "0px";
obj_loading_bar_grad.style.transition = "left "+(loading_speed/1000)+"s";

if (obj_trailer_video.readyState == 4)
{
    if (loading_speed != -4)
    {
        setTimeout(show_page,100);
    }
}



function show_page()
{
    obj_trailer_bg.style.opacity = 1;
    
    loading_speed = -4; //-4 means that page was fully loaded
    window.scrollTo(0, 0);
    css_values();
    background_stars = 0;
    obj_trailer_video.play();
    obj_trailer_video.currentTime = 4;
    obj_trailer_video.style.filter = "blur(0px)";

    obj_screen_transition_bg.style.top = "-8px";
    console.log("page_loaded");
    setTimeout(screen_transition1,1000);
    
    setTimeout(title_anime1,2000);
    setTimeout(title_anime2,2200);
    setTimeout(title_anime3,2400);
    setTimeout(title_anime4,2600);
    
    if (is_pc == 1)
    {
        obj_animated_cursor.style.opacity = 1;
        obj_animated_cursor_main.style.opacity = 1;
    }
    
    
    for(var i = 0; i < star_point.length; i++)
    {
        var tmp_xx = (345*power(c_x,2)+i*star_point_margin);
        
        //star image
        star_point[i] = document.createElement("img");
        star_point[i].style.top = "var(--black_line_head_yy)";
        star_point[i].style.pointerEvents = "none";
        star_point[i].src = "imgs/star2.png";
        star_point[i].style.position = "fixed";
        star_point[i].style.width = "32px";
        star_point[i].style.left = (tmp_xx)+"px";
        star_point[i].style.transition = "left 0.2s, opacity 1.5s, filter 1.5s";
        star_point[i].style.opacity = 0;
        star_point[i].style.zIndex = 320;
        star_point[i].style.marginLeft = "var(--m_interect_xx3)";
        star_point[i].style.marginTop = "var(--m_interect_yy3)";
        obj_star_point_parents.appendChild(star_point[i]);
        
        
        //text box
        var tmp_txt_box_width = 216*reversed_c_x;
        star_point_txt_box[i] = document.createElement("div");
        star_point_txt_box[i].style.top = "var(--black_line_txt_box_yy)";
        star_point_txt_box[i].style.position = "fixed";
        star_point_txt_box[i].style.pointerEvents = "none";
        star_point_txt_box[i].style.opacity = 0;
        star_point_txt_box[i].style.zIndex = 320;
        star_point_txt_box[i].style.left = (is_pc == 1) ? (tmp_xx)+"px" : (c_w-tmp_txt_box_width)*0.5+"px";
        star_point_txt_box[i].style.width = "auto";
        star_point_txt_box[i].style.height = "auto";
        star_point_txt_box[i].innerHTML = text_scripts[1+i];
        star_point_txt_box[i].style.transition = "opacity 0.3s";
        star_point_txt_box[i].style.color = "#cccccc";
        star_point_txt_box[i].style.marginLeft = "var(--m_interect_xx3)";
        star_point_txt_box[i].style.marginTop = "var(--m_interect_yy3)";
        obj_star_point_parents.appendChild(star_point_txt_box[i]);
        
        
        //image box
        var tmp_img_box_width = ((i <= 2) ? 32 : 400)*reversed_c_x;
        star_point_img_box[i] = document.createElement(star_point_img_box_type[i]);
        if (star_point_img_box_type[i] == "video")
        {
            star_point_img_box[i].autoplay = true;
            star_point_img_box[i].loop = true;
            star_point_img_box[i].muted = true;
        }
        star_point_img_box[i].style.pointerEvents = "none";
        star_point_img_box[i].style.top = (i > 2) ? (c_h/4.84+"px") : (c_h/2.29+"px");
        star_point_img_box[i].src = star_point_img_box_src[i];
        star_point_img_box[i].style.position = "fixed";
        star_point_img_box[i].style.opacity = 0;
        star_point_img_box[i].style.zIndex = 320;
        star_point_img_box[i].style.left = (is_pc == 1) ? (tmp_xx- ((i <= 2) ? 0 : 32))+"px" : (c_w-tmp_img_box_width)*0.5+"px";
        star_point_img_box[i].style.borderRadius = "16px";
        star_point_img_box[i].style.width = tmp_img_box_width+"px";
        star_point_img_box[i].style.transition = "opacity 0.3s";
        star_point_img_box[i].style.marginLeft = "var(--m_interect_xx3)";
        star_point_img_box[i].style.marginTop = "var(--m_interect_yy3)";
        obj_star_point_parents.appendChild(star_point_img_box[i]);
        
        
        //소스코드 링크
        var tmp_icon_box_width = 24*reversed_c_x;
        if (star_point_source_code_link_box[i])
        {
            var tmp_ele = document.createElement("a");
            tmp_ele.target = "_blank";
            tmp_ele.href = star_point_source_code_link[i];
            obj_star_point_parents.appendChild(tmp_ele);
            
            star_point_source_code_link_box[i] = document.createElement("img");
            star_point_source_code_link_box[i].style.top = "var(--black_line_link_box_yy)";
            star_point_source_code_link_box[i].style.position = "fixed";
            star_point_source_code_link_box[i].src = "imgs/github_icon_white.png";
            star_point_source_code_link_box[i].style.opacity = 0;
            star_point_source_code_link_box[i].style.zIndex = 320;
            star_point_source_code_link_box[i].style.left = (is_pc == 1) ? (tmp_txt_box_width+tmp_xx-150-96)+"px" : (c_w-tmp_icon_box_width)*0.5-128-8+"px";
            star_point_source_code_link_box[i].style.width = (tmp_icon_box_width)+"px";
            star_point_source_code_link_box[i].style.transition = "opacity 0.3s";
            star_point_source_code_link_box[i].style.marginLeft = "var(--m_interect_xx3)";
            star_point_source_code_link_box[i].style.marginTop = "var(--m_interect_yy3)";
            star_point_source_code_link_box[i].id = "cursor_interactive_ins";
            tmp_ele.appendChild(star_point_source_code_link_box[i]);
        }
        
        //트레일러 및 미리보기 링크
        if (star_point_trailer_link_box[i])
        {
            var tmp_ele = document.createElement("a");
            tmp_ele.target = "_blank";
            tmp_ele.href = star_point_trailer_link[i];
            obj_star_point_parents.appendChild(tmp_ele);
            
            star_point_trailer_link_box[i] = document.createElement("img");
            star_point_trailer_link_box[i].style.top = "var(--black_line_link_box_yy)";
            star_point_trailer_link_box[i].style.position = "fixed";
            star_point_trailer_link_box[i].src = "imgs/youtube_icon_white.png";
            star_point_trailer_link_box[i].style.opacity = 0;
            star_point_trailer_link_box[i].style.zIndex = 320;
            star_point_trailer_link_box[i].style.left = (is_pc == 1) ? (tmp_txt_box_width+tmp_xx-150-48)+"px" : (c_w-tmp_icon_box_width)*0.5-8+"px";
            star_point_trailer_link_box[i].style.width = (tmp_icon_box_width)+"px";
            star_point_trailer_link_box[i].style.transition = "opacity 0.3s";
            star_point_trailer_link_box[i].style.marginLeft = "var(--m_interect_xx3)";
            star_point_trailer_link_box[i].style.marginTop = "var(--m_interect_yy3)";
            star_point_trailer_link_box[i].id = "cursor_interactive_ins";
            tmp_ele.appendChild(star_point_trailer_link_box[i]);
        }
        
        //다운로드 링크 버튼
        if (star_point_download_link_box[i])
        {
            var tmp_ele = document.createElement("a");
            tmp_ele.target = "_blank";
            tmp_ele.href = star_point_download_link[i];
            obj_star_point_parents.appendChild(tmp_ele);
            
            star_point_download_link_box[i] = document.createElement("img");
            star_point_download_link_box[i].style.top = "var(--black_line_link_box_yy)";
            star_point_download_link_box[i].style.position = "fixed";
            star_point_download_link_box[i].src = "imgs/downlaod_icon.png";
            star_point_download_link_box[i].style.opacity = 0;
            star_point_download_link_box[i].style.zIndex = 320;
            star_point_download_link_box[i].style.left = (is_pc == 1) ? (tmp_txt_box_width+tmp_xx-150)+"px" : (c_w-tmp_icon_box_width)*0.5+128-8+"px";
            star_point_download_link_box[i].style.width = (tmp_icon_box_width)+"px";
            star_point_download_link_box[i].style.transition = "opacity 0.3s";
            star_point_download_link_box[i].style.marginLeft = "var(--m_interect_xx3)";
            star_point_download_link_box[i].style.marginTop = "var(--m_interect_yy3)";
            star_point_download_link_box[i].id = "cursor_interactive_ins";
            tmp_ele.appendChild(star_point_download_link_box[i]);
        }
        
        
        //특정 프로젝트 바로가기 링크
        star_point_tp_button[i] = document.createElement("div");
        star_point_tp_button[i].style.top = "80%";
        star_point_tp_button[i].style.position = "fixed";
        star_point_tp_button[i].style.opacity = 0;
        star_point_tp_button[i].style.borderRadius = (4*reversed_c_x)+"px";
        star_point_tp_button[i].style.zIndex = 320;
        star_point_tp_button[i].style.left = (c_w*0.5 + 8 + 24*(i-star_point.length*0.5)*power(reversed_c_x,2))+"px";
        star_point_tp_button[i].style.width = (16*power(reversed_c_x,2))+"px";
        star_point_tp_button[i].style.height = (12*power(reversed_c_x,2))+"px";
        star_point_tp_button[i].style.background = "#ffffff";
        star_point_tp_button[i].style.transition = "opacity 0.3s";
        star_point_tp_button[i].style.marginLeft = "var(--m_interect_xx3)";
        star_point_tp_button[i].style.marginTop = "var(--m_interect_yy3)";
        star_point_tp_button[i].id = "cursor_interactive_ins";
        obj_star_point_parents.appendChild(star_point_tp_button[i]);
    }
}

function screen_transition1()
{
    obj_loading_bar_bg.style.opacity = 0;
    obj_loading_bar_grad.style.opacity = 0;
    obj_screen_transition_bg.style.height = "0px";
}

function title_anime1()
{
    obj_hello_title_eng.style.opacity = "1";
}

function title_anime2()
{
    obj_hello_title_kor.style.opacity = "1";
}

function title_anime3()
{
    obj_hello_title_jap.style.opacity = "1";
}

function title_anime4()
{
    obj_hello_title_desc.style.opacity = "1";

    obj_loading_bar_bg.style.height = 0;
    obj_loading_bar_bg.style.top = -128+"px";
    obj_loading_bar_grad.style.height = 0;
    obj_loading_bar_grad.style.top = -128+"px";
    obj_trailer_video.style.transition = "all 0.2s";
    document.getElementById("body_t").style.overflowY = "scroll";
    quick_select_menu_anime1();
}

function quick_select_menu_anime1()
{
    obj_quick_select_bg_outline.style.top = "48px";
    setTimeout(quick_select_menu_anime2,500);
}

function quick_select_menu_anime2()
{
    obj_quick_select_main.style.top = "17px";
    setTimeout(quick_select_menu_anime3,100);
}

function quick_select_menu_anime3()
{
    obj_quick_select_contact.style.top = "17px";
    setTimeout(quick_select_menu_anime4,100);
}

function quick_select_menu_anime4()
{
    obj_quick_select_works.style.top = "17px";
    setTimeout(quick_select_menu_anime5,400);
}

function quick_select_menu_anime5()
{
    obj_music_button.style.top = "12px";
    setTimeout(quick_select_menu_anime6,400);
}

function quick_select_menu_anime6()
{
    obj_music_button.style.left = "2.5%";
}

//#endregion


//#region 상단 및 크레딧 매뉴 버튼
obj_quick_select_main.addEventListener("mouseover",function()
{
    obj_quick_select_main.style.color = "#749eca";
});

obj_quick_select_main.addEventListener("mouseleave",function()
{
    obj_quick_select_main.style.color = "#fff9f6";
});

obj_quick_select_main.addEventListener("click",function()
{
    page_scroll_to(0);
});

obj_quick_select_contact.addEventListener("mouseover",function()
{
    obj_quick_select_contact.style.color = "#749eca";
});

obj_quick_select_contact.addEventListener("mouseleave",function()
{
    obj_quick_select_contact.style.color = "#fff9f6";
});

obj_quick_select_contact.addEventListener("click",function()
{
    page_scroll_to(600);
});

obj_quick_select_works.addEventListener("mouseover",function()
{
    obj_quick_select_works.style.color = "#749eca";
});

obj_quick_select_works.addEventListener("mouseleave",function()
{
    obj_quick_select_works.style.color = "#fff9f6";
});

obj_quick_select_works.addEventListener("click",function()
{
    page_scroll_to(2400);
});

obj_credit.addEventListener("mouseover",function()
{
    obj_credit.style.color = "#dcc4db";
});

obj_credit.addEventListener("mouseleave",function()
{
    obj_credit.style.color = "#ffffff";
});

obj_arrow.addEventListener("click",function()
{
    page_scroll_to(600);
});

//별 클릭 이벤트
function star_click_event(evt)
{
    if (n_scroll_pos >= 1000)
    {
        var i = evt.currentTarget.param1;
        var tmp_val = 2720+i*120*5;
        page_scroll_to(tmp_val);
    }
}

document.addEventListener("click",function()
{
    for(var i = 0; i < star_point.length; i++)
    {
        star_point[i].addEventListener("click",star_click_event);
        star_point[i].param1 = i;
        
        star_point_tp_button[i].addEventListener("click",star_click_event);
        star_point_tp_button[i].param1 = i;
    }
});
//#endregion


//#region 음악 버튼
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
        var album_num = 1;
        if (random_bgm == "Cocoa" || random_bgm == "It's honna be alright")
        {
            album_num = 2;
        }
        else if (random_bgm == "Letter From Heaven 空中都市 ver")
        {
            album_num = 3;
        }
        else if (random_bgm == "Dhalia")
        {
            album_num = 4;
        }
        else if (random_bgm == "bloom")
        {
            album_num = 5;
        }
        else if (random_bgm == "Hello" || random_bgm == "Sight")
        {
            album_num = 6;
        }
        else if (random_bgm == "Snowy morning")
        {
            album_num = 7;
        }
        else if (random_bgm == "Sweet Dreams")
        {
            album_num = 8;
        }
        

            
        obj_music_button.src = "imgs/album"+(album_num)+".png";
    }

    function select_music()
    {
        random_bgm = choose("bloom","Cocoa","Dhalia","Hello","It's honna be alright","Letter From Heaven 空中都市 ver","Pluie","Snowy morning","Sunflower","Sweet Dreams");
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
                
                obj_music_info2.innerHTML = "Ujico*/Snail's House - "+random_bgm;
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
//#endregion


//#region function for css design


//#region when window resized
window.addEventListener("resize", function()
{
    css_values();
})
//#endregion


function css_values()
{
    //창이 리사이즈 되었을 경우
    if (c_w != window.innerWidth)
    {
        c_w = window.innerWidth;
        c_h = window.innerHeight;
        c_x = c_w/1920;
        reversed_c_x = sqrt(1920/c_w);
        is_pc = (c_w < 1080 || c_h/c_w > 1 || (/Android|iPhone/i.test(navigator.userAgent))) ? 1/c_x : 1;
        
        var c_x_comp = c_w/480;
        c_x_comp = correct_value(c_x_comp,0,1);
        
        star_point_margin_ratio = (9/star_point.length)*c_x;
        star_point_margin = 120*star_point_margin_ratio;
        
        var main_trailer_height = c_h*1.1+32;
        document.documentElement.style.setProperty("--view_width_x1p1",main_trailer_height+"px");
        document.documentElement.style.setProperty("--view_height",c_h+"px");
        document.documentElement.style.setProperty("--trailer_video_xx",(is_pc == 1) ? (64+"px") : (c_w-main_trailer_height/9*16)*0.5+"px");
        

        document.documentElement.style.setProperty("--sr168px",floor(c_w-168*c_x_comp)+"px");
        document.documentElement.style.setProperty("--sr288px",floor(c_w-288*c_x_comp)+"px");
        document.documentElement.style.setProperty("--sr384px",floor(c_w-384*c_x_comp)+"px");
        document.documentElement.style.setProperty("--sr500px",floor(c_w-500*c_x_comp)+"px");

        
        document.documentElement.style.setProperty("--s18px",floor(18*sqrt(reversed_c_x))+"px");
        document.documentElement.style.setProperty("--s36px",floor(36*c_x)+"px");
        document.documentElement.style.setProperty("--s48px",floor(48*sqrt(reversed_c_x))+"px");
        document.documentElement.style.setProperty("--s108px",floor(108*c_x)+"px");
        document.documentElement.style.setProperty("--s112px",floor(112*c_x)+"px");
        document.documentElement.style.setProperty("--s160px",floor(160*sqrt(reversed_c_x))+"px");
        document.documentElement.style.setProperty("--s140px",floor(140*sqrt(reversed_c_x))+"px");
        document.documentElement.style.setProperty("--s290px",floor(290*sqrt(reversed_c_x))+"px");
        document.documentElement.style.setProperty("--s330px",floor(330*sqrt(reversed_c_x))+"px");
        document.documentElement.style.setProperty("--s460px",floor(460*sqrt(reversed_c_x))+"px");

        
        document.documentElement.style.setProperty("--black_line_yy",floor(c_h*0.55)+"px");
        document.documentElement.style.setProperty("--black_line_head_yy",floor(c_h*0.55-15)+"px");
        document.documentElement.style.setProperty("--black_line_txt_box_yy",floor(c_h*0.55+17)+"px");
        document.documentElement.style.setProperty("--black_line_link_box_yy",floor(c_h*0.55-64*power(reversed_c_x,2))+"px");
    }
    
    
    
    //for scroll animation
    if (is_window_scrolled)
    {
        var tmp_yy = set_value_case(n_scroll_pos-450,0,1500,true);
        document.documentElement.style.setProperty("--sepa_bg_top_yy",floor(tmp_yy-1500)+"px");
        document.documentElement.style.setProperty("--sepa_bg_bot_yy",floor(c_h-tmp_yy)+"px");
        
        var tmp_xx = set_value_case(n_scroll_pos*4,0,3000,true);
        document.documentElement.style.setProperty("--sepa_bg_left_xx",floor(tmp_xx)+"px");
        
        document.documentElement.style.setProperty("--m_interect_0xx",-floor(tmp_xx)+"px"); //white wave
        
        
        var tmp_xx = (n_scroll_pos-600)*0.2*star_point_margin_ratio;
        if (tmp_xx > 0 && tmp_xx < 200)
        {
            tmp_xx = 0;
            obj_black_line.style.opacity = 0;
            obj_black_line_head.style.opacity = 0;
        }
        else
        {
            obj_black_line.style.opacity = 1;
            obj_black_line_head.style.opacity = 1;
        }

        //debug_log("tmp_xx / "+tmp_xx);
        document.documentElement.style.setProperty("--black_line_xx",floor(-2300+tmp_xx)+"px");
        document.documentElement.style.setProperty("--black_line_head_xx",floor(tmp_xx-16)+"px");
        
        //for starlight_effects opacity
        debug_log("n_scroll_pos : "+n_scroll_pos);
        document.documentElement.style.setProperty("--starlight_effects_opacity",correct_value(n_scroll_pos-1000,0,1));
        
        
        is_window_scrolled = !is_window_scrolled;
    }
    

    
    if (is_pc == 1)
    {
        //mousemove animation
        var mouse_movement_dis_xx = (mouse_x - c_w*0.5)/72*is_pc;
        var mouse_movement_dis_yy = (mouse_y - c_h*0.5)/72*is_pc;
        document.documentElement.style.setProperty("--m_interect_xx",floor(mouse_movement_dis_xx)+"px");
        document.documentElement.style.setProperty("--m_interect_yy",floor(mouse_movement_dis_yy)+"px");

        document.documentElement.style.setProperty("--m_interect_xx2",-floor(mouse_movement_dis_xx*0.5)+"px");
        document.documentElement.style.setProperty("--m_interect_yy2",-floor(mouse_movement_dis_yy*0.5)+"px");
        
        document.documentElement.style.setProperty("--m_interect_xx3",floor(mouse_movement_dis_xx*0.3)+"px");
        document.documentElement.style.setProperty("--m_interect_yy3",floor(mouse_movement_dis_yy*0.3)+"px");
    }
}

addEventListener("mousemove",function()
{
    //마우스 커서 좌표 저장용 변수
    mouse_x = event.clientX;
    mouse_y = event.clientY;
    
    if (is_pc == 1 && !playing_cursor_animation)
    {
        playing_cursor_animation = true;
        cursor_animation();
    
    
        //인터렉티브 css 및 잡다한 변수들 관리용 함수
        css_values();
    }
});



function cursor_animation()
{
    b_mouse_x += (mouse_x - b_mouse_x)*0.1;
    b_mouse_y += (mouse_y - b_mouse_y)*0.1;
    
    //마우스 커서 애니메이션
    document.documentElement.style.setProperty("--cursor_xx",b_mouse_x+"px");
    document.documentElement.style.setProperty("--cursor_yy",b_mouse_y+"px");
    document.documentElement.style.setProperty("--cursor_xx_main",mouse_x+"px");
    document.documentElement.style.setProperty("--cursor_yy_main",mouse_y+"px");
    
    var tmp_width = parseInt(window.getComputedStyle(obj_animated_cursor).padding);
    obj_animated_cursor.style.marginLeft = (-tmp_width)+"px";
    obj_animated_cursor.style.marginTop = (-tmp_width)+"px";
    
    
    if (point_distance(mouse_x,mouse_y,b_mouse_x,b_mouse_y) > 1)
    {
        setTimeout(cursor_animation,10);
    }
    else
    {
        playing_cursor_animation = false;
    }
    
    debug_log("cursor_animation");
}



$(window).scroll(function()
{
    n_scroll_pos = $(window).scrollTop();
    var tmp_filter_val = (n_scroll_pos < 512*power(c_x,2)) ? n_scroll_pos : 512*power(c_x,2);
    obj_trailer_video.style.filter = "blur("+(tmp_filter_val*0.1)+"px)";
    debug_log(n_scroll_pos);
    
    //인터렉티브 css 및 잡다한 변수들 관리용 함수
    is_window_scrolled = true;
    css_values();
    


    for(var i = 0; i < star_point.length; i++)
    {
        if (n_scroll_pos >= 2500-(is_pc-1)*965)
        {
            star_point_tp_button[i].style.opacity = "1";
            star_point_tp_button[i].style.pointerEvents = "auto";
        }
        else
        {
            star_point_tp_button[i].style.opacity = "0";
            star_point_tp_button[i].style.pointerEvents = "none";
        }
        
        
        
        var tmp_xx = (n_scroll_pos-600)*0.2*star_point_margin_ratio;
        var tmp_n_pos = (345*power(c_x,2)+i*star_point_margin) - tmp_xx;
        var tmp_dis = abs(tmp_n_pos);
        debug_log("tmp_dis : "+tmp_dis);
        if (tmp_dis < 60*star_point_margin_ratio && n_scroll_pos < 8257/star_point_margin_ratio)
        {
            //비디오 처음부터 재생
            if (star_point_img_box[i].style.opacity != 1)
            {
                star_point_img_box[i].currentTime = 0;

                //각 스타 포인트 속성 및 텍스트 박스, 이미지 박스 속성 관리
                star_point[i].style.opacity = 1;
                star_point[i].style.filter = "blur(0px)";
                star_point[i].style.pointerEvents = "auto";
                star_point_txt_box[i].style.opacity = 1;
                star_point_txt_box[i].style.pointerEvents = "auto";
                star_point_img_box[i].style.opacity = 1;
                star_point_img_box[i].style.pointerEvents = "auto";
                star_point_tp_button[i].style.background = "#828282";
                
                var tmp_str = star_point_img_box_src[i];
                if (tmp_str.indexOf(".mp4") != -1)
                {
                    obj_priview_video_bg.src = star_point_img_box_src[i];
                    obj_priview_video_bg.currentTime = 0;
                    obj_priview_video_bg.play();
                    obj_priview_video_bg.style.width = (c_w*1.05)+"px";
                    obj_priview_video_bg.style.opacity = 0.1;
                }
                else
                {
                    obj_priview_video_bg.style.opacity = 0;
                }
            }

            
            
            //각 스타 포인트 자리의 링크 아이콘들 속성 관리
            if (star_point_source_code_link_box[i])
            {
                star_point_source_code_link_box[i].style.opacity = 1;
                star_point_source_code_link_box[i].style.pointerEvents = "auto";
            }
            
            if (star_point_download_link_box[i])
            {
                star_point_download_link_box[i].style.opacity = 1;
                star_point_download_link_box[i].style.pointerEvents = "auto";
            }
            
            if (star_point_trailer_link_box[i])
            {
                star_point_trailer_link_box[i].style.opacity = 1;
                star_point_trailer_link_box[i].style.pointerEvents = "auto";
            }
        }
        else
        {
            //각 스타 포인트 속성 및 텍스트 박스, 이미지 박스 속성 관리
            if (tmp_n_pos != 0 || n_scroll_pos >= 8257/star_point_margin_ratio)
            {
                star_point[i].style.opacity = 0;
                star_point[i].style.pointerEvents = "none";
            }
            else
            {
                star_point[i].style.opacity = 1;
                star_point[i].style.pointerEvents = "auto";
            }
            star_point[i].style.filter = "blur(16px)";
            star_point_txt_box[i].style.opacity = 0;
            star_point_txt_box[i].style.pointerEvents = "none";
            star_point_img_box[i].style.opacity = 0;
            star_point_img_box[i].style.pointerEvents = "none";
            star_point_tp_button[i].style.background = "#ffffff";
            
            
            
            //각 스타 포인트 자리의 링크 아이콘들 속성 관리
            if (star_point_source_code_link_box[i])
            {
                star_point_source_code_link_box[i].style.opacity = 0;
                star_point_source_code_link_box[i].style.pointerEvents = "none";
            }
            
            if (star_point_download_link_box[i])
            {
                star_point_download_link_box[i].style.opacity = 0;
                star_point_download_link_box[i].style.pointerEvents = "none";
            }
            
            if (star_point_trailer_link_box[i])
            {
                star_point_trailer_link_box[i].style.opacity = 0;
                star_point_trailer_link_box[i].style.pointerEvents = "none";
            }
        }
    }
    
    
    //스크롤 정도에 따라 작동하는 화면 애니메이션
    if (n_scroll_pos >= 1400)
    {
        obj_contact_text.style.top = "-999px";
        obj_contact_youtube.style.top = "-999px";
        obj_contact_discord.style.top = "-999px";
        obj_contact_github.style.top = "-999px";
    }
    else if (n_scroll_pos >= 1000)
    {
        obj_contact_text.style.opacity = "0";
        obj_contact_youtube.style.opacity = "0";
        obj_contact_discord.style.opacity = "0";
        obj_contact_github.style.opacity = "0";
        
        obj_contact_text.style.pointerEvents = "none";
        obj_contact_youtube.style.pointerEvents = "none";
        obj_contact_discord.style.pointerEvents = "none";
        obj_contact_github.style.pointerEvents = "none";
    }
    else if (n_scroll_pos >= 500)
    {
        obj_contact_text.style.top = "47%";
        obj_contact_youtube.style.top = "50%";
        obj_contact_discord.style.top = "50%";
        obj_contact_github.style.top = "50%";
        
        obj_contact_text.style.opacity = "1";
        obj_contact_youtube.style.opacity = "1";
        obj_contact_discord.style.opacity = "1";
        obj_contact_github.style.opacity = "1";
        
        obj_contact_text.style.pointerEvents = "auto";
        obj_contact_youtube.style.pointerEvents = "auto";
        obj_contact_discord.style.pointerEvents = "auto";
        obj_contact_github.style.pointerEvents = "auto";
    }
    else if (n_scroll_pos <= 500)
    {
        obj_contact_text.style.opacity = "0";
        obj_contact_youtube.style.opacity = "0";
        obj_contact_discord.style.opacity = "0";
        obj_contact_github.style.opacity = "0";
        
        obj_contact_text.style.pointerEvents = "none";
        obj_contact_youtube.style.pointerEvents = "none";
        obj_contact_discord.style.pointerEvents = "none";
        obj_contact_github.style.pointerEvents = "none";
    }
})
//#endregion







