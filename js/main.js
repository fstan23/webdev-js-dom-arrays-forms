//IIFI
var imgArCounter = 0;
(function()
{
    //code starts here
    document.getElementById("myHeading").innerHTML = "Felix"
    document.querySelector('nav ul li').setAttribute('class', 'currentPage');
    /*document.querySelector('nav ul li a').setAttribute('href','http://www.google.co.uk');*/
    /*document.getElementById('myTestEvent').onclick = myFunction; 
    function myFunction(){console.info('hi'); 
    }*/
    document.getElementById('myTestEvent').addEventListener('click',
    function(ev){  	console.dir(ev); 
    }) 

    document.querySelector(".red").addEventListener('click', function(ev){
    document.querySelector('body').setAttribute('class', "redBack");    })

    document.querySelector(".green").addEventListener('click', function(ev){
    document.querySelector('body').setAttribute('class', "greenBack");    })

    document.querySelector(".blue").addEventListener('click', function(ev){
    document.querySelector('body').setAttribute('class', "blueBack");    })
    
    document.querySelector(".reset").addEventListener('click', function(ev){
    document.querySelector('body').setAttribute('class', "defaultBack");    })

    //let myArray = ['cat', 'dog', 'mouse'];
    let imageAr = ['images/view1.jpg', 'images/view2.jpg',
    'images/view3.jpg', 'images/view4.jpg', 'images/view5.jpg', 'images/view6.jpg'];
    setInterval(chgImage, 4000); 
    document.getElementById('myImages').setAttribute('src', imageAr[5]); 
    function chgImage(){  	
        console.info('Called');
        console.log(imgArCounter)
        if (imgArCounter <= 4){
            document.getElementById('myImages').setAttribute('src', imageAr[imgArCounter]);//this actually changes the image
            imgArCounter = imgArCounter + 1;
        }
        else{
            imgArCounter = 0;
        }
    }
    

    //code ends here
})();

