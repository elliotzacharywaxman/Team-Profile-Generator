const Intern = require("../lib/Intern");

test("Can set school", () => {
    const intern = new Intern("Tom", 34567, "tom@gmail.com", "Yale")
    expect(intern.school).toBe("Yale")
})
test("Can get school", () => {
    const intern = new Intern("Tom", 34567, "tom@gmail.com", "Yale")
    expect(intern.getSchool()).toBe("Yale")
})
