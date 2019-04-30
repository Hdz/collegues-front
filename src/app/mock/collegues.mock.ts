import { Collegue } from '../models/Collegue';


const d: Date = new Date(1992,7,7);

export const collegueMock :Collegue[] = [];


collegueMock.push(new Collegue("M04","PierrePaul","Paul",new Date('1987-12-18'),"http://fr.web.img4.acsta.net/r_1280_720/medias/nmedia/18/66/75/86/18953143.jpg",'a.drouaud@gmail.com'));
collegueMock.push(new Collegue("M04","Jak", "Robert", new Date('1992-03-31'), "http://fr.web.img4.acsta.net/r_1280_720/medias/nmedia/18/66/75/86/18953143.jpg",'a.drouaud@gmail.com'));
collegueMock.push(new Collegue("M04","Swire", "Rob",  new Date('1988-05-07'),  "http://fr.web.img4.acsta.net/r_1280_720/medias/nmedia/18/66/75/86/18953143.jpg",'a.drouaud@gmail.com'));