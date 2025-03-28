import sdk from "./1-initialize-sdk.js";

(async () => {
    try {
        const token = await sdk.getContract("0xd77E31a8D952853bEc92bAd330fCa0d32e3d8a10", "token");
        // Log the current roles.
        const allRoles = await token.roles.getAll();

        console.log("👀 Roles that exist right now:", allRoles);

        // Revoke all the superpowers your wallet had over the ERC-20 contract.
        await token.roles.setAll({ admin: [], minter: [] });
        console.log(
            "🎉 Roles after revoking ourselves",
            await token.roles.getAll()
        );
        console.log("✅ Successfully revoked our superpowers from the ERC-20 contract");

    } catch (error) {
        console.error("Failed to revoke ourselves from the DAO trasury", error);
    }
})();