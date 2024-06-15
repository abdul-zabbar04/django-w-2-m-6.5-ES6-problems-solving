const grade= (marks)=>
    {
        if(marks>=80 && marks<=100)
            {
                console.log("You got A+")
            }
        else if(marks>=70 && marks<80)
            {
                console.log("You got A")
            }
        else if(marks>=60 && marks<70)
            {
                console.log("You got A-")
            }
        else if(marks>=50 && marks<60)
            {
                console.log("You got B")
            }
        else if(marks>=40 && marks<50)
            {
                console.log("You got C")
            }
        else if(marks>=33 && marks<40)
            {
                console.log("You got D")
            }
        else if(marks>=0 && marks<33)
            {
                console.log("You got F")
            }
        else
        {
            console.log('Invalid number')
        }
    }
res= grade(67)
