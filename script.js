// ==========================================
// AI FACULTY EMAIL ASSISTANT
// Complete JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ------------------------------------------
    // GET ELEMENTS
    // ------------------------------------------

    const generateBtn = document.getElementById("generateBtn");
    const chatgptBtn = document.getElementById("chatgptBtn");
    const copyBtn = document.getElementById("copyBtn");
    const improveBtn = document.getElementById("improveBtn");

    const formalBtn = document.getElementById("formalBtn");
    const shortBtn = document.getElementById("shortBtn");
    const friendlyBtn = document.getElementById("friendlyBtn");

    const emailType = document.getElementById("emailType");
    const purpose = document.getElementById("purpose");
    const points = document.getElementById("points");
    const tone = document.getElementById("tone");

    const subject = document.getElementById("subject");
    const emailBody = document.getElementById("emailBody");

    const statusMessage = document.getElementById("statusMessage");

    const templateButtons =
        document.querySelectorAll(".template-btn");


    // ------------------------------------------
    // STATUS MESSAGE
    // ------------------------------------------

    function showStatus(message, type = "success") {

        if (!statusMessage) {
            alert(message);
            return;
        }

        statusMessage.textContent = message;

        statusMessage.className =
            "status-message show status-" + type;

        setTimeout(function () {

            statusMessage.className =
                "status-message";

        }, 4000);
    }


    // ------------------------------------------
    // QUICK FACULTY TEMPLATES
    // ------------------------------------------

    templateButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            // VERY IMPORTANT:
            // Prevent page reload / form submission
            event.preventDefault();

            const selectedType =
                button.getAttribute("data-type");

            emailType.value = selectedType;


            // ANNOUNCEMENT
            if (selectedType === "Announcement") {

                purpose.value =
                    "Inform students about an important academic announcement.";

                points.value =
                    "The announcement is about a change or important information. Add the date, time, location, or instructions here.";

            }


            // ASSIGNMENT
            else if (selectedType === "Assignment Reminder") {

                purpose.value =
                    "Remind students to submit their assignment.";

                points.value =
                    "The assignment is due Friday at 5 PM.\nStudents should submit it through Google Classroom.";

            }


            // EXAM
            else if (selectedType === "Exam Notification") {

                purpose.value =
                    "Inform students about an upcoming examination.";

                points.value =
                    "Exam Date: Friday\nTime: 10:00 AM\nVenue: Main Examination Hall\nStudents should arrive 15 minutes early.";

            }


            // ATTENDANCE
            else if (selectedType === "Attendance Reminder") {

                purpose.value =
                    "Remind students about the attendance requirement.";

                points.value =
                    "Students are expected to maintain the required attendance percentage.\nPlease contact the faculty if there is a genuine issue.";

            }


            // MEETING
            else if (selectedType === "Meeting Invitation") {

                purpose.value =
                    "Invite students to attend an academic meeting.";

                points.value =
                    "Meeting Date: Monday\nTime: 2:00 PM\nVenue: Department Seminar Hall\nAttendance is requested.";

            }


            // EVENT
            else if (selectedType === "Event Notification") {

                purpose.value =
                    "Inform students about an upcoming college event.";

                points.value =
                    "Event: College Technical Fest\nDate: Saturday\nTime: 10:00 AM\nVenue: College Auditorium.";

            }


            showStatus(
                "✅ " + selectedType + " template loaded!",
                "success"
            );

            // Scroll to form
            purpose.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        });

    });


    // ------------------------------------------
    // GENERATE EMAIL
    // ------------------------------------------

    if (generateBtn) {

        generateBtn.addEventListener("click", function (event) {

            event.preventDefault();

            const type = emailType.value;
            const purposeText = purpose.value.trim();
            const pointsText = points.value.trim();
            const selectedTone = tone.value;

            if (purposeText === "") {

                showStatus(
                    "⚠️ Please enter the purpose of the email.",
                    "error"
                );

                purpose.focus();

                return;
            }


            showStatus(
                "✨ Creating your professional email...",
                "processing"
            );


            let generatedSubject = "";
            let generatedEmail = "";


            // ASSIGNMENT
            if (type === "Assignment Reminder") {

                generatedSubject =
                    "Assignment Submission Reminder";

                generatedEmail =
`Dear Students,

This is a reminder regarding the assignment submission.

${pointsText}

Please make sure that your assignment is submitted before the specified deadline.

Thank you for your cooperation.

Regards,
Faculty`;

            }


            // ANNOUNCEMENT
            else if (type === "Announcement") {

                generatedSubject =
                    "Important Announcement";

                generatedEmail =
`Dear Students,

I am writing to inform you about the following announcement:

${purposeText}

${pointsText}

Please take note of this information and follow the instructions accordingly.

Thank you for your cooperation.

Regards,
Faculty`;

            }


            // EXAM
            else if (type === "Exam Notification") {

                generatedSubject =
                    "Important Examination Notification";

                generatedEmail =
`Dear Students,

This is to inform you about the upcoming examination.

${purposeText}

${pointsText}

Please make the necessary arrangements and follow all examination instructions.

Regards,
Faculty`;

            }


            // ATTENDANCE
            else if (type === "Attendance Reminder") {

                generatedSubject =
                    "Attendance Reminder";

                generatedEmail =
`Dear Students,

This is a reminder regarding the attendance requirements.

${purposeText}

${pointsText}

Students are requested to maintain the required attendance and take the necessary action.

Thank you for your cooperation.

Regards,
Faculty`;

            }


            // MEETING
            else if (type === "Meeting Invitation") {

                generatedSubject =
                    "Meeting Invitation";

                generatedEmail =
`Dear Students,

You are invited to attend the following meeting.

${purposeText}

${pointsText}

Your participation is requested.

Regards,
Faculty`;

            }


            // EVENT
            else if (type === "Event Notification") {

                generatedSubject =
                    "Upcoming College Event";

                generatedEmail =
`Dear Students,

This is to inform you about an upcoming college event.

${purposeText}

${pointsText}

We encourage you to participate and take note of the event details.

Regards,
Faculty`;

            }


            // GENERAL
            else {

                generatedSubject =
                    "Important Information";

                generatedEmail =
`Dear Students,

I am writing to share the following information:

${purposeText}

${pointsText}

Please take note of the above information.

Thank you for your cooperation.

Regards,
Faculty`;

            }


            subject.value = generatedSubject;

            emailBody.value = generatedEmail;


            showStatus(
                "✅ Email generated successfully!",
                "success"
            );


            // Scroll to result
            emailBody.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        });

    }


    // ------------------------------------------
    // COPY EMAIL
    // ------------------------------------------

    if (copyBtn) {

        copyBtn.addEventListener("click", function (event) {

            event.preventDefault();

            if (emailBody.value.trim() === "") {

                showStatus(
                    "⚠️ Please generate or paste an email first.",
                    "error"
                );

                return;
            }


            const finalEmail =
`Subject: ${subject.value}

${emailBody.value}`;


            navigator.clipboard.writeText(finalEmail)
                .then(function () {

                    showStatus(
                        "✅ Email copied to clipboard!",
                        "success"
                    );

                })
                .catch(function () {

                    // Fallback
                    emailBody.select();

                    document.execCommand("copy");

                    showStatus(
                        "✅ Email copied!",
                        "success"
                    );

                });

        });

    }


    // ------------------------------------------
    // CHATGPT
    // ------------------------------------------

    if (chatgptBtn) {

        chatgptBtn.addEventListener("click", function (event) {

            event.preventDefault();


            const type = emailType.value;
            const purposeText = purpose.value.trim();
            const pointsText = points.value.trim();
            const selectedTone = tone.value;


            if (purposeText === "") {

                showStatus(
                    "⚠️ Please enter the purpose first.",
                    "error"
                );

                purpose.focus();

                return;
            }


            const prompt =
`You are an AI Email Assistant designed specifically for college faculty.

Create a professional academic email.

Email Type:
${type}

Purpose:
${purposeText}

Important Points:
${pointsText}

Tone:
${selectedTone}

Requirements:

1. Create a suitable subject line.
2. Write a professional academic email.
3. Keep the email clear and concise.
4. Do not invent information.
5. Never invent dates, times, names, locations, deadlines, marks, links, or other facts.
6. Preserve all user-provided facts exactly.
7. Use an appropriate greeting.
8. Use an appropriate professional closing.
9. Correct grammar and spelling.
10. Do not add information that was not provided.

Return the result exactly in this format:

SUBJECT:
[subject]

EMAIL:
[email body]`;


            // Copy prompt
            navigator.clipboard.writeText(prompt)
                .then(function () {

                    showStatus(
                        "🤖 ChatGPT prompt copied! Opening ChatGPT...",
                        "success"
                    );

                })
                .catch(function () {

                    showStatus(
                        "🤖 Prompt created. Please copy it manually if needed.",
                        "success"
                    );

                });


            // Open ChatGPT
            setTimeout(function () {

                window.open(
                    "https://chatgpt.com/",
                    "_blank"
                );

            }, 500);

        });

    }


    // ------------------------------------------
    // GRAMMARLY
    // ------------------------------------------

    if (improveBtn) {

        improveBtn.addEventListener("click", function (event) {

            event.preventDefault();


            const email = emailBody.value.trim();


            if (email === "") {

                showStatus(
                    "⚠️ Please generate or paste an email first.",
                    "error"
                );

                return;
            }


            navigator.clipboard.writeText(email)
                .then(function () {

                    showStatus(
                        "✨ Email copied. Opening Grammarly...",
                        "processing"
                    );

                });


            setTimeout(function () {

                window.open(
                    "https://app.grammarly.com/",
                    "_blank"
                );

            }, 500);

        });

    }


    // ------------------------------------------
    // MAKE FORMAL
    // ------------------------------------------

    if (formalBtn) {

        formalBtn.addEventListener("click", function (event) {

            event.preventDefault();


            if (emailBody.value.trim() === "") {

                showStatus(
                    "⚠️ Generate or paste an email first.",
                    "error"
                );

                return;
            }


            let text = emailBody.value;


            text = text
                .replace(/^Hello everyone,/im, "Dear Students,")
                .replace(/^Hi everyone,/im, "Dear Students,")
                .replace(/Thanks!/gi, "Thank you for your cooperation.")
                .replace(/Thanks/gi, "Thank you")
                .replace(/Hey everyone,/gi, "Dear Students,");


            if (!text.includes("Yours sincerely,")) {

                text = text.replace(
                    /Regards,\s*Faculty/gi,
                    "Yours sincerely,\nFaculty"
                );

            }


            emailBody.value = text;


            showStatus(
                "🎓 Email converted to a more formal tone.",
                "success"
            );

        });

    }


    // ------------------------------------------
    // MAKE SHORTER
    // ------------------------------------------

    if (shortBtn) {

        shortBtn.addEventListener("click", function (event) {

            event.preventDefault();


            if (emailBody.value.trim() === "") {

                showStatus(
                    "⚠️ Generate or paste an email first.",
                    "error"
                );

                return;
            }


            const lines =
                emailBody.value
                    .split("\n")
                    .filter(function (line) {
                        return line.trim() !== "";
                    });


            if (lines.length > 7) {

                const shortened =
                    lines.slice(0, 6).join("\n\n");


                emailBody.value =
                    shortened +
                    "\n\nRegards,\nFaculty";

            }


            showStatus(
                "✂️ Email shortened successfully.",
                "success"
            );

        });

    }


    // ------------------------------------------
    // MAKE FRIENDLY
    // ------------------------------------------

    if (friendlyBtn) {

        friendlyBtn.addEventListener("click", function (event) {

            event.preventDefault();


            if (emailBody.value.trim() === "") {

                showStatus(
                    "⚠️ Generate or paste an email first.",
                    "error"
                );

                return;
            }


            let text = emailBody.value;


            text = text
                .replace(
                    /^Dear Students,/im,
                    "Hello everyone,"
                )
                .replace(
                    /Thank you for your cooperation\./gi,
                    "Thank you for your cooperation and support."
                )
                .replace(
                    /Please make sure/gi,
                    "Please remember to"
                );


            emailBody.value = text;


            showStatus(
                "😊 Email converted to a friendlier tone.",
                "success"
            );

        });

    }


    // ------------------------------------------
    // INITIAL MESSAGE
    // ------------------------------------------

    console.log(
        "✅ AI Faculty Email Assistant loaded successfully."
    );

});

function selectTemplate(template) {
    document.querySelectorAll('.template-item').forEach(item => {
        item.classList.remove('active');
    });

    event.currentTarget.classList.add('active');

    document.querySelector('select').value = template;
}

function selectTemplate(element, templateName) {

    // Remove selection from all templates
    document.querySelectorAll('.template-item').forEach(item => {
        item.classList.remove('active');
    });

    // Select clicked template
    element.classList.add('active');

    // Set Email Type dropdown
    const emailType = document.querySelector('#emailType');

    if (emailType) {
        emailType.value = templateName;
    }
}

function selectTemplate(element, templateName) {

    // Remove green tick from all templates
    document.querySelectorAll('.template-item').forEach(item => {
        item.classList.remove('active');
    });

    // Add green tick to the selected template
    element.classList.add('active');

    // Automatically select the matching Email Type
    const emailType = document.getElementById('emailType');

    if (emailType) {
        emailType.value = templateName;

        // Trigger change event
        emailType.dispatchEvent(new Event('change'));
    }
}