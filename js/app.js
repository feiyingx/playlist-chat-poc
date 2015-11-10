var app = angular.module('myApp', [
  'ngRoute',
  "ngSanitize",
  "com.2fdevs.videogular",
  "com.2fdevs.videogular.plugins.controls",
  "com.2fdevs.videogular.plugins.overlayplay",
  "com.2fdevs.videogular.plugins.poster"
]);

app.controller('HomeCtrl', ['$scope', '$timeout', '$sce', '$interval', '$rootScope', function($scope, $timeout, $sce, $interval, $rootScope){
  console.log('home');

  $scope.commentText = "";
  $scope.comments = []
  $scope.enterComment = function(){
    if($scope.commentText.trim() != ""){
      $scope.comments.push({
        name: "me",
        text: $scope.commentText,
        imgUrl: ""
      });

      $scope.commentText = "";

      $timeout(function(){
        updateScroll();  
      }, 300);
    }
  }

  $scope.dummyComments = [
      {
        name: "ARIANA",
        text: "Another one of my favorite videos is this track from Drake - can't stop listening :)",
        imgUrl: "https://yt3.ggpht.com/-u_W-R7bGk1c/AAAAAAAAAAI/AAAAAAAAAAA/u6lamzb3BPc/s88-c-k-no/photo.jpg"
      },
      { 
        name: "jeamanda",
        text: "Um yes water",
        imgUrl: "https://yt3.ggpht.com/-3VMBk3H7vPU/AAAAAAAAAAI/AAAAAAAAAAA/6jGP66_CMLg/s48-c-k-no/photo.jpg"
      }
     ,{ 
        name: "Deplex101",
        text: "That girl!",
        imgUrl: "https://yt3.ggpht.com/-3kiYk8iBP_g/AAAAAAAAAAI/AAAAAAAAAAA/dfv2ZSyyUbs/s48-c-k-no/photo.jpg"
      },
      { 
        name: "Deplex101",
        text: "Smooookingggggggggg",
        imgUrl: "https://yt3.ggpht.com/-ECGNqCk14Ss/AAAAAAAAAAI/AAAAAAAAAAA/1aVewEj16t8/s48-c-k-no/photo.jpg"
      },
      { 
        name: "derke",
        text: "my kind of customer service department",
        imgUrl: "https://yt3.ggpht.com/-7kGeJsrq3h0/AAAAAAAAAAI/AAAAAAAAAAA/xk5PPyhxHtA/s48-c-k-no/photo.jpg"
      }
     ,{ 
        name: "AzharB",
        text: "Walk it out",
        imgUrl: "https://yt3.ggpht.com/-zi__E7ubqiQ/AAAAAAAAAAI/AAAAAAAAAAA/fHC0DI0hOow/s48-c-k-no/photo.jpg"
      }
     ,{ 
        name: "3Haws",
        text: "hahah Drake dancing",
        imgUrl: "https://yt3.ggpht.com/-3VMBk3H7vPU/AAAAAAAAAAI/AAAAAAAAAAA/6jGP66_CMLg/s48-c-k-no/photo.jpg"
      }
     ,{ 
        name: "Zillcatyr",
        text: "So excited!",
        imgUrl: "https://yt3.ggpht.com/-RiOdvEubuQo/AAAAAAAAAAI/AAAAAAAAAAA/7XZgJOg-LzM/s48-c-k-no/photo.jpg"
      }
     ,{ 
        name: "s0ak",
        text: "LOVE THIS SONG",
        imgUrl: "https://yt3.ggpht.com/-mgT_LzBtC6g/AAAAAAAAAAI/AAAAAAAAAAA/w2Kp9qyYgis/s48-c-k-no/photo.jpg"
      }
     ,{ 
        name: "CellJr",
        text: "HOTLINGBLINGGGGGGG",
        imgUrl: "https://yt3.ggpht.com/-ECGNqCk14Ss/AAAAAAAAAAI/AAAAAAAAAAA/1aVewEj16t8/s48-c-k-no/photo.jpg"
      }
     ,{ 
        name: "ronnieMc",
        text: "Drake be dancing",
        imgUrl: "https://yt3.ggpht.com/-3kiYk8iBP_g/AAAAAAAAAAI/AAAAAAAAAAA/dfv2ZSyyUbs/s48-c-k-no/photo.jpg"
      },
      {
        name: "ARIANA",
        text: "Can we all please dance like Drake right now",
        imgUrl: "https://yt3.ggpht.com/-u_W-R7bGk1c/AAAAAAAAAAI/AAAAAAAAAAA/u6lamzb3BPc/s88-c-k-no/photo.jpg"
      },
     ,{ 
        name: "HooDini",
        text: "What is he doing",
        imgUrl: "https://yt3.ggpht.com/-3VMBk3H7vPU/AAAAAAAAAAI/AAAAAAAAAAA/6jGP66_CMLg/s48-c-k-no/photo.jpg"
      }
     ,{ 
        name: "garza",
        text: "Can't stand this awkward dancing fool that why I DISSED HIM.",
        imgUrl: "https://yt3.ggpht.com/-7kGeJsrq3h0/AAAAAAAAAAI/AAAAAAAAAAA/xk5PPyhxHtA/s48-c-k-no/photo.jpg"
      }
     ,{ 
        name: "samir",
        text: "I love this elevator music, it's got such a sick beat over it.",
        imgUrl: "https://yt3.ggpht.com/-3kiYk8iBP_g/AAAAAAAAAAI/AAAAAAAAAAA/dfv2ZSyyUbs/s48-c-k-no/photo.jpg"
      }
     ,{ 
        name: "the_deep_bassist",
        text: "Even if Drake was my dad i would still be embarrassed to bring him to school dances",
        imgUrl: "https://yt3.ggpht.com/-RiOdvEubuQo/AAAAAAAAAAI/AAAAAAAAAAA/7XZgJOg-LzM/s48-c-k-no/photo.jpg"
      }
     ,{ 
        name: "match_stick",
        text: "me too",
        imgUrl: "https://yt3.ggpht.com/-3VMBk3H7vPU/AAAAAAAAAAI/AAAAAAAAAAA/6jGP66_CMLg/s48-c-k-no/photo.jpg"
      }
     ,{ 
        name: "Sahni",
        text: "music classes he would be the bomb",
        imgUrl: "https://yt3.ggpht.com/-ECGNqCk14Ss/AAAAAAAAAAI/AAAAAAAAAAA/1aVewEj16t8/s48-c-k-no/photo.jpg"
      }
     ,{ 
        name: "Augustin",
        text: "who brings there dad to school dances?",
        imgUrl: "https://yt3.ggpht.com/-7kGeJsrq3h0/AAAAAAAAAAI/AAAAAAAAAAA/xk5PPyhxHtA/s48-c-k-no/photo.jpg"
      }
     ,{ 
        name: "KyleWright",
        text: "LMFAO",
        imgUrl: "https://yt3.ggpht.com/-3kiYk8iBP_g/AAAAAAAAAAI/AAAAAAAAAAA/dfv2ZSyyUbs/s48-c-k-no/photo.jpg"
      }
     ,{ 
        name: "Rondadore",
        text: "Drake is that type of guy that actually does the class's reading assignment homework",
        imgUrl: "https://yt3.ggpht.com/-3VMBk3H7vPU/AAAAAAAAAAI/AAAAAAAAAAA/6jGP66_CMLg/s48-c-k-no/photo.jpg"
      }
     ,{ 
        name: "NoahSayles",
        text: "….",
        imgUrl: "https://yt3.ggpht.com/-RiOdvEubuQo/AAAAAAAAAAI/AAAAAAAAAAA/7XZgJOg-LzM/s48-c-k-no/photo.jpg"
      }
     ,{ 
        name: "KyleWright",
        text: "Drake... Making it okay for white guys to dance to his songs since 2015.",
        imgUrl: "https://yt3.ggpht.com/-zi__E7ubqiQ/AAAAAAAAAAI/AAAAAAAAAAA/fHC0DI0hOow/s48-c-k-no/photo.jpg"
      }
     ,{ 
        name: "audiopablo",
        text: "first time seeing the actual video after all the memes! lol cant take it seriously now",
        imgUrl: "https://yt3.ggpht.com/-3VMBk3H7vPU/AAAAAAAAAAI/AAAAAAAAAAA/6jGP66_CMLg/s48-c-k-no/photo.jpg"
      }
     ,{ 
        name: "keepit",
        text: "this shit issss ffffiire",
        imgUrl: "https://yt3.ggpht.com/-7kGeJsrq3h0/AAAAAAAAAAI/AAAAAAAAAAA/xk5PPyhxHtA/s48-c-k-no/photo.jpg"
      }
     ,{ 
        name: "jermGreen",
        text: "Somehow He reminds me of Ross from friends",
        imgUrl: "https://yt3.ggpht.com/-3kiYk8iBP_g/AAAAAAAAAAI/AAAAAAAAAAA/dfv2ZSyyUbs/s48-c-k-no/photo.jpg"
      }
     ,{ 
        name: "phile",
        text: "his dancing and this whole video is pissing me off and i dont even know why",
        imgUrl: "https://yt3.ggpht.com/-mgT_LzBtC6g/AAAAAAAAAAI/AAAAAAAAAAA/w2Kp9qyYgis/s48-c-k-no/photo.jpg"
      },
      {
        name: "ARIANA",
        text: "I listen to this track almost every day",
        imgUrl: "https://yt3.ggpht.com/-u_W-R7bGk1c/AAAAAAAAAAI/AAAAAAAAAAA/u6lamzb3BPc/s88-c-k-no/photo.jpg"
      }
     ,{ 
        name: "blingBLING",
        text: "Carlton called he wants his dance moves back",
        imgUrl: "https://yt3.ggpht.com/-7kGeJsrq3h0/AAAAAAAAAAI/AAAAAAAAAAA/xk5PPyhxHtA/s48-c-k-no/photo.jpg"
      }
     ,{ 
        name: "zori",
        text: "Best comment ever.",
        imgUrl: "https://yt3.ggpht.com/-It_cgWS8qtI/AAAAAAAAAAI/AAAAAAAAAAA/89UXTEwlc00/s32-c-k-no/photo.jpg"
      }
     ,{ 
        name: "msproof",
        text: "Hahahaha",
        imgUrl: "https://yt3.ggpht.com/-RiOdvEubuQo/AAAAAAAAAAI/AAAAAAAAAAA/7XZgJOg-LzM/s48-c-k-no/photo.jpg"
      }
     ,{ 
        name: "sammystripes",
        text: "this song hypnotizes me",
        imgUrl: "https://yt3.ggpht.com/-3VMBk3H7vPU/AAAAAAAAAAI/AAAAAAAAAAA/6jGP66_CMLg/s48-c-k-no/photo.jpg"
      }
     ,{ 
        name: "aiman",
        text: "Drake my sister said that your dance moves suck",
        imgUrl: "https://yt3.ggpht.com/-3kiYk8iBP_g/AAAAAAAAAAI/AAAAAAAAAAA/dfv2ZSyyUbs/s48-c-k-no/photo.jpg"
      }
     ,{ 
        name: "mariobro",
        text: "Drakes king🙏",
        imgUrl: "https://yt3.ggpht.com/-mgT_LzBtC6g/AAAAAAAAAAI/AAAAAAAAAAA/w2Kp9qyYgis/s48-c-k-no/photo.jpg"
      }
     ,{ 
        name: "RazaK",
        text: "he's dancing bachata lol",
        imgUrl: "https://yt3.ggpht.com/-7kGeJsrq3h0/AAAAAAAAAAI/AAAAAAAAAAA/xk5PPyhxHtA/s48-c-k-no/photo.jpg"
      },
      {
        name: "ARIANA",
        text: "Get it Drake",
        imgUrl: "https://yt3.ggpht.com/-u_W-R7bGk1c/AAAAAAAAAAI/AAAAAAAAAAA/u6lamzb3BPc/s88-c-k-no/photo.jpg"
      }
     ,{ 
        name: "rebJulia",
        text: "Does anybody actually listen to the lyrics",
        imgUrl: "https://yt3.ggpht.com/-zi__E7ubqiQ/AAAAAAAAAAI/AAAAAAAAAAA/fHC0DI0hOow/s48-c-k-no/photo.jpg"
      }
     ,{ 
        name: "miller_time",
        text: "Your dance is fucking perfect dude:D",
        imgUrl: "https://yt3.ggpht.com/-mgT_LzBtC6g/AAAAAAAAAAI/AAAAAAAAAAA/w2Kp9qyYgis/s48-c-k-no/photo.jpg"
      }
     ,{ 
        name: "bherman",
        text: "I think hes a part time salsa dancer",
        imgUrl: "https://yt3.ggpht.com/-g87HOKfVw-E/AAAAAAAAAAI/AAAAAAAAAAA/vLxrWw15JfA/s48-c-k-no/photo.jpg"
      }
     ,{ 
        name: "wapachee",
        text: "mmhmmm",
        imgUrl: "https://yt3.ggpht.com/-It_cgWS8qtI/AAAAAAAAAAI/AAAAAAAAAAA/89UXTEwlc00/s32-c-k-no/photo.jpg"
      }
     ,{ 
        name: "gooooooooo",
        text: "Get it Drake",
        imgUrl: "https://yt3.ggpht.com/-7kGeJsrq3h0/AAAAAAAAAAI/AAAAAAAAAAA/xk5PPyhxHtA/s48-c-k-no/photo.jpg"
      },
      { 
        name: "Genesis",
        text: "take that dance to da club",
        imgUrl: "https://yt3.ggpht.com/-3kiYk8iBP_g/AAAAAAAAAAI/AAAAAAAAAAA/dfv2ZSyyUbs/s48-c-k-no/photo.jpg"
      },
      { 
        name: "Benitez",
        text: "i'm in love WITH DIS SONG",
        imgUrl: "https://yt3.ggpht.com/-RiOdvEubuQo/AAAAAAAAAAI/AAAAAAAAAAA/7XZgJOg-LzM/s48-c-k-no/photo.jpg"
      },
      { 
        name: "droidV",
        text: "STILL DA BEST",
        imgUrl: "https://yt3.ggpht.com/-7kGeJsrq3h0/AAAAAAAAAAI/AAAAAAAAAAA/xk5PPyhxHtA/s48-c-k-no/photo.jpg"
      },
      { 
        name: "simba",
        text: "I can listen to this all night",
        imgUrl: "https://yt3.ggpht.com/-It_cgWS8qtI/AAAAAAAAAAI/AAAAAAAAAAA/89UXTEwlc00/s32-c-k-no/photo.jpg"
      },
      {
        name: "ARIANA",
        text: "This jam is on my playlist",
        imgUrl: "https://yt3.ggpht.com/-u_W-R7bGk1c/AAAAAAAAAAI/AAAAAAAAAAA/u6lamzb3BPc/s88-c-k-no/photo.jpg"
      },
      { 
        name: "yunG",
        text: "best mv of 2015",
        imgUrl: "https://yt3.ggpht.com/-g87HOKfVw-E/AAAAAAAAAAI/AAAAAAAAAAA/vLxrWw15JfA/s48-c-k-no/photo.jpg"
      },
      { 
        name: "nessa",
        text: "LOL",
        imgUrl: "https://yt3.ggpht.com/-ECGNqCk14Ss/AAAAAAAAAAI/AAAAAAAAAAA/1aVewEj16t8/s48-c-k-no/photo.jpg"
      },
      { 
        name: "rivera",
        text: "hahahaha",
        imgUrl: "https://yt3.ggpht.com/-3kiYk8iBP_g/AAAAAAAAAAI/AAAAAAAAAAA/dfv2ZSyyUbs/s48-c-k-no/photo.jpg"
      },
      { 
        name: "mirtha",
        text: "I DANCE JUST LIKE HIM",
        imgUrl: "https://yt3.ggpht.com/-RiOdvEubuQo/AAAAAAAAAAI/AAAAAAAAAAA/7XZgJOg-LzM/s48-c-k-no/photo.jpg"
      },
      { 
        name: "Villegas",
        text: "dancing like a real man",
        imgUrl: "https://yt3.ggpht.com/-It_cgWS8qtI/AAAAAAAAAAI/AAAAAAAAAAA/89UXTEwlc00/s32-c-k-no/photo.jpg"
      },
      { 
        name: "carlos",
        text: "Reminds me of my girlfriend",
        imgUrl: "https://yt3.ggpht.com/-7kGeJsrq3h0/AAAAAAAAAAI/AAAAAAAAAAA/xk5PPyhxHtA/s48-c-k-no/photo.jpg"
      },
      { 
        name: "beautybb",
        text: "someone call me on my cellphone",
        imgUrl: "https://yt3.ggpht.com/-mgT_LzBtC6g/AAAAAAAAAAI/AAAAAAAAAAA/w2Kp9qyYgis/s48-c-k-no/photo.jpg"
      },
      { 
        name: "steff",
        text: "sickkkkk beat",
        imgUrl: "https://yt3.ggpht.com/-g87HOKfVw-E/AAAAAAAAAAI/AAAAAAAAAAA/vLxrWw15JfA/s48-c-k-no/photo.jpg"
      },
      { 
        name: "bbyou",
        text: "DRAKE DRAKE DRAKE",
        imgUrl: "https://yt3.ggpht.com/-RiOdvEubuQo/AAAAAAAAAAI/AAAAAAAAAAA/7XZgJOg-LzM/s48-c-k-no/photo.jpg"
      },
      { 
        name: "minama",
        text: "im your biggest fan",
        imgUrl: "https://yt3.ggpht.com/-ECGNqCk14Ss/AAAAAAAAAAI/AAAAAAAAAAA/1aVewEj16t8/s48-c-k-no/photo.jpg"
      },
      { 
        name: "kimmy",
        text: "ME TOO",
        imgUrl: "https://yt3.ggpht.com/-zi__E7ubqiQ/AAAAAAAAAAI/AAAAAAAAAAA/fHC0DI0hOow/s48-c-k-no/photo.jpg"
      },
      { 
        name: "gregleef",
        text: "go hard or go home drake!",
        imgUrl: "https://yt3.ggpht.com/-3kiYk8iBP_g/AAAAAAAAAAI/AAAAAAAAAAA/dfv2ZSyyUbs/s48-c-k-no/photo.jpg"
      },
      {
        name: "ARIANA",
        text: "I know I can always get down with a Drake jam",
        imgUrl: "https://yt3.ggpht.com/-u_W-R7bGk1c/AAAAAAAAAAI/AAAAAAAAAAA/u6lamzb3BPc/s88-c-k-no/photo.jpg"
      },
      { 
        name: "catty",
        text: "keep it up please",
        imgUrl: "https://yt3.ggpht.com/-mgT_LzBtC6g/AAAAAAAAAAI/AAAAAAAAAAA/w2Kp9qyYgis/s48-c-k-no/photo.jpg"
      },
      { 
        name: "sunny",
        text: "I LOVE YOU DRAKE",
        imgUrl: "https://yt3.ggpht.com/-RiOdvEubuQo/AAAAAAAAAAI/AAAAAAAAAAA/7XZgJOg-LzM/s48-c-k-no/photo.jpg"
      },
      { 
        name: "AMERI",
        text: "this dance is UH MAY ZING",
        imgUrl: "https://yt3.ggpht.com/-It_cgWS8qtI/AAAAAAAAAAI/AAAAAAAAAAA/89UXTEwlc00/s32-c-k-no/photo.jpg"
      },
      { 
        name: "cane",
        text: "lyrics are off the hook",
        imgUrl: "https://yt3.ggpht.com/-g87HOKfVw-E/AAAAAAAAAAI/AAAAAAAAAAA/vLxrWw15JfA/s48-c-k-no/photo.jpg"
      },
      { 
        name: "candy",
        text: "i know right",
        imgUrl: "https://yt3.ggpht.com/-zi__E7ubqiQ/AAAAAAAAAAI/AAAAAAAAAAA/fHC0DI0hOow/s48-c-k-no/photo.jpg"
      },
      { 
        name: "lupis",
        text: "what's up with the dance moves",
        imgUrl: "https://yt3.ggpht.com/-3kiYk8iBP_g/AAAAAAAAAAI/AAAAAAAAAAA/dfv2ZSyyUbs/s48-c-k-no/photo.jpg"
      },
      { 
        name: "colleen",
        text: "love this mv",
        imgUrl: "https://yt3.ggpht.com/-RiOdvEubuQo/AAAAAAAAAAI/AAAAAAAAAAA/7XZgJOg-LzM/s48-c-k-no/photo.jpg"
      },
      { 
        name: "meryl",
        text: "is drake trolling us??",
        imgUrl: "https://yt3.ggpht.com/-It_cgWS8qtI/AAAAAAAAAAI/AAAAAAAAAAA/89UXTEwlc00/s32-c-k-no/photo.jpg"
      },
      { 
        name: "xxLOVExx",
        text: "I can't stop watching this!!!!",
        imgUrl: "https://yt3.ggpht.com/-j3-P1RNabvQ/AAAAAAAAAAI/AAAAAAAAAAA/NPIg3eKuqMA/s48-c-k-no/photo.jpg"
      },
      { 
        name: "kisses",
        text: "me too!",
        imgUrl: "https://yt3.ggpht.com/-zi__E7ubqiQ/AAAAAAAAAAI/AAAAAAAAAAA/fHC0DI0hOow/s48-c-k-no/photo.jpg"
      },
      { 
        name: "oxoxox",
        text: "me three...",
        imgUrl: "https://yt3.ggpht.com/-DKNAtCrMX1M/AAAAAAAAAAI/AAAAAAAAAAA/3Gw1ADEf9eQ/s48-c-k-no/photo.jpg"
      },
      { 
        name: "popopo",
        text: "He is so hot",
        imgUrl: "https://yt3.ggpht.com/-RiOdvEubuQo/AAAAAAAAAAI/AAAAAAAAAAA/7XZgJOg-LzM/s48-c-k-no/photo.jpg"
      },
      { 
        name: "tyHIL",
        text: "60 million views in 2 weeks!!!!",
        imgUrl: "https://yt3.ggpht.com/-mgT_LzBtC6g/AAAAAAAAAAI/AAAAAAAAAAA/w2Kp9qyYgis/s48-c-k-no/photo.jpg"
      },
      { 
        name: "asdfa",
        text: "SENSATIONAL",
        imgUrl: "https://yt3.ggpht.com/-DppO3i0VU9A/AAAAAAAAAAI/AAAAAAAAAAA/SWVhTVsSmk8/s48-c-k-no/photo.jpg"
      },
      { 
        name: "dolfo",
        text: "call me now",
        imgUrl: "https://yt3.ggpht.com/-It_cgWS8qtI/AAAAAAAAAAI/AAAAAAAAAAA/89UXTEwlc00/s32-c-k-no/photo.jpg"
      },
      { 
        name: "miranda",
        text: "best song",
        imgUrl: "https://yt3.ggpht.com/-7kGeJsrq3h0/AAAAAAAAAAI/AAAAAAAAAAA/xk5PPyhxHtA/s48-c-k-no/photo.jpg"
      },
      { 
        name: "yyx",
        text: "+1",
        imgUrl: "https://yt3.ggpht.com/-g87HOKfVw-E/AAAAAAAAAAI/AAAAAAAAAAA/vLxrWw15JfA/s48-c-k-no/photo.jpg"
      },
      { 
        name: "shinta",
        text: "I love this song",
        imgUrl: "https://yt3.ggpht.com/-W1Nu5atas9Q/AAAAAAAAAAI/AAAAAAAAAAA/PrTn3zD_YWU/s48-c-k-no/photo.jpg"
      },
      { 
        name: "chaogod",
        text: "This is too funny LOL",
        imgUrl: "https://yt3.ggpht.com/-3kiYk8iBP_g/AAAAAAAAAAI/AAAAAAAAAAA/dfv2ZSyyUbs/s48-c-k-no/photo.jpg"
      },
      { 
        name: "powpowpow",
        text: "best dance of the year",
        imgUrl: "https://yt3.ggpht.com/-mgT_LzBtC6g/AAAAAAAAAAI/AAAAAAAAAAA/w2Kp9qyYgis/s48-c-k-no/photo.jpg"
      },
      { 
        name: "ekard",
        text: "omg drake!",
        imgUrl: "https://yt3.ggpht.com/-RiOdvEubuQo/AAAAAAAAAAI/AAAAAAAAAAA/7XZgJOg-LzM/s48-c-k-no/photo.jpg"
      },
      { 
        name: "goDrake",
        text: "haters gon hate",
        imgUrl: "https://yt3.ggpht.com/-It_cgWS8qtI/AAAAAAAAAAI/AAAAAAAAAAA/89UXTEwlc00/s32-c-k-no/photo.jpg"
      },
      { 
        name: "danceMaster",
        text: "can someone teach me dis dance",
        imgUrl: "https://yt3.ggpht.com/-g87HOKfVw-E/AAAAAAAAAAI/AAAAAAAAAAA/vLxrWw15JfA/s48-c-k-no/photo.jpg"
      },
      { 
        name: "lollers",
        text: "HAHAHAHA",
        imgUrl: "https://yt3.ggpht.com/-7kGeJsrq3h0/AAAAAAAAAAI/AAAAAAAAAAA/xk5PPyhxHtA/s48-c-k-no/photo.jpg"
      },
      { 
        name: "mickyD",
        text: "I'm loving it",
        imgUrl: "https://yt3.ggpht.com/-mgT_LzBtC6g/AAAAAAAAAAI/AAAAAAAAAAA/w2Kp9qyYgis/s48-c-k-no/photo.jpg"
      },
      { 
        name: "kacak",
        text: "*Ba ba ba ba ba",
        imgUrl: "https://yt3.ggpht.com/-3kiYk8iBP_g/AAAAAAAAAAI/AAAAAAAAAAA/dfv2ZSyyUbs/s48-c-k-no/photo.jpg"
      },
      { 
        name: "gabby",
        text: "Drake please read my comments, I'm your biggest fan!",
        imgUrl: "https://yt3.ggpht.com/-RiOdvEubuQo/AAAAAAAAAAI/AAAAAAAAAAA/7XZgJOg-LzM/s48-c-k-no/photo.jpg"
      },
      { 
        name: "Kea",
        text: "Drake MVP",
        imgUrl: "https://yt3.ggpht.com/-It_cgWS8qtI/AAAAAAAAAAI/AAAAAAAAAAA/89UXTEwlc00/s32-c-k-no/photo.jpg"
      },
      { name: "vegas",
        text: "if only m.mills can dance like this...",
        imgUrl: "https://yt3.ggpht.com/-It_cgWS8qtI/AAAAAAAAAAI/AAAAAAAAAAA/89UXTEwlc00/s32-c-k-no/photo.jpg"
      },
      { 
        name: "carlos",
        text: "teach me how to drake!",
        imgUrl: "https://yt3.ggpht.com/-7kGeJsrq3h0/AAAAAAAAAAI/AAAAAAAAAAA/xk5PPyhxHtA/s48-c-k-no/photo.jpg"
      },
      { 
        name: "beautybb",
        text: "Drake is the cutest",
        imgUrl: "https://yt3.ggpht.com/-mgT_LzBtC6g/AAAAAAAAAAI/AAAAAAAAAAA/w2Kp9qyYgis/s48-c-k-no/photo.jpg"
      },
      { 
        name: "steff",
        text: "this sounds like another song",
        imgUrl: "https://yt3.ggpht.com/-g87HOKfVw-E/AAAAAAAAAAI/AAAAAAAAAAA/vLxrWw15JfA/s48-c-k-no/photo.jpg"
      },
      { 
        name: "bbyou",
        text: "holla at my drake nation",
        imgUrl: "https://yt3.ggpht.com/-RiOdvEubuQo/AAAAAAAAAAI/AAAAAAAAAAA/7XZgJOg-LzM/s48-c-k-no/photo.jpg"
      },
      { 
        name: "minama",
        text: "hands in the airrrrrrrr",
        imgUrl: "https://yt3.ggpht.com/-ECGNqCk14Ss/AAAAAAAAAAI/AAAAAAAAAAA/1aVewEj16t8/s48-c-k-no/photo.jpg"
      },
      { 
        name: "oxoxox",
        text: "marry me drake",
        imgUrl: "https://yt3.ggpht.com/-DKNAtCrMX1M/AAAAAAAAAAI/AAAAAAAAAAA/3Gw1ADEf9eQ/s48-c-k-no/photo.jpg"
      },
      { 
        name: "popopo",
        text: "marry ME!",
        imgUrl: "https://yt3.ggpht.com/-RiOdvEubuQo/AAAAAAAAAAI/AAAAAAAAAAA/7XZgJOg-LzM/s48-c-k-no/photo.jpg"
      },
      { 
        name: "tyHIL",
        text: "please put this song on repeat",
        imgUrl: "https://yt3.ggpht.com/-mgT_LzBtC6g/AAAAAAAAAAI/AAAAAAAAAAA/w2Kp9qyYgis/s48-c-k-no/photo.jpg"
      },
      { 
        name: "dolfo",
        text: "drake is aight",
        imgUrl: "https://yt3.ggpht.com/-It_cgWS8qtI/AAAAAAAAAAI/AAAAAAAAAAA/89UXTEwlc00/s32-c-k-no/photo.jpg"
      },
      { 
        name: "miranda",
        text: "LOVE YOU DRAKE <3",
        imgUrl: "https://yt3.ggpht.com/-7kGeJsrq3h0/AAAAAAAAAAI/AAAAAAAAAAA/xk5PPyhxHtA/s48-c-k-no/photo.jpg"
      },
      { 
        name: "shinta",
        text: ":):)",
        imgUrl: "https://yt3.ggpht.com/-W1Nu5atas9Q/AAAAAAAAAAI/AAAAAAAAAAA/PrTn3zD_YWU/s48-c-k-no/photo.jpg"
      }
  ];

  var commentIndex = 0;

  function insertComment(){
    if(commentIndex < $scope.dummyComments.length){
      var c = $scope.dummyComments[commentIndex];
      $scope.comments.push(c);
      commentIndex++;

      $timeout(function(){
        updateScroll();  
      }, 300);
    }
  }
  // $timeout(function(){
  //   $scope.comments.push({text: 'hi3'})
  // }, 1000);

  $interval(insertComment2, 2500 + Math.floor(Math.random()*1000));


  var commentIndex2 = 0;
  function insertComment2(){
    if(commentIndex2 < arianaComments.length){
      var c = arianaComments[commentIndex2];
      $scope.comments.push(c);
      commentIndex2++;

      $timeout(function(){
        updateScroll();  
      }, 300);
    }
  }

  $rootScope.$on('video:ended', function(){
    $interval(insertComment, 3000);
  });
}]);

