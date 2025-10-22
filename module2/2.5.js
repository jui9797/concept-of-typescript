var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
{
  // function with generics
  var createArray = function (param) {
    return [param];
  };
  // dynamic generic function
  var createArrayWithGeneric = function (param) {
    return [param];
  };
  var res1 = createArray("Bangladesh");
  var resGeneric = createArrayWithGeneric("Bangladesh");
  var resGenericObj = createArrayWithGeneric({
    id: 222,
    name: "Mr. Pashan",
  });
  var createArrayWithTuple = function (param1, param2) {
    return [param1, param2];
  };
  var res10 = createArrayWithTuple("Bangladesh", 222);
  var res11 = createArrayWithTuple("Bangladesh", {
    name: "Asia",
  });
  var addCourseToStudent = function (student) {
    // generic type T extends object
    var course = "Next Level Web Development"; // course is fixed
    return __assign(__assign({}, student), {
      // spread opertor here student object contain different properties dynamically
      course: course,
    });
  };
  var student1 = addCourseToStudent({
    name: "Mr X",
    email: "x@gmail.com",
    devType: "NLWD",
  });
  var student2 = addCourseToStudent({
    name: "Mr Y",
    email: "y@gmail.com",
    hasWatch: "Apple Watch",
  });
  console.log(student1);
  console.log(student2);
  //
}
