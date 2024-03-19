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

var music_auto_playing = [ -4,-4 ];
var saved_random_bgm = -4;

var quick_selector_activated = -1;
var background_stars = 1;

var text_scripts = [];
for(var i = 0; i < 99; i++)
{
    text_scripts[i] = "";
}
//set to current region language
function set_language(region)
{
    var tmp_current_region = region;
    console.log(tmp_current_region);
    


    if (tmp_current_region == "South Korea")
    {
        text_scripts[0] = "프로젝트 왁비트";
        text_scripts[1] = "아레나 오브 왁굳";
        text_scripts[2] = "프로젝트 왁";
        text_scripts[3] = "<span class = 'accent'>Project Wak(프로젝트 왁)</span></br></br>";
        text_scripts[4] = "<span class = 'accent'>출시</span></br>2022 연말공모전</br></br>";
        text_scripts[5] = "<span class = 'accent'>장르</span></br>소울라이크, 액션, RPG</br></br>";
        text_scripts[6] = "<span class = 'accent'>개발 기간</span></br>약 1년 반 (유지 보수 기간 제외, 1인 개발)</br></br>";
        text_scripts[7] = "게임 판매 플랫폼인 Steam(스팀)에 판매되는</br>";
        text_scripts[8] = "액션 RPG게임 급의 퀄리티로 제작하는게 목표였기 때문에</br>";
        text_scripts[9] = "꽤나 스케일이 크게 제작되었으며, 약 150명 이상의 테스터분들이 도움을 주셨습니다.";
        text_scripts[10] = "<span class = 'accent'>Project Wak Beat(프로젝트 왁비트)</span></br></br>";
        text_scripts[11] = "<span class = 'accent'>출시</span></br>2023 연말공모전</br></br>";
        text_scripts[12] = "<span class = 'accent'>장르</span></br>리듬, 탄막, 액션</br></br>";
        text_scripts[13] = "<span class = 'accent'>개발 기간</span></br>약 1년 (유지 보수 기간 제외, 1인 개발)</br></br>";
        text_scripts[14] = "Project Wak Beat는 Project arrhythmia와 JSAB를 베이스로</br>";
        text_scripts[15] = "기본적으로는 비트에 맞춰 등장하는 여러 탄막들을 피하는 리듬게임이며,</br>";
        text_scripts[16] = "Windows & Android 플랫폼에서 플레이 가능합니다!</br>";
        text_scripts[17] = "오리지널 맵들과 함께, 유저들이 직접 원하는 곡으로 제작한 '커스텀 유저 맵'을 플레이 해보실 수 있습니다.";
        text_scripts[18] = "<span class = 'accent'>Arena of Wakgood(아레나 오브 왁굳)</span></br></br>";
        text_scripts[19] = "<span class = 'accent'>출시</span></br>2021년 3월 10일</br></br>";
        text_scripts[20] = "<span class = 'accent'>장르</span></br>액션, 멀티플레이, PVP대전</br></br>";
        text_scripts[21] = "<span class = 'accent'>개발 기간</span></br>약 반년 (유지 보수 기간 제외, 1인 개발)</br></br>";
        text_scripts[22] = "각기 다른 게임 모드와 여러 맵에서, 각 플레이어들이 자신의 무기를 들고 대전하며,</br>";
        text_scripts[23] = "채팅 및 이모티콘기능</span>을 통해 플레이어들 끼리 서로 대화를 주고 받을 수 있습니다.</br>";
        text_scripts[24] = "약 20명 이상의 비공개 테스터분들이 도움을 주셨습니다.</br>";
        text_scripts[25] = "첫 출시 당시, 예상보다 많은 접속자로 인해 서버가 마비되어, 우왁굳님의 방송에선 진행 할 수 없게 되었습니다.";
        text_scripts[26] = "아스트로넛";
        text_scripts[27] = "들로네 삼각분할";
        text_scripts[28] = "비어있음";
        text_scripts[29] = "소스코드<span></span>";
        text_scripts[30] = "<span class = 'accent'>Astronaut (아스트로넛)</span></br></br>";
        text_scripts[31] = "<span class = 'accent'>출시</span></br>2019년</br></br>";
        text_scripts[32] = "<span class = 'accent'>장르</span></br>멀티플레이, RPG, 생존</br></br>";
        text_scripts[33] = "<span class = 'accent'>개발 기간</span></br>약 1년 반 (유지 보수 기간 제외, 1인 개발)</br></br>";
        text_scripts[34] = "<span class = 'accent'>2019년도에 특성화고에 진학하기 위한 포트폴리오 용도</span>로 제작했던 게임입니다.</br>";
        text_scripts[35] = "게임의 목표는 여러가지 위험이 도사리는 다른 행성을 탐험하고 몬스터들을 잡거나,</br>";
        text_scripts[36] = "지하 동굴을 탐험하거나, 행성 내에 이미 개척되어 개발된 지역을 방문하여 생존하는 것입니다.</br>";
        text_scripts[37] = "Server-client방식을 통해 멀티 플레이로 친구와 함께 플레이 할 수 있습니다.</br>";
        text_scripts[38] = "아쉽게도, 특성화고 진학을 위해 제작하였던 이 작품은 심사 점수 중 만점에 가까운 점수를 받을 수 있었지만,";
        text_scripts[39] = "개인적인 사정으로 인해 진학하지 못하였습니다.</br>";
        text_scripts[40] = "<span class = 'accent'>Bocchi!</span></br></br>";
        text_scripts[41] = "<span class = 'accent'>출시</span></br>2022년 12월 16일</br></br>";
        text_scripts[42] = "<span class = 'accent'>개발 기간</span></br>약 7일 (유지 보수 기간 제외, 1인 개발)</br></br>";
        text_scripts[43] = "Steam(스팀)의 Wallpaper Engine을 위한 웹사이트 입니다.";
        text_scripts[44] = "Wallpaper Engine 창작마당에서 다운로드 가능합니다.</br>";
        text_scripts[45] = "<span class = 'accent'>Delaunay Triangulation (들로네 삼각분할)</span></br></br>";
        text_scripts[46] = "<span class = 'accent'>출시</span></br>2022년 7월 23일</br></br>";
        text_scripts[47] = "<span class = 'accent'>개발 기간</span></br>약 2주 (유지 보수 기간 제외, 1인 개발)</br></br>";
        text_scripts[48] = "고등학교 수학 주제 탐구 활동을 위해 제작한 프로젝트 입니다.</br>";
        text_scripts[49] = "평면 위의 점들을 삼각형으로 연결하여 공간을 분할할 때,</br>";
        text_scripts[50] = "이 삼각형들의 내각의 최소값이 최대가 되도록 하는 '들로네 삼각분할'을 구현한 프로젝트 입니다.";
        text_scripts[51] = "<span class = 'accent'>Hitori Bocchi</span></br></br>";
        text_scripts[52] = "<span class = 'accent'>출시</span></br>2023년 3월 11일</br></br>";
        text_scripts[53] = "<span class = 'accent'>개발 기간</span></br>약 7일 (유지 보수 기간 제외, 1인 개발)</br></br>";
        text_scripts[54] = "Steam(스팀)의 Wallpaper Engine을 위한 웹사이트 입니다.</br>";
        text_scripts[55] = "실제 시간에 기반하여 자연스럽게 배경이 바뀌는 효과가 있습니다.";
        text_scripts[56] = "Wallpaper Engine 창작마당에서 다운로드 가능합니다.</br>";
        text_scripts[57] = "<span class = 'accent'>이런!</span></br></br>";
        text_scripts[58] = "이곳은 아직 비어있네요!</br>";
        text_scripts[59] = "더 많은 프로젝트를 구경하고 싶다면";
        text_scripts[60] = "제 깃허브 페이지를 방문해주세요!</br>";
        text_scripts[61] = "방문하기<span></span>";
        text_scripts[62] = "다운로드<span></span>";
    }
    else if (tmp_current_region == "Japan")
    {
        text_scripts[0] = "<span class = 'jp'>プロジェクトワックビート</span>";
        text_scripts[1] = "<span class = 'jp'>アリーナオブワック</span>";
        text_scripts[2] = "<span class = 'jp'>プロジェクトワック</span>";
        text_scripts[3] = "<span class = 'accent'>Project Wak(<span class = 'jp'>プロジェクトワック</span>)</span></br></br>";
        text_scripts[4] = "<span class = 'jp'><span class = 'accent'>リリース</span></span></br>Twitch<span class = 'jp'>配信者</span>Wakgood<span class = 'jp'>さんの</span>2022<span class = 'jp'>年末公募展</span></br></br>";
        text_scripts[5] = "<span class = 'jp'><span class = 'accent'>ジャンル</span></br>ソウルライク、アクション, RPG</br></br>";
        text_scripts[6] = "<span class = 'jp'><span class = 'accent'>デベロップメント期間</span></br>約</span>1<span class = 'jp'>年半 (メンテナンス期間なしで, </span>1<span class = 'jp'>人)</span></br></br>";
        text_scripts[7] = "<span class = 'jp'>ゲームの音楽の以外は全部一人で作って</span></br>";
        text_scripts[8] = "<span class = 'jp'>リリースする前に約</span>150<span class = 'jp'>人の方々がベータテストをしてくれました</span>";
        text_scripts[9] = "<span class = 'jp'>残念ながら韓国語でしかプレーできません</span>";
        text_scripts[10] = "<span class = 'accent'>Project Wak Beat(<span class = 'jp'>プロジェクトワックビート)</span></br></br>";
        text_scripts[11] = "<span class = 'jp'><span class = 'accent'>リリース</span></span></br>Twitch<span class = 'jp'>配信者</span>Wakgood<span class = 'jp'>さんの</span>2023<span class = 'jp'>年末公募展</span></br></br>";
        text_scripts[12] = "<span class = 'jp'><span class = 'accent'>ジャンル</span></br>リズム、弾幕、アクション</br></br></span>";
        text_scripts[13] = "<span class = 'jp'><span class = 'accent'>デベロップメント期間</span></br>約</span>1<span class = 'jp'>年 (メンテナンス期間なしで, </span>1<span class = 'jp'>人)</span></br></br>";
        text_scripts[14] = "Project Wak Beat<span class = 'jp'>は</span>Project arrhythmia<span class = 'jp'>と</span>JSAB<span class = 'jp'>をベースにしている</br>";
        text_scripts[15] = "<span class = 'jp'>ビートに合わせて登場する様々な弾幕を避けるリズムゲームで,</br></span>";
        text_scripts[16] = "Windows&Android<span class = 'jp'>でプレイできます</br></span>";
        text_scripts[17] = "<span class = 'jp'>オリジナルマップと共に、ユーザーが直接希望する曲で製作した「カスタムユーザーマップ」をプレイすることができます。</span>";
        text_scripts[18] = "<span class = 'accent'>Arena of Wakgood(<span class = 'jp'>アリーナオブワック)</span></br></br></span>";
        text_scripts[19] = "<span class = 'jp'><span class = 'accent'>リリース</span></br></span>2021<span class = 'jp'>年</span>3<span class = 'jp'>月</span>10<span class = 'jp'>日</br></br></span>";
        text_scripts[20] = "<span class = 'jp'><span class = 'accent'>ジャンル</span></br>アクション、マルチプレイ、</span>PVP<span class = 'jp'>対戦</br></br></span>";
        text_scripts[21] = "<span class = 'jp'><span class = 'accent'>デベロップメント期間</span></br>約半年 (メンテナンス期間なしで, </span>1<span class = 'jp'>人)</br></br></span>";
        text_scripts[22] = "<span class = 'jp'>それぞれ異なるゲームモードと様々なマップで、各プレイヤーが自分の武器を持って対戦し、</br></span>";
        text_scripts[23] = "<span class = 'jp'>チャットや絵文字機能により、プレイヤー同士がお互いに会話を交わすことができます。</br></span>";
        text_scripts[24] = "<span class = 'jp'>リリースする前に約</span>20<span class = 'jp'>人の方々がベータテストをしてくれました</br></span>";
        text_scripts[25] = "<span class = 'jp'>初リリースのとき、予想以上に多くの接続者が原因でサーバーが麻痺し、</span>Wakgood<span class = 'jp'>の配信ではプレイできなくなりました。</span>";
        text_scripts[26] = "<span class = 'jp'>アストロノート</span>";
        text_scripts[27] = "<span class = 'jp'>ドロネー三角測量</span>";
        text_scripts[28] = "<span class = 'jp'>何もない！</span>";
        text_scripts[29] = "<span class = 'jp'>ソースコード</span>";
        text_scripts[30] = "<span class = 'accent'>Astronaut (<span class = 'jp'>アストロノート)</span></br></br></span>";
        text_scripts[31] = "<span class = 'jp'><span class = 'accent'>リリース</span></br>2019<span class = 'jp'>年</br></br></span>";
        text_scripts[32] = "<span class = 'jp'><span class = 'accent'>ジャンル</span></br>マルチプレイ、サバイバル、</span>RPG</br></br>";
        text_scripts[33] = "<span class = 'jp'><span class = 'accent'>デベロップメント期間</span></br>約</span>1<span class = 'jp'>年半 (メンテナンス期間なしで, </span>1<span class = 'jp'>人)</br></br></span>";
        text_scripts[34] = "<span class = 'accent'>2019<span class = 'jp'>年度に特性化高校に進学するためのポートフォリオ用途で製作したゲームです。</br></span>";
        text_scripts[35] = "<span class = 'jp'>ゲームの目標は、様々な危険が潜んでいる他の惑星を探検したり、モンスターを捕まえたり、</br></span>";
        text_scripts[36] = "<span class = 'jp'>地下洞窟を探検したり、惑星内にすでに開拓され開発された地域を訪れて生存することです。</br></span>";
        text_scripts[37] = "Server-client<span class = 'jp'>方式により、マルチプレイで友達と一緒にプレイすることができます。</br></span>";
        text_scripts[38] = "<span class = 'jp'>残念ながら、特性化高校進学のために製作したこの作品は、審査点数の中で満点に近い点数をもらうことができましたが、</span>";
        text_scripts[39] = "<span class = 'jp'>また別の個人的な理由で進学できませんでした。</br></span>";
        text_scripts[40] = "<span class = 'accent'>Bocchi!</span></br></br>";
        text_scripts[41] = "<span class = 'jp'><span class = 'accent'>リリース</span></br></span>2022<span class = 'jp'>年</span>12<span class = 'jp'>月</span>16<span class = 'jp'>日</br></br></span>";
        text_scripts[42] = "<span class = 'jp'><span class = 'accent'>デベロップメント期間</span></br>約</span>7<span class = 'jp'>日 (メンテナンス期間なしで, </span>1<span class = 'jp'>人)</br></br></span>";
        text_scripts[43] = "Steam<span class = 'jp'>の</span>Wallpaper Engine<span class = 'jp'>のために作ったウェブサイトです。</span>";
        text_scripts[44] = "Wallpaper Engine<span class = 'jp'>のワークショップでダウンロードできます。</br></span>";
        text_scripts[45] = "<span class = 'accent'>Delaunay Triangulation (<span class = 'jp'>ドロネー三角測量)</span></br></br></span>";
        text_scripts[46] = "<span class = 'jp'><span class = 'accent'>リリース</span></br>2022<span class = 'jp'>年</span>7<span class = 'jp'>月</span>23<span class = 'jp'>日</br></br></span>";
        text_scripts[47] = "<span class = 'jp'><span class = 'accent'>デベロップメント期間</span></br>約</span>2<span class = 'jp'>週間(メンテナンス期間なしで, </span>1<span class = 'jp'>人)</br></br></span>";
        text_scripts[48] = "<span class = 'jp'>高校の時、数学テーマ探求活動のために製作したプロジェクトです。</br></span>";
        text_scripts[49] = "<span class = 'jp'>平面上の点を三角形に連結して空間を分割する時、</br></span>";
        text_scripts[50] = "<span class = 'jp'>この三角形の内角の最小値が最大になるようにする「デローネ三角分割」を具現したプロジェクトです</span>";
        text_scripts[51] = "<span class = 'accent'>Hitori Bocchi</span></br></br>";
        text_scripts[52] = "<span class = 'jp'><span class = 'accent'>リリース</span></br></span>2023<span class = 'jp'>年</span>3<span class = 'jp'>月</span>11<span class = 'jp'>日</br></br></span>";
        text_scripts[53] = "<span class = 'jp'><span class = 'accent'>デベロップメント期間</span></br>約</span>1<span class = 'jp'>週間 (メンテナンス期間なしで, </span>1<span class = 'jp'>人)</br></br></span>";
        text_scripts[54] = "Steam<span class = 'jp'>の</span>Wallpaper Engine<span class = 'jp'>のために作ったウェブサイトです。</br></span>";
        text_scripts[55] = "<span class = 'jp'>実際の時間に基づいて自然に背景が変わる効果があります。</span>";
        text_scripts[56] = "Wallpaper Engine<span class = 'jp'>のワークショップでダウンロードできます。</br></span>";
        text_scripts[57] = "<span class = 'jp'><span class = 'accent'>あらら！</span></br></br></span>";
        text_scripts[58] = "<span class = 'jp'>まだここは空いてますね！</br></span>";
        text_scripts[59] = "<span class = 'jp'>もっと多くのプロジェクトを見たいなら</span>";
        text_scripts[60] = "<span class = 'jp'>僕の</span>GITHUB<span class = 'jp'>ページに行ってください！</br></span>";
        text_scripts[61] = "GITHUB";
        text_scripts[62] = "<span class = 'jp'>ダウンロード</span>";
    }
    else
    {
        text_scripts[0] = "";
        text_scripts[1] = "";
        text_scripts[2] = "";
        text_scripts[3] = "<span class = 'accent'>Project Wak</span></br></br>";
        text_scripts[4] = "<span class = 'accent'>Released</span></br>Twitch Streamer Wakgood's Year-end contest 2022</br></br>";
        text_scripts[5] = "<span class = 'accent'>Genre</span></br>Soulslike, Action, RPG</br></br>";
        text_scripts[6] = "<span class = 'accent'>Development period</span></br>About one and half year (Excluding maintenance period, indie-development)</br></br>";
        text_scripts[7] = "Excluding background musics, all of things are indie developed</br>";
        text_scripts[8] = "About 150 people are participated in beta testing.</br>";
        text_scripts[9] = "Unfortunately, this game can be played only Korean language.";
        text_scripts[10] = "<span class = 'accent'>Project Wak Beat</span></br></br>";
        text_scripts[11] = "<span class = 'accent'>Released</span></br>Twitch Streamer Wakgood's Year-end contest 2023</br></br>";
        text_scripts[12] = "<span class = 'accent'>Genre</span></br>Rhythm, Projectiles, Action</br></br>";
        text_scripts[13] = "<span class = 'accent'>Development period</span></br>About one year (Excluding maintenance period, indie-development)</br></br>";
        text_scripts[14] = "Project Wak Beat is based on Project arrhythmia and JSAB</br>";
        text_scripts[15] = "Basically it's a rhythm game but has special projectiles on every beat</br>";
        text_scripts[16] = "You can play on Windows & Android platform!</br>";
        text_scripts[17] = "And also you can play custom musics which were made by other users";
        text_scripts[18] = "<span class = 'accent'>Arena of Wakgood</span></br></br>";
        text_scripts[19] = "<span class = 'accent'>Released</span></br>October 3, 2021</br></br>";
        text_scripts[20] = "<span class = 'accent'>Genre</span></br>Action, Multiplayers, PVP</br></br>";
        text_scripts[21] = "<span class = 'accent'>Development period</span></br>About half year (Excluding maintenance period, indie-development)</br></br>";
        text_scripts[22] = "All of players select own's weapons and fight in various game mode.</br>";
        text_scripts[23] = "And also can communicate with chat and emojis</br>";
        text_scripts[24] = "About 20 people participated in beta testing</br>";
        text_scripts[25] = "At first time of release, there're so many players who joined to the game that couldn't play on Wakgood's twitch streaming";
        text_scripts[26] = "";
        text_scripts[27] = "";
        text_scripts[28] = "";
        text_scripts[29] = "Source Code<span></span>";
        text_scripts[30] = "<span class = 'accent'>Astronaut</span></br></br>";
        text_scripts[31] = "<span class = 'accent'>Released</span></br>2019</br></br>";
        text_scripts[32] = "<span class = 'accent'>Genre</span></br>Co-op, RPG, Survival</br></br>";
        text_scripts[33] = "<span class = 'accent'>Development period</span></br>About one and half year (Excluding maintenance period, indie-development)</br></br>";
        text_scripts[34] = "<span class = 'accent'>It was developed for use in Portfolio to Enter Specialized High School</br>";
        text_scripts[35] = "The aim is exploring various planets and hunting monsters to survive. </br>";
        text_scripts[36] = "You can obtain resources in the cave or planet which is already developed by other explorers.</br>";
        text_scripts[37] = "Also, you can play with your friends with Server-client system</br>";
        text_scripts[38] = "Unfortunately, This portfolio can be get perfect score on screening,";
        text_scripts[39] = "but I was unable to enter that highschool due to other personal reason.</br>";
        text_scripts[40] = "<span class = 'accent'>Bocchi!</span></br></br>";
        text_scripts[41] = "<span class = 'accent'>Released</span></br>December 16, 2022</br></br>";
        text_scripts[42] = "<span class = 'accent'>Development period</span></br>약 7일 (Excluding maintenance period, indie-development)</br></br>";
        text_scripts[43] = "This is website for 'Wallpaper Engine' which available on Steam.";
        text_scripts[44] = "You can download on Steam Workshop of Wallpaper Engine.</br>";
        text_scripts[45] = "<span class = 'accent'>Delaunay Triangulation</span></br></br>";
        text_scripts[46] = "<span class = 'accent'>Released</span></br>July 23, 2022</br></br>";
        text_scripts[47] = "<span class = 'accent'>Development period</span></br>About 2 weeks (Excluding maintenance period, indie-development)</br></br>";
        text_scripts[48] = "This project was developed for high school math class when I was student.</br>";
        text_scripts[49] = "When triangles the points on the plane to divide the space,</br>";
        text_scripts[50] = "these triangles implements the 'Dulone Triangle' so that the minimum value of the interior is maximized.";
        text_scripts[51] = "<span class = 'accent'>Hitori Bocchi</span></br></br>";
        text_scripts[52] = "<span class = 'accent'>Released</span></br>March 11, 2023</br></br>";
        text_scripts[53] = "<span class = 'accent'>Development period</span></br>About a week (Excluding maintenance period, indie-development)</br></br>";
        text_scripts[54] = "This is website for 'Wallpaper Engine' which available on Steam.</br>";
        text_scripts[55] = "It has time responsive system which changes background color and brightness.";
        text_scripts[56] = "You can download on Steam Workshop of Wallpaper Engine.</br>";
        text_scripts[57] = "<span class = 'accent'>Opps!</span></br></br>";
        text_scripts[58] = "It's empty now!</br>";
        text_scripts[59] = "If you want to see other projects,";
        text_scripts[60] = "please visit my github profile page!</br>";
        text_scripts[61] = "Github";
        text_scripts[62] = "Download<span></span>";
    }
}
set_language(get_country());




