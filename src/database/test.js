const Database = require ('./db')

const createProffy = require ('./createProffy')

Database.then( async (db) => {
    //insert data
    proffyValue = {
        name: "Diego Fernades", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=400&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4", 
        whatsapp: "19 999999999", 
        bio: "Não existem limites para o que podemos imaginar. Porque somos livres. Buscamos evolução. Somos boosters",       
    }

    classValue = {
        subject: 1, 
        cost: "40", 
        //the proffy_id will come by data base
    }

    classScheduleValues = [
        //class_id will come through the database after the lesson registration
        {
            weekday: 1, 
            time_from: 720, 
            time_to: 1220
        },
        {
            weekday: 0, 
            time_from: 520, 
            time_to: 1020
        }
    ]

   //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consult insert data

    //consult proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consult a teacher's classes and bring the teacher's data and * means everything
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    // the time the person works is from 8 am to 6 pm
    // time_from is 08 must be less than or equal to the requested time
    // time_to needs to be above
    const selecClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "420"
        AND class_schedule.time_to > "420"
    `)

    //console.log(selecClassesSchedules)
    
})