Used in Google Apps Script

Need to implement Microsoft To Do API access token

*Putting this here so when I ask Mr. Crow for help I don't forget what I did:

getAllGoogleClassroomAssignments()
    - Fetches assignments using a specified email
    - iterates through all classes the student is enrolled in
    - retrieves assignments as it iterates through the classes using Classroom.Courses.CourseWork.list() method
    - puts all assignments into the array "allAssignments" and returns the array with all the student's assignments

createMicrosoftToDoTask()
    - Creates tasks in Microsoft to do with Microsoft Graph API
    - Takes taskTitle and taskDueDate as parameters
    - The API endpoint is used to create the task by sending a POST request 

syncGoogleClassroomToMicrosoftToDo()
    - Synchronization logic
    - Fetches all GC assignments for the specified student using getAllGoogleClassroomAssignments()
    - For each assignment fetched, also extracts title and due date
    - creates task in MTD by using createMicrosoftToDoTask() 

Synchronizes using syncGoogleClassroomToMicrosoftToDo


- Ask how to get a microsoft access token
