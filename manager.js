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

const splinter = new Manager('Splinter', 100000, 'Sensei');
const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
const raph = new Manager('Raphael', 90000, 'Ninja', leo);
const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', raph);
const donnie = new Employee('Donatello', 85000, 'Grasshopper', raph);

console.log(splinter.calculateBonus(0.05)); // => 22500
console.log(leo.calculateBonus(0.05)); // => 17500
console.log(raph.calculateBonus(0.05)); // => 13000

module.exports = Manager;