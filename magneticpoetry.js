/**
 * Created by emddutton on 5/18/2015.
 */
var words = ["about", "above", "ache", "ad", "after", "all", "am", "am", "an", "an", "and", "and", "and", "and", "apparatus", "are", "are", "arm", "as", "as", "as", "as", "ask", "at", "at", "at", "away", "bare", "be", "beat", "beauty", "bed", "beneath", "bitter", "black", "blood", "blow", "blue", "boil", "boy", "breast", "but", "but", "but", "but", "butt", "by", "by", "can", "chant", 'chocolate', 'cool', 'could', 'crush', 'cried', 'day', 'death', 'delirious', 'diamond', 'did', 'do', 'do', 'dream', 'dress', 'drive', 'drool', 'drunk', 'eat', 'ed', 'ed', 'ed', 'ed', 'egg', 'elaborate', 'enormous', 'er', 'es', 'est', 'fast', 'feet', 'fiddle', 'finger', 'fluff', 'for', 'forest', 'frantic', 'friend', 'from', 'from', 'garden', 'girl', 'go', 'goddess', 'gorgeous', 'gown', 'hair', 'has', 'have', 'have', 'he', 'he', 'head', 'heave', 'her', 'her', 'here', 'him', 'his', 'his', 'honey', 'hot', 'how', 'I', 'I', 'I', 'I', 'if', 'in', 'in', 'in', 'ing', 'ing', 'ing', 'ing', 'ing', 'ing', 'is', 'is', 'is', 'is', 'is', 'it', 'it', 'it', 'juice', 'lake', 'language', 'languid', 'lather', 'lazy', 'less', 'let', 'lick', 'lie', 'life', 'light', 'like', 'like', 'like', 'live', 'love', 'luscious', 'lust', 'ly', 'ly','ly', 'ly', 'mad', 'man', 'me', 'me', 'me', 'mean', 'meat', 'men', 'milk', 'mist', 'moan', 'moon', 'mother', 'music', 'must', 'my', 'my', 'my', 'need', 'never', 'no', 'no', 'not', 'not', 'of', 'of', 'of', 'of', 'on', 'on', 'one', 'or', 'our', 'over', 'pant', 'peach', 'petal', 'picture', 'pink', 'play', 'please', 'pole', 'pound', 'puppy', 'purple', 'put', 'r', 'r', 'rain', 'raw', 'recall', 'red', 'repulsive', 'rip', 'rock', 'rose', 'run', 'rust', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 'sad', 'said', 'sausage', 'say', 'scream', 'sea', 'see', 'shadow', 'she', 'she', 'shine', 'ship', 'shot', 'show', 'sing', 'sit', 'skin', 'sky', 'sleep', 'smear', 'smell', 'smooth', 'so', 'soar', 'some', 'sordid', 'spray', 'spring', 'still', 'stop', 'storm', 'suit', 'summer', 'sun', 'sweat', 'sweet', 'swim', 'symphony', 'the', 'the', 'the', 'the', 'the', 'their', 'there', 'these', 'they', 'those', 'though', 'thousand', 'through', 'time', 'tiny', 'to', 'to', 'to', 'together', 'tongue', 'trudge', 'TV', 'ugly', 'up', 'urge', 'us', 'use', 'want', 'want', 'was', 'watch', 'water', 'wax', 'we', 'we', 'were', 'what','when', 'whisper', 'who','why', 'will', 'wind', 'with', 'with', 'woman', 'worship', 'y', 'y', 'y', 'y', 'yet', 'you', 'you', 'you', 'you'];


$(document).ready(function(){

    jQuery.each(words, function(i, val){
        $(".word_container").append("<div class=value>" + val + "</div>");
    });

    $(".word_container > div").each(function (){
        $(this).css({
            "left": (Math.random() * 1024 + 1) + "px",
            "top": (Math.random() * 400 + 1) + "px"
        }).draggable();
    });


});
