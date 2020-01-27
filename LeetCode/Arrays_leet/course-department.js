(() => {
    const seasonMap = new Map([
    ["w", "Winter"],
    ["su", "Summer"],
    ["f", "Fall"],
    ["s", "Spring"]
    ]);
    
    const yearRegex = new RegExp(/((\d{4}|\d{2}))/);
    const seasonRegex = new RegExp(/(([f|w|s]u?))/, "i");
    const departmentRegex = new RegExp(/^([a-z]+)/, "i");
    const departmentCodeRegex = new RegExp(/(\d+)/);
    
    const processInput = input => {
    const output = {};
    const courseArr = input.split(" ");
    const codeLength = courseArr.length;
    
    if (codeLength < 2 || codeLength > 4) {
    return `Error parsing data`
    }
    
    output["Department"] = departmentRegex.exec(courseArr[0]) && departmentRegex.exec(courseArr[0]).groups.department;
    if (!output["Department"]) {
    return `Error parsing Department`
    }
    output["Course Number"] =
    (departmentCodeRegex.exec(courseArr[0]) && departmentCodeRegex.exec(courseArr[0]).groups.code)
    || (departmentCodeRegex.exec(courseArr[1]) && departmentCodeRegex.exec(courseArr[1]).groups.code);
    const rawYear =
    (yearRegex.exec(courseArr[codeLength - 1]) &&
    yearRegex.exec(courseArr[codeLength - 1]).groups.year) ||
    (yearRegex.exec(courseArr[codeLength - 2]) &&
    yearRegex.exec(courseArr[codeLength - 2]).groups.year);
    const rawSemester =
    (seasonRegex.exec(courseArr[codeLength - 1]) &&
    seasonRegex.exec(courseArr[codeLength - 1]).groups.season) ||
    (seasonRegex.exec(courseArr[codeLength - 2]) &&
    seasonRegex.exec(courseArr[codeLength - 2]).groups.season);
    //Assuming year is in the 21st century 
    output["Year"] = rawYear.length === 2 ? `20${rawYear}` : rawYear;
    output["Semester"] = seasonMap.get(rawSemester.toLowerCase());
    return output;
    };
    
    console.log(processInput("CS-211 f 18"));
    console.log(processInput("Math 123 2015 Spring"));
    console.log(processInput("PHY311 18F"));
    console.log(processInput("CHE 411 Su2020"));
    console.log(processInput("5CHE 411 Su2020"));
    console.log(processInput("CHE411Summer2020"));
    
   })();