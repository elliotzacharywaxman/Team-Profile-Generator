const Employee = require("../lib/Employee");

test("Can set name value", () => {
    const employee = new Employee("Elliot", "10291", "elliot@gmail.com");
    expect(employee.name).toBe("Elliot")
})

test("Can set ID value", () => {
    const employee = new Employee("Elliot", "10291", "elliot@gmail.com");
    expect(employee.id).toBe("10291")
})

test("Can set Email value", () => {
    const employee = new Employee("Elliot", "10291", "elliot@gmail.com");
    expect(employee.email).toBe("elliot@gmail.com")
})


test("Can get name value", () => {
    const employee = new Employee("Elliot", "10291", "elliot@gmail.com");
    expect(employee.getName()).toBe("Elliot")
})

test("Can get ID value", () => {
    const employee = new Employee("Elliot", "10291", "elliot@gmail.com");
    expect(employee.getId()).toBe("10291")
})

test("Can get Email value", () => {
    const employee = new Employee("Elliot", "10291", "elliot@gmail.com");
    expect(employee.getEmail()).toBe("elliot@gmail.com")
})