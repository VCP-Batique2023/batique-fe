import firebase from "firebase/app";
import "firebase/firestore";
import { db } from "./firebase_config";

firebase.initializeApp(db);

const artikel = [
    {
        title: "Batik: Jejak Estetika dari Warisan Budaya yang Menginspirasi.",
        content: `Batik, sebuah seni tekstil yang memikat, mengangkat sejarah panjang kebudayaan 
        dari berbagai belahan dunia, dengan Indonesia sebagai panggung utamanya. Sejarahnya 
        melambangkan aliran zaman ribuan tahun yang lalu, ketika seni pewarnaan kain dengan pola 
        eksklusif digunakan dalam kerangka budaya Jawa, Tiongkok, Mesir, serta India. Tapi tak terbantahkan,
        Indonesia menjuluki batik sebagai mahakarya paling cemerlang dalam genre ini. Jejak sejarahnya muncul
        jelas di tengah-tengah kerajaan Hindu-Buddha di masa lampau, di mana batik menjadi simbol status dan
        warisan budaya yang semakin berharga.\n\n
        Era abad ke-17 menjadi babak penting dalam drama popularitas batik Indonesia, saat daya tariknya 
        menjadi rebutan pedagang Belanda. Melintasi zaman, motif-motif batik bermetamorfosis mengikuti 
        irama budaya, agama, dan geografi nusantara yang beragam. Setiap motif mencitrakan makna mendalam 
        dan narasi tersirat yang merujuk kepada dimensi spiritual maupun kisah historis.\n\n
        Masa kolonialisasi menyaksikan batik berperan sebagai saluran perlawanan terhadap penjajah, 
        suara yang bergema dalam ketidaksetujuan. Kemerdekaan Indonesia pada tahun 1945 menjadikan batik 
        sebagai simbol identitas dan jati diri bangsa. Momentum ini meraih puncaknya saat UNESCO pada tahun 
        2009 menobatkan batik Indonesia sebagai Warisan Budaya Manusia yang mengundang perlindungan dan 
        pengembangan global.\n\n
        Tak hanya menghentikan roda sejarah, batik terus mengalir dengan arus zaman dan melahirkan 
        interpretasi-interpretasi modern. Sentuhan seniman dan perancang merangkul era kontemporer 
        dengan menjalin teknik tradisional batik dalam rupa-rupa desain mutakhir. Batik tak sekadar 
        menjadi busana adat, melainkan juga mahakarya seni yang merefleksikan pesona warisan budaya 
        Indonesia yang berlimpah dan berwarna.`,
        category: "History",
        img: "https://source.unsplash.com/random/367x217/?batik",
    },
];

const artikelCollection = db.collection("artikel");

artikel.forEach(article => {
    const formattedContent = article.content.replace(/\n/g, "<br>");
    article.content = formattedContent;

    artikelCollection.add(article)
        .then(docRef => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(error => {
            console.error("Error adding document: ", error);
        });
});
