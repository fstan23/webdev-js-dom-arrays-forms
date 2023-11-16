//IIFI

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
        


    //code ends here
})();

