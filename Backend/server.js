const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/api/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "raghuu715@gmail.com",       // replace with your email
      pass: "sngxwhvarntgwrdj",         // use Gmail app password
    },
  });

  const mailOptions = {
    from: `"${formData.name}@gmail.com>`, 
    to: "raghuu715@gmail.com",
    subject: formData.subject,
    replyTo: formData.email, // 💡 So when you click "Reply", it goes to the user!
    text: formData.message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Failed to send email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Email server running on http://localhost:${PORT}`);
});
