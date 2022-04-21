const Engineer = require("../lib/engineer");

test("Check Engineer Name", function(){
    var testObject = new Engineer("Tim")
    expect(testObject.name).toBe('Tim')
})

test("Check Engineer ID", function(){
    var testObject = new Engineer("Tim", 26)
    expect(testObject.id).toBe(26)
})

test("Check Engineer email", function(){
    var testObject = new Engineer("Tim", 26 ,'happy@slappy.com')
    expect(testObject.email).toBe('happy@slappy.com')
})

test("Check getName", function(){
    var testObject = new Engineer("Tim")
    expect(testObject.getName()).toBe("Tim")
})

test("Check getId", function(){
    var testObject = new Engineer("Tim", 26)
    expect(testObject.getId()).toBe(26)
})

test("Check getEmail", function(){
    var testObject = new Engineer("Tim", 26 ,'happy@slappy.com')
    expect(testObject.getEmail()).toBe('happy@slappy.com')
})

test("Check getGithub", function(){
    var testObject = new Engineer("Tim", 26, "happy@slappy.com", "GitGrub")
    expect(testObject.getGithub()).toBe('GitGrub')
})

test("Check getRole", function(){
    var testObject = new Engineer("Tim", 26, "happy@slappy.com", "GitGrub")
    expect(testObject.getRole()).toBe('engineer')
})