'use strict';
const model=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btn=document.querySelector('.close-modal');
const btnsOpenModel=document.querySelectorAll('.show-modal');// querySelector only accepts the first element if you have same classes from different elements whereas querySelectorAll selects all elements
for (let i=0; i<btnsOpenModel.length; i++)
    btnsOpenModel[i].addEventListener('click', function() {
        model.classList.remove('hidden');
        overlay.classList.remove('hidden');
});
const activity=function() { model.classList.add('hidden');
overlay.classList.add('hidden')
}
btn.addEventListener('click',activity);
overlay.addEventListener('click', activity);


//if we want to use the same code in mutiple eventlisteners then store the code in a function and call it as an argument in the event listener
// classes allow us to aggregate multiple css functions in just one container
// classes allow us to check if the container is present or not

 //keyboard events are global events we usually list them on the whole document


 document.addEventListener('keydown', function(event) {
    console.log(event.key);// shows which key was pressed
    if (event.key==='Escape'&& !model.classList.contains('hidden')) {
                activity();
            // checks if the class is present or not
    }     
 });

 // 3 types of events for the keyboard 1) keyup: only happens when we lift our finger of the keyboard 2)keydown: happens when we click a button on keyboard 3) keypress: fired continously when we keep our fingers on certain keys
