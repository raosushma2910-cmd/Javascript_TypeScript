// Retry Pattern with Async/Await
// One simulated API succeeds after two failures;
// another exhausts its retries.

function createFlakyAPI(successAttempt) {
    let attempt = 0;
    return async function () {
        attempt++;
        if (attempt < successAttempt) {
            throw new Error("Attempt " + attempt + ": failed");
        }
        return "Attempt " + attempt + ": success!";
    }
};

async function callWithRetries(apiCall, maxRetries) {
    for (let retry = 0; ; retry++) {
        try {
            return await apiCall();
        } catch (error) {
            if (retry >= maxRetries) {
                throw error;
            }
            console.log("Retrying:", error.message);
        }
    }
}

async function retryTesting() {
    try {
        const result = await callWithRetries(createFlakyAPI(3), 2);
        console.log(result);
    } catch (error) {
        console.error("First API failed:", error.message);
    }

    try {
        await callWithRetries(async function () {
            throw new Error("Service unavailable");
        }, 2);
    } catch (error) {
        console.error("Second API failed after retries:", error.message);
    }
}

retryTesting();