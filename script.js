const details = {
    "Diagnostic Equipment": {
        description: "High-precision diagnostic tools for accurate health analysis, including ECG machines, blood analyzers, and more.",
        googleLink: "https://isnmedical.com/medical-diagnostic-equipment-types-and-uses/"
    },
    "Imaging Systems": {
        description: "Advanced imaging technologies such as MRI, CT Scans, and Ultrasound systems for medical diagnostics.",
        googleLink: "https://www.sciencedirect.com/topics/computer-science/imaging-systems"
    },
    "Therapy Equipment": {
        description: "Innovative therapy equipment like ventilators, physiotherapy machines, and rehabilitation devices.",
        googleLink: "https://blog.cmecorp.com/physical-therapy-equipment-list"
    },
    "Endo-Surgury Equipment": {
        description: "An endoscope is a medical device with a light attached. It is used to look inside a body cavity or organ. The scope is inserted through a natural opening, such as the mouth during a bronchoscopy, or the rectum for a sigmoidoscopy. A medical procedure using any type of endoscope is called an endoscopy.",
        googleLink: "https://www.sciencedirect.com/topics/medicine-and-dentistry/endoscopic-device"
    }
};

function showDetails(productName) {
    const modal = document.getElementById("modal");
    const title = document.getElementById("modal-title");
    const description = document.getElementById("modal-description");
    const link = document.getElementById("modal-link");

    // Set dynamic content
    title.innerText = productName;
    description.innerText = details[productName].description;
    link.href = details[productName].googleLink;

    // Show the modal
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.onload = function () {
    window.location.hash = "#products"; // Automatically opens the "Products" section
};

window.onload = function () {
    // Simulate showing details for "Diagnostic Equipment, Imaging Systems, Therapy Equipmentt, Endo-Surgury Equipment"
    showDetails("Diagnostic Equipment, Imaging Systems, Therapy Equipment, Endo-Surgury Equipment");
};

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Contact Form Data:", { name, email, message });

    alert("Thank you for reaching out! We will get back to you shortly.");
    document.getElementById("contact-form").reset(); // Reset form fields
});

const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

const accountSid = 'your-twilio-account-sid';
const authToken = 'your-twilio-auth-token';
const client = twilio(accountSid, authToken);

// Handle POST request
app.post('/send-message', (req, res) => {
    const { name, email, message } = req.body;

    // Send SMS
    client.messages.create({
        body: `New message from ${name} (${email}): ${message}`,
        from: 'http://127.0.0.1:5500/Medical%20Website%20Theme/index2.html',
        to: '+919408462174'
    })
    .then((message) => {
        res.status(200).send('Message sent successfully!');
    })
    .catch((error) => {
        console.log(error);
        res.status(500).send('Error sending message');
    });
});

// Start the server
app.listen(3000, () => console.log('Server started on port 3000'));
