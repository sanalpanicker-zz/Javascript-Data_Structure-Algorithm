class NewPromise {

    constructor(executor) {
        this.promiseChain = [];
        this.handleError = () => {};
        this.resolve = this.onResolve.bind(this);
        this.reject = this.onReject.bind(this);
        executor(this.resolve, this.reject);
    }

    then(scallback) {
        this.promiseChain.push(scallback);
        return this;
    }

    onReject(error) {
        this.handleError(error);
    }

    catch (handleError) {
        this.handleError = handleError;
        return this;
    }

    onResolve() {
        try {
            setTimeout(() => {
                console.log("called resolve");
                this.spromiseChain.forEach((nextExecutor) => {
                    console.log("OnResolve --> " + nextExecutor.toString());
                    nextExecutor();
                })
            }, 1000);
        } catch (error) {
            this.onReject(error);
        }
    }
}

let MyPromise = new NewPromise((resolve, reject) => {
    if (10 < 5)
        resolve();
    else
        reject();
})

MyPromise.then(function () {
        console.log("sucsess")
    })
    .then(function () {
        console.log("sucsess 2")
    })
    .catch((error) => {
        console.log(error);
    })