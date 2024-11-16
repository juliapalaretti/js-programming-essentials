let userRole = "employee";
let message = "";

switch (userRole) {
    case "employee":
        message = "Employees have access to dietary services.";
        break;
    case "enrolledMember":
        message = "Enrolled members have access to dietary services and one-on-one interactions with a dietician";
        break;
    default:
        message = "It's necessary to enroll to avail this facility";
}

console.log(userRole + ' - ' + message);