const core = require("@actions/core");
const request = require("request-promise-native");

async function run() {
    try {
        const METHOD = core.getInput("Method", {required: false});
        const HEADERS = core.getInput("Headers", {required: false});
        const DATA = core.getInput("data", {required: true});
        const URL = core.getInput("URL", {required: true});
        const OPTIONS = {
            url: URL,
            method: METHOD,
            headers: JSON.parse(HEADERS),
            body: DATA
        };
        console.log(OPTIONS);
        await request(OPTIONS)
            .then(res => console.log(`RESPONSE ${res}`))
            .catch(err => {
                throw err;
            });
    } catch (error) {
        console.log(error);
        core.setFailed("FAIL TO REQUEST");
    }
}

run();
