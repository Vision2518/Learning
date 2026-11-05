const user={
    name:"vision",
    email:"vision@example.com"
}
try {
    const response=await fetch("https://jsonplaceholder.typicode.com/users",{
        method:"GET",
        headers:{"content-type":"application/json"}
     ,body:JSON.stringify(user) })
     if(!response.ok)
        throw new Error("Request failed");
    const data= await response.json()
    console.log(data);
} catch (error) {
    
    console.log(error.message);
}

