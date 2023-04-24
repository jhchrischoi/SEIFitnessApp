module.exports = {
    //index
    //new
    //show
    //create
    //delete
    //edit
    //update
    
    //createApi
    // in order for this to work, I have to write codes in movieAddValidator.js
    // in /public/js
    createApi: async (req, res)=> {
        try{
            const exercise = await Exercise.findById(req.params.exercise_id)
            const exerciseToCreate = req.body
            exercise.push(exerciseToCreate)
            //save the exercise to the database
            await exercise.save()
            // return the user to the exercise show page
            // instead of res.redirect(`/exercises/${req.params.exercise_id}`)
            res.json({
                success: true,
                status:200,
                data:{
                    exercise: exerciseToCreate
                }
            })
        }catch(err){
            res.send(err)
            }
        }
    }