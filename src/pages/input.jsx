
import React, { useState } from "react";
import { db } from '@/modules/firebase_config';
import { collection, addDoc } from 'firebase/firestore';
import Button from "@/components/Button";

export default function Input() {
    const [content, setContent] = useState("");

    const handleInsert = async () => {
        const contentWithBr = content.replace(/\n\n/g, "<br>");
            await addDoc(collection(db, "artikel"), {
                title: "Batik: Jejak Estetika dari Warisan Budaya yang Menginspirasi.",
                content: contentWithBr,
                category: "History",
                img: "https://source.unsplash.com/random/367x217/?batik",
            });
            alert("Data inserted successfully!");
      
    };

    // const handleInsert = () => {
    //     const contentWithBr = content.replace(/\n\n/g, "<br>");
    
    //     db.collection("artikel")
    //         .add({
    //             title: "Batik: Jejak Estetika dari Warisan Budaya yang Menginspirasi.",
    //             content: contentWithBr,
    //             category: "History",
    //             img: "https://source.unsplash.com/random/367x217/?batik",
    //         })
    //         .then(docRef => {
    //             console.log("Document written with ID: ", docRef.id);
    //             alert("Data inserted successfully!");
    //         })
    //         .catch(error => {
    //             console.error("Error adding document: ", error);
    //         });
    // };
    

    return (
        <div>
            <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
                value={content}
                onChange={e => setContent(e.target.value)}
            ></textarea>
            <Button
                onClick={handleInsert}
                style={{ marginRight: 5, marginBottom: 8, borderRadius: 20 }}
            >
                Insert
            </Button>
        </div>
    );
}
