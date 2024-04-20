const Admission = require('../admissionModel');
const express = require("express");
const router = express.Router();

router.post('/', async (req, res) => {
    const query = req.body.queryResult.queryText;
    const intentName = req.body.queryResult.intent.displayName;

    try {
        // Retrieve admission details from MongoDB
        const admissionDetails = await Admission.findOne();

        // Construct the response to be sent back to Dialogflow
        let responseText;

        // Check the intent name and customize the response accordingly
        switch (intentName) {
            case 'Aprocess_Arequirement_Adeadline':
                responseText = `The Admission Procedure: ${admissionDetails.procedure}\nand the ${admissionDetails.requirements}\nand the ${admissionDetails.deadline}`;
                break;
            case 'Admission_procedure':
                responseText = `The Admission Procedure: ${admissionDetails.procedure}`;
                break;
            case 'Admission_deadlines':
                responseText = `Deadline: ${admissionDetails.deadline}`;
                break;
            case 'Aprocedure_Arequirement':
                responseText = `The Admission Procedure: ${admissionDetails.procedure}\nand the Requirements: ${admissionDetails.requirements}\n`;
                break;
            case 'Aprocess_Adeadline':
                responseText = `The Admission Procedure: ${admissionDetails.procedure}\nand the Deadline: ${admissionDetails.deadline}`;
                break;
            case 'Arequirements_Adeadline':
                responseText = `Requirements: ${admissionDetails.requirements}\nand the ${admissionDetails.deadline}`;
                break;
            case 'Requirements':
                responseText = `Requirements: ${admissionDetails.requirements}\n`;
                break;
            // Add more cases for other intents as needed
            default:
                responseText = 'Sorry cant fetch ';
        }

        // Construct the response to be sent back to Dialogflow
        const response = {
            fulfillmentText: responseText
        };
        // Send the response back to Dialogflow
        res.json(response);
    } catch (err) {
        // Handle any errors that occur during the process
        console.error('Error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
