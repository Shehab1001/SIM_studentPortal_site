let nextBtn = document.querySelector(".nextBtn")
let errorAlert = document.querySelector(".alert")
let count = 0
let subjectContainer = []
let subjectsDetails = [
    { subjectId: "4170101", subjectName: "Mobile App", subjectHours: "3", subjectAvability: "Available", subjectPrerequest: "4170100", subjectCampus: "Shatby", subjectSituation: "Not yet", subjectGpa: "-" },
    { subjectId: "04170101", subjectName: "Math (I)", subjectHours: "2", subjectAvability: "Available", subjectPrerequest: "-----", subjectCampus: "Shatby", subjectSituation: "Passed", subjectGpa: "B" },
    { subjectId: "04170210", subjectName: "Software Analysis and Verification", subjectHours: "3", subjectAvability: "Not Available", subjectPrerequest: "04170207", subjectCampus: "Shatby", subjectSituation: "Passed", subjectGpa: "B+" },
    { subjectId: "04170213", subjectName: "Computer Animation Techniques", subjectHours: "3", subjectAvability: "Not Available", subjectPrerequest: "04170205", subjectCampus: "Shatby", subjectSituation: "Not yet", subjectGpa: "-" },
    { subjectId: "04170206", subjectName: " Data Structure", subjectHours: "3", subjectAvability: "Available", subjectPrerequest: "04170203", subjectCampus: "Shatby", subjectSituation: "Passed", subjectGpa: "A-" },
    { subjectId: "04170309", subjectName: "The User Interface Design", subjectHours: "3", subjectAvability: "Not Available", subjectPrerequest: "04170203", subjectCampus: "Shatby", subjectSituation: "Not yet", subjectGpa: "-" },
    { subjectId: "04170102", subjectName: "Math (II)", subjectHours: "2", subjectAvability: "Not Available", subjectPrerequest: "04170101", subjectCampus: "Shatby", subjectSituation: "Passed", subjectGpa: "A" },
    { subjectId: "04170310", subjectName: "Computational Complexity", subjectHours: "3", subjectAvability: "Not Available", subjectPrerequest: "04170307", subjectCampus: "Shatby", subjectSituation: "Not yet", subjectGpa: "-" },
    { subjectId: "04170208", subjectName: " Multimedia Systems", subjectHours: "3", subjectAvability: "Available", subjectPrerequest: "04170203", subjectCampus: "Shatby", subjectSituation: "Passed", subjectGpa: "A-" },
    { subjectId: "04170311", subjectName: "Graphic Programming", subjectHours: "3", subjectAvability: "Not Available", subjectPrerequest: "04170208", subjectCampus: "Shatby", subjectSituation: "Not yet", subjectGpa: "-" },
    { subjectId: "04170107", subjectName: "Introduction to probability", subjectHours: "2", subjectAvability: "Available", subjectPrerequest: "-----", subjectCampus: "Shatby", subjectSituation: "Passed", subjectGpa: "B-" },
    { subjectId: "04170409", subjectName: "Cloud Software Development", subjectHours: "3", subjectAvability: "Not Available", subjectPrerequest: "04170303", subjectCampus: "Shatby", subjectSituation: "Not yet", subjectGpa: "-" },
    { subjectId: "04170201", subjectName: "Math (III)", subjectHours: "2", subjectAvability: "Available", subjectPrerequest: "04170102", subjectCampus: "Shatby", subjectSituation: "Passed", subjectGpa: "A-" },
    { subjectId: "04170403", subjectName: "Web Programming", subjectHours: "3", subjectAvability: "Available", subjectPrerequest: "04170203", subjectCampus: "Shatby", subjectSituation: "Passed", subjectGpa: "B+" },
    { subjectId: "04170404", subjectName: "Mobile Application Development", subjectHours: "3", subjectAvability: "Not Available", subjectPrerequest: "04170303", subjectCampus: "Shatby", subjectSituation: "Not yet", subjectGpa: "-" },
    { subjectId: "04170304", subjectName: "Software Requirements Analysis", subjectHours: "3", subjectAvability: "Available", subjectPrerequest: "04170207", subjectCampus: "Shatby", subjectSituation: "Passed", subjectGpa: "A-" },
    { subjectId: "04170405", subjectName: "Advanced Methods for Multimedia", subjectHours: "3", subjectAvability: "Not Available", subjectPrerequest: "04170208", subjectCampus: "Shatby", subjectSituation: "Not yet", subjectGpa: "-" },
    { subjectId: "04170202", subjectName: "Math (IV)", subjectHours: "2", subjectAvability: "Available", subjectPrerequest: "04170201", subjectCampus: "Shatby", subjectSituation: "Passed", subjectGpa: "B-" },
    { subjectId: "04170301", subjectName: "Linear Algebra", subjectHours: "2", subjectAvability: "Not Available", subjectPrerequest: "-----", subjectCampus: "Shatby", subjectSituation: "Not yet", subjectGpa: "-" },
    { subjectId: "04170204", subjectName: "Computational Tools for Data Science", subjectHours: "3", subjectAvability: "Available", subjectPrerequest: "04170108", subjectCampus: "Shatby", subjectSituation: "Passed", subjectGpa: "C+" },
    { subjectId: "04170306", subjectName: "AI for Game", subjectHours: "3", subjectAvability: "Not Available", subjectPrerequest: "04170205", subjectCampus: "Shatby", subjectSituation: "Not yet", subjectGpa: "-" },
    { subjectId: "04170203", subjectName: "Object Oriented Programming", subjectHours: "3", subjectAvability: "Available", subjectPrerequest: "04170108", subjectCampus: "Shatby", subjectSituation: "Passed", subjectGpa: "B" },
    { subjectId: "04170302", subjectName: "Numerical Computation", subjectHours: "2", subjectAvability: "Not Available", subjectPrerequest: "-----", subjectCampus: "Shatby", subjectSituation: "Not yet", subjectGpa: "-" },
    { subjectId: "04170305", subjectName: "Database", subjectHours: "3", subjectAvability: "Available", subjectPrerequest: "04170204", subjectCampus: "Shatby", subjectSituation: "Passed", subjectGpa: "A" },
]

