// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き可能";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き負荷
// val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "hoge",
//   age: 18,
// };
// val4.name = "fuga";
// val4.address = "Tokyo";
// console.log(val4);

// constで定義した配列は要素の変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// /*
// テンプレート文字列
// */
// const name = "hoge";
// const age = "18";

// // 「私の名前はhogeです。年齢は18歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/*
アロー関数
*/
// // 従来の関数定義
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です"));
// const func2 = function (str) {
//   return str;
// };
// console.log(func2("func2です"));

// // アロー関数
// const func3 = (str) => {
//   return str;
// };
// console.log(func3("func3です"));
// const func4 = (str) => str;
// console.log(func4("func4です"));

// const func5 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func5(1, 2));
// console.log(func5(10, 5));
