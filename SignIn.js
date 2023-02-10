
const mang = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];

document.getElementById('login').addEventListener('click', (login) =>{
    login.preventDefault()
    function validate(){
        let check = true;
        mang.filter(function(item){
            if (document.getElementById('email').value !== item.email ) {
                document.getElementById('check1').innerHTML = "Email nhập sai "
                check = false
 
           }
           if (document.getElementById('pass').value !== item.password) {
               document.getElementById('check2').innerHTML = "Vui lòng nhập lại password "
               check = false
           }
      
        })
        return check
    }
  const isVal =  validate();
  let online
    if (isVal) { 
        window.location.href = '/home.html'
        localStorage.setItem('online', online=true)
    }
    function hide(){
        document.getElementById('check1').innerHTML = " "
        document.getElementById('check2').innerHTML = " "
    }
    setTimeout(hide,3000);
})