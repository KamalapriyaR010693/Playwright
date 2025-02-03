function GradeCalculation(mark){
    switch(true){
        case(mark>=85 && mark<100):
            console.log("A")
            break
        case(mark>=65 && mark<85):
            console.log("B")
            break
        case(mark>=55 && mark<65):
            console.log("C")
            break
        case(mark>=45 && mark<55):
            console.log("E")
            break
        case(mark>=35 && mark<45):
            console.log("E")
            break
        case(mark>=0 && mark<35):
            console.log("F")
            break
        default:
            console.log("Please enter correct numbers ranges from 0-100")
    }
}

GradeCalculation(75)
GradeCalculation(99)
GradeCalculation(120)