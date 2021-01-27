let post = {
    name: "Kamala Harris",
    title: "Vice President",
    likes: 85000000,
    message: "@KamalaHarris #FirstFemale, #Black, #Asian #American #VicePresident of the United States of America",
    AddLike: function () {
        this.likes += 1;
    },
    NewMessage: function (input) {
        if (input.length < 140) {
           this.message = input;

        }



    }



}

post["message"] = "Congratulations!"
