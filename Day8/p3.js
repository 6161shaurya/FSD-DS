async function fetchdata() {
    try{
        let response = await fetch("https://api.github.com/users?per_page=10");
        let data = await response.json();
        console.log(data);
        data.forEach(element =>{
            console.log(`Login ${elemnet.login} Avatar ${element.avatar_url}`);
        });
    }catch (error){}
    
}
fetchdata();