app.directive('videoPlayer', ['$sce', '$timeout', '$rootScope', function($sce, $timeout, $rootScope){
  return {
    restrict: 'E',
    scope: {
      videos: '@'
    },
    templateUrl: 'views/videoPlayer.html',
    link: function($scope, $element, $attr, $ctrl){
      $rootScope.videos = [
        {
          title: "Ariana Grande",
          artist: "Focus",
          imgUrl: "https://yt3.ggpht.com/-u_W-R7bGk1c/AAAAAAAAAAI/AAAAAAAAAAA/u6lamzb3BPc/s88-c-k-no/photo.jpg",
          videoUrl: "http://h264-aws.vevo.com/v3/h264/2015/10/USUV71503192/4a35e8aa-8595-40f9-8447-a823ee6c2578/usuv71503192_med_480x360_h264_500_aac_128.mp4"
        },
        {
          title: "Hotline Bling",
          artist: "Drake",
          imgUrl: "https://yt3.ggpht.com/-lTFlcA9Q0nQ/AAAAAAAAAAI/AAAAAAAAAAA/E2qB72L4zmY/s88-c-k-no/photo.jpg",
          videoUrl: "http://h264-aws.vevo.com/v3/h264/2015/10/USCMV1500030/3521a00a-c3ed-4ebf-adc0-9f271a368d9a/uscmv1500030_med_480x360_h264_500_aac_128.mp4"
        }
      ];
      $rootScope.videoIndex = 0

      $scope.videoUrl = $sce.trustAsResourceUrl($rootScope.videos[$rootScope.videoIndex].videoUrl);
      $scope.video = $rootScope.videos[$rootScope.videoIndex];

      // note: $element is our html5 video
      var videoElt = $element.find("video");

      videoElt.bind('ended', function(){
        $rootScope.$emit('video:ended');
        // jump to next video
      });

      $rootScope.$on('video:ended', function(){
        console.log('vid end');
        var vidIndex = ++$rootScope.videoIndex;
        if(vidIndex < $rootScope.videos.length){
          $timeout(function(){
            var vid = $rootScope.videos[vidIndex];
            $scope.videoUrl = $sce.trustAsResourceUrl(vid.videoUrl);
            $scope.video = vid;
          })
        }
      });
      
    }
  };
}]);

