#document.getElementById('title')
<h1 id="title" class="heading">"DOM learning on Chai aur code "</h1>

#document.getElementById('title').getAttribute('id')
#'title'
#document.getElementById('title').getAttribute('class')
#'heading'

// ye replace kar dega previous bale class name ko 
## document.getElementById('title').setAttribute('class' ,'test') 

##if you set new class name and want previous one also then do this 
 document.getElementById('title').setAttribute('class' ,'test heading')

#const title = document.getElementById('title') 
// now you want to manuplate easly
//title.style.backgroundColor = 'green' //  // title bale container ka backgroundColor green set ho gaya h



/// you want see inner text/ want to extract inner context of title 
#title.textContent // isase aapko bahi dikhata h jo visible h 
'DOM learning on Chai aur code test text' 
#title.innerHTML // isase appko innercontant to milta hi h par apne yadi koi HTML likh rakha to bo bhi dikhega 
'DOM learning on Chai aur code <span style="display: none;">test text</span>'
#title.innerText // isase bo bhi dikh jata h jo appne kisi css property se hide kar di h
'DOM learning on Chai aur code test text' 

##document.querySelector('h1') // it give first h1

##document.querySelector('#title') // you can aply all CSS seletor here like
document.querySelector('.heading')
document.querySelector('input[type=password]')
document.querySelector('p:first-child');

cosnt Myul = document.querySelector('ul') 
Myul.querySelector('li') // isake uper further or selectors laga sakte h

##
document.querySelectorAll('li') // ye aapko pahe maijud sare li ko select kar lega or ye aapko dega ek Nodelist like this 
## NodeList(4) [li.list-item, li.list-item, li.list-item, li.list-item] // it look like array but remember NodeList and HTML collection are a direct array 
//so iss liye aap issape aap direct array jaisa property nahi laga sakte but h to similar to thora change karke laga sakte h like 

// like aap directly aise nahi kar sakte h
templi.style.backgroundColor = 'green'

// do like this 
templi[0].style.backgroundColor = 'green' // it works 

// bcz prototype me forEach 
templi.forEach(function (l) {
    l.style.backgroundColor = 'green'
})

##
//document.getElementsByClassName('list-item') // it give HTML collection difirent from NodeList  in HTML collection did'nt have forEach loop if you want use then firstly convert it into array then u aply what ever you want 

//const tempClassList = document.getElementsByClassName('list-item')
## convert any clloction in array by this 
Array.from(tempClassList) // now u aplly any pro of array

//like this
convertedArray.forEach(function (c) {
    c.style.backgroundColor = '#17ca66d9';
    c.style.Color = "red";
    c.style.padding = '15px';
    c.style.innerHTML = 'Ranjeet';
})
 // above experiments on one.html
####################Relations ########################

