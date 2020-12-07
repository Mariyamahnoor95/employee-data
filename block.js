class marksheet {
    constructor(name, roll_no) {
        this.roll_no = roll_no
        this._name = name
    }
    print() {
        return this._name + " " + this.roll_no
    }
}
class marks extends marksheet {
    constructor(name, roll_no) {
        super(name, roll_no);
        this._maths;
        this._physics;
        this._chemistry;
        this._english;
        this._urdu;
        this.obtainedMark;
        this.totalMarks;
        this.percent;
    }
    get maths() {
        return this._maths;
    }
    set maths(value) {
        this._maths = value;
    }
    set physics(value) {
        this._physics = value
    }
    get physics() {
        return this._physics
    }
    set chemistry(value) {
        this._chemistry = value
    }
    get chemistry() {
        return this._chemistry
    }
    set english(value) {
        this._english = value
    }
    get english() {
        return this._englishs
    }
    set urdu(value) {
        this._urdu = value
    }
    get urdu() {
        return this._urdu
    }
    get fullName() {
        console.log('inside getter')
        return this._name + " " + this.roll_no
    }
    percentage() {
        this.obtainedMark = this._chemistry + this._english + this._maths + this._urdu + this._physics;
        this.totalMarks = 400;
        this.percent = (this.obtainedMark / this.totalMarks) * 100
        console.log("Total percentage is " + this.percent)
    }
    printmarks() {
        console.log("\n*************** REPORT CARD ***************")
        console.log("\n**NAME:" + this._name + "*")
        console.log("\n**ROLL NO:" + this.roll_no + "*")
        console.log("\nGrand Obtained Marks: ", this.obtainedMark)
        console.log("Grand Total Marks: ", this.totalMarks)
        console.log("Final Percentage is: ", this.percent, "\n")
        console.log("\n*************** REPORT CARD ***************\n")
    }
    grade() {
        if (this.percent > 80) {
            console.log("A-1")
        }
        else if (this.percent <= 80 && this.percent >= 70) {
            console.log("A")
        }
        else if (this.percent < 70) {
            console.log("B")
        }
        else {
            console.log("C")
        }
    }
}
let user = new marksheet("MAHNOOR KHAN", "el-095");
console.log(user.print());
console.log(user.roll_no);
console.log(user);
let hamza = new marks("Hamza khan", "cs-808")
hamza.maths = 89
hamza.physics = 67
hamza.chemistry = 76
hamza.urdu = 69
hamza.english = 75
console.log(hamza.maths)
console.log(hamza)
hamza.percentage()
hamza.printmarks()
hamza.grade()

