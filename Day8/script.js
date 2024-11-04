async function fetchdata() {
    try{
        let response = await fetch("https://api.github.com/users?per_page=10");
        let data = await response.json();
        console.log(data);
        data.forEach(element =>{
            let h1 =document.createElement('h1');
            h1.textContent=element.login;
            let a= document.createElement("a")
            a.setAttribute('href', element.html_url);
            a.textContent=element.login
            let top=document.getElementById("top");
            top.appendChild(h1);
            top.append(a)
        });
    }catch (error){}
    
}
fetchdata();