function updateScroll(){
    var element = document.getElementById("commentContainer");
    element.scrollTop = element.scrollHeight+10;
}

var arianaComments = [
{
  name: "ARIANA",
  text: "Hey guys, this is Ariana - so happy to be watching my video with you guys!",
  imgUrl: "https://yt3.ggpht.com/-u_W-R7bGk1c/AAAAAAAAAAI/AAAAAAAAAAA/u6lamzb3BPc/s88-c-k-no/photo.jpg"
},
{ 
  name: "rewob",
  text: "You're the best!",
  imgUrl: "https://yt3.ggpht.com/--4tDedWv-_Y/AAAAAAAAAAI/AAAAAAAAAAA/jscQgQTDAww/s48-c-k-no/photo.jpg"
},
{ 
  name: "grandefan",
  text: "Dang those lips tho",
  imgUrl: "https://yt3.ggpht.com/-7RZuzyPjHXE/AAAAAAAAAAI/AAAAAAAAAAA/HqZ8MraA7as/s48-c-k-no/photo.jpg"
},
{ 
  name: "gruntfile",
  text: "oooh promotion of the phone",
  imgUrl: "https://yt3.ggpht.com/-8BktrAxfsJw/AAAAAAAAAAI/AAAAAAAAAAA/WdZibrBm59I/s48-c-k-no/photo.jpg"
},
{ 
  name: "videogular",
  text: "Sing it girl",
  imgUrl: "https://yt3.ggpht.com/-_ndPHIgkflg/AAAAAAAAAAI/AAAAAAAAAAA/LkIXLncBCcQ/s48-c-k-no/photo.jpg"
},
{ 
  name: "Bower",
  text: "I like this song",
  imgUrl: "https://yt3.ggpht.com/-4YtYnbyyGRw/AAAAAAAAAAI/AAAAAAAAAAA/2El6m9DJ2Tg/s48-c-k-no/photo.jpg"
},
{ 
  name: "Giti",
  text: "Ariana looks great",
  imgUrl: "https://yt3.ggpht.com/--4tDedWv-_Y/AAAAAAAAAAI/AAAAAAAAAAA/jscQgQTDAww/s48-c-k-no/photo.jpg"
},
{ 
  name: "nGnore",
  text: "WTF is up with her hair",
  imgUrl: "https://yt3.ggpht.com/-7RZuzyPjHXE/AAAAAAAAAAI/AAAAAAAAAAA/HqZ8MraA7as/s48-c-k-no/photo.jpg"
},
{ 
  name: "maxDe",
  text: "I like the circles",
  imgUrl: "https://yt3.ggpht.com/-3VMBk3H7vPU/AAAAAAAAAAI/AAAAAAAAAAA/6jGP66_CMLg/s48-c-k-no/photo.jpg"
},
{ 
  name: "pckg",
  text: "I’m definitely focused",
  imgUrl: "https://yt3.ggpht.com/-_ndPHIgkflg/AAAAAAAAAAI/AAAAAAAAAAA/LkIXLncBCcQ/s48-c-k-no/photo.jpg"
},
{ 
  name: "vgPlay",
  text: "This is what Ariana will look like when she gets old",
  imgUrl: "https://yt3.ggpht.com/-tJHSvVrazpw/AAAAAAAAAAI/AAAAAAAAAAA/rJMR5LuWRXg/s48-c-k-no/photo.jpg"
},
{ 
  name: "haNore",
  text: "hahahaha",
  imgUrl: "https://yt3.ggpht.com/-4YtYnbyyGRw/AAAAAAAAAAI/AAAAAAAAAAA/2El6m9DJ2Tg/s48-c-k-no/photo.jpg"
},
{ 
  name: "indexNPM",
  text: "FLAWLESS",
  imgUrl: "https://yt3.ggpht.com/-Qvcvaz3Je0U/AAAAAAAAAAI/AAAAAAAAAAA/aQbob1v7AfE/s48-c-k-no/photo.jpg"
},
{ 
  name: "rewob",
  text: "You're such an amazing vocalist",
  imgUrl: "https://yt3.ggpht.com/--4tDedWv-_Y/AAAAAAAAAAI/AAAAAAAAAAA/jscQgQTDAww/s48-c-k-no/photo.jpg"
},
{
  name: "ARIANA",
  text: "Thanks guys! I really loved shooting this video",
  imgUrl: "https://yt3.ggpht.com/-u_W-R7bGk1c/AAAAAAAAAAI/AAAAAAAAAAA/u6lamzb3BPc/s88-c-k-no/photo.jpg"
},
{ 
  name: "raceCAR",
  text: "Ariana don’t let fame change you",
  imgUrl: "https://yt3.ggpht.com/-_ndPHIgkflg/AAAAAAAAAAI/AAAAAAAAAAA/LkIXLncBCcQ/s48-c-k-no/photo.jpg"
},
{ 
  name: "cutieX",
  text: "I am so obsessed with this song it is stuck in my head",
  imgUrl: "https://yt3.ggpht.com/-4YtYnbyyGRw/AAAAAAAAAAI/AAAAAAAAAAA/2El6m9DJ2Tg/s48-c-k-no/photo.jpg"
},
{ 
  name: "over_you",
  text: "I’m digging this space theme",
  imgUrl: "https://yt3.ggpht.com/-NJdKh2Q9vBY/AAAAAAAAAAI/AAAAAAAAAAA/XZ5ZUrTU4hI/s48-c-k-no/photo.jpg"
},
{ 
  name: "licenseToKill",
  text: "Ariana, you outshine all of your dancers",
  imgUrl: "https://yt3.ggpht.com/-uX126AMHNu4/AAAAAAAAAAI/AAAAAAAAAAA/NaNF6OVVeKA/s48-c-k-no/photo.jpg"
},
{ 
  name: "angang",
  text: "Your outfit reminds me of the Flintstones",
  imgUrl: "https://yt3.ggpht.com/-9iMQjVDncAU/AAAAAAAAAAI/AAAAAAAAAAA/RVl4RsAenFI/s48-c-k-no/photo.jpg"
},
{ 
  name: "the_rock",
  text: "Ariana can’t dance",
  imgUrl: "https://yt3.ggpht.com/-3VMBk3H7vPU/AAAAAAAAAAI/AAAAAAAAAAA/6jGP66_CMLg/s48-c-k-no/photo.jpg"
},
{ 
  name: "arie",
  text: "your VOICE!!",
  imgUrl: "https://yt3.ggpht.com/-_ndPHIgkflg/AAAAAAAAAAI/AAAAAAAAAAA/LkIXLncBCcQ/s48-c-k-no/photo.jpg"
},
{
  name: "ARIANA",
  text: "This is one of my favorite songs from my new album",
  imgUrl: "https://yt3.ggpht.com/-u_W-R7bGk1c/AAAAAAAAAAI/AAAAAAAAAAA/u6lamzb3BPc/s88-c-k-no/photo.jpg"
},
{ 
  name: "myxchell",
  text: "This is an elaborate Samsung commercial.",
  imgUrl: "https://yt3.ggpht.com/-6UCqpWU_2x0/AAAAAAAAAAI/AAAAAAAAAAA/PADyjYQXiz0/s48-c-k-no/photo.jpg"
},
{ 
  name: "mimixoxo",
  text: "Ariana you're my favourite singer!",
  imgUrl: "https://yt3.ggpht.com/-3VMBk3H7vPU/AAAAAAAAAAI/AAAAAAAAAAA/6jGP66_CMLg/s48-c-k-no/photo.jpg"
},
{ 
  name: "ddoe",
  text: "Your dance choreo in this video is on point tho",
  imgUrl: "https://yt3.ggpht.com/-Qvcvaz3Je0U/AAAAAAAAAAI/AAAAAAAAAAA/aQbob1v7AfE/s48-c-k-no/photo.jpg"
},
{ 
  name: "shellyx",
  text: "Your hair looks amazing",
  imgUrl: "https://yt3.ggpht.com/-9iMQjVDncAU/AAAAAAAAAAI/AAAAAAAAAAA/RVl4RsAenFI/s48-c-k-no/photo.jpg"
},
{ 
  name: "drewness",
  text: "i'm sorry but when I listen it I always think of Problem",
  imgUrl: "https://yt3.ggpht.com/-I9WCadQePkM/AAAAAAAAAAI/AAAAAAAAAAA/-sb6-ne_dBY/s48-c-k-no/photo.jpg"
},
{ 
  name: "nodemon",
  text: "you looks like an elf",
  imgUrl: "https://yt3.ggpht.com/-4YtYnbyyGRw/AAAAAAAAAAI/AAAAAAAAAAA/2El6m9DJ2Tg/s48-c-k-no/photo.jpg"
},
{ 
  name: "pielicious",
  text: "This song just explains how much attention you want..brat",
  imgUrl: "https://yt3.ggpht.com/-I9WCadQePkM/AAAAAAAAAAI/AAAAAAAAAAA/-sb6-ne_dBY/s48-c-k-no/photo.jpg"
},
{ 
  name: "baller88",
  text: "Wooooooooooooow Ariana grande",
  imgUrl: "https://yt3.ggpht.com/-uX126AMHNu4/AAAAAAAAAAI/AAAAAAAAAAA/NaNF6OVVeKA/s48-c-k-no/photo.jpg"
},
{
  name: "ARIANA",
  text: "Fun fact: this video was actually shot in space. JK",
  imgUrl: "https://yt3.ggpht.com/-u_W-R7bGk1c/AAAAAAAAAAI/AAAAAAAAAAA/u6lamzb3BPc/s88-c-k-no/photo.jpg"
},
{ 
  name: "marioluigi",
  text: "why won't you change that damn hair style",
  imgUrl: "https://yt3.ggpht.com/-I9WCadQePkM/AAAAAAAAAAI/AAAAAAAAAAA/-sb6-ne_dBY/s48-c-k-no/photo.jpg"
},
{ 
  name: "Nature",
  text: "I think you're the only one of your generation with a good voice.",
  imgUrl: "https://yt3.ggpht.com/-YHajZcZbyD8/AAAAAAAAAAI/AAAAAAAAAAA/ZhcLWT9G_Co/s48-c-k-no/photo.jpg"
},
{ 
  name: "beautifulSoul",
  text: "A goddess you are",
  imgUrl: "https://yt3.ggpht.com/-dAXuNdCtZ5U/AAAAAAAAAAI/AAAAAAAAAAA/LQyc0CtRHg8/s48-c-k-no/photo.jpg"
},
{ 
  name: "pookie",
  text: "You are SO PRETTY!",
  imgUrl: "https://yt3.ggpht.com/-uX126AMHNu4/AAAAAAAAAAI/AAAAAAAAAAA/NaNF6OVVeKA/s48-c-k-no/photo.jpg"
},
{ 
  name: "girlsruletheworld",
  text: "goalss. stuck in my head every day. :D",
  imgUrl: "https://yt3.ggpht.com/-9iMQjVDncAU/AAAAAAAAAAI/AAAAAAAAAAA/RVl4RsAenFI/s48-c-k-no/photo.jpg"
},
{ 
  name: "Xaxa",
  text: "ariana, you can be my PROBLEM any day",
  imgUrl: "https://yt3.ggpht.com/-fzYwLD3gLCo/AAAAAAAAAAI/AAAAAAAAAAA/OUs3QXxIiOw/s48-c-k-no/photo.jpg"
},
{ 
  name: "lvxxz",
  text: "what phone is that?",
  imgUrl: "https://yt3.ggpht.com/-4YtYnbyyGRw/AAAAAAAAAAI/AAAAAAAAAAA/2El6m9DJ2Tg/s48-c-k-no/photo.jpg"
},
{ 
  name: "emili",
  text: "DAT DRESS",
  imgUrl: "https://yt3.ggpht.com/-YHajZcZbyD8/AAAAAAAAAAI/AAAAAAAAAAA/ZhcLWT9G_Co/s48-c-k-no/photo.jpg"
},
{ 
  name: "zoeD",
  text: "you go girl!",
  imgUrl: "https://yt3.ggpht.com/-dAXuNdCtZ5U/AAAAAAAAAAI/AAAAAAAAAAA/LQyc0CtRHg8/s48-c-k-no/photo.jpg"
},
{ 
  name: "sander_L",
  text: "you're all grown up",
  imgUrl: "https://yt3.ggpht.com/-YHajZcZbyD8/AAAAAAAAAAI/AAAAAAAAAAA/ZhcLWT9G_Co/s48-c-k-no/photo.jpg"
},
{ 
  name: "devon",
  text: "i love you!!",
  imgUrl: "https://yt3.ggpht.com/-4YtYnbyyGRw/AAAAAAAAAAI/AAAAAAAAAAA/2El6m9DJ2Tg/s48-c-k-no/photo.jpg"
},
{
  name: "ARIANA",
  text: "I had so much fun shooting this video!",
  imgUrl: "https://yt3.ggpht.com/-u_W-R7bGk1c/AAAAAAAAAAI/AAAAAAAAAAA/u6lamzb3BPc/s88-c-k-no/photo.jpg"
},
{ 
  name: "karyn",
  text: "totally FOCUSING",
  imgUrl: "https://yt3.ggpht.com/-fzYwLD3gLCo/AAAAAAAAAAI/AAAAAAAAAAA/OUs3QXxIiOw/s48-c-k-no/photo.jpg"
},
{ 
  name: "kawa",
  text: "i can see stars in your eyes",
  imgUrl: "https://yt3.ggpht.com/-NJdKh2Q9vBY/AAAAAAAAAAI/AAAAAAAAAAA/XZ5ZUrTU4hI/s48-c-k-no/photo.jpg"
},
{ 
  name: "SQILHE",
  text: "i cant get this song out of my head",
  imgUrl: "https://yt3.ggpht.com/-9iMQjVDncAU/AAAAAAAAAAI/AAAAAAAAAAA/RVl4RsAenFI/s48-c-k-no/photo.jpg"
},
{ 
  name: "monique",
  text: "my dream is to be like you",
  imgUrl: "https://yt3.ggpht.com/-4YtYnbyyGRw/AAAAAAAAAAI/AAAAAAAAAAA/2El6m9DJ2Tg/s48-c-k-no/photo.jpg"
},
{ 
  name: "monique",
  text: "you're my inspiration",
  imgUrl: "https://yt3.ggpht.com/-4YtYnbyyGRw/AAAAAAAAAAI/AAAAAAAAAAA/2El6m9DJ2Tg/s48-c-k-no/photo.jpg"
},
{ 
  name: "nikki",
  text: "you look like your from game of thrones!",
  imgUrl: "https://yt3.ggpht.com/-fzYwLD3gLCo/AAAAAAAAAAI/AAAAAAAAAAA/OUs3QXxIiOw/s48-c-k-no/photo.jpg"
},
{ 
  name: "pollo",
  text: "such an AMAZING voice",
  imgUrl: "https://yt3.ggpht.com/-NJdKh2Q9vBY/AAAAAAAAAAI/AAAAAAAAAAA/XZ5ZUrTU4hI/s48-c-k-no/photo.jpg"
},
{ 
  name: "CUE",
  text: "YES YES YES!",
  imgUrl: "https://yt3.ggpht.com/-6UCqpWU_2x0/AAAAAAAAAAI/AAAAAAAAAAA/PADyjYQXiz0/s48-c-k-no/photo.jpg"
},
{ 
  name: "michelleK",
  text: "I AM YOUR SUPERFAN",
  imgUrl: "https://yt3.ggpht.com/-9iMQjVDncAU/AAAAAAAAAAI/AAAAAAAAAAA/RVl4RsAenFI/s48-c-k-no/photo.jpg"
},
{
  name: "ARIANA",
  text: "Thanks everyone xoxo",
  imgUrl: "https://yt3.ggpht.com/-u_W-R7bGk1c/AAAAAAAAAAI/AAAAAAAAAAA/u6lamzb3BPc/s88-c-k-no/photo.jpg"
},
{ 
  name: "alex",
  text: "cool video bro",
  imgUrl: "https://yt3.ggpht.com/-YLPDahgZ44w/AAAAAAAAAAI/AAAAAAAAAAA/rFgdYNaGkL8/s48-c-k-no/photo.jpg"
},
{ 
  name: "pookie",
  text: "BEST VIDEO EVER",
  imgUrl: "https://yt3.ggpht.com/-uX126AMHNu4/AAAAAAAAAAI/AAAAAAAAAAA/NaNF6OVVeKA/s48-c-k-no/photo.jpg"
},
{ 
  name: "girlsruletheworld",
  text: "ariana you rule!!!!!!",
  imgUrl: "https://yt3.ggpht.com/-9iMQjVDncAU/AAAAAAAAAAI/AAAAAAAAAAA/RVl4RsAenFI/s48-c-k-no/photo.jpg"
},
{ 
  name: "Xaxa",
  text: "+1",
  imgUrl: "https://yt3.ggpht.com/-fzYwLD3gLCo/AAAAAAAAAAI/AAAAAAAAAAA/OUs3QXxIiOw/s48-c-k-no/photo.jpg"
},
{ 
  name: "lvxxz",
  text: "+2!",
  imgUrl: "https://yt3.ggpht.com/-4YtYnbyyGRw/AAAAAAAAAAI/AAAAAAAAAAA/2El6m9DJ2Tg/s48-c-k-no/photo.jpg"
},
{ 
  name: "emili",
  text: "we love you!",
  imgUrl: "https://yt3.ggpht.com/-YHajZcZbyD8/AAAAAAAAAAI/AAAAAAAAAAA/ZhcLWT9G_Co/s48-c-k-no/photo.jpg"
},
{ 
  name: "zoeD",
  text: "do your thang gurl",
  imgUrl: "https://yt3.ggpht.com/-dAXuNdCtZ5U/AAAAAAAAAAI/AAAAAAAAAAA/LQyc0CtRHg8/s48-c-k-no/photo.jpg"
},
{ 
  name: "sander_L",
  text: "HOT HOT HOT",
  imgUrl: "https://yt3.ggpht.com/-YHajZcZbyD8/AAAAAAAAAAI/AAAAAAAAAAA/ZhcLWT9G_Co/s48-c-k-no/photo.jpg"
},
{ 
  name: "devon",
  text: "if only i can sing like you",
  imgUrl: "https://yt3.ggpht.com/-4YtYnbyyGRw/AAAAAAAAAAI/AAAAAAAAAAA/2El6m9DJ2Tg/s48-c-k-no/photo.jpg"
},
{ 
  name: "cyrilnu",
  text: "i went to your concert, it was amazing",
  imgUrl: "https://yt3.ggpht.com/-6UCqpWU_2x0/AAAAAAAAAAI/AAAAAAAAAAA/PADyjYQXiz0/s48-c-k-no/photo.jpg"
},
{ 
  name: "karyn",
  text: "you're so awesome",
  imgUrl: "https://yt3.ggpht.com/-fzYwLD3gLCo/AAAAAAAAAAI/AAAAAAAAAAA/OUs3QXxIiOw/s48-c-k-no/photo.jpg"
},
{ 
  name: "kawa",
  text: "raise your hand if you love ariana!",
  imgUrl: "https://yt3.ggpht.com/-NJdKh2Q9vBY/AAAAAAAAAAI/AAAAAAAAAAA/XZ5ZUrTU4hI/s48-c-k-no/photo.jpg"
},
{ 
  name: "SQILHE",
  text: "woot woot",
  imgUrl: "https://yt3.ggpht.com/-9iMQjVDncAU/AAAAAAAAAAI/AAAAAAAAAAA/RVl4RsAenFI/s48-c-k-no/photo.jpg"
},
{ 
  name: "monique",
  text: "lolol",
  imgUrl: "https://yt3.ggpht.com/-4YtYnbyyGRw/AAAAAAAAAAI/AAAAAAAAAAA/2El6m9DJ2Tg/s48-c-k-no/photo.jpg"
},
{ 
  name: "monique",
  text: "ariana4life",
  imgUrl: "https://yt3.ggpht.com/-4YtYnbyyGRw/AAAAAAAAAAI/AAAAAAAAAAA/2El6m9DJ2Tg/s48-c-k-no/photo.jpg"
},
{ 
  name: "ddoe",
  text: "you get hotter every video",
  imgUrl: "https://yt3.ggpht.com/-Qvcvaz3Je0U/AAAAAAAAAAI/AAAAAAAAAAA/aQbob1v7AfE/s48-c-k-no/photo.jpg"
},
{ 
  name: "shellyx",
  text: "been playing on repeat...",
  imgUrl: "https://yt3.ggpht.com/-9iMQjVDncAU/AAAAAAAAAAI/AAAAAAAAAAA/RVl4RsAenFI/s48-c-k-no/photo.jpg"
},
{ 
  name: "drewness",
  text: "same here, listening to it all night",
  imgUrl: "https://yt3.ggpht.com/-I9WCadQePkM/AAAAAAAAAAI/AAAAAAAAAAA/-sb6-ne_dBY/s48-c-k-no/photo.jpg"
},
{ 
  name: "nodemon",
  text: "music never stops",
  imgUrl: "https://yt3.ggpht.com/-4YtYnbyyGRw/AAAAAAAAAAI/AAAAAAAAAAA/2El6m9DJ2Tg/s48-c-k-no/photo.jpg"
},
{ 
  name: "pielicious",
  text: "#1 HIT",
  imgUrl: "https://yt3.ggpht.com/-I9WCadQePkM/AAAAAAAAAAI/AAAAAAAAAAA/-sb6-ne_dBY/s48-c-k-no/photo.jpg"
}];