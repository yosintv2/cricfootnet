const themeBtn = document.getElementById('themeSwitch');
    const searchInput = document.getElementById('searchInput');
    const doc = document.documentElement;

    themeBtn.addEventListener('click', () => {
        const target = doc.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        doc.setAttribute('data-theme', target);
        document.getElementById('themeIcon').className = target === 'light' ? 'bi bi-moon-stars-fill' : 'bi bi-sun-fill';
    });

    // Known Logo Database
    const sportLogos = {

"cricket": {
//ICC Full Member Nations
 "afghanistan": "https://aimages.willow.tv/teamLogos/afghanistan.png",
 "australia": "https://aimages.willow.tv/teamLogos/australia.png",
 "bangladesh": "https://aimages.willow.tv/teamLogos/bangladesh.png",
 "england": "https://aimages.willow.tv/teamLogos/england.png",
 "india": "https://aimages.willow.tv/teamLogos/india.png",
 "ireland": "https://aimages.willow.tv/teamLogos/ireland.png",
 "new zealand": "https://aimages.willow.tv/teamLogos/newzealand.png",
 "pakistan": "https://aimages.willow.tv/teamLogos/pakistan.png",
 "south africa": "https://aimages.willow.tv/teamLogos/southafrica.png",
 "sri lanka": "https://aimages.willow.tv/teamLogos/srilanka.png",
 "west indies": "https://aimages.willow.tv/teamLogos/westindies.png",
 "zimbabwe": "https://aimages.willow.tv/teamLogos/zimbabwe.png",
  
  
//ICC Associate Member Nations - Americas (17)
 "argentina": "https://aimages.willow.tv/teamLogos/argentina.png",
 "bahamas": "https://aimages.willow.tv/teamLogos/bahamas.png",
 "belize": "https://aimages.willow.tv/teamLogos/belize.png",
 "bermuda": "https://aimages.willow.tv/teamLogos/bermuda.png",
 "brazil": "https://aimages.willow.tv/teamLogos/brazil.png",
 "canada": "https://aimages.willow.tv/teamLogos/canada.png",
 "cayman islands": "https://aimages.willow.tv/teamLogos/caymanislands.png",
 "chile": "https://aimages.willow.tv/teamLogos/chile.png",
 "costa rica": "https://aimages.willow.tv/teamLogos/costarica.png",
 "falkland islands": "https://aimages.willow.tv/teamLogos/falklandislands.png",
 "mexico": "https://aimages.willow.tv/teamLogos/mexico.png",
 "panama": "https://aimages.willow.tv/teamLogos/panama.png",
 "peru": "https://aimages.willow.tv/teamLogos/peru.png",
 "suriname": "https://aimages.willow.tv/teamLogos/suriname.png",
 "turks and caicos islands": "https://aimages.willow.tv/teamLogos/turksandcaicosislands.png",
 "usa": "https://aimages.willow.tv/teamLogos/usa.png",
 "vibrant (us Virgin Islands)": "https://aimages.willow.tv/teamLogos/usvirginislands.png",

//ICC Associate Member Nations - Africa (22)
 "botswana": "https://aimages.willow.tv/teamLogos/botswana.png",
 "cameroon": "https://aimages.willow.tv/teamLogos/cameroon.png",
 "cote d'ivoire": "https://aimages.willow.tv/teamLogos/cotedivoire.png",
 "eswatini": "https://aimages.willow.tv/teamLogos/eswatini.png",
 "gambia": "https://aimages.willow.tv/teamLogos/gambia.png",
 "ghana": "https://aimages.willow.tv/teamLogos/ghana.png",
 "kenya": "https://aimages.willow.tv/teamLogos/kenya.png",
 "lesotho": "https://aimages.willow.tv/teamLogos/lesotho.png",
 "madagascar": "https://aimages.willow.tv/teamLogos/madagascar.png",
 "malawi": "https://aimages.willow.tv/teamLogos/malawi.png",
 "mali": "https://aimages.willow.tv/teamLogos/mali.png",
 "morocco": "https://aimages.willow.tv/teamLogos/morocco.png",
 "mozambique": "https://aimages.willow.tv/teamLogos/mozambique.png",
 "namibia": "https://aimages.willow.tv/teamLogos/namibia.png",
 "nigeria": "https://aimages.willow.tv/teamLogos/nigeria.png",
 "rwanda": "https://aimages.willow.tv/teamLogos/rwanda.png",
 "seychelles": "https://aimages.willow.tv/teamLogos/seychelles.png",
 "sierra leone": "https://aimages.willow.tv/teamLogos/sierraleone.png",
 "st helena": "https://aimages.willow.tv/teamLogos/sthelena.png",
 "tanzania": "https://aimages.willow.tv/teamLogos/tanzania.png",
 "uganda": "https://aimages.willow.tv/teamLogos/uganda.png",
 "zambia": "https://aimages.willow.tv/teamLogos/zambia.png",

//ICC Associate Member Nations - Asia (24)
 "bahrain": "https://aimages.willow.tv/teamLogos/bahrain.png",
 "bhutan": "https://aimages.willow.tv/teamLogos/bhutan.png",
 "cambodia": "https://aimages.willow.tv/teamLogos/cambodia.png",
 "china": "https://aimages.willow.tv/teamLogos/china.png",
 "hong kong": "https://aimages.willow.tv/teamLogos/hongkong.png",
 "iran": "https://aimages.willow.tv/teamLogos/iran.png",
 "kuwait": "https://aimages.willow.tv/teamLogos/kuwait.png",
 "malaysia": "https://aimages.willow.tv/teamLogos/malaysia.png",
 "maldives": "https://aimages.willow.tv/teamLogos/maldives.png",
 "myanmar": "https://aimages.willow.tv/teamLogos/myanmar.png",
 "nepal": "https://aimages.willow.tv/teamLogos/nepal.png",
 "oman": "https://aimages.willow.tv/teamLogos/oman.png",
 "qatar": "https://aimages.willow.tv/teamLogos/qatar.png",
 "saudi arabia": "https://aimages.willow.tv/teamLogos/saudiarabia.png",
 "singapore": "https://aimages.willow.tv/teamLogos/singapore.png",
 "thailand": "https://aimages.willow.tv/teamLogos/thailand.png",
 "uae": "https://aimages.willow.tv/teamLogos/unitedarabemirates.png",
 "uzbekistan": "https://aimages.willow.tv/teamLogos/uzbekistan.png",

//ICC Associate Member Nations - East Asia-Pacific (11)
 "cook islands": "https://aimages.willow.tv/teamLogos/cookislands.png",
 "fiji": "https://aimages.willow.tv/teamLogos/fiji.png",
 "indonesia": "https://aimages.willow.tv/teamLogos/indonesia.png",
 "japan": "https://aimages.willow.tv/teamLogos/japan.png",
 "philippines": "https://aimages.willow.tv/teamLogos/philippines.png",
 "papua new guinea": "https://aimages.willow.tv/teamLogos/papuanewguinea.png",
 "samoa": "https://aimages.willow.tv/teamLogos/samoa.png",
 "south korea": "https://aimages.willow.tv/teamLogos/southkorea.png",
 "tonga": "https://aimages.willow.tv/teamLogos/tonga.png",
 "vanuatu": "https://aimages.willow.tv/teamLogos/vanuatu.png",

//ICC Associate Member Nations - Europe (34)
 "austria": "https://aimages.willow.tv/teamLogos/austria.png",
 "belgium": "https://aimages.willow.tv/teamLogos/belgium.png",
 "bulgaria": "https://aimages.willow.tv/teamLogos/bulgaria.png",
 "croatia": "https://aimages.willow.tv/teamLogos/croatia.png",
 "cyprus": "https://aimages.willow.tv/teamLogos/cyprus.png",
 "czech republic": "https://aimages.willow.tv/teamLogos/czechrepublic.png",
 "denmark": "https://aimages.willow.tv/teamLogos/denmark.png",
 "estonia": "https://aimages.willow.tv/teamLogos/estonia.png",
 "finland": "https://aimages.willow.tv/teamLogos/finland.png",
 "france": "https://aimages.willow.tv/teamLogos/france.png",
 "germany": "https://aimages.willow.tv/teamLogos/germany.png",
 "gibraltar": "https://aimages.willow.tv/teamLogos/gibraltar.png",
 "greece": "https://aimages.willow.tv/teamLogos/greece.png",
 "guernsey": "https://aimages.willow.tv/teamLogos/guernsey.png",
 "hungary": "https://aimages.willow.tv/teamLogos/hungary.png",
 "isle of man": "https://aimages.willow.tv/teamLogos/isleofman.png",
 "israel": "https://aimages.willow.tv/teamLogos/israel.png",
 "italy": "https://aimages.willow.tv/teamLogos/italy.png",
 "jersey": "https://aimages.willow.tv/teamLogos/jersey.png",
 "luxembourg": "https://aimages.willow.tv/teamLogos/luxembourg.png",
 "malta": "https://aimages.willow.tv/teamLogos/malta.png",
 "netherlands": "https://aimages.willow.tv/teamLogos/netherlands.png",
 "norway": "https://aimages.willow.tv/teamLogos/norway.png",
 "portugal": "https://aimages.willow.tv/teamLogos/portugal.png",
 "romania": "https://aimages.willow.tv/teamLogos/romania.png",
 "scotland": "https://aimages.willow.tv/teamLogos/scotland.png",
 "serbia": "https://aimages.willow.tv/teamLogos/serbia.png",
 "slovenia": "https://aimages.willow.tv/teamLogos/slovenia.png",
 "spain": "https://aimages.willow.tv/teamLogos/spain.png",
 "sweden": "https://aimages.willow.tv/teamLogos/sweden.png",
 "switzerland": "https://aimages.willow.tv/teamLogos/switzerland.png",
 "turkey": "https://aimages.willow.tv/teamLogos/turkey.png",
 "ukraine": "https://aimages.willow.tv/teamLogos/ukraine.png",
  
  
  //NPL Teams
  "biratnagar kings": "https://cdn.yosintv.link/npl/biratnagar.png",
  "chitwan rhinos": "https://cdn.yosintv.link/npl/chitwan.png",
  "janakpur bolts": "https://cdn.yosintv.link/npl/janakpur.png",
  "karnali yaks":"https://cdn.yosintv.link/npl/karnali.png",
  "kathmandu gorkhas":"https://cdn.yosintv.link/npl/kathmandu.png",
  "lumbini lions":"https://cdn.yosintv.link/npl/lumbini.png",
  "pokhara avengers":"https://cdn.yosintv.link/npl/pokhara.png",
  "sudurpaschim royals":"https://cdn.yosintv.link/npl/supa.png",
  
  
  //Abu Dhabi T10
  "ajman titans": "https://aimages.willow.tv/teamLogos/ajmantitans.png",
  "aspinstallions": "https://aimages.willow.tv/teamLogos/aspinstallions.png",
  "bangla tigers": "https://aimages.willow.tv/teamLogos/banglatigers.png",
  "chennai braves": "https://aimages.willow.tv/teamLogos/chennaibraves.png",
  "deccan gladiators": "https://aimages.willow.tv/teamLogos/deccangladiators.png",
  "morrisville samp army": "https://aimages.willow.tv/teamLogos/samparmy.png",
  "new york strikers": "https://aimages.willow.tv/teamLogos/newyorkstrikers.png",
  "northern warriors": "https://aimages.willow.tv/teamLogos/northernwarriors.png",
  "quetta qavalry": "https://aimages.willow.tv/teamLogos/quettaqavalry.png",
  "royal champs": "https://aimages.willow.tv/teamLogos/royalchamps.png",
  "team abu dhabi": "https://aimages.willow.tv/teamLogos/teamabudhabi.png",
  "uae bulls": "https://aimages.willow.tv/teamLogos/uaebulls.png",
  "vista riders": "https://aimages.willow.tv/teamLogos/vistariders.png",


 //Indian Premier League Teams
 "chennai super kings": "https://aimages.willow.tv/teamLogos/chennaisuperkings.png",
 "delhi capitals": "https://aimages.willow.tv/teamLogos/delhicapitals.png",
 "gujarat titans": "https://aimages.willow.tv/teamLogos/gujarattitans.png",
 "kolkata knight riders": "https://aimages.willow.tv/teamLogos/kolkataknightriders.png",
 "lucknow super giants": "https://aimages.willow.tv/teamLogos/lucknowsupergiants.png",
 "mumbai indians": "https://aimages.willow.tv/teamLogos/mumbaiindians.png",
 "punjab kings": "https://aimages.willow.tv/teamLogos/punjabkings.png",
 "rajasthan royals": "https://aimages.willow.tv/teamLogos/rajasthanroyals.png",
 "royal challengers bengaluru": "https://aimages.willow.tv/teamLogos/royalchallengersbengaluru.png",
 "sunrisers hyderabad": "https://aimages.willow.tv/teamLogos/sunrisershyderabad.png",
  
  
//Pakistan Super League Teams
 "islamabad united": "https://aimages.willow.tv/teamLogos/islamabadunited.png",
 "karachi kings": "https://aimages.willow.tv/teamLogos/karachikings.png",
 "lahore qalandars": "https://aimages.willow.tv/teamLogos/lahoreqalandars.png",
 "multan sultans": "https://aimages.willow.tv/teamLogos/multansultans.png",
 "peshawar zalmi": "https://aimages.willow.tv/teamLogos/peshawarzalmi.png",
 "quetta gladiators": "https://aimages.willow.tv/teamLogos/quettagladiators.png",
  
  //Big Bash League Teams
 "adelaide strikers": "https://aimages.willow.tv/teamLogos/adelaidestrikers.png",
 "brisbane heat": "https://aimages.willow.tv/teamLogos/brisbaneheat.png",
 "hobart hurricanes": "https://aimages.willow.tv/teamLogos/hobarthurricanes.png",
 "melbourne renegades": "https://aimages.willow.tv/teamLogos/melbournerenegades.png",
 "melbourne stars": "https://aimages.willow.tv/teamLogos/melbournestars.png",
 "perth scorchers": "https://aimages.willow.tv/teamLogos/perthscorchers.png",
 "sydney sixers": "https://aimages.willow.tv/teamLogos/sydneysixers.png",
 "sydney thunder": "https://aimages.willow.tv/teamLogos/sydneythunder.png",
  
//Caribbean Premier League Teams
 "antigua & barbuda falcons": "https://aimages.willow.tv/teamLogos/antiguabarbudafalcons.png",
 "barbados royals": "https://aimages.willow.tv/teamLogos/barbadosroyals.png",
 "guyana amazon warriors": "https://aimages.willow.tv/teamLogos/guyanaamazonwarriors.png",
 "st kitts & nevis patriots": "https://aimages.willow.tv/teamLogos/stkittsandnevispatriots.png",
 "saint lucia kings": "https://aimages.willow.tv/teamLogos/stluciakings.png",
 "trinbago knight riders": "https://aimages.willow.tv/teamLogos/trinbagoknightriders.png",
  
//Major League Cricket Teams
 "los angeles knight riders": "https://aimages.willow.tv/teamLogos/losangelesknightriders.png",
 "mi new york": "https://aimages.willow.tv/teamLogos/minewyork.png",
 "san francisco unicorns": "https://aimages.willow.tv/teamLogos/sanfranciscounicorns.png",
 "seattle orcas": "https://aimages.willow.tv/teamLogos/seattleorcas.png",
 "texas super kings": "https://aimages.willow.tv/teamLogos/texassuperkings.png",
 "washington freedom": "https://aimages.willow.tv/teamLogos/washingtonfreedom.png",
  
//The Hundred Teams
 "birmingham phoenix": "https://aimages.willow.tv/teamLogos/birminghamphoenix.png",
 "london spirit": "https://aimages.willow.tv/teamLogos/londonspirit.png",
 "manchester originals": "https://aimages.willow.tv/teamLogos/manchesteroriginals.png",
 "northern superchargers": "https://aimages.willow.tv/teamLogos/northernsuperchargers.png",
 "oval invincibles": "https://aimages.willow.tv/teamLogos/ovalinvincibles.png",
 "southern brave": "https://aimages.willow.tv/teamLogos/southernbrave.png",
 "trent rockets": "https://aimages.willow.tv/teamLogos/trentrockets.png",
 "welsh fire": "https://aimages.willow.tv/teamLogos/welshfire.png",
  
//SA20 Teams
 "durban's super giants": "https://aimages.willow.tv/teamLogos/durbanssupergiants.png",
 "joburg super kings": "https://aimages.willow.tv/teamLogos/joburgsuperkings.png",
 "mi cape town": "https://aimages.willow.tv/teamLogos/micapecown.png",
 "paarl royals": "https://aimages.willow.tv/teamLogos/paarlroyals.png",
 "pretoria capitals": "https://aimages.willow.tv/teamLogos/pretoriacapitals.png",
 "sunrisers eastern cape": "https://aimages.willow.tv/teamLogos/sunriserseasterncape.png",
  
  
//Global T20 Canada Teams
 "bangla tigers mississauga": "https://aimages.willow.tv/teamLogos/banglatigersmississauga.png",
 "brampton wolves": "https://aimages.willow.tv/teamLogos/bramptonwolves.png",
 "montreal tigers": "https://aimages.willow.tv/teamLogos/montrealtigers.png",
 "surrey jaguars": "https://aimages.willow.tv/teamLogos/surreyjaguars.png",
 "toronto nationals": "https://aimages.willow.tv/teamLogos/torontonationals.png",
 "vancouver knights": "https://aimages.willow.tv/teamLogos/vancouverknights.png",
  
//International League T20 Teams
 "abu dhabi knight riders": "https://aimages.willow.tv/teamLogos/abudhabiknightriders.png",
 "desert vipers": "https://aimages.willow.tv/teamLogos/desertvipers.png",
 "dubai capitals": "https://aimages.willow.tv/teamLogos/dubaicapitals.png",
 "gulf giants": "https://aimages.willow.tv/teamLogos/gulfgiants.png",
 "mi emirates": "https://aimages.willow.tv/teamLogos/miemirates.png",
 "sharjah warriors": "https://aimages.willow.tv/teamLogos/sharjahwarriors.png",
  
//Bangladesh Premier League Teams
 "chattogram challengers": "https://aimages.willow.tv/teamLogos/chattogramchallengers.png",
 "comilla victorians": "https://aimages.willow.tv/teamLogos/comillavictorians.png",
 "durdanto dhaka": "https://aimages.willow.tv/teamLogos/durdantodhaka.png",
 "fortune barishal": "https://aimages.willow.tv/teamLogos/fortunebarishal.png",
 "khulna tigers": "https://aimages.willow.tv/teamLogos/khulnatigers.png",
 "rangpur riders": "https://aimages.willow.tv/teamLogos/rangpurriders.png",
 "sylhet strikers": "https://aimages.willow.tv/teamLogos/sylhetstrikers.png",

//Lanka Premier League Teams
 "colombo kaps": "https://aimages.willow.tv/teamLogos/colombokaps.png",
 "dambulla sixers": "https://aimages.willow.tv/teamLogos/dambullasixers.png",
 "galle marvels": "https://aimages.willow.tv/teamLogos/gallemarvels.png",
 "jaffna kings": "https://aimages.willow.tv/teamLogos/jaffnakings.png",
 "kandy falcons": "https://aimages.willow.tv/teamLogos/kandyfalcons.png",
},

"football": {
  // https://gemini.google.com/app/391a058fa6ade2ea
 "arsenal":"https://images.fotmob.com/image_resources/logo/teamlogo/9825.png",
 "manchester city":"https://images.fotmob.com/image_resources/logo/teamlogo/8456.png",
 "man city":"https://images.fotmob.com/image_resources/logo/teamlogo/8456.png",
 "aston villa":"https://images.fotmob.com/image_resources/logo/teamlogo/10252.png",
 "chelsea":"https://images.fotmob.com/image_resources/logo/teamlogo/8455.png",
 "everton":"https://images.fotmob.com/image_resources/logo/teamlogo/8668.png",
 "crystal palace":"https://images.fotmob.com/image_resources/logo/teamlogo/9826.png",
 "sunderland":"https://images.fotmob.com/image_resources/logo/teamlogo/8472.png",
 "liverpool":"https://images.fotmob.com/image_resources/logo/teamlogo/8650.png",
 "tottenham hotspur":"https://images.fotmob.com/image_resources/logo/teamlogo/8586.png",
 "tottenham":"https://images.fotmob.com/image_resources/logo/teamlogo/8586.png",
 "spurs":"https://images.fotmob.com/image_resources/logo/teamlogo/8586.png",
 "brighton & hove albion":"https://images.fotmob.com/image_resources/logo/teamlogo/10204.png",
 "brighton":"https://images.fotmob.com/image_resources/logo/teamlogo/10204.png",
 "newcastle":"https://images.fotmob.com/image_resources/logo/teamlogo/10261.png",
 "manchester united":"https://images.fotmob.com/image_resources/logo/teamlogo/10260.png",
 "man united":"https://images.fotmob.com/image_resources/logo/teamlogo/10260.png",
 "bournemouth":"https://images.fotmob.com/image_resources/logo/teamlogo/8678.png",
 "afc bournemouth":"https://images.fotmob.com/image_resources/logo/teamlogo/8678.png",
 "brentford":"https://images.fotmob.com/image_resources/logo/teamlogo/9937.png",
 "fulham":"https://images.fotmob.com/image_resources/logo/teamlogo/9879.png",
 "leeds united":"https://images.fotmob.com/image_resources/logo/teamlogo/8463.png",
 "leeds":"https://images.fotmob.com/image_resources/logo/teamlogo/8463.png",
 "nottingham forest":"https://images.fotmob.com/image_resources/logo/teamlogo/10203.png",
 "nottingham":"https://images.fotmob.com/image_resources/logo/teamlogo/10203.png",
 "west ham united":"https://images.fotmob.com/image_resources/logo/teamlogo/8654.png",
 "west ham":"https://images.fotmob.com/image_resources/logo/teamlogo/8654.png",
 "burnley":"https://images.fotmob.com/image_resources/logo/teamlogo/8191.png",
 "wolverhampton":"https://images.fotmob.com/image_resources/logo/teamlogo/8602.png",
 "wolves":"https://images.fotmob.com/image_resources/logo/teamlogo/8602.png",
  
  
  //LaLiga Teams
 "barcelona":"https://images.fotmob.com/image_resources/logo/teamlogo/8634.png",
 "real madrid":"https://images.fotmob.com/image_resources/logo/teamlogo/8633.png",
 "villarreal":"https://images.fotmob.com/image_resources/logo/teamlogo/10205.png",
 "atlético madrid":"https://images.fotmob.com/image_resources/logo/teamlogo/9906.png",
 "real betis":"https://images.fotmob.com/image_resources/logo/teamlogo/8603.png",
 "espanyol":"https://images.fotmob.com/image_resources/logo/teamlogo/8558.png",
 "athletic club":"https://images.fotmob.com/image_resources/logo/teamlogo/8315.png",
 "getafe":"https://images.fotmob.com/image_resources/logo/teamlogo/8305.png",
 "deportivo alavés":"https://images.fotmob.com/image_resources/logo/teamlogo/9866.png",
 "rayo vallecano":"https://images.fotmob.com/image_resources/logo/teamlogo/8370.png",
 "elche":"https://images.fotmob.com/image_resources/logo/teamlogo/10268.png",
 "real sociedad":"https://images.fotmob.com/image_resources/logo/teamlogo/8560.png",
 "celta vigo":"https://images.fotmob.com/image_resources/logo/teamlogo/9910.png",
 "sevilla":"https://images.fotmob.com/image_resources/logo/teamlogo/8302.png",
 "mallorca":"https://images.fotmob.com/image_resources/logo/teamlogo/8661.png",
 "valencia":"https://images.fotmob.com/image_resources/logo/teamlogo/10267.png",
 "osasuna":"https://images.fotmob.com/image_resources/logo/teamlogo/8371.png",
 "girona":"https://images.fotmob.com/image_resources/logo/teamlogo/7732.png",
 "real oviedo":"https://images.fotmob.com/image_resources/logo/teamlogo/8670.png",
 "levante":"https://images.fotmob.com/image_resources/logo/teamlogo/8581.png",
  
  //Bundesliga Teams
 "bayern munich":"https://images.fotmob.com/image_resources/logo/teamlogo/9823.png",
 "bayern münchen":"https://images.fotmob.com/image_resources/logo/teamlogo/9823.png",
 "rb leipzig":"https://images.fotmob.com/image_resources/logo/teamlogo/178475.png",
 "dortmund":"https://images.fotmob.com/image_resources/logo/teamlogo/9789.png",
 "leverkusen":"https://images.fotmob.com/image_resources/logo/teamlogo/8178.png",
 "hoffenheim":"https://images.fotmob.com/image_resources/logo/teamlogo/8226.png",
 "vfb stuttgart":"https://images.fotmob.com/image_resources/logo/teamlogo/10269.png",
 "eintracht frankfurt":"https://images.fotmob.com/image_resources/logo/teamlogo/9810.png",
 "köln":"https://images.fotmob.com/image_resources/logo/teamlogo/8722.png", 
 "freiburg":"https://images.fotmob.com/image_resources/logo/teamlogo/8358.png",
 "borussia m'gladbach":"https://images.fotmob.com/image_resources/logo/teamlogo/9788.png",
 "werder bremen":"https://images.fotmob.com/image_resources/logo/teamlogo/8697.png",
 "union berlin":"https://images.fotmob.com/image_resources/logo/teamlogo/8149.png",
 "augsburg":"https://images.fotmob.com/image_resources/logo/teamlogo/8406.png",
 "wolfsburg":"https://images.fotmob.com/image_resources/logo/teamlogo/8721.png",
 "hamburger sv":"https://images.fotmob.com/image_resources/logo/teamlogo/9790.png",
"heidenheim":"https://images.fotmob.com/image_resources/logo/teamlogo/94937.png",
 "st pauli":"https://images.fotmob.com/image_resources/logo/teamlogo/8152.png",
 "mainz 05":"https://images.fotmob.com/image_resources/logo/teamlogo/9905.png",
  
  //Serie A Teams
 "inter milan":"https://images.fotmob.com/image_resources/logo/teamlogo/8636.png",
 "milan":"https://images.fotmob.com/image_resources/logo/teamlogo/8564.png",
 "napoli":"https://images.fotmob.com/image_resources/logo/teamlogo/9875.png",
 "roma":"https://images.fotmob.com/image_resources/logo/teamlogo/8686.png",
 "bologna":"https://images.fotmob.com/image_resources/logo/teamlogo/9857.png",
 "como":"https://images.fotmob.com/image_resources/logo/teamlogo/10171.png",
 "juventus":"https://images.fotmob.com/image_resources/logo/teamlogo/9885.png",
 "sassuolo":"https://images.fotmob.com/image_resources/logo/teamlogo/7943.png",
 "lazio":"https://images.fotmob.com/image_resources/logo/teamlogo/8543.png",
 "udinese":"https://images.fotmob.com/image_resources/logo/teamlogo/8600.png",
 "cremonese":"https://images.fotmob.com/image_resources/logo/teamlogo/7801.png",
 "atalanta":"https://images.fotmob.com/image_resources/logo/teamlogo/8524.png",
 "torino":"https://images.fotmob.com/image_resources/logo/teamlogo/9804.png",
 "lecce":"https://images.fotmob.com/image_resources/logo/teamlogo/9888.png",
 "cagliari":"https://images.fotmob.com/image_resources/logo/teamlogo/8529.png",
 "genoa":"https://images.fotmob.com/image_resources/logo/teamlogo/10233.png",
 "parma":"https://images.fotmob.com/image_resources/logo/teamlogo/10167.png",
 "pisa":"https://images.fotmob.com/image_resources/logo/teamlogo/6479.png",
 "hellas verona":"https://images.fotmob.com/image_resources/logo/teamlogo/9876.png",
 "fiorentina":"https://images.fotmob.com/image_resources/logo/teamlogo/8535.png",

  
  /* --- START NEW FRENCH ENTRIES --- */

 "lens":"https://images.fotmob.com/image_resources/logo/teamlogo/8588.png",
 "Paris Saint-Germain ":"https://images.fotmob.com/image_resources/logo/teamlogo/9847.png",
"paris saint germain":"https://images.fotmob.com/image_resources/logo/teamlogo/9847.png",
 "psg":"https://images.fotmob.com/image_resources/logo/teamlogo/9847.png",
 "marseille":"https://images.fotmob.com/image_resources/logo/teamlogo/8592.png",
 "lille":"https://images.fotmob.com/image_resources/logo/teamlogo/8639.png",
 "lyon":"https://images.fotmob.com/image_resources/logo/teamlogo/9748.png",
 "rennes":"https://images.fotmob.com/image_resources/logo/teamlogo/9851.png",
 "monaco":"https://images.fotmob.com/image_resources/logo/teamlogo/9829.png",
 "strasbourg":"https://images.fotmob.com/image_resources/logo/teamlogo/9848.png",
 "toulouse":"https://images.fotmob.com/image_resources/logo/teamlogo/9941.png",
 "brest":"https://images.fotmob.com/image_resources/logo/teamlogo/8521.png",
 "angers":"https://images.fotmob.com/image_resources/logo/teamlogo/8121.png",
 "nice":"https://images.fotmob.com/image_resources/logo/teamlogo/9831.png",
 "lorient":"https://images.fotmob.com/image_resources/logo/teamlogo/8689.png",
 "paris fc":"https://images.fotmob.com/image_resources/logo/teamlogo/6379.png",
 "le havre":"https://images.fotmob.com/image_resources/logo/teamlogo/9746.png",
 "auxerre":"https://images.fotmob.com/image_resources/logo/teamlogo/8583.png",
 "nantes":"https://images.fotmob.com/image_resources/logo/teamlogo/9830.png",
 "metz":"https://images.fotmob.com/image_resources/logo/teamlogo/8550.png",

//World Cup Teams
 "mexico":"https://images.fotmob.com/image_resources/logo/teamlogo/6710.png",
 "south africa":"https://images.fotmob.com/image_resources/logo/teamlogo/6316.png",
 "south korea":"https://images.fotmob.com/image_resources/logo/teamlogo/7804.png",
 "european play off d":"https://images.fotmob.com/image_resources/logo/teamlogo/1862057.png",
 "canada":"https://images.fotmob.com/image_resources/logo/teamlogo/5810.png",
 "qatar":"https://images.fotmob.com/image_resources/logo/teamlogo/5902.png",
 "switzerland":"https://images.fotmob.com/image_resources/logo/teamlogo/6717.png",
 "european play off":"https://images.fotmob.com/image_resources/logo/teamlogo/1862054.png",
 "brazil":"https://images.fotmob.com/image_resources/logo/teamlogo/8256.png",
 "haiti":"https://images.fotmob.com/image_resources/logo/teamlogo/5934.png",
 "morocco":"https://images.fotmob.com/image_resources/logo/teamlogo/6262.png",
 "scotland":"https://images.fotmob.com/image_resources/logo/teamlogo/8498.png",
 "australia":"https://images.fotmob.com/image_resources/logo/teamlogo/6716.png",
 "paraguay":"https://images.fotmob.com/image_resources/logo/teamlogo/6724.png",
 "usa":"https://images.fotmob.com/image_resources/logo/teamlogo/6713.png",
 "european play off c":"https://images.fotmob.com/image_resources/logo/teamlogo/1862056.png",
 "curacao":"https://images.fotmob.com/image_resources/logo/teamlogo/287981.png",
 "ecuador":"https://images.fotmob.com/image_resources/logo/teamlogo/6707.png",
 "germany":"https://images.fotmob.com/image_resources/logo/teamlogo/8570.png",
 "ivory coast":"https://images.fotmob.com/image_resources/logo/teamlogo/6709.png",
 "japan":"https://images.fotmob.com/image_resources/logo/teamlogo/6715.png",
 "netherlands":"https://images.fotmob.com/image_resources/logo/teamlogo/6708.png",
 "tunisia":"https://images.fotmob.com/image_resources/logo/teamlogo/6719.png",
 "european play off b":"https://images.fotmob.com/image_resources/logo/teamlogo/1862055.png",
 "belgium":"https://images.fotmob.com/image_resources/logo/teamlogo/8263.png",
 "egypt":"https://images.fotmob.com/image_resources/logo/teamlogo/10255.png",
 "iran":"https://images.fotmob.com/image_resources/logo/teamlogo/6711.png",
 "new zealand":"https://images.fotmob.com/image_resources/logo/teamlogo/5820.png",
 "cape verde":"https://images.fotmob.com/image_resources/logo/teamlogo/5888.png",
 "saudi arabia":"https://images.fotmob.com/image_resources/logo/teamlogo/7795.png",
 "spain":"https://images.fotmob.com/image_resources/logo/teamlogo/6720.png",
 "uruguay":"https://images.fotmob.com/image_resources/logo/teamlogo/5796.png",
 "france":"https://images.fotmob.com/image_resources/logo/teamlogo/6723.png",
 "norway":"https://images.fotmob.com/image_resources/logo/teamlogo/8492.png",
 "senegal":"https://images.fotmob.com/image_resources/logo/teamlogo/6395.png",
 "fifa play off tournament 2":"https://images.fotmob.com/image_resources/logo/teamlogo/1862058.png",
 "algeria":"https://images.fotmob.com/image_resources/logo/teamlogo/6317.png",
 "argentina":"https://images.fotmob.com/image_resources/logo/teamlogo/6706.png",
 "austria":"https://images.fotmob.com/image_resources/logo/teamlogo/8255.png",
 "jordan":"https://images.fotmob.com/image_resources/logo/teamlogo/5816.png",
 "colombia":"https://images.fotmob.com/image_resources/logo/teamlogo/8258.png",
 "portugal":"https://images.fotmob.com/image_resources/logo/teamlogo/8361.png",
 "uzbekistan":"https://images.fotmob.com/image_resources/logo/teamlogo/8700.png",
 "fifa play off tournament 1":"https://images.fotmob.com/image_resources/logo/teamlogo/1862059.png",
 "croatia":"https://images.fotmob.com/image_resources/logo/teamlogo/10155.png",
 "england":"https://images.fotmob.com/image_resources/logo/teamlogo/8491.png",
 "ghana":"https://images.fotmob.com/image_resources/logo/teamlogo/6714.png",
 "panama":"https://images.fotmob.com/image_resources/logo/teamlogo/5922.png",
  
  
  //Europa Cup Teams
 "lyon":"https://images.fotmob.com/image_resources/logo/teamlogo/9748.png",
"midtjylland":"https://images.fotmob.com/image_resources/logo/teamlogo/8113.png",
 "aston villa":"https://images.fotmob.com/image_resources/logo/teamlogo/10252.png",
 "freiburg":"https://images.fotmob.com/image_resources/logo/teamlogo/8358.png",
 "real betis":"https://images.fotmob.com/image_resources/logo/teamlogo/8603.png",
 "ferencvaros":"https://images.fotmob.com/image_resources/logo/teamlogo/8222.png",
 "braga":"https://images.fotmob.com/image_resources/logo/teamlogo/10264.png",
"porto":"https://images.fotmob.com/image_resources/logo/teamlogo/9773.png",
 "genk":"https://images.fotmob.com/image_resources/logo/teamlogo/9987.png",
 "celta vigo":"https://images.fotmob.com/image_resources/logo/teamlogo/9910.png",
 "lille":"https://images.fotmob.com/image_resources/logo/teamlogo/8639.png",
 "vfb stuttgart":"https://images.fotmob.com/image_resources/logo/teamlogo/10269.png",
 "viktoria plzen":"https://images.fotmob.com/image_resources/logo/teamlogo/6033.png",
 "panathinaikos":"https://images.fotmob.com/image_resources/logo/teamlogo/10200.png",
 "roma":"https://images.fotmob.com/image_resources/logo/teamlogo/8686.png",
 "nottingham forest":"https://images.fotmob.com/image_resources/logo/teamlogo/10203.png",
 "paok thessaloniki":"https://images.fotmob.com/image_resources/logo/teamlogo/8619.png",
 "bologna":"https://images.fotmob.com/image_resources/logo/teamlogo/9857.png",
 "brann":"https://images.fotmob.com/image_resources/logo/teamlogo/8468.png",
 "fenerbahce":"https://images.fotmob.com/image_resources/logo/teamlogo/8695.png",
 "celtic":"https://images.fotmob.com/image_resources/logo/teamlogo/9925.png",
 "fk crvena zvezda":"https://images.fotmob.com/image_resources/logo/teamlogo/8687.png",
 "dinamo zagreb":"https://images.fotmob.com/image_resources/logo/teamlogo/10156.png",
 "basel":"https://images.fotmob.com/image_resources/logo/teamlogo/9931.png",
 "ludogorets razgrad":"https://images.fotmob.com/image_resources/logo/teamlogo/210173.png",
 "young boys":"https://images.fotmob.com/image_resources/logo/teamlogo/10192.png",
 "go ahead eagles":"https://images.fotmob.com/image_resources/logo/teamlogo/6433.png",
 "sturm graz":"https://images.fotmob.com/image_resources/logo/teamlogo/10014.png",
 "salzburg":"https://images.fotmob.com/image_resources/logo/teamlogo/10013.png",
 "feyenoord":"https://images.fotmob.com/image_resources/logo/teamlogo/10235.png",
 "sb":"https://images.fotmob.com/image_resources/logo/teamlogo/9723.png",
"utrecht":"https://images.fotmob.com/image_resources/logo/teamlogo/9908.png",
 "rangers":"https://images.fotmob.com/image_resources/logo/teamlogo/8548.png",
 "malmo ff":"https://images.fotmob.com/image_resources/logo/teamlogo/10237.png",
 "maccabi tel aviv":"https://images.fotmob.com/image_resources/logo/teamlogo/7855.png",
 "nice":"https://images.fotmob.com/image_resources/logo/teamlogo/9831.png",
  
  
  //FA Cup Teams
 "walsall":"https://images.fotmob.com/image_resources/logo/teamlogo/10006.png",
 "chelmsford":"https://images.fotmob.com/image_resources/logo/teamlogo/45724.png",
 "port vale":"https://images.fotmob.com/image_resources/logo/teamlogo/9799.png",
 "burton albion":"https://images.fotmob.com/image_resources/logo/teamlogo/9792.png",
 "cheltenham town":"https://images.fotmob.com/image_resources/logo/teamlogo/8680.png",
 "grimsby town":"https://images.fotmob.com/image_resources/logo/teamlogo/10005.png",
 "weston super mare":"https://images.fotmob.com/image_resources/logo/teamlogo/6314.png",
 "swindon town":"https://images.fotmob.com/image_resources/logo/teamlogo/9795.png",
 "south shields":"https://images.fotmob.com/image_resources/logo/teamlogo/865163.png",
 "leyton orient":"https://images.fotmob.com/image_resources/logo/teamlogo/8351.png",
 "cambridge united":"https://images.fotmob.com/image_resources/logo/teamlogo/9834.png",
 "exeter city":"https://images.fotmob.com/image_resources/logo/teamlogo/9833.png",
 "blackpool":"https://images.fotmob.com/image_resources/logo/teamlogo/8483.png",
 "shrewsbury town":"https://images.fotmob.com/image_resources/logo/teamlogo/9896.png",
 "barnsley":"https://images.fotmob.com/image_resources/logo/teamlogo/8283.png",
 "newport county":"https://images.fotmob.com/image_resources/logo/teamlogo/10262.png",
 "notts county":"https://images.fotmob.com/image_resources/logo/teamlogo/9819.png",
 "sutton united":"https://images.fotmob.com/image_resources/logo/teamlogo/158316.png",
 "braintree town":"https://images.fotmob.com/image_resources/logo/teamlogo/5763.png",
 "brackley town":"https://images.fotmob.com/image_resources/logo/teamlogo/158321.png",
 "york city":"https://images.fotmob.com/image_resources/logo/teamlogo/9916.png",
 "boreham wood":"https://images.fotmob.com/image_resources/logo/teamlogo/2488.png",
 "mansfield town":"https://images.fotmob.com/image_resources/logo/teamlogo/9818.png",
 "buxton":"https://images.fotmob.com/image_resources/logo/teamlogo/161824.png",
 "maldon tiptree":"https://images.fotmob.com/image_resources/logo/teamlogo/282501.png",
 "gainsborough":"https://images.fotmob.com/image_resources/logo/teamlogo/6450.png",
 "forest green rovers":"https://images.fotmob.com/image_resources/logo/teamlogo/9828.png",
 "bolton wanderers":"https://images.fotmob.com/image_resources/logo/teamlogo/8559.png",
 "gillingham":"https://images.fotmob.com/image_resources/logo/teamlogo/10173.png",
 "a totton":"https://images.fotmob.com/image_resources/logo/teamlogo/275027.png",
 "rotherham united":"https://images.fotmob.com/image_resources/logo/teamlogo/8119.png",
 "lincoln city":"https://images.fotmob.com/image_resources/logo/teamlogo/8430.png",
 "chatham town":"https://images.fotmob.com/image_resources/logo/teamlogo/282368.png",
 "aldershot town":"https://images.fotmob.com/image_resources/logo/teamlogo/8465.png",
 "barrow":"https://images.fotmob.com/image_resources/logo/teamlogo/6350.png",
 "bristol rovers":"https://images.fotmob.com/image_resources/logo/teamlogo/10104.png",
 "crawley town":"https://images.fotmob.com/image_resources/logo/teamlogo/8647.png",
 "altrincham":"https://images.fotmob.com/image_resources/logo/teamlogo/9915.png",

  //Saudi Cup Teams
"al nassr":"https://images.fotmob.com/image_resources/logo/teamlogo/101918.png",
 "al hilal":"https://images.fotmob.com/image_resources/logo/teamlogo/2529.png",
 "al taawoun":"https://images.fotmob.com/image_resources/logo/teamlogo/205686.png",
 "al ahli":"https://images.fotmob.com/image_resources/logo/teamlogo/2530.png",
 "al qadsiah":"https://images.fotmob.com/image_resources/logo/teamlogo/101919.png",
 "al khaleej":"https://images.fotmob.com/image_resources/logo/teamlogo/550433.png",
 "al ittihad":"https://images.fotmob.com/image_resources/logo/teamlogo/8577.png",
 "neom sc":"https://images.fotmob.com/image_resources/logo/teamlogo/1699505.png",
 "al ettifaq":"https://images.fotmob.com/image_resources/logo/teamlogo/101915.png",
 "al fayha":"https://images.fotmob.com/image_resources/logo/teamlogo/582749.png",
 "al kholood":"https://images.fotmob.com/image_resources/logo/teamlogo/1523706.png",
 "al hazem":"https://images.fotmob.com/image_resources/logo/teamlogo/101911.png",
 "al shabab":"https://images.fotmob.com/image_resources/logo/teamlogo/101916.png",
 "al riyadh":"https://images.fotmob.com/image_resources/logo/teamlogo/582739.png",
 "al akhdoud":"https://images.fotmob.com/image_resources/logo/teamlogo/582759.png",
 "damac":"https://images.fotmob.com/image_resources/logo/teamlogo/582823.png",
 "al fateh":"https://images.fotmob.com/image_resources/logo/teamlogo/177356.png",
 "al najma":"https://images.fotmob.com/image_resources/logo/teamlogo/1523707.png",

  //MLS Cup Teams
 "philadelphia union":"https://images.fotmob.com/image_resources/logo/teamlogo/191716.png",
"cincinnati":"https://images.fotmob.com/image_resources/logo/teamlogo/722265.png",
 "miami":"https://images.fotmob.com/image_resources/logo/teamlogo/960720.png",
 "charlotte":"https://images.fotmob.com/image_resources/logo/teamlogo/1323940.png",
 "new york city":"https://images.fotmob.com/image_resources/logo/teamlogo/546238.png",
 "nashville sc":"https://images.fotmob.com/image_resources/logo/teamlogo/915807.png",
 "columbus crew":"https://images.fotmob.com/image_resources/logo/teamlogo/6001.png",
 "chicago fire":"https://images.fotmob.com/image_resources/logo/teamlogo/6397.png",
 "orlando city":"https://images.fotmob.com/image_resources/logo/teamlogo/267810.png",
 "new york red bulls":"https://images.fotmob.com/image_resources/logo/teamlogo/6514.png",
 "new england revolution":"https://images.fotmob.com/image_resources/logo/teamlogo/6580.png",
 "toronto":"https://images.fotmob.com/image_resources/logo/teamlogo/56453.png",
 "cf montreal":"https://images.fotmob.com/image_resources/logo/teamlogo/161195.png",
 "atlanta united":"https://images.fotmob.com/image_resources/logo/teamlogo/773958.png",
 "dc united":"https://images.fotmob.com/image_resources/logo/teamlogo/6602.png",
 "san diego":"https://images.fotmob.com/image_resources/logo/teamlogo/1701119.png",
 "vancouver whitecaps":"https://images.fotmob.com/image_resources/logo/teamlogo/307691.png",
 "los angeles":"https://images.fotmob.com/image_resources/logo/teamlogo/867280.png",
 "minnesota united":"https://images.fotmob.com/image_resources/logo/teamlogo/207242.png",
 "seattle sounders":"https://images.fotmob.com/image_resources/logo/teamlogo/130394.png",
 "austin":"https://images.fotmob.com/image_resources/logo/teamlogo/1218886.png",
"dallas":"https://images.fotmob.com/image_resources/logo/teamlogo/6399.png",
 "portland timbers":"https://images.fotmob.com/image_resources/logo/teamlogo/307690.png",
 "real salt lake":"https://images.fotmob.com/image_resources/logo/teamlogo/6606.png",
 "san jose earthquakes":"https://images.fotmob.com/image_resources/logo/teamlogo/6603.png",
 "colorado rapids":"https://images.fotmob.com/image_resources/logo/teamlogo/8314.png",
 "houston dynamo":"https://images.fotmob.com/image_resources/logo/teamlogo/8259.png",
 "st louis city":"https://images.fotmob.com/image_resources/logo/teamlogo/1427963.png",
 "la galaxy":"https://images.fotmob.com/image_resources/logo/teamlogo/6637.png",
 "sporting kansas city":"https://images.fotmob.com/image_resources/logo/teamlogo/6604.png",
  
"walsall":"https://images.fotmob.com/image_resources/logo/teamlogo/10006.png",
 "swindon town":"https://images.fotmob.com/image_resources/logo/teamlogo/9795.png",
 "milton keynes dons":"https://images.fotmob.com/image_resources/logo/teamlogo/8645.png",
 "notts county":"https://images.fotmob.com/image_resources/logo/teamlogo/9819.png",
 "bromley":"https://images.fotmob.com/image_resources/logo/teamlogo/45729.png",
 "gillingham":"https://images.fotmob.com/image_resources/logo/teamlogo/10173.png",
 "cambridge united":"https://images.fotmob.com/image_resources/logo/teamlogo/9834.png",
 "salford city":"https://images.fotmob.com/image_resources/logo/teamlogo/282326.png",
 "colchester united":"https://images.fotmob.com/image_resources/logo/teamlogo/8416.png",
 "chesterfield":"https://images.fotmob.com/image_resources/logo/teamlogo/9786.png",
 "crewe alexandra":"https://images.fotmob.com/image_resources/logo/teamlogo/9784.png",
 "grimsby town":"https://images.fotmob.com/image_resources/logo/teamlogo/10005.png",
 "fleetwood town":"https://images.fotmob.com/image_resources/logo/teamlogo/45723.png",
 "barnet":"https://images.fotmob.com/image_resources/logo/teamlogo/8175.png",
 "tranmere rovers":"https://images.fotmob.com/image_resources/logo/teamlogo/8313.png",
 "oldham athletic":"https://images.fotmob.com/image_resources/logo/teamlogo/9785.png",
 "accrington stanley":"https://images.fotmob.com/image_resources/logo/teamlogo/8671.png",
 "barrow":"https://images.fotmob.com/image_resources/logo/teamlogo/6350.png",
 "crawley town":"https://images.fotmob.com/image_resources/logo/teamlogo/8647.png",
 "shrewsbury town":"https://images.fotmob.com/image_resources/logo/teamlogo/9896.png",
 "bristol rovers":"https://images.fotmob.com/image_resources/logo/teamlogo/10104.png",
 "cheltenham town":"https://images.fotmob.com/image_resources/logo/teamlogo/8680.png",
 "harrogate town":"https://images.fotmob.com/image_resources/logo/teamlogo/7946.png",
 "newport county":"https://images.fotmob.com/image_resources/logo/teamlogo/10262.png", 
  
  
 // Brazil Serie A
 "flamengo":"https://images.fotmob.com/image_resources/logo/teamlogo/9770.png",
 "palmeiras":"https://images.fotmob.com/image_resources/logo/teamlogo/10283.png",
 "cruzeiro":"https://images.fotmob.com/image_resources/logo/teamlogo/9781.png",
 "mirassol":"https://images.fotmob.com/image_resources/logo/teamlogo/163782.png",
 "fluminense":"https://images.fotmob.com/image_resources/logo/teamlogo/9863.png",
 "bahia":"https://images.fotmob.com/image_resources/logo/teamlogo/7877.png",
 "botafogo rj":"https://images.fotmob.com/image_resources/logo/teamlogo/8517.png",
 "sao paulo":"https://images.fotmob.com/image_resources/logo/teamlogo/10277.png",
 "red bull bragantino":"https://images.fotmob.com/image_resources/logo/teamlogo/109705.png",
 "corinthians":"https://images.fotmob.com/image_resources/logo/teamlogo/9808.png",
 "gremio":"https://images.fotmob.com/image_resources/logo/teamlogo/9769.png",
 "vasco da gama":"https://images.fotmob.com/image_resources/logo/teamlogo/10276.png",
 "atletico mg":"https://images.fotmob.com/image_resources/logo/teamlogo/10272.png",
 "santos":"https://images.fotmob.com/image_resources/logo/teamlogo/8514.png",
 "ceara":"https://images.fotmob.com/image_resources/logo/teamlogo/172341.png",
 "fortaleza":"https://images.fotmob.com/image_resources/logo/teamlogo/8287.png",
 "vitoria":"https://images.fotmob.com/image_resources/logo/teamlogo/7733.png",
 "internacional":"https://images.fotmob.com/image_resources/logo/teamlogo/8702.png",
 "juventude":"https://images.fotmob.com/image_resources/logo/teamlogo/10274.png",
 "sport recife":"https://images.fotmob.com/image_resources/logo/teamlogo/6305.png",
  
  
  //EFL Cup
 "coventry city":"https://images.fotmob.com/image_resources/logo/teamlogo/8669.png",
 "middlesbrough":"https://images.fotmob.com/image_resources/logo/teamlogo/8549.png",
 "millwall":"https://images.fotmob.com/image_resources/logo/teamlogo/10004.png",
 "ipswich town":"https://images.fotmob.com/image_resources/logo/teamlogo/9902.png",
 "preston north end":"https://images.fotmob.com/image_resources/logo/teamlogo/8411.png",
 "stoke city":"https://images.fotmob.com/image_resources/logo/teamlogo/10194.png",
 "bristol city":"https://images.fotmob.com/image_resources/logo/teamlogo/8427.png",
 "birmingham city":"https://images.fotmob.com/image_resources/logo/teamlogo/8658.png",
 "hull city":"https://images.fotmob.com/image_resources/logo/teamlogo/8667.png",
 "queens park rangers":"https://images.fotmob.com/image_resources/logo/teamlogo/10172.png",
 "southampton":"https://images.fotmob.com/image_resources/logo/teamlogo/8466.png",
 "wrexham":"https://images.fotmob.com/image_resources/logo/teamlogo/9841.png",
 "watford":"https://images.fotmob.com/image_resources/logo/teamlogo/9817.png",
 "leicester city":"https://images.fotmob.com/image_resources/logo/teamlogo/8197.png",
 "derby county":"https://images.fotmob.com/image_resources/logo/teamlogo/10170.png",
 "west bromwich albion":"https://images.fotmob.com/image_resources/logo/teamlogo/8659.png",
 "charlton athletic":"https://images.fotmob.com/image_resources/logo/teamlogo/8451.png",
 "sheffield united":"https://images.fotmob.com/image_resources/logo/teamlogo/8657.png",
 "blackburn rovers":"https://images.fotmob.com/image_resources/logo/teamlogo/8655.png",
 "swansea city":"https://images.fotmob.com/image_resources/logo/teamlogo/10003.png",
 "oxford united":"https://images.fotmob.com/image_resources/logo/teamlogo/8653.png",
 "portsmouth":"https://images.fotmob.com/image_resources/logo/teamlogo/8462.png",
 "norwich":"https://images.fotmob.com/image_resources/logo/teamlogo/9850.png",
 "sheffield wednesday":"https://images.fotmob.com/image_resources/logo/teamlogo/10163.png",
  
  
  //England One
 "cardiff":"https://images.fotmob.com/image_resources/logo/teamlogo/8344.png",
 "bradford":"https://images.fotmob.com/image_resources/logo/teamlogo/8484.png",
 "stevenage":"https://images.fotmob.com/image_resources/logo/teamlogo/10253.png",
 "lincoln ":"https://images.fotmob.com/image_resources/logo/teamlogo/8430.png",
 "stockport county":"https://images.fotmob.com/image_resources/logo/teamlogo/10007.png",
 "bolton wanderers":"https://images.fotmob.com/image_resources/logo/teamlogo/8559.png",
 "luton town":"https://images.fotmob.com/image_resources/logo/teamlogo/8346.png",
 "huddersfield town":"https://images.fotmob.com/image_resources/logo/teamlogo/9796.png",
 "a wimbledon":"https://images.fotmob.com/image_resources/logo/teamlogo/158319.png",
 "barnsley":"https://images.fotmob.com/image_resources/logo/teamlogo/8283.png",
 "wigan athletic":"https://images.fotmob.com/image_resources/logo/teamlogo/8528.png",
 "wycombe wanderers":"https://images.fotmob.com/image_resources/logo/teamlogo/8676.png",
 "leyton orient":"https://images.fotmob.com/image_resources/logo/teamlogo/8351.png",
 "rotherham united":"https://images.fotmob.com/image_resources/logo/teamlogo/8119.png",
 "northampton town":"https://images.fotmob.com/image_resources/logo/teamlogo/8651.png",
 "mansfield town":"https://images.fotmob.com/image_resources/logo/teamlogo/9818.png",
 "reading":"https://images.fotmob.com/image_resources/logo/teamlogo/9798.png",
 "doncaster rovers":"https://images.fotmob.com/image_resources/logo/teamlogo/9903.png",
 "burton albion":"https://images.fotmob.com/image_resources/logo/teamlogo/9792.png",
 "exeter city":"https://images.fotmob.com/image_resources/logo/teamlogo/9833.png",
 "peterborough united":"https://images.fotmob.com/image_resources/logo/teamlogo/8677.png",
 "blackpool":"https://images.fotmob.com/image_resources/logo/teamlogo/8483.png",
 "plymouth argyle":"https://images.fotmob.com/image_resources/logo/teamlogo/8401.png",
 "port vale":"https://images.fotmob.com/image_resources/logo/teamlogo/9799.png",
  
  
  //ISL Cup
 "mohun bagan sg":"https://images.fotmob.com/image_resources/logo/teamlogo/578651.png",
"goa":"https://images.fotmob.com/image_resources/logo/teamlogo/578650.png",
 "bengaluru":"https://images.fotmob.com/image_resources/logo/teamlogo/485935.png",
 "northeast united":"https://images.fotmob.com/image_resources/logo/teamlogo/578656.png",
 "jamshedpur":"https://images.fotmob.com/image_resources/logo/teamlogo/873038.png",
 "mumbai city":"https://images.fotmob.com/image_resources/logo/teamlogo/578655.png",
 "odisha":"https://images.fotmob.com/image_resources/logo/teamlogo/578653.png",
 "kerala blasters":"https://images.fotmob.com/image_resources/logo/teamlogo/578654.png",
 "east bengal":"https://images.fotmob.com/image_resources/logo/teamlogo/165184.png",
 "punjab":"https://images.fotmob.com/image_resources/logo/teamlogo/589749.png",
 "chennaiyin":"https://images.fotmob.com/image_resources/logo/teamlogo/578652.png",
 "sc delhi":"https://images.fotmob.com/image_resources/logo/teamlogo/1086744.png",
 "mohammedan sc":"https://images.fotmob.com/image_resources/logo/teamlogo/165187.png",

   //Turkey League
 "galatasaray":"https://images.fotmob.com/image_resources/logo/teamlogo/8637.png",
 "fenerbahce":"https://images.fotmob.com/image_resources/logo/teamlogo/8695.png",
 "trabzonspor":"https://images.fotmob.com/image_resources/logo/teamlogo/9752.png",
 "goztepe":"https://images.fotmob.com/image_resources/logo/teamlogo/1925.png",
 "samsunspor":"https://images.fotmob.com/image_resources/logo/teamlogo/9750.png",
 "besiktas":"https://images.fotmob.com/image_resources/logo/teamlogo/10188.png",
 "gaziantep fk":"https://images.fotmob.com/image_resources/logo/teamlogo/4081.png",
 "kocaelispor":"https://images.fotmob.com/image_resources/logo/teamlogo/1569.png",
 "basaksehir":"https://images.fotmob.com/image_resources/logo/teamlogo/1933.png",
 "alanyaspor":"https://images.fotmob.com/image_resources/logo/teamlogo/4678.png",
 "konyaspor":"https://images.fotmob.com/image_resources/logo/teamlogo/8622.png",
 "rizespor":"https://images.fotmob.com/image_resources/logo/teamlogo/2166.png",
 "antalyaspor":"https://images.fotmob.com/image_resources/logo/teamlogo/1931.png",
 "kasmpasa":"https://images.fotmob.com/image_resources/logo/teamlogo/4685.png",
 "eyupspor":"https://images.fotmob.com/image_resources/logo/teamlogo/4681.png",
 "kayserispor":"https://images.fotmob.com/image_resources/logo/teamlogo/10182.png",
 "genclerbirligi":"https://images.fotmob.com/image_resources/logo/teamlogo/7800.png",
 "fatih karagumruk":"https://images.fotmob.com/image_resources/logo/teamlogo/2088.png",
  
  
  //Netherland League
 "psv eindhoven":"https://images.fotmob.com/image_resources/logo/teamlogo/8640.png",
 "feyenoord":"https://images.fotmob.com/image_resources/logo/teamlogo/10235.png",
 "ajax":"https://images.fotmob.com/image_resources/logo/teamlogo/8593.png",
 "nec nijmegen":"https://images.fotmob.com/image_resources/logo/teamlogo/8464.png",
 "az alkmaar":"https://images.fotmob.com/image_resources/logo/teamlogo/10229.png",
"groningen":"https://images.fotmob.com/image_resources/logo/teamlogo/8674.png",
"utrecht":"https://images.fotmob.com/image_resources/logo/teamlogo/9908.png",
"twente":"https://images.fotmob.com/image_resources/logo/teamlogo/8611.png",
 "fortuna sittard":"https://images.fotmob.com/image_resources/logo/teamlogo/6422.png",
 "go ahead eagles":"https://images.fotmob.com/image_resources/logo/teamlogo/6433.png",
 "sparta rotterdam":"https://images.fotmob.com/image_resources/logo/teamlogo/8614.png",
 "sc heerenveen":"https://images.fotmob.com/image_resources/logo/teamlogo/10228.png",
 "excelsior":"https://images.fotmob.com/image_resources/logo/teamlogo/10218.png",
 "pec zwolle":"https://images.fotmob.com/image_resources/logo/teamlogo/6413.png",
"volendam":"https://images.fotmob.com/image_resources/logo/teamlogo/6601.png",
 "heracles":"https://images.fotmob.com/image_resources/logo/teamlogo/9791.png",
 "nac breda":"https://images.fotmob.com/image_resources/logo/teamlogo/9761.png",
 "telstar":"https://images.fotmob.com/image_resources/logo/teamlogo/6414.png",

  //liga portugal
"porto":"https://images.fotmob.com/image_resources/logo/teamlogo/9773.png",
 "sporting cp":"https://images.fotmob.com/image_resources/logo/teamlogo/9768.png",
 "benfica":"https://images.fotmob.com/image_resources/logo/teamlogo/9772.png",
 "gil vicente":"https://images.fotmob.com/image_resources/logo/teamlogo/9764.png",
 "braga":"https://images.fotmob.com/image_resources/logo/teamlogo/10264.png",
 "famalicao":"https://images.fotmob.com/image_resources/logo/teamlogo/1634.png",
 "moreirense":"https://images.fotmob.com/image_resources/logo/teamlogo/8348.png",
 "vitoria de guimaraes":"https://images.fotmob.com/image_resources/logo/teamlogo/7844.png",
 "rio ave":"https://images.fotmob.com/image_resources/logo/teamlogo/7841.png",
 "santa clara":"https://images.fotmob.com/image_resources/logo/teamlogo/1567.png",
 "alverca":"https://images.fotmob.com/image_resources/logo/teamlogo/9780.png",
 "estoril":"https://images.fotmob.com/image_resources/logo/teamlogo/7842.png",
 "nacional":"https://images.fotmob.com/image_resources/logo/teamlogo/10214.png",
 "estrela da amadora":"https://images.fotmob.com/image_resources/logo/teamlogo/1074320.png",
 "tondela":"https://images.fotmob.com/image_resources/logo/teamlogo/188163.png",
 "casa pia ac":"https://images.fotmob.com/image_resources/logo/teamlogo/212821.png",
 "arouca":"https://images.fotmob.com/image_resources/logo/teamlogo/158085.png",
 "avs futebol sad":"https://images.fotmob.com/image_resources/logo/teamlogo/1889.png",
  
  
  //liga mx
 "toluca":"https://images.fotmob.com/image_resources/logo/teamlogo/6618.png",
 "tigres":"https://images.fotmob.com/image_resources/logo/teamlogo/8561.png",
 "cruz azul":"https://images.fotmob.com/image_resources/logo/teamlogo/6578.png",
 "cf america":"https://images.fotmob.com/image_resources/logo/teamlogo/6576.png",
 "monterrey":"https://images.fotmob.com/image_resources/logo/teamlogo/7849.png",
 "chivas":"https://images.fotmob.com/image_resources/logo/teamlogo/7807.png",
 "tijuana":"https://images.fotmob.com/image_resources/logo/teamlogo/162418.png",
"juarez":"https://images.fotmob.com/image_resources/logo/teamlogo/649424.png",
 "pachuca":"https://images.fotmob.com/image_resources/logo/teamlogo/7848.png",
 "pumas":"https://images.fotmob.com/image_resources/logo/teamlogo/1946.png",
 "santos laguna":"https://images.fotmob.com/image_resources/logo/teamlogo/7857.png",
 "queretaro":"https://images.fotmob.com/image_resources/logo/teamlogo/1943.png",
 "necaxa":"https://images.fotmob.com/image_resources/logo/teamlogo/1842.png",
 "atlas":"https://images.fotmob.com/image_resources/logo/teamlogo/6577.png",
 "atletico de san luis":"https://images.fotmob.com/image_resources/logo/teamlogo/6358.png",
 "mazatlan":"https://images.fotmob.com/image_resources/logo/teamlogo/1170234.png",
 "leon":"https://images.fotmob.com/image_resources/logo/teamlogo/1841.png",
 "puebla":"https://images.fotmob.com/image_resources/logo/teamlogo/7847.png",

//UEFA 2025/26
  "arsenal": "https://images.fotmob.com/image_resources/logo/teamlogo/9825.png",
  "psg": "https://images.fotmob.com/image_resources/logo/teamlogo/9847.png",
  "inter": "https://images.fotmob.com/image_resources/logo/teamlogo/8636.png",
  "real madrid": "https://images.fotmob.com/image_resources/logo/teamlogo/8633.png",
  "borussia dortmund": "https://images.fotmob.com/image_resources/logo/teamlogo/9789.png",
  "chelsea": "https://images.fotmob.com/image_resources/logo/teamlogo/8455.png",
  "sporting cp": "https://images.fotmob.com/image_resources/logo/teamlogo/9768.png",
  "manchester city": "https://images.fotmob.com/image_resources/logo/teamlogo/8456.png",
  "atalanta": "https://images.fotmob.com/image_resources/logo/teamlogo/8524.png",
  "newcastle united": "https://images.fotmob.com/image_resources/logo/teamlogo/10261.png",
  "atletico madrid": "https://images.fotmob.com/image_resources/logo/teamlogo/9906.png",
  "liverpool": "https://images.fotmob.com/image_resources/logo/teamlogo/8650.png",
  "galatasaray": "https://images.fotmob.com/image_resources/logo/teamlogo/8637.png",
  "psv eindhoven": "https://images.fotmob.com/image_resources/logo/teamlogo/8640.png",
  "tottenham hotspur": "https://images.fotmob.com/image_resources/logo/teamlogo/8586.png",
  "bayer leverkusen": "https://images.fotmob.com/image_resources/logo/teamlogo/8178.png",
  "barcelona": "https://images.fotmob.com/image_resources/logo/teamlogo/8634.png",
  "qarabağ": "https://images.fotmob.com/image_resources/logo/teamlogo/7981.png",
  "napoli": "https://images.fotmob.com/image_resources/logo/teamlogo/9875.png",
  "marseille": "https://images.fotmob.com/image_resources/logo/teamlogo/8592.png",
  "juventus": "https://images.fotmob.com/image_resources/logo/teamlogo/9885.png",
  "monaco": "https://images.fotmob.com/image_resources/logo/teamlogo/9829.png",
  "paphos": "https://images.fotmob.com/image_resources/logo/teamlogo/2137.png",
  "union stgilloise": "https://images.fotmob.com/image_resources/logo/teamlogo/7978.png",
  "brugge": "https://images.fotmob.com/image_resources/logo/teamlogo/8342.png",
  "athletic club": "https://images.fotmob.com/image_resources/logo/teamlogo/8315.png",
  "eintracht frankfurt": "https://images.fotmob.com/image_resources/logo/teamlogo/9810.png",
  "københavn": "https://images.fotmob.com/image_resources/logo/teamlogo/8391.png",
  "benfica": "https://images.fotmob.com/image_resources/logo/teamlogo/9772.png",
  "slavia praha": "https://images.fotmob.com/image_resources/logo/teamlogo/7787.png",
  "bodø / glimt": "https://images.fotmob.com/image_resources/logo/teamlogo/8402.png",
  "olympiakos piraeus": "https://images.fotmob.com/image_resources/logo/teamlogo/8638.png",
  "villarreal": "https://images.fotmob.com/image_resources/logo/teamlogo/10205.png",
  "kairat": "https://images.fotmob.com/image_resources/logo/teamlogo/8037.png",
  "ajax": "https://images.fotmob.com/image_resources/logo/teamlogo/8593.png",
  
  
   //Arab Cup
  "palestine": "https://images.fotmob.com/image_resources/logo/teamlogo/6333.png",
  "syria": "https://images.fotmob.com/image_resources/logo/teamlogo/6320.png",
  "tunisia": "https://images.fotmob.com/image_resources/logo/teamlogo/6719.png",
  "qatar": "https://images.fotmob.com/image_resources/logo/teamlogo/5902.png",
  "saudi arabia": "https://images.fotmob.com/image_resources/logo/teamlogo/7795.png",
  "morocco": "https://images.fotmob.com/image_resources/logo/teamlogo/6262.png",
  "oman": "https://images.fotmob.com/image_resources/logo/teamlogo/5824.png",
  "comoros": "https://images.fotmob.com/image_resources/logo/teamlogo/230692.png",
  "jordan": "https://images.fotmob.com/image_resources/logo/teamlogo/5816.png",
  "egypt": "https://images.fotmob.com/image_resources/logo/teamlogo/10255.png",
  "uae": "https://images.fotmob.com/image_resources/logo/teamlogo/5789.png",
  "kuwait": "https://images.fotmob.com/image_resources/logo/teamlogo/5821.png",
  "iraq": "https://images.fotmob.com/image_resources/logo/teamlogo/5819.png",
  "algeria": "https://images.fotmob.com/image_resources/logo/teamlogo/6317.png",
  "sudan": "https://images.fotmob.com/image_resources/logo/teamlogo/5805.png",
  "bahrain": "https://images.fotmob.com/image_resources/logo/teamlogo/5901.png",
  
  // a-champions-league-elite
  "al hilal": "https://images.fotmob.com/image_resources/logo/teamlogo/2529.png",
  "al wahda": "https://images.fotmob.com/image_resources/logo/teamlogo/102122.png",
  "tractor": "https://images.fotmob.com/image_resources/logo/teamlogo/176352.png",
  "al ahli": "https://images.fotmob.com/image_resources/logo/teamlogo/2530.png",
  "shabab al ahli dubai ": "https://images.fotmob.com/image_resources/logo/teamlogo/102119.png",
  "al duhail sc": "https://images.fotmob.com/image_resources/logo/teamlogo/203826.png",
  "sharjah cultural club": "https://images.fotmob.com/image_resources/logo/teamlogo/102124.png",
  "al ittihad": "https://images.fotmob.com/image_resources/logo/teamlogo/8577.png",
  "al gharafa": "https://images.fotmob.com/image_resources/logo/teamlogo/101897.png",
  "al sadd": "https://images.fotmob.com/image_resources/logo/teamlogo/101895.png",
  "al shorta": "https://images.fotmob.com/image_resources/logo/teamlogo/101655.png",
  "nasaf qarshi": "https://images.fotmob.com/image_resources/logo/teamlogo/102153.png",
  "vissel kobe": "https://images.fotmob.com/image_resources/logo/teamlogo/4688.png",
  "melbourne city ": "https://images.fotmob.com/image_resources/logo/teamlogo/203576.png",
  "machida zelvia": "https://images.fotmob.com/image_resources/logo/teamlogo/194011.png",
  "seoul": "https://images.fotmob.com/image_resources/logo/teamlogo/92630.png",
  "sanfrecce hiroshima": "https://images.fotmob.com/image_resources/logo/teamlogo/6224.png",
  "ulsan hd ": "https://images.fotmob.com/image_resources/logo/teamlogo/133896.png",
  "johor darul tazim": "https://images.fotmob.com/image_resources/logo/teamlogo/165228.png",
  "buriram united": "https://images.fotmob.com/image_resources/logo/teamlogo/165243.png",
  "gangwon ": "https://images.fotmob.com/image_resources/logo/teamlogo/164734.png",
  "chengdu rongcheng ": "https://images.fotmob.com/image_resources/logo/teamlogo/737052.png",
  "shanghai shenhua": "https://images.fotmob.com/image_resources/logo/teamlogo/6628.png",
  "shanghai port": "https://images.fotmob.com/image_resources/logo/teamlogo/198616.png",
  
  // a-champions-league-two
  "al wasl": "https://images.fotmob.com/image_resources/logo/teamlogo/102111.png",
  "muharraq": "https://images.fotmob.com/image_resources/logo/teamlogo/101598.png",
  "esteghlal": "https://images.fotmob.com/image_resources/logo/teamlogo/101614.png",
  "al wehdat": "https://images.fotmob.com/image_resources/logo/teamlogo/101690.png",
  "al ahli": "https://images.fotmob.com/image_resources/logo/teamlogo/179097.png",
  "al khalidiyah": "https://images.fotmob.com/image_resources/logo/teamlogo/1288463.png",
  "andijon": "https://images.fotmob.com/image_resources/logo/teamlogo/102151.png",
  "arkadag": "https://images.fotmob.com/image_resources/logo/teamlogo/1689659.png",
  "sepahan": "https://images.fotmob.com/image_resources/logo/teamlogo/101611.png",
  "al hussein sc": "https://images.fotmob.com/image_resources/logo/teamlogo/101688.png",
  "ahal": "https://images.fotmob.com/image_resources/logo/teamlogo/617067.png",
  "mohun bagan sg": "https://images.fotmob.com/image_resources/logo/teamlogo/578651.png",
  "al nassr ": "https://images.fotmob.com/image_resources/logo/teamlogo/101918.png",
  "al zawraa": "https://images.fotmob.com/image_resources/logo/teamlogo/101659.png",
  "istiklol": "https://images.fotmob.com/image_resources/logo/teamlogo/606032.png",
  "goa": "https://images.fotmob.com/image_resources/logo/teamlogo/578650.png",
  "macarthur ": "https://images.fotmob.com/image_resources/logo/teamlogo/1209973.png",
  "cong ha noi": "https://images.fotmob.com/image_resources/logo/teamlogo/614354.png",
  "beijing guoan": "https://images.fotmob.com/image_resources/logo/teamlogo/4177.png",
  "tai po": "https://images.fotmob.com/image_resources/logo/teamlogo/165169.png",
  "gamba osaka": "https://images.fotmob.com/image_resources/logo/teamlogo/6582.png",
  "ratchaburi ": "https://images.fotmob.com/image_resources/logo/teamlogo/421346.png",
  "nam dinh": "https://images.fotmob.com/image_resources/logo/teamlogo/109375.png",
  "eastern sports club": "https://images.fotmob.com/image_resources/logo/teamlogo/165172.png",
  "persib bandung": "https://images.fotmob.com/image_resources/logo/teamlogo/165196.png",
  "bangkok united": "https://images.fotmob.com/image_resources/logo/teamlogo/102231.png",
  "lion city sailors ": "https://images.fotmob.com/image_resources/logo/teamlogo/67366.png",
  "selangor": "https://images.fotmob.com/image_resources/logo/teamlogo/165223.png",
  "tampines rovers ": "https://images.fotmob.com/image_resources/logo/teamlogo/67386.png",
  "pohang steelers": "https://images.fotmob.com/image_resources/logo/teamlogo/109373.png",
  "bg pathum united": "https://images.fotmob.com/image_resources/logo/teamlogo/165250.png",
  "kaya ": "https://images.fotmob.com/image_resources/logo/teamlogo/612493.png",
  
  
  /* --- England Championship --- */
 "coventry city":"https://images.fotmob.com/image_resources/logo/teamlogo/8669.png",
 "middlesbrough":"https://images.fotmob.com/image_resources/logo/teamlogo/8549.png",
 "millwall":"https://images.fotmob.com/image_resources/logo/teamlogo/10004.png",
 "preston north end":"https://images.fotmob.com/image_resources/logo/teamlogo/8411.png",
 "ipswich town":"https://images.fotmob.com/image_resources/logo/teamlogo/9902.png",
 "queens park rangers":"https://images.fotmob.com/image_resources/logo/teamlogo/10172.png",
 "qpr":"https://images.fotmob.com/image_resources/logo/teamlogo/10172.png",
 "stoke city":"https://images.fotmob.com/image_resources/logo/teamlogo/10194.png",
 "southampton":"https://images.fotmob.com/image_resources/logo/teamlogo/8466.png",
 "bristol city":"https://images.fotmob.com/image_resources/logo/teamlogo/8427.png",
 "birmingham city":"https://images.fotmob.com/image_resources/logo/teamlogo/8658.png",
 "watford":"https://images.fotmob.com/image_resources/logo/teamlogo/9817.png",
 "hull city":"https://images.fotmob.com/image_resources/logo/teamlogo/8667.png",
 "wrexham":"https://images.fotmob.com/image_resources/logo/teamlogo/9841.png",
 "leicester city":"https://images.fotmob.com/image_resources/logo/teamlogo/8197.png",
 "derby county":"https://images.fotmob.com/image_resources/logo/teamlogo/10170.png",
 "west bromwich albion":"https://images.fotmob.com/image_resources/logo/teamlogo/8659.png",
 "west brom":"https://images.fotmob.com/image_resources/logo/teamlogo/8659.png",
 "sheffield united":"https://images.fotmob.com/image_resources/logo/teamlogo/8657.png",
 "sheffield utd":"https://images.fotmob.com/image_resources/logo/teamlogo/8657.png",
 "swansea city":"https://images.fotmob.com/image_resources/logo/teamlogo/10003.png",
 "charlton athletic":"https://images.fotmob.com/image_resources/logo/teamlogo/8451.png",
 "blackburn rovers":"https://images.fotmob.com/image_resources/logo/teamlogo/8655.png",
 "oxford united":"https://images.fotmob.com/image_resources/logo/teamlogo/8653.png",
 "portsmouth":"https://images.fotmob.com/image_resources/logo/teamlogo/8462.png",
 "norwich city":"https://images.fotmob.com/image_resources/logo/teamlogo/9850.png",
 "sheffield wednesday":"https://images.fotmob.com/image_resources/logo/teamlogo/10163.png",
/* --- END NEW ENTRIES --- */


/* --- NEW SPANISH ENTRIES --- */

 "cf talavera de la reina":"https://images.fotmob.com/image_resources/logo/teamlogo/357239.png",
 "talavera":"https://images.fotmob.com/image_resources/logo/teamlogo/357239.png",
 "sd huesca":"https://images.fotmob.com/image_resources/logo/teamlogo/96925.png",
 "huesca":"https://images.fotmob.com/image_resources/logo/teamlogo/96925.png",
 "racing santander":"https://images.fotmob.com/image_resources/logo/teamlogo/8696.png",
 "racing de santander":"https://images.fotmob.com/image_resources/logo/teamlogo/8696.png",
 "atletico baleares":"https://images.fotmob.com/image_resources/logo/teamlogo/141784.png",
 "atlético baleares":"https://images.fotmob.com/image_resources/logo/teamlogo/141784.png",
 "albacete":"https://images.fotmob.com/image_resources/logo/teamlogo/8393.png",
 "albacete bp":"https://images.fotmob.com/image_resources/logo/teamlogo/8393.png",
/* --- END NEW SPANISH ENTRIES --- */

/* --- START NEW AFRICAN NATIONAL TEAM ENTRIES --- */

 "morocco":"https://images.fotmob.com/image_resources/logo/teamlogo/6262.png",
 "mali":"https://images.fotmob.com/image_resources/logo/teamlogo/5815.png",
 "zambia":"https://images.fotmob.com/image_resources/logo/teamlogo/6277.png",
 "comoros":"https://images.fotmob.com/image_resources/logo/teamlogo/230692.png",
 "angola":"https://images.fotmob.com/image_resources/logo/teamlogo/6712.png",
 "egypt":"https://images.fotmob.com/image_resources/logo/teamlogo/10255.png",
 "south africa":"https://images.fotmob.com/image_resources/logo/teamlogo/6316.png",
 "zimbabwe":"https://images.fotmob.com/image_resources/logo/teamlogo/6290.png",
 "nigeria":"https://images.fotmob.com/image_resources/logo/teamlogo/6346.png",
 "tanzania":"https://images.fotmob.com/image_resources/logo/teamlogo/7941.png",
 "tunisia":"https://images.fotmob.com/image_resources/logo/teamlogo/6719.png",
 "uganda":"https://images.fotmob.com/image_resources/logo/teamlogo/5890.png",
 "benin":"https://images.fotmob.com/image_resources/logo/teamlogo/5883.png",
 "botswana":"https://images.fotmob.com/image_resources/logo/teamlogo/5887.png",
 "dr congo":"https://images.fotmob.com/image_resources/logo/teamlogo/6321.png",
 "congo dr":"https://images.fotmob.com/image_resources/logo/teamlogo/6321.png",
 "senegal":"https://images.fotmob.com/image_resources/logo/teamlogo/6395.png",
 "algeria":"https://images.fotmob.com/image_resources/logo/teamlogo/6317.png",
 "burkina faso":"https://images.fotmob.com/image_resources/logo/teamlogo/6323.png",
 "equatorial guinea":"https://images.fotmob.com/image_resources/logo/teamlogo/8323.png",
 "sudan":"https://images.fotmob.com/image_resources/logo/teamlogo/5805.png",
 "cameroon":"https://images.fotmob.com/image_resources/logo/teamlogo/6629.png",
 "gabon":"https://images.fotmob.com/image_resources/logo/teamlogo/5889.png",
 "ivory coast":"https://images.fotmob.com/image_resources/logo/teamlogo/6709.png",
 "mozambique":"https://images.fotmob.com/image_resources/logo/teamlogo/5965.png"

/* --- END NEW AFRICAN NATIONAL TEAM ENTRIES --- */
            

}};

    function getTeamDisplay(teamName, category) {
        const cleanName = teamName.toLowerCase().trim();
        const cleanCat = category.toLowerCase();
        const isCricket = cleanCat.includes("cricket") || cleanCat.includes("ipl") || cleanCat.includes("t20");
        const sportType = isCricket ? "cricket" : "football";
        const logos = sportLogos[sportType];
        for (let key in logos) {
            if (cleanName.includes(key)) {
                return `<img src="${logos[key]}" class="team-logo-img" alt="${teamName}">`;
            }
        }
        return `<span class="team-name-text">${teamName}</span>`;
    }

    let allMatches = [], filteredMatches = [], currentPage = 1, currentCat = 'All';
    const matchesPerPage = 18;

    async function init() {
        try {
            const res = await fetch('https://yosintv-api.pages.dev/api/highlights.json');
            allMatches = await res.json();
            allMatches.sort((a, b) => new Date(b.date) - new Date(a.date));
            const params = new URLSearchParams(window.location.search);
            if (params.get('cat')) currentCat = params.get('cat');
            if (params.get('q')) searchInput.value = params.get('q');
            applyFilters();
            renderCategories();
            document.getElementById('loader').style.display = 'none';
        } catch (e) { console.error(e); }
    }

    function renderCategories() {
        const container = document.getElementById('categoryContainer');
        const cats = ['All', ...new Set(allMatches.map(m => m.category))];
        container.innerHTML = cats.map(c => `<button class="cat-btn ${c===currentCat?'active':''}" onclick="setCategory('${c}', this)">${c}</button>`).join('');
    }

    function setCategory(cat, btn) {
        document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCat = cat;
        currentPage = 1;
        applyFilters();
    }

    searchInput.addEventListener('input', () => {
        currentPage = 1;
        applyFilters();
    });

    function applyFilters() {
        const query = searchInput.value.toLowerCase().trim();
        filteredMatches = allMatches.filter(m => {
            const matchesCat = (currentCat === 'All' || m.category === currentCat);
            const matchesSearch = !query || m.team1.toLowerCase().includes(query) || m.team2.toLowerCase().includes(query);
            return matchesCat && matchesSearch;
        });
        updateDisplay();
    }

    function updateDisplay() {
        const start = (currentPage - 1) * matchesPerPage;
        const pageItems = filteredMatches.slice(start, start + matchesPerPage);
        const grid = document.getElementById('matchGrid');
        const adInterval = window.innerWidth < 992 ? 4 : 6;
        const threshold = new Date(new Date().getTime() - (2 * 24 * 60 * 60 * 1000));

        let htmlContent = "";
        pageItems.forEach((m, index) => {
            const isRecent = new Date(m.date) >= threshold;
            const isCricket = m.category.toLowerCase().includes('cricket') || m.category.toLowerCase().includes('ipl');
            const bg = m.thumbnail || (isCricket ? "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800" : "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800");

            htmlContent += `
            <div class="col">
                <div class="match-card">
                    <div class="thumb-box">
                        ${isRecent ? '<div class="recent-badge"><div class="blink-dot"></div>RECENT</div>' : ''}
                        <img src="${bg}" class="main-thumb" alt="match">
                        <div class="overlay-content">
                            <div class="team-unit">${getTeamDisplay(m.team1, m.category)}</div>
                            <div class="vs-circle">VS</div>
                            <div class="team-unit">${getTeamDisplay(m.team2, m.category)}</div>
                        </div>
                    </div>
                    <div class="card-content">
                        <span class="match-title">${m.team1} vs ${m.team2} — <b>${m.category}</b></span>
                        <div class="d-flex justify-content-between align-items-center">
                            <small class="text-muted" style="font-size: 0.72rem;"><i class="bi bi-calendar3 me-1"></i>${m.date}</small>
                            <a href="highlights.html?id=${m.id}" class="btn btn-primary btn-sm fw-bold">Watch</a>
                        </div>
                    </div>
                </div>
            </div>`;

            if ((index + 1) % adInterval === 0) {
                htmlContent += `
                <div class="ad-container">
                    <ins class="adsbygoogle" 
                         style="display:block" 
                         data-ad-client="ca-pub-5525538810839147" 
                         data-ad-slot="4345862479" 
                         data-ad-format="horizontal" 
                         data-full-width-responsive="true"></ins>
                    <script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>
                </div>`;
            }
        });

        grid.innerHTML = htmlContent;
        renderPagination();
    }

    function renderPagination() {
        const totalPages = Math.ceil(filteredMatches.length / matchesPerPage);
        const container = document.getElementById('pagination');
        container.innerHTML = '';
        if (totalPages <= 1) return;

        const maxVisible = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
        let endPage = Math.min(totalPages, startPage + maxVisible - 1);

        if (endPage - startPage < maxVisible - 1) {
            startPage = Math.max(1, endPage - maxVisible + 1);
        }

        const prevBtn = document.createElement('button');
        prevBtn.className = `page-link ${currentPage === 1 ? 'disabled' : ''}`;
        prevBtn.innerHTML = '<i class="bi bi-chevron-left"></i>';
        prevBtn.onclick = () => { if(currentPage > 1) { currentPage--; updateDisplay(); window.scrollTo({top: 0, behavior: 'smooth'}); } };
        container.appendChild(prevBtn);

        for (let i = startPage; i <= endPage; i++) {
            const btn = document.createElement('button');
            btn.className = `page-link ${i === currentPage ? 'active' : ''}`;
            btn.innerText = i;
            btn.onclick = () => { currentPage = i; updateDisplay(); window.scrollTo({top: 0, behavior: 'smooth'}); };
            container.appendChild(btn);
        }

        const nextBtn = document.createElement('button');
        nextBtn.className = `page-link ${currentPage === totalPages ? 'disabled' : ''}`;
        nextBtn.innerHTML = '<i class="bi bi-chevron-right"></i>';
        nextBtn.onclick = () => { if(currentPage < totalPages) { currentPage++; updateDisplay(); window.scrollTo({top: 0, behavior: 'smooth'}); } };
        container.appendChild(nextBtn);
    }

    window.onload = init;
