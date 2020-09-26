
import { 
    convertGradeToGPA,
    getLetterGPA,
    getALLOMSASGPA,
    getRangeGPA,
    numberInRange,
    calcCGPA,
} from './uniGPA'

let courseList = [
  { schoolId: 0, OMSASID: 20, courseMark: '88', courseWeight: '0.5'},

]


describe('Return list of courses with ')

describe('Return list of courses with their OMSASValue in the form of {courseId, yearId, OMSASValue}', () => {
it("Given list with only a single school", () => {
    
  })

  it("Given school with only Lettter Grade Column", () => {

  })

  it("Given school with Both Percentage and Letter Grade Column and Percentage Grade", () => {

  })

  it("Given school with Both Percentage and Letter Grade Column and Letter Grade", () => {

  })

})

describe('Return if Number belongs to Percentage Range', () => {
it("Number belongs to ranges <= 49", () => {
      expect(numberInRange("43-47", 44)).toBeTruthy()
      expect(numberInRange("44-47", 44)).toBeTruthy()
      expect(numberInRange("≤ 49", 44)).toBeTruthy()
      expect(numberInRange("≤ 49", 50)).toBeFalsy()
  })

it("For Grades belonging in range >= 50 and <= 100", () => {
      expect(numberInRange("43-47", 85)).toBeFalsy()
      expect(numberInRange("43-47", 85)).toBeFalsy()
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