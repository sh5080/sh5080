
// 1~n 합 num = n(n+1)/2
function add(num){
let page = [];
let i = 1; 
while(true){
    page.push(i)
    i++
    if(page.reduce((a,b)=>a+b)===num){
        break
    }
}
console.log(page)
return page[page.length-1]
}
console.log(add(2701))

// 점점 동서남북으로 차감되는 잔디밭
// 2n(n+1)+1