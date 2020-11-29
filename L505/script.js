// დაწერეთ სკრიპტი რომელიც კითხავს მომხმარებელს რისი ყიდვა სურს და თუ შეიტანს სიტყვა „laptop“ შეუცვლის ფონს ყველა ლეპტოპს (მწვანე ფერით) ხოლო თუ შეიტანს სიტყვა „desktop“ ყველა desktop-ს (ლურჯი ფერით).

let input = prompt("What would you like to buy", "");

if (input == "laptop") {
  var result = document.querySelectorAll(".latop-item > div");
  result.forEach((element) => (element.style.backgroundColor = "green"));
} else if (input == "desktop") {
  var result = document.querySelectorAll(".desktop-item > div");
  result.forEach((element) => (element.style.backgroundColor = "blue"));
}
