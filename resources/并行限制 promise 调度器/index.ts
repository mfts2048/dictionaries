// Date: 2023-03-04 23:44:00
class Scheduler {
    private queue: (() => Promise<any>)[] = [];
    private maxCount: number;
    private runCounts: number = 0;

    constructor(limit: number) {
        this.maxCount = limit;
    }

    add(time: number, message: string) {
        const promiseCreator = () => new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(message);
                resolve(true);
            }, time);
        })
        this.queue.push(promiseCreator);
    }

    taskStart() {
        for (let i = 0; i < this.maxCount; i++) {
            this.request();
        }
    }

    request() {
        if (this.queue.length === 0 || this.runCounts >= this.maxCount) {
            return;
        }
        this.runCounts++;

        const promise = this.queue.shift();
        if (promise && typeof promise === 'function') {
            promise().then(() => {
                this.runCounts--;
                this.request();
            })
        }
    }
}

const scheduler = new Scheduler(2);

scheduler.add(1000, '1');
scheduler.add(500, '2');
scheduler.add(300, '3')
scheduler.add(400, '4')

scheduler.taskStart(); // 2 3 1 4