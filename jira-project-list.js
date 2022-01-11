var JiraApi = require("jira-client");
require('dotenv').config({path:'./test.env'});

//listProjects();

async function listProjects() {
    var jira = new JiraApi({
        protocol: process.env.PROTOCOL,
        host: process.env.HOST,
        username: process.env.EMAIL_ID,
        password: process.env.PASSWORD,
        apiVersion: 2

    });

    let projectdata= await jira.getIssue('QF-182');
    let projectsArray=await jira.listProjects();
    let projectName= new Array();
    
   // let projectName=JSON.parse(projectsArray);

    //console.log(projectdata['fields']['assignee']['displayName']);
    //console.log(projectsArray[0]['name']);
    projectsArray.forEach(element => {
        console.log(element['name']);     
        projectName.push(element['name']);
    });
    return projectName;
    //return jira.listProjects();
    //return projectdata['fields']['assignee']['displayName'];
}


async function listProjectDetails(projectKey) {
    var jira = new JiraApi({
        protocol: process.env.PROTOCOL,
        host: process.env.HOST,
        username: process.env.EMAIL_ID,
        password: process.env.PASSWORD,
        apiVersion: 2

    });
    let projectsDetails=await jira.getProject(projectKey);
    return projectsDetails;
}


async function listProjectSprintDetails(projectKey) {
    var jira = new JiraApi({
        protocol: process.env.PROTOCOL,
        host: process.env.HOST,
        username: process.env.EMAIL_ID,
        password: process.env.PASSWORD,
        apiVersion: 2

    });
    let projectsDetails=await jira.getProject(projectKey);
    let projectsDetailsVersions=projectsDetails['versions'];
    let projectSprint= new Array();
    
    projectsDetailsVersions.forEach(element => {
        
         let obj= {'Name':  element['name'],'Description':element['description'],'StartDate':element['startDate'],'releaseDate':element['releaseDate']}
         projectSprint.push(obj);
     });
     return projectSprint;
}





module.exports={
    listProjects,
    listProjectDetails,
    listProjectSprintDetails
}


