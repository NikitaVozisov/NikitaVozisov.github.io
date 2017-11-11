var c = document.getElementById("cnv");
var ctx = c.getContext("2d");
var img = new Image();
img.onload = function() { ctx.drawImage(img, 0, 0); };
img.src = 'https://picsum.photos/800/600/?random';


$.get('http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en').success(function(data) {    
    console.log(data.quoteText);  
    var quote=document.getElementById("quote");
        quote.innerHTML+=data.quoteText;
});

/*var xhr = new XMLHttpRequest();
xhr.open("GET", "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en"); 
xhr.onload = function (e)
{           
        var objectJSON=JSON.parse(xhr.responseText);
        console.log(objectJSON.quoteText);       
       
        var quote=document.getElementById("quote");
        quote.innerHTML+=objectJSON.quoteText;
         
}
xhr.send(null);*/



