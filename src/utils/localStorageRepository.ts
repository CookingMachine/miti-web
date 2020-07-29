
interface Storage {
    [key: string]: any;
}

const defaultStorage: Storage = {
}

class LocalStorageRepository {
    private storage: Storage;
    private storageKey: string = 'app';

    constructor() {
        let value = localStorage.getItem(this.storageKey);
        if (value) {
            const unsafeStorage: Storage = JSON.parse(value);
            this.storage = this.createSafeStorage(unsafeStorage);
        }
        else {
            this.storage = defaultStorage;
        }
    }

    // --------------- private stuff --------------
    private updateStoragePart(part: Partial<Storage>) {
        this.storage = {
            ...this.storage,
            ...part
        };
        localStorage.setItem(this.storageKey, JSON.stringify(this.storage));
    }

    private createSafeStorage(unsafeStorage: Storage): Storage {
        let safeStorage = {
            ...defaultStorage
        };
        for (const key of Object.keys(defaultStorage)) {
            if (typeof unsafeStorage[key] === typeof defaultStorage[key]) {
                safeStorage[key] = unsafeStorage[key];
            }
        }
        return safeStorage;
    }
}

export const localStorageRepository = new LocalStorageRepository();