/**Defining function tests with two parameters*/
function tests(test1,test2)
{
    /**Assigning greater to test1 and test2
     * 
     */
let greater = test1>test1?test1:test2
/**Returning greater  after setting two parameters*/
return greater


}
/**Defining function coursework with parameter that takes cswork */

 function coursework(cswork)
 /** Declaring and initializing varriable coursework with cswork and addition of function tests */
 {
 let coursework = cswork + tests(80,80)
/**Print out coursework */
 console.log(coursework)
 /**Return coursework */
return coursework

 }
/**Defining function avg and takes a parameter */
function avg(a)
{
    /**Declaring varriable avg to get returning value coursework */
let avg =coursework(90)/a
/**Return avg */
return avg

}
/**Defining function crsmark */

function crsmark(a)
/**Calculating exam */
{
    /**Assigning exm=avg */
let exm = avg(2)*(a/100)
 return exm 
}
/**Defining  function exam */
function exam(a)
{
    /**Assigning fexam to exam(a) */
let fexam = (60/100)*a
return fexam

}

function fnal()
/**Calaculating fmark */
{
let fmark = exam(75)+crsmark(40)
console.log(fmark)

}
/**Calling function final() */
fnal()