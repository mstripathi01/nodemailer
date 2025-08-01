const nodemailer = require("nodemailer");

// create a transporter
// App Passwords for generate the pass 

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tripathi.mayank062@gmail.com",
    pass: "gdkluvqmkpzdjwei",
  },
});

// create  a mail options

const mailOptions = {
  from: "tripathi.mayank062@gmail.com",
  to: "demod7497@gmail.com",
  subject: "Sick Leave Request for 1 July",
  text: `Dear manager,

I hope this message finds you well. I am feeling unwell today and would like to request sick leave for [insert date, e.g., June 30, 2025]. I will ensure to catch up on any missed tasks once I return.

Please let me know if any further information is needed.

Thank you for your understanding.

Best regards,
Mayank Tripathi`,
};

// send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log("Error Occurred", error);
  }
  console.log("Email sent successfully:", info.response);
});

