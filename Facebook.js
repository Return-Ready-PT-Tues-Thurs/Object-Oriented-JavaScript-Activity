let post = {
    name: "Kamala Harris",
    title: "Vice President",
    likes:85000000,
    message: "First Female, Black, Asian American Vice President of the United States of America",
    AddLike:function(){
        this.likes+=1;
    }  
    

}

post.message = "Congratulations!"

console.log(post.name)
console.log(post.likes)
post.AddLike()
console.log(post.likes)