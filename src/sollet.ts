import { SolletWalletAdapter } from "@solana/wallet-adapter-sollet";

const connectSolletButton = document.getElementById(
  "connect-sollet"
) as HTMLButtonElement;
const solletWallet = new SolletWalletAdapter();

solletWallet.on("ready", () => console.log("[sollet] wallet ready"));
solletWallet.on("connect", () => console.log("[sollet] wallet connected"));

connectSolletButton.addEventListener("click", () => {
  console.log(solletWallet);

  solletWallet.connect();
});
