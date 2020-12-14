function sum(a,b,callback)
{
   console.log(a+b);
    callback;
}
function sub(a,b)
{
    console.log(a-b);

}

console.log(sum(7,3,sub(5,6)));

var a=prompt("enter value 1");
var b=prompt("enter value 2");
var c=prompt("enter value 3");
if(a>b && a>c){
    document.write("a is greater");
}
else if(b>c)
{
    document.write("b is greater");

}
else{
    document.write("c is greater");
}


var a = prompt("enter");

for(i=0;i<a;i++)
{
    document.write(i);
}


// ----------------------------------------------------------/////
var ch=prompt("enter");
switch(ch){
    case "1":
        document.write("one");
        break;
    case "2":
        document.write("second");
        break;
    case "3":
        document.write("third");
        break;
    default:
        document.write("default");
        break;
} 
//---------------------------------------------------------------------


var str="indian premier league";
var l=str.length;
document.write("output");
document.write(l);

-------------------------

var vr=200;
function myfun(){
    var vr=199;
    return vr;
}
console.log(vr);
console.log(myfun());
//-----------------------------------------------------------------------------------------------------------------------
var my_arr=[23,45,6,8,9,90];

function fun_queue(arr,iteam){
    arr.push(iteam);
    return arr.shift();

}
console.log(" show : ",my_arr);

console.log("before : "+JSON.stringify(my_arr));
console.log(fun_queue(my_arr,999));
console.log("after : "+ JSON.stringify(my_arr));

------------------------------------------switch -------------------------

var ch="string";
function choice(ch){
switch(ch){
    case 1:
        console.log("its one");
        break;
    case 2:
        console.log("its 2");
        break;
    case "hi":
        console.log("its hi ");
        break;
    case "string":
        console.log("its a string");
        break;    
    case 9:
        console.log("its 9");
        break;
    default:
        console("wrong choice");
        break;
    }
}

choice(ch);
----------------------------------------------
var a=2,b=2;
var c=Math.round(Math.pow(Math.sqrt(a)+Math.sqrt(b),2));
console.log(c);

-------------------------------OBJECT-------------------
var p="name";
var my_obj={
    "name":"ajay singh bhandari",
    "city":"dehradun",
    "number":12364578,
    "email":"abc@gmail.com"
}
my_obj.name="itachi";
delete my_obj.name;
if(!(my_obj.hasOwnProperty(p))){
    my_obj.name="wayne;"
}
console.log(my_obj);


var myarray=[23,45,60,99,12];
var total=0;
 ------------------------$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$--------------------
                         
    

for(var i=0;i<myarray.length;i++){
    total+=myarray[i];
    console.log(i);

}
console.log(myarray);
console.log(total);


                                                            //OBEJECT INSIDE ARRAY

var my_array=[
    {"name":"aj",
    "number":9234156,
    "city":"delhi"},
    {
        "name":"aju",
        "number":"78166",
        "city":"mumbai"
    },
    {
        "name":"joe",
        "number":5125,
        "city":"up",
    }
]
console.log(my_array[1].city)
                                            //OR console.log(my_array[1]["city"])


//--------------------------------------------------@@@@@@@@@@@@@@@@@@@@@@@---------------------

var number=Math.random();                       // it is never gonna be 1. it will  always print values between 0 to 1.

console.log(number);
 //-----------------------------------
 var random_number=Math.floor(Math.random()*10);      // with Math.floor it will return inter value like 2,4,5,6.....

 console.log(random_number);



-------------------------------************************************------------------------------- 
                                trying to chg const with try and catch block


function chg_const()
{



"use strict" // strict mode    it won't let u use illegal syntax like assign const var 2 tyms
 const const_num={
     "no":88
 };
 Object.freeze(const_num);// it helps u to make all the values of object immutable

 try{
    const_num.no=99;
 }
 catch(exp){
     console.log(exp);
 }
return const_num.no;
}

var number=chg_const();
console.log(number);
 -----------------------------------------------------------------------------------------------------------
 
// anonymous function/arrow function and make it even more shorter

var cal=function(){
    console.log("cya");
    return new Date(2020,11,22,20);
};
console.log(cal());

---------------------
var cal =new Date();
console.log(cal);

//----------------------------@@@@@@@@@@@@ arrow function

const sum = () => 4+6;
console.log(sum());

var new_arr=(arr,arr1) => arr.concat(arr1);
console.log(new_arr([12,"aj",6,99],[23,1,4,56]));

--------------------------------------------%%%%%%%%%%%%%%%%%%%%%%%%%%%%--------------------------
                                print only positive integers square value
