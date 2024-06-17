
   // خت النص
var text = prompt("دخل النص ")
// خت الكلمه
var word = prompt("دخل الكلمه وانا هشوف متكرره ولا لا")

// هنا انا شيلت المسافات
word = word.trim();
text = text.trim();

/// بدور هنا هنا ع الكلمه
var positions = [];
for (var i = 0; i < text.length; i++) {
    if (text.indexOf(word, i) === i) {
        positions.push(i);
        i += word.length - 1;
    }
}


if (positions.length > 0)
  {
    alert("الكلمه موجوده  هنا"+positions.join(","));
  }
  else
  {
    alert("م موجوده يعم")
  }

// عملنا هنا اراي عشان كذا قيمه 
var value = [];
for (i =0; i <5; i++)
  {
    value.push(prompt("ادخل قيمه اول رقم"+ (i+1) +";"));
  }

     // 7. عرض القيم بالترتيب الأصلي
     document.write("<h3>الترتيب الأصلي:</h3>");
     document.write(value.join(", ") + "<br>");

  // الترتيب التصاعدي
     var ascending = value.toSorted();
     ascending.sort(function(a, b){return a - b});//صغير لكبير
     document.write("<h3>الترتيب التصاعدي:</h3>");
     document.write(ascending.join(", ") + "<br>");

     // الترتيب التنازلي
     var descending = value.toSorted();
     descending.sort(function(a, b){return b - a});//كبير لصغير
     document.write("<h3>الترتيب التنازلي:</h3>");
     document.write(descending.join(", ") + "<br>");