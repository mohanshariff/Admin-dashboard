 const sideMenu =document.querySelector('aside')
 const menuBtn =document.querySelector('#menu-btn')
 const closeBtn =document.querySelector('.close')
 const themeToggler =document.querySelector('.theme-toggler')

 menuBtn.addEventListener("click", () => {
      sideMenu.style.display= 'block'
 })
 closeBtn.addEventListener("click", () => {
      sideMenu.style.display= 'none'
 })

 themeToggler.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme-variables');
      themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

      if(themeToggler.querySelector('span:nth-child(2)').classList.contains('active')){
          themeToggler.querySelector('span:nth-child(1)').classList.remove('active');
    
      }else{
          themeToggler.querySelector('span:nth-child(1)').classList.add('active');
      }
      
      
  });
  
  orders.forEach(order => {
     const {productName, productNumber, paymentStatus, shipping } = order;
      const tr = document.createElement('tr')
      const trContent=`
                  <td> ${productName}</td>
                  <td>${productNumber}</td>
                  <td>${paymentStatus}</td>
                  <td class="${shipping === 'declined' ? 'danger' : shipping === 'pending' ? 'warning' : 'primary'}">${shipping}</td>
                  <td class="primary">details</td>
      `
      tr.innerHTML = trContent
       document.querySelector("table tbody").appendChild(tr)

  })