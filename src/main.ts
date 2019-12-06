import core from "@actions/core";
import github from "@actions/github";
import request from "request-promise-native";

async function run() {
    try {
        // const myInput = core.getInput("myInput");
        // core.debug(`Hello ${myInput} from inside a container`);
        const METHOD = core.getInput("Method", {required: false});
        const HEADERS = core.getInput("Content-type", {required: false});
        const data = core.getInput("data", {required: true});
        const URL = core.getInput("URL", {required: true});
        // // Get github context data
        // const context = github.context;
        // console.log(
        //     `We can even get context data, like the repo: ${context.repo.repo}`
        // );
        const OPTIONS = {
            url: URL,
            method: METHOD,
            headers: HEADERS,
            body: data
        };
        request(OPTIONS)
            .then(res => console.log(`RESPONSE ${res.body}`))
            .catch(err => {
                throw err;
            });
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
