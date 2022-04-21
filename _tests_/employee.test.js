const Employee = require("../lib/employee");

test("Check Employee Name", function(){
    var testObject = new Employee("Tim")
    expect(testObject.name).toBe('Tim')
})

test("Check Employee ID", function(){
    var testObject = new Employee("Tim", 26)
    expect(testObject.id).toBe(123)
})

test("Check Employee email", function(){
    var testObject = new Employee("Tim", 26 ,'happy@slappy.com')
    expect(testObject.email).toBe('happy@slappy.com')
})

test("Check getName", function(){
    var testObject = new Employee("Tim")
    expect(testObject.getName()).toBe("Tim")
})

test("Check getId", function(){
    var testObject = new Employee("Tim", 26)
    expect(testObject.getId()).toBe(26)
})

test("Check getEmail", function(){
    var testObject = new Employee("Bryan",123 ,'junk@junk.com')
    expect(testObject.getEmail()).toBe('junk@junk.com')
})