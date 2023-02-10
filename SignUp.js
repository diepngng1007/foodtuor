let userArray = []

let State = null

document.getElementById('sumb').addEventListener('click', (event) => {
    event.preventDefault()
    userArray.push({
        email: document.getElementById('email').value,
        password: document.getElementById('pass').value,

    });
   



    const mang = JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')):[]
  
    function isval() {
        let isV = true
        if (document.getElementById('email').value === '') {
            document.getElementById('check1').innerHTML = 'nhập lại email'
            document.getElementById('check1').setAttribute('style', 'color:red; animation: font1 0.5s')    
            isV = false
        }
        if (document.getElementById('fname').value === '') {
            document.getElementById('check2').innerHTML = 'nhập lại full name'
            document.getElementById('check2').setAttribute('style', 'color:red; animation: font1 0.5s')    
            isV = false
        }
        if (document.getElementById('pass').value === '') {
            document.getElementById('check3').innerHTML = 'password không được để trống'
            document.getElementById('check3').setAttribute('style', 'color:red; animation: font1 0.5s')    
            isV = false
        }
        if (document.getElementById('re_pass').value === '' || document.getElementById('re_pass').value != document.getElementById('pass').value)  {
            if (document.getElementById('re_pass').value === '') {
                document.getElementById('check4').innerHTML = 'password không được để rỗng'
            }else{document.getElementById('check4').innerHTML = 'password phải trùng nhau'}
            document.getElementById('check4').setAttribute('style', 'color:red; animation: font1 0.5s')    
            isV = false
        }

        mang.filter(function (item) {
            if (item.email === document.getElementById('email').value) {
                document.getElementById('check1').innerHTML = "email đã tồn tại"
                document.getElementById('check1').setAttribute('style', 'color:red; animation: font1 0.5s')  
                isV = false
            }
})
        return isV
      
    }
   

    const isV = isval()
    
    if (isV) {
        localStorage.setItem('user',JSON.stringify(userArray))
    }
    
    
    function check1() {
        document.getElementById('check1').innerHTML = '' 
        document.getElementById('check2').innerHTML = '' 
        document.getElementById('check3').innerHTML = '' 
        document.getElementById('check4').innerHTML = '' 
    }
    
    setTimeout(check1,3000)
})



