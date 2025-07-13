function num(nums,target){
    let soma = []
    for(let i = 0;i<nums.length;i++){
        for(let j = i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                soma.push(i,j)
            }
        }
    }
    console.log(soma)
   
}
num([13,13,11,7],26)