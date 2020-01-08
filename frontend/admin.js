
document.querySelector('#submit').addEventListener('click',()=>{
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const user = {username,password};
    axios.post('/login',user).then((response) => {
    console.log(response.data.message);
    }).catch(()=>{});
})
