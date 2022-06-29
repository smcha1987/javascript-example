
const header = document.querySelector('MainPage__SectionTitle-sc-fp90zm-13');


header.addEventListener('click',function (){
       console.log(this); // 이런경우의 this는 addEventListener 의 함수 header 가 this라고 명시적으로 알려져 있다.
});


const obj = {
    addEventListener : function(eventName, callback){
        callback(Obj);
    }    
}



const header = {
    addEventListener : function(eventName, callback){        
        callback.call(this); // this가 header
        callback.call(header);        
    }    
}

header.addEventListener('click',function (){
       console.log(this); // 이런경우의 this는 addEventListener 의 함수 header 가 this라고 명시적으로 알려져 있다.(공식문서를 보기전에 this는 모른다.) this = header 
});


header.addEventListener('click',() =>{
       console.log(this); // 화살표함수는 부모의 this를 따라간다. header 의 부모는 -- > anonyMous 즉 window가 된다.
});
