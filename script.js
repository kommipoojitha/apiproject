const container=document.getElementById("container")
fetch('https://dummyjson.com/users')
.then((res)=>{
  return res.json();
})
 .then((data)=>{
  console.log(data)
   let list=data.users
   for(let i of list)
   {
  console.log(i.firstName);
   let div=document.createElement('div');
   div.classList.add('div')
   let img=document.createElement('img');
   img.classList.add('img')
   let name=document.createElement('p');
   name.classList.add('name')
  let username=document.createElement('p');
  username.classList.add('username')
 let gender=document.createElement('p');
  gender.classList.add('gender')
  // let username=document.createElement('p');
  // username.classList.add('username')   
  let city=document.createElement('p');
  city.classList.add('city')
  let email=document.createElement('p');
  email.classList.add('email')
  let department=document.createElement('p');
  department.classList.add('department')
  img.src=i.image;
  gender.innerText=i.gender==='female'?"F":'M';
  name.innerText=i.lastName+" "+i.firstName;
  // username.innerText=i.lastName+" "+i.firstName;
  username.innerText=i.firstName;
  city.innerText=i.address.city;
  email.innerText=i.email;
  department.innerText=i.company.department;
  container.appendChild(div);
  div.appendChild(img);
  div.appendChild(name);
  div.appendChild(gender);
  // div.append(secondname);
 div.appendChild(username);
  div.appendChild(city);
  div.appendChild(email);
  div.appendChild(department);
``
   }
 })

