import renderMenu from "./ui.js";

const getMenu = async () => {
    // * Db.Json'a İstek at //
    const res = await fetch("db.json")
    // Verilen js nesnesini çevir
    const data = await res.json()
    // Data içerisindeki menu dizisini bir değişkene aktar
    const menu = data.menu;


    // * Verileri render et
    
    renderMenu(menu);

 // Verileri ddışarıya dön

    return menu;


}
 export default getMenu;