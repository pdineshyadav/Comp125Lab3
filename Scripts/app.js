
// Immediately Invoked Function Expression
(function(){
    "use strict";

    var elementsOfParagraph = [];
    
    elementsOfParagraph[0] = document.getElementById("firstParagraph");
    elementsOfParagraph[1] = document.getElementById("secondParagraph");
    elementsOfParagraph[2] = document.getElementById("thirdParagraph");
    
    var paragraph = [];
    
    paragraph[0] = "<span class='firstSentence'>In this paragraph I am going to talk about my Lab 3.</span> Donec ornare felis sed aliquet gravida. Ut sagittis iaculis lectus ut vulputate. Donec ligula risus, ornare vel elit eu, posuere dictum leo. Fusce tempor sapien at pellentesque facilisis. Proin ultrices at est eget dignissim. Proin a enim nec magna fringilla interdum eu ullamcorper diam. Vivamus eget felis risus. Morbi augue ex, fringilla in efficitur et, aliquet nec odio. Mauris non elementum risus. In ex nisi, condimentum in lobortis sed, mollis a tellus. Sed at venenatis justo. Vestibulum nisi mauris, porttitor venenatis volutpat ac, tristique sed neque. Donec faucibus libero eget tortor facilisis posuere. Nullam volutpat eu elit nec pellentesque. Donec vehicula nunc quis erat vestibulum consectetur. Curabitur ultricies, nibh lobortis feugiat iaculis, purus lacus fermentum velit, a ultrices metus quam ac augue";
    paragraph[1] = "<span class='firstSentence'>In this paragraph I am going to talk about myself.</span>  I am a student of Software Engineering Program at Centennial College.  I like to play sports. My favourite sport is Cricket. I even enjoy running, high jump and shot put. I have received a couple of momentos in the Scarborough Cricket League and few medals in athletics. My favourite colour is Yellow and my favourite food is Biryani. Vivamus lorem lectus, tempus vitae vehicula quis, aliquet eu mi. Proin mollis neque vehicula neque fermentum feugiat. Sed lobortis lobortis est ut facilisis. Donec at sem ut mi dictum interdum. Nulla imperdiet venenatis nisl, eget commodo turpis facilisis at. Vivamus sollicitudin ante ante, eu volutpat nisl iaculis eu. Nam vitae rhoncus erat. Pellentesque vel turpis eget ipsum ultrices luctus. Donec risus ligula, luctus a erat eget, mollis aliquam lorem. In hac habitasse platea dictumst. Nullam iaculis libero at tempor sagittis. Duis in tortor pulvinar, sodales sapien nec, malesuada risus. Ut sed pulvinar leo. Nam ac diam eu nibh consectetur malesuada. Sed eu semper dolor. Quisque elementum, lorem id vehicula porta, elit nunc pharetra quam, ultrices tristique est neque in risus";
    paragraph[2] = "<span class='firstSentence'>In this paragraph I am going to talk about my projects.</span> I have done some projects like producing energy from wind, Creating a profile using html and css, and Programming a house budget in C#. Mauris at pharetra nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas augue purus, efficitur et elit dignissim, accumsan venenatis eros. Morbi molestie ex maximus ante lobortis tempor. Pellentesque rutrum interdum odio, interdum molestie quam faucibus sit amet. Etiam gravida purus facilisis, vehicula est et, euismod diam. Sed tincidunt, augue in sodales tincidunt, augue sem luctus leo, at lacinia tortor arcu eget felis. Morbi id pellentesque neque. Ut at lacus purus. Aliquam rhoncus tempor mi in euismod. Nullam sit amet tellus aliquet, elementum purus sed, elementum lorem";
    
    var paragraphElementsLength = elementsOfParagraph.length;
    for (var i = paragraphElementsLength; i >= 0; i--)
    {
        if(elementsOfParagraph[i]) 
        {
         elementsOfParagraph[i].innerHTML = paragraph[i];
        }
    }
    
    
})();