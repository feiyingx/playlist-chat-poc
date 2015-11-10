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
        name: "jeamanda",
        text: "Um yes water",
        imgUrl: ""
      }
     ,{ 
        name: "Deplex101",
        text: "That girl!",
        imgUrl: ""
      }
     ,{ 
        name: "AzharB",
        text: "Walk it out",
        imgUrl: ""
      }
     ,{ 
        name: "3Haws",
        text: "hahah Drake dancing",
        imgUrl: ""
      }
     ,{ 
        name: "Zillcatyr",
        text: "So excited!",
        imgUrl: ""
      }
     ,{ 
        name: "s0ak",
        text: "LOVE THIS SONG",
        imgUrl: ""
      }
     ,{ 
        name: "CellJr",
        text: "HOTLINGBLINGGGGGGG",
        imgUrl: ""
      }
     ,{ 
        name: "ronnieMc",
        text: "Drake be dancing",
        imgUrl: ""
      }
     ,{ 
        name: "HooDini",
        text: "What is he doing",
        imgUrl: ""
      }
     ,{ 
        name: "garza",
        text: "Can't stand this awkward dancing fool that why I DISSED HIM.",
        imgUrl: ""
      }
     ,{ 
        name: "samir",
        text: "I love this elevator music, it's got such a sick beat over it.",
        imgUrl: ""
      }
     ,{ 
        name: "the_deep_bassist",
        text: "Even if Drake was my dad i would still be embarrassed to bring him to school dances",
        imgUrl: ""
      }
     ,{ 
        name: "match_stick",
        text: "me too",
        imgUrl: ""
      }
     ,{ 
        name: "Sahni",
        text: "music classes he would be the bomb",
        imgUrl: ""
      }
     ,{ 
        name: "Augustin",
        text: "who brings there dad to school dances?",
        imgUrl: ""
      }
     ,{ 
        name: "KyleWright",
        text: "LMFAO",
        imgUrl: ""
      }
     ,{ 
        name: "Rondadore",
        text: "Drake is that type of guy that actually does the class's reading assignment homework",
        imgUrl: ""
      }
     ,{ 
        name: "NoahSayles",
        text: "….",
        imgUrl: ""
      }
     ,{ 
        name: "KyleWright",
        text: "Drake... Making it okay for white guys to dance to his songs since 2015.",
        imgUrl: ""
      }
     ,{ 
        name: "audiopablo",
        text: "first time seeing the actual video after all the memes! lol cant take it seriously now",
        imgUrl: ""
      }
     ,{ 
        name: "keepit",
        text: "this shit issss ffffiire",
        imgUrl: ""
      }
     ,{ 
        name: "jermGreen",
        text: "Somehow He reminds me of Ross from friends",
        imgUrl: ""
      }
     ,{ 
        name: "phile",
        text: "his dancing and this whole video is pissing me off and i dont even know why",
        imgUrl: ""
      }
     ,{ 
        name: "blingBLING",
        text: "Carlton called he wants his dance moves back",
        imgUrl: ""
      }
     ,{ 
        name: "zori",
        text: "Best comment ever.",
        imgUrl: ""
      }
     ,{ 
        name: "msproof",
        text: "Hahahaha",
        imgUrl: ""
      }
     ,{ 
        name: "sammystripes",
        text: "this song hypnotizes me",
        imgUrl: ""
      }
     ,{ 
        name: "aiman",
        text: "Drake my sister said that your dance moves suck",
        imgUrl: ""
      }
     ,{ 
        name: "mariobro",
        text: "Drakes king🙏",
        imgUrl: ""
      }
     ,{ 
        name: "RazaK",
        text: "he's dancing bachata lol",
        imgUrl: ""
      }
     ,{ 
        name: "rebJulia",
        text: "Does anybody actually listen to the lyrics",
        imgUrl: ""
      }
     ,{ 
        name: "miller_time",
        text: "Your dance is fucking perfect dude:D",
        imgUrl: ""
      }
     ,{ 
        name: "bherman",
        text: "I think hes a part time salsa dancer",
        imgUrl: ""
      }
     ,{ 
        name: "wapachee",
        text: "mmhmmm",
        imgUrl: ""
      }
     ,{ 
        name: "gooooooooo",
        text: "Get it Drake",
        imgUrl: ""
      }
  ];

  var commentIndex = 0;

  function insertComment(){
    if(commentIndex < $scope.comments.length){
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

  $interval(insertComment, 1500);

  
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
    $interval(insertComment2, 1500);
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
          title: "Hotline Bling",
          artist: "Drake",
          imgUrl: "https://yt3.ggpht.com/-lTFlcA9Q0nQ/AAAAAAAAAAI/AAAAAAAAAAA/E2qB72L4zmY/s88-c-k-no/photo.jpg",
          videoUrl: "http://h264-aws.vevo.com/v3/h264/2015/10/USCMV1500030/3521a00a-c3ed-4ebf-adc0-9f271a368d9a/uscmv1500030_med_480x360_h264_500_aac_128.mp4"
        },
        {
          title: "Ariana Grande",
          artist: "Focus",
          imgUrl: "https://yt3.ggpht.com/-u_W-R7bGk1c/AAAAAAAAAAI/AAAAAAAAAAA/u6lamzb3BPc/s88-c-k-no/photo.jpg",
          videoUrl: "http://h264-aws.vevo.com/v3/h264/2015/10/USUV71503192/4a35e8aa-8595-40f9-8447-a823ee6c2578/usuv71503192_med_480x360_h264_500_aac_128.mp4"
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

var arianaComments = [{ 
  name: "grandefan",
  text: "Dang those lips tho",
  imgUrl: ""
},
{ 
  name: "gruntfile",
  text: "oooh promotion of the phone",
  imgUrl: ""
},
{ 
  name: "videogular",
  text: "Sing it girl",
  imgUrl: ""
},
{ 
  name: "Bower",
  text: "I like this song",
  imgUrl: ""
},
{ 
  name: "Giti",
  text: "Ariana looks great",
  imgUrl: ""
},
{ 
  name: "nGnore",
  text: "WTF is up with her hair",
  imgUrl: ""
},
{ 
  name: "maxDe",
  text: "I like the circles",
  imgUrl: ""
},
{ 
  name: "pckg",
  text: "I’m definitely focused",
  imgUrl: ""
},
{ 
  name: "vgPlay",
  text: "This is what Ariana will look like when she gets old",
  imgUrl: ""
},
{ 
  name: "haNore",
  text: "hahahaha",
  imgUrl: ""
},
{ 
  name: "indexNPM",
  text: "FLAWLESS",
  imgUrl: ""
},
{ 
  name: "rewob",
  text: "She’s such an amazing vocalist",
  imgUrl: ""
},
{ 
  name: "raceCAR",
  text: "Ariana don’t let fame change you",
  imgUrl: ""
},
{ 
  name: "cutieX",
  text: "I am so obsessed with this song it is stuck in my head",
  imgUrl: ""
},
{ 
  name: "over_you",
  text: "I’m digging this space theme",
  imgUrl: ""
},
{ 
  name: "licenseToKill",
  text: "Ariana outshines all of her dancers",
  imgUrl: ""
},
{ 
  name: "angang",
  text: "Her outfit reminds me of the Flintstones",
  imgUrl: ""
},
{ 
  name: "the_rock",
  text: "Ariana can’t dance",
  imgUrl: ""
},
{ 
  name: "arie",
  text: "Her VOICE",
  imgUrl: ""
},
{ 
  name: "myxchell",
  text: "This is an elaborate Samsung commercial.",
  imgUrl: ""
},
{ 
  name: "mimixoxo",
  text: "Ariana She is my favourite singer",
  imgUrl: ""
},
{ 
  name: "ddoe",
  text: "Her dance choreo in this video is on point tho",
  imgUrl: ""
},
{ 
  name: "shellyx",
  text: "The hair looks amazing on her",
  imgUrl: ""
},
{ 
  name: "drewness",
  text: "i'm sorry but when I listen it I always think of Problem",
  imgUrl: ""
},
{ 
  name: "nodemon",
  text: "she looks like an elf",
  imgUrl: ""
},
{ 
  name: "pielicious",
  text: "This song just explains how much attention she wants..brat",
  imgUrl: ""
},
{ 
  name: "baller88",
  text: "Wooooooooooooow Ariana grande",
  imgUrl: ""
},
{ 
  name: "marioluigi",
  text: "why won't she change that damn hair style",
  imgUrl: ""
},
{ 
  name: "Nature",
  text: "I think shes the only one of her generation with a good voice.",
  imgUrl: ""
},
{ 
  name: "beautifulSoul",
  text: "A goddess she is",
  imgUrl: ""
},
{ 
  name: "pookie",
  text: "She is SO PRETTY!",
  imgUrl: ""
},
{ 
  name: "girlsruletheworld",
  text: "goalss. stuck in my head every day. :D",
  imgUrl: ""
}];