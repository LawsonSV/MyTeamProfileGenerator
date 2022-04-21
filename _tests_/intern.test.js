const Intern = require("../lib/intern");

test("Check Intern Name", function(){
    var testObject = new Intern("Tim")
    expect(testObject.name).toBe('Tim')
})

test("Check Intern ID", function(){
    var testObject = new Intern("Tim", 26)
    expect(testObject.id).toBe(26)
})

test("Check Intern email", function(){
    var testObject = new Intern("Tim", 26 ,'happy@slappy.com')
    expect(testObject.email).toBe('happy@slappy.com')
})

test("Check getName", function(){
    var testObject = new Intern("Tim")
    expect(testObject.getName()).toBe("Tim")
})

test("Check getId", function(){
    var testObject = new Intern("Tim", 26)
    expect(testObject.getId()).toBe(26)
})

test("Check getEmail", function(){
    var testObject = new Intern("Tim", 26 ,'happy@slappy.com')
    expect(testObject.getEmail()).toBe('happy@slappy.com')
})

test("Check getSchool", function(){
    var testObject = new Intern("Tim", 26, "happy@slappy.com", "UofA")
    expect(testObject.getSchool()).toBe('UofA')
})

test("Check getRole", function(){
    var testObject = new Intern("Tim", 26, "happy@slappy.com", "UofA")
    expect(testObject.getRole()).toBe('intern')
})