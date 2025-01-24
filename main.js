import getMenu from "./api.js";
import elements from "./helpers.js";
import renderMenu from "./ui.js";

// Sayfa yüklendiğinde getMenu  fonksiyonunu çalıştır

document.addEventListener("DOMContentLoaded", getMenu);
/* QuerySelectorAll ile çekilen  tüm butonlara aynı anda addEventListener eklemeliyiz.Bunun sebebi querySelectorAll ile çekilen elemanların bir dizi olmasıdır.  */

elements.buttons.forEach((btn)=>{
    /* Tıklanılan elemanın içerisindeki category e eriş */
    btn.addEventListener("click", async (e) => {
        const selectedCategory  = e.target.dataset.category;
     
// ! Db.Json'dan verileri al

       const menu = await getMenu();

       //  Seçili Category'deki verileri al

   const filtredMenu =  menu.filter(
    (item) => item.category == selectedCategory 
);


// ! Ürünler Arasında all kategorisinde bir ürün olmadığından bizim burada tüm ürünleri render etmemiz gerekir


if(selectedCategory == 'all'){
    // * Eğer seçili kategori all ise menü elemanlarını renderla 
    renderMenu(menu);
}
else{
    // ? Seçili kategoriyle ilgili ürünleri renderla 
    renderMenu(filtredMenu)
}


 


    });
});
