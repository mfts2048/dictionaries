// https://juejin.cn/post/6968713283884974088#heading-22

class LRU {
    private cache: Map<string, any>;
    private capacity: number;

    constructor(capacity: number) {
        this.cache = new Map();
        this.capacity = capacity;
    }

    get(key: string) {
        if (this.cache.has(key)) {
            const temp = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, temp);
            return temp;
        }
        return -1;
    }

    put(key: string, value: any) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size >= this.capacity) {
            this.cache.delete(this.cache.keys().next().value);
        }
        this.cache.set(key, value);
    }

    // 调试阶段，用来展示当前的缓存情况
    show() {
        for (const [key, value] of this.cache) {
            console.log([key, value]);
        }
    }
}
