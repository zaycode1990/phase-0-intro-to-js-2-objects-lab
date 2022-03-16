const employee = {
    name: "Isaiah",
    streetAddress: "2702 Hawthorne Ave"
}

function updateEmployeeWithKeyAndValue(employee, key, value)  {
    return {
        ...employee,
        [key]: "Sam",
        [key]: "11 Broadway"
      };
    }

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = "Sam"
    employee[key] = "12 Broadway"

    return employee
}

function deleteFromEmployeeByKey(employee, key) {
     return {
         ...employee.key,
        delete : key
     }
    }

function destructivelyDeleteFromEmployeeByKey(employee, key) {

 delete employee[key]

 return employee
    
}
