// class Streamer {
//     #viewers;
    
//     constructor(name, platform, viewers) {
//         this.name = name;
//         this.platform = platform;
//         this.#viewers = viewers;
//     }

//     startStream() {
//     console.log(`${this.name} начал трансляцию на ${this.platform} с таким количествои зрителей ${this.#viewers}!`);
        
//     }

//     // addViewers(amount) {
//     //     if (amount <= 0) {
//     //         return console.log('Введенное значение меньше нуля');
//     //     }
//     //     this.#viewers += amount;
//     // }

//     showInfo() {
//         console.log(`Имя стримера: ${this.name}`);
//         console.log(`Платформа: ${this.platform}`);
//         console.log(`Количество зрителей: ${this.#viewers}`);
        
//     }

//     get viewers() {
//         return this.#viewers;
//     }

//     set viewers(value) {
//         if (value < 0) {
//             console.log("Количество не может быть отрицательным");
//             return;
//         }
//         this.#viewers = value;
//     }

// }

// const user1 = new Streamer("Valeriy", "Twitch", 150)
// const user2 = new Streamer("Peter", "Kick", 350)


// user1.viewers = 300;
// console.log(user1.viewers);
// user1.viewers = -50;
// console.log(user1.viewers);


// class Streamer {
//     constructor(name, platform, viewer){
//         this.name = name;
//         this.platform = platform;
//         this.viewer = viewer;
//     }

//     showInfo() {
//         console.log(`${this.name} мощнейший стример`);
//         console.log(`Врывается на ${this.platform}`);
//         console.log(`И разьебывает вместе с ${this.viewer} зрителями`);
//     }
    
    

// }

// class TwitchStreamer extends Streamer {
//     constructor(name, platform, viewer, subscribers) {
//         super(name, platform, viewer);
        
//         this.subscribers = subscribers;
//     }

//     showSubscribers() {
//         console.log(`Количество подписоты: ${this.subscribers}`);
//     }
    
    
// }

// const user1 = new TwitchStreamer("Valeriy", "Twitch", 300, 15000);

// user1.showSubscribers();

// class Streamer {
//     startStream() {
//         console.log("Запускаем трансляцию...");
//     }
// }

// class TwitchStreamer extends Streamer {
//     startStream() {
//         console.log("Запускаем эфир на Twitch!");
//     }
// }

// class YouTubeStreamer extends Streamer {
//     startStream() {
//         console.log("Запускаем эфир на YouTube!");
//     }
// }


// class Streamer {
//     constructor(name, platform, viewers) {
//         this.name = name;
//         this.platform = platform;
//         this.viewers = viewers;
//     }

//     startStream() {
//                 console.log(`${this.name} запустил стрим на ${this.platform}`);

//     }
// }

// class TwitchStreamer extends Streamer {
//     constructor(name, platform, viewers, subscribers){
//     super(name, platform, viewers)
//         this.subscribers = subscribers;
//     }
//      startStream() {
//                 console.log(`${this.name} запустил стрим на ${this.platform}`);

//     }
//     showSubscribers() {
//         console.log(`Подписоты у ${this.name} - ${this.subscribers}`);
//     }
// }

// class YouTubeStreamer extends Streamer {
//      startStream() {
//         console.log(`${this.name} запустил стрим на ${this.platform}`);
//     }
// }

// const users = [
//     new TwitchStreamer('Peter', 'Twitch', 256, 14000),
//     new YouTubeStreamer('Ann', 'YouTube', 3500, 1200),
//     new TwitchStreamer('Valeriy', 'Twitch', 2, 15)
// ];

// users.forEach(streamer => {
//     streamer.startStream();
// });

// users[0].showSubscribers();
// users[2].showSubscribers();

class Streamer {
    constructor(name, platform, viewers) {
        this.name = name;
        this.platform = platform;
        this.viewers = viewers;
            }
        
    connect() {
        console.log(`Подключение к платформе ${this.platform}`);
    }
    startStream() {
        this.connect();
        console.log('Трансляция запущена!');
    }
}

const start = new Streamer('Valeriy','Twitch', 325);

start.startStream();