//첫 화면 로딩
setTimeout(show_page,9000);
for(var i = 1; i <= 3; i++)
{
    for(var k = 1; k <= 4; k++)
    {
        preload_images("imgs","gif","main"+i+"_"+k);
    }
}
preload_images("imgs","png","project_wak_thumbnail","project_wak_beat_thumbnail");
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





//상단 매뉴 버튼
{
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
}


//음악 버튼
{
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
}






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

    var works_url = ["https://github.com/Just-Wak-Beat/Project_Wak_Beat","https://github.com/ABER1047/Arena-of-woowakgood","https://github.com/ABER1047/Project-wak"];
    var works_title_eng = ["Project Wak Beat","Arena of Wakgood","Project Wak"];
    var works_title_kr = [text_scripts[0],text_scripts[1],text_scripts[2]];
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

    obj_showcase_game_title1.innerHTML = works_title_eng[n_real_showcase];
    obj_showcase_game_title_sec1.innerHTML = works_title_kr[n_real_showcase];
    obj_showcase_game_title1.style.left = c_w*0.5-(obj_showcase_game_title1.innerHTML.length)*9+"px";
    obj_showcase_game_title_sec1.style.left = c_w*0.5-(obj_showcase_game_title_sec1.innerHTML.length)*3+"px";
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





