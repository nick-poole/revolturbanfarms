window.onload = function () {
  document
    .getElementById("contact")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs.sendForm("contact_service", "contact", this).then(
        function () {
          document.getElementById("contact").reset();
          console.log("Message Sent!");
          alert("Message Sent!");
        },
        function (error) {
          console.log("Error...", error);
          alert("Error. Message not sent.");
        }
      );
    });
};
