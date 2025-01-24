import elements from "./helpers.js";




const renderMenu = (data) => {
   
    
   // Data içerisindeki herbir eleman için bir cart Html'i oluştur
  let menuHtml = data.map(
    (item) => `  <div class="card">
        <img src="${item.img}" alt="" />
        <div class="card-info">
          <div class="name">
            <h3>${item.title}</h3>
            <p>$${Math.round(item.price * 10)} </p>
          </div>
          <div class="desc">
         ${item.desc}
          </div>
        </div>
      </div>`
  );

  // Buradaki html bir dizi elemanın dönülmesi sonucu elde edildiğinden bizim bu dizi içerisindeki ',' leri kaldırmamız gerek.

  menuHtml = menuHtml.join("");

  // Oluşturulan bu html'i Html kısımındaki menu-area içerisine aktar

  elements.menuArea.innerHTML = menuHtml;
};

export default renderMenu;