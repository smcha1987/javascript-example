'use strict';

// export 하게되면 외부에서도 이 class를 볼수있고 만들수 있다.
export default class Popup {
    constructor (){
       this.popUp = document.querySelector('.pop-up');
       this.popUpText = document.querySelector('.pop-up__message');
       this.popUpRefresh = document.querySelector('.pop-up__refresh');
       this.popUpRefresh.addEventListener('click', ()=> {
            this.onClick && this.onClick();
            this.hide();
       })
    }

    setClickListener(onClick){
        this.onClick = onclick;
    }

    showWithText(text){   
        this.popUpText.innerText = text;
        this.popUp.classList.remove('pop-up--hide');
    
    }

    hide(){
        this.popUp.classList.add('pop-up--hide');
    }

}