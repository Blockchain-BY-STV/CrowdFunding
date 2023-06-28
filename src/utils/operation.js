// TODO 6 - Call buy_ticket entrypoint in the Lottery contract by completing buyTicketOperation

import { tezos } from "./tezos";

// export const buyTicketOperation = async () => {
//     try{
//         // const contract=await tezos.wallet.at("KT1F8k5puUD92QFMovr81Vn6AeZiiL6Eofq6");
//         const contract=await tezos.wallet.at("KT1AhuP4fJKvys4JFSHh97K5oiK6uNmXcvzf");
//         const op =await contract.methods.buy_ticket().send({
//             amount:1,
//             mutez:false,
//         })
//         await op.confirmation(1);
//         // 1 represents that it waits for atleast 1 block after the operation is confirmed
//     }
//     catch(err)
//     {
//         throw err;
//     }
// };
export const ContributeFundOperation = async () => {
    try{
        // const contract=await tezos.wallet.at("KT1F8k5puUD92QFMovr81Vn6AeZiiL6Eofq6");
        const contract=await tezos.wallet.at("KT1AhuP4fJKvys4JFSHh97K5oiK6uNmXcvzf");
        const op =await contract.methods.contribute().send({
            amount:amount,
            mutez:false,
        })
        await op.confirmation(1);
        // 1 represents that it waits for atleast 1 block after the operation is confirmed
    }
    catch(err)
    {
        throw err;
    }
};
// TODO 10 - Call end_game entrypoint in the Lottery contract by completing endGameOperation

// export const endGameOperation = async () => {
//     try{
//         // const contract=await tezos.wallet.at("KT1F8k5puUD92QFMovr81Vn6AeZiiL6Eofq6");
//         const contract=await tezos.wallet.at("KT1AhuP4fJKvys4JFSHh97K5oiK6uNmXcvzf");
//         const op =await contract.methods.end_game().send();
//         await op.confirmation(1);
//         // 1 represents that it waits for atleast 1 block after the operation is confirmed
//     }
//     catch(err)
//     {
//         throw err;
//     }

// };
export const endFund = async () => {
    try{
        // const contract=await tezos.wallet.at("KT1F8k5puUD92QFMovr81Vn6AeZiiL6Eofq6");
        const contract=await tezos.wallet.at("KT1AhuP4fJKvys4JFSHh97K5oiK6uNmXcvzf");
        const op =await contract.methods.close().send();
        await op.confirmation(1);
        // 1 represents that it waits for atleast 1 block after the operation is confirmed
    }
    catch(err)
    {
        throw err;
    }

};
