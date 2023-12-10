// Function to retrieve all Google Classroom assignments from all classes
function getAllGoogleClassroomAssignments() {
  var studentEmail = 'student@example.com'; // Replace with your email
  var courses = Classroom.Courses.list();
  var allAssignments = [];

//Iterates through course list
  if (courses.courses && courses.courses.length > 0) {
    for (var i = 0; i < courses.courses.length; i++) {
      var courseId = courses.courses[i].id;
      var optionalArgs = {
        studentId: studentEmail
      };

//Gets assignments
      var response = Classroom.Courses.CourseWork.list(courseId, optionalArgs);
      var assignments = response.courseWork;

      if (assignments && assignments.length > 0) {
        allAssignments = allAssignments.concat(assignments);
      }
    }
  }

  return allAssignments;
}

// Function to create tasks in Microsoft To Do using Microsoft Graph API
function createMicrosoftToDoTask(taskTitle, taskDueDate) {
    var accessToken = 'ACCESS_TOKEN'; // Replace with Microsoft Access Token

  var apiUrl = 'https://graph.microsoft.com/v1.0/me/todo/lists/tasks';
  var headers = {
    'Authorization': 'Bearer ' + accessToken,
    'Content-Type': 'application/json'
  };

  var payload = {
    'title': taskTitle,
    'dueDateTime': taskDueDate
  };

  var options = {
    'method': 'POST',
    'headers': headers,
    'payload': JSON.stringify(payload)
  };

  var response = UrlFetchApp.fetch(apiUrl, options);
  var task = JSON.parse(response.getContentText());

  return task;
}

// Function to synchronize Google Classroom assignments to Microsoft To Do tasks
function syncGoogleClassroomToMicrosoftToDo() {
  var assignments = getAllGoogleClassroomAssignments();

  for (var i = 0; i < assignments.length; i++) {
    var assignment = assignments[i];
    var taskTitle = assignment.title;
    var taskDueDate = assignment.dueDate;


    // Create task in Microsoft To Do
    createMicrosoftToDoTask(taskTitle, taskDueDate);
  }
}

// Execute the synchronization process
syncGoogleClassroomToMicrosoftToDo();

}
