const biggest=(fri_array)=>
    {
        let biggest_name= fri_array[0];
        const name= fri_array.forEach(element => {
            if(element.length>biggest_name.length)
                {
                    biggest_name=element;
                }   
        });
        return biggest_name;
    }
var friends=["rahim","karim","abdul","sadsd","heroAlom"];

const res= biggest(friends)
console.log(res);
