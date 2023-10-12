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

/*
分割代入
*/
// const myProfile = {
//   name: "hoge",
//   age: 18,
// };
// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["hoge", 18];
// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/*
デフォルト値、引数
*/
// // デフォルト値なし
// const sayHello1 = (name) => console.log(`こんにちは${name}さん！`);
// sayHello1("hoge");
// sayHello1();

// // デフォルト値あり
// const sayHello2 = (name = "fuga") => console.log(`こんにちは${name}さん！`);
// sayHello2("hoge");
// sayHello2();

/*
スプレッド構文
*/
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);
