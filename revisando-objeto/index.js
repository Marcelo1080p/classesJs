/*const book = {
    title: "Eragon",
    pages: 468,
    published: true,
    isStock: 20,
    tags: ["fantasy", "adventure", "medieval"],
    autor: {
        name: "Cristopher Paolini"
    },
    addOnStock(quantity) {
        this.isStock += quantity
    },
    
}*/

//PascalCase
function Book(title, pages, tags, author) {
  this.title = title;
  this.pages = pages;
  this.tags = tags;
  this.author = author;
  this.published = false;
  
}

console.log(book);

book.addOnStock(50);

console.log(book.isStock);

book.save = function () {
  //salva no banco de dados
};

console.log(book);
