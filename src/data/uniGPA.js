import { SourceCode } from "eslint"

export const OMSAS_SCALE_TABLE = [
    ["4.00","9","8","90–100","93–100","94–100","94–100","A+","A","A+"  ],
    ["3.90","","","85–89","84–92","87–93","85–93","A","",""  ],
    ["3.80","","","","","","","","","A"  ],
    ["3.70","8","7","80–84","75–83","80–86","80–84","A-","A-",""  ],
    ["3.30","7","6","77–79","72–74","75–79","75–79","B+","B+","B+"  ],
    ["3.00","","","73–76","69–71","70–74","70–74","B","B","B"  ],
    ["2.70","6","5","70–72","66–68","65–69","65–69","B-","B-",""  ],
    ["2.30","5","4","67–69","64–65","60–64","60–64","C+","C+","C+"  ],
    ["2.00","","","63–66","62–63","55–59","55–59","C","C","C"  ],
    ["1.70","4","3","60–62","60–61","50–54","","C-","C-",""  ],
    ["1.30","","2","57–59","56–59","","","D+","D+","D+"  ],
    ["1.00","","","53–56","53–55","","50–54","D","D","D"  ],
    ["0.70","","","50–52","50–52","","","D-","D-",""  ],
    ["0.00","3","1","≤ 49","≤ 49","≤ 49","≤ 49","E/F","E/F","E/F"  ]
]

Uni_List = {
    1: {name: "Acadia University", cols: [7]}, 2: {name: "University of Alberta", cols: [7]}, 3: {name: "Algoma University", cols: [3]},
    4: {name: "Athabasca University", cols: [7]}, 5: {name: "Bishop's University", cols: [3]}, 6: {name: "Brandon University", cols: [7]},
    7: {name: "Brock University", cols: [3]}, 8: {name: "University of Calgary", cols: [7]}, 9: {name: "Cape Breton University", cols: [3]},
    10: {name: "Carleton University", cols: [7]}, 11: {name: "Concordia University", cols: [7]}, 12: {name: "Dalhousie University", cols: [3,7]},
    13: {name: "University of Guelph", cols: [3]}, 14: {name: "Lakehead University", cols: [3]}, 15: {name: "Laurentian University", cols: [7]},
    16: {name: "Université Laval", cols: [7]}, 17: {name: "University of Lethbridge", cols: [7]}, 18: {name: "University of Manitoba", cols: [9]},
    19: {name: "McGill University", cols: [8]}, 20: {name: "McMaster University", cols: [7]}, 21: {name: "Memorial University", cols: [6]},
    22: {name: "Université de Moncton", cols: [7]}, 23: {name: "Université de Montréal", cols: [7]}, 24: {name: "Mt. Allsion University", cols: [7]},
    25: {name: "Mt. St. Vincent University", cols: [7]}, 26: {name: "University of New Brunswick", cols: [7]}, 27: {name: "Nipissing University", cols: [3]},
    28: {name: "OCAD University", cols: [3]}, 29: {name: "Ontario Tech University", cols: [7]}, 30: {name: "University of Ottawa", cols: [7]},
    31: {name: "University of Prince Edward Island", cols: [3]}, 32: {name: "Université de Quebec", cols: [7]}, 33 : {name: "Queen's University", cols: [3,7]},
    34: {name: "Quest University", cols: [8]}, 35: {name: "University of Regina", cols: [3]}, 36: {name: "Royal Military College", cols: [4,7]},
    37: {name: "Royal Roads University", cols: [7]}, 38: {name: "Ryerson University", cols: [7]}, 39: {name: "University of Saskatchewan", cols: [3]},
    40: {name: "Université de Sherbrooke", cols: [7]}, 41: {name: "Simon Fraser University", cols: [7]}, 42: {name: "St. Francis Xavier Univesity", cols: [3]},
    43: {name: "St. Mary's University", cols: [7]}, 44: {name: "St. Thomas University", cols: [7]}, 45: {name: "Ste-Anne University", cols: [7]},
    46: {name: "Thompson Rivers University", cols: [7]}, 47: {name: "University of Toronto", cols: [3,7]}, 48: {name: "Trent University", cols: [3]},
    49: {name: "Trinity Western University", cols: [7]}, 50: {name: "University of British Columbia", cols: [7]}, 51: {name: "University of Northern British Columbia", cols: [7]},
    52: {name: "University of Victoria", cols: [3,7]}, 53: {name: "University of Waterloo", cols: [3,7]}, 54: {name: "Western University", cols: [3]},
    55: {name: "Wilfrid Laurier University", cols: [7]}, 56: {name: "University of Windsor", cols: [3,7]}, 57: {name: "University of Winnipeg", cols: [7]},
    58: {name: "York University", cols: [9]}
}

const medSchools = {
    1: {name: "University of Toronto"},
    2: {name: "Northern Ontario School of Medicine"},
    3: {name: "Michael G. Degroote School of Medicine (McMaster University)"},
    4: {name: "University of Ottawa"},
    5: {name: "Queen's University"},
    6: {name: "Schulich School of Medicine & Dentistry(Western University)"}
}


function convertGradeToGPA(schoolCode, grade, isPercentage){
    const convColNums = Uni_List[schoolCode].cols
    // Case where a grade can be both letter or percentage
    if (convColNums.length > 1){
        if (isPercentage){
            return getRangeGPA(grade, convColNums[0])
        }
        else {
            return getLetterGPA(grade, convColNums[1])
        }
    }

    return getLetterGPA(grade, convColNums[0])
} 

function getLetterGPA(letter, colNum){
    let gpa = "0.00"
    for(let i = 0; i < OMSAS_SCALE_TABLE.length; i++){
        if (OMSAS_SCALE_TABLE[i][colNum - 1] === letter){
            gpa = OMSAS_SCALE_TABLE[i][0]
        }
    }
    return gpa
}
function getRangeGPA(number, colNum){
    // Check col of each row in table for correct range and return corresponding GPA
    let gpa = "0.00"
    for(let i = 0; i < OMSAS_SCALE_TABLE.length; i++){
        if (numberInRange(OMSAS_SCALE_TABLE[i][colNum - 1], number)){
            gpa = OMSAS_SCALE_TABLE[i][0]
        }
    }
    return gpa
}

function numberInRange(rangeString, number){
    if (rangeString.includes("≤")){
        return number <= 49
    }
    else {
        return number >= rangeString.substring(0,2) && number <= rangeString.substring(3,)
    }
}

function calculateCGPA(){

}