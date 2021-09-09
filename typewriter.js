"use strict";

let maxNumberOfIterations;
let iteration;

const sound1 = document.querySelector("#typekey1");
const soundSpace = document.querySelector("#typespace");
const soundLast = document.querySelector("#typereturn");

const textWritten = document.querySelector("#typewriter").textContent;
const textArray = textWritten.split("");


document.addEventListener("DOMContentLoaded", function() {

    maxNumberOfIterations = textWritten.length + 1;
    iteration = 0;


    console.log(textWritten);
    console.log(textArray);
    console.log(maxNumberOfIterations);

    document.querySelector("#typewriter").textContent = "";

    loop();


    function loop() {

        console.log("loop", iteration);

        console.log(textArray[iteration])

        iteration++;

        if (iteration < maxNumberOfIterations) {

            document.querySelector("#typewriter").textContent += textArray[iteration - 1].toString();




          if (textArray[iteration - 1] === " ") {
            console.log("this space");
            soundSpace.play();

          } else {
            console.log("chracter");
            sound1.play();

          }


            setTimeout(loop, 500);


            console.log()


        } else {
          console.log("last key");
          soundLast.play();
        }
        

    }
   

})

