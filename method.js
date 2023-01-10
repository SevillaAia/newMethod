//Task1

const vote = {
    getVoteCount(upVotes, downVotes){
        const count = upVotes - downVotes;
        if (count > 0){
            console.log(count)
            } 
        else{console.log (`invalid vote`)}
    }
}

vote.getVoteCount(13, 2)
vote.getVoteCount(2, 33)
vote.getVoteCount(132, 132)


//Task2

const volOfBox = {
    totalBoxVol (height,width,length){
        let total = height*width*length;{
            console.log(`total volume of box is ${total}`);
        }
    }
}

volOfBox.totalBoxVol(2, 5, 1)
volOfBox.totalBoxVol(4, 2, 2)
volOfBox.totalBoxVol(2, 3, 5)

//Task3

const lukeFamily = {
    name: "Luke",

    relationToLuke(family){
        if (family === "Darth Vader"){
            console.log(`${this.name}, I am your Father`)
        }
        else if(family === "Leia"){
            console.log(`${this.name}, I am your Sister`)
        }
        else if(family === "Han"){
            console.log(`${this.name}, I am your brother in Law`)
        }
    }
}

lukeFamily.relationToLuke(`Darth Vader`)
lukeFamily.relationToLuke(`Leia`)
lukeFamily.relationToLuke(`Han`)