if (localStorage.getItem("totalSubjects") != null) {
    subjectContainer = JSON.parse(localStorage.getItem("totalSubjects"))
    display()
} else {
    subjectContainer = []
}


(function () {
    let sumPassedHours = 0
    let passedContainer = ``
    for (let i = 0; i < subjectsDetails.length; i++) {
        if (subjectsDetails[i].subjectSituation == `Passed`) {
            passedContainer += `
            <tr>
            <td class="id">${subjectsDetails[i].subjectId}</td>
            <td class="id">${subjectsDetails[i].subjectName}</td>
            <td class="id">${subjectsDetails[i].subjectHours}</td>
            <td class="id">${subjectsDetails[i].subjectAvability}</td>
            <td class="id">${subjectsDetails[i].subjectPrerequest}</td>
            <td class="id">${subjectsDetails[i].subjectCampus}</td>
            <td class="badge bg-primary text-white m-1">${subjectsDetails[i].subjectSituation}</td> 
            <td class="id">${subjectsDetails[i].subjectGpa}</td>
            </tr> `
            sumPassedHours += Number(subjectsDetails[i].subjectHours)
            count++
        }
        document.getElementById("passedSubjectsHours").innerHTML = sumPassedHours
        document.getElementById("passedSubjects").innerHTML = passedContainer
    }
    show()
})()


function show() {
    let sumTotalHours = 0
    let container = ``
    for (let i = 0; i < subjectsDetails.length; i++) {
        if (subjectsDetails[i].subjectSituation == `Not yet` && subjectsDetails[i].subjectGpa == "-") {
            container += `
            <tr>
            <td><input class="check" type="checkbox" name="checkSubject"></td>
            <td class="id">${subjectsDetails[i].subjectId}</td>
            <td class="id">${subjectsDetails[i].subjectName}</td>
            <td class="id">${subjectsDetails[i].subjectHours}</td>
            <td class="id">${subjectsDetails[i].subjectAvability}</td>
            <td class="id">${subjectsDetails[i].subjectPrerequest}</td>
            <td class="id">${subjectsDetails[i].subjectCampus}</td>
            <td class="badge bg-danger text-white m-1">${subjectsDetails[i].subjectSituation}</td>
            <td class="id">${subjectsDetails[i].subjectGpa}</td>
            </tr> `
            sumTotalHours += Number(subjectsDetails[i].subjectHours)
            count++
        }
    }
    document.getElementById("showSubjectsHours").innerHTML = sumTotalHours
    document.getElementById("showSubjects").innerHTML = container
}

