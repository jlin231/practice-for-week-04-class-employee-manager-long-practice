const Employee = require(`./employee`)

function _totalSubSalary(manager)  {
    let sum = 0;
    //base case
    debugger
    manager.employees.forEach((employee) => {
        if(employee instanceof Manager){
            debugger
            sum += employee.salary + _totalSubSalary(employee);
        }
        else if(employee instanceof Employee){
            debugger
            sum += employee.salary;
        }
    })
    debugger
    return sum;
}

class Manager extends Employee{
    constructor(name, salary, title, manager, employees = []){
        super(name, salary, title, manager);
        this.employees = employees;
    }
    addEmployee(employee){
        this.employees.push(employee);
        //makes the current employee 
        employee.manager = this;
    }
    calculateBonus(multiplier){
        return multiplier*(this.salary + this._totalSubSalary());
    }

    _totalSubSalary()  {
        let sum = 0;
        //base case
        debugger
        this.employees.forEach((employee) => {
            if(employee instanceof Manager){
                debugger
                sum += employee.salary + _totalSubSalary(employee);
            }
            else if(employee instanceof Employee){
                debugger
                sum += employee.salary;
            }
        })
        debugger
        return sum;
    }
}

module.exports = Manager;