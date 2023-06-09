// Write your solution in this file!
var employee={name:"John",
    streetAddress:"Nakuru"}


    function updateEmployeeWithKeyAndValue(employee, key, value){
     let newArray = {...employee}
       newArray[key]=value;
       return newArray;
    }


    let destructivelyUpdateEmployeeWithKeyAndValue =(employee, key,value) =>{
        employee[key]=value;
        return employee
    }

    let deleteFromEmployeeByKey = (employee,key)=>{
        let newArray ={...employee};
        delete newArray[key];
        return newArray
    }

    let destructivelyDeleteFromEmployeeByKey = (employee, key) =>{
        delete employee[key];
        return employee;
    }

    