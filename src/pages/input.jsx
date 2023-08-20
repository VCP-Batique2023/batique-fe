
import React, { useState } from "react";
import { db } from '@/modules/firebase_config';
import { collection, addDoc } from 'firebase/firestore';

import Button from "@/components/Button";

export default function Input() {
    const [content, setContent] = useState("");
    const formattedContent = content.replace(/\n/g, "<br>");

    const handleInsert = async () => {
        await addDoc(collection(db, "artikel"), {
            title: "dobel kuot 10",
            content: content, // Use the original content with newline characters
            category: "History",
            img: "https://source.unsplash.com/random/367x217/?batik",
        });
        alert("Data inserted successfully!");
    };
    

    
    

    return (
        <div>
             <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={5}
                cols={40}
                style={{ marginBottom: 10 }}
            />
            <Button
                onClick={handleInsert}
                style={{ marginRight: 5, marginBottom: 8, borderRadius: 20 }}
            >
                Insert
            </Button>
            <div dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, "<br>") }} />

        </div >
    );
}
