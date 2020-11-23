require('dotenv').config();

const { GoogleSpreadsheet } = require('google-spreadsheet');

exports.handler = async (event, context, callback) => {
  const doc = new GoogleSpreadsheet(
    process.env.GATSBY_GOOGLE_SPREADSHEET_ID_FROM_URL
  );

  await doc.useServiceAccountAuth({
    client_email: JSON.parse(process.env.GATSBY_GOOGLE_SERVICE_ACCOUNT_EMAIL),
    private_key: JSON.parse(process.env.GATSBY_GOOGLE_PRIVATE_KEY),
  });

  await doc.loadInfo();
  console.log(doc.title);

  const sheet = doc.sheetsByIndex[0];
  console.log(sheet.title);
  console.log(sheet.rowCount);

  try {
    const created_at = JSON.parse(event.body).payload.created_at;
    const firstName = JSON.parse(event.body).payload.data.firstName;
    const lastName = JSON.parse(event.body).payload.data.lastName;
    const phoneNumber = JSON.parse(event.body).payload.data.phoneNumber;
    const email = JSON.parse(event.body).payload.data.email;
    const projectLocation = JSON.parse(event.body).payload.data.projectLocation;
    const projectType = JSON.parse(event.body).payload.data.projectType;
    const findUs = JSON.parse(event.body).payload.data.findUs;
    const form_name = JSON.parse(event.body).payload.form_name;

    const addedRow = await sheet.addRow([
      created_at,
      firstName,
      lastName,
      phoneNumber,
      email,
      projectLocation,
      projectType,
      findUs,
      form_name,
    ]);

    console.log(`Added Row: ${addedRow}`);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `POST Success - added row ${addedRow._rowNumber - 1}`,
        rowNumber: addedRow._rowNumber - 1, // minus the header row
      }),
    };
  } catch (err) {
    console.error('error ocurred in processing ', event);
    console.error(err);
    return {
      statusCode: 500,
      body: err.toString(),
    };
  }
};
