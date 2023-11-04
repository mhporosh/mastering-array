/*Assignment: Mastering Array*/
/*let arr = ["six", "five", "four", "three", "two", "one"];*/

/* 
1. Reverse the array element and assign the value to the arr variable.
So that the array will look like below:
["one", "two", "three", "four", "five", "six"]
(hint: use reverse method of array)

solve: 
*/

let arr = ["six", "five", "four", "three", "two", "one"];
arr = arr.reverse();
console.log(1, arr);


/*
2. Remove 2nd element from the array using splice so that the array looks like the below:
["one", "three", "four", "five", "six"]

solve:
*/

arr.splice(1,1);
console.log(2, arr);


/*
3. Then add Hello text in the third position by using splice 
so that the array looks like
["one", "three", "four", "Hello", "five", "six"]

solve:
*/

arr.splice(3, 0, "Hello");
console.log(3, arr);


/*
4. Take a variable called piece and make the value like  
["three", "four", "Hello"] by using slice  

solve:
*/

let piece = arr.slice(1,4);;
console.log(4, piece);


/*
5. print the below array from the arr variable   
["three", "four", "Hello"] by using splice  

solve:
*/

arr.splice(0,1);
arr.splice(3);
console.log(5, arr);


/*
6. What is the difference between the 4 and 5 problems? when should we use `slice`
and when should we use `splice` if we need a slice of an array?
The answer should be in text format in VS code.
`(All the text for this problem including the question in vs code should be commented.
You should read this article before answering this.)` 
    
    [What is the difference between Array.slice() and Array.splice() in JavaScript ? - GeeksforGeeks](https://www.geeksforgeeks.org/what-is-the-difference-between-array-slice-and-array-splice-in-javascript/)

solve:
*/

/*


*/
console.log(6, "Check out the answer above.");


/*
7. Now our is 
arr = ["three", "four", "Hello"];
Remove the last Element from the array: (hint: use array pop method)
The array will look like below:
["three", "four"] 

solve:
*/

arr.pop();
console.log(7, arr);


/*
8. Add a new element DIU in the last of the array. 
The array will look like below: (hint: use array push method)
["three", "four", "DIU"] 

solve:
*/

arr.push("DIU");
console.log(8, arr);


/*
9. Remove the first Element from the array:
The array will look like below: (hint: use array shift method)
["four", "DIU"] 

solve:
*/

arr.shift();
console.log(9, arr);


/*
10. Add a new Element I'm at the first position in the array:
The array will look like below: (hint: use array unshift method)
["I'm", "four", "DIU"] 

solve:
*/

arr.unshift("I'm");
console.log(10, arr);


/*
11. Count the number of the element of the array above that you have made.
Then do the console log The length of the array is: YOUR_LENGTH_VARIABLE
(hint: use array length property)

solve:
*/

let arrayLength = arr.length;
console.log(11, "The length of the array is: " + arrayLength);


/*
12. Now you have to edit the middle element four to 'a student of' in the array.
The array will be like this: 
["I'm", "a student of", "DIU"]

(hint: you can remove the middle element by using splice
and then add a new element by splice in the second position)

solve:
*/

arr.splice(1,1,"a student of");
console.log(12, arr);


/*
13. In the 12 no. problem, you have edited the second element of the array
which was previously four. Now can you recheck if element four 
still in the array or not? If not you have to do console.log false.
(hint: you can use includes the method of array)

solve:
*/

let containsFour = arr.includes("four");
console.log(13, containsFour);


/*
14. Now make a string I'm a student of DIU from the arr. and do console.log
(hint: you can use the join method of array)

solve:
*/

let stringOfArray = arr.join(" ");
console.log(14, stringOfArray);


/*
15. Now this is time to create a video. Creating a video is a part of this assignment.
In that video, you have to discuss the below methods:
    a. `array.forEach()`
    b. `array.map()`
    c. `array.filter()`
    d. `array.find()`
    e. `array.findIndex()`
    f. `array.reduce()`
    g. `array.every()`
    h. `array.some()`
    i. Discuss the difference between `forEach`, `map`, `every`, `some`, `filter` methods. 
    and give examples of each method’s practical use cases. You have to give
    a minimum of one example problem for each method’s practical use case. Also at the
    time of giving an example problem, you have to explain why the particular problem should be solved by the particular method, and why other methods are not appropriate for this
    problem.
    
    `video must be a minimum of 30 minutes. You have to create the video in the way`
    
    `that you are teaching someone. Each point of code has to be described`

solve:
*/

console.log(15, "Check out the README.md file.")

