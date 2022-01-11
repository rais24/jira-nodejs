var JIRA = require("../jira-project-list");
var chai = require("chai");
var expect = chai.expect;

describe("Test suit", function () {
    this.timeout(5000);
    it("Test the get all projects method", async function () {
        const result = await JIRA.listProjects();
        expect(result.length).to.be.greaterThan(0);
    });

    it("Test the specfic project", async function () {
        const result1 = await JIRA.listProjectDetails("CNW");
        expect(result1).to.have.property('name');
    });
});
