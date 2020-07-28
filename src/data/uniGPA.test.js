
import { 
    convertGradeToGPA,
    getColFromOMSASID,
    getLetterGPA,
    getRangeGPA,
    calcCGPA,
} from './uniGPA'


describe('Get Correct Index (For column in GPA format Lookup) from OMSASID', () => {
it("Given school with only Percentage Grade Column", () => {

  })

  it("Given school with only Lettter Grade Column", () => {

  })

  it("Given school with Both Percentage and Letter Grade Column", () => {

  })

})

describe('Return if Number belongs to Percentage Range', () => {
  it("Number belongs to ranges <= 49", () => {

  })

  it("Number belongs to ranges >= 50 and <= 100", () => {
    
  })

  it("Number is < 0", () => {

  })

  it("Number is > 0", () => {

  })
})


describe("Get OMSAS GPA from Letter Grade", () => {
  it("Letter without +/- sign", () => {

  })

  it("Letter with +/- sign", () => {

  })

  it("Letter > F", () => {

  })

  it("Characters outside range A-Z", () => {

  })

})

describe("Get OMSAS GPA from Percentage Grade", () => {
  it("Grade without %", () => {

  })

  it("Grade with %", () => {

  })

  it("Grade outside Range 0-100%", () => {

  })
})


describe("Calculate Cumulative GPA", () => {
  it("For Single School Year", () => {

  })

  it("For Single School with Multiple Years", () => {

  })

  it("For Multiple Schools and Years", () => {

  })
})