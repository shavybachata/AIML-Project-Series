const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema({
    procedure: String,
    requirements: String,
    deadline: String
});

// Define the model
const Admission = mongoose.model("Admission", admissionSchema);

const newAdmission = new Admission({
    procedure: 'Fill out the online application form.--> Depending on the program, appear for Thapar University entrance test or provide scores from national-level exams Submit required document Participate in selection process-->Receive admission offer if selected -->-->Accept admission offer by paying fees. Complete registration and enrollment',
    requirements: 'The requirements for admission to Thapar University vary by program but typically include educational qualifications, entrance exam scores, minimum percentage criteria, English language proficiency, and may have additional requirements',
    deadline: 'The deadline is 10th June 2024'
});

// //Save the document using promises
// newAdmission.save()
//     .then(savedAdmission => {
//         console.log('Admission document inserted successfully:', savedAdmission);
//         // Document inserted successfully
//     })
//     .catch(err => {
//         console.error('Error:', err);
//         // Handle error
//     });

// //Export the model
module.exports = Admission;
