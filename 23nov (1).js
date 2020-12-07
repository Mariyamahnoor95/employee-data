var students = [
    { id: '1', name: 'ahmedabbas', Fname: 'abbasali', class: '2', section: 'A', monthlyfees: '5500', admissionfees: '5000', reportcard: "marksheet" },
    { id: '2', name: 'rehan', Fname: 'amjad', class: '3', section: 'B', monthlyfees: '5500', admissionfees: '5000', reportcard: "smarksheet" },
    { id: '3', name: 'ibrahim', Fname: 'mudassir', class: '4', section: 'C', monthlyfees: '5500', admissionfees: '5000', reportcard: "tmarksheet" },
    { id: '4', name: 'usama', Fname: 'karim', class: '5', section: 'D', monthlyfees: '5500', admissionfees: '5000', reportcard: "fmarksheet" },
    { id: '5', name: 'fatima', Fname: 'ali', class: '6', section: 'E', monthlyfees: '5500', admissionfees: '5000', reportcard: "ffmarksheet" },
    { id: '6', name: 'fizza', Fname: 'khan', class: '7', section: 'F', monthlyfees: '5500', admissionfees: '5000', reportcard: "smarksheet" },
    { id: '7', name: 'ayesha', Fname: 'mustafa', class: '8', section: 'G', monthlyfees: '5500', admissionfees: '5000', reportcard: "semarksheet" }
];

var studentsIds = students.map(function (sts) {
    return console.log(sts.name);
});
//     var Marksheet=new Map()
//     var phymap=new Map()
//     phymap.set ("TotalMarks", "100")
//     phymap.set("MarksObtained", "75")
//     HamzaMarksheet.set("Physics", phymap)
//     var chemmap=new Map()
//     chemmap.set ("TotalMarks", "100")
//     chemmap.set("MarksObtained", "85")
//     HamzaMarksheet.set("Chemistry", chemmap)
//     var compmap=new Map()
//     compmap.set ("TotalMarks", "100")
//     compmap.set("MarksObtained", "90")
//     HamzaMarksheet.set("Computer", compmap)
//     var mathmap=new Map()
//     mathmap.set ("TotalMarks", "100")
//     mathmap.set("MarksObtained", "95")
//     HamzaMarksheet.set("Maths", mathmap)
//     var urdumap=new Map()
//     urdumap.set ("TotalMarks", "100")
//     urdumap.set("MarksObtained", "75")
//     HamzaMarksheet.set("Urdu", urdumap)
//     studentlist.set("hamza",HamzaMarksheet)
//     console.log(studentlist.size)
//     console.table(studentlist)
//     var bilalMarksheett=new Map()
//     var phymap=new Map()
//     phymap.set ("TotalMarks", "100")
//     phymap.set("MarksObtained", "85")
//     bilalMarksheett.set("Physics", phymap)
//     var chemmap=new Map()
//     chemmap.set ("TotalMarks", "100")
//     chemmap.set("MarksObtained", "75")
//     bilalMarksheett.set("Chemistry", chemmap)
//     var compmap=new Map()
//     compmap.set ("TotalMarks", "100")
//     compmap.set("MarksObtained", "80")
//     bilalMarksheett.set("Computer", compmap)
//     var mathmap=new Map()
//     mathmap.set ("TotalMarks", "100")
//     mathmap.set("MarksObtained", "85")
//     bilalMarksheett.set("Maths", mathmap)
//     var urdumap=new Map()
//     urdumap.set ("TotalMarks", "100")
//     urdumap.set("MarksObtained", "65")
//     bilalMarksheett.set("Urdu", urdumap)
//     studentlist.set("Bilal",bilalMarksheett)
//     console.log(studentlist.size)
//     console.log(studentlist)
//     console.table(bilalMarksheett )
//     var total=0;
//     var obtained=0;
//     var arr=bilalMarksheett.entries()
//     for (item of arr){
//      var persubject = ((bilalMarksheett.get(item[0]).get("MarksObtained")/bilalMarksheett.get(item[0]).get("TotalMarks")))*1
//     00
//     console.log("Percentage of "+item[0]+" :"+ persubject)
//     total=total+parseInt(bilalMarksheett.get(item[0]).get("TotalMarks"))
//     obtained=obtained+parseInt(bilalMarksheett.get(item[0]).get("MarksObtained"))
//     var totalpercentage=(obtained/total)*100
//     }
//     console.log("\n*************** REPORT CARD ***************")
//     console.log("\nGrand Obtained Marks: ",obtained)
//     console.log("Grand Total Marks: ", total)
//     console.log("Final Percentage is: ",totalpercentage,"\n")
//     console.log("\n*************** REPORT CARD ***************\n")    

// // //SCHOOL MANAGNMENT SYSTEM:                         

var studentsdata =new Map()
studentsdata.set('name','M.Hussain')
studentsdata.set('Fname','aneelahmed')
studentsdata.set('class','6')
studentsdata.set('lastclass','5')
studentsdata.set('lastpassingmarks','75')
studentsdata.set('rollnumber','105')


// // //ADMISSIONFEES:                                  
  studentsdata.set ('monthlyfees','5500')
studentsdata.set('extractrculumfees','1000')
studentsdata.set('gamefees','1000') 


// // //MARKSOBTAINPART:                               
studentsdata.set('english','status pass/fail') 
studentsdata.set('urdu','status:pass/fail')
studentsdata.set('isl','status:pass/fail')
studentsdata.set('comp','status:pass/fail') 



console.log(studentsdata.get("comp"))
console.log(studentsdata)





