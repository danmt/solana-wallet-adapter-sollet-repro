import { SolletWalletAdapter } from "@solana/wallet-adapter-sollet";

const button = document.getElementById("connect-sollet");
const wallet = new SolletWalletAdapter();

wallet.on("ready", () => console.log("[sollet] wallet ready"));
wallet.on("connect", () => console.log("[sollet] Connected"));
wallet.on("disconnect", () => console.log("[sollet] Disconnected"));
wallet.on("error", () => console.log("[sollet] error"));

button.addEventListener("click", () => {
  wallet.connect();
});
