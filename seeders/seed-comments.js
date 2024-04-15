const db = require('../models')

// To use await, we need an async function.
async function seed() {
    // Get the place, H-Thai-ML
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })

    // Create a fake sample comment.
    let comment = await db.Comment.create([{
        author: 'Fanished Fran',
        rant: false,
        stars: 2.5,
        content: 'You rock!',
    }, 
    {
        author: 'Hungry Buddy',
        rant: false,
        stars: 4.5,
        content: 'Wow, simply amazing! Highly recommended!',
    },
    {
        author: 'Hungry cool Fran',
        rant: true,
        stars: 2.0,
        content: 'Nice coffee, but I expected better!',  
    }] )

    // Add that comment to the place's comment array.
    place.comments.push(comment.id)

    //save the place now that it has comment
    await place.save()
    
    // Exit the program
    process.exit()
}

seed()
