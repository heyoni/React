//변수선언
var hello = 'world';
//같은 변수를 선언할 때 오류가 나는 것이 좋음 : 바람직하지 않은 결과
var hello = 'korea';

//이게 바람직한 결과 -> let을 권장함
// let w = 'world'
// let w = 'korea'

//const의 범위 : local
//const는 객체나 배열의 요소 수정은 가능함
//객체란 : {} python의 dic과 비슷함 

// ====================================================//
//string literal : 문자열, 변수 편하게 다룰 수 있는 문법
//문자열 합치기 : 1번키 옆에 있는 따옴표로 사용
const v1 = 'hello'
const v2 = 'world'

const p = `${v1} ${v2}!!!`

console.log(p)

// ====================================================//
//for ... of 반복문
//for ... in 은 객체의 키값에만 접근이 가능했음, value에는 접근 불가
//모든 상황에서 사용할 수 있는 것이 아님
// : 키값 생성시 밸류값이 자동으로 생성되는 배열같은 변수에서만 사용가능 ->반대의 경우에는 in을 쓰면됨
let a = [10, 20, 30, 40]
for (let v of a){
    // in일때
    // console.log(array[v])
    // of일때
    console.log(v)
}

// ====================================================//
//Rest Operator : 모든 나머지 인자를 표준 자바스크립트 배열로 대체하기 위한 문법
// function f(a,b,...c){  //여기서 ...을 의미
// }

function printNums(num1, ...num2){
    //궁금하면 파라미터의 점 제거하고 이거 실행해보삼
    // console.log(num1, num2)
    // console.log(arguments);
    console.log(num1, num2)
}

printNums(1,2,3,4,5)

// ====================================================//
//Spread Operator : 함수호출시 인수로 사용하거나 배열 안, 객체 안으로 들어갈 수 있음

function sum(x,y,z){
    return x+y+z;
}

console.log(sum(1,2,3));
let arr = [10, 20, 30];
// 배열의 요소들을 함수의 인수로 사용하고 싶음

// 실행 안됨
// console.log(sum(arr));
// 원래 실행하는 방법
// console.log(sum.apply(null, arr));

//새로운 방법
console.log(sum(...arr))


// 또 다른 방법
function sum(a,b,c,d,e){
    return a+b+c+d+e;
};

let arr1 = [20, 30];

console.log(
    sum(10, ...arr1, 40, 50)
)


//배열에서 사용하기
let front = ['b','c']
let back = ['a',...front,'e','f']
console.log(back)

//배열 복사하기
let arr2 = [1,2,3]
let arr_copy = [...arr2];
// let arr_copy = arr 도 사용할 수 있으나 원래 배열이 변경됨
console.log(arr_copy)


// 객체 안에서 스프레드 오퍼레이터 사용하기
let drinks ={
    cafe : 'latte',
    coca:'cola'
}
let newDrinks ={
    lemon:'tea',
    orange:'juice',
    // drinks
    ...drinks //이렇게 사용해야함
}

console.log(newDrinks)



// ====================================================//
// Arrow Function
// => 으로 사용함
// 1.표현식 결과값 반환 표현식 본문
let arr3 = [1,2,3,4,5];
let arr3 = arr.map(v=>v*2);
console.log(twice)
// 원래 사용법
// let twice = arr.map(function(val){
//     return val*2;
// })


// 2.상태블럭 본문
// 상태를 결정짓는다
let arr3 = arr.map(v=>{
    if (v % 2 === 0){
        console.log('even num')
    }
    else{
        console.log('odd num')
    }
});

// 많이 쓰는 표현법
let arr4 = [10,20,30,40,50]
let arr4 = arr.map((v, i)=>{
    console.log(`i:${i}, v:${v}`)
});
// i : index
// map 함수는 파라미터로 전달된 함수를 인자로 받는데,
// 그 함수의 두번째 인자가 배열의 인덱스값임


// ====================================================//
// class

class Person{
    //초기화
    constructor(region_,gender_){
        this.region = region_;
        this.gender = gender_;
    }

    greetings(val = 'hi'){
        console.log(val)
    }
}

// new연산자가 컨스트럭쳐를 호출하면서 파라미터를 전달해주고 초기값으로 세팅됨
let korean = new Person('Korea', 'male')
console.log(korean);

// 초기화된 값을 변경하기
korean.gender = 'female'
console.log(korean)

korean.greetings();

//상속하기
class American extends Person{
    constructor(region_,gender_,language_){
        //super : 부모클래스에 있는 초기화 룰을 따르겠다
        super(region_,gender_)
        this.language = language_
    }
    greetings(val = 'hello'){
        console.log(val);
    }
}


let american = new American('Usa','female','English')
console.log(american);
american.greetings();
//오버로딩되는 것을 확인할 수 있음 : 부모단에 있는 함수가 아닌 자식단에 있는 함수 실행