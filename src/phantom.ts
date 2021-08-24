import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";

const connectPhantomButton = document.getElementById(
  "connect-phantom"
) as HTMLButtonElement;
const phantomWallet = new PhantomWalletAdapter();

phantomWallet.on("ready", () => console.log("[phantom] wallet ready"));
phantomWallet.on("connect", () => console.log("[phantom] wallet connected"));

connectPhantomButton.addEventListener("click", () => {
  console.log(phantomWallet);

  phantomWallet.connect();
});
