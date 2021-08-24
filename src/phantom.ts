import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";

const button = document.getElementById("connect-phantom");
const wallet = new PhantomWalletAdapter();

wallet.on("ready", () => console.log("[phantom] wallet ready"));
wallet.on("connect", () => console.log("[phantom] wallet connected"));
wallet.on("disconnect", () => console.log("[phantom] wallet disconnected"));
wallet.on("error", () => console.log("[phantom] wallet error"));

button.addEventListener("click", () => {
  wallet.connect();
});
