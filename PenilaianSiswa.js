let Students = [ 
    { Name : "Rasya", Grade:60},
    { Name : "Dimas", Grade:90},
    { Name : "Afdhan", Grade:50},
    { Name : "Raffa", Grade:85 },
];

Students.forEach(Student => {
    let Grade = "";
    switch (true) {
        case (Student.Grade >= 90):
            Grade = "SS";
            break;
        case (Student.Grade >= 80):
            Grade = "A";
            break;
        case (Student.Grade >= 70):
            Grade = "B";
            break;
        case (Student.Grade >= 60):
            Grade = "C";
            break;
        default:
            Grade = "D";
    }
    console.log(`${Student.Name} get grade ${Grade}`);
});