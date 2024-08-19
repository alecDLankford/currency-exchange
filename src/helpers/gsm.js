const {SecretManagerServiceClient} = require('@google-cloud/secret-manager');

async function getSecret() {

    const projectId = process.env.PROJECT_ID;
    const secretId = process.env.SECRET_ID;
    const versionId = 'latest'

    const client = new SecretManagerServiceClient();

    const name = `projects/${projectId}/secrets/${secretId}/versions/${versionId}`;

    try {
        const [response] = await client.accessSecretVersion({name});
        const payload = response.payload.data.toString();
        return payload;
    } catch (error) {
        console.error('Error accessing secret: ', error);
        throw error;
    }
}

module.exports = {getSecret};