var my_arr=[1,2,4,-1,0,10,9,-3,-4];

var med_arr= (my_arr) => {
const new_arr=my_arr.filter(num => Number.isInteger(num) && num>0).map(x => x*x);
return new_arr;
}
var new_arr=med_arr(my_arr);
console.log(new_arr);

-----------------------------------------------------------------------------------------------------------------------------------
                                            write higher order of arrow function

const increament=(function(){
    return function increament(num,val=10){
        return num+val;
    };
})();                                                                   
                                                                                    // o/p - 102,100
console.log(increament(100,2));
console.log(increament(90));

or 


const increament=(() => (num,val=10) => num+val)();                    // ()() --its just same like Date()
console.log(increament(100,2));
console.log(increament(90))
 
-------------------------------------rest operator(...)-------------------------------

var my_arr=(function(){
    return function myarr(x,y,z){
        var arr=[x,y,z];
        return arr.reduce((a,b) => a+b,0);
    };
})();
console.log(my_arr(1,2,3));

var my_arr=(function(){
    return function myarr(...arr){                                          // rest operation 
                                                                            //findindex()  it work with function which retuen value
        const i=arr.indexOf(6)                                            // find indesx of value
        console.log(i);                    
        return arr.reduce((a,b) => a+b,0);
    };
})();
console.log(my_arr(1,2,3,5,6,3,4,2))

var my_arr=(...arr) => {                                         // orfunction(...arr) 
                                                                            //findindex()  it work with function which retuen value
        const i=arr.indexOf(6)                                            // find indesx of value
        console.log(i);                    
        return arr.reduce((a,b) => a+b,0);
    };
console.log(my_arr(1,2,3,5,6,3,4,2,7,7))

----------------------------------------------%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%-------------------
                                            SPREAD OPERATOR (...) --> it just lokk same as rest operator or u can say that it is the another way of using rest operator.

var arr1=["JAN","FEB","MAR","APR","MAY"];
var arr2;
(function(){
    //arr2=arr1;                   // if i do this the chg in arr1 will reflect in arr2 so to avoid that we have to copy whole arr1 to arr2.  
    arr2=[...arr1]                   // so this is called spread operator. 
    arr1[0]="aj";

})();
console.log(arr2)

--------------------------------------------------------------**************************-------------------------
                                                    distructive assignment

var my_arr={a:3,b:7,c:10};
//const a=my_arr.a;                                                // traditional way 
//const b=my_arr.b;
//const c=my_arr.c;

const {a:x,b:y,c:z}=my_arr;                                            // shorter method 
console.log(x,y,z);

                                                using distructive assignment in nested object

var my_obj={
    number:{max:200,
mid:100,
call:999,
min:10,
def:1},
alphabet:{a:1,
    b:2,
    c:3
}
    };

const {number:{min:smaller}}=my_obj;                     
const {alphabet:{c:third}}=my_obj;             
console.log(smaller,third);

-------------------------------------------------------------------------------------------------
                                        using distructive assignment in array


//var list=[1,2,3,4,5,6,7,8];
//   const [x,y]=list  OR
                                                                // in array distructive assignment works in sequence .                                 
var [x,y]=[1,2,3,4,5,6,7,8,9];

console.log(x,y);
--------------------------------------------
                                        use of distructive assignment and rest operator

var my_arr=[2,3,4,55,667,9,88,0,10];
var new_arr=([ , ,...arr]) => {
    return arr
}
console.log(new_arr(my_arr));
--------------------------------------------------------------------------------------------------------------
                                               passing distructive assignnment in function
var my_obj={
max:200,
mid:100,
call:999,
min:10,
def:1,
b:2,
c:3
};
function sum_max_min({max,min}){                             //it helps in api to avoid loading of unnecessay data.
    return max+min;                        
}
console.log(sum_max_min(my_obj));

----------------------------------------------------------------------------------------
                                    creating string with template literal
var name=prompt("enter name");
var age=prompt("enter age");
var str=`i name is  ${name} and i am ${age} yr old`;
console.log(str);

------------------------------------------------------------------------------------------

write concise object literal declarations using simple fields

const create_person=(name,age,gender) => {
    return my_obj={
        name:name,
        age:age,
        gender:gender
    };
};
console.log(create_person("aj",20,"m"));
or 

const create_person=(name,age,gender)=({name,age,gender});
console.log(create_person);

------------------------------------------------------------------------------------------------------------------------

var fun=new hc(temp);
const d










































































































 












