const end_point = "https://8619102a-d845-4da0-b993-5843de8e8995-00-30ain0kftm61j.spock.replit.dev/"
fetch(end_point)
.then(res=>res.json())
.catch(res=>{
    console.log(res)
})
