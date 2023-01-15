class Comment {
    constructor( userName, content ) {
        this.userName = userName;
        this.content = content;
        this.createAt = new Date();
    }
}

module.exports = Comment;