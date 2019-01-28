const objectJournalEntry1 = {
        date: "1/23/2019",
        mood: "pretty jazzed",
        concept: "For loops",
        entry: "Today, our instructors covered for if loops. We saw them employed in functions to cycle through an array of an object representing a cafe worker. The loop would return different console logs depending on whether the items in the objects array matched a coffee order."
}

const objectJournalEntry2 = {
    date: "1/24/2019",
    mood: "tired",
    concept: "creating components in javascript",
    entry: "I feel I started out strong finishing the lightning exercises and taking notes, but after I came back from lunch I feel like I couldn't interpret the instructions for this lesson. My brain had grinded to a halt and it was a wakeup call that this wasn't gonna be a big cake walk. But the professors have been completely forthright about this being a situation that we will find ourselves in and I trust in the process. The chapter concerned the writing of objects to the dom. For loops are used to judge whether students earned a passing grade. Different CSS styles were applied to the DOM objects depending on the scores of the student. I did not complete this assignment. But I will."
}
const objectJournalEntry3 = {
    date: "1/25/2019",
    mood: "pretty jazzed",
    concept: "object fundamentals",
    entry: "We continued working on the creation of objects and methods within them. One of our exercises involved several objects representing meals at Bob's Burgers. Another object representing the restaurant had a function in it that console logged all the meals called by the function. We used the console.table command to view all the data the objects stored in a graph."
}
const ObjectJournalLibrary = {
    library:[],
    logEntry: function(journalEntry){
        this.library.push(journalEntry)
        console.log(`You successfully pushed ${journalEntry.date}!`)
    }
}

ObjectJournalLibrary.logEntry(objectJournalEntry1)
ObjectJournalLibrary.logEntry(objectJournalEntry2)
ObjectJournalLibrary.logEntry(objectJournalEntry3)
console.log(ObjectJournalLibrary.library)
