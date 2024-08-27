export default function handler(req, res) {
  const email = "morgan@neonproductions.co.za";
  const phone = "+27 82 772 8980";

  res.status(200).json({ phone, email });
}
