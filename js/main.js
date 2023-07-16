let elPostForm = document.querySelector('.post__form') 
 
elPostForm.addEventListener('submit', (e)=> { 
    e.preventDefault() 
        console.log(e.target.name.value); 
        console.log(e.target.phone.value); 
        fetch('https://64b3d44e0efb99d862686afa.mockapi.io/users',{ 
            method:'POST', 
            headers:{'Content-type' : 'Application/json'}, 
            body: JSON.stringify({ 
                name: e.target.name.value, 
                surname: e.target.surname.value ,
                phone: e.target.phone.value,
                birth: e.target.birth.values,
                email: e.target.email.value,
            }) 
        }) 
        .then((res)=> res.json()) 
        .then((data)=> console.log(data)) 
 
    })