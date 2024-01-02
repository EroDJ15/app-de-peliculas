let loadMoreBtn1 = document.querySelector ('#load-more-1')
let currenItem1 =4;

loadMoreBtn1.addEventListener('click', function(){
    
    let boxes = [...document.querySelectorAll('.box-1')];
    for (let i = currenItem1; i < currenItem1 + 4; i++){
        boxes[i].style.display = 'inline-block';
    }
    currenItem1 += 4;
    if(currenItem1 >= boxes.length){
        loadMoreBtn1.style.display = 'none';
    }
})

let loadMoreBtn2 = document.querySelector ('#load-more-2')
let currenItem2 =4;

loadMoreBtn2.addEventListener('click', function(){
    
    let boxes = [...document.querySelectorAll('.box-2')];
    for (let i = currenItem2; i < currenItem2 + 4; i++){
        boxes[i].style.display = 'inline-block';
    }
    currenItem2 += 4;
    if(currenItem2 >= boxes.length){
        loadMoreBtn2.style.display = 'none';
    }
})

let loadMoreBtn3 = document.querySelector ('#load-more-3')
let currenItem3 =4;

loadMoreBtn3.addEventListener('click', function(){
    
    let boxes = [...document.querySelectorAll('.box-3')];
    for (let i = currenItem3; i < currenItem3 + 4; i++){
        boxes[i].style.display = 'inline-block';
    }
    currenItem3 += 4;
    if(currenItem3 >= boxes.length){
        loadMoreBtn3.style.display = 'none';
    }
})


