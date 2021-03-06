const express = require("express");
const app = express();
const cors = require("cors");


var jiramethod= require("./jira-project-list.js");

app.use(cors());


app.get("/", (req, res) => {
    res.send("starts new nodejs project");
});

app.get("/listallprojects", async(req, res) => {
    res.json(await jiramethod.listProjects());
});

app.get("/getprojectdetails", async(req, res) => {
    req.query.projectkey;
    res.json(await jiramethod.listProjectDetails(req.query.projectkey));
});

app.get("/getprojectsprintdetails", async(req, res) => {
    req.query.projectkey;
    res.json(await jiramethod.listProjectSprintDetails(req.query.projectkey));
});

app.get("/getassigneeopenissues", async(req, res) => {
    req.query.assigneename;
    res.json(await jiramethod.AssigneeOpenIssues(JSON.stringify(decodeURI(req.query.assigneename))));
});
app.listen(5000, () => console.log("listening on port 5000"));