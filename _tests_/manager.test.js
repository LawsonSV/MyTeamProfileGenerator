const Manager = require("../lib/manager");

test("Check Manager Name", function(){
    var testObject = new Manager("Tim")
    expect(testObject.name).toBe('Tim')
})

test("Check Manager ID", function(){
    var testObject = new Manager("Tim", 26)
    expect(testObject.id).toBe(26)
})

test("Check Manager email", function(){
    var testObject = new Manager("Tim", 26 ,'happy@slappy.com')
    expect(testObject.email).toBe('happy@slappy.com')
})

test("Check getName", function(){
    var testObject = new Manager("Tim")
    expect(testObject.getName()).toBe("Tim")
})

test("Check getId", function(){
    var testObject = new Manager("Tim", 26)
    expect(testObject.getId()).toBe(26)
})

test("Check getEmail", function(){
    var testObject = new Manager("Tim", 26 ,'happy@slappy.com')
    expect(testObject.getEmail()).toBe('happy@slappy.com')
})

test("Check getPhone", function(){
    var testObject = new Manager("Tim", 26, "happy@slappy.com", "123-456-7890")
    expect(testObject.getPhone()).toBe('123-456-7890')
})

test("Check getRole", function(){
    var testObject = new Manager("Tim", 26, "happy@slappy.com", "123-456-7890")
    expect(testObject.getRole()).toBe('manager')
})