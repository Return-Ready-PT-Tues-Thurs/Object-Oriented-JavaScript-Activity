class Tweet {
    MAX_CHAR_COUNT = 140

    constructor(userName, message, letter) {
        this.userName = userName;
        this.message = message;
        this.letter = letter;
    }

    addLetter(){
        this.message = "hello"
        this.letter = ""
        return this.message.concat(this.letter)
        // if (this.message.length < this.MAX_CHAR_COUNT) {
        //     this.message += this.letter;
        // }

    }

    removeLetter(){

    }
}
let tweet = new Tweet()
console.log(tweet.addLetter("h"))