import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
    try {
        const editionDrop = await sdk.getContract("0x3f78A713d6259EaaF41638139D881516E0De1a89", "edition-drop");
        await editionDrop.createBatch([
            {
                name: "Leaf Village Headband",
                description: "This NFT will give you access to NarutoDAO!",
                image: readFileSync("scripts/assets/headband.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})();