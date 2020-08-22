//exports.myLogger = "hello";
exports.log = () => console.log("loging");

exports.myLogger = {
  myLogger: function (mgs: string) {
    return mgs;
  },
};
