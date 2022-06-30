const Engineer = require("../lib/Engineer");

test("Can set github", () => {
    const engineer = new Engineer("Tom", 34567, "tom@gmail.com", "tom.git")
    expect(engineer.github).toBe("tom.git")
})
test("Can get github", () => {
    const engineer = new Engineer("Tom", 34567, "tom@gmail.com", "tom.git")
    expect(engineer.getGithub()).toBe("tom.git")
})