function addSubject(i) {
    var subjects = {
        id: subjectsDetails[i].subjectId,
        name: subjectsDetails[i].subjectName,
        hour: subjectsDetails[i].subjectHours,
        avalible: subjectsDetails[i].subjectAvability,
        preRequest: subjectsDetails[i].subjectPrerequest,
        campus: subjectsDetails[i].subjectCampus,
        passed: subjectsDetails[i].subjectSituation,
        gpa: subjectsDetails[i].subjectGpa,
    }

    subjectContainer.push(subjects)
    localStorage.setItem("totalSubjects", JSON.stringify(subjectContainer))
    display()
}

console.log(count)

for (let i = 0; i < document.querySelectorAll('.check').length; i++) {
    document.querySelectorAll('.check')[i].addEventListener('click', function (e) {
        if (e.target.checked === true) {
            addSubject(i)
            nextBtn.classList.remove("disabled")
            errorAlert.classList.add("d-none")
            //     if (subjectsDetails[i].subjectSituation == "Passed" && subjectContainer.length == 0) {
            //         nextBtn.classList.add("disabled")
            //         errorAlert.classList.remove("d-none")
            //         errorAlert.innerHTML = `<span><i class="fa-solid fa-circle-exclamation"></i></span> You can't select this course as you already passed it`
            //         myFunction()
            //     } else if (subjectsDetails[i].subjectSituation == "Passed" && subjectContainer.length < 3 ) {
            //         nextBtn.classList.add("disabled")
            //         errorAlert.classList.remove("d-none")
            //        errorAlert.innerHTML = `<span><i class="fa-solid fa-circle-exclamation"></i></span> You can't select a number of courses less than 3 and less than 7 credit hours`
            //   myFunction()
            //     } else if (subjectsDetails[i].subjectSituation == "Passed" && subjectContainer.length > 3 ) {
            //         nextBtn.classList.remove("disabled")
            //         errorAlert.classList.remove("d-none")
            //        errorAlert.innerHTML = `<span><i class="fa-solid fa-circle-exclamation"></i></span> You can't select this course as you already passed it`
            //   myFunction()
            //     } else {

            //     }
        }
    })
}

function display() {
    let sumHours = 0
    let cartona = ``
    for (let i = 0; i < subjectContainer.length; i++) {
        cartona += `<tr>
        <td><button onclick = "deleteSubject(${i})" class="btn btn-danger text-white bg-danger text-capitalize">delete</button></td>
        <td class="id">${subjectContainer[i].id}</td>
        <td>${subjectContainer[i].name}</td>
        <td>${subjectContainer[i].hour}</td>
        <td>${subjectContainer[i].avalible}</td>
        <td>${subjectContainer[i].preRequest}</td>
        <td>${subjectContainer[i].campus}</td>
        <td class="badge bg-danger text-white mt-2">${subjectContainer[i].passed}</td>
        <td>${subjectContainer[i].gpa}</td>
    </tr> `
        sumHours += Number(subjectContainer[i].hour)
    }
        document.getElementById("selectedSubjectsHours").innerHTML = sumHours
    document.getElementById("selectedSubjects").innerHTML = cartona
}

function searchSubject(term) {
    let sumHours = 0
    let cartona = ``
    console.log(term)
    for (let i = 0; i < subjectContainer.length; i++) {
        if (subjectContainer[i].subjectName.toLowerCase().includes(term.toLowerCase()) == true) {
            cartona += `<tr>
    <td><button onclick = "deleteSubject(${i})" class="btn btn-danger text-white bg-danger text-capitalize">delete</button></td>
    <td ${subjectContainer[i].id}</td>
    <td>${subjectContainer[i].name}</td>
    <td>${subjectContainer[i].hour}</td>
    <td>${subjectContainer[i].avalible}</td>
    <td>${subjectContainer[i].preRequest}</td>
    <td>${subjectContainer[i].campus}</td>
    <td class="badge bg-danger text-white m-1">${subjectContainer[i].passed}</td>
    <td>${subjectContainer[i].gpa}</td>
</tr> `
            sumHours += Number(subjectContainer[i].hour)
        }
    }
   
        document.getElementById("selectedSubjectsHours").innerHTML = sumHours
    document.getElementById("selectedSubjects").innerHTML = cartona
}

function deleteSubject(index) {
    subjectContainer.splice(index, 1)
    localStorage.setItem("totalSubjects", JSON.stringify(subjectContainer))
    display()
}

function myFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }
}

// function totalGPA(){
//   let  A = 4 
//   let (B+) = 3.3
//   let  (C+) = 2.3 

//     // D+= 1.3 
//     // F=0 
//     // (A+"-") = 3.7 
//     // B = 3 
//     // C = 2 
//     // D = 1
//     // B- = 2.7 
//     // C- = 1.7 
//     // D- = .7
    
// }