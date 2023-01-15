const Author = require("./Author");

const john = new Author("John Doe");

const post =  john.writePost("Titulo do Poste", "Lotem ipsum dolor sic..");

post.addComment("Isaac Pontes", "muito bom!");
post.addComment("Marcelo Junior", "Isso é serio?")