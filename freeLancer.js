const Earn= (incomes, cost)=>
    {
        if((Array.isArray(incomes)) && ((typeof cost)=='number'))
            {
                const taxed_income= incomes.filter(salary=>salary>=3000)
                const taxes=taxed_income.map(salary=>salary*0.20)
                const total_tax =Sum(taxes)
                const total_cost=cost+total_tax;
                const total_income= Sum(incomes)
                // console.log(total_cost);
                // console.log(total_income);
                // console.log(typeof incomes);
                const saving= total_income-total_cost
                if(saving>=0)
                    {
                        console.log(saving)
                    }
                else
                {
                    console.log("earn more");
                }

            }
        else
        {
            console.log('Invalid input');
        }    
    }

const Sum= (numArray)=>{
    let sum=0
    for(let i=0; i<numArray.length; i++)
        {
            sum+=numArray[i]
        }
    return sum;
}

Earn([1000, 2000, 2500], 5000)

