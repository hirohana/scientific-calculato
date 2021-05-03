export default function changeRate (req, res) {
  fetch("http://api.aoikujira.com/kawase/json/usd")
    .then(res => res.json())
}