document.addEventListener("click",function()
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
    obj_desc_thumbnail.style.top = "7%";
    obj_desc_thumbnail.style.opacity = 1;
    obj_source_code_button.style.top = "800px";
    obj_source_code_button.style.opacity = 1;
    obj_works_desc.style.opacity = 1;
    obj_works_desc.style.top = "39%";
    obj_source_code_button.innerHTML = text_scripts[29];
    obj_download_button.innerHTML = text_scripts[62];

    if (n_showcase_game == 1)
    {
        tmp_str = text_scripts[9];
        downloadable = 1;
        
        obj_desc_thumbnail.src = "imgs/project_wak_thumbnail.png";
        obj_works_desc.innerHTML = text_scripts[3];
        obj_works_desc.innerHTML += text_scripts[4];
        obj_works_desc.innerHTML += text_scripts[5];
        obj_works_desc.innerHTML += text_scripts[6];
        obj_works_desc.innerHTML += "</br></br>";
        obj_works_desc.innerHTML += text_scripts[7];
        obj_works_desc.innerHTML += text_scripts[8];
        obj_works_desc.innerHTML += (tmp_str)+"</br>";
    }
    else if (n_showcase_game == 2)
    {
        tmp_str = text_scripts[17];
        downloadable = 1;
        
        
        obj_desc_thumbnail.src = "imgs/project_wak_beat_thumbnail.png";
        obj_works_desc.innerHTML = text_scripts[10];
        obj_works_desc.innerHTML += text_scripts[11];
        obj_works_desc.innerHTML += text_scripts[12];
        obj_works_desc.innerHTML += text_scripts[13];
        obj_works_desc.innerHTML += "</br></br>";
        obj_works_desc.innerHTML += text_scripts[14];
        obj_works_desc.innerHTML += text_scripts[15];
        obj_works_desc.innerHTML += text_scripts[16];
        obj_works_desc.innerHTML += tmp_str+"</br>";
    }
    else
    {
        tmp_str = text_scripts[25];
        downloadable = 1;
        
        
        obj_desc_thumbnail.src = "imgs/arena_of_wakgood_thumbnail.gif";
        obj_works_desc.innerHTML = text_scripts[18];
        obj_works_desc.innerHTML += text_scripts[19];
        obj_works_desc.innerHTML += text_scripts[20];
        obj_works_desc.innerHTML += text_scripts[21];
        obj_works_desc.innerHTML += "</br></br>";
        obj_works_desc.innerHTML += text_scripts[22];
        obj_works_desc.innerHTML += text_scripts[23];
        obj_works_desc.innerHTML += text_scripts[24];
        obj_works_desc.innerHTML += tmp_str+"</br>";
    }
    
    //for css
    var text_max_width = (tmp_str.length)*48;
    var tmp_width1 = text_scripts[62].length*5.6;
    obj_download_button.style.width = (tmp_width1)+"px";
    var tmp_width2 = text_scripts[29].length*5.6;
    obj_source_code_button.style.width = (tmp_width2)+"px";
    document.documentElement.style.setProperty("--works_desc_xx",(c_w-text_max_width)*0.5+"px");
    document.documentElement.style.setProperty("--works_desc_width",text_max_width+"px");
    document.documentElement.style.setProperty("--download_button_xx",(c_w-tmp_width1-8)*0.5+"px");
    document.documentElement.style.setProperty("--source_code_button_xx",(c_w-tmp_width2-8)*0.5+"px");
    
    
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
    obj_desc_thumbnail.style.height = "200px";
    obj_desc_thumbnail.style.overflow = "hidden";
    obj_source_code_button.style.top = "-800px";
    obj_download_button.style.top = "-800px";

    obj_desc_thumbnail.src = "https://avatars.githubusercontent.com/u/78880883?v=4";
    obj_desc_thumbnail.style.borderRadius = "9999px";
    obj_desc_thumbnail.style.border = "1px solid white";
    aboutme_desc.style.top = "33%";
    aboutme_desc.style.opacity = "1";
    css_values();
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
    var works_title_kr = [text_scripts[26],"ぼっち・ざ・ろっく!",text_scripts[27],"ひとりぼっち",text_scripts[28]];
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
        obj_showcase_works_title_sec1.style.fontFamily = "customfont_kor";
    }

    obj_showcase_works_title1.innerHTML = works_title_eng[n_real_showcase];
    obj_showcase_works_title_sec1.innerHTML = works_title_kr[n_real_showcase];
    obj_showcase_works_title1.style.left = c_w*0.5-(obj_showcase_works_title1.innerHTML.length)*9+"px";
    obj_showcase_works_title_sec1.style.left = c_w*0.5-(obj_showcase_works_title_sec1.innerHTML.length)*3+"px";
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
    obj_desc_thumbnail.style.top = "7%";
    obj_desc_thumbnail.style.borderRadius = "0px";
    obj_desc_thumbnail.style.opacity = 1;
    obj_source_code_button.style.top = "865px";
    obj_source_code_button.style.opacity = 1;
    obj_works_desc.style.opacity = 1;
    obj_works_desc.style.top = "39%";
    obj_source_code_button.innerHTML = text_scripts[29];
    obj_download_button.innerHTML = text_scripts[62];

    if (n_real_showcase == 0)
    {
        tmp_str = text_scripts[38];
        
        obj_desc_thumbnail.src = "imgs/astronaut_preview.gif";
        obj_works_desc.innerHTML = text_scripts[30];
        obj_works_desc.innerHTML += text_scripts[31];
        obj_works_desc.innerHTML += text_scripts[32];
        obj_works_desc.innerHTML += text_scripts[33];
        obj_works_desc.innerHTML += "</br></br>";
        obj_works_desc.innerHTML += text_scripts[34];
        obj_works_desc.innerHTML += text_scripts[35];
        obj_works_desc.innerHTML += text_scripts[36];
        obj_works_desc.innerHTML += text_scripts[37];
        obj_works_desc.innerHTML += tmp_str+"</br>";
        obj_works_desc.innerHTML += text_scripts[39];
    }
    else if (n_real_showcase == 1)
    {
        tmp_str = text_scripts[43];
        downloadable = 1;
        
        obj_desc_thumbnail.src = "imgs/bocchi!.gif";
        obj_works_desc.innerHTML = text_scripts[40];
        obj_works_desc.innerHTML += text_scripts[41];
        obj_works_desc.innerHTML += text_scripts[42];
        obj_works_desc.innerHTML += "</br></br>";
        obj_works_desc.innerHTML += tmp_str+"</br>";
        obj_works_desc.innerHTML += text_scripts[44];
    }
    else if (n_real_showcase == 2)
    {
        tmp_str = text_scripts[50];
        
        
        obj_desc_thumbnail.src = "imgs/delaunay.gif";
        obj_works_desc.innerHTML = text_scripts[45];
        obj_works_desc.innerHTML += text_scripts[46];
        obj_works_desc.innerHTML += text_scripts[47];
        obj_works_desc.innerHTML += "</br></br>";
        obj_works_desc.innerHTML += text_scripts[48];
        obj_works_desc.innerHTML += text_scripts[49];
        obj_works_desc.innerHTML += tmp_str+"</br>";
    }
    else if (n_real_showcase == 3)
    {
        tmp_str = text_scripts[55];
        downloadable = 1;
        
        obj_desc_thumbnail.src = "imgs/falling_bocchi_preview.gif";
        obj_works_desc.innerHTML = text_scripts[51];
        obj_works_desc.innerHTML += text_scripts[52];
        obj_works_desc.innerHTML += text_scripts[53];
        obj_works_desc.innerHTML += "</br></br>";
        obj_works_desc.innerHTML += text_scripts[54];
        obj_works_desc.innerHTML += tmp_str+"</br>";
        obj_works_desc.innerHTML += text_scripts[56];
    }
    else if (n_real_showcase == 4)
    {
        tmp_str = text_scripts[59];
        
        
        obj_desc_thumbnail.src = "imgs/X.png";
        obj_works_desc.innerHTML = text_scripts[57];
        obj_works_desc.innerHTML += "</br></br>";
        obj_works_desc.innerHTML += text_scripts[58];
        obj_works_desc.innerHTML += tmp_str+"</br>";
        obj_works_desc.innerHTML += text_scripts[60];
        obj_source_code_button.innerHTML = text_scripts[61];
    }
    
    //for css
    var text_max_width = (tmp_str.length)*48;
    var tmp_width1 = text_scripts[62].length*5.6;
    obj_download_button.style.width = (tmp_width1)+"px";
    var tmp_width2 = text_scripts[29].length*5.6;
    obj_source_code_button.style.width = (tmp_width2)+"px";
    document.documentElement.style.setProperty("--works_desc_xx",(c_w-text_max_width)*0.5+"px");
    document.documentElement.style.setProperty("--works_desc_width",text_max_width+"px");
    document.documentElement.style.setProperty("--download_button_xx",(c_w-tmp_width1-8)*0.5+"px");
    document.documentElement.style.setProperty("--source_code_button_xx",(c_w-tmp_width2-8)*0.5+"px");

    
    if (downloadable == 1)
    {
        obj_download_button.style.top = "820px";
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
    is_pc = (c_w < 1080 || c_h/c_w > 1 || (/Android|iPhone/i.test(navigator.userAgent))) ? 1/c_x : 1;
    

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
        
        if (is_pc == 1)
        {
            setTimeout(step_event,200);
        }
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