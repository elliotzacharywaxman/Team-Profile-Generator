const Manager = require("../lib/Manager");

test("Can set Office number", () => {
    const manager = new Manager("Tom", 34567, "tom@gmail.com", 696969)
    expect(manager.officeNumber).toBe(696969)
})
test("Can get Office number", () => {
    const manager = new Manager("Tom", 34567, "tom@gmail.com", 696969)
    expect(manager.getOfficeNumber()).toBe(696969)
})

