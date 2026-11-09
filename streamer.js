class Streamer {
    #viewers;
    
    constructor(name, platform, viewers) {
        this.name = name;
        this.platform = platform;
        this.#viewers = viewers;
    }

    startStream() {
    console.log(`${this.name} начал трансляцию на ${this.platform} с таким количествои зрителей ${this.viewers}!`);
        
    }

    addViewers(amount) {
        this.#viewers += amount;
    }

    showInfo() {
        console.log(`Имя стримера: ${this.name}`);
        console.log(`Платформа: ${this.platform}`);
        console.log(`Количество зрителей: ${this.#viewers}`);
        
    }

    get viewers() {
        return this.#viewers;
    }
}

const user1 = new Streamer("Valeriy", "Twitch", 150)
const user2 = new Streamer("Peter", "Kick", 350)


console.log(user1.viewers);
